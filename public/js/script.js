/* =========================================================
   SKILLORA
   MAIN SCRIPT
========================================================= */


/* =========================================================
   1. ELEMENTS
========================================================= */

/* ---------- NAVBAR ---------- */

const navSearch =
    document.querySelector(".nav-right .search input");

const profileNavBtn =
    document.getElementById("profileNavBtn");


/* ---------- HERO ---------- */

const heroSearch =
    document.querySelector(".hero-search input");

const heroSearchButton =
    document.querySelector(".search-btn");


/* ---------- COURSES ---------- */

const coursesSection =
    document.getElementById("courses-section");

const courseCards =
    document.querySelectorAll(".course-card");

const filterButtons =
    document.querySelectorAll(".filter-btn");

const courseCount =
    document.getElementById("courseCount");

const noResults =
    document.getElementById("noResults");

const loadMore =
    document.getElementById("loadMore");


/* ---------- LOGIN ---------- */

const loginModal =
    document.getElementById("loginModal");

const openLogin =
    document.getElementById("open-login");

const closeLogin =
    document.getElementById("closeLogin");

const loginForm =
    document.getElementById("loginForm");

const loginEmail =
    document.getElementById("loginEmail");

const loginPassword =
    document.getElementById("loginPassword");

const loginError =
    document.getElementById("loginError");

const showPassword =
    document.getElementById("showPassword");


/* ---------- SIGN UP ---------- */

const signupModal =
    document.getElementById("signupModal");

const openSignup =
    document.getElementById("open-signup");

const closeSignup =
    document.getElementById("closeSignup");

const signupForm =
    document.getElementById("signupForm");

const signupName =
    document.getElementById("signupName");

const signupEmail =
    document.getElementById("signupEmail");

const signupPassword =
    document.getElementById("signupPassword");

const signupConfirmPassword =
    document.getElementById("signupConfirmPassword");

const signupTerms =
    document.getElementById("signupTerms");

const signupMessage =
    document.getElementById("signupMessage");


/* ---------- SIGN UP OTP ---------- */

const signupStep =
    document.getElementById("signupStep");

const otpStep =
    document.getElementById("otpStep");

const otpEmail =
    document.getElementById("otpEmail");

const otpMessage =
    document.getElementById("otpMessage");

const verifyOtp =
    document.getElementById("verifyOtp");

const resendOtp =
    document.getElementById("resendOtp");

const backToSignup =
    document.getElementById("backToSignup");

const otpInputs =
    document.querySelectorAll(".otp-input");


/* ---------- SIGN UP PASSWORD ---------- */

const showSignupPassword =
    document.getElementById("showSignupPassword");

const showConfirmPassword =
    document.getElementById("showConfirmPassword");


/* ---------- LOGIN / SIGN UP ---------- */

const goToSignup =
    document.getElementById("goToSignup");

const goToLogin =
    document.getElementById("goToLogin");


/* ---------- FORGOT PASSWORD ---------- */

const forgotModal =
    document.getElementById("forgotModal");

const forgotPassword =
    document.getElementById("forgotPassword");

const closeForgot =
    document.getElementById("closeForgot");


/* ---------- FORGOT STEPS ---------- */

const forgotEmailStep =
    document.getElementById("forgotEmailStep");

const forgotOtpStep =
    document.getElementById("forgotOtpStep");

const newPasswordStep =
    document.getElementById("newPasswordStep");


/* ---------- FORGOT EMAIL ---------- */

const forgotEmailForm =
    document.getElementById("forgotEmailForm");

const forgotEmail =
    document.getElementById("forgotEmail");

const forgotEmailMessage =
    document.getElementById("forgotEmailMessage");

const backToLogin =
    document.getElementById("backToLogin");


/* ---------- FORGOT OTP ---------- */

const forgotOtpEmail =
    document.getElementById("forgotOtpEmail");

const forgotOtpMessage =
    document.getElementById("forgotOtpMessage");

const forgotOtpInputs =
    document.querySelectorAll(".forgot-otp-input");

const verifyForgotOtp =
    document.getElementById("verifyForgotOtp");

const resendForgotOtp =
    document.getElementById("resendForgotOtp");

const backToForgotEmail =
    document.getElementById("backToForgotEmail");


/* ---------- RESET PASSWORD ---------- */

const resetPasswordForm =
    document.getElementById("resetPasswordForm");

const newPassword =
    document.getElementById("newPassword");

const confirmNewPassword =
    document.getElementById("confirmNewPassword");

const resetPasswordMessage =
    document.getElementById("resetPasswordMessage");

const showNewPassword =
    document.getElementById("showNewPassword");

const showConfirmNewPassword =
    document.getElementById("showConfirmNewPassword");


/* ---------- DASHBOARD ---------- */

const dashboardOverlay =
    document.getElementById("dashboardOverlay");

const dashboardClose =
    document.getElementById("dashboardClose");

const dashboardUserName =
    document.getElementById("dashboardUserName");

const dashboardUserEmail =
    document.getElementById("dashboardUserEmail");

const dashboardCourses =
    document.getElementById("dashboardCourses");

const dashboardWishlist =
    document.getElementById("dashboardWishlist");

const dashboardProfile =
    document.getElementById("dashboardProfile");

const dashboardLogout =
    document.getElementById("dashboardLogout");


/* ---------- MY COURSES ---------- */

const myCoursesOverlay =
    document.getElementById("myCoursesOverlay");

const myCoursesClose =
    document.getElementById("myCoursesClose");

const myCoursesList =
    document.getElementById("myCoursesList");

const myCoursesEmpty =
    document.getElementById("myCoursesEmpty");

const browseCoursesBtn =
    document.getElementById("browseCoursesBtn");


/* ---------- PAYMENT DETAILS POPUP ---------- */

const paymentOverlay =
    document.getElementById("paymentOverlay");

const paymentClose =
    document.getElementById("paymentClose");

const paymentMessage =
    document.getElementById("paymentMessage");

const paymentOkBtn =
    document.getElementById("paymentOkBtn");


/* ---------- MY PROFILE ---------- */

const myProfileOverlay =
    document.getElementById("myProfileOverlay");

const myProfileClose =
    document.getElementById("myProfileClose");

const profileForm =
    document.getElementById("profileForm");

const profileName =
    document.getElementById("profileName");

const profileEmail =
    document.getElementById("profileEmail");

const profileDisplayName =
    document.getElementById("profileDisplayName");

const profileDisplayEmail =
    document.getElementById("profileDisplayEmail");

const profileMessage =
    document.getElementById("profileMessage");


/* =========================================================
   2. VARIABLES
========================================================= */

let currentCategory = "all";

let visibleCourses = 4;

let signupOTP = "";

let forgotOTP = "";

let currentForgotEmail = "";

const API_URL = "http://localhost:5000/api/auth";
 
let signupUserId = null;
 
let forgotUserId = null;
 
let forgotOtpCode = "";
 

/* =========================================================
   3. GENERAL FUNCTIONS
========================================================= */

function normalizeText(text) {

    return String(text || "")
        .toLowerCase()
        .trim()
        .replace(/\s+/g, "")
        .replace(/\//g, "");

}


function showMessage(element, message, type) {

    if (!element) {
        return;
    }

    element.textContent = message;

    element.classList.remove(
        "show",
        "success",
        "error"
    );

    if (message !== "") {
        element.classList.add("show");
    }

    if (type) {
        element.classList.add(type);
    }

}


function clearMessage(element) {

    if (!element) {
        return;
    }

    element.textContent = "";

    element.classList.remove(
        "show",
        "success",
        "error"
    );

}


function openModal(modal) {

    if (!modal) {
        return;
    }

    modal.classList.add("active");

    document.body.classList.add("modal-open");

}


function closeModal(modal) {

    if (!modal) {
        return;
    }

    modal.classList.remove("active");

    document.body.classList.remove("modal-open");

}


function getSavedUser() {

    const userData =
        localStorage.getItem("skilloraUser");

    if (!userData) {
        return null;
    }

    try {

        return JSON.parse(userData);

    } catch (error) {

        return null;

    }

}


function saveUser(user) {

    localStorage.setItem(
        "skilloraUser",
        JSON.stringify(user)
    );

}


function escapeHTML(text) {

    const div =
        document.createElement("div");

    div.textContent =
        text == null ? "" : String(text);

    return div.innerHTML;

}

/* ---------- HELPER: CALL BACKEND ---------- */
 
async function apiPost(path, data) {
 
    const response = await fetch(
        API_URL + path,
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        }
    );
 
    const result = await response.json();
 
    return result;
 
}


/* =========================================================
   4. USER DASHBOARD
========================================================= */

function updateNavbarUser() {

    const loggedIn =
        localStorage.getItem(
            "skilloraLoggedIn"
        ) === "true";


    if (
        !openLogin ||
        !openSignup ||
        !profileNavBtn
    ) {
        return;
    }


    if (loggedIn) {

        openLogin.style.display =
            "none";

        openSignup.style.display =
            "none";

        profileNavBtn.style.display =
            "flex";

    } else {

        openLogin.style.display =
            "";

        openSignup.style.display =
            "inline-flex";

        profileNavBtn.style.display =
            "none";

    }

}


