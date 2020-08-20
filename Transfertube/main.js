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
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
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
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



























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
            _ngxs_logger_plugin__WEBPACK_IMPORTED_MODULE_7__["NgxsLoggerPluginModule"].forRoot(),
            _ngxs_devtools_plugin__WEBPACK_IMPORTED_MODULE_8__["NgxsReduxDevtoolsPluginModule"].forRoot(),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
        _pages_landing_landing_component__WEBPACK_IMPORTED_MODULE_9__["LandingComponent"],
        _pages_session_session_component__WEBPACK_IMPORTED_MODULE_12__["SessionComponent"],
        _components_session_messages_session_messages_component__WEBPACK_IMPORTED_MODULE_13__["SessionMessagesComponent"],
        _components_session_messages_text_field_session_messages_text_field_component__WEBPACK_IMPORTED_MODULE_14__["SessionMessagesTextFieldComponent"],
        _components_join_session_join_session_component__WEBPACK_IMPORTED_MODULE_15__["JoinSessionComponent"],
        _components_create_session_create_session_component__WEBPACK_IMPORTED_MODULE_16__["CreateSessionComponent"],
        _components_sessionmenu_sessionmenu_component__WEBPACK_IMPORTED_MODULE_18__["SessionmenuComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"], _ngxs_store__WEBPACK_IMPORTED_MODULE_6__["ɵj"], _ngxs_logger_plugin__WEBPACK_IMPORTED_MODULE_7__["NgxsLoggerPluginModule"], _ngxs_devtools_plugin__WEBPACK_IMPORTED_MODULE_8__["NgxsReduxDevtoolsPluginModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientModule"],
        _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_17__["FontAwesomeModule"], _ngxs_store__WEBPACK_IMPORTED_MODULE_6__["ɵj"], _ngxs_logger_plugin__WEBPACK_IMPORTED_MODULE_7__["NgxsLoggerPluginModule"], _ngxs_devtools_plugin__WEBPACK_IMPORTED_MODULE_8__["NgxsReduxDevtoolsPluginModule"]] }); })();
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
                    _ngxs_logger_plugin__WEBPACK_IMPORTED_MODULE_7__["NgxsLoggerPluginModule"].forRoot(),
                    _ngxs_devtools_plugin__WEBPACK_IMPORTED_MODULE_8__["NgxsReduxDevtoolsPluginModule"].forRoot(),
                ],
                providers: [_services_connect_service__WEBPACK_IMPORTED_MODULE_1__["ConnectService"]],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]],
            }]
    }], null, null); })();
