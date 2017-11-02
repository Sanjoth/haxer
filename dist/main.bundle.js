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

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/css/bootstrap.min.css\" integrity=\"sha384-PsH8R72JQ3SOdhVi3uxftmaW6Vc51MKb0q5P2rRUpPvrszuE4W1povHYgTpBfshb\" crossorigin=\"anonymous\">\n<link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css\">\n<br/>\n<div class=\"container\" style=\"text-align:center\">\n  <h2>\n    Welcome to {{title}}! <br> {{subt}}\n  </h2>\n  <img width=\"50\" src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg==\">\n</div>\n<br>\n<app-user></app-user>\n<br/> <br/>\n<app-footer></app-footer>\n\n\n\n\n\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

//import { HttpClient } from '@angular/common/http';
var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Haxèr';
        this.subt = 'A Movie Recommendation Engine for the real world!';
    }
    /*
    constructor(private http: HttpClient){
    }
    */
    AppComponent.prototype.ngOnInit = function () {
    };
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__material_material_module__ = __webpack_require__("../../../../../src/app/material/material.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__truncate_truncate_module__ = __webpack_require__("../../../../../src/app/truncate/truncate.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_user_user_component__ = __webpack_require__("../../../../../src/app/components/user/user.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_footer_footer_component__ = __webpack_require__("../../../../../src/app/components/footer/footer.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



// Import HttpClientModule from @angular/common/http

//Angular Material 2




//Self Made




var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_9__components_user_user_component__["a" /* UserComponent */],
            __WEBPACK_IMPORTED_MODULE_7__truncate_truncate_module__["a" /* TruncatePipe */],
            __WEBPACK_IMPORTED_MODULE_10__components_footer_footer_component__["a" /* FooterComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            // Include it under 'imports' in your application module
            // after BrowserModule.
            __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClientModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_material__["e" /* MatInputModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_4__material_material_module__["a" /* MaterialModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_material__["c" /* MatGridListModule */]
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/components/footer/footer.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".footer {\n    position: absolute;\n    bottom: 0;\n    width: 100%;\n    height: 60px;\n    line-height: 60px;\n    background-color: #f5f5f5;\n    text-align: center;\n  }", ""]);

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
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
    return FooterComponent;
}());
FooterComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-footer',
        template: __webpack_require__("../../../../../src/app/components/footer/footer.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/footer/footer.component.css")]
    }),
    __metadata("design:paramtypes", [])
], FooterComponent);

