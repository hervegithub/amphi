(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["parametres-parametres-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/home/parametres/parametres.page.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/parametres/parametres.page.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header style=\"background-color: #32a060;height: 18%;\">\n</ion-header>\n<ion-content style=\"--background:rgb(245, 245, 245);\">\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/home/parametres/parametres-routing.module.ts":
/*!**************************************************************!*\
  !*** ./src/app/home/parametres/parametres-routing.module.ts ***!
  \**************************************************************/
/*! exports provided: ParametresPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParametresPageRoutingModule", function() { return ParametresPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _parametres_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./parametres.page */ "./src/app/home/parametres/parametres.page.ts");




var routes = [
    {
        path: '',
        component: _parametres_page__WEBPACK_IMPORTED_MODULE_3__["ParametresPage"]
    }
];
var ParametresPageRoutingModule = /** @class */ (function () {
    function ParametresPageRoutingModule() {
    }
    ParametresPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], ParametresPageRoutingModule);
    return ParametresPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/home/parametres/parametres.module.ts":
/*!******************************************************!*\
  !*** ./src/app/home/parametres/parametres.module.ts ***!
  \******************************************************/
/*! exports provided: ParametresPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParametresPageModule", function() { return ParametresPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _parametres_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./parametres-routing.module */ "./src/app/home/parametres/parametres-routing.module.ts");
/* harmony import */ var _parametres_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./parametres.page */ "./src/app/home/parametres/parametres.page.ts");







var ParametresPageModule = /** @class */ (function () {
    function ParametresPageModule() {
    }
    ParametresPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _parametres_routing_module__WEBPACK_IMPORTED_MODULE_5__["ParametresPageRoutingModule"]
            ],
            declarations: [_parametres_page__WEBPACK_IMPORTED_MODULE_6__["ParametresPage"]]
        })
    ], ParametresPageModule);
    return ParametresPageModule;
}());



/***/ }),

/***/ "./src/app/home/parametres/parametres.page.scss":
/*!******************************************************!*\
  !*** ./src/app/home/parametres/parametres.page.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvcGFyYW1ldHJlcy9wYXJhbWV0cmVzLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/home/parametres/parametres.page.ts":
/*!****************************************************!*\
  !*** ./src/app/home/parametres/parametres.page.ts ***!
  \****************************************************/
/*! exports provided: ParametresPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParametresPage", function() { return ParametresPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ParametresPage = /** @class */ (function () {
    function ParametresPage() {
    }
    ParametresPage.prototype.ngOnInit = function () {
    };
    ParametresPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-parametres',
            template: __webpack_require__(/*! raw-loader!./parametres.page.html */ "./node_modules/raw-loader/index.js!./src/app/home/parametres/parametres.page.html"),
            styles: [__webpack_require__(/*! ./parametres.page.scss */ "./src/app/home/parametres/parametres.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ParametresPage);
    return ParametresPage;
}());



/***/ })

}]);
//# sourceMappingURL=parametres-parametres-module-es5.js.map