function writeTitle() {
    function activeWorld(element) {
        const arrText = element.innerHTML.split("");
        element.innerHTML = "";
        arrText.forEach((letra, i) => {
            setTimeout(() => {
                element.innerHTML += letra;
            }, 75 * i);
        });
    }
    const title = document.querySelector(".digitando");
    activeWorld(title);
}
writeTitle();

const navbar = document.querySelector(".navbar");
const mobileNavbar = document.querySelector(".navbar__mobile");
const button = document.querySelector(".burguer");

button.addEventListener("click", function () {
    mobileNavbar.classList.toggle("active");
});

window.addEventListener("scroll", function () {
    if (this.window.pageYOffset > 0) return navbar.classList.add("active");
    return navbar.classList.remove("active");
});
