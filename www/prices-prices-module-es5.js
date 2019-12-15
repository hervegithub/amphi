(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["prices-prices-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/home/prices/prices.page.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/prices/prices.page.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header style=\"background-color: #32a060;height: 18%;\">\n</ion-header>\n<ion-content>\n  <div class=\"ion-padding\">\n    <div class=\"ion-padding\">\n      <h3>Choisir la formule</h3>\n      <p class=\"intro-price\">Lorem ipsum dolor, sit amet consectetur adipisicing elit</p>\n    </div>\n    <ion-slides [options]=\"slideOpts\" style=\"width: 100%;\">\n\n      <ion-slide>\n        <ion-card class=\"cards\">\n          <div text-right>\n            <p  class=\"price-title\">Prix</p>\n            <h3 class=\"price-mountant\">20.000 <br>FCFA</h3>\n          </div>\n          <div class=\"ion-padding\">\n            <img style=\" height: 90px; \" src=\"../../../assets/student.svg\">\n          </div>\n          <div text-left class=\"ion-padding\">\n            <p class=\"type-pack\">Standard</p>\n            <h3 class=\"name-pack\">Pack FAKO</h3>\n            <p class=\"description-pack\">1 pers - 3 fois/semaine</p>\n          </div>\n          <ion-badge color=\"light\" class=\"badge-css\">\n            <ion-icon name=\"cart\" class=\"icons\"></ion-icon>\n          </ion-badge>\n        </ion-card>\n     </ion-slide>\n\n    <ion-slide>\n      <ion-card class=\"cards\">\n        <div text-right>\n          <p class=\"price-title\">Prix</p>\n          <h3 class=\"price-mountant\">20.000 <br>FCFA</h3>\n        </div>\n        <div class=\"ion-padding\">\n          <img style=\" height: 90px; \" src=\"../../../assets/student.svg\">\n        </div>\n        <div text-left class=\"ion-padding\">\n          <p class=\"type-pack\">Standard</p>\n          <h3 class=\"name-pack\">Pack FAKO</h3>\n          <p class=\"description-pack\">1 pers - 3 fois/semaine</p>\n        </div>\n        <ion-badge color=\"light\" class=\"badge-css\">\n          <ion-icon name=\"cart\" class=\"icons\"></ion-icon>\n        </ion-badge>\n      </ion-card>\n    </ion-slide>\n\n    <ion-slide>\n      <ion-card class=\"cards\">\n        <div text-right>\n          <p class=\"price-title\">Prix</p>\n          <h3 class=\"price-mountant\">20.000 <br>FCFA</h3>\n        </div>\n        <div class=\"ion-padding\">\n          <img style=\" height: 90px; \" src=\"../../../assets/student.svg\">\n        </div>\n        <div text-left class=\"ion-padding\">\n          <p class=\"type-pack\">Standard</p>\n          <h3 class=\"name-pack\">Pack FAKO</h3>\n          <p class=\"description-pack\">1 pers - 3 fois/semaine</p>\n        </div>\n        <ion-badge color=\"light\" class=\"badge-css\">\n          <ion-icon name=\"cart\" class=\"icons\"></ion-icon>\n        </ion-badge>\n      </ion-card>\n    </ion-slide>\n\n    </ion-slides>\n  </div>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/home/prices/prices-routing.module.ts":
/*!******************************************************!*\
  !*** ./src/app/home/prices/prices-routing.module.ts ***!
  \******************************************************/
/*! exports provided: PricesPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PricesPageRoutingModule", function() { return PricesPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _prices_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./prices.page */ "./src/app/home/prices/prices.page.ts");




var routes = [
    {
        path: '',
        component: _prices_page__WEBPACK_IMPORTED_MODULE_3__["PricesPage"]
    }
];
var PricesPageRoutingModule = /** @class */ (function () {
    function PricesPageRoutingModule() {
    }
    PricesPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], PricesPageRoutingModule);
    return PricesPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/home/prices/prices.module.ts":
/*!**********************************************!*\
  !*** ./src/app/home/prices/prices.module.ts ***!
  \**********************************************/
/*! exports provided: PricesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PricesPageModule", function() { return PricesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _prices_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./prices-routing.module */ "./src/app/home/prices/prices-routing.module.ts");
/* harmony import */ var _prices_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./prices.page */ "./src/app/home/prices/prices.page.ts");







