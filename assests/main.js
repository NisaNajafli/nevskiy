document.addEventListener("DOMContentLoaded", function () {
    AOS.init({
        duration: 900,
        offset: 80,
        easing: "ease-out-cubic",
        once: true,
        disable: window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const numbers = document.querySelectorAll(".adv-number");

    numbers.forEach((el, index) => {
        const num = index + 1;
        el.textContent = num < 10 ? "0" + num + "." : num + ".";
    });
});

document.getElementById("year").textContent = new Date().getFullYear();

const mainButton = document.getElementById("main-button");
if (mainButton) {
    mainButton.addEventListener("click", function () {
        this.classList.toggle("open");
    });
}

window.addEventListener("scroll", function () {
    const header = document.querySelector("header");
    if (window.scrollY > 0) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }

});

var backToTopBtn = document.getElementById("back-to-top");
if (backToTopBtn) {
    backToTopBtn.addEventListener("click", function (e) {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
}
