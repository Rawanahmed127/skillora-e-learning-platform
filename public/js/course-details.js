// =====================================================
// COURSE DETAILS
// =====================================================


// =====================================================
// COURSES DATA
// =====================================================

const courses = {

    // =================================================
    // JAVASCRIPT
    // =================================================

    javascript: {

        title: "JavaScript for Beginners",
        category: "Programming",
        image: "../images/courses/js.jpg",

        description:
            "Learn JavaScript from the beginning and build a strong foundation in modern web development.",

        rating: "4.8",
        reviews: "245 reviews",
        students: "1,250",
        duration: "12 hours",
        level: "Beginner",

        instructor: "Ahmed Hassan",
        instructorRole: "Web Development Instructor",
        instructorRating: "4.8 Instructor Rating",
        instructorStudents: "12,000+ Students",

        price: "$19.99",

        about: [
            "This course is designed for beginners who want to start learning JavaScript and build a strong foundation in modern web development.",
            "You will learn the core concepts step by step and practice what you learn through practical examples and exercises."
        ],

        learning: [
            "Understand the fundamentals of JavaScript",
            "Work with variables, functions and objects",
            "Manipulate HTML and CSS using JavaScript",
            "Handle user interactions and events",
            "Build interactive web experiences",
            "Practice through real-world examples"
        ],

        features: [
            {
                icon: "fa-solid fa-play",
                text: "12 hours of video content"
            },
            {
                icon: "fa-solid fa-infinity",
                text: "Lifetime access"
            },
            {
                icon: "fa-solid fa-mobile-screen",
                text: "Learn on any device"
            },
            {
                icon: "fa-solid fa-certificate",
                text: "Certificate of completion"
            },
            {
                icon: "fa-solid fa-headset",
                text: "Learning support"
            }
        ],

        curriculum: [

            {
                title: "Getting Started",
                lessons: [
                    ["Introduction to JavaScript", "10 min"],
                    ["Setting Up Your Environment", "12 min"],
                    ["Your First JavaScript Code", "11 min"],
                    ["Practice Exercise", "12 min"]
                ]
            },

            {
                title: "JavaScript Fundamentals",
                lessons: [
                    ["Variables and Data Types", "40 min"],
                    ["Operators and Conditions", "45 min"],
                    ["Loops and Functions", "50 min"],
                    ["Objects and Arrays", "45 min"]
                ]
            },

            {
                title: "DOM & Events",
                lessons: [
                    ["Understanding the DOM", "55 min"],
                    ["Selecting HTML Elements", "55 min"],
                    ["Handling Events", "1 hour"],
                    ["Building Interactive Pages", "1 hour"]
                ]
            },

            {
                title: "Final Project",
                lessons: [
                    ["Project Planning", "45 min"],
                    ["Building the Project", "1 hour"],
                    ["Adding Interactions", "1 hour"],
                    ["Final Review", "1 hour"]
                ]
            }

        ]

    },


    // =================================================
    // UI/UX
    // =================================================

    uiux: {

        title: "UI/UX Design Fundamentals",
        category: "UI/UX Design",
        image: "../images/courses/ui.jpeg",

        description:
            "Learn the fundamentals of UI/UX design and create user-friendly digital experiences.",

        rating: "5.0",
        reviews: "180 reviews",
        students: "1k",
        duration: "10 hours",
        level: "Beginner",

        instructor: "Rawan Ahmed",
        instructorRole: "UI/UX Design Instructor",
        instructorRating: "5.0 Instructor Rating",
        instructorStudents: "8,500+ Students",

        price: "$20.00",

        about: [
            "This course introduces you to the fundamentals of user experience and interface design.",
            "You will learn how to understand users, organize information and create clean, intuitive interfaces."
        ],

        learning: [
            "Understand UI and UX design principles",
            "Learn user research fundamentals",
            "Create user personas and user flows",
            "Design wireframes and interfaces",
            "Build interactive prototypes",
            "Apply visual design principles"
        ],

        features: [
            {
                icon: "fa-solid fa-play",
                text: "10 hours of video content"
            },
            {
                icon: "fa-solid fa-infinity",
                text: "Lifetime access"
            },
            {
                icon: "fa-solid fa-mobile-screen",
                text: "Learn on any device"
            },
            {
                icon: "fa-solid fa-certificate",
                text: "Certificate of completion"
            },
            {
                icon: "fa-solid fa-headset",
                text: "Learning support"
            }
        ],

        curriculum: [

            {
                title: "Introduction to UI/UX",
                lessons: [
                    ["What is UI/UX Design?", "15 min"],
                    ["Understanding Users", "25 min"],
                    ["Design Thinking", "30 min"],
                    ["UX vs UI", "20 min"]
                ]
            },

            {
                title: "User Research",
                lessons: [
                    ["User Research Basics", "35 min"],
                    ["Creating User Personas", "40 min"],
                    ["User Journey Maps", "35 min"],
                    ["Identifying User Problems", "30 min"]
                ]
            },

            {
                title: "Interface Design",
                lessons: [
                    ["Layout and Visual Hierarchy", "45 min"],
                    ["Colors and Typography", "40 min"],
                    ["Design Systems", "35 min"],
                    ["Creating UI Screens", "50 min"]
                ]
            },

            {
                title: "Prototyping",
                lessons: [
                    ["Introduction to Prototyping", "30 min"],
                    ["Creating Interactive Prototypes", "45 min"],
                    ["Testing Your Design", "35 min"],
                    ["Final Design Project", "1 hour"]
                ]
            }

        ]

    },


    // =================================================
    // PYTHON
    // =================================================

    python: {

        title: "Python Programming",
        category: "Programming",
        image: "../images/courses/python.jpeg",

        description:
            "Learn Python programming step by step and build a strong programming foundation.",

        rating: "4.9",
        reviews: "320 reviews",
        students: "743",
        duration: "15 hours",
        level: "Beginner",

        instructor: "Omar Ali",
        instructorRole: "Python Instructor",
        instructorRating: "4.7 Instructor Rating",
        instructorStudents: "15,000+ Students",

        price: "$21.99",

        about: [
            "Learn Python from the basics and build a solid foundation in programming.",
            "The course combines explanations with practical exercises to help you understand how Python is used to solve real problems."
        ],

        learning: [
            "Understand Python syntax and fundamentals",
            "Work with variables and data types",
            "Use conditions and loops",
            "Create functions and reusable code",
            "Work with lists, dictionaries and tuples",
            "Build practical Python projects"
        ],

        features: [
            {
                icon: "fa-solid fa-play",
                text: "15 hours of video content"
            },
            {
                icon: "fa-solid fa-infinity",
                text: "Lifetime access"
            },
            {
                icon: "fa-solid fa-mobile-screen",
                text: "Learn on any device"
            },
            {
                icon: "fa-solid fa-certificate",
                text: "Certificate of completion"
            },
            {
                icon: "fa-solid fa-headset",
                text: "Learning support"
            }
        ],

        curriculum: [

            {
                title: "Python Basics",
                lessons: [
                    ["Introduction to Python", "20 min"],
                    ["Installing Python", "15 min"],
                    ["Variables and Data Types", "35 min"],
                    ["Basic Input and Output", "25 min"]
                ]
            },

            {
                title: "Control Flow",
                lessons: [
                    ["Conditional Statements", "40 min"],
                    ["For Loops", "35 min"],
                    ["While Loops", "30 min"],
                    ["Practice Exercises", "40 min"]
                ]
            },

            {
                title: "Functions & Collections",
                lessons: [
                    ["Creating Functions", "40 min"],
                    ["Lists and Tuples", "45 min"],
                    ["Dictionaries and Sets", "40 min"],
                    ["Working with Collections", "35 min"]
                ]
            },

            {
                title: "Python Project",
                lessons: [
                    ["Project Planning", "30 min"],
                    ["Building the Application", "1 hour"],
                    ["Testing the Project", "45 min"],
                    ["Final Review", "30 min"]
                ]
            }

        ]

    },


    // =================================================
    // MARKETING
    // =================================================

    marketing: {

        title: "Digital Marketing Basics",
        category: "Business",
        image: "../images/courses/digital.jpeg",

        description:
            "Discover the basics of digital marketing, social media, content and online campaigns.",

        rating: "4.5",
        reviews: "140 reviews",
        students: "621",
        duration: "8 hours",
        level: "Beginner",

        instructor: "Sara Mohamed",
        instructorRole: "Digital Marketing Instructor",
        instructorRating: "4.7 Instructor Rating",
        instructorStudents: "6,000+ Students",

        price: "$17.99",

        about: [
            "Learn the fundamentals of digital marketing and understand how businesses reach customers online.",
            "Explore content, social media, search engines and digital campaigns through practical examples."
        ],

        learning: [
            "Understand digital marketing fundamentals",
            "Learn social media marketing",
            "Create effective marketing content",
            "Understand SEO basics",
            "Plan digital marketing campaigns",
            "Measure campaign performance"
        ],

        features: [
            {
                icon: "fa-solid fa-play",
                text: "8 hours of video content"
            },
            {
                icon: "fa-solid fa-infinity",
                text: "Lifetime access"
            },
            {
                icon: "fa-solid fa-mobile-screen",
                text: "Learn on any device"
            },
            {
                icon: "fa-solid fa-certificate",
                text: "Certificate of completion"
            },
            {
                icon: "fa-solid fa-headset",
                text: "Learning support"
            }
        ],

        curriculum: [

            {
                title: "Marketing Fundamentals",
                lessons: [
                    ["Introduction to Digital Marketing", "25 min"],
                    ["Understanding Your Audience", "30 min"],
                    ["Marketing Channels", "35 min"],
                    ["Creating a Marketing Strategy", "40 min"]
                ]
            },

            {
                title: "Social Media Marketing",
                lessons: [
                    ["Social Media Platforms", "30 min"],
                    ["Creating Social Content", "35 min"],
                    ["Content Planning", "40 min"],
                    ["Social Media Engagement", "30 min"]
                ]
            },

            {
                title: "SEO & Content",
                lessons: [
                    ["SEO Fundamentals", "40 min"],
                    ["Keyword Research", "35 min"],
                    ["Content Marketing", "40 min"],
                    ["Optimizing Content", "30 min"]
                ]
            },

            {
                title: "Campaign Planning",
                lessons: [
                    ["Creating a Campaign", "35 min"],
                    ["Setting Marketing Goals", "30 min"],
                    ["Measuring Results", "40 min"],
                    ["Final Marketing Project", "45 min"]
                ]
            }

        ]

    },


    // =================================================
    // HTML & CSS
    // =================================================

    htmlcss: {

        title: "HTML & CSS Modern Web Design",
        category: "Web Development",
        image: "../images/courses/web.jpeg",

        description:
            "Build modern responsive websites using HTML and CSS from the ground up.",

        rating: "4.9",
        reviews: "290 reviews",
        students: "1,520",
        duration: "11 hours",
        level: "Beginner",

        instructor: "Rawan Ahmed",
        instructorRole: "Web Development Instructor",
        instructorRating: "4.9 Instructor Rating",
        instructorStudents: "12,000+ Students",

        price: "$18.99",

        about: [
            "Learn how modern websites are structured and styled using HTML and CSS.",
            "You will build responsive layouts and practice creating professional web pages from scratch."
        ],

        learning: [
            "Understand HTML page structure",
            "Create semantic web pages",
            "Style websites with modern CSS",
            "Work with Flexbox and Grid",
            "Create responsive layouts",
            "Build a complete website project"
        ],

        features: [
            {
                icon: "fa-solid fa-play",
                text: "11 hours of video content"
            },
            {
                icon: "fa-solid fa-infinity",
                text: "Lifetime access"
            },
            {
                icon: "fa-solid fa-mobile-screen",
                text: "Learn on any device"
            },
            {
                icon: "fa-solid fa-certificate",
                text: "Certificate of completion"
            },
            {
                icon: "fa-solid fa-headset",
                text: "Learning support"
            }
        ],

        curriculum: [

            {
                title: "HTML Fundamentals",
                lessons: [
                    ["Introduction to HTML", "20 min"],
                    ["HTML Elements", "35 min"],
                    ["Links and Images", "30 min"],
                    ["Forms and Inputs", "40 min"]
                ]
            },

            {
                title: "CSS Fundamentals",
                lessons: [
                    ["Introduction to CSS", "30 min"],
                    ["Colors and Typography", "35 min"],
                    ["Spacing and Box Model", "40 min"],
                    ["CSS Positioning", "35 min"]
                ]
            },

            {
                title: "Modern Layouts",
                lessons: [
                    ["Flexbox", "45 min"],
                    ["CSS Grid", "50 min"],
                    ["Responsive Design", "45 min"],
                    ["Media Queries", "35 min"]
                ]
            },

            {
                title: "Website Project",
                lessons: [
                    ["Planning the Website", "30 min"],
                    ["Building the Layout", "1 hour"],
                    ["Responsive Design", "45 min"],
                    ["Final Project Review", "40 min"]
                ]
            }

        ]

    },


    // =================================================
    // REACT
    // =================================================

    react: {

        title: "React JS Complete Guide",
        category: "Web Development",
        image: "../images/courses/react.png",

        description:
            "Learn React and build modern interactive web applications with reusable components.",

        rating: "4.9",
        reviews: "210 reviews",
        students: "1,100",
        duration: "16 hours",
        level: "Intermediate",

        instructor: "Rawan Ahmed",
        instructorRole: "React Developer & Instructor",
        instructorRating: "4.9 Instructor Rating",
        instructorStudents: "1500+ Students",

        price: "$29.99",

        about: [
            "Learn React and understand how modern frontend applications are built using reusable components.",
            "You will practice React concepts by building interactive interfaces and a complete frontend project."
        ],

        learning: [
            "Understand React fundamentals",
            "Create reusable components",
            "Work with props and state",
            "Handle user interactions",
            "Use React hooks",
            "Build a complete React application"
        ],

        features: [
            {
                icon: "fa-solid fa-play",
                text: "16 hours of video content"
            },
            {
                icon: "fa-solid fa-infinity",
                text: "Lifetime access"
            },
            {
                icon: "fa-solid fa-mobile-screen",
                text: "Learn on any device"
            },
            {
                icon: "fa-solid fa-certificate",
                text: "Certificate of completion"
            },
            {
                icon: "fa-solid fa-headset",
                text: "Learning support"
            }
        ],

        curriculum: [

            {
                title: "React Fundamentals",
                lessons: [
                    ["Introduction to React", "30 min"],
                    ["Creating Your First Component", "40 min"],
                    ["JSX Fundamentals", "35 min"],
                    ["React Project Setup", "30 min"]
                ]
            },

            {
                title: "Components & Props",
                lessons: [
                    ["Building Components", "45 min"],
                    ["Working with Props", "40 min"],
                    ["Component Structure", "35 min"],
                    ["Reusable Components", "45 min"]
                ]
            },

            {
                title: "State & Hooks",
                lessons: [
                    ["Understanding State", "45 min"],
                    ["useState Hook", "50 min"],
                    ["useEffect Hook", "50 min"],
                    ["Handling Events", "40 min"]
                ]
            },

            {
                title: "Final React Project",
                lessons: [
                    ["Project Setup", "40 min"],
                    ["Building the Interface", "1 hour"],
                    ["Adding Functionality", "1 hour"],
                    ["Final Project Review", "45 min"]
                ]
            }

        ]

    },


    // =================================================
    // DATA ANALYSIS
    // =================================================

    data: {

        title: "Data Analysis with Python",
        category: "Data Analysis",
        image: "../images/courses/data.jpeg",

        description:
            "Learn how to analyze and visualize data using Python and practical techniques.",

        rating: "4.8",
        reviews: "165 reviews",
        students: "890",
        duration: "14 hours",
        level: "Intermediate",

        instructor: "Mariam Ahmed",
        instructorRole: "Data Analysis Instructor",
        instructorRating: "4.8 Instructor Rating",
        instructorStudents: "1000+ Students",

        price: "$26.99",

        about: [
            "Learn how to work with data using Python and understand the main steps of the data analysis process.",
            "You will practice cleaning, analyzing and visualizing datasets through practical examples."
        ],

        learning: [
            "Understand the data analysis process",
            "Work with Python for data analysis",
            "Clean and prepare datasets",
            "Analyze data using Pandas",
            "Create data visualizations",
            "Build a practical data analysis project"
        ],

        features: [
            {
                icon: "fa-solid fa-play",
                text: "14 hours of video content"
            },
            {
                icon: "fa-solid fa-infinity",
                text: "Lifetime access"
            },
            {
                icon: "fa-solid fa-mobile-screen",
                text: "Learn on any device"
            },
            {
                icon: "fa-solid fa-certificate",
                text: "Certificate of completion"
            },
            {
                icon: "fa-solid fa-headset",
                text: "Learning support"
            }
        ],

        curriculum: [

            {
                title: "Data Analysis Basics",
                lessons: [
                    ["Introduction to Data Analysis", "30 min"],
                    ["Understanding Datasets", "35 min"],
                    ["Python for Data Analysis", "40 min"],
                    ["Setting Up the Environment", "25 min"]
                ]
            },

            {
                title: "Data Cleaning",
                lessons: [
                    ["Loading Data", "35 min"],
                    ["Handling Missing Values", "40 min"],
                    ["Cleaning Data", "45 min"],
                    ["Preparing Datasets", "40 min"]
                ]
            },

            {
                title: "Data Visualization",
                lessons: [
                    ["Introduction to Visualization", "35 min"],
                    ["Creating Charts", "45 min"],
                    ["Working with Matplotlib", "50 min"],
                    ["Understanding Data Patterns", "40 min"]
                ]
            },

            {
                title: "Final Data Project",
                lessons: [
                    ["Choosing a Dataset", "30 min"],
                    ["Analyzing the Data", "1 hour"],
                    ["Creating Visualizations", "50 min"],
                    ["Presenting Results", "40 min"]
                ]
            }

        ]

    },


    // =================================================
    // FIGMA
    // =================================================

    figma: {

        title: "Figma UI/UX Masterclass",
        category: "UI/UX Design",
        image: "../images/courses/ui.jpeg",

        description:
            "Master Figma and learn how to design professional interfaces and prototypes.",

        rating: "4.9",
        reviews: "230 reviews",
        students: "1,340",
        duration: "13 hours",
        level: "Intermediate",

        instructor: "Nour Ali",
        instructorRole: "UI/UX Design Instructor",
        instructorRating: "4.9 Instructor Rating",
        instructorStudents: "1500+ Students",

        price: "$27.99",

        about: [
            "Learn how to use Figma to create professional user interfaces and interactive prototypes.",
            "The course covers the complete design workflow from creating layouts to building interactive prototypes."
        ],

        learning: [
            "Understand the Figma interface",
            "Create frames and layouts",
            "Work with colors and typography",
            "Create reusable components",
            "Build interactive prototypes",
            "Design a complete UI project"
        ],

        features: [
            {
                icon: "fa-solid fa-play",
                text: "13 hours of video content"
            },
            {
                icon: "fa-solid fa-infinity",
                text: "Lifetime access"
            },
            {
                icon: "fa-solid fa-mobile-screen",
                text: "Learn on any device"
            },
            {
                icon: "fa-solid fa-certificate",
                text: "Certificate of completion"
            },
            {
                icon: "fa-solid fa-headset",
                text: "Learning support"
            }
        ],

        curriculum: [

            {
                title: "Getting Started with Figma",
                lessons: [
                    ["Introduction to Figma", "20 min"],
                    ["Understanding the Interface", "30 min"],
                    ["Creating Your First Design", "35 min"],
                    ["Working with Frames", "30 min"]
                ]
            },

            {
                title: "UI Design",
                lessons: [
                    ["Layouts and Grids", "40 min"],
                    ["Colors and Typography", "45 min"],
                    ["Creating UI Components", "50 min"],
                    ["Design Systems", "45 min"]
                ]
            },

            {
                title: "Prototyping",
                lessons: [
                    ["Prototype Fundamentals", "35 min"],
                    ["Creating Interactions", "45 min"],
                    ["Page Transitions", "35 min"],
                    ["Testing Prototypes", "40 min"]
                ]
            },

            {
                title: "Final UI Project",
                lessons: [
                    ["Project Planning", "30 min"],
                    ["Designing the Interface", "1 hour"],
                    ["Creating the Prototype", "50 min"],
                    ["Final Review", "40 min"]
                ]
            }

        ]

    }

};


