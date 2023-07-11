var menuCross;

var menuContainer;
menuContainer = document.querySelector(".menu-container");
console.log(menuContainer);

menuContainer.addEventListener("click", function () {
  menuContainer.classList.toggle("l");
  menuContainer.classList.toggle("cross");
});
