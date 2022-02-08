// Drawer
const drawerMenu = document.querySelector("#drawer-menu");
const drawer = document.querySelector("#drawer");

const toggleDrawer = () => {
  if (drawer.classList.contains("hide")) {
    drawer.classList.remove("hide");
    drawer.classList.add("show");
    drawerMenu.firstElementChild.classList.remove("fa-bars");
    drawerMenu.firstElementChild.classList.add("fa-times");
  } else {
    drawer.classList.remove("show");
    drawer.classList.add("hide");
    drawerMenu.firstElementChild.classList.remove("fa-times");
    drawerMenu.firstElementChild.classList.add("fa-bars");
  }
};

drawerMenu.addEventListener("click", toggleDrawer);
