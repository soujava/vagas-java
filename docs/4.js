(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4],{

/***/ "./node_modules/@ionic/core/dist/esm/es5/build/chunk-4513ec06.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/es5/build/chunk-4513ec06.js ***!
  \***********************************************************************/
/*! exports provided: startTapClick */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "startTapClick", function() { return startTapClick; });
/* harmony import */ var _chunk_6d7d2f8c_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chunk-6d7d2f8c.js */ "./node_modules/@ionic/core/dist/esm/es5/build/chunk-6d7d2f8c.js");
function startTapClick(t,e){var n,i,o,a,r=10*-MOUSE_WAIT,s=0,c=e.getBoolean("animated",!0)&&e.getBoolean("rippleEffect",!0),d=new WeakMap;function l(t){r=Object(_chunk_6d7d2f8c_js__WEBPACK_IMPORTED_MODULE_0__["b"])(t),E(t)}function f(){clearTimeout(a),a=void 0,i&&(A(!1),i=void 0)}function u(t){i||void 0!==n&&null!==n.parentElement||(n=void 0,v(getActivatableTarget(t),t))}function E(t){v(void 0,t)}function v(t,e){if(!t||t!==i){clearTimeout(a),a=void 0;var n=Object(_chunk_6d7d2f8c_js__WEBPACK_IMPORTED_MODULE_0__["k"])(e),o=n.x,r=n.y;if(i){if(d.has(i))throw new Error("internal error");i.classList.contains(ACTIVATED)||T(i,o,r),A(!0)}if(t){var s=d.get(t);s&&(clearTimeout(s),d.delete(t));var c=isInstant(t)?0:ADD_ACTIVATED_DEFERS;t.classList.remove(ACTIVATED),a=setTimeout(function(){T(t,o,r),a=void 0},c)}i=t}}function T(t,e,n){s=Date.now(),t.classList.add(ACTIVATED);var i=c&&getRippleEffect(t);i&&i.addRipple&&(o=i.addRipple(e,n))}function A(t){void 0!==o&&o.then(function(t){return t()});var e=i;if(e){var n=CLEAR_STATE_DEFERS-Date.now()+s;if(t&&n>0&&!isInstant(e)){var a=setTimeout(function(){e.classList.remove(ACTIVATED),d.delete(e)},CLEAR_STATE_DEFERS);d.set(e,a)}else e.classList.remove(ACTIVATED)}}t.addEventListener("ionScrollStart",function(t){n=t.target,f()}),t.addEventListener("ionScrollEnd",function(){n=void 0}),t.addEventListener("ionGestureCaptured",f),t.addEventListener("touchstart",function(t){r=Object(_chunk_6d7d2f8c_js__WEBPACK_IMPORTED_MODULE_0__["b"])(t),u(t)},!0),t.addEventListener("touchcancel",l,!0),t.addEventListener("touchend",l,!0),t.addEventListener("mousedown",function(t){var e=Object(_chunk_6d7d2f8c_js__WEBPACK_IMPORTED_MODULE_0__["b"])(t)-MOUSE_WAIT;r<e&&u(t)},!0),t.addEventListener("mouseup",function(t){var e=Object(_chunk_6d7d2f8c_js__WEBPACK_IMPORTED_MODULE_0__["b"])(t)-MOUSE_WAIT;r<e&&E(t)},!0)}function getActivatableTarget(t){if(!t.composedPath)return t.target.closest(".ion-activatable");for(var e=t.composedPath(),n=0;n<e.length-2;n++){var i=e[n];if(i.classList&&i.classList.contains("ion-activatable"))return i}}function isInstant(t){return t.classList.contains("ion-activatable-instant")}function getRippleEffect(t){if(t.shadowRoot){var e=t.shadowRoot.querySelector("ion-ripple-effect");if(e)return e}return t.querySelector("ion-ripple-effect")}var ACTIVATED="activated",ADD_ACTIVATED_DEFERS=200,CLEAR_STATE_DEFERS=200,MOUSE_WAIT=2500;

/***/ })

}]);
//# sourceMappingURL=4.js.map