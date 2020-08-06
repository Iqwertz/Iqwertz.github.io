(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _services_search_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/search.service */ "./src/app/services/search.service.ts");
/* harmony import */ var _services_favorites_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/favorites.service */ "./src/app/services/favorites.service.ts");
/* harmony import */ var _services_trending_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/trending.service */ "./src/app/services/trending.service.ts");
/* harmony import */ var _services_load_more_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/load-more.service */ "./src/app/services/load-more.service.ts");
/* harmony import */ var _components_search_mode_search_mode_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/search-mode/search-mode.component */ "./src/app/components/search-mode/search-mode.component.ts");
/* harmony import */ var _components_search_search_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/search/search.component */ "./src/app/components/search/search.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _components_gif_gif_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/gif/gif.component */ "./src/app/components/gif/gif.component.ts");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/__ivy_ngcc__/fesm2015/angular-fontawesome.js");














function AppComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-gif", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("favButtonPressed", function AppComponent_div_4_Template_app_gif_favButtonPressed_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.favButtonPressed($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const gifObj_r4 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", gifObj_r4.title)("url", gifObj_r4.url)("id", gifObj_r4.id)("liked", ctx_r0.favoriteService.hasFavorite(gifObj_r4.id));
} }
function AppComponent_button_5_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_button_5_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.getMore(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " More ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AppComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Sorry, No Gifs found!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "fa-icon", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx_r2.faFrown);
} }
function AppComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class AppComponent {
    constructor(searchService, favoriteService, trendingService, loadMore) {
        this.searchService = searchService;
        this.favoriteService = favoriteService;
        this.trendingService = trendingService;
        this.loadMore = loadMore;
        this.gifAmount = 25;
        this.currentSearch = '';
        this.search$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.moreGifs = true;
        this.loader = false;
        this.smallLoader = false;
        this.showStickers = false;
        this.enableStickerSelection = true;
        this.searchDelay = 150;
        this.faFrown = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faFrown"];
    }
    ngOnInit() {
        console.log('init'); //log init (for debugging)
        this.showTrending(); //shows Trends
        this.search$
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(() => {
            this.smallLoader = true;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["debounceTime"])(this.searchDelay), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])((result) => {
            this.currentSearch = result;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])((q) => {
            return this.searchService.searchWithTrendingFallback(q, this.gifAmount, this.showStickers);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(() => {
            this.enableStickerSelection = true;
        }))
            .subscribe((response) => {
            this.gifs = response;
            this.smallLoader = false;
            this.moreGifs = this.gifs.data.length == this.gifAmount;
        });
    }
    //search function - validates the search and makes a http get request
    search(q) {
        this.enableStickerSelection = true;
        if (this.currentSearch != q) {
            this.currentSearch = this.searchInput;
        }
        this.searchInput = '';
        this.loader = true;
        console.log(q);
        this.searchService
            .searchWithTrendingFallback(q, this.gifAmount, this.showStickers)
            .subscribe((result) => {
            this.gifs = result;
            this.moreGifs = this.gifs.data.length == this.gifAmount;
            this.loader = false;
        });
    }
    //trending function - gets trending gifs with the trending service
    showTrending() {
        this.currentSearch = '';
        this.enableStickerSelection = true;
        this.loader = true;
        this.trendingService.getTrending(this.showStickers).subscribe((result) => {
            this.gifs = result;
            this.loader = false;
        });
    }
    favButtonPressed(id) {
        this.favoriteService.toggleFavorite(id);
    }
    //favorites function - gets as favorites saved gifs ftrom the favorites service
    displayFavorites() {
        this.enableStickerSelection = false;
        this.moreGifs = false;
        this.loader = true;
        this.favoriteService.getFavorites().subscribe((result) => {
            this.gifs = result;
            this.loader = false;
        });
    }
    //loads more gifs with the help of the load more service
    getMore() {
        var _a;
        this.loader = true;
        this.loadMore
            .load((_a = this.gifs) === null || _a === void 0 ? void 0 : _a.data.length, this.gifAmount, this.currentSearch, this.showStickers)
            .subscribe((result) => {
            this.moreGifs = result.data.length == this.gifAmount; //check if the amount ofgifs got returned that was requested - if not it means that ther are no more gifs left
            this.gifs.data = this.gifs.data.concat(result.data); //add the new results to the gif list
            this.loader = false;
        });
    }
    setSearchMode(stickerMode) {
        this.showStickers = stickerMode;
        if (this.currentSearch) {
            this.search(this.currentSearch);
        }
        else {
            this.showTrending();
        }
    }
    dynamicSearch(input) {
        this.search$.next(input);
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_search_service__WEBPACK_IMPORTED_MODULE_4__["SearchService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_favorites_service__WEBPACK_IMPORTED_MODULE_5__["FavoriteService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_trending_service__WEBPACK_IMPORTED_MODULE_6__["TrendingService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_load_more_service__WEBPACK_IMPORTED_MODULE_7__["LoadMore"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 8, vars: 8, consts: [[3, "showStickers", "enableStickerSelection", "showStickersChange", "enableStickerSelectionChange"], [1, "component-container"], [3, "smallLoader", "searchInput", "searchInputChange", "triggerTrending", "triggerFavorites", "triggerDynamicSearch", "triggerSearch"], [1, "result-container"], [4, "ngFor", "ngForOf"], ["type", "button", "class", "more-button", 3, "click", 4, "ngIf"], ["class", "nogifs-container", 4, "ngIf"], ["class", "loading-container", 4, "ngIf"], [3, "title", "url", "id", "liked", "favButtonPressed"], ["type", "button", 1, "more-button", 3, "click"], [1, "nogifs-container"], [3, "icon"], [1, "loading-container"], [1, "lds-ripple"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-search-mode", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("showStickersChange", function AppComponent_Template_app_search_mode_showStickersChange_0_listener($event) { return ctx.setSearchMode($event); })("enableStickerSelectionChange", function AppComponent_Template_app_search_mode_enableStickerSelectionChange_0_listener($event) { return ctx.enableStickerSelection = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "app-search", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("searchInputChange", function AppComponent_Template_app_search_searchInputChange_2_listener($event) { return ctx.searchInput = $event; })("triggerTrending", function AppComponent_Template_app_search_triggerTrending_2_listener() { return ctx.showTrending(); })("triggerFavorites", function AppComponent_Template_app_search_triggerFavorites_2_listener() { return ctx.displayFavorites(); })("triggerDynamicSearch", function AppComponent_Template_app_search_triggerDynamicSearch_2_listener($event) { return ctx.dynamicSearch($event); })("triggerSearch", function AppComponent_Template_app_search_triggerSearch_2_listener($event) { return ctx.search($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, AppComponent_div_4_Template, 2, 4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, AppComponent_button_5_Template, 2, 0, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, AppComponent_div_6_Template, 5, 1, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, AppComponent_div_7_Template, 4, 0, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("showStickers", ctx.showStickers)("enableStickerSelection", ctx.enableStickerSelection);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("smallLoader", ctx.smallLoader)("searchInput", ctx.searchInput);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.gifs == null ? null : ctx.gifs.data);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.moreGifs);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !(ctx.gifs == null ? null : ctx.gifs.data == null ? null : ctx.gifs.data.length));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loader);
    } }, directives: [_components_search_mode_search_mode_component__WEBPACK_IMPORTED_MODULE_8__["SearchModeComponent"], _components_search_search_component__WEBPACK_IMPORTED_MODULE_9__["SearchComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], _components_gif_gif_component__WEBPACK_IMPORTED_MODULE_11__["GifComponent"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_12__["FaIconComponent"]], styles: [".component-container[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: auto;\n  min-height: 100%;\n  background: linear-gradient(148.59deg, #00ffa3 0%, #69009c 100%);\n  text-align: center;\n}\n.component-container[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 3em;\n  font-family: Verdana, Geneva, Tahoma, sans-serif;\n}\n\n.more-button[_ngcontent-%COMP%] {\n  align-self: center;\n  font-size: 2em;\n  margin: 40px;\n  padding: 10px 35px;\n  border: 0;\n  border-radius: 5px;\n  background-color: #00ffbf;\n}\n.result-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n}\n.nogifs-container[_ngcontent-%COMP%] {\n  font-family: Cambria, Cochin, Georgia, Times, \"Times New Roman\", serif;\n  margin: 80px 0;\n}\n.nogifs-container[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%] {\n  font-size: 3em;\n}\n.loading-container[_ngcontent-%COMP%] {\n  top: 0;\n  position: fixed;\n  z-index: 5;\n  background-color: rgba(0, 0, 0, 0.541);\n  width: 100%;\n  height: 100%;\n}\n\n.lds-ripple[_ngcontent-%COMP%] {\n  top: 50%;\n  display: inline-block;\n  position: relative;\n  width: 80px;\n  height: 80px;\n}\n.lds-ripple[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  position: absolute;\n  border: 4px solid #fff;\n  opacity: 1;\n  border-radius: 50%;\n  animation: lds-ripple 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;\n}\n.lds-ripple[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(2) {\n  animation-delay: -0.5s;\n}\n@keyframes lds-ripple {\n  0% {\n    top: 36px;\n    left: 36px;\n    width: 0;\n    height: 0;\n    opacity: 1;\n  }\n  100% {\n    top: 0px;\n    left: 0px;\n    width: 72px;\n    height: 72px;\n    opacity: 0;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic3JjL3Njc3MvX3ZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0Usa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnRUNUb0I7RURVcEIsa0JBQUE7QUFERjtBQUdFO0VBQ0UsY0FBQTtFQUNBLGdEQUFBO0FBREo7QUFJQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQUFBO0FBb0NBO0VBQ0Usa0JBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0VBQ0EseUJDaERrQjtBRDhDcEI7QUFLQTtFQUNFLGFBQUE7RUFDQSxlQUFBO0VBQ0EsdUJBQUE7QUFGRjtBQUtBO0VBQ0Usc0VBQUE7RUFDQSxjQUFBO0FBRkY7QUFJRTtFQUNFLGNBQUE7QUFGSjtBQU1BO0VBQ0UsTUFBQTtFQUNBLGVBQUE7RUFDQSxVQUFBO0VBQ0Esc0NDcEVtQjtFRHFFbkIsV0FBQTtFQUNBLFlBQUE7QUFIRjtBQU1BOzs7Ozs7Ozs7Ozs7Q0FBQTtBQWVBO0VBQ0UsUUFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQUxGO0FBT0E7RUFDRSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsOERBQUE7QUFKRjtBQU1BO0VBQ0Usc0JBQUE7QUFIRjtBQUtBO0VBQ0U7SUFDRSxTQUFBO0lBQ0EsVUFBQTtJQUNBLFFBQUE7SUFDQSxTQUFBO0lBQ0EsVUFBQTtFQUZGO0VBSUE7SUFDRSxRQUFBO0lBQ0EsU0FBQTtJQUNBLFdBQUE7SUFDQSxZQUFBO0lBQ0EsVUFBQTtFQUZGO0FBQ0Y7QUFLQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0FBQSIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuL3NyYy9zY3NzL3ZhcmlhYmxlc1wiO1xyXG5cclxuLmNvbXBvbmVudC1jb250YWluZXIge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IGF1dG87XHJcbiAgbWluLWhlaWdodDogMTAwJTtcclxuICBiYWNrZ3JvdW5kOiAkYmFja2dyb3VuZC1ncmFkaWVudDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblxyXG4gIGgxIHtcclxuICAgIGZvbnQtc2l6ZTogM2VtO1xyXG4gICAgZm9udC1mYW1pbHk6IFZlcmRhbmEsIEdlbmV2YSwgVGFob21hLCBzYW5zLXNlcmlmO1xyXG4gIH1cclxufVxyXG4vKlxyXG4uc2VhcmNoLWNvbnRhaW5lciB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxuICBidXR0b24ge1xyXG4gICAgcGFkZGluZzogM3B4IDEycHg7XHJcbiAgICBtYXJnaW46IDJweCA0cHg7XHJcbiAgICBmb250LXNpemU6IDFlbTtcclxuICAgIGJvcmRlcjogMDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICB9XHJcblxyXG4gIGlucHV0IHtcclxuICAgIHBhZGRpbmc6IDNweCAxMnB4IDNweCAzcHg7XHJcblxyXG4gICAgbWFyZ2luOiAycHggNHB4O1xyXG4gICAgZm9udC1zaXplOiAxZW07XHJcbiAgICBib3JkZXI6IDA7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICB3aWR0aDogMjAwcHg7XHJcbiAgICAmOjotbXMtY2xlYXIge1xyXG4gICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG4gICAgJjo6LXdlYmtpdC1zZWFyY2gtZGVjb3JhdGlvbixcclxuICAgICY6Oi13ZWJraXQtc2VhcmNoLWNhbmNlbC1idXR0b24sXHJcbiAgICAmOjotd2Via2l0LXNlYXJjaC1yZXN1bHRzLWJ1dHRvbixcclxuICAgICY6Oi13ZWJraXQtc2VhcmNoLXJlc3VsdHMtZGVjb3JhdGlvbiB7XHJcbiAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuZmF2b3JpdGVzLWNvbnRhaW5lciB7XHJcbiAgICBtYXJnaW46IDVweDtcclxuICB9XHJcbn0gKi9cclxuXHJcbi5tb3JlLWJ1dHRvbiB7XHJcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gIGZvbnQtc2l6ZTogMmVtO1xyXG4gIG1hcmdpbjogNDBweDtcclxuICBwYWRkaW5nOiAxMHB4IDM1cHg7XHJcbiAgYm9yZGVyOiAwO1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkbW9yZS1idXR0b24tY29sb3I7XHJcbn1cclxuXHJcbi5yZXN1bHQtY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLm5vZ2lmcy1jb250YWluZXIge1xyXG4gIGZvbnQtZmFtaWx5OiBDYW1icmlhLCBDb2NoaW4sIEdlb3JnaWEsIFRpbWVzLCBcIlRpbWVzIE5ldyBSb21hblwiLCBzZXJpZjtcclxuICBtYXJnaW46IDgwcHggMDtcclxuXHJcbiAgZmEtaWNvbiB7XHJcbiAgICBmb250LXNpemU6IDNlbTtcclxuICB9XHJcbn1cclxuXHJcbi5sb2FkaW5nLWNvbnRhaW5lciB7XHJcbiAgdG9wOiAwO1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB6LWluZGV4OiA1O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRsb2FkaW5nLWJhY2tncm91bmQ7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4vKlxyXG4ucHNldWRvLXBhcmVudCB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHdpZHRoOiAwO1xyXG4gIGhlaWdodDogMDtcclxuICAuc21hbGwtbG9hZGluZy1jb250YWluZXIge1xyXG4gICAgei1pbmRleDogNTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogLTJweDtcclxuICAgIHJpZ2h0OiAtNTB2dztcclxuICB9XHJcbn1cclxuKi9cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy9sb2FkaW5nIFNwaW5uZXIgQ3NzLy8vLy8vLy8vL1xyXG4ubGRzLXJpcHBsZSB7XHJcbiAgdG9wOiA1MCU7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB3aWR0aDogODBweDtcclxuICBoZWlnaHQ6IDgwcHg7XHJcbn1cclxuLmxkcy1yaXBwbGUgZGl2IHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgYm9yZGVyOiA0cHggc29saWQgJGxvYWRlci1jb2xvcjtcclxuICBvcGFjaXR5OiAxO1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBhbmltYXRpb246IGxkcy1yaXBwbGUgMXMgY3ViaWMtYmV6aWVyKDAsIDAuMiwgMC44LCAxKSBpbmZpbml0ZTtcclxufVxyXG4ubGRzLXJpcHBsZSBkaXY6bnRoLWNoaWxkKDIpIHtcclxuICBhbmltYXRpb24tZGVsYXk6IC0wLjVzO1xyXG59XHJcbkBrZXlmcmFtZXMgbGRzLXJpcHBsZSB7XHJcbiAgMCUge1xyXG4gICAgdG9wOiAzNnB4O1xyXG4gICAgbGVmdDogMzZweDtcclxuICAgIHdpZHRoOiAwO1xyXG4gICAgaGVpZ2h0OiAwO1xyXG4gICAgb3BhY2l0eTogMTtcclxuICB9XHJcbiAgMTAwJSB7XHJcbiAgICB0b3A6IDBweDtcclxuICAgIGxlZnQ6IDBweDtcclxuICAgIHdpZHRoOiA3MnB4O1xyXG4gICAgaGVpZ2h0OiA3MnB4O1xyXG4gICAgb3BhY2l0eTogMDtcclxuICB9XHJcbn1cclxuXHJcbi8qXHJcbi5sZHMtZmFjZWJvb2sge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgd2lkdGg6IDgwcHggKiAkc21hbGwtbG9hZGVyLXNpemU7XHJcbiAgaGVpZ2h0OiA4MHB4ICogJHNtYWxsLWxvYWRlci1zaXplO1xyXG59XHJcbi5sZHMtZmFjZWJvb2sgZGl2IHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGxlZnQ6IDhweCAqICRzbWFsbC1sb2FkZXItc2l6ZTtcclxuICB3aWR0aDogMTZweCAqICRzbWFsbC1sb2FkZXItc2l6ZTtcclxuICBiYWNrZ3JvdW5kOiAkc21hbGwtbG9hZGVyLWNvbG9yO1xyXG4gIGFuaW1hdGlvbjogbGRzLWZhY2Vib29rIDEuMnMgY3ViaWMtYmV6aWVyKDAsIDAuNSwgMC41LCAxKSBpbmZpbml0ZTtcclxufVxyXG4ubGRzLWZhY2Vib29rIGRpdjpudGgtY2hpbGQoMSkge1xyXG4gIGxlZnQ6IDhweCAqICRzbWFsbC1sb2FkZXItc2l6ZTtcclxuICBhbmltYXRpb24tZGVsYXk6IC0wLjI0cztcclxufVxyXG4ubGRzLWZhY2Vib29rIGRpdjpudGgtY2hpbGQoMikge1xyXG4gIGxlZnQ6IDMycHggKiAkc21hbGwtbG9hZGVyLXNpemU7XHJcbiAgYW5pbWF0aW9uLWRlbGF5OiAtMC4xMnM7XHJcbn1cclxuLmxkcy1mYWNlYm9vayBkaXY6bnRoLWNoaWxkKDMpIHtcclxuICBsZWZ0OiA1NnB4ICogJHNtYWxsLWxvYWRlci1zaXplO1xyXG4gIGFuaW1hdGlvbi1kZWxheTogMDtcclxufVxyXG5Aa2V5ZnJhbWVzIGxkcy1mYWNlYm9vayB7XHJcbiAgMCUge1xyXG4gICAgdG9wOiA4cHggKiAkc21hbGwtbG9hZGVyLXNpemU7XHJcbiAgICBoZWlnaHQ6IDY0cHggKiAkc21hbGwtbG9hZGVyLXNpemU7XHJcbiAgfVxyXG4gIDUwJSxcclxuICAxMDAlIHtcclxuICAgIHRvcDogMjRweCAqICRzbWFsbC1sb2FkZXItc2l6ZTtcclxuICAgIGhlaWdodDogMzJweCAqICRzbWFsbC1sb2FkZXItc2l6ZTtcclxuICB9XHJcbn1cclxuKi9cclxuIiwiJGJhY2tncm91bmQtZ3JhZGllbnQ6IGxpbmVhci1ncmFkaWVudCgxNDguNTlkZWcsICMwMGZmYTMgMCUsICM2OTAwOWMgMTAwJSk7XHJcblxyXG4kZ2lmLWNvbnRhaW5lci1jb2xvcjogIzFkMWQxZDtcclxuXHJcbiRnaWYtdGV4dC1jb2xvcjogI2ZmZjtcclxuXHJcbiRnaWYtbGluay1jb2xvcjogI2E4ZmE5ODtcclxuXHJcbiRsaWtlZC1jb2xvcjogcmdiKDI1NSwgNTksIDU5KTtcclxuXHJcbiR1bmxpa2VkLWNvbG9yOiByZ2IoMTI2LCAxMjYsIDEyNik7XHJcblxyXG4kbW9yZS1idXR0b24tY29sb3I6IHJnYigwLCAyNTUsIDE5MSk7XHJcblxyXG4kbG9hZGluZy1iYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNTQxKTtcclxuXHJcbiRsb2FkZXItY29sb3I6ICNmZmY7XHJcblxyXG4kc21hbGwtbG9hZGVyLWNvbG9yOiByZ2IoMCwgMjU1LCAxOTEpO1xyXG5cclxuJHNtYWxsLWxvYWRlci1zaXplOiAwLjQ7IC8vQXR0ZW50aW9uISBXaGVuIGFkanVzdGluZyB0aGlzIHZhciB0aGUgdG9wIHZhciBpbiAuc21hbGwtbG9hZGluZy1jb250YWluZXIgaGFzIHRvIGJlIGFkanVzdGVkXHJcblxyXG4kYnV0dG9ucy1ib3JkZXItY29sb3I6IHJnYig3LCAwLCA1Myk7XHJcblxyXG4kc2VhcmNoLW1vZGUtYnV0dG9uLWVuYWJlbGQ6IHJnYigxNTksIDI1NSwgMTE1KTtcclxuXHJcbiRzZWFyY2gtbW9kZS1idXR0b24tZGlzYWJlbGQ6IHJnYigyNTUsIDE0NCwgMTQ0KTtcclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss'],
            }]
    }], function () { return [{ type: _services_search_service__WEBPACK_IMPORTED_MODULE_4__["SearchService"] }, { type: _services_favorites_service__WEBPACK_IMPORTED_MODULE_5__["FavoriteService"] }, { type: _services_trending_service__WEBPACK_IMPORTED_MODULE_6__["TrendingService"] }, { type: _services_load_more_service__WEBPACK_IMPORTED_MODULE_7__["LoadMore"] }]; }, null); })();


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
/* harmony import */ var _components_search_search_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/search/search.component */ "./src/app/components/search/search.component.ts");
/* harmony import */ var _components_search_mode_search_mode_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/search-mode/search-mode.component */ "./src/app/components/search-mode/search-mode.component.ts");
/* harmony import */ var _services_load_more_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/load-more.service */ "./src/app/services/load-more.service.ts");
/* harmony import */ var _services_trending_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/trending.service */ "./src/app/services/trending.service.ts");
/* harmony import */ var _services_favorites_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/favorites.service */ "./src/app/services/favorites.service.ts");
/* harmony import */ var _services_search_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/search.service */ "./src/app/services/search.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _components_gif_gif_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/gif/gif.component */ "./src/app/components/gif/gif.component.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/__ivy_ngcc__/fesm2015/angular-fontawesome.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
















