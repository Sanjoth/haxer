(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n    <ngx-alerts></ngx-alerts>\n    <app-header></app-header>\n<br>\n<br>\n<router-outlet id=\"overlay\" (click)=\"remOver()\"></router-outlet>\n<br/>\n<br/>\n<app-footer></app-footer>\n\n\n\n\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent.prototype.remOver = function () {
        document.getElementById("mySidenav").style.width = "0";
        document.getElementById("overlay").style.display = "none";
    };
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/service-worker */ "./node_modules/@angular/service-worker/fesm5/service-worker.js");
/* harmony import */ var ngx_alerts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-alerts */ "./node_modules/ngx-alerts/fesm5/ngx-alerts.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _material_material_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./material/material.module */ "./src/app/material/material.module.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _truncate_truncate_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./truncate/truncate.module */ "./src/app/truncate/truncate.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_user_user_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/user/user.component */ "./src/app/components/user/user.component.ts");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/footer/footer.component */ "./src/app/components/footer/footer.component.ts");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/header/header.component */ "./src/app/components/header/header.component.ts");
/* harmony import */ var _components_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/sign-up/sign-up.component */ "./src/app/components/sign-up/sign-up.component.ts");
/* harmony import */ var _components_log_in_log_in_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/log-in/log-in.component */ "./src/app/components/log-in/log-in.component.ts");
/* harmony import */ var _components_movie_detail_movie_detail_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/movie-detail/movie-detail.component */ "./src/app/components/movie-detail/movie-detail.component.ts");
/* harmony import */ var _components_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/page-not-found/page-not-found.component */ "./src/app/components/page-not-found/page-not-found.component.ts");
/* harmony import */ var _components_about_us_about_us_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/about-us/about-us.component */ "./src/app/components/about-us/about-us.component.ts");
/* harmony import */ var _components_recommender_recommender_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/recommender/recommender.component */ "./src/app/components/recommender/recommender.component.ts");
/* harmony import */ var _components_discover_discover_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/discover/discover.component */ "./src/app/components/discover/discover.component.ts");
/* harmony import */ var _components_seed_data_seed_data_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/seed-data/seed-data.component */ "./src/app/components/seed-data/seed-data.component.ts");
/* harmony import */ var _components_settings_settings_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/settings/settings.component */ "./src/app/components/settings/settings.component.ts");
/* harmony import */ var _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/profile/profile.component */ "./src/app/components/profile/profile.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








// Import HttpClientModule from @angular/common/http

// Angular Material 2



// Self Made

// User Components














var appRoutes = [
    { path: '', component: _components_user_user_component__WEBPACK_IMPORTED_MODULE_13__["UserComponent"] },
    { path: 'signup', component: _components_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_16__["SignUpComponent"] },
    { path: 'login', component: _components_log_in_log_in_component__WEBPACK_IMPORTED_MODULE_17__["LogInComponent"] },
    { path: 'recom', component: _components_recommender_recommender_component__WEBPACK_IMPORTED_MODULE_21__["RecommenderComponent"] },
    { path: 'show/movie/:id', component: _components_movie_detail_movie_detail_component__WEBPACK_IMPORTED_MODULE_18__["MovieDetailComponent"] },
    { path: 'show/tv/:id', component: _components_movie_detail_movie_detail_component__WEBPACK_IMPORTED_MODULE_18__["MovieDetailComponent"] },
    { path: 'about', component: _components_about_us_about_us_component__WEBPACK_IMPORTED_MODULE_20__["AboutUsComponent"] },
    { path: 'discover', component: _components_discover_discover_component__WEBPACK_IMPORTED_MODULE_22__["DiscoverComponent"] },
    { path: 'newuser', component: _components_seed_data_seed_data_component__WEBPACK_IMPORTED_MODULE_23__["SeedDataComponent"] },
    { path: 'profile', component: _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_25__["ProfileComponent"] },
    { path: 'settings', component: _components_settings_settings_component__WEBPACK_IMPORTED_MODULE_24__["SettingsComponent"] },
    { path: '**', component: _components_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_19__["PageNotFoundComponent"] }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_12__["AppComponent"],
                _components_user_user_component__WEBPACK_IMPORTED_MODULE_13__["UserComponent"],
                _truncate_truncate_module__WEBPACK_IMPORTED_MODULE_11__["TruncatePipe"],
                _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_14__["FooterComponent"],
                _components_header_header_component__WEBPACK_IMPORTED_MODULE_15__["HeaderComponent"],
                _components_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_16__["SignUpComponent"],
                _components_log_in_log_in_component__WEBPACK_IMPORTED_MODULE_17__["LogInComponent"],
                _components_movie_detail_movie_detail_component__WEBPACK_IMPORTED_MODULE_18__["MovieDetailComponent"],
                _components_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_19__["PageNotFoundComponent"],
                _components_about_us_about_us_component__WEBPACK_IMPORTED_MODULE_20__["AboutUsComponent"],
                _components_recommender_recommender_component__WEBPACK_IMPORTED_MODULE_21__["RecommenderComponent"],
                _components_recommender_recommender_component__WEBPACK_IMPORTED_MODULE_21__["SafePipe"],
                _components_discover_discover_component__WEBPACK_IMPORTED_MODULE_22__["DiscoverComponent"],
                _components_seed_data_seed_data_component__WEBPACK_IMPORTED_MODULE_23__["SeedDataComponent"],
                _components_settings_settings_component__WEBPACK_IMPORTED_MODULE_24__["SettingsComponent"],
                _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_25__["ProfileComponent"]
            ],
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(appRoutes
                /*,{ enableTracing: true } // <-- debugging purposes only */
                ),
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _material_material_module__WEBPACK_IMPORTED_MODULE_8__["MaterialModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatButtonToggleModule"],
                ngx_alerts__WEBPACK_IMPORTED_MODULE_5__["AlertModule"].forRoot({ maxMessages: 5, timeout: 5000 }),
                _angular_service_worker__WEBPACK_IMPORTED_MODULE_4__["ServiceWorkerModule"].register('/ngsw-worker.js', { enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].production })
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_12__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/about-us/about-us.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/about-us/about-us.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h2 {\n    color: black !important;\n}\n\na {\n    text-decoration: none;\n    display: inline-block;\n    padding: 8px 16px;\n    color: grey;\n  }\n\na:hover {\n    background-color: #ddd;\n    color: black;\n  }\n\n#name_dev:hover {\n      background-color: inherit;\n      \n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hYm91dC11cy9hYm91dC11cy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLHFCQUFxQjtJQUNyQixpQkFBaUI7SUFDakIsV0FBVztFQUNiOztBQUVBO0lBQ0Usc0JBQXNCO0lBQ3RCLFlBQVk7RUFDZDs7QUFFQTtNQUNJLHlCQUF5Qjs7RUFFN0IiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2Fib3V0LXVzL2Fib3V0LXVzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoMiB7XG4gICAgY29sb3I6IGJsYWNrICFpbXBvcnRhbnQ7XG59XG5cbmEge1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgcGFkZGluZzogOHB4IDE2cHg7XG4gICAgY29sb3I6IGdyZXk7XG4gIH1cbiAgXG4gIGE6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNkZGQ7XG4gICAgY29sb3I6IGJsYWNrO1xuICB9XG5cbiAgI25hbWVfZGV2OmhvdmVyIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XG4gICAgICBcbiAgfSJdfQ== */"

/***/ }),

/***/ "./src/app/components/about-us/about-us.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/about-us/about-us.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br>\n<br>\n<div class=\"container\" style=\"text-align:center; position:relative; margin-bottom:50px;\">\n    <h2>About Haxèr</h2>\n    <br>\n    <span>\n        <img src=\"/assets/haxer.png\">\n        <br>\n        <img src=\"/assets/mean.png\" width=\"240px\">\n    </span>\n    <br>\n    <br>\n    <h2>Developer Info</h2>\n    <span>\n        <h4>\n            <a href=\"https://about.me/sanjothshaw\" id=\"name_dev\" target=\"_blank\" style=\"text-decoration: none; color: black;\">Sanjoth Shaw</a>\n        </h4>\n        <a href=\"https://www.linkedin.com/in/sanjoth\" target=\"_blank\">\n            <i class=\"fa fa-linkedin fa-lg\" aria-hidden=\"true\"></i>\n        </a> \n        <a href=\"https://github.com/sanjoth\" target=\"_blank\">\n            <i class=\"fa fa-github fa-lg\" aria-hidden=\"true\"></i>\n        </a> \n        <a href=\"mailto:sanjothshaw@gmail.com\">\n            <i class=\"fa fa-envelope-open fa-lg\" aria-hidden=\"true\"></i>\n        </a>\n    </span>\n</div>"

/***/ }),

/***/ "./src/app/components/about-us/about-us.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/about-us/about-us.component.ts ***!
  \***********************************************************/
/*! exports provided: AboutUsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutUsComponent", function() { return AboutUsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutUsComponent = /** @class */ (function () {
    function AboutUsComponent() {
    }
    AboutUsComponent.prototype.ngOnInit = function () {
        document.getElementById("body").style.backgroundColor = '#e9ecef';
    };
    AboutUsComponent.prototype.ngOnDestroy = function () {
        document.getElementById("body").style.backgroundColor = "#1A1717";
    };
    AboutUsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-about-us',
            template: __webpack_require__(/*! ./about-us.component.html */ "./src/app/components/about-us/about-us.component.html"),
            styles: [__webpack_require__(/*! ./about-us.component.css */ "./src/app/components/about-us/about-us.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutUsComponent);
    return AboutUsComponent;
}());



/***/ }),

/***/ "./src/app/components/discover/discover.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/discover/discover.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "input {\n    display: inline-block;\n    position: relative;\n}\n\n.dropdown-menu a,.dropdown-menu a:active,.dropdown-menu a:focus,.dropdown-menu a:link{\n    text-decoration: none;\n    background-color: inherit;\n}\n\n.form-check-label {\n    color: white !important;\n}\n\nlabel {\n    color:black;\n    font-size: 14px;\n    margin: 0px;\n}\n\n#listbox {\n    width: 155px;\n    text-align: center;\n    \n}\n\n#before, #after {\n    max-width: 90%;\n}\n\ninput {\n    background-color: #f0f2f4 !important;\nborder-color:#f0f2f4 !important;\n}\n\n.input-group-text {\nbackground-color: #f0f2f4 !important;\nborder-color:#f0f2f4 !important;\n}\n\n#lang {\n    border-width: inherit;\n    width: 155px;\n}\n\n#haxthedb {\n    z-index: 0;\n}\n\n.btn-group {\n    margin-top: 10px;\n    margin-left: 5px;\n}\n\n.form-control {\n    max-width: 100%;\n}\n\ntable, th , td  {\n    border: 1px solid grey;\n    border-collapse: collapse;\n    padding: 10px;\n  }\n\ntable tr:nth-child(odd) {\n    background-color: #f1f1f1;\n  }\n\ntable tr:nth-child(even) {\n    background-color: #ffffff;\n  }\n\ntable\n  { \n  margin-left: auto;\n  margin-right: auto;\n  }\n\n.links a {\n    text-decoration: none;\n    display: inline-block;\n    padding: 8px 16px;\n    color: grey;\n}\n\n.links a:hover {\n    background-color: #ddd;\n    color: black;\n}\n\n/*  Material Card */\n\n.example-card {\n    width: 400px; \n    font-family: 'Source Sans Pro', sans-serif;\n  }\n\n.previous {\n    background-color: #e9ecef;\n    color: black;\n    display: inline-block;\n    padding: 8px 16px;\n}\n\n.next {\n    background-color:#e9ecef;\n    color: black;\n    display: inline-block;\n    padding: 8px 16px;\n}\n\n.previous:hover {\n    background-color: grey;\n}\n\n.next:hover {\n    background-color: grey;\n}\n\n.form-check.form-check-inline label {\n    font-size: 16px;\n}\n\n.form-check-input:checked {\n    background-color: black;\n}\n\n#lang {\n    border-left: none;\n    border-top: none;\n    width: 155px !important;\n}\n\n.btn.btn-light.active,.btn.btn-light.active {\n    color: black !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9kaXNjb3Zlci9kaXNjb3Zlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0kscUJBQXFCO0lBQ3JCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQix5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSx1QkFBdUI7QUFDM0I7O0FBQ0E7SUFDSSxXQUFXO0lBQ1gsZUFBZTtJQUNmLFdBQVc7QUFDZjs7QUFFQTtJQUNJLFlBQVk7SUFDWixrQkFBa0I7O0FBRXRCOztBQUVBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTtJQUNJLG9DQUFvQztBQUN4QywrQkFBK0I7QUFDL0I7O0FBR0E7QUFDQSxvQ0FBb0M7QUFDcEMsK0JBQStCO0FBQy9COztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxVQUFVO0FBQ2Q7O0FBR0E7SUFDSSxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLHNCQUFzQjtJQUN0Qix5QkFBeUI7SUFDekIsYUFBYTtFQUNmOztBQUNBO0lBQ0UseUJBQXlCO0VBQzNCOztBQUNBO0lBQ0UseUJBQXlCO0VBQzNCOztBQUNBOztFQUVBLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEI7O0FBRUE7SUFDRSxxQkFBcUI7SUFDckIscUJBQXFCO0lBQ3JCLGlCQUFpQjtJQUNqQixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxzQkFBc0I7SUFDdEIsWUFBWTtBQUNoQjs7QUFFRSxtQkFBbUI7O0FBQ25CO0lBQ0UsWUFBWTtJQUNaLDBDQUEwQztFQUM1Qzs7QUFFRjtJQUNJLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1oscUJBQXFCO0lBQ3JCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLHdCQUF3QjtJQUN4QixZQUFZO0lBQ1oscUJBQXFCO0lBQ3JCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSx1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLHVCQUF1QjtBQUMzQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZGlzY292ZXIvZGlzY292ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImlucHV0IHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uZHJvcGRvd24tbWVudSBhLC5kcm9wZG93bi1tZW51IGE6YWN0aXZlLC5kcm9wZG93bi1tZW51IGE6Zm9jdXMsLmRyb3Bkb3duLW1lbnUgYTpsaW5re1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xufVxuXG4uZm9ybS1jaGVjay1sYWJlbCB7XG4gICAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG59XG5sYWJlbCB7XG4gICAgY29sb3I6YmxhY2s7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIG1hcmdpbjogMHB4O1xufVxuXG4jbGlzdGJveCB7XG4gICAgd2lkdGg6IDE1NXB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBcbn1cblxuI2JlZm9yZSwgI2FmdGVyIHtcbiAgICBtYXgtd2lkdGg6IDkwJTtcbn1cblxuaW5wdXQge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMGYyZjQgIWltcG9ydGFudDtcbmJvcmRlci1jb2xvcjojZjBmMmY0ICFpbXBvcnRhbnQ7XG59XG5cblxuLmlucHV0LWdyb3VwLXRleHQge1xuYmFja2dyb3VuZC1jb2xvcjogI2YwZjJmNCAhaW1wb3J0YW50O1xuYm9yZGVyLWNvbG9yOiNmMGYyZjQgIWltcG9ydGFudDtcbn1cblxuI2xhbmcge1xuICAgIGJvcmRlci13aWR0aDogaW5oZXJpdDtcbiAgICB3aWR0aDogMTU1cHg7XG59XG5cbiNoYXh0aGVkYiB7XG4gICAgei1pbmRleDogMDtcbn1cblxuXG4uYnRuLWdyb3VwIHtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XG59XG5cbi5mb3JtLWNvbnRyb2wge1xuICAgIG1heC13aWR0aDogMTAwJTtcbn1cblxudGFibGUsIHRoICwgdGQgIHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCBncmV5O1xuICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG4gICAgcGFkZGluZzogMTBweDtcbiAgfVxuICB0YWJsZSB0cjpudGgtY2hpbGQob2RkKSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YxZjFmMTtcbiAgfVxuICB0YWJsZSB0cjpudGgtY2hpbGQoZXZlbikge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gIH1cbiAgdGFibGVcbiAgeyBcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgfVxuXG4gIC5saW5rcyBhIHtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHBhZGRpbmc6IDhweCAxNnB4O1xuICAgIGNvbG9yOiBncmV5O1xufVxuXG4ubGlua3MgYTpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2RkZDtcbiAgICBjb2xvcjogYmxhY2s7XG59XG5cbiAgLyogIE1hdGVyaWFsIENhcmQgKi9cbiAgLmV4YW1wbGUtY2FyZCB7XG4gICAgd2lkdGg6IDQwMHB4OyBcbiAgICBmb250LWZhbWlseTogJ1NvdXJjZSBTYW5zIFBybycsIHNhbnMtc2VyaWY7XG4gIH1cblxuLnByZXZpb3VzIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTllY2VmO1xuICAgIGNvbG9yOiBibGFjaztcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgcGFkZGluZzogOHB4IDE2cHg7XG59XG5cbi5uZXh0IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiNlOWVjZWY7XG4gICAgY29sb3I6IGJsYWNrO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBwYWRkaW5nOiA4cHggMTZweDtcbn1cblxuLnByZXZpb3VzOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmV5O1xufVxuXG4ubmV4dDpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JleTtcbn1cblxuLmZvcm0tY2hlY2suZm9ybS1jaGVjay1pbmxpbmUgbGFiZWwge1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbn1cblxuLmZvcm0tY2hlY2staW5wdXQ6Y2hlY2tlZCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG59XG5cbiNsYW5nIHtcbiAgICBib3JkZXItbGVmdDogbm9uZTtcbiAgICBib3JkZXItdG9wOiBub25lO1xuICAgIHdpZHRoOiAxNTVweCAhaW1wb3J0YW50O1xufVxuXG4uYnRuLmJ0bi1saWdodC5hY3RpdmUsLmJ0bi5idG4tbGlnaHQuYWN0aXZlIHtcbiAgICBjb2xvcjogYmxhY2sgIWltcG9ydGFudDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/discover/discover.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/discover/discover.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br>\n<div class=\"container\" id=\"search\" style=\"text-align:center\">\n  <h3>Discover Movies\n  </h3>\n  <div class=\"btn-group\">\n    <button class=\"btn btn-dark active dropdown-toggle\" type=\"button\" id=\"dropdownMenuButton\" data-toggle=\"dropdown\" aria-haspopup=\"true\"\n      aria-expanded=\"false\">\n      <i class=\"fa fa-filter\" aria-hidden=\"true\"></i> Sort By\n    </button>\n    <div class=\"dropdown-menu\" ria-labelledby=\"dropdownMenuButton\">\n      <label *ngFor=\"let sort of sortby_keys; let myIndex = index\" class=\"dropdown-item\" (click)=\"sortFix(sort)\">{{sortby[sort]}}\n      </label>\n    </div>\n  </div>\n  <div class=\"btn-group\">\n    <button class=\"btn btn-dark active dropdown-toggle\" type=\"button\" id=\"dropdownMenuButton2\" data-toggle=\"dropdown\" aria-haspopup=\"true\"\n      aria-expanded=\"false\">\n      <i class=\"fa fa-film\" aria-hidden=\"true\"></i> Include Genres\n    </button>\n    <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton\">\n      <label *ngFor=\"let gen of genres_incl\" class=\"dropdown-item\">\n        <input style=\"margin-left:2px;\" type=\"checkbox\" class=\"form-check-input\" value=\"{{gen}}\" [(ngModel)]=\"gen.checked\">&nbsp; {{gen.text}}</label>\n    </div>\n  </div>\n  <div class=\"btn-group\">\n    <button class=\"btn btn-dark active dropdown-toggle\" type=\"button\" id=\"dropdownMenuButton3\" aria-haspopup=\"true\" data-toggle=\"dropdown\"\n      aria-expanded=\"false\">\n      <i class=\"fa fa-film\" aria-hidden=\"true\"></i> Exclude Genres\n    </button>\n    <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton\">\n      <label *ngFor=\"let gen of genres_excl\" class=\"dropdown-item\">\n        <input style=\"margin-left:2px;\" type=\"checkbox\" class=\"form-check-input\" value=\"{{gen}}\" [(ngModel)]=\"gen.checked\">&nbsp; {{gen.text}}</label>\n    </div>\n\n  </div>\n  <div class=\"btn-group\">\n    <button class=\"btn btn-dark active dropdown-toggle\" type=\"button\" id=\"dropdownMenuButton4\" data-toggle=\"dropdown\" aria-haspopup=\"true\"\n      aria-expanded=\"false\">\n      <i class=\"fa fa-calendar\" aria-hidden=\"true\"></i> Release Date\n    </button>\n    <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton\">\n      <a class=\"dropdown-item\">\n        <label>From:</label>\n        <input class=\"form-control\" id=\"before\" #before type=\"date\">\n        <br>\n        <label style=\"margin-left:16px;\">To:</label>\n\n        <input class=\"form-control\" id=\"after\" #after type=\"date\" value=\"{{before_date}}\" style=\"margin-right:20px\">\n      </a>\n    </div>\n  </div>\n  <div class=\"btn-group\">\n    <button class=\"btn btn-dark active dropdown-toggle\" type=\"button\" id=\"dropdownMenuButton5\" data-toggle=\"dropdown\" aria-haspopup=\"true\"\n      aria-expanded=\"false\">\n      <i class=\"fa fa-language\" aria-hidden=\"true\"></i> Language\n    </button>\n    <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton\">\n      <a class=\"dropdown-item\">\n        <div class=\"input-group mb-3\">\n          <div class=\"input-group-prepend\">\n            <span id=\"listbox\" class=\"input-group-text\">\n              <label style=\"margin-left:30px;\"></label> &nbsp; Language</span>\n          </div>\n          <input list=\"languages\" name=\"language\" #lang id=\"lang\">\n          <datalist id=\"languages\">\n            <option *ngFor=\"let lang of lang_keys\" value=\"{{lang}}\">\n          </datalist>\n        </div>\n      </a>\n    </div>\n  </div>\n  <div class=\"btn-group\">\n    <button class=\"btn btn-dark active dropdown-toggle\" type=\"button\" id=\"dropdownMenuButton6\" data-toggle=\"dropdown\" aria-haspopup=\"true\"\n      aria-expanded=\"false\">\n      <i class=\"fa fa-imdb\" aria-hidden=\"true\"></i> Rating\n    </button>\n    <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton\">\n      <a class=\"dropdown-item\">\n        <div class=\"input-group mb-3\">\n          <div class=\"input-group-prepend\">\n            <span class=\"input-group-text\" id=\"basic-addon3\">Greater than</span>\n          </div>\n          <input type=\"number\" max=\"9\" class=\"form-control\" #rating aria-describedby=\"basic-addon3\">\n        </div>\n      </a>\n    </div>\n  </div>\n  <div class=\"btn-group\">\n    <button class=\"btn btn-dark active dropdown-toggle\" type=\"button\" id=\"dropdownMenuButton7\" data-toggle=\"dropdown\" aria-haspopup=\"true\"\n      aria-expanded=\"false\">\n      <i class=\"fa fa-imdb\" aria-hidden=\"true\"></i> Vote Count\n    </button>\n    <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton\">\n      <a class=\"dropdown-item\">\n        <div class=\"input-group mb-3\">\n          <div class=\"input-group-prepend\">\n            <span class=\"input-group-text\" id=\"basic-addon3\">Greater than</span>\n          </div>\n          <input type=\"number\" max=\"10000000000\" class=\"form-control\" #vote_count aria-describedby=\"basic-addon3\">\n        </div>\n      </a>\n    </div>\n  </div>\n  <br>\n  <div class=\"btn-group btn-group-toggle\" data-toggle=\"buttons\">\n    <label class=\"btn btn-light active\" (click)=\"setCat(true, $event)\">\n      <input type=\"radio\" name=\"options\" id=\"option1\" autocomplete=\"off\">\n      <i class=\"fa fa-film\" aria-hidden=\"true\"></i> Movies\n    </label>\n    <label class=\"btn btn-light\" (click)=\"setCat(false, $event)\">\n      <input type=\"radio\" name=\"options\" id=\"option2\" autocomplete=\"off\" checked>\n      <i class=\"fa fa-television\" aria-hidden=\"true\"></i> TV Shows\n    </label>\n  </div>\n  <br>\n  <div class=\"form-check form-check-inline\" style=\"margin-top: 10px\">\n    <label class=\"form-check-label\">\n      <input class=\"form-check-input\" type=\"checkbox\" id=\"inlineCheckbox1\" value=\"false\" checked disabled> Your Rated Movies\n      <sub>BETA</sub>\n    </label>\n  </div>\n  <br>\n  <div style=\"margin-top:10px\" (click)=\"hax(vote_count.value, lang.value, rating.value, before.value, after.value)\">\n    <button class=\"btn btn-light\" type=\"button\" id=\"haxthedb\">\n      Discover\n      <i style=\"margin-left:3px;\" class=\"fa fa-search-plus\" aria-hidden=\"true\"></i>\n    </button>\n  </div>\n\n</div>\n\n<div *ngIf=\"data\">\n  <div *ngIf=\"data.results.length>1;else noresults\">\n    <div style=\"text-align:center\">\n      <br>\n      <h5>Search Details</h5>\n      <table>\n        <tr>\n          <th>Page </th>\n          <th>Total Results</th>\n          <th>Total Pages</th>\n          <th>Results per page</th>\n        </tr>\n        <tr>\n          <td>{{data.page}}</td>\n          <td>{{data.total_results}}</td>\n          <td>{{data.total_pages}}</td>\n          <td>{{data.results.length}}</td>\n        </tr>\n      </table>\n    </div>\n    <div class=\"card-group\">\n      <mat-card class=\"example-card\" *ngFor=\"let movie of data.results; let myIndex = index\">\n        <mat-card-header>\n          <mat-card-title (click)=\"trackClick(movie)\">\n            <b *ngIf=\"movie_selected; else tvshow\">\n              <i class=\"fa fa-film fa-lg\" aria-hidden=\"true\"></i>\n              {{movie.title}} </b>\n            <ng-template #tvshow>\n              <b>\n                <i class=\"fa fa-television fa-lg\" aria-hidden=\"true\"></i> {{movie.name}}\n              </b>\n            </ng-template>\n          </mat-card-title>\n        </mat-card-header>\n        <img *ngIf=\"movie.backdrop_path;else other_content\" (click)=\"trackClick(movie)\" mat-card-image src=\"https://image.tmdb.org/t/p/w300/{{movie.backdrop_path}}\">\n        <ng-template #other_content>\n          <img (click)=\"trackClick(movie)\" mat-card-image src=\"/assets/nf.png\">\n        </ng-template>\n        <mat-card-content (click)=\"trackClick(movie)\">\n          <div class=\"d-flex justify-content-between\">\n            <div>\n              <i class=\"fa fa-calendar\" aria-hidden=\"true\"></i> {{movie.release_date || movie.first_air_date || 'N/A'}}\n            </div>\n            <div>\n              <i class=\"fa fa-imdb fa-lg\" aria-hidden=\"true\"></i> {{movie.vote_average || 'N/A'}}\n            </div>\n          </div>\n          <i>\n            <span style=\"color: #666; font-size: 12px;\" *ngFor=\"let item of movie.genre_ids;let i = index\">\n              <span *ngIf=\"i < movie.genre_ids.length-1;else fullstop2\">&nbsp;{{gen[item]}},</span>\n              <ng-template #fullstop2>&nbsp;{{gen[item] || 'N/A'}}.</ng-template>\n            </span>\n          </i>\n          <br>\n          <span *ngIf=\"movie.overview.length>140\">{{movie.overview | truncate : 140 : true}} </span>\n          <span *ngIf=\"movie.overview.length<140\">{{movie.overview || 'N/A'}} </span>\n          <br>\n\n          <div class=\"d-flex justify-content-between\">\n            <div>\n              <i class=\"fa fa-eye fa-lg\" aria-hidden=\"true\"></i>\n              <span *ngIf=\"movie.adult; else Audience\">Restricted</span>\n              <ng-template #Audience>\n                Unrestricted\n              </ng-template>\n            </div>\n            <div>\n              <i class=\"fa fa-language fa-lg\" aria-hidden=\"true\"></i> {{rev_lang_obj[movie.original_language] || 'N/A'}}\n            </div>\n          </div>\n          <i class=\"fa fa-rocket fa-lg\" aria-hidden=\"true\"></i> {{movie.popularity || 'N/A'}}\n          <br>\n        </mat-card-content>\n        <div class=\"links\" style=\"text-align: center\">\n          <i style=\"margin-right: 10px;\" class=\"fa fa-search\" aria-hidden=\"true\"></i>\n          <a href=\"https://www.netflix.com/search?q={{movie.title || movie.name}}\" target=\"_blank\">Netflix</a>\n          <a href=\"https://www.primevideo.com/region/eu/search/ref=atv_nb_sr?phrase={{movie.title || movie.name}}\" target=\"_blank\">\n            <i class=\"fa fa-play-circle\" aria-hidden=\"true\"></i> Prime Video</a>\n          <br>\n          <a href=\"http://solarmoviesc.com/search/{{movie.title || movie.name}}.html\" target=\"_blank\">SolarMovie</a>\n          <a *ngIf=\"movie.name\" href=\"https://dwatchseries.to/search/{{movie.name}}\" target=\"_blank\">WatchSeries</a>\n        </div>\n        <mat-card-actions style=\"text-align: center\">\n          <button value=\"like\" *ngIf=\"like_status_data[movie.id]; else liked_content_empty\" (click)=\"likeMovie(this.movie,$event)\"\n            class=\"mat-button\" mat-button>\n            <i *ngIf=\"like_status_data[movie.id].like_status;else liked_content\" class=\"fa fa-thumbs-up fa-lg\" aria-hidden=\"true\"></i>\n            <ng-template #liked_content>\n              <i class=\"fa fa-thumbs-o-up fa-lg\" aria-hidden=\"true\"></i>\n            </ng-template>\n          </button>\n          <ng-template #liked_content_empty>\n            <button value=\"like\" (click)=\"likeMovie(this.movie,$event)\" class=\"mat-button\" mat-button>\n              <i class=\"fa fa-thumbs-o-up fa-lg\" aria-hidden=\"true\"></i>\n            </button>\n          </ng-template>\n          <button value=\"dislike\" *ngIf=\"like_status_data[movie.id]; else disliked_content_empty\" (click)=\"dislikeMovie(this.movie,$event)\"\n            class=\"mat-button\" mat-button>\n            <i *ngIf=\"like_status_data[movie.id].like_status==false;else disliked_content\" class=\"fa fa-thumbs-down fa-lg\" aria-hidden=\"true\"></i>\n            <ng-template #disliked_content>\n              <i class=\"fa fa-thumbs-o-down fa-lg\" aria-hidden=\"true\"></i>\n            </ng-template>\n          </button>\n          <ng-template #disliked_content_empty>\n            <button value=\"dislike\" (click)=\"dislikeMovie(this.movie,$event)\" class=\"mat-button\" mat-button>\n              <i class=\"fa fa-thumbs-o-down fa-lg\" aria-hidden=\"true\"></i>\n            </button>\n          </ng-template>\n\n          <button *ngIf=\"bookmarked_data[movie.id]; else list_content_empty\" value=\"addList\" (click)=\"addList(this.movie,$event)\" class=\"mat-button\"\n            mat-button>\n            <i *ngIf=\"bookmarked_data[movie.id].list_status;else list_content\" class=\"fa fa-bookmark fa-lg\" aria-hidden=\"true\"></i>\n            <ng-template #list_content>\n              <i class=\"fa fa-bookmark-o fa-lg\" aria-hidden=\"true\"></i>\n            </ng-template>\n          </button>\n          <ng-template #list_content_empty>\n            <button value=\"addList\" (click)=\"addList(this.movie,$event)\" class=\"mat-button\" mat-button>\n              <i class=\"fa fa-bookmark-o fa-lg\" aria-hidden=\"true\"></i>\n            </button>\n          </ng-template>\n        </mat-card-actions>\n      </mat-card>\n    </div>\n  </div>\n\n  <ng-template #noresults>\n    <div class=\"container\" style=\"text-align:center; position:relative;\">\n      <p>No results found for '\n        <b>{{texts}}</b> ' </p>\n    </div>\n  </ng-template>\n  <br>\n  <div *ngIf=\"data\" style=\"text-align: center\">\n    <div *ngIf=\"data.results.length>1\">\n      <a *ngIf=\"data.page>1\" id=\"prev_button\" (click)=\"prev()\" class=\"previous round\">\n        <i class=\"fa fa-arrow-circle-left fa-lg\" aria-hidden=\"true\"></i>\n      </a>\n      <a *ngIf=\"data.page<data.total_pages\" id=\"next_button\" (click)=\"next()\" class=\"next round\">\n        <i class=\"fa fa-arrow-circle-right fa-lg\" aria-hidden=\"true\"></i>\n      </a>\n    </div>\n  </div>\n  <br/>\n  <br/>"

