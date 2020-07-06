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
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _otp_verify_otp_verify_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./otp-verify/otp-verify.component */ "./src/app/otp-verify/otp-verify.component.ts");
/* harmony import */ var _feedback_feedback_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./feedback/feedback.component */ "./src/app/feedback/feedback.component.ts");
/* harmony import */ var _ending_ending_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ending/ending.component */ "./src/app/ending/ending.component.ts");








const routes = [
    { path: "", component: _login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"] },
    { path: "verify", component: _otp_verify_otp_verify_component__WEBPACK_IMPORTED_MODULE_3__["OtpVerifyComponent"] },
    { path: "feedback", component: _feedback_feedback_component__WEBPACK_IMPORTED_MODULE_4__["FeedbackComponent"] },
    { path: "ending", component: _ending_ending_component__WEBPACK_IMPORTED_MODULE_5__["EndingComponent"] },
    { path: 'menu', loadChildren: () => __webpack_require__.e(/*! import() | menu-menu-module */ "menu-menu-module").then(__webpack_require__.bind(null, /*! ./menu/menu.module */ "./src/app/menu/menu.module.ts")).then(m => m.MenuModule) }, { path: 'orders', loadChildren: () => __webpack_require__.e(/*! import() | orders-orders-module */ "orders-orders-module").then(__webpack_require__.bind(null, /*! ./orders/orders.module */ "./src/app/orders/orders.module.ts")).then(m => m.OrdersModule) }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
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
/* harmony import */ var _service_global_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./service/global.service */ "./src/app/service/global.service.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");





class AppComponent {
    constructor(route, _globalService, router) {
        this.route = route;
        this._globalService = _globalService;
        this.router = router;
        this.title = 'idine';
    }
    ngOnInit() {
        this.route.queryParamMap.subscribe(paramsMap => {
            this._globalService.init(paramsMap['params']['encodedkey'], null, this.router.navigate);
        });
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_global_service__WEBPACK_IMPORTED_MODULE_2__["GlobalService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 2, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
    } }, directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }, { type: _service_global_service__WEBPACK_IMPORTED_MODULE_2__["GlobalService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _otp_verify_otp_verify_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./otp-verify/otp-verify.component */ "./src/app/otp-verify/otp-verify.component.ts");
/* harmony import */ var _feedback_feedback_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./feedback/feedback.component */ "./src/app/feedback/feedback.component.ts");
/* harmony import */ var _ending_ending_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./ending/ending.component */ "./src/app/ending/ending.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _service_global_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./service/global.service */ "./src/app/service/global.service.ts");
/* harmony import */ var _service_user_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./service/user.service */ "./src/app/service/user.service.ts");
/* harmony import */ var _service_menu_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./service/menu.service */ "./src/app/service/menu.service.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");




// HTTP client modules

// location module

// import components






// Import Services





