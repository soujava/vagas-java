(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["github-auth-github-auth-module"],{

/***/ "./src/app/github-auth/github-auth.module.ts":
/*!***************************************************!*\
  !*** ./src/app/github-auth/github-auth.module.ts ***!
  \***************************************************/
/*! exports provided: GithubAuthPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GithubAuthPageModule", function() { return GithubAuthPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _github_auth_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./github-auth.page */ "./src/app/github-auth/github-auth.page.ts");







var routes = [
    {
        path: '',
        component: _github_auth_page__WEBPACK_IMPORTED_MODULE_6__["GithubAuthPage"]
    }
];
var GithubAuthPageModule = /** @class */ (function () {
    function GithubAuthPageModule() {
    }
    GithubAuthPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_github_auth_page__WEBPACK_IMPORTED_MODULE_6__["GithubAuthPage"]]
        })
    ], GithubAuthPageModule);
    return GithubAuthPageModule;
}());



/***/ }),

/***/ "./src/app/github-auth/github-auth.page.html":
/*!***************************************************!*\
  !*** ./src/app/github-auth/github-auth.page.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>githubAuth</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/github-auth/github-auth.page.scss":
/*!***************************************************!*\
  !*** ./src/app/github-auth/github-auth.page.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2dpdGh1Yi1hdXRoL2dpdGh1Yi1hdXRoLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/github-auth/github-auth.page.ts":
/*!*************************************************!*\
  !*** ./src/app/github-auth/github-auth.page.ts ***!
  \*************************************************/
/*! exports provided: GithubAuthPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GithubAuthPage", function() { return GithubAuthPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");



var GithubAuthPage = /** @class */ (function () {
    function GithubAuthPage(route, router) {
        this.route = route;
        this.router = router;
    }
    GithubAuthPage.prototype.getAccessToken = function (code) {
    };
    GithubAuthPage.prototype.ngOnInit = function () {
        var _this = this;
        this.route.queryParams.subscribe(function (param) {
            var code = param["code"];
            _this.getAccessToken(code);
        });
    };
    GithubAuthPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: "app-github-auth",
            template: __webpack_require__(/*! ./github-auth.page.html */ "./src/app/github-auth/github-auth.page.html"),
            styles: [__webpack_require__(/*! ./github-auth.page.scss */ "./src/app/github-auth/github-auth.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], GithubAuthPage);
    return GithubAuthPage;
}());



/***/ })

}]);
//# sourceMappingURL=github-auth-github-auth-module.js.map