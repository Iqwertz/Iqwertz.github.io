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

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _pages_landing_landing_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/landing/landing.component */ "./src/app/pages/landing/landing.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _pages_session_session_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/session/session.component */ "./src/app/pages/session/session.component.ts");






const routes = [
    {
        path: 'session/:id',
        component: _pages_session_session_component__WEBPACK_IMPORTED_MODULE_3__["SessionComponent"],
    },
    {
        path: '',
        component: _pages_landing_landing_component__WEBPACK_IMPORTED_MODULE_0__["LandingComponent"],
    },
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, { useHash: true })], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, { useHash: true })],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class AppComponent {
    constructor() {
        this.title = 'frontend';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss'],
            }]
    }], null, null); })();


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
/* harmony import */ var _store_app_state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./store/app.state */ "./src/app/store/app.state.ts");
/* harmony import */ var _services_connect_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/connect.service */ "./src/app/services/connect.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngxs/store */ "./node_modules/@ngxs/store/__ivy_ngcc__/fesm2015/ngxs-store.js");
/* harmony import */ var _ngxs_logger_plugin__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngxs/logger-plugin */ "./node_modules/@ngxs/logger-plugin/__ivy_ngcc__/fesm2015/ngxs-logger-plugin.js");
/* harmony import */ var _ngxs_devtools_plugin__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngxs/devtools-plugin */ "./node_modules/@ngxs/devtools-plugin/__ivy_ngcc__/fesm2015/ngxs-devtools-plugin.js");
/* harmony import */ var _pages_landing_landing_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/landing/landing.component */ "./src/app/pages/landing/landing.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _pages_session_session_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pages/session/session.component */ "./src/app/pages/session/session.component.ts");
/* harmony import */ var _components_session_messages_session_messages_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/session-messages/session-messages.component */ "./src/app/components/session-messages/session-messages.component.ts");
/* harmony import */ var _components_session_messages_text_field_session_messages_text_field_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/session-messages-text-field/session-messages-text-field.component */ "./src/app/components/session-messages-text-field/session-messages-text-field.component.ts");
/* harmony import */ var _components_join_session_join_session_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/join-session/join-session.component */ "./src/app/components/join-session/join-session.component.ts");
/* harmony import */ var _components_create_session_create_session_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/create-session/create-session.component */ "./src/app/components/create-session/create-session.component.ts");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/__ivy_ngcc__/fesm2015/angular-fontawesome.js");
/* harmony import */ var _components_sessionmenu_sessionmenu_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/sessionmenu/sessionmenu.component */ "./src/app/components/sessionmenu/sessionmenu.component.ts");
/* harmony import */ var _pipes_safe_pipe__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./pipes/safe.pipe */ "./src/app/pipes/safe.pipe.ts");
/* harmony import */ var _components_useralert_useralert_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/useralert/useralert.component */ "./src/app/components/useralert/useralert.component.ts");
/* harmony import */ var _components_search_messages_search_messages_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/search-messages/search-messages.component */ "./src/app/components/search-messages/search-messages.component.ts");
/* harmony import */ var _pipes_search_pipe__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./pipes/search.pipe */ "./src/app/pipes/search.pipe.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");































class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [_services_connect_service__WEBPACK_IMPORTED_MODULE_1__["ConnectService"]], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
            _ngxs_store__WEBPACK_IMPORTED_MODULE_6__["NgxsModule"].forRoot(),
            _ngxs_logger_plugin__WEBPACK_IMPORTED_MODULE_7__["NgxsLoggerPluginModule"].forRoot(),
            _ngxs_devtools_plugin__WEBPACK_IMPORTED_MODULE_8__["NgxsReduxDevtoolsPluginModule"].forRoot(),
            _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientModule"],
            _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_17__["FontAwesomeModule"],
            _ngxs_store__WEBPACK_IMPORTED_MODULE_6__["NgxsModule"].forRoot([_store_app_state__WEBPACK_IMPORTED_MODULE_0__["AppState"]]),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
        _pages_landing_landing_component__WEBPACK_IMPORTED_MODULE_9__["LandingComponent"],
        _pages_session_session_component__WEBPACK_IMPORTED_MODULE_12__["SessionComponent"],
        _components_session_messages_session_messages_component__WEBPACK_IMPORTED_MODULE_13__["SessionMessagesComponent"],
        _components_session_messages_text_field_session_messages_text_field_component__WEBPACK_IMPORTED_MODULE_14__["SessionMessagesTextFieldComponent"],
        _components_join_session_join_session_component__WEBPACK_IMPORTED_MODULE_15__["JoinSessionComponent"],
        _components_create_session_create_session_component__WEBPACK_IMPORTED_MODULE_16__["CreateSessionComponent"],
        _components_sessionmenu_sessionmenu_component__WEBPACK_IMPORTED_MODULE_18__["SessionmenuComponent"],
        _pipes_safe_pipe__WEBPACK_IMPORTED_MODULE_19__["SafePipe"],
        _components_useralert_useralert_component__WEBPACK_IMPORTED_MODULE_20__["UseralertComponent"],
        _components_search_messages_search_messages_component__WEBPACK_IMPORTED_MODULE_21__["SearchMessagesComponent"],
        _pipes_search_pipe__WEBPACK_IMPORTED_MODULE_22__["SearchPipe"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"], _ngxs_store__WEBPACK_IMPORTED_MODULE_6__["ɵj"], _ngxs_logger_plugin__WEBPACK_IMPORTED_MODULE_7__["NgxsLoggerPluginModule"], _ngxs_devtools_plugin__WEBPACK_IMPORTED_MODULE_8__["NgxsReduxDevtoolsPluginModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientModule"],
        _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_17__["FontAwesomeModule"], _ngxs_store__WEBPACK_IMPORTED_MODULE_6__["ɵj"]], exports: [_pipes_search_pipe__WEBPACK_IMPORTED_MODULE_22__["SearchPipe"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                    _pages_landing_landing_component__WEBPACK_IMPORTED_MODULE_9__["LandingComponent"],
                    _pages_session_session_component__WEBPACK_IMPORTED_MODULE_12__["SessionComponent"],
                    _components_session_messages_session_messages_component__WEBPACK_IMPORTED_MODULE_13__["SessionMessagesComponent"],
                    _components_session_messages_text_field_session_messages_text_field_component__WEBPACK_IMPORTED_MODULE_14__["SessionMessagesTextFieldComponent"],
                    _components_join_session_join_session_component__WEBPACK_IMPORTED_MODULE_15__["JoinSessionComponent"],
                    _components_create_session_create_session_component__WEBPACK_IMPORTED_MODULE_16__["CreateSessionComponent"],
                    _components_sessionmenu_sessionmenu_component__WEBPACK_IMPORTED_MODULE_18__["SessionmenuComponent"],
                    _pipes_safe_pipe__WEBPACK_IMPORTED_MODULE_19__["SafePipe"],
                    _components_useralert_useralert_component__WEBPACK_IMPORTED_MODULE_20__["UseralertComponent"],
                    _components_search_messages_search_messages_component__WEBPACK_IMPORTED_MODULE_21__["SearchMessagesComponent"],
                    _pipes_search_pipe__WEBPACK_IMPORTED_MODULE_22__["SearchPipe"],
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                    _ngxs_store__WEBPACK_IMPORTED_MODULE_6__["NgxsModule"].forRoot(),
                    _ngxs_logger_plugin__WEBPACK_IMPORTED_MODULE_7__["NgxsLoggerPluginModule"].forRoot(),
                    _ngxs_devtools_plugin__WEBPACK_IMPORTED_MODULE_8__["NgxsReduxDevtoolsPluginModule"].forRoot(),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientModule"],
                    _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_17__["FontAwesomeModule"],
                    _ngxs_store__WEBPACK_IMPORTED_MODULE_6__["NgxsModule"].forRoot([_store_app_state__WEBPACK_IMPORTED_MODULE_0__["AppState"]]),
                ],
                providers: [_services_connect_service__WEBPACK_IMPORTED_MODULE_1__["ConnectService"]],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]],
                exports: [_pipes_search_pipe__WEBPACK_IMPORTED_MODULE_22__["SearchPipe"]],
            }]
    }], null, null); })();
