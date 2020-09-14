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
/* harmony import */ var _sites_settings_settings_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sites/settings/settings.component */ "./src/app/sites/settings/settings.component.ts");
/* harmony import */ var _sites_pictures_pictures_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sites/pictures/pictures.component */ "./src/app/sites/pictures/pictures.component.ts");
/* harmony import */ var _sites_landing_landing_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sites/landing/landing.component */ "./src/app/sites/landing/landing.component.ts");
/* harmony import */ var _sites_pdf_pdf_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sites/pdf/pdf.component */ "./src/app/sites/pdf/pdf.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");








const routes = [
    {
        path: 'pdf',
        component: _sites_pdf_pdf_component__WEBPACK_IMPORTED_MODULE_3__["PdfComponent"],
    },
    {
        path: 'pictures',
        component: _sites_pictures_pictures_component__WEBPACK_IMPORTED_MODULE_1__["PicturesComponent"],
    },
    {
        path: 'settings',
        component: _sites_settings_settings_component__WEBPACK_IMPORTED_MODULE_0__["SettingsComponent"],
    },
    {
        path: '',
        component: _sites_landing_landing_component__WEBPACK_IMPORTED_MODULE_2__["LandingComponent"],
    },
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forRoot(routes, { useHash: true })], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forRoot(routes, { useHash: true })],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"]],
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
        this.title = 'PdfMaker';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQUFBIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyoucGFnZSB7XHJcbiAgd2lkdGg6IDIxMG1tO1xyXG4gIG1pbi1oZWlnaHQ6IDI5N21tO1xyXG4gIHBhZGRpbmc6IDIwbW07XHJcbiAgbWFyZ2luOiAxMG1tIGF1dG87XHJcbiAgYm9yZGVyOiAxcHggI2QzZDNkMyBzb2xpZDtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgYm94LXNoYWRvdzogNHB4IDRweCA1cHggcmdiKDAsIDAsIDApO1xyXG59XHJcbi5zdWJwYWdlIHtcclxuICBwYWRkaW5nOiAxY207XHJcbiAgYm9yZGVyOiA1cHggcmVkIHNvbGlkO1xyXG4gIGhlaWdodDogMjU3bW07XHJcbiAgb3V0bGluZTogMmNtICNmZmVhZWEgc29saWQ7XHJcbn1cclxuXHJcbkBwYWdlIHtcclxuICBzaXplOiBBNDtcclxuICBtYXJnaW46IDA7XHJcbn1cclxuQG1lZGlhIHByaW50IHtcclxuICBodG1sLFxyXG4gIGJvZHkge1xyXG4gICAgd2lkdGg6IDIxMG1tO1xyXG4gICAgaGVpZ2h0OiAyOTdtbTtcclxuICB9XHJcbiAgLnBhZ2Uge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgYm9yZGVyOiBpbml0aWFsO1xyXG4gICAgYm9yZGVyLXJhZGl1czogaW5pdGlhbDtcclxuICAgIHdpZHRoOiBpbml0aWFsO1xyXG4gICAgbWluLWhlaWdodDogaW5pdGlhbDtcclxuICAgIGJveC1zaGFkb3c6IGluaXRpYWw7XHJcbiAgICBiYWNrZ3JvdW5kOiBpbml0aWFsO1xyXG4gICAgcGFnZS1icmVhay1hZnRlcjogYWx3YXlzO1xyXG4gIH1cclxufVxyXG4qL1xyXG4iXX0= */"] });
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _sites_pdf_pdf_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sites/pdf/pdf.component */ "./src/app/sites/pdf/pdf.component.ts");
/* harmony import */ var _sites_landing_landing_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./sites/landing/landing.component */ "./src/app/sites/landing/landing.component.ts");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngxs/store */ "./node_modules/@ngxs/store/__ivy_ngcc__/fesm2015/ngxs-store.js");
/* harmony import */ var _ngxs_logger_plugin__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngxs/logger-plugin */ "./node_modules/@ngxs/logger-plugin/__ivy_ngcc__/fesm2015/ngxs-logger-plugin.js");
/* harmony import */ var _ngxs_devtools_plugin__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngxs/devtools-plugin */ "./node_modules/@ngxs/devtools-plugin/__ivy_ngcc__/fesm2015/ngxs-devtools-plugin.js");
/* harmony import */ var _sites_pictures_pictures_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./sites/pictures/pictures.component */ "./src/app/sites/pictures/pictures.component.ts");
/* harmony import */ var ngx_image_compress__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-image-compress */ "./node_modules/ngx-image-compress/__ivy_ngcc__/fesm2015/ngx-image-compress.js");
/* harmony import */ var _sites_settings_settings_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./sites/settings/settings.component */ "./src/app/sites/settings/settings.component.ts");
/* harmony import */ var _pipes_number_formatter_pipe__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./pipes/number-formatter.pipe */ "./src/app/pipes/number-formatter.pipe.ts");



















class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [ngx_image_compress__WEBPACK_IMPORTED_MODULE_12__["NgxImageCompressService"]], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
            _ngxs_store__WEBPACK_IMPORTED_MODULE_8__["NgxsModule"].forRoot([_store_app_state__WEBPACK_IMPORTED_MODULE_0__["AppState"]]),
            _ngxs_logger_plugin__WEBPACK_IMPORTED_MODULE_9__["NgxsLoggerPluginModule"].forRoot(),
            _ngxs_devtools_plugin__WEBPACK_IMPORTED_MODULE_10__["NgxsReduxDevtoolsPluginModule"].forRoot(),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
        _sites_pdf_pdf_component__WEBPACK_IMPORTED_MODULE_6__["PdfComponent"],
        _sites_landing_landing_component__WEBPACK_IMPORTED_MODULE_7__["LandingComponent"],
        _sites_pictures_pictures_component__WEBPACK_IMPORTED_MODULE_11__["PicturesComponent"],
        _sites_settings_settings_component__WEBPACK_IMPORTED_MODULE_13__["SettingsComponent"],
        _pipes_number_formatter_pipe__WEBPACK_IMPORTED_MODULE_14__["NumberFormatterPipe"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"], _ngxs_store__WEBPACK_IMPORTED_MODULE_8__["ɵj"], _ngxs_logger_plugin__WEBPACK_IMPORTED_MODULE_9__["NgxsLoggerPluginModule"], _ngxs_devtools_plugin__WEBPACK_IMPORTED_MODULE_10__["NgxsReduxDevtoolsPluginModule"]], exports: [_pipes_number_formatter_pipe__WEBPACK_IMPORTED_MODULE_14__["NumberFormatterPipe"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                    _sites_pdf_pdf_component__WEBPACK_IMPORTED_MODULE_6__["PdfComponent"],
                    _sites_landing_landing_component__WEBPACK_IMPORTED_MODULE_7__["LandingComponent"],
                    _sites_pictures_pictures_component__WEBPACK_IMPORTED_MODULE_11__["PicturesComponent"],
                    _sites_settings_settings_component__WEBPACK_IMPORTED_MODULE_13__["SettingsComponent"],
                    _pipes_number_formatter_pipe__WEBPACK_IMPORTED_MODULE_14__["NumberFormatterPipe"],
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                    _ngxs_store__WEBPACK_IMPORTED_MODULE_8__["NgxsModule"].forRoot([_store_app_state__WEBPACK_IMPORTED_MODULE_0__["AppState"]]),
                    _ngxs_logger_plugin__WEBPACK_IMPORTED_MODULE_9__["NgxsLoggerPluginModule"].forRoot(),
                    _ngxs_devtools_plugin__WEBPACK_IMPORTED_MODULE_10__["NgxsReduxDevtoolsPluginModule"].forRoot(),
                ],
                providers: [ngx_image_compress__WEBPACK_IMPORTED_MODULE_12__["NgxImageCompressService"]],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]],
                exports: [_pipes_number_formatter_pipe__WEBPACK_IMPORTED_MODULE_14__["NumberFormatterPipe"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/pipes/number-formatter.pipe.ts":
/*!************************************************!*\
  !*** ./src/app/pipes/number-formatter.pipe.ts ***!
  \************************************************/
/*! exports provided: NumberFormatterPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NumberFormatterPipe", function() { return NumberFormatterPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class NumberFormatterPipe {
    transform(value) {
        let formatterdVal;
        if (value != undefined) {
            formatterdVal = this.reverse(this.chunk(value, 3).join('.'));
        }
        else {
            formatterdVal = value;
        }
        return formatterdVal;
    }
    chunk(str, n) {
        var ret = [];
        var i;
        str = this.reverse(str.toString());
        var len = str.length;
        for (i = 0; i < len; i += n) {
            ret.push(str.substr(i, n));
        }
        return ret;
    }
    reverse(str) {
        let reversed = '';
        for (var i = str.length - 1; i >= 0; i--) {
            reversed += str[i];
        }
        return reversed;
    }
}
NumberFormatterPipe.ɵfac = function NumberFormatterPipe_Factory(t) { return new (t || NumberFormatterPipe)(); };
NumberFormatterPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "numberFormatter", type: NumberFormatterPipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NumberFormatterPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'numberFormatter',
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/service/image-compress.service.ts":
/*!***************************************************!*\
  !*** ./src/app/service/image-compress.service.ts ***!
  \***************************************************/
/*! exports provided: ImageCompressService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageCompressService", function() { return ImageCompressService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var ngx_image_compress__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-image-compress */ "./node_modules/ngx-image-compress/__ivy_ngcc__/fesm2015/ngx-image-compress.js");




class ImageCompressService {
    constructor(imageCompress) {
        this.imageCompress = imageCompress;
    }
    compressFile(image, fileName) {
        let orientation = -1;
        const targetSize = 1;
        let currentSize = this.imageCompress.byteCount(image) / (1024 * 1024);
        console.log(currentSize);
        if (currentSize > targetSize) {
            return rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"].create((observer) => {
                this.imageCompress
                    .compressFile(image, orientation, 20, 20)
                    .then((result) => {
                    console.log(fileName
                    //this.imageCompress.byteCount(result) / (1024 * 1024)
                    );
                    // create file from byte
                    const imageName = fileName;
                    // call method that creates a blob from dataUri
                    const imageBlob = this.dataURItoBlob(result.split(',')[1]);
                    //imageFile created below is the new compressed file which can be send to API in form data
                    const imageFile = new File([result], imageName, {
                        type: 'image/jpeg',
                    });
                    //this.imageFileData.push(imageFile);
                    observer.next(result);
                    observer.complete();
                });
            });
        }
        else {
            return rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"].create((observer) => {
                const imageBlob = this.dataURItoBlob(image.split(',')[1]);
                //imageFile created below is the new compressed file which can be send to API in form data
                const imageFile = new File([image], fileName, {
                    type: 'image/jpeg',
                });
                observer.next(image);
                observer.complete();
            });
        }
    }
    dataURItoBlob(dataURI) {
        const byteString = window.atob(dataURI);
        const arrayBuffer = new ArrayBuffer(byteString.length);
        const int8Array = new Uint8Array(arrayBuffer);
        for (let i = 0; i < byteString.length; i++) {
            int8Array[i] = byteString.charCodeAt(i);
        }
        const blob = new Blob([int8Array], { type: 'image/jpeg' });
        return blob;
    }
}
ImageCompressService.ɵfac = function ImageCompressService_Factory(t) { return new (t || ImageCompressService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](ngx_image_compress__WEBPACK_IMPORTED_MODULE_2__["NgxImageCompressService"])); };
ImageCompressService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ImageCompressService, factory: ImageCompressService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ImageCompressService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: ngx_image_compress__WEBPACK_IMPORTED_MODULE_2__["NgxImageCompressService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/service/obj-to-xlsx.service.ts":
/*!************************************************!*\
  !*** ./src/app/service/obj-to-xlsx.service.ts ***!
  \************************************************/
/*! exports provided: ObjToXlsxService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ObjToXlsxService", function() { return ObjToXlsxService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! xlsx */ "./node_modules/xlsx/xlsx.js");
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(xlsx__WEBPACK_IMPORTED_MODULE_1__);



class ObjToXlsxService {
    constructor() {
        this.sheetname = 'sheet';
    }
    downloadXlsx(data, filename = 'FilterdExcel') {
        filename = filename + '.xlsx';
        var wb = xlsx__WEBPACK_IMPORTED_MODULE_1__["utils"].book_new(), ws = xlsx__WEBPACK_IMPORTED_MODULE_1__["utils"].json_to_sheet(data);
        xlsx__WEBPACK_IMPORTED_MODULE_1__["utils"].book_append_sheet(wb, ws, this.sheetname);
        xlsx__WEBPACK_IMPORTED_MODULE_1__["writeFile"](wb, filename);
    }
}
ObjToXlsxService.ɵfac = function ObjToXlsxService_Factory(t) { return new (t || ObjToXlsxService)(); };
ObjToXlsxService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ObjToXlsxService, factory: ObjToXlsxService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ObjToXlsxService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/sites/landing/landing.component.ts":
/*!****************************************************!*\
  !*** ./src/app/sites/landing/landing.component.ts ***!
  \****************************************************/
/*! exports provided: LandingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingComponent", function() { return LandingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! xlsx */ "./node_modules/xlsx/xlsx.js");
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(xlsx__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var src_app_store_app_action__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/store/app.action */ "./src/app/store/app.action.ts");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngxs/store */ "./node_modules/@ngxs/store/__ivy_ngcc__/fesm2015/ngxs-store.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");







function LandingComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " loading data...\n");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class LandingComponent {
    constructor(store, router) {
        this.store = store;
        this.router = router;
        this.loader = false;
    }
    ngOnInit() { }
    convertExcel(event) {
        this.loader = true;
        const file = event.target.files[0];
        let fileReader = new FileReader();
        fileReader.readAsArrayBuffer(file);
        fileReader.onload = (e) => {
            this.arrayBuffer = fileReader.result;
            var data = new Uint8Array(this.arrayBuffer);
            var arr = new Array();
            for (var i = 0; i != data.length; ++i) {
                arr[i] = String.fromCharCode(data[i]);
            }
            var bstr = arr.join('');
            var workbook = xlsx__WEBPACK_IMPORTED_MODULE_1__["read"](bstr, { type: 'binary' });
            var first_sheet_name = workbook.SheetNames[0];
            var worksheet = workbook.Sheets[first_sheet_name];
            console.log(worksheet);
            let filelist = xlsx__WEBPACK_IMPORTED_MODULE_1__["utils"].sheet_to_json(worksheet, {
                raw: true,
            });
            filelist = this.clearData(filelist);
            this.store.dispatch(new src_app_store_app_action__WEBPACK_IMPORTED_MODULE_2__["SetExcelData"](filelist));
            this.loader = false;
            this.router.navigate(['pictures']);
        };
    }
    clearData(data) {
        let tempData = data.slice();
        for (let i = data.length - 1; i >= 0; i--) {
            if (this.isNumeric(data[i].Zuname) || data[i].Zuname == undefined) {
                console.log(data[i]);
                tempData.splice(i, 1);
            }
        }
        return tempData;
    }
    isNumeric(value) {
        return /^-?\d+$/.test(value);
    }
}
LandingComponent.ɵfac = function LandingComponent_Factory(t) { return new (t || LandingComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngxs_store__WEBPACK_IMPORTED_MODULE_3__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"])); };
LandingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LandingComponent, selectors: [["ng-component"]], decls: 6, vars: 1, consts: [[1, "container"], [1, "file-container"], [1, "file-upload"], ["type", "file", "accept", ".csv,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel", 1, "form-control", 3, "change"], ["class", "loader", 4, "ngIf"], [1, "loader"], [1, "sk-folding-cube"], [1, "sk-cube1", "sk-cube"], [1, "sk-cube2", "sk-cube"], [1, "sk-cube4", "sk-cube"], [1, "sk-cube3", "sk-cube"]], template: function LandingComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function LandingComponent_Template_input_change_3_listener($event) { return ctx.convertExcel($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Upload Excel file ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, LandingComponent_div_5_Template, 7, 0, "div", 4);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loader);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"]], styles: [".container[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.541);\n}\n.container[_ngcontent-%COMP%]   .file-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-flow: column;\n  align-items: center;\n  justify-content: center;\n  height: 100%;\n}\n.container[_ngcontent-%COMP%]   .file-container[_ngcontent-%COMP%]   input[type=file][_ngcontent-%COMP%] {\n  display: none;\n}\n.container[_ngcontent-%COMP%]   .file-container[_ngcontent-%COMP%]   .file-upload[_ngcontent-%COMP%] {\n  font-family: \"Montserrat\", sans-serif;\n  color: #000;\n  font-size: 1.6em;\n  border: 1px solid #ccc;\n  display: inline-block;\n  padding: 6px 12px;\n  background: #fff;\n  padding: 30px;\n  cursor: pointer;\n}\n.loader[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  padding: 12% 0 0 0;\n  box-sizing: border-box;\n  background: rgba(0, 0, 0, 0.541);\n  font-family: \"Montserrat\", sans-serif;\n  font-size: 1.5em;\n  color: #fff;\n  text-align: center;\n}\n.sk-folding-cube[_ngcontent-%COMP%] {\n  margin: 20px auto;\n  width: 60px;\n  height: 60px;\n  position: relative;\n  transform: rotateZ(45deg);\n}\n.sk-folding-cube[_ngcontent-%COMP%]   .sk-cube[_ngcontent-%COMP%] {\n  float: left;\n  width: 50%;\n  height: 50%;\n  position: relative;\n  transform: scale(1.1);\n}\n.sk-folding-cube[_ngcontent-%COMP%]   .sk-cube[_ngcontent-%COMP%]:before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: #7affc1;\n  animation: sk-foldCubeAngle 2.4s infinite linear both;\n  transform-origin: 100% 100%;\n}\n.sk-folding-cube[_ngcontent-%COMP%]   .sk-cube2[_ngcontent-%COMP%] {\n  transform: scale(1.1) rotateZ(90deg);\n}\n.sk-folding-cube[_ngcontent-%COMP%]   .sk-cube3[_ngcontent-%COMP%] {\n  transform: scale(1.1) rotateZ(180deg);\n}\n.sk-folding-cube[_ngcontent-%COMP%]   .sk-cube4[_ngcontent-%COMP%] {\n  transform: scale(1.1) rotateZ(270deg);\n}\n.sk-folding-cube[_ngcontent-%COMP%]   .sk-cube2[_ngcontent-%COMP%]:before {\n  animation-delay: 0.3s;\n}\n.sk-folding-cube[_ngcontent-%COMP%]   .sk-cube3[_ngcontent-%COMP%]:before {\n  animation-delay: 0.6s;\n}\n.sk-folding-cube[_ngcontent-%COMP%]   .sk-cube4[_ngcontent-%COMP%]:before {\n  animation-delay: 0.9s;\n}\n@keyframes sk-foldCubeAngle {\n  0%, 10% {\n    transform: perspective(140px) rotateX(-180deg);\n    opacity: 0;\n  }\n  25%, 75% {\n    transform: perspective(140px) rotateX(0deg);\n    opacity: 1;\n  }\n  90%, 100% {\n    transform: perspective(140px) rotateY(180deg);\n    opacity: 0;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2l0ZXMvbGFuZGluZy9sYW5kaW5nLmNvbXBvbmVudC5zY3NzIiwic3JjL3ZhcmlhYmxlcy9fdmFyaWFibGUuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxnQ0NHVztBREpiO0FBR0U7RUFDRSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtBQURKO0FBR0k7RUFDRSxhQUFBO0FBRE47QUFJSTtFQ1BGLHFDQVpLO0VBYUwsV0FSVztFQVNYLGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSxxQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtBRE1GO0FBREE7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtFQUNBLGdDQ3RCVztFRHVCWCxxQ0NoQ0s7RURpQ0wsZ0JBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUFJRjtBQURBO0VBQ0UsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBRUEseUJBQUE7QUFJRjtBQURBO0VBQ0UsV0FBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFHQSxxQkFBQTtBQUlGO0FBRkE7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFFQSxxREFBQTtFQUdBLDJCQUFBO0FBS0Y7QUFIQTtFQUVFLG9DQUFBO0FBTUY7QUFKQTtFQUVFLHFDQUFBO0FBT0Y7QUFMQTtFQUVFLHFDQUFBO0FBUUY7QUFOQTtFQUVFLHFCQUFBO0FBU0Y7QUFQQTtFQUVFLHFCQUFBO0FBVUY7QUFSQTtFQUVFLHFCQUFBO0FBV0Y7QUFZQTtFQUNFO0lBR0UsOENBQUE7SUFDQSxVQUFBO0VBT0Y7RUFMQTtJQUdFLDJDQUFBO0lBQ0EsVUFBQTtFQU1GO0VBSkE7SUFHRSw2Q0FBQTtJQUNBLFVBQUE7RUFLRjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvc2l0ZXMvbGFuZGluZy9sYW5kaW5nLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uLy4uLy4uL3ZhcmlhYmxlcy92YXJpYWJsZVwiO1xyXG5cclxuLmNvbnRhaW5lciB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBiYWNrZ3JvdW5kOiAkYmctb3ZlcmxheTtcclxuXHJcbiAgLmZpbGUtY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWZsb3c6IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGhlaWdodDogMTAwJTtcclxuXHJcbiAgICBpbnB1dFt0eXBlPVwiZmlsZVwiXSB7XHJcbiAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcblxyXG4gICAgLmZpbGUtdXBsb2FkIHtcclxuICAgICAgQGluY2x1ZGUgZmlsZUlucHV0KCk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4ubG9hZGVyIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHBhZGRpbmc6IDEyJSAwIDAgMDtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIGJhY2tncm91bmQ6ICRiZy1vdmVybGF5O1xyXG4gIGZvbnQtZmFtaWx5OiAkZm9udDtcclxuICBmb250LXNpemU6IDEuNWVtO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLnNrLWZvbGRpbmctY3ViZSB7XHJcbiAgbWFyZ2luOiAyMHB4IGF1dG87XHJcbiAgd2lkdGg6IDYwcHg7XHJcbiAgaGVpZ2h0OiA2MHB4O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWig0NWRlZyk7XHJcbiAgdHJhbnNmb3JtOiByb3RhdGVaKDQ1ZGVnKTtcclxufVxyXG5cclxuLnNrLWZvbGRpbmctY3ViZSAuc2stY3ViZSB7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbiAgd2lkdGg6IDUwJTtcclxuICBoZWlnaHQ6IDUwJTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEuMSk7XHJcbiAgLW1zLXRyYW5zZm9ybTogc2NhbGUoMS4xKTtcclxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XHJcbn1cclxuLnNrLWZvbGRpbmctY3ViZSAuc2stY3ViZTpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwiXCI7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTIyLCAyNTUsIDE5Myk7XHJcbiAgLXdlYmtpdC1hbmltYXRpb246IHNrLWZvbGRDdWJlQW5nbGUgMi40cyBpbmZpbml0ZSBsaW5lYXIgYm90aDtcclxuICBhbmltYXRpb246IHNrLWZvbGRDdWJlQW5nbGUgMi40cyBpbmZpbml0ZSBsaW5lYXIgYm90aDtcclxuICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IDEwMCUgMTAwJTtcclxuICAtbXMtdHJhbnNmb3JtLW9yaWdpbjogMTAwJSAxMDAlO1xyXG4gIHRyYW5zZm9ybS1vcmlnaW46IDEwMCUgMTAwJTtcclxufVxyXG4uc2stZm9sZGluZy1jdWJlIC5zay1jdWJlMiB7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEuMSkgcm90YXRlWig5MGRlZyk7XHJcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpIHJvdGF0ZVooOTBkZWcpO1xyXG59XHJcbi5zay1mb2xkaW5nLWN1YmUgLnNrLWN1YmUzIHtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMS4xKSByb3RhdGVaKDE4MGRlZyk7XHJcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpIHJvdGF0ZVooMTgwZGVnKTtcclxufVxyXG4uc2stZm9sZGluZy1jdWJlIC5zay1jdWJlNCB7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEuMSkgcm90YXRlWigyNzBkZWcpO1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xKSByb3RhdGVaKDI3MGRlZyk7XHJcbn1cclxuLnNrLWZvbGRpbmctY3ViZSAuc2stY3ViZTI6YmVmb3JlIHtcclxuICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogMC4zcztcclxuICBhbmltYXRpb24tZGVsYXk6IDAuM3M7XHJcbn1cclxuLnNrLWZvbGRpbmctY3ViZSAuc2stY3ViZTM6YmVmb3JlIHtcclxuICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogMC42cztcclxuICBhbmltYXRpb24tZGVsYXk6IDAuNnM7XHJcbn1cclxuLnNrLWZvbGRpbmctY3ViZSAuc2stY3ViZTQ6YmVmb3JlIHtcclxuICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogMC45cztcclxuICBhbmltYXRpb24tZGVsYXk6IDAuOXM7XHJcbn1cclxuQC13ZWJraXQta2V5ZnJhbWVzIHNrLWZvbGRDdWJlQW5nbGUge1xyXG4gIDAlLFxyXG4gIDEwJSB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcGVyc3BlY3RpdmUoMTQwcHgpIHJvdGF0ZVgoLTE4MGRlZyk7XHJcbiAgICB0cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDE0MHB4KSByb3RhdGVYKC0xODBkZWcpO1xyXG4gICAgb3BhY2l0eTogMDtcclxuICB9XHJcbiAgMjUlLFxyXG4gIDc1JSB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcGVyc3BlY3RpdmUoMTQwcHgpIHJvdGF0ZVgoMGRlZyk7XHJcbiAgICB0cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDE0MHB4KSByb3RhdGVYKDBkZWcpO1xyXG4gICAgb3BhY2l0eTogMTtcclxuICB9XHJcbiAgOTAlLFxyXG4gIDEwMCUge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDE0MHB4KSByb3RhdGVZKDE4MGRlZyk7XHJcbiAgICB0cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDE0MHB4KSByb3RhdGVZKDE4MGRlZyk7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gIH1cclxufVxyXG5cclxuQGtleWZyYW1lcyBzay1mb2xkQ3ViZUFuZ2xlIHtcclxuICAwJSxcclxuICAxMCUge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDE0MHB4KSByb3RhdGVYKC0xODBkZWcpO1xyXG4gICAgdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSgxNDBweCkgcm90YXRlWCgtMTgwZGVnKTtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgfVxyXG4gIDI1JSxcclxuICA3NSUge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDE0MHB4KSByb3RhdGVYKDBkZWcpO1xyXG4gICAgdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSgxNDBweCkgcm90YXRlWCgwZGVnKTtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgfVxyXG4gIDkwJSxcclxuICAxMDAlIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSgxNDBweCkgcm90YXRlWSgxODBkZWcpO1xyXG4gICAgdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSgxNDBweCkgcm90YXRlWSgxODBkZWcpO1xyXG4gICAgb3BhY2l0eTogMDtcclxuICB9XHJcbn1cclxuIiwiJGZvbnQ6IFwiTW9udHNlcnJhdFwiLCBzYW5zLXNlcmlmO1xyXG4kZm9udC1zbWFsbDogMWVtO1xyXG4kZm9udC1tZWRpdW06IDEuNWVtO1xyXG4kZm9udC1sYXJnZTogM2VtO1xyXG5cclxuJGZvbnQtY29sb3I6ICMwMDA7XHJcbiRmb250LWdyZXk6IHJnYigxMzEsIDEzMSwgMTMxKTtcclxuXHJcbiRiZy1pbWFnZTogdXJsKFwiL2Fzc2V0cy9iYWNrZ3JvdW5kcy9hbmRyZXctbmVlbC5qcGdcIik7XHJcbiRiZy1vdmVybGF5OiByZ2JhKDAsIDAsIDAsIDAuNTQxKTtcclxuXHJcbkBtaXhpbiBmaWxlSW5wdXQoKSB7XHJcbiAgZm9udC1mYW1pbHk6ICRmb250O1xyXG4gIGNvbG9yOiAkZm9udC1jb2xvcjtcclxuICBmb250LXNpemU6IDEuNmVtO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHBhZGRpbmc6IDZweCAxMnB4O1xyXG4gIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgcGFkZGluZzogMzBweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LandingComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                templateUrl: './landing.component.html',
                styleUrls: ['./landing.component.scss'],
            }]
    }], function () { return [{ type: _ngxs_store__WEBPACK_IMPORTED_MODULE_3__["Store"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/sites/pdf/pdf.component.ts":
/*!********************************************!*\
  !*** ./src/app/sites/pdf/pdf.component.ts ***!
  \********************************************/
/*! exports provided: PdfComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PdfComponent", function() { return PdfComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _store_app_state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../store/app.state */ "./src/app/store/app.state.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngxs/store */ "./node_modules/@ngxs/store/__ivy_ngcc__/fesm2015/ngxs-store.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _service_obj_to_xlsx_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../service/obj-to-xlsx.service */ "./src/app/service/obj-to-xlsx.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _pipes_number_formatter_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../pipes/number-formatter.pipe */ "./src/app/pipes/number-formatter.pipe.ts");










function PdfComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function PdfComponent_div_1_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r4.back(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " \u2190 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function PdfComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function PdfComponent_div_2_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r6.print(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " download pdf ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function PdfComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function PdfComponent_div_3_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r8.downloadExcel(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " download excel ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function PdfComponent_section_54_li_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Expertise");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", item_r10.Expertiese, " ");
} }
function PdfComponent_section_54_li_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Provenienz");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", item_r10.Prov, " ");
} }
function PdfComponent_section_54_li_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Ausstellung");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](item_r10.Ausst);
} }
function PdfComponent_section_54_li_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Literatur");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", item_r10.Lit1, " ");
} }
function PdfComponent_section_54_li_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Bemerkung");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](item_r10.Bemerkung);
} }
function PdfComponent_section_54_div_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "numberFormatter");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 2, item_r10.Kaufpreis), " ", item_r10.w, " ");
} }
function PdfComponent_section_54_div_44_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "numberFormatter");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 2, item_r10.VersSumme), " ", item_r10.w, " ");
} }
function PdfComponent_section_54_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "section", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](11, "img", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](25, PdfComponent_section_54_li_25_Template, 5, 1, "li", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](26, PdfComponent_section_54_li_26_Template, 5, 1, "li", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](27, PdfComponent_section_54_li_27_Template, 5, 1, "li", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](28, PdfComponent_section_54_li_28_Template, 5, 1, "li", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](29, PdfComponent_section_54_li_29_Template, 5, 1, "li", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](30, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](32, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](33, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](34, "Kaufdatum / H\u00E4ndler:");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](35, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](36);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](37, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](38, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](39, "Kaufpreis:");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](40, PdfComponent_section_54_div_40_Template, 3, 4, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](41, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](42, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](43, "Versicherungssumme:");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](44, PdfComponent_section_54_div_44_Template, 3, 4, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](45, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](46, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](47, "Standort:");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](48, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](49);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r10 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("Inv. Nr. ", item_r10.InvNr, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](item_r10.Name);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](item_r10.Lebensdaten);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("src", ctx_r3.pictures.get(item_r10.DateinameAbb), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](item_r10.Titel);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](item_r10.Technik);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](item_r10.Abmessungen);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](item_r10.Bezeichnung);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", item_r10.Expertiese != undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", item_r10.Prov != undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", item_r10.Ausst != undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", item_r10.Lit1 != undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", item_r10.Bemerkung != undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate3"](" ", item_r10.Kaufdatum, " ", item_r10.sla, " ", item_r10.Haendler, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", item_r10.Kaufpreis != undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", item_r10.VersSumme != undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](item_r10.Standort);
} }
class PdfComponent {
    constructor(router, objToXlsx) {
        this.router = router;
        this.objToXlsx = objToXlsx;
        this.showUi = true;
        this.excelData = undefined;
        this.pictures = new Map();
        this.fileUrlPictures = new Map();
    }
    ngOnInit() {
        this.excelData$.subscribe((data) => {
            this.excelData = data;
            if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].requireExcel && this.excelData[0] == undefined) {
                this.router.navigate(['']);
            }
        });
        this.pictures$.subscribe((data) => {
            this.pictures = data;
        });
    }
    getFileName(file) {
        let names = file.split('.');
        names.pop();
        file = names.join('.');
        return file;
    }
    back() {
        this.router.navigate(['settings']);
    }
    print() {
        this.showUi = false;
        setTimeout(() => {
            window.print();
            this.showUi = true;
        }, 10);
    }
    downloadExcel() {
        this.objToXlsx.downloadXlsx(this.excelData);
    }
}
PdfComponent.ɵfac = function PdfComponent_Factory(t) { return new (t || PdfComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_service_obj_to_xlsx_service__WEBPACK_IMPORTED_MODULE_6__["ObjToXlsxService"])); };
PdfComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: PdfComponent, selectors: [["ng-component"]], decls: 55, vars: 10, consts: [[1, "container"], ["class", "back-button-container", 3, "click", 4, "ngIf"], ["class", "print-button-container", 3, "click", 4, "ngIf"], ["class", "excel-button-container", 3, "click", 4, "ngIf"], [1, "book", "A4"], [1, "sheet", "padding-10mm"], [1, "sheet-container"], [1, "top-data-container"], [1, "top-data"], [1, "inventar-nr"], [1, "kategorie"], [1, "jahr"], [1, "image-container"], ["height", "300px", "src", "assets/Feuer.jpg"], [1, "bild-daten-container"], [1, "bild-daten"], [1, "bild-name"], [1, "technik"], [1, "abmessungen"], [1, "referenz"], [1, "bild-metadaten-container"], [1, "kauf-daten-container"], [1, "label"], [1, "metadaten"], ["class", "sheet padding-10mm", 4, "ngFor", "ngForOf"], [1, "back-button-container", 3, "click"], [1, "print-button-container", 3, "click"], [1, "excel-button-container", 3, "click"], ["height", "300px", 3, "src"], [4, "ngIf"], ["class", "metadaten", 4, "ngIf"]], template: function PdfComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, PdfComponent_div_1_Template, 2, 0, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, PdfComponent_div_2_Template, 2, 0, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, PdfComponent_div_3_Template, 2, 0, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "section", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, "Inv. Nr. G-Ga-001");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12, "R\u00F6misch");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, "3 - 4 Jahrhundert n. Chr");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](16, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](21, "Mumienportr\u00E4t einer Dame, 3.-4. Jhd. n Chr.");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](23, "Tempera auf Leinen");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](25, "H 52 cm (Rahmen: 66,7 x 48,4 cm)");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](27, "Ref. 1254");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](29, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](30, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](32, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](33, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](34, "Kaufdatum / H\u00E4ndler:");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](35, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](36, " 2019, 11. 11. / Christoph Bacher Arch\u00E4ologie Ancient Art, Wien ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](37, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](38, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](39, "Kaufpreis:");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](40, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](41);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](42, "numberFormatter");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](43, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](44, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](45, "Versicherungssumme:");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](46, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](47);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](48, "numberFormatter");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](49, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](50, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](51, "Standort:");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](52, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](53, "Wien Eiswerk");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](54, PdfComponent_section_54_Template, 50, 19, "section", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.showUi);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.showUi);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.showUi);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](38);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](42, 6, "40000"), " \u20AC");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](48, 8, "1234567890"), " \u20AC ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.excelData);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"]], pipes: [_pipes_number_formatter_pipe__WEBPACK_IMPORTED_MODULE_8__["NumberFormatterPipe"]], styles: [".container[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  flex-flow: column;\n  width: 100%;\n  min-height: 100%;\n  background: rgba(0, 0, 0, 0.541);\n}\n\n.top-data-container[_ngcontent-%COMP%] {\n  font-family: \"Montserrat\", sans-serif;\n  display: flex;\n  flex-flow: column;\n  color: #000;\n}\n\n.top-data-container[_ngcontent-%COMP%]   .top-data[_ngcontent-%COMP%] {\n  text-align: right;\n  align-self: flex-end;\n}\n\n.top-data-container[_ngcontent-%COMP%]   .top-data[_ngcontent-%COMP%]   .inventar-nr[_ngcontent-%COMP%] {\n  font-size: 1em;\n}\n\n.top-data-container[_ngcontent-%COMP%]   .top-data[_ngcontent-%COMP%]   .kategorie[_ngcontent-%COMP%] {\n  margin: 10px 0;\n  font-size: 1.5em;\n}\n\n.top-data-container[_ngcontent-%COMP%]   .top-data[_ngcontent-%COMP%]   .jahr[_ngcontent-%COMP%] {\n  font-size: 1em;\n}\n\n.image-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-flow: row;\n  justify-content: center;\n  margin: 30px;\n}\n\n.bild-daten-container[_ngcontent-%COMP%] {\n  font-family: \"Montserrat\", sans-serif;\n  display: flex;\n  flex-flow: column;\n  color: #000;\n}\n\n.bild-daten-container[_ngcontent-%COMP%]   .bild-daten[_ngcontent-%COMP%] {\n  text-align: center;\n  align-self: center;\n}\n\n.bild-daten-container[_ngcontent-%COMP%]   .bild-daten[_ngcontent-%COMP%]   .bild-name[_ngcontent-%COMP%] {\n  font-size: 1.5em;\n}\n\n.bild-daten-container[_ngcontent-%COMP%]   .bild-daten[_ngcontent-%COMP%]   .technik[_ngcontent-%COMP%] {\n  font-size: 1em;\n}\n\n.bild-daten-container[_ngcontent-%COMP%]   .bild-daten[_ngcontent-%COMP%]   .abmessungen[_ngcontent-%COMP%] {\n  font-size: 1em;\n}\n\n.bild-daten-container[_ngcontent-%COMP%]   .bild-daten[_ngcontent-%COMP%]   .referenz[_ngcontent-%COMP%] {\n  font-size: 1em;\n}\n\n.bild-metadaten-container[_ngcontent-%COMP%] {\n  font-family: \"Montserrat\", sans-serif;\n  display: flex;\n  flex-flow: column;\n  color: #000;\n  min-height: 9cm;\n}\n\n.bild-metadaten-container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  list-style: none;\n}\n\n.bild-metadaten-container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: flex;\n  flex-flow: row;\n  margin: 25px 0;\n}\n\n.bild-metadaten-container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\n  width: 20%;\n}\n\n.bild-metadaten-container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .metadaten[_ngcontent-%COMP%] {\n  width: 70%;\n}\n\n.kauf-daten-container[_ngcontent-%COMP%] {\n  font-family: \"Montserrat\", sans-serif;\n  display: flex;\n  flex-flow: column;\n  color: #838383;\n}\n\n.kauf-daten-container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  list-style: none;\n}\n\n.kauf-daten-container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: flex;\n  flex-flow: row;\n  margin: 8px 0;\n}\n\n.kauf-daten-container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\n  width: 45%;\n}\n\n.kauf-daten-container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .metadaten[_ngcontent-%COMP%] {\n  width: 50%;\n}\n\n.print-button-container[_ngcontent-%COMP%] {\n  font-family: \"Montserrat\", sans-serif;\n  position: fixed;\n  bottom: 4em;\n  right: 1em;\n  background: #fff;\n  padding: 20px;\n  width: auto;\n  font-size: 1.8em;\n  border-radius: 2em;\n  display: flex;\n  flex-flow: column;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  z-index: 10;\n  border: 1px solid #000;\n}\n\n.excel-button-container[_ngcontent-%COMP%] {\n  font-family: \"Montserrat\", sans-serif;\n  position: fixed;\n  bottom: 1em;\n  right: 1em;\n  background: #fff;\n  padding: 20px;\n  width: auto;\n  font-size: 1.8em;\n  border-radius: 2em;\n  display: flex;\n  flex-flow: column;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  z-index: 10;\n  border: 1px solid #000;\n}\n\n.sheet-container[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2l0ZXMvcGRmL3BkZi5jb21wb25lbnQuc2NzcyIsInNyYy92YXJpYWJsZXMvX3ZhcmlhYmxlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGdDQ0NXO0FERmI7O0FBSUE7RUFDRSxxQ0NaSztFRGFMLGFBQUE7RUFDQSxpQkFBQTtFQUNBLFdDVlc7QURTYjs7QUFFRTtFQUNFLGlCQUFBO0VBQ0Esb0JBQUE7QUFBSjs7QUFFSTtFQUNFLGNDcEJPO0FEb0JiOztBQUVJO0VBQ0UsY0FBQTtFQUNBLGdCQ3ZCUTtBRHVCZDs7QUFFSTtFQUNFLGNDM0JPO0FEMkJiOztBQUtBO0VBQ0UsYUFBQTtFQUNBLGNBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7QUFGRjs7QUFLQTtFQUNFLHFDQ3pDSztFRDBDTCxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQ3ZDVztBRHFDYjs7QUFHRTtFQUNFLGtCQUFBO0VBQ0Esa0JBQUE7QUFESjs7QUFHSTtFQUNFLGdCQ2hEUTtBRCtDZDs7QUFJSTtFQUNFLGNDckRPO0FEbURiOztBQUtJO0VBQ0UsY0N6RE87QURzRGI7O0FBTUk7RUFDRSxjQzdETztBRHlEYjs7QUFTQTtFQUNFLHFDQ3BFSztFRHFFTCxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQ2xFVztFRG1FWCxlQUFBO0FBTkY7O0FBUUU7RUFDRSxnQkFBQTtBQU5KOztBQVFJO0VBQ0UsYUFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0FBTk47O0FBUU07RUFDRSxVQUFBO0FBTlI7O0FBU007RUFDRSxVQUFBO0FBUFI7O0FBYUE7RUFDRSxxQ0M5Rks7RUQrRkwsYUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0MzRlU7QURpRlo7O0FBWUU7RUFDRSxnQkFBQTtBQVZKOztBQVlJO0VBQ0UsYUFBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0FBVk47O0FBWU07RUFDRSxVQUFBO0FBVlI7O0FBYU07RUFDRSxVQUFBO0FBWFI7O0FBaUJBO0VBQ0UscUNDdkhLO0VEd0hMLGVBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0Esc0JBQUE7QUFkRjs7QUFpQkE7RUFDRSxxQ0MxSUs7RUQySUwsZUFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxzQkFBQTtBQWRGOztBQWlCQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FBZEYiLCJmaWxlIjoic3JjL2FwcC9zaXRlcy9wZGYvcGRmLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uLy4uLy4uL3ZhcmlhYmxlcy92YXJpYWJsZVwiO1xyXG5cclxuLmNvbnRhaW5lciB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1mbG93OiBjb2x1bW47XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWluLWhlaWdodDogMTAwJTtcclxuICBiYWNrZ3JvdW5kOiAkYmctb3ZlcmxheTtcclxufVxyXG5cclxuLnRvcC1kYXRhLWNvbnRhaW5lciB7XHJcbiAgZm9udC1mYW1pbHk6ICRmb250O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1mbG93OiBjb2x1bW47XHJcbiAgY29sb3I6ICRmb250LWNvbG9yO1xyXG4gIC50b3AtZGF0YSB7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xyXG5cclxuICAgIC5pbnZlbnRhci1uciB7XHJcbiAgICAgIGZvbnQtc2l6ZTogJGZvbnQtc21hbGw7XHJcbiAgICB9XHJcbiAgICAua2F0ZWdvcmllIHtcclxuICAgICAgbWFyZ2luOiAxMHB4IDA7XHJcbiAgICAgIGZvbnQtc2l6ZTogJGZvbnQtbWVkaXVtO1xyXG4gICAgfVxyXG4gICAgLmphaHIge1xyXG4gICAgICBmb250LXNpemU6ICRmb250LXNtYWxsO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLmltYWdlLWNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWZsb3c6IHJvdztcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBtYXJnaW46IDMwcHg7XHJcbn1cclxuXHJcbi5iaWxkLWRhdGVuLWNvbnRhaW5lciB7XHJcbiAgZm9udC1mYW1pbHk6ICRmb250O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1mbG93OiBjb2x1bW47XHJcbiAgY29sb3I6ICRmb250LWNvbG9yO1xyXG4gIC5iaWxkLWRhdGVuIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuXHJcbiAgICAuYmlsZC1uYW1lIHtcclxuICAgICAgZm9udC1zaXplOiAkZm9udC1tZWRpdW07XHJcbiAgICB9XHJcblxyXG4gICAgLnRlY2huaWsge1xyXG4gICAgICBmb250LXNpemU6ICRmb250LXNtYWxsO1xyXG4gICAgfVxyXG5cclxuICAgIC5hYm1lc3N1bmdlbiB7XHJcbiAgICAgIGZvbnQtc2l6ZTogJGZvbnQtc21hbGw7XHJcbiAgICB9XHJcblxyXG4gICAgLnJlZmVyZW56IHtcclxuICAgICAgZm9udC1zaXplOiAkZm9udC1zbWFsbDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5iaWxkLW1ldGFkYXRlbi1jb250YWluZXIge1xyXG4gIGZvbnQtZmFtaWx5OiAkZm9udDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZmxvdzogY29sdW1uO1xyXG4gIGNvbG9yOiAkZm9udC1jb2xvcjtcclxuICBtaW4taGVpZ2h0OiA5Y207XHJcblxyXG4gIHVsIHtcclxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcblxyXG4gICAgbGkge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBmbGV4LWZsb3c6IHJvdztcclxuICAgICAgbWFyZ2luOiAyNXB4IDA7XHJcblxyXG4gICAgICAubGFiZWwge1xyXG4gICAgICAgIHdpZHRoOiAyMCU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5tZXRhZGF0ZW4ge1xyXG4gICAgICAgIHdpZHRoOiA3MCU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5rYXVmLWRhdGVuLWNvbnRhaW5lciB7XHJcbiAgZm9udC1mYW1pbHk6ICRmb250O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1mbG93OiBjb2x1bW47XHJcbiAgY29sb3I6ICRmb250LWdyZXk7XHJcblxyXG4gIHVsIHtcclxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcblxyXG4gICAgbGkge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBmbGV4LWZsb3c6IHJvdztcclxuICAgICAgbWFyZ2luOiA4cHggMDtcclxuXHJcbiAgICAgIC5sYWJlbCB7XHJcbiAgICAgICAgd2lkdGg6IDQ1JTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLm1ldGFkYXRlbiB7XHJcbiAgICAgICAgd2lkdGg6IDUwJTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLnByaW50LWJ1dHRvbi1jb250YWluZXIge1xyXG4gIGZvbnQtZmFtaWx5OiAkZm9udDtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgYm90dG9tOiA0ZW07XHJcbiAgcmlnaHQ6IDFlbTtcclxuICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbiAgd2lkdGg6IGF1dG87XHJcbiAgZm9udC1zaXplOiAxLjhlbTtcclxuICBib3JkZXItcmFkaXVzOiAyZW07XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWZsb3c6IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICB6LWluZGV4OiAxMDtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjMDAwO1xyXG59XHJcblxyXG4uZXhjZWwtYnV0dG9uLWNvbnRhaW5lciB7XHJcbiAgZm9udC1mYW1pbHk6ICRmb250O1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICBib3R0b206IDFlbTtcclxuICByaWdodDogMWVtO1xyXG4gIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgcGFkZGluZzogMjBweDtcclxuICB3aWR0aDogYXV0bztcclxuICBmb250LXNpemU6IDEuOGVtO1xyXG4gIGJvcmRlci1yYWRpdXM6IDJlbTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZmxvdzogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHotaW5kZXg6IDEwO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICMwMDA7XHJcbn1cclxuXHJcbi5zaGVldC1jb250YWluZXIge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxufVxyXG4iLCIkZm9udDogXCJNb250c2VycmF0XCIsIHNhbnMtc2VyaWY7XHJcbiRmb250LXNtYWxsOiAxZW07XHJcbiRmb250LW1lZGl1bTogMS41ZW07XHJcbiRmb250LWxhcmdlOiAzZW07XHJcblxyXG4kZm9udC1jb2xvcjogIzAwMDtcclxuJGZvbnQtZ3JleTogcmdiKDEzMSwgMTMxLCAxMzEpO1xyXG5cclxuJGJnLWltYWdlOiB1cmwoXCIvYXNzZXRzL2JhY2tncm91bmRzL2FuZHJldy1uZWVsLmpwZ1wiKTtcclxuJGJnLW92ZXJsYXk6IHJnYmEoMCwgMCwgMCwgMC41NDEpO1xyXG5cclxuQG1peGluIGZpbGVJbnB1dCgpIHtcclxuICBmb250LWZhbWlseTogJGZvbnQ7XHJcbiAgY29sb3I6ICRmb250LWNvbG9yO1xyXG4gIGZvbnQtc2l6ZTogMS42ZW07XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgcGFkZGluZzogNnB4IDEycHg7XHJcbiAgYmFja2dyb3VuZDogI2ZmZjtcclxuICBwYWRkaW5nOiAzMHB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4iXX0= */", "@page {\n  margin[_ngcontent-%COMP%]:   0[_ngcontent-%COMP%];\n  size[_ngcontent-%COMP%]:   A4[_ngcontent-%COMP%];\n}\n.book[_ngcontent-%COMP%] {\n  margin: 0;\n}\n.sheet[_ngcontent-%COMP%] {\n  margin: 0;\n  overflow: hidden;\n  position: relative;\n  break-after: page;\n  page-break-inside: avoid;\n  position: relative;\n  width: 100%;\n  height: 100%;\n}\n\n.book.A3[_ngcontent-%COMP%]   .sheet[_ngcontent-%COMP%] {\n  width: 297mm;\n  height: 419mm;\n}\n.book.A3.landscape[_ngcontent-%COMP%]   .sheet[_ngcontent-%COMP%] {\n  width: 420mm;\n  height: 296mm;\n}\n.book.A4[_ngcontent-%COMP%]   .sheet[_ngcontent-%COMP%] {\n  width: 210mm;\n  height: 297mm;\n}\n.book.A4.landscape[_ngcontent-%COMP%]   .sheet[_ngcontent-%COMP%] {\n  width: 297mm;\n  height: 209mm;\n}\n.book.A5[_ngcontent-%COMP%]   .sheet[_ngcontent-%COMP%] {\n  width: 148mm;\n  height: 209mm;\n}\n.book.A5.landscape[_ngcontent-%COMP%]   .sheet[_ngcontent-%COMP%] {\n  width: 210mm;\n  height: 147mm;\n}\n.book.letter[_ngcontent-%COMP%]   .sheet[_ngcontent-%COMP%] {\n  width: 216mm;\n  height: 279mm;\n}\n.book.letter.landscape[_ngcontent-%COMP%]   .sheet[_ngcontent-%COMP%] {\n  width: 280mm;\n  height: 215mm;\n}\n.book.legal[_ngcontent-%COMP%]   .sheet[_ngcontent-%COMP%] {\n  width: 216mm;\n  height: 356mm;\n}\n.book.legal.landscape[_ngcontent-%COMP%]   .sheet[_ngcontent-%COMP%] {\n  width: 357mm;\n  height: 215mm;\n}\n\n.sheet.padding-10mm[_ngcontent-%COMP%] {\n  padding: 10mm;\n}\n.sheet.padding-15mm[_ngcontent-%COMP%] {\n  padding: 15mm;\n}\n.sheet.padding-20mm[_ngcontent-%COMP%] {\n  padding: 20mm;\n}\n.sheet.padding-25mm[_ngcontent-%COMP%] {\n  padding: 25mm;\n}\n\n@media screen {\n  .sheet[_ngcontent-%COMP%] {\n    background: white;\n    box-shadow: 0 0.5mm 2mm rgba(0, 0, 0, 0.3);\n    margin: 5mm auto;\n  }\n}\n\n@media print {\n  .book.A3.landscape[_ngcontent-%COMP%] {\n    width: 420mm;\n  }\n\n  .book.A3[_ngcontent-%COMP%], .book.A4.landscape[_ngcontent-%COMP%] {\n    width: 296mm;\n  }\n\n  .book.A4[_ngcontent-%COMP%], .book.A5.landscape[_ngcontent-%COMP%] {\n    width: 210mm;\n  }\n\n  .book.A5[_ngcontent-%COMP%] {\n    width: 148mm;\n  }\n\n  .book.letter[_ngcontent-%COMP%], .book.legal[_ngcontent-%COMP%] {\n    width: 216mm;\n  }\n\n  .book.letter.landscape[_ngcontent-%COMP%] {\n    width: 280mm;\n  }\n\n  .book.legal.landscape[_ngcontent-%COMP%] {\n    width: 357mm;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFwZXIuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFNBQUE7RUFDQSxRQUFBO0FBQ0Y7QUFFQTtFQUNFLFNBQUE7QUFBRjtBQUVBO0VBQ0UsU0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLHdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQUNGO0FBRUEsa0JBQUE7QUFDQTtFQUNFLFlBQUE7RUFDQSxhQUFBO0FBQ0Y7QUFDQTtFQUNFLFlBQUE7RUFDQSxhQUFBO0FBRUY7QUFBQTtFQUNFLFlBQUE7RUFDQSxhQUFBO0FBR0Y7QUFEQTtFQUNFLFlBQUE7RUFDQSxhQUFBO0FBSUY7QUFGQTtFQUNFLFlBQUE7RUFDQSxhQUFBO0FBS0Y7QUFIQTtFQUNFLFlBQUE7RUFDQSxhQUFBO0FBTUY7QUFKQTtFQUNFLFlBQUE7RUFDQSxhQUFBO0FBT0Y7QUFMQTtFQUNFLFlBQUE7RUFDQSxhQUFBO0FBUUY7QUFOQTtFQUNFLFlBQUE7RUFDQSxhQUFBO0FBU0Y7QUFQQTtFQUNFLFlBQUE7RUFDQSxhQUFBO0FBVUY7QUFQQSxtQkFBQTtBQUNBO0VBQ0UsYUFBQTtBQVVGO0FBUkE7RUFDRSxhQUFBO0FBV0Y7QUFUQTtFQUNFLGFBQUE7QUFZRjtBQVZBO0VBQ0UsYUFBQTtBQWFGO0FBVkEseUJBQUE7QUFDQTtFQUlFO0lBQ0UsaUJBQUE7SUFDQSwwQ0FBQTtJQUNBLGdCQUFBO0VBVUY7QUFDRjtBQVBBLG1DQUFBO0FBQ0E7RUFDRTtJQUNFLFlBQUE7RUFTRjs7RUFQQTs7SUFFRSxZQUFBO0VBVUY7O0VBUkE7O0lBRUUsWUFBQTtFQVdGOztFQVRBO0lBQ0UsWUFBQTtFQVlGOztFQVZBOztJQUVFLFlBQUE7RUFhRjs7RUFYQTtJQUNFLFlBQUE7RUFjRjs7RUFaQTtJQUNFLFlBQUE7RUFlRjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvcGFwZXIuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBwYWdlIHtcclxuICBtYXJnaW46IDA7XHJcbiAgc2l6ZTogQTQ7XHJcbn1cclxuXHJcbi5ib29rIHtcclxuICBtYXJnaW46IDA7XHJcbn1cclxuLnNoZWV0IHtcclxuICBtYXJnaW46IDA7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgYnJlYWstYWZ0ZXI6IHBhZ2U7XHJcbiAgcGFnZS1icmVhay1pbnNpZGU6IGF2b2lkO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbi8qKiBQYXBlciBzaXplcyAqKi9cclxuLmJvb2suQTMgLnNoZWV0IHtcclxuICB3aWR0aDogMjk3bW07XHJcbiAgaGVpZ2h0OiA0MTltbTtcclxufVxyXG4uYm9vay5BMy5sYW5kc2NhcGUgLnNoZWV0IHtcclxuICB3aWR0aDogNDIwbW07XHJcbiAgaGVpZ2h0OiAyOTZtbTtcclxufVxyXG4uYm9vay5BNCAuc2hlZXQge1xyXG4gIHdpZHRoOiAyMTBtbTtcclxuICBoZWlnaHQ6IDI5N21tOyAvLzMwNi4zOW1tOztcclxufVxyXG4uYm9vay5BNC5sYW5kc2NhcGUgLnNoZWV0IHtcclxuICB3aWR0aDogMjk3bW07XHJcbiAgaGVpZ2h0OiAyMDltbTtcclxufVxyXG4uYm9vay5BNSAuc2hlZXQge1xyXG4gIHdpZHRoOiAxNDhtbTtcclxuICBoZWlnaHQ6IDIwOW1tO1xyXG59XHJcbi5ib29rLkE1LmxhbmRzY2FwZSAuc2hlZXQge1xyXG4gIHdpZHRoOiAyMTBtbTtcclxuICBoZWlnaHQ6IDE0N21tO1xyXG59XHJcbi5ib29rLmxldHRlciAuc2hlZXQge1xyXG4gIHdpZHRoOiAyMTZtbTtcclxuICBoZWlnaHQ6IDI3OW1tO1xyXG59XHJcbi5ib29rLmxldHRlci5sYW5kc2NhcGUgLnNoZWV0IHtcclxuICB3aWR0aDogMjgwbW07XHJcbiAgaGVpZ2h0OiAyMTVtbTtcclxufVxyXG4uYm9vay5sZWdhbCAuc2hlZXQge1xyXG4gIHdpZHRoOiAyMTZtbTtcclxuICBoZWlnaHQ6IDM1Nm1tO1xyXG59XHJcbi5ib29rLmxlZ2FsLmxhbmRzY2FwZSAuc2hlZXQge1xyXG4gIHdpZHRoOiAzNTdtbTtcclxuICBoZWlnaHQ6IDIxNW1tO1xyXG59XHJcblxyXG4vKiogUGFkZGluZyBhcmVhICoqL1xyXG4uc2hlZXQucGFkZGluZy0xMG1tIHtcclxuICBwYWRkaW5nOiAxMG1tO1xyXG59XHJcbi5zaGVldC5wYWRkaW5nLTE1bW0ge1xyXG4gIHBhZGRpbmc6IDE1bW07XHJcbn1cclxuLnNoZWV0LnBhZGRpbmctMjBtbSB7XHJcbiAgcGFkZGluZzogMjBtbTtcclxufVxyXG4uc2hlZXQucGFkZGluZy0yNW1tIHtcclxuICBwYWRkaW5nOiAyNW1tO1xyXG59XHJcblxyXG4vKiogRm9yIHNjcmVlbiBwcmV2aWV3ICoqL1xyXG5AbWVkaWEgc2NyZWVuIHtcclxuICAuYm9vayB7XHJcbiAgICAvL2JhY2tncm91bmQ6ICNlMGUwZTA7XHJcbiAgfVxyXG4gIC5zaGVldCB7XHJcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgIGJveC1zaGFkb3c6IDAgMC41bW0gMm1tIHJnYmEoMCwgMCwgMCwgMC4zKTtcclxuICAgIG1hcmdpbjogNW1tIGF1dG87XHJcbiAgfVxyXG59XHJcblxyXG4vKiogRml4IGZvciBDaHJvbWUgaXNzdWUgIzI3MzMwNiAqKi9cclxuQG1lZGlhIHByaW50IHtcclxuICAuYm9vay5BMy5sYW5kc2NhcGUge1xyXG4gICAgd2lkdGg6IDQyMG1tO1xyXG4gIH1cclxuICAuYm9vay5BMyxcclxuICAuYm9vay5BNC5sYW5kc2NhcGUge1xyXG4gICAgd2lkdGg6IDI5Nm1tO1xyXG4gIH1cclxuICAuYm9vay5BNCxcclxuICAuYm9vay5BNS5sYW5kc2NhcGUge1xyXG4gICAgd2lkdGg6IDIxMG1tO1xyXG4gIH1cclxuICAuYm9vay5BNSB7XHJcbiAgICB3aWR0aDogMTQ4bW07XHJcbiAgfVxyXG4gIC5ib29rLmxldHRlcixcclxuICAuYm9vay5sZWdhbCB7XHJcbiAgICB3aWR0aDogMjE2bW07XHJcbiAgfVxyXG4gIC5ib29rLmxldHRlci5sYW5kc2NhcGUge1xyXG4gICAgd2lkdGg6IDI4MG1tO1xyXG4gIH1cclxuICAuYm9vay5sZWdhbC5sYW5kc2NhcGUge1xyXG4gICAgd2lkdGg6IDM1N21tO1xyXG4gIH1cclxufVxyXG4iXX0= */"] });
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_4__["Select"])(_store_app_state__WEBPACK_IMPORTED_MODULE_2__["AppState"].filterdExcelData)
], PdfComponent.prototype, "excelData$", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_4__["Select"])(_store_app_state__WEBPACK_IMPORTED_MODULE_2__["AppState"].pictures)
], PdfComponent.prototype, "pictures$", void 0);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](PdfComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"],
        args: [{
                templateUrl: './pdf.component.html',
                styleUrls: ['./pdf.component.scss', '../../paper.scss'],
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }, { type: _service_obj_to_xlsx_service__WEBPACK_IMPORTED_MODULE_6__["ObjToXlsxService"] }]; }, { excelData$: [], pictures$: [] }); })();


