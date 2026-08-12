const menu = document.querySelector(".menu");
const mainMenu = document.querySelector("#main-menu");

menu?.addEventListener("click", () => {
    const isExpanded = menu.getAttribute("aria-expanded") === "true";
    menu.setAttribute("aria-expanded", `${!isExpanded}`);

    mainMenu?.classList.toggle("hidden");
});