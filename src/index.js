import { pageLoad, menuPage, homeInfo, contactPage } from "./page_load";

pageLoad();

const contact = document.getElementById("contact");
const menu = document.getElementById("menu");
const home = document.getElementById("home");

contact.addEventListener("click", contactPage);
menu.addEventListener("click", menuPage);
home.addEventListener("click", homeInfo);
homeInfo();
