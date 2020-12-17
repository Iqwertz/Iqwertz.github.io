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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _sites_main_main_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sites/main/main.component */ "./src/app/sites/main/main.component.ts");





const routes = [
    {
        path: 'configurator',
        component: _sites_main_main_component__WEBPACK_IMPORTED_MODULE_2__["MainComponent"],
    },
    {
        path: '',
        component: _sites_main_main_component__WEBPACK_IMPORTED_MODULE_2__["MainComponent"],
    },
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
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
        this.title = 'LaunchpadConfigurator';
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
                styleUrls: ['./app.component.scss']
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _sites_main_main_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sites/main/main.component */ "./src/app/sites/main/main.component.ts");
/* harmony import */ var _components_sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/sidenav/sidenav.component */ "./src/app/components/sidenav/sidenav.component.ts");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sidenav.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_components_color_picker__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular-material-components/color-picker */ "./node_modules/@angular-material-components/color-picker/__ivy_ngcc__/fesm2015/angular-material-components-color-picker.js");
/* harmony import */ var _components_dragndrop_dragndrop_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/dragndrop/dragndrop.component */ "./src/app/components/dragndrop/dragndrop.component.ts");
/* harmony import */ var _components_dnd_progress_dnd_progress_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/dnd-progress/dnd-progress.component */ "./src/app/components/dnd-progress/dnd-progress.component.ts");
/* harmony import */ var _components_loader_loader_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/loader/loader.component */ "./src/app/components/loader/loader.component.ts");
/* harmony import */ var _components_settings_sidenav_settings_sidenav_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/settings-sidenav/settings-sidenav.component */ "./src/app/components/settings-sidenav/settings-sidenav.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/cdk/scrolling */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/scrolling.js");
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/cdk/bidi */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/bidi.js");
/* harmony import */ var _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/cdk/text-field */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/text-field.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");


