/***/ }),

/***/ "./src/app/sites/pictures/pictures.component.ts":
/*!******************************************************!*\
  !*** ./src/app/sites/pictures/pictures.component.ts ***!
  \******************************************************/
/*! exports provided: PicturesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PicturesComponent", function() { return PicturesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _store_app_state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../store/app.state */ "./src/app/store/app.state.ts");
/* harmony import */ var _store_app_action__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../store/app.action */ "./src/app/store/app.action.ts");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngxs/store */ "./node_modules/@ngxs/store/__ivy_ngcc__/fesm2015/ngxs-store.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _service_image_compress_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../service/image-compress.service */ "./src/app/service/image-compress.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");











function PicturesComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](4, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](5, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, " loading & compressing images... ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](7, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r0.loadingPercent, "%\n");
} }
class PicturesComponent {
    constructor(imageCompress, store, router) {
        this.imageCompress = imageCompress;
        this.store = store;
        this.router = router;
        this.imageFileData = new Map();
        this.validFiles = 0;
        this.loader = false;
        this.loadingPercent = 0;
        this.excelData = undefined;
    }
    ngOnInit() {
        this.excelData$.subscribe((data) => {
            this.excelData = data;
            if (src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].requireExcel && this.excelData[0] == undefined) {
                this.router.navigate(['']);
            }
        });
    }
    loadImage(e) {
        this.loader = true;
        this.countValidFiles(e);
        for (var i = 0; i < e.target.files.length; i++) {
            if (e.target.files[i].type.includes('image/')) {
                var that = this;
                var reader = new FileReader();
                reader.onload = (function (file) {
                    var fileName = file.name;
                    return function (event) {
                        const localUrl = event.target.result;
                        that.imageCompress
                            .compressFile(localUrl, fileName)
                            .subscribe((file) => {
                            that.imageFileData.set(that.getFileName(fileName), file);
                            that.loadingPercent = Math.ceil((that.imageFileData.size * 100) / that.validFiles);
                            if (that.imageFileData.size >= that.validFiles - 1) {
                                that.store.dispatch(new _store_app_action__WEBPACK_IMPORTED_MODULE_2__["SetPictures"](that.imageFileData));
                                that.router.navigate(['settings']);
                            }
                        });
                    };
                })(e.target.files[i]);
                reader.readAsDataURL(e.target.files[i]);
            }
        }
    }
    countValidFiles(e) {
        for (var i = 0; i < e.target.files.length; i++) {
            if (e.target.files[i].type.includes('image/')) {
                this.validFiles++;
            }
        }
    }
    getFileName(file) {
        let names = file.split('.');
        names.pop();
        file = names.join('.');
        return file;
    }
    nopictures() {
        this.imageFileData.set('NOPICTURE', '');
        this.store.dispatch(new _store_app_action__WEBPACK_IMPORTED_MODULE_2__["SetPictures"](this.imageFileData));
        this.router.navigate(['settings']);
    }
    back() {
        this.router.navigate(['']);
    }
}
PicturesComponent.ɵfac = function PicturesComponent_Factory(t) { return new (t || PicturesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_service_image_compress_service__WEBPACK_IMPORTED_MODULE_6__["ImageCompressService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ngxs_store__WEBPACK_IMPORTED_MODULE_3__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"])); };
PicturesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: PicturesComponent, selectors: [["ng-component"]], decls: 10, vars: 1, consts: [[1, "container"], [1, "back-button-container", 3, "click"], [1, "file-container"], [1, "file-upload"], ["type", "file", "placeholder", "Upload image", "accept", "image/*", "webkitdirectory", "", "mozdirectory", "", "msdirectory", "", "odirectory", "", "directory", "", "multiple", "multiple", 1, "form-control", 3, "change"], [1, "no-pictures", 3, "click"], ["class", "loader", 4, "ngIf"], [1, "loader"], [1, "sk-folding-cube"], [1, "sk-cube1", "sk-cube"], [1, "sk-cube2", "sk-cube"], [1, "sk-cube4", "sk-cube"], [1, "sk-cube3", "sk-cube"]], template: function PicturesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function PicturesComponent_Template_div_click_1_listener() { return ctx.back(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "\u2190");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("change", function PicturesComponent_Template_input_change_5_listener($event) { return ctx.loadImage($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, " Upload Pictures Folder ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function PicturesComponent_Template_div_click_7_listener() { return ctx.nopictures(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, " Move on without pictures ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](9, PicturesComponent_div_9_Template, 9, 1, "div", 6);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.loader);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"]], styles: [".container[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.541);\n}\n.container[_ngcontent-%COMP%]   .file-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-flow: column;\n  align-items: center;\n  justify-content: center;\n  height: 100%;\n}\n.container[_ngcontent-%COMP%]   .file-container[_ngcontent-%COMP%]   input[type=file][_ngcontent-%COMP%] {\n  display: none;\n}\n.container[_ngcontent-%COMP%]   .file-container[_ngcontent-%COMP%]   .file-upload[_ngcontent-%COMP%] {\n  font-family: \"Montserrat\", sans-serif;\n  color: #000;\n  font-size: 1.6em;\n  border: 1px solid #ccc;\n  display: inline-block;\n  padding: 6px 12px;\n  background: #fff;\n  padding: 30px;\n  cursor: pointer;\n}\n.no-pictures[_ngcontent-%COMP%] {\n  font-family: \"Montserrat\", sans-serif;\n  font-size: 1.5em;\n  color: #ff7575;\n  cursor: pointer;\n  margin: 15px;\n  -webkit-text-decoration-line: underline;\n          text-decoration-line: underline;\n}\n.loader[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  padding: 12% 0 0 0;\n  box-sizing: border-box;\n  background: rgba(0, 0, 0, 0.541);\n  font-family: \"Montserrat\", sans-serif;\n  font-size: 1.5em;\n  color: #fff;\n  text-align: center;\n}\n.sk-folding-cube[_ngcontent-%COMP%] {\n  margin: 20px auto;\n  width: 60px;\n  height: 60px;\n  position: relative;\n  transform: rotateZ(45deg);\n}\n.sk-folding-cube[_ngcontent-%COMP%]   .sk-cube[_ngcontent-%COMP%] {\n  float: left;\n  width: 50%;\n  height: 50%;\n  position: relative;\n  transform: scale(1.1);\n}\n.sk-folding-cube[_ngcontent-%COMP%]   .sk-cube[_ngcontent-%COMP%]:before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: #7affc1;\n  animation: sk-foldCubeAngle 2.4s infinite linear both;\n  transform-origin: 100% 100%;\n}\n.sk-folding-cube[_ngcontent-%COMP%]   .sk-cube2[_ngcontent-%COMP%] {\n  transform: scale(1.1) rotateZ(90deg);\n}\n.sk-folding-cube[_ngcontent-%COMP%]   .sk-cube3[_ngcontent-%COMP%] {\n  transform: scale(1.1) rotateZ(180deg);\n}\n.sk-folding-cube[_ngcontent-%COMP%]   .sk-cube4[_ngcontent-%COMP%] {\n  transform: scale(1.1) rotateZ(270deg);\n}\n.sk-folding-cube[_ngcontent-%COMP%]   .sk-cube2[_ngcontent-%COMP%]:before {\n  animation-delay: 0.3s;\n}\n.sk-folding-cube[_ngcontent-%COMP%]   .sk-cube3[_ngcontent-%COMP%]:before {\n  animation-delay: 0.6s;\n}\n.sk-folding-cube[_ngcontent-%COMP%]   .sk-cube4[_ngcontent-%COMP%]:before {\n  animation-delay: 0.9s;\n}\n@keyframes sk-foldCubeAngle {\n  0%, 10% {\n    transform: perspective(140px) rotateX(-180deg);\n    opacity: 0;\n  }\n  25%, 75% {\n    transform: perspective(140px) rotateX(0deg);\n    opacity: 1;\n  }\n  90%, 100% {\n    transform: perspective(140px) rotateY(180deg);\n    opacity: 0;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2l0ZXMvcGljdHVyZXMvcGljdHVyZXMuY29tcG9uZW50LnNjc3MiLCJzcmMvdmFyaWFibGVzL192YXJpYWJsZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGdDQ0dXO0FESmI7QUFHRTtFQUNFLGFBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0FBREo7QUFHSTtFQUNFLGFBQUE7QUFETjtBQUlJO0VDUEYscUNBWks7RUFhTCxXQVJXO0VBU1gsZ0JBQUE7RUFDQSxzQkFBQTtFQUNBLHFCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0FETUY7QUFEQTtFQUNFLHFDQzFCSztFRDJCTCxnQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLHVDQUFBO1VBQUEsK0JBQUE7QUFJRjtBQURBO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQ0MvQlc7RURnQ1gscUNDekNLO0VEMENMLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FBSUY7QUFEQTtFQUNFLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUVBLHlCQUFBO0FBSUY7QUFEQTtFQUNFLFdBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBR0EscUJBQUE7QUFJRjtBQUZBO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBRUEscURBQUE7RUFHQSwyQkFBQTtBQUtGO0FBSEE7RUFFRSxvQ0FBQTtBQU1GO0FBSkE7RUFFRSxxQ0FBQTtBQU9GO0FBTEE7RUFFRSxxQ0FBQTtBQVFGO0FBTkE7RUFFRSxxQkFBQTtBQVNGO0FBUEE7RUFFRSxxQkFBQTtBQVVGO0FBUkE7RUFFRSxxQkFBQTtBQVdGO0FBWUE7RUFDRTtJQUdFLDhDQUFBO0lBQ0EsVUFBQTtFQU9GO0VBTEE7SUFHRSwyQ0FBQTtJQUNBLFVBQUE7RUFNRjtFQUpBO0lBR0UsNkNBQUE7SUFDQSxVQUFBO0VBS0Y7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3NpdGVzL3BpY3R1cmVzL3BpY3R1cmVzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uLy4uLy4uL3ZhcmlhYmxlcy92YXJpYWJsZVwiO1xyXG5cclxuLmNvbnRhaW5lciB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBiYWNrZ3JvdW5kOiAkYmctb3ZlcmxheTtcclxuXHJcbiAgLmZpbGUtY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWZsb3c6IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGhlaWdodDogMTAwJTtcclxuXHJcbiAgICBpbnB1dFt0eXBlPVwiZmlsZVwiXSB7XHJcbiAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcblxyXG4gICAgLmZpbGUtdXBsb2FkIHtcclxuICAgICAgQGluY2x1ZGUgZmlsZUlucHV0KCk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4ubm8tcGljdHVyZXMge1xyXG4gIGZvbnQtZmFtaWx5OiAkZm9udDtcclxuICBmb250LXNpemU6IDEuNWVtO1xyXG4gIGNvbG9yOiByZ2IoMjU1LCAxMTcsIDExNyk7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIG1hcmdpbjogMTVweDtcclxuICB0ZXh0LWRlY29yYXRpb24tbGluZTogdW5kZXJsaW5lO1xyXG59XHJcblxyXG4ubG9hZGVyIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHBhZGRpbmc6IDEyJSAwIDAgMDtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIGJhY2tncm91bmQ6ICRiZy1vdmVybGF5O1xyXG4gIGZvbnQtZmFtaWx5OiAkZm9udDtcclxuICBmb250LXNpemU6IDEuNWVtO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLnNrLWZvbGRpbmctY3ViZSB7XHJcbiAgbWFyZ2luOiAyMHB4IGF1dG87XHJcbiAgd2lkdGg6IDYwcHg7XHJcbiAgaGVpZ2h0OiA2MHB4O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWig0NWRlZyk7XHJcbiAgdHJhbnNmb3JtOiByb3RhdGVaKDQ1ZGVnKTtcclxufVxyXG5cclxuLnNrLWZvbGRpbmctY3ViZSAuc2stY3ViZSB7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbiAgd2lkdGg6IDUwJTtcclxuICBoZWlnaHQ6IDUwJTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEuMSk7XHJcbiAgLW1zLXRyYW5zZm9ybTogc2NhbGUoMS4xKTtcclxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XHJcbn1cclxuLnNrLWZvbGRpbmctY3ViZSAuc2stY3ViZTpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwiXCI7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTIyLCAyNTUsIDE5Myk7XHJcbiAgLXdlYmtpdC1hbmltYXRpb246IHNrLWZvbGRDdWJlQW5nbGUgMi40cyBpbmZpbml0ZSBsaW5lYXIgYm90aDtcclxuICBhbmltYXRpb246IHNrLWZvbGRDdWJlQW5nbGUgMi40cyBpbmZpbml0ZSBsaW5lYXIgYm90aDtcclxuICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IDEwMCUgMTAwJTtcclxuICAtbXMtdHJhbnNmb3JtLW9yaWdpbjogMTAwJSAxMDAlO1xyXG4gIHRyYW5zZm9ybS1vcmlnaW46IDEwMCUgMTAwJTtcclxufVxyXG4uc2stZm9sZGluZy1jdWJlIC5zay1jdWJlMiB7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEuMSkgcm90YXRlWig5MGRlZyk7XHJcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpIHJvdGF0ZVooOTBkZWcpO1xyXG59XHJcbi5zay1mb2xkaW5nLWN1YmUgLnNrLWN1YmUzIHtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMS4xKSByb3RhdGVaKDE4MGRlZyk7XHJcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpIHJvdGF0ZVooMTgwZGVnKTtcclxufVxyXG4uc2stZm9sZGluZy1jdWJlIC5zay1jdWJlNCB7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEuMSkgcm90YXRlWigyNzBkZWcpO1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xKSByb3RhdGVaKDI3MGRlZyk7XHJcbn1cclxuLnNrLWZvbGRpbmctY3ViZSAuc2stY3ViZTI6YmVmb3JlIHtcclxuICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogMC4zcztcclxuICBhbmltYXRpb24tZGVsYXk6IDAuM3M7XHJcbn1cclxuLnNrLWZvbGRpbmctY3ViZSAuc2stY3ViZTM6YmVmb3JlIHtcclxuICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogMC42cztcclxuICBhbmltYXRpb24tZGVsYXk6IDAuNnM7XHJcbn1cclxuLnNrLWZvbGRpbmctY3ViZSAuc2stY3ViZTQ6YmVmb3JlIHtcclxuICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogMC45cztcclxuICBhbmltYXRpb24tZGVsYXk6IDAuOXM7XHJcbn1cclxuQC13ZWJraXQta2V5ZnJhbWVzIHNrLWZvbGRDdWJlQW5nbGUge1xyXG4gIDAlLFxyXG4gIDEwJSB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcGVyc3BlY3RpdmUoMTQwcHgpIHJvdGF0ZVgoLTE4MGRlZyk7XHJcbiAgICB0cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDE0MHB4KSByb3RhdGVYKC0xODBkZWcpO1xyXG4gICAgb3BhY2l0eTogMDtcclxuICB9XHJcbiAgMjUlLFxyXG4gIDc1JSB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcGVyc3BlY3RpdmUoMTQwcHgpIHJvdGF0ZVgoMGRlZyk7XHJcbiAgICB0cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDE0MHB4KSByb3RhdGVYKDBkZWcpO1xyXG4gICAgb3BhY2l0eTogMTtcclxuICB9XHJcbiAgOTAlLFxyXG4gIDEwMCUge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDE0MHB4KSByb3RhdGVZKDE4MGRlZyk7XHJcbiAgICB0cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDE0MHB4KSByb3RhdGVZKDE4MGRlZyk7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gIH1cclxufVxyXG5cclxuQGtleWZyYW1lcyBzay1mb2xkQ3ViZUFuZ2xlIHtcclxuICAwJSxcclxuICAxMCUge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDE0MHB4KSByb3RhdGVYKC0xODBkZWcpO1xyXG4gICAgdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSgxNDBweCkgcm90YXRlWCgtMTgwZGVnKTtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgfVxyXG4gIDI1JSxcclxuICA3NSUge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDE0MHB4KSByb3RhdGVYKDBkZWcpO1xyXG4gICAgdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSgxNDBweCkgcm90YXRlWCgwZGVnKTtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgfVxyXG4gIDkwJSxcclxuICAxMDAlIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSgxNDBweCkgcm90YXRlWSgxODBkZWcpO1xyXG4gICAgdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSgxNDBweCkgcm90YXRlWSgxODBkZWcpO1xyXG4gICAgb3BhY2l0eTogMDtcclxuICB9XHJcbn1cclxuIiwiJGZvbnQ6IFwiTW9udHNlcnJhdFwiLCBzYW5zLXNlcmlmO1xyXG4kZm9udC1zbWFsbDogMWVtO1xyXG4kZm9udC1tZWRpdW06IDEuNWVtO1xyXG4kZm9udC1sYXJnZTogM2VtO1xyXG5cclxuJGZvbnQtY29sb3I6ICMwMDA7XHJcbiRmb250LWdyZXk6IHJnYigxMzEsIDEzMSwgMTMxKTtcclxuXHJcbiRiZy1pbWFnZTogdXJsKFwiL2Fzc2V0cy9iYWNrZ3JvdW5kcy9hbmRyZXctbmVlbC5qcGdcIik7XHJcbiRiZy1vdmVybGF5OiByZ2JhKDAsIDAsIDAsIDAuNTQxKTtcclxuXHJcbkBtaXhpbiBmaWxlSW5wdXQoKSB7XHJcbiAgZm9udC1mYW1pbHk6ICRmb250O1xyXG4gIGNvbG9yOiAkZm9udC1jb2xvcjtcclxuICBmb250LXNpemU6IDEuNmVtO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHBhZGRpbmc6IDZweCAxMnB4O1xyXG4gIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgcGFkZGluZzogMzBweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuIl19 */"] });
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_3__["Select"])(_store_app_state__WEBPACK_IMPORTED_MODULE_1__["AppState"].excelData)
], PicturesComponent.prototype, "excelData$", void 0);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](PicturesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"],
        args: [{
                templateUrl: './pictures.component.html',
                styleUrls: ['./pictures.component.scss'],
            }]
    }], function () { return [{ type: _service_image_compress_service__WEBPACK_IMPORTED_MODULE_6__["ImageCompressService"] }, { type: _ngxs_store__WEBPACK_IMPORTED_MODULE_3__["Store"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] }]; }, { excelData$: [] }); })();