_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetComponentScope"](_pages_session_session_component__WEBPACK_IMPORTED_MODULE_12__["SessionComponent"], [_angular_common__WEBPACK_IMPORTED_MODULE_19__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_19__["NgComponentOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_19__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_19__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_19__["NgTemplateOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_19__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_19__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_19__["NgSwitchCase"], _angular_common__WEBPACK_IMPORTED_MODULE_19__["NgSwitchDefault"], _angular_common__WEBPACK_IMPORTED_MODULE_19__["NgPlural"], _angular_common__WEBPACK_IMPORTED_MODULE_19__["NgPluralCase"], _angular_router__WEBPACK_IMPORTED_MODULE_20__["RouterOutlet"], _angular_router__WEBPACK_IMPORTED_MODULE_20__["RouterLink"], _angular_router__WEBPACK_IMPORTED_MODULE_20__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_20__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_20__["ɵangular_packages_router_router_l"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ɵangular_packages_forms_forms_x"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["RangeValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["CheckboxControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["SelectMultipleControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["RadioControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["MinLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["MaxLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["PatternValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["CheckboxRequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["EmailValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgModelGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgForm"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_17__["FaIconComponent"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_17__["FaDuotoneIconComponent"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_17__["FaLayersComponent"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_17__["FaLayersTextComponent"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_17__["FaLayersCounterComponent"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_17__["FaStackComponent"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_17__["FaStackItemSizeDirective"], _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
    _pages_landing_landing_component__WEBPACK_IMPORTED_MODULE_9__["LandingComponent"],
    _pages_session_session_component__WEBPACK_IMPORTED_MODULE_12__["SessionComponent"],
    _components_session_messages_session_messages_component__WEBPACK_IMPORTED_MODULE_13__["SessionMessagesComponent"],
    _components_session_messages_text_field_session_messages_text_field_component__WEBPACK_IMPORTED_MODULE_14__["SessionMessagesTextFieldComponent"],
    _components_join_session_join_session_component__WEBPACK_IMPORTED_MODULE_15__["JoinSessionComponent"],
    _components_create_session_create_session_component__WEBPACK_IMPORTED_MODULE_16__["CreateSessionComponent"],
    _components_sessionmenu_sessionmenu_component__WEBPACK_IMPORTED_MODULE_18__["SessionmenuComponent"]], [_angular_common__WEBPACK_IMPORTED_MODULE_19__["AsyncPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_19__["UpperCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_19__["LowerCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_19__["JsonPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_19__["SlicePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_19__["DecimalPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_19__["PercentPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_19__["TitleCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_19__["CurrencyPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_19__["DatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_19__["I18nPluralPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_19__["I18nSelectPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_19__["KeyValuePipe"]]);


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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");





class CreateSessionComponent {
    constructor(connectService, router) {
        this.connectService = connectService;
        this.router = router;
    }
    ngOnInit() { }
    createSession() {
        this.connectService.newSession().subscribe((res) => {
            this.router.navigate(['session', res.sessionId]);
        });
    }
}
CreateSessionComponent.ɵfac = function CreateSessionComponent_Factory(t) { return new (t || CreateSessionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_connect_service__WEBPACK_IMPORTED_MODULE_1__["ConnectService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
CreateSessionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CreateSessionComponent, selectors: [["app-create-session"]], decls: 4, vars: 0, consts: [[1, "create-session-container"], [3, "ngSubmit"], ["type", "submit"]], template: function CreateSessionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function CreateSessionComponent_Template_form_ngSubmit_1_listener() { return ctx.createSession(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Create new Session");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"]], styles: [".create-session-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  margin: 1.5em;\n  background: linear-gradient(149deg, #ff0055 0%, #00294f 90%);\n  box-shadow: 4px 4px 5px #000;\n  border: 0;\n  padding: 20px;\n  font-size: 1.5em;\n  border-radius: 20px;\n  color: #eeeeee;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jcmVhdGUtc2Vzc2lvbi9jcmVhdGUtc2Vzc2lvbi5jb21wb25lbnQuc2NzcyIsInNyYy9zY3NzL192YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHRTtFQUNFLGFBQUE7RUNTRiw0REFBQTtFQWlDQSw0QkF6QmM7RUEwQmQsU0FBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FuRGlCO0FEU25CIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9jcmVhdGUtc2Vzc2lvbi9jcmVhdGUtc2Vzc2lvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuL3NyYy9zY3NzL3ZhcmlhYmxlc1wiO1xyXG5cclxuLmNyZWF0ZS1zZXNzaW9uLWNvbnRhaW5lciB7XHJcbiAgYnV0dG9uIHtcclxuICAgIG1hcmdpbjogMS41ZW07XHJcbiAgICBAaW5jbHVkZSBidXR0b24tYmFja2dyb3VuZCgxNDlkZWcpO1xyXG4gICAgQGluY2x1ZGUgYnV0dG9uLXN0eWxlKCk7XHJcbiAgfVxyXG59XHJcbiIsIiRsaWdodC10ZXh0LWNvbG9yOiByZ2IoMjM4LCAyMzgsIDIzOCk7XHJcblxyXG4kZGFyay10ZXh0LWNvbG9yOiAjMDAwO1xyXG5cclxuJGFjY2VudDE6ICMwMDA4NTA7XHJcblxyXG4kYWNjZW50MjogI2ZmNjkyODtcclxuXHJcbiRhY2NlbnQzOiByZ2IoMTUzLCAwLCAyMjQpO1xyXG5cclxuJHVzZXItaWNvbi1jb2xvcjogbGluZWFyLWdyYWRpZW50KDQwLjI3ZGVnLCAjMDBmZmEzIDAlLCAjOTU5NWZmIDEwMCUpO1xyXG5cclxuQG1peGluIGJ1dHRvbi1iYWNrZ3JvdW5kKCRhbmdsZSkge1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgkYW5nbGUsICNmZjAwNTUgMCUsICMwMDI5NGYgOTAlKTtcclxufVxyXG5cclxuJGlucHV0LWZpZWxkMS1jb2xvcjogIzAwNWZiODtcclxuJGlucHV0LWZpZWxkMi1jb2xvcjogIzAwNjljYztcclxuJGlucHV0LWZpZWxkMy1jb2xvcjogIzAwNzRlMDtcclxuJGlucHV0LWZpZWxkNC1jb2xvcjogIzAwN2VmNTtcclxuXHJcbiRidXR0b24tc2hhZG93OiA0cHggNHB4IDVweCAjMDAwO1xyXG5cclxuJG1lc3NhZ2UtYmFja2dyb3VuZC1jb2xvci1zZW5kZXI6IHJnYigxNzcsIDI1NSwgMTkwKTtcclxuJG1lc3NhZ2UtYmFja2dyb3VuZC1jb2xvci1yZWNlaXZlcjogcmdiKDI1MywgMjU1LCAyMjQpO1xyXG4kbWVzc2FnZS1iYWNrZ3JvdW5kLWNvbG9yLXN0YXR1czogcmdiKDEwMywgMjEyLCAyNTUpO1xyXG5cclxuQG1peGluIGJhY2tncm91bmQoKSB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCAjMDAwODUwIDAlLCAjMDAwMzIwIDEwMCUpLFxyXG4gICAgcmFkaWFsLWdyYWRpZW50KDEwMCUgMjI1JSBhdCAxMDAlIDAlLCAjZmY2OTI4IDAlLCAjMDAwMDAwIDEwMCUpLFxyXG4gICAgbGluZWFyLWdyYWRpZW50KDIyNWRlZywgI2ZmN2EwMCAwJSwgIzAwMDAwMCAxMDAlKSxcclxuICAgIGxpbmVhci1ncmFkaWVudChcclxuICAgICAgMTM1ZGVnLFxyXG4gICAgICAjY2RmZmViIDEwJSxcclxuICAgICAgI2NkZmZlYiAzNSUsXHJcbiAgICAgICMwMDlmOWQgMzUlLFxyXG4gICAgICAjMDA5ZjlkIDYwJSxcclxuICAgICAgIzA3NDU2ZiA2MCUsXHJcbiAgICAgICMwNzQ1NmYgNjclLFxyXG4gICAgICAjMGYwYTNjIDY3JSxcclxuICAgICAgIzBmMGEzYyAxMDAlXHJcbiAgICApO1xyXG4gIGJhY2tncm91bmQtYmxlbmQtbW9kZTogc2NyZWVuLCBvdmVybGF5LCBoYXJkLWxpZ2h0LCBub3JtYWw7XHJcbn1cclxuXHJcbkBtaXhpbiBidXR0b24tc3R5bGUoKSB7XHJcbiAgYm94LXNoYWRvdzogJGJ1dHRvbi1zaGFkb3c7XHJcbiAgYm9yZGVyOiAwO1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbiAgZm9udC1zaXplOiAxLjVlbTtcclxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gIGNvbG9yOiAkbGlnaHQtdGV4dC1jb2xvcjtcclxufVxyXG5cclxuJG1lZGlhLWJyZWFrcG9pbnQtbWVkaXVtOiAxMDAwcHg7XHJcbiRtZWRpYS1icmVha3BvaW50LXNtYWxsOiA2NTBweDtcclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CreateSessionComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-create-session',
                templateUrl: './create-session.component.html',
                styleUrls: ['./create-session.component.scss'],
            }]
    }], function () { return [{ type: _services_connect_service__WEBPACK_IMPORTED_MODULE_1__["ConnectService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


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




class JoinSessionComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() { }
    joinSession(id) {
        if (id.length == 4) {
            id = id.toUpperCase();
            this.router.navigate(['session', id]);
        }
    }
    inputKey(event) {
        if (event.key === 'Backspace') {
            let element = event.srcElement.previousElementSibling; // get the sibling element
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
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"]], styles: [".join-session-container[_ngcontent-%COMP%] {\n  margin: 1.5em;\n}\n.join-session-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-flow: column;\n}\n.join-session-container[_ngcontent-%COMP%]   .input-field-container[_ngcontent-%COMP%] {\n  margin: 5px 0 20px 0;\n}\n.join-session-container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n  margin: 5px;\n  height: 1.5em;\n  width: 1em;\n  text-align: center;\n  font-size: 2.8em;\n  border: none;\n  border-radius: 15px;\n  box-shadow: 4px 4px 5px #000;\n  color: #eeeeee;\n}\n.join-session-container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:nth-child(1) {\n  background: #005fb8;\n}\n.join-session-container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:nth-child(2) {\n  background: #0069cc;\n}\n.join-session-container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:nth-child(3) {\n  background: #0074e0;\n}\n.join-session-container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:nth-child(4) {\n  background: #007ef5;\n}\n.join-session-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  background: linear-gradient(320deg, #ff0055 0%, #00294f 90%);\n  box-shadow: 4px 4px 5px #000;\n  border: 0;\n  padding: 20px;\n  font-size: 1.5em;\n  border-radius: 20px;\n  color: #eeeeee;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9qb2luLXNlc3Npb24vam9pbi1zZXNzaW9uLmNvbXBvbmVudC5zY3NzIiwic3JjL3Njc3MvX3ZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsYUFBQTtBQURGO0FBR0U7RUFDRSxhQUFBO0VBQ0EsaUJBQUE7QUFESjtBQUlFO0VBQ0Usb0JBQUE7QUFGSjtBQUtFO0VBQ0UseUJBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsNEJDRlk7RURHWixjQ3hCZTtBRHFCbkI7QUFNRTtFQUNFLG1CQ1ppQjtBRFFyQjtBQU1FO0VBQ0UsbUJDZGlCO0FEVXJCO0FBTUU7RUFDRSxtQkNoQmlCO0FEWXJCO0FBTUU7RUFDRSxtQkNsQmlCO0FEY3JCO0FBT0U7RUMzQkEsNERBQUE7RUFpQ0EsNEJBekJjO0VBMEJkLFNBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGNBbkRpQjtBRDBDbkIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2pvaW4tc2Vzc2lvbi9qb2luLXNlc3Npb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi9zcmMvc2Nzcy92YXJpYWJsZXNcIjtcclxuXHJcbi5qb2luLXNlc3Npb24tY29udGFpbmVyIHtcclxuICBtYXJnaW46IDEuNWVtO1xyXG5cclxuICBmb3JtIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWZsb3c6IGNvbHVtbjtcclxuICB9XHJcblxyXG4gIC5pbnB1dC1maWVsZC1jb250YWluZXIge1xyXG4gICAgbWFyZ2luOiA1cHggMCAyMHB4IDA7XHJcbiAgfVxyXG5cclxuICBpbnB1dCB7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgbWFyZ2luOiA1cHg7XHJcbiAgICBoZWlnaHQ6IDEuNWVtO1xyXG4gICAgd2lkdGg6IDFlbTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMi44ZW07XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gICAgYm94LXNoYWRvdzogJGJ1dHRvbi1zaGFkb3c7XHJcbiAgICBjb2xvcjogJGxpZ2h0LXRleHQtY29sb3I7XHJcbiAgfVxyXG5cclxuICBpbnB1dDpudGgtY2hpbGQoMSkge1xyXG4gICAgYmFja2dyb3VuZDogJGlucHV0LWZpZWxkMS1jb2xvcjtcclxuICB9XHJcbiAgaW5wdXQ6bnRoLWNoaWxkKDIpIHtcclxuICAgIGJhY2tncm91bmQ6ICRpbnB1dC1maWVsZDItY29sb3I7XHJcbiAgfVxyXG4gIGlucHV0Om50aC1jaGlsZCgzKSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAkaW5wdXQtZmllbGQzLWNvbG9yO1xyXG4gIH1cclxuICBpbnB1dDpudGgtY2hpbGQoNCkge1xyXG4gICAgYmFja2dyb3VuZDogJGlucHV0LWZpZWxkNC1jb2xvcjtcclxuICB9XHJcblxyXG4gIGJ1dHRvbiB7XHJcbiAgICBAaW5jbHVkZSBidXR0b24tYmFja2dyb3VuZCgzMjBkZWcpO1xyXG4gICAgQGluY2x1ZGUgYnV0dG9uLXN0eWxlKCk7XHJcbiAgfVxyXG59XHJcbiIsIiRsaWdodC10ZXh0LWNvbG9yOiByZ2IoMjM4LCAyMzgsIDIzOCk7XHJcblxyXG4kZGFyay10ZXh0LWNvbG9yOiAjMDAwO1xyXG5cclxuJGFjY2VudDE6ICMwMDA4NTA7XHJcblxyXG4kYWNjZW50MjogI2ZmNjkyODtcclxuXHJcbiRhY2NlbnQzOiByZ2IoMTUzLCAwLCAyMjQpO1xyXG5cclxuJHVzZXItaWNvbi1jb2xvcjogbGluZWFyLWdyYWRpZW50KDQwLjI3ZGVnLCAjMDBmZmEzIDAlLCAjOTU5NWZmIDEwMCUpO1xyXG5cclxuQG1peGluIGJ1dHRvbi1iYWNrZ3JvdW5kKCRhbmdsZSkge1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgkYW5nbGUsICNmZjAwNTUgMCUsICMwMDI5NGYgOTAlKTtcclxufVxyXG5cclxuJGlucHV0LWZpZWxkMS1jb2xvcjogIzAwNWZiODtcclxuJGlucHV0LWZpZWxkMi1jb2xvcjogIzAwNjljYztcclxuJGlucHV0LWZpZWxkMy1jb2xvcjogIzAwNzRlMDtcclxuJGlucHV0LWZpZWxkNC1jb2xvcjogIzAwN2VmNTtcclxuXHJcbiRidXR0b24tc2hhZG93OiA0cHggNHB4IDVweCAjMDAwO1xyXG5cclxuJG1lc3NhZ2UtYmFja2dyb3VuZC1jb2xvci1zZW5kZXI6IHJnYigxNzcsIDI1NSwgMTkwKTtcclxuJG1lc3NhZ2UtYmFja2dyb3VuZC1jb2xvci1yZWNlaXZlcjogcmdiKDI1MywgMjU1LCAyMjQpO1xyXG4kbWVzc2FnZS1iYWNrZ3JvdW5kLWNvbG9yLXN0YXR1czogcmdiKDEwMywgMjEyLCAyNTUpO1xyXG5cclxuQG1peGluIGJhY2tncm91bmQoKSB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCAjMDAwODUwIDAlLCAjMDAwMzIwIDEwMCUpLFxyXG4gICAgcmFkaWFsLWdyYWRpZW50KDEwMCUgMjI1JSBhdCAxMDAlIDAlLCAjZmY2OTI4IDAlLCAjMDAwMDAwIDEwMCUpLFxyXG4gICAgbGluZWFyLWdyYWRpZW50KDIyNWRlZywgI2ZmN2EwMCAwJSwgIzAwMDAwMCAxMDAlKSxcclxuICAgIGxpbmVhci1ncmFkaWVudChcclxuICAgICAgMTM1ZGVnLFxyXG4gICAgICAjY2RmZmViIDEwJSxcclxuICAgICAgI2NkZmZlYiAzNSUsXHJcbiAgICAgICMwMDlmOWQgMzUlLFxyXG4gICAgICAjMDA5ZjlkIDYwJSxcclxuICAgICAgIzA3NDU2ZiA2MCUsXHJcbiAgICAgICMwNzQ1NmYgNjclLFxyXG4gICAgICAjMGYwYTNjIDY3JSxcclxuICAgICAgIzBmMGEzYyAxMDAlXHJcbiAgICApO1xyXG4gIGJhY2tncm91bmQtYmxlbmQtbW9kZTogc2NyZWVuLCBvdmVybGF5LCBoYXJkLWxpZ2h0LCBub3JtYWw7XHJcbn1cclxuXHJcbkBtaXhpbiBidXR0b24tc3R5bGUoKSB7XHJcbiAgYm94LXNoYWRvdzogJGJ1dHRvbi1zaGFkb3c7XHJcbiAgYm9yZGVyOiAwO1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbiAgZm9udC1zaXplOiAxLjVlbTtcclxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gIGNvbG9yOiAkbGlnaHQtdGV4dC1jb2xvcjtcclxufVxyXG5cclxuJG1lZGlhLWJyZWFrcG9pbnQtbWVkaXVtOiAxMDAwcHg7XHJcbiRtZWRpYS1icmVha3BvaW50LXNtYWxsOiA2NTBweDtcclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](JoinSessionComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-join-session',
                templateUrl: './join-session.component.html',
                styleUrls: ['./join-session.component.scss'],
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/__ivy_ngcc__/fesm2015/angular-fontawesome.js");





class SessionMessagesTextFieldComponent {
    constructor() {
        this.newMessageChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.faArrowRight = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faArrowRight"];
    }
    ngOnInit() { }
    sendMessage(msg) {
        this.textMessage = '';
        this.newMessageChange.emit(msg);
    }
}
SessionMessagesTextFieldComponent.ɵfac = function SessionMessagesTextFieldComponent_Factory(t) { return new (t || SessionMessagesTextFieldComponent)(); };
SessionMessagesTextFieldComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SessionMessagesTextFieldComponent, selectors: [["app-session-messages-text-field"]], outputs: { newMessageChange: "newMessageChange" }, decls: 5, vars: 2, consts: [[1, "messages-text-field-container"], [3, "ngSubmit"], ["name", "msgField", "autocomplete", "off", 3, "ngModel", "ngModelChange"], ["type", "submit"], [3, "icon"]], template: function SessionMessagesTextFieldComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function SessionMessagesTextFieldComponent_Template_form_ngSubmit_1_listener() { return ctx.sendMessage(ctx.textMessage); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SessionMessagesTextFieldComponent_Template_input_ngModelChange_2_listener($event) { return ctx.textMessage = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "fa-icon", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.textMessage);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faArrowRight);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FaIconComponent"]], styles: [".messages-text-field-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-flow: column;\n  flex-direction: column;\n  align-items: center;\n}\n.messages-text-field-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\n  margin: 15px 0;\n  position: fixed;\n  bottom: 0;\n  width: 50%;\n}\n.messages-text-field-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  line-height: 1.2em;\n  font-size: 1.2em;\n  border: 0;\n  padding: 10px;\n  width: 85%;\n  border-top-left-radius: 15px;\n  border-bottom-left-radius: 15px;\n  box-shadow: 4px 4px 5px #000;\n}\n.messages-text-field-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  line-height: 1.2em;\n  font-size: 1.2em;\n  color: #eeeeee;\n  width: 11%;\n  background: #82e0ff;\n  border: none;\n  padding: 10px;\n  border-top-right-radius: 15px;\n  border-bottom-right-radius: 15px;\n  box-shadow: 4px 4px 5px #000;\n  background: linear-gradient(210deg, #ff0055 0%, #00294f 90%);\n}\n@media screen and (max-width: 1000px) {\n  .messages-text-field-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\n    width: 80%;\n  }\n}\n@media screen and (max-width: 650px) {\n  .messages-text-field-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\n    width: 95%;\n  }\n  .messages-text-field-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n    width: 80%;\n  }\n  .messages-text-field-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    min-width: 2.5em;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zZXNzaW9uLW1lc3NhZ2VzLXRleHQtZmllbGQvc2Vzc2lvbi1tZXNzYWdlcy10ZXh0LWZpZWxkLmNvbXBvbmVudC5zY3NzIiwic3JjL3Njc3MvX3ZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsYUFBQTtFQUNBLGlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtBQURGO0FBSUU7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0FBRko7QUFLRTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxTQUFBO0VBQ0EsYUFBQTtFQUNBLFVBQUE7RUFDQSw0QkFmYztFQWdCZCwrQkFoQmM7RUFpQmQsNEJDSFk7QURBaEI7QUFNRTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQzlCZTtFRCtCZixVQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLDZCQTVCYztFQTZCZCxnQ0E3QmM7RUE4QmQsNEJDaEJZO0VBUmQsNERBQUE7QURxQkY7QUFPRTtFQUNFO0lBQ0UsVUFBQTtFQUxKO0FBQ0Y7QUFRRTtFQUNFO0lBQ0UsVUFBQTtFQU5KO0VBUUk7SUFDRSxVQUFBO0VBTk47RUFTSTtJQUNFLGdCQUFBO0VBUE47QUFDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2Vzc2lvbi1tZXNzYWdlcy10ZXh0LWZpZWxkL3Nlc3Npb24tbWVzc2FnZXMtdGV4dC1maWVsZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuL3NyYy9zY3NzL3ZhcmlhYmxlc1wiO1xyXG5cclxuLm1lc3NhZ2VzLXRleHQtZmllbGQtY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZmxvdzogY29sdW1uO1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAkYm9yZGVyLXJhZGl1czogMTVweDtcclxuXHJcbiAgZm9ybSB7XHJcbiAgICBtYXJnaW46IDE1cHggMDtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgfVxyXG5cclxuICBmb3JtIGlucHV0IHtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjJlbTtcclxuICAgIGZvbnQtc2l6ZTogMS4yZW07XHJcbiAgICBib3JkZXI6IDA7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgd2lkdGg6IDg1JTtcclxuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6ICRib3JkZXItcmFkaXVzO1xyXG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogJGJvcmRlci1yYWRpdXM7XHJcbiAgICBib3gtc2hhZG93OiAkYnV0dG9uLXNoYWRvdztcclxuICB9XHJcblxyXG4gIGZvcm0gYnV0dG9uIHtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjJlbTtcclxuICAgIGZvbnQtc2l6ZTogMS4yZW07XHJcbiAgICBjb2xvcjogJGxpZ2h0LXRleHQtY29sb3I7XHJcbiAgICB3aWR0aDogMTElO1xyXG4gICAgYmFja2dyb3VuZDogcmdiKDEzMCwgMjI0LCAyNTUpO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAkYm9yZGVyLXJhZGl1cztcclxuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAkYm9yZGVyLXJhZGl1cztcclxuICAgIGJveC1zaGFkb3c6ICRidXR0b24tc2hhZG93O1xyXG4gICAgQGluY2x1ZGUgYnV0dG9uLWJhY2tncm91bmQoMjEwZGVnKTtcclxuICB9XHJcblxyXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6ICRtZWRpYS1icmVha3BvaW50LW1lZGl1bSkge1xyXG4gICAgZm9ybSB7XHJcbiAgICAgIHdpZHRoOiA4MCU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAkbWVkaWEtYnJlYWtwb2ludC1zbWFsbCkge1xyXG4gICAgZm9ybSB7XHJcbiAgICAgIHdpZHRoOiA5NSU7XHJcblxyXG4gICAgICBpbnB1dCB7XHJcbiAgICAgICAgd2lkdGg6IDgwJTtcclxuICAgICAgfVxyXG5cclxuICAgICAgYnV0dG9uIHtcclxuICAgICAgICBtaW4td2lkdGg6IDIuNWVtO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsIiRsaWdodC10ZXh0LWNvbG9yOiByZ2IoMjM4LCAyMzgsIDIzOCk7XHJcblxyXG4kZGFyay10ZXh0LWNvbG9yOiAjMDAwO1xyXG5cclxuJGFjY2VudDE6ICMwMDA4NTA7XHJcblxyXG4kYWNjZW50MjogI2ZmNjkyODtcclxuXHJcbiRhY2NlbnQzOiByZ2IoMTUzLCAwLCAyMjQpO1xyXG5cclxuJHVzZXItaWNvbi1jb2xvcjogbGluZWFyLWdyYWRpZW50KDQwLjI3ZGVnLCAjMDBmZmEzIDAlLCAjOTU5NWZmIDEwMCUpO1xyXG5cclxuQG1peGluIGJ1dHRvbi1iYWNrZ3JvdW5kKCRhbmdsZSkge1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgkYW5nbGUsICNmZjAwNTUgMCUsICMwMDI5NGYgOTAlKTtcclxufVxyXG5cclxuJGlucHV0LWZpZWxkMS1jb2xvcjogIzAwNWZiODtcclxuJGlucHV0LWZpZWxkMi1jb2xvcjogIzAwNjljYztcclxuJGlucHV0LWZpZWxkMy1jb2xvcjogIzAwNzRlMDtcclxuJGlucHV0LWZpZWxkNC1jb2xvcjogIzAwN2VmNTtcclxuXHJcbiRidXR0b24tc2hhZG93OiA0cHggNHB4IDVweCAjMDAwO1xyXG5cclxuJG1lc3NhZ2UtYmFja2dyb3VuZC1jb2xvci1zZW5kZXI6IHJnYigxNzcsIDI1NSwgMTkwKTtcclxuJG1lc3NhZ2UtYmFja2dyb3VuZC1jb2xvci1yZWNlaXZlcjogcmdiKDI1MywgMjU1LCAyMjQpO1xyXG4kbWVzc2FnZS1iYWNrZ3JvdW5kLWNvbG9yLXN0YXR1czogcmdiKDEwMywgMjEyLCAyNTUpO1xyXG5cclxuQG1peGluIGJhY2tncm91bmQoKSB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCAjMDAwODUwIDAlLCAjMDAwMzIwIDEwMCUpLFxyXG4gICAgcmFkaWFsLWdyYWRpZW50KDEwMCUgMjI1JSBhdCAxMDAlIDAlLCAjZmY2OTI4IDAlLCAjMDAwMDAwIDEwMCUpLFxyXG4gICAgbGluZWFyLWdyYWRpZW50KDIyNWRlZywgI2ZmN2EwMCAwJSwgIzAwMDAwMCAxMDAlKSxcclxuICAgIGxpbmVhci1ncmFkaWVudChcclxuICAgICAgMTM1ZGVnLFxyXG4gICAgICAjY2RmZmViIDEwJSxcclxuICAgICAgI2NkZmZlYiAzNSUsXHJcbiAgICAgICMwMDlmOWQgMzUlLFxyXG4gICAgICAjMDA5ZjlkIDYwJSxcclxuICAgICAgIzA3NDU2ZiA2MCUsXHJcbiAgICAgICMwNzQ1NmYgNjclLFxyXG4gICAgICAjMGYwYTNjIDY3JSxcclxuICAgICAgIzBmMGEzYyAxMDAlXHJcbiAgICApO1xyXG4gIGJhY2tncm91bmQtYmxlbmQtbW9kZTogc2NyZWVuLCBvdmVybGF5LCBoYXJkLWxpZ2h0LCBub3JtYWw7XHJcbn1cclxuXHJcbkBtaXhpbiBidXR0b24tc3R5bGUoKSB7XHJcbiAgYm94LXNoYWRvdzogJGJ1dHRvbi1zaGFkb3c7XHJcbiAgYm9yZGVyOiAwO1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbiAgZm9udC1zaXplOiAxLjVlbTtcclxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gIGNvbG9yOiAkbGlnaHQtdGV4dC1jb2xvcjtcclxufVxyXG5cclxuJG1lZGlhLWJyZWFrcG9pbnQtbWVkaXVtOiAxMDAwcHg7XHJcbiRtZWRpYS1icmVha3BvaW50LXNtYWxsOiA2NTBweDtcclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SessionMessagesTextFieldComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-session-messages-text-field',
                templateUrl: './session-messages-text-field.component.html',
                styleUrls: ['./session-messages-text-field.component.scss'],
            }]
    }], function () { return []; }, { newMessageChange: [{
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_messages_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/messages.service */ "./src/app/services/messages.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");




const _c0 = ["scroll"];
function SessionMessagesComponent_li_4_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "/assets/usericons/", item_r3.userName, ".svg", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function SessionMessagesComponent_li_4_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "/assets/usericons/", item_r3.userName, ".svg", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
const _c1 = function (a0, a1, a2) { return { left: a0, right: a1, center: a2 }; };
function SessionMessagesComponent_li_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SessionMessagesComponent_li_4_div_2_Template, 2, 1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, SessionMessagesComponent_li_4_div_5_Template, 2, 1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](4, _c1, item_r3.type == "receiver", item_r3.type == "sender", item_r3.type == "status"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r3.type == "receiver");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r3.message, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r3.type == "sender");
} }
function SessionMessagesComponent_li_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Back to Start");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class SessionMessagesComponent {
    constructor(messagesService) {
        this.messagesService = messagesService;
        this.messageList = [];
        this.reconnectError = false;
    }
    ngOnInit() {
        this.messagesService.onUpdate$.subscribe((messagesList) => {
            this.messageList = messagesList;
            setTimeout(() => {
                this.scrollToBottom();
            }, 10);
        });
    }
    scrollToBottom() {
        try {
            this.myScrollContainer.nativeElement.scrollTop = this.myScrollContainer.nativeElement.scrollHeight;
        }
        catch (err) { }
    }
}
SessionMessagesComponent.ɵfac = function SessionMessagesComponent_Factory(t) { return new (t || SessionMessagesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_messages_service__WEBPACK_IMPORTED_MODULE_1__["MessagesService"])); };
SessionMessagesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SessionMessagesComponent, selectors: [["app-session-messages"]], viewQuery: function SessionMessagesComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.myScrollContainer = _t.first);
    } }, inputs: { reconnectError: "reconnectError" }, decls: 6, vars: 2, consts: [[1, "messages-parent"], [1, "messages-container"], ["scroll", ""], [1, "messages"], [4, "ngFor", "ngForOf"], [4, "ngIf"], [1, "message-container", 3, "ngClass"], ["class", "user-icon", 4, "ngIf"], [1, "message"], [1, "user-icon"], [3, "src"], [1, "back-to-start"], ["href", "/"]], template: function SessionMessagesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ul", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, SessionMessagesComponent_li_4_Template, 6, 8, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, SessionMessagesComponent_li_5_Template, 5, 0, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.messageList);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.reconnectError);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"]], styles: [".messages-parent[_ngcontent-%COMP%] {\n  display: flex;\n  flex-flow: column;\n  align-items: center;\n}\n\n.messages-container[_ngcontent-%COMP%] {\n  padding-top: 20px;\n  width: 50%;\n  overflow-x: hidden;\n  overflow-y: auto;\n  height: calc(95vh - 3.2em);\n  -ms-overflow-style: none;\n  scrollbar-width: none;\n}\n\n.messages-container[_ngcontent-%COMP%]::-webkit-scrollbar {\n  display: none;\n}\n\n.messages-container[_ngcontent-%COMP%]   .messages[_ngcontent-%COMP%] {\n  list-style-type: none;\n  margin: 0;\n  padding: 0;\n  display: flex;\n  flex-flow: column;\n}\n\n.messages-container[_ngcontent-%COMP%]   .messages[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  width: 100%;\n  height: auto;\n}\n\n.messages-container[_ngcontent-%COMP%]   .messages[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .message-container[_ngcontent-%COMP%] {\n  margin: 10px;\n  max-width: 30vw;\n  display: flex;\n  flex-flow: row;\n}\n\n.messages-container[_ngcontent-%COMP%]   .messages[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .message-container.left[_ngcontent-%COMP%] {\n  float: left;\n}\n\n.messages-container[_ngcontent-%COMP%]   .messages[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .message-container.left[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%] {\n  background-color: #fdffe0;\n}\n\n.messages-container[_ngcontent-%COMP%]   .messages[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .message-container.right[_ngcontent-%COMP%] {\n  float: right;\n}\n\n.messages-container[_ngcontent-%COMP%]   .messages[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .message-container.right[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%] {\n  background-color: #b1ffbe;\n}\n\n.messages-container[_ngcontent-%COMP%]   .messages[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .message-container.center[_ngcontent-%COMP%] {\n  text-align: center;\n  display: table;\n  margin: 10px auto;\n}\n\n.messages-container[_ngcontent-%COMP%]   .messages[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .message-container.center[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%] {\n  background-color: #67d4ff;\n}\n\n.messages-container[_ngcontent-%COMP%]   .messages[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .message-container[_ngcontent-%COMP%]   .user-icon[_ngcontent-%COMP%] {\n  background: linear-gradient(40.27deg, #00ffa3 0%, #9595ff 100%);\n  padding: 5px;\n  margin: 10px;\n  width: 2em;\n  height: 2em;\n  border-radius: 2em;\n  box-shadow: 4px 4px 5px #000;\n}\n\n.messages-container[_ngcontent-%COMP%]   .messages[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .message-container[_ngcontent-%COMP%]   .user-icon[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 2em;\n  height: 2em;\n}\n\n.messages-container[_ngcontent-%COMP%]   .messages[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .message-container[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%] {\n  border-radius: 10px;\n  padding: 5px 10px;\n  box-shadow: 4px 4px 5px #000;\n}\n\n.messages-container[_ngcontent-%COMP%]   .messages[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .back-to-start[_ngcontent-%COMP%] {\n  margin: 30px 0;\n  max-width: 20vw;\n  text-align: center;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.messages-container[_ngcontent-%COMP%]   .messages[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  background: linear-gradient(320deg, #ff0055 0%, #00294f 90%);\n  box-shadow: 4px 4px 5px #000;\n  border: 0;\n  padding: 20px;\n  font-size: 1.5em;\n  border-radius: 20px;\n  color: #eeeeee;\n}\n\n@media screen and (max-width: 1000px) {\n  .messages-container[_ngcontent-%COMP%] {\n    width: 80%;\n  }\n}\n\n@media screen and (max-width: 650px) {\n  .messages-container[_ngcontent-%COMP%] {\n    width: 95%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zZXNzaW9uLW1lc3NhZ2VzL3Nlc3Npb24tbWVzc2FnZXMuY29tcG9uZW50LnNjc3MiLCJzcmMvc2Nzcy9fdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtBQURGOztBQUlBO0VBQ0UsaUJBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLDBCQUFBO0VBQ0Esd0JBQUE7RUFDQSxxQkFBQTtBQURGOztBQUdFO0VBQ0UsYUFBQTtBQURKOztBQUlFO0VBQ0UscUJBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtBQUZKOztBQUtFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUFISjs7QUFJSTtFQUNFLFlBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7QUFGTjs7QUFJTTtFQUNFLFdBQUE7QUFGUjs7QUFJUTtFQUNFLHlCQ2xCMEI7QURnQnBDOztBQU1NO0VBQ0UsWUFBQTtBQUpSOztBQUtRO0VBQ0UseUJDMUJ3QjtBRHVCbEM7O0FBT007RUFDRSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtBQUxSOztBQU9RO0VBQ0UseUJDbEN3QjtBRDZCbEM7O0FBU007RUFFRSwrREN2RFU7RUR3RFYsWUFBQTtFQUNBLFlBQUE7RUFDQSxVQUpZO0VBS1osV0FMWTtFQU1aLGtCQU5ZO0VBT1osNEJDbERRO0FEMENoQjs7QUFTUTtFQUNFLFVBVFU7RUFVVixXQVZVO0FBR3BCOztBQVdNO0VBQ0UsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLDRCQzVEUTtBRG1EaEI7O0FBYUk7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQVhOOztBQWFJO0VDL0VGLDREQUFBO0VBaUNBLDRCQXpCYztFQTBCZCxTQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQW5EaUI7QUR3Rm5COztBQVdBO0VBQ0U7SUFDRSxVQUFBO0VBUkY7QUFDRjs7QUFXQTtFQUNFO0lBQ0UsVUFBQTtFQVRGO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3Nlc3Npb24tbWVzc2FnZXMvc2Vzc2lvbi1tZXNzYWdlcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuL3NyYy9zY3NzL3ZhcmlhYmxlc1wiO1xyXG5cclxuLm1lc3NhZ2VzLXBhcmVudCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWZsb3c6IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4ubWVzc2FnZXMtY29udGFpbmVyIHtcclxuICBwYWRkaW5nLXRvcDogMjBweDtcclxuICB3aWR0aDogNTAlO1xyXG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcclxuICBvdmVyZmxvdy15OiBhdXRvO1xyXG4gIGhlaWdodDogY2FsYyg5NXZoIC0gMy4yZW0pO1xyXG4gIC1tcy1vdmVyZmxvdy1zdHlsZTogbm9uZTtcclxuICBzY3JvbGxiYXItd2lkdGg6IG5vbmU7XHJcblxyXG4gICY6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG5cclxuICAubWVzc2FnZXMge1xyXG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWZsb3c6IGNvbHVtbjtcclxuICB9XHJcblxyXG4gIC5tZXNzYWdlcyBsaSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIC5tZXNzYWdlLWNvbnRhaW5lciB7XHJcbiAgICAgIG1hcmdpbjogMTBweDtcclxuICAgICAgbWF4LXdpZHRoOiAzMHZ3O1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBmbGV4LWZsb3c6IHJvdztcclxuXHJcbiAgICAgICYubGVmdCB7XHJcbiAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcblxyXG4gICAgICAgIC5tZXNzYWdlIHtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRtZXNzYWdlLWJhY2tncm91bmQtY29sb3ItcmVjZWl2ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAmLnJpZ2h0IHtcclxuICAgICAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICAgICAgLm1lc3NhZ2Uge1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJG1lc3NhZ2UtYmFja2dyb3VuZC1jb2xvci1zZW5kZXI7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAmLmNlbnRlciB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGRpc3BsYXk6IHRhYmxlO1xyXG4gICAgICAgIG1hcmdpbjogMTBweCBhdXRvO1xyXG5cclxuICAgICAgICAubWVzc2FnZSB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkbWVzc2FnZS1iYWNrZ3JvdW5kLWNvbG9yLXN0YXR1cztcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC51c2VyLWljb24ge1xyXG4gICAgICAgICRpY29uLXNpemU6IDJlbTtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAkdXNlci1pY29uLWNvbG9yO1xyXG4gICAgICAgIHBhZGRpbmc6IDVweDtcclxuICAgICAgICBtYXJnaW46IDEwcHg7XHJcbiAgICAgICAgd2lkdGg6ICRpY29uLXNpemU7XHJcbiAgICAgICAgaGVpZ2h0OiAkaWNvbi1zaXplO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6ICRpY29uLXNpemU7XHJcbiAgICAgICAgYm94LXNoYWRvdzogJGJ1dHRvbi1zaGFkb3c7XHJcbiAgICAgICAgaW1nIHtcclxuICAgICAgICAgIHdpZHRoOiAkaWNvbi1zaXplO1xyXG4gICAgICAgICAgaGVpZ2h0OiAkaWNvbi1zaXplO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgLm1lc3NhZ2Uge1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgcGFkZGluZzogNXB4IDEwcHg7XHJcbiAgICAgICAgYm94LXNoYWRvdzogJGJ1dHRvbi1zaGFkb3c7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuYmFjay10by1zdGFydCB7XHJcbiAgICAgIG1hcmdpbjogMzBweCAwO1xyXG4gICAgICBtYXgtd2lkdGg6IDIwdnc7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICAgIH1cclxuICAgIGJ1dHRvbiB7XHJcbiAgICAgIEBpbmNsdWRlIGJ1dHRvbi1iYWNrZ3JvdW5kKDMyMGRlZyk7XHJcbiAgICAgIEBpbmNsdWRlIGJ1dHRvbi1zdHlsZSgpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogJG1lZGlhLWJyZWFrcG9pbnQtbWVkaXVtKSB7XHJcbiAgLm1lc3NhZ2VzLWNvbnRhaW5lciB7XHJcbiAgICB3aWR0aDogODAlO1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogJG1lZGlhLWJyZWFrcG9pbnQtc21hbGwpIHtcclxuICAubWVzc2FnZXMtY29udGFpbmVyIHtcclxuICAgIHdpZHRoOiA5NSU7XHJcbiAgfVxyXG59XHJcbiIsIiRsaWdodC10ZXh0LWNvbG9yOiByZ2IoMjM4LCAyMzgsIDIzOCk7XHJcblxyXG4kZGFyay10ZXh0LWNvbG9yOiAjMDAwO1xyXG5cclxuJGFjY2VudDE6ICMwMDA4NTA7XHJcblxyXG4kYWNjZW50MjogI2ZmNjkyODtcclxuXHJcbiRhY2NlbnQzOiByZ2IoMTUzLCAwLCAyMjQpO1xyXG5cclxuJHVzZXItaWNvbi1jb2xvcjogbGluZWFyLWdyYWRpZW50KDQwLjI3ZGVnLCAjMDBmZmEzIDAlLCAjOTU5NWZmIDEwMCUpO1xyXG5cclxuQG1peGluIGJ1dHRvbi1iYWNrZ3JvdW5kKCRhbmdsZSkge1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgkYW5nbGUsICNmZjAwNTUgMCUsICMwMDI5NGYgOTAlKTtcclxufVxyXG5cclxuJGlucHV0LWZpZWxkMS1jb2xvcjogIzAwNWZiODtcclxuJGlucHV0LWZpZWxkMi1jb2xvcjogIzAwNjljYztcclxuJGlucHV0LWZpZWxkMy1jb2xvcjogIzAwNzRlMDtcclxuJGlucHV0LWZpZWxkNC1jb2xvcjogIzAwN2VmNTtcclxuXHJcbiRidXR0b24tc2hhZG93OiA0cHggNHB4IDVweCAjMDAwO1xyXG5cclxuJG1lc3NhZ2UtYmFja2dyb3VuZC1jb2xvci1zZW5kZXI6IHJnYigxNzcsIDI1NSwgMTkwKTtcclxuJG1lc3NhZ2UtYmFja2dyb3VuZC1jb2xvci1yZWNlaXZlcjogcmdiKDI1MywgMjU1LCAyMjQpO1xyXG4kbWVzc2FnZS1iYWNrZ3JvdW5kLWNvbG9yLXN0YXR1czogcmdiKDEwMywgMjEyLCAyNTUpO1xyXG5cclxuQG1peGluIGJhY2tncm91bmQoKSB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCAjMDAwODUwIDAlLCAjMDAwMzIwIDEwMCUpLFxyXG4gICAgcmFkaWFsLWdyYWRpZW50KDEwMCUgMjI1JSBhdCAxMDAlIDAlLCAjZmY2OTI4IDAlLCAjMDAwMDAwIDEwMCUpLFxyXG4gICAgbGluZWFyLWdyYWRpZW50KDIyNWRlZywgI2ZmN2EwMCAwJSwgIzAwMDAwMCAxMDAlKSxcclxuICAgIGxpbmVhci1ncmFkaWVudChcclxuICAgICAgMTM1ZGVnLFxyXG4gICAgICAjY2RmZmViIDEwJSxcclxuICAgICAgI2NkZmZlYiAzNSUsXHJcbiAgICAgICMwMDlmOWQgMzUlLFxyXG4gICAgICAjMDA5ZjlkIDYwJSxcclxuICAgICAgIzA3NDU2ZiA2MCUsXHJcbiAgICAgICMwNzQ1NmYgNjclLFxyXG4gICAgICAjMGYwYTNjIDY3JSxcclxuICAgICAgIzBmMGEzYyAxMDAlXHJcbiAgICApO1xyXG4gIGJhY2tncm91bmQtYmxlbmQtbW9kZTogc2NyZWVuLCBvdmVybGF5LCBoYXJkLWxpZ2h0LCBub3JtYWw7XHJcbn1cclxuXHJcbkBtaXhpbiBidXR0b24tc3R5bGUoKSB7XHJcbiAgYm94LXNoYWRvdzogJGJ1dHRvbi1zaGFkb3c7XHJcbiAgYm9yZGVyOiAwO1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbiAgZm9udC1zaXplOiAxLjVlbTtcclxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gIGNvbG9yOiAkbGlnaHQtdGV4dC1jb2xvcjtcclxufVxyXG5cclxuJG1lZGlhLWJyZWFrcG9pbnQtbWVkaXVtOiAxMDAwcHg7XHJcbiRtZWRpYS1icmVha3BvaW50LXNtYWxsOiA2NTBweDtcclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SessionMessagesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-session-messages',
                templateUrl: './session-messages.component.html',
                styleUrls: ['./session-messages.component.scss'],
            }]
    }], function () { return [{ type: _services_messages_service__WEBPACK_IMPORTED_MODULE_1__["MessagesService"] }]; }, { myScrollContainer: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['scroll']
        }], reconnectError: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


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
            this.sessionId = sessionId;
        });
        this.userName$.subscribe((userName) => {
            this.userName = userName;
        });
        this.userId$.subscribe((userId) => {
            this.userId = userId;
        });
        this.userInSession$.subscribe((userInSession) => {
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
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["KeyValuePipe"]], styles: [".sidenav[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 0%;\n  position: fixed;\n  z-index: 1;\n  top: 0;\n  left: 0;\n  background-color: #111;\n  overflow-x: hidden;\n  transition: 0.5s;\n  padding-top: 60px;\n  font-family: \"Dosis\", sans-serif;\n}\n.sidenav.open[_ngcontent-%COMP%] {\n  width: 24%;\n}\n.sidenav.close[_ngcontent-%COMP%] {\n  width: 0;\n}\n.session-id[_ngcontent-%COMP%] {\n  display: flex;\n  flex-flow: column;\n  align-items: center;\n}\n.session-id[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  color: #eeeeee;\n  font-size: 2em;\n}\n.session-id[_ngcontent-%COMP%]   .id-box-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n}\n.session-id[_ngcontent-%COMP%]   .id-box-container[_ngcontent-%COMP%]   .session-id-box[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n  margin: 5px;\n  height: 1.4em;\n  width: 1em;\n  text-align: center;\n  font-size: 2.8em;\n  border: none;\n  border-radius: 15px;\n  box-shadow: 4px 4px 5px #000;\n  color: #eeeeee;\n}\n.session-id[_ngcontent-%COMP%]   .id-box-container[_ngcontent-%COMP%]   .session-id-box[_ngcontent-%COMP%]:nth-child(1) {\n  background: #005fb8;\n}\n.session-id[_ngcontent-%COMP%]   .id-box-container[_ngcontent-%COMP%]   .session-id-box[_ngcontent-%COMP%]:nth-child(2) {\n  background: #0069cc;\n}\n.session-id[_ngcontent-%COMP%]   .id-box-container[_ngcontent-%COMP%]   .session-id-box[_ngcontent-%COMP%]:nth-child(3) {\n  background: #0074e0;\n}\n.session-id[_ngcontent-%COMP%]   .id-box-container[_ngcontent-%COMP%]   .session-id-box[_ngcontent-%COMP%]:nth-child(4) {\n  background: #007ef5;\n}\n.user[_ngcontent-%COMP%] {\n  display: flex;\n  flex-flow: column;\n  align-items: left;\n}\n.user[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  align-self: center;\n  color: #eeeeee;\n  font-size: 2em;\n}\n.user[_ngcontent-%COMP%]   .list-seperator[_ngcontent-%COMP%] {\n  color: #eeeeee;\n}\n.user[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  list-style-type: none;\n  display: flex;\n  flex-flow: row;\n}\n.user[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .user-icon[_ngcontent-%COMP%] {\n  background: linear-gradient(40.27deg, #00ffa3 0%, #9595ff 100%);\n  padding: 5px;\n  margin: 10px;\n  width: 2em;\n  height: 2em;\n  border-radius: 2em;\n  box-shadow: 4px 4px 5px #000;\n}\n.user[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .user-icon[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 2em;\n  height: 2em;\n}\n.user[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .user-name[_ngcontent-%COMP%] {\n  height: 1.5em;\n  font-size: 1.5em;\n  border-radius: 10px;\n  margin: 7px 0;\n  padding: 5px 10px;\n  box-shadow: 4px 4px 5px #000;\n  background-color: #b1ffbe;\n}\n.sidenav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  padding: 8px 8px 8px 32px;\n  text-decoration: none;\n  font-size: 25px;\n  color: #818181;\n  display: block;\n  transition: 0.3s;\n}\n.sidenav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #eeeeee;\n}\n.sidenav[_ngcontent-%COMP%]   .closebtn[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  right: 25px;\n  font-size: 36px;\n  margin-left: 50px;\n}\n.open-menu[_ngcontent-%COMP%] {\n  font-size: 30px;\n  cursor: pointer;\n  position: absolute;\n  color: #fff;\n}\n@media screen and (max-width: 1000px) {\n  .sidenav[_ngcontent-%COMP%] {\n    width: 0%;\n  }\n  .sidenav.open[_ngcontent-%COMP%] {\n    width: 50%;\n  }\n}\n@media screen and (max-width: 650px) {\n  .sidenav[_ngcontent-%COMP%] {\n    width: 0%;\n    padding-top: 15px;\n  }\n  .sidenav.open[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n\n  .sidenav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    font-size: 18px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zZXNzaW9ubWVudS9zZXNzaW9ubWVudS5jb21wb25lbnQuc2NzcyIsInNyYy9zY3NzL192YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLFlBQUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtFQUNBLFVBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0NBQUE7QUFERjtBQUdFO0VBQ0UsVUFBQTtBQURKO0FBR0U7RUFDRSxRQUFBO0FBREo7QUFLQTtFQUNFLGFBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0FBRkY7QUFHRTtFQUNFLGNDNUJlO0VENkJmLGNBQUE7QUFESjtBQUlFO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0FBRko7QUFJSTtFQUNFLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLDRCQ3hCVTtFRHlCVixjQzlDYTtBRDRDbkI7QUFLSTtFQUNFLG1CQ2xDZTtBRCtCckI7QUFLSTtFQUNFLG1CQ3BDZTtBRGlDckI7QUFLSTtFQUNFLG1CQ3RDZTtBRG1DckI7QUFLSTtFQUNFLG1CQ3hDZTtBRHFDckI7QUFRQTtFQUNFLGFBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0FBTEY7QUFNRTtFQUNFLGtCQUFBO0VBQ0EsY0N0RWU7RUR1RWYsY0FBQTtBQUpKO0FBT0U7RUFDRSxjQzNFZTtBRHNFbkI7QUFRRTtFQUNFLHFCQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7QUFOSjtBQVFJO0VBRUUsK0RDM0VZO0VENEVaLFlBQUE7RUFDQSxZQUFBO0VBQ0EsVUFKWTtFQUtaLFdBTFk7RUFNWixrQkFOWTtFQU9aLDRCQ3RFVTtBRCtEaEI7QUFRTTtFQUNFLFVBVFU7RUFVVixXQVZVO0FBSWxCO0FBVUk7RUFDRSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtFQUNBLDRCQ25GVTtFRG9GVix5QkNsRjRCO0FEMEVsQztBQWFBO0VBQ0UseUJBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FBVkY7QUFhQTtFQUNFLGNDeEhpQjtBRDhHbkI7QUFhQTtFQUNFLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUFWRjtBQWFBO0VBQ0UsZUFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QUFWRjtBQWFBO0VBQ0U7SUFDRSxTQUFBO0VBVkY7RUFXRTtJQUNFLFVBQUE7RUFUSjtBQUNGO0FBYUE7RUFDRTtJQUNFLFNBQUE7SUFDQSxpQkFBQTtFQVhGO0VBYUU7SUFDRSxXQUFBO0VBWEo7O0VBY0E7SUFDRSxlQUFBO0VBWEY7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2Vzc2lvbm1lbnUvc2Vzc2lvbm1lbnUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi9zcmMvc2Nzcy92YXJpYWJsZXNcIjtcclxuXHJcbi5zaWRlbmF2IHtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgd2lkdGg6IDAlO1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB6LWluZGV4OiAxO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMxMTE7XHJcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xyXG4gIHRyYW5zaXRpb246IDAuNXM7XHJcbiAgcGFkZGluZy10b3A6IDYwcHg7XHJcbiAgZm9udC1mYW1pbHk6IFwiRG9zaXNcIiwgc2Fucy1zZXJpZjtcclxuXHJcbiAgJi5vcGVuIHtcclxuICAgIHdpZHRoOiAyNCU7XHJcbiAgfVxyXG4gICYuY2xvc2Uge1xyXG4gICAgd2lkdGg6IDA7XHJcbiAgfVxyXG59XHJcblxyXG4uc2Vzc2lvbi1pZCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWZsb3c6IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGgyIHtcclxuICAgIGNvbG9yOiAkbGlnaHQtdGV4dC1jb2xvcjtcclxuICAgIGZvbnQtc2l6ZTogMmVtO1xyXG4gIH1cclxuXHJcbiAgLmlkLWJveC1jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcblxyXG4gICAgLnNlc3Npb24taWQtYm94IHtcclxuICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgbWFyZ2luOiA1cHg7XHJcbiAgICAgIGhlaWdodDogMS40ZW07XHJcbiAgICAgIHdpZHRoOiAxZW07XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgZm9udC1zaXplOiAyLjhlbTtcclxuICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gICAgICBib3gtc2hhZG93OiAkYnV0dG9uLXNoYWRvdztcclxuICAgICAgY29sb3I6ICRsaWdodC10ZXh0LWNvbG9yO1xyXG4gICAgfVxyXG5cclxuICAgIC5zZXNzaW9uLWlkLWJveDpudGgtY2hpbGQoMSkge1xyXG4gICAgICBiYWNrZ3JvdW5kOiAkaW5wdXQtZmllbGQxLWNvbG9yO1xyXG4gICAgfVxyXG4gICAgLnNlc3Npb24taWQtYm94Om50aC1jaGlsZCgyKSB7XHJcbiAgICAgIGJhY2tncm91bmQ6ICRpbnB1dC1maWVsZDItY29sb3I7XHJcbiAgICB9XHJcbiAgICAuc2Vzc2lvbi1pZC1ib3g6bnRoLWNoaWxkKDMpIHtcclxuICAgICAgYmFja2dyb3VuZDogJGlucHV0LWZpZWxkMy1jb2xvcjtcclxuICAgIH1cclxuICAgIC5zZXNzaW9uLWlkLWJveDpudGgtY2hpbGQoNCkge1xyXG4gICAgICBiYWNrZ3JvdW5kOiAkaW5wdXQtZmllbGQ0LWNvbG9yO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLnVzZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1mbG93OiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGxlZnQ7XHJcbiAgaDIge1xyXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gICAgY29sb3I6ICRsaWdodC10ZXh0LWNvbG9yO1xyXG4gICAgZm9udC1zaXplOiAyZW07XHJcbiAgfVxyXG5cclxuICAubGlzdC1zZXBlcmF0b3Ige1xyXG4gICAgY29sb3I6ICRsaWdodC10ZXh0LWNvbG9yO1xyXG4gIH1cclxuXHJcbiAgbGkge1xyXG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZmxvdzogcm93O1xyXG5cclxuICAgIC51c2VyLWljb24ge1xyXG4gICAgICAkaWNvbi1zaXplOiAyZW07XHJcbiAgICAgIGJhY2tncm91bmQ6ICR1c2VyLWljb24tY29sb3I7XHJcbiAgICAgIHBhZGRpbmc6IDVweDtcclxuICAgICAgbWFyZ2luOiAxMHB4O1xyXG4gICAgICB3aWR0aDogJGljb24tc2l6ZTtcclxuICAgICAgaGVpZ2h0OiAkaWNvbi1zaXplO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAkaWNvbi1zaXplO1xyXG4gICAgICBib3gtc2hhZG93OiAkYnV0dG9uLXNoYWRvdztcclxuICAgICAgaW1nIHtcclxuICAgICAgICB3aWR0aDogJGljb24tc2l6ZTtcclxuICAgICAgICBoZWlnaHQ6ICRpY29uLXNpemU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAudXNlci1uYW1lIHtcclxuICAgICAgaGVpZ2h0OiAxLjVlbTtcclxuICAgICAgZm9udC1zaXplOiAxLjVlbTtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgbWFyZ2luOiA3cHggMDtcclxuICAgICAgcGFkZGluZzogNXB4IDEwcHg7XHJcbiAgICAgIGJveC1zaGFkb3c6ICRidXR0b24tc2hhZG93O1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkbWVzc2FnZS1iYWNrZ3JvdW5kLWNvbG9yLXNlbmRlcjtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5zaWRlbmF2IGEge1xyXG4gIHBhZGRpbmc6IDhweCA4cHggOHB4IDMycHg7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGZvbnQtc2l6ZTogMjVweDtcclxuICBjb2xvcjogIzgxODE4MTtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICB0cmFuc2l0aW9uOiAwLjNzO1xyXG59XHJcblxyXG4uc2lkZW5hdiBhOmhvdmVyIHtcclxuICBjb2xvcjogJGxpZ2h0LXRleHQtY29sb3I7XHJcbn1cclxuXHJcbi5zaWRlbmF2IC5jbG9zZWJ0biB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMDtcclxuICByaWdodDogMjVweDtcclxuICBmb250LXNpemU6IDM2cHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDUwcHg7XHJcbn1cclxuXHJcbi5vcGVuLW1lbnUge1xyXG4gIGZvbnQtc2l6ZTogMzBweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAkbWVkaWEtYnJlYWtwb2ludC1tZWRpdW0pIHtcclxuICAuc2lkZW5hdiB7XHJcbiAgICB3aWR0aDogMCU7XHJcbiAgICAmLm9wZW4ge1xyXG4gICAgICB3aWR0aDogNTAlO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogJG1lZGlhLWJyZWFrcG9pbnQtc21hbGwpIHtcclxuICAuc2lkZW5hdiB7XHJcbiAgICB3aWR0aDogMCU7XHJcbiAgICBwYWRkaW5nLXRvcDogMTVweDtcclxuXHJcbiAgICAmLm9wZW4ge1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxuICB9XHJcbiAgLnNpZGVuYXYgYSB7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgfVxyXG59XHJcbiIsIiRsaWdodC10ZXh0LWNvbG9yOiByZ2IoMjM4LCAyMzgsIDIzOCk7XHJcblxyXG4kZGFyay10ZXh0LWNvbG9yOiAjMDAwO1xyXG5cclxuJGFjY2VudDE6ICMwMDA4NTA7XHJcblxyXG4kYWNjZW50MjogI2ZmNjkyODtcclxuXHJcbiRhY2NlbnQzOiByZ2IoMTUzLCAwLCAyMjQpO1xyXG5cclxuJHVzZXItaWNvbi1jb2xvcjogbGluZWFyLWdyYWRpZW50KDQwLjI3ZGVnLCAjMDBmZmEzIDAlLCAjOTU5NWZmIDEwMCUpO1xyXG5cclxuQG1peGluIGJ1dHRvbi1iYWNrZ3JvdW5kKCRhbmdsZSkge1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgkYW5nbGUsICNmZjAwNTUgMCUsICMwMDI5NGYgOTAlKTtcclxufVxyXG5cclxuJGlucHV0LWZpZWxkMS1jb2xvcjogIzAwNWZiODtcclxuJGlucHV0LWZpZWxkMi1jb2xvcjogIzAwNjljYztcclxuJGlucHV0LWZpZWxkMy1jb2xvcjogIzAwNzRlMDtcclxuJGlucHV0LWZpZWxkNC1jb2xvcjogIzAwN2VmNTtcclxuXHJcbiRidXR0b24tc2hhZG93OiA0cHggNHB4IDVweCAjMDAwO1xyXG5cclxuJG1lc3NhZ2UtYmFja2dyb3VuZC1jb2xvci1zZW5kZXI6IHJnYigxNzcsIDI1NSwgMTkwKTtcclxuJG1lc3NhZ2UtYmFja2dyb3VuZC1jb2xvci1yZWNlaXZlcjogcmdiKDI1MywgMjU1LCAyMjQpO1xyXG4kbWVzc2FnZS1iYWNrZ3JvdW5kLWNvbG9yLXN0YXR1czogcmdiKDEwMywgMjEyLCAyNTUpO1xyXG5cclxuQG1peGluIGJhY2tncm91bmQoKSB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCAjMDAwODUwIDAlLCAjMDAwMzIwIDEwMCUpLFxyXG4gICAgcmFkaWFsLWdyYWRpZW50KDEwMCUgMjI1JSBhdCAxMDAlIDAlLCAjZmY2OTI4IDAlLCAjMDAwMDAwIDEwMCUpLFxyXG4gICAgbGluZWFyLWdyYWRpZW50KDIyNWRlZywgI2ZmN2EwMCAwJSwgIzAwMDAwMCAxMDAlKSxcclxuICAgIGxpbmVhci1ncmFkaWVudChcclxuICAgICAgMTM1ZGVnLFxyXG4gICAgICAjY2RmZmViIDEwJSxcclxuICAgICAgI2NkZmZlYiAzNSUsXHJcbiAgICAgICMwMDlmOWQgMzUlLFxyXG4gICAgICAjMDA5ZjlkIDYwJSxcclxuICAgICAgIzA3NDU2ZiA2MCUsXHJcbiAgICAgICMwNzQ1NmYgNjclLFxyXG4gICAgICAjMGYwYTNjIDY3JSxcclxuICAgICAgIzBmMGEzYyAxMDAlXHJcbiAgICApO1xyXG4gIGJhY2tncm91bmQtYmxlbmQtbW9kZTogc2NyZWVuLCBvdmVybGF5LCBoYXJkLWxpZ2h0LCBub3JtYWw7XHJcbn1cclxuXHJcbkBtaXhpbiBidXR0b24tc3R5bGUoKSB7XHJcbiAgYm94LXNoYWRvdzogJGJ1dHRvbi1zaGFkb3c7XHJcbiAgYm9yZGVyOiAwO1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbiAgZm9udC1zaXplOiAxLjVlbTtcclxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gIGNvbG9yOiAkbGlnaHQtdGV4dC1jb2xvcjtcclxufVxyXG5cclxuJG1lZGlhLWJyZWFrcG9pbnQtbWVkaXVtOiAxMDAwcHg7XHJcbiRtZWRpYS1icmVha3BvaW50LXNtYWxsOiA2NTBweDtcclxuIl19 */"] });
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
/* harmony import */ var _components_create_session_create_session_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/create-session/create-session.component */ "./src/app/components/create-session/create-session.component.ts");
/* harmony import */ var _components_join_session_join_session_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/join-session/join-session.component */ "./src/app/components/join-session/join-session.component.ts");