function updateDashboardUser() {

    const user =
        getSavedUser();

    if (!user) {
        return;
    }


    if (dashboardUserName) {

        dashboardUserName.textContent =
            user.name || "User";

    }


    if (dashboardUserEmail) {

        dashboardUserEmail.textContent =
            user.email || "";

    }

}


function openDashboard() {

    updateDashboardUser();

    if (dashboardOverlay) {

        dashboardOverlay.classList.add(
            "show"
        );

    }

    document.body.style.overflow =
        "hidden";

}


function closeDashboard() {

    if (dashboardOverlay) {

        dashboardOverlay.classList.remove(
            "show"
        );

    }

    document.body.style.overflow =
        "";

}


if (profileNavBtn) {

    profileNavBtn.addEventListener(
        "click",
        function () {

            const loggedIn =
                localStorage.getItem(
                    "skilloraLoggedIn"
                ) === "true";


            if (loggedIn) {

                openDashboard();

            } else {

                closeModal(loginModal);
                closeModal(forgotModal);

                showSignupStep();

                openModal(signupModal);

            }

        }
    );

}


if (dashboardClose) {

    dashboardClose.addEventListener(
        "click",
        function () {

            closeDashboard();

        }
    );

}


if (dashboardOverlay) {

    dashboardOverlay.addEventListener(
        "click",
        function (event) {

            if (
                event.target ===
                dashboardOverlay
            ) {

                closeDashboard();

            }

        }
    );

}


/* =========================================================
   5. MY COURSES
========================================================= */

function getEnrolledCourses() {

    const savedCourses =
        localStorage.getItem(
            "skilloraEnrolledCourses"
        );

    if (!savedCourses) {
        return [];
    }

    try {

        const courses =
            JSON.parse(savedCourses);

        if (Array.isArray(courses)) {
            return courses;
        }

        return [];

    } catch (error) {

        return [];

    }

}


function saveEnrolledCourses(courses) {

    localStorage.setItem(
        "skilloraEnrolledCourses",
        JSON.stringify(courses)
    );

}


function createCourseKey(course) {

    if (!course) {
        return "";
    }


    if (course.title) {

        return normalizeText(
            course.title
        );

    }


    if (course.id) {

        return String(
            course.id
        );

    }


    return "";

}


function getSavedCourseKey(course) {

    if (!course) {
        return "";
    }


    if (course.courseKey) {

        return String(
            course.courseKey
        );

    }


    return createCourseKey(
        course
    );

}


function fixEnrolledCourseImages() {

    const courses =
        getEnrolledCourses();

    let changed = false;


    for (
        let i = 0;
        i < courses.length;
        i++
    ) {

        if (
            courses[i].image &&
            courses[i].image.startsWith("../")
        ) {

            courses[i].image =
                courses[i].image.replace(
                    "../",
                    ""
                );

            changed = true;

        }


        if (!courses[i].courseKey) {

            courses[i].courseKey =
                createCourseKey(
                    courses[i]
                );

            changed = true;

        }

    }


    if (changed) {

        saveEnrolledCourses(
            courses
        );

    }

}


function addCourseToMyCourses(course) {

    if (!course) {
        return false;
    }


    const courseKey =
        createCourseKey(course);


    if (!courseKey) {
        return false;
    }


    let enrolledCourses =
        getEnrolledCourses();


    for (
        let i = 0;
        i < enrolledCourses.length;
        i++
    ) {

        const savedKey =
            getSavedCourseKey(
                enrolledCourses[i]
            );


        if (
            savedKey ===
            courseKey
        ) {

            return false;

        }

    }


    enrolledCourses.push({

        id:
            course.id || courseKey,

        courseKey:
            courseKey,

        title:
            course.title || "Course",

        category:
            course.category ||
            "Course",

        image:
            course.image ||
            "",

        progress:
            0,

        status:
            "Under Payment"

    });


    saveEnrolledCourses(
        enrolledCourses
    );


    return true;

}


function removeCourseFromMyCourses(
    courseKey
) {

    if (!courseKey) {
        return;
    }


    const enrolledCourses =
        getEnrolledCourses();


    const newCourses = [];


    for (
        let i = 0;
        i < enrolledCourses.length;
        i++
    ) {

        const savedKey =
            getSavedCourseKey(
                enrolledCourses[i]
            );


        if (
            savedKey !==
            String(courseKey)
        ) {

            newCourses.push(
                enrolledCourses[i]
            );

        }

    }


    saveEnrolledCourses(
        newCourses
    );


    displayMyCourses();

}


function displayMyCourses() {

    if (
        !myCoursesList ||
        !myCoursesEmpty
    ) {
        return;
    }


    const enrolledCourses =
        getEnrolledCourses();


    myCoursesList.innerHTML =
        "";


    if (
        enrolledCourses.length === 0
    ) {

        myCoursesList.style.display =
            "none";

        myCoursesEmpty.style.display =
            "flex";

        return;

    }


    myCoursesList.style.display =
        "flex";

    myCoursesEmpty.style.display =
        "none";


    for (
        let i = 0;
        i < enrolledCourses.length;
        i++
    ) {

        const course =
            enrolledCourses[i];


        const courseItem =
            document.createElement("div");


        courseItem.className =
            "my-course-item";


        const progress =
            Number(course.progress) || 0;


        const status =
            course.status ||
            "Under Payment";


        let imagePath =
            course.image || "";


        if (
            imagePath.startsWith("../")
        ) {

            imagePath =
                imagePath.replace(
                    "../",
                    ""
                );

        }


        const courseKey =
            getSavedCourseKey(
                course
            );


        courseItem.innerHTML = `

            <div class="my-course-image">

                <img
                    src="${escapeHTML(imagePath)}"
                    alt="${escapeHTML(
                        course.title || "Course"
                    )}"
                    onerror="this.style.display='none';"
                >

            </div>

            <div class="my-course-info">

                <h3>
                    ${escapeHTML(
                        course.title || "Course"
                    )}
                </h3>

                <span class="my-course-category">
                    ${escapeHTML(
                        course.category || "Course"
                    )}
                </span>

                <span class="my-course-status">
                    ${escapeHTML(status)}
                </span>

                <div class="my-course-progress">

                    <div
                        class="my-course-progress-bar"
                        style="width: ${progress}%;">
                    </div>

                </div>

                <span class="my-course-progress-text">
                    ${progress}% completed
                </span>

            </div>

            <div class="my-course-actions">

                <button
                    type="button"
                    class="my-course-continue"
                    data-course-key="${escapeHTML(courseKey)}"
                    data-course-title="${escapeHTML(
                        course.title || "your course"
                    )}">

                    Continue

                </button>

                <button
                    type="button"
                    class="my-course-remove"
                    data-course-key="${escapeHTML(courseKey)}"
                    title="Remove course"
                    aria-label="Remove course">

                    <i class="fa-solid fa-xmark"></i>

                </button>

            </div>

        `;


        myCoursesList.appendChild(
            courseItem
        );

    }


    setupMyCourseButtons();

}


function setupMyCourseButtons() {

    const continueButtons =
        document.querySelectorAll(
            ".my-course-continue"
        );


    for (
        let i = 0;
        i < continueButtons.length;
        i++
    ) {

        continueButtons[i].addEventListener(
            "click",
            function (event) {

                event.preventDefault();
                event.stopPropagation();


                const courseTitle =
                    this.getAttribute(
                        "data-course-title"
                    ) ||
                    "your course";


                showCoursePaymentMessage(
                    courseTitle
                );

            }
        );

    }


    const removeButtons =
        document.querySelectorAll(
            ".my-course-remove"
        );


    for (
        let i = 0;
        i < removeButtons.length;
        i++
    ) {

        removeButtons[i].addEventListener(
            "click",
            function (event) {

                event.preventDefault();
                event.stopPropagation();


                const courseKey =
                    this.getAttribute(
                        "data-course-key"
                    );


                if (!courseKey) {
                    return;
                }


                removeCourseFromMyCourses(
                    courseKey
                );

            }
        );

    }

}


/* =========================================================
   PAYMENT POPUP
========================================================= */

function showCoursePaymentMessage(
    courseTitle
) {

    if (
        !paymentOverlay ||
        !paymentMessage
    ) {
        return;
    }


    paymentMessage.innerHTML =
        "Payment details for <strong>" +
        escapeHTML(
            courseTitle || "your course"
        ) +
        "</strong> have been sent to your email.";


    paymentOverlay.classList.add(
        "show"
    );


    document.body.style.overflow =
        "hidden";

}


function closePaymentPopup() {

    if (paymentOverlay) {

        paymentOverlay.classList.remove(
            "show"
        );

    }


    if (
        myCoursesOverlay &&
        myCoursesOverlay.classList.contains(
            "show"
        )
    ) {

        document.body.style.overflow =
            "hidden";

    } else {

        document.body.style.overflow =
            "";

    }

}


