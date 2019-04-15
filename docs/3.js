(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

/***/ "./node_modules/@ionic/core/dist/esm/es5/build/chunk-2a112823.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/es5/build/chunk-2a112823.js ***!
  \***********************************************************************/
/*! exports provided: startFocusVisible */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "startFocusVisible", function() { return startFocusVisible; });
var ION_FOCUSED="ion-focused",ION_FOCUSABLE="ion-focusable",FOCUS_KEYS=["Tab","ArrowDown","Space","Escape"," ","Shift","Enter","ArrowLeft","ArrowRight","ArrowUp"];function startFocusVisible(t){var n=[],e=!0;function o(t){n.forEach(function(t){return t.classList.remove(ION_FOCUSED)}),t.forEach(function(t){return t.classList.add(ION_FOCUSED)}),n=t}t.addEventListener("keydown",function(t){(e=FOCUS_KEYS.includes(t.key))||o([])});var s=function(){e=!1,o([])};t.addEventListener("focusin",function(t){e&&t.composedPath&&o(t.composedPath().filter(function(t){return!!t.classList&&t.classList.contains(ION_FOCUSABLE)}))}),t.addEventListener("focusout",function(){t.activeElement===t.body&&o([])}),t.addEventListener("touchstart",s),t.addEventListener("mousedown",s)}

/***/ })

}]);
//# sourceMappingURL=3.js.map