/***/ }),

/***/ "./src/app/sites/settings/settings.component.ts":
/*!******************************************************!*\
  !*** ./src/app/sites/settings/settings.component.ts ***!
  \******************************************************/
/*! exports provided: SettingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsComponent", function() { return SettingsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _store_app_action__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../store/app.action */ "./src/app/store/app.action.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _store_app_state__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../store/app.state */ "./src/app/store/app.state.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngxs/store */ "./node_modules/@ngxs/store/__ivy_ngcc__/fesm2015/ngxs-store.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _service_obj_to_xlsx_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../../service/obj-to-xlsx.service */ "./src/app/service/obj-to-xlsx.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");












function SettingsComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "\u25BC");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function SettingsComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "\u25B2");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function SettingsComponent_div_11_li_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](item_r13);
} }
function SettingsComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "Picture Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, SettingsComponent_div_11_li_5_Template, 3, 1, "li", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r2.missingPictureReferencesData);
} }
function SettingsComponent_div_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "\u25BC");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function SettingsComponent_div_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "\u25B2");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function SettingsComponent_div_18_li_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](item_r15.Titel);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](item_r15.Name);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](item_r15.DateinameAbb);
} }
function SettingsComponent_div_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "Titel:");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "Name:");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, "File Name:");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](9, SettingsComponent_div_18_li_9_Template, 7, 3, "li", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r5.missingPicturesData);
} }
function SettingsComponent_li_22_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "li", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, " Filter: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "mark");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, " all rows with ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "mark");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, " set to ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "mark");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function SettingsComponent_li_22_Template_div_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r19); const i_r17 = ctx.index; const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r18.deleteFilter(i_r17); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](item_r16.type);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](item_r16.column);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](item_r16.value);
} }
function SettingsComponent_option_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const o_r20 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", o_r20.name, " ");
} }
function SettingsComponent_option_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const o_r21 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", o_r21.name, " ");
} }
function SettingsComponent_div_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "set to");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function SettingsComponent_select_33_option_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const o_r23 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", o_r23, " ");
} }
function SettingsComponent_select_33_Template(rf, ctx) { if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "select", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function SettingsComponent_select_33_Template_select_ngModelChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r25); const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r24.selectedValue = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, SettingsComponent_select_33_option_1_Template, 2, 1, "option", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx_r10.selectedValue);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r10.valueOptions);
} }
function SettingsComponent_div_39_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](4, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](5, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, " loading & compressing images...\n");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
class SettingsComponent {
    constructor(router, store, xlsxService) {
        this.router = router;
        this.store = store;
        this.xlsxService = xlsxService;
        this.excelData = undefined;
        this.filterdExcelData = [];
        this.pictures = new Map();
        this.missingPictureReferences = 0;
        this.missingPictureReferencesData = [];
        this.missingPictures = 0;
        this.missingPicturesData = [];
        this.warningsOpen = [];
        this.filters = [];
        this.typeOptions = [
            { name: 'include', value: 'include' },
            { name: 'exclude', value: 'exclude' },
        ];
        this.selectedType = 'include';
        this.columnOptions = [];
        this.selectedColumn = '';
        this.valueOptions = [];
        this.displaySelectValues = false;
        this.loader = false;
    }
    ngOnInit() {
        this.excelData$.subscribe((data) => {
            this.excelData = data;
            if (_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].requireExcel && this.excelData[0] == undefined) {
                this.router.navigate(['']);
            }
            if (this.excelData[0] != undefined && this.pictures.size > 0) {
                this.checkWarnings();
                this.getColumnOptions();
            }
        });
        this.pictures$.subscribe((data) => {
            this.pictures = data;
            if (this.excelData[0] != undefined && this.pictures.size > 0) {
                this.checkWarnings();
                this.getColumnOptions();
            }
        });
        this.filters$.subscribe((data) => {
            this.filters = data;
        });
    }
    generatePdf() {
        this.loader = true;
        this.filters = this.sortFilters(this.filters);
        this.applyFilters();
        if (this.filterdExcelData.length > 0) {
            this.router.navigate(['pdf']);
        }
        else {
            alert('There are no rows that match the filters');
        }
        this.loader = false;
    }
    back() {
        this.router.navigate(['pictures']);
    }
    applyFilters() {
        if (this.filters.length > 0) {
            for (let filter of this.filters) {
                this.useFilter(filter);
            }
        }
        else {
            this.filterdExcelData = this.excelData;
        }
        console.log(this.filterdExcelData);
        this.store.dispatch(new _store_app_action__WEBPACK_IMPORTED_MODULE_1__["SetFilterdExcelData"](this.filterdExcelData));
    }
    useFilter(filter) {
        if (filter.type == 'include') {
            for (let i = 0; i < this.excelData.length; i++) {
                if (this.excelData[i][filter.column] == filter.value) {
                    this.filterdExcelData.push(this.excelData[i]);
                }
            }
        }
        else {
            for (let i = 0; i < this.filterdExcelData.length; i++) {
                if (this.filterdExcelData[i][filter.column] == filter.value) {
                    this.filterdExcelData.splice(i, 1);
                }
            }
        }
    }
    sortFilters(filters) {
        let tempArr = [];
        for (let f of filters) {
            if (f.type == 'include') {
                tempArr.unshift(f);
            }
            else {
                tempArr.push(f);
            }
        }
        return tempArr;
    }
    deleteFilter(index) {
        console.log(index);
        this.filters.splice(index, 1);
        this.store.dispatch(new _store_app_action__WEBPACK_IMPORTED_MODULE_1__["SetFilters"](this.filters));
    }
    getColumnOptions() {
        this.columnOptions = [];
        let options = Object.getOwnPropertyNames(this.excelData[0]);
        options.shift();
        for (let i = 0; i < options.length; i++) {
            this.columnOptions.push({
                name: options[i],
                value: options[i],
            });
        }
    }
    getValueOptions() {
        this.valueOptions = [];
        for (let row of this.excelData) {
            if (!this.valueOptions.includes(row[this.selectedColumn])) {
                this.valueOptions.push(row[this.selectedColumn]);
            }
        }
        this.displaySelectValues = true;
    }
    checkWarnings() {
        this.checkPicRef();
        this.checkPics();
    }
    checkPics() {
        for (let row of this.excelData) {
            if (row.DateinameAbb != 'nv') {
                if (!this.pictures.has(row.DateinameAbb)) {
                    this.missingPictures++;
                    this.missingPicturesData.push(row);
                }
            }
        }
    }
    checkPicRef() {
        for (let [key, value] of this.pictures) {
            if (this.excelData.find((data) => data.DateinameAbb == key) == undefined) {
                if (key != 'NOPICTURE') {
                    this.missingPictureReferences++;
                    this.missingPictureReferencesData.push(key);
                }
            }
        }
    }
    setFilter() {
        if (this.selectedColumn != '') {
            let filter = {
                type: this.selectedType,
                column: this.selectedColumn,
                value: this.selectedValue,
            };
            this.filters.push(filter);
            this.selectedValue = '';
            this.store.dispatch(new _store_app_action__WEBPACK_IMPORTED_MODULE_1__["SetFilters"](this.filters));
        }
        else {
            alert('Please select a column');
        }
    }
    downloadMissingRefWarnings() {
        let tempArr = [];
        for (let pic of this.missingPictureReferencesData) {
            tempArr.push({
                UnreferencedPicture: pic,
            });
        }
        this.xlsxService.downloadXlsx(tempArr, 'missingReferences');
    }
    downloadMissingPicWarnings() {
        this.xlsxService.downloadXlsx(this.missingPicturesData, 'missingPictures');
    }
}
SettingsComponent.ɵfac = function SettingsComponent_Factory(t) { return new (t || SettingsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ngxs_store__WEBPACK_IMPORTED_MODULE_5__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_service_obj_to_xlsx_service__WEBPACK_IMPORTED_MODULE_7__["ObjToXlsxService"])); };
SettingsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: SettingsComponent, selectors: [["ng-component"]], decls: 40, vars: 16, consts: [[1, "container"], [1, "back-button-container", 3, "click"], [1, "warnings-container"], [1, "warning", 3, "click"], [1, "download", 3, "click"], ["class", "arrow", 4, "ngIf"], ["class", "detailed-warning", 4, "ngIf"], [1, "filter-container"], ["class", "filter", 4, "ngFor", "ngForOf"], [1, "add-filter"], [1, "add-filter-container"], ["name", "selectType", 3, "ngModel", "ngModelChange"], [4, "ngFor", "ngForOf"], ["name", "selectColumn", 3, "ngModel", "change", "ngModelChange"], [4, "ngIf"], ["name", "selectValue", 3, "ngModel", "ngModelChange", 4, "ngIf"], [1, "set-filter", 3, "click"], [1, "file-container"], [3, "click"], ["class", "loader", 4, "ngIf"], [1, "arrow"], [1, "detailed-warning"], [1, "file-name"], [1, "titel"], [1, "name>"], [1, "filter"], [1, "current-filter-container"], [1, "delete-filter", 3, "click"], ["name", "selectValue", 3, "ngModel", "ngModelChange"], [1, "loader"], [1, "sk-folding-cube"], [1, "sk-cube1", "sk-cube"], [1, "sk-cube2", "sk-cube"], [1, "sk-cube4", "sk-cube"], [1, "sk-cube3", "sk-cube"]], template: function SettingsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function SettingsComponent_Template_div_click_1_listener() { return ctx.back(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "\u2190");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, " Warnings: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function SettingsComponent_Template_div_click_5_listener() { return (ctx.warningsOpen[0] = !ctx.warningsOpen[0]); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function SettingsComponent_Template_div_click_7_listener() { return ctx.downloadMissingRefWarnings(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, " \u2B73 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](9, SettingsComponent_div_9_Template, 2, 0, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](10, SettingsComponent_div_10_Template, 2, 0, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](11, SettingsComponent_div_11_Template, 6, 1, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function SettingsComponent_Template_div_click_12_listener() { return (ctx.warningsOpen[1] = !ctx.warningsOpen[1]); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function SettingsComponent_Template_div_click_14_listener() { return ctx.downloadMissingPicWarnings(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15, " \u2B73 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](16, SettingsComponent_div_16_Template, 2, 0, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](17, SettingsComponent_div_17_Template, 2, 0, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](18, SettingsComponent_div_18_Template, 10, 1, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](20, " Filter: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](22, SettingsComponent_li_22_Template, 13, 3, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](25, " New Filter: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](26, "select", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function SettingsComponent_Template_select_ngModelChange_26_listener($event) { return ctx.selectedType = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](27, SettingsComponent_option_27_Template, 2, 1, "option", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](28, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](29, "all rows with");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](30, "select", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("change", function SettingsComponent_Template_select_change_30_listener() { return ctx.getValueOptions(); })("ngModelChange", function SettingsComponent_Template_select_ngModelChange_30_listener($event) { return ctx.selectedColumn = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](31, SettingsComponent_option_31_Template, 2, 1, "option", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](32, SettingsComponent_div_32_Template, 2, 0, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](33, SettingsComponent_select_33_Template, 2, 2, "select", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](34, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function SettingsComponent_Template_div_click_34_listener() { return ctx.setFilter(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](35, " Set Filter \u2794 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](36, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](37, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function SettingsComponent_Template_button_click_37_listener() { return ctx.generatePdf(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](38, "Generate Pdf");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](39, SettingsComponent_div_39_Template, 7, 0, "div", 19);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" There are ", ctx.missingPictureReferences, " pictures that aren't referenced in the excel database ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.warningsOpen[0]);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.warningsOpen[0]);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.warningsOpen[0]);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" There are ", ctx.missingPictures, " pictures missing ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.warningsOpen[1]);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.warningsOpen[1]);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.warningsOpen[1]);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.filters);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.selectedType);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.typeOptions);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.selectedColumn);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.columnOptions);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.displaySelectValues);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.displaySelectValues);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.loader);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ɵangular_packages_forms_forms_x"]], styles: [".container[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 100%;\n  min-height: 100%;\n  background: rgba(0, 0, 0, 0.541);\n}\n.container[_ngcontent-%COMP%]   .file-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-flow: column;\n  align-items: center;\n  justify-content: center;\n}\n.container[_ngcontent-%COMP%]   .file-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  font-family: \"Montserrat\", sans-serif;\n  color: #000;\n  font-size: 1.6em;\n  border: 1px solid #ccc;\n  display: inline-block;\n  padding: 6px 12px;\n  background: #fff;\n  padding: 30px;\n  cursor: pointer;\n}\n.container[_ngcontent-%COMP%]   .warnings-container[_ngcontent-%COMP%] {\n  font-family: \"Montserrat\", sans-serif;\n  color: #fff;\n  font-size: 1.3em;\n  display: flex;\n  flex-flow: column;\n  align-items: left;\n  justify-content: center;\n  margin: 200px 20% 0 20%;\n  width: 60%;\n  background: rgba(0, 0, 0, 0.468);\n  padding: 20px;\n}\n.container[_ngcontent-%COMP%]   .warnings-container[_ngcontent-%COMP%]   .warning[_ngcontent-%COMP%] {\n  width: 100%;\n  margin: 10px 0;\n  padding: 10px 0;\n  background: black;\n  border-top: 1px solid #fff;\n  border-bottom: 1px solid #fff;\n  display: flex;\n  flex-flow: row;\n  position: relative;\n  cursor: pointer;\n}\n.container[_ngcontent-%COMP%]   .warnings-container[_ngcontent-%COMP%]   .warning[_ngcontent-%COMP%]   .download[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 40px;\n  bottom: 3px;\n  font-size: 1.4em;\n}\n.container[_ngcontent-%COMP%]   .warnings-container[_ngcontent-%COMP%]   .warning[_ngcontent-%COMP%]   .download[_ngcontent-%COMP%]:hover {\n  color: #ffa550;\n}\n.container[_ngcontent-%COMP%]   .warnings-container[_ngcontent-%COMP%]   .warning[_ngcontent-%COMP%]   .arrow[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 10px;\n}\n.container[_ngcontent-%COMP%]   .warnings-container[_ngcontent-%COMP%]   .detailed-warning[_ngcontent-%COMP%] {\n  max-height: 200px;\n  overflow-y: scroll;\n}\n.container[_ngcontent-%COMP%]   .warnings-container[_ngcontent-%COMP%]   .detailed-warning[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  list-style: none;\n  font-size: 0.9em;\n  border-top: 1px solid #fff;\n  border-bottom: 1px solid #fff;\n  padding: 5px;\n  display: flex;\n  flex-flow: row;\n}\n.container[_ngcontent-%COMP%]   .warnings-container[_ngcontent-%COMP%]   .detailed-warning[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  text-align: center;\n  border-right: 1px solid #fff;\n  border-left: 1px solid #fff;\n  padding: 5px;\n  flex-grow: 1;\n  flex-basis: 0;\n}\n.container[_ngcontent-%COMP%]   .warnings-container[_ngcontent-%COMP%]   .detailed-warning[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .file-name[_ngcontent-%COMP%] {\n  color: #ff6b6b;\n}\n.container[_ngcontent-%COMP%]   .filter-container[_ngcontent-%COMP%] {\n  border-top: 2px dashed #fff;\n  font-family: \"Montserrat\", sans-serif;\n  color: #fff;\n  font-size: 1.3em;\n  display: flex;\n  flex-flow: column;\n  align-items: left;\n  justify-content: center;\n  margin: 0px 20% 40px 20%;\n  width: 60%;\n  background: rgba(0, 0, 0, 0.468);\n  padding: 20px;\n}\n.container[_ngcontent-%COMP%]   .filter-container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  list-style: none;\n}\n.container[_ngcontent-%COMP%]   .filter-container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  list-style: none;\n  font-size: 0.9em;\n  padding: 10px;\n  display: flex;\n  flex-flow: column;\n  align-items: left;\n  position: relative;\n}\n.container[_ngcontent-%COMP%]   .filter-container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.filter[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #fff;\n}\n.container[_ngcontent-%COMP%]   .filter-container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.filter[_ngcontent-%COMP%]   .current-filter-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-flow: row;\n}\n.container[_ngcontent-%COMP%]   .filter-container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.filter[_ngcontent-%COMP%]   .current-filter-container[_ngcontent-%COMP%]   mark[_ngcontent-%COMP%] {\n  background: none;\n  color: #fbff00;\n  margin: 0 7px;\n}\n.container[_ngcontent-%COMP%]   .filter-container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.filter[_ngcontent-%COMP%]   .current-filter-container[_ngcontent-%COMP%]   .delete-filter[_ngcontent-%COMP%] {\n  color: red;\n  position: absolute;\n  right: 10px;\n  font-size: 1.5em;\n  cursor: pointer;\n  z-index: 4;\n}\n.container[_ngcontent-%COMP%]   .filter-container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.add-filter[_ngcontent-%COMP%] {\n  background-color: rgba(48, 255, 193, 0.445);\n}\n.container[_ngcontent-%COMP%]   .filter-container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.add-filter[_ngcontent-%COMP%]   .add-filter-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-flow: row;\n}\n.container[_ngcontent-%COMP%]   .filter-container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.add-filter[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  max-width: 170px;\n  margin: 0 10px;\n}\n.container[_ngcontent-%COMP%]   .filter-container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.add-filter[_ngcontent-%COMP%]   .set-filter[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 10px;\n  border-left: 1px solid #fff;\n  padding: 0 10px;\n  cursor: pointer;\n}\n.loader[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  padding: 12% 0 0 0;\n  box-sizing: border-box;\n  background: rgba(0, 0, 0, 0.541);\n  font-family: \"Montserrat\", sans-serif;\n  font-size: 1.5em;\n  color: #fff;\n  text-align: center;\n}\n.sk-folding-cube[_ngcontent-%COMP%] {\n  margin: 20px auto;\n  width: 60px;\n  height: 60px;\n  position: relative;\n  transform: rotateZ(45deg);\n}\n.sk-folding-cube[_ngcontent-%COMP%]   .sk-cube[_ngcontent-%COMP%] {\n  float: left;\n  width: 50%;\n  height: 50%;\n  position: relative;\n  transform: scale(1.1);\n}\n.sk-folding-cube[_ngcontent-%COMP%]   .sk-cube[_ngcontent-%COMP%]:before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: #7affc1;\n  animation: sk-foldCubeAngle 2.4s infinite linear both;\n  transform-origin: 100% 100%;\n}\n.sk-folding-cube[_ngcontent-%COMP%]   .sk-cube2[_ngcontent-%COMP%] {\n  transform: scale(1.1) rotateZ(90deg);\n}\n.sk-folding-cube[_ngcontent-%COMP%]   .sk-cube3[_ngcontent-%COMP%] {\n  transform: scale(1.1) rotateZ(180deg);\n}\n.sk-folding-cube[_ngcontent-%COMP%]   .sk-cube4[_ngcontent-%COMP%] {\n  transform: scale(1.1) rotateZ(270deg);\n}\n.sk-folding-cube[_ngcontent-%COMP%]   .sk-cube2[_ngcontent-%COMP%]:before {\n  animation-delay: 0.3s;\n}\n.sk-folding-cube[_ngcontent-%COMP%]   .sk-cube3[_ngcontent-%COMP%]:before {\n  animation-delay: 0.6s;\n}\n.sk-folding-cube[_ngcontent-%COMP%]   .sk-cube4[_ngcontent-%COMP%]:before {\n  animation-delay: 0.9s;\n}\n@keyframes sk-foldCubeAngle {\n  0%, 10% {\n    transform: perspective(140px) rotateX(-180deg);\n    opacity: 0;\n  }\n  25%, 75% {\n    transform: perspective(140px) rotateX(0deg);\n    opacity: 1;\n  }\n  90%, 100% {\n    transform: perspective(140px) rotateY(180deg);\n    opacity: 0;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2l0ZXMvc2V0dGluZ3Mvc2V0dGluZ3MuY29tcG9uZW50LnNjc3MiLCJzcmMvdmFyaWFibGVzL192YXJpYWJsZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQ0NHVztBREpiO0FBR0U7RUFDRSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FBREo7QUFFSTtFQ0RGLHFDQVpLO0VBYUwsV0FSVztFQVNYLGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSxxQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtBREVGO0FBSkU7RUFDRSxxQ0NuQkc7RURvQkgsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSx1QkFBQTtFQUNBLHVCQUFBO0VBQ0EsVUFBQTtFQUNBLGdDQUFBO0VBQ0EsYUFBQTtBQU1KO0FBSkk7RUFDRSxXQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLDBCQUFBO0VBQ0EsNkJBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQU1OO0FBSk07RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7QUFNUjtBQUhNO0VBQ0UsY0FBQTtBQUtSO0FBRk07RUFDRSxrQkFBQTtFQUNBLFdBQUE7QUFJUjtBQUFJO0VBQ0UsaUJBQUE7RUFDQSxrQkFBQTtBQUVOO0FBRE07RUFDRSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsMEJBQUE7RUFDQSw2QkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtBQUdSO0FBRFE7RUFDRSxrQkFBQTtFQUNBLDRCQUFBO0VBQ0EsMkJBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7QUFHVjtBQUFRO0VBQ0UsY0FBQTtBQUVWO0FBSUU7RUFDRSwyQkFBQTtFQUNBLHFDQzFGRztFRDJGSCxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLHVCQUFBO0VBQ0Esd0JBQUE7RUFDQSxVQUFBO0VBQ0EsZ0NBQUE7RUFDQSxhQUFBO0FBRko7QUFJSTtFQUNFLGdCQUFBO0FBRk47QUFHTTtFQUNFLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQURSO0FBR1E7RUFDRSw2QkFBQTtBQURWO0FBRVU7RUFDRSxhQUFBO0VBQ0EsY0FBQTtBQUFaO0FBRVk7RUFDRSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0FBQWQ7QUFHWTtFQUNFLFVBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxVQUFBO0FBRGQ7QUFNUTtFQUNFLDJDQUFBO0FBSlY7QUFNVTtFQUNFLGFBQUE7RUFDQSxjQUFBO0FBSlo7QUFPVTtFQUNFLGdCQUFBO0VBQ0EsY0FBQTtBQUxaO0FBUVU7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSwyQkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0FBTlo7QUFjQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0NDL0pXO0VEZ0tYLHFDQ3pLSztFRDBLTCxnQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQVhGO0FBY0E7RUFDRSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFFQSx5QkFBQTtBQVhGO0FBY0E7RUFDRSxXQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUdBLHFCQUFBO0FBWEY7QUFhQTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUVBLHFEQUFBO0VBR0EsMkJBQUE7QUFWRjtBQVlBO0VBRUUsb0NBQUE7QUFURjtBQVdBO0VBRUUscUNBQUE7QUFSRjtBQVVBO0VBRUUscUNBQUE7QUFQRjtBQVNBO0VBRUUscUJBQUE7QUFORjtBQVFBO0VBRUUscUJBQUE7QUFMRjtBQU9BO0VBRUUscUJBQUE7QUFKRjtBQTJCQTtFQUNFO0lBR0UsOENBQUE7SUFDQSxVQUFBO0VBUkY7RUFVQTtJQUdFLDJDQUFBO0lBQ0EsVUFBQTtFQVRGO0VBV0E7SUFHRSw2Q0FBQTtJQUNBLFVBQUE7RUFWRjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvc2l0ZXMvc2V0dGluZ3Mvc2V0dGluZ3MuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vLi4vLi4vdmFyaWFibGVzL3ZhcmlhYmxlXCI7XHJcblxyXG4uY29udGFpbmVyIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWluLWhlaWdodDogMTAwJTtcclxuICBiYWNrZ3JvdW5kOiAkYmctb3ZlcmxheTtcclxuXHJcbiAgLmZpbGUtY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWZsb3c6IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGJ1dHRvbiB7XHJcbiAgICAgIEBpbmNsdWRlIGZpbGVJbnB1dCgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLndhcm5pbmdzLWNvbnRhaW5lciB7XHJcbiAgICBmb250LWZhbWlseTogJGZvbnQ7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGZvbnQtc2l6ZTogMS4zZW07XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1mbG93OiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogbGVmdDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgbWFyZ2luOiAyMDBweCAyMCUgMCAyMCU7XHJcbiAgICB3aWR0aDogNjAlO1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjQ2OCk7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG5cclxuICAgIC53YXJuaW5nIHtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIG1hcmdpbjogMTBweCAwO1xyXG4gICAgICBwYWRkaW5nOiAxMHB4IDA7XHJcbiAgICAgIGJhY2tncm91bmQ6IHJnYigwLCAwLCAwKTtcclxuICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNmZmY7XHJcbiAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZmZmO1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBmbGV4LWZsb3c6IHJvdztcclxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcblxyXG4gICAgICAuZG93bmxvYWQge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICByaWdodDogNDBweDtcclxuICAgICAgICBib3R0b206IDNweDtcclxuICAgICAgICBmb250LXNpemU6IDEuNGVtO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuZG93bmxvYWQ6aG92ZXIge1xyXG4gICAgICAgIGNvbG9yOiByZ2IoMjU1LCAxNjUsIDgwKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLmFycm93IHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgcmlnaHQ6IDEwcHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuZGV0YWlsZWQtd2FybmluZyB7XHJcbiAgICAgIG1heC1oZWlnaHQ6IDIwMHB4O1xyXG4gICAgICBvdmVyZmxvdy15OiBzY3JvbGw7XHJcbiAgICAgIGxpIHtcclxuICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMC45ZW07XHJcbiAgICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNmZmY7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmZmY7XHJcbiAgICAgICAgcGFkZGluZzogNXB4O1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1mbG93OiByb3c7XHJcblxyXG4gICAgICAgIGRpdiB7XHJcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZmZmO1xyXG4gICAgICAgICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjZmZmO1xyXG4gICAgICAgICAgcGFkZGluZzogNXB4O1xyXG4gICAgICAgICAgZmxleC1ncm93OiAxO1xyXG4gICAgICAgICAgZmxleC1iYXNpczogMDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5maWxlLW5hbWUge1xyXG4gICAgICAgICAgY29sb3I6IHJnYigyNTUsIDEwNywgMTA3KTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5maWx0ZXItY29udGFpbmVyIHtcclxuICAgIGJvcmRlci10b3A6IDJweCBkYXNoZWQgI2ZmZjtcclxuICAgIGZvbnQtZmFtaWx5OiAkZm9udDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgZm9udC1zaXplOiAxLjNlbTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWZsb3c6IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBsZWZ0O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBtYXJnaW46IDBweCAyMCUgNDBweCAyMCU7XHJcbiAgICB3aWR0aDogNjAlO1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjQ2OCk7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG5cclxuICAgIHVsIHtcclxuICAgICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgICAgbGkge1xyXG4gICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICAgICAgZm9udC1zaXplOiAwLjllbTtcclxuICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1mbG93OiBjb2x1bW47XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGxlZnQ7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuICAgICAgICAmLmZpbHRlciB7XHJcbiAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2ZmZjtcclxuICAgICAgICAgIC5jdXJyZW50LWZpbHRlci1jb250YWluZXIge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBmbGV4LWZsb3c6IHJvdztcclxuXHJcbiAgICAgICAgICAgIG1hcmsge1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgICAgICAgICAgICAgY29sb3I6IHJnYigyNTEsIDI1NSwgMCk7XHJcbiAgICAgICAgICAgICAgbWFyZ2luOiAwIDdweDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLmRlbGV0ZS1maWx0ZXIge1xyXG4gICAgICAgICAgICAgIGNvbG9yOiByZ2IoMjU1LCAwLCAwKTtcclxuICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgcmlnaHQ6IDEwcHg7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjVlbTtcclxuICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgICAgei1pbmRleDogNDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJi5hZGQtZmlsdGVyIHtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNDgsIDI1NSwgMTkzLCAwLjQ0NSk7XHJcblxyXG4gICAgICAgICAgLmFkZC1maWx0ZXItY29udGFpbmVyIHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgZmxleC1mbG93OiByb3c7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgc2VsZWN0IHtcclxuICAgICAgICAgICAgbWF4LXdpZHRoOiAxNzBweDtcclxuICAgICAgICAgICAgbWFyZ2luOiAwIDEwcHg7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLnNldC1maWx0ZXIge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIHJpZ2h0OiAxMHB4O1xyXG4gICAgICAgICAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkICNmZmY7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDAgMTBweDtcclxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLmxvYWRlciB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBwYWRkaW5nOiAxMiUgMCAwIDA7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBiYWNrZ3JvdW5kOiAkYmctb3ZlcmxheTtcclxuICBmb250LWZhbWlseTogJGZvbnQ7XHJcbiAgZm9udC1zaXplOiAxLjVlbTtcclxuICBjb2xvcjogI2ZmZjtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5zay1mb2xkaW5nLWN1YmUge1xyXG4gIG1hcmdpbjogMjBweCBhdXRvO1xyXG4gIHdpZHRoOiA2MHB4O1xyXG4gIGhlaWdodDogNjBweDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZVooNDVkZWcpO1xyXG4gIHRyYW5zZm9ybTogcm90YXRlWig0NWRlZyk7XHJcbn1cclxuXHJcbi5zay1mb2xkaW5nLWN1YmUgLnNrLWN1YmUge1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIHdpZHRoOiA1MCU7XHJcbiAgaGVpZ2h0OiA1MCU7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xyXG4gIC1tcy10cmFuc2Zvcm06IHNjYWxlKDEuMSk7XHJcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xyXG59XHJcbi5zay1mb2xkaW5nLWN1YmUgLnNrLWN1YmU6YmVmb3JlIHtcclxuICBjb250ZW50OiBcIlwiO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEyMiwgMjU1LCAxOTMpO1xyXG4gIC13ZWJraXQtYW5pbWF0aW9uOiBzay1mb2xkQ3ViZUFuZ2xlIDIuNHMgaW5maW5pdGUgbGluZWFyIGJvdGg7XHJcbiAgYW5pbWF0aW9uOiBzay1mb2xkQ3ViZUFuZ2xlIDIuNHMgaW5maW5pdGUgbGluZWFyIGJvdGg7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiAxMDAlIDEwMCU7XHJcbiAgLW1zLXRyYW5zZm9ybS1vcmlnaW46IDEwMCUgMTAwJTtcclxuICB0cmFuc2Zvcm0tb3JpZ2luOiAxMDAlIDEwMCU7XHJcbn1cclxuLnNrLWZvbGRpbmctY3ViZSAuc2stY3ViZTIge1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxLjEpIHJvdGF0ZVooOTBkZWcpO1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xKSByb3RhdGVaKDkwZGVnKTtcclxufVxyXG4uc2stZm9sZGluZy1jdWJlIC5zay1jdWJlMyB7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEuMSkgcm90YXRlWigxODBkZWcpO1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xKSByb3RhdGVaKDE4MGRlZyk7XHJcbn1cclxuLnNrLWZvbGRpbmctY3ViZSAuc2stY3ViZTQge1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxLjEpIHJvdGF0ZVooMjcwZGVnKTtcclxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMSkgcm90YXRlWigyNzBkZWcpO1xyXG59XHJcbi5zay1mb2xkaW5nLWN1YmUgLnNrLWN1YmUyOmJlZm9yZSB7XHJcbiAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDAuM3M7XHJcbiAgYW5pbWF0aW9uLWRlbGF5OiAwLjNzO1xyXG59XHJcbi5zay1mb2xkaW5nLWN1YmUgLnNrLWN1YmUzOmJlZm9yZSB7XHJcbiAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDAuNnM7XHJcbiAgYW5pbWF0aW9uLWRlbGF5OiAwLjZzO1xyXG59XHJcbi5zay1mb2xkaW5nLWN1YmUgLnNrLWN1YmU0OmJlZm9yZSB7XHJcbiAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDAuOXM7XHJcbiAgYW5pbWF0aW9uLWRlbGF5OiAwLjlzO1xyXG59XHJcbkAtd2Via2l0LWtleWZyYW1lcyBzay1mb2xkQ3ViZUFuZ2xlIHtcclxuICAwJSxcclxuICAxMCUge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDE0MHB4KSByb3RhdGVYKC0xODBkZWcpO1xyXG4gICAgdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSgxNDBweCkgcm90YXRlWCgtMTgwZGVnKTtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgfVxyXG4gIDI1JSxcclxuICA3NSUge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDE0MHB4KSByb3RhdGVYKDBkZWcpO1xyXG4gICAgdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSgxNDBweCkgcm90YXRlWCgwZGVnKTtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgfVxyXG4gIDkwJSxcclxuICAxMDAlIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSgxNDBweCkgcm90YXRlWSgxODBkZWcpO1xyXG4gICAgdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSgxNDBweCkgcm90YXRlWSgxODBkZWcpO1xyXG4gICAgb3BhY2l0eTogMDtcclxuICB9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgc2stZm9sZEN1YmVBbmdsZSB7XHJcbiAgMCUsXHJcbiAgMTAlIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSgxNDBweCkgcm90YXRlWCgtMTgwZGVnKTtcclxuICAgIHRyYW5zZm9ybTogcGVyc3BlY3RpdmUoMTQwcHgpIHJvdGF0ZVgoLTE4MGRlZyk7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gIH1cclxuICAyNSUsXHJcbiAgNzUlIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSgxNDBweCkgcm90YXRlWCgwZGVnKTtcclxuICAgIHRyYW5zZm9ybTogcGVyc3BlY3RpdmUoMTQwcHgpIHJvdGF0ZVgoMGRlZyk7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gIH1cclxuICA5MCUsXHJcbiAgMTAwJSB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcGVyc3BlY3RpdmUoMTQwcHgpIHJvdGF0ZVkoMTgwZGVnKTtcclxuICAgIHRyYW5zZm9ybTogcGVyc3BlY3RpdmUoMTQwcHgpIHJvdGF0ZVkoMTgwZGVnKTtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgfVxyXG59XHJcbiIsIiRmb250OiBcIk1vbnRzZXJyYXRcIiwgc2Fucy1zZXJpZjtcclxuJGZvbnQtc21hbGw6IDFlbTtcclxuJGZvbnQtbWVkaXVtOiAxLjVlbTtcclxuJGZvbnQtbGFyZ2U6IDNlbTtcclxuXHJcbiRmb250LWNvbG9yOiAjMDAwO1xyXG4kZm9udC1ncmV5OiByZ2IoMTMxLCAxMzEsIDEzMSk7XHJcblxyXG4kYmctaW1hZ2U6IHVybChcIi9hc3NldHMvYmFja2dyb3VuZHMvYW5kcmV3LW5lZWwuanBnXCIpO1xyXG4kYmctb3ZlcmxheTogcmdiYSgwLCAwLCAwLCAwLjU0MSk7XHJcblxyXG5AbWl4aW4gZmlsZUlucHV0KCkge1xyXG4gIGZvbnQtZmFtaWx5OiAkZm9udDtcclxuICBjb2xvcjogJGZvbnQtY29sb3I7XHJcbiAgZm9udC1zaXplOiAxLjZlbTtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBwYWRkaW5nOiA2cHggMTJweDtcclxuICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gIHBhZGRpbmc6IDMwcHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbiJdfQ== */"] });
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_5__["Select"])(_store_app_state__WEBPACK_IMPORTED_MODULE_3__["AppState"].excelData)
], SettingsComponent.prototype, "excelData$", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_5__["Select"])(_store_app_state__WEBPACK_IMPORTED_MODULE_3__["AppState"].pictures)
], SettingsComponent.prototype, "pictures$", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_5__["Select"])(_store_app_state__WEBPACK_IMPORTED_MODULE_3__["AppState"].filters)
], SettingsComponent.prototype, "filters$", void 0);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](SettingsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"],
        args: [{
                templateUrl: './settings.component.html',
                styleUrls: ['./settings.component.scss'],
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }, { type: _ngxs_store__WEBPACK_IMPORTED_MODULE_5__["Store"] }, { type: _service_obj_to_xlsx_service__WEBPACK_IMPORTED_MODULE_7__["ObjToXlsxService"] }]; }, { excelData$: [], pictures$: [], filters$: [] }); })();