if (paymentClose) {

    paymentClose.addEventListener(
        "click",
        function () {

            closePaymentPopup();

        }
    );

}


if (paymentOkBtn) {

    paymentOkBtn.addEventListener(
        "click",
        function () {

            closePaymentPopup();

        }
    );

}


if (paymentOverlay) {

    paymentOverlay.addEventListener(
        "click",
        function (event) {

            if (
                event.target ===
                paymentOverlay
            ) {

                closePaymentPopup();

            }

        }
    );

}


function openMyCourses() {

    fixEnrolledCourseImages();

    displayMyCourses();


    if (myCoursesOverlay) {

        myCoursesOverlay.classList.add(
            "show"
        );

    }


    document.body.style.overflow =
        "hidden";

}


function closeMyCourses() {

    closePaymentPopup();


    if (myCoursesOverlay) {

        myCoursesOverlay.classList.remove(
            "show"
        );

    }


    document.body.style.overflow =
        "";

}


if (myCoursesClose) {

    myCoursesClose.addEventListener(
        "click",
        function (event) {

            event.preventDefault();
            event.stopPropagation();

            closeMyCourses();

        }
    );

}


if (myCoursesOverlay) {

    myCoursesOverlay.addEventListener(
        "click",
        function (event) {

            if (
                event.target ===
                myCoursesOverlay
            ) {

                closeMyCourses();

            }

        }
    );

}


if (browseCoursesBtn) {

    browseCoursesBtn.addEventListener(
        "click",
        function () {

            closeMyCourses();


            if (coursesSection) {

                coursesSection.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            }

        }
    );

}


if (dashboardCourses) {

    dashboardCourses.addEventListener(
        "click",
        function () {

            closeDashboard();

            openMyCourses();

        }
    );

}


/* =========================================================
   6. MY PROFILE
========================================================= */

function loadProfileData() {

    const user =
        getSavedUser();


    if (!user) {
        return;
    }


    if (profileName) {

        profileName.value =
            user.name || "";

    }


    if (profileEmail) {

        profileEmail.value =
            user.email || "";

        profileEmail.readOnly =
            true;

    }


    if (profileDisplayName) {

        profileDisplayName.textContent =
            user.name || "User";

    }


    if (profileDisplayEmail) {

        profileDisplayEmail.textContent =
            user.email || "";

    }

}


function openMyProfile() {

    loadProfileData();


    if (profileMessage) {

        profileMessage.textContent =
            "";

        profileMessage.style.color =
            "";

    }


    if (myProfileOverlay) {

        myProfileOverlay.classList.add(
            "show"
        );

    }


    document.body.style.overflow =
        "hidden";

}


function closeMyProfile() {

    if (myProfileOverlay) {

        myProfileOverlay.classList.remove(
            "show"
        );

    }


    document.body.style.overflow =
        "";

}


if (myProfileClose) {

    myProfileClose.addEventListener(
        "click",
        function () {

            closeMyProfile();

        }
    );

}


if (myProfileOverlay) {

    myProfileOverlay.addEventListener(
        "click",
        function (event) {

            if (
                event.target ===
                myProfileOverlay
            ) {

                closeMyProfile();

            }

        }
    );

}


if (profileForm) {

    profileForm.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();


            const name =
                profileName
                    ? profileName.value.trim()
                    : "";


            if (name === "") {

                if (profileMessage) {

                    profileMessage.textContent =
                        "Please enter your name.";

                    profileMessage.style.color =
                        "#e74c3c";

                }

                return;

            }


            const user =
                getSavedUser();


            if (!user) {

                if (profileMessage) {

                    profileMessage.textContent =
                        "User account was not found.";

                    profileMessage.style.color =
                        "#e74c3c";

                }

                return;

            }


            user.name =
                name;


            saveUser(user);


            loadProfileData();

            updateDashboardUser();

            updateNavbarUser();


            if (profileMessage) {

                profileMessage.textContent =
                    "Profile updated successfully!";

                profileMessage.style.color =
                    "#1681d6";

            }


            setTimeout(
                function () {

                    closeMyProfile();

                },
                1000
            );

        }
    );

}


if (dashboardProfile) {

    dashboardProfile.addEventListener(
        "click",
        function () {

            closeDashboard();

            openMyProfile();

        }
    );

}


/* =========================================================
   7. LOGOUT
========================================================= */

function clearWishlistCompletely() {

    /* ---------- REMOVE WISHLIST STORAGE ---------- */

    localStorage.removeItem(
        "skilloraWishlist"
    );


    /* ---------- CLEAR POPUP CONTENT ---------- */

    if (wishlistPopupContent) {

        wishlistPopupContent.innerHTML =
            "";

    }


    /* ---------- RESET COUNT ---------- */

    if (wishlistCount) {

        wishlistCount.textContent =
            "0 courses saved";

    }


    /* ---------- SHOW EMPTY STATE ---------- */

    if (wishlistPopupEmpty) {

        wishlistPopupEmpty.classList.add(
            "show"
        );

    }


    /* ---------- RESET COURSE HEARTS ---------- */

    if (wishlistButtons) {

        for (
            let i = 0;
            i < wishlistButtons.length;
            i++
        ) {

            wishlistButtons[i]
                .classList
                .remove("active");


            const icon =
                wishlistButtons[i]
                    .querySelector("i");


            if (icon) {

                icon.className =
                    "fa-regular fa-heart";

            }

        }

    }


    /* ---------- RESET NAV HEART ---------- */

    if (wishlistNavBtn) {

        wishlistNavBtn
            .classList
            .remove("has-items");


        const icon =
            wishlistNavBtn
                .querySelector("i");


        if (icon) {

            icon.className =
                "fa-regular fa-heart";

        }

    }

}


if (dashboardLogout) {

    dashboardLogout.addEventListener(
        "click",
        function () {

            /* ---------- REMOVE LOGIN ---------- */

            localStorage.removeItem(
                "skilloraLoggedIn"
            );


            /* ---------- CLEAR EMAIL VERIFIED ---------- */

            localStorage.removeItem(
                "skilloraEmailVerified"
            );


            /* ---------- CLEAR WISHLIST ---------- */

            clearWishlistCompletely();


            /* ---------- CLOSE ALL USER POPUPS ---------- */

            closeDashboard();
            closeMyCourses();
            closeMyProfile();
            closePaymentPopup();
            closeWishlist();


            /* ---------- UPDATE NAVBAR ---------- */

            updateNavbarUser();


            /* ---------- LOGOUT MESSAGE ---------- */

            showLogoutMessage();

        }
    );

}


/* =========================================================
   8. NAVBAR ACTIVE LINK
========================================================= */

const sectionLinks =
    document.querySelectorAll(
        ".sections a"
    );


for (
    let i = 0;
    i < sectionLinks.length;
    i++
) {

    sectionLinks[i].addEventListener(
        "click",
        function () {

            for (
                let j = 0;
                j < sectionLinks.length;
                j++
            ) {

                sectionLinks[j]
                    .classList
                    .remove("active");

            }


            this.classList.add(
                "active"
            );

        }
    );

}


/* =========================================================
   9. PASSWORD VALIDATION
========================================================= */

function validatePassword(password) {

    return {

        length:
            password.length >= 8,

        uppercase:
            /[A-Z]/.test(password),

        lowercase:
            /[a-z]/.test(password),

        number:
            /[0-9]/.test(password),

        special:
            /[^A-Za-z0-9]/.test(password)

    };

}


function isStrongPassword(password) {

    const rules =
        validatePassword(password);


    return (
        rules.length &&
        rules.uppercase &&
        rules.lowercase &&
        rules.number &&
        rules.special
    );

}


function getPasswordError(password) {

    const rules =
        validatePassword(password);


    if (!rules.length) {

        return "Password must be at least 8 characters.";

    }


    if (!rules.uppercase) {

        return "Password must contain at least one uppercase letter.";

    }


    if (!rules.lowercase) {

        return "Password must contain at least one lowercase letter.";

    }


    if (!rules.number) {

        return "Password must contain at least one number.";

    }


    if (!rules.special) {

        return "Password must contain at least one special character.";

    }


    return "";

}


/* =========================================================
   10. PASSWORD TOGGLE
========================================================= */

function togglePassword(input, button) {

    if (!input || !button) {
        return;
    }


    const icon =
        button.querySelector("i");


    if (input.type === "password") {

        input.type =
            "text";


        if (icon) {

            icon.classList.remove(
                "fa-eye"
            );

            icon.classList.add(
                "fa-eye-slash"
            );

        }

    } else {

        input.type =
            "password";


        if (icon) {

            icon.classList.remove(
                "fa-eye-slash"
            );

            icon.classList.add(
                "fa-eye"
            );

        }

    }

}


if (showPassword) {

    showPassword.addEventListener(
        "click",
        function () {

            togglePassword(
                loginPassword,
                showPassword
            );

        }
    );

}


