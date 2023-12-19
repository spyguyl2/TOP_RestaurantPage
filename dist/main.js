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

/***/ "./src/domKit.js":
/*!***********************!*\
  !*** ./src/domKit.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   create: () => (/* binding */ create),\n/* harmony export */   setParent: () => (/* binding */ setParent)\n/* harmony export */ });\nlet parent;\n\nconst setParent = (domElementString) => {\n    parent = document.querySelector(domElementString);\n}\n\nconst create = (() => {\n\n    const btn = (textContent, onClickFunction) => {\n        const btn = document.createElement('btn');\n        btn.textContent = textContent;\n        btn.addEventListener('click', onClickFunction);\n        parent.appendChild(btn);\n    }\n\n    const image = (src, alt) => {\n        const img = document.createElement('img');\n        img.setAttribute('src', src);\n        img.setAttribute('alt', alt);\n        parent.appendChild(img);\n    }\n\n    const text = (textElement, textContent) => {\n        const element = document.createElement(textElement);\n        element.textContent = textContent;\n        parent.appendChild(element);\n    }\n\n    return {image, text, btn};\n});\n\n//# sourceURL=webpack://top_restaurantpage/./src/domKit.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _loadLanding__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./loadLanding */ \"./src/loadLanding.js\");\n/* harmony import */ var _loadContacts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./loadContacts */ \"./src/loadContacts.js\");\n/* harmony import */ var _loadMenu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./loadMenu */ \"./src/loadMenu.js\");\n\n\n\n\nconst clearPage = () => {\n    const content = document.querySelector('#content');\n    const elements = content.children;\n    Array.from(elements).forEach(element => {\n        if (element.getAttribute('id') != 'navbar') element.remove();\n    })\n}\n\n\n\nconst navBar = document.createElement('div');\nnavBar.setAttribute('id', 'navbar');\nconst content = document.querySelector('#content');\ncontent.appendChild(navBar);\n\nconst landingBtn = document.createElement('btn');\nconst menuBtn = document.createElement('btn');\nconst contactBtn = document.createElement('btn');\n\nlandingBtn.textContent = 'Home';\nmenuBtn.textContent = 'Menu';\ncontactBtn.textContent = 'Contact Us';\n\nlandingBtn.addEventListener('click', () => {\n    clearPage();\n    (0,_loadLanding__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n})\n\nmenuBtn.addEventListener('click', () => {\n    clearPage();\n    (0,_loadMenu__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n});\n\ncontactBtn.addEventListener('click', () => {\n    clearPage();\n    (0,_loadContacts__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n})\n\n\nnavBar.appendChild(landingBtn);\nnavBar.appendChild(menuBtn);\nnavBar.appendChild(contactBtn);\n\ncreateLanding();\n\n//# sourceURL=webpack://top_restaurantpage/./src/index.js?");

/***/ }),

/***/ "./src/loadContacts.js":
/*!*****************************!*\
  !*** ./src/loadContacts.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst createContact = (name, tel, imgUrl) => {\n    const contactBlock = document.createElement('div');\n    contactBlock.classList.toggle('contactBlock');\n\n}\n\nconst loadContacts = () => {\n    \n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadContacts);\n\n//# sourceURL=webpack://top_restaurantpage/./src/loadContacts.js?");

/***/ }),

/***/ "./src/loadLanding.js":
/*!****************************!*\
  !*** ./src/loadLanding.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _domKit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./domKit */ \"./src/domKit.js\");\n\n\nconst loadLanding = () => {\n    (0,_domKit__WEBPACK_IMPORTED_MODULE_0__.setParent)('#content');\n\n    (0,_domKit__WEBPACK_IMPORTED_MODULE_0__.create)().image('./seedsCafe.jpg', 'Image showcasing the restaurant');\n    (0,_domKit__WEBPACK_IMPORTED_MODULE_0__.create)().text('h1', 'The Seeds Cafe!');\n    (0,_domKit__WEBPACK_IMPORTED_MODULE_0__.create)().text('p', 'Such an amazing place to spend your money!');\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadLanding);\n\n//# sourceURL=webpack://top_restaurantpage/./src/loadLanding.js?");

/***/ }),

/***/ "./src/loadMenu.js":
/*!*************************!*\
  !*** ./src/loadMenu.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst loadMenu = () => {\n    \n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadMenu);\n\n//# sourceURL=webpack://top_restaurantpage/./src/loadMenu.js?");

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