let menu = document.createElement("div");
menu.id = "menu";
menu.classList.add("hidden");
document.body.appendChild(menu);

let hiddenMenu = document.querySelector("ul").cloneNode(true);

menu.appendChild(hiddenMenu);

let iconMenuClose = document.createElement("img");
iconMenuClose.src = "assets/images/icon-menu-close.svg";
iconMenuClose.id = "menu__icon-close";

menu.prepend(iconMenuClose);

const shadow = document.getElementById("shadow");

let menuIcon = document.getElementById("menu__icon");
menuIcon.addEventListener("click", () => {
  menu.classList.remove("hidden");
  menu.classList.add("visible");
  shadow.style.opacity = 1;
  shadow.style.zIndex = 1;
});

iconMenuClose.addEventListener("click", () => {
  menu.classList.remove("visible");
  menu.classList.add("hidden");
  shadow.style.opacity = 0;
    shadow.style.zIndex = -1;
});