class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [
        { provide: _angular_common__WEBPACK_IMPORTED_MODULE_5__["LocationStrategy"], useClass: _angular_common__WEBPACK_IMPORTED_MODULE_5__["HashLocationStrategy"] },
        _service_global_service__WEBPACK_IMPORTED_MODULE_12__["GlobalService"],
        _service_menu_service__WEBPACK_IMPORTED_MODULE_14__["MenuService"],
        _service_user_service__WEBPACK_IMPORTED_MODULE_13__["UserService"]
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_15__["NgbModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
        _login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"],
        _otp_verify_otp_verify_component__WEBPACK_IMPORTED_MODULE_8__["OtpVerifyComponent"],
        _feedback_feedback_component__WEBPACK_IMPORTED_MODULE_9__["FeedbackComponent"],
        _ending_ending_component__WEBPACK_IMPORTED_MODULE_10__["EndingComponent"],
        _header_header_component__WEBPACK_IMPORTED_MODULE_11__["HeaderComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_15__["NgbModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                    _login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"],
                    _otp_verify_otp_verify_component__WEBPACK_IMPORTED_MODULE_8__["OtpVerifyComponent"],
                    _feedback_feedback_component__WEBPACK_IMPORTED_MODULE_9__["FeedbackComponent"],
                    _ending_ending_component__WEBPACK_IMPORTED_MODULE_10__["EndingComponent"],
                    _header_header_component__WEBPACK_IMPORTED_MODULE_11__["HeaderComponent"],
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_15__["NgbModule"]
                ],
                providers: [
                    { provide: _angular_common__WEBPACK_IMPORTED_MODULE_5__["LocationStrategy"], useClass: _angular_common__WEBPACK_IMPORTED_MODULE_5__["HashLocationStrategy"] },
                    _service_global_service__WEBPACK_IMPORTED_MODULE_12__["GlobalService"],
                    _service_menu_service__WEBPACK_IMPORTED_MODULE_14__["MenuService"],
                    _service_user_service__WEBPACK_IMPORTED_MODULE_13__["UserService"]
                ],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/ending/ending.component.ts":
/*!********************************************!*\
  !*** ./src/app/ending/ending.component.ts ***!
  \********************************************/
/*! exports provided: EndingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EndingComponent", function() { return EndingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _service_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/user.service */ "./src/app/service/user.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");






function EndingComponent_div_10_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Total Bill Amount is ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx_r15.billDetails.Currency ? ctx_r15.billDetails.Currency : "INR ", " ", ctx_r15.billDetails.GrossAmount / 100, "");
} }
function EndingComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Your request for bill has been accepted ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "successfully. You will receive an SMS with a ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "link to download a copy of the bill.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, EndingComponent_div_10_ng_container_7_Template, 5, 2, "ng-container", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r8.billDetails && ctx_r8.billDetails.GrossAmount);
} }
function EndingComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Your payment is successful.Payment confirmation ID is ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r9.billDetails.razorpay_payment_id);
} }
function EndingComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Please wait while we update the payment status against the order.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EndingComponent_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("Payment failed for amount ", ctx_r11.billDetails.Currency ? ctx_r11.billDetails.Currency : "INR ", " ", ctx_r11.billDetails.GrossAmount / 100, " . Please try again.");
} }
function EndingComponent_div_14_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EndingComponent_div_14_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EndingComponent_div_14_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r17.makePayment(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " MAKE PAYMENT ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, EndingComponent_div_14_div_3_Template, 2, 0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r12.loading);
} }
function EndingComponent_div_15_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EndingComponent_div_15_Template(rf, ctx) { if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EndingComponent_div_15_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r20.updatePaymentStatus(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " GET PAYMENT STATUS ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, EndingComponent_div_15_div_3_Template, 2, 0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r13.loading);
} }
function EndingComponent_div_16_Template(rf, ctx) { if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Thank you for your patronage!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EndingComponent_div_16_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r23); const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r22.redirectToMenu(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Back to Menu");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class EndingComponent {
    constructor(router, _userService, cd, location) {
        this.router = router;
        this._userService = _userService;
        this.cd = cd;
        this.location = location;
        this.loading = false;
        this.timedOut = false;
        this.timer = 0;
    }
    ngOnInit() {
        if (localStorage.getItem('otpStatus') == null) {
            return this.router.navigate(['/'], { queryParamsHandling: 'preserve' });
        }
        else if (localStorage.getItem('billDetails')) {
            this.billDetails = JSON.parse(localStorage.getItem('billDetails'));
            if (this.billDetails.paymentStatus == 1 && this.billDetails.server_status == 0) {
                this.timedOut = true;
            }
        }
        this.customerName = localStorage.getItem('customerName');
    }
    makePayment() {
        this.loading = true;
        var options = {
            "key": this.billDetails.Key,
            "amount": this.billDetails.GrossAmount,
            "currency": this.billDetails.Currency,
            "name": this.billDetails.RestaurantName,
            "description": "Payment for order - " + this.billDetails.OrderNumber + "(Bill Number - " + this.billDetails.SBillNumber + ")",
            "order_id": this.billDetails.RazorpayOrderId,
            "handler": (response) => {
                this.billDetails.razorpay_payment_id = response.razorpay_payment_id;
                this.billDetails.razorpay_order_id = response.razorpay_order_id;
                this.billDetails.razorpay_signature = response.razorpay_signature;
                this.billDetails.paymentStatus = 1;
                localStorage.setItem('billDetails', JSON.stringify(this.billDetails));
                this.cd.detectChanges();
                this.updatePaymentStatus();
            },
            "prefill": {
                "name": this.billDetails.CustomerModel.CustomerName,
                "email": "",
                "contact": this.billDetails.CustomerModel.phoneNumber,
            },
            "notes": {
                "address": this.billDetails.RestaurantName
            },
            "theme": {
                "color": "#F37254"
            }
        };
        var rzp1 = new Razorpay(options);
        rzp1.open();
        this.loading = false;
    }
    updatePaymentStatus() {
        this.timedOut = false;
        this.loading = true;
        this.timer = setTimeout(() => {
            this.timedOut = true;
            this.cd.detectChanges();
        }, 5000);
        this._userService.updatePaymentInfo().subscribe({
            next: (result) => {
                clearTimeout(this.timer);
                this.loading = false;
                if (result['data'] == "success") {
                    let details = JSON.parse(JSON.stringify(result['data']));
                    this.billDetails.server_status = 1;
                    localStorage.setItem('billDetails', JSON.stringify(this.billDetails));
                    sessionStorage.clear();
                    location.reload();
                }
            },
            error: error => {
                this.loading = false;
                if (error.status == 403) {
                    localStorage.clear();
                    sessionStorage.clear();
                    sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire('Oops...', 'Session Expired ! Please login again.', 'error');
                    this.router.navigate(['/'], { queryParamsHandling: 'preserve' });
                }
                else if (error && error.error && error.error.data) {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire('Oops...', `${error.error.data}`, 'error');
                }
                else if (error && error.error && error.error.info) {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire('Oops...', `${error.error.info}`, 'error');
                }
                else {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire('Oops...', 'Invalid Action', 'error');
                }
            }
        });
    }
    redirectToMenu() {
        sessionStorage.removeItem('menuData');
        localStorage.removeItem('billDetails');
        this.router.navigate(['/menu'], { queryParamsHandling: 'preserve' });
    }
    logout() {
        localStorage.clear();
        sessionStorage.clear();
        this.router.navigate(['/'], { queryParamsHandling: 'preserve' });
    }
}
EndingComponent.ɵfac = function EndingComponent_Factory(t) { return new (t || EndingComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"])); };
EndingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EndingComponent, selectors: [["app-ending"]], decls: 17, vars: 8, consts: [[1, "container-fluid"], [1, "row"], [1, "col-xs-4"], ["src", "../../assets/image/logo.png", "alt", ""], [1, "col-xs-4", 2, "margin", "auto"], [1, "welcom-people"], [1, "fa", "fa-sign-out", 2, "color", "red", 3, "click"], [1, "row", "feedback-success"], ["class", "col-sm-12 t-center", 4, "ngIf"], ["class", "col-sm-12 t-center mt-25", 4, "ngIf"], [1, "col-sm-12", "t-center"], [4, "ngIf"], [1, "req-bill", 2, "position", "relative", 3, "click"], ["id", "loading-bar-spinner", "class", "spinner", 4, "ngIf"], ["id", "loading-bar-spinner", 1, "spinner"], [1, "spinner-icon"], [1, "col-sm-12", "t-center", "mt-25"], [1, "req-bill"]], template: function EndingComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EndingComponent_Template_i_click_8_listener() { return ctx.logout(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, EndingComponent_div_10_Template, 8, 1, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, EndingComponent_div_11_Template, 5, 1, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, EndingComponent_div_12_Template, 4, 0, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, EndingComponent_div_13_Template, 3, 2, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, EndingComponent_div_14_Template, 4, 1, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, EndingComponent_div_15_Template, 4, 1, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, EndingComponent_div_16_Template, 5, 0, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Welcome ", ctx.customerName, "!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.billDetails && ctx.billDetails.paymentStatus == 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.billDetails && ctx.billDetails.paymentStatus == 1 && ctx.billDetails.server_status == 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.billDetails && ctx.billDetails.paymentStatus == 1 && ctx.billDetails.server_status == 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.billDetails && ctx.billDetails.paymentStatus == 0 - 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.billDetails && (ctx.billDetails.paymentStatus == 0 || ctx.billDetails.paymentStatus == 0 - 1) && ctx.billDetails.GrossAmount);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.billDetails && ctx.billDetails.paymentStatus == 1 && ctx.billDetails.server_status == 0 && ctx.timedOut);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.billDetails && ctx.billDetails.paymentStatus == 1 && ctx.billDetails.server_status == 1);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"]], styles: [".header-section-2[_ngcontent-%COMP%]{\n    display: -webkit-inline-box;\n    margin-top: 2%;\n}\n\n.header-section-2[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\n    margin-left: 20%;\n}\n\n.welcom-people[_ngcontent-%COMP%]{\n    font-size: 16px;\n    color: orange;\n    font-weight: 600;\n    margin: -10px;\n}\n\n.feedback-success[_ngcontent-%COMP%]{\n    margin-top: 5%;\n}\n\n.feedback-success[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\n    color: #529685;\n    font-size: 14px;\n    font-weight: 200;\n\n}\n\n.req-bill[_ngcontent-%COMP%]{\n    background-color: #529685;\n    border: 1px solid #529685;\n    color: #fff;\n    width: 80%;\n    padding: 8px;\n    text-align: center;\n    text-decoration: none;\n    display: inline-block;\n    font-size: 14px;\n    margin: 20px 2px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZW5kaW5nL2VuZGluZy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksMkJBQTJCO0lBQzNCLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBQ0E7SUFDSSxlQUFlO0lBQ2YsYUFBYTtJQUNiLGdCQUFnQjtJQUNoQixhQUFhO0FBQ2pCOztBQUNBO0lBQ0ksY0FBYztBQUNsQjs7QUFDQTtJQUNJLGNBQWM7SUFDZCxlQUFlO0lBQ2YsZ0JBQWdCOztBQUVwQjs7QUFDQTtJQUNJLHlCQUF5QjtJQUN6Qix5QkFBeUI7SUFDekIsV0FBVztJQUNYLFVBQVU7SUFDVixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLHFCQUFxQjtJQUNyQixxQkFBcUI7SUFDckIsZUFBZTtJQUNmLGdCQUFnQjtBQUNwQiIsImZpbGUiOiJzcmMvYXBwL2VuZGluZy9lbmRpbmcuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkZXItc2VjdGlvbi0ye1xuICAgIGRpc3BsYXk6IC13ZWJraXQtaW5saW5lLWJveDtcbiAgICBtYXJnaW4tdG9wOiAyJTtcbn1cblxuLmhlYWRlci1zZWN0aW9uLTIgaW1ne1xuICAgIG1hcmdpbi1sZWZ0OiAyMCU7XG59XG4ud2VsY29tLXBlb3BsZXtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgY29sb3I6IG9yYW5nZTtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIG1hcmdpbjogLTEwcHg7XG59XG4uZmVlZGJhY2stc3VjY2Vzc3tcbiAgICBtYXJnaW4tdG9wOiA1JTtcbn1cbi5mZWVkYmFjay1zdWNjZXNzIHB7XG4gICAgY29sb3I6ICM1Mjk2ODU7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGZvbnQtd2VpZ2h0OiAyMDA7XG5cbn1cbi5yZXEtYmlsbHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTI5Njg1O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICM1Mjk2ODU7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgd2lkdGg6IDgwJTtcbiAgICBwYWRkaW5nOiA4cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIG1hcmdpbjogMjBweCAycHg7XG59XG5cblxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EndingComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-ending',
                templateUrl: './ending.component.html',
                styleUrls: ['./ending.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _service_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }, { type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"] }]; }, null); })();


/***/ }),

/***/ "./src/app/feedback/feedback.component.ts":
/*!************************************************!*\
  !*** ./src/app/feedback/feedback.component.ts ***!
  \************************************************/
/*! exports provided: FeedbackComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeedbackComponent", function() { return FeedbackComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _service_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/user.service */ "./src/app/service/user.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");






