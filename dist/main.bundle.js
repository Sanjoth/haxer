webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<app-header></app-header>\n<br><br>\n<router-outlet></router-outlet>\n<br/> <br/>\n<app-footer></app-footer>\n\n\n\n\n\n\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

//import { HttpClient } from '@angular/common/http';
var AppComponent = (function () {
    function AppComponent() {
    }
    /*
    constructor(private http: HttpClient){
    }
    */
    AppComponent.prototype.remOver = function () {
        document.getElementById("mySidenav").style.width = "0";
        document.getElementById("overlay").style.display = "none";
    };
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__material_material_module__ = __webpack_require__("../../../../../src/app/material/material.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__truncate_truncate_module__ = __webpack_require__("../../../../../src/app/truncate/truncate.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_user_user_component__ = __webpack_require__("../../../../../src/app/components/user/user.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_footer_footer_component__ = __webpack_require__("../../../../../src/app/components/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_header_header_component__ = __webpack_require__("../../../../../src/app/components/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_sign_up_sign_up_component__ = __webpack_require__("../../../../../src/app/components/sign-up/sign-up.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_log_in_log_in_component__ = __webpack_require__("../../../../../src/app/components/log-in/log-in.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_movie_detail_movie_detail_component__ = __webpack_require__("../../../../../src/app/components/movie-detail/movie-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_user_detail_user_detail_component__ = __webpack_require__("../../../../../src/app/components/user-detail/user-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_page_not_found_page_not_found_component__ = __webpack_require__("../../../../../src/app/components/page-not-found/page-not-found.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_about_us_about_us_component__ = __webpack_require__("../../../../../src/app/components/about-us/about-us.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




// Import HttpClientModule from @angular/common/http

//Angular Material 2


//Self Made











var appRoutes = [
    { path: 'signup', component: __WEBPACK_IMPORTED_MODULE_12__components_sign_up_sign_up_component__["a" /* SignUpComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_13__components_log_in_log_in_component__["a" /* LogInComponent */] },
    { path: 'movie/:id', component: __WEBPACK_IMPORTED_MODULE_14__components_movie_detail_movie_detail_component__["a" /* MovieDetailComponent */] },
    { path: 'user/:id', component: __WEBPACK_IMPORTED_MODULE_15__components_user_detail_user_detail_component__["a" /* UserDetailComponent */] },
    { path: 'about', component: __WEBPACK_IMPORTED_MODULE_17__components_about_us_about_us_component__["a" /* AboutUsComponent */] },
    { path: '', component: __WEBPACK_IMPORTED_MODULE_9__components_user_user_component__["a" /* UserComponent */] }
    /*{
      path: 'heroes',
      component: HeroListComponent,
      data: { title: 'Heroes List' }
    }*/
    /*
    { path: '',
      redirectTo: '/browse',
      pathMatch: 'full'
    }*/ ,
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_16__components_page_not_found_page_not_found_component__["a" /* PageNotFoundComponent */] }
];
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["K" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_9__components_user_user_component__["a" /* UserComponent */],
                __WEBPACK_IMPORTED_MODULE_7__truncate_truncate_module__["a" /* TruncatePipe */],
                __WEBPACK_IMPORTED_MODULE_10__components_footer_footer_component__["a" /* FooterComponent */],
                __WEBPACK_IMPORTED_MODULE_11__components_header_header_component__["a" /* HeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_12__components_sign_up_sign_up_component__["a" /* SignUpComponent */],
                __WEBPACK_IMPORTED_MODULE_13__components_log_in_log_in_component__["a" /* LogInComponent */],
                __WEBPACK_IMPORTED_MODULE_14__components_movie_detail_movie_detail_component__["a" /* MovieDetailComponent */],
                __WEBPACK_IMPORTED_MODULE_15__components_user_detail_user_detail_component__["a" /* UserDetailComponent */],
                __WEBPACK_IMPORTED_MODULE_16__components_page_not_found_page_not_found_component__["a" /* PageNotFoundComponent */],
                __WEBPACK_IMPORTED_MODULE_17__components_about_us_about_us_component__["a" /* AboutUsComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* RouterModule */].forRoot(appRoutes
                /*,{ enableTracing: true } // <-- debugging purposes only */
                ),
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                // Include it under 'imports' in your application module
                // after BrowserModule.
                __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_5__material_material_module__["a" /* MaterialModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/components/about-us/about-us.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/about-us/about-us.component.html":
/***/ (function(module, exports) {

module.exports = "<br><br>\n<p>\n  about-us works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/components/about-us/about-us.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutUsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutUsComponent = (function () {
    function AboutUsComponent() {
    }
    AboutUsComponent.prototype.ngOnInit = function () {
    };
    AboutUsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-about-us',
            template: __webpack_require__("../../../../../src/app/components/about-us/about-us.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/about-us/about-us.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutUsComponent);
    return AboutUsComponent;
}());

//# sourceMappingURL=about-us.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/footer/footer.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".footer {\n  font-family: 'Source Sans Pro', sans-serif;\n    position: absolute;\n    bottom: 0;\n    width: 100%;\n    height: 60px;\n    line-height: 60px;\n    background-color: #f5f5f5;\n    text-align: center;\n  }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<footer class=\"footer\">\n    <div class=\"container\">\n      <span class=\"text-muted\">\n        Made with <i class=\"fa fa-heart\" aria-hidden=\"true\" style=\"color: red;\"></i>️ by Sanjoth\n      </span>\n    </div>\n  </footer>"

/***/ }),

/***/ "../../../../../src/app/components/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-footer',
            template: __webpack_require__("../../../../../src/app/components/footer/footer.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());

//# sourceMappingURL=footer.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/header/header.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "b{\n    font-size: 19px;\n}\na {\n    text-decoration:none; \n    color:white;  \n}\n\n.mat-toolbar{\n    position: fixed;\n    top: 0;\n    right: 0;\n    left: 0;\n    z-index: 9;\n    color: white; /*Text Color of Nav bar Text*/\n    font-family: 'Source Sans Pro', sans-serif !important;\n}\n\n.sidenav {\n    height: 100%;\n    width: 0;\n    position: fixed;\n    z-index: 1;\n    top: 0;\n    left: 0;\n    background-color: #000;\n    overflow-x: hidden;\n    transition: 0.5s;\n    padding-top: 60px;\n}\n\n.sidenav a {\n    padding: 8px 8px 8px 32px;\n    text-decoration: none;\n    font-size: 25px;\n    color: white;\n    display: block;\n    transition: 0.3s;\n}\n\n.sidenav a:hover {\n    color: #616161;\n}\n\n@media screen and (max-height: 450px) {\n  .sidenav {padding-top: 15px;}\n  .sidenav a {font-size: 16px;}\n}\n\n#cont {\n    width:100%;\n    text-align:center;\n}\n\n#left {\n    float:left; \n}\n\n#center {\n    display: inline-block;\n    margin:0 auto;\n    width:100px;\n}\n\n#right {\n    float:right;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n    <mat-toolbar id=\"cont\" color=\"accent\">\n      <div id=\"left\"><i class=\"fa fa-user fa-lg\" aria-hidden=\"true\" (click)=\"toggNav()\"></i></div>\n      <div id=\"center\"><a routerLink=\"/\" routerLinkActive=\"active\"><b>Haxèr</b></a></div>\n      <div id=\"right\" [mat-menu-trigger-for]=\"menu\"><i class=\"fa fa-cog fa-lg\" aria-hidden=\"true\"></i></div>\n    </mat-toolbar>\n    <mat-menu x-position=\"before\" #menu=\"matMenu\">\n      <button mat-menu-item>Settings</button>\n      <button mat-menu-item>Sign out</button>\n    </mat-menu>\n  \n  </div>\n  <div id=\"mySidenav\" class=\"sidenav\" (click)=\"toggNav()\">\n  <a routerLink=\"/about\" routerLinkActive=\"active\">About</a>\n  <a routerLink=\"/login\" routerLinkActive=\"active\">Sign in</a>\n  <a routerLink=\"/signup\" routerLinkActive=\"active\">Register</a>\n  <a routerLink=\"/user/:id\" routerLinkActive=\"active\">My List</a>\n  </div>\n"

/***/ }),

/***/ "../../../../../src/app/components/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent.prototype.toggNav = function () {
        if (document.getElementById("mySidenav").style.width == "220px") {
            document.getElementById("mySidenav").style.width = "0";
            document.getElementById("overlay").style.display = "none";
        }
        else {
            document.getElementById("mySidenav").style.width = "220px";
            document.getElementById("overlay").style.display = "block";
        }
    };
    HeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-header',
            template: __webpack_require__("../../../../../src/app/components/header/header.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());

//# sourceMappingURL=header.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/log-in/log-in.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "body {\n\tpadding: 0;\n\tmargin: 0;\n\tbackground: ;\n\n}\n\nhr {\n    display: block;\n    height: 1px;\n    border: 0;\n    border-top: 1px solid #ccc;\n    margin: 1em 0;\n    padding: 0;\n}\n\nbody a {\n\tcolor:red;\n\ttransition: 0.5s all;\n\t-webkit-transition: 0.5s all;\n\t-moz-transition: 0.5s all;\n\t-o-transition: 0.5s all;\n\t-ms-transition: 0.5s all;\n\ttext-decoration: none;\n}\nbody a:hover {\n\ttext-decoration: none;\n}\nbody a:focus, a:hover {\n\ttext-decoration: none;\n}\ninput[type=\"button\"], input[type=\"submit\"] {\n\ttransition: 0.5s all;\n\t-webkit-transition: 0.5s all;\n\t-moz-transition: 0.5s all;\n\t-o-transition: 0.5s all;\n\t-ms-transition: 0.5s all;\n}\nh1, h2, h3, h4, h5, h6 {\n\tmargin: 0;\n\tpadding: 0;\n}\np {\n\tmargin: 0;\n}\nul {\n\tmargin: 0;\n\tpadding: 0;\n}\nli {\n\tlist-style-type:none;\n}\nlabel {\n\tmargin: 0;\n}\na:focus, a:hover {\n\ttext-decoration: none;\n\toutline: none;\n}\n\nbody{\n\t/* background: url('../images/5copy.jpg') no-repeat; */\n    background-size: cover;\n\tmin-height: 100vh;\n}\n.agile-login {\n\n\t\tpadding-top: 60px;\n}\n.wrapper {\n    width: 450px;\n    margin: auto;\n    text-align: center;\n    padding: 3% 0px;\n    background-color: rgba(6, 5, 5, 0.33);\n\twebkit-box-shadow: 10px 3px 66px -19px rgba(0,0,0,0.75);\n    box-shadow: 10px 3px 66px -19px rgba(0,0,0,0.75);\n}\n.w3ls-form {\n    display: inline-block;\n    width: 350px;\n    margin: auto;\n    text-align: left;\n}\nlabel, input[type=\"text\"],input[type=\"submit\"], input[type=\"password\"]{\n    display: block;\n\t    font-family: 'Source Sans Pro', sans-serif;\n}\ninput[type=\"text\"], input[type=\"password\"]{\n    outline: 0;\n    padding: 12px 15px;\n    border-radius: 25px;\n    border: none;\n    background-color: rgba(87, 102, 103, 0.59);\n    color: white;\n\twidth: 90%;\n\tletter-spacing: 1px;\n}\n.agile-login h1 {\n    text-align: center;\n    color: #fff;\n    margin-bottom: 2%;\n    font-size: 45px;\n    font-weight: 300;\n    letter-spacing: 5px;\n    text-transform: uppercase;\n}\n.wrapper h2 {\n\tmargin-bottom: 30px;\n    text-transform: uppercase;\n    font-size: 26px;\n    color: white;\n    font-weight: 600;\n    letter-spacing: 2px;\n}\na.pass {\n    font-size: 15px;\n\t    color: #efbb42;\n\t\tfont-family: 'Source Sans Pro', sans-serif;\n\t\t    letter-spacing: 2px;\n}\n.w3ls-form a {\n    display: block;\n    text-align: right;\n\t    margin: 15px 0px;\n}\n\n label {\n    margin: 20px 0px 8px 15px;\n    font-size: 13px;\n     color: #fff;\n    font-family: 'Source Sans Pro', sans-serif;\n     text-transform: uppercase;\n\tletter-spacing: 2px;\n}\ninput[type=\"submit\"] {\n\tmargin: 20px auto;\n    padding: 9px 60px;\n    border-radius: 25px;\n    font-size: 18px;\n    border: none;\n    background-color: transparent;\n    color: #fff;\n    text-transform: uppercase;\n    outline: 0;\n    border: 1px solid #4f5d61;\n\tcursor: pointer;\n\t    width: 100%;\n\t    letter-spacing: 1px;\t\n}\ninput[type=\"submit\"]:hover {\n    color: #fff;\n    background-color:  rgba(0, 245, 255, 0.69);\n}\n::-webkit-input-placeholder { /* Chrome/Opera/Safari */\n  color: #ccc6c6;\n}\n::-moz-placeholder { /* Firefox 19+ */\n  color: #ccc6c6;\n}\n:-ms-input-placeholder { /* IE 10+ */\n  color: #ccc6c6;\n}\n:-moz-placeholder { /* Firefox 18- */\n  color: #ccc6c6;\n}\n\n.agile-icons {\n    padding: 3% 0px;\n}\nspan.fa.fa-google:hover {\n    background-color: #00b6f1;\n    color: white;\n}\nspan.fa.fa-facebook:hover {\n    background-color: #3b5998;\n    color: white;\n}\n.agile-icons span.fa {\n\tfont-size: 12px;\n    margin: auto 10px;\n    color: #fff;\n    width: 32px;\n    height: 32px;\n    line-height: 32px;\n    border-radius: 50%;\n    background-color: rgba(243, 249, 249, 0.22);\n}\n/* responsive */\n@media screen and (max-width: 568px){\n\t.agile-login h1 {\n\t\t    font-size: 40px;\n\t\t\t\n\t}\n}\n\n@media screen and (max-width: 480px){\n\tbody{\n\t\tbackground-position: center;\n\t}\n\t.agile-login {\n    padding-top: 35px;\n}\n\t.agile-login h1 {\n    font-size: 35px;\n    letter-spacing: 4px;\n}\n\t.wrapper h2 {\n    font-size: 26px;\n\n}\n.wrapper {\n    width: 370px;\n}\n\n}\n@media screen and (max-width: 414px){\n\t.agile-login h1 {\n    font-size: 30px;\n\tletter-spacing: 3px;\n\t    margin-bottom: 6%;\n}\n.wrapper {\n    width: 320px;\n}\n.w3ls-form {\n\t    width: 300px;\n}\n.wrapper h2 {\n    font-size: 20px;\n    margin-bottom: 15px;\n}\t\n}\n\n@media screen and (max-width: 375px){\n\t.agile-login h1 {\n    font-size: 29px;\n}\n\tinput[type=\"text\"],input[type=\"password\"] {\n\t\twidth: 90%;\n\t}\n\tlabel {\n    margin: 20px 0px 5px 10px;\n    font-size: 13px;\n    color: #fff;\n\t}\n}\n\n@media screen and (max-width: 320px){\n.w3ls-form {\n    width: 270px;\n}\n.agile-login h1 {\n    font-size: 23px;\n}\n.wrapper {\n    width: 280px;\n}\n.wrapper h2 {\n    font-size: 18px;\n    margin-bottom: 10px;\n}\ninput[type=\"submit\"] {\n    margin: 10px auto;\n\t    padding: 8px 60px;\n}\n.agile-login {\n    padding-top: 30px;\n}\nlabel {\n    margin: 15px 0px 5px 10px;\n}\ninput[type=\"text\"], input[type=\"password\"]{\n    padding: 10px 15px;\n}\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/log-in/log-in.component.html":
/***/ (function(module, exports) {

module.exports = "<br><br>\n<span class=\"agile-login\">\n  <div class=\"wrapper\">\n    <h2>Sign In</h2>\n    <div class=\"w3ls-form\">\n      <form action=\"/\" method=\"post\">\n        <label>Username</label>\n        <input type=\"text\" name=\"email\" placeholder=\"Email Address\" required />\n        <label>Password</label>\n        <input type=\"password\" name=\"password\" placeholder=\"Password\" required />\n        <a href=\"#\" class=\"pass\">Forgot Password ?</a>\n        <input type=\"submit\" value=\"Log In\" />\n      </form>\n    </div>\n    <!--\n    <div class=\"agile-icons\">\n      <a href=\"#\"><span class=\"fa fa-google\" aria-hidden=\"true\"></span></a>\n      <a href=\"#\"><span class=\"fa fa-facebook\"></span></a>\n    </div>\n  -->\n    <div class=\"w3ls-form\">\n       <hr><input type=\"submit\" value=\"Register\" /></div>\n  </div>\n  <br>\n</span>"

/***/ }),

/***/ "../../../../../src/app/components/log-in/log-in.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LogInComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LogInComponent = (function () {
    function LogInComponent() {
    }
    LogInComponent.prototype.ngOnInit = function () {
    };
    LogInComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-log-in',
            template: __webpack_require__("../../../../../src/app/components/log-in/log-in.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/log-in/log-in.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LogInComponent);
    return LogInComponent;
}());

//# sourceMappingURL=log-in.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/movie-detail/movie-detail.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/movie-detail/movie-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<br><br>\n<p>\n  movie-detail works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/components/movie-detail/movie-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MovieDetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MovieDetailComponent = (function () {
    function MovieDetailComponent() {
    }
    MovieDetailComponent.prototype.ngOnInit = function () {
    };
    MovieDetailComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-movie-detail',
            template: __webpack_require__("../../../../../src/app/components/movie-detail/movie-detail.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/movie-detail/movie-detail.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MovieDetailComponent);
    return MovieDetailComponent;
}());

//# sourceMappingURL=movie-detail.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/page-not-found/page-not-found.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/page-not-found/page-not-found.component.html":
/***/ (function(module, exports) {

module.exports = "<br><br>\n<p>\n  page-not-found works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/components/page-not-found/page-not-found.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageNotFoundComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PageNotFoundComponent = (function () {
    function PageNotFoundComponent() {
    }
    PageNotFoundComponent.prototype.ngOnInit = function () {
    };
    PageNotFoundComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-page-not-found',
            template: __webpack_require__("../../../../../src/app/components/page-not-found/page-not-found.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/page-not-found/page-not-found.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PageNotFoundComponent);
    return PageNotFoundComponent;
}());

//# sourceMappingURL=page-not-found.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/sign-up/sign-up.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "body {\n\tpadding: 0;\n\tmargin: 0;\n\tbackground: ;\n}\nbody a {\n\tcolor:red;\n\ttransition: 0.5s all;\n\t-webkit-transition: 0.5s all;\n\t-moz-transition: 0.5s all;\n\t-o-transition: 0.5s all;\n\t-ms-transition: 0.5s all;\n\ttext-decoration: none;\n}\nbody a:hover {\n\ttext-decoration: none;\n}\nbody a:focus, a:hover {\n\ttext-decoration: none;\n}\ninput[type=\"button\"], input[type=\"submit\"] {\n\ttransition: 0.5s all;\n\t-webkit-transition: 0.5s all;\n\t-moz-transition: 0.5s all;\n\t-o-transition: 0.5s all;\n\t-ms-transition: 0.5s all;\n}\nh1, h2, h3, h4, h5, h6 {\n\tmargin: 0;\n\tpadding: 0;\n}\np {\n\tmargin: 0;\n}\nul {\n\tmargin: 0;\n\tpadding: 0;\n}\nli {\n\tlist-style-type:none;\n}\nlabel {\n\tmargin: 0;\n}\na:focus, a:hover {\n\ttext-decoration: none;\n\toutline: none;\n}\n\nbody{\n\t/* background: url('../images/5copy.jpg') no-repeat; */\n    background-size: cover;\n\tmin-height: 100vh;\n}\n.agile-login {\n\n\t\tpadding-top: 60px;\n}\n.wrapper {\n    width: 450px;\n    margin: auto;\n    text-align: center;\n    padding: 3% 0px;\n    background-color: rgba(6, 5, 5, 0.33);\n\twebkit-box-shadow: 10px 3px 66px -19px rgba(0,0,0,0.75);\n    box-shadow: 10px 3px 66px -19px rgba(0,0,0,0.75);\n}\n.w3ls-form {\n    display: inline-block;\n    width: 350px;\n    margin: auto;\n    text-align: left;\n}\nlabel, input[type=\"text\"],input[type=\"submit\"], input[type=\"password\"]{\n    display: block;\n\t    font-family: 'Source Sans Pro', sans-serif;\n}\ninput[type=\"text\"], input[type=\"password\"]{\n    outline: 0;\n    padding: 12px 15px;\n    border-radius: 25px;\n    border: none;\n    background-color: rgba(87, 102, 103, 0.59);\n    color: white;\n\twidth: 90%;\n\tletter-spacing: 1px;\n}\n.agile-login h1 {\n    text-align: center;\n    color: #fff;\n    margin-bottom: 2%;\n    font-size: 45px;\n    font-weight: 300;\n    letter-spacing: 5px;\n    text-transform: uppercase;\n}\n.wrapper h2 {\n\tmargin-bottom: 30px;\n    text-transform: uppercase;\n    font-size: 26px;\n    color: white;\n    font-weight: 600;\n    letter-spacing: 2px;\n}\na.pass {\n    font-size: 15px;\n\t    color: #efbb42;\n\t\tfont-family: 'Source Sans Pro', sans-serif;\n\t\t    letter-spacing: 2px;\n}\n.w3ls-form a {\n    display: block;\n    text-align: right;\n\t    margin: 15px 0px;\n}\n\n label {\n    margin: 20px 0px 8px 15px;\n    font-size: 13px;\n     color: #fff;\n    font-family: 'Source Sans Pro', sans-serif;\n     text-transform: uppercase;\n\tletter-spacing: 2px;\n}\ninput[type=\"submit\"] {\n\tmargin: 20px auto;\n    padding: 9px 60px;\n    border-radius: 25px;\n    font-size: 18px;\n    border: none;\n    background-color: transparent;\n    color: #fff;\n    text-transform: uppercase;\n    outline: 0;\n    border: 1px solid #4f5d61;\n\tcursor: pointer;\n\t    width: 100%;\n\t    letter-spacing: 1px;\t\n}\ninput[type=\"submit\"]:hover {\n    color: #fff;\n    background-color:  rgba(0, 245, 255, 0.69);\n}\n::-webkit-input-placeholder { /* Chrome/Opera/Safari */\n  color: #ccc6c6;\n}\n::-moz-placeholder { /* Firefox 19+ */\n  color: #ccc6c6;\n}\n:-ms-input-placeholder { /* IE 10+ */\n  color: #ccc6c6;\n}\n:-moz-placeholder { /* Firefox 18- */\n  color: #ccc6c6;\n}\n\n.agile-icons {\n    padding: 3% 0px;\n}\nspan.fa.fa-google:hover {\n    background-color: #00b6f1;\n    color: white;\n}\nspan.fa.fa-facebook:hover {\n    background-color: #3b5998;\n    color: white;\n}\n.agile-icons span.fa {\n\tfont-size: 12px;\n    margin: auto 10px;\n    color: #fff;\n    width: 32px;\n    height: 32px;\n    line-height: 32px;\n    border-radius: 50%;\n    background-color: rgba(243, 249, 249, 0.22);\n}\n/* responsive */\n@media screen and (max-width: 568px){\n\t.agile-login h1 {\n\t\t    font-size: 40px;\n\t\t\t\n\t}\n}\n\n@media screen and (max-width: 480px){\n\tbody{\n\t\tbackground-position: center;\n\t}\n\t.agile-login {\n    padding-top: 35px;\n}\n\t.agile-login h1 {\n    font-size: 35px;\n    letter-spacing: 4px;\n}\n\t.wrapper h2 {\n    font-size: 26px;\n\n}\n.wrapper {\n    width: 370px;\n}\n\n}\n@media screen and (max-width: 414px){\n\t.agile-login h1 {\n    font-size: 30px;\n\tletter-spacing: 3px;\n\t    margin-bottom: 6%;\n}\n.wrapper {\n    width: 320px;\n}\n.w3ls-form {\n\t    width: 300px;\n}\n.wrapper h2 {\n    font-size: 20px;\n    margin-bottom: 15px;\n}\t\n}\n\n@media screen and (max-width: 375px){\n\t.agile-login h1 {\n    font-size: 29px;\n}\n\tinput[type=\"text\"],input[type=\"password\"] {\n\t\twidth: 90%;\n\t}\n\tlabel {\n    margin: 20px 0px 5px 10px;\n    font-size: 13px;\n    color: #fff;\n\t}\n}\n\n@media screen and (max-width: 320px){\n.w3ls-form {\n    width: 270px;\n}\n.agile-login h1 {\n    font-size: 23px;\n}\n.wrapper {\n    width: 280px;\n}\n.wrapper h2 {\n    font-size: 18px;\n    margin-bottom: 10px;\n}\ninput[type=\"submit\"] {\n    margin: 10px auto;\n\t    padding: 8px 60px;\n}\n.agile-login {\n    padding-top: 30px;\n}\nlabel {\n    margin: 15px 0px 5px 10px;\n}\ninput[type=\"text\"], input[type=\"password\"]{\n    padding: 10px 15px;\n}\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/sign-up/sign-up.component.html":
/***/ (function(module, exports) {

module.exports = "<br><br>\n<span class=\"agile-login\">\n  <div class=\"wrapper\">\n    <h2>Sign Up</h2>\n    <div class=\"w3ls-form\">\n      <form action=\"/regUser\" method=\"get\">\n        <label>Name</label>\n        <input type=\"text\" name=\"name\" placeholder=\"Name\" required/>\n        <label>Email Address</label>\n        <input type=\"text\" name=\"email\" placeholder=\"Email\" required/>\n        <label>Password</label>\n        <input type=\"password\" name=\"password1\" placeholder=\"Password\" required />\n        <label>Confirm Password</label>\n        <input type=\"password\" name=\"password2\" placeholder=\"Confirm Password\" required /><br>\n        <div class=\"g-recaptcha\" data-theme=\"dark\" data-sitekey=\"6LdcijgUAAAAAHESsqShZ_pNE48MEcb_GxG8KSrq\" data-callback=\"correctCaptcha\"></div>\n        <a href=\"#\" class=\"pass\">Already Registered ?</a>\n        <input type=\"submit\" value=\"Register\" />\n      </form>\n    </div>\n    <!--\n    <div class=\"agile-icons\">\n      <a href=\"#\"><span class=\"fa fa-google\" aria-hidden=\"true\"></span></a>\n      <a href=\"#\"><span class=\"fa fa-facebook\"></span></a>\n    </div>\n  -->\n  </div>\n  <br>\n</span>"

/***/ }),

/***/ "../../../../../src/app/components/sign-up/sign-up.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignUpComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SignUpComponent = (function () {
    function SignUpComponent() {
        this.check = false;
    }
    SignUpComponent.prototype.ngOnInit = function () {
    };
    SignUpComponent.prototype.correctCaptcha = function () {
        this.check = true;
    };
    SignUpComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-sign-up',
            template: __webpack_require__("../../../../../src/app/components/sign-up/sign-up.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/sign-up/sign-up.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SignUpComponent);
    return SignUpComponent;
}());

//# sourceMappingURL=sign-up.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/user-detail/user-detail.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/user-detail/user-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<br><br>\n<p>\n  user-detail works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/components/user-detail/user-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserDetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UserDetailComponent = (function () {
    function UserDetailComponent() {
    }
    UserDetailComponent.prototype.ngOnInit = function () {
    };
    UserDetailComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-user-detail',
            template: __webpack_require__("../../../../../src/app/components/user-detail/user-detail.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/user-detail/user-detail.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], UserDetailComponent);
    return UserDetailComponent;
}());

//# sourceMappingURL=user-detail.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/user/user.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "table, th , td  {\n    border: 1px solid grey;\n    border-collapse: collapse;\n    padding: 10px;\n  }\n  table tr:nth-child(odd) {\n    background-color: #f1f1f1;\n  }\n  table tr:nth-child(even) {\n    background-color: #ffffff;\n  }\n\n  table\n  { \n  margin-left: auto;\n  margin-right: auto;\n  }\n\n  /*  Material Card */\n  .example-card {\n    width: 400px; \n    font-family: 'Source Sans Pro', sans-serif;\n  }\n\n\n\n\n\n  \n  \n  \n  ", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/user/user.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"overlay\" (click)=\"remOver()\"></div>\n<div class=\"container\" style=\"text-align:center; position:relative;\">\n  <h2>\n   <br> {{title}} <br>\n  </h2>\n  <img _ngcontent-c0=\"\" src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg==\" width=\"50\">\n</div>\n<br>\n<div style=\"text-align:center\">\n    Search: <input type=\"text\" id=\"query\" autocomplete=\"off\" placeholder=\"Keywords\" (keyup)=\"sendReq(query.value)\" [(ngModel)]=\"texts\" name=\"query\" #query>\n</div>\n<div *ngIf=\"data\">\n      <div style=\"text-align:center\"> \n          <p>You searched for ' <b>{{texts}}</b> ' </p>\n          <h5>Search Details</h5>\n        <table> \n          <tr>\n            <th>Page </th>\n            <th>Total Results</th>\n            <th>Total Pages</th>\n            <th>Results per page</th>\n          </tr>\n          <tr>\n            <td>{{data.page}}</td>\n            <td>{{data.total_results}}</td>\n            <td>{{data.total_pages}}</td>\n            <td>{{data.results.length}}</td>\n          </tr>\n        </table>  \n       </div> \n      <div class=\"card-group\">\n  <mat-card class=\"example-card\" *ngFor=\"let movie of data.results; let myIndex = index\" (click)=\"trackClick(movie.id,movie.genre_ids)\">\n      <mat-card-header>\n          <mat-card-title>\n              <i class=\"fa fa-film fa-lg\" aria-hidden=\"true\"></i> <b> {{movie.title}} </b>\n         </mat-card-title>\n      </mat-card-header>\n        <img mat-card-image src=\"https://image.tmdb.org/t/p/w300/{{movie.backdrop_path}}\" onerror=\"this.onerror=null;this.src='/assets/nf.png'\">\n      <mat-card-content>\n          <div class=\"d-flex justify-content-between\">\n              <div>\n                  <i class=\"fa fa-calendar\" aria-hidden=\"true\"></i> {{movie.release_date}}\n              </div>\n              <div>\n                  <i class=\"fa fa-imdb fa-lg\" aria-hidden=\"true\"></i> {{movie.vote_average}} \n              </div>\n         </div>\n          \n      <i><span style=\"color: #666; font-size: 12px;\" *ngFor=\"let item of movie.genre_ids;let i = index\">{{this.gen[item]}}<span *ngIf=\"i < movie.genre_ids.length-1\">,</span></span>.</i><br>\n      <span *ngIf=\"movie.overview.length>140\">{{movie.overview | truncate : 140 : true}} </span> \n      <span *ngIf=\"movie.overview.length<140\">{{movie.overview}} </span><br> \n\n      <div class=\"d-flex justify-content-between\">\n          <div>\n              <i class=\"fa fa-eye fa-lg\" aria-hidden=\"true\"></i> <span *ngIf=\"movie.adult; else templateName\">Restricted</span><ng-template #templateName>\n                  Unrestricted\n              </ng-template>\n          </div>\n          <div>\n              <i class=\"fa fa-language fa-lg\" aria-hidden=\"true\"></i> {{movie.original_language}}\n          </div>\n     </div>\n      <i class=\"fa fa-rocket fa-lg\" aria-hidden=\"true\"></i>  {{movie.popularity}} <br> \n    </mat-card-content>  \n    <mat-card-actions style=\"text-align: center\">     \n        <button mat-button><i class=\"fa fa-thumbs-o-up fa-lg\" aria-hidden=\"true\"></i></button>\n        <button mat-button><i class=\"fa fa-thumbs-o-down fa-lg\" aria-hidden=\"true\"></i></button>\n        <button mat-button><i class=\"fa fa-bookmark-o fa-lg\" aria-hidden=\"true\"></i></button>\n      </mat-card-actions>   \n  </mat-card>\n  </div>\n</div>\n\n<br/> <br/>\n  <!-- OLD CODE\n  <b>Movie Details:</b><br>\n  Movie id: {{data.results[0].id}}<br>\n  Title: {{data.results[0].title}}<br>\n  Genres: <ol><li *ngFor=\"let item of data.results[0].genre_ids\">\n    {{item }} </li> </ol> <br> \n  Language: {{data.results[0].original_language}}<br>\n  IMDb Rating: {{data.results[0].vote_average}}<br>\n  Vote Count: {{data.results[0].vote_count}}<br>\n  Overview: {{data.results[0].overview}}<br>\n  Popularity: {{data.results[0].popularity}}<br>\n  Adult: {{data.results[0].adult}}<br>\n  poster_path: {{data.results[0].poster_path}}<br>\n  backdrop_path: {{data.results[0].id}}<br>\n  <br><br>\n  \n  <b>Search Details:</b><br>\n  page: {{data.page}}<br>\n  total_results: {{data.total_results}}<br>\n  total_pages: {{data.total_pages}}<br>\n  results:{{data.results.length}}<br>\n\n  -->\n    <!-- OLD CODe\n\n        \n  <ol > \n    <li *ngFor=\"let movie of data.results; let myIndex = index\" (click)=\"trackClick(movie.id,movie.genre_ids)\" #yo> \n      <b> Movie ID: </b> {{movie.id}} <br>\n      <b> Movie Title: </b> {{movie.title}} <br> \n\n      <b> Genres: </b><ol> <li *ngFor=\"let item of movie.genre_ids\">\n          {{item}} </li> </ol> \n    \n      <b> Original Language: </b> {{movie.original_language}} <br>\n      <b> IMDb Rating: </b> {{movie.vote_average}} <br>\n      <b> Vote Count: </b> {{movie.vote_count}} <br> \n      <b> Movie Overview: </b> {{movie.overview}} <br> \n      <b> Popularity: </b> {{movie.popularity}} <br> \n      <b> Adult: </b> {{movie.adult}} <br>\n      <b> Year: </b> {{movie.release_date}} <br>\n    </li> \n  </ol>\n</div>\n-->\n\n  "

/***/ }),

/***/ "../../../../../src/app/components/user/user.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserComponent = (function () {
    function UserComponent(http) {
        this.http = http;
        // Global Vars
        this.title = 'A Hybrid Movie Search & Recommendation System for the real world!';
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
            37: "Western"
        };
    }
    UserComponent.prototype.trackClick = function (movieid, genre) {
        console.log(movieid, genre);
        console.log(this.gen[28]);
    };
    UserComponent.prototype.sendReq = function (query) {
        var _this = this;
        if (query == '') {
            this.data = this.blank; //Clearing Search Box
        }
        //console.log(query);
        this.hell = 'https://api.themoviedb.org/3/search/movie?api_key=bd5e7f8161070f86bff1d8da34219f57&query=' + query + '&page=1';
        this.http.get(this.hell).subscribe(function (data) {
            _this.data = data; // Assign local to global
        });
    };
    UserComponent.prototype.ngOnInit = function () { };
    UserComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-user',
            template: __webpack_require__("../../../../../src/app/components/user/user.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/user/user.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]) === "function" && _a || Object])
    ], UserComponent);
    return UserComponent;
    var _a;
}());