_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetComponentScope"](_pages_session_session_component__WEBPACK_IMPORTED_MODULE_12__["SessionComponent"], [_angular_common__WEBPACK_IMPORTED_MODULE_23__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_23__["NgComponentOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_23__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_23__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_23__["NgTemplateOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_23__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_23__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_23__["NgSwitchCase"], _angular_common__WEBPACK_IMPORTED_MODULE_23__["NgSwitchDefault"], _angular_common__WEBPACK_IMPORTED_MODULE_23__["NgPlural"], _angular_common__WEBPACK_IMPORTED_MODULE_23__["NgPluralCase"], _angular_router__WEBPACK_IMPORTED_MODULE_24__["RouterOutlet"], _angular_router__WEBPACK_IMPORTED_MODULE_24__["RouterLink"], _angular_router__WEBPACK_IMPORTED_MODULE_24__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_24__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_24__["ɵangular_packages_router_router_l"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ɵangular_packages_forms_forms_x"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["RangeValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["CheckboxControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["SelectMultipleControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["RadioControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["MinLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["MaxLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["PatternValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["CheckboxRequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["EmailValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgModelGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgForm"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_17__["FaIconComponent"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_17__["FaDuotoneIconComponent"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_17__["FaLayersComponent"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_17__["FaLayersTextComponent"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_17__["FaLayersCounterComponent"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_17__["FaStackComponent"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_17__["FaStackItemSizeDirective"], _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
    _pages_landing_landing_component__WEBPACK_IMPORTED_MODULE_9__["LandingComponent"],
    _pages_session_session_component__WEBPACK_IMPORTED_MODULE_12__["SessionComponent"],
    _components_session_messages_session_messages_component__WEBPACK_IMPORTED_MODULE_13__["SessionMessagesComponent"],
    _components_session_messages_text_field_session_messages_text_field_component__WEBPACK_IMPORTED_MODULE_14__["SessionMessagesTextFieldComponent"],
    _components_join_session_join_session_component__WEBPACK_IMPORTED_MODULE_15__["JoinSessionComponent"],
    _components_create_session_create_session_component__WEBPACK_IMPORTED_MODULE_16__["CreateSessionComponent"],
    _components_sessionmenu_sessionmenu_component__WEBPACK_IMPORTED_MODULE_18__["SessionmenuComponent"],
    _components_useralert_useralert_component__WEBPACK_IMPORTED_MODULE_20__["UseralertComponent"],
    _components_search_messages_search_messages_component__WEBPACK_IMPORTED_MODULE_21__["SearchMessagesComponent"]], [_angular_common__WEBPACK_IMPORTED_MODULE_23__["AsyncPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_23__["UpperCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_23__["LowerCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_23__["JsonPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_23__["SlicePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_23__["DecimalPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_23__["PercentPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_23__["TitleCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_23__["CurrencyPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_23__["DatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_23__["I18nPluralPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_23__["I18nSelectPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_23__["KeyValuePipe"], _pipes_safe_pipe__WEBPACK_IMPORTED_MODULE_19__["SafePipe"],
    _pipes_search_pipe__WEBPACK_IMPORTED_MODULE_22__["SearchPipe"]]);
_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetComponentScope"](_components_session_messages_session_messages_component__WEBPACK_IMPORTED_MODULE_13__["SessionMessagesComponent"], [_angular_common__WEBPACK_IMPORTED_MODULE_23__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_23__["NgComponentOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_23__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_23__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_23__["NgTemplateOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_23__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_23__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_23__["NgSwitchCase"], _angular_common__WEBPACK_IMPORTED_MODULE_23__["NgSwitchDefault"], _angular_common__WEBPACK_IMPORTED_MODULE_23__["NgPlural"], _angular_common__WEBPACK_IMPORTED_MODULE_23__["NgPluralCase"], _angular_router__WEBPACK_IMPORTED_MODULE_24__["RouterOutlet"], _angular_router__WEBPACK_IMPORTED_MODULE_24__["RouterLink"], _angular_router__WEBPACK_IMPORTED_MODULE_24__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_24__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_24__["ɵangular_packages_router_router_l"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ɵangular_packages_forms_forms_x"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["RangeValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["CheckboxControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["SelectMultipleControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["RadioControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["MinLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["MaxLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["PatternValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["CheckboxRequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["EmailValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgModelGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgForm"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_17__["FaIconComponent"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_17__["FaDuotoneIconComponent"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_17__["FaLayersComponent"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_17__["FaLayersTextComponent"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_17__["FaLayersCounterComponent"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_17__["FaStackComponent"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_17__["FaStackItemSizeDirective"], _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
    _pages_landing_landing_component__WEBPACK_IMPORTED_MODULE_9__["LandingComponent"],
    _pages_session_session_component__WEBPACK_IMPORTED_MODULE_12__["SessionComponent"],
    _components_session_messages_session_messages_component__WEBPACK_IMPORTED_MODULE_13__["SessionMessagesComponent"],
    _components_session_messages_text_field_session_messages_text_field_component__WEBPACK_IMPORTED_MODULE_14__["SessionMessagesTextFieldComponent"],
    _components_join_session_join_session_component__WEBPACK_IMPORTED_MODULE_15__["JoinSessionComponent"],
    _components_create_session_create_session_component__WEBPACK_IMPORTED_MODULE_16__["CreateSessionComponent"],
    _components_sessionmenu_sessionmenu_component__WEBPACK_IMPORTED_MODULE_18__["SessionmenuComponent"],
    _components_useralert_useralert_component__WEBPACK_IMPORTED_MODULE_20__["UseralertComponent"],
    _components_search_messages_search_messages_component__WEBPACK_IMPORTED_MODULE_21__["SearchMessagesComponent"]], [_angular_common__WEBPACK_IMPORTED_MODULE_23__["AsyncPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_23__["UpperCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_23__["LowerCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_23__["JsonPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_23__["SlicePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_23__["DecimalPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_23__["PercentPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_23__["TitleCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_23__["CurrencyPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_23__["DatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_23__["I18nPluralPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_23__["I18nSelectPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_23__["KeyValuePipe"], _pipes_safe_pipe__WEBPACK_IMPORTED_MODULE_19__["SafePipe"],
    _pipes_search_pipe__WEBPACK_IMPORTED_MODULE_22__["SearchPipe"]]);


/***/ }),

/***/ "./src/app/components/create-session/create-session.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/create-session/create-session.component.ts ***!
  \***********************************************************************/
/*! exports provided: CreateSessionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateSessionComponent", function() { return CreateSessionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_connect_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/connect.service */ "./src/app/services/connect.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_user_alert_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/user-alert.service */ "./src/app/services/user-alert.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/////////////////////////////////////////////
/*
creates session Component
Displays create session button
*/
/////////////////////////////////////////////






class CreateSessionComponent {
    constructor(connectService, router, uAlert) {
        this.connectService = connectService;
        this.router = router;
        this.uAlert = uAlert;
    }
    ngOnInit() { }
    createSession() {
        //trys toi create a new session with the connect service and connects it on success
        this.connectService.newSession().subscribe((res) => {
            this.router.navigate(['session', res.sessionId]);
        }, (err) => {
            this.uAlert.setUserAlert(`Couldn't reach server`, 'error');
        });
    }
}
CreateSessionComponent.ɵfac = function CreateSessionComponent_Factory(t) { return new (t || CreateSessionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_connect_service__WEBPACK_IMPORTED_MODULE_1__["ConnectService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_user_alert_service__WEBPACK_IMPORTED_MODULE_3__["UserAlertService"])); };
CreateSessionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CreateSessionComponent, selectors: [["app-create-session"]], decls: 4, vars: 0, consts: [[1, "create-session-container"], [3, "ngSubmit"], ["type", "submit"]], template: function CreateSessionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function CreateSessionComponent_Template_form_ngSubmit_1_listener() { return ctx.createSession(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Create new Session");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"]], styles: [".create-session-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  margin: 1.5em;\n  background: linear-gradient(149deg, #ff0055 0%, #00294f 90%);\n  box-shadow: 4px 4px 5px #000;\n  border: 0;\n  padding: 20px;\n  font-size: 1.5em;\n  border-radius: 20px;\n  color: #eeeeee;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jcmVhdGUtc2Vzc2lvbi9jcmVhdGUtc2Vzc2lvbi5jb21wb25lbnQuc2NzcyIsInNyYy9zY3NzL192YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHRTtFQUNFLGFBQUE7RUNhRiw0REFBQTtFQXlFQSw0QkFqRWM7RUFrRWQsU0FBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0E3RmlCO0FET25CIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9jcmVhdGUtc2Vzc2lvbi9jcmVhdGUtc2Vzc2lvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuL3NyYy9zY3NzL3ZhcmlhYmxlc1wiO1xyXG5cclxuLmNyZWF0ZS1zZXNzaW9uLWNvbnRhaW5lciB7XHJcbiAgYnV0dG9uIHtcclxuICAgIG1hcmdpbjogMS41ZW07XHJcbiAgICBAaW5jbHVkZSBidXR0b24tYmFja2dyb3VuZCgxNDlkZWcpO1xyXG4gICAgQGluY2x1ZGUgYnV0dG9uLXN0eWxlKCk7XHJcbiAgfVxyXG59XHJcbiIsIi8vY3NzIHZhcmlhYmxlcyB0byBjb250cm9sbCB0aGUgYXBwZWFyZW5jZSBvZiB0aGUgc2l0ZVxyXG5cclxuJGxpZ2h0LXRleHQtY29sb3I6IHJnYigyMzgsIDIzOCwgMjM4KTtcclxuXHJcbiRkYXJrLXRleHQtY29sb3I6ICMwMDA7XHJcblxyXG4kYWNjZW50MTogIzAwMDg1MDtcclxuXHJcbiRhY2NlbnQyOiAjZmY2OTI4O1xyXG5cclxuJGFjY2VudDM6IHJnYigxNTMsIDAsIDIyNCk7XHJcblxyXG4kZm9udDogXCJEb3Npc1wiLCBzYW5zLXNlcmlmO1xyXG5cclxuJHVzZXItaWNvbi1jb2xvcjogbGluZWFyLWdyYWRpZW50KDQwLjI3ZGVnLCAjMDBmZmEzIDAlLCAjOTU5NWZmIDEwMCUpO1xyXG5cclxuQG1peGluIGJ1dHRvbi1iYWNrZ3JvdW5kKCRhbmdsZSkge1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgkYW5nbGUsICNmZjAwNTUgMCUsICMwMDI5NGYgOTAlKTtcclxufVxyXG5cclxuJGlucHV0LWZpZWxkMS1jb2xvcjogIzAwNWZiODtcclxuJGlucHV0LWZpZWxkMi1jb2xvcjogIzAwNjljYztcclxuJGlucHV0LWZpZWxkMy1jb2xvcjogIzAwNzRlMDtcclxuJGlucHV0LWZpZWxkNC1jb2xvcjogIzAwN2VmNTtcclxuXHJcbiRidXR0b24tc2hhZG93OiA0cHggNHB4IDVweCAjMDAwO1xyXG5cclxuJG1lc3NhZ2UtYmFja2dyb3VuZC1jb2xvci1zZW5kZXI6IHJnYigxNzcsIDI1NSwgMTkwKTtcclxuJG1lc3NhZ2UtYmFja2dyb3VuZC1jb2xvci1yZWNlaXZlcjogcmdiKDI1MywgMjU1LCAyMjQpO1xyXG4kbWVzc2FnZS1iYWNrZ3JvdW5kLWNvbG9yLXN0YXR1czogcmdiKDEwMywgMjEyLCAyNTUpO1xyXG5cclxuJGFsZXJ0LXVzZXItc3VjY2VzczogbGluZWFyLWdyYWRpZW50KDg4LjA2ZGVnLCAjMDBmZmIzIDAlLCAjMDBmZjY1IDEwMCUpO1xyXG4kYWxlcnQtdXNlci1lcnJvcjogbGluZWFyLWdyYWRpZW50KDI0MC45OGRlZywgI2UwMDAyMiAwJSwgI2ZmYWIwMyAxMDAlKTtcclxuQG1peGluIGRvd25sb2FkLWJ1dHRvbi1iYWNrZ3JvdW5kKCkge1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgyMzguNzJkZWcsICMwMDQ0YTkgMCUsICNmNzAwYTMgMTAwJSksXHJcbiAgICByYWRpYWwtZ3JhZGllbnQoMTAwJSAxODguMDElIGF0IDc2LjE0JSAwJSwgIzQzZGRmZiAwJSwgI2ZmMDAwMCAxMDAlKSxcclxuICAgIGxpbmVhci1ncmFkaWVudCgwZGVnLCAjZGIwMGZmIDAlLCAjMTRmZjAwIDEwMCUpLFxyXG4gICAgcmFkaWFsLWdyYWRpZW50KDU5LjIlIDEwMCUgYXQgNTAlIDEwMCUsICM2YTAwZDUgMCUsICMwMGUwZmYgMTAwJSksXHJcbiAgICByYWRpYWwtZ3JhZGllbnQoMTAwJSAxNDguMDclIGF0IDAlIDAlLCAjZmY5OTAwIDAlLCAjMDAxYWZmIDEwMCUpO1xyXG4gIGJhY2tncm91bmQtYmxlbmQtbW9kZTogaGFyZC1saWdodCwgb3ZlcmxheSwgY29sb3ItYnVybiwgY29sb3ItYnVybiwgbm9ybWFsO1xyXG59XHJcblxyXG5AbWl4aW4gcGljdHVyZS1tZXNzYWdlLWJhY2tncm91bmQoKSB7XHJcbiAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KDEwMCUgMjI1JSBhdCAxMDAlIDAlLCAjMTIwMDM3IDAlLCAjMDAwMDAwIDEwMCUpLFxyXG4gICAgbGluZWFyLWdyYWRpZW50KDM1ZGVnLCAjYzBmZmM3IDAlLCAjMTcwMDFmIDc1JSksXHJcbiAgICBsaW5lYXItZ3JhZGllbnQoNTVkZWcsICMyNDAwZmYgMCUsICMwMDAwMDAgMTAwJSksXHJcbiAgICBsaW5lYXItZ3JhZGllbnQoXHJcbiAgICAgIDkwZGVnLFxyXG4gICAgICAjZmZlMDM3IDAlLFxyXG4gICAgICAjZmZlMDM3IDQwJSxcclxuICAgICAgIzFkY2Q5ZiA0MCUsXHJcbiAgICAgICMxZGNkOWYgNTAlLFxyXG4gICAgICAjMDg4YzZmIDUwJSxcclxuICAgICAgIzA4OGM2ZiA3MCUsXHJcbiAgICAgICMyMzAzM2MgNzAlLFxyXG4gICAgICAjMjMwMzNjIDEwMCVcclxuICAgICksXHJcbiAgICBsaW5lYXItZ3JhZGllbnQoXHJcbiAgICAgIDE4MGRlZyxcclxuICAgICAgI2ZmOGZlNSAwJSxcclxuICAgICAgI2ZmOGZlNSA0NSUsXHJcbiAgICAgICNmYmZmNjQgNDUlLFxyXG4gICAgICAjZmJmZjY0IDYwJSxcclxuICAgICAgIzc2ZTNmZiA2MCUsXHJcbiAgICAgICM3NmUzZmYgODAlLFxyXG4gICAgICAjNmViNmU3IDgwJSxcclxuICAgICAgIzZlYjZlNyAxMDAlXHJcbiAgICApO1xyXG4gIGJhY2tncm91bmQtYmxlbmQtbW9kZTogc2NyZWVuLCBvdmVybGF5LCBvdmVybGF5LCBkYXJrZW4sIG5vcm1hbDtcclxufVxyXG5cclxuQG1peGluIGJhY2tncm91bmQoKSB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCAjMDAwODUwIDAlLCAjMDAwMzIwIDEwMCUpLFxyXG4gICAgcmFkaWFsLWdyYWRpZW50KDEwMCUgMjI1JSBhdCAxMDAlIDAlLCAjZmY2OTI4IDAlLCAjMDAwMDAwIDEwMCUpLFxyXG4gICAgbGluZWFyLWdyYWRpZW50KDIyNWRlZywgI2ZmN2EwMCAwJSwgIzAwMDAwMCAxMDAlKSxcclxuICAgIGxpbmVhci1ncmFkaWVudChcclxuICAgICAgMTM1ZGVnLFxyXG4gICAgICAjY2RmZmViIDEwJSxcclxuICAgICAgI2NkZmZlYiAzNSUsXHJcbiAgICAgICMwMDlmOWQgMzUlLFxyXG4gICAgICAjMDA5ZjlkIDYwJSxcclxuICAgICAgIzA3NDU2ZiA2MCUsXHJcbiAgICAgICMwNzQ1NmYgNjclLFxyXG4gICAgICAjMGYwYTNjIDY3JSxcclxuICAgICAgIzBmMGEzYyAxMDAlXHJcbiAgICApO1xyXG4gIGJhY2tncm91bmQtYmxlbmQtbW9kZTogc2NyZWVuLCBvdmVybGF5LCBoYXJkLWxpZ2h0LCBub3JtYWw7XHJcbn1cclxuXHJcbkBtaXhpbiBidXR0b24tc3R5bGUoKSB7XHJcbiAgYm94LXNoYWRvdzogJGJ1dHRvbi1zaGFkb3c7XHJcbiAgYm9yZGVyOiAwO1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbiAgZm9udC1zaXplOiAxLjVlbTtcclxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gIGNvbG9yOiAkbGlnaHQtdGV4dC1jb2xvcjtcclxufVxyXG5cclxuJG1lZGlhLWJyZWFrcG9pbnQtbWVkaXVtOiAxMDAwcHg7XHJcbiRtZWRpYS1icmVha3BvaW50LXNtYWxsOiA2NTBweDtcclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CreateSessionComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-create-session',
                templateUrl: './create-session.component.html',
                styleUrls: ['./create-session.component.scss'],
            }]
    }], function () { return [{ type: _services_connect_service__WEBPACK_IMPORTED_MODULE_1__["ConnectService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _services_user_alert_service__WEBPACK_IMPORTED_MODULE_3__["UserAlertService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/join-session/join-session.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/join-session/join-session.component.ts ***!
  \*******************************************************************/
/*! exports provided: JoinSessionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JoinSessionComponent", function() { return JoinSessionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/////////////////////////////////////////////
/*
join session Component
Displays the join session field on the landing page
*/
/////////////////////////////////////////////




class JoinSessionComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() { }
    joinSession(id) {
        //join session by routing to it
        if (id.length == 4) {
            id = id.toUpperCase();
            this.router.navigate(['session', id]);
        }
    }
    inputKey(event) {
        //handles input events on the 4 inout fields //
        if (event.key === 'Backspace') {
            let element = event.srcElement.previousElementSibling; //get the sibling element
            if (element == null) {
                // check if its null
                return;
            }
            else {
                element.focus(); // focus if not null
            }
        }
        else if (event.currentTarget.value.length >= 1) {
            let element = event.srcElement.nextElementSibling; // get the sibling element
            if (element == null) {
                // check if its null
                return;
            }
            else {
                element.focus(); // focus if not null
            }
        }
    }
}
JoinSessionComponent.ɵfac = function JoinSessionComponent_Factory(t) { return new (t || JoinSessionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
JoinSessionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: JoinSessionComponent, selectors: [["app-join-session"]], decls: 13, vars: 0, consts: [[1, "join-session-container"], ["autocomplete", "off", 3, "ngSubmit"], [1, "input-field-container"], ["name", "sessionId1", "type", "text", "maxlength", "1", 3, "keyup"], ["id1", ""], ["name", "sessionId2", "type", "text", "maxlength", "1", 3, "keyup"], ["id2", ""], ["name", "sessionId3", "type", "text", "maxlength", "1", 3, "keyup"], ["id3", ""], ["name", "sessionId4", "type", "text", "maxlength", "1", 3, "keyup"], ["id4", ""], ["type", "submit"]], template: function JoinSessionComponent_Template(rf, ctx) { if (rf & 1) {
        const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function JoinSessionComponent_Template_form_ngSubmit_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8); const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](10); return ctx.joinSession(_r0.value + "" + _r1.value + "" + _r2.value + "" + _r3.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function JoinSessionComponent_Template_input_keyup_3_listener($event) { return ctx.inputKey($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 5, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function JoinSessionComponent_Template_input_keyup_5_listener($event) { return ctx.inputKey($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "input", 7, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function JoinSessionComponent_Template_input_keyup_7_listener($event) { return ctx.inputKey($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "input", 9, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function JoinSessionComponent_Template_input_keyup_9_listener($event) { return ctx.inputKey($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Join Session");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"]], styles: [".join-session-container[_ngcontent-%COMP%] {\n  margin: 1.5em;\n}\n.join-session-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-flow: column;\n}\n.join-session-container[_ngcontent-%COMP%]   .input-field-container[_ngcontent-%COMP%] {\n  margin: 5px 0 20px 0;\n}\n.join-session-container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n  margin: 5px;\n  height: 1.5em;\n  width: 1em;\n  text-align: center;\n  font-size: 2.8em;\n  border: none;\n  border-radius: 15px;\n  box-shadow: 4px 4px 5px #000;\n  color: #eeeeee;\n}\n.join-session-container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:nth-child(1) {\n  background: #005fb8;\n}\n.join-session-container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:nth-child(2) {\n  background: #0069cc;\n}\n.join-session-container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:nth-child(3) {\n  background: #0074e0;\n}\n.join-session-container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:nth-child(4) {\n  background: #007ef5;\n}\n.join-session-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  background: linear-gradient(320deg, #ff0055 0%, #00294f 90%);\n  box-shadow: 4px 4px 5px #000;\n  border: 0;\n  padding: 20px;\n  font-size: 1.5em;\n  border-radius: 20px;\n  color: #eeeeee;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9qb2luLXNlc3Npb24vam9pbi1zZXNzaW9uLmNvbXBvbmVudC5zY3NzIiwic3JjL3Njc3MvX3ZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsYUFBQTtBQURGO0FBR0U7RUFDRSxhQUFBO0VBQ0EsaUJBQUE7QUFESjtBQUlFO0VBQ0Usb0JBQUE7QUFGSjtBQUtFO0VBQ0UseUJBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsNEJDRVk7RUREWixjQ3RCZTtBRG1CbkI7QUFNRTtFQUNFLG1CQ1JpQjtBRElyQjtBQU1FO0VBQ0UsbUJDVmlCO0FETXJCO0FBTUU7RUFDRSxtQkNaaUI7QURRckI7QUFNRTtFQUNFLG1CQ2RpQjtBRFVyQjtBQU9FO0VDdkJBLDREQUFBO0VBeUVBLDRCQWpFYztFQWtFZCxTQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQTdGaUI7QUR3Q25CIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9qb2luLXNlc3Npb24vam9pbi1zZXNzaW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4vc3JjL3Njc3MvdmFyaWFibGVzXCI7XHJcblxyXG4uam9pbi1zZXNzaW9uLWNvbnRhaW5lciB7XHJcbiAgbWFyZ2luOiAxLjVlbTtcclxuXHJcbiAgZm9ybSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1mbG93OiBjb2x1bW47XHJcbiAgfVxyXG5cclxuICAuaW5wdXQtZmllbGQtY29udGFpbmVyIHtcclxuICAgIG1hcmdpbjogNXB4IDAgMjBweCAwO1xyXG4gIH1cclxuXHJcbiAgaW5wdXQge1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIG1hcmdpbjogNXB4O1xyXG4gICAgaGVpZ2h0OiAxLjVlbTtcclxuICAgIHdpZHRoOiAxZW07XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDIuOGVtO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICAgIGJveC1zaGFkb3c6ICRidXR0b24tc2hhZG93O1xyXG4gICAgY29sb3I6ICRsaWdodC10ZXh0LWNvbG9yO1xyXG4gIH1cclxuXHJcbiAgaW5wdXQ6bnRoLWNoaWxkKDEpIHtcclxuICAgIGJhY2tncm91bmQ6ICRpbnB1dC1maWVsZDEtY29sb3I7XHJcbiAgfVxyXG4gIGlucHV0Om50aC1jaGlsZCgyKSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAkaW5wdXQtZmllbGQyLWNvbG9yO1xyXG4gIH1cclxuICBpbnB1dDpudGgtY2hpbGQoMykge1xyXG4gICAgYmFja2dyb3VuZDogJGlucHV0LWZpZWxkMy1jb2xvcjtcclxuICB9XHJcbiAgaW5wdXQ6bnRoLWNoaWxkKDQpIHtcclxuICAgIGJhY2tncm91bmQ6ICRpbnB1dC1maWVsZDQtY29sb3I7XHJcbiAgfVxyXG5cclxuICBidXR0b24ge1xyXG4gICAgQGluY2x1ZGUgYnV0dG9uLWJhY2tncm91bmQoMzIwZGVnKTtcclxuICAgIEBpbmNsdWRlIGJ1dHRvbi1zdHlsZSgpO1xyXG4gIH1cclxufVxyXG4iLCIvL2NzcyB2YXJpYWJsZXMgdG8gY29udHJvbGwgdGhlIGFwcGVhcmVuY2Ugb2YgdGhlIHNpdGVcclxuXHJcbiRsaWdodC10ZXh0LWNvbG9yOiByZ2IoMjM4LCAyMzgsIDIzOCk7XHJcblxyXG4kZGFyay10ZXh0LWNvbG9yOiAjMDAwO1xyXG5cclxuJGFjY2VudDE6ICMwMDA4NTA7XHJcblxyXG4kYWNjZW50MjogI2ZmNjkyODtcclxuXHJcbiRhY2NlbnQzOiByZ2IoMTUzLCAwLCAyMjQpO1xyXG5cclxuJGZvbnQ6IFwiRG9zaXNcIiwgc2Fucy1zZXJpZjtcclxuXHJcbiR1c2VyLWljb24tY29sb3I6IGxpbmVhci1ncmFkaWVudCg0MC4yN2RlZywgIzAwZmZhMyAwJSwgIzk1OTVmZiAxMDAlKTtcclxuXHJcbkBtaXhpbiBidXR0b24tYmFja2dyb3VuZCgkYW5nbGUpIHtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoJGFuZ2xlLCAjZmYwMDU1IDAlLCAjMDAyOTRmIDkwJSk7XHJcbn1cclxuXHJcbiRpbnB1dC1maWVsZDEtY29sb3I6ICMwMDVmYjg7XHJcbiRpbnB1dC1maWVsZDItY29sb3I6ICMwMDY5Y2M7XHJcbiRpbnB1dC1maWVsZDMtY29sb3I6ICMwMDc0ZTA7XHJcbiRpbnB1dC1maWVsZDQtY29sb3I6ICMwMDdlZjU7XHJcblxyXG4kYnV0dG9uLXNoYWRvdzogNHB4IDRweCA1cHggIzAwMDtcclxuXHJcbiRtZXNzYWdlLWJhY2tncm91bmQtY29sb3Itc2VuZGVyOiByZ2IoMTc3LCAyNTUsIDE5MCk7XHJcbiRtZXNzYWdlLWJhY2tncm91bmQtY29sb3ItcmVjZWl2ZXI6IHJnYigyNTMsIDI1NSwgMjI0KTtcclxuJG1lc3NhZ2UtYmFja2dyb3VuZC1jb2xvci1zdGF0dXM6IHJnYigxMDMsIDIxMiwgMjU1KTtcclxuXHJcbiRhbGVydC11c2VyLXN1Y2Nlc3M6IGxpbmVhci1ncmFkaWVudCg4OC4wNmRlZywgIzAwZmZiMyAwJSwgIzAwZmY2NSAxMDAlKTtcclxuJGFsZXJ0LXVzZXItZXJyb3I6IGxpbmVhci1ncmFkaWVudCgyNDAuOThkZWcsICNlMDAwMjIgMCUsICNmZmFiMDMgMTAwJSk7XHJcbkBtaXhpbiBkb3dubG9hZC1idXR0b24tYmFja2dyb3VuZCgpIHtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMjM4LjcyZGVnLCAjMDA0NGE5IDAlLCAjZjcwMGEzIDEwMCUpLFxyXG4gICAgcmFkaWFsLWdyYWRpZW50KDEwMCUgMTg4LjAxJSBhdCA3Ni4xNCUgMCUsICM0M2RkZmYgMCUsICNmZjAwMDAgMTAwJSksXHJcbiAgICBsaW5lYXItZ3JhZGllbnQoMGRlZywgI2RiMDBmZiAwJSwgIzE0ZmYwMCAxMDAlKSxcclxuICAgIHJhZGlhbC1ncmFkaWVudCg1OS4yJSAxMDAlIGF0IDUwJSAxMDAlLCAjNmEwMGQ1IDAlLCAjMDBlMGZmIDEwMCUpLFxyXG4gICAgcmFkaWFsLWdyYWRpZW50KDEwMCUgMTQ4LjA3JSBhdCAwJSAwJSwgI2ZmOTkwMCAwJSwgIzAwMWFmZiAxMDAlKTtcclxuICBiYWNrZ3JvdW5kLWJsZW5kLW1vZGU6IGhhcmQtbGlnaHQsIG92ZXJsYXksIGNvbG9yLWJ1cm4sIGNvbG9yLWJ1cm4sIG5vcm1hbDtcclxufVxyXG5cclxuQG1peGluIHBpY3R1cmUtbWVzc2FnZS1iYWNrZ3JvdW5kKCkge1xyXG4gIGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudCgxMDAlIDIyNSUgYXQgMTAwJSAwJSwgIzEyMDAzNyAwJSwgIzAwMDAwMCAxMDAlKSxcclxuICAgIGxpbmVhci1ncmFkaWVudCgzNWRlZywgI2MwZmZjNyAwJSwgIzE3MDAxZiA3NSUpLFxyXG4gICAgbGluZWFyLWdyYWRpZW50KDU1ZGVnLCAjMjQwMGZmIDAlLCAjMDAwMDAwIDEwMCUpLFxyXG4gICAgbGluZWFyLWdyYWRpZW50KFxyXG4gICAgICA5MGRlZyxcclxuICAgICAgI2ZmZTAzNyAwJSxcclxuICAgICAgI2ZmZTAzNyA0MCUsXHJcbiAgICAgICMxZGNkOWYgNDAlLFxyXG4gICAgICAjMWRjZDlmIDUwJSxcclxuICAgICAgIzA4OGM2ZiA1MCUsXHJcbiAgICAgICMwODhjNmYgNzAlLFxyXG4gICAgICAjMjMwMzNjIDcwJSxcclxuICAgICAgIzIzMDMzYyAxMDAlXHJcbiAgICApLFxyXG4gICAgbGluZWFyLWdyYWRpZW50KFxyXG4gICAgICAxODBkZWcsXHJcbiAgICAgICNmZjhmZTUgMCUsXHJcbiAgICAgICNmZjhmZTUgNDUlLFxyXG4gICAgICAjZmJmZjY0IDQ1JSxcclxuICAgICAgI2ZiZmY2NCA2MCUsXHJcbiAgICAgICM3NmUzZmYgNjAlLFxyXG4gICAgICAjNzZlM2ZmIDgwJSxcclxuICAgICAgIzZlYjZlNyA4MCUsXHJcbiAgICAgICM2ZWI2ZTcgMTAwJVxyXG4gICAgKTtcclxuICBiYWNrZ3JvdW5kLWJsZW5kLW1vZGU6IHNjcmVlbiwgb3ZlcmxheSwgb3ZlcmxheSwgZGFya2VuLCBub3JtYWw7XHJcbn1cclxuXHJcbkBtaXhpbiBiYWNrZ3JvdW5kKCkge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCg0NWRlZywgIzAwMDg1MCAwJSwgIzAwMDMyMCAxMDAlKSxcclxuICAgIHJhZGlhbC1ncmFkaWVudCgxMDAlIDIyNSUgYXQgMTAwJSAwJSwgI2ZmNjkyOCAwJSwgIzAwMDAwMCAxMDAlKSxcclxuICAgIGxpbmVhci1ncmFkaWVudCgyMjVkZWcsICNmZjdhMDAgMCUsICMwMDAwMDAgMTAwJSksXHJcbiAgICBsaW5lYXItZ3JhZGllbnQoXHJcbiAgICAgIDEzNWRlZyxcclxuICAgICAgI2NkZmZlYiAxMCUsXHJcbiAgICAgICNjZGZmZWIgMzUlLFxyXG4gICAgICAjMDA5ZjlkIDM1JSxcclxuICAgICAgIzAwOWY5ZCA2MCUsXHJcbiAgICAgICMwNzQ1NmYgNjAlLFxyXG4gICAgICAjMDc0NTZmIDY3JSxcclxuICAgICAgIzBmMGEzYyA2NyUsXHJcbiAgICAgICMwZjBhM2MgMTAwJVxyXG4gICAgKTtcclxuICBiYWNrZ3JvdW5kLWJsZW5kLW1vZGU6IHNjcmVlbiwgb3ZlcmxheSwgaGFyZC1saWdodCwgbm9ybWFsO1xyXG59XHJcblxyXG5AbWl4aW4gYnV0dG9uLXN0eWxlKCkge1xyXG4gIGJveC1zaGFkb3c6ICRidXR0b24tc2hhZG93O1xyXG4gIGJvcmRlcjogMDtcclxuICBwYWRkaW5nOiAyMHB4O1xyXG4gIGZvbnQtc2l6ZTogMS41ZW07XHJcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICBjb2xvcjogJGxpZ2h0LXRleHQtY29sb3I7XHJcbn1cclxuXHJcbiRtZWRpYS1icmVha3BvaW50LW1lZGl1bTogMTAwMHB4O1xyXG4kbWVkaWEtYnJlYWtwb2ludC1zbWFsbDogNjUwcHg7XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](JoinSessionComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-join-session',
                templateUrl: './join-session.component.html',
                styleUrls: ['./join-session.component.scss'],
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/search-messages/search-messages.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/search-messages/search-messages.component.ts ***!
  \*************************************************************************/
/*! exports provided: SearchMessagesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchMessagesComponent", function() { return SearchMessagesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _store_app_action__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../store/app.action */ "./src/app/store/app.action.ts");
/* harmony import */ var _services_messages_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/messages.service */ "./src/app/services/messages.service.ts");
/* harmony import */ var _services_user_alert_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/user-alert.service */ "./src/app/services/user-alert.service.ts");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngxs/store */ "./node_modules/@ngxs/store/__ivy_ngcc__/fesm2015/ngxs-store.js");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/__ivy_ngcc__/fesm2015/angular-fontawesome.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/////////////////////////////////////////////
/*
search Message Text Component
Displays the search field
*/
/////////////////////////////////////////////










function SearchMessagesComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SearchMessagesComponent_div_2_Template_input_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r1.searchTerm = $event; })("ngModelChange", function SearchMessagesComponent_div_2_Template_input_ngModelChange_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.search(true); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SearchMessagesComponent_div_2_Template_div_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.close(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SearchMessagesComponent_div_2_Template_div_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.nextSearch(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "fa-icon", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SearchMessagesComponent_div_2_Template_div_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.lastSearch(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "fa-icon", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.searchTerm);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx_r0.faAngleLeft);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx_r0.faAngleRight);
} }
class SearchMessagesComponent {
    constructor(messagesService, userAlertService, store) {
        this.messagesService = messagesService;
        this.userAlertService = userAlertService;
        this.store = store;
        this.searchField = false; //search field active status
        this.searchTerm = ''; //the current search term
        this.searchIndex = 0; //the Index of the current searched message / used to go up and down in searched messages
        this.faSearch = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faSearch"];
        this.faAngleLeft = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faAngleLeft"];
        this.faAngleRight = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faAngleRight"];
    }
    ngOnInit() { }
    search(reset) {
        //triggers a new search// if true the search Index gets reset
        this.store.dispatch(new _store_app_action__WEBPACK_IMPORTED_MODULE_2__["SetSearchTerm"](this.searchTerm)); //save searchterm in store
        if (reset) {
            //reset index if true
            this.searchIndex = 0;
        }
        const id = this.searchMessages(this.searchTerm); //searches messages and get id of matched message
        if (id >= 0) {
            //when id found scroll to it
            this.messagesService.scrollToId(id);
        }
        else if (id == -2) {
            // if no message is found, because no message is above or below -> alert user
            this.userAlertService.setUserAlert('no messages found', 'error');
        }
    }
    nextSearch() {
        //increases search index and trigger new search
        this.searchIndex++;
        this.search(false);
    }
    lastSearch() {
        //decrease search index and trigger new search
        this.searchIndex--;
        this.search(false);
    }
    close() {
        //closes search and clear search Term
        this.searchField = false;
        this.searchTerm = '';
        this.store.dispatch(new _store_app_action__WEBPACK_IMPORTED_MODULE_2__["SetSearchTerm"](this.searchTerm));
    }
    searchMessages(q) {
        //search messages for string / it returns the nth element of the searchIndex //returns -2 when no element found because search index is to high // returns -3 when no element is was found (it doesnt return -1 one because private server message have an id of -1)
        const messages = this.messagesService.messages;
        let resultCount = 0;
        for (let i = messages.length - 1; i >= 0; i--) {
            const message = messages[i];
            if (message.contentType != 'Picture' && message.type != 'status') {
                if (message.message.includes(q)) {
                    if (this.searchIndex == resultCount) {
                        return message.messageId;
                    }
                    else {
                        resultCount++;
                    }
                }
            }
        }
        if (resultCount > 0) {
            //check if something was found
            return -2;
        }
        else {
            return -3;
        }
    }
}
SearchMessagesComponent.ɵfac = function SearchMessagesComponent_Factory(t) { return new (t || SearchMessagesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_messages_service__WEBPACK_IMPORTED_MODULE_3__["MessagesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_user_alert_service__WEBPACK_IMPORTED_MODULE_4__["UserAlertService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngxs_store__WEBPACK_IMPORTED_MODULE_5__["Store"])); };
SearchMessagesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SearchMessagesComponent, selectors: [["app-search-messages"]], decls: 3, vars: 2, consts: [[1, "open-search", 3, "click"], [3, "icon"], ["class", "search-field-container", 4, "ngIf"], [1, "search-field-container"], ["type", "text", "placeholder", "Search\n  Session", 3, "ngModel", "ngModelChange"], [1, "close", 3, "click"], [1, "arrows"], [1, "left", 3, "click"], [1, "right", 3, "click"]], template: function SearchMessagesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SearchMessagesComponent_Template_div_click_0_listener() { return ctx.searchField = !ctx.searchField; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "fa-icon", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SearchMessagesComponent_div_2_Template, 9, 3, "div", 2);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faSearch);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.searchField);
    } }, directives: [_fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_6__["FaIconComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgModel"]], styles: [".open-search[_ngcontent-%COMP%] {\n  top: 60px;\n  right: 10px;\n  font-size: 25px;\n  cursor: pointer;\n  position: absolute;\n  color: #eeeeee;\n}\n\n.search-field-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-flow: row;\n  position: absolute;\n  top: 25px;\n  width: 300px;\n  left: 0;\n  right: 0;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.search-field-container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  background: #fff;\n  color: #000;\n  font-family: \"Dosis\", sans-serif;\n  box-shadow: 4px 4px 5px #000;\n  border: 0;\n  border-radius: 10px;\n  font-size: 1em;\n  width: 300px;\n  padding: 5px 10px;\n}\n\n.search-field-container[_ngcontent-%COMP%]   .arrows[_ngcontent-%COMP%] {\n  width: 3.4em;\n  background: #fff;\n  display: flex;\n  flex-flow: row;\n  align-items: center;\n  justify-items: center;\n  box-shadow: 4px 4px 5px #000;\n  border-radius: 10px;\n  font-size: 25px;\n  padding: 5px 0px;\n}\n\n.search-field-container[_ngcontent-%COMP%]   .arrows[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%], .search-field-container[_ngcontent-%COMP%]   .arrows[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%] {\n  display: flex;\n  flex-flow: row;\n  align-content: center;\n  justify-content: center;\n  width: 50%;\n  color: #292929;\n  cursor: pointer;\n}\n\n.search-field-container[_ngcontent-%COMP%]   .arrows[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]:hover {\n  color: #00e49f;\n}\n\n.search-field-container[_ngcontent-%COMP%]   .arrows[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]:hover {\n  color: #00e49f;\n}\n\n.search-field-container[_ngcontent-%COMP%]   .arrows[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%] {\n  border-right: 1px solid #999999;\n}\n\n.search-field-container[_ngcontent-%COMP%]   .arrows[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%] {\n  border-left: 1px solid #999999;\n}\n\n.search-field-container[_ngcontent-%COMP%]   .close[_ngcontent-%COMP%] {\n  color: #ff3838;\n  font-size: 30px;\n  position: relative;\n  right: 1em;\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zZWFyY2gtbWVzc2FnZXMvc2VhcmNoLW1lc3NhZ2VzLmNvbXBvbmVudC5zY3NzIiwic3JjL3Njc3MvX3ZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsU0FBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsY0NOaUI7QURLbkI7O0FBSUE7RUFDRSxhQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFlBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUFERjs7QUFFRTtFQUNFLGdCQUFBO0VBQ0EsV0NuQmM7RURvQmQsZ0NDWkc7RURhSCw0QkFBQTtFQUNBLFNBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QUFBSjs7QUFHRTtFQUNFLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLDRCQ2ZZO0VEZ0JaLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBREo7O0FBR0k7O0VBRUUsYUFBQTtFQUNBLGNBQUE7RUFDQSxxQkFBQTtFQUNBLHVCQUFBO0VBQ0EsVUFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FBRE47O0FBSUk7RUFDRSxjQUFBO0FBRk47O0FBS0k7RUFDRSxjQUFBO0FBSE47O0FBTUk7RUFDRSwrQkFBQTtBQUpOOztBQU9JO0VBQ0UsOEJBQUE7QUFMTjs7QUFTRTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtBQVBKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9zZWFyY2gtbWVzc2FnZXMvc2VhcmNoLW1lc3NhZ2VzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4vc3JjL3Njc3MvdmFyaWFibGVzXCI7XHJcblxyXG4ub3Blbi1zZWFyY2gge1xyXG4gIHRvcDogNjBweDtcclxuICByaWdodDogMTBweDtcclxuICBmb250LXNpemU6IDI1cHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBjb2xvcjogJGxpZ2h0LXRleHQtY29sb3I7XHJcbn1cclxuXHJcbi5zZWFyY2gtZmllbGQtY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZmxvdzogcm93O1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDI1cHg7XHJcbiAgd2lkdGg6IDMwMHB4O1xyXG4gIGxlZnQ6IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gIGlucHV0IHtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICBjb2xvcjogJGRhcmstdGV4dC1jb2xvcjtcclxuICAgIGZvbnQtZmFtaWx5OiAkZm9udDtcclxuICAgIGJveC1zaGFkb3c6ICRidXR0b24tc2hhZG93O1xyXG4gICAgYm9yZGVyOiAwO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIGZvbnQtc2l6ZTogMWVtO1xyXG4gICAgd2lkdGg6IDMwMHB4O1xyXG4gICAgcGFkZGluZzogNXB4IDEwcHg7XHJcbiAgfVxyXG5cclxuICAuYXJyb3dzIHtcclxuICAgIHdpZHRoOiAzLjRlbTtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1mbG93OiByb3c7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xyXG4gICAgYm94LXNoYWRvdzogJGJ1dHRvbi1zaGFkb3c7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgZm9udC1zaXplOiAyNXB4O1xyXG4gICAgcGFkZGluZzogNXB4IDBweDtcclxuXHJcbiAgICAubGVmdCxcclxuICAgIC5yaWdodCB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGZsZXgtZmxvdzogcm93O1xyXG4gICAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICB3aWR0aDogNTAlO1xyXG4gICAgICBjb2xvcjogcmdiKDQxLCA0MSwgNDEpO1xyXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgLnJpZ2h0OmhvdmVyIHtcclxuICAgICAgY29sb3I6IHJnYigwLCAyMjgsIDE1OSk7XHJcbiAgICB9XHJcblxyXG4gICAgLmxlZnQ6aG92ZXIge1xyXG4gICAgICBjb2xvcjogcmdiKDAsIDIyOCwgMTU5KTtcclxuICAgIH1cclxuXHJcbiAgICAubGVmdCB7XHJcbiAgICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIHJnYigxNTMsIDE1MywgMTUzKTtcclxuICAgIH1cclxuXHJcbiAgICAucmlnaHQge1xyXG4gICAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkIHJnYigxNTMsIDE1MywgMTUzKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5jbG9zZSB7XHJcbiAgICBjb2xvcjogcmdiKDI1NSwgNTYsIDU2KTtcclxuICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHJpZ2h0OiAxZW07XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgfVxyXG59XHJcbiIsIi8vY3NzIHZhcmlhYmxlcyB0byBjb250cm9sbCB0aGUgYXBwZWFyZW5jZSBvZiB0aGUgc2l0ZVxyXG5cclxuJGxpZ2h0LXRleHQtY29sb3I6IHJnYigyMzgsIDIzOCwgMjM4KTtcclxuXHJcbiRkYXJrLXRleHQtY29sb3I6ICMwMDA7XHJcblxyXG4kYWNjZW50MTogIzAwMDg1MDtcclxuXHJcbiRhY2NlbnQyOiAjZmY2OTI4O1xyXG5cclxuJGFjY2VudDM6IHJnYigxNTMsIDAsIDIyNCk7XHJcblxyXG4kZm9udDogXCJEb3Npc1wiLCBzYW5zLXNlcmlmO1xyXG5cclxuJHVzZXItaWNvbi1jb2xvcjogbGluZWFyLWdyYWRpZW50KDQwLjI3ZGVnLCAjMDBmZmEzIDAlLCAjOTU5NWZmIDEwMCUpO1xyXG5cclxuQG1peGluIGJ1dHRvbi1iYWNrZ3JvdW5kKCRhbmdsZSkge1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgkYW5nbGUsICNmZjAwNTUgMCUsICMwMDI5NGYgOTAlKTtcclxufVxyXG5cclxuJGlucHV0LWZpZWxkMS1jb2xvcjogIzAwNWZiODtcclxuJGlucHV0LWZpZWxkMi1jb2xvcjogIzAwNjljYztcclxuJGlucHV0LWZpZWxkMy1jb2xvcjogIzAwNzRlMDtcclxuJGlucHV0LWZpZWxkNC1jb2xvcjogIzAwN2VmNTtcclxuXHJcbiRidXR0b24tc2hhZG93OiA0cHggNHB4IDVweCAjMDAwO1xyXG5cclxuJG1lc3NhZ2UtYmFja2dyb3VuZC1jb2xvci1zZW5kZXI6IHJnYigxNzcsIDI1NSwgMTkwKTtcclxuJG1lc3NhZ2UtYmFja2dyb3VuZC1jb2xvci1yZWNlaXZlcjogcmdiKDI1MywgMjU1LCAyMjQpO1xyXG4kbWVzc2FnZS1iYWNrZ3JvdW5kLWNvbG9yLXN0YXR1czogcmdiKDEwMywgMjEyLCAyNTUpO1xyXG5cclxuJGFsZXJ0LXVzZXItc3VjY2VzczogbGluZWFyLWdyYWRpZW50KDg4LjA2ZGVnLCAjMDBmZmIzIDAlLCAjMDBmZjY1IDEwMCUpO1xyXG4kYWxlcnQtdXNlci1lcnJvcjogbGluZWFyLWdyYWRpZW50KDI0MC45OGRlZywgI2UwMDAyMiAwJSwgI2ZmYWIwMyAxMDAlKTtcclxuQG1peGluIGRvd25sb2FkLWJ1dHRvbi1iYWNrZ3JvdW5kKCkge1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgyMzguNzJkZWcsICMwMDQ0YTkgMCUsICNmNzAwYTMgMTAwJSksXHJcbiAgICByYWRpYWwtZ3JhZGllbnQoMTAwJSAxODguMDElIGF0IDc2LjE0JSAwJSwgIzQzZGRmZiAwJSwgI2ZmMDAwMCAxMDAlKSxcclxuICAgIGxpbmVhci1ncmFkaWVudCgwZGVnLCAjZGIwMGZmIDAlLCAjMTRmZjAwIDEwMCUpLFxyXG4gICAgcmFkaWFsLWdyYWRpZW50KDU5LjIlIDEwMCUgYXQgNTAlIDEwMCUsICM2YTAwZDUgMCUsICMwMGUwZmYgMTAwJSksXHJcbiAgICByYWRpYWwtZ3JhZGllbnQoMTAwJSAxNDguMDclIGF0IDAlIDAlLCAjZmY5OTAwIDAlLCAjMDAxYWZmIDEwMCUpO1xyXG4gIGJhY2tncm91bmQtYmxlbmQtbW9kZTogaGFyZC1saWdodCwgb3ZlcmxheSwgY29sb3ItYnVybiwgY29sb3ItYnVybiwgbm9ybWFsO1xyXG59XHJcblxyXG5AbWl4aW4gcGljdHVyZS1tZXNzYWdlLWJhY2tncm91bmQoKSB7XHJcbiAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KDEwMCUgMjI1JSBhdCAxMDAlIDAlLCAjMTIwMDM3IDAlLCAjMDAwMDAwIDEwMCUpLFxyXG4gICAgbGluZWFyLWdyYWRpZW50KDM1ZGVnLCAjYzBmZmM3IDAlLCAjMTcwMDFmIDc1JSksXHJcbiAgICBsaW5lYXItZ3JhZGllbnQoNTVkZWcsICMyNDAwZmYgMCUsICMwMDAwMDAgMTAwJSksXHJcbiAgICBsaW5lYXItZ3JhZGllbnQoXHJcbiAgICAgIDkwZGVnLFxyXG4gICAgICAjZmZlMDM3IDAlLFxyXG4gICAgICAjZmZlMDM3IDQwJSxcclxuICAgICAgIzFkY2Q5ZiA0MCUsXHJcbiAgICAgICMxZGNkOWYgNTAlLFxyXG4gICAgICAjMDg4YzZmIDUwJSxcclxuICAgICAgIzA4OGM2ZiA3MCUsXHJcbiAgICAgICMyMzAzM2MgNzAlLFxyXG4gICAgICAjMjMwMzNjIDEwMCVcclxuICAgICksXHJcbiAgICBsaW5lYXItZ3JhZGllbnQoXHJcbiAgICAgIDE4MGRlZyxcclxuICAgICAgI2ZmOGZlNSAwJSxcclxuICAgICAgI2ZmOGZlNSA0NSUsXHJcbiAgICAgICNmYmZmNjQgNDUlLFxyXG4gICAgICAjZmJmZjY0IDYwJSxcclxuICAgICAgIzc2ZTNmZiA2MCUsXHJcbiAgICAgICM3NmUzZmYgODAlLFxyXG4gICAgICAjNmViNmU3IDgwJSxcclxuICAgICAgIzZlYjZlNyAxMDAlXHJcbiAgICApO1xyXG4gIGJhY2tncm91bmQtYmxlbmQtbW9kZTogc2NyZWVuLCBvdmVybGF5LCBvdmVybGF5LCBkYXJrZW4sIG5vcm1hbDtcclxufVxyXG5cclxuQG1peGluIGJhY2tncm91bmQoKSB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCAjMDAwODUwIDAlLCAjMDAwMzIwIDEwMCUpLFxyXG4gICAgcmFkaWFsLWdyYWRpZW50KDEwMCUgMjI1JSBhdCAxMDAlIDAlLCAjZmY2OTI4IDAlLCAjMDAwMDAwIDEwMCUpLFxyXG4gICAgbGluZWFyLWdyYWRpZW50KDIyNWRlZywgI2ZmN2EwMCAwJSwgIzAwMDAwMCAxMDAlKSxcclxuICAgIGxpbmVhci1ncmFkaWVudChcclxuICAgICAgMTM1ZGVnLFxyXG4gICAgICAjY2RmZmViIDEwJSxcclxuICAgICAgI2NkZmZlYiAzNSUsXHJcbiAgICAgICMwMDlmOWQgMzUlLFxyXG4gICAgICAjMDA5ZjlkIDYwJSxcclxuICAgICAgIzA3NDU2ZiA2MCUsXHJcbiAgICAgICMwNzQ1NmYgNjclLFxyXG4gICAgICAjMGYwYTNjIDY3JSxcclxuICAgICAgIzBmMGEzYyAxMDAlXHJcbiAgICApO1xyXG4gIGJhY2tncm91bmQtYmxlbmQtbW9kZTogc2NyZWVuLCBvdmVybGF5LCBoYXJkLWxpZ2h0LCBub3JtYWw7XHJcbn1cclxuXHJcbkBtaXhpbiBidXR0b24tc3R5bGUoKSB7XHJcbiAgYm94LXNoYWRvdzogJGJ1dHRvbi1zaGFkb3c7XHJcbiAgYm9yZGVyOiAwO1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbiAgZm9udC1zaXplOiAxLjVlbTtcclxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gIGNvbG9yOiAkbGlnaHQtdGV4dC1jb2xvcjtcclxufVxyXG5cclxuJG1lZGlhLWJyZWFrcG9pbnQtbWVkaXVtOiAxMDAwcHg7XHJcbiRtZWRpYS1icmVha3BvaW50LXNtYWxsOiA2NTBweDtcclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SearchMessagesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-search-messages',
                templateUrl: './search-messages.component.html',
                styleUrls: ['./search-messages.component.scss'],
            }]
    }], function () { return [{ type: _services_messages_service__WEBPACK_IMPORTED_MODULE_3__["MessagesService"] }, { type: _services_user_alert_service__WEBPACK_IMPORTED_MODULE_4__["UserAlertService"] }, { type: _ngxs_store__WEBPACK_IMPORTED_MODULE_5__["Store"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/session-messages-text-field/session-messages-text-field.component.ts":
/*!*************************************************************************************************!*\
  !*** ./src/app/components/session-messages-text-field/session-messages-text-field.component.ts ***!
  \*************************************************************************************************/
/*! exports provided: SessionMessagesTextFieldComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SessionMessagesTextFieldComponent", function() { return SessionMessagesTextFieldComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _services_file_handler_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../services/file-handler.service */ "./src/app/services/file-handler.service.ts");
/* harmony import */ var src_app_services_user_alert_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/user-alert.service */ "./src/app/services/user-alert.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/__ivy_ngcc__/fesm2015/angular-fontawesome.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");









function SessionMessagesTextFieldComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SessionMessagesTextFieldComponent_div_9_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.deleteFile(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r0.fileData.dataBase64, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function SessionMessagesTextFieldComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SessionMessagesTextFieldComponent_div_10_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.deleteFile(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "fa-icon", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx_r1.faFileAlt);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r1.fileData.name, " ");
} }
class SessionMessagesTextFieldComponent {
    constructor(fileHandlerService, userAlert) {
        this.fileHandlerService = fileHandlerService;
        this.userAlert = userAlert;
        this.newMessageChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.faArrowRight = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faArrowRight"];
        this.faCamera = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faCamera"];
        this.faFile = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faFile"];
        this.faFileAlt = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faFileAlt"];
        this.fileData = {
            //file data default
            dataBase64: '',
            error: '',
            isSaved: false,
            name: '',
            type: 'Document',
        };
    }
    ngOnInit() { }
    sendMessage(msg) {
        if (this.fileData.dataBase64.length > 1) {
            //check if file data exists
            this.textMessage = '';
            const message = {
                //create message with file data
                message: this.fileData.name,
                base64Data: this.fileData.dataBase64,
                contentType: this.fileData.type,
            };
            this.newMessageChange.emit(message); //emit new Message
            this.deleteFile();
        }
        else {
            if (msg.length > 0) {
                //check if message has content
                if (msg.length <= _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].maxMessageLength) {
                    //check if message isnt to large
                    this.textMessage = '';
                    const message = {
                        //create message
                        message: msg,
                        base64Data: '',
                        contentType: 'Text',
                    };
                    this.newMessageChange.emit(message); //emit message
                }
                else {
                    this.userAlert.setUserAlert('The Message is longer than the permitted amount of ' +
                        _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].maxMessageLength +
                        ' chars', 'error');
                }
            }
        }
    }
    fileChangeEvent(fileInput, fileType) {
        //called when file is uploaded converts file to fileobject with the filehandler service
        this.fileHandlerService
            .fileHandler(fileInput, fileType)
            .subscribe((result) => {
            this.fileData = result;
            if (this.fileData.error.length > 0) {
                this.userAlert.setUserAlert(this.fileData.error, 'error');
            }
        });
    }
    deleteFile() {
        //deletes file
        this.fileData.error = '';
        this.fileData.dataBase64 = '';
        this.fileData.isSaved = false;
        this.fileData.name = '';
        this.fileData.type = 'Document';
    }
}
SessionMessagesTextFieldComponent.ɵfac = function SessionMessagesTextFieldComponent_Factory(t) { return new (t || SessionMessagesTextFieldComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_file_handler_service__WEBPACK_IMPORTED_MODULE_3__["FileHandlerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_user_alert_service__WEBPACK_IMPORTED_MODULE_4__["UserAlertService"])); };
SessionMessagesTextFieldComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SessionMessagesTextFieldComponent, selectors: [["app-session-messages-text-field"]], outputs: { newMessageChange: "newMessageChange" }, decls: 13, vars: 6, consts: [[1, "messages-text-field-container"], [3, "ngSubmit"], [1, "document", "upload-container"], ["type", "file", 3, "change"], [3, "icon"], [1, "image", "upload-container"], ["type", "file", "accept", "image/*", 3, "change"], ["name", "msgField", "autocomplete", "off", 3, "ngModel", "ngModelChange"], ["class", "image preview-container", 4, "ngIf"], ["class", "document preview-container", 4, "ngIf"], ["type", "submit", 1, "submit"], [1, "image", "preview-container"], [1, "close", 3, "click"], [3, "src"], [1, "document", "preview-container"], [1, "document-name"]], template: function SessionMessagesTextFieldComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function SessionMessagesTextFieldComponent_Template_form_ngSubmit_1_listener() { return ctx.sendMessage(ctx.textMessage); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function SessionMessagesTextFieldComponent_Template_input_change_3_listener($event) { return ctx.fileChangeEvent($event, "Document"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "fa-icon", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function SessionMessagesTextFieldComponent_Template_input_change_6_listener($event) { return ctx.fileChangeEvent($event, "Picture"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "fa-icon", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SessionMessagesTextFieldComponent_Template_input_ngModelChange_8_listener($event) { return ctx.textMessage = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, SessionMessagesTextFieldComponent_div_9_Template, 4, 1, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, SessionMessagesTextFieldComponent_div_10_Template, 6, 2, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "fa-icon", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faFile);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faCamera);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.textMessage);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.fileData.isSaved && ctx.fileData.type == "Picture");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.fileData.isSaved && ctx.fileData.type == "Document");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faArrowRight);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_6__["FaIconComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"]], styles: [".messages-text-field-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-flow: column;\n  flex-direction: column;\n  align-items: center;\n}\n.messages-text-field-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: row;\n  margin: 15px 0;\n  position: fixed;\n  bottom: 0;\n  width: 50%;\n}\n.messages-text-field-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  line-height: 1.2em;\n  font-size: 1.2em;\n  border: 0;\n  padding: 10px;\n  width: 85%;\n  border-top-left-radius: 15px;\n  border-bottom-left-radius: 15px;\n  box-shadow: 4px 4px 5px #000;\n}\n.messages-text-field-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .submit[_ngcontent-%COMP%] {\n  line-height: 1.2em;\n  font-size: 1.2em;\n  color: #eeeeee;\n  width: 11%;\n  background: #82e0ff;\n  border: none;\n  padding: 10px;\n  border-top-right-radius: 15px;\n  border-bottom-right-radius: 15px;\n  box-shadow: 4px 4px 5px #000;\n  background: linear-gradient(210deg, #ff0055 0%, #00294f 90%);\n}\n.messages-text-field-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .upload-container[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 10px 0;\n  width: 2.4em;\n  line-height: 1.2em;\n  font-size: 1.2em;\n  color: #eeeeee;\n  border-radius: 100%;\n  margin: 0 5px;\n  background: linear-gradient(100deg, #ff0055 0%, #00294f 90%);\n  box-shadow: 4px 4px 5px #000;\n  cursor: pointer;\n}\n.messages-text-field-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .upload-container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  display: none;\n}\n.messages-text-field-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .preview-container[_ngcontent-%COMP%] {\n  position: absolute;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-flow: column;\n  bottom: 0;\n  right: 10%;\n  height: 300px;\n  border: 0;\n  width: calc(85% - 3.3em);\n  border-radius: 15px 15px 0 15px;\n  box-shadow: 4px 4px 5px #000;\n  background: radial-gradient(100% 225% at 100% 0%, #120037 0%, #000000 100%), linear-gradient(35deg, #c0ffc7 0%, #17001f 75%), linear-gradient(55deg, #2400ff 0%, #000000 100%), linear-gradient(90deg, #ffe037 0%, #ffe037 40%, #1dcd9f 40%, #1dcd9f 50%, #088c6f 50%, #088c6f 70%, #23033c 70%, #23033c 100%), linear-gradient(180deg, #ff8fe5 0%, #ff8fe5 45%, #fbff64 45%, #fbff64 60%, #76e3ff 60%, #76e3ff 80%, #6eb6e7 80%, #6eb6e7 100%);\n  background-blend-mode: screen, overlay, overlay, darken, normal;\n}\n.messages-text-field-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .preview-container.image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  box-shadow: 4px 4px 5px #000;\n  margin: 10px;\n  border-radius: 15px;\n  max-width: 80%;\n  max-height: 280px;\n}\n.messages-text-field-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .preview-container.document[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%] {\n  color: #eeeeee;\n  font-size: 7em;\n}\n.messages-text-field-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .preview-container.document[_ngcontent-%COMP%]   .document-name[_ngcontent-%COMP%] {\n  font-family: \"Dosis\", sans-serif;\n  color: #eeeeee;\n  font-size: 2em;\n  text-shadow: 2px 2px 4px #000;\n}\n.messages-text-field-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .preview-container[_ngcontent-%COMP%]   .close[_ngcontent-%COMP%] {\n  border: none;\n  background-color: rgba(255, 255, 255, 0);\n  cursor: pointer;\n  font-size: 3em;\n  position: absolute;\n  top: 5px;\n  right: 20px;\n  color: red;\n}\n@media screen and (max-width: 1000px) {\n  .messages-text-field-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\n    width: 80%;\n  }\n}\n@media screen and (max-width: 650px) {\n  .messages-text-field-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\n    width: 95%;\n  }\n  .messages-text-field-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n    width: 70%;\n  }\n  .messages-text-field-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .upload-container[_ngcontent-%COMP%] {\n    width: 18%;\n    margin: 0 2px;\n  }\n  .messages-text-field-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .submit[_ngcontent-%COMP%] {\n    min-width: 3em;\n  }\n  .messages-text-field-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .preview-container[_ngcontent-%COMP%] {\n    right: 17%;\n    height: 200px;\n    width: 83%;\n  }\n  .messages-text-field-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .preview-container.image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    max-width: 80%;\n    max-height: 180px;\n  }\n  .messages-text-field-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .preview-container.document[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%] {\n    font-size: 4em;\n  }\n  .messages-text-field-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .preview-container.document[_ngcontent-%COMP%]   .document-name[_ngcontent-%COMP%] {\n    font-size: 1em;\n  }\n  .messages-text-field-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .preview-container[_ngcontent-%COMP%]   .close[_ngcontent-%COMP%] {\n    right: 5px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zZXNzaW9uLW1lc3NhZ2VzLXRleHQtZmllbGQvc2Vzc2lvbi1tZXNzYWdlcy10ZXh0LWZpZWxkLmNvbXBvbmVudC5zY3NzIiwic3JjL3Njc3MvX3ZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsYUFBQTtFQUNBLGlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtBQURGO0FBSUU7RUFDRSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0FBRko7QUFHSTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxTQUFBO0VBQ0EsYUFBQTtFQUNBLFVBQUE7RUFDQSw0QkFmWTtFQWdCWiwrQkFoQlk7RUFpQlosNEJDQ1U7QURGaEI7QUFHSTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQzNCYTtFRDRCYixVQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLDZCQTNCWTtFQTRCWixnQ0E1Qlk7RUE2QlosNEJDWFU7RUFSZCw0REFBQTtBRG1CRjtBQUdJO0VBQ0Usa0JBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQzNDYTtFRDRDYixtQkFBQTtFQUNBLGFBQUE7RUM5QkosNERBQUE7RURnQ0ksNEJDeEJVO0VEeUJWLGVBQUE7QUFETjtBQUdNO0VBQ0UsYUFBQTtBQURSO0FBS0k7RUFDRSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsaUJBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLGFBQUE7RUFDQSxTQUFBO0VBQ0Esd0JBQUE7RUFDQSwrQkFBQTtFQUNBLDRCQzVDVTtFQWtCZCwrYUFBQTtFQXlCQSwrREFBQTtBREFGO0FBS1E7RUFDRSw0QkNqRE07RURrRE4sWUFBQTtFQUNBLG1CQXJFUTtFQXNFUixjQUFBO0VBQ0EsaUJBQUE7QUFIVjtBQVFRO0VBQ0UsY0NsRlM7RURtRlQsY0FBQTtBQU5WO0FBUVE7RUFDRSxnQ0M1RUg7RUQ2RUcsY0N2RlM7RUR3RlQsY0FBQTtFQUNBLDZCQUFBO0FBTlY7QUFVTTtFQUNFLFlBQUE7RUFDQSx3Q0FBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7QUFSUjtBQVlFO0VBQ0U7SUFDRSxVQUFBO0VBVko7QUFDRjtBQWFFO0VBQ0U7SUFDRSxVQUFBO0VBWEo7RUFhSTtJQUNFLFVBQUE7RUFYTjtFQWNJO0lBQ0UsVUFBQTtJQUNBLGFBQUE7RUFaTjtFQWVJO0lBQ0UsY0FBQTtFQWJOO0VBZ0JJO0lBQ0UsVUFBQTtJQUNBLGFBQUE7SUFDQSxVQUFBO0VBZE47RUFpQlE7SUFDRSxjQUFBO0lBQ0EsaUJBQUE7RUFmVjtFQW9CUTtJQUNFLGNBQUE7RUFsQlY7RUFvQlE7SUFDRSxjQUFBO0VBbEJWO0VBc0JNO0lBQ0UsVUFBQTtFQXBCUjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9zZXNzaW9uLW1lc3NhZ2VzLXRleHQtZmllbGQvc2Vzc2lvbi1tZXNzYWdlcy10ZXh0LWZpZWxkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4vc3JjL3Njc3MvdmFyaWFibGVzXCI7XHJcblxyXG4ubWVzc2FnZXMtdGV4dC1maWVsZC1jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1mbG93OiBjb2x1bW47XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICRib3JkZXItcmFkaXVzOiAxNXB4O1xyXG5cclxuICBmb3JtIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogcm93O1xyXG4gICAgbWFyZ2luOiAxNXB4IDA7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gICAgaW5wdXQge1xyXG4gICAgICBsaW5lLWhlaWdodDogMS4yZW07XHJcbiAgICAgIGZvbnQtc2l6ZTogMS4yZW07XHJcbiAgICAgIGJvcmRlcjogMDtcclxuICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgd2lkdGg6IDg1JTtcclxuICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogJGJvcmRlci1yYWRpdXM7XHJcbiAgICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6ICRib3JkZXItcmFkaXVzO1xyXG4gICAgICBib3gtc2hhZG93OiAkYnV0dG9uLXNoYWRvdztcclxuICAgIH1cclxuICAgIC5zdWJtaXQge1xyXG4gICAgICBsaW5lLWhlaWdodDogMS4yZW07XHJcbiAgICAgIGZvbnQtc2l6ZTogMS4yZW07XHJcbiAgICAgIGNvbG9yOiAkbGlnaHQtdGV4dC1jb2xvcjtcclxuICAgICAgd2lkdGg6IDExJTtcclxuICAgICAgYmFja2dyb3VuZDogcmdiKDEzMCwgMjI0LCAyNTUpO1xyXG4gICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAkYm9yZGVyLXJhZGl1cztcclxuICAgICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6ICRib3JkZXItcmFkaXVzO1xyXG4gICAgICBib3gtc2hhZG93OiAkYnV0dG9uLXNoYWRvdztcclxuICAgICAgQGluY2x1ZGUgYnV0dG9uLWJhY2tncm91bmQoMjEwZGVnKTtcclxuICAgIH1cclxuICAgIC51cGxvYWQtY29udGFpbmVyIHtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICBwYWRkaW5nOiAxMHB4IDA7XHJcbiAgICAgIHdpZHRoOiAyLjRlbTtcclxuICAgICAgbGluZS1oZWlnaHQ6IDEuMmVtO1xyXG4gICAgICBmb250LXNpemU6IDEuMmVtO1xyXG4gICAgICBjb2xvcjogJGxpZ2h0LXRleHQtY29sb3I7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XHJcbiAgICAgIG1hcmdpbjogMCA1cHg7XHJcbiAgICAgIEBpbmNsdWRlIGJ1dHRvbi1iYWNrZ3JvdW5kKDEwMGRlZyk7XHJcbiAgICAgIGJveC1zaGFkb3c6ICRidXR0b24tc2hhZG93O1xyXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcblxyXG4gICAgICBpbnB1dCB7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5wcmV2aWV3LWNvbnRhaW5lciB7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgIGZsZXgtZmxvdzogY29sdW1uO1xyXG4gICAgICBib3R0b206IDA7XHJcbiAgICAgIHJpZ2h0OiAxMCU7XHJcbiAgICAgIGhlaWdodDogMzAwcHg7XHJcbiAgICAgIGJvcmRlcjogMDtcclxuICAgICAgd2lkdGg6IGNhbGMoODUlIC0gMy4zZW0pO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAkYm9yZGVyLXJhZGl1cyAkYm9yZGVyLXJhZGl1cyAwICRib3JkZXItcmFkaXVzO1xyXG4gICAgICBib3gtc2hhZG93OiAkYnV0dG9uLXNoYWRvdztcclxuICAgICAgQGluY2x1ZGUgcGljdHVyZS1tZXNzYWdlLWJhY2tncm91bmQoKTtcclxuXHJcbiAgICAgICYuaW1hZ2Uge1xyXG4gICAgICAgIGltZyB7XHJcbiAgICAgICAgICBib3gtc2hhZG93OiAkYnV0dG9uLXNoYWRvdztcclxuICAgICAgICAgIG1hcmdpbjogMTBweDtcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6ICRib3JkZXItcmFkaXVzO1xyXG4gICAgICAgICAgbWF4LXdpZHRoOiA4MCU7XHJcbiAgICAgICAgICBtYXgtaGVpZ2h0OiAyODBweDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICYuZG9jdW1lbnQge1xyXG4gICAgICAgIGZhLWljb24ge1xyXG4gICAgICAgICAgY29sb3I6ICRsaWdodC10ZXh0LWNvbG9yO1xyXG4gICAgICAgICAgZm9udC1zaXplOiA3ZW07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5kb2N1bWVudC1uYW1lIHtcclxuICAgICAgICAgIGZvbnQtZmFtaWx5OiAkZm9udDtcclxuICAgICAgICAgIGNvbG9yOiAkbGlnaHQtdGV4dC1jb2xvcjtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMmVtO1xyXG4gICAgICAgICAgdGV4dC1zaGFkb3c6IDJweCAycHggNHB4ICMwMDA7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAuY2xvc2Uge1xyXG4gICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDApO1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICBmb250LXNpemU6IDNlbTtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgdG9wOiA1cHg7XHJcbiAgICAgICAgcmlnaHQ6IDIwcHg7XHJcbiAgICAgICAgY29sb3I6IHJnYigyNTUsIDAsIDApO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6ICRtZWRpYS1icmVha3BvaW50LW1lZGl1bSkge1xyXG4gICAgZm9ybSB7XHJcbiAgICAgIHdpZHRoOiA4MCU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAkbWVkaWEtYnJlYWtwb2ludC1zbWFsbCkge1xyXG4gICAgZm9ybSB7XHJcbiAgICAgIHdpZHRoOiA5NSU7XHJcblxyXG4gICAgICBpbnB1dCB7XHJcbiAgICAgICAgd2lkdGg6IDcwJTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLnVwbG9hZC1jb250YWluZXIge1xyXG4gICAgICAgIHdpZHRoOiAxOCU7XHJcbiAgICAgICAgbWFyZ2luOiAwIDJweDtcclxuICAgICAgfVxyXG5cclxuICAgICAgLnN1Ym1pdCB7XHJcbiAgICAgICAgbWluLXdpZHRoOiAzZW07XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5wcmV2aWV3LWNvbnRhaW5lciB7XHJcbiAgICAgICAgcmlnaHQ6IDE3JTtcclxuICAgICAgICBoZWlnaHQ6IDIwMHB4O1xyXG4gICAgICAgIHdpZHRoOiA4MyU7XHJcblxyXG4gICAgICAgICYuaW1hZ2Uge1xyXG4gICAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgbWF4LXdpZHRoOiA4MCU7XHJcbiAgICAgICAgICAgIG1heC1oZWlnaHQ6IDE4MHB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJi5kb2N1bWVudCB7XHJcbiAgICAgICAgICBmYS1pY29uIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiA0ZW07XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuZG9jdW1lbnQtbmFtZSB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMWVtO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmNsb3NlIHtcclxuICAgICAgICAgIHJpZ2h0OiA1cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsIi8vY3NzIHZhcmlhYmxlcyB0byBjb250cm9sbCB0aGUgYXBwZWFyZW5jZSBvZiB0aGUgc2l0ZVxyXG5cclxuJGxpZ2h0LXRleHQtY29sb3I6IHJnYigyMzgsIDIzOCwgMjM4KTtcclxuXHJcbiRkYXJrLXRleHQtY29sb3I6ICMwMDA7XHJcblxyXG4kYWNjZW50MTogIzAwMDg1MDtcclxuXHJcbiRhY2NlbnQyOiAjZmY2OTI4O1xyXG5cclxuJGFjY2VudDM6IHJnYigxNTMsIDAsIDIyNCk7XHJcblxyXG4kZm9udDogXCJEb3Npc1wiLCBzYW5zLXNlcmlmO1xyXG5cclxuJHVzZXItaWNvbi1jb2xvcjogbGluZWFyLWdyYWRpZW50KDQwLjI3ZGVnLCAjMDBmZmEzIDAlLCAjOTU5NWZmIDEwMCUpO1xyXG5cclxuQG1peGluIGJ1dHRvbi1iYWNrZ3JvdW5kKCRhbmdsZSkge1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgkYW5nbGUsICNmZjAwNTUgMCUsICMwMDI5NGYgOTAlKTtcclxufVxyXG5cclxuJGlucHV0LWZpZWxkMS1jb2xvcjogIzAwNWZiODtcclxuJGlucHV0LWZpZWxkMi1jb2xvcjogIzAwNjljYztcclxuJGlucHV0LWZpZWxkMy1jb2xvcjogIzAwNzRlMDtcclxuJGlucHV0LWZpZWxkNC1jb2xvcjogIzAwN2VmNTtcclxuXHJcbiRidXR0b24tc2hhZG93OiA0cHggNHB4IDVweCAjMDAwO1xyXG5cclxuJG1lc3NhZ2UtYmFja2dyb3VuZC1jb2xvci1zZW5kZXI6IHJnYigxNzcsIDI1NSwgMTkwKTtcclxuJG1lc3NhZ2UtYmFja2dyb3VuZC1jb2xvci1yZWNlaXZlcjogcmdiKDI1MywgMjU1LCAyMjQpO1xyXG4kbWVzc2FnZS1iYWNrZ3JvdW5kLWNvbG9yLXN0YXR1czogcmdiKDEwMywgMjEyLCAyNTUpO1xyXG5cclxuJGFsZXJ0LXVzZXItc3VjY2VzczogbGluZWFyLWdyYWRpZW50KDg4LjA2ZGVnLCAjMDBmZmIzIDAlLCAjMDBmZjY1IDEwMCUpO1xyXG4kYWxlcnQtdXNlci1lcnJvcjogbGluZWFyLWdyYWRpZW50KDI0MC45OGRlZywgI2UwMDAyMiAwJSwgI2ZmYWIwMyAxMDAlKTtcclxuQG1peGluIGRvd25sb2FkLWJ1dHRvbi1iYWNrZ3JvdW5kKCkge1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgyMzguNzJkZWcsICMwMDQ0YTkgMCUsICNmNzAwYTMgMTAwJSksXHJcbiAgICByYWRpYWwtZ3JhZGllbnQoMTAwJSAxODguMDElIGF0IDc2LjE0JSAwJSwgIzQzZGRmZiAwJSwgI2ZmMDAwMCAxMDAlKSxcclxuICAgIGxpbmVhci1ncmFkaWVudCgwZGVnLCAjZGIwMGZmIDAlLCAjMTRmZjAwIDEwMCUpLFxyXG4gICAgcmFkaWFsLWdyYWRpZW50KDU5LjIlIDEwMCUgYXQgNTAlIDEwMCUsICM2YTAwZDUgMCUsICMwMGUwZmYgMTAwJSksXHJcbiAgICByYWRpYWwtZ3JhZGllbnQoMTAwJSAxNDguMDclIGF0IDAlIDAlLCAjZmY5OTAwIDAlLCAjMDAxYWZmIDEwMCUpO1xyXG4gIGJhY2tncm91bmQtYmxlbmQtbW9kZTogaGFyZC1saWdodCwgb3ZlcmxheSwgY29sb3ItYnVybiwgY29sb3ItYnVybiwgbm9ybWFsO1xyXG59XHJcblxyXG5AbWl4aW4gcGljdHVyZS1tZXNzYWdlLWJhY2tncm91bmQoKSB7XHJcbiAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KDEwMCUgMjI1JSBhdCAxMDAlIDAlLCAjMTIwMDM3IDAlLCAjMDAwMDAwIDEwMCUpLFxyXG4gICAgbGluZWFyLWdyYWRpZW50KDM1ZGVnLCAjYzBmZmM3IDAlLCAjMTcwMDFmIDc1JSksXHJcbiAgICBsaW5lYXItZ3JhZGllbnQoNTVkZWcsICMyNDAwZmYgMCUsICMwMDAwMDAgMTAwJSksXHJcbiAgICBsaW5lYXItZ3JhZGllbnQoXHJcbiAgICAgIDkwZGVnLFxyXG4gICAgICAjZmZlMDM3IDAlLFxyXG4gICAgICAjZmZlMDM3IDQwJSxcclxuICAgICAgIzFkY2Q5ZiA0MCUsXHJcbiAgICAgICMxZGNkOWYgNTAlLFxyXG4gICAgICAjMDg4YzZmIDUwJSxcclxuICAgICAgIzA4OGM2ZiA3MCUsXHJcbiAgICAgICMyMzAzM2MgNzAlLFxyXG4gICAgICAjMjMwMzNjIDEwMCVcclxuICAgICksXHJcbiAgICBsaW5lYXItZ3JhZGllbnQoXHJcbiAgICAgIDE4MGRlZyxcclxuICAgICAgI2ZmOGZlNSAwJSxcclxuICAgICAgI2ZmOGZlNSA0NSUsXHJcbiAgICAgICNmYmZmNjQgNDUlLFxyXG4gICAgICAjZmJmZjY0IDYwJSxcclxuICAgICAgIzc2ZTNmZiA2MCUsXHJcbiAgICAgICM3NmUzZmYgODAlLFxyXG4gICAgICAjNmViNmU3IDgwJSxcclxuICAgICAgIzZlYjZlNyAxMDAlXHJcbiAgICApO1xyXG4gIGJhY2tncm91bmQtYmxlbmQtbW9kZTogc2NyZWVuLCBvdmVybGF5LCBvdmVybGF5LCBkYXJrZW4sIG5vcm1hbDtcclxufVxyXG5cclxuQG1peGluIGJhY2tncm91bmQoKSB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCAjMDAwODUwIDAlLCAjMDAwMzIwIDEwMCUpLFxyXG4gICAgcmFkaWFsLWdyYWRpZW50KDEwMCUgMjI1JSBhdCAxMDAlIDAlLCAjZmY2OTI4IDAlLCAjMDAwMDAwIDEwMCUpLFxyXG4gICAgbGluZWFyLWdyYWRpZW50KDIyNWRlZywgI2ZmN2EwMCAwJSwgIzAwMDAwMCAxMDAlKSxcclxuICAgIGxpbmVhci1ncmFkaWVudChcclxuICAgICAgMTM1ZGVnLFxyXG4gICAgICAjY2RmZmViIDEwJSxcclxuICAgICAgI2NkZmZlYiAzNSUsXHJcbiAgICAgICMwMDlmOWQgMzUlLFxyXG4gICAgICAjMDA5ZjlkIDYwJSxcclxuICAgICAgIzA3NDU2ZiA2MCUsXHJcbiAgICAgICMwNzQ1NmYgNjclLFxyXG4gICAgICAjMGYwYTNjIDY3JSxcclxuICAgICAgIzBmMGEzYyAxMDAlXHJcbiAgICApO1xyXG4gIGJhY2tncm91bmQtYmxlbmQtbW9kZTogc2NyZWVuLCBvdmVybGF5LCBoYXJkLWxpZ2h0LCBub3JtYWw7XHJcbn1cclxuXHJcbkBtaXhpbiBidXR0b24tc3R5bGUoKSB7XHJcbiAgYm94LXNoYWRvdzogJGJ1dHRvbi1zaGFkb3c7XHJcbiAgYm9yZGVyOiAwO1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbiAgZm9udC1zaXplOiAxLjVlbTtcclxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gIGNvbG9yOiAkbGlnaHQtdGV4dC1jb2xvcjtcclxufVxyXG5cclxuJG1lZGlhLWJyZWFrcG9pbnQtbWVkaXVtOiAxMDAwcHg7XHJcbiRtZWRpYS1icmVha3BvaW50LXNtYWxsOiA2NTBweDtcclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SessionMessagesTextFieldComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-session-messages-text-field',
                templateUrl: './session-messages-text-field.component.html',
                styleUrls: ['./session-messages-text-field.component.scss'],
            }]
    }], function () { return [{ type: _services_file_handler_service__WEBPACK_IMPORTED_MODULE_3__["FileHandlerService"] }, { type: src_app_services_user_alert_service__WEBPACK_IMPORTED_MODULE_4__["UserAlertService"] }]; }, { newMessageChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/components/session-messages/session-messages.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/components/session-messages/session-messages.component.ts ***!
  \***************************************************************************/
/*! exports provided: SessionMessagesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SessionMessagesComponent", function() { return SessionMessagesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _store_app_state__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../store/app.state */ "./src/app/store/app.state.ts");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngxs/store */ "./node_modules/@ngxs/store/__ivy_ngcc__/fesm2015/ngxs-store.js");
/* harmony import */ var _services_messages_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/messages.service */ "./src/app/services/messages.service.ts");
/* harmony import */ var _services_user_alert_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/user-alert.service */ "./src/app/services/user-alert.service.ts");








const _c0 = ["scroll"];
function SessionMessagesComponent_li_4_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("src", "/assets/usericons/", item_r3.userName, ".svg", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
} }
function SessionMessagesComponent_li_4_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SessionMessagesComponent_li_4_div_3_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r12); const item_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit; const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r10.textMessageClicked(item_r3.type, item_r3.message); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](1, "search");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind3"](1, 1, item_r3.message, ctx_r5.searchTerm, item_r3.type), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
} }
function SessionMessagesComponent_li_4_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SessionMessagesComponent_li_4_div_4_Template_div_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r16); const item_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit; const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r14.downloadFileFromId(item_r3.messageId); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "fa-icon", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", item_r3.base64Data, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", ctx_r6.faDownload);
} }
function SessionMessagesComponent_li_4_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SessionMessagesComponent_li_4_div_5_Template_div_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r20); const item_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit; const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r18.downloadFileFromId(item_r3.messageId); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "fa-icon", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](5, "search");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", ctx_r7.faDownload);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind3"](5, 2, item_r3.message, ctx_r7.searchTerm, item_r3.type), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
} }
function SessionMessagesComponent_li_4_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("src", "/assets/usericons/", item_r3.userName, ".svg", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
} }
const _c1 = function (a0, a1, a2) { return { left: a0, right: a1, center: a2 }; };
function SessionMessagesComponent_li_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, SessionMessagesComponent_li_4_div_2_Template, 2, 1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, SessionMessagesComponent_li_4_div_3_Template, 2, 5, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, SessionMessagesComponent_li_4_div_4_Template, 4, 2, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, SessionMessagesComponent_li_4_div_5_Template, 6, 6, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, SessionMessagesComponent_li_4_div_6_Template, 2, 1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("id", item_r3.messageId + "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction3"](7, _c1, item_r3.type == "receiver", item_r3.type == "sender", item_r3.type == "status"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", item_r3.type == "receiver");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", item_r3.contentType == "Text");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", item_r3.contentType == "Picture");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", item_r3.contentType == "Document");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", item_r3.type == "sender");
} }
function SessionMessagesComponent_li_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "a", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "button");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Back to Start");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
class SessionMessagesComponent {
    constructor(messagesService, uAlert) {
        this.messagesService = messagesService;
        this.uAlert = uAlert;
        this.messageList = []; //messages on the client side
        this.faDownload = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faArrowDown"];
        this.reconnectError = false;
        this.searchTerm = '';
    }
    ngOnInit() {
        this.messagesService.onUpdate$.subscribe((messagesList) => {
            //subscribe to message list and scroll to bottom after short delay (needed tolet some time to load data)
            this.messageList = messagesList;
            setTimeout(() => {
                this.scrollToBottom();
            }, 10);
        });
        this.messagesService.onScrollToId$.subscribe((id) => {
            //Subscribe to scroll to id and scroll to element when called
            this.scrollToElement(id.toString());
        });
        this.searchTerm$.subscribe((searchTerm) => {
            //subscribe to search term from store
            this.searchTerm = searchTerm;
        });
    }
    scrollToBottom() {
        //trys to sroll to the bottom of the message container
        try {
            this.myScrollContainer.nativeElement.scrollTop = this.myScrollContainer.nativeElement.scrollHeight;
        }
        catch (err) { }
    }
    downloadFileFromId(fileId) {
        //gets message base 64 data converts it to a blob and downloads it
        console.log(fileId);
        let messageData = this.messagesService.getMessagebyId(fileId);
        fetch(messageData.base64Data)
            .then((res) => res.blob())
            .then((res) => {
            let url = window.URL.createObjectURL(res);
            this.download(messageData.message, url);
        });
    }
    textMessageClicked(type, text) {
        //checks if message isnt a status message and copys it to clipboard
        if (type != 'status') {
            this.copyStringToClipboard(text);
        }
    }
    scrollToElement(id) {
        //get element ref and scroll it into view
        try {
            let el = document.getElementById(id);
            el.scrollIntoView({ block: 'center' });
        }
        catch (err) { }
    }
    copyStringToClipboard(str) {
        //copys string to clipboard by creating a textarea and copying it with document.executeCommand
        const selBox = document.createElement('textarea');
        selBox.style.position = 'fixed';
        selBox.style.left = '0';
        selBox.style.top = '0';
        selBox.style.opacity = '0';
        selBox.value = str;
        document.body.appendChild(selBox);
        selBox.focus();
        selBox.select();
        document.execCommand('copy');
        document.body.removeChild(selBox);
        this.uAlert.setUserAlert('Successfully copied to clipboard', 'success');
    }
    download(file, blobdata) {
        //downloads a file by creating an blob url and clicking it
        var element = document.createElement('a');
        element.setAttribute('href', blobdata);
        element.setAttribute('download', file);
        document.body.appendChild(element);
        element.click();
        document.body.removeChild(element);
    }
}
SessionMessagesComponent.ɵfac = function SessionMessagesComponent_Factory(t) { return new (t || SessionMessagesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_messages_service__WEBPACK_IMPORTED_MODULE_5__["MessagesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_user_alert_service__WEBPACK_IMPORTED_MODULE_6__["UserAlertService"])); };
SessionMessagesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: SessionMessagesComponent, selectors: [["app-session-messages"]], viewQuery: function SessionMessagesComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.myScrollContainer = _t.first);
    } }, inputs: { reconnectError: "reconnectError" }, decls: 6, vars: 2, consts: [[1, "messages-parent"], [1, "messages-container"], ["scroll", ""], [1, "messages"], [4, "ngFor", "ngForOf"], [4, "ngIf"], [1, "message-container", 3, "ngClass", "id"], ["class", "user-icon", 4, "ngIf"], ["class", "message", 3, "innerHTML", "click", 4, "ngIf"], ["class", "picture", 4, "ngIf"], ["class", "document", 4, "ngIf"], [1, "user-icon"], [3, "src"], [1, "message", 3, "innerHTML", "click"], [1, "picture"], [1, "download-icon", 3, "click"], [3, "icon"], [1, "document"], [1, "doc-icon", 3, "click"], [1, "file-name", 3, "innerHTML"], [1, "back-to-start"], ["href", "/"]], template: function SessionMessagesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "ul", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, SessionMessagesComponent_li_4_Template, 7, 11, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, SessionMessagesComponent_li_5_Template, 5, 0, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.messageList);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.reconnectError);
    } }, styles: [".messages-parent[_ngcontent-%COMP%] {\n  display: flex;\n  flex-flow: column;\n  align-items: center;\n}\n\n.messages-container[_ngcontent-%COMP%] {\n  padding-top: 20px;\n  width: 50%;\n  overflow-x: hidden;\n  overflow-y: auto;\n  height: calc(95vh - 3.2em);\n  -ms-overflow-style: none;\n  scrollbar-width: none;\n}\n\n.messages-container[_ngcontent-%COMP%]::-webkit-scrollbar {\n  display: none;\n}\n\n.messages-container[_ngcontent-%COMP%]   .messages[_ngcontent-%COMP%] {\n  list-style-type: none;\n  margin: 0;\n  padding: 0;\n  display: flex;\n  flex-flow: column;\n}\n\n.messages-container[_ngcontent-%COMP%]   .messages[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  font-family: \"Dosis\", sans-serif;\n  width: 100%;\n  height: auto;\n}\n\n.messages-container[_ngcontent-%COMP%]   .messages[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .message-container[_ngcontent-%COMP%] {\n  margin: 10px;\n  max-width: 30vw;\n  display: flex;\n  flex-flow: row;\n}\n\n.messages-container[_ngcontent-%COMP%]   .messages[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .message-container.left[_ngcontent-%COMP%] {\n  cursor: pointer;\n  text-align: left;\n  float: left;\n}\n\n.messages-container[_ngcontent-%COMP%]   .messages[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .message-container.left[_ngcontent-%COMP%]   .document[_ngcontent-%COMP%], .messages-container[_ngcontent-%COMP%]   .messages[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .message-container.left[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%], .messages-container[_ngcontent-%COMP%]   .messages[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .message-container.left[_ngcontent-%COMP%]   .picture[_ngcontent-%COMP%] {\n  background-color: #fdffe0;\n}\n\n.messages-container[_ngcontent-%COMP%]   .messages[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .message-container.left[_ngcontent-%COMP%]   .download-icon[_ngcontent-%COMP%] {\n  left: calc(-2em - 10px);\n}\n\n.messages-container[_ngcontent-%COMP%]   .messages[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .message-container.right[_ngcontent-%COMP%] {\n  cursor: pointer;\n  text-align: left;\n  float: right;\n}\n\n.messages-container[_ngcontent-%COMP%]   .messages[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .message-container.right[_ngcontent-%COMP%]   .document[_ngcontent-%COMP%], .messages-container[_ngcontent-%COMP%]   .messages[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .message-container.right[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%], .messages-container[_ngcontent-%COMP%]   .messages[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .message-container.right[_ngcontent-%COMP%]   .picture[_ngcontent-%COMP%] {\n  background-color: #b1ffbe;\n}\n\n.messages-container[_ngcontent-%COMP%]   .messages[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .message-container.right[_ngcontent-%COMP%]   .download-icon[_ngcontent-%COMP%] {\n  right: calc(-2em - 10px);\n}\n\n.messages-container[_ngcontent-%COMP%]   .messages[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .message-container.center[_ngcontent-%COMP%] {\n  text-align: center;\n  display: table;\n  margin: 10px auto;\n}\n\n.messages-container[_ngcontent-%COMP%]   .messages[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .message-container.center[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%] {\n  background-color: #67d4ff;\n}\n\n.messages-container[_ngcontent-%COMP%]   .messages[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .message-container[_ngcontent-%COMP%]   .user-icon[_ngcontent-%COMP%] {\n  background: linear-gradient(40.27deg, #00ffa3 0%, #9595ff 100%);\n  padding: 5px;\n  margin: 10px;\n  width: 2em;\n  height: 2em;\n  border-radius: 2em;\n  box-shadow: 4px 4px 5px #000;\n}\n\n.messages-container[_ngcontent-%COMP%]   .messages[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .message-container[_ngcontent-%COMP%]   .user-icon[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 2em;\n  height: 2em;\n}\n\n.messages-container[_ngcontent-%COMP%]   .messages[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .message-container[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%] {\n  min-height: 1.4em;\n  border-radius: 10px;\n  padding: 5px 10px;\n  box-shadow: 4px 4px 5px #000;\n}\n\n.messages-container[_ngcontent-%COMP%]   .messages[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .message-container[_ngcontent-%COMP%]   .picture[_ngcontent-%COMP%] {\n  display: flex;\n  flex-flow: column;\n  align-items: center;\n  justify-items: center;\n  min-height: 1.4em;\n  border-radius: 10px;\n  padding: 5px 5px;\n  box-shadow: 4px 4px 5px #000;\n  position: relative;\n}\n\n.messages-container[_ngcontent-%COMP%]   .messages[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .message-container[_ngcontent-%COMP%]   .picture[_ngcontent-%COMP%]   .download-icon[_ngcontent-%COMP%] {\n  font-size: 1.5em;\n  top: 2.4em;\n  position: absolute;\n  background: linear-gradient(238.72deg, #0044a9 0%, #f700a3 100%), radial-gradient(100% 188.01% at 76.14% 0%, #43ddff 0%, #ff0000 100%), linear-gradient(0deg, #db00ff 0%, #14ff00 100%), radial-gradient(59.2% 100% at 50% 100%, #6a00d5 0%, #00e0ff 100%), radial-gradient(100% 148.07% at 0% 0%, #ff9900 0%, #001aff 100%);\n  background-blend-mode: hard-light, overlay, color-burn, color-burn, normal;\n  width: 1.9em;\n  height: 1.9em;\n  border-radius: 100%;\n  line-height: 1.9em;\n  text-align: center;\n  margin: 0 5px;\n  color: #eeeeee;\n  box-shadow: 4px 4px 5px #000;\n}\n\n.messages-container[_ngcontent-%COMP%]   .messages[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .message-container[_ngcontent-%COMP%]   .picture[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  border-radius: 10px;\n  max-height: 400px;\n  max-width: 90%;\n  margin: 5px;\n}\n\n.messages-container[_ngcontent-%COMP%]   .messages[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .message-container[_ngcontent-%COMP%]   .document[_ngcontent-%COMP%] {\n  height: 2em;\n  font-size: 1.6em;\n  border-radius: 10px;\n  padding: 5px 5px;\n  box-shadow: 4px 4px 5px #000;\n  display: flex;\n  align-items: center;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.messages-container[_ngcontent-%COMP%]   .messages[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .message-container[_ngcontent-%COMP%]   .document[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: flex;\n  flex-flow: row;\n}\n\n.messages-container[_ngcontent-%COMP%]   .messages[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .message-container[_ngcontent-%COMP%]   .document[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   .doc-icon[_ngcontent-%COMP%] {\n  background: linear-gradient(238.72deg, #0044a9 0%, #f700a3 100%), radial-gradient(100% 188.01% at 76.14% 0%, #43ddff 0%, #ff0000 100%), linear-gradient(0deg, #db00ff 0%, #14ff00 100%), radial-gradient(59.2% 100% at 50% 100%, #6a00d5 0%, #00e0ff 100%), radial-gradient(100% 148.07% at 0% 0%, #ff9900 0%, #001aff 100%);\n  background-blend-mode: hard-light, overlay, color-burn, color-burn, normal;\n  width: 1.7em;\n  height: 1.7em;\n  border-radius: 2em;\n  line-height: 1.7em;\n  text-align: center;\n  margin: 0 5px;\n  color: #eeeeee;\n}\n\n.messages-container[_ngcontent-%COMP%]   .messages[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .message-container[_ngcontent-%COMP%]   .document[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   .file-name[_ngcontent-%COMP%] {\n  height: 1.7em;\n  line-height: 1.7em;\n  margin-right: 10px;\n}\n\n.messages-container[_ngcontent-%COMP%]   .messages[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .back-to-start[_ngcontent-%COMP%] {\n  margin: 30px 0;\n  max-width: 20vw;\n  text-align: center;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.messages-container[_ngcontent-%COMP%]   .messages[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  background: linear-gradient(320deg, #ff0055 0%, #00294f 90%);\n  box-shadow: 4px 4px 5px #000;\n  border: 0;\n  padding: 20px;\n  font-size: 1.5em;\n  border-radius: 20px;\n  color: #eeeeee;\n}\n\n@media screen and (max-width: 1000px) {\n  .messages-container[_ngcontent-%COMP%] {\n    width: 80%;\n  }\n}\n\n@media screen and (max-width: 650px) {\n  .messages-container[_ngcontent-%COMP%] {\n    width: 95%;\n  }\n  .messages-container[_ngcontent-%COMP%]   .messages[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .message-container[_ngcontent-%COMP%] {\n    max-width: 90vw;\n  }\n\n  .back-to-start[_ngcontent-%COMP%] {\n    max-width: 80vw;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zZXNzaW9uLW1lc3NhZ2VzL3Nlc3Npb24tbWVzc2FnZXMuY29tcG9uZW50LnNjc3MiLCJzcmMvc2Nzcy9fdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtBQURGOztBQUlBO0VBQ0UsaUJBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLDBCQUFBO0VBQ0Esd0JBQUE7RUFDQSxxQkFBQTtBQURGOztBQUdFO0VBQ0UsYUFBQTtBQURKOztBQUlFO0VBQ0UscUJBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtBQUZKOztBQUtFO0VBQ0UsZ0NDbEJHO0VEbUJILFdBQUE7RUFDQSxZQUFBO0FBSEo7O0FBS0k7RUFDRSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0FBSE47O0FBS007RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0FBSFI7O0FBS1E7OztFQUdFLHlCQ3BCMEI7QURpQnBDOztBQU1RO0VBQ0UsdUJBQUE7QUFKVjs7QUFRTTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7QUFOUjs7QUFPUTs7O0VBR0UseUJDcEN3QjtBRCtCbEM7O0FBUVE7RUFDRSx3QkFBQTtBQU5WOztBQVVNO0VBQ0Usa0JBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7QUFSUjs7QUFVUTtFQUNFLHlCQ2hEd0I7QUR3Q2xDOztBQVlNO0VBRUUsK0RDckVVO0VEc0VWLFlBQUE7RUFDQSxZQUFBO0VBQ0EsVUFKWTtFQUtaLFdBTFk7RUFNWixrQkFOWTtFQU9aLDRCQ2hFUTtBRHFEaEI7O0FBWVE7RUFDRSxVQVRVO0VBVVYsV0FWVTtBQUFwQjs7QUFjTTtFQUNFLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLDRCQzNFUTtBRCtEaEI7O0FBZU07RUFDRSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsNEJDdEZRO0VEdUZSLGtCQUFBO0FBYlI7O0FBZVE7RUFDRSxnQkFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQ25GUiw0VEFBQTtFQUtBLDBFQUFBO0VEZ0ZRLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLGNDM0hTO0VENEhULDRCQ3JHTTtBRHlGaEI7O0FBY1E7RUFDRSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7QUFaVjs7QUFnQk07RUFDRSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsNEJDcEhRO0VEcUhSLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtBQWRSOztBQWdCUTtFQUNFLGFBQUE7RUFDQSxjQUFBO0FBZFY7O0FBZVU7RUNySFIsNFRBQUE7RUFLQSwwRUFBQTtFRGtIVSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxjQzdKTztBRGlKbkI7O0FBY1U7RUFDRSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQVpaOztBQWtCSTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FBaEJOOztBQWtCSTtFQ2hLRiw0REFBQTtFQXlFQSw0QkFqRWM7RUFrRWQsU0FBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0E3RmlCO0FEc0tuQjs7QUFnQkE7RUFDRTtJQUNFLFVBQUE7RUFiRjtBQUNGOztBQWdCQTtFQUNFO0lBQ0UsVUFBQTtFQWRGO0VBZ0JJO0lBQ0UsZUFBQTtFQWROOztFQW1CQTtJQUNFLGVBQUE7RUFoQkY7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2Vzc2lvbi1tZXNzYWdlcy9zZXNzaW9uLW1lc3NhZ2VzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4vc3JjL3Njc3MvdmFyaWFibGVzXCI7XHJcblxyXG4ubWVzc2FnZXMtcGFyZW50IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZmxvdzogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5tZXNzYWdlcy1jb250YWluZXIge1xyXG4gIHBhZGRpbmctdG9wOiAyMHB4O1xyXG4gIHdpZHRoOiA1MCU7XHJcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xyXG4gIG92ZXJmbG93LXk6IGF1dG87XHJcbiAgaGVpZ2h0OiBjYWxjKDk1dmggLSAzLjJlbSk7XHJcbiAgLW1zLW92ZXJmbG93LXN0eWxlOiBub25lO1xyXG4gIHNjcm9sbGJhci13aWR0aDogbm9uZTtcclxuXHJcbiAgJjo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcblxyXG4gIC5tZXNzYWdlcyB7XHJcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZmxvdzogY29sdW1uO1xyXG4gIH1cclxuXHJcbiAgLm1lc3NhZ2VzIGxpIHtcclxuICAgIGZvbnQtZmFtaWx5OiAkZm9udDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG5cclxuICAgIC5tZXNzYWdlLWNvbnRhaW5lciB7XHJcbiAgICAgIG1hcmdpbjogMTBweDtcclxuICAgICAgbWF4LXdpZHRoOiAzMHZ3O1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBmbGV4LWZsb3c6IHJvdztcclxuXHJcbiAgICAgICYubGVmdCB7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcblxyXG4gICAgICAgIC5kb2N1bWVudCxcclxuICAgICAgICAubWVzc2FnZSxcclxuICAgICAgICAucGljdHVyZSB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkbWVzc2FnZS1iYWNrZ3JvdW5kLWNvbG9yLXJlY2VpdmVyO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmRvd25sb2FkLWljb24ge1xyXG4gICAgICAgICAgbGVmdDogY2FsYygtMmVtIC0gMTBweCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAmLnJpZ2h0IHtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICAgICAgLmRvY3VtZW50LFxyXG4gICAgICAgIC5tZXNzYWdlLFxyXG4gICAgICAgIC5waWN0dXJlIHtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRtZXNzYWdlLWJhY2tncm91bmQtY29sb3Itc2VuZGVyO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmRvd25sb2FkLWljb24ge1xyXG4gICAgICAgICAgcmlnaHQ6IGNhbGMoLTJlbSAtIDEwcHgpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgJi5jZW50ZXIge1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBkaXNwbGF5OiB0YWJsZTtcclxuICAgICAgICBtYXJnaW46IDEwcHggYXV0bztcclxuXHJcbiAgICAgICAgLm1lc3NhZ2Uge1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJG1lc3NhZ2UtYmFja2dyb3VuZC1jb2xvci1zdGF0dXM7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAudXNlci1pY29uIHtcclxuICAgICAgICAkaWNvbi1zaXplOiAyZW07XHJcbiAgICAgICAgYmFja2dyb3VuZDogJHVzZXItaWNvbi1jb2xvcjtcclxuICAgICAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICAgICAgbWFyZ2luOiAxMHB4O1xyXG4gICAgICAgIHdpZHRoOiAkaWNvbi1zaXplO1xyXG4gICAgICAgIGhlaWdodDogJGljb24tc2l6ZTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAkaWNvbi1zaXplO1xyXG4gICAgICAgIGJveC1zaGFkb3c6ICRidXR0b24tc2hhZG93O1xyXG4gICAgICAgIGltZyB7XHJcbiAgICAgICAgICB3aWR0aDogJGljb24tc2l6ZTtcclxuICAgICAgICAgIGhlaWdodDogJGljb24tc2l6ZTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5tZXNzYWdlIHtcclxuICAgICAgICBtaW4taGVpZ2h0OiAxLjRlbTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDVweCAxMHB4O1xyXG4gICAgICAgIGJveC1zaGFkb3c6ICRidXR0b24tc2hhZG93O1xyXG4gICAgICB9XHJcblxyXG4gICAgICAucGljdHVyZSB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWZsb3c6IGNvbHVtbjtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBtaW4taGVpZ2h0OiAxLjRlbTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDVweCA1cHg7XHJcbiAgICAgICAgYm94LXNoYWRvdzogJGJ1dHRvbi1zaGFkb3c7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuICAgICAgICAuZG93bmxvYWQtaWNvbiB7XHJcbiAgICAgICAgICBmb250LXNpemU6IDEuNWVtO1xyXG4gICAgICAgICAgdG9wOiAyLjRlbTtcclxuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgIEBpbmNsdWRlIGRvd25sb2FkLWJ1dHRvbi1iYWNrZ3JvdW5kKCk7XHJcbiAgICAgICAgICB3aWR0aDogMS45ZW07XHJcbiAgICAgICAgICBoZWlnaHQ6IDEuOWVtO1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMTAwJTtcclxuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjllbTtcclxuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgIG1hcmdpbjogMCA1cHg7XHJcbiAgICAgICAgICBjb2xvcjogJGxpZ2h0LXRleHQtY29sb3I7XHJcbiAgICAgICAgICBib3gtc2hhZG93OiAkYnV0dG9uLXNoYWRvdztcclxuICAgICAgICB9XHJcbiAgICAgICAgaW1nIHtcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgICBtYXgtaGVpZ2h0OiA0MDBweDtcclxuICAgICAgICAgIG1heC13aWR0aDogOTAlO1xyXG4gICAgICAgICAgbWFyZ2luOiA1cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAuZG9jdW1lbnQge1xyXG4gICAgICAgIGhlaWdodDogMmVtO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS42ZW07XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgICBwYWRkaW5nOiA1cHggNXB4O1xyXG4gICAgICAgIGJveC1zaGFkb3c6ICRidXR0b24tc2hhZG93O1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcblxyXG4gICAgICAgIHNwYW4ge1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIGZsZXgtZmxvdzogcm93O1xyXG4gICAgICAgICAgLmRvYy1pY29uIHtcclxuICAgICAgICAgICAgQGluY2x1ZGUgZG93bmxvYWQtYnV0dG9uLWJhY2tncm91bmQoKTtcclxuICAgICAgICAgICAgd2lkdGg6IDEuN2VtO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDEuN2VtO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAyZW07XHJcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjdlbTtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICBtYXJnaW46IDAgNXB4O1xyXG4gICAgICAgICAgICBjb2xvcjogJGxpZ2h0LXRleHQtY29sb3I7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuZmlsZS1uYW1lIHtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxLjdlbTtcclxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEuN2VtO1xyXG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmJhY2stdG8tc3RhcnQge1xyXG4gICAgICBtYXJnaW46IDMwcHggMDtcclxuICAgICAgbWF4LXdpZHRoOiAyMHZ3O1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgICB9XHJcbiAgICBidXR0b24ge1xyXG4gICAgICBAaW5jbHVkZSBidXR0b24tYmFja2dyb3VuZCgzMjBkZWcpO1xyXG4gICAgICBAaW5jbHVkZSBidXR0b24tc3R5bGUoKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6ICRtZWRpYS1icmVha3BvaW50LW1lZGl1bSkge1xyXG4gIC5tZXNzYWdlcy1jb250YWluZXIge1xyXG4gICAgd2lkdGg6IDgwJTtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6ICRtZWRpYS1icmVha3BvaW50LXNtYWxsKSB7XHJcbiAgLm1lc3NhZ2VzLWNvbnRhaW5lciB7XHJcbiAgICB3aWR0aDogOTUlO1xyXG4gICAgLm1lc3NhZ2VzIGxpIHtcclxuICAgICAgLm1lc3NhZ2UtY29udGFpbmVyIHtcclxuICAgICAgICBtYXgtd2lkdGg6IDkwdnc7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5iYWNrLXRvLXN0YXJ0IHtcclxuICAgIG1heC13aWR0aDogODB2dztcclxuICB9XHJcbn1cclxuIiwiLy9jc3MgdmFyaWFibGVzIHRvIGNvbnRyb2xsIHRoZSBhcHBlYXJlbmNlIG9mIHRoZSBzaXRlXHJcblxyXG4kbGlnaHQtdGV4dC1jb2xvcjogcmdiKDIzOCwgMjM4LCAyMzgpO1xyXG5cclxuJGRhcmstdGV4dC1jb2xvcjogIzAwMDtcclxuXHJcbiRhY2NlbnQxOiAjMDAwODUwO1xyXG5cclxuJGFjY2VudDI6ICNmZjY5Mjg7XHJcblxyXG4kYWNjZW50MzogcmdiKDE1MywgMCwgMjI0KTtcclxuXHJcbiRmb250OiBcIkRvc2lzXCIsIHNhbnMtc2VyaWY7XHJcblxyXG4kdXNlci1pY29uLWNvbG9yOiBsaW5lYXItZ3JhZGllbnQoNDAuMjdkZWcsICMwMGZmYTMgMCUsICM5NTk1ZmYgMTAwJSk7XHJcblxyXG5AbWl4aW4gYnV0dG9uLWJhY2tncm91bmQoJGFuZ2xlKSB7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCRhbmdsZSwgI2ZmMDA1NSAwJSwgIzAwMjk0ZiA5MCUpO1xyXG59XHJcblxyXG4kaW5wdXQtZmllbGQxLWNvbG9yOiAjMDA1ZmI4O1xyXG4kaW5wdXQtZmllbGQyLWNvbG9yOiAjMDA2OWNjO1xyXG4kaW5wdXQtZmllbGQzLWNvbG9yOiAjMDA3NGUwO1xyXG4kaW5wdXQtZmllbGQ0LWNvbG9yOiAjMDA3ZWY1O1xyXG5cclxuJGJ1dHRvbi1zaGFkb3c6IDRweCA0cHggNXB4ICMwMDA7XHJcblxyXG4kbWVzc2FnZS1iYWNrZ3JvdW5kLWNvbG9yLXNlbmRlcjogcmdiKDE3NywgMjU1LCAxOTApO1xyXG4kbWVzc2FnZS1iYWNrZ3JvdW5kLWNvbG9yLXJlY2VpdmVyOiByZ2IoMjUzLCAyNTUsIDIyNCk7XHJcbiRtZXNzYWdlLWJhY2tncm91bmQtY29sb3Itc3RhdHVzOiByZ2IoMTAzLCAyMTIsIDI1NSk7XHJcblxyXG4kYWxlcnQtdXNlci1zdWNjZXNzOiBsaW5lYXItZ3JhZGllbnQoODguMDZkZWcsICMwMGZmYjMgMCUsICMwMGZmNjUgMTAwJSk7XHJcbiRhbGVydC11c2VyLWVycm9yOiBsaW5lYXItZ3JhZGllbnQoMjQwLjk4ZGVnLCAjZTAwMDIyIDAlLCAjZmZhYjAzIDEwMCUpO1xyXG5AbWl4aW4gZG93bmxvYWQtYnV0dG9uLWJhY2tncm91bmQoKSB7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDIzOC43MmRlZywgIzAwNDRhOSAwJSwgI2Y3MDBhMyAxMDAlKSxcclxuICAgIHJhZGlhbC1ncmFkaWVudCgxMDAlIDE4OC4wMSUgYXQgNzYuMTQlIDAlLCAjNDNkZGZmIDAlLCAjZmYwMDAwIDEwMCUpLFxyXG4gICAgbGluZWFyLWdyYWRpZW50KDBkZWcsICNkYjAwZmYgMCUsICMxNGZmMDAgMTAwJSksXHJcbiAgICByYWRpYWwtZ3JhZGllbnQoNTkuMiUgMTAwJSBhdCA1MCUgMTAwJSwgIzZhMDBkNSAwJSwgIzAwZTBmZiAxMDAlKSxcclxuICAgIHJhZGlhbC1ncmFkaWVudCgxMDAlIDE0OC4wNyUgYXQgMCUgMCUsICNmZjk5MDAgMCUsICMwMDFhZmYgMTAwJSk7XHJcbiAgYmFja2dyb3VuZC1ibGVuZC1tb2RlOiBoYXJkLWxpZ2h0LCBvdmVybGF5LCBjb2xvci1idXJuLCBjb2xvci1idXJuLCBub3JtYWw7XHJcbn1cclxuXHJcbkBtaXhpbiBwaWN0dXJlLW1lc3NhZ2UtYmFja2dyb3VuZCgpIHtcclxuICBiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQoMTAwJSAyMjUlIGF0IDEwMCUgMCUsICMxMjAwMzcgMCUsICMwMDAwMDAgMTAwJSksXHJcbiAgICBsaW5lYXItZ3JhZGllbnQoMzVkZWcsICNjMGZmYzcgMCUsICMxNzAwMWYgNzUlKSxcclxuICAgIGxpbmVhci1ncmFkaWVudCg1NWRlZywgIzI0MDBmZiAwJSwgIzAwMDAwMCAxMDAlKSxcclxuICAgIGxpbmVhci1ncmFkaWVudChcclxuICAgICAgOTBkZWcsXHJcbiAgICAgICNmZmUwMzcgMCUsXHJcbiAgICAgICNmZmUwMzcgNDAlLFxyXG4gICAgICAjMWRjZDlmIDQwJSxcclxuICAgICAgIzFkY2Q5ZiA1MCUsXHJcbiAgICAgICMwODhjNmYgNTAlLFxyXG4gICAgICAjMDg4YzZmIDcwJSxcclxuICAgICAgIzIzMDMzYyA3MCUsXHJcbiAgICAgICMyMzAzM2MgMTAwJVxyXG4gICAgKSxcclxuICAgIGxpbmVhci1ncmFkaWVudChcclxuICAgICAgMTgwZGVnLFxyXG4gICAgICAjZmY4ZmU1IDAlLFxyXG4gICAgICAjZmY4ZmU1IDQ1JSxcclxuICAgICAgI2ZiZmY2NCA0NSUsXHJcbiAgICAgICNmYmZmNjQgNjAlLFxyXG4gICAgICAjNzZlM2ZmIDYwJSxcclxuICAgICAgIzc2ZTNmZiA4MCUsXHJcbiAgICAgICM2ZWI2ZTcgODAlLFxyXG4gICAgICAjNmViNmU3IDEwMCVcclxuICAgICk7XHJcbiAgYmFja2dyb3VuZC1ibGVuZC1tb2RlOiBzY3JlZW4sIG92ZXJsYXksIG92ZXJsYXksIGRhcmtlbiwgbm9ybWFsO1xyXG59XHJcblxyXG5AbWl4aW4gYmFja2dyb3VuZCgpIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoNDVkZWcsICMwMDA4NTAgMCUsICMwMDAzMjAgMTAwJSksXHJcbiAgICByYWRpYWwtZ3JhZGllbnQoMTAwJSAyMjUlIGF0IDEwMCUgMCUsICNmZjY5MjggMCUsICMwMDAwMDAgMTAwJSksXHJcbiAgICBsaW5lYXItZ3JhZGllbnQoMjI1ZGVnLCAjZmY3YTAwIDAlLCAjMDAwMDAwIDEwMCUpLFxyXG4gICAgbGluZWFyLWdyYWRpZW50KFxyXG4gICAgICAxMzVkZWcsXHJcbiAgICAgICNjZGZmZWIgMTAlLFxyXG4gICAgICAjY2RmZmViIDM1JSxcclxuICAgICAgIzAwOWY5ZCAzNSUsXHJcbiAgICAgICMwMDlmOWQgNjAlLFxyXG4gICAgICAjMDc0NTZmIDYwJSxcclxuICAgICAgIzA3NDU2ZiA2NyUsXHJcbiAgICAgICMwZjBhM2MgNjclLFxyXG4gICAgICAjMGYwYTNjIDEwMCVcclxuICAgICk7XHJcbiAgYmFja2dyb3VuZC1ibGVuZC1tb2RlOiBzY3JlZW4sIG92ZXJsYXksIGhhcmQtbGlnaHQsIG5vcm1hbDtcclxufVxyXG5cclxuQG1peGluIGJ1dHRvbi1zdHlsZSgpIHtcclxuICBib3gtc2hhZG93OiAkYnV0dG9uLXNoYWRvdztcclxuICBib3JkZXI6IDA7XHJcbiAgcGFkZGluZzogMjBweDtcclxuICBmb250LXNpemU6IDEuNWVtO1xyXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgY29sb3I6ICRsaWdodC10ZXh0LWNvbG9yO1xyXG59XHJcblxyXG4kbWVkaWEtYnJlYWtwb2ludC1tZWRpdW06IDEwMDBweDtcclxuJG1lZGlhLWJyZWFrcG9pbnQtc21hbGw6IDY1MHB4O1xyXG4iXX0= */"] });
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_4__["Select"])(_store_app_state__WEBPACK_IMPORTED_MODULE_3__["AppState"].searchTerm)
], SessionMessagesComponent.prototype, "searchTerm$", void 0);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](SessionMessagesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-session-messages',
                templateUrl: './session-messages.component.html',
                styleUrls: ['./session-messages.component.scss'],
            }]
    }], function () { return [{ type: _services_messages_service__WEBPACK_IMPORTED_MODULE_5__["MessagesService"] }, { type: _services_user_alert_service__WEBPACK_IMPORTED_MODULE_6__["UserAlertService"] }]; }, { myScrollContainer: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['scroll']
        }], reconnectError: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], searchTerm$: [] }); })();