/***/ }),

/***/ "./src/app/components/discover/discover.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/discover/discover.component.ts ***!
  \***********************************************************/
/*! exports provided: DiscoverComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiscoverComponent", function() { return DiscoverComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _user_user_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../user/user.component */ "./src/app/components/user/user.component.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DiscoverComponent = /** @class */ (function (_super) {
    __extends(DiscoverComponent, _super);
    function DiscoverComponent(http_discover, http_discover_sendAdditionalData, http_discover_sendTrackingData, http_discover_getData) {
        var _this = _super.call(this, http_discover, http_discover_sendAdditionalData, http_discover_sendTrackingData, http_discover_getData) || this;
        _this.http_discover = http_discover;
        _this.http_discover_sendAdditionalData = http_discover_sendAdditionalData;
        _this.http_discover_sendTrackingData = http_discover_sendTrackingData;
        _this.http_discover_getData = http_discover_getData;
        _this.gen = {
            28: "Action",
            12: "Adventure",
            16: "Animation",
            35: "Comedy",
            80: "Crime",
            99: "Documentary",
            18: "Drama",
            10751: "Family",
            14: "Fantasy",
            36: "History",
            27: "Horror",
            10402: "Music",
            9648: "Mystery",
            10749: "Romance",
            878: "Science Fiction",
            10770: "TV Movie",
            53: "Thriller",
            10752: "War",
            37: "Western",
            10765: "Sci-Fi & Fantasy",
            10768: "War & Politics",
            10767: "Talk",
            10766: "Soap",
            10764: "Reality",
            10763: "News",
            10762: "Kids",
            10759: "Action & Adventure"
        };
        _this.sortby = {
            "popularity.asc": "Popularity ↑",
            "popularity.desc": "Popularity ↓",
            "primary_release_date.asc": "Release Date ↑",
            "primary_release_date.desc": "Release Date ↓",
            "revenue.asc": "Revenue ↑",
            "revenue.desc": "Revenue ↓",
            "primary_primary_release_date.asc": "Primary Release Date ↑",
            "primary_primary_release_date.desc": "Primary Release Date ↓",
            "original_title.asc": "Original Title ↑",
            "original_title.desc": "Original Title ↓",
            "vote_average.asc": "Vote Average ↑",
            "vote_average.desc": "Vote Average ↓",
            "vote_count.asc": "Vote Count ↑",
            "vote_count.desc": "Vote Count ↓"
        };
        _this.genres_incl = [
            { "value": 28, "text": "Action", "checked": false },
            { "value": 12, "text": "Adventure", "checked": false },
            { "value": 16, "text": "Animation", "checked": false },
            { "value": 35, "text": "Comedy", "checked": false },
            { "value": 80, "text": "Crime", "checked": false },
            { "value": 99, "text": "Documentary", "checked": false },
            { "value": 18, "text": "Drama", "checked": false },
            { "value": 10751, "text": "Family", "checked": false },
            { "value": 14, "text": "Fantasy", "checked": false },
            { "value": 36, "text": "History", "checked": false },
            { "value": 27, "text": "Horror", "checked": false },
            { "value": 10402, "text": "Music", "checked": false },
            { "value": 9648, "text": "Mystery", "checked": false },
            { "value": 10749, "text": "Romance", "checked": false },
            { "value": 878, "text": "Science Fiction", "checked": false },
            { "value": 10770, "text": "TV Movie", "checked": false },
            { "value": 53, "text": "Thriller", "checked": false },
            { "value": 10752, "text": "War", "checked": false },
            { "value": 37, "text": "Western", "checked": false }
        ];
        _this.optional_filters = [
            { "filter_name": "adult", "checked": false },
            { "filter_name": "history", "checked": false }
        ];
        _this.genres_excl = [
            { "value": 28, "text": "Action", "checked": false },
            { "value": 12, "text": "Adventure", "checked": false },
            { "value": 16, "text": "Animation", "checked": false },
            { "value": 35, "text": "Comedy", "checked": false },
            { "value": 80, "text": "Crime", "checked": false },
            { "value": 99, "text": "Documentary", "checked": false },
            { "value": 18, "text": "Drama", "checked": false },
            { "value": 10751, "text": "Family", "checked": false },
            { "value": 14, "text": "Fantasy", "checked": false },
            { "value": 36, "text": "History", "checked": false },
            { "value": 27, "text": "Horror", "checked": false },
            { "value": 10402, "text": "Music", "checked": false },
            { "value": 9648, "text": "Mystery", "checked": false },
            { "value": 10749, "text": "Romance", "checked": false },
            { "value": 878, "text": "Science Fiction", "checked": false },
            { "value": 10770, "text": "TV Movie", "checked": false },
            { "value": 53, "text": "Thriller", "checked": false },
            { "value": 10752, "text": "War", "checked": false },
            { "value": 37, "text": "Western", "checked": false }
        ];
        _this.sortby_values = Object.values(_this.sortby);
        _this.sortby_keys = Object.keys(_this.sortby);
        _this.lang_object = {
            "No Language": "xx", "Afar": "aa", "Afrikaans": "af", "Akan": "ak", "Aragonese": "an", "Assamese": "as", "Avaric": "av", "Avestan": "ae", "Aymara": "ay", "Azerbaijani": "az", "Bashkir": "ba", "Bambara": "bm", "Bislama": "bi", "Tibetan": "bo", "Breton": "br", "Catalan": "ca", "Czech": "cs", "Chechen": "ce", "Slavic": "cu", "Chuvash": "cv", "Cornish": "kw", "Corsican": "co", "Cree": "cr", "Welsh": "cy", "Danish": "da", "German": "de", "Divehi": "dv", "Dzongkha": "dz", "Esperanto": "eo", "Estonian": "et", "Basque": "eu", "Faroese": "fo", "Fijian": "fj", "Finnish": "fi", "French": "fr", "Frisian": "fy", "Fulah": "ff", "Gaelic": "gd", "Irish": "ga", "Gallegan": "gl", "Manx": "gv", "Guarani": "gn", "Gujarati": "gu", "Haitian; Haitian Creole": "ht", "Hausa": "ha", "Serbo-Croatian": "sh", "Herero": "hz", "Hiri Motu": "ho", "Croatian": "hr", "Hungarian": "hu", "Igbo": "ig", "Ido": "io", "Yi": "ii", "Inuktitut": "iu", "Interlingue": "ie", "Interlingua": "ia", "Indonesian": "id", "Inupiaq": "ik", "Icelandic": "is", "Italian": "it", "Javanese": "jv", "Japanese": "ja", "Kalaallisut": "kl", "Kannada": "kn", "Kashmiri": "ks", "Kanuri": "kr", "Kazakh": "kk", "Khmer": "km", "Kikuyu": "ki", "Kinyarwanda": "rw", "Kirghiz": "ky", "Komi": "kv", "Kongo": "kg", "Korean": "ko", "Kuanyama": "kj", "Kurdish": "ku", "Lao": "lo", "Latin": "la", "Latvian": "lv", "Limburgish": "li", "Lingala": "ln", "Lithuanian": "lt", "Letzeburgesch": "lb", "Luba-Katanga": "lu", "Ganda": "lg", "Marshall": "mh", "Malayalam": "ml", "Marathi": "mr", "Malagasy": "mg", "Maltese": "mt", "Moldavian": "mo", "Mongolian": "mn", "Maori": "mi", "Malay": "ms", "Burmese": "my", "Nauru": "na", "Navajo": "nv", "Ndebele": "nd", "Ndonga": "ng", "Nepali": "ne", "Dutch": "nl", "Norwegian Nynorsk": "nn", "Norwegian Bokmål": "nb", "Norwegian": "no", "Chichewa; Nyanja": "ny", "Occitan": "oc", "Ojibwa": "oj", "Oriya": "or", "Oromo": "om", "Ossetian; Ossetic": "os", "Pali": "pi", "Polish": "pl", "Portuguese": "pt", "Quechua": "qu", "Raeto-Romance": "rm", "Romanian": "ro", "Rundi": "rn", "Russian": "ru", "Sango": "sg", "Sanskrit": "sa", "Sinhalese": "si", "Slovak": "sk", "Slovenian": "sl", "Northern Sami": "se", "Samoan": "sm", "Shona": "sn", "Sindhi": "sd", "Somali": "so", "Sotho": "st", "Spanish": "es", "Albanian": "sq", "Sardinian": "sc", "Serbian": "sr", "Swati": "ss", "Sundanese": "su", "Swahili": "sw", "Swedish": "sv", "Tahitian": "ty", "Tamil": "ta", "Tatar": "tt", "Telugu": "te", "Tajik": "tg", "Tagalog": "tl", "Thai": "th", "Tigrinya": "ti", "Tonga": "to", "Tswana": "tn", "Tsonga": "ts", "Turkmen": "tk", "Turkish": "tr", "Twi": "tw", "Uighur": "ug", "Ukrainian": "uk", "Urdu": "ur", "Uzbek": "uz", "Venda": "ve", "Vietnamese": "vi", "Volapük": "vo", "Walloon": "wa", "Wolof": "wo", "Xhosa": "xh", "Yiddish": "yi", "Zhuang": "za", "Zulu": "zu", "Abkhazian": "ab", "Mandarin": "zh", "Pushto": "ps", "Amharic": "am", "Arabic": "ar", "Bulgarian": "bg", "Cantonese": "cn", "Macedonian": "mk", "Greek": "el", "Persian": "fa", "Hebrew": "he", "Hindi": "hi", "Armenian": "hy", "English": "en", "Ewe": "ee", "Georgian": "ka", "Punjabi": "pa", "Bengali": "bn", "Bosnian": "bs", "Chamorro": "ch", "Belarusian": "be"
        };
        _this.rev_lang_obj = { 'xx': 'No Language', 'aa': 'Afar', 'af': 'Afrikaans', 'ak': 'Akan', 'an': 'Aragonese', 'as': 'Assamese', 'av': 'Avaric', 'ae': 'Avestan', 'ay': 'Aymara', 'az': 'Azerbaijani', 'ba': 'Bashkir', 'bm': 'Bambara', 'bi': 'Bislama', 'bo': 'Tibetan', 'br': 'Breton', 'ca': 'Catalan', 'cs': 'Czech', 'ce': 'Chechen', 'cu': 'Slavic', 'cv': 'Chuvash', 'kw': 'Cornish', 'co': 'Corsican', 'cr': 'Cree', 'cy': 'Welsh', 'da': 'Danish', 'de': 'German', 'dv': 'Divehi', 'dz': 'Dzongkha', 'eo': 'Esperanto', 'et': 'Estonian', 'eu': 'Basque', 'fo': 'Faroese', 'fj': 'Fijian', 'fi': 'Finnish', 'fr': 'French', 'fy': 'Frisian', 'ff': 'Fulah', 'gd': 'Gaelic', 'ga': 'Irish', 'gl': 'Gallegan', 'gv': 'Manx', 'gn': 'Guarani', 'gu': 'Gujarati', 'ht': 'Haitian; Haitian Creole', 'ha': 'Hausa', 'sh': 'Serbo-Croatian', 'hz': 'Herero', 'ho': 'Hiri Motu', 'hr': 'Croatian', 'hu': 'Hungarian', 'ig': 'Igbo', 'io': 'Ido', 'ii': 'Yi', 'iu': 'Inuktitut', 'ie': 'Interlingue', 'ia': 'Interlingua', 'id': 'Indonesian', 'ik': 'Inupiaq', 'is': 'Icelandic', 'it': 'Italian', 'jv': 'Javanese', 'ja': 'Japanese', 'kl': 'Kalaallisut', 'kn': 'Kannada', 'ks': 'Kashmiri', 'kr': 'Kanuri', 'kk': 'Kazakh', 'km': 'Khmer', 'ki': 'Kikuyu', 'rw': 'Kinyarwanda', 'ky': 'Kirghiz', 'kv': 'Komi', 'kg': 'Kongo', 'ko': 'Korean', 'kj': 'Kuanyama', 'ku': 'Kurdish', 'lo': 'Lao', 'la': 'Latin', 'lv': 'Latvian', 'li': 'Limburgish', 'ln': 'Lingala', 'lt': 'Lithuanian', 'lb': 'Letzeburgesch', 'lu': 'Luba-Katanga', 'lg': 'Ganda', 'mh': 'Marshall', 'ml': 'Malayalam', 'mr': 'Marathi', 'mg': 'Malagasy', 'mt': 'Maltese', 'mo': 'Moldavian', 'mn': 'Mongolian', 'mi': 'Maori', 'ms': 'Malay', 'my': 'Burmese', 'na': 'Nauru', 'nv': 'Navajo', 'nd': 'Ndebele', 'ng': 'Ndonga', 'ne': 'Nepali', 'nl': 'Dutch', 'nn': 'Norwegian Nynorsk', 'nb': 'Norwegian Bokmål', 'no': 'Norwegian', 'ny': 'Chichewa; Nyanja', 'oc': 'Occitan', 'oj': 'Ojibwa', 'or': 'Oriya', 'om': 'Oromo', 'os': 'Ossetian; Ossetic', 'pi': 'Pali', 'pl': 'Polish', 'pt': 'Portuguese', 'qu': 'Quechua', 'rm': 'Raeto-Romance', 'ro': 'Romanian', 'rn': 'Rundi', 'ru': 'Russian', 'sg': 'Sango', 'sa': 'Sanskrit', 'si': 'Sinhalese', 'sk': 'Slovak', 'sl': 'Slovenian', 'se': 'Northern Sami', 'sm': 'Samoan', 'sn': 'Shona', 'sd': 'Sindhi', 'so': 'Somali', 'st': 'Sotho', 'es': 'Spanish', 'sq': 'Albanian', 'sc': 'Sardinian', 'sr': 'Serbian', 'ss': 'Swati', 'su': 'Sundanese', 'sw': 'Swahili', 'sv': 'Swedish', 'ty': 'Tahitian', 'ta': 'Tamil', 'tt': 'Tatar', 'te': 'Telugu', 'tg': 'Tajik', 'tl': 'Tagalog', 'th': 'Thai', 'ti': 'Tigrinya', 'to': 'Tonga', 'tn': 'Tswana', 'ts': 'Tsonga', 'tk': 'Turkmen', 'tr': 'Turkish', 'tw': 'Twi', 'ug': 'Uighur', 'uk': 'Ukrainian', 'ur': 'Urdu', 'uz': 'Uzbek', 've': 'Venda', 'vi': 'Vietnamese', 'vo': 'Volapük', 'wa': 'Walloon', 'wo': 'Wolof', 'xh': 'Xhosa', 'yi': 'Yiddish', 'za': 'Zhuang', 'zu': 'Zulu', 'ab': 'Abkhazian', 'zh': 'Mandarin', 'ps': 'Pushto', 'am': 'Amharic', 'ar': 'Arabic', 'bg': 'Bulgarian', 'cn': 'Cantonese', 'mk': 'Macedonian', 'el': 'Greek', 'fa': 'Persian', 'he': 'Hebrew', 'hi': 'Hindi', 'hy': 'Armenian', 'en': 'English', 'ee': 'Ewe', 'ka': 'Georgian', 'pa': 'Punjabi', 'bn': 'Bengali', 'bs': 'Bosnian', 'ch': 'Chamorro', 'be': 'Belarusian' };
        _this.api_key = 'bd5e7f8161070f86bff1d8da34219f57';
        _this.adult_filter = false;
        _this.Date = new Date();
        _this.movie_selected = true;
        return _this;
    }
    DiscoverComponent.prototype.ngOnInit = function () {
        this.page_number = 1;
        localStorage.removeItem("REACTION_DATA");
        localStorage.removeItem("BOOKMARKED_DATA");
        localStorage.removeItem("CLICKED_DATA");
        this.before_date = this.Date.toISOString().split('T')[0];
        this.lang_keys = Object.keys(this.lang_object);
        this.lang_values = Object.values(this.lang_object);
        var status;
        if (localStorage.getItem("Email")) {
            status = this.getUserData();
        }
        else {
            console.log("Not logged in to get user data.");
        }
    };
    DiscoverComponent.prototype.hax = function (vote_count, lang, rating, before, after) {
        var _this = this;
        if (lang === void 0) { lang = 'English'; }
        if (rating === void 0) { rating = '0'; }
        if (after == undefined) {
            after = this.before_date;
        }
        var ratecheck = parseInt(rating);
        var before_date = new Date(before);
        var after_date = new Date(this.before_date);
        if (ratecheck > 10) {
            alert("Rating can't be higher than 10");
            this.data = null;
            return;
        }
        if (this.votecount > 10000) {
            alert("Vote count out of range.");
            this.data = null;
            return;
        }
        if (before > after) {
            alert("'From date' can't be higher than 'To date'.");
            this.data = null;
            return;
        }
        if (before > this.before_date || after > this.before_date) {
            alert("Please insert correct date range.");
            this.data = null;
            return;
        }
        if (this.sub != undefined) {
            this.sub.unsubscribe();
        }
        if (this.sort_filter == '' || this.sort_filter == undefined) {
            this.sort_filter = 'vote_average.desc';
        }
        if (rating === '') {
            rating = '0';
        }
        if (lang === '') {
            lang = 'English';
        }
        else {
            if (!this.lang_object[lang]) {
                alert("Please select a valid language from the dropdown!");
                this.data = null;
                return;
            }
        }
        if (vote_count === undefined) {
            vote_count = '0';
        }
        if (before === undefined) {
            before = '';
        }
        this.votecount = parseInt(vote_count);
        this.before = before;
        this.lang = lang;
        this.rating = rating;
        var in_genres = this.genres_incl.filter(function (opt) { return opt.checked; }).map(function (opt) { return opt.value; }).toString();
        var ex_genres = this.genres_excl.filter(function (opt) { return opt.checked; }).map(function (opt) { return opt.value; }).toString();
        if (this.movie_selected == true) {
            this.hax_link = 'https://api.themoviedb.org/3/discover/movie?api_key=' + this.api_key + '&language=en-IN&sort_by=' + this.sort_filter + '&include_adult=' + this.adult_filter + '&include_video=false&page=' + this.page_number + '&primary_release_date.gte=' + before + '&primary_release_date.lte=' + after + '&vote_count.gte=' + vote_count + '&vote_average.gte=' + rating + '&with_genres=' + in_genres + '&without_genres=' + ex_genres + '&with_original_language=' + this.lang_object[lang] + '&vote_average.lte=9';
        }
        else {
            this.hax_link = 'https://api.themoviedb.org/3/discover/tv?api_key=' + this.api_key + '&language=en-US&sort_by=' + this.sort_filter + '&page=1&include_null_first_air_dates=false&sort_by=' + this.sort_filter + '&include_adult=' + this.adult_filter + '&page=' + this.page_number + '&first_air_date.gte=' + before + '&first_air_date.lte=' + after + '&vote_count.gte=' + vote_count + '&vote_average.gte=' + rating + '&with_genres=' + in_genres + '&without_genres=' + ex_genres + '&with_original_language=' + this.lang_object[lang] + '&vote_average.lte=9';
        }
        this.sub = this.http_discover.get(this.hax_link).subscribe(function (data) {
            _this.data = data; // Assign local to global
        });
    };
    DiscoverComponent.prototype.sortFix = function (sort) {
        this.sort_filter = sort;
    };
    DiscoverComponent.prototype.setCat = function (bool, event) {
        this.movie_selected = bool;
        this.data = null;
        document.getElementById("haxthedb").click();
    };
    DiscoverComponent.prototype.prev = function () {
        if (this.page_number > 1) {
            this.page_number -= 1;
        }
        window.scrollTo(0, 0);
        this.hax(this.votecount, this.lang, this.rating, this.before);
    };
    DiscoverComponent.prototype.next = function () {
        if (this.page_number < this.data.total_pages) {
            this.page_number += 1;
        }
        window.scrollTo(0, 0);
        this.hax(this.votecount, this.lang, this.rating, this.before);
    };
    DiscoverComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-discover',
            template: __webpack_require__(/*! ./discover.component.html */ "./src/app/components/discover/discover.component.html"),
            styles: [__webpack_require__(/*! ./discover.component.css */ "./src/app/components/discover/discover.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], DiscoverComponent);
    return DiscoverComponent;
}(_user_user_component__WEBPACK_IMPORTED_MODULE_2__["UserComponent"]));



/***/ }),

/***/ "./src/app/components/footer/footer.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/footer/footer.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".footer {\n  font-family: 'Source Sans Pro', sans-serif;\n    position: absolute;\n    bottom: 0;\n    width: 100%;\n    height: 60px;\n    line-height: 60px;\n    background-color: #f5f5f5;\n    text-align: center;\n  }\n  i {\n    margin-right: 0px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSwwQ0FBMEM7SUFDeEMsa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxXQUFXO0lBQ1gsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQix5QkFBeUI7SUFDekIsa0JBQWtCO0VBQ3BCO0VBQ0E7SUFDRSw0QkFBNEI7QUFDaEMiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb290ZXIge1xuICBmb250LWZhbWlseTogJ1NvdXJjZSBTYW5zIFBybycsIHNhbnMtc2VyaWY7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvdHRvbTogMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDYwcHg7XG4gICAgbGluZS1oZWlnaHQ6IDYwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjVmNTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cbiAgaSB7XG4gICAgbWFyZ2luLXJpZ2h0OiAwcHggIWltcG9ydGFudDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/footer/footer.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/footer/footer.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer class=\"footer\">\n  <div class=\"container\">\n    <span class=\"text-muted\" routerLink=\"/about\" routerLinkActive=\"active\">\n      Made with\n      <i class=\"fa fa-heart\" aria-hidden=\"true\" style=\"color: red;\"></i>️ by Sanjoth\n    </span>\n  </div>\n</footer>"

/***/ }),

