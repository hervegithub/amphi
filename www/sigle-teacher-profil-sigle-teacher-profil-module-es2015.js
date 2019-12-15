(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["sigle-teacher-profil-sigle-teacher-profil-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/home/sigle-teacher-profil/sigle-teacher-profil.page.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/sigle-teacher-profil/sigle-teacher-profil.page.html ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar style=\"background-color: green;\">\n    <img src=\"../../../assets/108-80.png\"\n    style=\"height: 100px; width: 100px; border-radius: 45%; margin-left: 35%;margin-top: 10px;\">\n    <ion-badge color=\"primary\" class=\"badge\"><ion-icon name=\"medal\" class=\"medal\"></ion-icon></ion-badge>\n    \n    <div text-center style=\"width: 70%; margin-left: 10%;\">\n      <ion-badge color=\"primary\" class=\"competences\">Maths</ion-badge>\n      <ion-badge color=\"primary\" class=\"competences\">physique</ion-badge>\n      <ion-badge color=\"primary\" class=\"competences\">SVT</ion-badge>\n      <ion-badge color=\"primary\" class=\"competences\">Technologie</ion-badge>\n    </div>\n    \n    <ion-row>\n      <ion-col>\n        <ion-button expand=\"block\" shape=\"round\" fill=\"outline\">Recruter</ion-button>\n      </ion-col>\n      <ion-col>\n        <ion-button expand=\"block\" shape=\"round\" fill=\"outline\" \n        (click)=\"goToMessage()\">Message</ion-button>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-segment [(ngModel)]=\"segment\">\n        <ion-segment-button value=\"apropos\">\n          <ion-label>A propos</ion-label>\n        </ion-segment-button>\n        <ion-segment-button value=\"notes\">\n          <ion-label>Notes (4.5)</ion-label>\n        </ion-segment-button>\n      </ion-segment>\n    </ion-row>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content style=\"--background: #efefef;\">\n  <div [ngSwitch]=\"segment\">\n    <ion-card *ngSwitchCase=\"'apropos'\">\n      <ion-item>\n        <p><b>Description</b><br><br>\n          Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum vero dicta voluptatum excepturi fugit quam tempora consectetur dolores, cumque aliquam accusamus iure eaque iusto, harum quisquam similique ex impedit mollitia!\n        </p>\n      </ion-item>\n    </ion-card>\n  \n    <ion-card *ngSwitchCase=\"'notes'\">\n      <ion-item *ngFor=\"let note of notes\">\n        <p><b>Naruto Uzumaki (4,5) </b> <br><br>{{note.message}} <br>\n        <b text-right>17 mai 2019</b></p><br>\n      </ion-item>\n    </ion-card>\n  </div>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/home/sigle-teacher-profil/sigle-teacher-profil-routing.module.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/home/sigle-teacher-profil/sigle-teacher-profil-routing.module.ts ***!
  \**********************************************************************************/
/*! exports provided: SigleTeacherProfilPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SigleTeacherProfilPageRoutingModule", function() { return SigleTeacherProfilPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _sigle_teacher_profil_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sigle-teacher-profil.page */ "./src/app/home/sigle-teacher-profil/sigle-teacher-profil.page.ts");




const routes = [
    {
        path: '',
        component: _sigle_teacher_profil_page__WEBPACK_IMPORTED_MODULE_3__["SigleTeacherProfilPage"]
    }
];
let SigleTeacherProfilPageRoutingModule = class SigleTeacherProfilPageRoutingModule {
};
SigleTeacherProfilPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SigleTeacherProfilPageRoutingModule);



/***/ }),

/***/ "./src/app/home/sigle-teacher-profil/sigle-teacher-profil.module.ts":
/*!**************************************************************************!*\
  !*** ./src/app/home/sigle-teacher-profil/sigle-teacher-profil.module.ts ***!
  \**************************************************************************/
/*! exports provided: SigleTeacherProfilPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SigleTeacherProfilPageModule", function() { return SigleTeacherProfilPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _sigle_teacher_profil_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sigle-teacher-profil-routing.module */ "./src/app/home/sigle-teacher-profil/sigle-teacher-profil-routing.module.ts");
/* harmony import */ var _sigle_teacher_profil_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sigle-teacher-profil.page */ "./src/app/home/sigle-teacher-profil/sigle-teacher-profil.page.ts");







