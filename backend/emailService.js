const nodemailer = require("nodemailer");


// =====================================================
// EMAIL TRANSPORTER
// =====================================================

const transporter = nodemailer.createTransport({

    host: "smtp.gmail.com",

    port: 587,

    secure: false,

    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    },

    tls: {
        rejectUnauthorized: false
    }

});


// =====================================================
// CHECK EMAIL CONNECTION
// =====================================================

transporter.verify(function (error, success) {

    if (error) {

        console.log("EMAIL CONNECTION FAILED!");
        console.log(error.message);

    } else {

        console.log("EMAIL CONNECTION SUCCESSFUL!");

    }

});


// =====================================================
// SEND SIGNUP VERIFICATION OTP
// =====================================================

async function sendSignupOTPEmail(email, otp) {

    const mailOptions = {

        from: process.env.EMAIL_USER,

        to: email,

        subject: "Skillora - Verify Your Email",

        html: `
            <div style="
                font-family: Arial, sans-serif;
                max-width: 600px;
                margin: auto;
                padding: 30px;
                background-color: #f7fbff;
                border-radius: 12px;
            ">

                <h2 style="color: #1681d6;">
                    Skillora
                </h2>

                <p>
                    Welcome to Skillora!
                </p>

                <p>
                    Thank you for creating your account.
                </p>

                <p>
                    Please use the verification code below
                    to verify your email address:
                </p>

                <h1 style="
                    letter-spacing: 8px;
                    color: #1681d6;
                    text-align: center;
                ">
                    ${otp}
                </h1>

                <p>
                    This code will expire in 10 minutes.
                </p>

                <p>
                    If you did not create a Skillora account,
                    you can safely ignore this email.
                </p>

            </div>
        `
    };

    await transporter.sendMail(mailOptions);
}


// =====================================================
// SEND PASSWORD RESET OTP
// =====================================================

async function sendPasswordResetOTPEmail(email, otp) {

    const mailOptions = {

        from: process.env.EMAIL_USER,

        to: email,

        subject: "Skillora - Password Reset OTP",

        html: `
            <div style="
                font-family: Arial, sans-serif;
                max-width: 600px;
                margin: auto;
                padding: 30px;
                background-color: #f7fbff;
                border-radius: 12px;
            ">

                <h2 style="color: #1681d6;">
                    Skillora
                </h2>

                <p>
                    You requested to reset your Skillora password.
                </p>

                <p>
                    Your verification code is:
                </p>

                <h1 style="
                    letter-spacing: 8px;
                    color: #1681d6;
                    text-align: center;
                ">
                    ${otp}
                </h1>

                <p>
                    This code will expire in 10 minutes.
                </p>

                <p>
                    If you did not request a password reset,
                    you can safely ignore this email.
                </p>

            </div>
        `
    };

    await transporter.sendMail(mailOptions);
}


// =====================================================
// EXPORT
// =====================================================

module.exports = {

    sendSignupOTPEmail,

    sendPasswordResetOTPEmail

};