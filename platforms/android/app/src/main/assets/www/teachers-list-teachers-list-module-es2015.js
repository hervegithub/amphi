(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["teachers-list-teachers-list-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/home/teachers-list/teachers-list.page.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/teachers-list/teachers-list.page.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header style=\"background-color: #32a060;height: 20%;\">\n  <ion-toolbar style=\"--background:#32a060;\">\n    <ion-title color=\"light\" style=\"margin-left: 40px;\">Les teachas</ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button autoHide=\"false\" color=\"light\"></ion-menu-button>\n    </ion-buttons>\n  </ion-toolbar>\n  <ion-row>\n    <ion-col>\n      <ion-searchbar showCancelButton=\"focus\" cancelButtonText=\"Custom Cancel\"\n      placeholder=\"Taper la ville\"></ion-searchbar>\n    </ion-col>\n  </ion-row>\n</ion-header>\n\n<ion-content >\n  <ion-grid >\n   <!-- <ion-row>\n      <p style=\"margin-left: 2px; font-weight: bold;\">Nos meilleurs profs</p>\n      <ion-col>\n        <ion-slides  [options]=\"slideOpts\">\n          <ion-slide  >\n            <ion-card class=\"vavorite-card\" (click)=\"navigateToSigleTeacher()\">\n              <div class=\"div-image\">\n                <img src=\"../../../assets/108-80.png\" class=\"image\">\n                <ion-badge color=\"primary\" class=\"badge\"><ion-icon  name=\"medal\" style=\"font-size: 23px;\n                  margin-top: 4px;\"></ion-icon></ion-badge>\n              </div>\n              <p text-center class=\"name\">Naruto Uzumaki</p>\n              <p text-center class=\"ion-nowrap comptences\"> Chimie, Maths, Physique, Anglais</p>\n            </ion-card>\n          </ion-slide>\n          <ion-slide>\n              <ion-card class=\"vavorite-card\">\n                <div class=\"div-image\">\n                  <img src=\"../../../assets/108-80.png\" class=\"image\">\n                  <ion-badge color=\"primary\" class=\"badge\"><ion-icon  name=\"medal\" style=\"font-size: 23px;\n                    margin-top: 4px;\"></ion-icon></ion-badge>\n                </div>\n                <p text-center class=\"name\">Naruto Uzumaki</p>\n                <p text-center class=\"ion-nowrap comptences\"> Chimie, Maths, Physique, Anglais</p>\n              </ion-card>\n          </ion-slide>\n\n          <ion-slide>\n              <ion-card class=\"vavorite-card\" (click)=\"navigateToSigleTeacher()\">\n                <div class=\"div-image\">\n                  <img src=\"../../../assets/108-80.png\" class=\"image\">\n                  <ion-badge color=\"primary\" class=\"badge\"><ion-icon  name=\"medal\" style=\"font-size: 23px;\n                    margin-top: 4px;\"></ion-icon></ion-badge>\n                </div>\n                <p text-center class=\"name\">Naruto Uzumaki</p>\n                <p text-center class=\"ion-nowrap comptences\"> Chimie, Maths, Physique, Anglais</p>\n              </ion-card>\n            </ion-slide>\n        </ion-slides>\n      </ion-col>\n    </ion-row>-->\n    <p style=\"margin-left: 5px; font-weight: bold;\">Les meilleurs</p>\n    <ion-row >\n      <ion-col>\n        <ion-slides  [options]=\"slideOpts\">\n          <ion-slide  >\n            <ion-card class=\"vavorite-card\" (click)=\"navigateToSigleTeacher()\">\n              <div class=\"div-image\">\n                <img src=\"../../../assets/108-80.png\" class=\"image\">\n                <ion-badge color=\"primary\" class=\"badge\"><ion-icon  name=\"medal\" style=\"font-size: 23px;\n                  margin-top: 4px;\"></ion-icon></ion-badge>\n              </div>\n              <p text-center class=\"name\">Naruto Uzumaki</p>\n              <p text-center class=\"ion-nowrap comptences\"> Chimie, Maths, Physique, Anglais</p>\n              <div text-center>\n               <ion-icon name=\"star\" style=\"font-size: 22px;\" color=\"primary\"></ion-icon>\n               <ion-icon name=\"star\" style=\"font-size: 22px;\" color=\"primary\"></ion-icon>\n               <ion-icon name=\"star\" style=\"font-size: 22px;\" color=\"primary\"></ion-icon>\n             </div>\n            </ion-card>\n          </ion-slide>\n          <ion-slide>\n              <ion-card class=\"vavorite-card\">\n                <div class=\"div-image\">\n                  <img src=\"../../../assets/108-80.png\" class=\"image\">\n                  <ion-badge color=\"primary\" class=\"badge\"><ion-icon  name=\"medal\" style=\"font-size: 23px;\n                    margin-top: 4px;\"></ion-icon></ion-badge>\n                </div>\n                <p text-center class=\"name\">Naruto Uzumaki</p>\n                <p text-center class=\"ion-nowrap comptences\"> Chimie, Maths, Physique, Anglais</p>\n                <div text-center>\n                 <ion-icon name=\"star\" style=\"font-size: 22px;\" color=\"primary\"></ion-icon>\n                 <ion-icon name=\"star\" style=\"font-size: 22px;\" color=\"primary\"></ion-icon>\n                 <ion-icon name=\"star\" style=\"font-size: 22px;\" color=\"primary\"></ion-icon>\n               </div>\n              </ion-card>\n          </ion-slide>\n  \n          <ion-slide>\n              <ion-card class=\"vavorite-card\" (click)=\"navigateToSigleTeacher()\">\n                <div class=\"div-image\">\n                  <img src=\"../../../assets/108-80.png\" class=\"image\">\n                  <ion-badge color=\"primary\" class=\"badge\"><ion-icon  name=\"medal\" style=\"font-size: 23px;\n                    margin-top: 4px;\"></ion-icon></ion-badge>\n                </div>\n                <p text-center class=\"name\">Naruto Uzumaki</p>\n                <p text-center class=\"ion-nowrap comptences\"> Chimie, Maths, Physique, Anglais</p>\n                <div text-center>\n                 <ion-icon name=\"star\" style=\"font-size: 22px;\" color=\"primary\"></ion-icon>\n                 <ion-icon name=\"star\" style=\"font-size: 22px;\" color=\"primary\"></ion-icon>\n                 <ion-icon name=\"star\" style=\"font-size: 22px;\" color=\"primary\"></ion-icon>\n               </div>\n              </ion-card>\n            </ion-slide>\n        </ion-slides>\n      </ion-col>\n    </ion-row>\n    <p style=\"margin-left: 5px; font-weight: bold;\">Voir plus de prof</p>\n    \n    <ion-row>\n      <ion-col size=\"6\" *ngFor=\"let item of listes\">\n        <ion-card style=\"margin: 0;\" (click)=\"navigateToSigleTeacher()\">\n          <div class=\"div-image\">\n            <img src=\"../../../assets/108-80.png\" class=\"image\">\n          </div>\n          <p text-center class=\"name\">{{item.nom}}</p>\n          <p text-center class=\"ion-nowrap comptences\"> Chimie, Maths, Physique, Anglais</p>\n          <div text-center>\n            <ion-icon name=\"star\" style=\"font-size: 22px;\" color=\"primary\"></ion-icon>\n            <ion-icon name=\"star\" style=\"font-size: 22px;\" color=\"primary\"></ion-icon>\n            <ion-icon name=\"star\" style=\"font-size: 22px;\" color=\"primary\"></ion-icon>\n          </div>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/home/teachers-list/teachers-list-routing.module.ts":
/*!********************************************************************!*\
  !*** ./src/app/home/teachers-list/teachers-list-routing.module.ts ***!
  \********************************************************************/
/*! exports provided: TeachersListPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeachersListPageRoutingModule", function() { return TeachersListPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _teachers_list_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./teachers-list.page */ "./src/app/home/teachers-list/teachers-list.page.ts");




const routes = [
    {
        path: '',
        component: _teachers_list_page__WEBPACK_IMPORTED_MODULE_3__["TeachersListPage"]
    }
];
let TeachersListPageRoutingModule = class TeachersListPageRoutingModule {
};
TeachersListPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], TeachersListPageRoutingModule);



