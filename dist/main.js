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
/***/ ((module) => {

eval("const contactInfo = document.createElement('section');\nconst mainDiv = document.createElement('div');\nconst subtitle = document.createElement('h2');\nconst box = document.createElement('form');\nconst field = document.createElement('div');\nconst control = document.createElement('div');\nconst emailInput = document.createElement('input');\nconst textMessage = document.createElement('textarea');\nconst btnSend = document.createElement('button');\nsubtitle.classList.add('subtitle', 'is-center');\nsubtitle.textContent = 'Contact us';\nbox.classList.add('box');\nfield.classList.add('field');\ncontrol.classList.add('control');\nemailInput.classList.add('input');\nemailInput.setAttribute('type', 'email');\nemailInput.setAttribute('placeholder', 'e.g. alex@example.com');\ntextMessage.classList.add('textarea');\ntextMessage.setAttribute('placeholder', 'e.g. Hello world');\nbtnSend.classList.add('button', 'is-light');\nbtnSend.innerText = 'Send Message';\n\ncontactInfo.appendChild(mainDiv);\nmainDiv.appendChild(subtitle);\nmainDiv.appendChild(box);\nbox.appendChild(field);\nfield.appendChild(control);\ncontrol.appendChild(emailInput);\nbox.appendChild(field);\nfield.appendChild(control);\ncontrol.appendChild(textMessage);\nbox.appendChild(btnSend);\n\nmodule.exports = contactInfo;\n\n\n//# sourceURL=webpack://my-webpack-project/./src/contact_page.js?");

/***/ }),

/***/ "./src/home_info.js":
/*!**************************!*\
  !*** ./src/home_info.js ***!
  \**************************/
