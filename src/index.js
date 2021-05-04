import { pageLoad } from './page_load';
import { homeInfo } from './home_info';
import { contactPage } from './contact_page';
import { menuPage } from './menu_page';

// const ghostDiv = document.getElementsByClassName('.content');
pageLoad();
homeInfo();


const contact = document.getElementById('contact');
const menu = document.getElementById('menu');
const home = document.getElementById('home');

contact.addEventListener('click', contactPage);
menu.addEventListener('click', menuPage);
home.addEventListener('click', homeInfo);
