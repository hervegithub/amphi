(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["login-login-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/login/login.page.html":
/*!*****************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/login/login.page.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content padding>\n  <img src=\"../../assets/logoPresentation2.png\" class=\"image\">\n  <form>\n    <ion-item>\n      <ion-input type=\"text\" placeholder=\"phone number\"></ion-input>\n    </ion-item>\n    <ion-item style=\"padding-left: 0;\">\n      <ion-input  type=\"password\" placeholder=\"password\"></ion-input>\n      <ion-icon name=\"eye\" slot=\"end\" color=\"tertiary\"></ion-icon>\n    </ion-item>\n    <ion-item lines=\"none\">\n      <a slot=\"end\" class=\"forgotten\">Forgot your password?</a>\n    </ion-item>\n    <ion-button expand=\"block\" class=\"button-degrader\" \n    (click)=\"onClick()\">Login</ion-button>\n  </form>\n  <div text-center class=\"sign-up\">\n    <p>Don't have account ? <br><a (click)=\"naviguateToRegister()\">Sign up</a></p>\n  </div>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/login/login-routing.module.ts":
/*!***********************************************!*\
  !*** ./src/app/login/login-routing.module.ts ***!
  \***********************************************/
/*! exports provided: LoginPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageRoutingModule", function() { return LoginPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login.page */ "./src/app/login/login.page.ts");




const routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_3__["LoginPage"]
    }
];
let LoginPageRoutingModule = class LoginPageRoutingModule {
};
LoginPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], LoginPageRoutingModule);



/***/ }),

/***/ "./src/app/login/login.module.ts":
/*!***************************************!*\
  !*** ./src/app/login/login.module.ts ***!
  \***************************************/
/*! exports provided: LoginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login-routing.module */ "./src/app/login/login-routing.module.ts");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login.page */ "./src/app/login/login.page.ts");







let LoginPageModule = class LoginPageModule {
};
LoginPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _login_routing_module__WEBPACK_IMPORTED_MODULE_5__["LoginPageRoutingModule"]
        ],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]]
    })
], LoginPageModule);



/***/ }),

/***/ "./src/app/login/login.page.scss":
/*!***************************************!*\
  !*** ./src/app/login/login.page.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".sign-up {\n  margin-top: 30%;\n  font-style: italic;\n}\n\n.oder-login {\n  font-size: 18px;\n  font-style: italic;\n}\n\n.forgotten {\n  font-size: 14px;\n  font-style: italic;\n}\n\n.image {\n  height: 200px;\n  width: 200px;\n  margin-left: -26px;\n  margin-bottom: -46px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9uaHkvRG9jdW1lbnRzL0dpdEh1Yi9hbXBoaS9zcmMvYXBwL2xvZ2luL2xvZ2luLnBhZ2Uuc2NzcyIsInNyYy9hcHAvbG9naW4vbG9naW4ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBQTtFQUNBLGtCQUFBO0FDQ0o7O0FERUE7RUFDSSxlQUFBO0VBQ0Esa0JBQUE7QUNDSjs7QURFQTtFQUNJLGVBQUE7RUFDQSxrQkFBQTtBQ0NKOztBREVBO0VBQ0ksYUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9sb2dpbi9sb2dpbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2lnbi11cHtcbiAgICBtYXJnaW4tdG9wOiAzMCU7XG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xufVxuXG4ub2Rlci1sb2dpbntcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xufVxuXG4uZm9yZ290dGVue1xuICAgIGZvbnQtc2l6ZTogMTRweDsgXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xufVxuXG4uaW1hZ2V7XG4gICAgaGVpZ2h0OiAyMDBweDtcbiAgICB3aWR0aDogMjAwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IC0yNnB4O1xuICAgIG1hcmdpbi1ib3R0b206IC00NnB4O1xufSIsIi5zaWduLXVwIHtcbiAgbWFyZ2luLXRvcDogMzAlO1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG59XG5cbi5vZGVyLWxvZ2luIHtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG59XG5cbi5mb3Jnb3R0ZW4ge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbn1cblxuLmltYWdlIHtcbiAgaGVpZ2h0OiAyMDBweDtcbiAgd2lkdGg6IDIwMHB4O1xuICBtYXJnaW4tbGVmdDogLTI2cHg7XG4gIG1hcmdpbi1ib3R0b206IC00NnB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/login/login.page.ts":
/*!*************************************!*\
  !*** ./src/app/login/login.page.ts ***!
  \*************************************/
/*! exports provided: LoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return LoginPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let LoginPage = class LoginPage {
    constructor(router) {
        this.router = router;
    }
    naviguateToRegister() {
        this.router.navigateByUrl('register');
    }
    onClick() {
        this.router.navigateByUrl('home');
    }
    ngOnInit() {
    }
};
LoginPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
LoginPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: __webpack_require__(/*! raw-loader!./login.page.html */ "./node_modules/raw-loader/index.js!./src/app/login/login.page.html"),
        styles: [__webpack_require__(/*! ./login.page.scss */ "./src/app/login/login.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], LoginPage);



/***/ })

}]);
//# sourceMappingURL=login-login-module-es2015.js.map