/***/ "./src/app/components/footer/footer.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/components/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/components/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/components/header/header.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/header/header.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "b{\n    font-size: 22px;\n    font-family: 'Source Sans Pro', sans-serif;\n}\na {\n    text-decoration:none; \n    color:white;  \n}\n.show-off:hover {\n    color:#efbb42 !important;\n}\n#center a:hover, i:hover {\n    color:#efbb42 !important;\n}\n#haxlogo {\n    color: white !important;\n    display: none;\n}\nmat-toolbar{\n    position: fixed;\n    top: 0;\n    right: 0;\n    left: 0;\n    color: white; /*Text Color of Nav bar Text*/\n    font-family: 'Source Sans Pro', sans-serif !important;\n}\n@media screen and (max-height: 450px) {\n  .sidenav {padding-top: 15px;}\n  .sidenav a {font-size: 16px;}\n}\n#right a {\n    margin-right: 20px;\n}\n#cont {\n    width:100%;\n    text-align:center;\n}\n#left {\n    float:left; \n}\n#center {\n    display: inline-block;\n    margin:0 auto;\n    width:100px;\n}\n#right {\n    float:right;\n}\n#haxinfo {\n    text-align: center;\n    background-color: whitesmoke;\n    position: absolute;\n    bottom: 0px;\n}\np{\n    color: black;\n    size: 12px;\n}\ni {\n    margin-right: 0px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxlQUFlO0lBQ2YsMENBQTBDO0FBQzlDO0FBQ0E7SUFDSSxvQkFBb0I7SUFDcEIsV0FBVztBQUNmO0FBRUE7SUFDSSx3QkFBd0I7QUFDNUI7QUFFQTtJQUNJLHdCQUF3QjtBQUM1QjtBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLGFBQWE7QUFDakI7QUFFQTtJQUNJLGVBQWU7SUFDZixNQUFNO0lBQ04sUUFBUTtJQUNSLE9BQU87SUFDUCxZQUFZLEVBQUUsNkJBQTZCO0lBQzNDLHFEQUFxRDtBQUN6RDtBQUVBO0VBQ0UsVUFBVSxpQkFBaUIsQ0FBQztFQUM1QixZQUFZLGVBQWUsQ0FBQztBQUM5QjtBQUNBO0lBQ0ksa0JBQWtCO0FBQ3RCO0FBRUE7SUFDSSxVQUFVO0lBQ1YsaUJBQWlCO0FBQ3JCO0FBRUE7SUFDSSxVQUFVO0FBQ2Q7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixhQUFhO0lBQ2IsV0FBVztBQUNmO0FBRUE7SUFDSSxXQUFXO0FBQ2Y7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQiw0QkFBNEI7SUFDNUIsa0JBQWtCO0lBQ2xCLFdBQVc7QUFDZjtBQUVBO0lBQ0ksWUFBWTtJQUNaLFVBQVU7QUFDZDtBQUVBO0lBQ0ksNEJBQTRCO0FBQ2hDIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJie1xuICAgIGZvbnQtc2l6ZTogMjJweDtcbiAgICBmb250LWZhbWlseTogJ1NvdXJjZSBTYW5zIFBybycsIHNhbnMtc2VyaWY7XG59XG5hIHtcbiAgICB0ZXh0LWRlY29yYXRpb246bm9uZTsgXG4gICAgY29sb3I6d2hpdGU7ICBcbn1cblxuLnNob3ctb2ZmOmhvdmVyIHtcbiAgICBjb2xvcjojZWZiYjQyICFpbXBvcnRhbnQ7XG59XG5cbiNjZW50ZXIgYTpob3ZlciwgaTpob3ZlciB7XG4gICAgY29sb3I6I2VmYmI0MiAhaW1wb3J0YW50O1xufVxuXG4jaGF4bG9nbyB7XG4gICAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG4gICAgZGlzcGxheTogbm9uZTtcbn1cblxubWF0LXRvb2xiYXJ7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHRvcDogMDtcbiAgICByaWdodDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIGNvbG9yOiB3aGl0ZTsgLypUZXh0IENvbG9yIG9mIE5hdiBiYXIgVGV4dCovXG4gICAgZm9udC1mYW1pbHk6ICdTb3VyY2UgU2FucyBQcm8nLCBzYW5zLXNlcmlmICFpbXBvcnRhbnQ7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtaGVpZ2h0OiA0NTBweCkge1xuICAuc2lkZW5hdiB7cGFkZGluZy10b3A6IDE1cHg7fVxuICAuc2lkZW5hdiBhIHtmb250LXNpemU6IDE2cHg7fVxufVxuI3JpZ2h0IGEge1xuICAgIG1hcmdpbi1yaWdodDogMjBweDtcbn1cblxuI2NvbnQge1xuICAgIHdpZHRoOjEwMCU7XG4gICAgdGV4dC1hbGlnbjpjZW50ZXI7XG59XG5cbiNsZWZ0IHtcbiAgICBmbG9hdDpsZWZ0OyBcbn1cblxuI2NlbnRlciB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIG1hcmdpbjowIGF1dG87XG4gICAgd2lkdGg6MTAwcHg7XG59XG5cbiNyaWdodCB7XG4gICAgZmxvYXQ6cmlnaHQ7XG59XG5cbiNoYXhpbmZvIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm90dG9tOiAwcHg7XG59XG5cbnB7XG4gICAgY29sb3I6IGJsYWNrO1xuICAgIHNpemU6IDEycHg7XG59XG5cbmkge1xuICAgIG1hcmdpbi1yaWdodDogMHB4ICFpbXBvcnRhbnQ7XG59Il19 */"

/***/ }),

/***/ "./src/app/components/header/header.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/header/header.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"header\">\n  <div>\n    <mat-toolbar id=\"cont\" color=\"accent\">\n      <div id=\"left\">\n          <i class=\"fa fa-map-signs fa-lg\" aria-hidden=\"true\" (click)=\"toggNav()\"></i>\n      </div>\n      <div id=\"center\">\n          <a routerLink=\"/\" routerLinkActive=\"active\">\n            <img style=\"margin-bottom: 4px;\" width=35% src=\"/assets/haxer_logo.png\" alt=\"Haxèr\">\n          </a>\n      </div>\n      <div id=\"right\" [mat-menu-trigger-for]=\"menu\">\n        <i class=\"fa fa-cogs fa-lg\" aria-hidden=\"true\" (click)=\"closeNav()\"></i>\n      </div>\n    </mat-toolbar>\n    <mat-menu x-position=\"before\" #menu=\"matMenu\">\n      <button mat-menu-item routerLink=\"/about\" routerLinkActive=\"active\">About Us</button>\n      <button mat-menu-item routerLink=\"/settings\" routerLinkActive=\"active\">Settings</button>\n      <button mat-menu-item routerLink=\"/\" *ngIf=\"signIn\" (click)=\"logOut()\">Sign out</button>\n    </mat-menu>\n\n  </div>\n  <div id=\"mySidenav\" class=\"sidenav\" (click)=\"toggNav()\">\n    <a *ngIf=\"signIn\" routerLink=\"/profile\" routerLinkActive=\"active\">{{Name}}</a>\n    <a *ngIf=\"!signIn\" routerLink=\"/login\" routerLinkActive=\"active\">Sign in</a>\n    <a *ngIf=\"!signIn\" routerLink=\"/signup\" routerLinkActive=\"active\">Register</a>\n    <a routerLink=\"/recom\" class=\"show-off\" routerLinkActive=\"active\">Recommendations</a>\n    <a routerLink=\"/discover\" class=\"show-off\" routerLinkActive=\"active\">Discover\n      &nbsp;<sup><i class=\"fa fa-bolt\" aria-hidden=\"true\"></i></sup>\n    </a>\n\n    <div class=\"container\" id=\"haxinfo\">\n      <br>\n      <img width=\"45%\" src=\"/assets/haxer.png\">\n      <p>Version 5.2\n        <br> &copy; 2017-2019 Haxèr, OSS</p>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/header/header.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/header/header.component.ts ***!
  \*******************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
        if (localStorage.getItem("Email") != null) {
            this.signIn = true;
            this.Name = localStorage.getItem("Name");
        }
        else {
            console.log("Not Logged in for personlization");
            this.signIn = false;
        }
    };
    HeaderComponent.prototype.toggNav = function () {
        if (document.getElementById("mySidenav").style.width == "245px") {
            document.getElementById("mySidenav").style.width = "0";
            document.getElementById("overlay").style.display = "none";
        }
        else {
            document.getElementById("mySidenav").style.width = "245px";
            document.getElementById("overlay").style.display = "block";
        }
    };
    HeaderComponent.prototype.closeNav = function () {
        if (document.getElementById("mySidenav").style.width == "245px") {
            document.getElementById("mySidenav").style.width = "0";
            document.getElementById("overlay").style.display = "none";
        }
    };
    HeaderComponent.prototype.logOut = function () {
        localStorage.removeItem("Email");
        localStorage.removeItem("Name");
        localStorage.clear();
        this.signIn = false;
        alert("Successfully logged out!");
        window.location.href = "/";
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/components/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/components/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/components/log-in/log-in.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/log-in/log-in.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\n\tpadding: 0;\n    margin: 0;\n}\n\nhr {\n    display: block;\n    height: 1px;\n    border: 0;\n    border-top: 1px solid #ccc;\n    margin: 1em 0;\n    padding: 0;\n}\n\nbody a {\n\tcolor:red;\n\ttransition: 0.5s all;\n\t-webkit-transition: 0.5s all;\n\t-moz-transition: 0.5s all;\n\t-o-transition: 0.5s all;\n\t-ms-transition: 0.5s all;\n\ttext-decoration: none;\n}\n\nbody a:hover {\n\ttext-decoration: none;\n}\n\nbody a:focus, a:hover {\n\ttext-decoration: none;\n}\n\ninput[type=\"button\"], input[type=\"submit\"] {\n\ttransition: 0.5s all;\n\t-webkit-transition: 0.5s all;\n\t-moz-transition: 0.5s all;\n\t-o-transition: 0.5s all;\n\t-ms-transition: 0.5s all;\n}\n\nh1, h2, h3, h4, h5, h6 {\n\tmargin: 0;\n\tpadding: 0;\n}\n\np {\n\tmargin: 0;\n}\n\nul {\n\tmargin: 0;\n\tpadding: 0;\n}\n\nli {\n\tlist-style-type:none;\n}\n\nlabel {\n\tmargin: 0;\n}\n\na:focus, a:hover {\n\ttext-decoration: none;\n\toutline: none;\n}\n\nbody{\n\t/* background: url('../images/5copy.jpg') no-repeat; */\n    background-size: cover;\n\tmin-height: 100vh;\n}\n\n.agile-login {\n\n\t\tpadding-top: 60px;\n}\n\n.wrapper {\n    max-width: 450px;\n    margin: auto;\n    text-align: center;\n    padding: 3% 0px;\n    background-color: rgba(6, 5, 5, 0.33);\n\twebkit-box-shadow: 10px 3px 66px -19px rgba(0,0,0,0.75);\n    box-shadow: 10px 3px 66px -19px rgba(0,0,0,0.75);\n}\n\n.w3ls-form {\n    display: inline-block;\n    width: 350px;\n    margin: auto;\n    text-align: left;\n}\n\nlabel, input[type=\"text\"],input[type=\"submit\"], input[type=\"password\"]{\n    display: block;\n\t    font-family: 'Source Sans Pro', sans-serif;\n}\n\ninput[type=\"text\"], input[type=\"password\"]{\n    outline: 0;\n    padding: 12px 15px;\n    border-radius: 25px;\n    border: none;\n    background-color: rgba(87, 102, 103, 0.59);\n    color: white;\n\twidth: 100%;\n\tletter-spacing: 1px;\n}\n\n.agile-login h1 {\n    text-align: center;\n    color: #fff;\n    margin-bottom: 2%;\n    font-size: 45px;\n    font-weight: 300;\n    letter-spacing: 5px;\n    text-transform: uppercase;\n}\n\n.wrapper h2 {\n\tmargin-bottom: 30px;\n    text-transform: uppercase;\n    font-size: 26px;\n    color: white;\n    font-weight: 600;\n    letter-spacing: 2px;\n}\n\na.pass {\n    font-size: 15px;\n\t    color: #efbb42;\n\t\tfont-family: 'Source Sans Pro', sans-serif;\n\t\t    letter-spacing: 2px;\n}\n\n.w3ls-form a {\n    display: block;\n    text-align: right;\n\t    margin: 15px 0px;\n}\n\nlabel {\n    margin: 20px 0px 8px 15px;\n    font-size: 13px;\n     color: #fff;\n    font-family: 'Source Sans Pro', sans-serif;\n     text-transform: uppercase;\n\tletter-spacing: 2px;\n}\n\ninput[type=\"submit\"] {\n\tmargin: 20px auto;\n    padding: 9px 60px;\n    border-radius: 25px;\n    font-size: 18px;\n    border: none;\n    background-color: transparent;\n    color: #fff;\n    text-transform: uppercase;\n    outline: 0;\n    border: 1px solid #4f5d61;\n\tcursor: pointer;\n\t    width: 100%;\n\t    letter-spacing: 1px;\t\n}\n\ninput[type=\"submit\"]:hover {\n    color: #fff;\n    background-color:  rgba(0, 245, 255, 0.69);\n}\n\n::-webkit-input-placeholder { /* Chrome/Opera/Safari */\n  color: #ccc6c6;\n}\n\n::-moz-placeholder { /* Firefox 19+ */\n  color: #ccc6c6;\n}\n\n:-ms-input-placeholder { /* IE 10+ */\n  color: #ccc6c6;\n}\n\n:-moz-placeholder { /* Firefox 18- */\n  color: #ccc6c6;\n}\n\n.agile-icons {\n    padding: 3% 0px;\n}\n\nspan.fa.fa-google:hover {\n    background-color: #00b6f1;\n    color: white;\n}\n\nspan.fa.fa-facebook:hover {\n    background-color: #3b5998;\n    color: white;\n}\n\n.agile-icons span.fa {\n\tfont-size: 12px;\n    margin: auto 10px;\n    color: #fff;\n    width: 32px;\n    height: 32px;\n    line-height: 32px;\n    border-radius: 50%;\n    background-color: rgba(243, 249, 249, 0.22);\n}\n\n/* responsive */\n\n@media screen and (max-width: 568px){\n\t.agile-login h1 {\n\t\t    font-size: 40px;\n\t\t\t\n\t}\n}\n\n@media screen and (max-width: 480px){\n\tbody{\n\t\tbackground-position: center;\n\t}\n\t.agile-login {\n    padding-top: 35px;\n}\n\t.agile-login h1 {\n    font-size: 35px;\n    letter-spacing: 4px;\n}\n\t.wrapper h2 {\n    font-size: 26px;\n\n}\n/* .wrapper {\n    width: 370px;\n} */\n\n}\n\n@media screen and (max-width: 414px){\n\t.agile-login h1 {\n    font-size: 30px;\n\tletter-spacing: 3px;\n\t    margin-bottom: 6%;\n}\n/* .wrapper {\n    width: 320px;\n} */\n.w3ls-form {\n\t    width: 300px;\n}\n.wrapper h2 {\n    font-size: 20px;    \n    margin-bottom: 15px;\n}\t\n}\n\n@media screen and (max-width: 375px){\n\t.agile-login h1 {\n    font-size: 29px;\n}\n\tinput[type=\"text\"],input[type=\"password\"] {\n\t\twidth: 100%;\n\t}\n\tlabel {\n    margin: 20px 0px 5px 10px;\n    font-size: 13px;\n    color: #fff;\n\t}\n}\n\n@media screen and (max-width: 320px){\n.w3ls-form {\n    width: 270px;\n}\n.agile-login h1 {\n    font-size: 23px;\n}\n/* .wrapper {\n    width: 280px;\n} */\n.wrapper h2 {\n    font-size: 16px;\n    margin-bottom: 10px;\n}\ninput[type=\"submit\"] {\n    margin: 10px auto;\n\t    padding: 8px 60px;\n}\n.agile-login {\n    padding-top: 30px;\n}\nlabel {\n    margin: 15px 0px 5px 10px;\n}\ninput[type=\"text\"], input[type=\"password\"]{\n    padding: 10px 15px;\n}\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9sb2ctaW4vbG9nLWluLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Q0FDQyxVQUFVO0lBQ1AsU0FBUztBQUNiOztBQUVBO0lBQ0ksY0FBYztJQUNkLFdBQVc7SUFDWCxTQUFTO0lBQ1QsMEJBQTBCO0lBQzFCLGFBQWE7SUFDYixVQUFVO0FBQ2Q7O0FBRUE7Q0FDQyxTQUFTO0NBQ1Qsb0JBQW9CO0NBQ3BCLDRCQUE0QjtDQUM1Qix5QkFBeUI7Q0FDekIsdUJBQXVCO0NBQ3ZCLHdCQUF3QjtDQUN4QixxQkFBcUI7QUFDdEI7O0FBQ0E7Q0FDQyxxQkFBcUI7QUFDdEI7O0FBQ0E7Q0FDQyxxQkFBcUI7QUFDdEI7O0FBQ0E7Q0FDQyxvQkFBb0I7Q0FDcEIsNEJBQTRCO0NBQzVCLHlCQUF5QjtDQUN6Qix1QkFBdUI7Q0FDdkIsd0JBQXdCO0FBQ3pCOztBQUNBO0NBQ0MsU0FBUztDQUNULFVBQVU7QUFDWDs7QUFDQTtDQUNDLFNBQVM7QUFDVjs7QUFDQTtDQUNDLFNBQVM7Q0FDVCxVQUFVO0FBQ1g7O0FBQ0E7Q0FDQyxvQkFBb0I7QUFDckI7O0FBQ0E7Q0FDQyxTQUFTO0FBQ1Y7O0FBQ0E7Q0FDQyxxQkFBcUI7Q0FDckIsYUFBYTtBQUNkOztBQUVBO0NBQ0Msc0RBQXNEO0lBQ25ELHNCQUFzQjtDQUN6QixpQkFBaUI7QUFDbEI7O0FBQ0E7O0VBRUUsaUJBQWlCO0FBQ25COztBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLHFDQUFxQztDQUN4Qyx1REFBdUQ7SUFFcEQsZ0RBQWdEO0FBQ3BEOztBQUNBO0lBQ0kscUJBQXFCO0lBQ3JCLFlBQVk7SUFDWixZQUFZO0lBQ1osZ0JBQWdCO0FBQ3BCOztBQUNBO0lBQ0ksY0FBYztLQUNiLDBDQUEwQztBQUMvQzs7QUFDQTtJQUNJLFVBQVU7SUFDVixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLFlBQVk7SUFDWiwwQ0FBMEM7SUFDMUMsWUFBWTtDQUNmLFdBQVc7Q0FDWCxtQkFBbUI7QUFDcEI7O0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQix5QkFBeUI7QUFDN0I7O0FBQ0E7Q0FDQyxtQkFBbUI7SUFDaEIseUJBQXlCO0lBQ3pCLGVBQWU7SUFDZixZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLG1CQUFtQjtBQUN2Qjs7QUFDQTtJQUNJLGVBQWU7S0FDZCxjQUFjO0VBQ2pCLDBDQUEwQztNQUN0QyxtQkFBbUI7QUFDekI7O0FBQ0E7SUFDSSxjQUFjO0lBQ2QsaUJBQWlCO0tBQ2hCLGdCQUFnQjtBQUNyQjs7QUFFQztJQUNHLHlCQUF5QjtJQUN6QixlQUFlO0tBQ2QsV0FBVztJQUNaLDBDQUEwQztLQUN6Qyx5QkFBeUI7Q0FDN0IsbUJBQW1CO0FBQ3BCOztBQUNBO0NBQ0MsaUJBQWlCO0lBQ2QsaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsWUFBWTtJQUNaLDZCQUE2QjtJQUM3QixXQUFXO0lBQ1gseUJBQXlCO0lBQ3pCLFVBQVU7SUFDVix5QkFBeUI7Q0FDNUIsZUFBZTtLQUNYLFdBQVc7S0FDWCxtQkFBbUI7QUFDeEI7O0FBQ0E7SUFDSSxXQUFXO0lBQ1gsMENBQTBDO0FBQzlDOztBQUNBLDhCQUE4Qix3QkFBd0I7RUFDcEQsY0FBYztBQUNoQjs7QUFDQSxxQkFBcUIsZ0JBQWdCO0VBQ25DLGNBQWM7QUFDaEI7O0FBQ0EseUJBQXlCLFdBQVc7RUFDbEMsY0FBYztBQUNoQjs7QUFDQSxvQkFBb0IsZ0JBQWdCO0VBQ2xDLGNBQWM7QUFDaEI7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUNBO0lBQ0kseUJBQXlCO0lBQ3pCLFlBQVk7QUFDaEI7O0FBQ0E7SUFDSSx5QkFBeUI7SUFDekIsWUFBWTtBQUNoQjs7QUFDQTtDQUNDLGVBQWU7SUFDWixpQkFBaUI7SUFDakIsV0FBVztJQUNYLFdBQVc7SUFDWCxZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQiwyQ0FBMkM7QUFDL0M7O0FBQ0EsZUFBZTs7QUFDZjtDQUNDO01BQ0ssZUFBZTs7Q0FFcEI7QUFDRDs7QUFFQTtDQUNDO0VBQ0MsMkJBQTJCO0NBQzVCO0NBQ0E7SUFDRyxpQkFBaUI7QUFDckI7Q0FDQztJQUNHLGVBQWU7SUFDZixtQkFBbUI7QUFDdkI7Q0FDQztJQUNHLGVBQWU7O0FBRW5CO0FBQ0E7O0dBRUc7O0FBRUg7O0FBQ0E7Q0FDQztJQUNHLGVBQWU7Q0FDbEIsbUJBQW1CO0tBQ2YsaUJBQWlCO0FBQ3RCO0FBQ0E7O0dBRUc7QUFDSDtLQUNLLFlBQVk7QUFDakI7QUFDQTtJQUNJLGVBQWU7SUFDZixtQkFBbUI7QUFDdkI7QUFDQTs7QUFFQTtDQUNDO0lBQ0csZUFBZTtBQUNuQjtDQUNDO0VBQ0MsV0FBVztDQUNaO0NBQ0E7SUFDRyx5QkFBeUI7SUFDekIsZUFBZTtJQUNmLFdBQVc7Q0FDZDtBQUNEOztBQUVBO0FBQ0E7SUFDSSxZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxlQUFlO0FBQ25CO0FBQ0E7O0dBRUc7QUFDSDtJQUNJLGVBQWU7SUFDZixtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLGlCQUFpQjtLQUNoQixpQkFBaUI7QUFDdEI7QUFDQTtJQUNJLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0kseUJBQXlCO0FBQzdCO0FBQ0E7SUFDSSxrQkFBa0I7QUFDdEI7QUFDQSIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbG9nLWluL2xvZy1pbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYm9keSB7XG5cdHBhZGRpbmc6IDA7XG4gICAgbWFyZ2luOiAwO1xufVxuXG5ociB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgaGVpZ2h0OiAxcHg7XG4gICAgYm9yZGVyOiAwO1xuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjY2NjO1xuICAgIG1hcmdpbjogMWVtIDA7XG4gICAgcGFkZGluZzogMDtcbn1cblxuYm9keSBhIHtcblx0Y29sb3I6cmVkO1xuXHR0cmFuc2l0aW9uOiAwLjVzIGFsbDtcblx0LXdlYmtpdC10cmFuc2l0aW9uOiAwLjVzIGFsbDtcblx0LW1vei10cmFuc2l0aW9uOiAwLjVzIGFsbDtcblx0LW8tdHJhbnNpdGlvbjogMC41cyBhbGw7XG5cdC1tcy10cmFuc2l0aW9uOiAwLjVzIGFsbDtcblx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuYm9keSBhOmhvdmVyIHtcblx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuYm9keSBhOmZvY3VzLCBhOmhvdmVyIHtcblx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuaW5wdXRbdHlwZT1cImJ1dHRvblwiXSwgaW5wdXRbdHlwZT1cInN1Ym1pdFwiXSB7XG5cdHRyYW5zaXRpb246IDAuNXMgYWxsO1xuXHQtd2Via2l0LXRyYW5zaXRpb246IDAuNXMgYWxsO1xuXHQtbW96LXRyYW5zaXRpb246IDAuNXMgYWxsO1xuXHQtby10cmFuc2l0aW9uOiAwLjVzIGFsbDtcblx0LW1zLXRyYW5zaXRpb246IDAuNXMgYWxsO1xufVxuaDEsIGgyLCBoMywgaDQsIGg1LCBoNiB7XG5cdG1hcmdpbjogMDtcblx0cGFkZGluZzogMDtcbn1cbnAge1xuXHRtYXJnaW46IDA7XG59XG51bCB7XG5cdG1hcmdpbjogMDtcblx0cGFkZGluZzogMDtcbn1cbmxpIHtcblx0bGlzdC1zdHlsZS10eXBlOm5vbmU7XG59XG5sYWJlbCB7XG5cdG1hcmdpbjogMDtcbn1cbmE6Zm9jdXMsIGE6aG92ZXIge1xuXHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XG5cdG91dGxpbmU6IG5vbmU7XG59XG5cbmJvZHl7XG5cdC8qIGJhY2tncm91bmQ6IHVybCgnLi4vaW1hZ2VzLzVjb3B5LmpwZycpIG5vLXJlcGVhdDsgKi9cbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuXHRtaW4taGVpZ2h0OiAxMDB2aDtcbn1cbi5hZ2lsZS1sb2dpbiB7XG5cblx0XHRwYWRkaW5nLXRvcDogNjBweDtcbn1cbi53cmFwcGVyIHtcbiAgICBtYXgtd2lkdGg6IDQ1MHB4O1xuICAgIG1hcmdpbjogYXV0bztcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcGFkZGluZzogMyUgMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNiwgNSwgNSwgMC4zMyk7XG5cdHdlYmtpdC1ib3gtc2hhZG93OiAxMHB4IDNweCA2NnB4IC0xOXB4IHJnYmEoMCwwLDAsMC43NSk7XG4gICAgLW1vei1ib3gtc2hhZG93OiAxMHB4IDNweCA2NnB4IC0xOXB4IHJnYmEoMCwwLDAsMC43NSk7XG4gICAgYm94LXNoYWRvdzogMTBweCAzcHggNjZweCAtMTlweCByZ2JhKDAsMCwwLDAuNzUpO1xufVxuLnczbHMtZm9ybSB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHdpZHRoOiAzNTBweDtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbn1cbmxhYmVsLCBpbnB1dFt0eXBlPVwidGV4dFwiXSxpbnB1dFt0eXBlPVwic3VibWl0XCJdLCBpbnB1dFt0eXBlPVwicGFzc3dvcmRcIl17XG4gICAgZGlzcGxheTogYmxvY2s7XG5cdCAgICBmb250LWZhbWlseTogJ1NvdXJjZSBTYW5zIFBybycsIHNhbnMtc2VyaWY7XG59XG5pbnB1dFt0eXBlPVwidGV4dFwiXSwgaW5wdXRbdHlwZT1cInBhc3N3b3JkXCJde1xuICAgIG91dGxpbmU6IDA7XG4gICAgcGFkZGluZzogMTJweCAxNXB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoODcsIDEwMiwgMTAzLCAwLjU5KTtcbiAgICBjb2xvcjogd2hpdGU7XG5cdHdpZHRoOiAxMDAlO1xuXHRsZXR0ZXItc3BhY2luZzogMXB4O1xufVxuLmFnaWxlLWxvZ2luIGgxIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgbWFyZ2luLWJvdHRvbTogMiU7XG4gICAgZm9udC1zaXplOiA0NXB4O1xuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDVweDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuLndyYXBwZXIgaDIge1xuXHRtYXJnaW4tYm90dG9tOiAzMHB4O1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgZm9udC1zaXplOiAyNnB4O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGxldHRlci1zcGFjaW5nOiAycHg7XG59XG5hLnBhc3Mge1xuICAgIGZvbnQtc2l6ZTogMTVweDtcblx0ICAgIGNvbG9yOiAjZWZiYjQyO1xuXHRcdGZvbnQtZmFtaWx5OiAnU291cmNlIFNhbnMgUHJvJywgc2Fucy1zZXJpZjtcblx0XHQgICAgbGV0dGVyLXNwYWNpbmc6IDJweDtcbn1cbi53M2xzLWZvcm0gYSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG5cdCAgICBtYXJnaW46IDE1cHggMHB4O1xufVxuXG4gbGFiZWwge1xuICAgIG1hcmdpbjogMjBweCAwcHggOHB4IDE1cHg7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgICBjb2xvcjogI2ZmZjtcbiAgICBmb250LWZhbWlseTogJ1NvdXJjZSBTYW5zIFBybycsIHNhbnMtc2VyaWY7XG4gICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG5cdGxldHRlci1zcGFjaW5nOiAycHg7XG59XG5pbnB1dFt0eXBlPVwic3VibWl0XCJdIHtcblx0bWFyZ2luOiAyMHB4IGF1dG87XG4gICAgcGFkZGluZzogOXB4IDYwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMjVweDtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgb3V0bGluZTogMDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjNGY1ZDYxO1xuXHRjdXJzb3I6IHBvaW50ZXI7XG5cdCAgICB3aWR0aDogMTAwJTtcblx0ICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XHRcbn1cbmlucHV0W3R5cGU9XCJzdWJtaXRcIl06aG92ZXIge1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICByZ2JhKDAsIDI0NSwgMjU1LCAwLjY5KTtcbn1cbjo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7IC8qIENocm9tZS9PcGVyYS9TYWZhcmkgKi9cbiAgY29sb3I6ICNjY2M2YzY7XG59XG46Oi1tb3otcGxhY2Vob2xkZXIgeyAvKiBGaXJlZm94IDE5KyAqL1xuICBjb2xvcjogI2NjYzZjNjtcbn1cbjotbXMtaW5wdXQtcGxhY2Vob2xkZXIgeyAvKiBJRSAxMCsgKi9cbiAgY29sb3I6ICNjY2M2YzY7XG59XG46LW1vei1wbGFjZWhvbGRlciB7IC8qIEZpcmVmb3ggMTgtICovXG4gIGNvbG9yOiAjY2NjNmM2O1xufVxuXG4uYWdpbGUtaWNvbnMge1xuICAgIHBhZGRpbmc6IDMlIDBweDtcbn1cbnNwYW4uZmEuZmEtZ29vZ2xlOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDBiNmYxO1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cbnNwYW4uZmEuZmEtZmFjZWJvb2s6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMzYjU5OTg7XG4gICAgY29sb3I6IHdoaXRlO1xufVxuLmFnaWxlLWljb25zIHNwYW4uZmEge1xuXHRmb250LXNpemU6IDEycHg7XG4gICAgbWFyZ2luOiBhdXRvIDEwcHg7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgd2lkdGg6IDMycHg7XG4gICAgaGVpZ2h0OiAzMnB4O1xuICAgIGxpbmUtaGVpZ2h0OiAzMnB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI0MywgMjQ5LCAyNDksIDAuMjIpO1xufVxuLyogcmVzcG9uc2l2ZSAqL1xuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTY4cHgpe1xuXHQuYWdpbGUtbG9naW4gaDEge1xuXHRcdCAgICBmb250LXNpemU6IDQwcHg7XG5cdFx0XHRcblx0fVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0ODBweCl7XG5cdGJvZHl7XG5cdFx0YmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuXHR9XG5cdC5hZ2lsZS1sb2dpbiB7XG4gICAgcGFkZGluZy10b3A6IDM1cHg7XG59XG5cdC5hZ2lsZS1sb2dpbiBoMSB7XG4gICAgZm9udC1zaXplOiAzNXB4O1xuICAgIGxldHRlci1zcGFjaW5nOiA0cHg7XG59XG5cdC53cmFwcGVyIGgyIHtcbiAgICBmb250LXNpemU6IDI2cHg7XG5cbn1cbi8qIC53cmFwcGVyIHtcbiAgICB3aWR0aDogMzcwcHg7XG59ICovXG5cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQxNHB4KXtcblx0LmFnaWxlLWxvZ2luIGgxIHtcbiAgICBmb250LXNpemU6IDMwcHg7XG5cdGxldHRlci1zcGFjaW5nOiAzcHg7XG5cdCAgICBtYXJnaW4tYm90dG9tOiA2JTtcbn1cbi8qIC53cmFwcGVyIHtcbiAgICB3aWR0aDogMzIwcHg7XG59ICovXG4udzNscy1mb3JtIHtcblx0ICAgIHdpZHRoOiAzMDBweDtcbn1cbi53cmFwcGVyIGgyIHtcbiAgICBmb250LXNpemU6IDIwcHg7ICAgIFxuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XG59XHRcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzc1cHgpe1xuXHQuYWdpbGUtbG9naW4gaDEge1xuICAgIGZvbnQtc2l6ZTogMjlweDtcbn1cblx0aW5wdXRbdHlwZT1cInRleHRcIl0saW5wdXRbdHlwZT1cInBhc3N3b3JkXCJdIHtcblx0XHR3aWR0aDogMTAwJTtcblx0fVxuXHRsYWJlbCB7XG4gICAgbWFyZ2luOiAyMHB4IDBweCA1cHggMTBweDtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgY29sb3I6ICNmZmY7XG5cdH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzIwcHgpe1xuLnczbHMtZm9ybSB7XG4gICAgd2lkdGg6IDI3MHB4O1xufVxuLmFnaWxlLWxvZ2luIGgxIHtcbiAgICBmb250LXNpemU6IDIzcHg7XG59XG4vKiAud3JhcHBlciB7XG4gICAgd2lkdGg6IDI4MHB4O1xufSAqL1xuLndyYXBwZXIgaDIge1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuaW5wdXRbdHlwZT1cInN1Ym1pdFwiXSB7XG4gICAgbWFyZ2luOiAxMHB4IGF1dG87XG5cdCAgICBwYWRkaW5nOiA4cHggNjBweDtcbn1cbi5hZ2lsZS1sb2dpbiB7XG4gICAgcGFkZGluZy10b3A6IDMwcHg7XG59XG5sYWJlbCB7XG4gICAgbWFyZ2luOiAxNXB4IDBweCA1cHggMTBweDtcbn1cbmlucHV0W3R5cGU9XCJ0ZXh0XCJdLCBpbnB1dFt0eXBlPVwicGFzc3dvcmRcIl17XG4gICAgcGFkZGluZzogMTBweCAxNXB4O1xufVxufVxuIl19 */"

/***/ }),

