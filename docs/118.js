(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[118],{

/***/ "./node_modules/@ionic/core/dist/esm/es5/build/chunk-6d7d2f8c.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/es5/build/chunk-6d7d2f8c.js ***!
  \***********************************************************************/
/*! exports provided: a, b, c, d, e, f, g, h, i, j, k */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return rIC; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return now; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return hasShadowDom; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return findItemLabel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return renderHiddenInput; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return debounceEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return isEndSide; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return assert; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return clamp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return debounce; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return pointerCoord; });
function rIC(e){"requestIdleCallback"in window?window.requestIdleCallback(e):setTimeout(e,32)}function hasShadowDom(e){return!!e.shadowRoot&&!!e.attachShadow}function findItemLabel(e){var n=e.closest("ion-item");return n?n.querySelector("ion-label"):null}function renderHiddenInput(e,n,t,a,r){if(e||hasShadowDom(n)){var o=n.querySelector("input.aux-input");o||((o=n.ownerDocument.createElement("input")).type="hidden",o.classList.add("aux-input"),n.appendChild(o)),o.disabled=r,o.name=t,o.value=a||""}}function clamp(e,n,t){return Math.max(e,Math.min(n,t))}function assert(e,n){if(!e){var t="ASSERT: "+n;throw console.error(t),new Error(t)}}function now(e){return e.timeStamp||Date.now()}function pointerCoord(e){if(e){var n=e.changedTouches;if(n&&n.length>0){var t=n[0];return{x:t.clientX,y:t.clientY}}if(void 0!==e.pageX)return{x:e.pageX,y:e.pageY}}return{x:0,y:0}}function isEndSide(e,n){var t="rtl"===e.document.dir;switch(n){case"start":return t;case"end":return!t;default:throw new Error('"'+n+'" is not a valid value for [side]. Use "start" or "end" instead.')}}function debounceEvent(e,n){var t=e._original||e;return{_original:e,emit:debounce(t.emit.bind(t),n)}}function debounce(e,n){var t;return void 0===n&&(n=0),function(){for(var a=[],r=0;r<arguments.length;r++)a[r]=arguments[r];clearTimeout(t),t=setTimeout.apply(void 0,[e,n].concat(a))}}

/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm/es5/build/t547wlk7.entry.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/es5/build/t547wlk7.entry.js ***!
  \***********************************************************************/
/*! exports provided: IonBackdrop */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IonBackdrop", function() { return Backdrop; });
/* harmony import */ var _chunk_6d7d2f8c_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chunk-6d7d2f8c.js */ "./node_modules/@ionic/core/dist/esm/es5/build/chunk-6d7d2f8c.js");
/* harmony import */ var _chunk_f56eaea8_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chunk-f56eaea8.js */ "./node_modules/@ionic/core/dist/esm/es5/build/chunk-f56eaea8.js");
var Backdrop=function(){function e(){this.lastClick=-1e4,this.blocker=_chunk_f56eaea8_js__WEBPACK_IMPORTED_MODULE_1__["GESTURE_CONTROLLER"].createBlocker({disableScroll:!0}),this.visible=!0,this.tappable=!0,this.stopPropagation=!0}return e.prototype.componentDidLoad=function(){this.stopPropagation&&this.blocker.block()},e.prototype.componentDidUnload=function(){this.blocker.destroy()},e.prototype.onTouchStart=function(e){this.lastClick=Object(_chunk_6d7d2f8c_js__WEBPACK_IMPORTED_MODULE_0__["b"])(e),this.emitTap(e)},e.prototype.onMouseDown=function(e){this.lastClick<Object(_chunk_6d7d2f8c_js__WEBPACK_IMPORTED_MODULE_0__["b"])(e)-2500&&this.emitTap(e)},e.prototype.emitTap=function(e){this.stopPropagation&&(e.preventDefault(),e.stopPropagation()),this.tappable&&this.ionBackdropTap.emit()},e.prototype.hostData=function(){return{tabindex:"-1",class:{"backdrop-hide":!this.visible,"backdrop-no-tappable":!this.tappable}}},Object.defineProperty(e,"is",{get:function(){return"ion-backdrop"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{doc:{context:"document"},stopPropagation:{type:Boolean,attr:"stop-propagation"},tappable:{type:Boolean,attr:"tappable"},visible:{type:Boolean,attr:"visible"}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"events",{get:function(){return[{name:"ionBackdropTap",method:"ionBackdropTap",bubbles:!0,cancelable:!0,composed:!0}]},enumerable:!0,configurable:!0}),Object.defineProperty(e,"listeners",{get:function(){return[{name:"touchstart",method:"onTouchStart",capture:!0},{name:"click",method:"onMouseDown",capture:!0},{name:"mousedown",method:"onMouseDown",capture:!0}]},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return":host{left:0;right:0;top:0;bottom:0;display:block;position:absolute;-webkit-transform:translateZ(0);transform:translateZ(0);contain:strict;cursor:pointer;opacity:.01;-ms-touch-action:none;touch-action:none;z-index:2}:host(.backdrop-hide){background:transparent}:host(.backdrop-no-tappable){cursor:auto}:host{background-color:var(--ion-backdrop-color,#000)}"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"styleMode",{get:function(){return"md"},enumerable:!0,configurable:!0}),e}();

/***/ })

}]);
//# sourceMappingURL=118.js.map