// Drawer
const drawerMenu = document.querySelector("#drawer-menu");
const drawer = document.querySelector("#drawer");

const toggleDrawer = () => {
  if (drawer.classList.contains("hide")) {
    drawer.classList.remove("hide");
    drawer.classList.add("show");
  } else {
    drawer.classList.remove("show");
    drawer.classList.add("hide");
  }
};

drawerMenu.addEventListener("click", toggleDrawer);