class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [
        { provide: _angular_material_components_color_picker__WEBPACK_IMPORTED_MODULE_14__["MAT_COLOR_FORMATS"], useValue: _angular_material_components_color_picker__WEBPACK_IMPORTED_MODULE_14__["NGX_MAT_COLOR_FORMATS"] }
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_7__["MatSidenavModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInputModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButtonModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_12__["MatSelectModule"],
            _angular_material_components_color_picker__WEBPACK_IMPORTED_MODULE_14__["NgxMatColorPickerModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatFormFieldModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _sites_main_main_component__WEBPACK_IMPORTED_MODULE_4__["MainComponent"],
        _components_sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_5__["SidenavComponent"],
        _components_dragndrop_dragndrop_component__WEBPACK_IMPORTED_MODULE_15__["DragndropComponent"],
        _components_dnd_progress_dnd_progress_component__WEBPACK_IMPORTED_MODULE_16__["ProgressComponent"],
        _components_loader_loader_component__WEBPACK_IMPORTED_MODULE_17__["LoaderComponent"],
        _components_settings_sidenav_settings_sidenav_component__WEBPACK_IMPORTED_MODULE_18__["SettingsSidenavComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_7__["MatSidenavModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInputModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButtonModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_12__["MatSelectModule"],
        _angular_material_components_color_picker__WEBPACK_IMPORTED_MODULE_14__["NgxMatColorPickerModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatFormFieldModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _sites_main_main_component__WEBPACK_IMPORTED_MODULE_4__["MainComponent"],
                    _components_sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_5__["SidenavComponent"],
                    _components_dragndrop_dragndrop_component__WEBPACK_IMPORTED_MODULE_15__["DragndropComponent"],
                    _components_dnd_progress_dnd_progress_component__WEBPACK_IMPORTED_MODULE_16__["ProgressComponent"],
                    _components_loader_loader_component__WEBPACK_IMPORTED_MODULE_17__["LoaderComponent"],
                    _components_settings_sidenav_settings_sidenav_component__WEBPACK_IMPORTED_MODULE_18__["SettingsSidenavComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_7__["MatSidenavModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInputModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButtonModule"],
                    _angular_material_select__WEBPACK_IMPORTED_MODULE_12__["MatSelectModule"],
                    _angular_material_components_color_picker__WEBPACK_IMPORTED_MODULE_14__["NgxMatColorPickerModule"],
                    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatFormFieldModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"],
                ],
                providers: [
                    { provide: _angular_material_components_color_picker__WEBPACK_IMPORTED_MODULE_14__["MAT_COLOR_FORMATS"], useValue: _angular_material_components_color_picker__WEBPACK_IMPORTED_MODULE_14__["NGX_MAT_COLOR_FORMATS"] }
                ],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();
_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetComponentScope"](_sites_main_main_component__WEBPACK_IMPORTED_MODULE_4__["MainComponent"], [_angular_common__WEBPACK_IMPORTED_MODULE_19__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_19__["NgComponentOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_19__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_19__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_19__["NgTemplateOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_19__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_19__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_19__["NgSwitchCase"], _angular_common__WEBPACK_IMPORTED_MODULE_19__["NgSwitchDefault"], _angular_common__WEBPACK_IMPORTED_MODULE_19__["NgPlural"], _angular_common__WEBPACK_IMPORTED_MODULE_19__["NgPluralCase"], _angular_router__WEBPACK_IMPORTED_MODULE_20__["RouterOutlet"], _angular_router__WEBPACK_IMPORTED_MODULE_20__["RouterLink"], _angular_router__WEBPACK_IMPORTED_MODULE_20__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_20__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_20__["ɵangular_packages_router_router_l"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_21__["CdkScrollable"], _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_22__["Dir"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_7__["MatDrawer"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_7__["MatDrawerContainer"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_7__["MatDrawerContent"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_7__["MatSidenav"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_7__["MatSidenavContainer"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_7__["MatSidenavContent"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIcon"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ɵangular_packages_forms_forms_x"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["RangeValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["CheckboxControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["SelectMultipleControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["RadioControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["MinLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["MaxLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["PatternValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["CheckboxRequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["EmailValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgModelGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgForm"], _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_23__["CdkAutofill"], _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_23__["CdkTextareaAutosize"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatError"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatHint"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatLabel"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatPlaceholder"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatPrefix"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatSuffix"], _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInput"], _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatTextareaAutosize"], _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButton"], _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatAnchor"], _angular_material_select__WEBPACK_IMPORTED_MODULE_12__["MatSelect"], _angular_material_select__WEBPACK_IMPORTED_MODULE_12__["MatSelectTrigger"], _angular_material_core__WEBPACK_IMPORTED_MODULE_24__["MatOption"], _angular_material_core__WEBPACK_IMPORTED_MODULE_24__["MatOptgroup"], _angular_material_components_color_picker__WEBPACK_IMPORTED_MODULE_14__["NgxMatColorToggleComponent"], _angular_material_components_color_picker__WEBPACK_IMPORTED_MODULE_14__["NgxMatColorPickerInput"], _angular_material_components_color_picker__WEBPACK_IMPORTED_MODULE_14__["NgxMatColorPickerComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControlDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormGroupName"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormArrayName"], _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
    _sites_main_main_component__WEBPACK_IMPORTED_MODULE_4__["MainComponent"],
    _components_sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_5__["SidenavComponent"],
    _components_dragndrop_dragndrop_component__WEBPACK_IMPORTED_MODULE_15__["DragndropComponent"],
    _components_dnd_progress_dnd_progress_component__WEBPACK_IMPORTED_MODULE_16__["ProgressComponent"],
    _components_loader_loader_component__WEBPACK_IMPORTED_MODULE_17__["LoaderComponent"],
    _components_settings_sidenav_settings_sidenav_component__WEBPACK_IMPORTED_MODULE_18__["SettingsSidenavComponent"]], [_angular_common__WEBPACK_IMPORTED_MODULE_19__["AsyncPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_19__["UpperCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_19__["LowerCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_19__["JsonPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_19__["SlicePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_19__["DecimalPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_19__["PercentPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_19__["TitleCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_19__["CurrencyPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_19__["DatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_19__["I18nPluralPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_19__["I18nSelectPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_19__["KeyValuePipe"]]);
_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetComponentScope"](_components_sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_5__["SidenavComponent"], [_angular_common__WEBPACK_IMPORTED_MODULE_19__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_19__["NgComponentOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_19__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_19__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_19__["NgTemplateOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_19__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_19__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_19__["NgSwitchCase"], _angular_common__WEBPACK_IMPORTED_MODULE_19__["NgSwitchDefault"], _angular_common__WEBPACK_IMPORTED_MODULE_19__["NgPlural"], _angular_common__WEBPACK_IMPORTED_MODULE_19__["NgPluralCase"], _angular_router__WEBPACK_IMPORTED_MODULE_20__["RouterOutlet"], _angular_router__WEBPACK_IMPORTED_MODULE_20__["RouterLink"], _angular_router__WEBPACK_IMPORTED_MODULE_20__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_20__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_20__["ɵangular_packages_router_router_l"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_21__["CdkScrollable"], _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_22__["Dir"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_7__["MatDrawer"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_7__["MatDrawerContainer"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_7__["MatDrawerContent"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_7__["MatSidenav"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_7__["MatSidenavContainer"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_7__["MatSidenavContent"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIcon"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ɵangular_packages_forms_forms_x"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["RangeValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["CheckboxControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["SelectMultipleControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["RadioControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["MinLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["MaxLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["PatternValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["CheckboxRequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["EmailValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgModelGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgForm"], _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_23__["CdkAutofill"], _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_23__["CdkTextareaAutosize"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatError"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatHint"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatLabel"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatPlaceholder"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatPrefix"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatSuffix"], _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInput"], _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatTextareaAutosize"], _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButton"], _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatAnchor"], _angular_material_select__WEBPACK_IMPORTED_MODULE_12__["MatSelect"], _angular_material_select__WEBPACK_IMPORTED_MODULE_12__["MatSelectTrigger"], _angular_material_core__WEBPACK_IMPORTED_MODULE_24__["MatOption"], _angular_material_core__WEBPACK_IMPORTED_MODULE_24__["MatOptgroup"], _angular_material_components_color_picker__WEBPACK_IMPORTED_MODULE_14__["NgxMatColorToggleComponent"], _angular_material_components_color_picker__WEBPACK_IMPORTED_MODULE_14__["NgxMatColorPickerInput"], _angular_material_components_color_picker__WEBPACK_IMPORTED_MODULE_14__["NgxMatColorPickerComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControlDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormGroupName"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormArrayName"], _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
    _sites_main_main_component__WEBPACK_IMPORTED_MODULE_4__["MainComponent"],
    _components_sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_5__["SidenavComponent"],
    _components_dragndrop_dragndrop_component__WEBPACK_IMPORTED_MODULE_15__["DragndropComponent"],
    _components_dnd_progress_dnd_progress_component__WEBPACK_IMPORTED_MODULE_16__["ProgressComponent"],
    _components_loader_loader_component__WEBPACK_IMPORTED_MODULE_17__["LoaderComponent"],
    _components_settings_sidenav_settings_sidenav_component__WEBPACK_IMPORTED_MODULE_18__["SettingsSidenavComponent"]], [_angular_common__WEBPACK_IMPORTED_MODULE_19__["AsyncPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_19__["UpperCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_19__["LowerCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_19__["JsonPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_19__["SlicePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_19__["DecimalPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_19__["PercentPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_19__["TitleCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_19__["CurrencyPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_19__["DatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_19__["I18nPluralPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_19__["I18nSelectPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_19__["KeyValuePipe"]]);


/***/ }),

/***/ "./src/app/components/dnd-progress/dnd-progress.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/dnd-progress/dnd-progress.component.ts ***!
  \*******************************************************************/
/*! exports provided: ProgressComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgressComponent", function() { return ProgressComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class ProgressComponent {
    constructor() {
        this.progress = 0;
    }
    ngOnInit() {
    }
}
ProgressComponent.ɵfac = function ProgressComponent_Factory(t) { return new (t || ProgressComponent)(); };
ProgressComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProgressComponent, selectors: [["dnd-progress"]], inputs: { progress: "progress" }, decls: 2, vars: 2, consts: [[1, "progress-cont"], [1, "progress"]], template: function ProgressComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("width", ctx.progress + "%");
    } }, styles: [".progress-cont[_ngcontent-%COMP%] {\n  height: 7px;\n  width: 100%;\n  border-radius: 4px;\n  background-color: #d0d0d0;\n  position: relative;\n}\n.progress-cont[_ngcontent-%COMP%]   .progress[_ngcontent-%COMP%] {\n  width: 0;\n  height: 100%;\n  position: absolute;\n  z-index: 1;\n  top: 0;\n  left: 0;\n  border-radius: 4px;\n  background-color: #4c97cb;\n  transition: 0.5s all;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9kbmQtcHJvZ3Jlc3MvZG5kLXByb2dyZXNzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7QUFDRjtBQUNFO0VBQ0UsUUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxvQkFBQTtBQUNKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9kbmQtcHJvZ3Jlc3MvZG5kLXByb2dyZXNzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnByb2dyZXNzLWNvbnQge1xyXG4gIGhlaWdodDogN3B4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDBkMGQwO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbiAgLnByb2dyZXNzIHtcclxuICAgIHdpZHRoOiAwO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgei1pbmRleDogMTtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNGM5N2NiO1xyXG4gICAgdHJhbnNpdGlvbjogMC41cyBhbGw7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProgressComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'dnd-progress',
                templateUrl: './dnd-progress.component.html',
                styleUrls: ['./dnd-progress.component.scss']
            }]
    }], function () { return []; }, { progress: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/components/dragndrop/dragndrop.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/dragndrop/dragndrop.component.ts ***!
  \*************************************************************/
/*! exports provided: DragndropComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DragndropComponent", function() { return DragndropComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_matrix_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../services/matrix-data.service */ "./src/app/services/matrix-data.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");




function DragndropComponent_div_0_input_2_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "input", 12, 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function DragndropComponent_div_0_input_2_Template_input_change_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r5.fileBrowseHandler($event.target.files); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DragndropComponent_div_0_input_3_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "input", 14, 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function DragndropComponent_div_0_input_3_Template_input_change_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r8.fileBrowseHandler($event.target.files); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DragndropComponent_div_0_div_16_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "svg", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "polygon", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "g");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "path", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "path", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "path", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "path", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "path", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "polygon", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h4", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DragndropComponent_div_0_div_16_Template_div_click_16_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const i_r11 = ctx.index; const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r12.deleteFile(i_r11); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "svg", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "path", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const file_r10 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", file_r10 == null ? null : file_r10.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r3.formatBytes(file_r10 == null ? null : file_r10.size), " ");
} }
function DragndropComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("fileDropped", function DragndropComponent_div_0_Template_div_fileDropped_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r14.onFileDropped($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, DragndropComponent_div_0_input_2_Template, 2, 0, "input", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, DragndropComponent_div_0_input_3_Template, 2, 0, "input", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "svg", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "g", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "path", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "path", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "path", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Drag and drop music files here");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "or");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "label", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Browse for file");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, DragndropComponent_div_0_div_16_Template, 19, 2, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.matrixData[ctx_r0.position[0]][ctx_r0.position[1]].action.value == "MF");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.matrixData[ctx_r0.position[0]][ctx_r0.position[1]].action.value == "SE");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.matrixData[ctx_r0.position[0]][ctx_r0.position[1]].musicfiles);
} }
class DragndropComponent {
    constructor(matrixDataService) {
        this.matrixDataService = matrixDataService;
        this.position = [];
        this.files = [];
        this.matrixData = [[]];
    }
    ngOnInit() {
        this.matrixDataService.currentData.subscribe((res) => {
            this.matrixData = res;
            console.log(res);
        });
    }
    /**
     * on file drop handler
     */
    onFileDropped($event) {
        this.prepareFilesList($event);
    }
    /**
     * handle file from browsing
     */
    fileBrowseHandler(files) {
        this.prepareFilesList(files);
    }
    /**
     * Delete file from files list
     * @param index (File index)
     */
    deleteFile(index) {
        //this.matrixData[this.position[0]][this.position[1]].musicfiles.splice(index, 1);
    }
    /**
     * Simulate the upload process
     */
    uploadFilesSimulator(index) {
        setTimeout(() => {
            if (index === this.files.length) {
                return;
            }
            else {
                const progressInterval = setInterval(() => {
                    if (this.files[index].progress === 100) {
                        clearInterval(progressInterval);
                        this.uploadFilesSimulator(index + 1);
                    }
                    else {
                        this.files[index].progress += 5;
                    }
                }, 200);
            }
        }, 1000);
    }
    /**
     * Convert Files list to normal array list
     * @param files (Files List)
     */
    prepareFilesList(files) {
        console.log(this.position);
        console.log(this.matrixData);
        if (this.matrixData[this.position[0]][this.position[1]].action.value == 'MF') {
            for (const item of files) {
                //item.progress = 0;
                this.matrixData[this.position[0]][this.position[1]].musicfiles.push(item);
                // FileSaver.saveAs(item, 'test.wav');
            }
        }
        else {
            this.matrixData[this.position[0]][this.position[1]].musicfiles = [
                files[0],
            ];
        }
    }
    /**
     * format bytes
     * @param bytes (File size in bytes)
     * @param decimals (Decimals point)
     */
    formatBytes(bytes, decimals) {
        if (bytes === 0) {
            return '0 Bytes';
        }
        const k = 1024;
        const dm = decimals <= 0 ? 0 : decimals || 2;
        const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
        const i = Math.floor(Math.log(bytes) / Math.log(k));
        return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
    }
}
DragndropComponent.ɵfac = function DragndropComponent_Factory(t) { return new (t || DragndropComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_matrix_data_service__WEBPACK_IMPORTED_MODULE_1__["MatrixDataService"])); };
DragndropComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DragndropComponent, selectors: [["app-dragndrop"]], inputs: { position: "position" }, decls: 1, vars: 1, consts: [[4, "ngIf"], ["appDnd", "", "accept", "audio/wav", 1, "container", 3, "fileDropped"], ["type", "file", "id", "fileDropRef", "multiple", "", "accept", "audio/wav", 3, "change", 4, "ngIf"], ["type", "file", "id", "fileDropRef", "accept", "audio/wav", 3, "change", 4, "ngIf"], ["xmlns", "http://www.w3.org/2000/svg", "width", "63", "height", "64", "viewBox", "0 0 63 64"], ["fill", "#fff", "fill-rule", "nonzero"], ["d", "M42.656 15.135a1.953 1.953 0 0 1-1.391-.578L31.5 4.795l-9.765 9.762a1.97 1.97 0 1 1-2.785-2.785L30.106.616a1.97 1.97 0 0 1 2.785 0l11.157 11.156a1.97 1.97 0 0 1-1.392 3.363z"], ["d", "M31.5 36.791a1.97 1.97 0 0 1-1.969-1.969V2.01a1.97 1.97 0 0 1 3.938 0v32.812a1.97 1.97 0 0 1-1.969 1.969z"], ["d", "M55.781 63.041H7.22A7.225 7.225 0 0 1 0 55.822V41.385a4.599 4.599 0 0 1 4.594-4.594h7.234a4.567 4.567 0 0 1 4.402 3.276l2.814 9.382a.658.658 0 0 0 .628.467h23.656a.658.658 0 0 0 .628-.467l2.814-9.385a4.572 4.572 0 0 1 4.402-3.273h7.234A4.599 4.599 0 0 1 63 41.385v14.437a7.225 7.225 0 0 1-7.219 7.219zM4.594 40.729a.656.656 0 0 0-.657.656v14.437a3.286 3.286 0 0 0 3.282 3.282H55.78a3.286 3.286 0 0 0 3.282-3.282V41.385a.656.656 0 0 0-.657-.656h-7.234a.65.65 0 0 0-.628.467L47.73 50.58a4.628 4.628 0 0 1-4.402 3.274H19.672a4.567 4.567 0 0 1-4.402-3.276l-2.814-9.382a.65.65 0 0 0-.628-.467H4.594z"], ["for", "fileDropRef"], [1, "files-list"], ["class", "single-file", 4, "ngFor", "ngForOf"], ["type", "file", "id", "fileDropRef", "multiple", "", "accept", "audio/wav", 3, "change"], ["fileDropRef", ""], ["type", "file", "id", "fileDropRef", "accept", "audio/wav", 3, "change"], [1, "single-file"], [1, "file-icon", 2, "width", "50px"], ["version", "1.1", "id", "Capa_1", "xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "x", "0px", "y", "0px", "viewBox", "0 0 58 58", 0, "xml", "space", "preserve", 2, "enable-background", "new 0 0 58 58"], ["points", "51.5,14 37.5,0 6.5,0 6.5,58 51.5,58 ", 2, "fill", "#edeada"], ["d", "M16.5,23h25c0.552,0,1-0.447,1-1s-0.448-1-1-1h-25c-0.552,0-1,0.447-1,1S15.948,23,16.5,23z", 2, "fill", "#cec9ae"], ["d", "M16.5,15h10c0.552,0,1-0.447,1-1s-0.448-1-1-1h-10c-0.552,0-1,0.447-1,1S15.948,15,16.5,15z", 2, "fill", "#cec9ae"], ["d", "M41.5,29h-25c-0.552,0-1,0.447-1,1s0.448,1,1,1h25c0.552,0,1-0.447,1-1S42.052,29,41.5,29z", 2, "fill", "#cec9ae"], ["d", "M41.5,37h-25c-0.552,0-1,0.447-1,1s0.448,1,1,1h25c0.552,0,1-0.447,1-1S42.052,37,41.5,37z", 2, "fill", "#cec9ae"], ["d", "M41.5,45h-25c-0.552,0-1,0.447-1,1s0.448,1,1,1h25c0.552,0,1-0.447,1-1S42.052,45,41.5,45z", 2, "fill", "#cec9ae"], ["points", "37.5,0 37.5,14 51.5,14 ", 2, "fill", "#cec9ae"], [1, "info"], [1, "name"], [1, "size"], [1, "delete", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "width", "14", "height", "18", "viewBox", "0 0 14 18"], ["fill", "#B1B1B1", "fill-rule", "nonzero", "d", "M1 16c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2H3c-1.1 0-2 .9-2 2v10zm3.17-7.83a.996.996 0 0 1 1.41 0L7 9.59l1.42-1.42a.996.996 0 1 1 1.41 1.41L8.41 11l1.42 1.42a.996.996 0 1 1-1.41 1.41L7 12.41l-1.42 1.42a.996.996 0 1 1-1.41-1.41L5.59 11 4.17 9.58a.996.996 0 0 1 0-1.41zM10.5 1L9.79.29C9.61.11 9.35 0 9.09 0H4.91c-.26 0-.52.11-.7.29L3.5 1H1c-.55 0-1 .45-1 1s.45 1 1 1h12c.55 0 1-.45 1-1s-.45-1-1-1h-2.5z"]], template: function DragndropComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, DragndropComponent_div_0_Template, 17, 3, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.matrixData[ctx.position[0]][ctx.position[1]].action.value == "MF" || ctx.matrixData[ctx.position[0]][ctx.position[1]].action.value == "SE");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], styles: [".container[_ngcontent-%COMP%] {\n  width: 150px;\n  height: 200px;\n  padding: 2rem;\n  text-align: center;\n  border: dashed 1px #979797;\n  position: relative;\n  margin: 0 auto;\n}\n.container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  opacity: 0;\n  position: absolute;\n  z-index: 2;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n}\n.container[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  color: white;\n  width: 183px;\n  height: 44px;\n  border-radius: 21.5px;\n  background-color: #db202f;\n  padding: 8px 16px;\n}\n.container[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 300;\n  color: #ececec;\n}\n.fileover[_ngcontent-%COMP%] {\n  animation: shake 1s;\n  animation-iteration-count: infinite;\n}\n.files-list[_ngcontent-%COMP%] {\n  margin-top: 1.5rem;\n}\n.files-list[_ngcontent-%COMP%]   .single-file[_ngcontent-%COMP%] {\n  display: flex;\n  padding: 0.5rem;\n  justify-content: space-between;\n  align-items: center;\n  border: dashed 1px #979797;\n  margin-bottom: 1rem;\n  display: flex;\n  flex-grow: 1;\n}\n.files-list[_ngcontent-%COMP%]   .single-file[_ngcontent-%COMP%]   .delete[_ngcontent-%COMP%] {\n  display: flex;\n  margin-left: 0.5rem;\n  cursor: pointer;\n  align-self: flex-end;\n}\n.files-list[_ngcontent-%COMP%]   .single-file[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 500;\n  color: #e9e9e9;\n  margin: 0;\n}\n.files-list[_ngcontent-%COMP%]   .single-file[_ngcontent-%COMP%]   .size[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 500;\n  color: #a4a4a4;\n  margin: 0;\n  margin-bottom: 0.25rem;\n}\n.files-list[_ngcontent-%COMP%]   .single-file[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n@keyframes shake {\n  0% {\n    transform: translate(1px, 1px) rotate(0deg);\n  }\n  10% {\n    transform: translate(-1px, -2px) rotate(-1deg);\n  }\n  20% {\n    transform: translate(-3px, 0px) rotate(1deg);\n  }\n  30% {\n    transform: translate(3px, 2px) rotate(0deg);\n  }\n  40% {\n    transform: translate(1px, -1px) rotate(1deg);\n  }\n  50% {\n    transform: translate(-1px, 2px) rotate(-1deg);\n  }\n  60% {\n    transform: translate(-3px, 1px) rotate(0deg);\n  }\n  70% {\n    transform: translate(3px, 1px) rotate(-1deg);\n  }\n  80% {\n    transform: translate(-1px, -1px) rotate(1deg);\n  }\n  90% {\n    transform: translate(1px, 2px) rotate(0deg);\n  }\n  100% {\n    transform: translate(1px, -2px) rotate(-1deg);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9kcmFnbmRyb3AvZHJhZ25kcm9wLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSwwQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBQUNGO0FBQ0U7RUFDRSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtBQUNKO0FBRUU7RUFDRSxZQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtFQUNBLHlCQUFBO0VBQ0EsaUJBQUE7QUFBSjtBQUdFO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQURKO0FBS0E7RUFDRSxtQkFBQTtFQUNBLG1DQUFBO0FBRkY7QUFLQTtFQUNFLGtCQUFBO0FBRkY7QUFJRTtFQUNFLGFBQUE7RUFDQSxlQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLDBCQUFBO0VBQ0EsbUJBQUE7RUFTQSxhQUFBO0VBQ0EsWUFBQTtBQVZKO0FBRUk7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0Esb0JBQUE7QUFBTjtBQU1JO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLFNBQUE7QUFKTjtBQU9JO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLFNBQUE7RUFDQSxzQkFBQTtBQUxOO0FBUUk7RUFDRSxXQUFBO0FBTk47QUFXQSxvQkFBQTtBQUNBO0VBQ0U7SUFDRSwyQ0FBQTtFQVJGO0VBV0E7SUFDRSw4Q0FBQTtFQVRGO0VBWUE7SUFDRSw0Q0FBQTtFQVZGO0VBYUE7SUFDRSwyQ0FBQTtFQVhGO0VBY0E7SUFDRSw0Q0FBQTtFQVpGO0VBZUE7SUFDRSw2Q0FBQTtFQWJGO0VBZ0JBO0lBQ0UsNENBQUE7RUFkRjtFQWlCQTtJQUNFLDRDQUFBO0VBZkY7RUFrQkE7SUFDRSw2Q0FBQTtFQWhCRjtFQW1CQTtJQUNFLDJDQUFBO0VBakJGO0VBb0JBO0lBQ0UsNkNBQUE7RUFsQkY7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZHJhZ25kcm9wL2RyYWduZHJvcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xyXG4gIHdpZHRoOiAxNTBweDtcclxuICBoZWlnaHQ6IDIwMHB4O1xyXG4gIHBhZGRpbmc6IDJyZW07XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGJvcmRlcjogZGFzaGVkIDFweCAjOTc5Nzk3O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBtYXJnaW46IDAgYXV0bztcclxuXHJcbiAgaW5wdXQge1xyXG4gICAgb3BhY2l0eTogMDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHotaW5kZXg6IDI7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgfVxyXG5cclxuICBsYWJlbCB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB3aWR0aDogMTgzcHg7XHJcbiAgICBoZWlnaHQ6IDQ0cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMS41cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGIyMDJmO1xyXG4gICAgcGFkZGluZzogOHB4IDE2cHg7XHJcbiAgfVxyXG5cclxuICBoMyB7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgY29sb3I6ICNlY2VjZWM7XHJcbiAgfVxyXG59XHJcblxyXG4uZmlsZW92ZXIge1xyXG4gIGFuaW1hdGlvbjogc2hha2UgMXM7XHJcbiAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XHJcbn1cclxuXHJcbi5maWxlcy1saXN0IHtcclxuICBtYXJnaW4tdG9wOiAxLjVyZW07XHJcblxyXG4gIC5zaW5nbGUtZmlsZSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgcGFkZGluZzogMC41cmVtO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGJvcmRlcjogZGFzaGVkIDFweCAjOTc5Nzk3O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxuXHJcbiAgICAuZGVsZXRlIHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgbWFyZ2luLWxlZnQ6IDAuNXJlbTtcclxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcclxuICAgIH1cclxuXHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1ncm93OiAxO1xyXG5cclxuICAgIC5uYW1lIHtcclxuICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICBjb2xvcjogI2U5ZTllOTtcclxuICAgICAgbWFyZ2luOiAwO1xyXG4gICAgfVxyXG5cclxuICAgIC5zaXplIHtcclxuICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICBjb2xvcjogI2E0YTRhNDtcclxuICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAwLjI1cmVtO1xyXG4gICAgfVxyXG5cclxuICAgIC5pbmZvIHtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4vKiBTaGFrZSBhbmltYXRpb24gKi9cclxuQGtleWZyYW1lcyBzaGFrZSB7XHJcbiAgMCUge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMXB4LCAxcHgpIHJvdGF0ZSgwZGVnKTtcclxuICB9XHJcblxyXG4gIDEwJSB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMXB4LCAtMnB4KSByb3RhdGUoLTFkZWcpO1xyXG4gIH1cclxuXHJcbiAgMjAlIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC0zcHgsIDBweCkgcm90YXRlKDFkZWcpO1xyXG4gIH1cclxuXHJcbiAgMzAlIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDNweCwgMnB4KSByb3RhdGUoMGRlZyk7XHJcbiAgfVxyXG5cclxuICA0MCUge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMXB4LCAtMXB4KSByb3RhdGUoMWRlZyk7XHJcbiAgfVxyXG5cclxuICA1MCUge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTFweCwgMnB4KSByb3RhdGUoLTFkZWcpO1xyXG4gIH1cclxuXHJcbiAgNjAlIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC0zcHgsIDFweCkgcm90YXRlKDBkZWcpO1xyXG4gIH1cclxuXHJcbiAgNzAlIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDNweCwgMXB4KSByb3RhdGUoLTFkZWcpO1xyXG4gIH1cclxuXHJcbiAgODAlIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC0xcHgsIC0xcHgpIHJvdGF0ZSgxZGVnKTtcclxuICB9XHJcblxyXG4gIDkwJSB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgxcHgsIDJweCkgcm90YXRlKDBkZWcpO1xyXG4gIH1cclxuXHJcbiAgMTAwJSB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgxcHgsIC0ycHgpIHJvdGF0ZSgtMWRlZyk7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DragndropComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-dragndrop',
                templateUrl: './dragndrop.component.html',
                styleUrls: ['./dragndrop.component.scss'],
            }]
    }], function () { return [{ type: _services_matrix_data_service__WEBPACK_IMPORTED_MODULE_1__["MatrixDataService"] }]; }, { position: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/components/loader/loader.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/loader/loader.component.ts ***!
  \*******************************************************/
/*! exports provided: LoaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoaderComponent", function() { return LoaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");



function LoaderComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](63, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](65, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](67, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](68, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](69, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](71, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](72, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](73, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](75, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](76, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](77, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](79, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](80, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](81, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](83, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](84, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](85, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](87, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](88, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](89, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](91, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](92, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](93, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](95, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](96, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](97, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](99, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](100, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](101, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](103, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](104, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](105, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](107, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](108, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](109, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](111, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](112, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](113, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](115, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](116, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](117, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](119, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](120, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](121, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](123, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](124, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](125, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](127, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](128, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](129, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](131, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](132, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](133, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](135, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](136, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](137, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](139, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](140, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](141, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](143, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](144, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](145, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](147, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](148, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](149, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](151);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](153);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](151);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.loadingData.text);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r0.loadingData.progress, "%");
} }
class LoaderComponent {
    constructor() {
        this.loadingData = {
            enabled: false,
            progress: 0,
            text: '',
        };
    }
    ngOnInit() {
    }
}
LoaderComponent.ɵfac = function LoaderComponent_Factory(t) { return new (t || LoaderComponent)(); };
LoaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoaderComponent, selectors: [["app-loader"]], inputs: { loadingData: "loadingData" }, decls: 1, vars: 1, consts: [["class", "loader-container", 4, "ngIf"], [1, "loader-container"], [1, "socket"], [1, "gel", "center-gel"], [1, "hex-brick", "h1"], [1, "hex-brick", "h2"], [1, "hex-brick", "h3"], [1, "gel", "c1", "r1"], [1, "gel", "c2", "r1"], [1, "gel", "c3", "r1"], [1, "gel", "c4", "r1"], [1, "gel", "c5", "r1"], [1, "gel", "c6", "r1"], [1, "gel", "c7", "r2"], [1, "gel", "c8", "r2"], [1, "gel", "c9", "r2"], [1, "gel", "c10", "r2"], [1, "gel", "c11", "r2"], [1, "gel", "c12", "r2"], [1, "gel", "c13", "r2"], [1, "gel", "c14", "r2"], [1, "gel", "c15", "r2"], [1, "gel", "c16", "r2"], [1, "gel", "c17", "r2"], [1, "gel", "c18", "r2"], [1, "gel", "c19", "r3"], [1, "gel", "c20", "r3"], [1, "gel", "c21", "r3"], [1, "gel", "c22", "r3"], [1, "gel", "c23", "r3"], [1, "gel", "c24", "r3"], [1, "gel", "c25", "r3"], [1, "gel", "c26", "r3"], [1, "gel", "c28", "r3"], [1, "gel", "c29", "r3"], [1, "gel", "c30", "r3"], [1, "gel", "c31", "r3"], [1, "gel", "c32", "r3"], [1, "gel", "c33", "r3"], [1, "gel", "c34", "r3"], [1, "gel", "c35", "r3"], [1, "gel", "c36", "r3"], [1, "gel", "c37", "r3"]], template: function LoaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, LoaderComponent_div_0_Template, 154, 2, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loadingData.enabled);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]], styles: [".loader-container[_ngcontent-%COMP%] {\n  z-index: 15;\n  background-color: rgba(0, 0, 0, 0.5);\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: 0;\n}\n.loader-container[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  position: absolute;\n  color: #fff;\n  top: 52%;\n  width: 100%;\n  text-align: center;\n}\n.loader-container[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  position: absolute;\n  color: #fff;\n  width: 100%;\n  top: 55%;\n  text-align: center;\n}\n.socket[_ngcontent-%COMP%] {\n  width: 200px;\n  height: 200px;\n  position: absolute;\n  left: 50%;\n  margin-left: -100px;\n  top: 40%;\n  margin-top: -100px;\n}\n.hex-brick[_ngcontent-%COMP%] {\n  background: #ffffff;\n  width: 30px;\n  height: 17px;\n  position: absolute;\n  top: 5px;\n  animation-name: fade;\n  animation-duration: 2s;\n  animation-iteration-count: infinite;\n  -webkit-animation-name: fade;\n  -webkit-animation-duration: 2s;\n  -webkit-animation-iteration-count: infinite;\n}\n.h2[_ngcontent-%COMP%] {\n  transform: rotate(60deg);\n  -webkit-transform: rotate(60deg);\n}\n.h3[_ngcontent-%COMP%] {\n  transform: rotate(-60deg);\n  -webkit-transform: rotate(-60deg);\n}\n.gel[_ngcontent-%COMP%] {\n  height: 30px;\n  width: 30px;\n  transition: all 0.3s;\n  -webkit-transition: all 0.3s;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n}\n.center-gel[_ngcontent-%COMP%] {\n  margin-left: -15px;\n  margin-top: -15px;\n  animation-name: pulse;\n  animation-duration: 2s;\n  animation-iteration-count: infinite;\n  -webkit-animation-name: pulse;\n  -webkit-animation-duration: 2s;\n  -webkit-animation-iteration-count: infinite;\n}\n.c1[_ngcontent-%COMP%] {\n  margin-left: -47px;\n  margin-top: -15px;\n}\n.c2[_ngcontent-%COMP%] {\n  margin-left: -31px;\n  margin-top: -43px;\n}\n.c3[_ngcontent-%COMP%] {\n  margin-left: 1px;\n  margin-top: -43px;\n}\n.c4[_ngcontent-%COMP%] {\n  margin-left: 17px;\n  margin-top: -15px;\n}\n.c5[_ngcontent-%COMP%] {\n  margin-left: -31px;\n  margin-top: 13px;\n}\n.c6[_ngcontent-%COMP%] {\n  margin-left: 1px;\n  margin-top: 13px;\n}\n.c7[_ngcontent-%COMP%] {\n  margin-left: -63px;\n  margin-top: -43px;\n}\n.c8[_ngcontent-%COMP%] {\n  margin-left: 33px;\n  margin-top: -43px;\n}\n.c9[_ngcontent-%COMP%] {\n  margin-left: -15px;\n  margin-top: 41px;\n}\n.c10[_ngcontent-%COMP%] {\n  margin-left: -63px;\n  margin-top: 13px;\n}\n.c11[_ngcontent-%COMP%] {\n  margin-left: 33px;\n  margin-top: 13px;\n}\n.c12[_ngcontent-%COMP%] {\n  margin-left: -15px;\n  margin-top: -71px;\n}\n.c13[_ngcontent-%COMP%] {\n  margin-left: -47px;\n  margin-top: -71px;\n}\n.c14[_ngcontent-%COMP%] {\n  margin-left: 17px;\n  margin-top: -71px;\n}\n.c15[_ngcontent-%COMP%] {\n  margin-left: -47px;\n  margin-top: 41px;\n}\n.c16[_ngcontent-%COMP%] {\n  margin-left: 17px;\n  margin-top: 41px;\n}\n.c17[_ngcontent-%COMP%] {\n  margin-left: -79px;\n  margin-top: -15px;\n}\n.c18[_ngcontent-%COMP%] {\n  margin-left: 49px;\n  margin-top: -15px;\n}\n.c19[_ngcontent-%COMP%] {\n  margin-left: -63px;\n  margin-top: -99px;\n}\n.c20[_ngcontent-%COMP%] {\n  margin-left: 33px;\n  margin-top: -99px;\n}\n.c21[_ngcontent-%COMP%] {\n  margin-left: 1px;\n  margin-top: -99px;\n}\n.c22[_ngcontent-%COMP%] {\n  margin-left: -31px;\n  margin-top: -99px;\n}\n.c23[_ngcontent-%COMP%] {\n  margin-left: -63px;\n  margin-top: 69px;\n}\n.c24[_ngcontent-%COMP%] {\n  margin-left: 33px;\n  margin-top: 69px;\n}\n.c25[_ngcontent-%COMP%] {\n  margin-left: 1px;\n  margin-top: 69px;\n}\n.c26[_ngcontent-%COMP%] {\n  margin-left: -31px;\n  margin-top: 69px;\n}\n.c27[_ngcontent-%COMP%] {\n  margin-left: -79px;\n  margin-top: -15px;\n}\n.c28[_ngcontent-%COMP%] {\n  margin-left: -95px;\n  margin-top: -43px;\n}\n.c29[_ngcontent-%COMP%] {\n  margin-left: -95px;\n  margin-top: 13px;\n}\n.c30[_ngcontent-%COMP%] {\n  margin-left: 49px;\n  margin-top: 41px;\n}\n.c31[_ngcontent-%COMP%] {\n  margin-left: -79px;\n  margin-top: -71px;\n}\n.c32[_ngcontent-%COMP%] {\n  margin-left: -111px;\n  margin-top: -15px;\n}\n.c33[_ngcontent-%COMP%] {\n  margin-left: 65px;\n  margin-top: -43px;\n}\n.c34[_ngcontent-%COMP%] {\n  margin-left: 65px;\n  margin-top: 13px;\n}\n.c35[_ngcontent-%COMP%] {\n  margin-left: -79px;\n  margin-top: 41px;\n}\n.c36[_ngcontent-%COMP%] {\n  margin-left: 49px;\n  margin-top: -71px;\n}\n.c37[_ngcontent-%COMP%] {\n  margin-left: 81px;\n  margin-top: -15px;\n}\n.r1[_ngcontent-%COMP%] {\n  animation-name: pulse;\n  animation-duration: 2s;\n  animation-iteration-count: infinite;\n  animation-delay: 0.2s;\n  -webkit-animation-name: pulse;\n  -webkit-animation-duration: 2s;\n  -webkit-animation-iteration-count: infinite;\n  -webkit-animation-delay: 0.2s;\n}\n.r2[_ngcontent-%COMP%] {\n  animation-name: pulse;\n  animation-duration: 2s;\n  animation-iteration-count: infinite;\n  animation-delay: 0.4s;\n  -webkit-animation-name: pulse;\n  -webkit-animation-duration: 2s;\n  -webkit-animation-iteration-count: infinite;\n  -webkit-animation-delay: 0.4s;\n}\n.r3[_ngcontent-%COMP%] {\n  animation-name: pulse;\n  animation-duration: 2s;\n  animation-iteration-count: infinite;\n  animation-delay: 0.6s;\n  -webkit-animation-name: pulse;\n  -webkit-animation-duration: 2s;\n  -webkit-animation-iteration-count: infinite;\n  -webkit-animation-delay: 0.6s;\n}\n.r1[_ngcontent-%COMP%]    > .hex-brick[_ngcontent-%COMP%] {\n  animation-name: fade;\n  animation-duration: 2s;\n  animation-iteration-count: infinite;\n  animation-delay: 0.2s;\n  -webkit-animation-name: fade;\n  -webkit-animation-duration: 2s;\n  -webkit-animation-iteration-count: infinite;\n  -webkit-animation-delay: 0.2s;\n}\n.r2[_ngcontent-%COMP%]    > .hex-brick[_ngcontent-%COMP%] {\n  animation-name: fade;\n  animation-duration: 2s;\n  animation-iteration-count: infinite;\n  animation-delay: 0.4s;\n  -webkit-animation-name: fade;\n  -webkit-animation-duration: 2s;\n  -webkit-animation-iteration-count: infinite;\n  -webkit-animation-delay: 0.4s;\n}\n.r3[_ngcontent-%COMP%]    > .hex-brick[_ngcontent-%COMP%] {\n  animation-name: fade;\n  animation-duration: 2s;\n  animation-iteration-count: infinite;\n  animation-delay: 0.6s;\n  -webkit-animation-name: fade;\n  -webkit-animation-duration: 2s;\n  -webkit-animation-iteration-count: infinite;\n  -webkit-animation-delay: 0.6s;\n}\n@keyframes pulse {\n  0% {\n    transform: scale(1);\n  }\n  50% {\n    transform: scale(0.01);\n  }\n  100% {\n    transform: scale(1);\n  }\n}\n@keyframes fade {\n  0% {\n    background: #abf8ff;\n  }\n  50% {\n    background: #90bbbf;\n  }\n  100% {\n    background: #abf8ff;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9sb2FkZXIvbG9hZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtFQUNBLG9DQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLE1BQUE7QUFDRjtBQUNFO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQUNKO0FBRUU7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsUUFBQTtFQUNBLGtCQUFBO0FBQUo7QUFHQTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsbUJBQUE7RUFDQSxRQUFBO0VBQ0Esa0JBQUE7QUFBRjtBQUdBO0VBQ0UsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLG9CQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQ0FBQTtFQUNBLDRCQUFBO0VBQ0EsOEJBQUE7RUFDQSwyQ0FBQTtBQUFGO0FBR0E7RUFDRSx3QkFBQTtFQUNBLGdDQUFBO0FBQUY7QUFHQTtFQUNFLHlCQUFBO0VBQ0EsaUNBQUE7QUFBRjtBQUdBO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxvQkFBQTtFQUNBLDRCQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtBQUFGO0FBR0E7RUFDRSxrQkFBQTtFQUNBLGlCQUFBO0VBRUEscUJBQUE7RUFDQSxzQkFBQTtFQUNBLG1DQUFBO0VBQ0EsNkJBQUE7RUFDQSw4QkFBQTtFQUNBLDJDQUFBO0FBREY7QUFJQTtFQUNFLGtCQUFBO0VBQ0EsaUJBQUE7QUFERjtBQUlBO0VBQ0Usa0JBQUE7RUFDQSxpQkFBQTtBQURGO0FBSUE7RUFDRSxnQkFBQTtFQUNBLGlCQUFBO0FBREY7QUFJQTtFQUNFLGlCQUFBO0VBQ0EsaUJBQUE7QUFERjtBQUdBO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtBQUFGO0FBR0E7RUFDRSxnQkFBQTtFQUNBLGdCQUFBO0FBQUY7QUFHQTtFQUNFLGtCQUFBO0VBQ0EsaUJBQUE7QUFBRjtBQUdBO0VBQ0UsaUJBQUE7RUFDQSxpQkFBQTtBQUFGO0FBR0E7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0FBQUY7QUFHQTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7QUFBRjtBQUdBO0VBQ0UsaUJBQUE7RUFDQSxnQkFBQTtBQUFGO0FBR0E7RUFDRSxrQkFBQTtFQUNBLGlCQUFBO0FBQUY7QUFHQTtFQUNFLGtCQUFBO0VBQ0EsaUJBQUE7QUFBRjtBQUdBO0VBQ0UsaUJBQUE7RUFDQSxpQkFBQTtBQUFGO0FBR0E7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0FBQUY7QUFHQTtFQUNFLGlCQUFBO0VBQ0EsZ0JBQUE7QUFBRjtBQUdBO0VBQ0Usa0JBQUE7RUFDQSxpQkFBQTtBQUFGO0FBR0E7RUFDRSxpQkFBQTtFQUNBLGlCQUFBO0FBQUY7QUFHQTtFQUNFLGtCQUFBO0VBQ0EsaUJBQUE7QUFBRjtBQUdBO0VBQ0UsaUJBQUE7RUFDQSxpQkFBQTtBQUFGO0FBR0E7RUFDRSxnQkFBQTtFQUNBLGlCQUFBO0FBQUY7QUFHQTtFQUNFLGtCQUFBO0VBQ0EsaUJBQUE7QUFBRjtBQUdBO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtBQUFGO0FBR0E7RUFDRSxpQkFBQTtFQUNBLGdCQUFBO0FBQUY7QUFHQTtFQUNFLGdCQUFBO0VBQ0EsZ0JBQUE7QUFBRjtBQUdBO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtBQUFGO0FBR0E7RUFDRSxrQkFBQTtFQUNBLGlCQUFBO0FBQUY7QUFHQTtFQUNFLGtCQUFBO0VBQ0EsaUJBQUE7QUFBRjtBQUdBO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtBQUFGO0FBR0E7RUFDRSxpQkFBQTtFQUNBLGdCQUFBO0FBQUY7QUFHQTtFQUNFLGtCQUFBO0VBQ0EsaUJBQUE7QUFBRjtBQUdBO0VBQ0UsbUJBQUE7RUFDQSxpQkFBQTtBQUFGO0FBR0E7RUFDRSxpQkFBQTtFQUNBLGlCQUFBO0FBQUY7QUFHQTtFQUNFLGlCQUFBO0VBQ0EsZ0JBQUE7QUFBRjtBQUdBO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtBQUFGO0FBR0E7RUFDRSxpQkFBQTtFQUNBLGlCQUFBO0FBQUY7QUFHQTtFQUNFLGlCQUFBO0VBQ0EsaUJBQUE7QUFBRjtBQUdBO0VBQ0UscUJBQUE7RUFDQSxzQkFBQTtFQUNBLG1DQUFBO0VBQ0EscUJBQUE7RUFDQSw2QkFBQTtFQUNBLDhCQUFBO0VBQ0EsMkNBQUE7RUFDQSw2QkFBQTtBQUFGO0FBR0E7RUFDRSxxQkFBQTtFQUNBLHNCQUFBO0VBQ0EsbUNBQUE7RUFDQSxxQkFBQTtFQUNBLDZCQUFBO0VBQ0EsOEJBQUE7RUFDQSwyQ0FBQTtFQUNBLDZCQUFBO0FBQUY7QUFHQTtFQUNFLHFCQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQ0FBQTtFQUNBLHFCQUFBO0VBQ0EsNkJBQUE7RUFDQSw4QkFBQTtFQUNBLDJDQUFBO0VBQ0EsNkJBQUE7QUFBRjtBQUdBO0VBQ0Usb0JBQUE7RUFDQSxzQkFBQTtFQUNBLG1DQUFBO0VBQ0EscUJBQUE7RUFDQSw0QkFBQTtFQUNBLDhCQUFBO0VBQ0EsMkNBQUE7RUFDQSw2QkFBQTtBQUFGO0FBR0E7RUFDRSxvQkFBQTtFQUNBLHNCQUFBO0VBQ0EsbUNBQUE7RUFDQSxxQkFBQTtFQUNBLDRCQUFBO0VBQ0EsOEJBQUE7RUFDQSwyQ0FBQTtFQUNBLDZCQUFBO0FBQUY7QUFHQTtFQUNFLG9CQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQ0FBQTtFQUNBLHFCQUFBO0VBQ0EsNEJBQUE7RUFDQSw4QkFBQTtFQUNBLDJDQUFBO0VBQ0EsNkJBQUE7QUFBRjtBQUdBO0VBQ0U7SUFFRSxtQkFBQTtFQUFGO0VBR0E7SUFFRSxzQkFBQTtFQURGO0VBSUE7SUFFRSxtQkFBQTtFQUZGO0FBQ0Y7QUFLQTtFQUNFO0lBQ0UsbUJBQUE7RUFIRjtFQU1BO0lBQ0UsbUJBQUE7RUFKRjtFQU9BO0lBQ0UsbUJBQUE7RUFMRjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9sb2FkZXIvbG9hZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxvYWRlci1jb250YWluZXIge1xyXG4gIHotaW5kZXg6IDE1O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHRvcDogMDtcclxuXHJcbiAgaDEge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICB0b3A6IDUyJTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuXHJcbiAgaDIge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHRvcDogNTUlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxufVxyXG4uc29ja2V0IHtcclxuICB3aWR0aDogMjAwcHg7XHJcbiAgaGVpZ2h0OiAyMDBweDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbGVmdDogNTAlO1xyXG4gIG1hcmdpbi1sZWZ0OiAtMTAwcHg7XHJcbiAgdG9wOiA0MCU7XHJcbiAgbWFyZ2luLXRvcDogLTEwMHB4O1xyXG59XHJcblxyXG4uaGV4LWJyaWNrIHtcclxuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xyXG4gIHdpZHRoOiAzMHB4O1xyXG4gIGhlaWdodDogMTdweDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiA1cHg7XHJcbiAgYW5pbWF0aW9uLW5hbWU6IGZhZGU7XHJcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAycztcclxuICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcclxuICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBmYWRlO1xyXG4gIC13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOiAycztcclxuICAtd2Via2l0LWFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xyXG59XHJcblxyXG4uaDIge1xyXG4gIHRyYW5zZm9ybTogcm90YXRlKDYwZGVnKTtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDYwZGVnKTtcclxufVxyXG5cclxuLmgzIHtcclxuICB0cmFuc2Zvcm06IHJvdGF0ZSgtNjBkZWcpO1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoLTYwZGVnKTtcclxufVxyXG5cclxuLmdlbCB7XHJcbiAgaGVpZ2h0OiAzMHB4O1xyXG4gIHdpZHRoOiAzMHB4O1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzO1xyXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuM3M7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogNTAlO1xyXG4gIGxlZnQ6IDUwJTtcclxufVxyXG5cclxuLmNlbnRlci1nZWwge1xyXG4gIG1hcmdpbi1sZWZ0OiAtMTVweDtcclxuICBtYXJnaW4tdG9wOiAtMTVweDtcclxuXHJcbiAgYW5pbWF0aW9uLW5hbWU6IHB1bHNlO1xyXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMnM7XHJcbiAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XHJcbiAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogcHVsc2U7XHJcbiAgLXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246IDJzO1xyXG4gIC13ZWJraXQtYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XHJcbn1cclxuXHJcbi5jMSB7XHJcbiAgbWFyZ2luLWxlZnQ6IC00N3B4O1xyXG4gIG1hcmdpbi10b3A6IC0xNXB4O1xyXG59XHJcblxyXG4uYzIge1xyXG4gIG1hcmdpbi1sZWZ0OiAtMzFweDtcclxuICBtYXJnaW4tdG9wOiAtNDNweDtcclxufVxyXG5cclxuLmMzIHtcclxuICBtYXJnaW4tbGVmdDogMXB4O1xyXG4gIG1hcmdpbi10b3A6IC00M3B4O1xyXG59XHJcblxyXG4uYzQge1xyXG4gIG1hcmdpbi1sZWZ0OiAxN3B4O1xyXG4gIG1hcmdpbi10b3A6IC0xNXB4O1xyXG59XHJcbi5jNSB7XHJcbiAgbWFyZ2luLWxlZnQ6IC0zMXB4O1xyXG4gIG1hcmdpbi10b3A6IDEzcHg7XHJcbn1cclxuXHJcbi5jNiB7XHJcbiAgbWFyZ2luLWxlZnQ6IDFweDtcclxuICBtYXJnaW4tdG9wOiAxM3B4O1xyXG59XHJcblxyXG4uYzcge1xyXG4gIG1hcmdpbi1sZWZ0OiAtNjNweDtcclxuICBtYXJnaW4tdG9wOiAtNDNweDtcclxufVxyXG5cclxuLmM4IHtcclxuICBtYXJnaW4tbGVmdDogMzNweDtcclxuICBtYXJnaW4tdG9wOiAtNDNweDtcclxufVxyXG5cclxuLmM5IHtcclxuICBtYXJnaW4tbGVmdDogLTE1cHg7XHJcbiAgbWFyZ2luLXRvcDogNDFweDtcclxufVxyXG5cclxuLmMxMCB7XHJcbiAgbWFyZ2luLWxlZnQ6IC02M3B4O1xyXG4gIG1hcmdpbi10b3A6IDEzcHg7XHJcbn1cclxuXHJcbi5jMTEge1xyXG4gIG1hcmdpbi1sZWZ0OiAzM3B4O1xyXG4gIG1hcmdpbi10b3A6IDEzcHg7XHJcbn1cclxuXHJcbi5jMTIge1xyXG4gIG1hcmdpbi1sZWZ0OiAtMTVweDtcclxuICBtYXJnaW4tdG9wOiAtNzFweDtcclxufVxyXG5cclxuLmMxMyB7XHJcbiAgbWFyZ2luLWxlZnQ6IC00N3B4O1xyXG4gIG1hcmdpbi10b3A6IC03MXB4O1xyXG59XHJcblxyXG4uYzE0IHtcclxuICBtYXJnaW4tbGVmdDogMTdweDtcclxuICBtYXJnaW4tdG9wOiAtNzFweDtcclxufVxyXG5cclxuLmMxNSB7XHJcbiAgbWFyZ2luLWxlZnQ6IC00N3B4O1xyXG4gIG1hcmdpbi10b3A6IDQxcHg7XHJcbn1cclxuXHJcbi5jMTYge1xyXG4gIG1hcmdpbi1sZWZ0OiAxN3B4O1xyXG4gIG1hcmdpbi10b3A6IDQxcHg7XHJcbn1cclxuXHJcbi5jMTcge1xyXG4gIG1hcmdpbi1sZWZ0OiAtNzlweDtcclxuICBtYXJnaW4tdG9wOiAtMTVweDtcclxufVxyXG5cclxuLmMxOCB7XHJcbiAgbWFyZ2luLWxlZnQ6IDQ5cHg7XHJcbiAgbWFyZ2luLXRvcDogLTE1cHg7XHJcbn1cclxuXHJcbi5jMTkge1xyXG4gIG1hcmdpbi1sZWZ0OiAtNjNweDtcclxuICBtYXJnaW4tdG9wOiAtOTlweDtcclxufVxyXG5cclxuLmMyMCB7XHJcbiAgbWFyZ2luLWxlZnQ6IDMzcHg7XHJcbiAgbWFyZ2luLXRvcDogLTk5cHg7XHJcbn1cclxuXHJcbi5jMjEge1xyXG4gIG1hcmdpbi1sZWZ0OiAxcHg7XHJcbiAgbWFyZ2luLXRvcDogLTk5cHg7XHJcbn1cclxuXHJcbi5jMjIge1xyXG4gIG1hcmdpbi1sZWZ0OiAtMzFweDtcclxuICBtYXJnaW4tdG9wOiAtOTlweDtcclxufVxyXG5cclxuLmMyMyB7XHJcbiAgbWFyZ2luLWxlZnQ6IC02M3B4O1xyXG4gIG1hcmdpbi10b3A6IDY5cHg7XHJcbn1cclxuXHJcbi5jMjQge1xyXG4gIG1hcmdpbi1sZWZ0OiAzM3B4O1xyXG4gIG1hcmdpbi10b3A6IDY5cHg7XHJcbn1cclxuXHJcbi5jMjUge1xyXG4gIG1hcmdpbi1sZWZ0OiAxcHg7XHJcbiAgbWFyZ2luLXRvcDogNjlweDtcclxufVxyXG5cclxuLmMyNiB7XHJcbiAgbWFyZ2luLWxlZnQ6IC0zMXB4O1xyXG4gIG1hcmdpbi10b3A6IDY5cHg7XHJcbn1cclxuXHJcbi5jMjcge1xyXG4gIG1hcmdpbi1sZWZ0OiAtNzlweDtcclxuICBtYXJnaW4tdG9wOiAtMTVweDtcclxufVxyXG5cclxuLmMyOCB7XHJcbiAgbWFyZ2luLWxlZnQ6IC05NXB4O1xyXG4gIG1hcmdpbi10b3A6IC00M3B4O1xyXG59XHJcblxyXG4uYzI5IHtcclxuICBtYXJnaW4tbGVmdDogLTk1cHg7XHJcbiAgbWFyZ2luLXRvcDogMTNweDtcclxufVxyXG5cclxuLmMzMCB7XHJcbiAgbWFyZ2luLWxlZnQ6IDQ5cHg7XHJcbiAgbWFyZ2luLXRvcDogNDFweDtcclxufVxyXG5cclxuLmMzMSB7XHJcbiAgbWFyZ2luLWxlZnQ6IC03OXB4O1xyXG4gIG1hcmdpbi10b3A6IC03MXB4O1xyXG59XHJcblxyXG4uYzMyIHtcclxuICBtYXJnaW4tbGVmdDogLTExMXB4O1xyXG4gIG1hcmdpbi10b3A6IC0xNXB4O1xyXG59XHJcblxyXG4uYzMzIHtcclxuICBtYXJnaW4tbGVmdDogNjVweDtcclxuICBtYXJnaW4tdG9wOiAtNDNweDtcclxufVxyXG5cclxuLmMzNCB7XHJcbiAgbWFyZ2luLWxlZnQ6IDY1cHg7XHJcbiAgbWFyZ2luLXRvcDogMTNweDtcclxufVxyXG5cclxuLmMzNSB7XHJcbiAgbWFyZ2luLWxlZnQ6IC03OXB4O1xyXG4gIG1hcmdpbi10b3A6IDQxcHg7XHJcbn1cclxuXHJcbi5jMzYge1xyXG4gIG1hcmdpbi1sZWZ0OiA0OXB4O1xyXG4gIG1hcmdpbi10b3A6IC03MXB4O1xyXG59XHJcblxyXG4uYzM3IHtcclxuICBtYXJnaW4tbGVmdDogODFweDtcclxuICBtYXJnaW4tdG9wOiAtMTVweDtcclxufVxyXG5cclxuLnIxIHtcclxuICBhbmltYXRpb24tbmFtZTogcHVsc2U7XHJcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAycztcclxuICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcclxuICBhbmltYXRpb24tZGVsYXk6IDAuMnM7XHJcbiAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogcHVsc2U7XHJcbiAgLXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246IDJzO1xyXG4gIC13ZWJraXQtYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XHJcbiAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDAuMnM7XHJcbn1cclxuXHJcbi5yMiB7XHJcbiAgYW5pbWF0aW9uLW5hbWU6IHB1bHNlO1xyXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMnM7XHJcbiAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XHJcbiAgYW5pbWF0aW9uLWRlbGF5OiAwLjRzO1xyXG4gIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IHB1bHNlO1xyXG4gIC13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOiAycztcclxuICAtd2Via2l0LWFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xyXG4gIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAwLjRzO1xyXG59XHJcblxyXG4ucjMge1xyXG4gIGFuaW1hdGlvbi1uYW1lOiBwdWxzZTtcclxuICBhbmltYXRpb24tZHVyYXRpb246IDJzO1xyXG4gIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xyXG4gIGFuaW1hdGlvbi1kZWxheTogMC42cztcclxuICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBwdWxzZTtcclxuICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogMnM7XHJcbiAgLXdlYmtpdC1hbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcclxuICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogMC42cztcclxufVxyXG5cclxuLnIxID4gLmhleC1icmljayB7XHJcbiAgYW5pbWF0aW9uLW5hbWU6IGZhZGU7XHJcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAycztcclxuICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcclxuICBhbmltYXRpb24tZGVsYXk6IDAuMnM7XHJcbiAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogZmFkZTtcclxuICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogMnM7XHJcbiAgLXdlYmtpdC1hbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcclxuICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogMC4ycztcclxufVxyXG5cclxuLnIyID4gLmhleC1icmljayB7XHJcbiAgYW5pbWF0aW9uLW5hbWU6IGZhZGU7XHJcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAycztcclxuICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcclxuICBhbmltYXRpb24tZGVsYXk6IDAuNHM7XHJcbiAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogZmFkZTtcclxuICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogMnM7XHJcbiAgLXdlYmtpdC1hbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcclxuICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogMC40cztcclxufVxyXG5cclxuLnIzID4gLmhleC1icmljayB7XHJcbiAgYW5pbWF0aW9uLW5hbWU6IGZhZGU7XHJcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAycztcclxuICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcclxuICBhbmltYXRpb24tZGVsYXk6IDAuNnM7XHJcbiAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogZmFkZTtcclxuICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogMnM7XHJcbiAgLXdlYmtpdC1hbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcclxuICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogMC42cztcclxufVxyXG5cclxuQGtleWZyYW1lcyBwdWxzZSB7XHJcbiAgMCUge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcclxuICB9XHJcblxyXG4gIDUwJSB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMC4wMSk7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuMDEpO1xyXG4gIH1cclxuXHJcbiAgMTAwJSB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG4gIH1cclxufVxyXG5cclxuQGtleWZyYW1lcyBmYWRlIHtcclxuICAwJSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjYWJmOGZmO1xyXG4gIH1cclxuXHJcbiAgNTAlIHtcclxuICAgIGJhY2tncm91bmQ6ICM5MGJiYmY7XHJcbiAgfVxyXG5cclxuICAxMDAlIHtcclxuICAgIGJhY2tncm91bmQ6ICNhYmY4ZmY7XHJcbiAgfVxyXG59XHJcblxyXG5ALXdlYmtpdC1rZXlmcmFtZXMgcHVsc2Uge1xyXG4gIDAlIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxKTtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbiAgfVxyXG5cclxuICA1MCUge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDAuMDEpO1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjAxKTtcclxuICB9XHJcblxyXG4gIDEwMCUge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcclxuICB9XHJcbn1cclxuXHJcbkAtd2Via2l0LWtleWZyYW1lcyBmYWRlIHtcclxuICAwJSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjYWJmOGZmO1xyXG4gIH1cclxuXHJcbiAgNTAlIHtcclxuICAgIGJhY2tncm91bmQ6ICMzODljYTY7XHJcbiAgfVxyXG5cclxuICAxMDAlIHtcclxuICAgIGJhY2tncm91bmQ6ICNhYmY4ZmY7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-loader',
                templateUrl: './loader.component.html',
                styleUrls: ['./loader.component.scss']
            }]
    }], function () { return []; }, { loadingData: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/components/settings-sidenav/settings-sidenav.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/components/settings-sidenav/settings-sidenav.component.ts ***!
  \***************************************************************************/
/*! exports provided: SettingsSidenavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsSidenavComponent", function() { return SettingsSidenavComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sidenav.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");





const _c0 = ["file"];
const _c1 = function (a0) { return { disNone: a0 }; };
class SettingsSidenavComponent {
    constructor() {
        this.opend = false;
        this.clear = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.loadDefault = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.downloadSetting = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.loadSetting = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.generateBmap = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.generateConfig = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() {
    }
    processConfigFile(files) {
        let that = this;
        let fs = new FileReader();
        fs.onload = function () {
            that.loadSetting.emit(fs.result);
            that.fileInput.nativeElement.value = "";
        };
        fs.readAsText(files[0]);
    }
}
SettingsSidenavComponent.ɵfac = function SettingsSidenavComponent_Factory(t) { return new (t || SettingsSidenavComponent)(); };
SettingsSidenavComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SettingsSidenavComponent, selectors: [["app-settings-sidenav"]], viewQuery: function SettingsSidenavComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.fileInput = _t.first);
    } }, outputs: { clear: "clear", loadDefault: "loadDefault", downloadSetting: "downloadSetting", loadSetting: "loadSetting", generateBmap: "generateBmap", generateConfig: "generateConfig" }, decls: 27, vars: 3, consts: [[1, "nav-container", 3, "ngClass"], [1, "example-container"], ["mode", "side", "position", "start", 1, "example-sidenav"], ["drawer", ""], [1, "close", 3, "click"], ["id", "clear", 3, "click"], ["id", "load", 3, "click"], ["id", "download", 3, "click"], ["id", "bmap", 3, "click"], ["id", "generate", 3, "click"], ["type", "file", "accept", ".config", 1, "hide", 3, "change"], ["file", ""], [1, "nav-button", 3, "click"], [1, "menu"]], template: function SettingsSidenavComponent_Template(rf, ctx) { if (rf & 1) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-sidenav-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-sidenav", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SettingsSidenavComponent_Template_div_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3); _r0.close(); return ctx.opend = !ctx.opend; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "close");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Settings:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SettingsSidenavComponent_Template_button_click_9_listener() { return ctx.clear.emit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Clear Configuration");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SettingsSidenavComponent_Template_button_click_11_listener() { return ctx.loadDefault.emit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Load default Configuration");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SettingsSidenavComponent_Template_button_click_13_listener() { return ctx.downloadSetting.emit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Download Site Configuration");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SettingsSidenavComponent_Template_button_click_15_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](23); return _r1.click(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Load .config file");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SettingsSidenavComponent_Template_button_click_18_listener() { return ctx.generateBmap.emit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Export bmap.txt");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SettingsSidenavComponent_Template_button_click_20_listener() { return ctx.generateConfig.emit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Export Configuration ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "input", 10, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function SettingsSidenavComponent_Template_input_change_22_listener($event) { return ctx.processConfigFile($event.target.files); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SettingsSidenavComponent_Template_div_click_24_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3); _r0.toggle(); return ctx.opend = !ctx.opend; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "mat-icon", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c1, !ctx.opend));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_2__["MatSidenavContainer"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_2__["MatSidenav"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIcon"]], styles: [".nav-container[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 350px;\n  background-color: rgba(255, 255, 255, 0);\n  z-index: 20;\n}\n.nav-container[_ngcontent-%COMP%]   .example-container[_ngcontent-%COMP%] {\n  height: 100vh;\n  background-color: rgba(255, 255, 255, 0);\n  display: flex;\n  align-content: center;\n  justify-content: center;\n  align-items: center;\n}\n.nav-container[_ngcontent-%COMP%]   .example-container[_ngcontent-%COMP%]   .hide[_ngcontent-%COMP%] {\n  display: none;\n}\n.nav-container[_ngcontent-%COMP%]   .example-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  font-size: 1.2em;\n  width: 100%;\n  margin: 5px 0;\n  border: 0;\n  border-radius: 5px;\n  padding: 8px;\n  cursor: pointer;\n  transition: font-size 0.5s;\n}\n.nav-container[_ngcontent-%COMP%]   .example-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  font-size: 1.3em;\n}\n.nav-container[_ngcontent-%COMP%]   .example-container[_ngcontent-%COMP%]   #clear[_ngcontent-%COMP%] {\n  background-color: #ff4f42;\n}\n.nav-container[_ngcontent-%COMP%]   .example-container[_ngcontent-%COMP%]   #load[_ngcontent-%COMP%] {\n  background-color: #42ff91;\n}\n.nav-container[_ngcontent-%COMP%]   .example-container[_ngcontent-%COMP%]   #generate[_ngcontent-%COMP%] {\n  background-color: #42ffc6;\n}\n.nav-container[_ngcontent-%COMP%]   .example-container[_ngcontent-%COMP%]   #download[_ngcontent-%COMP%] {\n  background-color: #428eff;\n}\n.nav-container[_ngcontent-%COMP%]   .example-container[_ngcontent-%COMP%]   #bmap[_ngcontent-%COMP%] {\n  background-color: #ac6cff;\n}\n.nav-container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 2em;\n}\n.nav-container[_ngcontent-%COMP%]   .close[_ngcontent-%COMP%] {\n  color: #ff0000;\n  position: absolute;\n  top: 10px;\n  right: 2em;\n  cursor: pointer;\n}\n.nav-container[_ngcontent-%COMP%]   .close[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 3em;\n}\n.nav-container[_ngcontent-%COMP%]   .example-sidenav[_ngcontent-%COMP%] {\n  z-index: 10;\n  padding: 60px 40px;\n}\n.nav-container[_ngcontent-%COMP%]   .example-sidenav[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%] {\n  width: 20vw;\n  background-color: #5a5a5a;\n  margin: 10px 0;\n  cursor: pointer;\n}\n.nav-button[_ngcontent-%COMP%] {\n  cursor: pointer;\n  padding: 5px;\n  position: absolute;\n  left: 0;\n  color: #000;\n}\n.nav-button[_ngcontent-%COMP%]   .menu[_ngcontent-%COMP%] {\n  cursor: pointer;\n  color: #fff;\n  width: 3rem;\n  height: 3rem;\n  font-size: 3rem;\n}\n.disNone[_ngcontent-%COMP%] {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zZXR0aW5ncy1zaWRlbmF2L3NldHRpbmdzLXNpZGVuYXYuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxZQUFBO0VBQ0Esd0NBQUE7RUFDQSxXQUFBO0FBQ0Y7QUFDRTtFQUNFLGFBQUE7RUFDQSx3Q0FBQTtFQUNBLGFBQUE7RUFDQSxxQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFDSjtBQUNJO0VBQ0UsYUFBQTtBQUNOO0FBRUk7RUFDRSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSwwQkFBQTtBQUFOO0FBR0k7RUFDRSxnQkFBQTtBQUROO0FBSUk7RUFDRSx5QkFBQTtBQUZOO0FBS0k7RUFDRSx5QkFBQTtBQUhOO0FBTUk7RUFDRSx5QkFBQTtBQUpOO0FBT0k7RUFDRSx5QkFBQTtBQUxOO0FBUUk7RUFDRSx5QkFBQTtBQU5OO0FBVUU7RUFDRSxjQUFBO0FBUko7QUFXRTtFQUNFLGNBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtBQVRKO0FBV0k7RUFDRSxjQUFBO0FBVE47QUFhRTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtBQVhKO0FBYUk7RUFDRSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQVhOO0FBZ0JBO0VBQ0UsZUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0FBYkY7QUFlRTtFQUNFLGVBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FBYko7QUFpQkE7RUFDRSxhQUFBO0FBZEYiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3NldHRpbmdzLXNpZGVuYXYvc2V0dGluZ3Mtc2lkZW5hdi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uYXYtY29udGFpbmVyIHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgd2lkdGg6IDM1MHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMCk7XHJcbiAgei1pbmRleDogMjA7XHJcblxyXG4gIC5leGFtcGxlLWNvbnRhaW5lciB7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwKTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gICAgLmhpZGUge1xyXG4gICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG5cclxuICAgIGJ1dHRvbiB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMS4yZW07XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBtYXJnaW46IDVweCAwO1xyXG4gICAgICBib3JkZXI6IDA7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgcGFkZGluZzogOHB4O1xyXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgIHRyYW5zaXRpb246IGZvbnQtc2l6ZSAwLjVzO1xyXG4gICAgfVxyXG5cclxuICAgIGJ1dHRvbjpob3ZlciB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMS4zZW07XHJcbiAgICB9XHJcblxyXG4gICAgI2NsZWFyIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgNzksIDY2KTtcclxuICAgIH1cclxuXHJcbiAgICAjbG9hZCB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig2NiwgMjU1LCAxNDUpO1xyXG4gICAgfVxyXG5cclxuICAgICNnZW5lcmF0ZSB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig2NiwgMjU1LCAxOTgpO1xyXG4gICAgfVxyXG5cclxuICAgICNkb3dubG9hZCB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig2NiwgMTQyLCAyNTUpO1xyXG4gICAgfVxyXG5cclxuICAgICNibWFwIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE3MiwgMTA4LCAyNTUpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcCB7XHJcbiAgICBmb250LXNpemU6IDJlbTtcclxuICB9XHJcblxyXG4gIC5jbG9zZSB7XHJcbiAgICBjb2xvcjogI2ZmMDAwMDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMTBweDtcclxuICAgIHJpZ2h0OiAyZW07XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcblxyXG4gICAgbWF0LWljb24ge1xyXG4gICAgICBmb250LXNpemU6IDNlbTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5leGFtcGxlLXNpZGVuYXYge1xyXG4gICAgei1pbmRleDogMTA7XHJcbiAgICBwYWRkaW5nOiA2MHB4IDQwcHg7XHJcblxyXG4gICAgbWF0LWNhcmQge1xyXG4gICAgICB3aWR0aDogMjB2dztcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzVhNWE1YTtcclxuICAgICAgbWFyZ2luOiAxMHB4IDA7XHJcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5uYXYtYnV0dG9uIHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgcGFkZGluZzogNXB4O1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBsZWZ0OiAwO1xyXG4gIGNvbG9yOiAjMDAwO1xyXG5cclxuICAubWVudSB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIHdpZHRoOiAzcmVtO1xyXG4gICAgaGVpZ2h0OiAzcmVtO1xyXG4gICAgZm9udC1zaXplOiAzcmVtO1xyXG4gIH1cclxufVxyXG5cclxuLmRpc05vbmUge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SettingsSidenavComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-settings-sidenav',
                templateUrl: './settings-sidenav.component.html',
                styleUrls: ['./settings-sidenav.component.scss']
            }]
    }], function () { return []; }, { clear: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
            args: ['clear']
        }], loadDefault: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
            args: ['loadDefault']
        }], downloadSetting: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
            args: ['downloadSetting']
        }], loadSetting: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
            args: ['loadSetting']
        }], generateBmap: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
            args: ['generateBmap']
        }], generateConfig: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
            args: ['generateConfig']
        }], fileInput: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['file']
        }] }); })();


/***/ }),

/***/ "./src/app/components/sidenav/sidenav.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/sidenav/sidenav.component.ts ***!
  \*********************************************************/
/*! exports provided: SidenavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidenavComponent", function() { return SidenavComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _services_matrix_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../services/matrix-data.service */ "./src/app/services/matrix-data.service.ts");





const _c0 = ["drawer"];
function SidenavComponent_button_11_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SidenavComponent_button_11_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.value = ""; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SidenavComponent_mat_option_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const action_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", action_r6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", action_r6.name, " ");
} }
const _c1 = function (a0) { return { disNone: a0 }; };
class SidenavComponent {
    constructor(matrixDataService) {
        this.matrixDataService = matrixDataService;
        this.opend = false;
        this.matrixData = [[]];
        this.selectedButton = [0, 0];
        this.actions = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].actions;
        this.disabled = false;
        this.color = 'primary';
        this.touchUi = false;
        this.colorCtr = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]);
    }
    ngOnInit() {
        this.matrixDataService.currentData.subscribe((res) => {
            this.matrixData = res;
            console.log(res);
        });
    }
    openButtonConfig(x, y) {
        this.selectedButton = [x, y];
        this.opend = true;
        this.sidenav.open();
        console.log(x, y);
    }
}
SidenavComponent.ɵfac = function SidenavComponent_Factory(t) { return new (t || SidenavComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_matrix_data_service__WEBPACK_IMPORTED_MODULE_3__["MatrixDataService"])); };
SidenavComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SidenavComponent, selectors: [["app-sidenav"]], viewQuery: function SidenavComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.sidenav = _t.first);
    } }, decls: 25, vars: 14, consts: [[1, "nav-container", 3, "ngClass"], [1, "example-container"], ["mode", "side", "position", "end", 1, "example-sidenav"], ["drawer", ""], [1, "close", 3, "click"], [1, "example-form-field"], ["matInput", "", "type", "text", 3, "ngModel", "ngModelChange"], ["mat-button", "", "matSuffix", "", "mat-icon-button", "", "aria-label", "Clear", 3, "click", 4, "ngIf"], ["appearance", "fill"], ["name", "action", 3, "ngModel", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], ["matInput", "", "readonly", "", 3, "ngModel", "ngxMatColorPicker", "formControl", "disabled", "ngModelChange"], ["matSuffix", "", 3, "for"], [3, "touchUi"], ["picker", ""], [3, "position"], ["mat-button", "", "matSuffix", "", "mat-icon-button", "", "aria-label", "Clear", 3, "click"], [3, "value"]], template: function SidenavComponent_Template(rf, ctx) { if (rf & 1) {
        const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-sidenav-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-sidenav", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SidenavComponent_Template_div_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3); _r0.close(); return ctx.opend = !ctx.opend; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "close");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-form-field", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SidenavComponent_Template_input_ngModelChange_10_listener($event) { return ctx.matrixData[ctx.selectedButton[0]][ctx.selectedButton[1]].name = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, SidenavComponent_button_11_Template, 3, 0, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-form-field", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Action");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-select", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SidenavComponent_Template_mat_select_ngModelChange_15_listener($event) { return ctx.matrixData[ctx.selectedButton[0]][ctx.selectedButton[1]].action = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, SidenavComponent_mat_option_16_Template, 2, 2, "mat-option", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Color");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SidenavComponent_Template_input_ngModelChange_20_listener($event) { return ctx.matrixData[ctx.selectedButton[0]][ctx.selectedButton[1]].color = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "ngx-mat-color-toggle", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "ngx-mat-color-picker", 13, 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "app-dragndrop", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](12, _c1, !ctx.opend));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.matrixData[ctx.selectedButton[0]][ctx.selectedButton[1]].name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.matrixData[ctx.selectedButton[0]][ctx.selectedButton[1]].name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.matrixData[ctx.selectedButton[0]][ctx.selectedButton[1]].action);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.actions);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.matrixData[ctx.selectedButton[0]][ctx.selectedButton[1]].color)("ngxMatColorPicker", _r3)("formControl", ctx.colorCtr)("disabled", ctx.disabled);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("for", _r3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("touchUi", ctx.touchUi);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("position", ctx.selectedButton);
    } }, styles: [".nav-container[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  right: 0;\n  width: 300px;\n  background-color: rgba(255, 255, 255, 0);\n  z-index: 20;\n}\n.nav-container[_ngcontent-%COMP%]   .example-container[_ngcontent-%COMP%] {\n  height: 100vh;\n  background-color: rgba(255, 255, 255, 0);\n}\n.nav-container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 2em;\n}\n.nav-container[_ngcontent-%COMP%]   .close[_ngcontent-%COMP%] {\n  color: #ff0000;\n  position: absolute;\n  top: 10px;\n  right: 2em;\n  cursor: pointer;\n}\n.nav-container[_ngcontent-%COMP%]   .close[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 3em;\n}\n.nav-container[_ngcontent-%COMP%]   .example-sidenav[_ngcontent-%COMP%] {\n  z-index: 10;\n  padding: 60px 40px;\n}\n.nav-container[_ngcontent-%COMP%]   .example-sidenav[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%] {\n  width: 20vw;\n  background-color: #5a5a5a;\n  margin: 10px 0;\n  cursor: pointer;\n}\n.nav-button[_ngcontent-%COMP%] {\n  cursor: pointer;\n  padding: 5px;\n  position: absolute;\n  right: 0;\n  color: #000;\n}\n.nav-button[_ngcontent-%COMP%]   .menu[_ngcontent-%COMP%] {\n  cursor: pointer;\n  color: #fff;\n  width: 3rem;\n  height: 3rem;\n  font-size: 3rem;\n}\n.disNone[_ngcontent-%COMP%] {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zaWRlbmF2L3NpZGVuYXYuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFBO0VBQ0EsTUFBQTtFQUNBLFFBQUE7RUFDQSxZQUFBO0VBQ0Esd0NBQUE7RUFDQSxXQUFBO0FBQ0Y7QUFDRTtFQUNFLGFBQUE7RUFDQSx3Q0FBQTtBQUNKO0FBRUU7RUFDRSxjQUFBO0FBQUo7QUFHRTtFQUNFLGNBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtBQURKO0FBR0k7RUFDRSxjQUFBO0FBRE47QUFLRTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtBQUhKO0FBS0k7RUFDRSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQUhOO0FBUUE7RUFDRSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7QUFMRjtBQU9FO0VBQ0UsZUFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUFMSjtBQVNBO0VBQ0UsYUFBQTtBQU5GIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9zaWRlbmF2L3NpZGVuYXYuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubmF2LWNvbnRhaW5lciB7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHRvcDogMDtcclxuICByaWdodDogMDtcclxuICB3aWR0aDogMzAwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwKTtcclxuICB6LWluZGV4OiAyMDtcclxuXHJcbiAgLmV4YW1wbGUtY29udGFpbmVyIHtcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDApO1xyXG4gIH1cclxuXHJcbiAgcCB7XHJcbiAgICBmb250LXNpemU6IDJlbTtcclxuICB9XHJcblxyXG4gIC5jbG9zZSB7XHJcbiAgICBjb2xvcjogI2ZmMDAwMDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMTBweDtcclxuICAgIHJpZ2h0OiAyZW07XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcblxyXG4gICAgbWF0LWljb24ge1xyXG4gICAgICBmb250LXNpemU6IDNlbTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5leGFtcGxlLXNpZGVuYXYge1xyXG4gICAgei1pbmRleDogMTA7XHJcbiAgICBwYWRkaW5nOiA2MHB4IDQwcHg7XHJcblxyXG4gICAgbWF0LWNhcmQge1xyXG4gICAgICB3aWR0aDogMjB2dztcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzVhNWE1YTtcclxuICAgICAgbWFyZ2luOiAxMHB4IDA7XHJcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5uYXYtYnV0dG9uIHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgcGFkZGluZzogNXB4O1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICByaWdodDogMDtcclxuICBjb2xvcjogIzAwMDtcclxuXHJcbiAgLm1lbnUge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICB3aWR0aDogM3JlbTtcclxuICAgIGhlaWdodDogM3JlbTtcclxuICAgIGZvbnQtc2l6ZTogM3JlbTtcclxuICB9XHJcbn1cclxuXHJcbi5kaXNOb25lIHtcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SidenavComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-sidenav',
                templateUrl: './sidenav.component.html',
                styleUrls: ['./sidenav.component.scss'],
            }]
    }], function () { return [{ type: _services_matrix_data_service__WEBPACK_IMPORTED_MODULE_3__["MatrixDataService"] }]; }, { sidenav: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['drawer']
        }] }); })();


