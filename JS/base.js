const menuMoblie = document.querySelector(".header-mobile");
const headerList = document.querySelector(".header-middle__list");

menuMoblie.onclick = function () {
    headerList.classList.toggle("show");
    if (headerList.classList.contains("show")) {
        document.body.style.overflow = "hidden";
    } else {
        document.body.style.overflow = "auto";
    }
};