/***/ }),

/***/ "./src/app/components/sessionmenu/sessionmenu.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/sessionmenu/sessionmenu.component.ts ***!
  \*****************************************************************/
/*! exports provided: SessionmenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SessionmenuComponent", function() { return SessionmenuComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _store_app_state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../store/app.state */ "./src/app/store/app.state.ts");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngxs/store */ "./node_modules/@ngxs/store/__ivy_ngcc__/fesm2015/ngxs-store.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");






function SessionmenuComponent_li_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const user_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("src", "/assets/usericons/", user_r1.value.userName, ".svg", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", user_r1.value.userName, " ");
} }
const _c0 = function (a0, a1) { return { open: a0, close: a1 }; };
class SessionmenuComponent {
    constructor() {
        this.sessionId = '0000';
        this.userName = 'Not Found';
        this.userId = '';
        this.navOpen = false;
    }
    ngOnInit() {
        this.sessionId$.subscribe((sessionId) => {
            //subscribe to session id from store
            this.sessionId = sessionId;
        });
        this.userName$.subscribe((userName) => {
            //subscribe to userName from store
            this.userName = userName;
        });
        this.userId$.subscribe((userId) => {
            //subscribe to userId from store
            this.userId = userId;
        });
        this.userInSession$.subscribe((userInSession) => {
            //subscribe to user in session map from store
            this.userInSession = userInSession;
            this.userInSession.delete(this.userId);
            console.log(this.userInSession);
        });
    }
}
SessionmenuComponent.ɵfac = function SessionmenuComponent_Factory(t) { return new (t || SessionmenuComponent)(); };
SessionmenuComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: SessionmenuComponent, selectors: [["app-sessionmenu"]], decls: 34, vars: 13, consts: [[1, "sidenav", 3, "ngClass"], ["href", "javascript:void(0)", 1, "closebtn", 3, "click"], [1, "session-id"], [1, "id-box-container"], [1, "session-id-box"], [1, "user"], [1, "list-seperator"], [1, "user-icon"], [3, "src"], [1, "user-name"], [4, "ngFor", "ngForOf"], [1, "open-menu", 3, "click"]], template: function SessionmenuComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SessionmenuComponent_Template_a_click_1_listener() { return ctx.navOpen = false; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Session Id");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Active User");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "You:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](24, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "Other:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](30, SessionmenuComponent_li_30_Template, 5, 2, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](31, "keyvalue");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SessionmenuComponent_Template_span_click_32_listener() { return ctx.navOpen = true; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, "\u2630");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](10, _c0, ctx.navOpen, !ctx.navOpen));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.sessionId[0]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.sessionId[1]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.sessionId[2]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.sessionId[3]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("src", "/assets/usericons/", ctx.userName, ".svg", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.userName, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](31, 8, ctx.userInSession));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["KeyValuePipe"]], styles: [".sidenav[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 0%;\n  position: fixed;\n  z-index: 1;\n  top: 0;\n  right: 0;\n  background-color: #111;\n  overflow-x: hidden;\n  transition: 0.5s;\n  padding-top: 60px;\n  font-family: \"Dosis\", sans-serif;\n}\n.sidenav.open[_ngcontent-%COMP%] {\n  width: 24%;\n}\n.sidenav.close[_ngcontent-%COMP%] {\n  width: 0;\n}\n.session-id[_ngcontent-%COMP%] {\n  display: flex;\n  flex-flow: column;\n  align-items: center;\n}\n.session-id[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  color: #eeeeee;\n  font-size: 2em;\n}\n.session-id[_ngcontent-%COMP%]   .id-box-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n}\n.session-id[_ngcontent-%COMP%]   .id-box-container[_ngcontent-%COMP%]   .session-id-box[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n  margin: 5px;\n  height: 1.4em;\n  width: 1em;\n  text-align: center;\n  font-size: 2.8em;\n  border: none;\n  border-radius: 15px;\n  box-shadow: 4px 4px 5px #000;\n  color: #eeeeee;\n}\n.session-id[_ngcontent-%COMP%]   .id-box-container[_ngcontent-%COMP%]   .session-id-box[_ngcontent-%COMP%]:nth-child(1) {\n  background: #005fb8;\n}\n.session-id[_ngcontent-%COMP%]   .id-box-container[_ngcontent-%COMP%]   .session-id-box[_ngcontent-%COMP%]:nth-child(2) {\n  background: #0069cc;\n}\n.session-id[_ngcontent-%COMP%]   .id-box-container[_ngcontent-%COMP%]   .session-id-box[_ngcontent-%COMP%]:nth-child(3) {\n  background: #0074e0;\n}\n.session-id[_ngcontent-%COMP%]   .id-box-container[_ngcontent-%COMP%]   .session-id-box[_ngcontent-%COMP%]:nth-child(4) {\n  background: #007ef5;\n}\n.user[_ngcontent-%COMP%] {\n  display: flex;\n  flex-flow: column;\n  align-items: left;\n}\n.user[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  align-self: center;\n  color: #eeeeee;\n  font-size: 2em;\n}\n.user[_ngcontent-%COMP%]   .list-seperator[_ngcontent-%COMP%] {\n  color: #eeeeee;\n}\n.user[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  list-style-type: none;\n  display: flex;\n  flex-flow: row;\n}\n.user[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .user-icon[_ngcontent-%COMP%] {\n  background: linear-gradient(40.27deg, #00ffa3 0%, #9595ff 100%);\n  padding: 5px;\n  margin: 10px;\n  width: 2em;\n  height: 2em;\n  border-radius: 2em;\n  box-shadow: 4px 4px 5px #000;\n}\n.user[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .user-icon[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 2em;\n  height: 2em;\n}\n.user[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .user-name[_ngcontent-%COMP%] {\n  height: 1.5em;\n  font-size: 1.5em;\n  border-radius: 10px;\n  margin: 7px 0;\n  padding: 5px 10px;\n  box-shadow: 4px 4px 5px #000;\n  background-color: #b1ffbe;\n}\n.sidenav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  padding: 8px 8px 8px 32px;\n  text-decoration: none;\n  font-size: 25px;\n  color: #818181;\n  display: block;\n  transition: 0.3s;\n}\n.sidenav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #eeeeee;\n}\n.sidenav[_ngcontent-%COMP%]   .closebtn[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  right: 25px;\n  font-size: 36px;\n  margin-left: 50px;\n}\n.open-menu[_ngcontent-%COMP%] {\n  top: 10px;\n  right: 10px;\n  font-size: 30px;\n  cursor: pointer;\n  position: absolute;\n  color: #eeeeee;\n}\n@media screen and (max-width: 1000px) {\n  .sidenav[_ngcontent-%COMP%] {\n    width: 0%;\n  }\n  .sidenav.open[_ngcontent-%COMP%] {\n    width: 50%;\n  }\n}\n@media screen and (max-width: 650px) {\n  .sidenav[_ngcontent-%COMP%] {\n    width: 0%;\n    padding-top: 15px;\n  }\n  .sidenav.open[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n\n  .sidenav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    font-size: 18px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zZXNzaW9ubWVudS9zZXNzaW9ubWVudS5jb21wb25lbnQuc2NzcyIsInNyYy9zY3NzL192YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLFlBQUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtFQUNBLFVBQUE7RUFDQSxNQUFBO0VBQ0EsUUFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0NDREs7QURBUDtBQUdFO0VBQ0UsVUFBQTtBQURKO0FBR0U7RUFDRSxRQUFBO0FBREo7QUFLQTtFQUNFLGFBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0FBRkY7QUFHRTtFQUNFLGNDMUJlO0VEMkJmLGNBQUE7QUFESjtBQUlFO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0FBRko7QUFJSTtFQUNFLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLDRCQ3BCVTtFRHFCVixjQzVDYTtBRDBDbkI7QUFLSTtFQUNFLG1CQzlCZTtBRDJCckI7QUFLSTtFQUNFLG1CQ2hDZTtBRDZCckI7QUFLSTtFQUNFLG1CQ2xDZTtBRCtCckI7QUFLSTtFQUNFLG1CQ3BDZTtBRGlDckI7QUFRQTtFQUNFLGFBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0FBTEY7QUFNRTtFQUNFLGtCQUFBO0VBQ0EsY0NwRWU7RURxRWYsY0FBQTtBQUpKO0FBT0U7RUFDRSxjQ3pFZTtBRG9FbkI7QUFRRTtFQUNFLHFCQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7QUFOSjtBQVFJO0VBRUUsK0RDdkVZO0VEd0VaLFlBQUE7RUFDQSxZQUFBO0VBQ0EsVUFKWTtFQUtaLFdBTFk7RUFNWixrQkFOWTtFQU9aLDRCQ2xFVTtBRDJEaEI7QUFRTTtFQUNFLFVBVFU7RUFVVixXQVZVO0FBSWxCO0FBVUk7RUFDRSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtFQUNBLDRCQy9FVTtFRGdGVix5QkM5RTRCO0FEc0VsQztBQWFBO0VBQ0UseUJBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FBVkY7QUFhQTtFQUNFLGNDdEhpQjtBRDRHbkI7QUFhQTtFQUNFLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUFWRjtBQWFBO0VBQ0UsU0FBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsY0N2SWlCO0FENkhuQjtBQWFBO0VBQ0U7SUFDRSxTQUFBO0VBVkY7RUFXRTtJQUNFLFVBQUE7RUFUSjtBQUNGO0FBYUE7RUFDRTtJQUNFLFNBQUE7SUFDQSxpQkFBQTtFQVhGO0VBYUU7SUFDRSxXQUFBO0VBWEo7O0VBY0E7SUFDRSxlQUFBO0VBWEY7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2Vzc2lvbm1lbnUvc2Vzc2lvbm1lbnUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi9zcmMvc2Nzcy92YXJpYWJsZXNcIjtcclxuXHJcbi5zaWRlbmF2IHtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgd2lkdGg6IDAlO1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB6LWluZGV4OiAxO1xyXG4gIHRvcDogMDtcclxuICByaWdodDogMDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTExO1xyXG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcclxuICB0cmFuc2l0aW9uOiAwLjVzO1xyXG4gIHBhZGRpbmctdG9wOiA2MHB4O1xyXG4gIGZvbnQtZmFtaWx5OiAkZm9udDtcclxuXHJcbiAgJi5vcGVuIHtcclxuICAgIHdpZHRoOiAyNCU7XHJcbiAgfVxyXG4gICYuY2xvc2Uge1xyXG4gICAgd2lkdGg6IDA7XHJcbiAgfVxyXG59XHJcblxyXG4uc2Vzc2lvbi1pZCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWZsb3c6IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGgyIHtcclxuICAgIGNvbG9yOiAkbGlnaHQtdGV4dC1jb2xvcjtcclxuICAgIGZvbnQtc2l6ZTogMmVtO1xyXG4gIH1cclxuXHJcbiAgLmlkLWJveC1jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcblxyXG4gICAgLnNlc3Npb24taWQtYm94IHtcclxuICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgbWFyZ2luOiA1cHg7XHJcbiAgICAgIGhlaWdodDogMS40ZW07XHJcbiAgICAgIHdpZHRoOiAxZW07XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgZm9udC1zaXplOiAyLjhlbTtcclxuICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gICAgICBib3gtc2hhZG93OiAkYnV0dG9uLXNoYWRvdztcclxuICAgICAgY29sb3I6ICRsaWdodC10ZXh0LWNvbG9yO1xyXG4gICAgfVxyXG5cclxuICAgIC5zZXNzaW9uLWlkLWJveDpudGgtY2hpbGQoMSkge1xyXG4gICAgICBiYWNrZ3JvdW5kOiAkaW5wdXQtZmllbGQxLWNvbG9yO1xyXG4gICAgfVxyXG4gICAgLnNlc3Npb24taWQtYm94Om50aC1jaGlsZCgyKSB7XHJcbiAgICAgIGJhY2tncm91bmQ6ICRpbnB1dC1maWVsZDItY29sb3I7XHJcbiAgICB9XHJcbiAgICAuc2Vzc2lvbi1pZC1ib3g6bnRoLWNoaWxkKDMpIHtcclxuICAgICAgYmFja2dyb3VuZDogJGlucHV0LWZpZWxkMy1jb2xvcjtcclxuICAgIH1cclxuICAgIC5zZXNzaW9uLWlkLWJveDpudGgtY2hpbGQoNCkge1xyXG4gICAgICBiYWNrZ3JvdW5kOiAkaW5wdXQtZmllbGQ0LWNvbG9yO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLnVzZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1mbG93OiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGxlZnQ7XHJcbiAgaDIge1xyXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gICAgY29sb3I6ICRsaWdodC10ZXh0LWNvbG9yO1xyXG4gICAgZm9udC1zaXplOiAyZW07XHJcbiAgfVxyXG5cclxuICAubGlzdC1zZXBlcmF0b3Ige1xyXG4gICAgY29sb3I6ICRsaWdodC10ZXh0LWNvbG9yO1xyXG4gIH1cclxuXHJcbiAgbGkge1xyXG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZmxvdzogcm93O1xyXG5cclxuICAgIC51c2VyLWljb24ge1xyXG4gICAgICAkaWNvbi1zaXplOiAyZW07XHJcbiAgICAgIGJhY2tncm91bmQ6ICR1c2VyLWljb24tY29sb3I7XHJcbiAgICAgIHBhZGRpbmc6IDVweDtcclxuICAgICAgbWFyZ2luOiAxMHB4O1xyXG4gICAgICB3aWR0aDogJGljb24tc2l6ZTtcclxuICAgICAgaGVpZ2h0OiAkaWNvbi1zaXplO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAkaWNvbi1zaXplO1xyXG4gICAgICBib3gtc2hhZG93OiAkYnV0dG9uLXNoYWRvdztcclxuICAgICAgaW1nIHtcclxuICAgICAgICB3aWR0aDogJGljb24tc2l6ZTtcclxuICAgICAgICBoZWlnaHQ6ICRpY29uLXNpemU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAudXNlci1uYW1lIHtcclxuICAgICAgaGVpZ2h0OiAxLjVlbTtcclxuICAgICAgZm9udC1zaXplOiAxLjVlbTtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgbWFyZ2luOiA3cHggMDtcclxuICAgICAgcGFkZGluZzogNXB4IDEwcHg7XHJcbiAgICAgIGJveC1zaGFkb3c6ICRidXR0b24tc2hhZG93O1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkbWVzc2FnZS1iYWNrZ3JvdW5kLWNvbG9yLXNlbmRlcjtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5zaWRlbmF2IGEge1xyXG4gIHBhZGRpbmc6IDhweCA4cHggOHB4IDMycHg7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGZvbnQtc2l6ZTogMjVweDtcclxuICBjb2xvcjogIzgxODE4MTtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICB0cmFuc2l0aW9uOiAwLjNzO1xyXG59XHJcblxyXG4uc2lkZW5hdiBhOmhvdmVyIHtcclxuICBjb2xvcjogJGxpZ2h0LXRleHQtY29sb3I7XHJcbn1cclxuXHJcbi5zaWRlbmF2IC5jbG9zZWJ0biB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMDtcclxuICByaWdodDogMjVweDtcclxuICBmb250LXNpemU6IDM2cHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDUwcHg7XHJcbn1cclxuXHJcbi5vcGVuLW1lbnUge1xyXG4gIHRvcDogMTBweDtcclxuICByaWdodDogMTBweDtcclxuICBmb250LXNpemU6IDMwcHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBjb2xvcjogJGxpZ2h0LXRleHQtY29sb3I7XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6ICRtZWRpYS1icmVha3BvaW50LW1lZGl1bSkge1xyXG4gIC5zaWRlbmF2IHtcclxuICAgIHdpZHRoOiAwJTtcclxuICAgICYub3BlbiB7XHJcbiAgICAgIHdpZHRoOiA1MCU7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAkbWVkaWEtYnJlYWtwb2ludC1zbWFsbCkge1xyXG4gIC5zaWRlbmF2IHtcclxuICAgIHdpZHRoOiAwJTtcclxuICAgIHBhZGRpbmctdG9wOiAxNXB4O1xyXG5cclxuICAgICYub3BlbiB7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG4gIH1cclxuICAuc2lkZW5hdiBhIHtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICB9XHJcbn1cclxuIiwiLy9jc3MgdmFyaWFibGVzIHRvIGNvbnRyb2xsIHRoZSBhcHBlYXJlbmNlIG9mIHRoZSBzaXRlXHJcblxyXG4kbGlnaHQtdGV4dC1jb2xvcjogcmdiKDIzOCwgMjM4LCAyMzgpO1xyXG5cclxuJGRhcmstdGV4dC1jb2xvcjogIzAwMDtcclxuXHJcbiRhY2NlbnQxOiAjMDAwODUwO1xyXG5cclxuJGFjY2VudDI6ICNmZjY5Mjg7XHJcblxyXG4kYWNjZW50MzogcmdiKDE1MywgMCwgMjI0KTtcclxuXHJcbiRmb250OiBcIkRvc2lzXCIsIHNhbnMtc2VyaWY7XHJcblxyXG4kdXNlci1pY29uLWNvbG9yOiBsaW5lYXItZ3JhZGllbnQoNDAuMjdkZWcsICMwMGZmYTMgMCUsICM5NTk1ZmYgMTAwJSk7XHJcblxyXG5AbWl4aW4gYnV0dG9uLWJhY2tncm91bmQoJGFuZ2xlKSB7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCRhbmdsZSwgI2ZmMDA1NSAwJSwgIzAwMjk0ZiA5MCUpO1xyXG59XHJcblxyXG4kaW5wdXQtZmllbGQxLWNvbG9yOiAjMDA1ZmI4O1xyXG4kaW5wdXQtZmllbGQyLWNvbG9yOiAjMDA2OWNjO1xyXG4kaW5wdXQtZmllbGQzLWNvbG9yOiAjMDA3NGUwO1xyXG4kaW5wdXQtZmllbGQ0LWNvbG9yOiAjMDA3ZWY1O1xyXG5cclxuJGJ1dHRvbi1zaGFkb3c6IDRweCA0cHggNXB4ICMwMDA7XHJcblxyXG4kbWVzc2FnZS1iYWNrZ3JvdW5kLWNvbG9yLXNlbmRlcjogcmdiKDE3NywgMjU1LCAxOTApO1xyXG4kbWVzc2FnZS1iYWNrZ3JvdW5kLWNvbG9yLXJlY2VpdmVyOiByZ2IoMjUzLCAyNTUsIDIyNCk7XHJcbiRtZXNzYWdlLWJhY2tncm91bmQtY29sb3Itc3RhdHVzOiByZ2IoMTAzLCAyMTIsIDI1NSk7XHJcblxyXG4kYWxlcnQtdXNlci1zdWNjZXNzOiBsaW5lYXItZ3JhZGllbnQoODguMDZkZWcsICMwMGZmYjMgMCUsICMwMGZmNjUgMTAwJSk7XHJcbiRhbGVydC11c2VyLWVycm9yOiBsaW5lYXItZ3JhZGllbnQoMjQwLjk4ZGVnLCAjZTAwMDIyIDAlLCAjZmZhYjAzIDEwMCUpO1xyXG5AbWl4aW4gZG93bmxvYWQtYnV0dG9uLWJhY2tncm91bmQoKSB7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDIzOC43MmRlZywgIzAwNDRhOSAwJSwgI2Y3MDBhMyAxMDAlKSxcclxuICAgIHJhZGlhbC1ncmFkaWVudCgxMDAlIDE4OC4wMSUgYXQgNzYuMTQlIDAlLCAjNDNkZGZmIDAlLCAjZmYwMDAwIDEwMCUpLFxyXG4gICAgbGluZWFyLWdyYWRpZW50KDBkZWcsICNkYjAwZmYgMCUsICMxNGZmMDAgMTAwJSksXHJcbiAgICByYWRpYWwtZ3JhZGllbnQoNTkuMiUgMTAwJSBhdCA1MCUgMTAwJSwgIzZhMDBkNSAwJSwgIzAwZTBmZiAxMDAlKSxcclxuICAgIHJhZGlhbC1ncmFkaWVudCgxMDAlIDE0OC4wNyUgYXQgMCUgMCUsICNmZjk5MDAgMCUsICMwMDFhZmYgMTAwJSk7XHJcbiAgYmFja2dyb3VuZC1ibGVuZC1tb2RlOiBoYXJkLWxpZ2h0LCBvdmVybGF5LCBjb2xvci1idXJuLCBjb2xvci1idXJuLCBub3JtYWw7XHJcbn1cclxuXHJcbkBtaXhpbiBwaWN0dXJlLW1lc3NhZ2UtYmFja2dyb3VuZCgpIHtcclxuICBiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQoMTAwJSAyMjUlIGF0IDEwMCUgMCUsICMxMjAwMzcgMCUsICMwMDAwMDAgMTAwJSksXHJcbiAgICBsaW5lYXItZ3JhZGllbnQoMzVkZWcsICNjMGZmYzcgMCUsICMxNzAwMWYgNzUlKSxcclxuICAgIGxpbmVhci1ncmFkaWVudCg1NWRlZywgIzI0MDBmZiAwJSwgIzAwMDAwMCAxMDAlKSxcclxuICAgIGxpbmVhci1ncmFkaWVudChcclxuICAgICAgOTBkZWcsXHJcbiAgICAgICNmZmUwMzcgMCUsXHJcbiAgICAgICNmZmUwMzcgNDAlLFxyXG4gICAgICAjMWRjZDlmIDQwJSxcclxuICAgICAgIzFkY2Q5ZiA1MCUsXHJcbiAgICAgICMwODhjNmYgNTAlLFxyXG4gICAgICAjMDg4YzZmIDcwJSxcclxuICAgICAgIzIzMDMzYyA3MCUsXHJcbiAgICAgICMyMzAzM2MgMTAwJVxyXG4gICAgKSxcclxuICAgIGxpbmVhci1ncmFkaWVudChcclxuICAgICAgMTgwZGVnLFxyXG4gICAgICAjZmY4ZmU1IDAlLFxyXG4gICAgICAjZmY4ZmU1IDQ1JSxcclxuICAgICAgI2ZiZmY2NCA0NSUsXHJcbiAgICAgICNmYmZmNjQgNjAlLFxyXG4gICAgICAjNzZlM2ZmIDYwJSxcclxuICAgICAgIzc2ZTNmZiA4MCUsXHJcbiAgICAgICM2ZWI2ZTcgODAlLFxyXG4gICAgICAjNmViNmU3IDEwMCVcclxuICAgICk7XHJcbiAgYmFja2dyb3VuZC1ibGVuZC1tb2RlOiBzY3JlZW4sIG92ZXJsYXksIG92ZXJsYXksIGRhcmtlbiwgbm9ybWFsO1xyXG59XHJcblxyXG5AbWl4aW4gYmFja2dyb3VuZCgpIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoNDVkZWcsICMwMDA4NTAgMCUsICMwMDAzMjAgMTAwJSksXHJcbiAgICByYWRpYWwtZ3JhZGllbnQoMTAwJSAyMjUlIGF0IDEwMCUgMCUsICNmZjY5MjggMCUsICMwMDAwMDAgMTAwJSksXHJcbiAgICBsaW5lYXItZ3JhZGllbnQoMjI1ZGVnLCAjZmY3YTAwIDAlLCAjMDAwMDAwIDEwMCUpLFxyXG4gICAgbGluZWFyLWdyYWRpZW50KFxyXG4gICAgICAxMzVkZWcsXHJcbiAgICAgICNjZGZmZWIgMTAlLFxyXG4gICAgICAjY2RmZmViIDM1JSxcclxuICAgICAgIzAwOWY5ZCAzNSUsXHJcbiAgICAgICMwMDlmOWQgNjAlLFxyXG4gICAgICAjMDc0NTZmIDYwJSxcclxuICAgICAgIzA3NDU2ZiA2NyUsXHJcbiAgICAgICMwZjBhM2MgNjclLFxyXG4gICAgICAjMGYwYTNjIDEwMCVcclxuICAgICk7XHJcbiAgYmFja2dyb3VuZC1ibGVuZC1tb2RlOiBzY3JlZW4sIG92ZXJsYXksIGhhcmQtbGlnaHQsIG5vcm1hbDtcclxufVxyXG5cclxuQG1peGluIGJ1dHRvbi1zdHlsZSgpIHtcclxuICBib3gtc2hhZG93OiAkYnV0dG9uLXNoYWRvdztcclxuICBib3JkZXI6IDA7XHJcbiAgcGFkZGluZzogMjBweDtcclxuICBmb250LXNpemU6IDEuNWVtO1xyXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgY29sb3I6ICRsaWdodC10ZXh0LWNvbG9yO1xyXG59XHJcblxyXG4kbWVkaWEtYnJlYWtwb2ludC1tZWRpdW06IDEwMDBweDtcclxuJG1lZGlhLWJyZWFrcG9pbnQtc21hbGw6IDY1MHB4O1xyXG4iXX0= */"] });
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_3__["Select"])(_store_app_state__WEBPACK_IMPORTED_MODULE_2__["AppState"].sessionId)
], SessionmenuComponent.prototype, "sessionId$", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_3__["Select"])(_store_app_state__WEBPACK_IMPORTED_MODULE_2__["AppState"].userName)
], SessionmenuComponent.prototype, "userName$", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_3__["Select"])(_store_app_state__WEBPACK_IMPORTED_MODULE_2__["AppState"].userInSession)
], SessionmenuComponent.prototype, "userInSession$", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_3__["Select"])(_store_app_state__WEBPACK_IMPORTED_MODULE_2__["AppState"].userId)
], SessionmenuComponent.prototype, "userId$", void 0);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](SessionmenuComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-sessionmenu',
                templateUrl: './sessionmenu.component.html',
                styleUrls: ['./sessionmenu.component.scss'],
            }]
    }], function () { return []; }, { sessionId$: [], userName$: [], userInSession$: [], userId$: [] }); })();