/***/ }),

/***/ "./src/app/store/app.action.ts":
/*!*************************************!*\
  !*** ./src/app/store/app.action.ts ***!
  \*************************************/
/*! exports provided: SetExcelData, SetFilterdExcelData, SetPictures, SetFilters */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetExcelData", function() { return SetExcelData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetFilterdExcelData", function() { return SetFilterdExcelData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetPictures", function() { return SetPictures; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetFilters", function() { return SetFilters; });
class SetExcelData {
    constructor(excelData) {
        this.excelData = excelData;
    }
}
SetExcelData.type = 'SetExcelData';
class SetFilterdExcelData {
    constructor(filterdExcelData) {
        this.filterdExcelData = filterdExcelData;
    }
}
SetFilterdExcelData.type = 'SetFilterdExcelData';
class SetPictures {
    constructor(pictures) {
        this.pictures = pictures;
    }
}
SetPictures.type = 'SetPictures';
class SetFilters {
    constructor(filters) {
        this.filters = filters;
    }
}
SetFilters.type = 'SetFilters';


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
/* harmony import */ var _app_action__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.action */ "./src/app/store/app.action.ts");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngxs/store */ "./node_modules/@ngxs/store/__ivy_ngcc__/fesm2015/ngxs-store.js");

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
    static excelData(state) {
        return state.excelData;
    }
    SetExcelData(context, action) {
        context.patchState({
            excelData: action.excelData,
        });
    }
    static filterdExcelData(state) {
        return state.filterdExcelData;
    }
    SetFilterdExcelData(context, action) {
        context.patchState({
            filterdExcelData: action.filterdExcelData,
        });
    }
    static pictures(state) {
        return state.pictures;
    }
    setPictures(context, action) {
        context.patchState({
            pictures: action.pictures,
        });
    }
    static filters(state) {
        return state.filters;
    }
    SetFilters(context, action) {
        context.patchState({
            filters: action.filters,
        });
    }
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Action"])(_app_action__WEBPACK_IMPORTED_MODULE_1__["SetExcelData"])
], AppState.prototype, "SetExcelData", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Action"])(_app_action__WEBPACK_IMPORTED_MODULE_1__["SetFilterdExcelData"])
], AppState.prototype, "SetFilterdExcelData", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Action"])(_app_action__WEBPACK_IMPORTED_MODULE_1__["SetPictures"])
], AppState.prototype, "setPictures", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Action"])(_app_action__WEBPACK_IMPORTED_MODULE_1__["SetFilters"])
], AppState.prototype, "SetFilters", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Selector"])()
], AppState, "excelData", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Selector"])()
], AppState, "filterdExcelData", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Selector"])()
], AppState, "pictures", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Selector"])()
], AppState, "filters", null);
AppState = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_2__["State"])({
        name: 'appState',
        defaults: {
            excelData: [],
            filterdExcelData: [],
            filters: [],
            pictures: new Map(),
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
const environment = {
    production: false,
    requireExcel: false,
    excludedEndRows: 2,
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

module.exports = __webpack_require__(/*! C:\Projekte-Julius\PdfMaker\src\main.ts */"./src/main.ts");


/***/ }),

/***/ 1:
/*!********************!*\
  !*** fs (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 2:
/*!************************!*\
  !*** crypto (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 3:
/*!************************!*\
  !*** stream (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map