// =====================================================
// GET CURRENT COURSE
// =====================================================

const urlParams =
    new URLSearchParams(window.location.search);

const courseKey =
    urlParams.get("course") || "javascript";

const course =
    courses[courseKey] || courses.javascript;


// =====================================================
// COURSE ELEMENTS
// =====================================================

const courseImage =
    document.getElementById("courseImage");

const courseCategory =
    document.getElementById("courseCategory");

const courseTitle =
    document.getElementById("courseTitle");

const courseDescription =
    document.getElementById("courseDescription");

const courseRating =
    document.getElementById("courseRating");

const reviewCount =
    document.getElementById("reviewCount");

const studentCount =
    document.getElementById("studentCount");

const courseDuration =
    document.getElementById("courseDuration");

const courseLevel =
    document.getElementById("courseLevel");

const instructorName =
    document.getElementById("instructorName");

const instructorNameLarge =
    document.getElementById("instructorNameLarge");

const instructorRole =
    document.getElementById("instructorRole");

const instructorRating =
    document.getElementById("instructorRating");

const instructorStudents =
    document.getElementById("instructorStudents");

const coursePrice =
    document.getElementById("coursePrice");

const learningGrid =
    document.getElementById("learningGrid");

const courseAbout =
    document.getElementById("courseAbout");