/***/ "./src/app/components/log-in/log-in.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/log-in/log-in.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p style=\"margin-top: 3%\"></p>\n<span class=\"agile-login\">\n  <div class=\"wrapper\">\n    <h3>SIGN IN</h3>\n    <div class=\"w3ls-form\">\n      <form (ngSubmit)=\"sendReq(em.value,pass.value)\">\n        <label>Email Address</label>\n        <input type=\"text\" name=\"email\" placeholder=\"Email Address\" required #em/>\n        <label>Password</label>\n        <input type=\"password\" name=\"password\" placeholder=\"Password\" required #pass/>\n        <a href=\"#\" class=\"pass\" (click)=\"forgot()\">Forgot Password ?</a>\n        <input type=\"submit\" value=\"Log In\" />\n      </form>\n    </div>\n    <div class=\"w3ls-form\">\n      <hr>\n      <input routerLink=\"/signup\" routerLinkActive=\"active\" type=\"submit\" value=\"Register\" />\n    </div>\n  </div>\n  <br>\n</span>"

/***/ }),

/***/ "./src/app/components/log-in/log-in.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/log-in/log-in.component.ts ***!
  \*******************************************************/
/*! exports provided: LogInComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogInComponent", function() { return LogInComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LogInComponent = /** @class */ (function () {
    function LogInComponent(http, router) {
        this.http = http;
        this.router = router;
    }
    LogInComponent.prototype.ngOnInit = function () {
    };
    LogInComponent.prototype.ngOnDestroy = function () {
    };
    LogInComponent.prototype.forgot = function () {
        alert("Feature currently in beta");
    };
    LogInComponent.prototype.sendReq = function (email, pass) {
        var _this = this;
        this.loginstr = "/loginUser?email=" + email + "&pass=" + pass;
        this.http.get(this.loginstr).subscribe(function (data) {
            _this.data = data; // Assign local to global
            console.log(data);
            if (data.length == 1) {
                console.log(data[0].email + " " + data[0].password);
                alert("Welcome " + data[0].uname + " !");
                //Initialize local Storage for Email
                localStorage.setItem("Email", "" + _this.data[0].email);
                localStorage.setItem("Name", "" + _this.data[0].uname);
                localStorage.setItem("Password", "" + _this.data[0].password);
                window.location.href = "/";
            }
            else {
                alert("The username or password is invalid !");
            }
        });
    };
    LogInComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-log-in',
            template: __webpack_require__(/*! ./log-in.component.html */ "./src/app/components/log-in/log-in.component.html"),
            styles: [__webpack_require__(/*! ./log-in.component.css */ "./src/app/components/log-in/log-in.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], LogInComponent);
    return LogInComponent;
}());



/***/ }),

/***/ "./src/app/components/movie-detail/movie-detail.component.css":
/*!********************************************************************!*\
  !*** ./src/app/components/movie-detail/movie-detail.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "p {\n    color: white;\n}\n\np i {\n    margin-left:10px !important;\n    color:white;\n  }\n\na {\n    text-decoration: none;\n    display: inline-block;\n    padding: 8px 16px;\n    color: white !important;\n    border: 1px;\n  }\n\na:hover {\n    background-color: black;\n    color: white;\n  }\n\nh1{\n    color: white;\n  }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9tb3ZpZS1kZXRhaWwvbW92aWUtZGV0YWlsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksMkJBQTJCO0lBQzNCLFdBQVc7RUFDYjs7QUFFQTtJQUNFLHFCQUFxQjtJQUNyQixxQkFBcUI7SUFDckIsaUJBQWlCO0lBQ2pCLHVCQUF1QjtJQUN2QixXQUFXO0VBQ2I7O0FBRUE7SUFDRSx1QkFBdUI7SUFDdkIsWUFBWTtFQUNkOztBQUVBO0lBQ0UsWUFBWTtFQUNkIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9tb3ZpZS1kZXRhaWwvbW92aWUtZGV0YWlsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJwIHtcbiAgICBjb2xvcjogd2hpdGU7XG59XG5cbnAgaSB7XG4gICAgbWFyZ2luLWxlZnQ6MTBweCAhaW1wb3J0YW50O1xuICAgIGNvbG9yOndoaXRlO1xuICB9XG5cbiAgYSB7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBwYWRkaW5nOiA4cHggMTZweDtcbiAgICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbiAgICBib3JkZXI6IDFweDtcbiAgfVxuICBcbiAgYTpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gICAgY29sb3I6IHdoaXRlO1xuICB9XG5cbiAgaDF7XG4gICAgY29sb3I6IHdoaXRlO1xuICB9XG4iXX0= */"

/***/ }),

/***/ "./src/app/components/movie-detail/movie-detail.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/movie-detail/movie-detail.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron\" id=\"jumbo\">\n  <div *ngIf=\"movie_details\" class=\"container\">\n    <h1 class=\"display-4\">{{movie_details.original_title}}</h1>\n    <p *ngIf=\"movie_details.tagline\">{{movie_details.tagline}}</p>\n    <p class=\"lead\">\n      <i style=\"margin-left: 0px !important;\" class=\"fa fa-calendar\" aria-hidden=\"true\"></i> {{movie_details.release_date || 'N/A'}}\n      <i class=\"fa fa-imdb\" aria-hidden=\"true\"></i> {{movie_details.vote_average || 'N/A'}}\n      <i class=\"fa fa-users\" aria-hidden=\"true\"></i>{{movie_details.vote_count || 'N/A'}}\n      <i class=\"fa fa-rocket\" aria-hidden=\"true\"></i>{{movie_details.popularity || 'N/A'}}\n      <i class=\"fa fa-language\" aria-hidden=\"true\"></i>{{rev_lang_obj[movie_details.original_language] || 'N/A'}}\n      <i class=\"fa fa-hourglass\" aria-hidden=\"true\"></i> {{movie_details.runtime || 'N/A'}} mintues\n      <i class=\"fa fa-eye fa-lg\" aria-hidden=\"true\"></i>\n      <span *ngIf=\"movie_details.adult; else Audience\">Restricted</span>\n      <ng-template #Audience>\n        Unrestricted\n      </ng-template>\n      <br>\n      <i style=\"margin-left: 0px !important;\">\n        <span style=\"color: #666; font-size: 12px;\" *ngFor=\"let item of movie_details.genres; let i = index\">\n          <span *ngIf=\"i < movie_details.genres.length-1;else fullstop2\">&nbsp;{{gen[item.id]}},</span>\n          <ng-template #fullstop2>&nbsp;{{gen[item.id]}}.</ng-template>\n        </span>\n      </i>\n    </p>\n    <hr class=\"my-4\">\n    <p>\n      <b>Cast: </b>\n      <span *ngFor=\"let cast of movie_details.credits.cast.slice(0,5);let i = index\">\n        <span *ngIf=\"i < movie_details.credits.cast.slice(0,5).length-1; else fullstop\">&nbsp;{{cast.name}},</span>\n        <ng-template #fullstop>&nbsp;{{cast.name}}.</ng-template>\n      </span>\n    </p>\n    <p *ngIf=\"movie_details.credits.crew.length>1\">\n      <b>Main Crew:</b>\n      <span *ngFor=\"let main of movie_details.credits.crew.slice(0,4);let i = index\">\n        <span *ngIf=\"i < movie_details.credits.crew.slice(0,4).length-1; else fullstop\">&nbsp;{{main.name}} ({{main.job}}),</span>\n        <ng-template #fullstop>&nbsp;{{main.name}} ({{main.job}}).</ng-template>\n      </span>\n    </p>\n    <p *ngIf=\"movie_details.belongs_to_collection\">\n      <b>Collection:</b>&nbsp;{{movie_details.belongs_to_collection.name}}</p>\n    <p *ngIf=\"movie_details.production_companies.length>1\">\n      <b>Production Company:</b>&nbsp;{{movie_details.production_companies[0].name}}, {{movie_details.production_companies[0].origin_country}}</p>\n\n    <p>{{movie_details.overview}}</p>\n    <div style=\"text-align: center\">\n      <a *ngIf=\"movie_details.homepage\" href=\"{{movie_details.homepage}}\" target=\"_blank\">Movie Homepage</a>\n      <br>\n      <span *ngIf=\"movie_details.videos.results.length>1\">\n      <a *ngIf=\"active_trailer!=movie_details.id; else show\" id=\"{{movie_details.id}}\" (click)=\"toggleTrailer($event)\">Show Trailer</a></span>\n      <br>\n      <ng-template #show>\n        <a id=\"trailer-{{movie_details.id}}\" (click)=\"toggleTrailer($event)\">Hide Trailer</a>\n        <br>\n        <br>\n        <iframe width=\"420\" height=\"345\" [src]=\"trailer_key|safe\" allowfullscreen>\n        </iframe>\n        <br>\n      </ng-template>\n      <i style=\"margin-right: 10px; color: white\" class=\"fa fa-search\" aria-hidden=\"true\"></i>\n      <a href=\"https://www.netflix.com/search?q={{movie_details.original_title}}\" target=\"_blank\">Netflix</a>\n      <a href=\"https://www.primevideo.com/region/eu/search/ref=atv_nb_sr?phrase={{movie_details.original_title}}\" target=\"_blank\">\n        <i class=\"fa fa-play-circle\" aria-hidden=\"true\"></i> Prime Video</a>\n      <a href=\"http://solarmoviesc.com/search/{{movie_details.original_title}}.html\" target=\"_blank\">SolarMovie</a>\n      <br>\n      <br>\n\n      <a value=\"like\" *ngIf=\"like_status_data[movie_details.id]; else liked_content_empty\" (click)=\"likeMovie(this.movie_details,$event)\">\n        <i *ngIf=\"like_status_data[movie_details.id].like_status;else liked_content\" class=\"fa fa-thumbs-up fa-lg\" aria-hidden=\"true\"></i>\n        <ng-template #liked_content>\n          <i class=\"fa fa-thumbs-o-up fa-lg\" aria-hidden=\"true\"></i>\n        </ng-template>\n      </a>\n      <ng-template #liked_content_empty>\n        <a value=\"like\" (click)=\"likeMovie(this.movie_details,$event)\">\n          <i class=\"fa fa-thumbs-o-up fa-lg\" aria-hidden=\"true\"></i>\n        </a>\n      </ng-template>\n      <a value=\"dislike\" *ngIf=\"like_status_data[movie_details.id]; else disliked_content_empty\" (click)=\"dislikeMovie(this.movie_details,$event)\">\n        <i *ngIf=\"like_status_data[movie_details.id].like_status==false;else disliked_content\" class=\"fa fa-thumbs-down fa-lg\" aria-hidden=\"true\"></i>\n        <ng-template #disliked_content>\n          <i class=\"fa fa-thumbs-o-down fa-lg\" aria-hidden=\"true\"></i>\n        </ng-template>\n      </a>\n      <ng-template #disliked_content_empty>\n        <a value=\"dislike\" (click)=\"dislikeMovie(this.movie_details,$event)\">\n          <i class=\"fa fa-thumbs-o-down fa-lg\" aria-hidden=\"true\"></i>\n        </a>\n      </ng-template>\n\n      <a *ngIf=\"bookmarked_data[movie_details.id]; else list_content_empty\" value=\"addList\" (click)=\"addList(this.movie_details,$event)\">\n        <i *ngIf=\"bookmarked_data[movie_details.id].list_status;else list_content\" class=\"fa fa-bookmark fa-lg\" aria-hidden=\"true\"></i>\n        <ng-template #list_content>\n          <i class=\"fa fa-bookmark-o fa-lg\" aria-hidden=\"true\"></i>\n        </ng-template>\n      </a>\n      <ng-template #list_content_empty>\n        <a value=\"addList\" (click)=\"addList(this.movie_details,$event)\">\n          <i class=\"fa fa-bookmark-o fa-lg\" aria-hidden=\"true\"></i>\n        </a>\n      </ng-template>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/movie-detail/movie-detail.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/movie-detail/movie-detail.component.ts ***!
  \*******************************************************************/
/*! exports provided: MovieDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovieDetailComponent", function() { return MovieDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _user_user_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../user/user.component */ "./src/app/components/user/user.component.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MovieDetailComponent = /** @class */ (function (_super) {
    __extends(MovieDetailComponent, _super);
    function MovieDetailComponent(active_route, http_movie_detail, router, http_movie_detail_getData, http_movie_detail_sendTrackingData, http_movie_detail_sendAdditionalData) {
        var _this = _super.call(this, http_movie_detail, http_movie_detail_sendAdditionalData, http_movie_detail_sendTrackingData, http_movie_detail_getData) || this;
        _this.active_route = active_route;
        _this.http_movie_detail = http_movie_detail;
        _this.router = router;
        _this.http_movie_detail_getData = http_movie_detail_getData;
        _this.http_movie_detail_sendTrackingData = http_movie_detail_sendTrackingData;
        _this.http_movie_detail_sendAdditionalData = http_movie_detail_sendAdditionalData;
        _this.rev_lang_obj = { 'xx': 'No Language', 'aa': 'Afar', 'af': 'Afrikaans', 'ak': 'Akan', 'an': 'Aragonese', 'as': 'Assamese', 'av': 'Avaric', 'ae': 'Avestan', 'ay': 'Aymara', 'az': 'Azerbaijani', 'ba': 'Bashkir', 'bm': 'Bambara', 'bi': 'Bislama', 'bo': 'Tibetan', 'br': 'Breton', 'ca': 'Catalan', 'cs': 'Czech', 'ce': 'Chechen', 'cu': 'Slavic', 'cv': 'Chuvash', 'kw': 'Cornish', 'co': 'Corsican', 'cr': 'Cree', 'cy': 'Welsh', 'da': 'Danish', 'de': 'German', 'dv': 'Divehi', 'dz': 'Dzongkha', 'eo': 'Esperanto', 'et': 'Estonian', 'eu': 'Basque', 'fo': 'Faroese', 'fj': 'Fijian', 'fi': 'Finnish', 'fr': 'French', 'fy': 'Frisian', 'ff': 'Fulah', 'gd': 'Gaelic', 'ga': 'Irish', 'gl': 'Gallegan', 'gv': 'Manx', 'gn': 'Guarani', 'gu': 'Gujarati', 'ht': 'Haitian; Haitian Creole', 'ha': 'Hausa', 'sh': 'Serbo-Croatian', 'hz': 'Herero', 'ho': 'Hiri Motu', 'hr': 'Croatian', 'hu': 'Hungarian', 'ig': 'Igbo', 'io': 'Ido', 'ii': 'Yi', 'iu': 'Inuktitut', 'ie': 'Interlingue', 'ia': 'Interlingua', 'id': 'Indonesian', 'ik': 'Inupiaq', 'is': 'Icelandic', 'it': 'Italian', 'jv': 'Javanese', 'ja': 'Japanese', 'kl': 'Kalaallisut', 'kn': 'Kannada', 'ks': 'Kashmiri', 'kr': 'Kanuri', 'kk': 'Kazakh', 'km': 'Khmer', 'ki': 'Kikuyu', 'rw': 'Kinyarwanda', 'ky': 'Kirghiz', 'kv': 'Komi', 'kg': 'Kongo', 'ko': 'Korean', 'kj': 'Kuanyama', 'ku': 'Kurdish', 'lo': 'Lao', 'la': 'Latin', 'lv': 'Latvian', 'li': 'Limburgish', 'ln': 'Lingala', 'lt': 'Lithuanian', 'lb': 'Letzeburgesch', 'lu': 'Luba-Katanga', 'lg': 'Ganda', 'mh': 'Marshall', 'ml': 'Malayalam', 'mr': 'Marathi', 'mg': 'Malagasy', 'mt': 'Maltese', 'mo': 'Moldavian', 'mn': 'Mongolian', 'mi': 'Maori', 'ms': 'Malay', 'my': 'Burmese', 'na': 'Nauru', 'nv': 'Navajo', 'nd': 'Ndebele', 'ng': 'Ndonga', 'ne': 'Nepali', 'nl': 'Dutch', 'nn': 'Norwegian Nynorsk', 'nb': 'Norwegian Bokmål', 'no': 'Norwegian', 'ny': 'Chichewa; Nyanja', 'oc': 'Occitan', 'oj': 'Ojibwa', 'or': 'Oriya', 'om': 'Oromo', 'os': 'Ossetian; Ossetic', 'pi': 'Pali', 'pl': 'Polish', 'pt': 'Portuguese', 'qu': 'Quechua', 'rm': 'Raeto-Romance', 'ro': 'Romanian', 'rn': 'Rundi', 'ru': 'Russian', 'sg': 'Sango', 'sa': 'Sanskrit', 'si': 'Sinhalese', 'sk': 'Slovak', 'sl': 'Slovenian', 'se': 'Northern Sami', 'sm': 'Samoan', 'sn': 'Shona', 'sd': 'Sindhi', 'so': 'Somali', 'st': 'Sotho', 'es': 'Spanish', 'sq': 'Albanian', 'sc': 'Sardinian', 'sr': 'Serbian', 'ss': 'Swati', 'su': 'Sundanese', 'sw': 'Swahili', 'sv': 'Swedish', 'ty': 'Tahitian', 'ta': 'Tamil', 'tt': 'Tatar', 'te': 'Telugu', 'tg': 'Tajik', 'tl': 'Tagalog', 'th': 'Thai', 'ti': 'Tigrinya', 'to': 'Tonga', 'tn': 'Tswana', 'ts': 'Tsonga', 'tk': 'Turkmen', 'tr': 'Turkish', 'tw': 'Twi', 'ug': 'Uighur', 'uk': 'Ukrainian', 'ur': 'Urdu', 'uz': 'Uzbek', 've': 'Venda', 'vi': 'Vietnamese', 'vo': 'Volapük', 'wa': 'Walloon', 'wo': 'Wolof', 'xh': 'Xhosa', 'yi': 'Yiddish', 'za': 'Zhuang', 'zu': 'Zulu', 'ab': 'Abkhazian', 'zh': 'Mandarin', 'ps': 'Pushto', 'am': 'Amharic', 'ar': 'Arabic', 'bg': 'Bulgarian', 'cn': 'Cantonese', 'mk': 'Macedonian', 'el': 'Greek', 'fa': 'Persian', 'he': 'Hebrew', 'hi': 'Hindi', 'hy': 'Armenian', 'en': 'English', 'ee': 'Ewe', 'ka': 'Georgian', 'pa': 'Punjabi', 'bn': 'Bengali', 'bs': 'Bosnian', 'ch': 'Chamorro', 'be': 'Belarusian' };
        _this.gen = {
            28: "Action",
            12: "Adventure",
            16: "Animation",
            35: "Comedy",
            80: "Crime",
            99: "Documentary",
            18: "Drama",
            10751: "Family",
            14: "Fantasy",
            36: "History",
            27: "Horror",
            10402: "Music",
            9648: "Mystery",
            10749: "Romance",
            878: "Science Fiction",
            10770: "TV Movie",
            53: "Thriller",
            10752: "War",
            37: "Western",
            10765: "Sci-Fi & Fantasy",
            10768: "War & Politics",
            10767: "Talk",
            10766: "Soap",
            10764: "Reality",
            10763: "News",
            10762: "Kids",
            10759: "Action & Adventure"
        };
        _this.url = '';
        return _this;
    }
    MovieDetailComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
        document.getElementById("body").style.backgroundImage = null;
        document.getElementById("body").style.backgroundColor = '#1A1717';
    };
    MovieDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        localStorage.removeItem("REACTION_DATA");
        localStorage.removeItem("BOOKMARKED_DATA");
        localStorage.removeItem("CLICKED_DATA");
        document.getElementById("jumbo").style.backgroundColor = 'rgba(0,0,0,0.0)';
        this.sub = this.active_route.params.subscribe(function (params) {
            _this.movie_id = +params['id']; // + converts String to int
        }, function (err) {
            _this.router.navigateByUrl('/' + err.statusText);
        });
        if (this.router.url.toString().includes('movie')) {
            this.url = 'https://api.themoviedb.org/3/movie/' + this.movie_id + '?api_key=bd5e7f8161070f86bff1d8da34219f57&language=en-US&append_to_response=videos,credits';
        }
        else {
            this.url = 'https://api.themoviedb.org/3/tv/' + this.movie_id + '?api_key=bd5e7f8161070f86bff1d8da34219f57&language=en-US&append_to_response=videos,credits';
        }
        this.http_movie_detail.get(this.url).subscribe(function (data) {
            _this.movie_details = data;
            if (data.videos.results[0]) {
                _this.trailer_key = 'https://www.youtube.com/embed/' + data.videos.results[0].key;
            }
            console.log(_this.movie_details);
            var bg_url = 'https://image.tmdb.org/t/p/w1280/' + _this.movie_details.backdrop_path;
            document.getElementById("body").style.backgroundImage = "linear-gradient(to right, #000 40%, transparent 58%), url(" + bg_url + ")";
            document.getElementById("body").style.backgroundSize = 'cover';
        }, function (err) {
            _this.router.navigateByUrl('/' + err.statusText);
        });
    };
    MovieDetailComponent.prototype.toggleTrailer = function (event) {
        var id = event.target.id;
        this.active_trailer = parseInt(id);
    };
    MovieDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-movie-detail',
            template: __webpack_require__(/*! ./movie-detail.component.html */ "./src/app/components/movie-detail/movie-detail.component.html"),
            styles: [__webpack_require__(/*! ./movie-detail.component.css */ "./src/app/components/movie-detail/movie-detail.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], MovieDetailComponent);
    return MovieDetailComponent;
}(_user_user_component__WEBPACK_IMPORTED_MODULE_3__["UserComponent"]));



/***/ }),

/***/ "./src/app/components/page-not-found/page-not-found.component.css":
/*!************************************************************************!*\
  !*** ./src/app/components/page-not-found/page-not-found.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h1,p {\n    color: black;\n}\n\n.container {\n    margin: auto !important;\n    width: 50%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wYWdlLW5vdC1mb3VuZC9wYWdlLW5vdC1mb3VuZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2QixVQUFVO0FBQ2QiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3BhZ2Utbm90LWZvdW5kL3BhZ2Utbm90LWZvdW5kLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoMSxwIHtcbiAgICBjb2xvcjogYmxhY2s7XG59XG5cbi5jb250YWluZXIge1xuICAgIG1hcmdpbjogYXV0byAhaW1wb3J0YW50O1xuICAgIHdpZHRoOiA1MCU7XG59Il19 */"

/***/ }),

