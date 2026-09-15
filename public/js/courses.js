/* =====================================================
   SKILLORA COURSES PAGE
===================================================== */


/* =========================
   ELEMENTS
========================= */

const courseSearch = document.getElementById("courseSearch");
const navSearch = document.getElementById("navSearch");
const searchBtn = document.getElementById("searchBtn");

const filterButtons = document.querySelectorAll(".filter-btn");
const courseCards = document.querySelectorAll(".course-card");

const courseCount = document.getElementById("courseCount");
const noResults = document.getElementById("noResults");
const loadMore = document.getElementById("loadMore");

const wishlistButtons = document.querySelectorAll(".wishlist");


/* =========================
   VARIABLES
========================= */

let currentCategory = "all";
let visibleCourses = 8;


/* =========================
   NORMALIZE TEXT
========================= */

function normalizeText(text) {

    return text
        .toLowerCase()
        .trim()
        .replace(/\s+/g, "")
        .replace(/\//g, "");

}


/* =========================
   FILTER COURSES
========================= */

function filterCourses() {

    const searchValue = normalizeText(courseSearch.value);

    let matchingCards = [];


    /* =========================
       CHECK EVERY COURSE
    ========================= */

    for (let i = 0; i < courseCards.length; i++) {

        const card = courseCards[i];


        /* =========================
           GET CATEGORY
        ========================= */

        const category = normalizeText(
            card.getAttribute("data-category") || ""
        );


        /* =========================
           GET COURSE TITLE FROM H3
        ========================= */

        const titleElement = card.querySelector("h3");

        const title = normalizeText(
            titleElement ? titleElement.textContent : ""
        );


        /* =========================
           CATEGORY MATCH
        ========================= */

        let categoryMatch = true;

        if (currentCategory !== "all") {

            categoryMatch =
                normalizeText(currentCategory) === category;

        }


        /* =========================
           SEARCH MATCH
           SEARCH ONLY IN H3
        ========================= */

        let searchMatch = true;

        if (searchValue !== "") {

            searchMatch = title.includes(searchValue);

        }


        /* =========================
           FINAL MATCH
        ========================= */

        if (categoryMatch && searchMatch) {

            matchingCards.push(card);

        }

    }


    /* =========================
       HIDE ALL COURSES
    ========================= */

    for (let i = 0; i < courseCards.length; i++) {

        courseCards[i].style.display = "none";

    }


    /* =========================
       SHOW MATCHING COURSES
    ========================= */

    for (
        let i = 0;
        i < matchingCards.length && i < visibleCourses;
        i++
    ) {

        matchingCards[i].style.display = "block";

    }


    /* =========================
       UPDATE COURSE COUNT
    ========================= */

    if (courseCount) {

        courseCount.textContent = matchingCards.length;

    }


    /* =========================
       NO RESULTS
    ========================= */

    if (noResults) {

        if (matchingCards.length === 0) {

            noResults.style.display = "block";

        } else {

            noResults.style.display = "none";

        }

    }


    /* =========================
       LOAD MORE
    ========================= */

    if (loadMore) {

        if (matchingCards.length > visibleCourses) {

            loadMore.style.display = "block";

        } else {

            loadMore.style.display = "none";

        }

    }

}


/* =========================
   CATEGORY FILTER BUTTONS
========================= */

for (let i = 0; i < filterButtons.length; i++) {

    filterButtons[i].addEventListener("click", function () {


        /* Remove active from all buttons */

        for (let j = 0; j < filterButtons.length; j++) {

            filterButtons[j].classList.remove("active");

        }


        /* Add active to clicked button */

        this.classList.add("active");


        /* Get category */

        currentCategory =
            this.getAttribute("data-category");


        /* Reset visible courses */

        visibleCourses = 8;


        /* Apply filter */

        filterCourses();

    });

}


/* =========================
   MAIN COURSE SEARCH
========================= */

if (courseSearch) {

    courseSearch.addEventListener("input", function () {

        visibleCourses = 8;

        filterCourses();

    });


    courseSearch.addEventListener("keydown", function (event) {

        if (event.key === "Enter") {

            visibleCourses = 8;

            filterCourses();

        }

    });

}


/* =========================
   SEARCH BUTTON
========================= */

if (searchBtn) {

    searchBtn.addEventListener("click", function () {

        visibleCourses = 8;

        filterCourses();

    });

}


/* =========================
   NAVBAR SEARCH
========================= */

if (navSearch) {

    navSearch.addEventListener("input", function () {

        /* Copy navbar search to main search */

        if (courseSearch) {

            courseSearch.value = navSearch.value;

        }


        visibleCourses = 8;

        filterCourses();

    });


    navSearch.addEventListener("keydown", function (event) {

        if (event.key === "Enter") {

            if (courseSearch) {

                courseSearch.value = navSearch.value;

                courseSearch.scrollIntoView({
                    behavior: "smooth",
                    block: "center"
                });

            }

            visibleCourses = 8;

            filterCourses();

        }

    });

}


/* =========================
   LOAD MORE
========================= */

if (loadMore) {

    loadMore.addEventListener("click", function () {

        visibleCourses += 4;

        filterCourses();

    });

}


/* =========================
   WISHLIST
========================= */

for (let i = 0; i < wishlistButtons.length; i++) {

    wishlistButtons[i].addEventListener("click", function (event) {

        event.preventDefault();


        /* Toggle active */

        this.classList.toggle("active");


        /* Get icon */

        const icon = this.querySelector("i");


        if (!icon) {
            return;
        }


        /* Change icon */

        if (this.classList.contains("active")) {

            icon.classList.remove("fa-regular");
            icon.classList.add("fa-solid");

        } else {

            icon.classList.remove("fa-solid");
            icon.classList.add("fa-regular");

        }

    });

}


/* =========================
   INITIAL LOAD
========================= */

filterCourses();