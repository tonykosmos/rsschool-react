"use strict";
(() => {
var exports = {};
exports.id = 942;
exports.ids = [942,756];
exports.modules = {

/***/ 209:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(893);
/* harmony import */ var _testing_library_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(432);
/* harmony import */ var _testing_library_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_testing_library_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var vitest__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(521);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(661);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _AppContainer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(22);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(224);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([vitest__WEBPACK_IMPORTED_MODULE_2__]);
vitest__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];







(0,vitest__WEBPACK_IMPORTED_MODULE_2__.describe)("App container render test", ()=>{
    (0,vitest__WEBPACK_IMPORTED_MODULE_2__.it)("App container render", ()=>{
        (0,_testing_library_react__WEBPACK_IMPORTED_MODULE_1__.render)(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.BrowserRouter, {
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_redux__WEBPACK_IMPORTED_MODULE_5__.Provider, {
                store: _store__WEBPACK_IMPORTED_MODULE_6__/* .store */ .h,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_AppContainer__WEBPACK_IMPORTED_MODULE_4__["default"], {})
            })
        }));
    });
});

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 224:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "h": () => (/* binding */ store)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _searchSlice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(95);
/* harmony import */ var _cardsApi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(961);



const store = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.configureStore)({
    reducer: {
        [_cardsApi__WEBPACK_IMPORTED_MODULE_2__/* .cardsApi.reducerPath */ .pT.reducerPath]: _cardsApi__WEBPACK_IMPORTED_MODULE_2__/* .cardsApi.reducer */ .pT.reducer,
        search: _searchSlice__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .ZP
    },
    middleware: (getDefaultMiddleware)=>getDefaultMiddleware().concat(_cardsApi__WEBPACK_IMPORTED_MODULE_2__/* .cardsApi.middleware */ .pT.middleware)
});


/***/ }),

/***/ 184:
/***/ ((module) => {

module.exports = require("@reduxjs/toolkit");

/***/ }),

/***/ 335:
/***/ ((module) => {

module.exports = require("@reduxjs/toolkit/query/react");

/***/ }),

/***/ 432:
/***/ ((module) => {

module.exports = require("@testing-library/react");

/***/ }),

/***/ 689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 22:
/***/ ((module) => {

module.exports = require("react-redux");

/***/ }),

/***/ 661:
/***/ ((module) => {

module.exports = require("react-router-dom");

/***/ }),

/***/ 521:
/***/ ((module) => {

module.exports = import("vitest");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [893,2], () => (__webpack_exec__(209)));
module.exports = __webpack_exports__;

})();