/***/ "./src/app/components/page-not-found/page-not-found.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/components/page-not-found/page-not-found.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br>\n<br>\n<div class=\"container\">\n  <div class=\"jumbotron\">\n    <h1 class=\"display-4\">Page Not Found :-(</h1>\n    <p class=\"lead\">Error</p>\n    <hr class=\"my-4\">\n    <p>This page isn't available.\n      <br> The link you followed may be broken, or the page may have been removed.\n    </p>\n    <p class=\"lead\">\n      <a class=\"btn btn-dark btn-lg\" routerLink=\"/\" role=\"button\">Back to Home</a>\n    </p>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/page-not-found/page-not-found.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/page-not-found/page-not-found.component.ts ***!
  \***********************************************************************/
/*! exports provided: PageNotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function() { return PageNotFoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PageNotFoundComponent = /** @class */ (function () {
    function PageNotFoundComponent() {
    }
    PageNotFoundComponent.prototype.ngOnInit = function () {
    };
    PageNotFoundComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-page-not-found',
            template: __webpack_require__(/*! ./page-not-found.component.html */ "./src/app/components/page-not-found/page-not-found.component.html"),
            styles: [__webpack_require__(/*! ./page-not-found.component.css */ "./src/app/components/page-not-found/page-not-found.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PageNotFoundComponent);
    return PageNotFoundComponent;
}());



/***/ }),

/***/ "./src/app/components/profile/profile.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/profile/profile.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "label {\n    font-size: 16px;\n    color: black;\n}\n\np, li, td, text{\n    color:black;\n}\n\nfooter {\n    margin-top: 0px !important;\n}\n\ninput {\n    border-top-right-radius: 4px;\n    border-bottom-right-radius: 4px;\n    border-color: white;\n    border-top: 0px;\n    border-left: 0px;\n    margin-left: 1px;\n}\n\n.center-block{\n    margin-left:auto !important;\n   margin-right:auto !important;\n   display:block !important;\n   text-align: center;\n}\n\n.input-group-prepend {\n    margin-left:auto;\n}\n\n.btn-group.btn-group-toggle{\n    margin-right:auto;\n}\n\n#lang {\n    margin-right:auto;\n}\n\n#adult-yes {\n    border-top-left-radius: 0px;\n    border-bottom-left-radius: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wcm9maWxlL3Byb2ZpbGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGVBQWU7SUFDZixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0ksMEJBQTBCO0FBQzlCOztBQUVBO0lBQ0ksNEJBQTRCO0lBQzVCLCtCQUErQjtJQUMvQixtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSwyQkFBMkI7R0FDNUIsNEJBQTRCO0dBQzVCLHdCQUF3QjtHQUN4QixrQkFBa0I7QUFDckI7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBQ0E7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSwyQkFBMkI7SUFDM0IsOEJBQThCO0FBQ2xDIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9wcm9maWxlL3Byb2ZpbGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImxhYmVsIHtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgY29sb3I6IGJsYWNrO1xufVxuXG5wLCBsaSwgdGQsIHRleHR7XG4gICAgY29sb3I6YmxhY2s7XG59XG5cbmZvb3RlciB7XG4gICAgbWFyZ2luLXRvcDogMHB4ICFpbXBvcnRhbnQ7XG59XG5cbmlucHV0IHtcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNHB4O1xuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA0cHg7XG4gICAgYm9yZGVyLWNvbG9yOiB3aGl0ZTtcbiAgICBib3JkZXItdG9wOiAwcHg7XG4gICAgYm9yZGVyLWxlZnQ6IDBweDtcbiAgICBtYXJnaW4tbGVmdDogMXB4O1xufVxuXG4uY2VudGVyLWJsb2Nre1xuICAgIG1hcmdpbi1sZWZ0OmF1dG8gIWltcG9ydGFudDtcbiAgIG1hcmdpbi1yaWdodDphdXRvICFpbXBvcnRhbnQ7XG4gICBkaXNwbGF5OmJsb2NrICFpbXBvcnRhbnQ7XG4gICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5pbnB1dC1ncm91cC1wcmVwZW5kIHtcbiAgICBtYXJnaW4tbGVmdDphdXRvO1xufVxuLmJ0bi1ncm91cC5idG4tZ3JvdXAtdG9nZ2xle1xuICAgIG1hcmdpbi1yaWdodDphdXRvO1xufVxuXG4jbGFuZyB7XG4gICAgbWFyZ2luLXJpZ2h0OmF1dG87XG59XG5cbiNhZHVsdC15ZXMge1xuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDBweDtcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAwcHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/components/profile/profile.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/profile/profile.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron jumbotron-fluid\">\n  <div class=\"container\">\n    <h1 class=\"display-4\">\n      <i class=\"fa fa-user\" aria-hidden=\"true\"></i>\n      {{user_name}}</h1>\n    <p class=\"lead\">Details</p>\n    <hr class=\"my-4\">\n    <div class=\"center-block\">\n      <div class=\"input-group mb-3\">\n        <div class=\"input-group-prepend\">\n          <span class=\"input-group-text\" id=\"basic-addon1\">Adult Content:</span>\n        </div>\n        <div class=\"btn-group btn-group-toggle\" data-toggle=\"buttons\">\n          <label id=\"adult-yes\" class=\"btn btn-secondary active\">\n            <input type=\"radio\" name=\"options\" id=\"option1\" autocomplete=\"off\" checked> Yes\n          </label>\n          <label class=\"btn btn-secondary\">\n            <input type=\"radio\" name=\"options\" id=\"option3\" autocomplete=\"off\"> No\n          </label>\n        </div>\n      </div>\n      <br>\n      <div class=\"input-group mb-3\">\n        <div class=\"input-group-prepend\">\n          <span class=\"input-group-text\" id=\"basic-addon1\">Language</span>\n        </div>\n        <input list=\"languages\" name=\"language\" id=\"lang\" #lang placeholder=\"{{default_lang}}\">\n        <datalist id=\"languages\">\n          <option *ngFor=\"let lang of lang_keys\" value=\"{{lang}}\">\n        </datalist>\n      </div>\n      <br>\n      <button type=\"button\" class=\"btn btn-info\" (click)=\"save(lang.value)\">Save Details</button>\n      <br>\n      <br>\n      <div style=\"margin-bottom: 10px;\" class=\"btn-group btn-group-toggle\" data-toggle=\"buttons\">\n        <label class=\"btn btn-secondary active\" (click)=\"setCat(true)\">\n          <input type=\"radio\" name=\"options\" id=\"option1\" autocomplete=\"off\" checked>Rated Movies\n        </label>\n        <label class=\"btn btn-secondary\" (click)=\"setCat(false)\">\n          <input type=\"radio\" name=\"options\" id=\"option2\" autocomplete=\"off\">Bookmarked Movies\n        </label>\n      </div>\n      <br>\n      <table class=\"table\">\n        <tbody *ngIf=\"show_like; else showBook\">\n          <tr *ngFor=\"let reaction of reactions_data\">\n            <td>{{convertTimestamp(reaction.last_updated)}}</td>\n            <td>{{reaction.title}}</td>\n            <td>\n              <ng-template [ngIf]=\"reaction.like_status == true\">\n                Liked\n              </ng-template>\n              <ng-template [ngIf]=\"reaction.like_status == false\">\n                  Disliked\n                </ng-template>\n                <ng-template [ngIf]=\"reaction.like_status == null || reaction.like_status == undefined\">\n                    Removed\n                  </ng-template>\n            </td>\n          </tr>\n        </tbody>\n        <ng-template #showBook>\n          <tbody>\n            <tr *ngFor=\"let bookmark of bookmarked_data\">\n              <td>{{convertTimestamp(bookmark.last_updated)}}</td>\n              <td>{{bookmark.title}}</td>\n              <td>\n                  <ng-template [ngIf]=\"reaction.like_status == true\">\n                      Bookmarked\n                    </ng-template>\n                    <ng-template [ngIf]=\"bookmark.list_status == null || bookmark.list_status == undefined || bookmark.list_status\">\n                      Removed\n                      </ng-template>\n              </td>\n            </tr>\n          </tbody>\n        </ng-template>\n      </table>\n      <button type=\"button\" class=\"btn btn-dark\" routerLink=\"/settings\" routerLinkActive=\"active\">Settings</button>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/profile/profile.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/profile/profile.component.ts ***!
  \*********************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(http) {
        this.http = http;
        this.show_like = true;
        this.lang_object = {
            "No Language": "xx", "Afar": "aa", "Afrikaans": "af", "Akan": "ak", "Aragonese": "an", "Assamese": "as", "Avaric": "av", "Avestan": "ae", "Aymara": "ay", "Azerbaijani": "az", "Bashkir": "ba", "Bambara": "bm", "Bislama": "bi", "Tibetan": "bo", "Breton": "br", "Catalan": "ca", "Czech": "cs", "Chechen": "ce", "Slavic": "cu", "Chuvash": "cv", "Cornish": "kw", "Corsican": "co", "Cree": "cr", "Welsh": "cy", "Danish": "da", "German": "de", "Divehi": "dv", "Dzongkha": "dz", "Esperanto": "eo", "Estonian": "et", "Basque": "eu", "Faroese": "fo", "Fijian": "fj", "Finnish": "fi", "French": "fr", "Frisian": "fy", "Fulah": "ff", "Gaelic": "gd", "Irish": "ga", "Gallegan": "gl", "Manx": "gv", "Guarani": "gn", "Gujarati": "gu", "Haitian; Haitian Creole": "ht", "Hausa": "ha", "Serbo-Croatian": "sh", "Herero": "hz", "Hiri Motu": "ho", "Croatian": "hr", "Hungarian": "hu", "Igbo": "ig", "Ido": "io", "Yi": "ii", "Inuktitut": "iu", "Interlingue": "ie", "Interlingua": "ia", "Indonesian": "id", "Inupiaq": "ik", "Icelandic": "is", "Italian": "it", "Javanese": "jv", "Japanese": "ja", "Kalaallisut": "kl", "Kannada": "kn", "Kashmiri": "ks", "Kanuri": "kr", "Kazakh": "kk", "Khmer": "km", "Kikuyu": "ki", "Kinyarwanda": "rw", "Kirghiz": "ky", "Komi": "kv", "Kongo": "kg", "Korean": "ko", "Kuanyama": "kj", "Kurdish": "ku", "Lao": "lo", "Latin": "la", "Latvian": "lv", "Limburgish": "li", "Lingala": "ln", "Lithuanian": "lt", "Letzeburgesch": "lb", "Luba-Katanga": "lu", "Ganda": "lg", "Marshall": "mh", "Malayalam": "ml", "Marathi": "mr", "Malagasy": "mg", "Maltese": "mt", "Moldavian": "mo", "Mongolian": "mn", "Maori": "mi", "Malay": "ms", "Burmese": "my", "Nauru": "na", "Navajo": "nv", "Ndebele": "nd", "Ndonga": "ng", "Nepali": "ne", "Dutch": "nl", "Norwegian Nynorsk": "nn", "Norwegian Bokmål": "nb", "Norwegian": "no", "Chichewa; Nyanja": "ny", "Occitan": "oc", "Ojibwa": "oj", "Oriya": "or", "Oromo": "om", "Ossetian; Ossetic": "os", "Pali": "pi", "Polish": "pl", "Portuguese": "pt", "Quechua": "qu", "Raeto-Romance": "rm", "Romanian": "ro", "Rundi": "rn", "Russian": "ru", "Sango": "sg", "Sanskrit": "sa", "Sinhalese": "si", "Slovak": "sk", "Slovenian": "sl", "Northern Sami": "se", "Samoan": "sm", "Shona": "sn", "Sindhi": "sd", "Somali": "so", "Sotho": "st", "Spanish": "es", "Albanian": "sq", "Sardinian": "sc", "Serbian": "sr", "Swati": "ss", "Sundanese": "su", "Swahili": "sw", "Swedish": "sv", "Tahitian": "ty", "Tamil": "ta", "Tatar": "tt", "Telugu": "te", "Tajik": "tg", "Tagalog": "tl", "Thai": "th", "Tigrinya": "ti", "Tonga": "to", "Tswana": "tn", "Tsonga": "ts", "Turkmen": "tk", "Turkish": "tr", "Twi": "tw", "Uighur": "ug", "Ukrainian": "uk", "Urdu": "ur", "Uzbek": "uz", "Venda": "ve", "Vietnamese": "vi", "Volapük": "vo", "Walloon": "wa", "Wolof": "wo", "Xhosa": "xh", "Yiddish": "yi", "Zhuang": "za", "Zulu": "zu", "Abkhazian": "ab", "Mandarin": "zh", "Pushto": "ps", "Amharic": "am", "Arabic": "ar", "Bulgarian": "bg", "Cantonese": "cn", "Macedonian": "mk", "Greek": "el", "Persian": "fa", "Hebrew": "he", "Hindi": "hi", "Armenian": "hy", "English": "en", "Ewe": "ee", "Georgian": "ka", "Punjabi": "pa", "Bengali": "bn", "Bosnian": "bs", "Chamorro": "ch", "Belarusian": "be"
        };
        document.getElementById("body").style.backgroundColor = "#e9ecef";
        document.getElementById("body").style.backgroundImage = "none";
    }
    ProfileComponent.prototype.convertTimestamp = function (timestamp) {
        var d = new Date(timestamp);
        return d.toLocaleString();
    };
    ProfileComponent.prototype.setCat = function (bool) {
        this.show_like = bool;
    };
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (localStorage.getItem("DEFAULT_LANG")) {
            this.default_lang = localStorage.getItem("DEFAULT_LANG");
        }
        else {
            this.default_lang = 'English';
        }
        if (localStorage.getItem("Name") == undefined || localStorage.getItem("Name") == null) {
            this.user_name = 'Guest';
        }
        else {
            this.user_name = localStorage.getItem("Name");
        }
        console.log(this.user_name);
        if (this.user_name != 'Guest') {
            var loginstr = '/getUserDetails?email=' + localStorage.getItem("Email");
            this.http.get(loginstr).subscribe(function (data) {
                console.log('SUCCESS');
                _this.reactions_data = Object.values(data[0].reactions_data);
                _this.bookmarked_data = Object.values(data[0].bookmark_data);
            });
        }
        else {
            if (this.bookmarked_data == null || this.bookmarked_data == undefined) {
                if (localStorage.getItem("BOOKMARKED_DATA")) {
                    this.bookmarked_data = localStorage.getItem("BOOKMARKED_DATA");
                    this.bookmarked_data = Object.values(JSON.parse(this.bookmarked_data));
                }
            }
            if (this.reactions_data == null || this.reactions_data == undefined) {
                if (localStorage.getItem("REACTION_DATA")) {
                    this.reactions_data = localStorage.getItem("REACTION_DATA");
                    this.reactions_data = Object.values(JSON.parse(this.reactions_data));
                }
            }
        }
        this.lang_keys = Object.keys(this.lang_object);
        this.lang_values = Object.values(this.lang_object);
    };
    ProfileComponent.prototype.ngOnDestroy = function () {
        document.getElementById("body").style.backgroundColor = "#1A1717";
    };
    ProfileComponent.prototype.showAlerts = function () {
        alert('Sucessfully saved :-)');
    };
    ProfileComponent.prototype.save = function (new_lang) {
        this.showAlerts();
        var lang = this.lang_object[new_lang];
        localStorage.setItem("DEFAULT_LANG", new_lang);
        console.log(lang);
    };
    ProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! ./profile.component.html */ "./src/app/components/profile/profile.component.html"),
            styles: [__webpack_require__(/*! ./profile.component.css */ "./src/app/components/profile/profile.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/components/recommender/recommender.component.css":
/*!******************************************************************!*\
  !*** ./src/app/components/recommender/recommender.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".slider-section{\n  margin-left: 20px;\n  margin-right: 20px;\n}\n.flickity-viewport {\n  background-color: black !important;\n}\n.carousel-cell {\n  background-color: black;\n  width: 185px;\n  height: 278px;\n  margin-right: 4px;\n  border-radius: 5px;\n}\n.carousel-cell:before {\n  display: block;\n  text-align: center;\n}\n#buttons-dislike {\n  bottom: 0;\n  z-index: 1; \n  margin-left:52%;\n  position: absolute; \n  width: 50%;\n  border: 0px;\n  float:right;\n}\n#buttons-like {\n  margin-left: 4px;\n  bottom: 0;\n  z-index: 1; \n  position: absolute; \n  width: 50%;\n  border: 0px;\n  float:left;\n}\n#buttons-watchlater {\n  top:0;\n  z-index: 1; \n  margin-left:4px;\n  position: absolute; \n  width: 100%;\n  border: 0px;\n}\nbutton:hover\n{\nopacity: 1;\n}\nbutton\n{\nopacity: 0;\n}\np{\n  color: black;\n}\n.jumbotron.jumbotron-fluid{\n  display: none;\n}\np i {\n  margin-left:10px !important;\n}\na {\n  text-decoration: none;\n  display: inline-block;\n  padding: 8px 16px;\n  color: grey !important;\n  border: 1px;\n}\na:hover {\n  background-color: #ddd;\n  color: black !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9yZWNvbW1lbmRlci9yZWNvbW1lbmRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQWlCO0VBQ2pCLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0Usa0NBQWtDO0FBQ3BDO0FBQ0E7RUFDRSx1QkFBdUI7RUFDdkIsWUFBWTtFQUNaLGFBQWE7RUFDYixpQkFBaUI7RUFDakIsa0JBQWtCO0FBQ3BCO0FBRUE7RUFDRSxjQUFjO0VBQ2Qsa0JBQWtCO0FBQ3BCO0FBRUE7RUFDRSxTQUFTO0VBQ1QsVUFBVTtFQUNWLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLFdBQVc7RUFDWCxXQUFXO0FBQ2I7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixTQUFTO0VBQ1QsVUFBVTtFQUNWLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsV0FBVztFQUNYLFVBQVU7QUFDWjtBQUVBO0VBQ0UsS0FBSztFQUNMLFVBQVU7RUFDVixlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxXQUFXO0FBQ2I7QUFFQTs7QUFFQSxVQUFVO0FBQ1Y7QUFFQTs7QUFFQSxVQUFVO0FBQ1Y7QUFFQTtFQUNFLFlBQVk7QUFDZDtBQUVBO0VBQ0UsYUFBYTtBQUNmO0FBRUE7RUFDRSwyQkFBMkI7QUFDN0I7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixxQkFBcUI7RUFDckIsaUJBQWlCO0VBQ2pCLHNCQUFzQjtFQUN0QixXQUFXO0FBQ2I7QUFFQTtFQUNFLHNCQUFzQjtFQUN0Qix1QkFBdUI7QUFDekIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3JlY29tbWVuZGVyL3JlY29tbWVuZGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2xpZGVyLXNlY3Rpb257XG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG59XG4uZmxpY2tpdHktdmlld3BvcnQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjayAhaW1wb3J0YW50O1xufVxuLmNhcm91c2VsLWNlbGwge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgd2lkdGg6IDE4NXB4O1xuICBoZWlnaHQ6IDI3OHB4O1xuICBtYXJnaW4tcmlnaHQ6IDRweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuXG4uY2Fyb3VzZWwtY2VsbDpiZWZvcmUge1xuICBkaXNwbGF5OiBibG9jaztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4jYnV0dG9ucy1kaXNsaWtlIHtcbiAgYm90dG9tOiAwO1xuICB6LWluZGV4OiAxOyBcbiAgbWFyZ2luLWxlZnQ6NTIlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7IFxuICB3aWR0aDogNTAlO1xuICBib3JkZXI6IDBweDtcbiAgZmxvYXQ6cmlnaHQ7XG59XG5cbiNidXR0b25zLWxpa2Uge1xuICBtYXJnaW4tbGVmdDogNHB4O1xuICBib3R0b206IDA7XG4gIHotaW5kZXg6IDE7IFxuICBwb3NpdGlvbjogYWJzb2x1dGU7IFxuICB3aWR0aDogNTAlO1xuICBib3JkZXI6IDBweDtcbiAgZmxvYXQ6bGVmdDtcbn1cblxuI2J1dHRvbnMtd2F0Y2hsYXRlciB7XG4gIHRvcDowO1xuICB6LWluZGV4OiAxOyBcbiAgbWFyZ2luLWxlZnQ6NHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7IFxuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyOiAwcHg7XG59XG5cbmJ1dHRvbjpob3Zlclxue1xub3BhY2l0eTogMTtcbn1cblxuYnV0dG9uXG57XG5vcGFjaXR5OiAwO1xufVxuXG5we1xuICBjb2xvcjogYmxhY2s7XG59XG5cbi5qdW1ib3Ryb24uanVtYm90cm9uLWZsdWlke1xuICBkaXNwbGF5OiBub25lO1xufVxuXG5wIGkge1xuICBtYXJnaW4tbGVmdDoxMHB4ICFpbXBvcnRhbnQ7XG59XG5cbmEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcGFkZGluZzogOHB4IDE2cHg7XG4gIGNvbG9yOiBncmV5ICFpbXBvcnRhbnQ7XG4gIGJvcmRlcjogMXB4O1xufVxuXG5hOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RkZDtcbiAgY29sb3I6IGJsYWNrICFpbXBvcnRhbnQ7XG59Il19 */"

/***/ }),

/***/ "./src/app/components/recommender/recommender.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/components/recommender/recommender.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br />\n<br />\n<div class=\"slider-section\">\n  <div *ngFor=\"let section of sections_data\">\n    <div *ngIf=\"section.data!='' && section.data!=null && section.text!=''\">\n      <h3>{{section.text}}</h3>\n      <div class=\"{{section.class}}\" data-flickity='{\"wrapAround\": true, \"groupCells\": true, \"autoPlay\": 3000, \"pauseAutoPlayOnHover\": false}'>\n        <div class=\"carousel-cell\" *ngFor=\"let movie of section.data.results\">\n          <img class=\"carousel-img\" src=\"https://image.tmdb.org/t/p/w185/{{movie.poster_path}}\" (click)=\"showInfo(movie.id,section.class)\">\n\n          <button value=\"like\" *ngIf=\"like_status_data[movie.id]; else liked_content_empty\" (click)=\"likeMovie(this.movie,$event)\"\n            class=\"btn btn-success\" id=\"buttons-like\">\n            <i *ngIf=\"like_status_data[movie.id].like_status;else liked_content\" class=\"fa fa-thumbs-up\" aria-hidden=\"true\"></i>\n            <ng-template #liked_content>\n              <i class=\"fa fa-thumbs-o-up\" aria-hidden=\"true\"></i>\n            </ng-template>\n          </button>\n          <ng-template #liked_content_empty>\n            <button value=\"like\" (click)=\"likeMovie(this.movie,$event)\" class=\"btn btn-success\" id=\"buttons-like\">\n              <i class=\"fa fa-thumbs-o-up\" aria-hidden=\"true\"></i>\n            </button>\n          </ng-template>\n          <button value=\"dislike\" *ngIf=\"like_status_data[movie.id]; else disliked_content_empty\" (click)=\"dislikeMovie(this.movie,$event)\"\n            class=\"btn btn-warning\" id=\"buttons-dislike\">\n            <i *ngIf=\"like_status_data[movie.id].like_status==false;else disliked_content\" class=\"fa fa-thumbs-down\" aria-hidden=\"true\"></i>\n            <ng-template #disliked_content>\n              <i class=\"fa fa-thumbs-o-down\" aria-hidden=\"true\"></i>\n            </ng-template>\n          </button>\n          <ng-template #disliked_content_empty>\n            <button value=\"dislike\" (click)=\"dislikeMovie(this.movie,$event)\" class=\"btn btn-warning\" id=\"buttons-dislike\">\n              <i class=\"fa fa-thumbs-o-down\" aria-hidden=\"true\"></i>\n            </button>\n          </ng-template>\n          <button *ngIf=\"bookmarked_data[movie.id]; else list_content_empty\" value=\"addList\" (click)=\"addList(this.movie,$event)\" class=\"btn btn-dark\"\n            id=\"buttons-watchlater\">\n            <i *ngIf=\"bookmarked_data[movie.id].list_status;else list_content\" class=\"fa fa-bookmark\" aria-hidden=\"true\"></i>\n            <ng-template #list_content>\n              <i class=\"fa fa-bookmark-o\" aria-hidden=\"true\"></i>\n            </ng-template>\n          </button>\n          <ng-template #list_content_empty>\n            <button value=\"addList\" (click)=\"addList(this.movie,$event)\" class=\"btn btn-dark\" id=\"buttons-watchlater\">\n              <i class=\"fa fa-bookmark-o\" aria-hidden=\"true\"></i>\n            </button>\n          </ng-template>\n        </div>\n      </div>\n    </div>\n    <br>\n    <br>\n    <div *ngIf=\"section.class == movie_detail_section\" class=\"jumbotron jumbotron-fluid\" id={{section.class}}>\n      <div *ngIf=\"movie_details\" class=\"container\">\n        <h1 class=\"display-4\">{{movie_details.original_title}}</h1>\n        <p class=\"lead\">\n          <i style=\"margin-left: 0px !important;\" class=\"fa fa-calendar\" aria-hidden=\"true\"></i> {{movie_details.release_date}}\n          <i class=\"fa fa-imdb\" aria-hidden=\"true\"></i> {{movie_details.vote_average}}\n          <i class=\"fa fa-users\" aria-hidden=\"true\"></i>{{movie_details.vote_count}}\n          <i class=\"fa fa-rocket\" aria-hidden=\"true\"></i>{{movie_details.popularity}}\n          <i class=\"fa fa-language\" aria-hidden=\"true\"></i>{{rev_lang_obj[movie_details.original_language]}}\n          <i class=\"fa fa-hourglass\" aria-hidden=\"true\"></i> {{movie_details.runtime}} mintues\n        </p>\n        <i style=\"margin-left: 0px !important;\">\n          <span style=\"color: #666; font-size: 12px;\" *ngFor=\"let item of movie_details.genres; let i = index\">\n            <span *ngIf=\"i < movie_details.genres.length-1;else fullstop2\">&nbsp;{{gen[item.id]}},</span>\n            <ng-template #fullstop2>&nbsp;{{gen[item.id]}}.</ng-template>\n          </span>\n        </i>\n        <p>\n          <b>Cast: </b>\n          <span *ngFor=\"let cast of movie_details.credits.cast.slice(0,5);let i = index\">\n            <span *ngIf=\"i < movie_details.credits.cast.slice(0,5).length-1; else fullstop\">&nbsp;{{cast.name}},</span>\n            <ng-template #fullstop>&nbsp;{{cast.name}}.</ng-template>\n          </span>\n        </p>\n        <p *ngIf=\"movie_details.credits.crew\">\n          <b>Main Crew:</b>\n          <span *ngFor=\"let main of movie_details.credits.crew.slice(0,3);let i = index\">\n            <span *ngIf=\"i < movie_details.credits.crew.slice(0,3).length-1; else fullstop\">&nbsp;{{main.name}} ({{main.job}}),</span>\n            <ng-template #fullstop>&nbsp;{{main.name}} ({{main.job}}).</ng-template>\n          </span>\n        </p>\n        <p>{{movie_details.overview}}</p>\n        <div style=\"text-align: center\">\n          <a *ngIf=\"active_trailer!=movie_details.id; else show\" id=\"{{movie_details.id}}\" (click)=\"toggleTrailer($event)\">Show Trailer</a>\n          <br>\n          <ng-template #show>\n            <a id=\"trailer-{{movie_details.id}}\" (click)=\"toggleTrailer($event)\">Hide Trailer</a>\n            <br>\n            <br>\n            <iframe width=\"420\" height=\"345\" [src]=\"trailer_key | safe\" allowfullscreen>\n            </iframe>\n          </ng-template>\n          <i style=\"margin-right: 10px;\" class=\"fa fa-search\" aria-hidden=\"true\"></i>\n          <a href=\"https://www.netflix.com/search?q={{movie_details.original_title}}\" target=\"_blank\">Netflix</a>\n          <a href=\"https://www.primevideo.com/region/eu/search/ref=atv_nb_sr?phrase={{movie_details.original_title}}\" target=\"_blank\">\n            <i class=\"fa fa-play-circle\" aria-hidden=\"true\"></i> Prime Video</a>\n          <a href=\"http://solarmoviesc.com/search/{{movie_details.original_title}}.html\" target=\"_blank\">SolarMovie</a>\n          <br>\n          <br>\n          <a style=\"color:white !important\" class=\"btn btn-dark active\" href=\"/movie/{{movie_details.id}}\" target=\"_blank\">Complete Details</a>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<br>"