/***/ }),

/***/ "./src/app/components/useralert/useralert.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/useralert/useralert.component.ts ***!
  \*************************************************************/
/*! exports provided: UseralertComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UseralertComponent", function() { return UseralertComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _services_user_alert_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/user-alert.service */ "./src/app/services/user-alert.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/////////////////////////////////////////////
/*
user alert Component
Displays user alerts at the top of the site. THe message can be succes (green) or error (red)
*/
/////////////////////////////////////////////





const _c0 = function (a0, a1, a2) { return { open: a0, success: a1, error: a2 }; };
class UseralertComponent {
    constructor(userAlertService) {
        this.userAlertService = userAlertService;
        this.alertText = ''; //text of the alert
        this.alertOpen = false;
        this.alertType = 'error';
        this.timeoutDelay = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].userAlertTimeout;
    }
    ngOnInit() {
        this.userAlertService.onUpdate$.subscribe((alert) => {
            //subsrcibe to user alert service and set new user alert on change
            clearTimeout(this.timeout);
            this.closeAlert();
            this.alertText = alert.alert;
            this.alertOpen = true;
            this.alertType = alert.type;
            this.timeout = setTimeout(() => {
                this.closeAlert();
            }, this.timeoutDelay);
        });
    }
    closeAlert() {
        //closes alert
        this.alertText = '';
        this.alertOpen = false;
    }
}
UseralertComponent.ɵfac = function UseralertComponent_Factory(t) { return new (t || UseralertComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_user_alert_service__WEBPACK_IMPORTED_MODULE_2__["UserAlertService"])); };
UseralertComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UseralertComponent, selectors: [["app-useralert"]], decls: 2, vars: 6, consts: [[1, "alert-container", 3, "ngClass"]], template: function UseralertComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](2, _c0, ctx.alertOpen, ctx.alertType == "success", ctx.alertType == "error"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.alertText, "\n");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"]], styles: [".alert-container[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -2em;\n  width: 100%;\n  text-align: center;\n  padding: 13px 0;\n  font-family: \"Dosis\", sans-serif;\n  font-size: 1.2em;\n  z-index: 5;\n  transition: top 1s;\n}\n.alert-container.open[_ngcontent-%COMP%] {\n  top: 0;\n}\n.alert-container.success[_ngcontent-%COMP%] {\n  background: linear-gradient(88.06deg, #00ffb3 0%, #00ff65 100%);\n}\n.alert-container.error[_ngcontent-%COMP%] {\n  background: linear-gradient(240.98deg, #e00022 0%, #ffab03 100%);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy91c2VyYWxlcnQvdXNlcmFsZXJ0LmNvbXBvbmVudC5zY3NzIiwic3JjL3Njc3MvX3ZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGdDQ0lLO0VESEwsZ0JBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7QUFERjtBQUdFO0VBQ0UsTUFBQTtBQURKO0FBSUU7RUFDRSwrRENhaUI7QURmckI7QUFLRTtFQUNFLGdFQ1VlO0FEYm5CIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy91c2VyYWxlcnQvdXNlcmFsZXJ0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4vc3JjL3Njc3MvdmFyaWFibGVzXCI7XHJcblxyXG4uYWxlcnQtY29udGFpbmVyIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAtMmVtO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBwYWRkaW5nOiAxM3B4IDA7XHJcbiAgZm9udC1mYW1pbHk6ICRmb250O1xyXG4gIGZvbnQtc2l6ZTogMS4yZW07XHJcbiAgei1pbmRleDogNTtcclxuICB0cmFuc2l0aW9uOiB0b3AgMXM7XHJcblxyXG4gICYub3BlbiB7XHJcbiAgICB0b3A6IDA7XHJcbiAgfVxyXG5cclxuICAmLnN1Y2Nlc3Mge1xyXG4gICAgYmFja2dyb3VuZDogJGFsZXJ0LXVzZXItc3VjY2VzcztcclxuICB9XHJcblxyXG4gICYuZXJyb3Ige1xyXG4gICAgYmFja2dyb3VuZDogJGFsZXJ0LXVzZXItZXJyb3I7XHJcbiAgfVxyXG59XHJcbiIsIi8vY3NzIHZhcmlhYmxlcyB0byBjb250cm9sbCB0aGUgYXBwZWFyZW5jZSBvZiB0aGUgc2l0ZVxyXG5cclxuJGxpZ2h0LXRleHQtY29sb3I6IHJnYigyMzgsIDIzOCwgMjM4KTtcclxuXHJcbiRkYXJrLXRleHQtY29sb3I6ICMwMDA7XHJcblxyXG4kYWNjZW50MTogIzAwMDg1MDtcclxuXHJcbiRhY2NlbnQyOiAjZmY2OTI4O1xyXG5cclxuJGFjY2VudDM6IHJnYigxNTMsIDAsIDIyNCk7XHJcblxyXG4kZm9udDogXCJEb3Npc1wiLCBzYW5zLXNlcmlmO1xyXG5cclxuJHVzZXItaWNvbi1jb2xvcjogbGluZWFyLWdyYWRpZW50KDQwLjI3ZGVnLCAjMDBmZmEzIDAlLCAjOTU5NWZmIDEwMCUpO1xyXG5cclxuQG1peGluIGJ1dHRvbi1iYWNrZ3JvdW5kKCRhbmdsZSkge1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgkYW5nbGUsICNmZjAwNTUgMCUsICMwMDI5NGYgOTAlKTtcclxufVxyXG5cclxuJGlucHV0LWZpZWxkMS1jb2xvcjogIzAwNWZiODtcclxuJGlucHV0LWZpZWxkMi1jb2xvcjogIzAwNjljYztcclxuJGlucHV0LWZpZWxkMy1jb2xvcjogIzAwNzRlMDtcclxuJGlucHV0LWZpZWxkNC1jb2xvcjogIzAwN2VmNTtcclxuXHJcbiRidXR0b24tc2hhZG93OiA0cHggNHB4IDVweCAjMDAwO1xyXG5cclxuJG1lc3NhZ2UtYmFja2dyb3VuZC1jb2xvci1zZW5kZXI6IHJnYigxNzcsIDI1NSwgMTkwKTtcclxuJG1lc3NhZ2UtYmFja2dyb3VuZC1jb2xvci1yZWNlaXZlcjogcmdiKDI1MywgMjU1LCAyMjQpO1xyXG4kbWVzc2FnZS1iYWNrZ3JvdW5kLWNvbG9yLXN0YXR1czogcmdiKDEwMywgMjEyLCAyNTUpO1xyXG5cclxuJGFsZXJ0LXVzZXItc3VjY2VzczogbGluZWFyLWdyYWRpZW50KDg4LjA2ZGVnLCAjMDBmZmIzIDAlLCAjMDBmZjY1IDEwMCUpO1xyXG4kYWxlcnQtdXNlci1lcnJvcjogbGluZWFyLWdyYWRpZW50KDI0MC45OGRlZywgI2UwMDAyMiAwJSwgI2ZmYWIwMyAxMDAlKTtcclxuQG1peGluIGRvd25sb2FkLWJ1dHRvbi1iYWNrZ3JvdW5kKCkge1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgyMzguNzJkZWcsICMwMDQ0YTkgMCUsICNmNzAwYTMgMTAwJSksXHJcbiAgICByYWRpYWwtZ3JhZGllbnQoMTAwJSAxODguMDElIGF0IDc2LjE0JSAwJSwgIzQzZGRmZiAwJSwgI2ZmMDAwMCAxMDAlKSxcclxuICAgIGxpbmVhci1ncmFkaWVudCgwZGVnLCAjZGIwMGZmIDAlLCAjMTRmZjAwIDEwMCUpLFxyXG4gICAgcmFkaWFsLWdyYWRpZW50KDU5LjIlIDEwMCUgYXQgNTAlIDEwMCUsICM2YTAwZDUgMCUsICMwMGUwZmYgMTAwJSksXHJcbiAgICByYWRpYWwtZ3JhZGllbnQoMTAwJSAxNDguMDclIGF0IDAlIDAlLCAjZmY5OTAwIDAlLCAjMDAxYWZmIDEwMCUpO1xyXG4gIGJhY2tncm91bmQtYmxlbmQtbW9kZTogaGFyZC1saWdodCwgb3ZlcmxheSwgY29sb3ItYnVybiwgY29sb3ItYnVybiwgbm9ybWFsO1xyXG59XHJcblxyXG5AbWl4aW4gcGljdHVyZS1tZXNzYWdlLWJhY2tncm91bmQoKSB7XHJcbiAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KDEwMCUgMjI1JSBhdCAxMDAlIDAlLCAjMTIwMDM3IDAlLCAjMDAwMDAwIDEwMCUpLFxyXG4gICAgbGluZWFyLWdyYWRpZW50KDM1ZGVnLCAjYzBmZmM3IDAlLCAjMTcwMDFmIDc1JSksXHJcbiAgICBsaW5lYXItZ3JhZGllbnQoNTVkZWcsICMyNDAwZmYgMCUsICMwMDAwMDAgMTAwJSksXHJcbiAgICBsaW5lYXItZ3JhZGllbnQoXHJcbiAgICAgIDkwZGVnLFxyXG4gICAgICAjZmZlMDM3IDAlLFxyXG4gICAgICAjZmZlMDM3IDQwJSxcclxuICAgICAgIzFkY2Q5ZiA0MCUsXHJcbiAgICAgICMxZGNkOWYgNTAlLFxyXG4gICAgICAjMDg4YzZmIDUwJSxcclxuICAgICAgIzA4OGM2ZiA3MCUsXHJcbiAgICAgICMyMzAzM2MgNzAlLFxyXG4gICAgICAjMjMwMzNjIDEwMCVcclxuICAgICksXHJcbiAgICBsaW5lYXItZ3JhZGllbnQoXHJcbiAgICAgIDE4MGRlZyxcclxuICAgICAgI2ZmOGZlNSAwJSxcclxuICAgICAgI2ZmOGZlNSA0NSUsXHJcbiAgICAgICNmYmZmNjQgNDUlLFxyXG4gICAgICAjZmJmZjY0IDYwJSxcclxuICAgICAgIzc2ZTNmZiA2MCUsXHJcbiAgICAgICM3NmUzZmYgODAlLFxyXG4gICAgICAjNmViNmU3IDgwJSxcclxuICAgICAgIzZlYjZlNyAxMDAlXHJcbiAgICApO1xyXG4gIGJhY2tncm91bmQtYmxlbmQtbW9kZTogc2NyZWVuLCBvdmVybGF5LCBvdmVybGF5LCBkYXJrZW4sIG5vcm1hbDtcclxufVxyXG5cclxuQG1peGluIGJhY2tncm91bmQoKSB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCAjMDAwODUwIDAlLCAjMDAwMzIwIDEwMCUpLFxyXG4gICAgcmFkaWFsLWdyYWRpZW50KDEwMCUgMjI1JSBhdCAxMDAlIDAlLCAjZmY2OTI4IDAlLCAjMDAwMDAwIDEwMCUpLFxyXG4gICAgbGluZWFyLWdyYWRpZW50KDIyNWRlZywgI2ZmN2EwMCAwJSwgIzAwMDAwMCAxMDAlKSxcclxuICAgIGxpbmVhci1ncmFkaWVudChcclxuICAgICAgMTM1ZGVnLFxyXG4gICAgICAjY2RmZmViIDEwJSxcclxuICAgICAgI2NkZmZlYiAzNSUsXHJcbiAgICAgICMwMDlmOWQgMzUlLFxyXG4gICAgICAjMDA5ZjlkIDYwJSxcclxuICAgICAgIzA3NDU2ZiA2MCUsXHJcbiAgICAgICMwNzQ1NmYgNjclLFxyXG4gICAgICAjMGYwYTNjIDY3JSxcclxuICAgICAgIzBmMGEzYyAxMDAlXHJcbiAgICApO1xyXG4gIGJhY2tncm91bmQtYmxlbmQtbW9kZTogc2NyZWVuLCBvdmVybGF5LCBoYXJkLWxpZ2h0LCBub3JtYWw7XHJcbn1cclxuXHJcbkBtaXhpbiBidXR0b24tc3R5bGUoKSB7XHJcbiAgYm94LXNoYWRvdzogJGJ1dHRvbi1zaGFkb3c7XHJcbiAgYm9yZGVyOiAwO1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbiAgZm9udC1zaXplOiAxLjVlbTtcclxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gIGNvbG9yOiAkbGlnaHQtdGV4dC1jb2xvcjtcclxufVxyXG5cclxuJG1lZGlhLWJyZWFrcG9pbnQtbWVkaXVtOiAxMDAwcHg7XHJcbiRtZWRpYS1icmVha3BvaW50LXNtYWxsOiA2NTBweDtcclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UseralertComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-useralert',
                templateUrl: './useralert.component.html',
                styleUrls: ['./useralert.component.scss'],
            }]
    }], function () { return [{ type: _services_user_alert_service__WEBPACK_IMPORTED_MODULE_2__["UserAlertService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/pages/landing/landing.component.ts":
/*!****************************************************!*\
  !*** ./src/app/pages/landing/landing.component.ts ***!
  \****************************************************/
/*! exports provided: LandingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingComponent", function() { return LandingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _components_useralert_useralert_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/useralert/useralert.component */ "./src/app/components/useralert/useralert.component.ts");
/* harmony import */ var _components_create_session_create_session_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/create-session/create-session.component */ "./src/app/components/create-session/create-session.component.ts");
/* harmony import */ var _components_join_session_join_session_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/join-session/join-session.component */ "./src/app/components/join-session/join-session.component.ts");





class LandingComponent {
    constructor() { }
    ngOnInit() { }
}
LandingComponent.ɵfac = function LandingComponent_Factory(t) { return new (t || LandingComponent)(); };
LandingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LandingComponent, selectors: [["ng-component"]], decls: 10, vars: 0, consts: [[1, "landing-container"], [1, "website-title"], [1, "or-container"]], template: function LandingComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-useralert");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Transfer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Tube.io");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-create-session");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "------- OR -------");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "app-join-session");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_components_useralert_useralert_component__WEBPACK_IMPORTED_MODULE_1__["UseralertComponent"], _components_create_session_create_session_component__WEBPACK_IMPORTED_MODULE_2__["CreateSessionComponent"], _components_join_session_join_session_component__WEBPACK_IMPORTED_MODULE_3__["JoinSessionComponent"]], styles: [".landing-container[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  overflow: hidden;\n  align-content: center;\n  align-items: center;\n  display: flex;\n  flex-direction: column;\n  font-family: \"Dosis\", sans-serif;\n  color: #eeeeee;\n}\n.landing-container[_ngcontent-%COMP%]   .website-title[_ngcontent-%COMP%] {\n  text-align: center;\n  max-width: 80%;\n  margin: 40px;\n  font-size: 6em;\n}\n.landing-container[_ngcontent-%COMP%]   .website-title[_ngcontent-%COMP%]   br[_ngcontent-%COMP%] {\n  display: none;\n}\n.landing-container[_ngcontent-%COMP%]   .or-container[_ngcontent-%COMP%] {\n  font-size: 2em;\n}\n@media screen and (max-width: 650px) {\n  .landing-container[_ngcontent-%COMP%]   .website-title[_ngcontent-%COMP%] {\n    font-size: 4em;\n    margin: 20px;\n  }\n  .landing-container[_ngcontent-%COMP%]   .website-title[_ngcontent-%COMP%]   br[_ngcontent-%COMP%] {\n    display: block;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbGFuZGluZy9sYW5kaW5nLmNvbXBvbmVudC5zY3NzIiwic3JjL3Njc3MvX3ZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsU0FBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0NDREs7RURFTCxjQ1ppQjtBRFduQjtBQUdFO0VBQ0Usa0JBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7QUFESjtBQUdJO0VBQ0UsYUFBQTtBQUROO0FBS0U7RUFDRSxjQUFBO0FBSEo7QUFPQTtFQUVJO0lBQ0UsY0FBQTtJQUNBLFlBQUE7RUFMSjtFQU1JO0lBQ0UsY0FBQTtFQUpOO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9sYW5kaW5nL2xhbmRpbmcuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi9zcmMvc2Nzcy92YXJpYWJsZXNcIjtcclxuXHJcbi5sYW5kaW5nLWNvbnRhaW5lciB7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBmb250LWZhbWlseTogJGZvbnQ7XHJcbiAgY29sb3I6ICRsaWdodC10ZXh0LWNvbG9yO1xyXG5cclxuICAud2Vic2l0ZS10aXRsZSB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXgtd2lkdGg6IDgwJTtcclxuICAgIG1hcmdpbjogNDBweDtcclxuICAgIGZvbnQtc2l6ZTogNmVtO1xyXG5cclxuICAgIGJyIHtcclxuICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5vci1jb250YWluZXIge1xyXG4gICAgZm9udC1zaXplOiAyZW07XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAkbWVkaWEtYnJlYWtwb2ludC1zbWFsbCkge1xyXG4gIC5sYW5kaW5nLWNvbnRhaW5lciB7XHJcbiAgICAud2Vic2l0ZS10aXRsZSB7XHJcbiAgICAgIGZvbnQtc2l6ZTogNGVtO1xyXG4gICAgICBtYXJnaW46IDIwcHg7XHJcbiAgICAgIGJyIHtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCIvL2NzcyB2YXJpYWJsZXMgdG8gY29udHJvbGwgdGhlIGFwcGVhcmVuY2Ugb2YgdGhlIHNpdGVcclxuXHJcbiRsaWdodC10ZXh0LWNvbG9yOiByZ2IoMjM4LCAyMzgsIDIzOCk7XHJcblxyXG4kZGFyay10ZXh0LWNvbG9yOiAjMDAwO1xyXG5cclxuJGFjY2VudDE6ICMwMDA4NTA7XHJcblxyXG4kYWNjZW50MjogI2ZmNjkyODtcclxuXHJcbiRhY2NlbnQzOiByZ2IoMTUzLCAwLCAyMjQpO1xyXG5cclxuJGZvbnQ6IFwiRG9zaXNcIiwgc2Fucy1zZXJpZjtcclxuXHJcbiR1c2VyLWljb24tY29sb3I6IGxpbmVhci1ncmFkaWVudCg0MC4yN2RlZywgIzAwZmZhMyAwJSwgIzk1OTVmZiAxMDAlKTtcclxuXHJcbkBtaXhpbiBidXR0b24tYmFja2dyb3VuZCgkYW5nbGUpIHtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoJGFuZ2xlLCAjZmYwMDU1IDAlLCAjMDAyOTRmIDkwJSk7XHJcbn1cclxuXHJcbiRpbnB1dC1maWVsZDEtY29sb3I6ICMwMDVmYjg7XHJcbiRpbnB1dC1maWVsZDItY29sb3I6ICMwMDY5Y2M7XHJcbiRpbnB1dC1maWVsZDMtY29sb3I6ICMwMDc0ZTA7XHJcbiRpbnB1dC1maWVsZDQtY29sb3I6ICMwMDdlZjU7XHJcblxyXG4kYnV0dG9uLXNoYWRvdzogNHB4IDRweCA1cHggIzAwMDtcclxuXHJcbiRtZXNzYWdlLWJhY2tncm91bmQtY29sb3Itc2VuZGVyOiByZ2IoMTc3LCAyNTUsIDE5MCk7XHJcbiRtZXNzYWdlLWJhY2tncm91bmQtY29sb3ItcmVjZWl2ZXI6IHJnYigyNTMsIDI1NSwgMjI0KTtcclxuJG1lc3NhZ2UtYmFja2dyb3VuZC1jb2xvci1zdGF0dXM6IHJnYigxMDMsIDIxMiwgMjU1KTtcclxuXHJcbiRhbGVydC11c2VyLXN1Y2Nlc3M6IGxpbmVhci1ncmFkaWVudCg4OC4wNmRlZywgIzAwZmZiMyAwJSwgIzAwZmY2NSAxMDAlKTtcclxuJGFsZXJ0LXVzZXItZXJyb3I6IGxpbmVhci1ncmFkaWVudCgyNDAuOThkZWcsICNlMDAwMjIgMCUsICNmZmFiMDMgMTAwJSk7XHJcbkBtaXhpbiBkb3dubG9hZC1idXR0b24tYmFja2dyb3VuZCgpIHtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMjM4LjcyZGVnLCAjMDA0NGE5IDAlLCAjZjcwMGEzIDEwMCUpLFxyXG4gICAgcmFkaWFsLWdyYWRpZW50KDEwMCUgMTg4LjAxJSBhdCA3Ni4xNCUgMCUsICM0M2RkZmYgMCUsICNmZjAwMDAgMTAwJSksXHJcbiAgICBsaW5lYXItZ3JhZGllbnQoMGRlZywgI2RiMDBmZiAwJSwgIzE0ZmYwMCAxMDAlKSxcclxuICAgIHJhZGlhbC1ncmFkaWVudCg1OS4yJSAxMDAlIGF0IDUwJSAxMDAlLCAjNmEwMGQ1IDAlLCAjMDBlMGZmIDEwMCUpLFxyXG4gICAgcmFkaWFsLWdyYWRpZW50KDEwMCUgMTQ4LjA3JSBhdCAwJSAwJSwgI2ZmOTkwMCAwJSwgIzAwMWFmZiAxMDAlKTtcclxuICBiYWNrZ3JvdW5kLWJsZW5kLW1vZGU6IGhhcmQtbGlnaHQsIG92ZXJsYXksIGNvbG9yLWJ1cm4sIGNvbG9yLWJ1cm4sIG5vcm1hbDtcclxufVxyXG5cclxuQG1peGluIHBpY3R1cmUtbWVzc2FnZS1iYWNrZ3JvdW5kKCkge1xyXG4gIGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudCgxMDAlIDIyNSUgYXQgMTAwJSAwJSwgIzEyMDAzNyAwJSwgIzAwMDAwMCAxMDAlKSxcclxuICAgIGxpbmVhci1ncmFkaWVudCgzNWRlZywgI2MwZmZjNyAwJSwgIzE3MDAxZiA3NSUpLFxyXG4gICAgbGluZWFyLWdyYWRpZW50KDU1ZGVnLCAjMjQwMGZmIDAlLCAjMDAwMDAwIDEwMCUpLFxyXG4gICAgbGluZWFyLWdyYWRpZW50KFxyXG4gICAgICA5MGRlZyxcclxuICAgICAgI2ZmZTAzNyAwJSxcclxuICAgICAgI2ZmZTAzNyA0MCUsXHJcbiAgICAgICMxZGNkOWYgNDAlLFxyXG4gICAgICAjMWRjZDlmIDUwJSxcclxuICAgICAgIzA4OGM2ZiA1MCUsXHJcbiAgICAgICMwODhjNmYgNzAlLFxyXG4gICAgICAjMjMwMzNjIDcwJSxcclxuICAgICAgIzIzMDMzYyAxMDAlXHJcbiAgICApLFxyXG4gICAgbGluZWFyLWdyYWRpZW50KFxyXG4gICAgICAxODBkZWcsXHJcbiAgICAgICNmZjhmZTUgMCUsXHJcbiAgICAgICNmZjhmZTUgNDUlLFxyXG4gICAgICAjZmJmZjY0IDQ1JSxcclxuICAgICAgI2ZiZmY2NCA2MCUsXHJcbiAgICAgICM3NmUzZmYgNjAlLFxyXG4gICAgICAjNzZlM2ZmIDgwJSxcclxuICAgICAgIzZlYjZlNyA4MCUsXHJcbiAgICAgICM2ZWI2ZTcgMTAwJVxyXG4gICAgKTtcclxuICBiYWNrZ3JvdW5kLWJsZW5kLW1vZGU6IHNjcmVlbiwgb3ZlcmxheSwgb3ZlcmxheSwgZGFya2VuLCBub3JtYWw7XHJcbn1cclxuXHJcbkBtaXhpbiBiYWNrZ3JvdW5kKCkge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCg0NWRlZywgIzAwMDg1MCAwJSwgIzAwMDMyMCAxMDAlKSxcclxuICAgIHJhZGlhbC1ncmFkaWVudCgxMDAlIDIyNSUgYXQgMTAwJSAwJSwgI2ZmNjkyOCAwJSwgIzAwMDAwMCAxMDAlKSxcclxuICAgIGxpbmVhci1ncmFkaWVudCgyMjVkZWcsICNmZjdhMDAgMCUsICMwMDAwMDAgMTAwJSksXHJcbiAgICBsaW5lYXItZ3JhZGllbnQoXHJcbiAgICAgIDEzNWRlZyxcclxuICAgICAgI2NkZmZlYiAxMCUsXHJcbiAgICAgICNjZGZmZWIgMzUlLFxyXG4gICAgICAjMDA5ZjlkIDM1JSxcclxuICAgICAgIzAwOWY5ZCA2MCUsXHJcbiAgICAgICMwNzQ1NmYgNjAlLFxyXG4gICAgICAjMDc0NTZmIDY3JSxcclxuICAgICAgIzBmMGEzYyA2NyUsXHJcbiAgICAgICMwZjBhM2MgMTAwJVxyXG4gICAgKTtcclxuICBiYWNrZ3JvdW5kLWJsZW5kLW1vZGU6IHNjcmVlbiwgb3ZlcmxheSwgaGFyZC1saWdodCwgbm9ybWFsO1xyXG59XHJcblxyXG5AbWl4aW4gYnV0dG9uLXN0eWxlKCkge1xyXG4gIGJveC1zaGFkb3c6ICRidXR0b24tc2hhZG93O1xyXG4gIGJvcmRlcjogMDtcclxuICBwYWRkaW5nOiAyMHB4O1xyXG4gIGZvbnQtc2l6ZTogMS41ZW07XHJcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICBjb2xvcjogJGxpZ2h0LXRleHQtY29sb3I7XHJcbn1cclxuXHJcbiRtZWRpYS1icmVha3BvaW50LW1lZGl1bTogMTAwMHB4O1xyXG4kbWVkaWEtYnJlYWtwb2ludC1zbWFsbDogNjUwcHg7XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LandingComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                templateUrl: './landing.component.html',
                styleUrls: ['./landing.component.scss'],
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/pages/session/session.component.ts":
/*!****************************************************!*\
  !*** ./src/app/pages/session/session.component.ts ***!
  \****************************************************/
/*! exports provided: SessionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SessionComponent", function() { return SessionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _components_session_messages_session_messages_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/session-messages/session-messages.component */ "./src/app/components/session-messages/session-messages.component.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _store_app_action__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../store/app.action */ "./src/app/store/app.action.ts");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _services_connect_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../services/connect.service */ "./src/app/services/connect.service.ts");
/* harmony import */ var _services_messages_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/messages.service */ "./src/app/services/messages.service.ts");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngxs/store */ "./node_modules/@ngxs/store/__ivy_ngcc__/fesm2015/ngxs-store.js");
/* harmony import */ var _services_user_alert_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../services/user-alert.service */ "./src/app/services/user-alert.service.ts");












function SessionComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-useralert");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "TrasferTube.io");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "fa-icon", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, ".io");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "app-sessionmenu");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "app-search-messages");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "app-session-messages", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "app-session-messages-text-field", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("newMessageChange", function SessionComponent_div_0_Template_app_session_messages_text_field_newMessageChange_10_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.sendMessage($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx_r0.faExchange);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("reconnectError", ctx_r0.reconnectionError);
} }
function SessionComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Sorry!!! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Back to Start");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" The Session with the id '", ctx_r1.currentSessionId, "' doesn't exist! ");
} }
class SessionComponent {
    constructor(router, activatedRoute, connectService, messagesService, store, uAlert) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.connectService = connectService;
        this.messagesService = messagesService;
        this.store = store;
        this.uAlert = uAlert;
        this.sessionError = false; //bool holding the session connection status
        this.reconnectionError = false; //is fals after max reconnection attempts are reached
        this.faExchange = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faExchangeAlt"];
    }
    ngOnInit() {
        this.activatedRoute.paramMap.subscribe((params) => {
            //get Id route parameter
            this.currentSessionId = params.get('id');
            this.joinSession(this.currentSessionId); //join session with url parameter
        });
        this.router.events.subscribe((event) => {
            //router events
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationStart"]) {
                //do something on start activity
            }
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationError"]) {
                console.error(event.error);
            }
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]) {
                this.messagesService.removeAllMessages();
                this.socket.close();
            }
        });
    }
    joinSession(id) {
        this.connectService.checkSession(id).subscribe(
        //connect with connect service initialise socket when succesfull
        () => {
            this.socketIni(this.connectService.joinSession(id));
            this.sessionError = false;
        }, (error) => {
            console.log('Sorry diese Session gibt es nicht :(');
            this.sessionError = true;
        });
    }
    socketIni(s) {
        //initialize socket and listen to events
        this.socket = s;
        this.messagesService.removeAllMessages();
        this.socket.on(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].messageIdentifier, (msg) => {
            this.messagesService.addMessage(msg);
        });
        this.socket.on('chunkResponse', (res) => {
            this.messagesService.chunkResponse(res, this.socket);
        });
        this.socket.on('chunkData', (chunk) => {
            this.messagesService.newChunk(chunk, this.socket);
        });
        this.socket.on('SessionIni', (ini) => {
            this.store.dispatch(new _store_app_action__WEBPACK_IMPORTED_MODULE_4__["SetUserId"](ini.userId));
            this.store.dispatch(new _store_app_action__WEBPACK_IMPORTED_MODULE_4__["SetSessionId"](ini.sessionId));
            this.store.dispatch(new _store_app_action__WEBPACK_IMPORTED_MODULE_4__["SetUserName"](ini.userName));
            this.uAlert.setUserAlert('Connected', 'success');
        });
        this.socket.on('newUser', (userData) => {
            const mappedData = new Map(Object.entries(userData));
            this.store.dispatch(new _store_app_action__WEBPACK_IMPORTED_MODULE_4__["SetUserInSession"](mappedData));
        });
        this.socket.on('disconnect', () => {
            this.sendStatus('Disconnected! Trying to reconnect...');
            this.uAlert.setUserAlert('Disconnected! Trying to reconnect...', 'error');
            console.log('disconnected');
        });
        this.socket.on('reconnect_failed', () => {
            this.reconnectionError = true;
            this.sendStatus(`Couldn't reconnect :(`);
            this.uAlert.setUserAlert(`Couldn't reconnect : (`, 'error');
            console.log('reconnect failed');
        });
    }
    sendStatus(status) {
        //sends a status message
        const msg = {
            //create message object
            message: status,
            messageId: -1,
            userId: 'SERVER',
            userName: 'Server',
            contentType: 'Text',
            base64Data: '',
        };
        this.messagesService.addMessage(msg); //add Message object
    }
    sendMessage(msg) {
        //send message by emiting it to the socket
        this.messagesService.sendMessage(this.socket, msg);
    }
}
SessionComponent.ɵfac = function SessionComponent_Factory(t) { return new (t || SessionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_connect_service__WEBPACK_IMPORTED_MODULE_6__["ConnectService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_messages_service__WEBPACK_IMPORTED_MODULE_7__["MessagesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngxs_store__WEBPACK_IMPORTED_MODULE_8__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_user_alert_service__WEBPACK_IMPORTED_MODULE_9__["UserAlertService"])); };
SessionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SessionComponent, selectors: [["ng-component"]], viewQuery: function SessionComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_components_session_messages_session_messages_component__WEBPACK_IMPORTED_MODULE_2__["SessionMessagesComponent"], true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.messagesComponent = _t.first);
    } }, decls: 2, vars: 2, consts: [["class", "active-session-container", 4, "ngIf"], ["class", "session-error-container", 4, "ngIf"], [1, "active-session-container"], ["href", "/", 1, "site-name", "default"], ["href", "/", 1, "site-name", "mobile"], [3, "icon"], [3, "reconnectError"], [3, "newMessageChange"], [1, "session-error-container"], ["href", "/"]], template: function SessionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, SessionComponent_div_0_Template, 11, 2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SessionComponent_div_1_Template, 8, 1, "div", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.sessionError);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.sessionError);
    } }, styles: ["@import url(\"https://fonts.googleapis.com/css2?family=Dosis&display=swap\");\n.site-name[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 15px;\n  left: 25px;\n  text-decoration: none;\n  color: #eeeeee;\n  font-size: 2em;\n  font-family: \"Dosis\", sans-serif;\n}\n.site-name.mobile[_ngcontent-%COMP%] {\n  display: none;\n}\n.session-error-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-flow: column;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n  overflow: hidden;\n  height: 100%;\n  width: 100%;\n}\n.session-error-container[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  max-width: 80%;\n  line-break: auto;\n  font-size: 2.5em;\n  color: #eeeeee;\n  font-family: \"Dosis\", sans-serif;\n}\n.session-error-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  background: linear-gradient(320deg, #ff0055 0%, #00294f 90%);\n  box-shadow: 4px 4px 5px #000;\n  border: 0;\n  padding: 20px;\n  font-size: 1.5em;\n  border-radius: 20px;\n  color: #eeeeee;\n}\n@media screen and (max-width: 650px) {\n  .site-name.default[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .site-name.mobile[_ngcontent-%COMP%] {\n    display: block;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvc2Vzc2lvbi9zZXNzaW9uLmNvbXBvbmVudC5zY3NzIiwic3JjL3Njc3MvX3ZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNRLDBFQUFBO0FBRVI7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EscUJBQUE7RUFDQSxjQ05pQjtFRE9qQixjQUFBO0VBQ0EsZ0NDRUs7QURIUDtBQUdFO0VBQ0UsYUFBQTtBQURKO0FBS0E7RUFDRSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FBRkY7QUFJRTtFQUNFLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0M3QmU7RUQ4QmYsZ0NDcEJHO0FEa0JQO0FBS0U7RUNsQkEsNERBQUE7RUF5RUEsNEJBakVjO0VBa0VkLFNBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGNBN0ZpQjtBRHFDbkI7QUFFQTtFQUVJO0lBQ0UsYUFBQTtFQUFKO0VBRUU7SUFDRSxjQUFBO0VBQUo7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Nlc3Npb24vc2Vzc2lvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuL3NyYy9zY3NzL3ZhcmlhYmxlc1wiO1xyXG5AaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9RG9zaXMmZGlzcGxheT1zd2FwXCIpO1xyXG5cclxuLnNpdGUtbmFtZSB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMTVweDtcclxuICBsZWZ0OiAyNXB4O1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBjb2xvcjogJGxpZ2h0LXRleHQtY29sb3I7XHJcbiAgZm9udC1zaXplOiAyZW07XHJcbiAgZm9udC1mYW1pbHk6ICRmb250O1xyXG5cclxuICAmLm1vYmlsZSB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxufVxyXG5cclxuLnNlc3Npb24tZXJyb3ItY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZmxvdzogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG5cclxuICBoMSB7XHJcbiAgICBtYXgtd2lkdGg6IDgwJTtcclxuICAgIGxpbmUtYnJlYWs6IGF1dG87XHJcbiAgICBmb250LXNpemU6IDIuNWVtO1xyXG4gICAgY29sb3I6ICRsaWdodC10ZXh0LWNvbG9yO1xyXG4gICAgZm9udC1mYW1pbHk6ICRmb250O1xyXG4gIH1cclxuXHJcbiAgYnV0dG9uIHtcclxuICAgIEBpbmNsdWRlIGJ1dHRvbi1iYWNrZ3JvdW5kKDMyMGRlZyk7XHJcbiAgICBAaW5jbHVkZSBidXR0b24tc3R5bGUoKTtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6ICRtZWRpYS1icmVha3BvaW50LXNtYWxsKSB7XHJcbiAgLnNpdGUtbmFtZSB7XHJcbiAgICAmLmRlZmF1bHQge1xyXG4gICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG4gICAgJi5tb2JpbGUge1xyXG4gICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiLy9jc3MgdmFyaWFibGVzIHRvIGNvbnRyb2xsIHRoZSBhcHBlYXJlbmNlIG9mIHRoZSBzaXRlXHJcblxyXG4kbGlnaHQtdGV4dC1jb2xvcjogcmdiKDIzOCwgMjM4LCAyMzgpO1xyXG5cclxuJGRhcmstdGV4dC1jb2xvcjogIzAwMDtcclxuXHJcbiRhY2NlbnQxOiAjMDAwODUwO1xyXG5cclxuJGFjY2VudDI6ICNmZjY5Mjg7XHJcblxyXG4kYWNjZW50MzogcmdiKDE1MywgMCwgMjI0KTtcclxuXHJcbiRmb250OiBcIkRvc2lzXCIsIHNhbnMtc2VyaWY7XHJcblxyXG4kdXNlci1pY29uLWNvbG9yOiBsaW5lYXItZ3JhZGllbnQoNDAuMjdkZWcsICMwMGZmYTMgMCUsICM5NTk1ZmYgMTAwJSk7XHJcblxyXG5AbWl4aW4gYnV0dG9uLWJhY2tncm91bmQoJGFuZ2xlKSB7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCRhbmdsZSwgI2ZmMDA1NSAwJSwgIzAwMjk0ZiA5MCUpO1xyXG59XHJcblxyXG4kaW5wdXQtZmllbGQxLWNvbG9yOiAjMDA1ZmI4O1xyXG4kaW5wdXQtZmllbGQyLWNvbG9yOiAjMDA2OWNjO1xyXG4kaW5wdXQtZmllbGQzLWNvbG9yOiAjMDA3NGUwO1xyXG4kaW5wdXQtZmllbGQ0LWNvbG9yOiAjMDA3ZWY1O1xyXG5cclxuJGJ1dHRvbi1zaGFkb3c6IDRweCA0cHggNXB4ICMwMDA7XHJcblxyXG4kbWVzc2FnZS1iYWNrZ3JvdW5kLWNvbG9yLXNlbmRlcjogcmdiKDE3NywgMjU1LCAxOTApO1xyXG4kbWVzc2FnZS1iYWNrZ3JvdW5kLWNvbG9yLXJlY2VpdmVyOiByZ2IoMjUzLCAyNTUsIDIyNCk7XHJcbiRtZXNzYWdlLWJhY2tncm91bmQtY29sb3Itc3RhdHVzOiByZ2IoMTAzLCAyMTIsIDI1NSk7XHJcblxyXG4kYWxlcnQtdXNlci1zdWNjZXNzOiBsaW5lYXItZ3JhZGllbnQoODguMDZkZWcsICMwMGZmYjMgMCUsICMwMGZmNjUgMTAwJSk7XHJcbiRhbGVydC11c2VyLWVycm9yOiBsaW5lYXItZ3JhZGllbnQoMjQwLjk4ZGVnLCAjZTAwMDIyIDAlLCAjZmZhYjAzIDEwMCUpO1xyXG5AbWl4aW4gZG93bmxvYWQtYnV0dG9uLWJhY2tncm91bmQoKSB7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDIzOC43MmRlZywgIzAwNDRhOSAwJSwgI2Y3MDBhMyAxMDAlKSxcclxuICAgIHJhZGlhbC1ncmFkaWVudCgxMDAlIDE4OC4wMSUgYXQgNzYuMTQlIDAlLCAjNDNkZGZmIDAlLCAjZmYwMDAwIDEwMCUpLFxyXG4gICAgbGluZWFyLWdyYWRpZW50KDBkZWcsICNkYjAwZmYgMCUsICMxNGZmMDAgMTAwJSksXHJcbiAgICByYWRpYWwtZ3JhZGllbnQoNTkuMiUgMTAwJSBhdCA1MCUgMTAwJSwgIzZhMDBkNSAwJSwgIzAwZTBmZiAxMDAlKSxcclxuICAgIHJhZGlhbC1ncmFkaWVudCgxMDAlIDE0OC4wNyUgYXQgMCUgMCUsICNmZjk5MDAgMCUsICMwMDFhZmYgMTAwJSk7XHJcbiAgYmFja2dyb3VuZC1ibGVuZC1tb2RlOiBoYXJkLWxpZ2h0LCBvdmVybGF5LCBjb2xvci1idXJuLCBjb2xvci1idXJuLCBub3JtYWw7XHJcbn1cclxuXHJcbkBtaXhpbiBwaWN0dXJlLW1lc3NhZ2UtYmFja2dyb3VuZCgpIHtcclxuICBiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQoMTAwJSAyMjUlIGF0IDEwMCUgMCUsICMxMjAwMzcgMCUsICMwMDAwMDAgMTAwJSksXHJcbiAgICBsaW5lYXItZ3JhZGllbnQoMzVkZWcsICNjMGZmYzcgMCUsICMxNzAwMWYgNzUlKSxcclxuICAgIGxpbmVhci1ncmFkaWVudCg1NWRlZywgIzI0MDBmZiAwJSwgIzAwMDAwMCAxMDAlKSxcclxuICAgIGxpbmVhci1ncmFkaWVudChcclxuICAgICAgOTBkZWcsXHJcbiAgICAgICNmZmUwMzcgMCUsXHJcbiAgICAgICNmZmUwMzcgNDAlLFxyXG4gICAgICAjMWRjZDlmIDQwJSxcclxuICAgICAgIzFkY2Q5ZiA1MCUsXHJcbiAgICAgICMwODhjNmYgNTAlLFxyXG4gICAgICAjMDg4YzZmIDcwJSxcclxuICAgICAgIzIzMDMzYyA3MCUsXHJcbiAgICAgICMyMzAzM2MgMTAwJVxyXG4gICAgKSxcclxuICAgIGxpbmVhci1ncmFkaWVudChcclxuICAgICAgMTgwZGVnLFxyXG4gICAgICAjZmY4ZmU1IDAlLFxyXG4gICAgICAjZmY4ZmU1IDQ1JSxcclxuICAgICAgI2ZiZmY2NCA0NSUsXHJcbiAgICAgICNmYmZmNjQgNjAlLFxyXG4gICAgICAjNzZlM2ZmIDYwJSxcclxuICAgICAgIzc2ZTNmZiA4MCUsXHJcbiAgICAgICM2ZWI2ZTcgODAlLFxyXG4gICAgICAjNmViNmU3IDEwMCVcclxuICAgICk7XHJcbiAgYmFja2dyb3VuZC1ibGVuZC1tb2RlOiBzY3JlZW4sIG92ZXJsYXksIG92ZXJsYXksIGRhcmtlbiwgbm9ybWFsO1xyXG59XHJcblxyXG5AbWl4aW4gYmFja2dyb3VuZCgpIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoNDVkZWcsICMwMDA4NTAgMCUsICMwMDAzMjAgMTAwJSksXHJcbiAgICByYWRpYWwtZ3JhZGllbnQoMTAwJSAyMjUlIGF0IDEwMCUgMCUsICNmZjY5MjggMCUsICMwMDAwMDAgMTAwJSksXHJcbiAgICBsaW5lYXItZ3JhZGllbnQoMjI1ZGVnLCAjZmY3YTAwIDAlLCAjMDAwMDAwIDEwMCUpLFxyXG4gICAgbGluZWFyLWdyYWRpZW50KFxyXG4gICAgICAxMzVkZWcsXHJcbiAgICAgICNjZGZmZWIgMTAlLFxyXG4gICAgICAjY2RmZmViIDM1JSxcclxuICAgICAgIzAwOWY5ZCAzNSUsXHJcbiAgICAgICMwMDlmOWQgNjAlLFxyXG4gICAgICAjMDc0NTZmIDYwJSxcclxuICAgICAgIzA3NDU2ZiA2NyUsXHJcbiAgICAgICMwZjBhM2MgNjclLFxyXG4gICAgICAjMGYwYTNjIDEwMCVcclxuICAgICk7XHJcbiAgYmFja2dyb3VuZC1ibGVuZC1tb2RlOiBzY3JlZW4sIG92ZXJsYXksIGhhcmQtbGlnaHQsIG5vcm1hbDtcclxufVxyXG5cclxuQG1peGluIGJ1dHRvbi1zdHlsZSgpIHtcclxuICBib3gtc2hhZG93OiAkYnV0dG9uLXNoYWRvdztcclxuICBib3JkZXI6IDA7XHJcbiAgcGFkZGluZzogMjBweDtcclxuICBmb250LXNpemU6IDEuNWVtO1xyXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgY29sb3I6ICRsaWdodC10ZXh0LWNvbG9yO1xyXG59XHJcblxyXG4kbWVkaWEtYnJlYWtwb2ludC1tZWRpdW06IDEwMDBweDtcclxuJG1lZGlhLWJyZWFrcG9pbnQtc21hbGw6IDY1MHB4O1xyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SessionComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                templateUrl: './session.component.html',
                styleUrls: ['./session.component.scss'],
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }, { type: _services_connect_service__WEBPACK_IMPORTED_MODULE_6__["ConnectService"] }, { type: _services_messages_service__WEBPACK_IMPORTED_MODULE_7__["MessagesService"] }, { type: _ngxs_store__WEBPACK_IMPORTED_MODULE_8__["Store"] }, { type: _services_user_alert_service__WEBPACK_IMPORTED_MODULE_9__["UserAlertService"] }]; }, { messagesComponent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_components_session_messages_session_messages_component__WEBPACK_IMPORTED_MODULE_2__["SessionMessagesComponent"]]
        }] }); })();


