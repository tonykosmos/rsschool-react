"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888,756];
exports.modules = {

/***/ 956:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(893);
// EXTERNAL MODULE: ./src/pages/AppContainer.tsx + 10 modules
var AppContainer = __webpack_require__(2);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
;// CONCATENATED MODULE: ./src/Components/ErrorBoundary/ErrorBoundary.tsx


class ErrorBoundary extends (external_react_default()).Component {
    constructor(props){
        super(props);
        this.state = {
            hasError: false
        };
    }
    static getDerivedStateFromError(error) {
        return {
            hasError: true,
            error
        };
    }
    componentDidCatch(error) {
        this.setState({
            hasError: true,
            error
        });
    }
    render() {
        if (this.state.hasError) {
            return /*#__PURE__*/ jsx_runtime.jsx("h2", {
                children: "Something went wrong, please reload the page"
            });
        }
        return this.props.children;
    }
}
/* harmony default export */ const ErrorBoundary_ErrorBoundary = (ErrorBoundary);

// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(22);
// EXTERNAL MODULE: ./src/store/index.ts
var store = __webpack_require__(224);
;// CONCATENATED MODULE: ./src/pages/_app.tsx





function App() {
    return /*#__PURE__*/ jsx_runtime.jsx(jsx_runtime.Fragment, {
        children: /*#__PURE__*/ jsx_runtime.jsx(external_react_redux_.Provider, {
            store: store/* store */.h,
            children: /*#__PURE__*/ jsx_runtime.jsx(ErrorBoundary_ErrorBoundary, {
                children: /*#__PURE__*/ jsx_runtime.jsx(AppContainer["default"], {})
            })
        })
    });
}
/* harmony default export */ const _app = (App);


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

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [893,2], () => (__webpack_exec__(956)));
module.exports = __webpack_exports__;

})();