if (showSignupPassword) {

    showSignupPassword.addEventListener(
        "click",
        function () {

            togglePassword(
                signupPassword,
                showSignupPassword
            );

        }
    );

}


if (showConfirmPassword) {

    showConfirmPassword.addEventListener(
        "click",
        function () {

            togglePassword(
                signupConfirmPassword,
                showConfirmPassword
            );

        }
    );

}


if (showNewPassword) {

    showNewPassword.addEventListener(
        "click",
        function () {

            togglePassword(
                newPassword,
                showNewPassword
            );

        }
    );

}


if (showConfirmNewPassword) {

    showConfirmNewPassword.addEventListener(
        "click",
        function () {

            togglePassword(
                confirmNewPassword,
                showConfirmNewPassword
            );

        }
    );

}


/* =========================================================
   11. COURSES SEARCH & FILTER
========================================================= */

function filterCourses() {

    const searchValue =
        normalizeText(
            heroSearch
                ? heroSearch.value
                : ""
        );


    const matchingCards = [];


    for (
        let i = 0;
        i < courseCards.length;
        i++
    ) {

        const card =
            courseCards[i];


        const category =
            normalizeText(
                card.getAttribute(
                    "data-category"
                ) || ""
            );


        const titleElement =
            card.querySelector("h3");


        const title =
            normalizeText(
                titleElement
                    ? titleElement.textContent
                    : ""
            );


        let categoryMatch =
            true;


        if (
            currentCategory !==
            "all"
        ) {

            categoryMatch =
                category ===
                normalizeText(
                    currentCategory
                );

        }


        let searchMatch =
            true;


        if (
            searchValue !== ""
        ) {

            searchMatch =
                title.includes(
                    searchValue
                );

        }


        if (
            categoryMatch &&
            searchMatch
        ) {

            matchingCards.push(
                card
            );

        }

    }


    for (
        let i = 0;
        i < courseCards.length;
        i++
    ) {

        courseCards[i].style.display =
            "none";

    }


    for (
        let i = 0;
        i < matchingCards.length &&
        i < visibleCourses;
        i++
    ) {

        matchingCards[i].style.display =
            "block";

    }


    if (courseCount) {

        courseCount.textContent =
            matchingCards.length;

    }


    if (noResults) {

        if (
            matchingCards.length ===
            0
        ) {

            noResults.style.display =
                "block";

        } else {

            noResults.style.display =
                "none";

        }

    }


    if (loadMore) {

        if (
            matchingCards.length >
            visibleCourses
        ) {

            loadMore.style.display =
                "block";

        } else {

            loadMore.style.display =
                "none";

        }

    }

}


/* =========================================================
   12. COURSE FILTER BUTTONS
========================================================= */

for (
    let i = 0;
    i < filterButtons.length;
    i++
) {

    filterButtons[i].addEventListener(
        "click",
        function () {

            for (
                let j = 0;
                j < filterButtons.length;
                j++
            ) {

                filterButtons[j]
                    .classList
                    .remove("active");

            }


            this.classList.add(
                "active"
            );


            currentCategory =
                this.getAttribute(
                    "data-category"
                );


            visibleCourses =
                4;


            filterCourses();

        }
    );

}


/* =========================================================
   13. SEARCH
========================================================= */

function performSearch() {

    visibleCourses =
        4;

    filterCourses();

}


function scrollToCourses() {

    if (!coursesSection) {
        return;
    }


    coursesSection.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });

}


if (heroSearch) {

    heroSearch.addEventListener(
        "input",
        function () {

            performSearch();

        }
    );


    heroSearch.addEventListener(
        "keydown",
        function (event) {

            if (
                event.key ===
                "Enter"
            ) {

                performSearch();

                scrollToCourses();

            }

        }
    );

}


if (heroSearchButton) {

    heroSearchButton.addEventListener(
        "click",
        function () {

            performSearch();

            scrollToCourses();

        }
    );

}


if (navSearch) {

    navSearch.addEventListener(
        "input",
        function () {

            if (heroSearch) {

                heroSearch.value =
                    navSearch.value;

            }

            performSearch();

        }
    );


    navSearch.addEventListener(
        "keydown",
        function (event) {

            if (
                event.key ===
                "Enter"
            ) {

                if (heroSearch) {

                    heroSearch.value =
                        navSearch.value;

                }

                performSearch();

                scrollToCourses();

            }

        }
    );

}


if (loadMore) {

    loadMore.addEventListener(
        "click",
        function () {

            visibleCourses +=
                4;

            filterCourses();

        }
    );

}


/* =========================================================
   14. WISHLIST
========================================================= */

const wishlistButtons =
    document.querySelectorAll(
        ".wishlist"
    );

const wishlistNavBtn =
    document.getElementById(
        "wishlistNavBtn"
    );

const wishlistOverlay =
    document.getElementById(
        "wishlistOverlay"
    );

const wishlistClose =
    document.getElementById(
        "wishlistClose"
    );

const wishlistPopupContent =
    document.getElementById(
        "wishlistPopupContent"
    );

const wishlistPopupEmpty =
    document.getElementById(
        "wishlistPopupEmpty"
    );

const wishlistCount =
    document.getElementById(
        "wishlistCount"
    );


const wishlistCourses = {

    javascript: {
        title:
            "JavaScript for Beginners",
        category:
            "Programming",
        image:
            "images/courses/js.jpg",
        rating:
            "4.8",
        price:
            "$19.99"
    },

    uiux: {
        title:
            "UI/UX Design Fundamentals",
        category:
            "UI/UX Design",
        image:
            "images/courses/ui.jpeg",
        rating:
            "5.0",
        price:
            "$20.00"
    },

    python: {
        title:
            "Python Programming",
        category:
            "Programming",
        image:
            "images/courses/python.jpeg",
        rating:
            "4.9",
        price:
            "$21.99"
    },

    marketing: {
        title:
            "Digital Marketing Basics",
        category:
            "Business",
        image:
            "images/courses/digital.jpeg",
        rating:
            "4.5",
        price:
            "$17.99"
    },

    htmlcss: {
        title:
            "HTML & CSS Modern Web Design",
        category:
            "Web Development",
        image:
            "images/courses/web.jpeg",
        rating:
            "4.9",
        price:
            "$18.99"
    },

    react: {
        title:
            "React JS Complete Guide",
        category:
            "Web Development",
        image:
            "images/courses/react.png",
        rating:
            "4.9",
        price:
            "$29.99"
    },

    data: {
        title:
            "Data Analysis with Python",
        category:
            "Data Analysis",
        image:
            "images/courses/data.jpeg",
        rating:
            "4.8",
        price:
            "$26.99"
    },

    figma: {
        title:
            "Figma UI/UX Masterclass",
        category:
            "UI/UX Design",
        image:
            "images/courses/ui.jpeg",
        rating:
            "4.9",
        price:
            "$27.99"
    }

};


/* =========================================================
   IMPORTANT:
   WISHLIST EXISTS ONLY FOR LOGGED-IN USERS
========================================================= */

function getWishlist() {

    const loggedIn =
        localStorage.getItem(
            "skilloraLoggedIn"
        ) === "true";


    /*
     * If the user is logged out,
     * NEVER return old wishlist data.
     */

    if (!loggedIn) {
        return [];
    }


    const savedWishlist =
        localStorage.getItem(
            "skilloraWishlist"
        );


    if (!savedWishlist) {
        return [];
    }


    try {

        const wishlist =
            JSON.parse(
                savedWishlist
            );


        if (
            Array.isArray(wishlist)
        ) {

            return wishlist;

        }


        return [];

    } catch (error) {

        return [];

    }

}


function saveWishlist(wishlist) {

    const loggedIn =
        localStorage.getItem(
            "skilloraLoggedIn"
        ) === "true";


    /*
     * Do not save Wishlist
     * when user is logged out.
     */

    if (!loggedIn) {

        localStorage.removeItem(
            "skilloraWishlist"
        );

        return;

    }


    localStorage.setItem(
        "skilloraWishlist",
        JSON.stringify(
            wishlist
        )
    );

}


function getWishlistCourseKey(button) {

    if (!button) {
        return null;
    }


    const card =
        button.closest(
            ".course-card"
        );


    if (!card) {
        return null;
    }


    const title =
        card.getAttribute(
            "data-title"
        );


    if (
        title ===
        "javascript for beginners"
    ) {
        return "javascript";
    }


    if (
        title ===
        "ui ux design fundamentals"
    ) {
        return "uiux";
    }


    if (
        title ===
        "python programming"
    ) {
        return "python";
    }


    if (
        title ===
        "digital marketing basics"
    ) {
        return "marketing";
    }


    if (
        title ===
        "html css modern web design"
    ) {
        return "htmlcss";
    }


    if (
        title ===
        "react js complete guide"
    ) {
        return "react";
    }


    if (
        title ===
        "data analysis with python"
    ) {
        return "data";
    }


    if (
        title ===
        "figma ui ux masterclass"
    ) {
        return "figma";
    }


    return null;

}


