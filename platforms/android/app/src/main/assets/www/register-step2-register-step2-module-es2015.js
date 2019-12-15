(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["register-step2-register-step2-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/register-step2/register-step2.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/register-step2/register-step2.page.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content padding style=\"--background:rgb(245, 245, 245);\">\n    <form>\n        <ion-item lines=\"none\" style=\"margin-bottom: 20%;\">\n          <div slot=\"start\" class=\"step-title\">\n            <span class=\"step-number\">2</span>\n          </div>\n          <h3>Niveau d'etude</h3>\n        </ion-item>\n        <ion-item>\n          <ion-label position=\"stacked\"></ion-label>\n          <ion-select placeholder=\"Niveau le plus haut\" >\n            <ion-select-option value=\"f\" *ngFor=\"let diplome of diplomes\">{{diplome}}</ion-select-option>\n          </ion-select>\n        </ion-item>\n        <ion-item>\n          <ion-input type=\"file\" placeholder=\"Telecharger le diplome\"></ion-input>\n          <ion-icon slot=\"end\" name=\"cloud-upload\" color=\"tertiary\"></ion-icon>\n        </ion-item>\n    </form>\n</ion-content>\n<ion-footer>\n  <ion-toolbar>\n    <ion-grid>\n      <ion-row>\n        <ion-col><ion-button expand=\"block\" class=\"button-degrader\"\n          (click)=\"forwardStep()\">Retour</ion-button></ion-col>\n        <ion-col><ion-button expand=\"block\" class=\"button-degrader\"\n          (click)=\"nextStep()\">Continuer</ion-button></ion-col>\n      </ion-row>\n  </ion-grid>\n  </ion-toolbar>\n</ion-footer>\n"

/***/ }),

/***/ "./src/app/register-step2/register-step2-routing.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/register-step2/register-step2-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: RegisterStep2PageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterStep2PageRoutingModule", function() { return RegisterStep2PageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _register_step2_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./register-step2.page */ "./src/app/register-step2/register-step2.page.ts");




const routes = [
    {
        path: '',
        component: _register_step2_page__WEBPACK_IMPORTED_MODULE_3__["RegisterStep2Page"]
    }
];
let RegisterStep2PageRoutingModule = class RegisterStep2PageRoutingModule {
};
RegisterStep2PageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], RegisterStep2PageRoutingModule);



/***/ }),

/***/ "./src/app/register-step2/register-step2.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/register-step2/register-step2.module.ts ***!
  \*********************************************************/
/*! exports provided: RegisterStep2PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterStep2PageModule", function() { return RegisterStep2PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _register_step2_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./register-step2-routing.module */ "./src/app/register-step2/register-step2-routing.module.ts");
/* harmony import */ var _register_step2_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./register-step2.page */ "./src/app/register-step2/register-step2.page.ts");







let RegisterStep2PageModule = class RegisterStep2PageModule {
};
RegisterStep2PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _register_step2_routing_module__WEBPACK_IMPORTED_MODULE_5__["RegisterStep2PageRoutingModule"]
        ],
        declarations: [_register_step2_page__WEBPACK_IMPORTED_MODULE_6__["RegisterStep2Page"]]
    })
], RegisterStep2PageModule);



/***/ }),

/***/ "./src/app/register-step2/register-step2.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/register-step2/register-step2.page.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlZ2lzdGVyLXN0ZXAyL3JlZ2lzdGVyLXN0ZXAyLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/register-step2/register-step2.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/register-step2/register-step2.page.ts ***!
  \*******************************************************/
/*! exports provided: RegisterStep2Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterStep2Page", function() { return RegisterStep2Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let RegisterStep2Page = class RegisterStep2Page {
    constructor(router) {
        this.router = router;
        this.diplomes = [];
        this.diplomes = [
            'Baccalaureat',
            'Licence',
            'Master 1',
            'Master 2',
            'Professeur',
            'Maitre'
        ];
    }
    forwardStep() {
        this.router.navigateByUrl('register');
    }
    nextStep() {
        this.router.navigateByUrl('register-step3');
    }
};
RegisterStep2Page.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
RegisterStep2Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-register-step2',
        template: __webpack_require__(/*! raw-loader!./register-step2.page.html */ "./node_modules/raw-loader/index.js!./src/app/register-step2/register-step2.page.html"),
        styles: [__webpack_require__(/*! ./register-step2.page.scss */ "./src/app/register-step2/register-step2.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], RegisterStep2Page);



/***/ })

}]);
//# sourceMappingURL=register-step2-register-step2-module-es2015.js.map