function FeedbackComponent_div_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = function (a0, a1) { return { "startcolor1": a0, "startcolor": a1 }; };
class FeedbackComponent {
    constructor(router, _userService) {
        this.router = router;
        this._userService = _userService;
        this.ratingNo = 0;
    }
    ngOnInit() {
        if (localStorage.getItem('token') == "") {
            return this.router.navigate(['/'], { queryParamsHandling: 'preserve' });
        }
        if (sessionStorage.getItem('orderID') == null
            || sessionStorage.getItem('orderID') == ""
            || sessionStorage.getItem('orderID') == undefined) {
            return this.router.navigate(['/ending'], { queryParamsHandling: 'preserve' });
        }
        this.customerName = localStorage.getItem('customerName');
    }
    redirect() {
        this.loading = true;
        this._userService.requestBill(sessionStorage.getItem('orderID')).subscribe({
            next: (result) => {
                this.loading = false;
                let details = JSON.parse(JSON.stringify(result['data']));
                details.paymentStatus = 0;
                details.server_status = 0;
                localStorage.setItem('billDetails', JSON.stringify(details));
                this.router.navigate(['/ending'], { queryParamsHandling: 'preserve' });
            },
            error: error => {
                this.loading = false;
                if (error.status == 403) {
                    localStorage.clear();
                    sessionStorage.clear();
                    sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire('Oops...', 'Session Expired ! Please login again.', 'error');
                    this.router.navigate(['/'], { queryParamsHandling: 'preserve' });
                }
                else if (error && error.error && error.error.data) {
                    if (error.error.data == "Bill is already generated" || error.error.data == '"Bill is already generated"') {
                        this.router.navigate(['/ending'], { queryParamsHandling: 'preserve' });
                    }
                    else {
                        sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire('Oops...', `${error.error.data}`, 'error');
                    }
                }
                else if (error && error.error && error.error.info) {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire('Oops...', `${error.error.info}`, 'error');
                }
                else {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire('Oops...', 'Invalid Action', 'error');
                }
            }
        });
    }
    redirectToMenu() {
        sessionStorage.removeItem('menuData');
        this.router.navigate(['/menu'], { queryParamsHandling: 'preserve' });
    }
    addRating(no) {
        this.ratingNo = no;
    }
    logout() {
        localStorage.clear();
        sessionStorage.clear();
        this.router.navigate(['/'], { queryParamsHandling: 'preserve' });
    }
}
FeedbackComponent.ɵfac = function FeedbackComponent_Factory(t) { return new (t || FeedbackComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"])); };
FeedbackComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FeedbackComponent, selectors: [["app-feedback"]], decls: 35, vars: 23, consts: [[1, "container-fluid"], [1, "row"], [1, "col-xs-4"], ["src", "../../assets/image/logo.png", "alt", ""], [1, "col-xs-4", 2, "margin", "auto"], [1, "welcom-people"], [1, "fa", "fa-sign-out", 2, "color", "red", 3, "click"], [1, "row", "feedback-success"], [1, "col-sm-12", "t-center"], [1, "col-sm-12", "t-center", "star-i"], ["id", "rating1", 1, "fa", "fa-star", "startcolor1", 3, "ngClass", "click"], ["id", "rating2", 1, "fa", "fa-star", "startcolor1", 3, "ngClass", "click"], ["id", "rating3", 1, "fa", "fa-star", "startcolor1", 3, "ngClass", "click"], ["id", "rating4", 1, "fa", "fa-star", "startcolor1", 3, "ngClass", "click"], ["id", "rating5", 1, "fa", "fa-star", "startcolor1", 3, "ngClass", "click"], [1, "req-bill", 2, "position", "relative", 3, "disabled", "click"], ["id", "loading-bar-spinner", "class", "spinner", 4, "ngIf"], [1, "req-bill", 2, "position", "relative", 3, "click"], [1, "req-bill-p"], ["id", "loading-bar-spinner", 1, "spinner"], [1, "spinner-icon"]], template: function FeedbackComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FeedbackComponent_Template_i_click_8_listener() { return ctx.logout(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Your order was placed successfully. A server");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " will attend to you shortly.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Please rate your ordering experience");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FeedbackComponent_Template_i_click_20_listener() { return ctx.addRating(1); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FeedbackComponent_Template_i_click_21_listener() { return ctx.addRating(2); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FeedbackComponent_Template_i_click_22_listener() { return ctx.addRating(3); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FeedbackComponent_Template_i_click_23_listener() { return ctx.addRating(4); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FeedbackComponent_Template_i_click_24_listener() { return ctx.addRating(5); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FeedbackComponent_Template_button_click_26_listener() { return ctx.redirect(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " REQUEST BILL ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, FeedbackComponent_div_28_Template, 2, 0, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FeedbackComponent_Template_button_click_30_listener() { return ctx.redirectToMenu(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Back to Menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "p", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Please request for your bill once you have finished your meal");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Welcome ", ctx.customerName, "!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](8, _c0, ctx.ratingNo < 1, ctx.ratingNo >= 1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](11, _c0, ctx.ratingNo < 2, ctx.ratingNo >= 2));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](14, _c0, ctx.ratingNo < 3, ctx.ratingNo >= 3));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](17, _c0, ctx.ratingNo < 4, ctx.ratingNo >= 4));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](20, _c0, ctx.ratingNo < 5, ctx.ratingNo >= 5));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"]], styles: [".header-section-2[_ngcontent-%COMP%]{\n    display: -webkit-inline-box;\n    margin-top: 2%;\n}\n\n.header-section-2[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\n    margin-left: 20%;\n}\n\n.welcom-people[_ngcontent-%COMP%]{\n    font-size: 16px;\n    color: orange;\n    font-weight: 600;\n    margin: -10px;\n}\n\n.feedback-success[_ngcontent-%COMP%]{\n    margin-top: 5%;\n}\n\n.feedback-success[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\n    color: #529685;\n    font-size: 15px;\n    font-weight: 400;\n}\n\n.req-bill[_ngcontent-%COMP%]{\n    background-color: #529685;\n    border: 1px solid #529685;\n    color: #fff;\n    width: 55%;\n    padding: 8px;\n    text-align: center;\n    text-decoration: none;\n    display: inline-block;\n    font-size: 14px;\n    margin: 10px 2px;\n}\n\n.req-bill-p[_ngcontent-%COMP%]{\n    margin-top: 5%;\n    font-size: 14px;\n    font-weight: 400;\n    color: #9c9696;\n}\n\n.startcolor1[_ngcontent-%COMP%]{\n    font-size: 31px;\n    margin: 1%;\n    color: #b7b1b1;\n}\n\n.startcolor[_ngcontent-%COMP%]{\n    color: orange;\n    font-size: 31px;\n    margin: 1%;\n}\n\n\n\n#loading-bar-spinner.spinner[_ngcontent-%COMP%] {\n    right: 8%;\n    margin-left: -20px;\n    top: 75%;\n    margin-top: -20px;\n    position: absolute;\n    z-index: 19 !important;\n    -webkit-animation: loading-bar-spinner 400ms linear infinite;\n            animation: loading-bar-spinner 400ms linear infinite;\n  }\n\n#loading-bar-spinner.spinner[_ngcontent-%COMP%]   .spinner-icon[_ngcontent-%COMP%] {\n    width: 20px;\n    height: 20px;\n    border: solid 4px transparent;\n    border-top-color: #00C8B1 !important;\n    border-left-color: #00C8B1 !important;\n    border-radius: 50%;\n  }\n\n@-webkit-keyframes loading-bar-spinner {\n    0% {\n      transform: rotate(0deg);\n      transform: rotate(0deg);\n    }\n    100% {\n      transform: rotate(360deg);\n      transform: rotate(360deg);\n    }\n  }\n\n@keyframes loading-bar-spinner {\n    0% {\n      transform: rotate(0deg);\n      transform: rotate(0deg);\n    }\n    100% {\n      transform: rotate(360deg);\n      transform: rotate(360deg);\n    }\n  }\n\n@media screen and (max-width: 380px) and (min-width: 320px) {\n    .choose-item-desc[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\n        font-size: 10px !important;\n    }\n    .res-desc[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{\n        font-size: 14px !important;\n    }\n    .welcom-people[_ngcontent-%COMP%]{\n        font-size: 14px !important;\n    }\n    .order-summary-btn[_ngcontent-%COMP%]{\n        font-size: 14px;\n    }\n    .feedback-success[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\n        font-size: 12px;\n    }\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmVlZGJhY2svZmVlZGJhY2suY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLDJCQUEyQjtJQUMzQixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUNBO0lBQ0ksZUFBZTtJQUNmLGFBQWE7SUFDYixnQkFBZ0I7SUFDaEIsYUFBYTtBQUNqQjs7QUFDQTtJQUNJLGNBQWM7QUFDbEI7O0FBQ0E7SUFDSSxjQUFjO0lBQ2QsZUFBZTtJQUNmLGdCQUFnQjtBQUNwQjs7QUFDQTtJQUNJLHlCQUF5QjtJQUN6Qix5QkFBeUI7SUFDekIsV0FBVztJQUNYLFVBQVU7SUFDVixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLHFCQUFxQjtJQUNyQixxQkFBcUI7SUFDckIsZUFBZTtJQUNmLGdCQUFnQjtBQUNwQjs7QUFDQTtJQUNJLGNBQWM7SUFDZCxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsVUFBVTtJQUNWLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsZUFBZTtJQUNmLFVBQVU7QUFDZDs7QUFFQSxXQUFXOztBQUdYO0lBQ0ksU0FBUztJQUNULGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixzQkFBc0I7SUFDdEIsNERBQTREO1lBQ3BELG9EQUFvRDtFQUM5RDs7QUFFQTtJQUNFLFdBQVc7SUFDWCxZQUFZO0lBQ1osNkJBQTZCO0lBQzdCLG9DQUFvQztJQUNwQyxxQ0FBcUM7SUFDckMsa0JBQWtCO0VBQ3BCOztBQUVBO0lBQ0U7TUFFVSx1QkFBdUI7TUFDL0IsdUJBQXVCO0lBQ3pCO0lBQ0E7TUFFVSx5QkFBeUI7TUFDakMseUJBQXlCO0lBQzNCO0VBQ0Y7O0FBRUE7SUFDRTtNQUVVLHVCQUF1QjtNQUMvQix1QkFBdUI7SUFDekI7SUFDQTtNQUVVLHlCQUF5QjtNQUNqQyx5QkFBeUI7SUFDM0I7RUFDRjs7QUFJRjtJQUNJO1FBQ0ksMEJBQTBCO0lBQzlCO0lBQ0E7UUFDSSwwQkFBMEI7SUFDOUI7SUFDQTtRQUNJLDBCQUEwQjtJQUM5QjtJQUNBO1FBQ0ksZUFBZTtJQUNuQjtJQUNBO1FBQ0ksZUFBZTtJQUNuQjtFQUNGIiwiZmlsZSI6InNyYy9hcHAvZmVlZGJhY2svZmVlZGJhY2suY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkZXItc2VjdGlvbi0ye1xuICAgIGRpc3BsYXk6IC13ZWJraXQtaW5saW5lLWJveDtcbiAgICBtYXJnaW4tdG9wOiAyJTtcbn1cblxuLmhlYWRlci1zZWN0aW9uLTIgaW1ne1xuICAgIG1hcmdpbi1sZWZ0OiAyMCU7XG59XG4ud2VsY29tLXBlb3BsZXtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgY29sb3I6IG9yYW5nZTtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIG1hcmdpbjogLTEwcHg7XG59XG4uZmVlZGJhY2stc3VjY2Vzc3tcbiAgICBtYXJnaW4tdG9wOiA1JTtcbn1cbi5mZWVkYmFjay1zdWNjZXNzIHB7XG4gICAgY29sb3I6ICM1Mjk2ODU7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG59XG4ucmVxLWJpbGx7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzUyOTY4NTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjNTI5Njg1O1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIHdpZHRoOiA1NSU7XG4gICAgcGFkZGluZzogOHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBtYXJnaW46IDEwcHggMnB4O1xufVxuLnJlcS1iaWxsLXB7XG4gICAgbWFyZ2luLXRvcDogNSU7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgY29sb3I6ICM5Yzk2OTY7XG59XG5cbi5zdGFydGNvbG9yMXtcbiAgICBmb250LXNpemU6IDMxcHg7XG4gICAgbWFyZ2luOiAxJTtcbiAgICBjb2xvcjogI2I3YjFiMTtcbn1cblxuLnN0YXJ0Y29sb3J7XG4gICAgY29sb3I6IG9yYW5nZTtcbiAgICBmb250LXNpemU6IDMxcHg7XG4gICAgbWFyZ2luOiAxJTtcbn1cblxuLyogbG9hZGVyICovXG5cblxuI2xvYWRpbmctYmFyLXNwaW5uZXIuc3Bpbm5lciB7XG4gICAgcmlnaHQ6IDglO1xuICAgIG1hcmdpbi1sZWZ0OiAtMjBweDtcbiAgICB0b3A6IDc1JTtcbiAgICBtYXJnaW4tdG9wOiAtMjBweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgei1pbmRleDogMTkgIWltcG9ydGFudDtcbiAgICAtd2Via2l0LWFuaW1hdGlvbjogbG9hZGluZy1iYXItc3Bpbm5lciA0MDBtcyBsaW5lYXIgaW5maW5pdGU7XG4gICAgICAgICAgICBhbmltYXRpb246IGxvYWRpbmctYmFyLXNwaW5uZXIgNDAwbXMgbGluZWFyIGluZmluaXRlO1xuICB9XG4gIFxuICAjbG9hZGluZy1iYXItc3Bpbm5lci5zcGlubmVyIC5zcGlubmVyLWljb24ge1xuICAgIHdpZHRoOiAyMHB4O1xuICAgIGhlaWdodDogMjBweDtcbiAgICBib3JkZXI6IHNvbGlkIDRweCB0cmFuc3BhcmVudDtcbiAgICBib3JkZXItdG9wLWNvbG9yOiAjMDBDOEIxICFpbXBvcnRhbnQ7XG4gICAgYm9yZGVyLWxlZnQtY29sb3I6ICMwMEM4QjEgIWltcG9ydGFudDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIH1cbiAgXG4gIEAtd2Via2l0LWtleWZyYW1lcyBsb2FkaW5nLWJhci1zcGlubmVyIHtcbiAgICAwJSB7XG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICAgIH1cbiAgICAxMDAlIHtcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG4gICAgfVxuICB9XG4gIFxuICBAa2V5ZnJhbWVzIGxvYWRpbmctYmFyLXNwaW5uZXIge1xuICAgIDAlIHtcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gICAgfVxuICAgIDEwMCUge1xuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xuICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xuICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbiAgICB9XG4gIH1cblxuXG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDM4MHB4KSBhbmQgKG1pbi13aWR0aDogMzIwcHgpIHtcbiAgICAuY2hvb3NlLWl0ZW0tZGVzYyBwe1xuICAgICAgICBmb250LXNpemU6IDEwcHggIWltcG9ydGFudDtcbiAgICB9XG4gICAgLnJlcy1kZXNjIGgxe1xuICAgICAgICBmb250LXNpemU6IDE0cHggIWltcG9ydGFudDtcbiAgICB9XG4gICAgLndlbGNvbS1wZW9wbGV7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweCAhaW1wb3J0YW50O1xuICAgIH1cbiAgICAub3JkZXItc3VtbWFyeS1idG57XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICB9XG4gICAgLmZlZWRiYWNrLXN1Y2Nlc3MgcHtcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgIH1cbiAgfVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FeedbackComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-feedback',
                templateUrl: './feedback.component.html',
                styleUrls: ['./feedback.component.css'],
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _service_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class HeaderComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 3, vars: 0, consts: [[1, "container-fluid", "header-class"], [1, "row", "header-row"], [1, "header-btn"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".header-class[_ngcontent-%COMP%] {\n  height: 50px;\n  background-color: #529685;\n}\n\n.header-btn[_ngcontent-%COMP%] {\n  background-color: #fff;\n  border: none;\n  color: white;\n  width: 100%;\n  padding: 18px;\n  text-align: center;\n  text-decoration: none;\n  display: inline-block;\n  font-size: 16px;\n  margin: 4px 2px;\n  border-radius: 25px;\n  display: none;\n}\n\n.header-row[_ngcontent-%COMP%] {\n  padding: 8.5% 4%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBWTtFQUNaLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QixZQUFZO0VBQ1osWUFBWTtFQUNaLFdBQVc7RUFDWCxhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLHFCQUFxQjtFQUNyQixxQkFBcUI7RUFDckIsZUFBZTtFQUNmLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsYUFBYTtBQUNmOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCIiwiZmlsZSI6InNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRlci1jbGFzcyB7XG4gIGhlaWdodDogNTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzUyOTY4NTtcbn1cblxuLmhlYWRlci1idG4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBib3JkZXI6IG5vbmU7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDE4cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbWFyZ2luOiA0cHggMnB4O1xuICBib3JkZXItcmFkaXVzOiAyNXB4O1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4uaGVhZGVyLXJvdyB7XG4gIHBhZGRpbmc6IDguNSUgNCU7XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-header',
                templateUrl: './header.component.html',
                styleUrls: ['./header.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _service_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/user.service */ "./src/app/service/user.service.ts");
/* harmony import */ var _service_global_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../service/global.service */ "./src/app/service/global.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");








function LoginComponent_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class LoginComponent {
    constructor(router, _userService, _globalService) {
        this.router = router;
        this._userService = _userService;
        this._globalService = _globalService;
        this.data = [];
    }
    ngOnInit() {
        if (localStorage.getItem("token")) {
            return this.router.navigate(["/menu"], {
                queryParamsHandling: "preserve",
            });
        }
    }
    getOtp() {
        if (!this.customerPhone || !this.customerName) {
            return sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire("Oops...", "Please enter all fields !", "error");
        }
        if (!this._globalService.encodedKey) {
            return sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire("Oops...", "Encodedkey is missing. Please check the url", "error");
        }
        this.loading = true;
        this._userService.getOTP(this.customerPhone, this.customerName).subscribe({
            next: (data) => {
                this.data = data;
                if (this.data.info === "success") {
                    localStorage.setItem("customerPhone", this.customerPhone.toString());
                    localStorage.setItem("customerName", this.customerName);
                    this._globalService.customerPhone = this.customerPhone;
                    this._globalService.loginStatus = true;
                    this.loading = false;
                    this.router.navigate(["./verify"], {
                        queryParamsHandling: "preserve",
                    });
                }
            },
            error: (error) => {
                this.loading = false;
                if (error.status == 403) {
                    localStorage.clear();
                    sessionStorage.clear();
                    sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire("Oops...", "Session Expired ! Please login again.", "error");
                    this.router.navigate(["/"], { queryParamsHandling: "preserve" });
                }
                else {
                    console.log(error.error);
                    sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire("Oops...", `${error.error.info}`, "error");
                }
            },
        });
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_global_service__WEBPACK_IMPORTED_MODULE_4__["GlobalService"])); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 57, vars: 3, consts: [[1, "container-fluid"], [1, "row"], [1, "col-sm-12", "logo-div"], ["src", "../../assets/image/logo.png", "alt", ""], [1, "col-sm-12", "app-info", "t-center"], ["type", "number", "id", "phone", "placeholder", "Your mobile number", 1, "mt-25", 3, "ngModel", "ngModelChange"], ["type", "text", "id", "name", "placeholder", "Your full name", 3, "ngModel", "ngModelChange"], [1, "col-sm-12", "t-center"], [1, "get-otp", 3, "click"], ["id", "loading-bar-spinner", "class", "spinner", 4, "ngIf"], [1, "contact-less-order-h1"], [1, "col-sm-12", "t-left", "idine-booking-step"], [1, "col-sm-12", "t-center", "promotional-msg"], ["id", "loading-bar-spinner", 1, "spinner"], [1, "spinner-icon"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "to facilitate contact-less ordering experience");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "please cooperate and enter your details");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_9_listener($event) { return ctx.customerPhone = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_10_listener($event) { return ctx.customerName = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_12_listener() { return ctx.getOtp(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Get OTP");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, LoginComponent_div_14_Template, 2, 0, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "h1", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "How contact-less ordering works");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " Sign to ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "verify");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " your account");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, " Browse ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, " and ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "build");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, " your order");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, " View");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, " and ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "place");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, " your order");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, " After your meal , ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "request");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, " for bill");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "By providing your contact number, you automatically provide us ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "consent to send you occasional promotional messages.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.customerPhone);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.customerName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"]], styles: [".app-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\n color: #529685;\n margin-bottom: 0%;\n font-size: 16px;\n font-weight: 200;\n}\n#phone[_ngcontent-%COMP%], #name[_ngcontent-%COMP%]{\n    background-color: #fff;\n    border: 1px solid #529685;\n    color: #529685;\n    width: 75%;\n    padding: 8px;\n    text-align: center;\n    text-decoration: none;\n    display: inline-block;\n    font-size: 16px;\n    margin: 4px 2px;\n    border-radius: 25px;\n}\n.get-otp[_ngcontent-%COMP%]{\n    background-color: #529685;\n    border: 1px solid #529685;\n    color: #fff;\n    width: 40%;\n    padding: 8px;\n    text-align: center;\n    text-decoration: none;\n    display: inline-block;\n    font-size: 16px;\n    margin: 8px 2px;\n}\n.contact-less-order-h1[_ngcontent-%COMP%]{\n    color: #529685;\n    margin-bottom: 0%;\n    margin-top: 2%;\n    font-size: 17px;\n    font-weight: 400;\n}\n.idine-booking-step[_ngcontent-%COMP%]{\n    padding: 3% 12%;\n}\nspan[_ngcontent-%COMP%]{\n    height: 10px;\n    width: 20px;\n    background: #529685;\n    padding: 5px 10px;\n    border-radius: 5px;\n    color: white;\n  }\n.idine-booking-step[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\n    margin-top: 5%;\n    font-size: 14px;\n    font-weight: 400;\n    color: #9c9696;\n  }\n.promotional-msg[_ngcontent-%COMP%]{\n    font-size: 11px;\n    color: grey;\n    font-weight: 500;\n    margin: 0%;\n    margin-top: 5%;\n}\n#loading-bar-spinner.spinner[_ngcontent-%COMP%] {\n  left: 65%;\n  margin-left: -20px;\n  top: 68%;\n  margin-top: -20px;\n  position: absolute;\n  z-index: 19 !important;\n  -webkit-animation: loading-bar-spinner 400ms linear infinite;\n          animation: loading-bar-spinner 400ms linear infinite;\n}\n#loading-bar-spinner.spinner[_ngcontent-%COMP%]   .spinner-icon[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n  border: solid 4px transparent;\n  border-top-color: #00C8B1 !important;\n  border-left-color: #00C8B1 !important;\n  border-radius: 50%;\n}\n@-webkit-keyframes loading-bar-spinner {\n  0% {\n    transform: rotate(0deg);\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n}\n@keyframes loading-bar-spinner {\n  0% {\n    transform: rotate(0deg);\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n}\n@media screen and (max-width: 380px) and (min-width: 320px) {\n  .app-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\n  font-size: 14px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUVBO0NBQ0MsY0FBYztDQUNkLGlCQUFpQjtDQUNqQixlQUFlO0NBQ2YsZ0JBQWdCO0FBQ2pCO0FBQ0E7SUFDSSxzQkFBc0I7SUFDdEIseUJBQXlCO0lBQ3pCLGNBQWM7SUFDZCxVQUFVO0lBQ1YsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixxQkFBcUI7SUFDckIscUJBQXFCO0lBQ3JCLGVBQWU7SUFDZixlQUFlO0lBQ2YsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSx5QkFBeUI7SUFDekIseUJBQXlCO0lBQ3pCLFdBQVc7SUFDWCxVQUFVO0lBQ1YsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixxQkFBcUI7SUFDckIscUJBQXFCO0lBQ3JCLGVBQWU7SUFDZixlQUFlO0FBQ25CO0FBRUE7SUFDSSxjQUFjO0lBQ2QsaUJBQWlCO0lBQ2pCLGNBQWM7SUFDZCxlQUFlO0lBQ2YsZ0JBQWdCO0FBQ3BCO0FBRUE7SUFDSSxlQUFlO0FBQ25CO0FBQ0U7SUFDRSxZQUFZO0lBQ1osV0FBVztJQUNYLG1CQUFtQjtJQUNuQixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLFlBQVk7RUFDZDtBQUNBO0lBQ0UsY0FBYztJQUNkLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsY0FBYztFQUNoQjtBQUNGO0lBQ0ksZUFBZTtJQUNmLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsVUFBVTtJQUNWLGNBQWM7QUFDbEI7QUFLQTtFQUNFLFNBQVM7RUFDVCxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsc0JBQXNCO0VBQ3RCLDREQUE0RDtVQUNwRCxvREFBb0Q7QUFDOUQ7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osNkJBQTZCO0VBQzdCLG9DQUFvQztFQUNwQyxxQ0FBcUM7RUFDckMsa0JBQWtCO0FBQ3BCO0FBRUE7RUFDRTtJQUVVLHVCQUF1QjtJQUMvQix1QkFBdUI7RUFDekI7RUFDQTtJQUVVLHlCQUF5QjtJQUNqQyx5QkFBeUI7RUFDM0I7QUFDRjtBQUVBO0VBQ0U7SUFFVSx1QkFBdUI7SUFDL0IsdUJBQXVCO0VBQ3pCO0VBQ0E7SUFFVSx5QkFBeUI7SUFDakMseUJBQXlCO0VBQzNCO0FBQ0Y7QUFJQTtFQUNFO0VBQ0EsZUFBZTtFQUNmO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG5cbi5hcHAtaW5mbyBwe1xuIGNvbG9yOiAjNTI5Njg1O1xuIG1hcmdpbi1ib3R0b206IDAlO1xuIGZvbnQtc2l6ZTogMTZweDtcbiBmb250LXdlaWdodDogMjAwO1xufVxuI3Bob25lLCAjbmFtZXtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICM1Mjk2ODU7XG4gICAgY29sb3I6ICM1Mjk2ODU7XG4gICAgd2lkdGg6IDc1JTtcbiAgICBwYWRkaW5nOiA4cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIG1hcmdpbjogNHB4IDJweDtcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xufVxuLmdldC1vdHB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzUyOTY4NTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjNTI5Njg1O1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIHdpZHRoOiA0MCU7XG4gICAgcGFkZGluZzogOHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBtYXJnaW46IDhweCAycHg7XG59XG5cbi5jb250YWN0LWxlc3Mtb3JkZXItaDF7XG4gICAgY29sb3I6ICM1Mjk2ODU7XG4gICAgbWFyZ2luLWJvdHRvbTogMCU7XG4gICAgbWFyZ2luLXRvcDogMiU7XG4gICAgZm9udC1zaXplOiAxN3B4O1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG59XG5cbi5pZGluZS1ib29raW5nLXN0ZXB7XG4gICAgcGFkZGluZzogMyUgMTIlO1xufVxuICBzcGFue1xuICAgIGhlaWdodDogMTBweDtcbiAgICB3aWR0aDogMjBweDtcbiAgICBiYWNrZ3JvdW5kOiAjNTI5Njg1O1xuICAgIHBhZGRpbmc6IDVweCAxMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBjb2xvcjogd2hpdGU7XG4gIH1cbiAgLmlkaW5lLWJvb2tpbmctc3RlcCBwe1xuICAgIG1hcmdpbi10b3A6IDUlO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIGNvbG9yOiAjOWM5Njk2O1xuICB9XG4ucHJvbW90aW9uYWwtbXNne1xuICAgIGZvbnQtc2l6ZTogMTFweDtcbiAgICBjb2xvcjogZ3JleTtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIG1hcmdpbjogMCU7XG4gICAgbWFyZ2luLXRvcDogNSU7XG59XG4gIFxuXG5cblxuI2xvYWRpbmctYmFyLXNwaW5uZXIuc3Bpbm5lciB7XG4gIGxlZnQ6IDY1JTtcbiAgbWFyZ2luLWxlZnQ6IC0yMHB4O1xuICB0b3A6IDY4JTtcbiAgbWFyZ2luLXRvcDogLTIwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogMTkgIWltcG9ydGFudDtcbiAgLXdlYmtpdC1hbmltYXRpb246IGxvYWRpbmctYmFyLXNwaW5uZXIgNDAwbXMgbGluZWFyIGluZmluaXRlO1xuICAgICAgICAgIGFuaW1hdGlvbjogbG9hZGluZy1iYXItc3Bpbm5lciA0MDBtcyBsaW5lYXIgaW5maW5pdGU7XG59XG5cbiNsb2FkaW5nLWJhci1zcGlubmVyLnNwaW5uZXIgLnNwaW5uZXItaWNvbiB7XG4gIHdpZHRoOiAyMHB4O1xuICBoZWlnaHQ6IDIwcHg7XG4gIGJvcmRlcjogc29saWQgNHB4IHRyYW5zcGFyZW50O1xuICBib3JkZXItdG9wLWNvbG9yOiAjMDBDOEIxICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1sZWZ0LWNvbG9yOiAjMDBDOEIxICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cblxuQC13ZWJraXQta2V5ZnJhbWVzIGxvYWRpbmctYmFyLXNwaW5uZXIge1xuICAwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICB9XG4gIDEwMCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbiAgfVxufVxuXG5Aa2V5ZnJhbWVzIGxvYWRpbmctYmFyLXNwaW5uZXIge1xuICAwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICB9XG4gIDEwMCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbiAgfVxufVxuXG5cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzgwcHgpIGFuZCAobWluLXdpZHRoOiAzMjBweCkge1xuICAuYXBwLWluZm8gcHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICB9XG59XG5cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-login",
                templateUrl: "./login.component.html",
                styleUrls: ["./login.component.css"],
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _service_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] }, { type: _service_global_service__WEBPACK_IMPORTED_MODULE_4__["GlobalService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/otp-verify/otp-verify.component.ts":
/*!****************************************************!*\
  !*** ./src/app/otp-verify/otp-verify.component.ts ***!
  \****************************************************/
/*! exports provided: OtpVerifyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OtpVerifyComponent", function() { return OtpVerifyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _service_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/user.service */ "./src/app/service/user.service.ts");
/* harmony import */ var _service_global_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../service/global.service */ "./src/app/service/global.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");








function OtpVerifyComponent_div_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class OtpVerifyComponent {
    constructor(router, _userService, _globalService) {
        this.router = router;
        this._userService = _userService;
        this._globalService = _globalService;
    }
    ngOnInit() {
        // if(this._globalService.customerPhone){
        //   this.customerPhone=this._globalService.customerPhone
        // }else{
        //    return this.router.navigate(['/'], {queryParamsHandling : 'preserve'});
        // }
        if (localStorage.getItem('token')) {
            return this.router.navigate(['/menu'], { queryParamsHandling: 'preserve' });
        }
        // $('.digit-group').find('input').each(function() {
        //   $(this).attr('maxlength', 1);
        //   $(this).on('keyup', function(e) {
        //     var parent = $($(this).parent());
        //     if(e.keyCode === 8 || e.keyCode === 37) {
        //       var prev = parent.find('input#' + $(this).data('previous'));
        //       if(prev.length) {
        //         $(prev).select();
        //       }
        //     } else if((e.keyCode >= 48 && e.keyCode <= 57) || (e.keyCode >= 65 && e.keyCode <= 90) || (e.keyCode >= 96 && e.keyCode <= 105) || e.keyCode === 39) {
        //       var next = parent.find('input#' + $(this).data('next'));
        //       if(next.length) {
        //         $(next).select();
        //       } else {
        //         if(parent.data('autosubmit')) {
        //           parent.submit();
        //         }
        //       }
        //     }
        //   });
        // }); 
    }
    setFocus(value, nextElement) {
        if (value === 0 || value)
            nextElement.focus();
    }
    onEnter() {
        var otp = "";
        if (typeof this.input1 == 'number'
            && typeof this.input2 == 'number'
            && typeof this.input3 == 'number'
            && typeof this.input4 == 'number') {
            otp = `${this.input1}${this.input2}${this.input3}${this.input4}`;
            this.loading = true;
            this._userService.verifyOTP(parseInt(localStorage.getItem('customerPhone')), otp).subscribe({
                next: data => {
                    this.data = data;
                    console.log(this.data.body.data);
                    if (this.data.body.data === true) {
                        localStorage.setItem('otpStatus', 'true');
                        this._globalService.otpStatus = true;
                        this._globalService.token = data.headers.get('token');
                        localStorage.setItem('token', data.headers.get('token'));
                        this.loading = false;
                        this.router.navigate(['./menu'], { queryParamsHandling: 'preserve' });
                    }
                    else {
                        sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire('Oops...', 'Please enter the valid otp!', 'error');
                    }
                },
                error: error => {
                    this.loading = false;
                    if (error.status == 403) {
                        localStorage.clear();
                        sessionStorage.clear();
                        sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire('Oops...', 'Session Expired ! Please login again.', 'error');
                        this.router.navigate(['/'], { queryParamsHandling: 'preserve' });
                    }
                    else {
                        sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire('Oops...', `${error.error.info}`, 'error');
                    }
                }
            });
        }
        else {
            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire('Oops...', 'Please enter the valid otp!', 'error');
        }
    }
    resendOTP() {
        this._userService.resendOTP(parseInt(localStorage.getItem('customerPhone')), localStorage.getItem('customerName')).subscribe(data => {
            console.log(data);
        });
    }
}
OtpVerifyComponent.ɵfac = function OtpVerifyComponent_Factory(t) { return new (t || OtpVerifyComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_global_service__WEBPACK_IMPORTED_MODULE_4__["GlobalService"])); };
OtpVerifyComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: OtpVerifyComponent, selectors: [["app-otp-verify"]], decls: 31, vars: 6, consts: [[1, "container-fluid"], [1, "row"], [1, "col-sm-12", "logo-div"], ["src", "../../assets/image/logo.png", "alt", ""], [1, "col-sm-12", "app-info", "t-center"], [1, "col-sm-12", "t-center"], [1, "enter-otp-p"], [1, "col-sm-12", "otp-box", "t-center"], ["method", "get", "data-group-name", "digits", "data-autosubmit", "false", "autocomplete", "off", 1, "digit-group"], ["type", "number", "id", "digit-1", "name", "digit-1", "data-next", "digit-2", "tabIndex", "1", 3, "ngModel", "ngModelChange"], ["a", ""], ["type", "number", "id", "digit-2", "name", "digit-2", "data-next", "digit-3", "data-previous", "digit-1", "tabIndex", "2", 3, "ngModel", "ngModelChange"], ["b", ""], ["type", "number", "id", "digit-3", "name", "digit-3", "data-next", "digit-4", "data-previous", "digit-2", "tabIndex", "3", 3, "ngModel", "ngModelChange"], ["c", ""], ["type", "number", "id", "digit-4", "name", "digit-4", "data-next", "digit-5", "data-previous", "digit-3", "tabIndex", "4", 3, "ngModel", "ngModelChange"], ["d", ""], [1, "otp-verify-btn", 3, "click"], ["id", "loading-bar-spinner", "class", "spinner", 4, "ngIf"], [1, "resend", 3, "click"], ["id", "loading-bar-spinner", 1, "spinner"], [1, "spinner-icon"]], template: function OtpVerifyComponent_Template(rf, ctx) { if (rf & 1) {
        const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "A code was sent to verify your");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Enter your OTP code here");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "form", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "input", 9, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function OtpVerifyComponent_Template_input_ngModelChange_14_listener($event) { return ctx.input1 = $event; })("ngModelChange", function OtpVerifyComponent_Template_input_ngModelChange_14_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](17); return ctx.setFocus($event, _r2); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "input", 11, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function OtpVerifyComponent_Template_input_ngModelChange_16_listener($event) { return ctx.input2 = $event; })("ngModelChange", function OtpVerifyComponent_Template_input_ngModelChange_16_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](19); return ctx.setFocus($event, _r3); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "input", 13, 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function OtpVerifyComponent_Template_input_ngModelChange_18_listener($event) { return ctx.input3 = $event; })("ngModelChange", function OtpVerifyComponent_Template_input_ngModelChange_18_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](21); return ctx.setFocus($event, _r4); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "input", 15, 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function OtpVerifyComponent_Template_input_ngModelChange_20_listener($event) { return ctx.input4 = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OtpVerifyComponent_Template_button_click_22_listener() { return ctx.onEnter(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, OtpVerifyComponent_div_24_Template, 2, 0, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Didn't receive code? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OtpVerifyComponent_Template_span_click_28_listener() { return ctx.resendOTP(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Resend");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("mobile number ", ctx.customerPhone, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.input1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.input2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.input3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.input4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"]], styles: [".app-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\n    color: #529685;\n    margin-bottom: 0%;\n    font-size: 16px;\n    font-weight: 200;\n   }\n.enter-otp-p[_ngcontent-%COMP%]{\n    font-size: 14px;\n    color: #ab9898;\n    margin-top: 5%;\n}\n.otp-box[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{\n    border: 1px solid #529685;\n    width: 55px;\n    height: 55px;\n    padding: 0%;\n    margin: 1%;\n    border-radius: 10px;\n    padding: 5%;\n    color: #827474;\n    text-align: center;\n}\n.resend[_ngcontent-%COMP%]{\n    color: #529685;\n}\n.otp-verify-btn[_ngcontent-%COMP%]{\n    background-color: #529685;\n    border: 1px solid #529685;\n    color: #fff;\n    width: 40%;\n    padding: 8px;\n    text-align: center;\n    text-decoration: none;\n    display: inline-block;\n    font-size: 16px;\n    margin: 8px 2px;\n}\n.swal2-popup[_ngcontent-%COMP%]   .swal2-styled[_ngcontent-%COMP%]{\n    background-color: #529685 !important;\n}\n#loading-bar-spinner.spinner[_ngcontent-%COMP%] {\n    left: 65%;\n    margin-left: -20px;\n    top: 82%;\n    margin-top: -20px;\n    position: absolute;\n    z-index: 19 !important;\n    -webkit-animation: loading-bar-spinner 400ms linear infinite;\n            animation: loading-bar-spinner 400ms linear infinite;\n  }\n#loading-bar-spinner.spinner[_ngcontent-%COMP%]   .spinner-icon[_ngcontent-%COMP%] {\n    width: 20px;\n    height: 20px;\n    border: solid 4px transparent;\n    border-top-color: #00C8B1 !important;\n    border-left-color: #00C8B1 !important;\n    border-radius: 50%;\n  }\n@-webkit-keyframes loading-bar-spinner {\n    0% {\n      transform: rotate(0deg);\n      transform: rotate(0deg);\n    }\n    100% {\n      transform: rotate(360deg);\n      transform: rotate(360deg);\n    }\n  }\n@keyframes loading-bar-spinner {\n    0% {\n      transform: rotate(0deg);\n      transform: rotate(0deg);\n    }\n    100% {\n      transform: rotate(360deg);\n      transform: rotate(360deg);\n    }\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvb3RwLXZlcmlmeS9vdHAtdmVyaWZ5LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxjQUFjO0lBQ2QsaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZixnQkFBZ0I7R0FDakI7QUFDSDtJQUNJLGVBQWU7SUFDZixjQUFjO0lBQ2QsY0FBYztBQUNsQjtBQUNBO0lBQ0kseUJBQXlCO0lBQ3pCLFdBQVc7SUFDWCxZQUFZO0lBQ1osV0FBVztJQUNYLFVBQVU7SUFDVixtQkFBbUI7SUFDbkIsV0FBVztJQUNYLGNBQWM7SUFDZCxrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLGNBQWM7QUFDbEI7QUFDQTtJQUNJLHlCQUF5QjtJQUN6Qix5QkFBeUI7SUFDekIsV0FBVztJQUNYLFVBQVU7SUFDVixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLHFCQUFxQjtJQUNyQixxQkFBcUI7SUFDckIsZUFBZTtJQUNmLGVBQWU7QUFDbkI7QUFDQTtJQUNJLG9DQUFvQztBQUN4QztBQUtBO0lBQ0ksU0FBUztJQUNULGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixzQkFBc0I7SUFDdEIsNERBQTREO1lBQ3BELG9EQUFvRDtFQUM5RDtBQUVBO0lBQ0UsV0FBVztJQUNYLFlBQVk7SUFDWiw2QkFBNkI7SUFDN0Isb0NBQW9DO0lBQ3BDLHFDQUFxQztJQUNyQyxrQkFBa0I7RUFDcEI7QUFFQTtJQUNFO01BRVUsdUJBQXVCO01BQy9CLHVCQUF1QjtJQUN6QjtJQUNBO01BRVUseUJBQXlCO01BQ2pDLHlCQUF5QjtJQUMzQjtFQUNGO0FBRUE7SUFDRTtNQUVVLHVCQUF1QjtNQUMvQix1QkFBdUI7SUFDekI7SUFDQTtNQUVVLHlCQUF5QjtNQUNqQyx5QkFBeUI7SUFDM0I7RUFDRiIsImZpbGUiOiJzcmMvYXBwL290cC12ZXJpZnkvb3RwLXZlcmlmeS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFwcC1pbmZvIHB7XG4gICAgY29sb3I6ICM1Mjk2ODU7XG4gICAgbWFyZ2luLWJvdHRvbTogMCU7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGZvbnQtd2VpZ2h0OiAyMDA7XG4gICB9XG4uZW50ZXItb3RwLXB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGNvbG9yOiAjYWI5ODk4O1xuICAgIG1hcmdpbi10b3A6IDUlO1xufVxuLm90cC1ib3ggaW5wdXR7XG4gICAgYm9yZGVyOiAxcHggc29saWQgIzUyOTY4NTtcbiAgICB3aWR0aDogNTVweDtcbiAgICBoZWlnaHQ6IDU1cHg7XG4gICAgcGFkZGluZzogMCU7XG4gICAgbWFyZ2luOiAxJTtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIHBhZGRpbmc6IDUlO1xuICAgIGNvbG9yOiAjODI3NDc0O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5yZXNlbmR7XG4gICAgY29sb3I6ICM1Mjk2ODU7XG59XG4ub3RwLXZlcmlmeS1idG57XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzUyOTY4NTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjNTI5Njg1O1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIHdpZHRoOiA0MCU7XG4gICAgcGFkZGluZzogOHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBtYXJnaW46IDhweCAycHg7XG59XG4uc3dhbDItcG9wdXAgLnN3YWwyLXN0eWxlZHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTI5Njg1ICFpbXBvcnRhbnQ7XG59XG5cblxuXG5cbiNsb2FkaW5nLWJhci1zcGlubmVyLnNwaW5uZXIge1xuICAgIGxlZnQ6IDY1JTtcbiAgICBtYXJnaW4tbGVmdDogLTIwcHg7XG4gICAgdG9wOiA4MiU7XG4gICAgbWFyZ2luLXRvcDogLTIwcHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHotaW5kZXg6IDE5ICFpbXBvcnRhbnQ7XG4gICAgLXdlYmtpdC1hbmltYXRpb246IGxvYWRpbmctYmFyLXNwaW5uZXIgNDAwbXMgbGluZWFyIGluZmluaXRlO1xuICAgICAgICAgICAgYW5pbWF0aW9uOiBsb2FkaW5nLWJhci1zcGlubmVyIDQwMG1zIGxpbmVhciBpbmZpbml0ZTtcbiAgfVxuICBcbiAgI2xvYWRpbmctYmFyLXNwaW5uZXIuc3Bpbm5lciAuc3Bpbm5lci1pY29uIHtcbiAgICB3aWR0aDogMjBweDtcbiAgICBoZWlnaHQ6IDIwcHg7XG4gICAgYm9yZGVyOiBzb2xpZCA0cHggdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyLXRvcC1jb2xvcjogIzAwQzhCMSAhaW1wb3J0YW50O1xuICAgIGJvcmRlci1sZWZ0LWNvbG9yOiAjMDBDOEIxICFpbXBvcnRhbnQ7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB9XG4gIFxuICBALXdlYmtpdC1rZXlmcmFtZXMgbG9hZGluZy1iYXItc3Bpbm5lciB7XG4gICAgMCUge1xuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgICB9XG4gICAgMTAwJSB7XG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xuICAgIH1cbiAgfVxuICBcbiAgQGtleWZyYW1lcyBsb2FkaW5nLWJhci1zcGlubmVyIHtcbiAgICAwJSB7XG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICAgIH1cbiAgICAxMDAlIHtcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG4gICAgfVxuICB9Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OtpVerifyComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-otp-verify',
                templateUrl: './otp-verify.component.html',
                styleUrls: ['./otp-verify.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _service_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] }, { type: _service_global_service__WEBPACK_IMPORTED_MODULE_4__["GlobalService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/service/global.service.ts":
/*!*******************************************!*\
  !*** ./src/app/service/global.service.ts ***!
  \*******************************************/
/*! exports provided: GlobalService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GlobalService", function() { return GlobalService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class GlobalService {
    constructor() {
        this.customerPhone = null;
        this.loginStatus = false;
        this.otpStatus = false;
        this.customerName = '';
        this.token = '';
        this.cartItem = [];
    }
    init(encodedKey, idineUrl, navigate) {
        this.encodedKey = encodedKey;
        this.idineUrl = idineUrl || "https://devonlineorders.innosolv-idine.com/api/ContactLessCustomerService";
        let storedEncodedKey = localStorage.getItem('encodedKey');
        if (encodedKey && storedEncodedKey !== encodedKey.trim()) {
            localStorage.clear();
            sessionStorage.clear();
            localStorage.setItem('encodedKey', encodedKey.trim());
            // navigate(['/'], {queryParamsHandling : 'preserve'})
        }
    }
}
GlobalService.ɵfac = function GlobalService_Factory(t) { return new (t || GlobalService)(); };
GlobalService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: GlobalService, factory: GlobalService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GlobalService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/service/menu.service.ts":
/*!*****************************************!*\
  !*** ./src/app/service/menu.service.ts ***!
  \*****************************************/
/*! exports provided: MenuService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuService", function() { return MenuService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class MenuService {
    constructor() {
    }
}
MenuService.ɵfac = function MenuService_Factory(t) { return new (t || MenuService)(); };
MenuService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: MenuService, factory: MenuService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MenuService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/service/user.service.ts":
/*!*****************************************!*\
  !*** ./src/app/service/user.service.ts ***!
  \*****************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _service_global_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/global.service */ "./src/app/service/global.service.ts");





class UserService {
    constructor(http, _globalservice) {
        this.http = http;
        this._globalservice = _globalservice;
    }
    getOTP(customerPhone, customerName) {
        var body = {
            customerPhone,
            customerName
        };
        const headers = { 'Content-Type': 'application/json', 'encodedkey': this._globalservice.encodedKey };
        return this.http.post(this._globalservice.idineUrl + '/GetOTP', body, { headers });
    }
    verifyOTP(cust_phone, OTP) {
        const headers = { 'Content-Type': 'application/json', };
        return this.http.get(`${this._globalservice.idineUrl}/ValidateOTP?cust_phone=${cust_phone}&OTP=${OTP}`, { 'headers': new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json', 'encodedkey': this._globalservice.encodedKey }), observe: 'response' });
    }
    resendOTP(customerPhone, customerName) {
        var body = {
            customerPhone,
            customerName
        };
        const headers = { 'Content-Type': 'application/json', 'encodedkey': this._globalservice.encodedKey };
        return this.http.post(this._globalservice.idineUrl + '/ResendOTP', body, { headers });
    }
    getCustomerName(cust_phone) {
        const headers = { 'Content-Type': 'application/json', 'encodedkey': this._globalservice.encodedKey };
        return this.http.get(`${this._globalservice.idineUrl}/GetCustomerName?cust_phone=${cust_phone}`, { headers });
    }
    getMenuItems() {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'token': localStorage.getItem('token'),
            'encodedkey': this._globalservice.encodedKey
        });
        return this.http.get("https://devonlineorders.innosolv-idine.com/api/ContactLessCustomerService/GetMenu", { headers: headers });
    }
    placeOrder(body) {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Content-Type': 'application/json',
            'token': localStorage.getItem('token'),
            'encodedkey': this._globalservice.encodedKey
        });
        return this.http.post(this._globalservice.idineUrl + '/PlaceOrder', body, { headers });
    }
    modifyOrder(body) {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Content-Type': 'application/json',
            'token': localStorage.getItem('token'),
            'encodedkey': this._globalservice.encodedKey
        });
        return this.http.post(this._globalservice.idineUrl + '/ModifyOrder', body, { headers });
    }
    requestBill(OrderNumber) {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Content-Type': 'application/json',
            'token': localStorage.getItem('token'),
            'encodedkey': this._globalservice.encodedKey
        });
        return this.http.post(this._globalservice.idineUrl + '/RequestBill', { OrderNumber }, { headers });
    }
    updatePaymentInfo() {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Content-Type': 'application/json',
            'token': localStorage.getItem('token'),
            'encodedkey': this._globalservice.encodedKey
        });
        let payLoad = {};
        if (localStorage.getItem('billDetails')) {
            let details = JSON.parse(localStorage.getItem('billDetails'));
            payLoad = {
                "razorpay_payment_id": details.razorpay_payment_id,
                "razorpay_order_id": details.razorpay_order_id,
                "razorpay_signature": details.razorpay_signature,
                "status": "1",
                "SBillNumber": details.SBillNumber
            };
        }
        return this.http.post(this._globalservice.idineUrl + '/SettleBill', payLoad, { headers });
    }
}
UserService.ɵfac = function UserService_Factory(t) { return new (t || UserService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_service_global_service__WEBPACK_IMPORTED_MODULE_2__["GlobalService"])); };
UserService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: UserService, factory: UserService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }, { type: _service_global_service__WEBPACK_IMPORTED_MODULE_2__["GlobalService"] }]; }, null); })();


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

module.exports = __webpack_require__(/*! /Users/pravin/work/idine/idine-table-order/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map