function updateWishlistButtons() {

    const wishlist =
        getWishlist();


    for (
        let i = 0;
        i < wishlistButtons.length;
        i++
    ) {

        const button =
            wishlistButtons[i];


        const courseKey =
            getWishlistCourseKey(
                button
            );


        const icon =
            button.querySelector("i");


        if (
            !courseKey ||
            !icon
        ) {
            continue;
        }


        if (
            wishlist.includes(
                courseKey
            )
        ) {

            button.classList.add(
                "active"
            );

            icon.className =
                "fa-solid fa-heart";

        } else {

            button.classList.remove(
                "active"
            );

            icon.className =
                "fa-regular fa-heart";

        }

    }

}


function updateWishlistNav() {

    if (!wishlistNavBtn) {
        return;
    }


    const icon =
        wishlistNavBtn.querySelector(
            "i"
        );


    if (!icon) {
        return;
    }


    const wishlist =
        getWishlist();


    if (
        wishlist.length > 0
    ) {

        icon.className =
            "fa-solid fa-heart";

        wishlistNavBtn.classList.add(
            "has-items"
        );

    } else {

        icon.className =
            "fa-regular fa-heart";

        wishlistNavBtn.classList.remove(
            "has-items"
        );

    }

}


function updateWishlistUI() {

    updateWishlistButtons();

    updateWishlistNav();

}


/* =========================================================
   WISHLIST BUTTON
   LOGIN REQUIRED
========================================================= */

for (
    let i = 0;
    i < wishlistButtons.length;
    i++
) {

    wishlistButtons[i].addEventListener(
        "click",
        function (event) {

            event.preventDefault();

            event.stopPropagation();


            /* ---------- CHECK LOGIN ---------- */

            const loggedIn =
                localStorage.getItem(
                    "skilloraLoggedIn"
                ) === "true";


            if (!loggedIn) {

                closeModal(
                    signupModal
                );

                closeModal(
                    forgotModal
                );

                openModal(
                    loginModal
                );

                clearMessage(
                    loginError
                );

                return;

            }


            /* ---------- GET COURSE ---------- */

            const courseKey =
                getWishlistCourseKey(
                    this
                );


            if (!courseKey) {
                return;
            }


            /* ---------- GET WISHLIST ---------- */

            let wishlist =
                getWishlist();


            const courseIndex =
                wishlist.indexOf(
                    courseKey
                );


            /* ---------- ADD / REMOVE ---------- */

            if (
                courseIndex ===
                -1
            ) {

                wishlist.push(
                    courseKey
                );

            } else {

                wishlist.splice(
                    courseIndex,
                    1
                );

            }


            /* ---------- SAVE ---------- */

            saveWishlist(
                wishlist
            );


            /* ---------- UPDATE UI ---------- */

            updateWishlistUI();

        }
    );

}


function displayWishlist() {

    if (
        !wishlistPopupContent ||
        !wishlistPopupEmpty ||
        !wishlistCount
    ) {
        return;
    }


    const loggedIn =
        localStorage.getItem(
            "skilloraLoggedIn"
        ) === "true";


    /*
     * Logged out = empty Wishlist
     */

    if (!loggedIn) {

        wishlistPopupContent.innerHTML =
            "";

        wishlistCount.textContent =
            "0 courses saved";

        wishlistPopupEmpty.classList.add(
            "show"
        );

        return;

    }


    const wishlist =
        getWishlist();


    wishlistPopupContent.innerHTML =
        "";


    if (
        wishlist.length ===
        1
    ) {

        wishlistCount.textContent =
            "1 course saved";

    } else {

        wishlistCount.textContent =
            wishlist.length +
            " courses saved";

    }


    if (
        wishlist.length ===
        0
    ) {

        wishlistPopupEmpty.classList.add(
            "show"
        );

        return;

    }


    wishlistPopupEmpty.classList.remove(
        "show"
    );


    for (
        let i = 0;
        i < wishlist.length;
        i++
    ) {

        const courseKey =
            wishlist[i];


        const course =
            wishlistCourses[
                courseKey
            ];


        if (!course) {
            continue;
        }


        const item =
            document.createElement(
                "div"
            );


        item.className =
            "wishlist-popup-item";


        item.innerHTML = `

            <div class="wishlist-popup-image">

                <img
                    src="${escapeHTML(course.image)}"
                    alt="${escapeHTML(course.title)}"
                >

            </div>

            <div class="wishlist-popup-info">

                <span class="wishlist-popup-category">
                    ${escapeHTML(course.category)}
                </span>

                <h3 title="${escapeHTML(course.title)}">
                    ${escapeHTML(course.title)}
                </h3>

                <div class="wishlist-popup-details">

                    <span class="wishlist-popup-rating">

                        <i class="fa-solid fa-star"></i>

                        ${escapeHTML(course.rating)}

                    </span>

                    <span class="wishlist-popup-price">
                        ${escapeHTML(course.price)}
                    </span>

                </div>

            </div>

            <div class="wishlist-popup-actions">

                <a
                    href="pages/course-details.html?course=${encodeURIComponent(courseKey)}"
                    class="wishlist-view"
                    title="View Course">

                    <i class="fa-solid fa-arrow-right"></i>

                </a>

                <button
                    type="button"
                    class="wishlist-remove-popup"
                    data-course="${escapeHTML(courseKey)}"
                    title="Remove">

                    <i class="fa-solid fa-trash"></i>

                </button>

            </div>

        `;


        wishlistPopupContent.appendChild(
            item
        );

    }


    setupWishlistRemoveButtons();

}


function setupWishlistRemoveButtons() {

    const removeButtons =
        document.querySelectorAll(
            ".wishlist-remove-popup"
        );


    for (
        let i = 0;
        i < removeButtons.length;
        i++
    ) {

        removeButtons[i].addEventListener(
            "click",
            function () {

                const courseKey =
                    this.getAttribute(
                        "data-course"
                    );


                let wishlist =
                    getWishlist();


                const newWishlist =
                    [];


                for (
                    let j = 0;
                    j < wishlist.length;
                    j++
                ) {

                    if (
                        wishlist[j] !==
                        courseKey
                    ) {

                        newWishlist.push(
                            wishlist[j]
                        );

                    }

                }


                saveWishlist(
                    newWishlist
                );


                displayWishlist();

                updateWishlistUI();

            }
        );

    }

}


/* =========================================================
   OPEN WISHLIST
   LOGIN REQUIRED
========================================================= */

function openWishlist() {

    const loggedIn =
        localStorage.getItem(
            "skilloraLoggedIn"
        ) === "true";


    /*
     * Do not open Wishlist for logged-out users.
     */

    if (!loggedIn) {

        closeModal(
            signupModal
        );

        closeModal(
            forgotModal
        );

        openModal(
            loginModal
        );

        clearMessage(
            loginError
        );

        return;

    }


    displayWishlist();


    if (wishlistOverlay) {

        wishlistOverlay.classList.add(
            "show"
        );

    }


    document.body.style.overflow =
        "hidden";

}


function closeWishlist() {

    if (wishlistOverlay) {

        wishlistOverlay.classList.remove(
            "show"
        );

    }


    document.body.style.overflow =
        "";

}


if (wishlistNavBtn) {

    wishlistNavBtn.addEventListener(
        "click",
        function () {

            openWishlist();

        }
    );

}


if (wishlistClose) {

    wishlistClose.addEventListener(
        "click",
        function () {

            closeWishlist();

        }
    );

}


if (wishlistOverlay) {

    wishlistOverlay.addEventListener(
        "click",
        function (event) {

            if (
                event.target ===
                wishlistOverlay
            ) {

                closeWishlist();

            }

        }
    );

}


if (dashboardWishlist) {

    dashboardWishlist.addEventListener(
        "click",
        function () {

            closeDashboard();

            openWishlist();

        }
    );

}


updateWishlistUI();


/* =========================================================
   15. LOGIN MODAL
========================================================= */

if (openLogin) {

    openLogin.addEventListener(
        "click",
        function () {

            closeModal(signupModal);

            closeModal(forgotModal);

            openModal(loginModal);

            clearMessage(loginError);

        }
    );

}


if (closeLogin) {

    closeLogin.addEventListener(
        "click",
        function () {

            closeModal(loginModal);

        }
    );

}


/* =========================================================
   16. SIGN UP MODAL
========================================================= */

if (openSignup) {

    openSignup.addEventListener(
        "click",
        function () {

            closeModal(loginModal);

            closeModal(forgotModal);

            showSignupStep();

            openModal(signupModal);

            clearMessage(
                signupMessage
            );

        }
    );

}


if (closeSignup) {

    closeSignup.addEventListener(
        "click",
        function () {

            closeModal(signupModal);

        }
    );

}


/* =========================================================
   17. LOGIN ↔ SIGN UP
========================================================= */

