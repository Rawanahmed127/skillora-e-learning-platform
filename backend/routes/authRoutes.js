const express = require("express");
const bcrypt = require("bcrypt");
const db = require("../config/db");

const {
    sendSignupOTPEmail,
    sendPasswordResetOTPEmail
} = require("../emailService");

const router = express.Router();


// =====================================================
// GENERATE OTP
// =====================================================

function generateOTP() {

    return Math.floor(
        100000 + Math.random() * 900000
    ).toString();

}


// =====================================================
// SIGN UP
// =====================================================

router.post("/signup", async function (req, res) {

    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;


    if (!name || !email || !password) {

        return res.status(400).json({
            success: false,
            message: "Please fill in all fields."
        });

    }


    try {

        // ---------------------------------------------
        // CHECK IF EMAIL ALREADY EXISTS
        // ---------------------------------------------

        db.query(
            "SELECT * FROM users WHERE email = ?",
            [email],
            async function (error, results) {

                if (error) {

                    console.log(error);

                    return res.status(500).json({
                        success: false,
                        message: "Database error."
                    });

                }


                // -----------------------------------------
                // EMAIL ALREADY EXISTS
                // -----------------------------------------

                if (results.length > 0) {

                    const existingUser = results[0];


                    // Already verified
                    if (existingUser.is_verified) {

                        return res.status(400).json({
                            success: false,
                            message: "This email is already registered."
                        });

                    }


                    // -------------------------------------
                    // USER EXISTS BUT IS NOT VERIFIED
                    // -------------------------------------

                    const hashedPassword = await bcrypt.hash(
                        password,
                        10
                    );


                    db.query(
                        `UPDATE users
                         SET name = ?, password = ?
                         WHERE id = ?`,
                        [
                            name,
                            hashedPassword,
                            existingUser.id
                        ],
                        function (error) {

                            if (error) {

                                console.log(error);

                                return res.status(500).json({
                                    success: false,
                                    message: "Could not update account."
                                });

                            }


                            // Delete old OTP
                            db.query(
                                "DELETE FROM signup_otps WHERE user_id = ?",
                                [existingUser.id],
                                function (error) {

                                    if (error) {

                                        console.log(error);

                                        return res.status(500).json({
                                            success: false,
                                            message: "Could not create verification code."
                                        });

                                    }


                                    const otp = generateOTP();

                                    const expiresAt = new Date(
                                        Date.now() + 10 * 60 * 1000
                                    );


                                    // Save new OTP
                                    db.query(
                                        `INSERT INTO signup_otps
                                        (user_id, otp, expires_at)
                                        VALUES (?, ?, ?)`,
                                        [
                                            existingUser.id,
                                            otp,
                                            expiresAt
                                        ],
                                        async function (error) {

                                            if (error) {

                                                console.log(error);

                                                return res.status(500).json({
                                                    success: false,
                                                    message: "Could not save verification code."
                                                });

                                            }


                                            try {

                                                await sendSignupOTPEmail(
                                                    email,
                                                    otp
                                                );


                                                return res.status(200).json({

                                                    success: true,

                                                    message:
                                                        "Verification code sent to your email.",

                                                    userId:
                                                        existingUser.id

                                                });


                                            } catch (emailError) {

                                                console.log(emailError);

                                                return res.status(500).json({

                                                    success: false,

                                                    message:
                                                        "Could not send verification email."

                                                });

                                            }

                                        }
                                    );

                                }
                            );

                        }
                    );

                    return;
                }


                // -----------------------------------------
                // NEW USER
                // -----------------------------------------

                const hashedPassword = await bcrypt.hash(
                    password,
                    10
                );


                db.query(
                    `INSERT INTO users
                    (name, email, password, is_verified)
                    VALUES (?, ?, ?, FALSE)`,
                    [
                        name,
                        email,
                        hashedPassword
                    ],
                    async function (error, result) {

                        if (error) {

                            console.log(error);

                            return res.status(500).json({
                                success: false,
                                message: "Could not create account."
                            });

                        }


                        const userId = result.insertId;


                        // Generate OTP
                        const otp = generateOTP();


                        // OTP expires after 10 minutes
                        const expiresAt = new Date(
                            Date.now() + 10 * 60 * 1000
                        );


                        // -------------------------------------
                        // SAVE OTP
                        // -------------------------------------

                        db.query(
                            `INSERT INTO signup_otps
                            (user_id, otp, expires_at)
                            VALUES (?, ?, ?)`,
                            [
                                userId,
                                otp,
                                expiresAt
                            ],
                            async function (error) {

                                if (error) {

                                    console.log(error);

                                    return res.status(500).json({
                                        success: false,
                                        message: "Could not create verification code."
                                    });

                                }


                                try {

                                    // ---------------------------------
                                    // SEND OTP TO EMAIL
                                    // ---------------------------------

                                    await sendSignupOTPEmail(
                                        email,
                                        otp
                                    );


                                    return res.status(201).json({

                                        success: true,

                                        message:
                                            "Account created. Verification code sent to your email.",

                                        userId:
                                            userId

                                    });


                                } catch (emailError) {

                                    console.log(emailError);

                                    return res.status(500).json({

                                        success: false,

                                        message:
                                            "Account created, but verification email could not be sent."

                                    });

                                }

                            }
                        );

                    }
                );

            }
        );

    } catch (error) {

        console.log(error);

        return res.status(500).json({
            success: false,
            message: "Server error."
        });

    }

});


