(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["register-register-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/register/register.page.html":
/*!***********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/register/register.page.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content padding style=\"--background:rgb(245, 245, 245);\">\n  <form>\n    <ion-item lines=\"none\" style=\"margin-bottom: 20%;\">\n      <div slot=\"start\" class=\"step-title\">\n        <span class=\"step-number\">1</span>\n      </div>\n      <h3>Informations personnelles</h3>\n    </ion-item>\n    <ion-item>\n      <ion-input type=\"text\" placeholder=\"Nom\"></ion-input>\n      <ion-icon name=\"person\" slot=\"end\" color=\"tertiary\"></ion-icon>\n    </ion-item>\n    <ion-item>\n      <ion-input type=\"text\" placeholder=\"Prenom\"></ion-input>\n      <ion-icon name=\"person\" slot=\"end\" color=\"tertiary\"></ion-icon>\n    </ion-item>\n    <ion-item>\n      <ion-input type=\"text\" placeholder=\"Ville\"></ion-input>\n      <ion-icon name=\"locate\" slot=\"end\" color=\"tertiary\"></ion-icon>\n    </ion-item>\n    <ion-item>\n      <ion-input type=\"text\" placeholder=\"profession\"></ion-input>\n      <ion-icon name=\"business\" slot=\"end\" color=\"tertiary\"></ion-icon>\n    </ion-item>\n  </form>\n</ion-content>\n<ion-footer>\n  <ion-toolbar>\n    <ion-grid>\n      <ion-row>\n        <ion-col><ion-button expand=\"block\" class=\"button-degrader\" \n          (click)=\"backforward()\">Retour</ion-button></ion-col>\n        <ion-col><ion-button expand=\"block\" class=\"button-degrader\"\n          (click)=\"nextStep()\">Continuer</ion-button></ion-col>\n      </ion-row>\n  </ion-grid>\n  </ion-toolbar>\n</ion-footer>"

/***/ }),

/***/ "./src/app/register/register-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/register/register-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: RegisterPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPageRoutingModule", function() { return RegisterPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _register_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./register.page */ "./src/app/register/register.page.ts");




var routes = [
    {
        path: '',
        component: _register_page__WEBPACK_IMPORTED_MODULE_3__["RegisterPage"]
    }
];
var RegisterPageRoutingModule = /** @class */ (function () {
    function RegisterPageRoutingModule() {
    }
    RegisterPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], RegisterPageRoutingModule);
    return RegisterPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/register/register.module.ts":
/*!*********************************************!*\
  !*** ./src/app/register/register.module.ts ***!
  \*********************************************/
/*! exports provided: RegisterPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPageModule", function() { return RegisterPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _register_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./register-routing.module */ "./src/app/register/register-routing.module.ts");
/* harmony import */ var _register_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./register.page */ "./src/app/register/register.page.ts");







var RegisterPageModule = /** @class */ (function () {
    function RegisterPageModule() {
    }
    RegisterPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _register_routing_module__WEBPACK_IMPORTED_MODULE_5__["RegisterPageRoutingModule"]
            ],
            declarations: [_register_page__WEBPACK_IMPORTED_MODULE_6__["RegisterPage"]]
        })
    ], RegisterPageModule);
    return RegisterPageModule;
}());



/***/ }),

/***/ "./src/app/register/register.page.scss":
/*!*********************************************!*\
  !*** ./src/app/register/register.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".step-title {\n  background-color: #f39d34;\n  font-style: italic;\n  height: 45px;\n  width: 45px;\n  border-radius: 50%;\n  font-size: 16px;\n}\n\n.step-number {\n  font-size: 38px;\n  margin-left: 10px;\n  color: white;\n  font-style: italic;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9uaHkvRG9jdW1lbnRzL0dpdEh1Yi9hbXBoaS9zcmMvYXBwL3JlZ2lzdGVyL3JlZ2lzdGVyLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcmVnaXN0ZXIvcmVnaXN0ZXIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kseUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FDQ0o7O0FERUE7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL3JlZ2lzdGVyL3JlZ2lzdGVyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zdGVwLXRpdGxle1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMzlkMzQ7XG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xuICAgIGhlaWdodDogNDVweDtcbiAgICB3aWR0aDogNDVweDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgZm9udC1zaXplOiAxNnB4O1xufVxuXG4uc3RlcC1udW1iZXJ7XG4gICAgZm9udC1zaXplOiAzOHB4O1xuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XG59IiwiLnN0ZXAtdGl0bGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjM5ZDM0O1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG4gIGhlaWdodDogNDVweDtcbiAgd2lkdGg6IDQ1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuXG4uc3RlcC1udW1iZXIge1xuICBmb250LXNpemU6IDM4cHg7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbn0iXX0= */"

/***/ }),

/***/ "./src/app/register/register.page.ts":
/*!*******************************************!*\
  !*** ./src/app/register/register.page.ts ***!
  \*******************************************/
/*! exports provided: RegisterPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPage", function() { return RegisterPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var RegisterPage = /** @class */ (function () {
    function RegisterPage(router) {
        this.router = router;
        this.slideOpts = {
            initialSlide: 1,
            speed: 400
        };
    }
    RegisterPage.prototype.backforward = function () {
        this.router.navigateByUrl('register');
    };
    RegisterPage.prototype.nextStep = function () {
        this.router.navigateByUrl('register-step2');
    };
    RegisterPage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    RegisterPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! raw-loader!./register.page.html */ "./node_modules/raw-loader/index.js!./src/app/register/register.page.html"),
            styles: [__webpack_require__(/*! ./register.page.scss */ "./src/app/register/register.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], RegisterPage);
    return RegisterPage;
}());



/***/ })

}]);
//# sourceMappingURL=register-register-module-es5.js.map