if (goToSignup) {

    goToSignup.addEventListener(
        "click",
        function () {

            closeModal(loginModal);

            showSignupStep();

            openModal(signupModal);

        }
    );

}


if (goToLogin) {

    goToLogin.addEventListener(
        "click",
        function () {

            closeModal(signupModal);

            openModal(loginModal);

        }
    );

}


/* =========================================================
   18. SIGN UP STEPS
========================================================= */

function showSignupStep() {

    if (signupStep) {

        signupStep.classList.add(
            "active"
        );

    }


    if (otpStep) {

        otpStep.classList.remove(
            "active"
        );

    }

}


function showSignupOtpStep() {

    if (signupStep) {

        signupStep.classList.remove(
            "active"
        );

    }


    if (otpStep) {

        otpStep.classList.add(
            "active"
        );

    }

}


/* =========================================================
   19. OTP
========================================================= */

function generateOTP() {

    return Math.floor(
        100000 +
        Math.random() *
        900000
    ).toString();

}


function getOtpValue(inputs) {

    let value =
        "";


    for (
        let i = 0;
        i < inputs.length;
        i++
    ) {

        value +=
            inputs[i].value;

    }


    return value;

}


function clearOtpInputs(inputs) {

    for (
        let i = 0;
        i < inputs.length;
        i++
    ) {

        inputs[i].value =
            "";

    }

}


function focusFirstOtp(inputs) {

    if (
        inputs &&
        inputs.length > 0
    ) {

        inputs[0].focus();

    }

}


function setupOtpInputs(inputs) {

    for (
        let i = 0;
        i < inputs.length;
        i++
    ) {

        inputs[i].addEventListener(
            "input",
            function () {

                this.value =
                    this.value.replace(
                        /[^0-9]/g,
                        ""
                    );


                if (
                    this.value !== "" &&
                    i <
                    inputs.length - 1
                ) {

                    inputs[i + 1]
                        .focus();

                }

            }
        );


        inputs[i].addEventListener(
            "keydown",
            function (event) {

                if (
                    event.key ===
                    "Backspace" &&
                    this.value === "" &&
                    i > 0
                ) {

                    inputs[i - 1]
                        .focus();

                }

            }
        );


        inputs[i].addEventListener(
            "paste",
            function (event) {

                event.preventDefault();


                const pasted =
                    event.clipboardData
                        .getData("text")
                        .replace(
                            /[^0-9]/g,
                            ""
                        )
                        .slice(
                            0,
                            inputs.length
                        );


                for (
                    let j = 0;
                    j < pasted.length;
                    j++
                ) {

                    inputs[j].value =
                        pasted[j];

                }


                if (
                    pasted.length > 0
                ) {

                    const index =
                        Math.min(
                            pasted.length,
                            inputs.length - 1
                        );


                    inputs[index]
                        .focus();

                }

            }
        );

    }

}


setupOtpInputs(
    otpInputs
);

setupOtpInputs(
    forgotOtpInputs
);


/* =========================================================
   20. SIGN UP
========================================================= */

if (signupForm) {
 
    signupForm.addEventListener(
        "submit",
        async function (event) {
 
            event.preventDefault();
 
            clearMessage(signupMessage);
 
 
            const name = signupName.value.trim();
 
            const email = signupEmail.value.trim();
 
            const password = signupPassword.value;
 
            const confirmPassword = signupConfirmPassword.value;
 
 
            /* ---------- VALIDATION ---------- */
 
            if (name.length < 3) {
 
                showMessage(
                    signupMessage,
                    "Please enter your full name.",
                    "error"
                );
 
                return;
            }
 
 
            if (!signupEmail.checkValidity()) {
 
                showMessage(
                    signupMessage,
                    "Please enter a valid email address.",
                    "error"
                );
 
                return;
            }
 
 
            if (!isStrongPassword(password)) {
 
                showMessage(
                    signupMessage,
                    getPasswordError(password),
                    "error"
                );
 
                return;
            }
 
 
            if (password !== confirmPassword) {
 
                showMessage(
                    signupMessage,
                    "Passwords do not match.",
                    "error"
                );
 
                return;
            }
 
 
            if (!signupTerms.checked) {
 
                showMessage(
                    signupMessage,
                    "Please agree to the Terms of Service and Privacy Policy.",
                    "error"
                );
 
                return;
            }
 
 
            /* ---------- SEND TO BACKEND ---------- */
 
            showMessage(
                signupMessage,
                "Creating your account...",
                "success"
            );
 
 
            try {
 
                const result = await apiPost(
                    "/signup",
                    {
                        name: name,
                        email: email,
                        password: password
                    }
                );
 
 
                if (!result.success) {
 
                    showMessage(
                        signupMessage,
                        result.message ||
                        "Could not create account.",
                        "error"
                    );
 
                    return;
                }
 
 
                /* ---------- SAVE USER (NO PASSWORD) ---------- */
 
                signupUserId = result.userId;
 
                saveUser({
                    id: result.userId,
                    name: name,
                    email: email
                });
 
 
                if (otpEmail) {
 
                    otpEmail.textContent = email;
                }
 
 
                showSignupOtpStep();
 
                clearOtpInputs(otpInputs);
 
                focusFirstOtp(otpInputs);
 
 
                showMessage(
                    otpMessage,
                    "A verification code has been sent to your email.",
                    "success"
                );
 
 
            } catch (error) {
 
                console.log(error);
 
                showMessage(
                    signupMessage,
                    "Cannot reach the server. Make sure the backend is running.",
                    "error"
                );
            }
 
        }
    );
 
}
 

/* =========================================================
   21. VERIFY SIGN UP OTP
========================================================= */

if (verifyOtp) {
 
    verifyOtp.addEventListener(
        "click",
        async function () {
 
            clearMessage(otpMessage);
 
 
            const enteredOTP = getOtpValue(otpInputs);
 
 
            if (enteredOTP.length !== 6) {
 
                showMessage(
                    otpMessage,
                    "Please enter the 6-digit verification code.",
                    "error"
                );
 
                return;
            }
 
 
            if (!signupUserId) {
 
                showMessage(
                    otpMessage,
                    "Session expired. Please sign up again.",
                    "error"
                );
 
                return;
            }
 
 
            try {
 
                const result = await apiPost(
                    "/verify-signup-otp",
                    {
                        userId: signupUserId,
                        otp: enteredOTP
                    }
                );
 
 
                if (!result.success) {
 
                    showMessage(
                        otpMessage,
                        result.message ||
                        "Invalid verification code.",
                        "error"
                    );
 
                    return;
                }
 
 
                /* ---------- VERIFIED ---------- */
 
                localStorage.setItem(
                    "skilloraEmailVerified",
                    "true"
                );
 
                localStorage.setItem(
                    "skilloraLoggedIn",
                    "true"
                );
 
 
                const savedUser = getSavedUser();
 
                const welcomeName =
                    savedUser && savedUser.name
                        ? savedUser.name
                        : "there";
 
 
                updateNavbarUser();
 
                updateDashboardUser();
 
                updateWishlistUI();
 
 
                showMessage(
                    otpMessage,
                    "Email verified successfully!",
                    "success"
                );
 
 
                verifyOtp.classList.add("verified");
 
 
                for (let i = 0; i < otpInputs.length; i++) {
 
                    otpInputs[i].classList.add("verified-input");
                }
 
 
                setTimeout(
                    function () {
 
                        closeModal(signupModal);
 
                        showWelcomeMessage(welcomeName);
 
                        verifyOtp.classList.remove("verified");
 
 
                        for (let i = 0; i < otpInputs.length; i++) {
 
                            otpInputs[i].classList.remove("verified-input");
                        }
 
                    },
                    900
                );
 
 
            } catch (error) {
 
                console.log(error);
 
                showMessage(
                    otpMessage,
                    "Cannot reach the server.",
                    "error"
                );
            }
 
        }
    );
 
}

/* =========================================================
   22. RESEND SIGN UP OTP
========================================================= */

if (resendOtp) {
 
    resendOtp.addEventListener(
        "click",
        async function () {
 
            clearMessage(otpMessage);
 
 
            if (!signupUserId) {
 
                showMessage(
                    otpMessage,
                    "Session expired. Please sign up again.",
                    "error"
                );
 
                return;
            }
 
 
            try {
 
                const result = await apiPost(
                    "/resend-signup-otp",
                    { userId: signupUserId }
                );
 
 
                if (!result.success) {
 
                    showMessage(
                        otpMessage,
                        result.message ||
                        "Could not resend the code.",
                        "error"
                    );
 
                    return;
                }
 
 
                clearOtpInputs(otpInputs);
 
                focusFirstOtp(otpInputs);
 
 
                showMessage(
                    otpMessage,
                    "A new verification code has been sent.",
                    "success"
                );
 
 
            } catch (error) {
 
                console.log(error);
 
                showMessage(
                    otpMessage,
                    "Cannot reach the server.",
                    "error"
                );
            }
 
        }
    );
 
}
 
/* =========================================================
   23. BACK TO SIGN UP
========================================================= */