// =====================================================
// VERIFY SIGNUP OTP
// =====================================================

router.post("/verify-signup-otp", function (req, res) {

    const userId = req.body.userId;
    const otp = req.body.otp;


    if (!userId || !otp) {

        return res.status(400).json({
            success: false,
            message: "Please enter the verification code."
        });

    }


    db.query(
        `SELECT * FROM signup_otps
         WHERE user_id = ?
         AND otp = ?
         AND expires_at > NOW()
         ORDER BY id DESC
         LIMIT 1`,
        [
            userId,
            otp
        ],
        function (error, results) {

            if (error) {

                console.log(error);

                return res.status(500).json({
                    success: false,
                    message: "Database error."
                });

            }


            if (results.length === 0) {

                return res.status(400).json({
                    success: false,
                    message: "Invalid or expired verification code."
                });

            }


            // ---------------------------------------------
            // VERIFY USER EMAIL
            // ---------------------------------------------

            db.query(
                `UPDATE users
                 SET is_verified = TRUE
                 WHERE id = ?`,
                [userId],
                function (error) {

                    if (error) {

                        console.log(error);

                        return res.status(500).json({
                            success: false,
                            message: "Could not verify email."
                        });

                    }


                    // -----------------------------------------
                    // DELETE USED OTP
                    // -----------------------------------------

                    db.query(
                        "DELETE FROM signup_otps WHERE user_id = ?",
                        [userId],
                        function () {

                            return res.json({

                                success: true,

                                message:
                                    "Email verified successfully!"

                            });

                        }
                    );

                }
            );

        }
    );

});


// =====================================================
// RESEND SIGNUP OTP
// =====================================================

