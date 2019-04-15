(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[8],{

/***/ "./node_modules/@ionic/core/dist/esm/es5/build/chunk-f5118fa0.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/es5/build/chunk-f5118fa0.js ***!
  \***********************************************************************/
/*! exports provided: startHardwareBackButton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "startHardwareBackButton", function() { return startHardwareBackButton; });
/* harmony import */ var _polyfills_tslib_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../polyfills/tslib.js */ "./node_modules/@ionic/core/dist/esm/es5/polyfills/tslib.js");
function startHardwareBackButton(t){var e=!1;t.document.addEventListener("backbutton",function(){if(!e){var n=[],r=new CustomEvent("ionBackButton",{bubbles:!1,detail:{register:function(t,e){n.push({priority:t,handler:e})}}});if(t.document.dispatchEvent(r),n.length>0){var i,a=Number.MIN_SAFE_INTEGER;n.forEach(function(t){var e=t.priority;e>=a&&(a=e,i=t.handler)}),e=!0,executeAction(i).then(function(){return e=!1})}}})}function executeAction(t){return _polyfills_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this,void 0,void 0,function(){var e,n;return _polyfills_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__generator"](this,function(r){switch(r.label){case 0:return r.trys.push([0,3,,4]),t?null==(e=t())?[3,2]:[4,e]:[3,2];case 1:r.sent(),r.label=2;case 2:return[3,4];case 3:return n=r.sent(),console.error(n),[3,4];case 4:return[2]}})})}

/***/ })

}]);
//# sourceMappingURL=8.js.map