if (backToSignup) {

    backToSignup.addEventListener(
        "click",
        function () {

            showSignupStep();

            clearMessage(
                otpMessage
            );

        }
    );

}


/* =========================================================
   24. WELCOME MESSAGE
========================================================= */

function showWelcomeMessage(name) {

    const message =
        document.createElement(
            "div"
        );


    message.className =
        "welcome-message";


    message.innerHTML = `

        <i class="fa-solid fa-circle-check"></i>

        <div>

            <strong>
                Welcome, ${escapeHTML(name)}!
            </strong>

            <span>
                Your account has been created successfully.
            </span>

        </div>

    `;


    document.body.appendChild(
        message
    );


    setTimeout(
        function () {

            message.classList.add(
                "show"
            );

        },
        50
    );


    setTimeout(
        function () {

            message.classList.remove(
                "show"
            );


            setTimeout(
                function () {

                    message.remove();

                },
                300
            );

        },
        3500
    );

}


/* =========================================================
   25. LOGIN
========================================================= */

if (loginForm) {
 
    loginForm.addEventListener(
        "submit",
        async function (event) {
 
            event.preventDefault();
 
            clearMessage(loginError);
 
 
            const email = loginEmail.value.trim();
 
            const password = loginPassword.value;
 
 
            if (!loginEmail.checkValidity()) {
 
                showMessage(
                    loginError,
                    "Please enter a valid email address.",
                    "error"
                );
 
                return;
            }
 
 
            if (password === "") {
 
                showMessage(
                    loginError,
                    "Please enter your password.",
                    "error"
                );
 
                return;
            }
 
 
            try {
 
                const result = await apiPost(
                    "/login",
                    {
                        email: email,
                        password: password
                    }
                );
 
 
                /* ---------- EMAIL NOT VERIFIED ---------- */
 
                if (result.needsVerification) {
 
                    signupUserId = result.userId;
 
                    saveUser({
                        id: result.userId,
                        name: "",
                        email: email
                    });
 
 
                    closeModal(loginModal);
 
 
                    if (otpEmail) {
 
                        otpEmail.textContent = email;
                    }
 
 
                    showSignupOtpStep();
 
                    openModal(signupModal);
 
                    clearOtpInputs(otpInputs);
 
                    focusFirstOtp(otpInputs);
 
 
                    showMessage(
                        otpMessage,
                        "Please verify your email first. Click Resend to get a new code.",
                        "error"
                    );
 
                    return;
                }
 
 
                if (!result.success) {
 
                    showMessage(
                        loginError,
                        result.message ||
                        "Incorrect email or password.",
                        "error"
                    );
 
                    return;
                }
 
 
                /* ---------- LOGIN SUCCESS ---------- */
 
                saveUser(result.user);
 
 
                localStorage.setItem(
                    "skilloraLoggedIn",
                    "true"
                );
 
 
                updateNavbarUser();
 
                updateDashboardUser();
 
                updateWishlistUI();
 
 
                showMessage(
                    loginError,
                    "Login successful!",
                    "success"
                );
 
 
                setTimeout(
                    function () {
 
                        closeModal(loginModal);
 
                        showWelcomeMessage(result.user.name);
 
                    },
                    900
                );
 
 
            } catch (error) {
 
                console.log(error);
 
                showMessage(
                    loginError,
                    "Cannot reach the server. Make sure the backend is running.",
                    "error"
                );
            }
 
        }
    );
 
}
 
 
/* =========================================================
   26. FORGOT PASSWORD
========================================================= */

if (forgotPassword) {

    forgotPassword.addEventListener(
        "click",
        function (event) {

            event.preventDefault();


            closeModal(
                loginModal
            );


            showForgotEmailStep();


            openModal(
                forgotModal
            );

        }
    );

}


function showForgotEmailStep() {

    if (forgotEmailStep) {

        forgotEmailStep.classList.add(
            "active"
        );

    }


    if (forgotOtpStep) {

        forgotOtpStep.classList.remove(
            "active"
        );

    }


    if (newPasswordStep) {

        newPasswordStep.classList.remove(
            "active"
        );

    }

}


function showForgotOtpStep() {

    if (forgotEmailStep) {

        forgotEmailStep.classList.remove(
            "active"
        );

    }


    if (forgotOtpStep) {

        forgotOtpStep.classList.add(
            "active"
        );

    }


    if (newPasswordStep) {

        newPasswordStep.classList.remove(
            "active"
        );

    }

}


function showNewPasswordStep() {

    if (forgotEmailStep) {

        forgotEmailStep.classList.remove(
            "active"
        );

    }


    if (forgotOtpStep) {

        forgotOtpStep.classList.remove(
            "active"
        );

    }


    if (newPasswordStep) {

        newPasswordStep.classList.add(
            "active"
        );

    }

}


if (closeForgot) {

    closeForgot.addEventListener(
        "click",
        function () {

            closeModal(
                forgotModal
            );

        }
    );

}


/* =========================================================
   27. FORGOT EMAIL
========================================================= */

if (forgotEmailForm) {
 
    forgotEmailForm.addEventListener(
        "submit",
        async function (event) {
 
            event.preventDefault();
 
            clearMessage(forgotEmailMessage);
 
 
            const email = forgotEmail.value.trim();
 
 
            if (!forgotEmail.checkValidity()) {
 
                showMessage(
                    forgotEmailMessage,
                    "Please enter a valid email address.",
                    "error"
                );
 
                return;
            }
 
 
            showMessage(
                forgotEmailMessage,
                "Sending code...",
                "success"
            );
 
 
            try {
 
                const result = await apiPost(
                    "/forgot-password",
                    { email: email }
                );
 
 
                if (!result.success) {
 
                    showMessage(
                        forgotEmailMessage,
                        result.message ||
                        "No account was found with this email.",
                        "error"
                    );
 
                    return;
                }
 
 
                forgotUserId = result.userId;
 
                currentForgotEmail = email;
 
 
                if (forgotOtpEmail) {
 
                    forgotOtpEmail.textContent = email;
                }
 
 
                showForgotOtpStep();
 
                clearOtpInputs(forgotOtpInputs);
 
                focusFirstOtp(forgotOtpInputs);
 
 
                showMessage(
                    forgotOtpMessage,
                    "A verification code has been sent to your email.",
                    "success"
                );
 
 
            } catch (error) {
 
                console.log(error);
 
                showMessage(
                    forgotEmailMessage,
                    "Cannot reach the server.",
                    "error"
                );
            }
 
        }
    );
 
}
 

/* =========================================================
   28. VERIFY FORGOT OTP
========================================================= */
if (verifyForgotOtp) {
 
    verifyForgotOtp.addEventListener(
        "click",
        async function () {
 
            clearMessage(forgotOtpMessage);
 
 
            const enteredOTP = getOtpValue(forgotOtpInputs);
 
 
            if (enteredOTP.length !== 6) {
 
                showMessage(
                    forgotOtpMessage,
                    "Please enter the 6-digit verification code.",
                    "error"
                );
 
                return;
            }
 
 
            if (!forgotUserId) {
 
                showMessage(
                    forgotOtpMessage,
                    "Session expired. Please start again.",
                    "error"
                );
 
                return;
            }
 
 
            try {
 
                const result = await apiPost(
                    "/verify-forgot-otp",
                    {
                        userId: forgotUserId,
                        otp: enteredOTP
                    }
                );
 
 
                if (!result.success) {
 
                    showMessage(
                        forgotOtpMessage,
                        result.message ||
                        "Invalid verification code.",
                        "error"
                    );
 
                    return;
                }
 
 
                /* الكود اتأكد - نحفظه عشان خطوة الريسيت */
 
                forgotOtpCode = enteredOTP;
 
 
                showNewPasswordStep();
 
                clearMessage(resetPasswordMessage);
 
 
            } catch (error) {
 
                console.log(error);
 
                showMessage(
                    forgotOtpMessage,
                    "Cannot reach the server.",
                    "error"
                );
            }
 
        }
    );
 
}
 
 
 


/* =========================================================
   29. RESEND FORGOT OTP
========================================================= */

if (resendForgotOtp) {
 
    resendForgotOtp.addEventListener(
        "click",
        async function () {
 
            clearMessage(forgotOtpMessage);
 
 
            if (!currentForgotEmail) {
 
                showMessage(
                    forgotOtpMessage,
                    "Session expired. Please start again.",
                    "error"
                );
 
                return;
            }
 
 
            try {
 
                const result = await apiPost(
                    "/forgot-password",
                    { email: currentForgotEmail }
                );
 
 
                if (!result.success) {
 
                    showMessage(
                        forgotOtpMessage,
                        result.message ||
                        "Could not resend the code.",
                        "error"
                    );
 
                    return;
                }
 
 
                forgotUserId = result.userId;
 
                clearOtpInputs(forgotOtpInputs);
 
                focusFirstOtp(forgotOtpInputs);
 
 
                showMessage(
                    forgotOtpMessage,
                    "A new verification code has been sent.",
                    "success"
                );
 
 
            } catch (error) {
 
                console.log(error);
 
                showMessage(
                    forgotOtpMessage,
                    "Cannot reach the server.",
                    "error"
                );
            }
 
        }
    );
 
}
 