//# sourceMappingURL=footer.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/user/user.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "table, th , td  {\n    border: 1px solid grey;\n    border-collapse: collapse;\n    padding: 10px;\n  }\n  table tr:nth-child(odd) {\n    background-color: #f1f1f1;\n  }\n  table tr:nth-child(even) {\n    background-color: #ffffff;\n  }\n\n  table\n  { \n  margin-left: auto;\n  margin-right: auto;\n  }\n\n  /*  Material Card */\n  .example-card {\n    width: 400px;\n    \n  }\n\n\n\n  \n  \n  \n  ", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/user/user.component.html":
/***/ (function(module, exports) {

module.exports = "<div style=\"text-align:center\">\n    Search: <input type=\"text\" autocomplete=\"off\" placeholder=\"Keywords\" (keyup)=\"sendReq(query.value)\" [(ngModel)]=\"texts\" name=\"query\" #query>\n</div>\n\n<div *ngIf=\"data\">\n      <div style=\"text-align:center\"> \n          <p>You searched for ' <b>{{texts}}</b> ' </p>\n          <h5>Search Details</h5>\n        <table> \n          <tr>\n            <th>Page </th>\n            <th>Total Results</th>\n            <th>Total Pages</th>\n            <th>Results per page</th>\n          </tr>\n          <tr>\n            <td>{{data.page}}</td>\n            <td>{{data.total_results}}</td>\n            <td>{{data.total_pages}}</td>\n            <td>{{data.results.length}}</td>\n          </tr>\n        </table>  \n       </div> \n<br/>\n<!-- <mat-grid-list cols=\"2\" rowHeight=\"800px\">\n  <mat-grid-tile> -->\n      <div class=\"card-group\">\n  <mat-card class=\"example-card\"*ngFor=\"let movie of data.results; let myIndex = index\" (click)=\"trackClick(movie.id,movie.genre_ids)\">\n      <mat-card-header>\n          <mat-card-title><b>{{movie.title}}</b><br></mat-card-title>\n          <p hidden>Movie ID: {{movie.id}}<br></p>\n        </mat-card-header>\n        <img mat-card-image src=\"http://image.tmdb.org/t/p/w500/{{movie.backdrop_path}}\">\n      <mat-card-content>\n      <b>Genres: </b><label *ngFor=\"let item of movie.genre_ids;let i = index\">{{item}}<label *ngIf=\"i < movie.genre_ids.length-1 \">,</label></label>.<br>\n      <b> Language: </b> {{movie.original_language}} <br>\n      <b> IMDb Rating: </b> {{movie.vote_average}} <br>\n      <b> Vote Count: </b> {{movie.vote_count}} <br> \n      <b> Movie Overview: </b> \n      <label *ngIf=\"movie.overview.length>140\">{{movie.overview | truncate : 140 : true}} </label> \n      <label *ngIf=\"movie.overview.length<140\">{{movie.overview}} </label><br> \n      <b> Popularity: </b> {{movie.popularity}} <br> \n      <b> Adult: </b> {{movie.adult}} <br>\n      <b> Year: </b> {{movie.release_date}} <br>\n     \n    </mat-card-content>\n  \n    <mat-card-actions style=\"text-align: center\">     \n        <button mat-button>LIKE</button>\n        <button mat-button>DISLIKE</button>\n        <button mat-button>BOOKMARK</button>\n      </mat-card-actions>   \n  </mat-card>\n  </div>\n  <!--\n</mat-grid-tile>\n</mat-grid-list>\n-->\n</div>\n\n\n  \n \n\n\n  <!-- OLD CODE\n  <b>Movie Details:</b><br>\n  Movie id: {{data.results[0].id}}<br>\n  Title: {{data.results[0].title}}<br>\n  Genres: <ol><li *ngFor=\"let item of data.results[0].genre_ids\">\n    {{item }} </li> </ol> <br> \n  Language: {{data.results[0].original_language}}<br>\n  IMDb Rating: {{data.results[0].vote_average}}<br>\n  Vote Count: {{data.results[0].vote_count}}<br>\n  Overview: {{data.results[0].overview}}<br>\n  Popularity: {{data.results[0].popularity}}<br>\n  Adult: {{data.results[0].adult}}<br>\n  poster_path: {{data.results[0].poster_path}}<br>\n  backdrop_path: {{data.results[0].id}}<br>\n  <br><br>\n  \n  <b>Search Details:</b><br>\n  page: {{data.page}}<br>\n  total_results: {{data.total_results}}<br>\n  total_pages: {{data.total_pages}}<br>\n  results:{{data.results.length}}<br>\n\n  -->\n<!-- MATERIAL CARD AND NAV BAR\n  <div>\n    <mat-toolbar color=\"primary\">\n      <span><mat-icon>mood</mat-icon></span>\n  \n      <span>Yay, Material in Angular 2!</span>\n  \n      <button mat-icon-button [mat-menu-trigger-for]=\"menu\">\n        <mat-icon>more_vert</mat-icon>\n        \n      </button>\n    </mat-toolbar>\n    <mat-menu x-position=\"before\" #menu=\"matMenu\">\n      <button mat-menu-item>Option 1</button>\n      <button mat-menu-item>Option 2</button>\n\n    </mat-menu>\n  \n    <mat-card>\n      <button mat-button>All</button>\n      <button mat-raised-button>Of</button>\n      <button mat-raised-button color=\"primary\">The</button>\n      <button mat-raised-button color=\"accent\">Buttons</button>\n      <button mat-icon-button [mat-menu-trigger-for]=\"menu\"><mat-icon>home</mat-icon></button>\n      <button mat-icon-button [mat-menu-trigger-for]=\"menu\"><mat-icon>home</mat-icon></button>\n      <button mat-icon-button [mat-menu-trigger-for]=\"menu\">Add to watch later !</button>\n\n    </mat-card>\n  \n    <span class=\"done\">\n      <button mat-fab>\n        <mat-icon>check circle</mat-icon>\n      </button>\n    </span>\n  </div>\n-->\n\n\n\n    <!-- OLD CODe\n\n        \n  <ol > \n    <li *ngFor=\"let movie of data.results; let myIndex = index\" (click)=\"trackClick(movie.id,movie.genre_ids)\" #yo> \n      <b> Movie ID: </b> {{movie.id}} <br>\n      <b> Movie Title: </b> {{movie.title}} <br> \n\n      <b> Genres: </b><ol> <li *ngFor=\"let item of movie.genre_ids\">\n          {{item}} </li> </ol> \n    \n      <b> Original Language: </b> {{movie.original_language}} <br>\n      <b> IMDb Rating: </b> {{movie.vote_average}} <br>\n      <b> Vote Count: </b> {{movie.vote_count}} <br> \n      <b> Movie Overview: </b> {{movie.overview}} <br> \n      <b> Popularity: </b> {{movie.popularity}} <br> \n      <b> Adult: </b> {{movie.adult}} <br>\n      <b> Year: </b> {{movie.release_date}} <br>\n    </li> \n  </ol>\n</div>\n-->\n<br/> <br/>\n<div class=\"card-group\">\n   \n  </div>\n  \n\n "

/***/ }),

/***/ "../../../../../src/app/components/user/user.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
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
    }
    UserComponent.prototype.trackClick = function (movieid, genre) {
        console.log(movieid, genre);
    };
    UserComponent.prototype.sendReq = function (query) {
        var _this = this;
        if (query == '') {
            query = 'NaNaNaNaN';
        }
        console.log(query);
        this.hell = 'https://api.themoviedb.org/3/search/movie?api_key=bd5e7f8161070f86bff1d8da34219f57&language=en-US&query=' + query + '&page=1&include_adult=false';
        this.http.get(this.hell).subscribe(function (data) {
            console.log("data is :" + data);
            _this.data = data; // Assign local to global
        });
    };
    UserComponent.prototype.ngOnInit = function () {
    };
    return UserComponent;
}());
UserComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-user',
        template: __webpack_require__("../../../../../src/app/components/user/user.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/user/user.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]) === "function" && _a || Object])
], UserComponent);

var _a;
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
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
    return MaterialModule;
}());
MaterialModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MatButtonModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["f" /* MatMenuModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["g" /* MatToolbarModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["d" /* MatIconModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MatCardModule */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MatButtonModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["f" /* MatMenuModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["g" /* MatToolbarModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["d" /* MatIconModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MatCardModule */]
        ]
    })
], MaterialModule);

//# sourceMappingURL=material.module.js.map

/***/ }),

/***/ "../../../../../src/app/truncate/truncate.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TruncatePipe; });
/* unused harmony export TruncateModule */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
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
    return TruncatePipe;
}());
TruncatePipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["V" /* Pipe */])({
        name: 'truncate'
    })
], TruncatePipe);

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
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
//import './polyfills.ts';




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_20" /* enableProdMode */])();
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