/***/ ((module) => {

eval("const pageInformation = document.createElement('section');\nconst mainDiv = document.createElement('div');\nconst title = document.createElement('h1');\nconst subtitle = document.createElement('h2');\nconst columns = document.createElement('div');\nconst column = document.createElement('div');\nconst figureImage = document.createElement('figure');\nconst mainImage = document.createElement('img');\nmainImage.setAttribute(\n  'src',\n  'https://image.freepik.com/free-photo/board-amidst-cooking-ingredients_23-2147749529.jpg',\n);\ntitle.classList.add('title');\ntitle.innerHTML = 'Welcome to Delicious licks';\nsubtitle.classList.add('subtitle');\nsubtitle.innerHTML = 'We serve you dishes to die for. Come on place your order. We are here to serve you';\ncolumns.classList.add('columns');\ncolumn.classList.add('column');\nfigureImage.classList.add('image', 'is-4by3');\nmainImage.classList.add('main-image');\n\npageInformation.appendChild(mainDiv);\nmainDiv.appendChild(title);\nmainDiv.appendChild(subtitle);\nmainDiv.appendChild(columns);\ncolumns.appendChild(column);\ncolumn.appendChild(figureImage);\nfigureImage.appendChild(mainImage);\n\nmodule.exports = pageInformation;\n\n\n//# sourceURL=webpack://my-webpack-project/./src/home_info.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("const homeInfo = __webpack_require__(/*! ./home_info */ \"./src/home_info.js\");\nconst contactPage = __webpack_require__(/*! ./contact_page */ \"./src/contact_page.js\");\nconst menuPage = __webpack_require__(/*! ./menu_page */ \"./src/menu_page.js\");\n\nconst content = document.getElementById('content');\nconst ghostDiv = document.createElement('div');\nghostDiv.classList.add('container');\n\nconst pageLoad = () => {\n  const outerDiv = document.createElement('div');\n  outerDiv.classList.add(\n    'tabs',\n    'is-toggle',\n    'is-flex',\n    'is-justify-content-space-between',\n    'is-align-items-center',\n  );\n  const isToggle = document.createElement('div');\n  const list = document.createElement('ul');\n  const listItem1 = document.createElement('li');\n  const homeLink = document.createElement('a');\n  const icon1 = document.createElement('span');\n  const fasHome = document.createElement('i');\n  const homeSpan = document.createElement('span');\n  const isToggleRounded = document.createElement('div');\n  const list2 = document.createElement('ul');\n  const list2Item1 = document.createElement('li');\n  const menuLink = document.createElement('a');\n  const icon2 = document.createElement('span');\n  const fasMenu = document.createElement('i');\n  const menuSpan = document.createElement('span');\n  const list2Item2 = document.createElement('li');\n  const contactLink = document.createElement('a');\n  const icon3 = document.createElement('span');\n  const fasContact = document.createElement('i');\n  const contactSpan = document.createElement('span');\n  isToggle.classList.add('is-toggle');\n  listItem1.id = 'home';\n  icon1.classList.add('icon', 'is-small');\n  fasHome.classList.add('fas', 'fa-home');\n  homeSpan.textContent = 'Home';\n  isToggleRounded.classList.add('is-toggle', 'is-toggle-rounded', 'is-right');\n  list2Item1.id = 'menu';\n  icon2.classList.add('icon', 'is-small');\n  fasMenu.classList.add('fas', 'fa-pizza-slice');\n  menuSpan.textContent = 'Menu';\n  list2Item2.id = 'contact';\n  icon3.classList.add('icon', 'is-small');\n  fasContact.classList.add('fas', 'fa-address-card');\n  contactSpan.textContent = 'Contact';\n\n  content.appendChild(outerDiv);\n  content.appendChild(ghostDiv);\n  outerDiv.appendChild(isToggle);\n  isToggle.appendChild(list);\n  list.appendChild(listItem1);\n  listItem1.appendChild(homeLink);\n  homeLink.appendChild(icon1);\n  icon1.appendChild(fasHome);\n  homeLink.appendChild(homeSpan);\n  outerDiv.appendChild(isToggleRounded);\n  isToggleRounded.appendChild(list2);\n  list2.appendChild(list2Item1);\n  list2Item1.appendChild(menuLink);\n  menuLink.appendChild(icon2);\n  icon2.appendChild(fasMenu);\n  menuLink.appendChild(menuSpan);\n  list2.appendChild(list2Item2);\n  list2Item2.appendChild(contactLink);\n  contactLink.appendChild(icon3);\n  icon3.appendChild(fasContact);\n  contactLink.appendChild(contactSpan);\n};\n\npageLoad();\n\nconst contact = document.getElementById('contact');\nconst menu = document.getElementById('menu');\nconst home = document.getElementById('home');\nconst homeInner = () => {\n  if (ghostDiv.childNodes[0]) {\n    ghostDiv.removeChild(ghostDiv.childNodes[0]);\n  }\n  ghostDiv.appendChild(homeInfo);\n};\n\nconst menuInner = () => {\n  if (ghostDiv.childNodes[0]) {\n    ghostDiv.removeChild(ghostDiv.childNodes[0]);\n  }\n  ghostDiv.appendChild(menuPage);\n};\nconst contactInner = () => {\n  if (ghostDiv.childNodes[0]) {\n    ghostDiv.removeChild(ghostDiv.childNodes[0]);\n  }\n  ghostDiv.appendChild(contactPage);\n};\n\nhomeInner();\n\nhome.addEventListener('click', homeInner);\ncontact.addEventListener('click', contactInner);\nmenu.addEventListener('click', menuInner);\n\n\n//# sourceURL=webpack://my-webpack-project/./src/index.js?");

/***/ }),

/***/ "./src/menu_page.js":
/*!**************************!*\
  !*** ./src/menu_page.js ***!
  \**************************/
/***/ ((module) => {

eval("const innerPage = document.createElement('section');\nconst columns = document.createElement('div');\ncolumns.classList.add('columns');\nfor (let index = 1; index < 5; index += 1) {\n  const column = document.createElement('div');\n  column.classList.add('column');\n  const card = document.createElement('div');\n  card.classList.add('card');\n  const cardImage = document.createElement('div');\n  cardImage.classList.add('card-image');\n  const figureImage = document.createElement('figure');\n  figureImage.classList.add('image', 'is-3by2');\n  const image = document.createElement('img');\n  image.setAttribute(\n    'src',\n    'https://www.acouplecooks.com/wp-content/uploads/2019/12/Vegan-Fettucini-Alfredo-005.jpg',\n  );\n  image.setAttribute('alt', 'Placeholder image');\n  const cardContent = document.createElement('div');\n  cardContent.classList.add('card-content');\n  const content = document.createElement('div');\n  content.classList.add('content');\n  content.innerText = 'Lorem ipsum leo risus, porta ac consectetur ac, vestibulum at eros. Donec id elit non mi porta gravida at eget metus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras mattis consectetur purus sit amet fermentum.';\n  const cardFooter = document.createElement('footer');\n  cardFooter.classList.add('card-footer');\n  const cardFooteritem1 = document.createElement('a');\n  const cardFooteritem2 = document.createElement('a');\n  const cardFooteritem3 = document.createElement('a');\n  cardFooteritem1.setAttribute('href', '#');\n  cardFooteritem1.textContent = 'Save';\n  cardFooteritem1.classList.add('card-footer-item');\n  cardFooteritem2.setAttribute('href', '#');\n  cardFooteritem2.textContent = 'Add';\n  cardFooteritem2.classList.add('card-footer-item');\n  cardFooteritem3.setAttribute('href', '#');\n  cardFooteritem3.textContent = 'Order';\n  cardFooteritem3.classList.add('card-footer-item');\n  innerPage.appendChild(columns);\n  columns.appendChild(column);\n  column.appendChild(card);\n  card.appendChild(cardImage);\n  cardImage.appendChild(figureImage);\n  figureImage.appendChild(image);\n  column.appendChild(cardContent);\n  cardContent.appendChild(content);\n  column.appendChild(cardFooter);\n  cardFooter.appendChild(cardFooteritem1);\n  cardFooter.appendChild(cardFooteritem2);\n  cardFooter.appendChild(cardFooteritem3);\n}\n\nmodule.exports = innerPage;\n\n\n//# sourceURL=webpack://my-webpack-project/./src/menu_page.js?");

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
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
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