router.post("/resend-signup-otp", function (req, res) {

    const userId = req.body.userId;


    if (!userId) {

        return res.status(400).json({
            success: false,
            message: "User ID is required."
        });

    }


    db.query(
        "SELECT * FROM users WHERE id = ?",
        [userId],
        async function (error, results) {

            if (error) {

                console.log(error);

                return res.status(500).json({
                    success: false,
                    message: "Database error."
                });

            }


            if (results.length === 0) {

                return res.status(404).json({
                    success: false,
                    message: "User not found."
                });

            }


            const user = results[0];


            if (user.is_verified) {

                return res.status(400).json({
                    success: false,
                    message: "Email is already verified."
                });

            }


            const otp = generateOTP();


            const expiresAt = new Date(
                Date.now() + 10 * 60 * 1000
            );


            // ---------------------------------------------
            // DELETE OLD OTP
            // ---------------------------------------------

            db.query(
                "DELETE FROM signup_otps WHERE user_id = ?",
                [userId],
                function (error) {

                    if (error) {

                        console.log(error);

                        return res.status(500).json({
                            success: false,
                            message: "Could not resend code."
                        });

                    }


                    // -----------------------------------------
                    // SAVE NEW OTP
                    // -----------------------------------------

                    db.query(
                        `INSERT INTO signup_otps
                        (user_id, otp, expires_at)
                        VALUES (?, ?, ?)`,
                        [
                            userId,
                            otp,
                            expiresAt
                        ],
                        async function (error) {

                            if (error) {

                                console.log(error);

                                return res.status(500).json({
                                    success: false,
                                    message: "Could not save new code."
                                });

                            }


                            try {

                                // ---------------------------------
                                // SEND NEW OTP
                                // ---------------------------------

                                await sendSignupOTPEmail(
                                    user.email,
                                    otp
                                );


                                return res.json({

                                    success: true,

                                    message:
                                        "A new verification code has been sent."

                                });


                            } catch (emailError) {

                                console.log(emailError);

                                return res.status(500).json({

                                    success: false,

                                    message:
                                        "Could not send verification email."

                                });

                            }

                        }
                    );

                }
            );

        }
    );

});


// =====================================================
// LOGIN
// =====================================================

router.post("/login", function (req, res) {

    const email = req.body.email;
    const password = req.body.password;


    if (!email || !password) {

        return res.status(400).json({
            success: false,
            message: "Please enter email and password."
        });

    }


    db.query(
        "SELECT * FROM users WHERE email = ?",
        [email],
        async function (error, results) {

            if (error) {

                console.log(error);

                return res.status(500).json({
                    success: false,
                    message: "Database error."
                });

            }


            if (results.length === 0) {

                return res.status(401).json({
                    success: false,
                    message: "Invalid email or password."
                });

            }


            const user = results[0];


            // ---------------------------------------------
            // CHECK PASSWORD FIRST
            // ---------------------------------------------

            const passwordMatch = await bcrypt.compare(
                password,
                user.password
            );


            if (!passwordMatch) {

                return res.status(401).json({
                    success: false,
                    message: "Invalid email or password."
                });

            }


            // ---------------------------------------------
            // CHECK EMAIL VERIFICATION
            // ---------------------------------------------

            if (!user.is_verified) {

                return res.status(403).json({

                    success: false,

                    message:
                        "Please verify your email before logging in.",

                    needsVerification: true,

                    userId:
                        user.id

                });

            }


            return res.json({

                success: true,

                message:
                    "Login successful!",

                user: {

                    id:
                        user.id,

                    name:
                        user.name,

                    email:
                        user.email

                }

            });

        }
    );

});


// =====================================================
// FORGOT PASSWORD
// =====================================================