class LandingComponent {
    constructor() { }
    ngOnInit() { }
}
LandingComponent.ɵfac = function LandingComponent_Factory(t) { return new (t || LandingComponent)(); };
LandingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LandingComponent, selectors: [["ng-component"]], decls: 7, vars: 0, consts: [[1, "landing-container"], [1, "website-title"], [1, "or-container"]], template: function LandingComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "TransferTube.io");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-create-session");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " ------- OR ------- ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-join-session");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_components_create_session_create_session_component__WEBPACK_IMPORTED_MODULE_1__["CreateSessionComponent"], _components_join_session_join_session_component__WEBPACK_IMPORTED_MODULE_2__["JoinSessionComponent"]], styles: [".landing-container[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  overflow: hidden;\n  align-content: center;\n  align-items: center;\n  display: flex;\n  flex-direction: column;\n  font-family: \"Dosis\", sans-serif;\n  color: #eeeeee;\n}\n.landing-container[_ngcontent-%COMP%]   .website-title[_ngcontent-%COMP%] {\n  max-width: 80%;\n  margin: 40px;\n  font-size: 6em;\n  word-wrap: break-word;\n}\n.landing-container[_ngcontent-%COMP%]   .or-container[_ngcontent-%COMP%] {\n  font-size: 2em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbGFuZGluZy9sYW5kaW5nLmNvbXBvbmVudC5zY3NzIiwic3JjL3Njc3MvX3ZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsU0FBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxjQ2RpQjtBRGFuQjtBQUdFO0VBQ0UsY0FBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EscUJBQUE7QUFESjtBQUlFO0VBQ0UsY0FBQTtBQUZKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvbGFuZGluZy9sYW5kaW5nLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4vc3JjL3Njc3MvdmFyaWFibGVzXCI7XHJcblxyXG4ubGFuZGluZy1jb250YWluZXIge1xyXG4gIG1hcmdpbjogMDtcclxuICBwYWRkaW5nOiAwO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgZm9udC1mYW1pbHk6IFwiRG9zaXNcIiwgc2Fucy1zZXJpZjtcclxuICBjb2xvcjogJGxpZ2h0LXRleHQtY29sb3I7XHJcblxyXG4gIC53ZWJzaXRlLXRpdGxlIHtcclxuICAgIG1heC13aWR0aDogODAlO1xyXG4gICAgbWFyZ2luOiA0MHB4O1xyXG4gICAgZm9udC1zaXplOiA2ZW07XHJcbiAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XHJcbiAgfVxyXG5cclxuICAub3ItY29udGFpbmVyIHtcclxuICAgIGZvbnQtc2l6ZTogMmVtO1xyXG4gIH1cclxufVxyXG4iLCIkbGlnaHQtdGV4dC1jb2xvcjogcmdiKDIzOCwgMjM4LCAyMzgpO1xyXG5cclxuJGRhcmstdGV4dC1jb2xvcjogIzAwMDtcclxuXHJcbiRhY2NlbnQxOiAjMDAwODUwO1xyXG5cclxuJGFjY2VudDI6ICNmZjY5Mjg7XHJcblxyXG4kYWNjZW50MzogcmdiKDE1MywgMCwgMjI0KTtcclxuXHJcbiR1c2VyLWljb24tY29sb3I6IGxpbmVhci1ncmFkaWVudCg0MC4yN2RlZywgIzAwZmZhMyAwJSwgIzk1OTVmZiAxMDAlKTtcclxuXHJcbkBtaXhpbiBidXR0b24tYmFja2dyb3VuZCgkYW5nbGUpIHtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoJGFuZ2xlLCAjZmYwMDU1IDAlLCAjMDAyOTRmIDkwJSk7XHJcbn1cclxuXHJcbiRpbnB1dC1maWVsZDEtY29sb3I6ICMwMDVmYjg7XHJcbiRpbnB1dC1maWVsZDItY29sb3I6ICMwMDY5Y2M7XHJcbiRpbnB1dC1maWVsZDMtY29sb3I6ICMwMDc0ZTA7XHJcbiRpbnB1dC1maWVsZDQtY29sb3I6ICMwMDdlZjU7XHJcblxyXG4kYnV0dG9uLXNoYWRvdzogNHB4IDRweCA1cHggIzAwMDtcclxuXHJcbiRtZXNzYWdlLWJhY2tncm91bmQtY29sb3Itc2VuZGVyOiByZ2IoMTc3LCAyNTUsIDE5MCk7XHJcbiRtZXNzYWdlLWJhY2tncm91bmQtY29sb3ItcmVjZWl2ZXI6IHJnYigyNTMsIDI1NSwgMjI0KTtcclxuJG1lc3NhZ2UtYmFja2dyb3VuZC1jb2xvci1zdGF0dXM6IHJnYigxMDMsIDIxMiwgMjU1KTtcclxuXHJcbkBtaXhpbiBiYWNrZ3JvdW5kKCkge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCg0NWRlZywgIzAwMDg1MCAwJSwgIzAwMDMyMCAxMDAlKSxcclxuICAgIHJhZGlhbC1ncmFkaWVudCgxMDAlIDIyNSUgYXQgMTAwJSAwJSwgI2ZmNjkyOCAwJSwgIzAwMDAwMCAxMDAlKSxcclxuICAgIGxpbmVhci1ncmFkaWVudCgyMjVkZWcsICNmZjdhMDAgMCUsICMwMDAwMDAgMTAwJSksXHJcbiAgICBsaW5lYXItZ3JhZGllbnQoXHJcbiAgICAgIDEzNWRlZyxcclxuICAgICAgI2NkZmZlYiAxMCUsXHJcbiAgICAgICNjZGZmZWIgMzUlLFxyXG4gICAgICAjMDA5ZjlkIDM1JSxcclxuICAgICAgIzAwOWY5ZCA2MCUsXHJcbiAgICAgICMwNzQ1NmYgNjAlLFxyXG4gICAgICAjMDc0NTZmIDY3JSxcclxuICAgICAgIzBmMGEzYyA2NyUsXHJcbiAgICAgICMwZjBhM2MgMTAwJVxyXG4gICAgKTtcclxuICBiYWNrZ3JvdW5kLWJsZW5kLW1vZGU6IHNjcmVlbiwgb3ZlcmxheSwgaGFyZC1saWdodCwgbm9ybWFsO1xyXG59XHJcblxyXG5AbWl4aW4gYnV0dG9uLXN0eWxlKCkge1xyXG4gIGJveC1zaGFkb3c6ICRidXR0b24tc2hhZG93O1xyXG4gIGJvcmRlcjogMDtcclxuICBwYWRkaW5nOiAyMHB4O1xyXG4gIGZvbnQtc2l6ZTogMS41ZW07XHJcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICBjb2xvcjogJGxpZ2h0LXRleHQtY29sb3I7XHJcbn1cclxuXHJcbiRtZWRpYS1icmVha3BvaW50LW1lZGl1bTogMTAwMHB4O1xyXG4kbWVkaWEtYnJlYWtwb2ludC1zbWFsbDogNjUwcHg7XHJcbiJdfQ== */"] });
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
/* harmony import */ var _services_connect_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../services/connect.service */ "./src/app/services/connect.service.ts");
/* harmony import */ var _services_messages_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/messages.service */ "./src/app/services/messages.service.ts");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngxs/store */ "./node_modules/@ngxs/store/__ivy_ngcc__/fesm2015/ngxs-store.js");










function SessionComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-sessionmenu");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-session-messages", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "app-session-messages-text-field", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("newMessageChange", function SessionComponent_div_0_Template_app_session_messages_text_field_newMessageChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.sendMessage($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("reconnectError", ctx_r0.reconnectionError);
} }
function SessionComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Sorry!!! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 6);
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
    constructor(router, activatedRoute, connectService, messagesService, store) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.connectService = connectService;
        this.messagesService = messagesService;
        this.store = store;
        this.sessionError = false;
        this.reconnectionError = false;
    }
    ngOnInit() {
        this.activatedRoute.paramMap.subscribe((params) => {
            this.currentSessionId = params.get('id');
            this.joinSession(this.currentSessionId);
        });
        this.router.events.subscribe((event) => {
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
        this.connectService.checkSession(id).subscribe(() => {
            this.socketIni(this.connectService.joinSession(id));
            this.sessionError = false;
        }, (error) => {
            console.log('Sorry diese Session gibt es nicht :(');
            this.sessionError = true;
        });
    }
    socketIni(s) {
        this.socket = s;
        this.socket.on(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].messageIdentifier, (msg) => {
            this.messagesService.addMessage(msg);
        });
        this.socket.on('SessionIni', (ini) => {
            this.store.dispatch(new _store_app_action__WEBPACK_IMPORTED_MODULE_4__["SetUserId"](ini.userId));
            this.store.dispatch(new _store_app_action__WEBPACK_IMPORTED_MODULE_4__["SetSessionId"](ini.sessionId));
            this.store.dispatch(new _store_app_action__WEBPACK_IMPORTED_MODULE_4__["SetUserName"](ini.userName));
        });
        this.socket.on('newUser', (userData) => {
            const mappedData = new Map(Object.entries(userData));
            this.store.dispatch(new _store_app_action__WEBPACK_IMPORTED_MODULE_4__["SetUserInSession"](mappedData));
        });
        this.socket.on('disconnect', () => {
            this.sendStatus('Disconnected! Trying to reconnect...');
            console.log('disconnected');
        });
        this.socket.on('reconnect_failed', () => {
            this.reconnectionError = true;
            this.sendStatus(`Couldn't reconnect :(`);
            console.log('reconnect failed');
        });
    }
    sendStatus(status) {
        const msg = {
            message: status,
            messageId: -1,
            userId: 'SERVER',
            userName: 'Server',
        };
        this.messagesService.addMessage(msg);
    }
    sendMessage(msg) {
        this.socket.emit(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].messageIdentifier, msg);
    }
}
SessionComponent.ɵfac = function SessionComponent_Factory(t) { return new (t || SessionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_connect_service__WEBPACK_IMPORTED_MODULE_5__["ConnectService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_messages_service__WEBPACK_IMPORTED_MODULE_6__["MessagesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngxs_store__WEBPACK_IMPORTED_MODULE_7__["Store"])); };
SessionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SessionComponent, selectors: [["ng-component"]], viewQuery: function SessionComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_components_session_messages_session_messages_component__WEBPACK_IMPORTED_MODULE_2__["SessionMessagesComponent"], true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.messagesComponent = _t.first);
    } }, decls: 2, vars: 2, consts: [["class", "active-session-container", 4, "ngIf"], ["class", "session-error-container", 4, "ngIf"], [1, "active-session-container"], [3, "reconnectError"], [3, "newMessageChange"], [1, "session-error-container"], ["href", "/"]], template: function SessionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, SessionComponent_div_0_Template, 4, 1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SessionComponent_div_1_Template, 8, 1, "div", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.sessionError);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.sessionError);
    } }, styles: ["@import url(\"https://fonts.googleapis.com/css2?family=Dosis&display=swap\");\n.session-error-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-flow: column;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n  overflow: hidden;\n  height: 100%;\n  width: 100%;\n}\n.session-error-container[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  max-width: 80%;\n  line-break: auto;\n  font-size: 2.5em;\n  color: #eeeeee;\n  font-family: \"Dosis\", sans-serif;\n}\n.session-error-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  background: linear-gradient(320deg, #ff0055 0%, #00294f 90%);\n  box-shadow: 4px 4px 5px #000;\n  border: 0;\n  padding: 20px;\n  font-size: 1.5em;\n  border-radius: 20px;\n  color: #eeeeee;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvc2Vzc2lvbi9zZXNzaW9uLmNvbXBvbmVudC5zY3NzIiwic3JjL3Njc3MvX3ZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNRLDBFQUFBO0FBRVI7RUFDRSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FBREY7QUFHRTtFQUNFLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0NqQmU7RURrQmYsZ0NBQUE7QUFESjtBQUlFO0VDUkEsNERBQUE7RUFpQ0EsNEJBekJjO0VBMEJkLFNBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGNBbkRpQjtBRDBCbkIiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9zZXNzaW9uL3Nlc3Npb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi9zcmMvc2Nzcy92YXJpYWJsZXNcIjtcclxuQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PURvc2lzJmRpc3BsYXk9c3dhcFwiKTtcclxuXHJcbi5zZXNzaW9uLWVycm9yLWNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWZsb3c6IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICB3aWR0aDogMTAwJTtcclxuXHJcbiAgaDEge1xyXG4gICAgbWF4LXdpZHRoOiA4MCU7XHJcbiAgICBsaW5lLWJyZWFrOiBhdXRvO1xyXG4gICAgZm9udC1zaXplOiAyLjVlbTtcclxuICAgIGNvbG9yOiAkbGlnaHQtdGV4dC1jb2xvcjtcclxuICAgIGZvbnQtZmFtaWx5OiBcIkRvc2lzXCIsIHNhbnMtc2VyaWY7XHJcbiAgfVxyXG5cclxuICBidXR0b24ge1xyXG4gICAgQGluY2x1ZGUgYnV0dG9uLWJhY2tncm91bmQoMzIwZGVnKTtcclxuICAgIEBpbmNsdWRlIGJ1dHRvbi1zdHlsZSgpO1xyXG4gIH1cclxufVxyXG4iLCIkbGlnaHQtdGV4dC1jb2xvcjogcmdiKDIzOCwgMjM4LCAyMzgpO1xyXG5cclxuJGRhcmstdGV4dC1jb2xvcjogIzAwMDtcclxuXHJcbiRhY2NlbnQxOiAjMDAwODUwO1xyXG5cclxuJGFjY2VudDI6ICNmZjY5Mjg7XHJcblxyXG4kYWNjZW50MzogcmdiKDE1MywgMCwgMjI0KTtcclxuXHJcbiR1c2VyLWljb24tY29sb3I6IGxpbmVhci1ncmFkaWVudCg0MC4yN2RlZywgIzAwZmZhMyAwJSwgIzk1OTVmZiAxMDAlKTtcclxuXHJcbkBtaXhpbiBidXR0b24tYmFja2dyb3VuZCgkYW5nbGUpIHtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoJGFuZ2xlLCAjZmYwMDU1IDAlLCAjMDAyOTRmIDkwJSk7XHJcbn1cclxuXHJcbiRpbnB1dC1maWVsZDEtY29sb3I6ICMwMDVmYjg7XHJcbiRpbnB1dC1maWVsZDItY29sb3I6ICMwMDY5Y2M7XHJcbiRpbnB1dC1maWVsZDMtY29sb3I6ICMwMDc0ZTA7XHJcbiRpbnB1dC1maWVsZDQtY29sb3I6ICMwMDdlZjU7XHJcblxyXG4kYnV0dG9uLXNoYWRvdzogNHB4IDRweCA1cHggIzAwMDtcclxuXHJcbiRtZXNzYWdlLWJhY2tncm91bmQtY29sb3Itc2VuZGVyOiByZ2IoMTc3LCAyNTUsIDE5MCk7XHJcbiRtZXNzYWdlLWJhY2tncm91bmQtY29sb3ItcmVjZWl2ZXI6IHJnYigyNTMsIDI1NSwgMjI0KTtcclxuJG1lc3NhZ2UtYmFja2dyb3VuZC1jb2xvci1zdGF0dXM6IHJnYigxMDMsIDIxMiwgMjU1KTtcclxuXHJcbkBtaXhpbiBiYWNrZ3JvdW5kKCkge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCg0NWRlZywgIzAwMDg1MCAwJSwgIzAwMDMyMCAxMDAlKSxcclxuICAgIHJhZGlhbC1ncmFkaWVudCgxMDAlIDIyNSUgYXQgMTAwJSAwJSwgI2ZmNjkyOCAwJSwgIzAwMDAwMCAxMDAlKSxcclxuICAgIGxpbmVhci1ncmFkaWVudCgyMjVkZWcsICNmZjdhMDAgMCUsICMwMDAwMDAgMTAwJSksXHJcbiAgICBsaW5lYXItZ3JhZGllbnQoXHJcbiAgICAgIDEzNWRlZyxcclxuICAgICAgI2NkZmZlYiAxMCUsXHJcbiAgICAgICNjZGZmZWIgMzUlLFxyXG4gICAgICAjMDA5ZjlkIDM1JSxcclxuICAgICAgIzAwOWY5ZCA2MCUsXHJcbiAgICAgICMwNzQ1NmYgNjAlLFxyXG4gICAgICAjMDc0NTZmIDY3JSxcclxuICAgICAgIzBmMGEzYyA2NyUsXHJcbiAgICAgICMwZjBhM2MgMTAwJVxyXG4gICAgKTtcclxuICBiYWNrZ3JvdW5kLWJsZW5kLW1vZGU6IHNjcmVlbiwgb3ZlcmxheSwgaGFyZC1saWdodCwgbm9ybWFsO1xyXG59XHJcblxyXG5AbWl4aW4gYnV0dG9uLXN0eWxlKCkge1xyXG4gIGJveC1zaGFkb3c6ICRidXR0b24tc2hhZG93O1xyXG4gIGJvcmRlcjogMDtcclxuICBwYWRkaW5nOiAyMHB4O1xyXG4gIGZvbnQtc2l6ZTogMS41ZW07XHJcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICBjb2xvcjogJGxpZ2h0LXRleHQtY29sb3I7XHJcbn1cclxuXHJcbiRtZWRpYS1icmVha3BvaW50LW1lZGl1bTogMTAwMHB4O1xyXG4kbWVkaWEtYnJlYWtwb2ludC1zbWFsbDogNjUwcHg7XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SessionComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                templateUrl: './session.component.html',
                styleUrls: ['./session.component.scss'],
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }, { type: _services_connect_service__WEBPACK_IMPORTED_MODULE_5__["ConnectService"] }, { type: _services_messages_service__WEBPACK_IMPORTED_MODULE_6__["MessagesService"] }, { type: _ngxs_store__WEBPACK_IMPORTED_MODULE_7__["Store"] }]; }, { messagesComponent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_components_session_messages_session_messages_component__WEBPACK_IMPORTED_MODULE_2__["SessionMessagesComponent"]]
        }] }); })();


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
            this.socket.close();
            this.socket = null;
        }
        const path = '/' + id;
        this.socket = socket_io_client__WEBPACK_IMPORTED_MODULE_2__(this.socketUrl, {
            path,
            reconnection: _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].reconnectSettings.reconnection,
            reconnectionDelay: _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].reconnectSettings.reconnectionDelay,
            reconnectionDelayMax: _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].reconnectSettings.reconnectionDelayMax,
            reconnectionAttempts: _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].reconnectSettings.reconnectionAttempts,
        });
        /*this.socket.on(enviroment.messageIdentifier, function (msg) {
          console.log(msg);
        });*/
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _store_app_state__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../store/app.state */ "./src/app/store/app.state.ts");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngxs/store */ "./node_modules/@ngxs/store/__ivy_ngcc__/fesm2015/ngxs-store.js");






