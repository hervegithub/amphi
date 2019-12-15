(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["messagerie-messagerie-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/home/messagerie/messagerie.page.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/messagerie/messagerie.page.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title class=\"ion-text-center\">Naruto Uzumaki</ion-title>\n    <img slot=\"end\" src=\"../../../assets/108-80.png\" class=\"image\">\n  </ion-toolbar>\n</ion-header>\n\n<ion-content  style=\"--background:rgb(245, 245, 245);\">\n  <ion-item lines=\"none\" *ngFor=\"let message of messages\">\n\n    <div style=\"margin-top: 20px; width: 90%; margin-left: 33px;\" *ngIf=\"message.userId===1\" class=\"ion-padding\" text-right class=\"sender-message\">\n      <p>\n        {{message.message}}<br>\n        <span>{{message.time}}</span>\n      </p>\n    </div>\n\n    <div style=\"margin-top: 20px; width: 90%; margin-right: 33px;\" *ngIf=\"message.userId===2\" class=\"ion-padding\" text-left class=\"receiver-message\">\n        <p>\n            {{message.message}}<br>\n            <span>{{message.time}}</span>\n          </p>\n    </div>\n\n  </ion-item>\n\n</ion-content>\n\n<ion-footer>\n  <ion-toolbar>\n    <ion-input type=\"text\" placeholder=\"Awesome Input\" class=\"message-edit\"\n    [(ngModel)]=\"message\"></ion-input>\n    <ion-icon slot=\"end\" name=\"send\" color=\"primary\" class=\"icons\"\n    (click)=\"sendMessage()\"></ion-icon>\n  </ion-toolbar>\n</ion-footer>"

/***/ }),

/***/ "./src/app/home/messagerie/messagerie-routing.module.ts":
/*!**************************************************************!*\
  !*** ./src/app/home/messagerie/messagerie-routing.module.ts ***!
  \**************************************************************/
/*! exports provided: MessageriePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageriePageRoutingModule", function() { return MessageriePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _messagerie_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./messagerie.page */ "./src/app/home/messagerie/messagerie.page.ts");




const routes = [
    {
        path: '',
        component: _messagerie_page__WEBPACK_IMPORTED_MODULE_3__["MessageriePage"]
    }
];
let MessageriePageRoutingModule = class MessageriePageRoutingModule {
};
MessageriePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], MessageriePageRoutingModule);



/***/ }),

/***/ "./src/app/home/messagerie/messagerie.module.ts":
/*!******************************************************!*\
  !*** ./src/app/home/messagerie/messagerie.module.ts ***!
  \******************************************************/
/*! exports provided: MessageriePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageriePageModule", function() { return MessageriePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _messagerie_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./messagerie-routing.module */ "./src/app/home/messagerie/messagerie-routing.module.ts");
/* harmony import */ var _messagerie_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./messagerie.page */ "./src/app/home/messagerie/messagerie.page.ts");







let MessageriePageModule = class MessageriePageModule {
};
MessageriePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _messagerie_routing_module__WEBPACK_IMPORTED_MODULE_5__["MessageriePageRoutingModule"]
        ],
        declarations: [_messagerie_page__WEBPACK_IMPORTED_MODULE_6__["MessageriePage"]]
    })
], MessageriePageModule);



/***/ }),