/***/ }),

/***/ "./src/app/pipes/safe.pipe.ts":
/*!************************************!*\
  !*** ./src/app/pipes/safe.pipe.ts ***!
  \************************************/
/*! exports provided: SafePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SafePipe", function() { return SafePipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/////////////////////this pipe is currently not used... It could be used to bypass the angular sanitizer



class SafePipe {
    constructor(sanitizer) {
        this.sanitizer = sanitizer;
    }
    transform(value, type) {
        switch (type) {
            case 'html':
                return this.sanitizer.bypassSecurityTrustHtml(value);
            case 'style':
                return this.sanitizer.bypassSecurityTrustStyle(value);
            case 'script':
                return this.sanitizer.bypassSecurityTrustScript(value);
            case 'url':
                return this.sanitizer.bypassSecurityTrustUrl(value);
            case 'resourceUrl':
                return this.sanitizer.bypassSecurityTrustResourceUrl(value);
            default:
                throw new Error(`Invalid safe type specified: ${type}`);
        }
    }
}
SafePipe.ɵfac = function SafePipe_Factory(t) { return new (t || SafePipe)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"])); };
SafePipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "safe", type: SafePipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SafePipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'safe',
            }]
    }], function () { return [{ type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"] }]; }, null); })();


/***/ }),

