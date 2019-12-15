(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["profil-profil-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/home/profil/profil.page.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/profil/profil.page.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header style=\"background-color: #32a060;height: 18%;\">\n</ion-header>\n\n<ion-content style=\"--background:rgb(245, 245, 245);\">\n    \n</ion-content>\n"

/***/ }),

/***/ "./src/app/home/profil/profil-routing.module.ts":
/*!******************************************************!*\
  !*** ./src/app/home/profil/profil-routing.module.ts ***!
  \******************************************************/
/*! exports provided: ProfilPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilPageRoutingModule", function() { return ProfilPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _profil_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./profil.page */ "./src/app/home/profil/profil.page.ts");




var routes = [
    {
        path: '',
        component: _profil_page__WEBPACK_IMPORTED_MODULE_3__["ProfilPage"]
    }
];
var ProfilPageRoutingModule = /** @class */ (function () {
    function ProfilPageRoutingModule() {
    }
    ProfilPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], ProfilPageRoutingModule);
    return ProfilPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/home/profil/profil.module.ts":
/*!**********************************************!*\
  !*** ./src/app/home/profil/profil.module.ts ***!
  \**********************************************/
/*! exports provided: ProfilPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilPageModule", function() { return ProfilPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _profil_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./profil-routing.module */ "./src/app/home/profil/profil-routing.module.ts");
/* harmony import */ var _profil_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./profil.page */ "./src/app/home/profil/profil.page.ts");







var ProfilPageModule = /** @class */ (function () {
    function ProfilPageModule() {
    }
    ProfilPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _profil_routing_module__WEBPACK_IMPORTED_MODULE_5__["ProfilPageRoutingModule"]
            ],
            declarations: [_profil_page__WEBPACK_IMPORTED_MODULE_6__["ProfilPage"]]
        })
    ], ProfilPageModule);
    return ProfilPageModule;
}());



/***/ }),

/***/ "./src/app/home/profil/profil.page.scss":
/*!**********************************************!*\
  !*** ./src/app/home/profil/profil.page.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvcHJvZmlsL3Byb2ZpbC5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/home/profil/profil.page.ts":
/*!********************************************!*\
  !*** ./src/app/home/profil/profil.page.ts ***!
  \********************************************/
/*! exports provided: ProfilPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilPage", function() { return ProfilPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ProfilPage = /** @class */ (function () {
    function ProfilPage() {
    }
    ProfilPage.prototype.ngOnInit = function () {
    };
    ProfilPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-profil',
            template: __webpack_require__(/*! raw-loader!./profil.page.html */ "./node_modules/raw-loader/index.js!./src/app/home/profil/profil.page.html"),
            styles: [__webpack_require__(/*! ./profil.page.scss */ "./src/app/home/profil/profil.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ProfilPage);
    return ProfilPage;
}());



/***/ })

}]);
//# sourceMappingURL=profil-profil-module-es5.js.map