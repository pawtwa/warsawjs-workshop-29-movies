(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-movie-list-page-movie-list-page-module"],{

/***/ "./src/app/pages/movie-list-page/components/@init/movie-list-page.component.css":
/*!**************************************************************************************!*\
  !*** ./src/app/pages/movie-list-page/components/@init/movie-list-page.component.css ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL21vdmllLWxpc3QtcGFnZS9jb21wb25lbnRzL0Bpbml0L21vdmllLWxpc3QtcGFnZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/movie-list-page/components/@init/movie-list-page.component.html":
/*!***************************************************************************************!*\
  !*** ./src/app/pages/movie-list-page/components/@init/movie-list-page.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  movie-list-page works!\n</p>\n"

/***/ }),

/***/ "./src/app/pages/movie-list-page/components/@init/movie-list-page.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/pages/movie-list-page/components/@init/movie-list-page.component.ts ***!
  \*************************************************************************************/
/*! exports provided: MovieListPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovieListPageComponent", function() { return MovieListPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MovieListPageComponent = /** @class */ (function () {
    function MovieListPageComponent() {
    }
    MovieListPageComponent.prototype.ngOnInit = function () {
    };
    MovieListPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-movie-list-page',
            template: __webpack_require__(/*! ./movie-list-page.component.html */ "./src/app/pages/movie-list-page/components/@init/movie-list-page.component.html"),
            styles: [__webpack_require__(/*! ./movie-list-page.component.css */ "./src/app/pages/movie-list-page/components/@init/movie-list-page.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MovieListPageComponent);
    return MovieListPageComponent;
}());



/***/ }),

/***/ "./src/app/pages/movie-list-page/movie-list-page-routing.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/pages/movie-list-page/movie-list-page-routing.module.ts ***!
  \*************************************************************************/
/*! exports provided: MovieListPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovieListPageRoutingModule", function() { return MovieListPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_init_movie_list_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/@init/movie-list-page.component */ "./src/app/pages/movie-list-page/components/@init/movie-list-page.component.ts");




var routes = [
    {
        path: '',
        component: _components_init_movie_list_page_component__WEBPACK_IMPORTED_MODULE_3__["MovieListPageComponent"]
    }
];
var MovieListPageRoutingModule = /** @class */ (function () {
    function MovieListPageRoutingModule() {
    }
    MovieListPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], MovieListPageRoutingModule);
    return MovieListPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/movie-list-page/movie-list-page.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/movie-list-page/movie-list-page.module.ts ***!
  \*****************************************************************/
/*! exports provided: MovieListPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovieListPageModule", function() { return MovieListPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _components_init_movie_list_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/@init/movie-list-page.component */ "./src/app/pages/movie-list-page/components/@init/movie-list-page.component.ts");
/* harmony import */ var _movie_list_page_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./movie-list-page-routing.module */ "./src/app/pages/movie-list-page/movie-list-page-routing.module.ts");




var MovieListPageModule = /** @class */ (function () {
    function MovieListPageModule() {
    }
    MovieListPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _components_init_movie_list_page_component__WEBPACK_IMPORTED_MODULE_2__["MovieListPageComponent"],
            ],
            imports: [
                _movie_list_page_routing_module__WEBPACK_IMPORTED_MODULE_3__["MovieListPageRoutingModule"]
            ]
        })
    ], MovieListPageModule);
    return MovieListPageModule;
}());



/***/ })

}]);
//# sourceMappingURL=pages-movie-list-page-movie-list-page-module.js.map