(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/home/home.page.html":
/*!***************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/home.page.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content style=\"--background:rgb(211, 211, 211);\">\n    <ion-tabs>\n\n        <ion-tab-bar slot=\"bottom\" class=\"tabs-color\">\n          <ion-tab-button tab=\"teachers-list\">\n            <ion-icon name=\"apps\"></ion-icon>\n            <ion-label>Teacha</ion-label>\n          </ion-tab-button>\n      \n          <ion-tab-button tab=\"messanger\">\n            <ion-icon name=\"chatbubbles\"></ion-icon>\n            <ion-label>Messages</ion-label>\n          </ion-tab-button>\n      \n          <ion-tab-button tab=\"profil\">\n            <ion-icon name=\"person\"></ion-icon>\n            <ion-label>Mon profil</ion-label>\n          </ion-tab-button>\n\n          <ion-tab-button tab=\"parametres\">\n              <ion-icon name=\"settings\"></ion-icon>\n              <ion-label>Parametres</ion-label>\n            </ion-tab-button>\n        </ion-tab-bar>\n      \n      </ion-tabs>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/home/home-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/home/home-routing.module.ts ***!
  \*********************************************/
/*! exports provided: HomePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageRoutingModule", function() { return HomePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home.page */ "./src/app/home/home.page.ts");




var routes = [
    {
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_3__["HomePage"],
        children: [
            {
                path: 'teachers-list',
                children: [
                    {
                        path: "",
                        loadChildren: function () { return __webpack_require__.e(/*! import() | teachers-list-teachers-list-module */ "teachers-list-teachers-list-module").then(__webpack_require__.bind(null, /*! ./teachers-list/teachers-list.module */ "./src/app/home/teachers-list/teachers-list.module.ts")).then(function (m) { return m.TeachersListPageModule; }); }
                    }
                ]
            },
            {
                path: 'messanger',
                children: [
                    {
                        path: "",
                        loadChildren: function () { return __webpack_require__.e(/*! import() | messanger-messanger-module */ "messanger-messanger-module").then(__webpack_require__.bind(null, /*! ./messanger/messanger.module */ "./src/app/home/messanger/messanger.module.ts")).then(function (m) { return m.MessangerPageModule; }); }
                    }
                ]
            },
            {
                path: 'profil',
                children: [
                    {
                        path: "",
                        loadChildren: function () { return __webpack_require__.e(/*! import() | profil-profil-module */ "profil-profil-module").then(__webpack_require__.bind(null, /*! ./profil/profil.module */ "./src/app/home/profil/profil.module.ts")).then(function (m) { return m.ProfilPageModule; }); }
                    }
                ]
            },
            {
                path: 'parametres',
                children: [
                    {
                        path: "",
                        loadChildren: function () { return __webpack_require__.e(/*! import() | parametres-parametres-module */ "parametres-parametres-module").then(__webpack_require__.bind(null, /*! ./parametres/parametres.module */ "./src/app/home/parametres/parametres.module.ts")).then(function (m) { return m.ParametresPageModule; }); }
                    }
                ]
            },
            {
                path: 'single-profil',
                children: [
                    {
                        path: "",
                        loadChildren: function () { return __webpack_require__.e(/*! import() | sigle-teacher-profil-sigle-teacher-profil-module */ "sigle-teacher-profil-sigle-teacher-profil-module").then(__webpack_require__.bind(null, /*! ./sigle-teacher-profil/sigle-teacher-profil.module */ "./src/app/home/sigle-teacher-profil/sigle-teacher-profil.module.ts")).then(function (m) { return m.SigleTeacherProfilPageModule; }); }
                    }
                ]
            },
            {
                path: 'messagerie',
                children: [
                    {
                        path: "",
                        loadChildren: function () { return __webpack_require__.e(/*! import() | messagerie-messagerie-module */ "messagerie-messagerie-module").then(__webpack_require__.bind(null, /*! ./messagerie/messagerie.module */ "./src/app/home/messagerie/messagerie.module.ts")).then(function (m) { return m.MessageriePageModule; }); }
                    }
                ]
            },
            {
                path: '',
                redirectTo: '/home/teachers-list',
                pathMatch: 'full'
            }
        ]
    },
    {
        path: '',
        redirectTo: '/home/teachers/teachers-list',
        pathMatch: 'full'
    },
    {
        path: 'prices',
        loadChildren: function () { return __webpack_require__.e(/*! import() | prices-prices-module */ "prices-prices-module").then(__webpack_require__.bind(null, /*! ./prices/prices.module */ "./src/app/home/prices/prices.module.ts")).then(function (m) { return m.PricesPageModule; }); }
    }
];
var HomePageRoutingModule = /** @class */ (function () {
    function HomePageRoutingModule() {
    }
    HomePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], HomePageRoutingModule);
    return HomePageRoutingModule;
}());



/***/ }),

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home-routing.module */ "./src/app/home/home-routing.module.ts");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home.page */ "./src/app/home/home.page.ts");







var HomePageModule = /** @class */ (function () {
    function HomePageModule() {
    }
    HomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _home_routing_module__WEBPACK_IMPORTED_MODULE_5__["HomePageRoutingModule"]
            ],
            declarations: [_home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]]
        })
    ], HomePageModule);
    return HomePageModule;
}());



/***/ }),

/***/ "./src/app/home/home.page.scss":
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".tabs-color {\n  --color-selected:white;\n}\n\nion-tab-button[aria-selected=true] {\n  box-shadow: 0 2px 0 0 #32a060 inset;\n  background-color: #32a060;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9uaHkvRG9jdW1lbnRzL0dpdEh1Yi9hbXBoaS9zcmMvYXBwL2hvbWUvaG9tZS5wYWdlLnNjc3MiLCJzcmMvYXBwL2hvbWUvaG9tZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxzQkFBQTtBQ0NKOztBREVBO0VBQ0ksbUNBQUE7RUFDQSx5QkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50YWJzLWNvbG9ye1xuICAgIC0tY29sb3Itc2VsZWN0ZWQ6d2hpdGU7XG59XG5cbmlvbi10YWItYnV0dG9uW2FyaWEtc2VsZWN0ZWQ9dHJ1ZV0ge1xuICAgIGJveC1zaGFkb3c6IDAgMnB4IDAgMCAjMzJhMDYwIGluc2V0O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMzMmEwNjA7XG59IiwiLnRhYnMtY29sb3Ige1xuICAtLWNvbG9yLXNlbGVjdGVkOndoaXRlO1xufVxuXG5pb24tdGFiLWJ1dHRvblthcmlhLXNlbGVjdGVkPXRydWVdIHtcbiAgYm94LXNoYWRvdzogMCAycHggMCAwICMzMmEwNjAgaW5zZXQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzMmEwNjA7XG59Il19 */"

/***/ }),

/***/ "./src/app/home/home.page.ts":
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomePage = /** @class */ (function () {
    function HomePage() {
    }
    HomePage.prototype.ngOnInit = function () {
    };
    HomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! raw-loader!./home.page.html */ "./node_modules/raw-loader/index.js!./src/app/home/home.page.html"),
            styles: [__webpack_require__(/*! ./home.page.scss */ "./src/app/home/home.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomePage);
    return HomePage;
}());



/***/ })

}]);
//# sourceMappingURL=home-home-module-es5.js.map