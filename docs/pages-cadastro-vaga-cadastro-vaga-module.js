(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-cadastro-vaga-cadastro-vaga-module"],{

/***/ "./src/app/pages/cadastro-vaga/cadastro-vaga.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/cadastro-vaga/cadastro-vaga.module.ts ***!
  \*************************************************************/
/*! exports provided: CadastroVagaPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CadastroVagaPageModule", function() { return CadastroVagaPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _cadastro_vaga_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./cadastro-vaga.page */ "./src/app/pages/cadastro-vaga/cadastro-vaga.page.ts");







var routes = [
    {
        path: '',
        component: _cadastro_vaga_page__WEBPACK_IMPORTED_MODULE_6__["CadastroVagaPage"]
    }
];
var CadastroVagaPageModule = /** @class */ (function () {
    function CadastroVagaPageModule() {
    }
    CadastroVagaPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_cadastro_vaga_page__WEBPACK_IMPORTED_MODULE_6__["CadastroVagaPage"]]
        })
    ], CadastroVagaPageModule);
    return CadastroVagaPageModule;
}());



/***/ }),

/***/ "./src/app/pages/cadastro-vaga/cadastro-vaga.page.html":
/*!*************************************************************!*\
  !*** ./src/app/pages/cadastro-vaga/cadastro-vaga.page.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-menu-button></ion-menu-button>\n    <ion-title>\n      Cadastro de vaga\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-item>\n      <ion-label position=\"floating\">Titulo</ion-label>\n      <ion-input [ngModel]=\"vaga?.title\"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label position=\"stacked\">Descrição</ion-label>\n      <ion-textarea\n        [ngModel]=\"vaga?.body\"\n        rows=\"15\"\n        cols=\"20\"\n        placeholder=\"Digite da vaga\"\n      ></ion-textarea>\n    </ion-item>\n    <ion-item>\n      <ion-label position=\"floating\">Labels</ion-label>\n      <ion-input [ngModel]=\"getLabels(vaga?.labels)\"></ion-input>\n    </ion-item>\n  </ion-list>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/cadastro-vaga/cadastro-vaga.page.scss":
/*!*************************************************************!*\
  !*** ./src/app/pages/cadastro-vaga/cadastro-vaga.page.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NhZGFzdHJvLXZhZ2EvY2FkYXN0cm8tdmFnYS5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/cadastro-vaga/cadastro-vaga.page.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/cadastro-vaga/cadastro-vaga.page.ts ***!
  \***********************************************************/
/*! exports provided: CadastroVagaPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CadastroVagaPage", function() { return CadastroVagaPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var src_app_service_vaga_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/service/vaga.service */ "./src/app/service/vaga.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");




var CadastroVagaPage = /** @class */ (function () {
    function CadastroVagaPage(route, vagaService) {
        this.route = route;
        this.vagaService = vagaService;
    }
    CadastroVagaPage.prototype.ngOnInit = function () {
        var _this = this;
        this.vagaService
            .getVagaById(this.route.snapshot.params['id'])
            .subscribe(function (result) {
            _this.vaga = result;
        });
    };
    CadastroVagaPage.prototype.getLabels = function (labels) {
        if (labels) {
            var labelMap = labels.map(function (a) { return a.name; });
            if (labelMap.length > 0) {
                return labelMap.reduce(function (a) { return a + ', '; });
            }
        }
    };
    CadastroVagaPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-cadastro-vaga',
            template: __webpack_require__(/*! ./cadastro-vaga.page.html */ "./src/app/pages/cadastro-vaga/cadastro-vaga.page.html"),
            styles: [__webpack_require__(/*! ./cadastro-vaga.page.scss */ "./src/app/pages/cadastro-vaga/cadastro-vaga.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            src_app_service_vaga_service__WEBPACK_IMPORTED_MODULE_1__["VagaService"]])
    ], CadastroVagaPage);
    return CadastroVagaPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-cadastro-vaga-cadastro-vaga-module.js.map