/***/ "./src/app/pipes/search.pipe.ts":
/*!**************************************!*\
  !*** ./src/app/pipes/search.pipe.ts ***!
  \**************************************/
/*! exports provided: SearchPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchPipe", function() { return SearchPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
////////////////////////////////////////////
/*
Pipe: SearchPipe
use: value | search: searchTerm : messageType
description: checks if a message contains a searchterm and  if it highlites it with the mark tag, it also excludes status messages
*/
//////////////////////////////////////////


class SearchPipe {
    transform(value, q, t) {
        if (value.includes(q) && t != 'status') {
            const mark = `<mark>${q}</mark>`;
            let regExp = new RegExp(q, 'g');
            value = value.replace(regExp, mark);
            return value;
        }
        else {
            return value;
        }
    }
}
SearchPipe.ɵfac = function SearchPipe_Factory(t) { return new (t || SearchPipe)(); };
SearchPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "search", type: SearchPipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SearchPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'search',
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/services/connect.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/connect.service.ts ***!
  \*********************************************/
/*! exports provided: ConnectService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConnectService", function() { return ConnectService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! socket.io-client */ "./node_modules/socket.io-client/lib/index.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");





class ConnectService {
    constructor(http) {
        this.http = http;
        this.socketUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].socketEndpoint;
        this.newSessionPath = '/new';
        this.socket = null;
    }
    ngOnInit() { }
    newSession() {
        return this.http.post(this.socketUrl + this.newSessionPath, {});
    }
    checkSession(id) {
        return this.http.get(this.socketUrl + '/session/' + id);
    }
    joinSession(id) {
        if (this.socket) {
            //check if there already is a socket if destroy it
            this.socket.close();
            this.socket = null;
        }
        const path = '/' + id;
        this.socket = socket_io_client__WEBPACK_IMPORTED_MODULE_2__(this.socketUrl, {
            //connect to socket and set reconnection settings
            path,
            reconnection: _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].reconnectSettings.reconnection,
            reconnectionDelay: _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].reconnectSettings.reconnectionDelay,
            reconnectionDelayMax: _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].reconnectSettings.reconnectionDelayMax,
            reconnectionAttempts: _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].reconnectSettings.reconnectionAttempts,
        });
        return this.socket;
    }
}
ConnectService.ɵfac = function ConnectService_Factory(t) { return new (t || ConnectService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"])); };
ConnectService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ConnectService, factory: ConnectService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ConnectService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/file-handler.service.ts":
/*!**************************************************!*\
  !*** ./src/app/services/file-handler.service.ts ***!
  \**************************************************/
/*! exports provided: FileHandlerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileHandlerService", function() { return FileHandlerService; });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
////////////////////////////////////////////////////
/*
Service: FileHandlerService
Description: This Service is used to handle uploaded files. It checks if they are valid and converts them to base64 strings
Interfaces:
  fileResult: stores the data of a processed file
    error: contains an error message if something went wrong
    isSaved: boolean is true when the file is succesfully converted
    dataBase64: contains the base 64 converted data
    name: contains the file name
    type: contains the fileType
      Can be Picture or Document
Functions:
  fileHandler:
    params:
      fileInput: file Input field value
      fileType: fileType
    returns:
      an Observable with the fileResults
*/
///////////////////////////////////////////////////




class FileHandlerService {
    constructor() { }
    fileHandler(fileInput, fileType) {
        let results = {
            //default file Results
            error: '',
            isSaved: false,
            dataBase64: '',
            name: '',
            type: fileType,
        };
        results.error = '';
        if (fileInput.target.files && fileInput.target.files[0]) {
            //Check if Files
            let max_size;
            let allowed_types;
            let forbidden_types;
            let max_height;
            let max_width;
            if (fileType == 'Picture') {
                //If Picture Set Picture limits
                // Size Filter Bytes
                max_size = _environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].pictureLimits.maxSize;
                allowed_types = _environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].pictureLimits.allowedTypes;
                max_height = _environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].pictureLimits.maxHeight;
                max_width = _environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].pictureLimits.maxWidth;
            }
            else if (fileType == 'Document') {
                //If document set document limits
                max_size = _environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].fileLimits.maxSize;
                forbidden_types = _environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].fileLimits.forbiddenTypes;
            }
            if (fileInput.target.files[0].size > max_size) {
                //Check for size
                results.error = 'Maximum size allowed is ' + max_size / 1000 + 'Mb';
                return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].create((observer) => {
                    observer.next(results);
                    observer.complete();
                });
            }
            if (fileType == 'Picture') {
                //Check allowed types when it is a picture
                if (!allowed_types.includes(fileInput.target.files[0].type)) {
                    results.error = `Only these FileTypes are allowd: ( ${allowed_types.toString()} )`;
                    return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].create((observer) => {
                        observer.next(results);
                        observer.complete();
                    });
                }
            }
            else if (fileType == 'Document') {
                //Check forbidden types when it is a document
                if (forbidden_types.includes(fileInput.target.files[0].type)) {
                    results.error = `Sorry these file types are forbidden: ( ${allowed_types.toString()} )`;
                    return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].create((observer) => {
                        observer.next(results);
                        observer.complete();
                    });
                }
            }
            results.name = fileInput.target.files[0].name; // set file name
            const reader = new FileReader();
            return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].create((observer) => {
                //create and return observable
                reader.onload = (e) => {
                    if (fileType == 'Picture') {
                        //make additional size checks when it is Picture
                        const image = new Image();
                        image.src = e.target.result;
                        image.onload = (rs) => {
                            const img_height = rs.currentTarget['height'];
                            const img_width = rs.currentTarget['width'];
                            if (img_height > max_height && img_width > max_width) {
                                results.error =
                                    'Maximum dimentions allowed ' +
                                        max_height +
                                        '*' +
                                        max_width +
                                        'px';
                                observer.next(results);
                                observer.complete();
                            }
                            else {
                                results.dataBase64 = e.target.result; //set base 64 data
                                results.isSaved = true;
                                observer.next(results);
                                observer.complete();
                            }
                        };
                    }
                    else if (fileType == 'Document') {
                        results.dataBase64 = e.target.result; //set base 64 data
                        results.isSaved = true;
                        observer.next(results);
                        observer.complete();
                    }
                };
                reader.readAsDataURL(fileInput.target.files[0]);
            });
        }
    }
}
FileHandlerService.ɵfac = function FileHandlerService_Factory(t) { return new (t || FileHandlerService)(); };
FileHandlerService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: FileHandlerService, factory: FileHandlerService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](FileHandlerService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/services/messages.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/messages.service.ts ***!
  \**********************************************/
/*! exports provided: MessagesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessagesService", function() { return MessagesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _store_app_state__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../store/app.state */ "./src/app/store/app.state.ts");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngxs/store */ "./node_modules/@ngxs/store/__ivy_ngcc__/fesm2015/ngxs-store.js");