const curriculumContainer =
    document.getElementById("curriculumContainer");

const curriculumSummary =
    document.getElementById("curriculumSummary");

const courseFeatures =
    document.getElementById("courseFeatures");


// =====================================================
// BASIC COURSE INFORMATION
// =====================================================

if (courseImage) {
    courseImage.src = course.image;
    courseImage.alt = course.title;
}

if (courseCategory) {
    courseCategory.textContent = course.category;
}

if (courseTitle) {
    courseTitle.textContent = course.title;
}

if (courseDescription) {
    courseDescription.textContent = course.description;
}

if (courseRating) {
    courseRating.textContent = course.rating;
}

if (reviewCount) {
    reviewCount.textContent = course.reviews;
}

if (studentCount) {
    studentCount.textContent = course.students;
}

if (courseDuration) {
    courseDuration.textContent = course.duration;
}

if (courseLevel) {
    courseLevel.textContent = course.level;
}

if (instructorName) {
    instructorName.textContent = course.instructor;
}

if (instructorNameLarge) {
    instructorNameLarge.textContent = course.instructor;
}

if (instructorRole) {
    instructorRole.textContent = course.instructorRole;
}

if (instructorRating) {
    instructorRating.textContent = course.instructorRating;
}

if (instructorStudents) {
    instructorStudents.textContent = course.instructorStudents;
}

if (coursePrice) {
    coursePrice.textContent = course.price;
}


// =====================================================
// PAGE TITLE
// =====================================================