let SigleTeacherProfilPageModule = class SigleTeacherProfilPageModule {
};
SigleTeacherProfilPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _sigle_teacher_profil_routing_module__WEBPACK_IMPORTED_MODULE_5__["SigleTeacherProfilPageRoutingModule"]
        ],
        declarations: [_sigle_teacher_profil_page__WEBPACK_IMPORTED_MODULE_6__["SigleTeacherProfilPage"]]
    })
], SigleTeacherProfilPageModule);



/***/ }),

/***/ "./src/app/home/sigle-teacher-profil/sigle-teacher-profil.page.scss":
/*!**************************************************************************!*\
  !*** ./src/app/home/sigle-teacher-profil/sigle-teacher-profil.page.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".name {\n  font-weight: bold;\n  font-style: italic;\n  color: #29aba5;\n}\n\n.competences {\n  margin-bottom: -3px;\n  margin-left: 6px;\n  color: #f39d34;\n  font-style: italic;\n  font-weight: bold;\n}\n\n.cards {\n  margin-left: 0;\n  padding-left: 0;\n  width: 200px;\n  height: 110px;\n  border-radius: 10px;\n}\n\n.badge {\n  margin-top: -19px;\n  border-radius: 50%;\n  height: 30px;\n  width: 30px;\n}\n\n.photo-profil {\n  height: 100px;\n  width: 100px;\n  border-radius: 50%;\n  margin-left: 36%;\n  margin-top: 19px;\n}\n\nion-icon {\n  font-size: 40px;\n  color: white;\n  text-align: center;\n  margin-left: 5px;\n}\n\n.nombre {\n  margin-left: 11px;\n  font-size: 21px;\n  color: white;\n}\n\n.competences {\n  margin-left: 5px;\n  color: white;\n  font-size: 17px;\n  margin-top: 10px;\n}\n\n.badge {\n  height: 30px;\n  width: 30px;\n  margin-left: -26px;\n  border-radius: 50px;\n}\n\n.medal {\n  font-size: 20px;\n  margin-left: 1px;\n  margin-top: 3px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9uaHkvRG9jdW1lbnRzL0dpdEh1Yi9hbXBoaS9zcmMvYXBwL2hvbWUvc2lnbGUtdGVhY2hlci1wcm9maWwvc2lnbGUtdGVhY2hlci1wcm9maWwucGFnZS5zY3NzIiwic3JjL2FwcC9ob21lL3NpZ2xlLXRlYWNoZXItcHJvZmlsL3NpZ2xlLXRlYWNoZXItcHJvZmlsLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FDQ0o7O0FERUE7RUFDSSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUNDSjs7QURFQTtFQUNJLGNBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQ0NKOztBREVBO0VBQ0ksaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FDQ0o7O0FERUE7RUFDSSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQ0NKOztBREVBO0VBQ0ksZUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FDQ0o7O0FERUE7RUFDSSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0FDQ0o7O0FERUE7RUFDSSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUNDSjs7QURFQTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQ0NKOztBREVBO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9zaWdsZS10ZWFjaGVyLXByb2ZpbC9zaWdsZS10ZWFjaGVyLXByb2ZpbC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubmFtZXtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XG4gICAgY29sb3I6IzI5YWJhNTtcbn1cblxuLmNvbXBldGVuY2Vze1xuICAgIG1hcmdpbi1ib3R0b206IC0zcHg7XG4gICAgbWFyZ2luLWxlZnQ6IDZweDtcbiAgICBjb2xvcjogI2YzOWQzNDtcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5jYXJkc3tcbiAgICBtYXJnaW4tbGVmdDogMDtcbiAgICBwYWRkaW5nLWxlZnQ6IDA7XG4gICAgd2lkdGg6IDIwMHB4O1xuICAgIGhlaWdodDogMTEwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cblxuLmJhZGdle1xuICAgIG1hcmdpbi10b3A6IC0xOXB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBoZWlnaHQ6IDMwcHg7XG4gICAgd2lkdGg6IDMwcHg7XG59XG5cbi5waG90by1wcm9maWx7XG4gICAgaGVpZ2h0OiAxMDBweDtcbiAgICB3aWR0aDogMTAwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIG1hcmdpbi1sZWZ0OiAzNiU7XG4gICAgbWFyZ2luLXRvcDogMTlweDtcbn1cblxuaW9uLWljb257XG4gICAgZm9udC1zaXplOiA0MHB4O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcbn1cblxuLm5vbWJyZXtcbiAgICBtYXJnaW4tbGVmdDogMTFweDtcbiAgICBmb250LXNpemU6IDIxcHg7XG4gICAgY29sb3I6IHdoaXRlO1xufVxuXG4uY29tcGV0ZW5jZXN7XG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC1zaXplOiAxN3B4O1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG59XG5cbi5iYWRnZXtcbiAgICBoZWlnaHQ6IDMwcHg7XG4gICAgd2lkdGg6IDMwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IC0yNnB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XG59XG5cbi5tZWRhbHtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IDFweDtcbiAgICBtYXJnaW4tdG9wOiAzcHg7XG59XG4iLCIubmFtZSB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG4gIGNvbG9yOiAjMjlhYmE1O1xufVxuXG4uY29tcGV0ZW5jZXMge1xuICBtYXJnaW4tYm90dG9tOiAtM3B4O1xuICBtYXJnaW4tbGVmdDogNnB4O1xuICBjb2xvcjogI2YzOWQzNDtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmNhcmRzIHtcbiAgbWFyZ2luLWxlZnQ6IDA7XG4gIHBhZGRpbmctbGVmdDogMDtcbiAgd2lkdGg6IDIwMHB4O1xuICBoZWlnaHQ6IDExMHB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuXG4uYmFkZ2Uge1xuICBtYXJnaW4tdG9wOiAtMTlweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBoZWlnaHQ6IDMwcHg7XG4gIHdpZHRoOiAzMHB4O1xufVxuXG4ucGhvdG8tcHJvZmlsIHtcbiAgaGVpZ2h0OiAxMDBweDtcbiAgd2lkdGg6IDEwMHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIG1hcmdpbi1sZWZ0OiAzNiU7XG4gIG1hcmdpbi10b3A6IDE5cHg7XG59XG5cbmlvbi1pY29uIHtcbiAgZm9udC1zaXplOiA0MHB4O1xuICBjb2xvcjogd2hpdGU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLWxlZnQ6IDVweDtcbn1cblxuLm5vbWJyZSB7XG4gIG1hcmdpbi1sZWZ0OiAxMXB4O1xuICBmb250LXNpemU6IDIxcHg7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmNvbXBldGVuY2VzIHtcbiAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDE3cHg7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG5cbi5iYWRnZSB7XG4gIGhlaWdodDogMzBweDtcbiAgd2lkdGg6IDMwcHg7XG4gIG1hcmdpbi1sZWZ0OiAtMjZweDtcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcbn1cblxuLm1lZGFsIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBtYXJnaW4tbGVmdDogMXB4O1xuICBtYXJnaW4tdG9wOiAzcHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/home/sigle-teacher-profil/sigle-teacher-profil.page.ts":
/*!************************************************************************!*\
  !*** ./src/app/home/sigle-teacher-profil/sigle-teacher-profil.page.ts ***!
  \************************************************************************/