/***/ }),

/***/ "./src/app/components/recommender/recommender.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/recommender/recommender.component.ts ***!
  \*****************************************************************/
/*! exports provided: SafePipe, RecommenderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SafePipe", function() { return SafePipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecommenderComponent", function() { return RecommenderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var ngx_alerts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-alerts */ "./node_modules/ngx-alerts/fesm5/ngx-alerts.js");
/* harmony import */ var flickity__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! flickity */ "./node_modules/flickity/js/index.js");
/* harmony import */ var flickity__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(flickity__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _user_user_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../user/user.component */ "./src/app/components/user/user.component.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var SafePipe = /** @class */ (function () {
    function SafePipe(sanitizer) {
        this.sanitizer = sanitizer;
    }
    SafePipe.prototype.transform = function (url) {
        return this.sanitizer.bypassSecurityTrustResourceUrl(url);
    };
    SafePipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({ name: 'safe' }),
        __metadata("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["DomSanitizer"]])
    ], SafePipe);
    return SafePipe;
}());

var RecommenderComponent = /** @class */ (function (_super) {
    __extends(RecommenderComponent, _super);
    function RecommenderComponent(http_viewinfos, http_views, http_discover, http_discover_sendAdditionalData, http_discover_sendTrackingData, http_discover_getData, alert) {
        var _this = _super.call(this, http_discover, http_discover_sendAdditionalData, http_discover_sendTrackingData, http_discover_getData) || this;
        _this.http_viewinfos = http_viewinfos;
        _this.http_views = http_views;
        _this.http_discover = http_discover;
        _this.http_discover_sendAdditionalData = http_discover_sendAdditionalData;
        _this.http_discover_sendTrackingData = http_discover_sendTrackingData;
        _this.http_discover_getData = http_discover_getData;
        _this.alert = alert;
        _this.request_group = [];
        _this.rev_lang_obj = { 'xx': 'No Language', 'aa': 'Afar', 'af': 'Afrikaans', 'ak': 'Akan', 'an': 'Aragonese', 'as': 'Assamese', 'av': 'Avaric', 'ae': 'Avestan', 'ay': 'Aymara', 'az': 'Azerbaijani', 'ba': 'Bashkir', 'bm': 'Bambara', 'bi': 'Bislama', 'bo': 'Tibetan', 'br': 'Breton', 'ca': 'Catalan', 'cs': 'Czech', 'ce': 'Chechen', 'cu': 'Slavic', 'cv': 'Chuvash', 'kw': 'Cornish', 'co': 'Corsican', 'cr': 'Cree', 'cy': 'Welsh', 'da': 'Danish', 'de': 'German', 'dv': 'Divehi', 'dz': 'Dzongkha', 'eo': 'Esperanto', 'et': 'Estonian', 'eu': 'Basque', 'fo': 'Faroese', 'fj': 'Fijian', 'fi': 'Finnish', 'fr': 'French', 'fy': 'Frisian', 'ff': 'Fulah', 'gd': 'Gaelic', 'ga': 'Irish', 'gl': 'Gallegan', 'gv': 'Manx', 'gn': 'Guarani', 'gu': 'Gujarati', 'ht': 'Haitian; Haitian Creole', 'ha': 'Hausa', 'sh': 'Serbo-Croatian', 'hz': 'Herero', 'ho': 'Hiri Motu', 'hr': 'Croatian', 'hu': 'Hungarian', 'ig': 'Igbo', 'io': 'Ido', 'ii': 'Yi', 'iu': 'Inuktitut', 'ie': 'Interlingue', 'ia': 'Interlingua', 'id': 'Indonesian', 'ik': 'Inupiaq', 'is': 'Icelandic', 'it': 'Italian', 'jv': 'Javanese', 'ja': 'Japanese', 'kl': 'Kalaallisut', 'kn': 'Kannada', 'ks': 'Kashmiri', 'kr': 'Kanuri', 'kk': 'Kazakh', 'km': 'Khmer', 'ki': 'Kikuyu', 'rw': 'Kinyarwanda', 'ky': 'Kirghiz', 'kv': 'Komi', 'kg': 'Kongo', 'ko': 'Korean', 'kj': 'Kuanyama', 'ku': 'Kurdish', 'lo': 'Lao', 'la': 'Latin', 'lv': 'Latvian', 'li': 'Limburgish', 'ln': 'Lingala', 'lt': 'Lithuanian', 'lb': 'Letzeburgesch', 'lu': 'Luba-Katanga', 'lg': 'Ganda', 'mh': 'Marshall', 'ml': 'Malayalam', 'mr': 'Marathi', 'mg': 'Malagasy', 'mt': 'Maltese', 'mo': 'Moldavian', 'mn': 'Mongolian', 'mi': 'Maori', 'ms': 'Malay', 'my': 'Burmese', 'na': 'Nauru', 'nv': 'Navajo', 'nd': 'Ndebele', 'ng': 'Ndonga', 'ne': 'Nepali', 'nl': 'Dutch', 'nn': 'Norwegian Nynorsk', 'nb': 'Norwegian Bokmål', 'no': 'Norwegian', 'ny': 'Chichewa; Nyanja', 'oc': 'Occitan', 'oj': 'Ojibwa', 'or': 'Oriya', 'om': 'Oromo', 'os': 'Ossetian; Ossetic', 'pi': 'Pali', 'pl': 'Polish', 'pt': 'Portuguese', 'qu': 'Quechua', 'rm': 'Raeto-Romance', 'ro': 'Romanian', 'rn': 'Rundi', 'ru': 'Russian', 'sg': 'Sango', 'sa': 'Sanskrit', 'si': 'Sinhalese', 'sk': 'Slovak', 'sl': 'Slovenian', 'se': 'Northern Sami', 'sm': 'Samoan', 'sn': 'Shona', 'sd': 'Sindhi', 'so': 'Somali', 'st': 'Sotho', 'es': 'Spanish', 'sq': 'Albanian', 'sc': 'Sardinian', 'sr': 'Serbian', 'ss': 'Swati', 'su': 'Sundanese', 'sw': 'Swahili', 'sv': 'Swedish', 'ty': 'Tahitian', 'ta': 'Tamil', 'tt': 'Tatar', 'te': 'Telugu', 'tg': 'Tajik', 'tl': 'Tagalog', 'th': 'Thai', 'ti': 'Tigrinya', 'to': 'Tonga', 'tn': 'Tswana', 'ts': 'Tsonga', 'tk': 'Turkmen', 'tr': 'Turkish', 'tw': 'Twi', 'ug': 'Uighur', 'uk': 'Ukrainian', 'ur': 'Urdu', 'uz': 'Uzbek', 've': 'Venda', 'vi': 'Vietnamese', 'vo': 'Volapük', 'wa': 'Walloon', 'wo': 'Wolof', 'xh': 'Xhosa', 'yi': 'Yiddish', 'za': 'Zhuang', 'zu': 'Zulu', 'ab': 'Abkhazian', 'zh': 'Mandarin', 'ps': 'Pushto', 'am': 'Amharic', 'ar': 'Arabic', 'bg': 'Bulgarian', 'cn': 'Cantonese', 'mk': 'Macedonian', 'el': 'Greek', 'fa': 'Persian', 'he': 'Hebrew', 'hi': 'Hindi', 'hy': 'Armenian', 'en': 'English', 'ee': 'Ewe', 'ka': 'Georgian', 'pa': 'Punjabi', 'bn': 'Bengali', 'bs': 'Bosnian', 'ch': 'Chamorro', 'be': 'Belarusian' };
        _this.gen = {
            28: "Action",
            12: "Adventure",
            16: "Animation",
            35: "Comedy",
            80: "Crime",
            99: "Documentary",
            18: "Drama",
            10751: "Family",
            14: "Fantasy",
            36: "History",
            27: "Horror",
            10402: "Music",
            9648: "Mystery",
            10749: "Romance",
            878: "Science Fiction",
            10770: "TV Movie",
            53: "Thriller",
            10752: "War",
            37: "Western",
            10765: "Sci-Fi & Fantasy",
            10768: "War & Politics",
            10767: "Talk",
            10766: "Soap",
            10764: "Reality",
            10763: "News",
            10762: "Kids",
            10759: "Action & Adventure"
        };
        _this.sections_data = [{
                "text": "Now Showing",
                "class": "shownow-flick"
            },
            {
                "text": "Trending Now",
                "class": "trend-flick",
            },
            {
                "text": "",
                "class": "similar-flick",
            },
            {
                "text": "Content Based Recommendations",
                "class": "recommend-flick",
            },
            {
                "text": "Based on your current interests",
                "class": "popular-flick",
            },
            {
                "text": "Upcoming Movies",
                "class": "upcom-flick",
            }
        ];
        _this.recom_section_primary = ['.shownow-flick', '.trend-flick', '.similar-flick', '.recommend-flick', '.popular-flick', '.upcom-flick'];
        _this.section_group = ['now_playing', 'trending_now', 'similar', 'recom', 'popular', 'upcoming'];
        return _this;
    }
    RecommenderComponent.prototype.ngOnDestroy = function () {
        if (this.request_group != undefined) {
            for (var _i = 0, _a = this.request_group; _i < _a.length; _i++) {
                var i = _a[_i];
                i.unsubscribe();
            }
        }
    };
    RecommenderComponent.prototype.ngOnInit = function () {
        if (!localStorage.getItem("Email")) {
            this.alert.warning("Please log-in for personalized recommendations!");
        }
        localStorage.removeItem("REACTION_DATA");
        localStorage.removeItem("BOOKMARKED_DATA");
        localStorage.removeItem("CLICKED_DATA");
        var latest_likes = localStorage.getItem("LATEST_LIKE");
        if (latest_likes != undefined || latest_likes != null) {
            var latest_like = latest_likes.split("|");
            this.similar_last = latest_like[0];
            this.similar_movie_name = latest_like[1];
            this.similar_genre_ids = latest_like[2].split(',');
        }
        console.log();
        this.getData();
    };
    RecommenderComponent.prototype.getData = function () {
        var _this = this;
        var region = 'IN';
        var lang;
        if (localStorage.getItem("DEFAULT_LANG")) {
            lang = localStorage.getItem("DEFAULT_LANG");
        }
        else {
            lang = 'en-US';
        }
        var similar_api;
        var popular_api;
        var recom_api;
        var upcoming_api = this.http_views.get('https://api.themoviedb.org/3/movie/upcoming?api_key=bd5e7f8161070f86bff1d8da34219f57&language=' + lang + '&page=1');
        var nowplaying_api = this.http_views.get('https://api.themoviedb.org/3/movie/now_playing?api_key=bd5e7f8161070f86bff1d8da34219f57&language=' + lang + '&page=1');
        if (this.similar_last != undefined) {
            similar_api = this.http_views.get('https://api.themoviedb.org/3/movie/' + this.similar_last + '/similar?api_key=bd5e7f8161070f86bff1d8da34219f57&page=1');
            popular_api = this.http_views.get('https://api.themoviedb.org/3/discover/movie?api_key=bd5e7f8161070f86bff1d8da34219f57&language=' + lang + '&sort_by=popularity.desc&include_video=false&page=1&vote_average.gte=5&with_genres=' + this.similar_genre_ids[0]);
            recom_api = this.http_views.get('https://api.themoviedb.org/3/movie/' + this.similar_last + '/recommendations?api_key=bd5e7f8161070f86bff1d8da34219f57&&language=' + lang + 'page=1');
        }
        else {
            this.similar_movie_name = 'Interstellar';
            similar_api = this.http_views.get('https://api.themoviedb.org/3/movie/157336/similar?api_key=bd5e7f8161070f86bff1d8da34219f57&language=' + lang + '&page=1');
            popular_api = this.http_views.get('https://api.themoviedb.org/3/discover/movie?api_key=bd5e7f8161070f86bff1d8da34219f57&language=' + lang + '&sort_by=popularity.desc&include_video=false&page=1&vote_average.gte=5&with_genres=12,18');
            recom_api = this.http_views.get('https://api.themoviedb.org/3/movie/157336/recommendations?api_key=bd5e7f8161070f86bff1d8da34219f57&language=' + lang + '&page=1');
        }
        var trending_api = this.http_views.get('https://api.themoviedb.org/3/movie/popular?api_key=bd5e7f8161070f86bff1d8da34219f57&region=' + region + '&language=' + lang + '&page=1');
        var api_list = [nowplaying_api, trending_api, similar_api, recom_api, popular_api, upcoming_api];
        try {
            var _loop_1 = function (i) {
                var temp = void 0;
                temp = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["forkJoin"])(api_list.slice(i, i + 3)).subscribe(function (data) {
                    _this.sections_data[i]["data"] = data[0];
                    _this.sections_data[i + 1]["data"] = data[1];
                    _this.sections_data[i + 2]["data"] = data[2];
                    if (_this.sections_data[i + 2].text == '') {
                        _this.sections_data[i + 2].text = 'Movies Similar to ' + _this.similar_movie_name;
                    }
                    window.setTimeout(function () { _this.create_obj(_this.recom_section_primary.slice(i, i + 3)); });
                });
                this_1.request_group.push(temp);
            };
            var this_1 = this;
            for (var i = 0; i <= api_list.length - 3; i += 3) {
                _loop_1(i);
            }
        }
        catch (e) {
            console.log(e);
        }
    };
    RecommenderComponent.prototype.create_obj = function (section_groups) {
        try {
            /**
             * Flickity Bind Elements
             */
            for (var _i = 0, section_groups_1 = section_groups; _i < section_groups_1.length; _i++) {
                var section = section_groups_1[_i];
                var elem = document.querySelector(section);
                new flickity__WEBPACK_IMPORTED_MODULE_4__(elem, {
                    wrapAround: true,
                    groupCells: true,
                    cellAlign: 'left',
                    autoPlay: 3000
                });
            }
        }
        catch (e) {
            console.log(e);
        }
    };
    RecommenderComponent.prototype.showInfo = function (movie_id, element_id) {
        var _this = this;
        if (this.movie_detail_id == movie_id) {
            if (document.getElementById(this.movie_detail_section).style.display == 'none') {
                document.getElementById(this.movie_detail_section).style.display = 'block';
            }
            else {
                document.getElementById(this.movie_detail_section).style.display = 'none';
            }
            return;
        }
        if (this.movie_detail_section != undefined) {
            document.getElementById(this.movie_detail_section).style.display = 'none';
        }
        var url = 'https://api.themoviedb.org/3/movie/' + movie_id + '?api_key=bd5e7f8161070f86bff1d8da34219f57&language=en-US&append_to_response=videos,credits';
        this.http_viewinfos.get(url).subscribe(function (data) {
            _this.movie_details = data;
            console.log(_this.movie_details);
            _this.trailer_key = 'https://www.youtube.com/embed/' + data.videos.results[0].key;
            document.getElementById(element_id).style.display = 'block';
        });
        this.movie_detail_section = element_id;
        this.movie_detail_id = movie_id;
    };
    RecommenderComponent.prototype.toggleTrailer = function (event) {
        var id = event.target.id;
        this.active_trailer = parseInt(id);
    };
    RecommenderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-recommender',
            template: __webpack_require__(/*! ./recommender.component.html */ "./src/app/components/recommender/recommender.component.html"),
            styles: [__webpack_require__(/*! ./recommender.component.css */ "./src/app/components/recommender/recommender.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], ngx_alerts__WEBPACK_IMPORTED_MODULE_3__["AlertService"]])
    ], RecommenderComponent);
    return RecommenderComponent;
}(_user_user_component__WEBPACK_IMPORTED_MODULE_5__["UserComponent"]));



/***/ }),

/***/ "./src/app/components/seed-data/seed-data.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/seed-data/seed-data.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "p {\n    color: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zZWVkLWRhdGEvc2VlZC1kYXRhLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0FBQ2hCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9zZWVkLWRhdGEvc2VlZC1kYXRhLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJwIHtcbiAgICBjb2xvcjogYmxhY2s7XG59Il19 */"

/***/ }),

/***/ "./src/app/components/seed-data/seed-data.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/seed-data/seed-data.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron\">\n  <h1 class=\"display-4\">Hello, world!</h1>\n  <p class=\"lead\">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>\n  <hr class=\"my-4\">\n  <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>\n  <p class=\"lead\">\n    <a class=\"btn btn-primary btn-lg\" href=\"#\" role=\"button\">Learn more</a>\n  </p>\n</div>"

/***/ }),

/***/ "./src/app/components/seed-data/seed-data.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/seed-data/seed-data.component.ts ***!
  \*************************************************************/
/*! exports provided: SeedDataComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SeedDataComponent", function() { return SeedDataComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SeedDataComponent = /** @class */ (function () {
    function SeedDataComponent() {
    }
    SeedDataComponent.prototype.ngOnInit = function () {
        document.getElementById("body").style.backgroundColor = "white";
    };
    SeedDataComponent.prototype.ngOnDestroy = function () {
        document.getElementById("body").style.backgroundColor = "black";
    };
    SeedDataComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-seed-data',
            template: __webpack_require__(/*! ./seed-data.component.html */ "./src/app/components/seed-data/seed-data.component.html"),
            styles: [__webpack_require__(/*! ./seed-data.component.css */ "./src/app/components/seed-data/seed-data.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SeedDataComponent);
    return SeedDataComponent;
}());



/***/ }),

/***/ "./src/app/components/settings/settings.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/settings/settings.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".warnings {\n    margin-top: 30px;\n    text-align: center;\n}\n.input-group{\n    margin-top: 50px;\n    display: flex;\n    justify-content: center;\n}\n.input-group-text{\n    background-color: #1d2124 !important;\n    border-color: #1d2124 !important;\n}\nlabel{\n    color: white;\n}\nh3 {\n    color: white;\n}\ntextarea {\n    max-width: 50%;\n\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zZXR0aW5ncy9zZXR0aW5ncy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYix1QkFBdUI7QUFDM0I7QUFFQTtJQUNJLG9DQUFvQztJQUNwQyxnQ0FBZ0M7QUFDcEM7QUFFQTtJQUNJLFlBQVk7QUFDaEI7QUFFQTtJQUNJLFlBQVk7QUFDaEI7QUFFQTtJQUNJLGNBQWM7O0FBRWxCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9zZXR0aW5ncy9zZXR0aW5ncy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLndhcm5pbmdzIHtcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5pbnB1dC1ncm91cHtcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5pbnB1dC1ncm91cC10ZXh0e1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMxZDIxMjQgIWltcG9ydGFudDtcbiAgICBib3JkZXItY29sb3I6ICMxZDIxMjQgIWltcG9ydGFudDtcbn1cblxubGFiZWx7XG4gICAgY29sb3I6IHdoaXRlO1xufVxuXG5oMyB7XG4gICAgY29sb3I6IHdoaXRlO1xufVxuXG50ZXh0YXJlYSB7XG4gICAgbWF4LXdpZHRoOiA1MCU7XG5cbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/settings/settings.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/settings/settings.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br>\n<div class=\"container\" id=\"search\" style=\"text-align:center\">\n  <h3>Settings</h3>\n  <div class=\"input-group\">\n    <textarea class=\"form-control\" aria-label=\"With textarea\"></textarea>\n    <div class=\"input-group-prepend\">\n      <span class=\"input-group-text\">\n        <label>Suggestions</label>\n      </span>\n    </div>\n  </div>\n  <div class=\"warnings\">\n    <div>\n      <button type=\"button\" class=\"btn btn-dark active\" (click)=\"feedback()\">Send Response</button>\n    </div>\n    <br>\n    <button type=\"button\" class=\"btn btn-dark active\" (click)=\"deleteData()\">Delete Tracked Data</button>\n    <button type=\"button\" class=\"btn btn-dark active\" (click)=\"deleteAccount()\">Delete Account</button>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/settings/settings.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/settings/settings.component.ts ***!
  \***********************************************************/
/*! exports provided: SettingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsComponent", function() { return SettingsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_alerts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-alerts */ "./node_modules/ngx-alerts/fesm5/ngx-alerts.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SettingsComponent = /** @class */ (function () {
    function SettingsComponent(alert) {
        this.alert = alert;
    }
    SettingsComponent.prototype.ngOnInit = function () {
    };
    SettingsComponent.prototype.feedback = function () {
        this.alert.success("Submitted. Thank you.");
    };
    SettingsComponent.prototype.deleteData = function () {
        this.alert.warning("Feature currently in Beta");
    };
    SettingsComponent.prototype.deleteAccount = function () {
        this.alert.warning("Feature currently in Beta");
    };
    SettingsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-settings',
            template: __webpack_require__(/*! ./settings.component.html */ "./src/app/components/settings/settings.component.html"),
            styles: [__webpack_require__(/*! ./settings.component.css */ "./src/app/components/settings/settings.component.css")]
        }),
        __metadata("design:paramtypes", [ngx_alerts__WEBPACK_IMPORTED_MODULE_1__["AlertService"]])
    ], SettingsComponent);
    return SettingsComponent;
}());



/***/ }),