class AppModule {
    constructor(library) {
        library.addIconPacks(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_12__["fas"]);
        library.addIcons(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_12__["faHeart"]);
    }
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_13__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵinject"](_fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_11__["FaIconLibrary"])); }, providers: [_services_search_service__WEBPACK_IMPORTED_MODULE_5__["SearchService"], _services_favorites_service__WEBPACK_IMPORTED_MODULE_4__["FavoriteService"], _services_trending_service__WEBPACK_IMPORTED_MODULE_3__["TrendingService"], _services_load_more_service__WEBPACK_IMPORTED_MODULE_2__["LoadMore"]], imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__["BrowserModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_11__["FontAwesomeModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_13__["AppComponent"],
        _components_gif_gif_component__WEBPACK_IMPORTED_MODULE_8__["GifComponent"],
        _components_search_mode_search_mode_component__WEBPACK_IMPORTED_MODULE_1__["SearchModeComponent"],
        _components_search_search_component__WEBPACK_IMPORTED_MODULE_0__["SearchComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__["BrowserModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_11__["FontAwesomeModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_13__["AppComponent"],
                    _components_gif_gif_component__WEBPACK_IMPORTED_MODULE_8__["GifComponent"],
                    _components_search_mode_search_mode_component__WEBPACK_IMPORTED_MODULE_1__["SearchModeComponent"],
                    _components_search_search_component__WEBPACK_IMPORTED_MODULE_0__["SearchComponent"],
                ],
                imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__["BrowserModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_11__["FontAwesomeModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"]],
                providers: [_services_search_service__WEBPACK_IMPORTED_MODULE_5__["SearchService"], _services_favorites_service__WEBPACK_IMPORTED_MODULE_4__["FavoriteService"], _services_trending_service__WEBPACK_IMPORTED_MODULE_3__["TrendingService"], _services_load_more_service__WEBPACK_IMPORTED_MODULE_2__["LoadMore"]],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_13__["AppComponent"]],
            }]
    }], function () { return [{ type: _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_11__["FaIconLibrary"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/gif/gif.component.ts":
/*!*************************************************!*\
  !*** ./src/app/components/gif/gif.component.ts ***!
  \*************************************************/
/*! exports provided: GifComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GifComponent", function() { return GifComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/__ivy_ngcc__/fesm2015/angular-fontawesome.js");
//GifComponent - Holding and displaying the data of one gif





function GifComponent_fa_icon_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "fa-icon", 6);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx_r0.faHeart);
} }
function GifComponent_fa_icon_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "fa-icon", 7);
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx_r1.faHeart);
} }
class GifComponent {
    constructor() {
        //Data Vars with default values
        this.faHeart = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faHeart"];
        this.innerLiked = false;
        this.favButtonPressed = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.title = 'Kein Titel';
        this.url = 'Error: No Url';
        // @Input()
        this.id = 'TqiwHbFBaZ4ti';
        this.mediaUrl = 'https://media.giphy.com/media/TqiwHbFBaZ4ti/giphy.gif';
    }
    set liked(val) {
        this.innerLiked = val;
        this.ngOnChanges();
    }
    get liked() {
        return this.innerLiked;
    }
    set setableId(val) {
        this.id = val;
        this.mediaUrl = `https://media.giphy.com/media/${this.id}/giphy.gif`;
    }
    ngOnInit() {
        var _a;
        //this.mediaUrl = `https://media.giphy.com/media/${this.id}/giphy.gif`; //when initialized the media url is generated from the id
        this.liked = (_a = localStorage.getItem('favGifIds')) === null || _a === void 0 ? void 0 : _a.includes(this.id); //set the liked by checking if id is saved in localstorage
    }
    ngOnChanges() {
        // if one input changes this gets called
    }
    HeartClicked() {
        this.favButtonPressed.emit(this.id);
    }
}
GifComponent.ɵfac = function GifComponent_Factory(t) { return new (t || GifComponent)(); };
GifComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GifComponent, selectors: [["app-gif"]], inputs: { liked: "liked", title: "title", url: "url", setableId: ["id", "setableId"] }, outputs: { favButtonPressed: "favButtonPressed" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 10, vars: 5, consts: [[1, "gif-container"], [3, "src"], ["target", "_blank", 3, "href"], [3, "click"], ["class", "unlike", 3, "icon", 4, "ngIf"], ["class", "like", 3, "icon", 4, "ngIf"], [1, "unlike", 3, "icon"], [1, "like", 3, "icon"]], template: function GifComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Link");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GifComponent_Template_button_click_6_listener() { return ctx.HeartClicked(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, GifComponent_fa_icon_7_Template, 1, 1, "fa-icon", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "\u00B4 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, GifComponent_fa_icon_9_Template, 1, 1, "fa-icon", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.mediaUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", ctx.url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.liked);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.liked);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FaIconComponent"]], styles: [".gif-container[_ngcontent-%COMP%] {\n  position: relative;\n  text-align: center;\n  width: 250px;\n  height: 300px;\n  background-color: #1d1d1d;\n  border-radius: 20px;\n  color: #fff;\n  padding: 20px;\n  margin: 25px;\n}\n.gif-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 200px;\n  height: 200px;\n  border-radius: 15px;\n}\n.gif-container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  padding: 3px;\n  background-color: #a8fa98;\n  border-radius: 5px;\n  color: #000000;\n}\n.gif-container[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  height: 2.5em;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.gif-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  background-color: rgba(255, 255, 255, 0);\n  border: 0;\n  position: absolute;\n  bottom: 25px;\n  right: 18px;\n}\n.gif-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  right: 0;\n  font-size: 2em;\n}\n.gif-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   fa-icon.like[_ngcontent-%COMP%] {\n  color: #ff3b3b;\n}\n.gif-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   fa-icon.unlike[_ngcontent-%COMP%] {\n  color: #7e7e7e;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9naWYvZ2lmLmNvbXBvbmVudC5zY3NzIiwic3JjL3Njc3MvX3ZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0Usa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EseUJDTG9CO0VETXBCLG1CQUFBO0VBQ0EsV0NMZTtFRE1mLGFBQUE7RUFDQSxZQUFBO0FBREY7QUFHRTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUFESjtBQUlFO0VBQ0UsWUFBQTtFQUNBLHlCQ2ZhO0VEZ0JiLGtCQUFBO0VBQ0EsY0FBQTtBQUZKO0FBS0U7RUFDRSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtBQUhKO0FBTUU7RUFDRSx3Q0FBQTtFQUNBLFNBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FBSko7QUFNSTtFQUNFLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLFFBQUE7RUFDQSxjQUFBO0FBSk47QUFNTTtFQUNFLGNDdENNO0FEa0NkO0FBT007RUFDRSxjQ3hDUTtBRG1DaEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2dpZi9naWYuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi8uL3NyYy9zY3NzL3ZhcmlhYmxlc1wiO1xyXG5cclxuLmdpZi1jb250YWluZXIge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgd2lkdGg6IDI1MHB4O1xyXG4gIGhlaWdodDogMzAwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJGdpZi1jb250YWluZXItY29sb3I7XHJcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICBjb2xvcjogJGdpZi10ZXh0LWNvbG9yO1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbiAgbWFyZ2luOiAyNXB4O1xyXG5cclxuICBpbWcge1xyXG4gICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgaGVpZ2h0OiAyMDBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgfVxyXG5cclxuICBhIHtcclxuICAgIHBhZGRpbmc6IDNweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRnaWYtbGluay1jb2xvcjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIGNvbG9yOiAjMDAwMDAwO1xyXG4gIH1cclxuXHJcbiAgaDMge1xyXG4gICAgaGVpZ2h0OiAyLjVlbTtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICB9XHJcblxyXG4gIGJ1dHRvbiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDApO1xyXG4gICAgYm9yZGVyOiAwO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYm90dG9tOiAyNXB4O1xyXG4gICAgcmlnaHQ6IDE4cHg7XHJcblxyXG4gICAgZmEtaWNvbiB7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgdG9wOiAwO1xyXG4gICAgICByaWdodDogMDtcclxuICAgICAgZm9udC1zaXplOiAyZW07XHJcblxyXG4gICAgICAmLmxpa2Uge1xyXG4gICAgICAgIGNvbG9yOiAkbGlrZWQtY29sb3I7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICYudW5saWtlIHtcclxuICAgICAgICBjb2xvcjogJHVubGlrZWQtY29sb3I7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiJGJhY2tncm91bmQtZ3JhZGllbnQ6IGxpbmVhci1ncmFkaWVudCgxNDguNTlkZWcsICMwMGZmYTMgMCUsICM2OTAwOWMgMTAwJSk7XHJcblxyXG4kZ2lmLWNvbnRhaW5lci1jb2xvcjogIzFkMWQxZDtcclxuXHJcbiRnaWYtdGV4dC1jb2xvcjogI2ZmZjtcclxuXHJcbiRnaWYtbGluay1jb2xvcjogI2E4ZmE5ODtcclxuXHJcbiRsaWtlZC1jb2xvcjogcmdiKDI1NSwgNTksIDU5KTtcclxuXHJcbiR1bmxpa2VkLWNvbG9yOiByZ2IoMTI2LCAxMjYsIDEyNik7XHJcblxyXG4kbW9yZS1idXR0b24tY29sb3I6IHJnYigwLCAyNTUsIDE5MSk7XHJcblxyXG4kbG9hZGluZy1iYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNTQxKTtcclxuXHJcbiRsb2FkZXItY29sb3I6ICNmZmY7XHJcblxyXG4kc21hbGwtbG9hZGVyLWNvbG9yOiByZ2IoMCwgMjU1LCAxOTEpO1xyXG5cclxuJHNtYWxsLWxvYWRlci1zaXplOiAwLjQ7IC8vQXR0ZW50aW9uISBXaGVuIGFkanVzdGluZyB0aGlzIHZhciB0aGUgdG9wIHZhciBpbiAuc21hbGwtbG9hZGluZy1jb250YWluZXIgaGFzIHRvIGJlIGFkanVzdGVkXHJcblxyXG4kYnV0dG9ucy1ib3JkZXItY29sb3I6IHJnYig3LCAwLCA1Myk7XHJcblxyXG4kc2VhcmNoLW1vZGUtYnV0dG9uLWVuYWJlbGQ6IHJnYigxNTksIDI1NSwgMTE1KTtcclxuXHJcbiRzZWFyY2gtbW9kZS1idXR0b24tZGlzYWJlbGQ6IHJnYigyNTUsIDE0NCwgMTQ0KTtcclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GifComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-gif',
                templateUrl: 'gif.component.html',
                styleUrls: ['gif.component.scss'],
            }]
    }], null, { liked: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], favButtonPressed: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], title: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], url: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], setableId: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['id']
        }] }); })();


/***/ }),

/***/ "./src/app/components/search-mode/search-mode.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/search-mode/search-mode.component.ts ***!
  \*****************************************************************/
/*! exports provided: SearchModeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchModeComponent", function() { return SearchModeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");



const _c0 = function (a0, a1) { return { enabeld: a0, disabeld: a1 }; };
function SearchModeComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SearchModeComponent_div_0_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r1.ChangeSearchMode("Gif"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " GIFs ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SearchModeComponent_div_0_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.ChangeSearchMode("Sticker"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Stickers ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](2, _c0, !ctx_r0.showStickers, ctx_r0.showStickers));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](5, _c0, ctx_r0.showStickers, !ctx_r0.showStickers));
} }
class SearchModeComponent {
    constructor() {
        this.showStickers = false;
        this.showStickersChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.enableStickerSelection = false;
        this.enableStickerSelectionChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    //Change the current search mode
    ChangeSearchMode(mode) {
        console.log('Changed');
        if (mode == 'Gif') {
            //Set showSticker var depending on the received mode
            this.showStickersChange.emit(false);
        }
        else {
            this.showStickersChange.emit(true);
        }
    }
}
SearchModeComponent.ɵfac = function SearchModeComponent_Factory(t) { return new (t || SearchModeComponent)(); };
SearchModeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SearchModeComponent, selectors: [["app-search-mode"]], inputs: { showStickers: "showStickers", enableStickerSelection: "enableStickerSelection" }, outputs: { showStickersChange: "showStickersChange", enableStickerSelectionChange: "enableStickerSelectionChange" }, decls: 1, vars: 1, consts: [["class", "search-mode-container", 4, "ngIf"], [1, "search-mode-container"], ["id", "Gif", "type", "button", 3, "ngClass", "click"], ["id", "Sticker", "type", "button", 3, "ngClass", "click"]], template: function SearchModeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, SearchModeComponent_div_0_Template, 5, 8, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.enableStickerSelection);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"]], styles: [".search-mode-container[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 10px;\n  z-index: 5;\n}\n.search-mode-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  width: 80px;\n  padding: 3px 12px;\n  margin: 2px 0;\n  font-size: 1em;\n  border: 2px solid #070035;\n}\n.search-mode-container[_ngcontent-%COMP%]   .enabeld[_ngcontent-%COMP%] {\n  background-color: #9fff73;\n}\n.search-mode-container[_ngcontent-%COMP%]   .disabeld[_ngcontent-%COMP%] {\n  background-color: #ff9090;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zZWFyY2gtbW9kZS9zZWFyY2gtbW9kZS5jb21wb25lbnQuc2NzcyIsInNyYy9zY3NzL192YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLGVBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtBQURGO0FBR0U7RUFDRSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtFQUNBLHlCQUFBO0FBREo7QUFJRTtFQUNFLHlCQ1F5QjtBRFY3QjtBQUtFO0VBQ0UseUJDTTBCO0FEVDlCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9zZWFyY2gtbW9kZS9zZWFyY2gtbW9kZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuL3NyYy9zY3NzL3ZhcmlhYmxlc1wiO1xyXG5cclxuLnNlYXJjaC1tb2RlLWNvbnRhaW5lciB7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHRvcDogMTBweDtcclxuICB6LWluZGV4OiA1O1xyXG5cclxuICBidXR0b24ge1xyXG4gICAgd2lkdGg6IDgwcHg7XHJcbiAgICBwYWRkaW5nOiAzcHggMTJweDtcclxuICAgIG1hcmdpbjogMnB4IDA7XHJcbiAgICBmb250LXNpemU6IDFlbTtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkICRidXR0b25zLWJvcmRlci1jb2xvcjtcclxuICB9XHJcblxyXG4gIC5lbmFiZWxkIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRzZWFyY2gtbW9kZS1idXR0b24tZW5hYmVsZDtcclxuICB9XHJcblxyXG4gIC5kaXNhYmVsZCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkc2VhcmNoLW1vZGUtYnV0dG9uLWRpc2FiZWxkO1xyXG4gIH1cclxufVxyXG4iLCIkYmFja2dyb3VuZC1ncmFkaWVudDogbGluZWFyLWdyYWRpZW50KDE0OC41OWRlZywgIzAwZmZhMyAwJSwgIzY5MDA5YyAxMDAlKTtcclxuXHJcbiRnaWYtY29udGFpbmVyLWNvbG9yOiAjMWQxZDFkO1xyXG5cclxuJGdpZi10ZXh0LWNvbG9yOiAjZmZmO1xyXG5cclxuJGdpZi1saW5rLWNvbG9yOiAjYThmYTk4O1xyXG5cclxuJGxpa2VkLWNvbG9yOiByZ2IoMjU1LCA1OSwgNTkpO1xyXG5cclxuJHVubGlrZWQtY29sb3I6IHJnYigxMjYsIDEyNiwgMTI2KTtcclxuXHJcbiRtb3JlLWJ1dHRvbi1jb2xvcjogcmdiKDAsIDI1NSwgMTkxKTtcclxuXHJcbiRsb2FkaW5nLWJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC41NDEpO1xyXG5cclxuJGxvYWRlci1jb2xvcjogI2ZmZjtcclxuXHJcbiRzbWFsbC1sb2FkZXItY29sb3I6IHJnYigwLCAyNTUsIDE5MSk7XHJcblxyXG4kc21hbGwtbG9hZGVyLXNpemU6IDAuNDsgLy9BdHRlbnRpb24hIFdoZW4gYWRqdXN0aW5nIHRoaXMgdmFyIHRoZSB0b3AgdmFyIGluIC5zbWFsbC1sb2FkaW5nLWNvbnRhaW5lciBoYXMgdG8gYmUgYWRqdXN0ZWRcclxuXHJcbiRidXR0b25zLWJvcmRlci1jb2xvcjogcmdiKDcsIDAsIDUzKTtcclxuXHJcbiRzZWFyY2gtbW9kZS1idXR0b24tZW5hYmVsZDogcmdiKDE1OSwgMjU1LCAxMTUpO1xyXG5cclxuJHNlYXJjaC1tb2RlLWJ1dHRvbi1kaXNhYmVsZDogcmdiKDI1NSwgMTQ0LCAxNDQpO1xyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SearchModeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-search-mode',
                templateUrl: 'search-mode.component.html',
                styleUrls: ['search-mode.component.scss'],
            }]
    }], null, { showStickers: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], showStickersChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], enableStickerSelection: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], enableStickerSelectionChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/components/search/search.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/search/search.component.ts ***!
  \*******************************************************/
/*! exports provided: SearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchComponent", function() { return SearchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");




function SearchComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class SearchComponent {
    constructor() {
        this.smallLoader = false;
        this.searchInput = '';
        this.searchInputChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.triggerTrending = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.triggerFavorites = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.triggerDynamicSearch = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.triggerSearch = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    onInputChange(input) {
        this.triggerDynamicSearch.emit(input);
        //this.search$.next(input);
    }
    search(q) {
        this.triggerSearch.emit(q);
    }
}
SearchComponent.ɵfac = function SearchComponent_Factory(t) { return new (t || SearchComponent)(); };
SearchComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SearchComponent, selectors: [["app-search"]], inputs: { smallLoader: "smallLoader", searchInput: "searchInput" }, outputs: { searchInputChange: "searchInputChange", triggerTrending: "triggerTrending", triggerFavorites: "triggerFavorites", triggerDynamicSearch: "triggerDynamicSearch", triggerSearch: "triggerSearch" }, decls: 14, vars: 2, consts: [[1, "search-container"], [3, "ngSubmit"], [1, "pseudo-parent"], ["class", "small-loading-container", 4, "ngIf"], ["name", "SearchField", "type", "search", "placeholder", "Search for Gifs", 3, "ngModel", "ngModelChange", "input"], ["type", "submit"], ["type", "reset", 3, "click"], [1, "favorites-container"], ["type", "button", 3, "click"], [1, "small-loading-container"], [1, "lds-facebook"]], template: function SearchComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Giphy Search");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function SearchComponent_Template_form_ngSubmit_3_listener() { return ctx.search(ctx.searchInput); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, SearchComponent_div_5_Template, 5, 0, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SearchComponent_Template_input_ngModelChange_6_listener($event) { return ctx.searchInput = $event; })("input", function SearchComponent_Template_input_input_6_listener() { return ctx.onInputChange(ctx.searchInput); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "SEARCH");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SearchComponent_Template_button_click_9_listener() { return ctx.triggerTrending.emit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Clear");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SearchComponent_Template_button_click_12_listener() { return ctx.triggerFavorites.emit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Display Favorites ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.smallLoader);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.searchInput);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"]], styles: [".search-container[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.search-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  padding: 3px 12px;\n  margin: 2px 4px;\n  font-size: 1em;\n  border: 0;\n  border-radius: 3px;\n}\n.search-container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  padding: 3px 12px 3px 3px;\n  margin: 2px 4px;\n  font-size: 1em;\n  border: 0;\n  border-radius: 3px;\n  width: 200px;\n}\n.search-container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-ms-clear {\n  display: none;\n}\n.search-container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-webkit-search-decoration, .search-container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-webkit-search-cancel-button, .search-container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-webkit-search-results-button, .search-container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-webkit-search-results-decoration {\n  display: none;\n}\n.search-container[_ngcontent-%COMP%]   .favorites-container[_ngcontent-%COMP%] {\n  margin: 5px;\n}\n.pseudo-parent[_ngcontent-%COMP%] {\n  position: relative;\n  width: 0;\n  height: 0;\n}\n.pseudo-parent[_ngcontent-%COMP%]   .small-loading-container[_ngcontent-%COMP%] {\n  z-index: 5;\n  position: absolute;\n  top: -2px;\n  right: -50vw;\n}\n.lds-facebook[_ngcontent-%COMP%] {\n  display: inline-block;\n  position: relative;\n  width: 32px;\n  height: 32px;\n}\n.lds-facebook[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  display: inline-block;\n  position: absolute;\n  left: 3.2px;\n  width: 6.4px;\n  background: #00ffbf;\n  animation: lds-facebook 1.2s cubic-bezier(0, 0.5, 0.5, 1) infinite;\n}\n.lds-facebook[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(1) {\n  left: 3.2px;\n  animation-delay: -0.24s;\n}\n.lds-facebook[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(2) {\n  left: 12.8px;\n  animation-delay: -0.12s;\n}\n.lds-facebook[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(3) {\n  left: 22.4px;\n  animation-delay: 0;\n}\n@keyframes lds-facebook {\n  0% {\n    top: 3.2px;\n    height: 25.6px;\n  }\n  50%, 100% {\n    top: 9.6px;\n    height: 12.8px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zZWFyY2gvc2VhcmNoLmNvbXBvbmVudC5zY3NzIiwic3JjL3Njc3MvX3ZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0Usa0JBQUE7QUFERjtBQUdFO0VBQ0UsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLFNBQUE7RUFDQSxrQkFBQTtBQURKO0FBSUU7RUFDRSx5QkFBQTtFQUVBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtBQUhKO0FBSUk7RUFDRSxhQUFBO0FBRk47QUFJSTtFQUlFLGFBQUE7QUFMTjtBQVNFO0VBQ0UsV0FBQTtBQVBKO0FBV0E7RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0FBUkY7QUFTRTtFQUNFLFVBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0FBUEo7QUFXQTtFQUNFLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQVJGO0FBVUE7RUFDRSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkMxQ21CO0VEMkNuQixrRUFBQTtBQVBGO0FBU0E7RUFDRSxXQUFBO0VBQ0EsdUJBQUE7QUFORjtBQVFBO0VBQ0UsWUFBQTtFQUNBLHVCQUFBO0FBTEY7QUFPQTtFQUNFLFlBQUE7RUFDQSxrQkFBQTtBQUpGO0FBTUE7RUFDRTtJQUNFLFVBQUE7SUFDQSxjQUFBO0VBSEY7RUFLQTtJQUVFLFVBQUE7SUFDQSxjQUFBO0VBSkY7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2VhcmNoL3NlYXJjaC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuL3NyYy9zY3NzL3ZhcmlhYmxlc1wiO1xyXG5cclxuLnNlYXJjaC1jb250YWluZXIge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHJcbiAgYnV0dG9uIHtcclxuICAgIHBhZGRpbmc6IDNweCAxMnB4O1xyXG4gICAgbWFyZ2luOiAycHggNHB4O1xyXG4gICAgZm9udC1zaXplOiAxZW07XHJcbiAgICBib3JkZXI6IDA7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgfVxyXG5cclxuICBpbnB1dCB7XHJcbiAgICBwYWRkaW5nOiAzcHggMTJweCAzcHggM3B4O1xyXG5cclxuICAgIG1hcmdpbjogMnB4IDRweDtcclxuICAgIGZvbnQtc2l6ZTogMWVtO1xyXG4gICAgYm9yZGVyOiAwO1xyXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgJjo6LW1zLWNsZWFyIHtcclxuICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuICAgICY6Oi13ZWJraXQtc2VhcmNoLWRlY29yYXRpb24sXHJcbiAgICAmOjotd2Via2l0LXNlYXJjaC1jYW5jZWwtYnV0dG9uLFxyXG4gICAgJjo6LXdlYmtpdC1zZWFyY2gtcmVzdWx0cy1idXR0b24sXHJcbiAgICAmOjotd2Via2l0LXNlYXJjaC1yZXN1bHRzLWRlY29yYXRpb24ge1xyXG4gICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmZhdm9yaXRlcy1jb250YWluZXIge1xyXG4gICAgbWFyZ2luOiA1cHg7XHJcbiAgfVxyXG59XHJcblxyXG4ucHNldWRvLXBhcmVudCB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHdpZHRoOiAwO1xyXG4gIGhlaWdodDogMDtcclxuICAuc21hbGwtbG9hZGluZy1jb250YWluZXIge1xyXG4gICAgei1pbmRleDogNTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogLTJweDtcclxuICAgIHJpZ2h0OiAtNTB2dztcclxuICB9XHJcbn1cclxuXHJcbi5sZHMtZmFjZWJvb2sge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgd2lkdGg6IDgwcHggKiAkc21hbGwtbG9hZGVyLXNpemU7XHJcbiAgaGVpZ2h0OiA4MHB4ICogJHNtYWxsLWxvYWRlci1zaXplO1xyXG59XHJcbi5sZHMtZmFjZWJvb2sgZGl2IHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGxlZnQ6IDhweCAqICRzbWFsbC1sb2FkZXItc2l6ZTtcclxuICB3aWR0aDogMTZweCAqICRzbWFsbC1sb2FkZXItc2l6ZTtcclxuICBiYWNrZ3JvdW5kOiAkc21hbGwtbG9hZGVyLWNvbG9yO1xyXG4gIGFuaW1hdGlvbjogbGRzLWZhY2Vib29rIDEuMnMgY3ViaWMtYmV6aWVyKDAsIDAuNSwgMC41LCAxKSBpbmZpbml0ZTtcclxufVxyXG4ubGRzLWZhY2Vib29rIGRpdjpudGgtY2hpbGQoMSkge1xyXG4gIGxlZnQ6IDhweCAqICRzbWFsbC1sb2FkZXItc2l6ZTtcclxuICBhbmltYXRpb24tZGVsYXk6IC0wLjI0cztcclxufVxyXG4ubGRzLWZhY2Vib29rIGRpdjpudGgtY2hpbGQoMikge1xyXG4gIGxlZnQ6IDMycHggKiAkc21hbGwtbG9hZGVyLXNpemU7XHJcbiAgYW5pbWF0aW9uLWRlbGF5OiAtMC4xMnM7XHJcbn1cclxuLmxkcy1mYWNlYm9vayBkaXY6bnRoLWNoaWxkKDMpIHtcclxuICBsZWZ0OiA1NnB4ICogJHNtYWxsLWxvYWRlci1zaXplO1xyXG4gIGFuaW1hdGlvbi1kZWxheTogMDtcclxufVxyXG5Aa2V5ZnJhbWVzIGxkcy1mYWNlYm9vayB7XHJcbiAgMCUge1xyXG4gICAgdG9wOiA4cHggKiAkc21hbGwtbG9hZGVyLXNpemU7XHJcbiAgICBoZWlnaHQ6IDY0cHggKiAkc21hbGwtbG9hZGVyLXNpemU7XHJcbiAgfVxyXG4gIDUwJSxcclxuICAxMDAlIHtcclxuICAgIHRvcDogMjRweCAqICRzbWFsbC1sb2FkZXItc2l6ZTtcclxuICAgIGhlaWdodDogMzJweCAqICRzbWFsbC1sb2FkZXItc2l6ZTtcclxuICB9XHJcbn1cclxuIiwiJGJhY2tncm91bmQtZ3JhZGllbnQ6IGxpbmVhci1ncmFkaWVudCgxNDguNTlkZWcsICMwMGZmYTMgMCUsICM2OTAwOWMgMTAwJSk7XHJcblxyXG4kZ2lmLWNvbnRhaW5lci1jb2xvcjogIzFkMWQxZDtcclxuXHJcbiRnaWYtdGV4dC1jb2xvcjogI2ZmZjtcclxuXHJcbiRnaWYtbGluay1jb2xvcjogI2E4ZmE5ODtcclxuXHJcbiRsaWtlZC1jb2xvcjogcmdiKDI1NSwgNTksIDU5KTtcclxuXHJcbiR1bmxpa2VkLWNvbG9yOiByZ2IoMTI2LCAxMjYsIDEyNik7XHJcblxyXG4kbW9yZS1idXR0b24tY29sb3I6IHJnYigwLCAyNTUsIDE5MSk7XHJcblxyXG4kbG9hZGluZy1iYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNTQxKTtcclxuXHJcbiRsb2FkZXItY29sb3I6ICNmZmY7XHJcblxyXG4kc21hbGwtbG9hZGVyLWNvbG9yOiByZ2IoMCwgMjU1LCAxOTEpO1xyXG5cclxuJHNtYWxsLWxvYWRlci1zaXplOiAwLjQ7IC8vQXR0ZW50aW9uISBXaGVuIGFkanVzdGluZyB0aGlzIHZhciB0aGUgdG9wIHZhciBpbiAuc21hbGwtbG9hZGluZy1jb250YWluZXIgaGFzIHRvIGJlIGFkanVzdGVkXHJcblxyXG4kYnV0dG9ucy1ib3JkZXItY29sb3I6IHJnYig3LCAwLCA1Myk7XHJcblxyXG4kc2VhcmNoLW1vZGUtYnV0dG9uLWVuYWJlbGQ6IHJnYigxNTksIDI1NSwgMTE1KTtcclxuXHJcbiRzZWFyY2gtbW9kZS1idXR0b24tZGlzYWJlbGQ6IHJnYigyNTUsIDE0NCwgMTQ0KTtcclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SearchComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-search',
                templateUrl: 'search.component.html',
                styleUrls: ['search.component.scss'],
            }]
    }], null, { smallLoader: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], searchInput: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], searchInputChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], triggerTrending: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], triggerFavorites: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], triggerDynamicSearch: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], triggerSearch: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/services/favorites.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/favorites.service.ts ***!
  \***********************************************/
/*! exports provided: FavoriteService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FavoriteService", function() { return FavoriteService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");




class FavoriteService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.defaultRes = {
            data: [],
        };
    }
    getFavorites() {
        //Gets all saved gifs and displays them
        this.favGifIdsString = localStorage.getItem('favGifIds'); //Get the ids from localStorage
        if (this.favGifIdsString) {
            //Check if there are favorite Gifs
            return this.httpClient.get(`https://api.giphy.com/v1/gifs?api_key=vf7nDm11F3X2Pe63jIGjWWPiFCFCZXM8&ids=${this.favGifIdsString}` //Get Gifs with the ids api : https://developers.giphy.com/docs/api/endpoint#get-gifs-by-id
            );
        }
        else {
            alert('No favorite Gifs');
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])(this.defaultRes);
        }
    }
    hasFavorite(id) {
        var _a;
        return (_a = localStorage.getItem('favGifIds')) === null || _a === void 0 ? void 0 : _a.includes(id);
    }
    toggleFavorite(id) {
        if (this.hasFavorite(id)) {
            this.removeFavorite(id);
        }
        else {
            this.addFavorite(id);
        }
    }
    addFavorite(id) {
        let favGifIds = this.getFavoritesArray(); //Create Array holding the ids as array
        favGifIds.push(id); //if liked push the new id to the array
        localStorage.setItem('favGifIds', favGifIds.toString()); //Create new String from id array and save it in the localStorage
    }
    removeFavorite(id) {
        let favGifIds = this.getFavoritesArray(); //Create Array holding the ids as array
        favGifIds = favGifIds.filter((e) => e !== id); //if unlicked remove the id from the array / from: https://stackoverflow.com/questions/9792927/javascript-array-search-and-remove-string
        localStorage.setItem('favGifIds', favGifIds.toString()); //Create new String from id array and save it in the localStorage
    }
    getFavoritesArray() {
        this.favGifIdsString = localStorage.getItem('favGifIds'); //Get the ids from localStorage
        if (this.favGifIdsString) {
            //Checks if there are currently ids in the storage
            return this.favGifIdsString.split(','); //if there are split the string into array
        }
        else {
            return []; //if not create an empty array
        }
    }
}
FavoriteService.ɵfac = function FavoriteService_Factory(t) { return new (t || FavoriteService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
FavoriteService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: FavoriteService, factory: FavoriteService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](FavoriteService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/load-more.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/load-more.service.ts ***!
  \***********************************************/
/*! exports provided: LoadMore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadMore", function() { return LoadMore; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");



class LoadMore {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    //makes a http request to load more gifs from the api
    load(index, //index of the last loaded gif
    amount, //amount of gifs to load
    q, //search query
    stickers) {
        const dir = stickers ? 'stickers' : 'gifs';
        if (q === '') {
            //if the search query is empty load trending gifs
            return this.httpClient.get(`https://api.giphy.com/v1/${dir}/trending?api_key=vf7nDm11F3X2Pe63jIGjWWPiFCFCZXM8&limit=${amount}&offset=${index}`);
        }
        else {
            return this.httpClient.get(`https://api.giphy.com/v1/${dir}/search?api_key=vf7nDm11F3X2Pe63jIGjWWPiFCFCZXM8&q=${q}&limit=${amount}&offset=${index}`);
        }
    }
}
LoadMore.ɵfac = function LoadMore_Factory(t) { return new (t || LoadMore)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
LoadMore.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: LoadMore, factory: LoadMore.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoadMore, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/search.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/search.service.ts ***!
  \********************************************/
/*! exports provided: SearchService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchService", function() { return SearchService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _trending_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./trending.service */ "./src/app/services/trending.service.ts");






class SearchService {
    constructor(httpClient, trendingService) {
        this.httpClient = httpClient;
        this.trendingService = trendingService;
        this.defaultRes = {
            data: [],
        };
        this.searchCache = new Map();
    }
    //search function - validates the search and makes a http get request
    searchWithTrendingFallback(q, n, stickers) {
        if (q != '' && q != undefined) {
            return this.search(q, n, stickers);
        }
        else {
            return this.trendingService.getTrending(stickers);
        }
    }
    search(q, n, stickers) {
        console.log('Search: ', q);
        const dir = stickers ? 'stickers' : 'gifs';
        if (this.searchIsValid(q)) {
            if (this.searchCache.has(q + dir)) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])(this.searchCache.get(q + dir));
            }
            else {
                return this.httpClient
                    .get(`https://api.giphy.com/v1/${dir}/search?api_key=vf7nDm11F3X2Pe63jIGjWWPiFCFCZXM8&q=${q}&limit=${n}`)
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])((response) => {
                    this.searchCache.set(q + dir, response);
                }));
            }
        }
        else {
            console.log('Search not Valid'); //Log error if search is invalid
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])(this.defaultRes);
        }
    }
    //Test if the Search var is valid
    searchIsValid(search) {
        if (search) {
            return true;
        }
        return false;
    }
}
SearchService.ɵfac = function SearchService_Factory(t) { return new (t || SearchService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_trending_service__WEBPACK_IMPORTED_MODULE_4__["TrendingService"])); };
SearchService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: SearchService, factory: SearchService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](SearchService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }, { type: _trending_service__WEBPACK_IMPORTED_MODULE_4__["TrendingService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/trending.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/trending.service.ts ***!
  \**********************************************/
/*! exports provided: TrendingService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrendingService", function() { return TrendingService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");



class TrendingService {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    getTrending(stickers) {
        //gets the trending Gifs with the trending api from giphy
        const dir = stickers ? 'stickers' : 'gifs';
        return this.httpClient.get(`https://api.giphy.com/v1/${dir}/trending?api_key=vf7nDm11F3X2Pe63jIGjWWPiFCFCZXM8`);
    }
}
TrendingService.ɵfac = function TrendingService_Factory(t) { return new (t || TrendingService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
TrendingService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: TrendingService, factory: TrendingService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TrendingService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


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
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Julius\Documents\Praktikum web und soehne\giphychallenge\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map