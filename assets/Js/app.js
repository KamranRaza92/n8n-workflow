/* ==========================================
   DigitalX Agency
   app.js
   Core UI Module
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    initializeLoader();
    initializeStickyNavbar();
    initializeMobileMenu();
    initializeSmoothScroll();
    initializeBackToTop();
    initializeActiveNavigation();

});

/*=========================================
Loading Screen
=========================================*/

function initializeLoader() {

    const loader = document.getElementById("loader");

    if (!loader) return;

    window.addEventListener("load", () => {

        loader.style.opacity = "0";

        setTimeout(() => {

            loader.style.display = "none";

        }, 500);

    });

}

/*=========================================
Sticky Navbar
=========================================*/

function initializeStickyNavbar() {

    const navbar = document.querySelector(".navbar");

    if (!navbar) return;

    window.addEventListener("scroll", () => {

        if (window.scrollY > 60) {

            navbar.classList.add("navbar-scrolled");

        } else {

            navbar.classList.remove("navbar-scrolled");

        }

    });

}

/*=========================================
Mobile Navigation
=========================================*/

function initializeMobileMenu() {

    const links = document.querySelectorAll(".navbar-collapse .nav-link");

    const menu = document.querySelector(".navbar-collapse");

    if (!menu) return;

    links.forEach(link => {

        link.addEventListener("click", () => {

            menu.classList.remove("show");

        });

    });

}

/*=========================================
Smooth Scrolling
=========================================*/

function initializeSmoothScroll() {

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {

        anchor.addEventListener("click", function (e) {

            const target = document.querySelector(this.getAttribute("href"));

            if (!target) return;

            e.preventDefault();

            target.scrollIntoView({

                behavior: "smooth",

                block: "start"

            });

        });

    });

}

/*=========================================
Back To Top
=========================================*/

function initializeBackToTop() {

    const button = document.getElementById("backToTop");

    if (!button) return;

    window.addEventListener("scroll", () => {

        if (window.scrollY > 500) {

            button.classList.add("show");

        } else {

            button.classList.remove("show");

        }

    });

    button.addEventListener("click", () => {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    });

}

/*=========================================
Active Navigation
=========================================*/

function initializeActiveNavigation() {

    const sections = document.querySelectorAll("section");

    const navLinks = document.querySelectorAll(".navbar .nav-link");

    window.addEventListener("scroll", () => {

        let current = "";

        sections.forEach(section => {

            const sectionTop = section.offsetTop - 120;

            if (pageYOffset >= sectionTop) {

                current = section.getAttribute("id");

            }

        });

        navLinks.forEach(link => {

            link.classList.remove("active");

            if (link.getAttribute("href") === "#" + current) {

                link.classList.add("active");

            }

        });

    });

}