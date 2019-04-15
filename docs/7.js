(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[7],{

/***/ "./node_modules/@ionic/core/dist/esm/es5/build/chunk-ca529fbc.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/es5/build/chunk-ca529fbc.js ***!
  \***********************************************************************/
/*! exports provided: createSwipeBackGesture */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createSwipeBackGesture", function() { return createSwipeBackGesture; });
/* harmony import */ var _chunk_f56eaea8_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chunk-f56eaea8.js */ "./node_modules/@ionic/core/dist/esm/es5/build/chunk-f56eaea8.js");
function createSwipeBackGesture(e,t,r,a,n,i){var o=e.ownerDocument.defaultView;return Object(_chunk_f56eaea8_js__WEBPACK_IMPORTED_MODULE_0__["createGesture"])({el:e,queue:t,gestureName:"goback-swipe",gesturePriority:40,threshold:10,canStart:function(e){return e.startX<=50&&r()},onStart:a,onMove:function(e){n(e.deltaX/o.innerWidth)},onEnd:function(e){var t=o.innerWidth,r=e.deltaX/t,a=e.velocityX,n=a>=0&&(a>.2||e.deltaX>t/2),u=(n?1-r:r)*t,c=0;if(u>5){var s=u/Math.abs(a);c=Math.min(s,300)}i(n,r,c)}})}

/***/ })

}]);
//# sourceMappingURL=7.js.map