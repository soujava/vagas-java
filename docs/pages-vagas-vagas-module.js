(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-vagas-vagas-module"],{

/***/ "./src/app/pages/vagas/vagas.module.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/vagas/vagas.module.ts ***!
  \*********************************************/
/*! exports provided: VagasPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VagasPageModule", function() { return VagasPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _vagas_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./vagas.page */ "./src/app/pages/vagas/vagas.page.ts");







var routes = [
    {
        path: '',
        component: _vagas_page__WEBPACK_IMPORTED_MODULE_6__["VagasPage"]
    }
];
var VagasPageModule = /** @class */ (function () {
    function VagasPageModule() {
    }
    VagasPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_vagas_page__WEBPACK_IMPORTED_MODULE_6__["VagasPage"]]
        })
    ], VagasPageModule);
    return VagasPageModule;
}());



/***/ }),

/***/ "./src/app/pages/vagas/vagas.page.html":
/*!*********************************************!*\
  !*** ./src/app/pages/vagas/vagas.page.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-menu-button></ion-menu-button>\n    <ion-title>\n      Vagas\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <!-- List of Text Items -->\n\n  <ion-grid>\n    <ion-row>\n      <ion-col size=\"12\">\n        <ion-searchbar\n          [(ngModel)]=\"pesquisa\"\n          (ionChange)=\"buscar()\"\n          (ionClear)=\"cancelar()\"\n          (ionCancel)=\"limpar()\"\n        >\n        </ion-searchbar>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col size=\"12\">\n        <ion-card *ngFor=\"let vaga of vagas\" (click)=\"openVaga(vaga)\">\n          <ion-card-header>\n            <ion-card-title>{{ vaga.title }}</ion-card-title>\n            <ion-card-subtitle>{{ getLabels(vaga?.labels) }}</ion-card-subtitle>\n          </ion-card-header>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n    <ion-infinite-scroll threshold=\"100px\" (ionInfinite)=\"loadData($event)\">\n      <ion-infinite-scroll-content\n        loadingSpinner=\"bubbles\"\n        loadingText=\"Loading more data...\"\n      >\n      </ion-infinite-scroll-content>\n    </ion-infinite-scroll>\n  </ion-grid>\n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\n    <ion-fab-button>\n      <ion-icon name=\"add\" (click)=\"openNewVaga()\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/vagas/vagas.page.scss":
/*!*********************************************!*\
  !*** ./src/app/pages/vagas/vagas.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3ZhZ2FzL3ZhZ2FzLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/vagas/vagas.page.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/vagas/vagas.page.ts ***!
  \*******************************************/
/*! exports provided: VagasPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VagasPage", function() { return VagasPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_service_vaga_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/vaga.service */ "./src/app/service/vaga.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var VagasPage = /** @class */ (function () {
    function VagasPage(vagaService, router) {
        this.vagaService = vagaService;
        this.router = router;
        this.vagas = [];
        this.vagasFilter = [];
        this.page = 1;
        this.pesquisa = '';
    }
    VagasPage.prototype.ngOnInit = function () {
        var _this = this;
        this.vagaService.getAllVagasPaginacao(this.page, 100).subscribe(function (result) {
            _this.vagasFilter = result;
            _this.vagas = _this.vagasFilter;
        });
    };
    VagasPage.prototype.openVaga = function (vaga) {
        this.router.navigate(["/cadastro-vaga/" + vaga.number]);
    };
    VagasPage.prototype.loadData = function (event) {
        var _this = this;
        this.vagaService.getAllVagasPaginacao(this.page++, 10).subscribe(function (result) {
            _this.vagasFilter = _this.vagasFilter.concat(result);
            _this.vagas = _this.vagasFilter;
            event.target.complete();
        });
    };
    VagasPage.prototype.buscar = function () {
        var _this = this;
        this.vagas = this.vagasFilter.filter(function (a) {
            return a.title.toLocaleLowerCase().includes(_this.pesquisa.toLowerCase());
        });
    };
    VagasPage.prototype.cancelar = function () {
        this.vagas = this.vagasFilter;
    };
    VagasPage.prototype.limpar = function () {
        this.pesquisa = '';
    };
    VagasPage.prototype.openNewVaga = function () {
        window.open('https://github.com/soujava/vagas-java/issues/new', '_blank');
    };
    VagasPage.prototype.getLabels = function (labels) {
        if (labels) {
            var labelMap = labels.map(function (a) { return a.name; });
            if (labelMap.length > 0) {
                return labelMap.reduce(function (a) { return a + ', '; });
            }
        }
    };
    VagasPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-vagas',
            template: __webpack_require__(/*! ./vagas.page.html */ "./src/app/pages/vagas/vagas.page.html"),
            styles: [__webpack_require__(/*! ./vagas.page.scss */ "./src/app/pages/vagas/vagas.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_service_vaga_service__WEBPACK_IMPORTED_MODULE_2__["VagaService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], VagasPage);
    return VagasPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-vagas-vagas-module.js.map