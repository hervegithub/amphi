(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["register-step3-register-step3-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/register-step3/register-step3.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/register-step3/register-step3.page.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content padding style=\"--background:rgb(245, 245, 245);\">\n  <form>\n    <ion-item lines=\"none\" style=\"margin-bottom: 20%;\">\n      <div slot=\"start\" class=\"step-title\">\n        <span class=\"step-number\">3</span>\n      </div>\n      <h3>Piece d'indentité</h3>\n    </ion-item>\n    <ion-item>\n      <ion-input type=\"file\" placeholder=\"Telecharger le diplome\"></ion-input>\n      <ion-icon slot=\"end\" name=\"cloud-upload\" color=\"tertiary\"></ion-icon>\n    </ion-item>\n  </form>\n</ion-content>\n<ion-footer>\n  <ion-toolbar>\n    <ion-row>\n      <ion-col>\n        <ion-button expand=\"block\" class=\"button-degrader\" (click)=\"forwardStep()\">Retour</ion-button>\n      </ion-col>\n      <ion-col>\n        <ion-button expand=\"block\" class=\"button-degrader\" (click)=\"nextStep()\">Continuer</ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-toolbar>\n</ion-footer>"

/***/ }),

/***/ "./src/app/register-step3/register-step3-routing.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/register-step3/register-step3-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: RegisterStep3PageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterStep3PageRoutingModule", function() { return RegisterStep3PageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _register_step3_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./register-step3.page */ "./src/app/register-step3/register-step3.page.ts");




var routes = [
    {
        path: '',
        component: _register_step3_page__WEBPACK_IMPORTED_MODULE_3__["RegisterStep3Page"]
    }
];
var RegisterStep3PageRoutingModule = /** @class */ (function () {
    function RegisterStep3PageRoutingModule() {
    }
    RegisterStep3PageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], RegisterStep3PageRoutingModule);
    return RegisterStep3PageRoutingModule;
}());



/***/ }),

/***/ "./src/app/register-step3/register-step3.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/register-step3/register-step3.module.ts ***!
  \*********************************************************/
/*! exports provided: RegisterStep3PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterStep3PageModule", function() { return RegisterStep3PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _register_step3_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./register-step3-routing.module */ "./src/app/register-step3/register-step3-routing.module.ts");
/* harmony import */ var _register_step3_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./register-step3.page */ "./src/app/register-step3/register-step3.page.ts");







var RegisterStep3PageModule = /** @class */ (function () {
    function RegisterStep3PageModule() {
    }
    RegisterStep3PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _register_step3_routing_module__WEBPACK_IMPORTED_MODULE_5__["RegisterStep3PageRoutingModule"]
            ],
            declarations: [_register_step3_page__WEBPACK_IMPORTED_MODULE_6__["RegisterStep3Page"]]
        })
    ], RegisterStep3PageModule);
    return RegisterStep3PageModule;
}());



/***/ }),

/***/ "./src/app/register-step3/register-step3.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/register-step3/register-step3.page.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlZ2lzdGVyLXN0ZXAzL3JlZ2lzdGVyLXN0ZXAzLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/register-step3/register-step3.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/register-step3/register-step3.page.ts ***!
  \*******************************************************/
/*! exports provided: RegisterStep3Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterStep3Page", function() { return RegisterStep3Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var RegisterStep3Page = /** @class */ (function () {
    function RegisterStep3Page(router) {
        this.router = router;
    }
    RegisterStep3Page.prototype.forwardStep = function () {
        this.router.navigateByUrl('register-step2');
    };
    RegisterStep3Page.prototype.nextStep = function () {
        this.router.navigateByUrl('terminer');
    };
    RegisterStep3Page.prototype.ngOnInit = function () {
    };
    RegisterStep3Page.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    RegisterStep3Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-register-step3',
            template: __webpack_require__(/*! raw-loader!./register-step3.page.html */ "./node_modules/raw-loader/index.js!./src/app/register-step3/register-step3.page.html"),
            styles: [__webpack_require__(/*! ./register-step3.page.scss */ "./src/app/register-step3/register-step3.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], RegisterStep3Page);
    return RegisterStep3Page;
}());



/***/ })

}]);
//# sourceMappingURL=register-step3-register-step3-module-es5.js.map