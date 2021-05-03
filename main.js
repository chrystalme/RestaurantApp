/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _page_load__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page_load */ \"./src/page_load.js\");\n\n\n(0,_page_load__WEBPACK_IMPORTED_MODULE_0__.pageLoad)();\n\nconst contact = document.getElementById('contact');\nconst menu = document.getElementById('menu');\nconst home = document.getElementById('home');\n\ncontact.addEventListener('click', _page_load__WEBPACK_IMPORTED_MODULE_0__.contactPage);\nmenu.addEventListener('click', _page_load__WEBPACK_IMPORTED_MODULE_0__.menuPage);\nhome.addEventListener('click', _page_load__WEBPACK_IMPORTED_MODULE_0__.homeInfo);\n(0,_page_load__WEBPACK_IMPORTED_MODULE_0__.homeInfo)();\n\n\n//# sourceURL=webpack://my-webpack-project/./src/index.js?");

/***/ }),

/***/ "./src/page_load.js":
/*!**************************!*\
  !*** ./src/page_load.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"pageLoad\": () => (/* binding */ pageLoad),\n/* harmony export */   \"menuPage\": () => (/* binding */ menuPage),\n/* harmony export */   \"homeInfo\": () => (/* binding */ homeInfo),\n/* harmony export */   \"contactPage\": () => (/* binding */ contactPage)\n/* harmony export */ });\nconst content = document.getElementById(\"content\");\nconst ghostDiv = document.createElement(\"div\");\nghostDiv.classList.add(\"container\");\nconst pageLoad = () => {\n  const outerDiv = document.createElement(\"div\");\n  outerDiv.classList.add(\n    \"tabs\",\n    \"is-toggle\",\n    \"is-flex\",\n    \"is-justify-content-space-between\",\n    \"is-align-items-center\"\n  );\n\n  outerDiv.innerHTML = `\n  <div class=\"is-toggle\">\n    <ul>\n      <li><a id=\"home\">Home</a></li>\n    </ul>\n  </div>\n  <div class=\"is-toggle is-toggle-rounded is-right\">\n    <ul>\n      <li>\n        <a id=\"menu\">\n          <span class=\"icon is-small\"><i class=\"fas fa-image\"></i></span>\n          <span>Menu</span>\n        </a>\n      </li>\n      <li>\n        <a id=\"contact\">\n          <span class=\"icon is-small\"><i class=\"fas fa-music\"></i></span>\n          <span>Contact</span>\n        </a>\n      </li>\n      \n    </ul>\n  </div>\n  `;\n  content.appendChild(outerDiv);\n  content.appendChild(ghostDiv);\n};\n\nconst menuPage = () => {\n  const innerPage = document.createElement(\"section\");\n  innerPage.innerHTML = `<div class=\"columns\">\n  <div class=\"column\">\n    <div class=\"card\">\n      <div class=\"card-image\">\n        <figure class=\"image is-3by2\">\n          <img\n            src=\"https://bulma.io/images/placeholders/480x320.png\"\n            alt=\"Placeholder image\"\n          />\n        </figure>\n      </div>\n      <div class=\"card-content\">\n        <div class=\"content\">\n          Lorem ipsum leo risus, porta ac consectetur ac, vestibulum at eros.\n          Donec id elit non mi porta gravida at eget metus. Cum sociis natoque\n          penatibus et magnis dis parturient montes, nascetur ridiculus mus.\n          Cras mattis consectetur purus sit amet fermentum.\n        </div>\n      </div>\n      <footer class=\"card-footer\">\n        <a href=\"#\" class=\"card-footer-item\">Save</a>\n        <a href=\"#\" class=\"card-footer-item\">Edit</a>\n        <a href=\"#\" class=\"card-footer-item\">Delete</a>\n      </footer>\n    </div>\n  </div>\n  <div class=\"column\">\n    <div class=\"card\">\n      <div class=\"card-image\">\n        <figure class=\"image is-3by2\">\n          <img\n            src=\"https://bulma.io/images/placeholders/480x320.png\"\n            alt=\"Placeholder image\"\n          />\n        </figure>\n      </div>\n      <div class=\"card-content\">\n        <div class=\"content\">\n          Lorem ipsum leo risus, porta ac consectetur ac, vestibulum at eros.\n          Donec id elit non mi porta gravida at eget metus. Cum sociis natoque\n          penatibus et magnis dis parturient montes, nascetur ridiculus mus.\n          Cras mattis consectetur purus sit amet fermentum.\n        </div>\n      </div>\n      <footer class=\"card-footer\">\n        <a href=\"#\" class=\"card-footer-item\">Save</a>\n        <a href=\"#\" class=\"card-footer-item\">Edit</a>\n        <a href=\"#\" class=\"card-footer-item\">Delete</a>\n      </footer>\n    </div>\n  </div>\n  <div class=\"column\">\n    <div class=\"card\">\n      <div class=\"card-image\">\n        <figure class=\"image is-3by2\">\n          <img\n            src=\"https://bulma.io/images/placeholders/480x320.png\"\n            alt=\"Placeholder image\"\n          />\n        </figure>\n      </div>\n      <div class=\"card-content\">\n        <div class=\"content\">\n          Lorem ipsum leo risus, porta ac consectetur ac, vestibulum at eros.\n          Donec id elit non mi porta gravida at eget metus. Cum sociis natoque\n          penatibus et magnis dis parturient montes, nascetur ridiculus mus.\n          Cras mattis consectetur purus sit amet fermentum.\n        </div>\n      </div>\n      <footer class=\"card-footer\">\n        <a href=\"#\" class=\"card-footer-item\">Save</a>\n        <a href=\"#\" class=\"card-footer-item\">Edit</a>\n        <a href=\"#\" class=\"card-footer-item\">Delete</a>\n      </footer>\n    </div>\n  </div>\n  <div class=\"column\">\n    <div class=\"card\">\n      <div class=\"card-image\">\n        <figure class=\"image is-3by2\">\n          <img\n            src=\"https://bulma.io/images/placeholders/480x320.png\"\n            alt=\"Placeholder image\"\n          />\n        </figure>\n      </div>\n      <div class=\"card-content\">\n        <div class=\"content\">\n          Lorem ipsum leo risus, porta ac consectetur ac, vestibulum at eros.\n          Donec id elit non mi porta gravida at eget metus. Cum sociis natoque\n          penatibus et magnis dis parturient montes, nascetur ridiculus mus.\n          Cras mattis consectetur purus sit amet fermentum.\n        </div>\n      </div>\n      <footer class=\"card-footer\">\n        <a href=\"#\" class=\"card-footer-item\">Save</a>\n        <a href=\"#\" class=\"card-footer-item\">Edit</a>\n        <a href=\"#\" class=\"card-footer-item\">Delete</a>\n      </footer>`;\n  if (ghostDiv.childNodes[0]) {\n    ghostDiv.removeChild(ghostDiv.childNodes[0]);\n  }\n  ghostDiv.appendChild(innerPage);\n};\n\nconst homeInfo = () => {\n  const pageInformation = document.createElement(\"section\");\n\n  pageInformation.innerHTML = `<div class= \"section\">\n  <h1 class=\"title\">Welcome to Delicious licks</h1>\n  <h2 class=\"subtitle\">We serve you dishes to die for. Come on place your order.\n   We are here to serve you<h2>\n   <div class=\"columns\">\n   <div class=\"column\">\n   <figure class=\"image is-4by3\">\n  <img src=\"https://bulma.io/images/placeholders/256x256.png\">\n</figure>\n</div>\n</div>\n  </section>`;\n  if (ghostDiv.childNodes[0]) {\n    ghostDiv.removeChild(ghostDiv.childNodes[0]);\n  }\n  ghostDiv.appendChild(pageInformation);\n};\n\nconst contactPage = () => {\n  const contactInfo = document.createElement(\"section\");\n  contactInfo.innerHTML = `<div><h2 class='subtitle is-center'> Contact us</h2><form class=\"box\">\n  <div class=\"field\">\n    <div class=\"control\">\n      <input class=\"input\" type=\"email\" placeholder=\"e.g. alex@example.com\" />\n    </div>\n  </div>\n\n  <div class=\"field\">\n    <div class=\"control\">\n      <textarea class=\"textarea\" placeholder=\"e.g. Hello world\"></textarea>\n    </div>\n  </div>\n\n  <button class=\"button is-primary\">Sign in</button>\n</form></div>`;\n  if (ghostDiv.childNodes[0]) {\n    ghostDiv.removeChild(ghostDiv.childNodes[0]);\n  }\n  ghostDiv.appendChild(contactInfo);\n};\n\n\n\n\n//# sourceURL=webpack://my-webpack-project/./src/page_load.js?");

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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;