/***/ }),

/***/ "./src/app/services/matrix-data.service.ts":
/*!*************************************************!*\
  !*** ./src/app/services/matrix-data.service.ts ***!
  \*************************************************/
/*! exports provided: MatrixDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatrixDataService", function() { return MatrixDataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");



class MatrixDataService {
    constructor() {
        this.dataSource = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]([[]]);
        this.currentData = this.dataSource.asObservable();
        this.activeStateData = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]([[]]);
        this.currentActive = this.activeStateData.asObservable();
    }
    changeData(data) {
        this.dataSource.next(data);
    }
    aciveState(state) {
        this.activeStateData.next(state);
    }
}
MatrixDataService.ɵfac = function MatrixDataService_Factory(t) { return new (t || MatrixDataService)(); };
MatrixDataService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: MatrixDataService, factory: MatrixDataService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatrixDataService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/sites/main/main.component.ts":
/*!**********************************************!*\
  !*** ./src/app/sites/main/main.component.ts ***!
  \**********************************************/
/*! exports provided: MainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainComponent", function() { return MainComponent; });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_components_color_picker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular-material-components/color-picker */ "./node_modules/@angular-material-components/color-picker/__ivy_ngcc__/fesm2015/angular-material-components-color-picker.js");
/* harmony import */ var jszip__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jszip */ "./node_modules/jszip/dist/jszip.min.js");
/* harmony import */ var jszip__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jszip__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! file-saver */ "./node_modules/file-saver/dist/FileSaver.min.js");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _services_matrix_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../services/matrix-data.service */ "./src/app/services/matrix-data.service.ts");







