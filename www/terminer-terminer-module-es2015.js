(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["terminer-terminer-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/terminer/terminer.page.html":
/*!***********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/terminer/terminer.page.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content class=\"ion-padding\" style=\"--background:rgb(245, 245, 245);\">\n  <ion-item lines=\"none\" style=\"margin-bottom: 20%;\">\n    <div slot=\"start\" class=\"step-title\">\n      <span class=\"step-number\">4</span>\n    </div>\n    <h3>Terminer</h3>\n  </ion-item>\n  <ion-item>\n    <ion-input type=\"tel\" placeholder=\"Numer de telephone\"></ion-input>\n    <ion-icon slot=\"end\" name=\"call\" color=\"tertiary\"></ion-icon>\n  </ion-item>\n  <ion-item>\n    <ion-input type=\"password\" placeholder=\"Mot de passe\"></ion-input>\n    <ion-icon slot=\"end\" name=\"eye\" color=\"tertiary\"></ion-icon>\n  </ion-item>\n  <ion-item>\n    <ion-input type=\"password\" placeholder=\"Confirmer mot de passe\"></ion-input>\n    <ion-icon slot=\"end\" name=\"eye\" color=\"tertiary\"></ion-icon>\n  </ion-item>\n</ion-content>\n<ion-footer>\n  <ion-toolbar>\n    <ion-row>\n      <ion-col>\n        <ion-button expand=\"block\" class=\"button-degrader\" (click)=\"forwardStep()\">Retour</ion-button>\n      </ion-col>\n      <ion-col>\n        <ion-button expand=\"block\" class=\"button-degrader\" (click)=\"nextStep()\">Continuer</ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-toolbar>\n</ion-footer>"

/***/ }),

/***/ "./src/app/terminer/terminer-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/terminer/terminer-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: TerminerPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TerminerPageRoutingModule", function() { return TerminerPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _terminer_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./terminer.page */ "./src/app/terminer/terminer.page.ts");




const routes = [
    {
        path: '',
        component: _terminer_page__WEBPACK_IMPORTED_MODULE_3__["TerminerPage"]
    }
];
let TerminerPageRoutingModule = class TerminerPageRoutingModule {
};
TerminerPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], TerminerPageRoutingModule);



/***/ }),

/***/ "./src/app/terminer/terminer.module.ts":
/*!*********************************************!*\
  !*** ./src/app/terminer/terminer.module.ts ***!
  \*********************************************/
/*! exports provided: TerminerPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TerminerPageModule", function() { return TerminerPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _terminer_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./terminer-routing.module */ "./src/app/terminer/terminer-routing.module.ts");
/* harmony import */ var _terminer_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./terminer.page */ "./src/app/terminer/terminer.page.ts");







let TerminerPageModule = class TerminerPageModule {
};
TerminerPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _terminer_routing_module__WEBPACK_IMPORTED_MODULE_5__["TerminerPageRoutingModule"]
        ],
        declarations: [_terminer_page__WEBPACK_IMPORTED_MODULE_6__["TerminerPage"]]
    })
], TerminerPageModule);



/***/ }),

/***/ "./src/app/terminer/terminer.page.scss":
/*!*********************************************!*\
  !*** ./src/app/terminer/terminer.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Rlcm1pbmVyL3Rlcm1pbmVyLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/terminer/terminer.page.ts":
/*!*******************************************!*\
  !*** ./src/app/terminer/terminer.page.ts ***!
  \*******************************************/
/*! exports provided: TerminerPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TerminerPage", function() { return TerminerPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let TerminerPage = class TerminerPage {
    constructor(router) {
        this.router = router;
    }
    forwardStep() {
        this.router.navigateByUrl("register-step3");
    }
    nextStep() {
        this.router.navigateByUrl("login");
    }
    ngOnInit() {
    }
};
TerminerPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
TerminerPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-terminer',
        template: __webpack_require__(/*! raw-loader!./terminer.page.html */ "./node_modules/raw-loader/index.js!./src/app/terminer/terminer.page.html"),
        styles: [__webpack_require__(/*! ./terminer.page.scss */ "./src/app/terminer/terminer.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], TerminerPage);



/***/ })

}]);
//# sourceMappingURL=terminer-terminer-module-es2015.js.map