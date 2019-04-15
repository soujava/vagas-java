(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[6],{

/***/ "./node_modules/@ionic/core/dist/esm/es5/build/chunk-75ece731.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/es5/build/chunk-75ece731.js ***!
  \***********************************************************************/
/*! exports provided: startStatusTap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "startStatusTap", function() { return startStatusTap; });
function startStatusTap(t,n){t.addEventListener("statusTap",function(){n.read(function(){var e=t.document.elementFromPoint(t.innerWidth/2,t.innerHeight/2);if(e){var o=e.closest("ion-content");o&&o.componentOnReady().then(function(){n.write(function(){return o.scrollToTop(300)})})}})})}

/***/ })

}]);
//# sourceMappingURL=6.js.map