const _c0 = ["buttonconf"];
const _c1 = ["settingsconf"];
function MainComponent_div_6_div_1_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const column_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    const row_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx_r6.actionToImagePath(ctx_r6.matrixData[row_r3][column_r5].action.name), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r6.matrixData[row_r3][column_r5].name);
} }
function MainComponent_div_6_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MainComponent_div_6_div_1_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r11); const column_r5 = ctx.$implicit; const row_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit; const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r9.buttonPressed(row_r3, column_r5); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, MainComponent_div_6_div_1_div_1_Template, 4, 2, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const column_r5 = ctx.$implicit;
    const row_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("background-color", ctx_r4.matrixData[row_r3][column_r5].color.rgba);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r4.matrixData.length == ctx_r4.gridSizeX);
} }
function MainComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, MainComponent_div_6_div_1_Template, 2, 3, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r2.columns);
} }
class MainComponent {
    constructor(matrixDataService) {
        this.matrixDataService = matrixDataService;
        this.gridSizeX = _environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].gridSize[0];
        this.gridSizeY = _environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].gridSize[1];
        this.rows = [];
        this.columns = [];
        this.matrixData = [[]];
        this.defaultColor = _environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].defaultButtonColor;
        this.loadingData = {
            enabled: false,
            text: "",
            progress: 0,
        };
        this.downloadUrl = null; //needs to be global to be clearable
    }
    onUnload($event) {
        this.saveMatrixData();
    }
    ngOnInit() {
        let savedColor = localStorage.getItem('matrixDefaultColor');
        if (savedColor != null) {
            let rgbValues = savedColor.split(',');
            this.defaultColor = new _angular_material_components_color_picker__WEBPACK_IMPORTED_MODULE_2__["Color"](Number(rgbValues[0]), Number(rgbValues[1]), Number(rgbValues[2]));
        }
        let savedData = localStorage.getItem('matrixConfiguration');
        if (savedData == null) {
            this.setDefaultButtonArray();
            this.loadDefaultConfig(false);
        }
        else {
            this.matrixData = this.stringToButtonArray(savedData);
            this.gridSizeY = this.matrixData[0].length;
            this.gridSizeX = this.matrixData.length;
            for (let i = 0; i < this.gridSizeY; i++) {
                this.rows.push(i);
            }
            for (let i = 0; i < this.gridSizeX; i++) {
                this.columns.push(i);
            }
        }
        this.matrixDataService.changeData(this.matrixData);
        this.matrixDataService.currentData.subscribe((res) => {
            this.matrixData = res;
            console.log(res);
        });
    }
    buttonPressed(x, y) {
        console.log(this.matrixData[x][y]);
        this.buttonConf.openButtonConfig(x, y);
    }
    loadDefaultConfig(changeData) {
        this.matrixData = this.stringToButtonArray(_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].defaultConfig);
        if (changeData) {
            this.matrixDataService.changeData(this.matrixData);
        }
    }
    downloadSiteConfig() {
        let stringifiedConfig = this.stringifyMatrix(this.matrixData);
        file_saver__WEBPACK_IMPORTED_MODULE_4__["saveAs"](this.createBlobFromText(stringifiedConfig), 'launchpad.config');
    }
    loadSiteConfig(config) {
        this.matrixData = this.stringToButtonArray(config);
        this.matrixDataService.changeData(this.matrixData);
    }
    exportbmap() {
        let bMapText = this.generateBMap(this.matrixData);
        file_saver__WEBPACK_IMPORTED_MODULE_4__["saveAs"](this.createBlobFromText(bMapText), "bmap.txt");
    }
    actionToImagePath(act) {
        return 'assets/icons/' + act + '.svg';
    }
    saveMatrixData() {
        let stringConfig = this.stringifyMatrix(this.matrixData);
        localStorage.setItem('matrixConfiguration', stringConfig);
        localStorage.setItem('matrixDefaultColor', [this.defaultColor.r, this.defaultColor.g, this.defaultColor.b].toString());
    }
    stringifyMatrix(mdata) {
        let stringifiedData = [[]];
        for (let i = 0; i < this.gridSizeX; i++) {
            stringifiedData[i] = [];
            for (let j = 0; j < this.gridSizeY; j++) {
                let stripedData = this.deepCopy(mdata[j][i]);
                stripedData.musicfiles = [];
                stringifiedData[i][j] = JSON.stringify(stripedData);
            }
        }
        let stringData = this.twoDArrayToString(stringifiedData);
        return stringData;
    }
    twoDArrayToString(array) {
        let returnString = '';
        for (let i = 0; i < this.gridSizeX; i++) {
            returnString += array[i].join(';');
            returnString += '|';
        }
        return returnString;
    }
    stringToButtonArray(savedData) {
        let buttonArrayData = [[]];
        let stringArrayData = [[]];
        let rowData = savedData.split('|');
        rowData.splice(-1, 1);
        console.log(rowData);
        for (let i = 0; i < rowData.length; i++) {
            stringArrayData[i] = rowData[i].split(';');
        }
        console.log(stringArrayData);
        for (let i = 0; i < this.gridSizeX; i++) {
            buttonArrayData[i] = [];
            for (let j = 0; j < this.gridSizeY; j++) {
                console.log(stringArrayData[i][j]);
                let data = JSON.parse(stringArrayData[j][i]);
                data.color = new _angular_material_components_color_picker__WEBPACK_IMPORTED_MODULE_2__["Color"](data.color.r, data.color.g, data.color.b, data.color.a);
                buttonArrayData[i][j] = data;
            }
        }
        console.log(buttonArrayData);
        return buttonArrayData;
    }
    setDefaultButtonArray() {
        this.defaultColor = _environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].defaultButtonColor;
        this.rows = [];
        this.columns = [];
        for (let i = 0; i < this.gridSizeY; i++) {
            this.rows.push(i);
        }
        for (let i = 0; i < this.gridSizeX; i++) {
            this.columns.push(i);
        }
        for (let i = 0; i < this.gridSizeX; i++) {
            this.matrixData[i] = [];
            for (let j = 0; j < this.gridSizeY; j++) {
                this.matrixData[i][j] = {
                    name: 'Button' + (i + j * this.gridSizeY),
                    action: { name: 'None', value: '/' },
                    color: this.defaultColor,
                    position: [i, j],
                    musicfiles: [],
                };
            }
        }
    }
    zipAndDownloadConfig() {
        this.generateZipFS(this.matrixData);
    }
    generateZipFS(mData) {
        this.loadingData.enabled = true;
        this.loadingData.text = "Starting Compression...";
        let zip = new jszip__WEBPACK_IMPORTED_MODULE_3__();
        let root = zip.folder('musicPad');
        root.file('bmap.txt', this.generateBMap(mData));
        for (let i = 0; i < this.gridSizeX; i++) {
            for (let j = 0; j < this.gridSizeY; j++) {
                if (mData[i][j].action.value == 'MF') {
                    let folderName = i + 'X' + j;
                    let mf = root.folder(folderName);
                    this.loadingData.text = "Generating folder structure";
                    for (let k = 0; k < mData[i][j].musicfiles.length; k++) {
                        mf.file(k + '.wav', mData[i][j].musicfiles[k]);
                    }
                }
                else if (mData[i][j].action.value == 'SE') {
                    let folderName = i + 'X' + j;
                    let mf = root.folder(folderName);
                    for (let k = 0; k < mData[i][j].musicfiles.length; k++) {
                        mf.file(k + '.wav', mData[i][j].musicfiles[k]);
                    }
                }
            }
        }
        let that = this;
        zip
            .generateAsync({ type: 'blob' }, function updateCallback(metadata) {
            that.loadingData.text = "Compressing File: " + metadata.currentFile;
            that.loadingData.progress = Number(metadata.percent.toFixed(2));
        })
            .then(function (blob) {
            that.loadingData.text = 'Saving Data';
            file_saver__WEBPACK_IMPORTED_MODULE_4__["saveAs"](blob, 'data.zip');
            that.loadingData.enabled = false;
        }, function (err) {
            console.log(err);
        });
    }
    generateBMap(arrayMap) {
        let bmapString = '/*Dont Edit this File if you dont know what you are doing! Buttonmap*/\n';
        bmapString += 'SizeX:' + this.gridSizeX + '\n';
        bmapString += 'SizeY:' + this.gridSizeY + '\n';
        bmapString += 'dc:' + this.hexToInt(this.defaultColor.hex) + '\n';
        for (let i = 0; i < this.gridSizeX; i++) {
            for (let j = 0; j < this.gridSizeY; j++) {
                if (arrayMap[i][j].action.value != '/' ||
                    arrayMap[i][j].color.hex != this.defaultColor.hex) {
                    let line = i + 'X' + j + ':';
                    line +=
                        arrayMap[i][j].action.value +
                            ',' +
                            this.hexToInt(arrayMap[i][j].color.hex) +
                            '\n';
                    bmapString += line;
                }
            }
        }
        return bmapString;
    }
    hexToInt(hex) {
        const parsed = parseInt(hex, 16);
        if (isNaN(parsed)) {
            return 0;
        }
        return parsed;
    }
    createBlobFromText(data) {
        return new Blob([data], {
            type: 'text/plain;charset=utf-8',
        });
    }
    /**
     * Returns a deep copy of the object
     */
    deepCopy(oldObj) {
        var newObj = oldObj;
        if (oldObj && typeof oldObj === 'object') {
            if (oldObj instanceof Date) {
                return new Date(oldObj.getTime());
            }
            newObj =
                Object.prototype.toString.call(oldObj) === '[object Array]' ? [] : {};
            for (var i in oldObj) {
                newObj[i] = this.deepCopy(oldObj[i]);
            }
        }
        return newObj;
    }
}
MainComponent.ɵfac = function MainComponent_Factory(t) { return new (t || MainComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_matrix_data_service__WEBPACK_IMPORTED_MODULE_5__["MatrixDataService"])); };
MainComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: MainComponent, selectors: [["ng-component"]], viewQuery: function MainComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c1, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.buttonConf = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.settingsConf = _t.first);
    } }, hostBindings: function MainComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("beforeunload", function MainComponent_beforeunload_HostBindingHandler($event) { return ctx.onUnload($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresolveWindow"]);
    } }, decls: 7, vars: 2, consts: [["buttonconf", ""], [3, "clear", "loadDefault", "downloadSetting", "loadSetting", "generateBmap", "generateConfig"], ["settingsconf", ""], [3, "loadingData"], [1, "grid-container"], ["class", "grid-row", 4, "ngFor", "ngForOf"], [1, "grid-row"], ["class", "grid-box", 3, "background-color", "click", 4, "ngFor", "ngForOf"], [1, "grid-box", 3, "click"], [4, "ngIf"], [3, "src"]], template: function MainComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-sidenav", null, 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "app-settings-sidenav", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("clear", function MainComponent_Template_app_settings_sidenav_clear_2_listener() { return ctx.setDefaultButtonArray(); })("loadDefault", function MainComponent_Template_app_settings_sidenav_loadDefault_2_listener() { return ctx.loadDefaultConfig(true); })("downloadSetting", function MainComponent_Template_app_settings_sidenav_downloadSetting_2_listener() { return ctx.downloadSiteConfig(); })("loadSetting", function MainComponent_Template_app_settings_sidenav_loadSetting_2_listener($event) { return ctx.loadSiteConfig($event); })("generateBmap", function MainComponent_Template_app_settings_sidenav_generateBmap_2_listener() { return ctx.exportbmap(); })("generateConfig", function MainComponent_Template_app_settings_sidenav_generateConfig_2_listener() { return ctx.zipAndDownloadConfig(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "app-loader", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, MainComponent_div_6_Template, 2, 1, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("loadingData", ctx.loadingData);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.rows);
    } }, styles: [".grid-container[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  background-color: black;\n  padding: 10px;\n  border-radius: 15px;\n}\n.grid-container[_ngcontent-%COMP%]   .grid-row[_ngcontent-%COMP%] {\n  display: flex;\n  flex-flow: row;\n}\n.grid-container[_ngcontent-%COMP%]   .grid-row[_ngcontent-%COMP%]   .grid-box[_ngcontent-%COMP%] {\n  width: 15vh;\n  height: 15vh;\n  margin: 5px;\n  border-radius: 15px;\n  display: flex;\n  text-align: center;\n  align-items: center;\n  background-color: #d6d5ca;\n  justify-content: center;\n  cursor: pointer;\n  transition: width 0.5s;\n  transition: height 0.5s;\n  transition: background-color 0.5s;\n  transition: margin 0.5s;\n}\n.grid-container[_ngcontent-%COMP%]   .grid-row[_ngcontent-%COMP%]   .grid-box[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 50%;\n  height: 500%;\n}\n.grid-container[_ngcontent-%COMP%]   .grid-row[_ngcontent-%COMP%]   .grid-box[_ngcontent-%COMP%]:hover {\n  width: calc(15vh + 10px);\n  height: calc(15vh + 10px);\n  margin: 0px;\n  background-color: #ffb39a;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2l0ZXMvbWFpbi9tYWluLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUNBLGdDQUFBO0VBQ0EsdUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUFDRjtBQUFFO0VBQ0UsYUFBQTtFQUNBLGNBQUE7QUFFSjtBQURJO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLGlDQUFBO0VBQ0EsdUJBQUE7QUFHTjtBQURNO0VBQ0UsVUFBQTtFQUNBLFlBQUE7QUFHUjtBQUNJO0VBQ0Usd0JBQUE7RUFDQSx5QkFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtBQUNOIiwiZmlsZSI6InNyYy9hcHAvc2l0ZXMvbWFpbi9tYWluLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmdyaWQtY29udGFpbmVyIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbGVmdDogNTAlO1xyXG4gIHRvcDogNTAlO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAwLCAwKTtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgLmdyaWQtcm93IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWZsb3c6IHJvdztcclxuICAgIC5ncmlkLWJveCB7XHJcbiAgICAgIHdpZHRoOiAxNXZoO1xyXG4gICAgICBoZWlnaHQ6IDE1dmg7XHJcbiAgICAgIG1hcmdpbjogNXB4O1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNkNmQ1Y2E7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgIHRyYW5zaXRpb246IHdpZHRoIDAuNXM7XHJcbiAgICAgIHRyYW5zaXRpb246IGhlaWdodCAwLjVzO1xyXG4gICAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuNXM7XHJcbiAgICAgIHRyYW5zaXRpb246IG1hcmdpbiAwLjVzO1xyXG4gICAgICAvL3RyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgLjVzOyAgZW5hYmxlIHRoaXMgbGluZSB0byBkaXNhYmxlIHZpYnJhdGlvbiBvbiBob3ZlclxyXG4gICAgICBpbWcge1xyXG4gICAgICAgIHdpZHRoOiA1MCU7XHJcbiAgICAgICAgaGVpZ2h0OiA1MDAlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmdyaWQtYm94OmhvdmVyIHtcclxuICAgICAgd2lkdGg6IGNhbGMoMTV2aCArIDEwcHgpO1xyXG4gICAgICBoZWlnaHQ6IGNhbGMoMTV2aCArIDEwcHgpO1xyXG4gICAgICBtYXJnaW46IDBweDtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmYjM5YTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MainComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                templateUrl: './main.component.html',
                styleUrls: ['./main.component.scss'],
            }]
    }], function () { return [{ type: _services_matrix_data_service__WEBPACK_IMPORTED_MODULE_5__["MatrixDataService"] }]; }, { buttonConf: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['buttonconf']
        }], settingsConf: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['settingsconf']
        }], onUnload: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"],
            args: ['window:beforeunload', ['$event']]
        }] }); })();


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
/* harmony import */ var _angular_material_components_color_picker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular-material-components/color-picker */ "./node_modules/@angular-material-components/color-picker/__ivy_ngcc__/fesm2015/angular-material-components-color-picker.js");

// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    gridSize: [5, 5],
    defaultButtonColor: new _angular_material_components_color_picker__WEBPACK_IMPORTED_MODULE_0__["Color"](255, 255, 255),
    actions: [
        {
            name: 'None',
            value: '/',
        },
        {
            name: 'Music',
            value: 'MF',
        },
        {
            name: 'Sound Effect',
            value: 'SE',
        },
        {
            name: 'Pause',
            value: 'Pause',
        },
        {
            name: 'Resume',
            value: 'Resume',
        },
        {
            name: 'Skip',
            value: 'Skip',
        },
        {
            name: 'Stop',
            value: 'Stop',
        },
        {
            name: 'Volume Up',
            value: 'V+',
        },
        {
            name: 'Volume Down',
            value: 'V-',
        },
        {
            name: 'Brightness Up',
            value: 'B+',
        },
        {
            name: 'Brightness Down',
            value: 'B-',
        },
        {
            name: 'Roll D20',
            value: 'RD20',
        },
    ],
    defaultConfig: '{"name":"Forest","action":{"name":"Music","value":"MF"},"color":{"r":242,"g":158,"b":76,"a":1,"roundA":1,"hex":"f29e4c","rgba":"rgba(242,158,76,1)"},"position":[0,0],"musicfiles":[]};{"name":"Cave","action":{"name":"Music","value":"MF"},"color":{"r":241,"g":196,"b":83,"a":1,"roundA":1,"hex":"f1c453","rgba":"rgba(241,196,83,1)"},"position":[1,0],"musicfiles":[]};{"name":"Fighting","action":{"name":"Music","value":"MF"},"color":{"r":239,"g":234,"b":90,"a":1,"roundA":1,"hex":"efea5a","rgba":"rgba(239,234,90,1)"},"position":[2,0],"musicfiles":[]};{"name":"Dungon","action":{"name":"Music","value":"MF"},"color":{"r":185,"g":231,"b":105,"a":1,"roundA":1,"hex":"b9e769","rgba":"rgba(185,231,105,1)"},"position":[3,0],"musicfiles":[]};{"name":"Volume Down","action":{"name":"Volume Down","value":"V-"},"color":{"r":131,"g":227,"b":119,"a":1,"roundA":1,"hex":"83e377","rgba":"rgba(131,227,119,1)"},"position":[4,0],"musicfiles":[]}|{"name":"Travelling","action":{"name":"Music","value":"MF"},"color":{"r":241,"g":196,"b":83,"a":1,"roundA":1,"hex":"f1c453","rgba":"rgba(241,196,83,1)"},"position":[0,1],"musicfiles":[]};{"name":"Dimension Change","action":{"name":"Music","value":"MF"},"color":{"r":239,"g":234,"b":90,"a":1,"roundA":1,"hex":"efea5a","rgba":"rgba(239,234,90,1)"},"position":[1,1],"musicfiles":[]};{"name":"Intense Fighting","action":{"name":"Music","value":"MF"},"color":{"r":185,"g":231,"b":105,"a":1,"roundA":1,"hex":"b9e769","rgba":"rgba(185,231,105,1)"},"position":[2,1],"musicfiles":[]};{"name":"Mountain","action":{"name":"Music","value":"MF"},"color":{"r":131,"g":227,"b":119,"a":1,"roundA":1,"hex":"83e377","rgba":"rgba(131,227,119,1)"},"position":[3,1],"musicfiles":[]};{"name":"Volume Up","action":{"name":"Volume Up","value":"V+"},"color":{"r":22,"g":219,"b":147,"a":1,"roundA":1,"hex":"16db93","rgba":"rgba(22,219,147,1)"},"position":[4,1],"musicfiles":[]}|{"name":"City","action":{"name":"Music","value":"MF"},"color":{"r":239,"g":234,"b":90,"a":1,"roundA":1,"hex":"efea5a","rgba":"rgba(239,234,90,1)"},"position":[0,2],"musicfiles":[]};{"name":"Ship","action":{"name":"Music","value":"MF"},"color":{"r":185,"g":231,"b":105,"a":1,"roundA":1,"hex":"b9e769","rgba":"rgba(185,231,105,1)"},"position":[1,2],"musicfiles":[]};{"name":"Long Rest","action":{"name":"Music","value":"MF"},"color":{"r":131,"g":227,"b":119,"a":1,"roundA":1,"hex":"83e377","rgba":"rgba(131,227,119,1)"},"position":[2,2],"musicfiles":[]};{"name":"Island","action":{"name":"Music","value":"MF"},"color":{"r":22,"g":219,"b":147,"a":1,"roundA":1,"hex":"16db93","rgba":"rgba(22,219,147,1)"},"position":[3,2],"musicfiles":[]};{"name":"Pause","action":{"name":"Pause","value":"Pause"},"color":{"r":13,"g":179,"b":158,"a":1,"roundA":1,"hex":"0db39e","rgba":"rgba(13,179,158,1)"},"position":[4,2],"musicfiles":[]}|{"name":"Talking Npc","action":{"name":"Sound Effect","value":"SE"},"color":{"r":185,"g":231,"b":105,"a":1,"roundA":1,"hex":"b9e769","rgba":"rgba(185,231,105,1)"},"position":[0,3],"musicfiles":[]};{"name":"Failed save","action":{"name":"Sound Effect","value":"SE"},"color":{"r":131,"g":227,"b":119,"a":1,"roundA":1,"hex":"83e377","rgba":"rgba(131,227,119,1)"},"position":[1,3],"musicfiles":[]};{"name":"Damage","action":{"name":"Sound Effect","value":"SE"},"color":{"r":22,"g":219,"b":147,"a":1,"roundA":1,"hex":"16db93","rgba":"rgba(22,219,147,1)"},"position":[2,3],"musicfiles":[]};{"name":"Monster","action":{"name":"Sound Effect","value":"SE"},"color":{"r":13,"g":179,"b":158,"a":1,"roundA":1,"hex":"0db39e","rgba":"rgba(13,179,158,1)"},"position":[3,3],"musicfiles":[]};{"name":"Play","action":{"name":"Resume","value":"Resume"},"color":{"r":4,"g":139,"b":168,"a":1,"roundA":1,"hex":"048ba8","rgba":"rgba(4,139,168,1)"},"position":[4,3],"musicfiles":[]}|{"name":"Roll D20","action":{"name":"Roll D20","value":"RD20"},"color":{"r":131,"g":227,"b":119,"a":1,"roundA":1,"hex":"83e377","rgba":"rgba(131,227,119,1)"},"position":[0,4],"musicfiles":[]};{"name":"Succesfull save","action":{"name":"Sound Effect","value":"SE"},"color":{"r":22,"g":219,"b":147,"a":1,"roundA":1,"hex":"16db93","rgba":"rgba(22,219,147,1)"},"position":[1,4],"musicfiles":[]};{"name":"Heal","action":{"name":"Sound Effect","value":"SE"},"color":{"r":13,"g":179,"b":158,"a":1,"roundA":1,"hex":"0db39e","rgba":"rgba(13,179,158,1)"},"position":[2,4],"musicfiles":[]};{"name":"Danger","action":{"name":"Sound Effect","value":"SE"},"color":{"r":4,"g":139,"b":168,"a":1,"roundA":1,"hex":"048ba8","rgba":"rgba(4,139,168,1)"},"position":[3,4],"musicfiles":[]};{"name":"Skip","action":{"name":"Skip","value":"Skip"},"color":{"r":44,"g":105,"b":154,"a":1,"roundA":1,"hex":"2c699a","rgba":"rgba(44,105,154,1)"},"position":[4,4],"musicfiles":[]}|',
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

module.exports = __webpack_require__(/*! D:\Julius\Projekte-Julius\dnd-launch-pad\Software\LaunchpadConfigurator\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map