/***/ "./src/app/components/sign-up/sign-up.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/sign-up/sign-up.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\n\tpadding: 0;\n    margin: 0;\n}\n\nhr {\n    display: block;\n    height: 1px;\n    border: 0;\n    border-top: 1px solid #ccc;\n    margin: 1em 0;\n    padding: 0;\n}\n\nbody a {\n\tcolor:red;\n\ttransition: 0.5s all;\n\t-webkit-transition: 0.5s all;\n\t-moz-transition: 0.5s all;\n\t-o-transition: 0.5s all;\n\t-ms-transition: 0.5s all;\n\ttext-decoration: none;\n}\n\nbody a:hover {\n\ttext-decoration: none;\n}\n\nbody a:focus, a:hover {\n\ttext-decoration: none;\n}\n\ninput[type=\"button\"], input[type=\"submit\"] {\n\ttransition: 0.5s all;\n\t-webkit-transition: 0.5s all;\n\t-moz-transition: 0.5s all;\n\t-o-transition: 0.5s all;\n\t-ms-transition: 0.5s all;\n}\n\nh1, h2, h3, h4, h5, h6 {\n\tmargin: 0;\n\tpadding: 0;\n}\n\np {\n\tmargin: 0;\n}\n\nul {\n\tmargin: 0;\n\tpadding: 0;\n}\n\nli {\n\tlist-style-type:none;\n}\n\nlabel {\n\tmargin: 0;\n}\n\na:focus, a:hover {\n\ttext-decoration: none;\n\toutline: none;\n}\n\nbody{\n\t/* background: url('../images/5copy.jpg') no-repeat; */\n    background-size: cover;\n\tmin-height: 100vh;\n}\n\n.agile-login {\n\n\t\tpadding-top: 60px;\n}\n\n.wrapper {\n    max-width: 450px;\n    margin: auto;\n    text-align: center;\n    padding: 3% 0px;\n    background-color: rgba(6, 5, 5, 0.33);\n\twebkit-box-shadow: 10px 3px 66px -19px rgba(0,0,0,0.75);\n    box-shadow: 10px 3px 66px -19px rgba(0,0,0,0.75);\n}\n\n.w3ls-form {\n    display: inline-block;\n    width: 350px;\n    margin: auto;\n    text-align: left;\n}\n\nlabel, input[type=\"text\"],input[type=\"submit\"], input[type=\"password\"]{\n    display: block;\n\t    font-family: 'Source Sans Pro', sans-serif;\n}\n\ninput[type=\"text\"], input[type=\"password\"]{\n    outline: 0;\n    padding: 12px 15px;\n    border-radius: 25px;\n    border: none;\n    background-color: rgba(87, 102, 103, 0.59);\n    color: white;\n\twidth: 100%;\n\tletter-spacing: 1px;\n}\n\n.agile-login h1 {\n    text-align: center;\n    color: #fff;\n    margin-bottom: 2%;\n    font-size: 45px;\n    font-weight: 300;\n    letter-spacing: 5px;\n    text-transform: uppercase;\n}\n\n.wrapper h2 {\n\tmargin-bottom: 30px;\n    text-transform: uppercase;\n    font-size: 26px;\n    color: white;\n    font-weight: 600;\n    letter-spacing: 2px;\n}\n\na.pass {\n    font-size: 15px;\n\t    color: #efbb42;\n\t\tfont-family: 'Source Sans Pro', sans-serif;\n\t\t    letter-spacing: 2px;\n}\n\n.w3ls-form a {\n    display: block;\n    text-align: right;\n\t    margin: 15px 0px;\n}\n\nlabel {\n    margin: 20px 0px 8px 15px;\n    font-size: 13px;\n     color: #fff;\n    font-family: 'Source Sans Pro', sans-serif;\n     text-transform: uppercase;\n\tletter-spacing: 2px;\n}\n\ninput[type=\"submit\"] {\n\tmargin: 20px auto;\n    padding: 9px 60px;\n    border-radius: 25px;\n    font-size: 18px;\n    border: none;\n    background-color: transparent;\n    color: #fff;\n    text-transform: uppercase;\n    outline: 0;\n    border: 1px solid #4f5d61;\n\tcursor: pointer;\n\t    width: 100%;\n\t    letter-spacing: 1px;\t\n}\n\ninput[type=\"submit\"]:hover {\n    color: #fff;\n    background-color:  rgba(0, 245, 255, 0.69);\n}\n\n::-webkit-input-placeholder { /* Chrome/Opera/Safari */\n  color: #ccc6c6;\n}\n\n::-moz-placeholder { /* Firefox 19+ */\n  color: #ccc6c6;\n}\n\n:-ms-input-placeholder { /* IE 10+ */\n  color: #ccc6c6;\n}\n\n:-moz-placeholder { /* Firefox 18- */\n  color: #ccc6c6;\n}\n\n.agile-icons {\n    padding: 3% 0px;\n}\n\nspan.fa.fa-google:hover {\n    background-color: #00b6f1;\n    color: white;\n}\n\nspan.fa.fa-facebook:hover {\n    background-color: #3b5998;\n    color: white;\n}\n\n.agile-icons span.fa {\n\tfont-size: 12px;\n    margin: auto 10px;\n    color: #fff;\n    width: 32px;\n    height: 32px;\n    line-height: 32px;\n    border-radius: 50%;\n    background-color: rgba(243, 249, 249, 0.22);\n}\n\n/* responsive */\n\n@media screen and (max-width: 568px){\n\t.agile-login h1 {\n\t\t    font-size: 40px;\n\t\t\t\n\t}\n}\n\n@media screen and (max-width: 480px){\n\tbody{\n\t\tbackground-position: center;\n\t}\n\t.agile-login {\n    padding-top: 35px;\n}\n\t.agile-login h1 {\n    font-size: 35px;\n    letter-spacing: 4px;\n}\n\t.wrapper h2 {\n    font-size: 26px;\n\n}\n/* .wrapper {\n    width: 370px;\n} */\n\n}\n\n@media screen and (max-width: 414px){\n\t.agile-login h1 {\n    font-size: 30px;\n\tletter-spacing: 3px;\n\t    margin-bottom: 6%;\n}\n/* .wrapper {\n    width: 320px;\n} */\n.w3ls-form {\n\t    width: 300px;\n}\n.wrapper h2 {\n    font-size: 20px;    \n    margin-bottom: 15px;\n}\t\n}\n\n@media screen and (max-width: 375px){\n\t.agile-login h1 {\n    font-size: 29px;\n}\n\tinput[type=\"text\"],input[type=\"password\"] {\n\t\twidth: 100%;\n\t}\n\tlabel {\n    margin: 20px 0px 5px 10px;\n    font-size: 13px;\n    color: #fff;\n\t}\n}\n\n@media screen and (max-width: 320px){\n.w3ls-form {\n    width: 270px;\n}\n.agile-login h1 {\n    font-size: 23px;\n}\n/* .wrapper {\n    width: 280px;\n} */\n.wrapper h2 {\n    font-size: 16px;\n    margin-bottom: 10px;\n}\ninput[type=\"submit\"] {\n    margin: 10px auto;\n\t    padding: 8px 60px;\n}\n.agile-login {\n    padding-top: 30px;\n}\nlabel {\n    margin: 15px 0px 5px 10px;\n}\ninput[type=\"text\"], input[type=\"password\"]{\n    padding: 10px 15px;\n}\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zaWduLXVwL3NpZ24tdXAuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtDQUNDLFVBQVU7SUFDUCxTQUFTO0FBQ2I7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsV0FBVztJQUNYLFNBQVM7SUFDVCwwQkFBMEI7SUFDMUIsYUFBYTtJQUNiLFVBQVU7QUFDZDs7QUFFQTtDQUNDLFNBQVM7Q0FDVCxvQkFBb0I7Q0FDcEIsNEJBQTRCO0NBQzVCLHlCQUF5QjtDQUN6Qix1QkFBdUI7Q0FDdkIsd0JBQXdCO0NBQ3hCLHFCQUFxQjtBQUN0Qjs7QUFDQTtDQUNDLHFCQUFxQjtBQUN0Qjs7QUFDQTtDQUNDLHFCQUFxQjtBQUN0Qjs7QUFDQTtDQUNDLG9CQUFvQjtDQUNwQiw0QkFBNEI7Q0FDNUIseUJBQXlCO0NBQ3pCLHVCQUF1QjtDQUN2Qix3QkFBd0I7QUFDekI7O0FBQ0E7Q0FDQyxTQUFTO0NBQ1QsVUFBVTtBQUNYOztBQUNBO0NBQ0MsU0FBUztBQUNWOztBQUNBO0NBQ0MsU0FBUztDQUNULFVBQVU7QUFDWDs7QUFDQTtDQUNDLG9CQUFvQjtBQUNyQjs7QUFDQTtDQUNDLFNBQVM7QUFDVjs7QUFDQTtDQUNDLHFCQUFxQjtDQUNyQixhQUFhO0FBQ2Q7O0FBRUE7Q0FDQyxzREFBc0Q7SUFDbkQsc0JBQXNCO0NBQ3pCLGlCQUFpQjtBQUNsQjs7QUFDQTs7RUFFRSxpQkFBaUI7QUFDbkI7O0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YscUNBQXFDO0NBQ3hDLHVEQUF1RDtJQUVwRCxnREFBZ0Q7QUFDcEQ7O0FBQ0E7SUFDSSxxQkFBcUI7SUFDckIsWUFBWTtJQUNaLFlBQVk7SUFDWixnQkFBZ0I7QUFDcEI7O0FBQ0E7SUFDSSxjQUFjO0tBQ2IsMENBQTBDO0FBQy9DOztBQUNBO0lBQ0ksVUFBVTtJQUNWLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLDBDQUEwQztJQUMxQyxZQUFZO0NBQ2YsV0FBVztDQUNYLG1CQUFtQjtBQUNwQjs7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLHlCQUF5QjtBQUM3Qjs7QUFDQTtDQUNDLG1CQUFtQjtJQUNoQix5QkFBeUI7SUFDekIsZUFBZTtJQUNmLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsbUJBQW1CO0FBQ3ZCOztBQUNBO0lBQ0ksZUFBZTtLQUNkLGNBQWM7RUFDakIsMENBQTBDO01BQ3RDLG1CQUFtQjtBQUN6Qjs7QUFDQTtJQUNJLGNBQWM7SUFDZCxpQkFBaUI7S0FDaEIsZ0JBQWdCO0FBQ3JCOztBQUVDO0lBQ0cseUJBQXlCO0lBQ3pCLGVBQWU7S0FDZCxXQUFXO0lBQ1osMENBQTBDO0tBQ3pDLHlCQUF5QjtDQUM3QixtQkFBbUI7QUFDcEI7O0FBQ0E7Q0FDQyxpQkFBaUI7SUFDZCxpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLGVBQWU7SUFDZixZQUFZO0lBQ1osNkJBQTZCO0lBQzdCLFdBQVc7SUFDWCx5QkFBeUI7SUFDekIsVUFBVTtJQUNWLHlCQUF5QjtDQUM1QixlQUFlO0tBQ1gsV0FBVztLQUNYLG1CQUFtQjtBQUN4Qjs7QUFDQTtJQUNJLFdBQVc7SUFDWCwwQ0FBMEM7QUFDOUM7O0FBQ0EsOEJBQThCLHdCQUF3QjtFQUNwRCxjQUFjO0FBQ2hCOztBQUNBLHFCQUFxQixnQkFBZ0I7RUFDbkMsY0FBYztBQUNoQjs7QUFDQSx5QkFBeUIsV0FBVztFQUNsQyxjQUFjO0FBQ2hCOztBQUNBLG9CQUFvQixnQkFBZ0I7RUFDbEMsY0FBYztBQUNoQjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBQ0E7SUFDSSx5QkFBeUI7SUFDekIsWUFBWTtBQUNoQjs7QUFDQTtJQUNJLHlCQUF5QjtJQUN6QixZQUFZO0FBQ2hCOztBQUNBO0NBQ0MsZUFBZTtJQUNaLGlCQUFpQjtJQUNqQixXQUFXO0lBQ1gsV0FBVztJQUNYLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLDJDQUEyQztBQUMvQzs7QUFDQSxlQUFlOztBQUNmO0NBQ0M7TUFDSyxlQUFlOztDQUVwQjtBQUNEOztBQUVBO0NBQ0M7RUFDQywyQkFBMkI7Q0FDNUI7Q0FDQTtJQUNHLGlCQUFpQjtBQUNyQjtDQUNDO0lBQ0csZUFBZTtJQUNmLG1CQUFtQjtBQUN2QjtDQUNDO0lBQ0csZUFBZTs7QUFFbkI7QUFDQTs7R0FFRzs7QUFFSDs7QUFDQTtDQUNDO0lBQ0csZUFBZTtDQUNsQixtQkFBbUI7S0FDZixpQkFBaUI7QUFDdEI7QUFDQTs7R0FFRztBQUNIO0tBQ0ssWUFBWTtBQUNqQjtBQUNBO0lBQ0ksZUFBZTtJQUNmLG1CQUFtQjtBQUN2QjtBQUNBOztBQUVBO0NBQ0M7SUFDRyxlQUFlO0FBQ25CO0NBQ0M7RUFDQyxXQUFXO0NBQ1o7Q0FDQTtJQUNHLHlCQUF5QjtJQUN6QixlQUFlO0lBQ2YsV0FBVztDQUNkO0FBQ0Q7O0FBRUE7QUFDQTtJQUNJLFlBQVk7QUFDaEI7QUFDQTtJQUNJLGVBQWU7QUFDbkI7QUFDQTs7R0FFRztBQUNIO0lBQ0ksZUFBZTtJQUNmLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksaUJBQWlCO0tBQ2hCLGlCQUFpQjtBQUN0QjtBQUNBO0lBQ0ksaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSx5QkFBeUI7QUFDN0I7QUFDQTtJQUNJLGtCQUFrQjtBQUN0QjtBQUNBIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9zaWduLXVwL3NpZ24tdXAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImJvZHkge1xuXHRwYWRkaW5nOiAwO1xuICAgIG1hcmdpbjogMDtcbn1cblxuaHIge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGhlaWdodDogMXB4O1xuICAgIGJvcmRlcjogMDtcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgI2NjYztcbiAgICBtYXJnaW46IDFlbSAwO1xuICAgIHBhZGRpbmc6IDA7XG59XG5cbmJvZHkgYSB7XG5cdGNvbG9yOnJlZDtcblx0dHJhbnNpdGlvbjogMC41cyBhbGw7XG5cdC13ZWJraXQtdHJhbnNpdGlvbjogMC41cyBhbGw7XG5cdC1tb3otdHJhbnNpdGlvbjogMC41cyBhbGw7XG5cdC1vLXRyYW5zaXRpb246IDAuNXMgYWxsO1xuXHQtbXMtdHJhbnNpdGlvbjogMC41cyBhbGw7XG5cdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cbmJvZHkgYTpob3ZlciB7XG5cdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cbmJvZHkgYTpmb2N1cywgYTpob3ZlciB7XG5cdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cbmlucHV0W3R5cGU9XCJidXR0b25cIl0sIGlucHV0W3R5cGU9XCJzdWJtaXRcIl0ge1xuXHR0cmFuc2l0aW9uOiAwLjVzIGFsbDtcblx0LXdlYmtpdC10cmFuc2l0aW9uOiAwLjVzIGFsbDtcblx0LW1vei10cmFuc2l0aW9uOiAwLjVzIGFsbDtcblx0LW8tdHJhbnNpdGlvbjogMC41cyBhbGw7XG5cdC1tcy10cmFuc2l0aW9uOiAwLjVzIGFsbDtcbn1cbmgxLCBoMiwgaDMsIGg0LCBoNSwgaDYge1xuXHRtYXJnaW46IDA7XG5cdHBhZGRpbmc6IDA7XG59XG5wIHtcblx0bWFyZ2luOiAwO1xufVxudWwge1xuXHRtYXJnaW46IDA7XG5cdHBhZGRpbmc6IDA7XG59XG5saSB7XG5cdGxpc3Qtc3R5bGUtdHlwZTpub25lO1xufVxubGFiZWwge1xuXHRtYXJnaW46IDA7XG59XG5hOmZvY3VzLCBhOmhvdmVyIHtcblx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xuXHRvdXRsaW5lOiBub25lO1xufVxuXG5ib2R5e1xuXHQvKiBiYWNrZ3JvdW5kOiB1cmwoJy4uL2ltYWdlcy81Y29weS5qcGcnKSBuby1yZXBlYXQ7ICovXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcblx0bWluLWhlaWdodDogMTAwdmg7XG59XG4uYWdpbGUtbG9naW4ge1xuXG5cdFx0cGFkZGluZy10b3A6IDYwcHg7XG59XG4ud3JhcHBlciB7XG4gICAgbWF4LXdpZHRoOiA0NTBweDtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBhZGRpbmc6IDMlIDBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDYsIDUsIDUsIDAuMzMpO1xuXHR3ZWJraXQtYm94LXNoYWRvdzogMTBweCAzcHggNjZweCAtMTlweCByZ2JhKDAsMCwwLDAuNzUpO1xuICAgIC1tb3otYm94LXNoYWRvdzogMTBweCAzcHggNjZweCAtMTlweCByZ2JhKDAsMCwwLDAuNzUpO1xuICAgIGJveC1zaGFkb3c6IDEwcHggM3B4IDY2cHggLTE5cHggcmdiYSgwLDAsMCwwLjc1KTtcbn1cbi53M2xzLWZvcm0ge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB3aWR0aDogMzUwcHg7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG59XG5sYWJlbCwgaW5wdXRbdHlwZT1cInRleHRcIl0saW5wdXRbdHlwZT1cInN1Ym1pdFwiXSwgaW5wdXRbdHlwZT1cInBhc3N3b3JkXCJde1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuXHQgICAgZm9udC1mYW1pbHk6ICdTb3VyY2UgU2FucyBQcm8nLCBzYW5zLXNlcmlmO1xufVxuaW5wdXRbdHlwZT1cInRleHRcIl0sIGlucHV0W3R5cGU9XCJwYXNzd29yZFwiXXtcbiAgICBvdXRsaW5lOiAwO1xuICAgIHBhZGRpbmc6IDEycHggMTVweDtcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDg3LCAxMDIsIDEwMywgMC41OSk7XG4gICAgY29sb3I6IHdoaXRlO1xuXHR3aWR0aDogMTAwJTtcblx0bGV0dGVyLXNwYWNpbmc6IDFweDtcbn1cbi5hZ2lsZS1sb2dpbiBoMSB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIG1hcmdpbi1ib3R0b206IDIlO1xuICAgIGZvbnQtc2l6ZTogNDVweDtcbiAgICBmb250LXdlaWdodDogMzAwO1xuICAgIGxldHRlci1zcGFjaW5nOiA1cHg7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cbi53cmFwcGVyIGgyIHtcblx0bWFyZ2luLWJvdHRvbTogMzBweDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIGZvbnQtc2l6ZTogMjZweDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xufVxuYS5wYXNzIHtcbiAgICBmb250LXNpemU6IDE1cHg7XG5cdCAgICBjb2xvcjogI2VmYmI0Mjtcblx0XHRmb250LWZhbWlseTogJ1NvdXJjZSBTYW5zIFBybycsIHNhbnMtc2VyaWY7XG5cdFx0ICAgIGxldHRlci1zcGFjaW5nOiAycHg7XG59XG4udzNscy1mb3JtIGEge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuXHQgICAgbWFyZ2luOiAxNXB4IDBweDtcbn1cblxuIGxhYmVsIHtcbiAgICBtYXJnaW46IDIwcHggMHB4IDhweCAxNXB4O1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAgY29sb3I6ICNmZmY7XG4gICAgZm9udC1mYW1pbHk6ICdTb3VyY2UgU2FucyBQcm8nLCBzYW5zLXNlcmlmO1xuICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuXHRsZXR0ZXItc3BhY2luZzogMnB4O1xufVxuaW5wdXRbdHlwZT1cInN1Ym1pdFwiXSB7XG5cdG1hcmdpbjogMjBweCBhdXRvO1xuICAgIHBhZGRpbmc6IDlweCA2MHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIG91dGxpbmU6IDA7XG4gICAgYm9yZGVyOiAxcHggc29saWQgIzRmNWQ2MTtcblx0Y3Vyc29yOiBwb2ludGVyO1xuXHQgICAgd2lkdGg6IDEwMCU7XG5cdCAgICBsZXR0ZXItc3BhY2luZzogMXB4O1x0XG59XG5pbnB1dFt0eXBlPVwic3VibWl0XCJdOmhvdmVyIHtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAgcmdiYSgwLCAyNDUsIDI1NSwgMC42OSk7XG59XG46Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIgeyAvKiBDaHJvbWUvT3BlcmEvU2FmYXJpICovXG4gIGNvbG9yOiAjY2NjNmM2O1xufVxuOjotbW96LXBsYWNlaG9sZGVyIHsgLyogRmlyZWZveCAxOSsgKi9cbiAgY29sb3I6ICNjY2M2YzY7XG59XG46LW1zLWlucHV0LXBsYWNlaG9sZGVyIHsgLyogSUUgMTArICovXG4gIGNvbG9yOiAjY2NjNmM2O1xufVxuOi1tb3otcGxhY2Vob2xkZXIgeyAvKiBGaXJlZm94IDE4LSAqL1xuICBjb2xvcjogI2NjYzZjNjtcbn1cblxuLmFnaWxlLWljb25zIHtcbiAgICBwYWRkaW5nOiAzJSAwcHg7XG59XG5zcGFuLmZhLmZhLWdvb2dsZTpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwYjZmMTtcbiAgICBjb2xvcjogd2hpdGU7XG59XG5zcGFuLmZhLmZhLWZhY2Vib29rOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2I1OTk4O1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cbi5hZ2lsZS1pY29ucyBzcGFuLmZhIHtcblx0Zm9udC1zaXplOiAxMnB4O1xuICAgIG1hcmdpbjogYXV0byAxMHB4O1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIHdpZHRoOiAzMnB4O1xuICAgIGhlaWdodDogMzJweDtcbiAgICBsaW5lLWhlaWdodDogMzJweDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDMsIDI0OSwgMjQ5LCAwLjIyKTtcbn1cbi8qIHJlc3BvbnNpdmUgKi9cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU2OHB4KXtcblx0LmFnaWxlLWxvZ2luIGgxIHtcblx0XHQgICAgZm9udC1zaXplOiA0MHB4O1xuXHRcdFx0XG5cdH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDgwcHgpe1xuXHRib2R5e1xuXHRcdGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcblx0fVxuXHQuYWdpbGUtbG9naW4ge1xuICAgIHBhZGRpbmctdG9wOiAzNXB4O1xufVxuXHQuYWdpbGUtbG9naW4gaDEge1xuICAgIGZvbnQtc2l6ZTogMzVweDtcbiAgICBsZXR0ZXItc3BhY2luZzogNHB4O1xufVxuXHQud3JhcHBlciBoMiB7XG4gICAgZm9udC1zaXplOiAyNnB4O1xuXG59XG4vKiAud3JhcHBlciB7XG4gICAgd2lkdGg6IDM3MHB4O1xufSAqL1xuXG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0MTRweCl7XG5cdC5hZ2lsZS1sb2dpbiBoMSB7XG4gICAgZm9udC1zaXplOiAzMHB4O1xuXHRsZXR0ZXItc3BhY2luZzogM3B4O1xuXHQgICAgbWFyZ2luLWJvdHRvbTogNiU7XG59XG4vKiAud3JhcHBlciB7XG4gICAgd2lkdGg6IDMyMHB4O1xufSAqL1xuLnczbHMtZm9ybSB7XG5cdCAgICB3aWR0aDogMzAwcHg7XG59XG4ud3JhcHBlciBoMiB7XG4gICAgZm9udC1zaXplOiAyMHB4OyAgICBcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xufVx0XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDM3NXB4KXtcblx0LmFnaWxlLWxvZ2luIGgxIHtcbiAgICBmb250LXNpemU6IDI5cHg7XG59XG5cdGlucHV0W3R5cGU9XCJ0ZXh0XCJdLGlucHV0W3R5cGU9XCJwYXNzd29yZFwiXSB7XG5cdFx0d2lkdGg6IDEwMCU7XG5cdH1cblx0bGFiZWwge1xuICAgIG1hcmdpbjogMjBweCAwcHggNXB4IDEwcHg7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIGNvbG9yOiAjZmZmO1xuXHR9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDMyMHB4KXtcbi53M2xzLWZvcm0ge1xuICAgIHdpZHRoOiAyNzBweDtcbn1cbi5hZ2lsZS1sb2dpbiBoMSB7XG4gICAgZm9udC1zaXplOiAyM3B4O1xufVxuLyogLndyYXBwZXIge1xuICAgIHdpZHRoOiAyODBweDtcbn0gKi9cbi53cmFwcGVyIGgyIHtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cbmlucHV0W3R5cGU9XCJzdWJtaXRcIl0ge1xuICAgIG1hcmdpbjogMTBweCBhdXRvO1xuXHQgICAgcGFkZGluZzogOHB4IDYwcHg7XG59XG4uYWdpbGUtbG9naW4ge1xuICAgIHBhZGRpbmctdG9wOiAzMHB4O1xufVxubGFiZWwge1xuICAgIG1hcmdpbjogMTVweCAwcHggNXB4IDEwcHg7XG59XG5pbnB1dFt0eXBlPVwidGV4dFwiXSwgaW5wdXRbdHlwZT1cInBhc3N3b3JkXCJde1xuICAgIHBhZGRpbmc6IDEwcHggMTVweDtcbn1cbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/sign-up/sign-up.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/sign-up/sign-up.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p style=\"margin-top: 3%\"></p>\n<span class=\"agile-login\">\n  <div class=\"wrapper\">\n    <h3>SIGN UP</h3>\n    <div class=\"w3ls-form\" id=\"signup-form\">\n      <form (ngSubmit)=\"sendReq(fulln.value,emailadd.value,pass1.value,pass2.value)\">\n        <label>Full Name</label>\n        <input type=\"text\" #fulln placeholder=\"Name\" required minlength=\"4\" />\n        <label>Email Address</label>\n        <input type=\"text\" #emailadd placeholder=\"Email\" required/>\n        <label>Password</label>\n        <input type=\"password\" #pass1 placeholder=\"Password\" required minlength=\"4\" />\n        <label>Confirm Password</label>\n        <input type=\"password\" #pass2 placeholder=\"Confirm Password\" required/>\n        <a routerLink=\"/login\" routerLinkActive=\"active\" class=\"pass\">Already Registered ?</a>\n        <input type=\"submit\" value=\"Register\" />\n      </form>\n    </div>\n  </div>\n</span>\n"

/***/ }),

/***/ "./src/app/components/sign-up/sign-up.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/sign-up/sign-up.component.ts ***!
  \*********************************************************/
/*! exports provided: SignUpComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignUpComponent", function() { return SignUpComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SignUpComponent = /** @class */ (function () {
    function SignUpComponent(http) {
        this.http = http;
    }
    SignUpComponent.prototype.ngOnInit = function () {
    };
    SignUpComponent.prototype.ngOnDestroy = function () {
    };
    SignUpComponent.prototype.validateEmail = function (email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    };
    SignUpComponent.prototype.sendReq = function (name, email, pass1, pass2) {
        var _this = this;
        if (name == "" || email == "" || pass1 == "" || pass2 == "") {
            alert("Please don't leave any fields blank !");
            return;
        }
        var valid_flag = this.validateEmail(email);
        if (valid_flag != true) {
            alert("Please enter a valid email");
            return;
        }
        if (pass1 != pass2) {
            alert("Passwords don't match");
            return;
        }
        this.register = "/regUser?name=" + name + "&email=" + email + "&password1=" + pass1;
        console.log(this.register);
        this.http.get(this.register).subscribe(function (data) {
            console.log(data);
            console.log(_this.register);
            if (data.ok == 1) {
                alert("Successfully registered, please login :-)");
                _this.send_to_login_page();
            }
            else {
                alert("User already exists, please login or reset your password!");
            }
        });
    };
    SignUpComponent.prototype.send_to_login_page = function () {
        window.location.href = "/login";
    };
    SignUpComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sign-up',
            template: __webpack_require__(/*! ./sign-up.component.html */ "./src/app/components/sign-up/sign-up.component.html"),
            styles: [__webpack_require__(/*! ./sign-up.component.css */ "./src/app/components/sign-up/sign-up.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], SignUpComponent);
    return SignUpComponent;
}());



/***/ }),

