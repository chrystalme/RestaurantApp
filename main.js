/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/contact_page.js":
/*!*****************************!*\
  !*** ./src/contact_page.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"contactPage\": () => (/* binding */ contactPage)\n/* harmony export */ });\n/* eslint-disable import/prefer-default-export */\nconst contactPage = () => {\n  const contactInfo = document.createElement('section');\n  const mainDiv = document.createElement('div');\n  const subtitle = document.createElement('h2');\n  const box = document.createElement('form');\n  const field = document.createElement('div');\n  const control = document.createElement('div');\n  const emailInput = document.createElement('input');\n  const textMessage = document.createElement('textarea');\n  const btnSend = document.createElement('button');\n  subtitle.classList.add('subtitle', 'is-center');\n  subtitle.textContent = 'Contact us';\n  box.classList.add('box');\n  field.classList.add('field');\n  control.classList.add('control');\n  emailInput.classList.add('input');\n  emailInput.setAttribute('type', 'email');\n  emailInput.setAttribute('placeholder', 'e.g. alex@example.com');\n  textMessage.classList.add('textarea');\n  textMessage.setAttribute('placeholder', 'e.g. Hello world');\n  btnSend.classList.add('button', 'is-light');\n  btnSend.innerText = 'Send Message';\n\n  contactInfo.appendChild(mainDiv);\n  mainDiv.appendChild(subtitle);\n  mainDiv.appendChild(box);\n  box.appendChild(field);\n  field.appendChild(control);\n  control.appendChild(emailInput);\n  box.appendChild(field);\n  field.appendChild(control);\n  control.appendChild(textMessage);\n  box.appendChild(btnSend);\n};\n\n\n\n//# sourceURL=webpack://my-webpack-project/./src/contact_page.js?");

/***/ }),

/***/ "./src/home_info.js":
/*!**************************!*\
  !*** ./src/home_info.js ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("/* module decorator */ module = __webpack_require__.nmd(module);\n/* eslint-disable import/prefer-default-export */\n\nconst homeInfo = () => {\n  const pageInformation = document.createElement('section');\n  const mainDiv = document.createElement('div');\n  const title = document.createElement('h1');\n  const subtitle = document.createElement('h2');\n  const columns = document.createElement('div');\n  const column = document.createElement('div');\n  const figureImage = document.createElement('figure');\n  const mainImage = document.createElement('img');\n  mainImage.setAttribute(\n    'src',\n    'https://image.freepik.com/free-photo/board-amidst-cooking-ingredients_23-2147749529.jpg',\n  );\n  title.classList.add('title');\n  subtitle.classList.add('subtitle');\n  columns.classList.add('columns');\n  column.classList.add('column');\n  figureImage.classList.add('image', 'is-4by3');\n  mainImage.classList.add('main-image');\n\n  pageInformation.appendChild(mainDiv);\n  mainDiv.appendChild(title);\n  mainDiv.appendChild(subtitle);\n  mainDiv.appendChild(columns);\n  columns.appendChild(column);\n  column.appendChild(figureImage);\n  figureImage.appendChild(mainImage);\n};\nmodule.export = homeInfo;\n\n\n//# sourceURL=webpack://my-webpack-project/./src/home_info.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home_info__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home_info */ \"./src/home_info.js\");\n/* harmony import */ var _home_info__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_info__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _contact_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contact_page */ \"./src/contact_page.js\");\n/* harmony import */ var _menu_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu_page */ \"./src/menu_page.js\");\n// import { pageLoad } from \"./page_load\";\n\n\n\n\nconst contact = document.getElementById('contact');\nconst menu = document.getElementById('menu');\nconst home = document.getElementById('home');\n\nconst content = document.getElementById('content');\n\nconst pageLoad = () => {\n  const outerDiv = document.createElement('div');\n  outerDiv.classList.add(\n    'tabs',\n    'is-toggle',\n    'is-flex',\n    'is-justify-content-space-between',\n    'is-align-items-center',\n  );\n  const isToggle = document.createElement('div');\n  const list = document.createElement('ul');\n  const listItem1 = document.createElement('li');\n  const homeLink = document.createElement('a');\n  const icon1 = document.createElement('span');\n  const fasHome = document.createElement('i');\n  const homeSpan = document.createElement('span');\n  const isToggleRounded = document.createElement('div');\n  const list2 = document.createElement('ul');\n  const list2Item1 = document.createElement('li');\n  const menuLink = document.createElement('a');\n  const icon2 = document.createElement('span');\n  const fasMenu = document.createElement('i');\n  const menuSpan = document.createElement('span');\n  const list2Item2 = document.createElement('li');\n  const contactLink = document.createElement('a');\n  const icon3 = document.createElement('span');\n  const fasContact = document.createElement('i');\n  const contactSpan = document.createElement('span');\n  isToggle.classList.add('is-toggle');\n  listItem1.id = 'home';\n  listItem1.setAttribute('class', 'is-active');\n  icon1.classList.add('icon', 'is-small');\n  fasHome.classList.add('fas', 'fa-home');\n  homeSpan.textContent = 'Home';\n  isToggleRounded.classList.add('is-toggle', 'is-toggle-rounded', 'is-right');\n  list2Item1.id = 'menu';\n  icon2.classList.add('icon', 'is-small');\n  fasMenu.classList.add('fas', 'fa-pizza-slice');\n  menuSpan.textContent = 'Menu';\n  list2Item2.id = 'contact';\n  icon3.classList.add('icon', 'is-small');\n  fasContact.classList.add('fas', 'fa-address-card');\n  contactSpan.textContent = 'Contact';\n\n  content.appendChild(outerDiv);\n  outerDiv.appendChild(isToggle);\n  isToggle.appendChild(list);\n  list.appendChild(listItem1);\n  listItem1.appendChild(homeLink);\n  homeLink.appendChild(icon1);\n  icon1.appendChild(fasHome);\n  homeLink.appendChild(homeSpan);\n  outerDiv.appendChild(isToggleRounded);\n  isToggleRounded.appendChild(list2);\n  list2.appendChild(list2Item1);\n  list2Item1.appendChild(menuLink);\n  menuLink.appendChild(icon2);\n  icon2.appendChild(fasMenu);\n  menuLink.appendChild(menuSpan);\n  list2.appendChild(list2Item2);\n  list2Item2.appendChild(contactLink);\n  contactLink.appendChild(icon3);\n  icon3.appendChild(fasContact);\n  contactLink.appendChild(contactSpan);\n};\n\npageLoad();\n\nconst addIsActive = (item) => {\n  item.classList.add('is-active');\n};\n\ndocument.addEventListener('click', (e) => {\n  const target = e.target.getElementById;\n\n  if (target === contact) {\n    addIsActive(target.classList.add('is-active'));\n    (0,_contact_page__WEBPACK_IMPORTED_MODULE_1__.contactPage)();\n  }\n  if (target === menu) {\n    addIsActive(target.classList.add('is-active'));\n    (0,_menu_page__WEBPACK_IMPORTED_MODULE_2__.menuPage)();\n  }\n  if (target === home) {\n    addIsActive(target.classList.add('is-active'));\n    (0,_home_info__WEBPACK_IMPORTED_MODULE_0__.homeInfo)();\n  }\n});\n\n\n//# sourceURL=webpack://my-webpack-project/./src/index.js?");

