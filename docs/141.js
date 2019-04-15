(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[141],{

/***/ "./node_modules/@ionic/core/dist/esm/es5/build/chunk-f2d9e763.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/es5/build/chunk-f2d9e763.js ***!
  \***********************************************************************/
/*! exports provided: mdTransitionAnimation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mdTransitionAnimation", function() { return mdTransitionAnimation; });
var TRANSLATEY="translateY",OFF_BOTTOM="40px",CENTER="0px";function mdTransitionAnimation(e,n,i){var o=i.leavingEl,a=getIonPageElement(i.enteringEl),r=new e;r.addElement(a).beforeRemoveClass("ion-page-invisible");var t="back"===i.direction;t?r.duration(i.duration||200).easing("cubic-bezier(0.47,0,0.745,0.715)"):r.duration(i.duration||280).easing("cubic-bezier(0.36,0.66,0.04,1)").fromTo(TRANSLATEY,OFF_BOTTOM,CENTER,!0).fromTo("opacity",.01,1,!0);var T=a.querySelector("ion-toolbar");if(T){var c=new e;c.addElement(T),r.add(c)}if(o&&t){r.duration(i.duration||200).easing("cubic-bezier(0.47,0,0.745,0.715)");var d=new e;d.addElement(getIonPageElement(o)).fromTo(TRANSLATEY,CENTER,OFF_BOTTOM).fromTo("opacity",1,0),r.add(d)}return Promise.resolve(r)}function getIonPageElement(e){return e.classList.contains("ion-page")?e:e.querySelector(":scope > .ion-page, :scope > ion-nav, :scope > ion-tabs")||e}

/***/ })

}]);
//# sourceMappingURL=141.js.map