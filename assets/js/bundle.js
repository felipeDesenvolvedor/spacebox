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

/***/ "./build/js/Observable.js":
/*!********************************!*\
  !*** ./build/js/Observable.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar Observable = /*#__PURE__*/function () {\n  function Observable() {\n    _classCallCheck(this, Observable);\n\n    this.observers = [];\n  }\n\n  _createClass(Observable, [{\n    key: \"subscribe\",\n    value: function subscribe(callback) {\n      this.observers.push(callback);\n    }\n  }, {\n    key: \"unsubscribe\",\n    value: function unsubscribe(callback) {\n      this.observers = this.observers.filter(function (subscriber) {\n        return subscriber !== callback;\n      });\n    }\n  }, {\n    key: \"notify\",\n    value: function notify(data) {\n      this.observers.forEach(function (observer) {\n        return observer(data);\n      });\n    }\n  }]);\n\n  return Observable;\n}();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Observable);\n\n//# sourceURL=webpack://spacebox/./build/js/Observable.js?");

/***/ }),

/***/ "./build/js/fetchData.js":
/*!*******************************!*\
  !*** ./build/js/fetchData.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"buscarMembros\": () => (/* binding */ buscarMembros)\n/* harmony export */ });\nvar buscarMembros = function buscarMembros() {\n  return fetch('http://localhost:3001/').then(function (response) {\n    return response.json();\n  }).then(function (json) {\n    return json;\n  });\n};\n\n\n\n//# sourceURL=webpack://spacebox/./build/js/fetchData.js?");

/***/ }),

/***/ "./build/js/index.js":
/*!***************************!*\
  !*** ./build/js/index.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Observable */ \"./build/js/Observable.js\");\n/* harmony import */ var _renderizarMembro__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderizarMembro */ \"./build/js/renderizarMembro.js\");\n/* harmony import */ var _fetchData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./fetchData */ \"./build/js/fetchData.js\");\n\n\n\nvar observer = new _Observable__WEBPACK_IMPORTED_MODULE_0__.default();\nobserver.subscribe(_renderizarMembro__WEBPACK_IMPORTED_MODULE_1__.renderizarBoxMembro);\nobserver.subscribe(_renderizarMembro__WEBPACK_IMPORTED_MODULE_1__.insertedFirst);\n(0,_fetchData__WEBPACK_IMPORTED_MODULE_2__.buscarMembros)().then(function (json) {\n  json.forEach(function (member) {\n    return (0,_renderizarMembro__WEBPACK_IMPORTED_MODULE_1__.renderizarMembro)(member, 'append');\n  });\n}).then(function () {\n  var member = document.querySelector(\".grid-member:nth-child(1) .checkded__member\");\n  observer.notify(JSON.parse(member.getAttribute('data-json')));\n  var checkedFirst = document.querySelector(\".grid-member:nth-child(2) .checkded__member\");\n  checkedFirst.setAttribute('checked', true);\n});\n\nvar checked = function checked(event) {\n  var checkeds = document.querySelectorAll(\".grid-member:nth-child(1n + 2) .checkded__member\");\n  checkeds.forEach(function (checked) {\n    checked.removeAttribute('checked');\n  });\n  event.target.setAttribute('checked', true);\n};\n\nvar handleChecked = function handleChecked() {\n  var gridMembors = document.querySelector('.grid__membros');\n  gridMembors.addEventListener('click', function (event) {\n    if (event.target.className === 'checkded__member') {\n      checked(event);\n      observer.unsubscribe(_renderizarMembro__WEBPACK_IMPORTED_MODULE_1__.insertedFirst);\n      observer.notify(JSON.parse(event.target.getAttribute('data-json')));\n    }\n  });\n  gridMembors.addEventListener('change', function (event) {\n    if (event.target.className === 'checkded__member' && event.target.checked) {\n      checked(event);\n      observer.unsubscribe(_renderizarMembro__WEBPACK_IMPORTED_MODULE_1__.insertedFirst);\n      observer.notify(JSON.parse(event.target.getAttribute('data-json')));\n    }\n  });\n};\n\nvar menuAmburguer = function menuAmburguer() {\n  document.querySelector('.js__amburguer').addEventListener('click', function () {\n    document.body.classList.toggle('amburguer--aberto');\n  });\n};\n\ndocument.addEventListener('DOMContentLoaded', function () {\n  handleChecked();\n  menuAmburguer();\n});\n\n//# sourceURL=webpack://spacebox/./build/js/index.js?");