class MessagesService {
    constructor() {
        this.userId = null;
        this.onUpdate$$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]([]);
        this.messages = [];
        this.userId$.subscribe((uId) => {
            console.log('UID changed');
            this.userId = uId;
        });
    }
    get onUpdate$() {
        return this.onUpdate$$.asObservable();
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
        this.messages.push(msg);
        this.onUpdate$$.next(this.messages);
    }
    removeAllMessages() {
        this.messages = [];
        this.onUpdate$$.next(this.messages);
    }
    ngOnDestroy() {
        this.onUpdate$$.complete();
    }
}
MessagesService.ɵfac = function MessagesService_Factory(t) { return new (t || MessagesService)(); };
MessagesService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: MessagesService, factory: MessagesService.ɵfac, providedIn: 'root' });
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_4__["Select"])(_store_app_state__WEBPACK_IMPORTED_MODULE_3__["AppState"].userId)
], MessagesService.prototype, "userId$", void 0);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MessagesService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return []; }, { userId$: [] }); })();


/***/ }),

/***/ "./src/app/store/app.action.ts":
/*!*************************************!*\
  !*** ./src/app/store/app.action.ts ***!
  \*************************************/
/*! exports provided: SetUserId, SetSessionId, SetUserName, SetUserInSession */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetUserId", function() { return SetUserId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetSessionId", function() { return SetSessionId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetUserName", function() { return SetUserName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetUserInSession", function() { return SetUserInSession; });
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
AppState = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["State"])({
        name: 'appState',
        defaults: {
            userId: null,
            sessionId: '0000',
            userName: null,
            userInSession: new Map(),
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
    socketEndpoint: 'http://172.16.40.80:4269',
    messageIdentifier: 'chat message',
    reconnectSettings: {
        reconnection: true,
        reconnectionDelay: 500,
        reconnectionDelayMax: 5000,
        reconnectionAttempts: 5,
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

module.exports = __webpack_require__(/*! C:\Users\Julius\Documents\Praktikum web und soehne\Sockets.ioTutorial\frontend\src\main.ts */"./src/main.ts");


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