var PricesPageModule = /** @class */ (function () {
    function PricesPageModule() {
    }
    PricesPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _prices_routing_module__WEBPACK_IMPORTED_MODULE_5__["PricesPageRoutingModule"]
            ],
            declarations: [_prices_page__WEBPACK_IMPORTED_MODULE_6__["PricesPage"]]
        })
    ], PricesPageModule);
    return PricesPageModule;
}());



/***/ }),

/***/ "./src/app/home/prices/prices.page.scss":
/*!**********************************************!*\
  !*** ./src/app/home/prices/prices.page.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".badge-css {\n  font-size: 48px;\n  border-radius: 50px;\n  height: 50px;\n  width: 50px;\n  position: absolute;\n  z-index: auto;\n  margin-left: -21px;\n}\n\n.icons {\n  font-size: 34px;\n  color: green;\n}\n\nh3 {\n  font-size: 15px;\n  color: green;\n  font-weight: bold;\n}\n\n.intro-price {\n  font-size: 15px;\n  font-family: \"Haas Grot Text R Web\", \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n}\n\n.cards {\n  height: 400px;\n  width: 120px;\n  background-color: #32a060;\n  width: 100%;\n  border-radius: 20px;\n}\n\n.price-title {\n  color: #10dc60;\n  font-size: 18px;\n  font-weight: bold;\n  margin-right: 20px;\n}\n\n.price-mountant {\n  color: white;\n  font-size: 22px;\n  font-weight: bold;\n  margin-top: -20px;\n  margin-right: 20px;\n}\n\n.type-pack {\n  color: #10dc60;\n  font-size: 18px;\n  font-weight: bold;\n}\n\n.name-pack {\n  color: white;\n  font-size: 22px;\n  font-weight: bold;\n  margin-top: -18px;\n}\n\n.description-pack {\n  color: white;\n  font-size: 14px;\n  margin-top: -14px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9uaHkvRG9jdW1lbnRzL0dpdEh1Yi9hbXBoaS9zcmMvYXBwL2hvbWUvcHJpY2VzL3ByaWNlcy5wYWdlLnNjc3MiLCJzcmMvYXBwL2hvbWUvcHJpY2VzL3ByaWNlcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0FDQ0o7O0FERUE7RUFDSyxlQUFBO0VBQ0QsWUFBQTtBQ0NKOztBREVBO0VBQ0ksZUFBQTtFQUNILFlBQUE7RUFDRyxpQkFBQTtBQ0NKOztBREVBO0VBQ0ksZUFBQTtFQUNBLG1GQUFBO0FDQ0o7O0FERUE7RUFDSSxhQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsV0FBQTtFQUNDLG1CQUFBO0FDQ0w7O0FERUE7RUFDSSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUNDSjs7QURFQTtFQUNJLFlBQUE7RUFDQSxlQUFBO0VBQ0MsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FDQ0w7O0FERUE7RUFDSSxjQUFBO0VBQ0EsZUFBQTtFQUNDLGlCQUFBO0FDQ0w7O0FERUE7RUFDSSxZQUFBO0VBQ0MsZUFBQTtFQUNDLGlCQUFBO0VBQ0MsaUJBQUE7QUNDUDs7QURFQTtFQUNJLFlBQUE7RUFBYSxlQUFBO0VBQWdCLGlCQUFBO0FDR2pDIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9wcmljZXMvcHJpY2VzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iYWRnZS1jc3N7XG4gICAgZm9udC1zaXplOiA0OHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gICAgaGVpZ2h0OiA1MHB4O1xuICAgIHdpZHRoOiA1MHB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB6LWluZGV4OiBhdXRvO1xuICAgIG1hcmdpbi1sZWZ0OiAtMjFweDtcbn1cblxuLmljb25ze1xuICAgICBmb250LXNpemU6IDM0cHg7XG4gICAgY29sb3I6IGdyZWVuO1xufVxuXG5oM3tcbiAgICBmb250LXNpemU6IDE1cHg7XG4gY29sb3I6IGdyZWVuO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uaW50cm8tcHJpY2V7XG4gICAgZm9udC1zaXplOiAxNXB4OyBcbiAgICBmb250LWZhbWlseTogICdIYWFzIEdyb3QgVGV4dCBSIFdlYicsICdIZWx2ZXRpY2EgTmV1ZScsIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWY7XG59XG5cbi5jYXJkc3tcbiAgICBoZWlnaHQ6IDQwMHB4OyBcbiAgICB3aWR0aDogMTIwcHg7IFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzMmEwNjA7IFxuICAgIHdpZHRoOiAxMDAlO1xuICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xufVxuXG4ucHJpY2UtdGl0bGV7XG4gICAgY29sb3I6ICMxMGRjNjA7IFxuICAgIGZvbnQtc2l6ZTogMThweDsgXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7IFxuICAgIG1hcmdpbi1yaWdodDogMjBweDtcbn1cblxuLnByaWNlLW1vdW50YW50e1xuICAgIGNvbG9yOiB3aGl0ZTsgXG4gICAgZm9udC1zaXplOiAyMnB4O1xuICAgICBmb250LXdlaWdodDogYm9sZDsgXG4gICAgIG1hcmdpbi10b3A6IC0yMHB4OyBcbiAgICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xufVxuXG4udHlwZS1wYWNre1xuICAgIGNvbG9yOiAjMTBkYzYwOyBcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4ubmFtZS1wYWNre1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgZm9udC1zaXplOiAyMnB4O1xuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgbWFyZ2luLXRvcDogLTE4cHg7XG59XG5cbi5kZXNjcmlwdGlvbi1wYWNre1xuICAgIGNvbG9yOiB3aGl0ZTtmb250LXNpemU6IDE0cHg7bWFyZ2luLXRvcDogLTE0cHg7XG59IiwiLmJhZGdlLWNzcyB7XG4gIGZvbnQtc2l6ZTogNDhweDtcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICB3aWR0aDogNTBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiBhdXRvO1xuICBtYXJnaW4tbGVmdDogLTIxcHg7XG59XG5cbi5pY29ucyB7XG4gIGZvbnQtc2l6ZTogMzRweDtcbiAgY29sb3I6IGdyZWVuO1xufVxuXG5oMyB7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgY29sb3I6IGdyZWVuO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmludHJvLXByaWNlIHtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBmb250LWZhbWlseTogXCJIYWFzIEdyb3QgVGV4dCBSIFdlYlwiLCBcIkhlbHZldGljYSBOZXVlXCIsIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWY7XG59XG5cbi5jYXJkcyB7XG4gIGhlaWdodDogNDAwcHg7XG4gIHdpZHRoOiAxMjBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMyYTA2MDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG59XG5cbi5wcmljZS10aXRsZSB7XG4gIGNvbG9yOiAjMTBkYzYwO1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG59XG5cbi5wcmljZS1tb3VudGFudCB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAyMnB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbWFyZ2luLXRvcDogLTIwcHg7XG4gIG1hcmdpbi1yaWdodDogMjBweDtcbn1cblxuLnR5cGUtcGFjayB7XG4gIGNvbG9yOiAjMTBkYzYwO1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4ubmFtZS1wYWNrIHtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDIycHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBtYXJnaW4tdG9wOiAtMThweDtcbn1cblxuLmRlc2NyaXB0aW9uLXBhY2sge1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbWFyZ2luLXRvcDogLTE0cHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/home/prices/prices.page.ts":
/*!********************************************!*\
  !*** ./src/app/home/prices/prices.page.ts ***!
  \********************************************/
/*! exports provided: PricesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PricesPage", function() { return PricesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PricesPage = /** @class */ (function () {
    function PricesPage() {
        this.slideOpts = {
            slidesPerView: 1.2,
            speed: 400
        };
    }
    PricesPage.prototype.ngOnInit = function () {
    };
    PricesPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-prices',
            template: __webpack_require__(/*! raw-loader!./prices.page.html */ "./node_modules/raw-loader/index.js!./src/app/home/prices/prices.page.html"),
            styles: [__webpack_require__(/*! ./prices.page.scss */ "./src/app/home/prices/prices.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PricesPage);
    return PricesPage;
}());



/***/ })

}]);
//# sourceMappingURL=prices-prices-module-es5.js.map