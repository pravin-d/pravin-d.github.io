(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["menu-menu-module"],{

/***/ "./src/app/menu/menu-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/menu/menu-routing.module.ts ***!
  \*********************************************/
/*! exports provided: MenuRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuRoutingModule", function() { return MenuRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _menu_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu.component */ "./src/app/menu/menu.component.ts");





const routes = [{ path: '', component: _menu_component__WEBPACK_IMPORTED_MODULE_2__["MenuComponent"] }];
class MenuRoutingModule {
}
MenuRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MenuRoutingModule });
MenuRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function MenuRoutingModule_Factory(t) { return new (t || MenuRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MenuRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MenuRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/menu/menu.component.ts":
/*!****************************************!*\
  !*** ./src/app/menu/menu.component.ts ***!
  \****************************************/
/*! exports provided: MenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuComponent", function() { return MenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _service_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/user.service */ "./src/app/service/user.service.ts");
/* harmony import */ var _service_global_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../service/global.service */ "./src/app/service/global.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");







function MenuComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MenuComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Choose your dishes from the selection below Once ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Your order is place, a server will attend to you. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r25.branchName);
} }
function MenuComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MenuComponent_div_11_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r30); const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r29.redirect(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "View Order");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MenuComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MenuComponent_div_12_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r32); const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r31.redirecttobill(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Request Bill");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MenuComponent_div_13_div_2_div_1_div_4_button_9_Template(rf, ctx) { if (rf & 1) {
    const _r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MenuComponent_div_13_div_2_div_1_div_4_button_9_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r42); const item_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); return ctx_r40.addbtn(item_r37.SitemCode, item_r37.SubCategoryCode, item_r37.DisplayName, item_r37.Item_UOM[0].Rate); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "ADD +");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MenuComponent_div_13_div_2_div_1_div_4_button_10_Template(rf, ctx) { if (rf & 1) {
    const _r45 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MenuComponent_div_13_div_2_div_1_div_4_button_10_Template_span_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r45); const item_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); return ctx_r43.decreaseQnt(item_r37.SitemCode, item_r37.SubCategoryCode); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "- \u00A0 \u00A0\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MenuComponent_div_13_div_2_div_1_div_4_button_10_Template_span_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r45); const item_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); return ctx_r46.increaseQnt(item_r37.SitemCode, item_r37.SubCategoryCode); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\u00A0\u00A0\u00A0+");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r37.Item_UOM[0].Qty);
} }
function MenuComponent_div_13_div_2_div_1_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, MenuComponent_div_13_div_2_div_1_div_4_button_9_Template, 2, 0, "button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, MenuComponent_div_13_div_2_div_1_div_4_button_10_Template, 7, 1, "button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r37 = ctx.$implicit;
    const data_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("id", "collapseOne", data_r34.SubCategoryCode, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r37.DisplayName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u20B9", item_r37.Item_UOM[0].Rate, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r37.Item_UOM[0].Qty == 0 || item_r37.Item_UOM[0].Qty < 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r37.Item_UOM[0].Qty > 0);
} }
function MenuComponent_div_13_div_2_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, MenuComponent_div_13_div_2_div_1_div_4_Template, 11, 5, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("href", "#collapseOne", data_r34.SubCategoryCode, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", data_r34.SubCategory, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", data_r34.Items);
} }
function MenuComponent_div_13_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MenuComponent_div_13_div_2_div_1_Template, 5, 3, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r34 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", data_r34.Items.length > 0);
} }
function MenuComponent_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MenuComponent_div_13_div_2_Template, 2, 1, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r28.menuData);
} }
class MenuComponent {
    constructor(router, _userService, _globalService) {
        this.router = router;
        this._userService = _userService;
        this._globalService = _globalService;
        this.menuSelect = false;
        this.collapseOne = 0;
        this.collapseTwo = 0;
        this.collapseThree = 0;
        this.collapseFour = 0;
        this.count = 0;
        this.totalamount = 0;
        this.cartItems = [];
        this.orderID = "";
    }
    ngOnInit() {
        this.count = 1;
        this.loading = true;
        this.placeorderShow = false;
        if (localStorage.getItem("token") == "") {
            return this.router.navigate(["/"], { queryParamsHandling: "preserve" });
        }
        this.orderID = sessionStorage.getItem("orderID");
        this.customerName = localStorage.getItem("customerName");
        if (sessionStorage.getItem("menuData")) {
            this.menuData = JSON.parse(sessionStorage.getItem("menuData"));
            this.branchName = sessionStorage.getItem("branchName");
            for (let i = 0; i < this.menuData.length; i++) {
                for (let j = 0; j < this.menuData[i].Items.length; j++) {
                    if (this.menuData[i].Items[j].Item_UOM[0].Qty > 0) {
                        this.placeorderShow = true;
                    }
                }
            }
            this.loading = false;
        }
        else {
            //get menu items
            this._userService.getMenuItems().subscribe({
                next: (data) => {
                    this.menuData = data;
                    console.log(this.menuData);
                    if (this.menuData.info === "success") {
                        this._globalService.customerName = this.customerName;
                        sessionStorage.setItem("floorCode", this.menuData.data[0].floorCode);
                        this.branchName = this.menuData.data[0].BranchName;
                        this.menuData = this.menuData.data[0].Categories;
                        sessionStorage.setItem("menuData", JSON.stringify(this.menuData));
                        sessionStorage.setItem("branchName", this.branchName);
                        this.loading = false;
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
                    else if (error && error.error && error.error.data) {
                        sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire('Oops...', `${error.error.data}`, 'error');
                    }
                    else if (error && error.error && error.error.info) {
                        sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire('Oops...', `${error.error.info}`, 'error');
                    }
                    else {
                        sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire('Oops...', 'Invalid Action', 'error');
                    }
                },
            });
        }
    }
    checkTotalAmount() {
        this.totalamount = 0;
        for (let i = 0; i < this.menuData.length; i++) {
            for (let j = 0; j < this.menuData[i].Items.length; j++) {
                if (this.menuData[i].Items[j].Item_UOM[0].Qty > 0) {
                    this.totalamount +=
                        this.menuData[i].Items[j].Item_UOM[0].Rate *
                            this.menuData[i].Items[j].Item_UOM[0].Qty;
                }
            }
        }
        // this.totalamount +=this.tax
        if (this.totalamount === 0) {
            this.placeorderShow = false;
        }
    }
    addbtn(SitemCode, SubCategoryCode, name, rate) {
        for (let i = 0; i < this.menuData.length; i++) {
            for (let j = 0; j < this.menuData[i].Items.length; j++) {
                if (this.menuData[i].Items[j].SitemCode === SitemCode &&
                    this.menuData[i].Items[j].SubCategoryCode === SubCategoryCode) {
                    this.menuData[i].Items[j].Item_UOM[0].Qty = 1;
                    sessionStorage.setItem("menuData", JSON.stringify(this.menuData));
                    this.placeorderShow = true;
                }
            }
        }
    }
    increaseQnt(SitemCode, SubCategoryCode) {
        for (let i = 0; i < this.menuData.length; i++) {
            for (let j = 0; j < this.menuData[i].Items.length; j++) {
                if (this.menuData[i].Items[j].SitemCode === SitemCode &&
                    this.menuData[i].Items[j].SubCategoryCode === SubCategoryCode) {
                    this.menuData[i].Items[j].Item_UOM[0].Qty += 1;
                    sessionStorage.setItem("menuData", JSON.stringify(this.menuData));
                }
            }
        }
    }
    decreaseQnt(SitemCode, SubCategoryCode) {
        for (let i = 0; i < this.menuData.length; i++) {
            for (let j = 0; j < this.menuData[i].Items.length; j++) {
                if (this.menuData[i].Items[j].SitemCode === SitemCode &&
                    this.menuData[i].Items[j].SubCategoryCode === SubCategoryCode) {
                    if (this.menuData[i].Items[j].Item_UOM[0].Qty == 0) {
                        this.checkTotalAmount();
                        break;
                    }
                    this.menuData[i].Items[j].Item_UOM[0].Qty -= 1;
                    sessionStorage.setItem("menuData", JSON.stringify(this.menuData));
                    this.checkTotalAmount();
                }
            }
        }
    }
    redirect() {
        this.router.navigate(["/orders"], { queryParamsHandling: "preserve" });
    }
    redirecttobill() {
        this.router.navigate(["/feedback"], { queryParamsHandling: "preserve" });
    }
    logout() {
        sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire({
            title: "Logout",
            text: "Are you sure you want to logout ?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: 'Yes, Logout'
        })
            .then((result) => {
            if (result.value) {
                localStorage.clear();
                sessionStorage.clear();
                this.router.navigate(['/'], { queryParamsHandling: 'preserve' });
            }
        });
    }
}
MenuComponent.ɵfac = function MenuComponent_Factory(t) { return new (t || MenuComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_global_service__WEBPACK_IMPORTED_MODULE_4__["GlobalService"])); };
MenuComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MenuComponent, selectors: [["app-menu"]], decls: 14, vars: 6, consts: [["id", "loading-bar-spinner", "class", "spinner", 4, "ngIf"], [1, "container-fluid"], [1, "row"], [1, "col-xs-4"], ["src", "../../assets/image/logo.png", "alt", ""], [1, "col-xs-4", 2, "margin", "auto"], [1, "welcom-people"], [1, "fa", "fa-sign-out", 2, "color", "red", 3, "click"], ["class", "res-section", 4, "ngIf"], ["class", "row", 4, "ngIf"], ["id", "loading-bar-spinner", 1, "spinner"], [1, "spinner-icon"], [1, "res-section"], [1, "row", "res-desc"], [1, "col-sm-12", "p-0"], [1, "row", "t-center", "choose-item-desc"], [1, "col-sm-12"], [1, "view-order", 3, "click"], [1, "col-sm-12", "menu-scroll"], ["id", "accordion", 4, "ngFor", "ngForOf"], ["id", "accordion"], ["class", "card", 4, "ngIf"], [1, "card"], [1, "card-header", "t-center"], ["data-toggle", "collapse", 1, "card-link", 3, "href"], ["class", "collapse", "data-parent", "#accordion", 3, "id", 4, "ngFor", "ngForOf"], ["data-parent", "#accordion", 1, "collapse", 3, "id"], [1, "card-body", 2, "height", "70px"], ["id", "content"], ["id", "dishes"], ["id", "add"], [3, "click", 4, "ngIf"], [4, "ngIf"], [3, "click"], [2, "margin-left", "8px", 3, "click"]], template: function MenuComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, MenuComponent_div_0_Template, 2, 0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MenuComponent_Template_i_click_9_listener() { return ctx.logout(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, MenuComponent_div_10_Template, 11, 1, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, MenuComponent_div_11_Template, 3, 0, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, MenuComponent_div_12_Template, 3, 0, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, MenuComponent_div_13_Template, 3, 1, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Welcome ", ctx.customerName, "!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.menuSelect);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.placeorderShow);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.orderID);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.loading);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"]], styles: [".header-section-2[_ngcontent-%COMP%] {\n  display: -webkit-inline-box;\n  margin-top: 2%;\n}\n\n.header-section-2[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  margin-left: 20%;\n}\n\n.welcom-people[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: orange;\n  font-weight: 600;\n  margin: -10px;\n}\n\n.res-desc[_ngcontent-%COMP%] {\n  margin-top: 15px;\n  padding: 2%;\n}\n\n.res-desc[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: #529685;\n  font-weight: 600;\n  margin: 0 auto;\n  text-align: center;\n}\n\n.res-desc[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: orange;\n}\n\n.choose-item-desc[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #ad9696;\n}\n\n.choose-item-desc[_ngcontent-%COMP%] {\n  margin: auto;\n}\n\n.card-header[_ngcontent-%COMP%] {\n  padding: 0.35rem 0.35rem !important;\n  margin-bottom: 0px !important;\n}\n\n.card[_ngcontent-%COMP%] {\n  background-color: #529685;\n  margin-bottom: 1.5%;\n}\n\na.card-link[_ngcontent-%COMP%] {\n  color: #fff;\n  font-size: 16px;\n  font-weight: 500;\n}\n\ndiv#content[_ngcontent-%COMP%] {\n  width: 100%;\n  margin: 0 auto;\n}\n\ndiv#dishes[_ngcontent-%COMP%] {\n  float: left;\n}\n\ndiv#add[_ngcontent-%COMP%] {\n  float: right;\n}\n\n#add[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  width: 110px;\n  height: 32px;\n  text-align: center;\n  background: orange;\n  border: none;\n  color: #fff;\n  font-size: 12px;\n  font-weight: 600;\n}\n\n#dishes[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  color: orange;\n  font-size: 12px;\n  font-weight: 800;\n}\n\n.item-desc[_ngcontent-%COMP%] {\n  margin-top: 13%;\n  font-size: 11px;\n  color: #bba3a3;\n  font-weight: 500;\n}\n\n#dishes[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #529685;\n  font-weight: 600;\n  width: 200px;\n  margin: 0;\n}\n\n.card-body[_ngcontent-%COMP%] {\n  background: #fff;\n  padding: 1%;\n  padding-top: 5%;\n}\n\n.menu-scroll[_ngcontent-%COMP%] {\n  overflow-x: scroll;\n  height: 550px;\n  margin-top: 3%;\n}\n\n#loading-bar-spinner.spinner[_ngcontent-%COMP%] {\n  left: 50%;\n  margin-left: -20px;\n  top: 50%;\n  margin-top: -20px;\n  position: absolute;\n  z-index: 19 !important;\n  -webkit-animation: loading-bar-spinner 400ms linear infinite;\n  animation: loading-bar-spinner 400ms linear infinite;\n}\n\n#loading-bar-spinner.spinner[_ngcontent-%COMP%]   .spinner-icon[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border: solid 4px transparent;\n  border-top-color: #00c8b1 !important;\n  border-left-color: #00c8b1 !important;\n  border-radius: 50%;\n}\n\n@-webkit-keyframes loading-bar-spinner {\n  0% {\n    transform: rotate(0deg);\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n}\n\n@keyframes loading-bar-spinner {\n  0% {\n    transform: rotate(0deg);\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n}\n\n.view-order[_ngcontent-%COMP%] {\n  width: 200px;\n  border: 1px solid grey;\n  background: none;\n  color: #529685;\n  margin: 0 auto;\n  font-size: 15px;\n  font-weight: 500;\n  height: 35px;\n  margin-top: 2%;\n}\n\n@media screen and (max-width: 380px) and (min-width: 320px) {\n  .choose-item-desc[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 10px !important;\n  }\n  .res-desc[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 14px !important;\n  }\n  .welcom-people[_ngcontent-%COMP%] {\n    font-size: 14px !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVudS9tZW51LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSwyQkFBMkI7RUFDM0IsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFDQTtFQUNFLGVBQWU7RUFDZixhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLGFBQWE7QUFDZjs7QUFDQTtFQUNFLGdCQUFnQjtFQUNoQixXQUFXO0FBQ2I7O0FBQ0E7RUFDRSxlQUFlO0VBQ2YsY0FBYztFQUNkLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2Qsa0JBQWtCO0FBQ3BCOztBQUNBO0VBQ0UsZUFBZTtFQUNmLGFBQWE7QUFDZjs7QUFDQTtFQUNFLGVBQWU7RUFDZixjQUFjO0FBQ2hCOztBQUNBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsbUNBQW1DO0VBQ25DLDZCQUE2QjtBQUMvQjs7QUFDQTtFQUNFLHlCQUF5QjtFQUN6QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsZUFBZTtFQUNmLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxjQUFjO0FBQ2hCOztBQUNBO0VBQ0UsV0FBVztBQUNiOztBQUNBO0VBQ0UsWUFBWTtBQUNkOztBQUNBO0VBQ0UsWUFBWTtFQUNaLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixXQUFXO0VBQ1gsZUFBZTtFQUNmLGdCQUFnQjtBQUNsQjs7QUFDQTtFQUNFLFNBQVM7RUFDVCxhQUFhO0VBQ2IsZUFBZTtFQUNmLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixlQUFlO0VBQ2YsY0FBYztFQUNkLGdCQUFnQjtBQUNsQjs7QUFDQTtFQUNFLGVBQWU7RUFDZixjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixTQUFTO0FBQ1g7O0FBQ0E7RUFDRSxnQkFBZ0I7RUFDaEIsV0FBVztFQUNYLGVBQWU7QUFDakI7O0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxTQUFTO0VBQ1Qsa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLHNCQUFzQjtFQUN0Qiw0REFBNEQ7RUFDNUQsb0RBQW9EO0FBQ3REOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWiw2QkFBNkI7RUFDN0Isb0NBQW9DO0VBQ3BDLHFDQUFxQztFQUNyQyxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRTtJQUVFLHVCQUF1QjtJQUN2Qix1QkFBdUI7RUFDekI7RUFDQTtJQUVFLHlCQUF5QjtJQUN6Qix5QkFBeUI7RUFDM0I7QUFDRjs7QUFFQTtFQUNFO0lBRUUsdUJBQXVCO0lBQ3ZCLHVCQUF1QjtFQUN6QjtFQUNBO0lBRUUseUJBQXlCO0lBQ3pCLHlCQUF5QjtFQUMzQjtBQUNGOztBQUVBO0VBQ0UsWUFBWTtFQUNaLHNCQUFzQjtFQUN0QixnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLGNBQWM7RUFDZCxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixjQUFjO0FBQ2hCOztBQUVBO0VBQ0U7SUFDRSwwQkFBMEI7RUFDNUI7RUFDQTtJQUNFLDBCQUEwQjtFQUM1QjtFQUNBO0lBQ0UsMEJBQTBCO0VBQzVCO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9tZW51L21lbnUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkZXItc2VjdGlvbi0yIHtcbiAgZGlzcGxheTogLXdlYmtpdC1pbmxpbmUtYm94O1xuICBtYXJnaW4tdG9wOiAyJTtcbn1cblxuLmhlYWRlci1zZWN0aW9uLTIgaW1nIHtcbiAgbWFyZ2luLWxlZnQ6IDIwJTtcbn1cbi53ZWxjb20tcGVvcGxlIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBjb2xvcjogb3JhbmdlO1xuICBmb250LXdlaWdodDogNjAwO1xuICBtYXJnaW46IC0xMHB4O1xufVxuLnJlcy1kZXNjIHtcbiAgbWFyZ2luLXRvcDogMTVweDtcbiAgcGFkZGluZzogMiU7XG59XG4ucmVzLWRlc2MgaDEge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGNvbG9yOiAjNTI5Njg1O1xuICBmb250LXdlaWdodDogNjAwO1xuICBtYXJnaW46IDAgYXV0bztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLnJlcy1kZXNjIHAge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiBvcmFuZ2U7XG59XG4uY2hvb3NlLWl0ZW0tZGVzYyBwIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBjb2xvcjogI2FkOTY5Njtcbn1cbi5jaG9vc2UtaXRlbS1kZXNjIHtcbiAgbWFyZ2luOiBhdXRvO1xufVxuXG4uY2FyZC1oZWFkZXIge1xuICBwYWRkaW5nOiAwLjM1cmVtIDAuMzVyZW0gIWltcG9ydGFudDtcbiAgbWFyZ2luLWJvdHRvbTogMHB4ICFpbXBvcnRhbnQ7XG59XG4uY2FyZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM1Mjk2ODU7XG4gIG1hcmdpbi1ib3R0b206IDEuNSU7XG59XG5cbmEuY2FyZC1saW5rIHtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuZGl2I2NvbnRlbnQge1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luOiAwIGF1dG87XG59XG5kaXYjZGlzaGVzIHtcbiAgZmxvYXQ6IGxlZnQ7XG59XG5kaXYjYWRkIHtcbiAgZmxvYXQ6IHJpZ2h0O1xufVxuI2FkZCBidXR0b24ge1xuICB3aWR0aDogMTEwcHg7XG4gIGhlaWdodDogMzJweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kOiBvcmFuZ2U7XG4gIGJvcmRlcjogbm9uZTtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cbiNkaXNoZXMgcCB7XG4gIG1hcmdpbjogMDtcbiAgY29sb3I6IG9yYW5nZTtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogODAwO1xufVxuXG4uaXRlbS1kZXNjIHtcbiAgbWFyZ2luLXRvcDogMTMlO1xuICBmb250LXNpemU6IDExcHg7XG4gIGNvbG9yOiAjYmJhM2EzO1xuICBmb250LXdlaWdodDogNTAwO1xufVxuI2Rpc2hlcyBoMSB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgY29sb3I6ICM1Mjk2ODU7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIHdpZHRoOiAyMDBweDtcbiAgbWFyZ2luOiAwO1xufVxuLmNhcmQtYm9keSB7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIHBhZGRpbmc6IDElO1xuICBwYWRkaW5nLXRvcDogNSU7XG59XG4ubWVudS1zY3JvbGwge1xuICBvdmVyZmxvdy14OiBzY3JvbGw7XG4gIGhlaWdodDogNTUwcHg7XG4gIG1hcmdpbi10b3A6IDMlO1xufVxuXG4jbG9hZGluZy1iYXItc3Bpbm5lci5zcGlubmVyIHtcbiAgbGVmdDogNTAlO1xuICBtYXJnaW4tbGVmdDogLTIwcHg7XG4gIHRvcDogNTAlO1xuICBtYXJnaW4tdG9wOiAtMjBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiAxOSAhaW1wb3J0YW50O1xuICAtd2Via2l0LWFuaW1hdGlvbjogbG9hZGluZy1iYXItc3Bpbm5lciA0MDBtcyBsaW5lYXIgaW5maW5pdGU7XG4gIGFuaW1hdGlvbjogbG9hZGluZy1iYXItc3Bpbm5lciA0MDBtcyBsaW5lYXIgaW5maW5pdGU7XG59XG5cbiNsb2FkaW5nLWJhci1zcGlubmVyLnNwaW5uZXIgLnNwaW5uZXItaWNvbiB7XG4gIHdpZHRoOiA0MHB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIGJvcmRlcjogc29saWQgNHB4IHRyYW5zcGFyZW50O1xuICBib3JkZXItdG9wLWNvbG9yOiAjMDBjOGIxICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1sZWZ0LWNvbG9yOiAjMDBjOGIxICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cblxuQC13ZWJraXQta2V5ZnJhbWVzIGxvYWRpbmctYmFyLXNwaW5uZXIge1xuICAwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgfVxuICAxMDAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xuICB9XG59XG5cbkBrZXlmcmFtZXMgbG9hZGluZy1iYXItc3Bpbm5lciB7XG4gIDAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICB9XG4gIDEwMCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG4gIH1cbn1cblxuLnZpZXctb3JkZXIge1xuICB3aWR0aDogMjAwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGdyZXk7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG4gIGNvbG9yOiAjNTI5Njg1O1xuICBtYXJnaW46IDAgYXV0bztcbiAgZm9udC1zaXplOiAxNXB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBoZWlnaHQ6IDM1cHg7XG4gIG1hcmdpbi10b3A6IDIlO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzODBweCkgYW5kIChtaW4td2lkdGg6IDMyMHB4KSB7XG4gIC5jaG9vc2UtaXRlbS1kZXNjIHAge1xuICAgIGZvbnQtc2l6ZTogMTBweCAhaW1wb3J0YW50O1xuICB9XG4gIC5yZXMtZGVzYyBoMSB7XG4gICAgZm9udC1zaXplOiAxNHB4ICFpbXBvcnRhbnQ7XG4gIH1cbiAgLndlbGNvbS1wZW9wbGUge1xuICAgIGZvbnQtc2l6ZTogMTRweCAhaW1wb3J0YW50O1xuICB9XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MenuComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-menu",
                templateUrl: "./menu.component.html",
                styleUrls: ["./menu.component.css"],
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _service_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] }, { type: _service_global_service__WEBPACK_IMPORTED_MODULE_4__["GlobalService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/menu/menu.module.ts":
/*!*************************************!*\
  !*** ./src/app/menu/menu.module.ts ***!
  \*************************************/
/*! exports provided: MenuModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuModule", function() { return MenuModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _menu_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu-routing.module */ "./src/app/menu/menu-routing.module.ts");
/* harmony import */ var _menu_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menu.component */ "./src/app/menu/menu.component.ts");





class MenuModule {
}
MenuModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MenuModule });
MenuModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function MenuModule_Factory(t) { return new (t || MenuModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _menu_routing_module__WEBPACK_IMPORTED_MODULE_2__["MenuRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MenuModule, { declarations: [_menu_component__WEBPACK_IMPORTED_MODULE_3__["MenuComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _menu_routing_module__WEBPACK_IMPORTED_MODULE_2__["MenuRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MenuModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_menu_component__WEBPACK_IMPORTED_MODULE_3__["MenuComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _menu_routing_module__WEBPACK_IMPORTED_MODULE_2__["MenuRoutingModule"]
                ]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=menu-menu-module-es2015.js.map