document.title =
    course.title + " | Skillora";


// =====================================================
// WHAT YOU'LL LEARN
// =====================================================

function loadLearningItems() {

    if (!learningGrid) {
        return;
    }

    learningGrid.innerHTML = "";

    for (let i = 0; i < course.learning.length; i++) {

        const item =
            document.createElement("div");

        item.className =
            "learning-item";

        item.innerHTML =
            '<i class="fa-solid fa-check"></i>' +
            '<span>' +
            course.learning[i] +
            '</span>';

        learningGrid.appendChild(item);
    }
}

loadLearningItems();


// =====================================================
// ABOUT COURSE
// =====================================================

function loadAboutCourse() {

    if (!courseAbout) {
        return;
    }

    courseAbout.innerHTML = "";

    for (let i = 0; i < course.about.length; i++) {

        const paragraph =
            document.createElement("p");

        paragraph.textContent =
            course.about[i];

        courseAbout.appendChild(paragraph);
    }
}

loadAboutCourse();


// =====================================================
// COURSE FEATURES
// =====================================================

function loadFeatures() {

    if (!courseFeatures) {
        return;
    }

    courseFeatures.innerHTML = "";

    for (let i = 0; i < course.features.length; i++) {

        const item =
            document.createElement("li");

        item.innerHTML =
            '<i class="' +
            course.features[i].icon +
            '"></i>' +
            '<span>' +
            course.features[i].text +
            '</span>';

        courseFeatures.appendChild(item);
    }
}

loadFeatures();


// =====================================================
// CURRICULUM
// =====================================================

function getLessonDuration(lessons) {

    let totalMinutes = 0;

    for (let i = 0; i < lessons.length; i++) {

        const duration =
            lessons[i][1];

        if (duration.includes("hour")) {

            const number =
                parseFloat(duration);

            totalMinutes +=
                number * 60;

        } else {

            const number =
                parseFloat(duration);

            totalMinutes +=
                number;
        }
    }

    return totalMinutes;
}


function formatDuration(minutes) {

    if (minutes >= 60) {

        const hours =
            Math.floor(minutes / 60);

        const remainingMinutes =
            minutes % 60;

        if (remainingMinutes === 0) {
            return hours + " hours";
        }

        return (
            hours +
            " hours " +
            remainingMinutes +
            " min"
        );
    }

    return minutes + " min";
}


// =====================================================
// CREATE LESSONS
// =====================================================

function createLessons(lessons) {

    let html = "";

    for (let i = 0; i < lessons.length; i++) {

        html += `

            <div class="lesson">

                <i class="fa-regular fa-circle-play"></i>

                <span>
                    ${lessons[i][0]}
                </span>

                <small>
                    ${lessons[i][1]}
                </small>

            </div>

        `;
    }

    return html;
}


// =====================================================
// LOAD CURRICULUM
// =====================================================

function loadCurriculum() {

    if (!curriculumContainer) {
        return;
    }

    curriculumContainer.innerHTML = "";

    let totalLessons = 0;

    for (
        let i = 0;
        i < course.curriculum.length;
        i++
    ) {

        const section =
            course.curriculum[i];

        totalLessons +=
            section.lessons.length;

        const curriculumItem =
            document.createElement("div");

        curriculumItem.className =
            "curriculum-item";

        const totalMinutes =
            getLessonDuration(
                section.lessons
            );

        curriculumItem.innerHTML = `

            <button
                class="curriculum-header"
                type="button"
            >

                <div class="curriculum-title">

                    <i class="fa-solid fa-chevron-down"></i>

                    <div>

                        <h3>
                            ${section.title}
                        </h3>

                        <span>
                            ${section.lessons.length}
                            lessons •
                            ${formatDuration(totalMinutes)}
                        </span>

                    </div>

                </div>

                <span class="section-number">
                    ${String(i + 1).padStart(2, "0")}
                </span>

            </button>

            <div class="lesson-list">

                ${createLessons(section.lessons)}

            </div>

        `;

        curriculumContainer.appendChild(
            curriculumItem
        );
    }

    if (curriculumSummary) {

        curriculumSummary.textContent =
            course.curriculum.length +
            " sections • " +
            totalLessons +
            " lessons • " +
            course.duration;
    }
}

loadCurriculum();


// =====================================================
// CURRICULUM ACCORDION
// =====================================================

function setupCurriculumAccordion() {

    const curriculumHeaders =
        document.querySelectorAll(
            ".curriculum-header"
        );

    for (
        let i = 0;
        i < curriculumHeaders.length;
        i++
    ) {

        curriculumHeaders[i].addEventListener(
            "click",
            function () {

                const header =
                    this;

                const curriculumItem =
                    header.parentElement;

                const lessonList =
                    curriculumItem.querySelector(
                        ".lesson-list"
                    );

                header.classList.toggle(
                    "active"
                );

                lessonList.classList.toggle(
                    "show"
                );
            }
        );
    }
}

setupCurriculumAccordion();


// =====================================================
// EXPAND / COLLAPSE ALL
// =====================================================

const expandAllBtn =
    document.getElementById("expandAllBtn");

if (expandAllBtn) {

    let allExpanded = false;

    expandAllBtn.addEventListener(
        "click",
        function () {

            const items =
                document.querySelectorAll(
                    ".curriculum-item"
                );

            for (
                let i = 0;
                i < items.length;
                i++
            ) {

                const header =
                    items[i].querySelector(
                        ".curriculum-header"
                    );

                const lessonList =
                    items[i].querySelector(
                        ".lesson-list"
                    );

                if (!allExpanded) {

                    header.classList.add(
                        "active"
                    );

                    lessonList.classList.add(
                        "show"
                    );

                } else {

                    header.classList.remove(
                        "active"
                    );

                    lessonList.classList.remove(
                        "show"
                    );
                }
            }

            allExpanded =
                !allExpanded;

            if (allExpanded) {

                this.textContent =
                    "Collapse All";

            } else {

                this.textContent =
                    "Expand All";
            }
        }
    );
}


// =====================================================
// WISHLIST ELEMENTS
// =====================================================

const wishlistBtn =
    document.getElementById("wishlistBtn");

const wishlistNavBtn =
    document.getElementById("wishlistNavBtn");

const wishlistOverlay =
    document.getElementById("wishlistOverlay");

const wishlistClose =
    document.getElementById("wishlistClose");

const wishlistPopupContent =
    document.getElementById(
        "wishlistPopupContent"
    );

const wishlistPopupEmpty =
    document.getElementById(
        "wishlistPopupEmpty"
    );

const wishlistCount =
    document.getElementById("wishlistCount");


// =====================================================
// GET WISHLIST
// =====================================================
// Wishlist is available ONLY while logged in.

function getWishlist() {

    const loggedIn =
        localStorage.getItem(
            "skilloraLoggedIn"
        ) === "true";

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
            JSON.parse(savedWishlist);

        if (Array.isArray(wishlist)) {
            return wishlist;
        }

        return [];

    } catch (error) {

        return [];
    }
}


// =====================================================
// SAVE WISHLIST
// =====================================================

function saveWishlist(wishlist) {

    const loggedIn =
        localStorage.getItem(
            "skilloraLoggedIn"
        ) === "true";

    if (!loggedIn) {

        localStorage.removeItem(
            "skilloraWishlist"
        );

        return;
    }

    localStorage.setItem(
        "skilloraWishlist",
        JSON.stringify(wishlist)
    );
}


// =====================================================
// UPDATE COURSE WISHLIST BUTTON
// =====================================================