/***/ }),

/***/ "./src/app/home/teachers-list/teachers-list.module.ts":
/*!************************************************************!*\
  !*** ./src/app/home/teachers-list/teachers-list.module.ts ***!
  \************************************************************/
/*! exports provided: TeachersListPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeachersListPageModule", function() { return TeachersListPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _teachers_list_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./teachers-list-routing.module */ "./src/app/home/teachers-list/teachers-list-routing.module.ts");
/* harmony import */ var _teachers_list_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./teachers-list.page */ "./src/app/home/teachers-list/teachers-list.page.ts");







let TeachersListPageModule = class TeachersListPageModule {
};
TeachersListPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _teachers_list_routing_module__WEBPACK_IMPORTED_MODULE_5__["TeachersListPageRoutingModule"]
        ],
        declarations: [_teachers_list_page__WEBPACK_IMPORTED_MODULE_6__["TeachersListPage"]]
    })
], TeachersListPageModule);



/***/ }),

/***/ "./src/app/home/teachers-list/teachers-list.page.scss":
/*!************************************************************!*\
  !*** ./src/app/home/teachers-list/teachers-list.page.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".teacher-presentation {\n  font-size: 12px;\n}\n\n.ion-cards {\n  margin-bottom: 10px;\n}\n\n.icon-more {\n  margin-top: -56px;\n  margin-right: -11px;\n}\n\n.stats {\n  font-size: 29px;\n}\n\n.niveau-ville {\n  font-size: 11px;\n  margin-top: -11px;\n  color: grey;\n}\n\n.stats {\n  margin-top: -10px;\n  font-size: 14px;\n}\n\n.name {\n  font-weight: bold;\n  font-style: italic;\n  color: #32a060;\n}\n\n/* div image*/\n\n.div-image {\n  margin-left: 30%;\n  margin-top: 10%;\n}\n\n.image {\n  border-radius: 50%;\n  height: 70px;\n  width: 70px;\n}\n\n.competences {\n  margin-top: -10px;\n  text-align: center !important;\n  font-size: 10px;\n  margin-left: -7px;\n}\n\n.vavorite-card {\n  margin-left: 0;\n}\n\n.badge {\n  margin-top: -19px;\n  border-radius: 50%;\n  height: 30px;\n  width: 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9uaHkvRG9jdW1lbnRzL0dpdEh1Yi9hbXBoaS9zcmMvYXBwL2hvbWUvdGVhY2hlcnMtbGlzdC90ZWFjaGVycy1saXN0LnBhZ2Uuc2NzcyIsInNyYy9hcHAvaG9tZS90ZWFjaGVycy1saXN0L3RlYWNoZXJzLWxpc3QucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBQTtBQ0NKOztBREVBO0VBQ0ksbUJBQUE7QUNDSjs7QURFQTtFQUNJLGlCQUFBO0VBQ0EsbUJBQUE7QUNDSjs7QURFQTtFQUNJLGVBQUE7QUNDSjs7QURFQTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7QUNDSjs7QURFQTtFQUNJLGlCQUFBO0VBQ0EsZUFBQTtBQ0NKOztBREVBO0VBQ0ksaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUNDSjs7QURHQSxhQUFBOztBQUVBO0VBQ0ksZ0JBQUE7RUFBa0IsZUFBQTtBQ0F0Qjs7QURHQTtFQUNJLGtCQUFBO0VBQ0MsWUFBQTtFQUNBLFdBQUE7QUNBTDs7QURHQTtFQUNJLGlCQUFBO0VBQ0EsNkJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUNBSjs7QURHQTtFQUNJLGNBQUE7QUNBSjs7QURJQTtFQUNJLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQ0RKIiwiZmlsZSI6InNyYy9hcHAvaG9tZS90ZWFjaGVycy1saXN0L3RlYWNoZXJzLWxpc3QucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRlYWNoZXItcHJlc2VudGF0aW9ue1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuLmlvbi1jYXJkc3tcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuXG4uaWNvbi1tb3Jle1xuICAgIG1hcmdpbi10b3A6IC01NnB4O1xuICAgIG1hcmdpbi1yaWdodDogLTExcHg7XG59XG5cbi5zdGF0c3tcbiAgICBmb250LXNpemU6IDI5cHg7XG59XG5cbi5uaXZlYXUtdmlsbGV7XG4gICAgZm9udC1zaXplOiAxMXB4O1xuICAgIG1hcmdpbi10b3A6IC0xMXB4O1xuICAgIGNvbG9yOiBncmV5O1xufVxuXG4uc3RhdHN7XG4gICAgbWFyZ2luLXRvcDogLTEwcHg7XG4gICAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4ubmFtZXtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XG4gICAgY29sb3I6IzMyYTA2MDtcbn1cblxuXG4vKiBkaXYgaW1hZ2UqL1xuXG4uZGl2LWltYWdle1xuICAgIG1hcmdpbi1sZWZ0OiAzMCU7IG1hcmdpbi10b3A6IDEwJTtcbn1cblxuLmltYWdle1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgaGVpZ2h0OiA3MHB4O1xuICAgICB3aWR0aDogNzBweDtcbn1cblxuLmNvbXBldGVuY2Vze1xuICAgIG1hcmdpbi10b3A6IC0xMHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xuICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICBtYXJnaW4tbGVmdDogLTdweDtcbn1cblxuLnZhdm9yaXRlLWNhcmR7XG4gICAgbWFyZ2luLWxlZnQ6IDA7XG4gICAgLy9tYXJnaW4tcmlnaHQ6IDA7XG59XG5cbi5iYWRnZXtcbiAgICBtYXJnaW4tdG9wOiAtMTlweDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgaGVpZ2h0OiAzMHB4O1xuICAgIHdpZHRoOiAzMHB4O1xufVxuIiwiLnRlYWNoZXItcHJlc2VudGF0aW9uIHtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuXG4uaW9uLWNhcmRzIHtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuLmljb24tbW9yZSB7XG4gIG1hcmdpbi10b3A6IC01NnB4O1xuICBtYXJnaW4tcmlnaHQ6IC0xMXB4O1xufVxuXG4uc3RhdHMge1xuICBmb250LXNpemU6IDI5cHg7XG59XG5cbi5uaXZlYXUtdmlsbGUge1xuICBmb250LXNpemU6IDExcHg7XG4gIG1hcmdpbi10b3A6IC0xMXB4O1xuICBjb2xvcjogZ3JleTtcbn1cblxuLnN0YXRzIHtcbiAgbWFyZ2luLXRvcDogLTEwcHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLm5hbWUge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xuICBjb2xvcjogIzMyYTA2MDtcbn1cblxuLyogZGl2IGltYWdlKi9cbi5kaXYtaW1hZ2Uge1xuICBtYXJnaW4tbGVmdDogMzAlO1xuICBtYXJnaW4tdG9wOiAxMCU7XG59XG5cbi5pbWFnZSB7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgaGVpZ2h0OiA3MHB4O1xuICB3aWR0aDogNzBweDtcbn1cblxuLmNvbXBldGVuY2VzIHtcbiAgbWFyZ2luLXRvcDogLTEwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDEwcHg7XG4gIG1hcmdpbi1sZWZ0OiAtN3B4O1xufVxuXG4udmF2b3JpdGUtY2FyZCB7XG4gIG1hcmdpbi1sZWZ0OiAwO1xufVxuXG4uYmFkZ2Uge1xuICBtYXJnaW4tdG9wOiAtMTlweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBoZWlnaHQ6IDMwcHg7XG4gIHdpZHRoOiAzMHB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/home/teachers-list/teachers-list.page.ts":
/*!**********************************************************!*\
  !*** ./src/app/home/teachers-list/teachers-list.page.ts ***!
  \**********************************************************/
/*! exports provided: TeachersListPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeachersListPage", function() { return TeachersListPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");




let TeachersListPage = class TeachersListPage {
    constructor(router, http) {
        this.router = router;
        this.http = http;
        this.listes = [];
        this.slideOpts = {};
        this.listes =
            [
                {
                    nom: "Mark Angel",
                    ville: "Douala",
                    niveau: "Master2",
                    recommandation: 2,
                    etoile: 2,
                },
                {
                    nom: "Mark Angel",
                    ville: "Douala",
                    niveau: "Master2",
                    recommandation: 2,
                    etoile: 2,
                },
                {
                    nom: "Mark Angel",
                    ville: "Douala",
                    niveau: "Master2",
                    recommandation: 2,
                    etoile: 2,
                }, {
                    nom: "Mark Angel",
                    ville: "Douala",
                    niveau: "Master2",
                    recommandation: 2,
                    etoile: 2,
                },
                {
                    nom: "Mark Angel",
                    ville: "Douala",
                    niveau: "Master2",
                    recommandation: 2,
                    etoile: 2,
                },
                {
                    nom: "Mark Angel",
                    ville: "Douala",
                    niveau: "Master2",
                    recommandation: 2,
                    etoile: 2,
                }
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
        this.http.get('http://localhost:3000/api/teachers', {}).subscribe(data => {
            console.log(data); // data received by server
        });
    }
    navigateToSigleTeacher() {
        this.router.navigateByUrl('home/single-profil');
    }
    ngOnInit() {
    }
};
TeachersListPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
];
TeachersListPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-teachers-list',
        template: __webpack_require__(/*! raw-loader!./teachers-list.page.html */ "./node_modules/raw-loader/index.js!./src/app/home/teachers-list/teachers-list.page.html"),
        styles: [__webpack_require__(/*! ./teachers-list.page.scss */ "./src/app/home/teachers-list/teachers-list.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
], TeachersListPage);



/***/ })

}]);
//# sourceMappingURL=teachers-list-teachers-list-module-es2015.js.map