/*! exports provided: SigleTeacherProfilPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SigleTeacherProfilPage", function() { return SigleTeacherProfilPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let SigleTeacherProfilPage = class SigleTeacherProfilPage {
    constructor(route) {
        this.route = route;
        this.slideOpts = {};
        this.segment = "apropos";
        this.notes = [
            {
                userId: 1,
                message: " j'ai vraiment aimer ce qu'il à abattu comme travail avec mon fils"
            },
            {
                userId: 2,
                message: " j'ai vraiment aimer ce qu'il à abattu comme travail avec mon fils"
            },
            {
                userId: 3,
                message: " j'ai vraiment aimer ce qu'il à abattu comme travail avec mon fils"
            },
        ];
        this.slideOpts = {
            slidesPerView: 2.2,
            coverflowEffect: {
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
            },
        };
    }
    ngOnInit() {
    }
    goToMessage() {
        this.route.navigateByUrl('home/messagerie');
    }
};
SigleTeacherProfilPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
SigleTeacherProfilPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-sigle-teacher-profil',
        template: __webpack_require__(/*! raw-loader!./sigle-teacher-profil.page.html */ "./node_modules/raw-loader/index.js!./src/app/home/sigle-teacher-profil/sigle-teacher-profil.page.html"),
        styles: [__webpack_require__(/*! ./sigle-teacher-profil.page.scss */ "./src/app/home/sigle-teacher-profil/sigle-teacher-profil.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], SigleTeacherProfilPage);



/***/ })

}]);
//# sourceMappingURL=sigle-teacher-profil-sigle-teacher-profil-module-es2015.js.map