/***/ }),

/***/ "./build/js/renderizarMembro.js":
/*!**************************************!*\
  !*** ./build/js/renderizarMembro.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"renderizarMembro\": () => (/* binding */ renderizarMembro),\n/* harmony export */   \"renderizarBoxMembro\": () => (/* binding */ renderizarBoxMembro),\n/* harmony export */   \"insertedFirst\": () => (/* binding */ insertedFirst)\n/* harmony export */ });\nvar renderizarMembro = function renderizarMembro(_ref, posicao) {\n  var id = _ref.id,\n      foto = _ref.foto,\n      nome = _ref.nome,\n      cargo = _ref.cargo,\n      idade = _ref.idade;\n  var gridMembros = document.querySelector('.grid__membros');\n  var jsonData = {\n    'id': id,\n    'foto': foto,\n    'nome': nome,\n    'cargo': cargo,\n    'idade': idade\n  };\n  var membro = document.createElement('div');\n  membro.setAttribute('class', 'grid-member');\n  var boxFoto = document.createElement('div');\n  var boxDados = document.createElement('div');\n  var label = document.createElement('label');\n  label.setAttribute('for', \"member-\".concat(id));\n  var checkbox = document.createElement('input');\n  checkbox.setAttribute('name', 'radio');\n  checkbox.setAttribute('type', 'radio');\n  checkbox.setAttribute('class', 'checkded__member');\n  checkbox.setAttribute('id', \"member-\".concat(id));\n  checkbox.setAttribute('data-json', JSON.stringify(jsonData));\n  var idMembro = document.createElement('span');\n  idMembro.textContent = id;\n  var fotoMembro = document.createElement('img');\n  fotoMembro.setAttribute('src', \"./assets/img/\".concat(foto));\n  fotoMembro.setAttribute('class', 'foto');\n  var nomeMembro = document.createElement('span');\n  nomeMembro.textContent = nome;\n  var cargoMembro = document.createElement('span');\n  cargoMembro.textContent = cargo;\n  var idadeMembro = document.createElement('span');\n  idadeMembro.textContent = idade;\n  var nomeLabel = document.createElement('span');\n  nomeLabel.textContent = \"Nome\";\n  var cargoLabel = document.createElement('span');\n  cargoLabel.textContent = \"Cargo\";\n  var idadeLabel = document.createElement('span');\n  idadeLabel.textContent = \"idade\";\n  boxFoto.appendChild(idMembro);\n  boxFoto.appendChild(fotoMembro);\n  boxDados.appendChild(nomeLabel);\n  boxDados.appendChild(nomeMembro);\n  boxDados.appendChild(cargoLabel);\n  boxDados.appendChild(cargoMembro);\n  boxDados.appendChild(idadeLabel);\n  boxDados.appendChild(idadeMembro);\n  label.appendChild(boxFoto);\n  label.appendChild(boxDados);\n  membro.appendChild(checkbox);\n  membro.appendChild(label);\n\n  if (posicao == 'prepend') {\n    gridMembros.prepend(membro);\n    return;\n  }\n\n  gridMembros.appendChild(membro);\n};\n\nvar renderizarBoxMembro = function renderizarBoxMembro(_ref2) {\n  var id = _ref2.id,\n      foto = _ref2.foto,\n      nome = _ref2.nome,\n      cargo = _ref2.cargo,\n      idade = _ref2.idade;\n  var gridMemberOne = document.querySelector('.grid-member');\n  gridMemberOne.remove();\n  renderizarMembro({\n    'id': id,\n    'foto': foto,\n    'nome': nome,\n    'cargo': cargo,\n    'idade': idade\n  }, 'prepend');\n};\n\nvar insertedFirst = function insertedFirst(_ref3) {\n  var id = _ref3.id,\n      foto = _ref3.foto,\n      nome = _ref3.nome,\n      cargo = _ref3.cargo,\n      idade = _ref3.idade;\n  renderizarMembro({\n    'id': id,\n    'foto': foto,\n    'nome': nome,\n    'cargo': cargo,\n    'idade': idade\n  }, 'prepend');\n};\n\n\n\n//# sourceURL=webpack://spacebox/./build/js/renderizarMembro.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./build/js/index.js");
/******/ 	
/******/ })()
;