function updateCourseWishlistButton() {

    if (!wishlistBtn) {
        return;
    }

    const wishlist =
        getWishlist();

    if (wishlist.includes(courseKey)) {

        wishlistBtn.classList.add(
            "active"
        );

        wishlistBtn.innerHTML =
            '<i class="fa-solid fa-heart"></i>' +
            " Added to Wishlist";

    } else {

        wishlistBtn.classList.remove(
            "active"
        );

        wishlistBtn.innerHTML =
            '<i class="fa-regular fa-heart"></i>' +
            " Add to Wishlist";
    }
}


// =====================================================
// UPDATE NAVBAR WISHLIST
// =====================================================

function updateNavbarWishlist() {

    if (!wishlistNavBtn) {
        return;
    }

    const icon =
        wishlistNavBtn.querySelector("i");

    if (!icon) {
        return;
    }

    const wishlist =
        getWishlist();

    if (wishlist.length > 0) {

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


// =====================================================
// ADD / REMOVE COURSE FROM WISHLIST
// =====================================================

if (wishlistBtn) {

    updateCourseWishlistButton();

    wishlistBtn.addEventListener(
        "click",
        function () {

            const loggedIn =
                localStorage.getItem(
                    "skilloraLoggedIn"
                ) === "true";

            // =========================================
            // NOT LOGGED IN → GO DIRECTLY TO LOGIN
            // =========================================

            if (!loggedIn) {

                window.location.href =
                    "../index.html?openLogin=1";

                return;
            }

            let wishlist =
                getWishlist();

            const index =
                wishlist.indexOf(
                    courseKey
                );

            if (index === -1) {

                wishlist.push(
                    courseKey
                );

            } else {

                wishlist.splice(
                    index,
                    1
                );
            }

            saveWishlist(
                wishlist
            );

            updateCourseWishlistButton();

            updateNavbarWishlist();
        }
    );
}


// =====================================================
// OPEN WISHLIST
// =====================================================

function openWishlist() {

    const loggedIn =
        localStorage.getItem(
            "skilloraLoggedIn"
        ) === "true";

    // =========================================
    // NOT LOGGED IN → GO DIRECTLY TO LOGIN
    // =========================================

    if (!loggedIn) {

        window.location.href =
            "../index.html?openLogin=1";

        return;
    }

    displayWishlistPopup();

    if (wishlistOverlay) {

        wishlistOverlay.classList.add(
            "show"
        );

        document.body.style.overflow =
            "hidden";
    }
}


// =====================================================
// CLOSE WISHLIST
// =====================================================

function closeWishlist() {

    if (wishlistOverlay) {

        wishlistOverlay.classList.remove(
            "show"
        );
    }

    restoreBodyScroll();
}


// =====================================================
// DISPLAY WISHLIST
// =====================================================

function displayWishlistPopup() {

    if (
        !wishlistPopupContent ||
        !wishlistPopupEmpty ||
        !wishlistCount
    ) {
        return;
    }

    const wishlist =
        getWishlist();

    wishlistPopupContent.innerHTML =
        "";

    if (wishlist.length === 1) {

        wishlistCount.textContent =
            "1 course saved";

    } else {

        wishlistCount.textContent =
            wishlist.length +
            " courses saved";
    }

    if (wishlist.length === 0) {

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

        const savedCourseKey =
            wishlist[i];

        const savedCourse =
            courses[savedCourseKey];

        if (!savedCourse) {
            continue;
        }

        const item =
            document.createElement("div");

        item.className =
            "wishlist-popup-item";

        item.innerHTML = `

            <div class="wishlist-popup-image">

                <img
                    src="${savedCourse.image}"
                    alt="${savedCourse.title}"
                >

            </div>

            <div class="wishlist-popup-info">

                <span class="wishlist-popup-category">
                    ${savedCourse.category}
                </span>

                <h3 title="${savedCourse.title}">
                    ${savedCourse.title}
                </h3>

                <div class="wishlist-popup-details">

                    <span class="wishlist-popup-rating">

                        <i class="fa-solid fa-star"></i>

                        ${savedCourse.rating}

                    </span>

                    <span class="wishlist-popup-price">
                        ${savedCourse.price}
                    </span>

                </div>

            </div>

            <div class="wishlist-popup-actions">

                <a
                    href="course-details.html?course=${savedCourseKey}"
                    class="wishlist-view"
                    title="View Course"
                >

                    <i class="fa-solid fa-arrow-right"></i>

                </a>

                <button
                    class="wishlist-remove-popup"
                    data-course="${savedCourseKey}"
                    title="Remove"
                    type="button"
                >

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


// =====================================================
// REMOVE WISHLIST BUTTONS
// =====================================================

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

                const savedCourseKey =
                    this.getAttribute(
                        "data-course"
                    );

                let wishlist =
                    getWishlist();

                const newWishlist = [];

                for (
                    let j = 0;
                    j < wishlist.length;
                    j++
                ) {

                    if (
                        wishlist[j] !==
                        savedCourseKey
                    ) {

                        newWishlist.push(
                            wishlist[j]
                        );
                    }
                }

                saveWishlist(
                    newWishlist
                );

                displayWishlistPopup();

                updateCourseWishlistButton();

                updateNavbarWishlist();
            }
        );
    }
}


// =====================================================
// OPEN WISHLIST BUTTON
// =====================================================

if (wishlistNavBtn) {

    wishlistNavBtn.addEventListener(
        "click",
        function (event) {

            event.preventDefault();

            openWishlist();
        }
    );
}


// =====================================================
// CLOSE WISHLIST BUTTON
// =====================================================

if (wishlistClose) {

    wishlistClose.addEventListener(
        "click",
        function () {

            closeWishlist();
        }
    );
}


// =====================================================
// CLICK OUTSIDE WISHLIST
// =====================================================

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


// =====================================================
// ENROLLMENT POPUP
// =====================================================

const enrollBtn =
    document.getElementById("enrollBtn");

const coursePopup =
    document.getElementById("coursePopup");

const popupClose =
    document.getElementById("popupClose");

const popupOk =
    document.getElementById("popupOk");

const popupTitle =
    document.getElementById("popupTitle");

const popupMessage =
    document.getElementById("popupMessage");


// =====================================================
// SHOW ENROLLMENT POPUP
// =====================================================

function showPopup(title, message) {

    if (
        !coursePopup ||
        !popupTitle ||
        !popupMessage
    ) {
        return;
    }

    popupTitle.textContent =
        title;

    popupMessage.textContent =
        message;

    coursePopup.classList.add(
        "show"
    );

    document.body.style.overflow =
        "hidden";
}


// =====================================================
// ENROLL BUTTON
// =====================================================

if (enrollBtn) {

    enrollBtn.addEventListener(
        "click",
        function () {

            const loggedIn =
                localStorage.getItem(
                    "skilloraLoggedIn"
                ) === "true";

            if (!loggedIn) {

                showPopup(
                    "Login Required",
                    "Please login first before enrolling in a course."
                );

                return;
            }

            let enrolledCourses = [];

            try {

                enrolledCourses =
                    JSON.parse(
                        localStorage.getItem(
                            "skilloraEnrolledCourses"
                        ) || "[]"
                    );

                if (
                    !Array.isArray(
                        enrolledCourses
                    )
                ) {

                    enrolledCourses = [];
                }

            } catch (error) {

                enrolledCourses = [];
            }

            let alreadyEnrolled =
                false;

            for (
                let i = 0;
                i < enrolledCourses.length;
                i++
            ) {

                if (
                    enrolledCourses[i].courseKey ===
                    courseKey
                ) {

                    alreadyEnrolled =
                        true;

                    break;
                }
            }

            if (!alreadyEnrolled) {

                enrolledCourses.push({

                    courseKey:
                        courseKey,

                    title:
                        course.title,

                    category:
                        course.category,

                    image:
                        course.image,

                    progress:
                        0,

                    paymentStatus:
                        "pending"
                });

                localStorage.setItem(
                    "skilloraEnrolledCourses",
                    JSON.stringify(
                        enrolledCourses
                    )
                );
            }

            if (alreadyEnrolled) {

                showPopup(
                    "Already Added",
                    "This course is already in your My Courses."
                );

            } else {

                showPopup(
                    "Course Added!",
                    course.title +
                    " has been added to My Courses. Payment is required to access the course."
                );
            }
        }
    );
}


// =====================================================
// CLOSE ENROLLMENT POPUP
// =====================================================

function closePopup() {

    if (coursePopup) {

        coursePopup.classList.remove(
            "show"
        );
    }

    restoreBodyScroll();
}


if (popupClose) {

    popupClose.addEventListener(
        "click",
        closePopup
    );
}


if (popupOk) {

    popupOk.addEventListener(
        "click",
        closePopup
    );
}


if (coursePopup) {

    coursePopup.addEventListener(
        "click",
        function (event) {

            if (
                event.target ===
                coursePopup
            ) {

                closePopup();
            }
        }
    );
}


// =====================================================
// USER / DASHBOARD ELEMENTS
// =====================================================

const profileNavBtn =
    document.getElementById(
        "profileNavBtn"
    );

const dashboardOverlay =
    document.getElementById(
        "dashboardOverlay"
    );

const dashboardClose =
    document.getElementById(
        "dashboardClose"
    );

const dashboardUserName =
    document.getElementById(
        "dashboardUserName"
    );

const dashboardUserEmail =
    document.getElementById(
        "dashboardUserEmail"
    );

const dashboardCourses =
    document.getElementById(
        "dashboardCourses"
    );

const dashboardWishlist =
    document.getElementById(
        "dashboardWishlist"
    );

const dashboardProfile =
    document.getElementById(
        "dashboardProfile"
    );

const dashboardLogout =
    document.getElementById(
        "dashboardLogout"
    );


// =====================================================
// MY COURSES ELEMENTS
// =====================================================

const myCoursesOverlay =
    document.getElementById(
        "myCoursesOverlay"
    );

const myCoursesClose =
    document.getElementById(
        "myCoursesClose"
    );

const myCoursesList =
    document.getElementById(
        "myCoursesList"
    );

const myCoursesEmpty =
    document.getElementById(
        "myCoursesEmpty"
    );

const browseCoursesBtn =
    document.getElementById(
        "browseCoursesBtn"
    );


// =====================================================
// PAYMENT ELEMENTS
// =====================================================

const paymentOverlay =
    document.getElementById(
        "paymentOverlay"
    );

const paymentClose =
    document.getElementById(
        "paymentClose"
    );

const paymentMessage =
    document.getElementById(
        "paymentMessage"
    );

const paymentOkBtn =
    document.getElementById(
        "paymentOkBtn"
    );


// =====================================================
// PROFILE ELEMENTS
// =====================================================

const myProfileOverlay =
    document.getElementById(
        "myProfileOverlay"
    );

const myProfileClose =
    document.getElementById(
        "myProfileClose"
    );

const profileForm =
    document.getElementById(
        "profileForm"
    );

const profileName =
    document.getElementById(
        "profileName"
    );

const profileEmail =
    document.getElementById(
        "profileEmail"
    );

const profileDisplayName =
    document.getElementById(
        "profileDisplayName"
    );

const profileDisplayEmail =
    document.getElementById(
        "profileDisplayEmail"
    );

const profileMessage =
    document.getElementById(
        "profileMessage"
    );


// =====================================================
// MAKE EMAIL READONLY
// =====================================================

if (profileEmail) {

    profileEmail.readOnly = true;

    profileEmail.setAttribute(
        "readonly",
        "readonly"
    );

    profileEmail.setAttribute(
        "aria-readonly",
        "true"
    );
}


// =====================================================
// GET CURRENT USER
// =====================================================

function getCurrentUser() {

    const loggedIn =
        localStorage.getItem(
            "skilloraLoggedIn"
        ) === "true";

    if (!loggedIn) {
        return null;
    }

    const savedUser =
        localStorage.getItem(
            "skilloraUser"
        );

    if (!savedUser) {
        return null;
    }

    try {

        return JSON.parse(
            savedUser
        );

    } catch (error) {

        return null;
    }
}


// =====================================================
// UPDATE DASHBOARD USER
// =====================================================

function updateDashboardUser() {

    const user =
        getCurrentUser();

    if (!user) {

        if (dashboardUserName) {

            dashboardUserName.textContent =
                "User";
        }

        if (dashboardUserEmail) {

            dashboardUserEmail.textContent =
                "email@example.com";
        }

        if (profileDisplayName) {

            profileDisplayName.textContent =
                "User";
        }

        if (profileDisplayEmail) {

            profileDisplayEmail.textContent =
                "email@example.com";
        }

        return;
    }

    const name =
        user.name ||
        user.fullName ||
        "User";

    const email =
        user.email ||
        "email@example.com";

    if (dashboardUserName) {

        dashboardUserName.textContent =
            name;
    }

    if (dashboardUserEmail) {

        dashboardUserEmail.textContent =
            email;
    }

    if (profileDisplayName) {

        profileDisplayName.textContent =
            name;
    }

    if (profileDisplayEmail) {

        profileDisplayEmail.textContent =
            email;
    }
}


// =====================================================
// OPEN DASHBOARD
// =====================================================

function openDashboard() {

    const loggedIn =
        localStorage.getItem(
            "skilloraLoggedIn"
        ) === "true";

    if (!loggedIn) {
        return;
    }

    const user =
        getCurrentUser();

    if (!user) {
        return;
    }

    updateDashboardUser();

    if (dashboardOverlay) {

        dashboardOverlay.classList.add(
            "show"
        );

        document.body.style.overflow =
            "hidden";
    }
}


// =====================================================
// CLOSE DASHBOARD
// =====================================================

function closeDashboard() {

    if (dashboardOverlay) {

        dashboardOverlay.classList.remove(
            "show"
        );
    }

    restoreBodyScroll();
}


// =====================================================
// PROFILE NAV BUTTON
// =====================================================

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

                window.location.href =
                    "../index.html?openSignup=1";
            }
        }
    );
}


// =====================================================
// DASHBOARD CLOSE
// =====================================================

if (dashboardClose) {

    dashboardClose.addEventListener(
        "click",
        function () {

            closeDashboard();
        }
    );
}


// =====================================================
// CLICK OUTSIDE DASHBOARD
// =====================================================

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


// =====================================================
// GET ENROLLED COURSES
// =====================================================

function getEnrolledCourses() {

    const savedCourses =
        localStorage.getItem(
            "skilloraEnrolledCourses"
        );

    if (!savedCourses) {
        return [];
    }

    try {

        const coursesList =
            JSON.parse(
                savedCourses
            );

        if (
            Array.isArray(
                coursesList
            )
        ) {

            return coursesList;
        }

        return [];

    } catch (error) {

        return [];
    }
}


// =====================================================
// SAVE ENROLLED COURSES
// =====================================================

function saveEnrolledCourses(
    coursesList
) {

    localStorage.setItem(
        "skilloraEnrolledCourses",
        JSON.stringify(
            coursesList
        )
    );
}


// =====================================================
// FIX COURSE IMAGE PATH
// =====================================================

function getCourseImagePath(
    imagePath
) {

    if (!imagePath) {
        return "";
    }

    if (
        imagePath.startsWith(
            "../images/courses/"
        )
    ) {

        return imagePath;
    }

    if (
        imagePath.startsWith(
            "pages/images/courses/"
        )
    ) {

        return (
            "../" +
            imagePath.substring(
                "pages/".length
            )
        );
    }

    if (
        imagePath.startsWith(
            "/pages/images/courses/"
        )
    ) {

        return (
            "../images/courses/" +
            imagePath.substring(
                "/pages/images/courses/".length
            )
        );
    }

    if (
        imagePath.startsWith(
            "/public/pages/images/courses/"
        )
    ) {

        return (
            "../images/courses/" +
            imagePath.substring(
                "/public/pages/images/courses/".length
            )
        );
    }

    if (
        imagePath.startsWith(
            "public/pages/images/courses/"
        )
    ) {

        return (
            "../images/courses/" +
            imagePath.substring(
                "public/pages/images/courses/".length
            )
        );
    }

    if (
        imagePath.startsWith(
            "images/courses/"
        )
    ) {

        return (
            "../" +
            imagePath
        );
    }

    if (
        imagePath.startsWith(
            "/images/courses/"
        )
    ) {

        return (
            "../images/courses/" +
            imagePath.substring(
                "/images/courses/".length
            )
        );
    }

    return imagePath;
}


// =====================================================
// DISPLAY MY COURSES
// =====================================================

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
        enrolledCourses.length ===
        0
    ) {

        myCoursesEmpty.classList.add(
            "show"
        );

        return;
    }

    myCoursesEmpty.classList.remove(
        "show"
    );

    for (
        let i = 0;
        i < enrolledCourses.length;
        i++
    ) {

        const savedCourse =
            enrolledCourses[i];

        const savedCourseTitle =
            savedCourse.title ||
            "Course";

        const savedCourseCategory =
            savedCourse.category ||
            "Learning";

        const savedCourseImage =
            getCourseImagePath(
                savedCourse.image
            );

        const progress =
            savedCourse.progress ||
            0;

        const item =
            document.createElement(
                "div"
            );

        item.className =
            "my-course-item";

        item.innerHTML = `

            <div class="my-course-image">

                <img
                    src="${savedCourseImage}"
                    alt="${savedCourseTitle}"
                >

            </div>

            <div class="my-course-info">

                <span class="my-course-category">
                    ${savedCourseCategory}
                </span>

                <h3 title="${savedCourseTitle}">
                    ${savedCourseTitle}
                </h3>

                <div class="my-course-status">
                    Progress: ${progress}%
                </div>

            </div>

            <div class="my-course-actions">

                <button
                    type="button"
                    class="my-course-continue"
                    data-course-key="${savedCourse.courseKey}"
                >
                    <i class="fa-solid fa-play"></i>
                    Continue
                </button>

                <button
                    type="button"
                    class="my-course-remove"
                    data-course-key="${savedCourse.courseKey}"
                    aria-label="Remove course"
                    title="Remove course"
                >
                    <i class="fa-solid fa-xmark"></i>
                </button>

            </div>
        `;

        myCoursesList.appendChild(
            item
        );
    }

    setupMyCourseButtons();
}


// =====================================================
// MY COURSE BUTTONS
// =====================================================

function setupMyCourseButtons() {

    const continueButtons =
        document.querySelectorAll(
            ".my-course-continue"
        );

    const removeButtons =
        document.querySelectorAll(
            ".my-course-remove"
        );


    // =================================================
    // CONTINUE BUTTON
    // =================================================

    for (
        let i = 0;
        i < continueButtons.length;
        i++
    ) {

        continueButtons[i].addEventListener(
            "click",
            function () {

                const savedCourseKey =
                    this.getAttribute(
                        "data-course-key"
                    );

                const savedCourse =
                    courses[
                        savedCourseKey
                    ];

                if (!savedCourse) {
                    return;
                }

                showCoursePaymentMessage(
                    savedCourse.title
                );
            }
        );
    }


    // =================================================
    // REMOVE BUTTON
    // =================================================

    for (
        let i = 0;
        i < removeButtons.length;
        i++
    ) {

        removeButtons[i].addEventListener(
            "click",
            function () {

                const savedCourseKey =
                    this.getAttribute(
                        "data-course-key"
                    );

                const enrolledCourses =
                    getEnrolledCourses();

                const updatedCourses = [];

                for (
                    let j = 0;
                    j < enrolledCourses.length;
                    j++
                ) {

                    if (
                        enrolledCourses[j].courseKey !==
                        savedCourseKey
                    ) {

                        updatedCourses.push(
                            enrolledCourses[j]
                        );
                    }
                }

                saveEnrolledCourses(
                    updatedCourses
                );

                displayMyCourses();
            }
        );
    }
}


// =====================================================
// SHOW PAYMENT MESSAGE
// =====================================================

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
        courseTitle +
        "</strong> have been sent to your email.";

    paymentOverlay.classList.add(
        "show"
    );

    document.body.style.overflow =
        "hidden";
}


// =====================================================
// CLOSE PAYMENT POPUP
// =====================================================

function closePaymentPopup() {

    if (paymentOverlay) {

        paymentOverlay.classList.remove(
            "show"
        );
    }

    restoreBodyScroll();
}


// =====================================================
// PAYMENT CLOSE BUTTON
// =====================================================

if (paymentClose) {

    paymentClose.addEventListener(
        "click",
        function () {

            closePaymentPopup();
        }
    );
}


// =====================================================
// PAYMENT OK BUTTON
// =====================================================

if (paymentOkBtn) {

    paymentOkBtn.addEventListener(
        "click",
        function () {

            closePaymentPopup();
        }
    );
}


// =====================================================
// IMPORTANT
// PAYMENT DOES NOT CLOSE:
// - BY CLICKING OUTSIDE
// - BY ESCAPE
// =====================================================


// =====================================================
// OPEN MY COURSES
// =====================================================

function openMyCourses() {

    displayMyCourses();

    if (myCoursesOverlay) {

        myCoursesOverlay.classList.add(
            "show"
        );

        document.body.style.overflow =
            "hidden";
    }
}


// =====================================================
// CLOSE MY COURSES
// =====================================================

function closeMyCourses() {

    if (myCoursesOverlay) {

        myCoursesOverlay.classList.remove(
            "show"
        );
    }

    restoreBodyScroll();
}


// =====================================================
// MY COURSES CLOSE
// =====================================================

if (myCoursesClose) {

    myCoursesClose.addEventListener(
        "click",
        function () {

            closeMyCourses();
        }
    );
}


// =====================================================
// CLICK OUTSIDE MY COURSES
// =====================================================

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


// =====================================================
// DASHBOARD → MY COURSES
// =====================================================

if (dashboardCourses) {

    dashboardCourses.addEventListener(
        "click",
        function () {

            closeDashboard();

            openMyCourses();
        }
    );
}


// =====================================================
// BROWSE COURSES
// =====================================================

if (browseCoursesBtn) {

    browseCoursesBtn.addEventListener(
        "click",
        function () {

            closeMyCourses();

            window.location.href =
                "courses.html";
        }
    );
}


// =====================================================
// LOAD PROFILE DATA
// =====================================================

function loadProfileData() {

    if (profileEmail) {

        profileEmail.readOnly =
            true;

        profileEmail.setAttribute(
            "readonly",
            "readonly"
        );
    }

    const user =
        getCurrentUser();

    if (!user) {

        if (profileName) {

            profileName.value =
                "";
        }

        if (profileEmail) {

            profileEmail.value =
                "";
        }

        if (profileDisplayName) {

            profileDisplayName.textContent =
                "User";
        }

        if (profileDisplayEmail) {

            profileDisplayEmail.textContent =
                "email@example.com";
        }

        return;
    }

    const name =
        user.name ||
        user.fullName ||
        "";

    const email =
        user.email ||
        "";

    if (profileName) {

        profileName.value =
            name;
    }

    if (profileEmail) {

        profileEmail.value =
            email;

        profileEmail.readOnly =
            true;
    }

    if (profileDisplayName) {

        profileDisplayName.textContent =
            name ||
            "User";
    }

    if (profileDisplayEmail) {

        profileDisplayEmail.textContent =
            email ||
            "email@example.com";
    }
}


// =====================================================
// OPEN PROFILE
// =====================================================

function openMyProfile() {

    const loggedIn =
        localStorage.getItem(
            "skilloraLoggedIn"
        ) === "true";

    if (!loggedIn) {
        return;
    }

    loadProfileData();

    if (profileMessage) {

        profileMessage.textContent =
            "";
    }

    if (myProfileOverlay) {

        myProfileOverlay.classList.add(
            "show"
        );

        document.body.style.overflow =
            "hidden";
    }
}


// =====================================================
// CLOSE PROFILE
// =====================================================

function closeMyProfile() {

    if (myProfileOverlay) {

        myProfileOverlay.classList.remove(
            "show"
        );
    }

    restoreBodyScroll();
}


// =====================================================
// PROFILE CLOSE
// =====================================================

if (myProfileClose) {

    myProfileClose.addEventListener(
        "click",
        function () {

            closeMyProfile();
        }
    );
}


// =====================================================
// CLICK OUTSIDE PROFILE
// =====================================================

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


// =====================================================
// DASHBOARD → PROFILE
// =====================================================

if (dashboardProfile) {

    dashboardProfile.addEventListener(
        "click",
        function () {

            closeDashboard();

            openMyProfile();
        }
    );
}


// =====================================================
// SAVE PROFILE
// =====================================================

if (profileForm) {

    profileForm.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();

            const user =
                getCurrentUser();

            if (!user) {

                if (profileMessage) {

                    profileMessage.textContent =
                        "Please login first.";

                    profileMessage.style.color =
                        "#e05245";
                }

                return;
            }

            const newName =
                profileName
                    ? profileName.value.trim()
                    : "";

            if (!newName) {

                if (profileMessage) {

                    profileMessage.textContent =
                        "Please enter your name.";

                    profileMessage.style.color =
                        "#e05245";
                }

                return;
            }


            // =========================================
            // ONLY NAME IS UPDATED
            // EMAIL CANNOT BE CHANGED
            // =========================================

            user.name =
                newName;

            localStorage.setItem(
                "skilloraUser",
                JSON.stringify(
                    user
                )
            );


            if (profileDisplayName) {

                profileDisplayName.textContent =
                    newName;
            }

            if (profileDisplayEmail) {

                profileDisplayEmail.textContent =
                    user.email ||
                    "email@example.com";
            }

            if (profileMessage) {

                profileMessage.textContent =
                    "Profile updated successfully.";

                profileMessage.style.color =
                    "#16a34a";
            }

            updateDashboardUser();
        }
    );
}


// =====================================================
// DASHBOARD → WISHLIST
// =====================================================

if (dashboardWishlist) {

    dashboardWishlist.addEventListener(
        "click",
        function () {

            closeDashboard();

            openWishlist();
        }
    );
}


// =====================================================
// LOGOUT
// =====================================================

function logoutUser() {

    // ---------------------------------------------
    // Remove login status
    // ---------------------------------------------

    localStorage.removeItem(
        "skilloraLoggedIn"
    );


    // ---------------------------------------------
    // Remove current user
    // ---------------------------------------------

    localStorage.removeItem(
        "skilloraUser"
    );


    // ---------------------------------------------
    // Remove wishlist completely on logout
    // My Courses are NOT removed.
    // ---------------------------------------------

    localStorage.removeItem(
        "skilloraWishlist"
    );


    // ---------------------------------------------
    // Clear wishlist UI immediately
    // ---------------------------------------------

    if (wishlistPopupContent) {

        wishlistPopupContent.innerHTML =
            "";
    }

    if (wishlistCount) {

        wishlistCount.textContent =
            "0 courses saved";
    }

    if (wishlistPopupEmpty) {

        wishlistPopupEmpty.classList.add(
            "show"
        );
    }

    if (wishlistBtn) {

        wishlistBtn.classList.remove(
            "active"
        );

        wishlistBtn.innerHTML =
            '<i class="fa-regular fa-heart"></i>' +
            " Add to Wishlist";
    }

    if (wishlistNavBtn) {

        wishlistNavBtn.classList.remove(
            "has-items"
        );

        const icon =
            wishlistNavBtn.querySelector("i");

        if (icon) {

            icon.className =
                "fa-regular fa-heart";
        }
    }


    // ---------------------------------------------
    // Close dashboard and all overlays
    // ---------------------------------------------

    closeDashboard();

    closeMyCourses();

    closeMyProfile();

    closeWishlist();

    closePopup();


    /*
        Do NOT hide the profile icon.
        It should stay visible after logout.
    */

    if (profileNavBtn) {

        profileNavBtn.style.display =
            "flex";

        profileNavBtn.classList.remove(
            "hidden"
        );
    }


    // ---------------------------------------------
    // Refresh page
    // ---------------------------------------------

    window.location.reload();
}


// =====================================================
// LOGOUT BUTTON
// =====================================================

if (dashboardLogout) {

    dashboardLogout.addEventListener(
        "click",
        function () {

            logoutUser();
        }
    );
}


// =====================================================
// RESTORE BODY SCROLL
// =====================================================

function restoreBodyScroll() {

    let overlayOpen =
        false;

    if (
        dashboardOverlay &&
        dashboardOverlay.classList.contains(
            "show"
        )
    ) {

        overlayOpen =
            true;
    }

    if (
        myCoursesOverlay &&
        myCoursesOverlay.classList.contains(
            "show"
        )
    ) {

        overlayOpen =
            true;
    }

    if (
        paymentOverlay &&
        paymentOverlay.classList.contains(
            "show"
        )
    ) {

        overlayOpen =
            true;
    }

    if (
        myProfileOverlay &&
        myProfileOverlay.classList.contains(
            "show"
        )
    ) {

        overlayOpen =
            true;
    }

    if (
        wishlistOverlay &&
        wishlistOverlay.classList.contains(
            "show"
        )
    ) {

        overlayOpen =
            true;
    }

    if (
        coursePopup &&
        coursePopup.classList.contains(
            "show"
        )
    ) {

        overlayOpen =
            true;
    }

    if (overlayOpen) {

        document.body.style.overflow =
            "hidden";

    } else {

        document.body.style.overflow =
            "";
    }
}


// =====================================================
// ESCAPE KEY
// =====================================================

document.addEventListener(
    "keydown",
    function (event) {

        if (event.key !== "Escape") {
            return;
        }


        // ---------------------------------------------
        // PAYMENT CANNOT BE CLOSED WITH ESCAPE
        // ---------------------------------------------

        if (
            paymentOverlay &&
            paymentOverlay.classList.contains(
                "show"
            )
        ) {

            return;
        }


        // ---------------------------------------------
        // ENROLLMENT POPUP
        // ---------------------------------------------

        if (
            coursePopup &&
            coursePopup.classList.contains(
                "show"
            )
        ) {

            closePopup();

            return;
        }


        // ---------------------------------------------
        // WISHLIST
        // ---------------------------------------------

        if (
            wishlistOverlay &&
            wishlistOverlay.classList.contains(
                "show"
            )
        ) {

            closeWishlist();

            return;
        }


        // ---------------------------------------------
        // DASHBOARD
        // ---------------------------------------------

        if (
            dashboardOverlay &&
            dashboardOverlay.classList.contains(
                "show"
            )
        ) {

            closeDashboard();

            return;
        }


        // ---------------------------------------------
        // MY COURSES
        // ---------------------------------------------

        if (
            myCoursesOverlay &&
            myCoursesOverlay.classList.contains(
                "show"
            )
        ) {

            closeMyCourses();

            return;
        }


        // ---------------------------------------------
        // MY PROFILE
        // ---------------------------------------------

        if (
            myProfileOverlay &&
            myProfileOverlay.classList.contains(
                "show"
            )
        ) {

            closeMyProfile();

            return;
        }
    }
);


// =====================================================
// INITIALIZE
// =====================================================

updateCourseWishlistButton();

updateNavbarWishlist();

updateDashboardUser();

loadProfileData();

displayMyCourses();