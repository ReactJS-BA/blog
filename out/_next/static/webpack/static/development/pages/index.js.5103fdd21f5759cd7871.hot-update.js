webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/banner.js":
/*!******************************!*\
  !*** ./components/banner.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _hooks_useScroll__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../hooks/useScroll */ "./hooks/useScroll.js");
var _jsxFileName = "/Users/carlosmanotas/Desktop/blog/components/banner.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var BannerParallax = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "banner__BannerParallax",
  componentId: "sc-1t5phpq-0"
})(["background-image:url(\"/static/comunidad.jpg\");background-position:center center;background-repeat:no-repeat;background-size:cover;width:100vw;height:100vh;overflow:hidden;position:fixed;-webkit-transform:translate3d(0,0,0);@media (min-width:768px){position:relative;padding-bottom:40%;height:0;background-position:", ";}"], function (_ref) {
  var scrollY = _ref.scrollY;
  return "center ".concat(50 + scrollY * 0.029, "%");
});
var Glass = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "banner__Glass",
  componentId: "sc-1t5phpq-1"
})(["background:radial-gradient(black 15%,transparent 5%) 0 0,radial-gradient(black 15%,transparent 16%) 8px 8px,radial-gradient(rgba(255,255,255,0.1) 15%,transparent 5%) 0 1px,radial-gradient(rgba(255,255,255,0.1) 15%,transparent 5%) 8px 9px;background-size:3px 3px;width:100%;height:100%;position:absolute;top:0;left:0;"]);
/* harmony default export */ __webpack_exports__["default"] = (function (_ref2) {
  var children = _ref2.children;

  var _useScroll = Object(_hooks_useScroll__WEBPACK_IMPORTED_MODULE_2__["useScroll"])(),
      scrollY = _useScroll.scrollY;

  return __jsx(BannerParallax, {
    scrollY: scrollY,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, __jsx(Glass, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }), children);
});

/***/ })

})
//# sourceMappingURL=index.js.5103fdd21f5759cd7871.hot-update.js.map