////////////////////////////////////////////////////
/*
Service: MessagesService
Description: This Service is used to handle new messages. The session-messages component listens to the onUpdate observable to check for new messages

Types:
  ContentType: Used to describe which kind of Content is in a message
  messageType: Used to describe the origin of the message
Interfaces:
  MessageObject: contains the Message data
    message: the message
    messageId: number which identifies the message, is unique
    userId: Id of the sender
    userName: Name of the sender
    contentType: Type of the content
    base64Data: contains the file data when one is sent
    data: date currently not used
    type: contains the origin of the message / This is determined in the message service

Functions:
  addMessage(message: string): determines origin, formats message and pushes it to the messages array
  removeAllMessages(): emptys messages array
  scrollToId(id: number): calls scroll to element in the messages component (component listens to observable)
*/
///////////////////////////////////////////////////





class MessagesService {
    constructor() {
        this.userId = null;
        this.chunkQueue = [];
        this.onUpdate$$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]([]);
        this.onScrollToId$$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](0);
        this.messages = [];
        this.chunkMessageId = 0;
        this.receivingMessages = new Map();
        this.userId$.subscribe((uId) => {
            console.log('UID changed');
            this.userId = uId;
        });
    }
    get onUpdate$() {
        return this.onUpdate$$.asObservable();
    }
    get onScrollToId$() {
        return this.onScrollToId$$.asObservable();
    }
    addMessage(msg) {
        if (msg.userId === 'SERVER') {
            msg.type = 'status';
        }
        else if (msg.userId == this.userId) {
            msg.type = 'sender';
        }
        else {
            msg.type = 'receiver';
        }
        if (msg.contentType == 'Text') {
            msg = this.formatLink(msg);
        }
        this.messages.push(msg);
        this.onUpdate$$.next(this.messages);
    }
    sendMessage(socket, msg) {
        //sends messages and handles the file transmission
        this.chunkMessageId++;
        if (msg.base64Data.length > 1) {
            let chunkedData = this.chunkString(msg.base64Data, _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].chunkSize, this.userId + this.chunkMessageId, -1, this.userId);
            this.chunkQueue = this.chunkQueue.concat(chunkedData);
            msg.base64Data = this.userId + this.chunkMessageId;
            socket.emit(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].messageIdentifier, msg);
        }
        else {
            socket.emit(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].messageIdentifier, msg);
        }
    }
    chunkResponse(res, socket) {
        if ((res.res = 'next')) {
            if (this.chunkQueue.length >= 1) {
                socket.emit('chunkData', this.chunkQueue[0]);
                this.chunkQueue.shift();
            }
        }
    }
    newChunk(chunk, socket) {
        if (chunk.chunkType == 'start') {
            let msg = {
                //create message object
                message: status,
                messageId: -1,
                userId: '',
                userName: '',
                contentType: 'Text',
                base64Data: '',
            };
            Object.assign(msg, this.getMessagebyId(Number(chunk.parentMessageId)));
            // console.log(msg);
            msg.base64Data = chunk.chunkData;
            this.receivingMessages.set(chunk.chunkID, msg);
        }
        else if (chunk.chunkType == 'middle') {
            let msg = this.receivingMessages.get(chunk.chunkID);
            msg.base64Data += chunk.chunkData;
            this.receivingMessages.set(chunk.chunkID, msg);
        }
        else if (chunk.chunkType == 'end') {
            let msg = this.receivingMessages.get(chunk.chunkID);
            msg.base64Data += chunk.chunkData;
            this.messages[this.getMessageIndexbyId(Number(chunk.parentMessageId))] = msg;
            this.receivingMessages.delete(chunk.chunkID);
            console.log(msg);
            return;
        }
        let msg = this.receivingMessages.get(chunk.chunkID);
        const cres = {
            res: 'next',
            lastChunkIndex: chunk.chunkIndex,
            parentMessageId: chunk.parentMessageId,
            senderId: this.userId,
        };
        socket.emit('chunkResponse', cres);
    }
    removeAllMessages() {
        this.messages = [];
        this.onUpdate$$.next(this.messages);
    }
    scrollToId(id) {
        this.onScrollToId$$.next(id);
    }
    chunkString(str, len, chunkId, messageId, senderId) {
        //splits string into chunks
        const size = Math.ceil(str.length / len);
        const r = Array(size);
        let offset = 0;
        for (let i = 0; i < size; i++) {
            r[i] = {
                chunkData: str.substr(offset, len),
                chunkType: 'middle',
                chunkID: chunkId,
                senderId: senderId,
                chunkIndex: i,
                parentMessageId: messageId,
            };
            offset += len;
        }
        if (r.length == 1) {
            r.push({
                chunkData: '',
                chunkID: chunkId,
                chunkType: 'end',
                senderId: senderId,
                chunkIndex: 1,
                parentMessageId: messageId,
            });
        }
        r[0].chunkType = 'start';
        r[r.length - 1].chunkType = 'end';
        return r;
    }
    getMessageIndexbyId(id) {
        //loops message array and checks if message matches id, returns the index when found
        for (let i = 0; i < this.messages.length; i++) {
            if (this.messages[i].messageId == id) {
                return i;
            }
        }
    }
    getMessagebyId(id) {
        //loops message array and checks if message matches id, returns the message when found
        for (let i = 0; i < this.messages.length; i++) {
            if (this.messages[i].messageId == id) {
                return this.messages[i];
            }
        }
    }
    ngOnDestroy() {
        this.onUpdate$$.complete();
    }
    formatLink(msg) {
        //formats a link to make it clickable
        const text = msg.message;
        if (this.isUrl(text)) {
            msg.message = `<a href="${text}" target="_blank">${text}</a>`;
        }
        return msg;
    }
    isUrl(url) {
        //Checks if message is a url
        let pattern = new RegExp('^(https?:\\/\\/)?' + // https protocol
            '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
            '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
            '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
            '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
            '(\\#[-a-z\\d_]*)?$', 'i'); // fragment locator
        return !!pattern.test(url);
    }
}
MessagesService.ɵfac = function MessagesService_Factory(t) { return new (t || MessagesService)(); };
MessagesService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: MessagesService, factory: MessagesService.ɵfac, providedIn: 'root' });
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_5__["Select"])(_store_app_state__WEBPACK_IMPORTED_MODULE_4__["AppState"].userId)
], MessagesService.prototype, "userId$", void 0);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](MessagesService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return []; }, { userId$: [] }); })();


/***/ }),

/***/ "./src/app/services/user-alert.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/user-alert.service.ts ***!
  \************************************************/
/*! exports provided: UserAlertService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserAlertService", function() { return UserAlertService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
////////////////////////////////////////////////////
/*
Service: UserAlertService
Description: This Service is used to Display User Alerts

Interfaces:
UserAlertObject: contains the data for an useralert
  alert: the alert
  type: type of alert - affects only the color when displayed

Functions:
setUserAlert(alert: string, type: USerAlertTypes) //set the alert data and emits an new alert to the observable
*/
///////////////////////////////////////////////////



class UserAlertService {
    constructor() {
        this.alertData = {
            alert: '',
            type: 'error',
        };
        this.onUpdate$$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](this.alertData);
    }
    get onUpdate$() {
        return this.onUpdate$$.asObservable();
    }
    setUserAlert(text, type) {
        this.alertData.alert = text;
        this.alertData.type = type;
        this.onUpdate$$.next(this.alertData);
    }
}
UserAlertService.ɵfac = function UserAlertService_Factory(t) { return new (t || UserAlertService)(); };
UserAlertService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: UserAlertService, factory: UserAlertService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserAlertService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/store/app.action.ts":
/*!*************************************!*\
  !*** ./src/app/store/app.action.ts ***!
  \*************************************/
/*! exports provided: SetUserId, SetSessionId, SetUserName, SetUserInSession, SetSearchTerm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetUserId", function() { return SetUserId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetSessionId", function() { return SetSessionId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetUserName", function() { return SetUserName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetUserInSession", function() { return SetUserInSession; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetSearchTerm", function() { return SetSearchTerm; });
class SetUserId {
    constructor(userId) {
        this.userId = userId;
    }
}
SetUserId.type = 'SetUserId';
class SetSessionId {
    constructor(sessionId) {
        this.sessionId = sessionId;
    }
}
SetSessionId.type = 'SetSessionId';
class SetUserName {
    constructor(userName) {
        this.userName = userName;
    }
}
SetUserName.type = 'SetUserName';
class SetUserInSession {
    constructor(userInSession) {
        this.userInSession = userInSession;
    }
}
SetUserInSession.type = 'SetUserInSession';
class SetSearchTerm {
    constructor(searchTerm) {
        this.searchTerm = searchTerm;
    }
}
SetSearchTerm.type = 'SetSearchTerm';


/***/ }),

/***/ "./src/app/store/app.state.ts":
/*!************************************!*\
  !*** ./src/app/store/app.state.ts ***!
  \************************************/
/*! exports provided: AppState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppState", function() { return AppState; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngxs/store */ "./node_modules/@ngxs/store/__ivy_ngcc__/fesm2015/ngxs-store.js");
/* harmony import */ var _app_action__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.action */ "./src/app/store/app.action.ts");
//////Use
/*
  @Select(AppState.userId)
  userId$;

  ngOninit:
    this.userId$.subscribe((userId: string) => {
      this.userId = userId;
    });

  Set:
  constructor: private store: Store

  this.store.dispatch(new SetUserId(x));
*/




let AppState = class AppState {
    static userId(state) {
        return state.userId;
    }
    setUserId(context, action) {
        context.patchState({
            userId: action.userId,
        });
    }
    static sessionId(state) {
        return state.sessionId;
    }
    setSessionId(context, action) {
        context.patchState({
            sessionId: action.sessionId,
        });
    }
    static userName(state) {
        return state.userName;
    }
    setUserName(context, action) {
        context.patchState({
            userName: action.userName,
        });
    }
    static userInSession(state) {
        return state.userInSession;
    }
    setUserInSession(context, action) {
        context.patchState({
            userInSession: action.userInSession,
        });
    }
    static searchTerm(state) {
        return state.searchTerm;
    }
    setSearchTerm(context, action) {
        context.patchState({
            searchTerm: action.searchTerm,
        });
    }
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Action"])(_app_action__WEBPACK_IMPORTED_MODULE_2__["SetUserId"])
], AppState.prototype, "setUserId", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Action"])(_app_action__WEBPACK_IMPORTED_MODULE_2__["SetSessionId"])
], AppState.prototype, "setSessionId", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Action"])(_app_action__WEBPACK_IMPORTED_MODULE_2__["SetUserName"])
], AppState.prototype, "setUserName", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Action"])(_app_action__WEBPACK_IMPORTED_MODULE_2__["SetUserInSession"])
], AppState.prototype, "setUserInSession", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Action"])(_app_action__WEBPACK_IMPORTED_MODULE_2__["SetSearchTerm"])
], AppState.prototype, "setSearchTerm", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Selector"])()
], AppState, "userId", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Selector"])()
], AppState, "sessionId", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Selector"])()
], AppState, "userName", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Selector"])()
], AppState, "userInSession", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Selector"])()
], AppState, "searchTerm", null);
AppState = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["State"])({
        name: 'appState',
        defaults: {
            userId: null,
            sessionId: '0000',
            userName: null,
            userInSession: new Map(),
            searchTerm: 'this',
        },
    })
], AppState);



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
    production: false,
    socketEndpoint: 'https://transfertube.herokuapp.com',
    messageIdentifier: 'chat message',
    maxMessageLength: 10000,
    userAlertTimeout: 3000,
    chunkSize: 100000,
    reconnectSettings: {
        reconnection: true,
        reconnectionDelay: 500,
        reconnectionDelayMax: 5000,
        reconnectionAttempts: 5,
    },
    pictureLimits: {
        maxSize: 10485760,
        allowedTypes: ['image/png', 'image/jpeg'],
        maxHeight: 15200,
        maxWidth: 25600,
    },
    fileLimits: {
        maxSize: 104857600,
        forbiddenTypes: [],
    },
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

module.exports = __webpack_require__(/*! C:\Users\juliu\Webseiten\DeviceConnect\DeviceConnect-frontend\src\main.ts */"./src/main.ts");


/***/ }),

/***/ 1:
/*!********************!*\
  !*** ws (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map