/***/ "./src/app/home/messagerie/messagerie.page.scss":
/*!******************************************************!*\
  !*** ./src/app/home/messagerie/messagerie.page.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".image {\n  height: 40px;\n  width: 40px;\n  border-radius: 50%;\n  margin-right: 10px;\n}\n\n.icons {\n  font-size: 50px;\n  margin-left: 15px;\n}\n\n.message-edit {\n  background-color: #cddbe6;\n  height: 50px;\n  margin-left: 10px;\n  border-radius: 20px;\n}\n\n.sender-message {\n  background-color: #32a060;\n  color: white;\n  border-top-left-radius: 20px;\n  border-bottom-right-radius: 20px;\n  border-bottom-left-radius: 20px;\n  padding: 10px;\n}\n\n.receiver-message {\n  background-color: #cddbe6;\n  color: #32a060;\n  border-top-right-radius: 20px;\n  border-bottom-left-radius: 20px;\n  border-bottom-right-radius: 20px;\n  margin-top: 20px;\n  padding: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9uaHkvRG9jdW1lbnRzL0dpdEh1Yi9hbXBoaS9zcmMvYXBwL2hvbWUvbWVzc2FnZXJpZS9tZXNzYWdlcmllLnBhZ2Uuc2NzcyIsInNyYy9hcHAvaG9tZS9tZXNzYWdlcmllL21lc3NhZ2VyaWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FDQ0o7O0FERUE7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7QUNDSjs7QURFQTtFQUNJLHlCQUFBO0VBQTJCLFlBQUE7RUFBYyxpQkFBQTtFQUN6QyxtQkFBQTtBQ0dKOztBREFBO0VBQ0kseUJBQUE7RUFBMkIsWUFBQTtFQUFhLDRCQUFBO0VBQ3hDLGdDQUFBO0VBQWtDLCtCQUFBO0VBQ2xDLGFBQUE7QUNNSjs7QURIQTtFQUNJLHlCQUFBO0VBQTJCLGNBQUE7RUFDM0IsNkJBQUE7RUFBK0IsK0JBQUE7RUFBaUMsZ0NBQUE7RUFBa0MsZ0JBQUE7RUFDbEcsYUFBQTtBQ1VKIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9tZXNzYWdlcmllL21lc3NhZ2VyaWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmltYWdle1xuICAgIGhlaWdodDogNDBweDtcbiAgICB3aWR0aDogNDBweDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuXG4uaWNvbnN7XG4gICAgZm9udC1zaXplOiA1MHB4O1xuICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xufVxuXG4ubWVzc2FnZS1lZGl0e1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNjZGRiZTY7IGhlaWdodDogNTBweDsgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcbn1cblxuLnNlbmRlci1tZXNzYWdle1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMzMmEwNjA7IGNvbG9yOndoaXRlOyBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAyMHB4O1xuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAyMHB4OyBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAyMHB4O1xuICAgIHBhZGRpbmc6IDEwcHg7XG59XG5cbi5yZWNlaXZlci1tZXNzYWdle1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNjZGRiZTY7IGNvbG9yOiMzMmEwNjA7XG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDIwcHg7IGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDIwcHg7IGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAyMHB4OyBtYXJnaW4tdG9wOiAyMHB4O1xuICAgIHBhZGRpbmc6IDEwcHg7XG59IiwiLmltYWdlIHtcbiAgaGVpZ2h0OiA0MHB4O1xuICB3aWR0aDogNDBweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG5cbi5pY29ucyB7XG4gIGZvbnQtc2l6ZTogNTBweDtcbiAgbWFyZ2luLWxlZnQ6IDE1cHg7XG59XG5cbi5tZXNzYWdlLWVkaXQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2RkYmU2O1xuICBoZWlnaHQ6IDUwcHg7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xufVxuXG4uc2VuZGVyLW1lc3NhZ2Uge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzJhMDYwO1xuICBjb2xvcjogd2hpdGU7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDIwcHg7XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAyMHB4O1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAyMHB4O1xuICBwYWRkaW5nOiAxMHB4O1xufVxuXG4ucmVjZWl2ZXItbWVzc2FnZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNjZGRiZTY7XG4gIGNvbG9yOiAjMzJhMDYwO1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMjBweDtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMjBweDtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDIwcHg7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIHBhZGRpbmc6IDEwcHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/home/messagerie/messagerie.page.ts":
/*!****************************************************!*\
  !*** ./src/app/home/messagerie/messagerie.page.ts ***!
  \****************************************************/
/*! exports provided: MessageriePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageriePage", function() { return MessageriePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let MessageriePage = class MessageriePage {
    constructor() {
        this.messages = [
            {
                userId: 1,
                message: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
                time: "11h15"
            },
            {
                userId: 2,
                message: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
                time: "11h15"
            },
            {
                userId: 1,
                message: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
                time: "11h15"
            },
        ];
    }
    sendMessage() {
        this.messages.push({
            userId: 1,
            message: this.message,
            time: "12h20"
        });
        this.message = "";
    }
    ngOnInit() {
    }
};
MessageriePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-messagerie',
        template: __webpack_require__(/*! raw-loader!./messagerie.page.html */ "./node_modules/raw-loader/index.js!./src/app/home/messagerie/messagerie.page.html"),
        styles: [__webpack_require__(/*! ./messagerie.page.scss */ "./src/app/home/messagerie/messagerie.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], MessageriePage);



/***/ })

}]);
//# sourceMappingURL=messagerie-messagerie-module-es2015.js.map