/***/ }),

/***/ "./src/menu_page.js":
/*!**************************!*\
  !*** ./src/menu_page.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"menuPage\": () => (/* binding */ menuPage)\n/* harmony export */ });\n/* eslint-disable import/prefer-default-export */\n\nconst menuPage = () => {\n  const innerPage = document.createElement('section');\n  const columns = document.createElement('div');\n  columns.classList.add('columns');\n  const column = document.createElement('div');\n  column.classList.add('column');\n  const card = document.createElement('div');\n  card.classList.add('card');\n  const cardImage = document.createElement('div');\n  cardImage.classList.add('card-image');\n  const figureImage = document.createElement('figure');\n  figureImage.classList.add('image', 'is-3by2');\n  const image = document.createElement('img');\n  image.setAttribute(\n    'src',\n    'https://www.acouplecooks.com/wp-content/uploads/2019/12/Vegan-Fettucini-Alfredo-005.jpg',\n  );\n  image.setAttribute('alt', 'Placeholder image');\n  const cardContent = document.createElement('div');\n  cardContent.classList.add('card-content');\n  const content = document.createElement('div');\n  content.classList.add('content');\n  content.innerText = 'Lorem ipsum leo risus, porta ac consectetur ac, vestibulum at eros. Donec id elit non mi porta gravida at eget metus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras mattis consectetur purus sit amet fermentum.';\n  const cardFooter = document.createElement('footer');\n  cardFooter.classList.add('card-footer');\n  const cardFooteritem1 = document.createElement('a');\n  const cardFooteritem2 = document.createElement('a');\n  const cardFooteritem3 = document.createElement('a');\n  cardFooteritem1.setAttribute('href', '#');\n  cardFooteritem1.textContent = 'Save';\n  cardFooteritem1.classList.add('card-footer-item');\n  cardFooteritem2.setAttribute('href', '#');\n  cardFooteritem2.textContent = 'Add';\n  cardFooteritem2.classList.add('card-footer-item');\n  cardFooteritem3.setAttribute('href', '#');\n  cardFooteritem3.textContent = 'Order';\n  cardFooteritem3.classList.add('card-footer-item');\n  innerPage.appendChild(columns);\n\n  for (let index = 0; index < 4; index += 1) {\n    columns.appendChild(column);\n    column.appendChild(card);\n    card.appendChild(cardImage);\n    cardImage.appendChild(figureImage);\n    figureImage.appendChild(image);\n    column.appendChild(cardContent);\n    cardContent.appendChild(content);\n    column.appendChild(cardFooter);\n    cardFooter.appendChild(cardFooteritem1);\n    cardFooter.appendChild(cardFooteritem2);\n    cardFooter.appendChild(cardFooteritem3);\n  }\n};\n\n\n\n//# sourceURL=webpack://my-webpack-project/./src/menu_page.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;