router.post("/forgot-password", function (req, res) {

    const email = req.body.email;


    if (!email) {

        return res.status(400).json({
            success: false,
            message: "Please enter your email."
        });

    }


    db.query(
        "SELECT * FROM users WHERE email = ?",
        [email],
        async function (error, results) {

            if (error) {

                console.log(error);

                return res.status(500).json({
                    success: false,
                    message: "Database error."
                });

            }


            if (results.length === 0) {

                return res.status(404).json({
                    success: false,
                    message: "No account found with this email."
                });

            }


            const user = results[0];


            const otp = generateOTP();


            const expiresAt = new Date(
                Date.now() + 10 * 60 * 1000
            );


            // ---------------------------------------------
            // DELETE OLD PASSWORD OTP
            // ---------------------------------------------

            db.query(
                "DELETE FROM password_otps WHERE user_id = ?",
                [user.id],
                function (error) {

                    if (error) {

                        console.log(error);

                        return res.status(500).json({
                            success: false,
                            message: "Could not create reset code."
                        });

                    }


                    // -----------------------------------------
                    // SAVE NEW PASSWORD OTP
                    // -----------------------------------------

                    db.query(
                        `INSERT INTO password_otps
                        (user_id, otp, expires_at)
                        VALUES (?, ?, ?)`,
                        [
                            user.id,
                            otp,
                            expiresAt
                        ],
                        async function (error) {

                            if (error) {

                                console.log(error);

                                return res.status(500).json({
                                    success: false,
                                    message: "Could not save reset code."
                                });

                            }


                            try {

                                await sendPasswordResetOTPEmail(
                                    user.email,
                                    otp
                                );


                                return res.json({

                                    success: true,

                                    message:
                                        "Password reset code sent to your email.",

                                    userId:
                                        user.id

                                });


                            } catch (emailError) {

                                console.log(emailError);

                                return res.status(500).json({

                                    success: false,

                                    message:
                                        "Could not send reset code."

                                });

                            }

                        }
                    );

                }
            );

        }
    );

});


// =====================================================
// VERIFY FORGOT PASSWORD OTP
// =====================================================

router.post("/verify-forgot-otp", function (req, res) {

    const userId = req.body.userId;
    const otp = req.body.otp;


    if (!userId || !otp) {

        return res.status(400).json({
            success: false,
            message: "Please enter the verification code."
        });

    }


    db.query(
        `SELECT * FROM password_otps
         WHERE user_id = ?
         AND otp = ?
         AND expires_at > NOW()
         ORDER BY id DESC
         LIMIT 1`,
        [
            userId,
            otp
        ],
        function (error, results) {

            if (error) {

                console.log(error);

                return res.status(500).json({
                    success: false,
                    message: "Database error."
                });

            }


            if (results.length === 0) {

                return res.status(400).json({
                    success: false,
                    message: "Invalid or expired code."
                });

            }


            return res.json({

                success: true,

                message:
                    "Code verified successfully."

            });

        }
    );

});


// =====================================================
// RESET PASSWORD
// =====================================================

router.post("/reset-password", async function (req, res) {

    const userId = req.body.userId;
    const otp = req.body.otp;
    const newPassword = req.body.newPassword;


    if (!userId || !otp || !newPassword) {

        return res.status(400).json({
            success: false,
            message: "Missing required information."
        });

    }


    db.query(
        `SELECT * FROM password_otps
         WHERE user_id = ?
         AND otp = ?
         AND expires_at > NOW()
         ORDER BY id DESC
         LIMIT 1`,
        [
            userId,
            otp
        ],
        async function (error, results) {

            if (error) {

                console.log(error);

                return res.status(500).json({
                    success: false,
                    message: "Database error."
                });

            }


            if (results.length === 0) {

                return res.status(400).json({
                    success: false,
                    message: "Invalid or expired code."
                });

            }


            try {

                const hashedPassword = await bcrypt.hash(
                    newPassword,
                    10
                );


                db.query(
                    `UPDATE users
                     SET password = ?
                     WHERE id = ?`,
                    [
                        hashedPassword,
                        userId
                    ],
                    function (error) {

                        if (error) {

                            console.log(error);

                            return res.status(500).json({
                                success: false,
                                message: "Could not reset password."
                            });

                        }


                        // -----------------------------------------
                        // DELETE USED OTP
                        // -----------------------------------------

                        db.query(
                            "DELETE FROM password_otps WHERE user_id = ?",
                            [userId],
                            function () {

                                return res.json({

                                    success: true,

                                    message:
                                        "Password reset successfully!"

                                });

                            }
                        );

                    }
                );

            } catch (error) {

                console.log(error);

                return res.status(500).json({
                    success: false,
                    message: "Server error."
                });

            }

        }
    );

});


// =====================================================
// EXPORT ROUTER
// =====================================================

module.exports = router;