/***/ "./src/app/components/user/user.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/user/user.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table, th , td  {\n    border: 1px solid grey;\n    border-collapse: collapse;\n    padding: 10px;\n  }\n  table tr:nth-child(odd) {\n    background-color: #f1f1f1;\n  }\n  table tr:nth-child(even) {\n    background-color: #ffffff;\n  }\n  table\n  { \n  margin-left: auto;\n  margin-right: auto;\n  }\n  .example-card {\n    width: 400px; \n    font-family: 'Source Sans Pro', sans-serif;\n  }\n  .input-group.mb-3 {\n  margin-left: auto;\n  margin-right: auto;\n  width: 30%\n}\n  @media only screen and (max-width: 768px) {\n  .input-group.mb-3 {\n    margin-left: auto;\n    margin-right: auto;\n    width: 50%\n  }\n}\n  a {\n  text-decoration: none;\n  display: inline-block;\n  padding: 8px 16px;\n  color: grey;\n}\n  a:hover {\n  background-color: #ddd;\n  color: black;\n}\n  label {\n  color: black;\n  font-size: 15px;\n}\n  h4 {\n  color: white;\n}\n  #query, #query:focus, #query:active{\n  border-color: white !important;\n  -webkit-appearance:none !important;\n  box-shadow: none !important;\n-moz-box-shadow: none !important;\n-webkit-box-shadow: none !important;\noutline:none !important;\n}\n  button, button:focus, button:active, .form-control:focus {\n  -webkit-appearance:none !important;\n  box-shadow: none !important;\n-moz-box-shadow: none !important;\n-webkit-box-shadow: none !important;\noutline:none !important;\n}\n  #basic-addon2 {\n  border: none;\n  border-top-right-radius: .25rem !important;\n  border-bottom-right-radius: .25rem  !important;\n  padding-left: 13px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy91c2VyL3VzZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHNCQUFzQjtJQUN0Qix5QkFBeUI7SUFDekIsYUFBYTtFQUNmO0VBQ0E7SUFDRSx5QkFBeUI7RUFDM0I7RUFDQTtJQUNFLHlCQUF5QjtFQUMzQjtFQUNBOztFQUVBLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEI7RUFFQTtJQUNFLFlBQVk7SUFDWiwwQ0FBMEM7RUFDNUM7RUFFRjtFQUNFLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEI7QUFDRjtFQUVBO0VBQ0U7SUFDRSxpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCO0VBQ0Y7QUFDRjtFQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLHFCQUFxQjtFQUNyQixpQkFBaUI7RUFDakIsV0FBVztBQUNiO0VBRUE7RUFDRSxzQkFBc0I7RUFDdEIsWUFBWTtBQUNkO0VBRUE7RUFDRSxZQUFZO0VBQ1osZUFBZTtBQUNqQjtFQUVBO0VBQ0UsWUFBWTtBQUNkO0VBRUE7RUFDRSw4QkFBOEI7RUFDOUIsa0NBQWtDO0VBQ2xDLDJCQUEyQjtBQUM3QixnQ0FBZ0M7QUFDaEMsbUNBQW1DO0FBQ25DLHVCQUF1QjtBQUN2QjtFQUVBO0VBQ0Usa0NBQWtDO0VBQ2xDLDJCQUEyQjtBQUM3QixnQ0FBZ0M7QUFDaEMsbUNBQW1DO0FBQ25DLHVCQUF1QjtBQUN2QjtFQUVBO0VBQ0UsWUFBWTtFQUNaLDBDQUEwQztFQUMxQyw4Q0FBOEM7RUFDOUMsa0JBQWtCO0FBQ3BCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy91c2VyL3VzZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInRhYmxlLCB0aCAsIHRkICB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgZ3JleTtcbiAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gIH1cbiAgdGFibGUgdHI6bnRoLWNoaWxkKG9kZCkge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMWYxZjE7XG4gIH1cbiAgdGFibGUgdHI6bnRoLWNoaWxkKGV2ZW4pIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICB9XG4gIHRhYmxlXG4gIHsgXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIH1cblxuICAuZXhhbXBsZS1jYXJkIHtcbiAgICB3aWR0aDogNDAwcHg7IFxuICAgIGZvbnQtZmFtaWx5OiAnU291cmNlIFNhbnMgUHJvJywgc2Fucy1zZXJpZjtcbiAgfVxuXG4uaW5wdXQtZ3JvdXAubWItMyB7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIHdpZHRoOiAzMCVcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAuaW5wdXQtZ3JvdXAubWItMyB7XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgIHdpZHRoOiA1MCVcbiAgfVxufVxuXG5hIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBhZGRpbmc6IDhweCAxNnB4O1xuICBjb2xvcjogZ3JleTtcbn1cblxuYTpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkZGQ7XG4gIGNvbG9yOiBibGFjaztcbn1cblxubGFiZWwge1xuICBjb2xvcjogYmxhY2s7XG4gIGZvbnQtc2l6ZTogMTVweDtcbn1cblxuaDQge1xuICBjb2xvcjogd2hpdGU7XG59XG5cbiNxdWVyeSwgI3F1ZXJ5OmZvY3VzLCAjcXVlcnk6YWN0aXZle1xuICBib3JkZXItY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG4gIC13ZWJraXQtYXBwZWFyYW5jZTpub25lICFpbXBvcnRhbnQ7XG4gIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcbi1tb3otYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xuLXdlYmtpdC1ib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG5vdXRsaW5lOm5vbmUgIWltcG9ydGFudDtcbn1cblxuYnV0dG9uLCBidXR0b246Zm9jdXMsIGJ1dHRvbjphY3RpdmUsIC5mb3JtLWNvbnRyb2w6Zm9jdXMge1xuICAtd2Via2l0LWFwcGVhcmFuY2U6bm9uZSAhaW1wb3J0YW50O1xuICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG4tbW96LWJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcbi13ZWJraXQtYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xub3V0bGluZTpub25lICFpbXBvcnRhbnQ7XG59XG5cbiNiYXNpYy1hZGRvbjIge1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAuMjVyZW0gIWltcG9ydGFudDtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IC4yNXJlbSAgIWltcG9ydGFudDtcbiAgcGFkZGluZy1sZWZ0OiAxM3B4O1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/components/user/user.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/user/user.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br>\n<div class=\"container\" style=\"text-align:center; position:relative;\">\n  <h3>Haxèr</h3>\n  <h4>\n    A hybrid and intuitive approach for\n    <i routerLink=\"/discover\" routerLinkActive=\"active\">discovering</i> movies and getting\n    <i routerLink=\"/recom\" routerLinkActive=\"active\">recommendations</i>!\n    <br>\n  </h4>\n  <br>\n</div>\n<div class=\"container\" id=\"search\" style=\"text-align:center\">\n  <div class=\"input-group mb-3\">\n    <input type=\"text\" autocomplete=\"off\" [(ngModel)]=\"texts\" class=\"form-control\" id=\"query\" placeholder=\"Search\" (keyup)=\"sendReq(query.value,$event)\"\n      aria-label=\"Search\" aria-describedby=\"Search\" name=\"query\" #query>\n    <div class=\"input-group-append\">\n      <button class=\"btn-light\" id=\"basic-addon2\" (click)=\"sendReq(query.value,$event)\">\n        <i class=\"fa fa-search fa-lg\"></i>\n      </button>\n    </div>\n  </div>\n  <div class=\"btn-group btn-group-toggle\" data-toggle=\"buttons\">\n    <label class=\"btn btn-light active\" (click)=\"setCat(true, query.value, $event)\">\n      <input type=\"radio\" name=\"options\" id=\"option1\" autocomplete=\"off\" checked>\n      <i style=\"margin-left:3px\" class=\"fa fa-film\" aria-hidden=\"true\"></i> Movies\n    </label>\n    <label class=\"btn btn-light\" (click)=\"setCat(false, query.value, $event)\">\n      <input type=\"radio\" name=\"options\" id=\"option2\" autocomplete=\"off\">\n      <i style=\"margin-left:3px\" class=\"fa fa-television\" aria-hidden=\"true\"></i> TV Shows\n    </label>\n  </div>\n</div>\n<br>\n<div *ngIf=\"data\">\n  <div *ngIf=\"data.results.length>1;else noresults\">\n    <div style=\"text-align:center\">\n      <p>You searched for '\n        <b>{{texts}}</b> ' </p>\n      <h5>Search Details</h5>\n      <table>\n        <tr>\n          <th>Page </th>\n          <th>Total Results</th>\n          <th>Total Pages</th>\n          <th>Results per page</th>\n        </tr>\n        <tr>\n          <td>{{data.page}}</td>\n          <td>{{data.total_results}}</td>\n          <td>{{data.total_pages}}</td>\n          <td>{{data.results.length}}</td>\n        </tr>\n      </table>\n    </div>\n    <div class=\"card-group\">\n      <mat-card class=\"example-card\" *ngFor=\"let movie of data.results; let myIndex = index\">\n        <mat-card-header>\n          <mat-card-title (click)=\"trackClick(movie)\">\n            <b *ngIf=\"movie_selected; else tvshow\">\n              <i class=\"fa fa-film fa-lg\" aria-hidden=\"true\"></i>\n              {{movie.title}} </b>\n            <ng-template #tvshow>\n              <b>\n                <i class=\"fa fa-television fa-lg\" aria-hidden=\"true\"></i> {{movie.name}}\n              </b>\n            </ng-template>\n          </mat-card-title>\n        </mat-card-header>\n        <img *ngIf=\"movie.backdrop_path;else other_content\" (click)=\"trackClick(movie)\" mat-card-image src=\"https://image.tmdb.org/t/p/w300/{{movie.backdrop_path}}\">\n        <ng-template #other_content>\n          <img (click)=\"trackClick(movie)\" mat-card-image src=\"/assets/nf.png\">\n        </ng-template>\n        <mat-card-content (click)=\"trackClick(movie)\">\n          <div class=\"d-flex justify-content-between\">\n            <div>\n              <i class=\"fa fa-calendar\" aria-hidden=\"true\"></i> {{movie.release_date || movie.first_air_date || 'N/A'}}\n            </div>\n            <div>\n              <i class=\"fa fa-imdb fa-lg\" aria-hidden=\"true\"></i> {{movie.vote_average || 'N/A'}}\n            </div>\n          </div>\n          <i><span style=\"color: #666; font-size: 12px; margin-left: -3px !important;\" *ngFor=\"let item of movie.genre_ids;let i = index\">\n              <span *ngIf=\"i < movie.genre_ids.length-1;else fullstop2\">&nbsp;{{gen[item]}},</span>\n              <ng-template #fullstop2>&nbsp;{{gen[item] || 'N/A'}}.</ng-template>\n            </span>\n          </i>\n          <br>\n          <span *ngIf=\"movie.overview.length>140\">{{movie.overview | truncate : 140 : true}} </span>\n          <span *ngIf=\"movie.overview.length<140\">{{movie.overview || 'N/A'}} </span>\n          <br>\n\n          <div class=\"d-flex justify-content-between\">\n            <div>\n              <i class=\"fa fa-eye fa-lg\" aria-hidden=\"true\"></i>\n              <span *ngIf=\"movie.adult; else Audience\">Restricted</span>\n              <ng-template #Audience>\n                Unrestricted\n              </ng-template>\n            </div>\n            <div>\n              <i class=\"fa fa-language fa-lg\" aria-hidden=\"true\"></i> {{rev_lang_obj[movie.original_language] || 'N/A'}}\n            </div>\n          </div>\n          <i class=\"fa fa-rocket fa-lg\" aria-hidden=\"true\"></i> {{movie.popularity || 'N/A'}}\n          <br>\n        </mat-card-content>\n        <div style=\"text-align: center\">\n          <i style=\"margin-right: 10px;\" class=\"fa fa-search\" aria-hidden=\"true\"></i>\n          <a href=\"https://www.netflix.com/search?q={{movie.title || movie.name}}\" target=\"_blank\">Netflix</a>\n          <a href=\"https://www.primevideo.com/region/eu/search/ref=atv_nb_sr?phrase={{movie.title || movie.name}}\" target=\"_blank\">\n            <i class=\"fa fa-play-circle\" aria-hidden=\"true\"></i> Prime Video</a>\n          <br>\n          <a href=\"http://solarmoviesc.com/search/{{movie.title || movie.name}}.html\" target=\"_blank\">SolarMovie</a>\n          <a *ngIf=\"movie.name\" href=\"https://dwatchseries.to/search/{{movie.name}}\" target=\"_blank\">WatchSeries</a>\n        </div>\n        <mat-card-actions style=\"text-align: center\">\n          <button value=\"like\" *ngIf=\"like_status_data[movie.id]; else liked_content_empty\" (click)=\"likeMovie(this.movie,$event)\"\n            class=\"mat-button\" mat-button>\n            <i *ngIf=\"like_status_data[movie.id].like_status;else liked_content\" class=\"fa fa-thumbs-up fa-lg\" aria-hidden=\"true\"></i>\n            <ng-template #liked_content>\n              <i class=\"fa fa-thumbs-o-up fa-lg\" aria-hidden=\"true\"></i>\n            </ng-template>\n          </button>\n          <ng-template #liked_content_empty>\n            <button value=\"like\" (click)=\"likeMovie(this.movie,$event)\" class=\"mat-button\" mat-button>\n              <i class=\"fa fa-thumbs-o-up fa-lg\" aria-hidden=\"true\"></i>\n            </button>\n          </ng-template>\n\n          <button value=\"dislike\" *ngIf=\"like_status_data[movie.id]; else disliked_content_empty\" (click)=\"dislikeMovie(this.movie,$event)\"\n            class=\"mat-button\" mat-button>\n            <i *ngIf=\"like_status_data[movie.id].like_status==false;else disliked_content\" class=\"fa fa-thumbs-down fa-lg\" aria-hidden=\"true\"></i>\n            <ng-template #disliked_content>\n              <i class=\"fa fa-thumbs-o-down fa-lg\" aria-hidden=\"true\"></i>\n            </ng-template>\n          </button>\n          <ng-template #disliked_content_empty>\n            <button value=\"dislike\" (click)=\"dislikeMovie(this.movie,$event)\" class=\"mat-button\" mat-button>\n              <i class=\"fa fa-thumbs-o-down fa-lg\" aria-hidden=\"true\"></i>\n            </button>\n          </ng-template>\n\n          <button *ngIf=\"bookmarked_data[movie.id]; else list_content_empty\" value=\"addList\" (click)=\"addList(this.movie,$event)\" class=\"mat-button\"\n            mat-button>\n            <i *ngIf=\"bookmarked_data[movie.id].list_status;else list_content\" class=\"fa fa-bookmark fa-lg\" aria-hidden=\"true\"></i>\n            <ng-template #list_content>\n              <i class=\"fa fa-bookmark-o fa-lg\" aria-hidden=\"true\"></i>\n            </ng-template>\n          </button>\n          <ng-template #list_content_empty>\n            <button value=\"addList\" (click)=\"addList(this.movie,$event)\" class=\"mat-button\" mat-button>\n              <i class=\"fa fa-bookmark-o fa-lg\" aria-hidden=\"true\"></i>\n            </button>\n          </ng-template>\n        </mat-card-actions>\n      </mat-card>\n    </div>\n  </div>\n\n  <ng-template #noresults>\n    <div class=\"container\" style=\"text-align:center; position:relative;\">\n      <p>No results found for '\n        <b>{{texts}}</b> ' </p>\n    </div>\n  </ng-template>\n  <br>\n  <div *ngIf=\"data\" style=\"text-align: center\">\n    <div *ngIf=\"data.results.length>1\">\n      <a *ngIf=\"data.page>1\" id=\"prev_button\" (click)=\"prev()\" class=\"previous round\">\n        <i class=\"fa fa-arrow-circle-left fa-lg\" aria-hidden=\"true\"></i>\n      </a>\n      <a *ngIf=\"data.page<data.total_pages\" id=\"next_button\" (click)=\"next()\" class=\"next round\">\n        <i class=\"fa fa-arrow-circle-right fa-lg\" aria-hidden=\"true\"></i>\n      </a>\n    </div>\n  </div>\n  <br/>\n  <br/>"

/***/ }),

/***/ "./src/app/components/user/user.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/user/user.component.ts ***!
  \***************************************************/
/*! exports provided: UserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserComponent", function() { return UserComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserComponent = /** @class */ (function () {
    function UserComponent(http, http_sendAdditionalData, http_sendTrackingData, http_getData) {
        this.http = http;
        this.http_sendAdditionalData = http_sendAdditionalData;
        this.http_sendTrackingData = http_sendTrackingData;
        this.http_getData = http_getData;
        this.movie_selected = true;
        this.like_status_data = {};
        this.bookmarked_data = {};
        this.clicked_data = {};
        this.gen = {
            28: "Action",
            12: "Adventure",
            16: "Animation",
            35: "Comedy",
            80: "Crime",
            99: "Documentary",
            18: "Drama",
            10751: "Family",
            14: "Fantasy",
            36: "History",
            27: "Horror",
            10402: "Music",
            9648: "Mystery",
            10749: "Romance",
            878: "Science Fiction",
            10770: "TV Movie",
            53: "Thriller",
            10752: "War",
            37: "Western",
            10765: "Sci-Fi & Fantasy",
            10768: "War & Politics",
            10767: "Talk",
            10766: "Soap",
            10764: "Reality",
            10763: "News",
            10762: "Kids",
            10759: "Action & Adventure"
        };
        this.rev_lang_obj = { 'xx': 'No Language', 'aa': 'Afar', 'af': 'Afrikaans', 'ak': 'Akan', 'an': 'Aragonese', 'as': 'Assamese', 'av': 'Avaric', 'ae': 'Avestan', 'ay': 'Aymara', 'az': 'Azerbaijani', 'ba': 'Bashkir', 'bm': 'Bambara', 'bi': 'Bislama', 'bo': 'Tibetan', 'br': 'Breton', 'ca': 'Catalan', 'cs': 'Czech', 'ce': 'Chechen', 'cu': 'Slavic', 'cv': 'Chuvash', 'kw': 'Cornish', 'co': 'Corsican', 'cr': 'Cree', 'cy': 'Welsh', 'da': 'Danish', 'de': 'German', 'dv': 'Divehi', 'dz': 'Dzongkha', 'eo': 'Esperanto', 'et': 'Estonian', 'eu': 'Basque', 'fo': 'Faroese', 'fj': 'Fijian', 'fi': 'Finnish', 'fr': 'French', 'fy': 'Frisian', 'ff': 'Fulah', 'gd': 'Gaelic', 'ga': 'Irish', 'gl': 'Gallegan', 'gv': 'Manx', 'gn': 'Guarani', 'gu': 'Gujarati', 'ht': 'Haitian; Haitian Creole', 'ha': 'Hausa', 'sh': 'Serbo-Croatian', 'hz': 'Herero', 'ho': 'Hiri Motu', 'hr': 'Croatian', 'hu': 'Hungarian', 'ig': 'Igbo', 'io': 'Ido', 'ii': 'Yi', 'iu': 'Inuktitut', 'ie': 'Interlingue', 'ia': 'Interlingua', 'id': 'Indonesian', 'ik': 'Inupiaq', 'is': 'Icelandic', 'it': 'Italian', 'jv': 'Javanese', 'ja': 'Japanese', 'kl': 'Kalaallisut', 'kn': 'Kannada', 'ks': 'Kashmiri', 'kr': 'Kanuri', 'kk': 'Kazakh', 'km': 'Khmer', 'ki': 'Kikuyu', 'rw': 'Kinyarwanda', 'ky': 'Kirghiz', 'kv': 'Komi', 'kg': 'Kongo', 'ko': 'Korean', 'kj': 'Kuanyama', 'ku': 'Kurdish', 'lo': 'Lao', 'la': 'Latin', 'lv': 'Latvian', 'li': 'Limburgish', 'ln': 'Lingala', 'lt': 'Lithuanian', 'lb': 'Letzeburgesch', 'lu': 'Luba-Katanga', 'lg': 'Ganda', 'mh': 'Marshall', 'ml': 'Malayalam', 'mr': 'Marathi', 'mg': 'Malagasy', 'mt': 'Maltese', 'mo': 'Moldavian', 'mn': 'Mongolian', 'mi': 'Maori', 'ms': 'Malay', 'my': 'Burmese', 'na': 'Nauru', 'nv': 'Navajo', 'nd': 'Ndebele', 'ng': 'Ndonga', 'ne': 'Nepali', 'nl': 'Dutch', 'nn': 'Norwegian Nynorsk', 'nb': 'Norwegian Bokmål', 'no': 'Norwegian', 'ny': 'Chichewa; Nyanja', 'oc': 'Occitan', 'oj': 'Ojibwa', 'or': 'Oriya', 'om': 'Oromo', 'os': 'Ossetian; Ossetic', 'pi': 'Pali', 'pl': 'Polish', 'pt': 'Portuguese', 'qu': 'Quechua', 'rm': 'Raeto-Romance', 'ro': 'Romanian', 'rn': 'Rundi', 'ru': 'Russian', 'sg': 'Sango', 'sa': 'Sanskrit', 'si': 'Sinhalese', 'sk': 'Slovak', 'sl': 'Slovenian', 'se': 'Northern Sami', 'sm': 'Samoan', 'sn': 'Shona', 'sd': 'Sindhi', 'so': 'Somali', 'st': 'Sotho', 'es': 'Spanish', 'sq': 'Albanian', 'sc': 'Sardinian', 'sr': 'Serbian', 'ss': 'Swati', 'su': 'Sundanese', 'sw': 'Swahili', 'sv': 'Swedish', 'ty': 'Tahitian', 'ta': 'Tamil', 'tt': 'Tatar', 'te': 'Telugu', 'tg': 'Tajik', 'tl': 'Tagalog', 'th': 'Thai', 'ti': 'Tigrinya', 'to': 'Tonga', 'tn': 'Tswana', 'ts': 'Tsonga', 'tk': 'Turkmen', 'tr': 'Turkish', 'tw': 'Twi', 'ug': 'Uighur', 'uk': 'Ukrainian', 'ur': 'Urdu', 'uz': 'Uzbek', 've': 'Venda', 'vi': 'Vietnamese', 'vo': 'Volapük', 'wa': 'Walloon', 'wo': 'Wolof', 'xh': 'Xhosa', 'yi': 'Yiddish', 'za': 'Zhuang', 'zu': 'Zulu', 'ab': 'Abkhazian', 'zh': 'Mandarin', 'ps': 'Pushto', 'am': 'Amharic', 'ar': 'Arabic', 'bg': 'Bulgarian', 'cn': 'Cantonese', 'mk': 'Macedonian', 'el': 'Greek', 'fa': 'Persian', 'he': 'Hebrew', 'hi': 'Hindi', 'hy': 'Armenian', 'en': 'English', 'ee': 'Ewe', 'ka': 'Georgian', 'pa': 'Punjabi', 'bn': 'Bengali', 'bs': 'Bosnian', 'ch': 'Chamorro', 'be': 'Belarusian' };
    }
    UserComponent.prototype.setCat = function (bool, query, event) {
        this.movie_selected = bool;
        this.data = null;
        this.sendReq(query, event);
    };
    UserComponent.prototype.sendReq = function (query, event) {
        var _this = this;
        this.query = query;
        this.event = event;
        /**
         * Send HTTP GET request for every valid keypress
         */
        if (this.sub != undefined) {
            this.sub.unsubscribe();
        }
        var key = event.keyCode || event.charCode;
        if (query === '' || query === undefined) {
            if (key === 8 || key === 46) {
                this.data = this.blank; //Clearing Search Box
            }
        }
        else {
            if (this.movie_selected) {
                this.tmdb = 'https://api.themoviedb.org/3/search/movie?api_key=bd5e7f8161070f86bff1d8da34219f57&query=' + query + '&page=' + this.page_number + '&include_adult=true';
            }
            else {
                this.tmdb = "https://api.themoviedb.org/3/search/tv?api_key=bd5e7f8161070f86bff1d8da34219f57&language=en-US&query=" + query + "&page=" + this.page_number;
            }
            this.sub = this.http.get(this.tmdb).subscribe(function (data) {
                _this.data = data;
            });
        }
    };
    UserComponent.prototype.ngOnInit = function () {
        this.page_number = 1;
        localStorage.removeItem("REACTION_DATA");
        localStorage.removeItem("BOOKMARKED_DATA");
        localStorage.removeItem("CLICKED_DATA");
        var status;
        if (localStorage.getItem("Email")) {
            status = this.getUserData();
        }
        else {
            console.log("Not logged in to get user data.");
        }
    };
    UserComponent.prototype.displayLocalData = function () {
        if (localStorage.getItem("REACTION_DATA") != null) {
            console.log("Liked Status Data:\n" + localStorage.getItem("REACTION_DATA"));
        }
        else {
            console.log("No Like/dislike history");
        }
        if (localStorage.getItem("BOOKMARKED_DATA") != null) {
            console.log("Bookmarked Data:\n" + localStorage.getItem("BOOKMARKED_DATA"));
        }
        else {
            console.log("No Add to List history");
        }
        if (localStorage.getItem("CLICKED_DATA") != null) {
            console.log("Impressions Data:\n" + localStorage.getItem("CLICKED_DATA"));
        }
        else {
            console.log("No Click Impressions");
        }
    };
    UserComponent.prototype.getUserData = function () {
        var _this = this;
        var loginstr = '/getUserDetails?email=' + localStorage.getItem("Email");
        this.http.get(loginstr).subscribe(function (data) {
            _this.user_details = data; // Assign local to global
            console.log(data[0].reactions_data);
            console.log(data[0].bookmark_data);
            console.log(data[0].clicked_data);
            _this.like_status_data = data[0].reactions_data;
            _this.bookmarked_data = data[0].bookmark_data;
            _this.clicked_data = data[0].clicked_data;
            localStorage.setItem("BOOKMARKED_DATA", JSON.stringify(_this.bookmarked_data));
            localStorage.setItem("CLICKED_DATA", JSON.stringify(_this.clicked_data));
            localStorage.setItem("REACTION_DATA", JSON.stringify(_this.like_status_data));
            _this.displayLocalData();
        });
    };
    UserComponent.prototype.likeMovie = function (movie, event) {
        if (this.like_status_data[movie.id]) {
            if (this.like_status_data[movie.id].like_status == true) {
                this.JSONify_like(movie, null);
            }
            else if (this.like_status_data[movie.id].like_status == false || this.like_status_data[movie.id].like_status == null) {
                this.JSONify_like(movie, true);
            }
        }
        else {
            localStorage.setItem("LATEST_LIKE", movie.id + '|' + movie.title + '|' + movie.genre_ids);
            this.JSONify_like(movie, true);
        }
    };
    UserComponent.prototype.dislikeMovie = function (movie, event) {
        if (this.like_status_data[movie.id]) {
            if (this.like_status_data[movie.id].like_status == false) {
                this.JSONify_like(movie, null);
            }
            else if (this.like_status_data[movie.id].like_status == true || this.like_status_data[movie.id].like_status == null) {
                this.JSONify_like(movie, false);
            }
        }
        else {
            this.JSONify_like(movie, false);
        }
    };
    UserComponent.prototype.trackClick = function (movie) {
        if (this.movie_selected) {
            window.open('/show/movie/' + movie.id, '_blank');
        }
        else {
            window.open('/show/tv/' + movie.id, '_blank');
        }
        if (this.clicked_data[movie.id]) {
            console.log("Already Exists");
        }
        else {
            this.JSONify_click(movie);
        }
    };
    UserComponent.prototype.addList = function (movie, event) {
        if (this.bookmarked_data[movie.id]) {
            if (this.bookmarked_data[movie.id].list_status == true) {
                this.JSONify_bookmark(movie, null);
            }
            else if (this.bookmarked_data[movie.id].list_status == null) {
                this.JSONify_bookmark(movie, true);
            }
        }
        else {
            this.JSONify_bookmark(movie, true);
        }
    };
    UserComponent.prototype.JSONify_bookmark = function (movie, list_status) {
        var movieid = movie.id;
        var genre = movie.genre_ids;
        var movie_name = movie.title;
        var date = new Date();
        var last_updated = date.getTime();
        // If Movie is not present
        if (this.bookmarked_data[movieid] === undefined) {
            this.bookmarked_data[movieid] = { "last_updated": last_updated, "title": movie_name, "genre_ids": genre, "list_status": list_status };
        }
        // If movie is already present
        else {
            this.bookmarked_data[movieid].list_status = list_status;
            this.bookmarked_data[movieid].last_updated = last_updated;
        }
        localStorage.setItem("BOOKMARKED_DATA", JSON.stringify(this.bookmarked_data));
        console.log("Bookmarked Data:");
        console.log(this.bookmarked_data);
        this.send_bookmarks_to_db();
        console.log("Bookmarked Data:\n" + localStorage.getItem("BOOKMARKED_DATA"));
    };
    UserComponent.prototype.JSONify_click = function (movie) {
        var movieid = movie.id;
        var genre = movie.genre_ids;
        var movie_name = movie.title;
        var date = new Date();
        var last_updated = date.getTime();
        this.clicked_data[movieid] = { "last_updated": last_updated, "title": movie_name, "genre_ids": genre };
        localStorage.setItem("CLICKED_DATA", JSON.stringify(this.clicked_data));
        console.log("Clicked Data:");
        console.log(this.clicked_data);
        this.send_impressions_to_db();
        console.log("Clicked Data:\n" + localStorage.getItem("CLICKED_DATA"));
    };
    UserComponent.prototype.JSONify_like = function (movie, like_status) {
        var movieid = movie.id;
        var genre = movie.genre_ids;
        var movie_name = movie.title;
        var date = new Date();
        var last_updated = date.getTime();
        var check = this.check_duplicate_tracks(movieid);
        if (check == true) {
            this.like_status_data[movieid] = { "last_updated": last_updated, "title": movie_name, "genre_ids": genre, "like_status": like_status };
        }
        else {
            this.like_status_data[movieid] = { "last_updated": last_updated, "title": movie_name, "genre_ids": genre, "like_status": like_status };
        }
        localStorage.setItem("REACTION_DATA", JSON.stringify(this.like_status_data));
        console.log("Like Status Data:");
        console.log(this.like_status_data);
        this.send_reactions_to_db();
        console.log("Liked Status Data:\n" + localStorage.getItem("REACTION_DATA"));
    };
    UserComponent.prototype.send_impressions_to_db = function () {
        var _this = this;
        if (localStorage.getItem("Email")) {
            this.http_sendTrackingData.post("/sendClicksData", { "user_id": localStorage.getItem("Email"), "JSON_String": localStorage.getItem("CLICKED_DATA") }).subscribe(function (data) {
                _this.local_send_clicks_data = data;
                console.log("IMPRESSIONS TO DB SUCCESSFUL");
            }, function (err) {
                console.warn(err);
            });
        }
    };
    UserComponent.prototype.send_bookmarks_to_db = function () {
        var _this = this;
        if (localStorage.getItem("Email")) {
            this.http_sendAdditionalData.post("/sendBookmarkData", { "user_id": localStorage.getItem("Email"), "JSON_String": localStorage.getItem("BOOKMARKED_DATA") }).subscribe(function (data) {
                _this.local_send_bookmark_data = data;
                console.log("BOOKMARKS TO DB SUCCESSFUL");
            }, function (err) {
                console.warn(err);
            });
        }
    };
    UserComponent.prototype.send_reactions_to_db = function () {
        var _this = this;
        if (localStorage.getItem("Email")) {
            this.http_sendTrackingData.post("/sendReactionData", {
                "user_id": localStorage.getItem("Email"),
                "JSON_String": localStorage.getItem("REACTION_DATA")
            }).subscribe(function (data) {
                _this.local_send_tracking_data = data;
                console.log("REACTION TO DB SUCCESSFUL");
            }, function (err) {
                console.warn(err);
            });
        }
    };
    UserComponent.prototype.check_duplicate_tracks = function (movieid) {
        if (this.like_status_data[movieid] === undefined) {
            return false;
        }
        else {
            return true;
        }
    };
    UserComponent.prototype.prev = function () {
        if (this.page_number > 1) {
            this.page_number -= 1;
        }
        window.scrollTo(0, 0);
        this.sendReq(this.query, this.event);
    };
    UserComponent.prototype.next = function () {
        if (this.page_number < this.data.total_pages) {
            this.page_number += 1;
        }
        window.scrollTo(0, 0);
        this.sendReq(this.query, this.event);
    };
    UserComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user',
            template: __webpack_require__(/*! ./user.component.html */ "./src/app/components/user/user.component.html"),
            styles: [__webpack_require__(/*! ./user.component.css */ "./src/app/components/user/user.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], UserComponent);
    return UserComponent;
}());



/***/ }),

/***/ "./src/app/material/material.module.ts":
/*!*********************************************!*\
  !*** ./src/app/material/material.module.ts ***!
  \*********************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatCardModule"]
            ],
            exports: [
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatCardModule"]
            ]
        })
    ], MaterialModule);
    return MaterialModule;
}());



/***/ }),

/***/ "./src/app/truncate/truncate.module.ts":
/*!*********************************************!*\
  !*** ./src/app/truncate/truncate.module.ts ***!
  \*********************************************/
/*! exports provided: TruncatePipe, TruncateModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TruncatePipe", function() { return TruncatePipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TruncateModule", function() { return TruncateModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var TruncatePipe = /** @class */ (function () {
    function TruncatePipe() {
    }
    TruncatePipe.prototype.transform = function (value, limit, completeWords, ellipsis) {
        if (limit === void 0) { limit = 133; }
        if (completeWords === void 0) { completeWords = false; }
        if (ellipsis === void 0) { ellipsis = '...'; }
        if (completeWords) {
            limit = value.substr(0, 134).lastIndexOf(' ');
        }
        return "" + value.substr(0, limit) + ellipsis;
    };
    TruncatePipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'truncate'
        })
    ], TruncatePipe);
    return TruncatePipe;
}());

var TruncateModule = /** @class */ (function () {
    function TruncateModule() {
    }
    return TruncateModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
//import './polyfills.ts';




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/sanjothshaw/Projects/Haxer/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map