/* =========================================================
   30. BACK TO FORGOT EMAIL
========================================================= */

if (backToForgotEmail) {

    backToForgotEmail.addEventListener(
        "click",
        function () {

            showForgotEmailStep();

            clearMessage(
                forgotOtpMessage
            );

        }
    );

}


/* =========================================================
   31. BACK TO LOGIN
========================================================= */

if (backToLogin) {

    backToLogin.addEventListener(
        "click",
        function () {

            closeModal(
                forgotModal
            );


            openModal(
                loginModal
            );

        }
    );

}


/* =========================================================
   32. RESET PASSWORD
========================================================= */

if (resetPasswordForm) {
 
    resetPasswordForm.addEventListener(
        "submit",
        async function (event) {
 
            event.preventDefault();
 
            clearMessage(resetPasswordMessage);
 
 
            const password = newPassword.value;
 
            const confirmPassword = confirmNewPassword.value;
 
 
            if (!isStrongPassword(password)) {
 
                showMessage(
                    resetPasswordMessage,
                    getPasswordError(password),
                    "error"
                );
 
                return;
            }
 
 
            if (password !== confirmPassword) {
 
                showMessage(
                    resetPasswordMessage,
                    "Passwords do not match.",
                    "error"
                );
 
                return;
            }
 
 
            if (!forgotUserId || !forgotOtpCode) {
 
                showMessage(
                    resetPasswordMessage,
                    "Session expired. Please start again.",
                    "error"
                );
 
                return;
            }
 
 
            try {
 
                const result = await apiPost(
                    "/reset-password",
                    {
                        userId: forgotUserId,
                        otp: forgotOtpCode,
                        newPassword: password
                    }
                );
 
 
                if (!result.success) {
 
                    showMessage(
                        resetPasswordMessage,
                        result.message ||
                        "Could not reset password.",
                        "error"
                    );
 
                    return;
                }
 
 
                showMessage(
                    resetPasswordMessage,
                    "Password reset successfully!",
                    "success"
                );
 
 
                forgotOtpCode = "";
 
                forgotUserId = null;
 
 
                setTimeout(
                    function () {
 
                        closeModal(forgotModal);
 
                        openModal(loginModal);
 
 
                        if (loginEmail) {
 
                            loginEmail.value = currentForgotEmail;
                        }
 
 
                        if (loginPassword) {
 
                            loginPassword.value = "";
                        }
 
                    },
                    1000
                );
 
 
            } catch (error) {
 
                console.log(error);
 
                showMessage(
                    resetPasswordMessage,
                    "Cannot reach the server.",
                    "error"
                );
            }
 
        }
    );
 
}
 


/* =========================================================
   33. CLOSE MODALS OUTSIDE
========================================================= */

window.addEventListener(
    "click",
    function (event) {

        if (
            event.target ===
            loginModal
        ) {

            closeModal(
                loginModal
            );

        }


        if (
            event.target ===
            signupModal
        ) {

            closeModal(
                signupModal
            );

        }


        if (
            event.target ===
            forgotModal
        ) {

            closeModal(
                forgotModal
            );

        }

    }
);


/* =========================================================
   34. ESC KEY
========================================================= */

document.addEventListener(
    "keydown",
    function (event) {

        if (
            event.key !==
            "Escape"
        ) {
            return;
        }


        closePaymentPopup();


        closeModal(
            loginModal
        );

        closeModal(
            signupModal
        );

        closeModal(
            forgotModal
        );


        closeDashboard();

        closeMyCourses();

        closeMyProfile();

        closeWishlist();

    }
);


/* =========================================================
   35. INITIALIZE USER
========================================================= */

updateNavbarUser();

updateDashboardUser();


/* =========================================================
   36. INITIALIZE COURSES
========================================================= */

filterCourses();


/* =========================================================
   37. CONTACT FORM
========================================================= */

const contactForm =
    document.querySelector(
        ".contact-form"
    );

const contactPopup =
    document.getElementById(
        "contactPopup"
    );

const contactPopupClose =
    document.getElementById(
        "contactPopupClose"
    );

const contactPopupOk =
    document.getElementById(
        "contactPopupOk"
    );


function showContactPopup(
    title,
    message,
    icon
) {

    if (!contactPopup) {
        return;
    }


    const titleElement =
        contactPopup.querySelector(
            "h3"
        );

    const messageElement =
        contactPopup.querySelector(
            "p"
        );

    const popupIcon =
        contactPopup.querySelector(
            ".contact-popup-icon i"
        );


    if (titleElement) {

        titleElement.textContent =
            title;

    }


    if (messageElement) {

        messageElement.textContent =
            message;

    }


    if (popupIcon) {

        popupIcon.className =
            icon;

    }


    contactPopup.classList.add(
        "show"
    );

}


if (contactForm) {

    contactForm.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();


            const contactName =
                document.getElementById(
                    "contactName"
                );

            const contactEmail =
                document.getElementById(
                    "contactEmail"
                );

            const contactSubject =
                document.getElementById(
                    "contactSubject"
                );

            const contactMessage =
                document.getElementById(
                    "contactMessage"
                );


            const name =
                contactName
                    ? contactName.value.trim()
                    : "";

            const email =
                contactEmail
                    ? contactEmail.value.trim()
                    : "";

            const subject =
                contactSubject
                    ? contactSubject.value.trim()
                    : "";

            const message =
                contactMessage
                    ? contactMessage.value.trim()
                    : "";


            if (
                name === "" ||
                email === "" ||
                subject === "" ||
                message === ""
            ) {

                showContactPopup(
                    "Missing Information",
                    "Please fill in all fields before sending your message.",
                    "fa-solid fa-circle-exclamation"
                );

                return;

            }


            if (
                !email.includes("@") ||
                !email.includes(".")
            ) {

                showContactPopup(
                    "Invalid Email",
                    "Please enter a valid email address.",
                    "fa-solid fa-circle-exclamation"
                );

                return;

            }


            showContactPopup(
                "Message Sent!",
                "Thank you for contacting us. We'll get back to you soon.",
                "fa-solid fa-check"
            );


            contactForm.reset();

        }
    );

}


/* =========================================================
   38. CLOSE CONTACT POPUP
========================================================= */

function closeContactPopup() {

    if (!contactPopup) {
        return;
    }


    contactPopup.classList.remove(
        "show"
    );

}


if (contactPopupClose) {

    contactPopupClose.addEventListener(
        "click",
        closeContactPopup
    );

}


if (contactPopupOk) {

    contactPopupOk.addEventListener(
        "click",
        closeContactPopup
    );

}


if (contactPopup) {

    contactPopup.addEventListener(
        "click",
        function (event) {

            if (
                event.target ===
                contactPopup
            ) {

                closeContactPopup();

            }

        }
    );

}


/* =========================================================
   39. FOOTER CATEGORY LINKS
========================================================= */

const footerCategoryLinks =
    document.querySelectorAll(
        ".footer-column a[data-footer-category]"
    );


for (
    let i = 0;
    i < footerCategoryLinks.length;
    i++
) {

    footerCategoryLinks[i]
        .addEventListener(
            "click",
            function () {

                const category =
                    this.getAttribute(
                        "data-footer-category"
                    );


                const filterButton =
                    document.querySelector(
                        '.filter-btn[data-category="' +
                        category +
                        '"]'
                    );


                if (filterButton) {

                    filterButton.click();

                }

            }
        );

}


/* =========================================================
   40. FINAL INITIALIZATION
========================================================= */

fixEnrolledCourseImages();


if (profileEmail) {

    profileEmail.readOnly =
        true;

}


document.addEventListener(
    "DOMContentLoaded",
    function () {

        const params =
            new URLSearchParams(
                window.location.search
            );

        const openSignup =
            params.get("openSignup");


        if (openSignup === "1") {

            window.history.replaceState(
                {},
                document.title,
                window.location.pathname
            );


            const signupButton =
                document.getElementById(
                    "open-signup"
                );


            if (signupButton) {

                signupButton.click();

            }

        }

    }
);

// =====================================================
// OPEN LOGIN FROM COURSE DETAILS
// =====================================================

const urlParams = new URLSearchParams(
    window.location.search
);

if (urlParams.get("openLogin") === "1") {

    // Close other modals first
    if (typeof closeModal === "function") {

        if (typeof signupModal !== "undefined") {
            closeModal(signupModal);
        }

        if (typeof forgotModal !== "undefined") {
            closeModal(forgotModal);
        }
    }

    // Open Login Modal
    if (
        typeof loginModal !== "undefined" &&
        typeof openModal === "function"
    ) {

        openModal(loginModal);
    }

    // Remove ?openLogin=1 from URL
    window.history.replaceState(
        {},
        document.title,
        window.location.pathname
    );
}
