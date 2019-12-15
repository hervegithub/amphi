(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["messanger-messanger-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/home/messanger/messanger.page.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/messanger/messanger.page.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header style=\"background-color: #32a060;height: 18%;\">\n    <ion-toolbar style=\"--background:#32a060;\">\n        <ion-title color=\"light\" style=\"margin-left: 40px;\">Mes messages</ion-title>\n        <ion-buttons slot=\"start\">\n            <ion-menu-button autoHide=\"false\" color=\"light\"></ion-menu-button>\n        </ion-buttons>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content style=\"--background:rgb(245, 245, 245);\">\n    <ion-list lines=\"none\">\n        <ion-item (click)=\"goTomessagerie()\" *ngFor=\"let message of messages\" class=\"lignes\">\n            <img slot=\"start\" src=\"../../../assets/108-80.png\" class=\"image\">\n            <p class=\"messages\"><b>{{message.name}}</b><br>\n                {{message.message}}\n            </p>\n            <span slot=\"end\" class=\"hours\">{{message.date}}</span>\n        </ion-item>\n    </ion-list>\n</ion-content>"

/***/ }),

/***/ "./src/app/home/messanger/messanger-routing.module.ts":
/*!************************************************************!*\
  !*** ./src/app/home/messanger/messanger-routing.module.ts ***!
  \************************************************************/
/*! exports provided: MessangerPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessangerPageRoutingModule", function() { return MessangerPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _messanger_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./messanger.page */ "./src/app/home/messanger/messanger.page.ts");




const routes = [
    {
        path: '',
        component: _messanger_page__WEBPACK_IMPORTED_MODULE_3__["MessangerPage"]
    }
];
let MessangerPageRoutingModule = class MessangerPageRoutingModule {
};
MessangerPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], MessangerPageRoutingModule);



/***/ }),

/***/ "./src/app/home/messanger/messanger.module.ts":
/*!****************************************************!*\
  !*** ./src/app/home/messanger/messanger.module.ts ***!
  \****************************************************/
/*! exports provided: MessangerPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessangerPageModule", function() { return MessangerPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _messanger_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./messanger-routing.module */ "./src/app/home/messanger/messanger-routing.module.ts");
/* harmony import */ var _messanger_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./messanger.page */ "./src/app/home/messanger/messanger.page.ts");







let MessangerPageModule = class MessangerPageModule {
};
MessangerPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _messanger_routing_module__WEBPACK_IMPORTED_MODULE_5__["MessangerPageRoutingModule"]
        ],
        declarations: [_messanger_page__WEBPACK_IMPORTED_MODULE_6__["MessangerPage"]]
    })
], MessangerPageModule);



/***/ }),

/***/ "./src/app/home/messanger/messanger.page.scss":
/*!****************************************************!*\
  !*** ./src/app/home/messanger/messanger.page.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".image {\n  height: 50px;\n  width: 50px;\n  border-radius: 50%;\n}\n\n.messages {\n  font-size: 14px;\n}\n\n.hours {\n  font-size: 10px;\n  margin-top: -26px;\n}\n\n.lignes {\n  margin-top: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9uaHkvRG9jdW1lbnRzL0dpdEh1Yi9hbXBoaS9zcmMvYXBwL2hvbWUvbWVzc2FuZ2VyL21lc3Nhbmdlci5wYWdlLnNjc3MiLCJzcmMvYXBwL2hvbWUvbWVzc2FuZ2VyL21lc3Nhbmdlci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FDQ0o7O0FERUE7RUFDSSxlQUFBO0FDQ0o7O0FERUE7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7QUNDSjs7QURFQTtFQUNJLGdCQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9ob21lL21lc3Nhbmdlci9tZXNzYW5nZXIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmltYWdle1xuICAgIGhlaWdodDogNTBweDtcbiAgICB3aWR0aDogNTBweDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG5cbi5tZXNzYWdlc3tcbiAgICBmb250LXNpemU6IDE0cHg7XG59XG5cbi5ob3Vyc3tcbiAgICBmb250LXNpemU6IDEwcHg7XG4gICAgbWFyZ2luLXRvcDogLTI2cHg7XG59XG5cbi5saWduZXN7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbn0iLCIuaW1hZ2Uge1xuICBoZWlnaHQ6IDUwcHg7XG4gIHdpZHRoOiA1MHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG5cbi5tZXNzYWdlcyB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLmhvdXJzIHtcbiAgZm9udC1zaXplOiAxMHB4O1xuICBtYXJnaW4tdG9wOiAtMjZweDtcbn1cblxuLmxpZ25lcyB7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/home/messanger/messanger.page.ts":
/*!**************************************************!*\
  !*** ./src/app/home/messanger/messanger.page.ts ***!
  \**************************************************/
/*! exports provided: MessangerPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessangerPage", function() { return MessangerPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let MessangerPage = class MessangerPage {
    constructor(router) {
        this.router = router;
        this.messages = [
            {
                uid: 1,
                name: "Naruto Uzumaki",
                message: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
                date: "11h14"
            },
            {
                uid: 2,
                name: "Naruto Uzumaki",
                message: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. consectetur adipisicing elit.",
                date: "11h14"
            },
            {
                uid: 1,
                name: "Naruto Uzumaki",
                message: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
                date: "11h14"
            },
        ];
    }
    goTomessagerie() {
        this.router.navigateByUrl('home/messagerie');
    }
    ngOnInit() {
    }
};
MessangerPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
MessangerPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-messanger',
        template: __webpack_require__(/*! raw-loader!./messanger.page.html */ "./node_modules/raw-loader/index.js!./src/app/home/messanger/messanger.page.html"),
        styles: [__webpack_require__(/*! ./messanger.page.scss */ "./src/app/home/messanger/messanger.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], MessangerPage);



/***/ })

}]);
//# sourceMappingURL=messanger-messanger-module-es2015.js.map