/* console.log(data);
      console.log(data.page);
      console.log(data.total_results);
      console.log(data.total_pages);
      console.log(data.results[0].id);
      console.log(data.results[0].vote_average);
      console.log(data.results[0].vote_count);
      console.log(data.results[0].title);
      console.log(data.results[0].overview);
      console.log(data.results[0].poster_path);
      console.log(data.results[0].genre_ids[0]);
      console.log(data.results[0].genre_ids[1]);
      console.log(data.results[0].genre_ids[2]);
      console.log(data.results[0].popularity);
 */
//# sourceMappingURL=user.component.js.map

/***/ }),

/***/ "../../../../../src/app/material/material.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MaterialModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var MaterialModule = (function () {
    function MaterialModule() {
    }
    MaterialModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["d" /* MatMenuModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["e" /* MatToolbarModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["c" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MatCardModule */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["d" /* MatMenuModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["e" /* MatToolbarModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["c" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MatCardModule */]
            ]
        })
    ], MaterialModule);
    return MaterialModule;
}());

//# sourceMappingURL=material.module.js.map

/***/ }),

/***/ "../../../../../src/app/truncate/truncate.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TruncatePipe; });
/* unused harmony export TruncateModule */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var TruncatePipe = (function () {
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["V" /* Pipe */])({
            name: 'truncate'
        })
    ], TruncatePipe);
    return TruncatePipe;
}());

var TruncateModule = (function () {
    function TruncateModule() {
    }
    return TruncateModule;
}());

//# sourceMappingURL=truncate.module.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
//import './polyfills.ts';




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_17" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map