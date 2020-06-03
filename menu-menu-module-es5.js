function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["menu-menu-module"], {
  /***/
  "./src/app/menu/menu-routing.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/menu/menu-routing.module.ts ***!
    \*********************************************/

  /*! exports provided: MenuRoutingModule */

  /***/
  function srcAppMenuMenuRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MenuRoutingModule", function () {
      return MenuRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _menu_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./menu.component */
    "./src/app/menu/menu.component.ts");

    var routes = [{
      path: '',
      component: _menu_component__WEBPACK_IMPORTED_MODULE_2__["MenuComponent"]
    }];

    var MenuRoutingModule = function MenuRoutingModule() {
      _classCallCheck(this, MenuRoutingModule);
    };

    MenuRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: MenuRoutingModule
    });
    MenuRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function MenuRoutingModule_Factory(t) {
        return new (t || MenuRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MenuRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MenuRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/menu/menu.component.ts":
  /*!****************************************!*\
    !*** ./src/app/menu/menu.component.ts ***!
    \****************************************/

  /*! exports provided: MenuComponent */

  /***/
  function srcAppMenuMenuComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MenuComponent", function () {
      return MenuComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! sweetalert2 */
    "./node_modules/sweetalert2/dist/sweetalert2.all.js");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_1___default =
    /*#__PURE__*/
    __webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _service_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../service/user.service */
    "./src/app/service/user.service.ts");
    /* harmony import */


    var _service_global_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../service/global.service */
    "./src/app/service/global.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function MenuComponent_div_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function MenuComponent_div_10_Template(rf, ctx) {
      if (rf & 1) {
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
      }

      if (rf & 2) {
        var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r4.branchName);
      }
    }

    function MenuComponent_div_11_Template(rf, ctx) {
      if (rf & 1) {
        var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MenuComponent_div_11_Template_button_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);

          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r8.redirect();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "View Order");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function MenuComponent_div_12_Template(rf, ctx) {
      if (rf & 1) {
        var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MenuComponent_div_12_Template_button_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11);

          var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r10.redirecttobill();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Request Bill");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function MenuComponent_div_13_div_2_div_1_div_4_button_9_Template(rf, ctx) {
      if (rf & 1) {
        var _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MenuComponent_div_13_div_2_div_1_div_4_button_9_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21);

          var item_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);

          return ctx_r19.addbtn(item_r16.SitemCode, item_r16.SubCategoryCode, item_r16.DisplayName, item_r16.Item_UOM[0].Rate);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "ADD +");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function MenuComponent_div_13_div_2_div_1_div_4_button_10_Template(rf, ctx) {
      if (rf & 1) {
        var _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MenuComponent_div_13_div_2_div_1_div_4_button_10_Template_span_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r24);

          var item_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);

          return ctx_r22.decreaseQnt(item_r16.SitemCode, item_r16.SubCategoryCode);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "- \xA0 \xA0\xA0");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MenuComponent_div_13_div_2_div_1_div_4_button_10_Template_span_click_5_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r24);

          var item_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);

          return ctx_r25.increaseQnt(item_r16.SitemCode, item_r16.SubCategoryCode);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\xA0\xA0\xA0+");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r16.Item_UOM[0].Qty);
      }
    }

    function MenuComponent_div_13_div_2_div_1_div_4_Template(rf, ctx) {
      if (rf & 1) {
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
      }

      if (rf & 2) {
        var item_r16 = ctx.$implicit;

        var data_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("id", "collapseOne", data_r13.SubCategoryCode, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r16.DisplayName);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u20B9", item_r16.Item_UOM[0].Rate, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r16.Item_UOM[0].Qty == 0 || item_r16.Item_UOM[0].Qty < 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r16.Item_UOM[0].Qty > 0);
      }
    }

    function MenuComponent_div_13_div_2_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, MenuComponent_div_13_div_2_div_1_div_4_Template, 11, 5, "div", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var data_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("href", "#collapseOne", data_r13.SubCategoryCode, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", data_r13.SubCategory, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", data_r13.Items);
      }
    }

    function MenuComponent_div_13_div_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MenuComponent_div_13_div_2_div_1_Template, 5, 3, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var data_r13 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", data_r13.Items.length > 0);
      }
    }

    function MenuComponent_div_13_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MenuComponent_div_13_div_2_Template, 2, 1, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r7.menuData);
      }
    }

    var MenuComponent =
    /*#__PURE__*/
    function () {
      function MenuComponent(router, _userService, _globalService) {
        _classCallCheck(this, MenuComponent);

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
        this.orderID = '';
      }

      _createClass(MenuComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.count = 1;
          this.loading = true;
          this.placeorderShow = false;

          if (localStorage.getItem('token') == "") {
            return this.router.navigate(['/'], {
              queryParamsHandling: 'preserve'
            });
          }

          this.orderID = sessionStorage.getItem('orderID');
          this.customerName = localStorage.getItem('customerName');

          if (sessionStorage.getItem('menuData')) {
            this.menuData = JSON.parse(sessionStorage.getItem('menuData'));
            this.branchName = sessionStorage.getItem('branchName');

            for (var i = 0; i < this.menuData.length; i++) {
              for (var j = 0; j < this.menuData[i].Items.length; j++) {
                if (this.menuData[i].Items[j].Item_UOM[0].Qty > 0) {
                  this.placeorderShow = true;
                }
              }
            }

            this.loading = false;
          } else {
            //get menu items
            this._userService.getMenuItems().subscribe({
              next: function next(data) {
                _this.menuData = data;
                console.log(_this.menuData);

                if (_this.menuData.info === "success") {
                  _this._globalService.customerName = _this.customerName;
                  sessionStorage.setItem("floorCode", _this.menuData.data[0].floorCode);
                  _this.branchName = _this.menuData.data[0].BranchName;
                  _this.menuData = _this.menuData.data[0].Categories;
                  sessionStorage.setItem("menuData", JSON.stringify(_this.menuData));
                  sessionStorage.setItem("branchName", _this.branchName);
                  _this.loading = false;
                }
              },
              error: function error(_error) {
                _this.loading = false;

                if (_error.status == 403) {
                  localStorage.clear();
                  sessionStorage.clear();
                  sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire('Oops...', 'Session Expired ! Please login again.', 'error');

                  _this.router.navigate(['/'], {
                    queryParamsHandling: 'preserve'
                  });
                } else {
                  sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire('Oops...', "".concat(_error.error.info), 'error');
                }
              }
            });
          }
        }
      }, {
        key: "checkTotalAmount",
        value: function checkTotalAmount() {
          this.totalamount = 0;

          for (var i = 0; i < this.menuData.length; i++) {
            for (var j = 0; j < this.menuData[i].Items.length; j++) {
              if (this.menuData[i].Items[j].Item_UOM[0].Qty > 0) {
                this.totalamount += this.menuData[i].Items[j].Item_UOM[0].Rate * this.menuData[i].Items[j].Item_UOM[0].Qty;
              }
            }
          } // this.totalamount +=this.tax


          if (this.totalamount === 0) {
            this.placeorderShow = false;
          }
        }
      }, {
        key: "addbtn",
        value: function addbtn(SitemCode, SubCategoryCode, name, rate) {
          for (var i = 0; i < this.menuData.length; i++) {
            for (var j = 0; j < this.menuData[i].Items.length; j++) {
              if (this.menuData[i].Items[j].SitemCode === SitemCode && this.menuData[i].Items[j].SubCategoryCode === SubCategoryCode) {
                this.menuData[i].Items[j].Item_UOM[0].Qty = 1;
                sessionStorage.setItem("menuData", JSON.stringify(this.menuData));
                this.placeorderShow = true;
              }
            }
          }
        }
      }, {
        key: "increaseQnt",
        value: function increaseQnt(SitemCode, SubCategoryCode) {
          for (var i = 0; i < this.menuData.length; i++) {
            for (var j = 0; j < this.menuData[i].Items.length; j++) {
              if (this.menuData[i].Items[j].SitemCode === SitemCode && this.menuData[i].Items[j].SubCategoryCode === SubCategoryCode) {
                this.menuData[i].Items[j].Item_UOM[0].Qty += 1;
                sessionStorage.setItem("menuData", JSON.stringify(this.menuData));
              }
            }
          }
        }
      }, {
        key: "decreaseQnt",
        value: function decreaseQnt(SitemCode, SubCategoryCode) {
          for (var i = 0; i < this.menuData.length; i++) {
            for (var j = 0; j < this.menuData[i].Items.length; j++) {
              if (this.menuData[i].Items[j].SitemCode === SitemCode && this.menuData[i].Items[j].SubCategoryCode === SubCategoryCode) {
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
      }, {
        key: "redirect",
        value: function redirect() {
          this.router.navigate(['/orders'], {
            queryParamsHandling: 'preserve'
          });
        }
      }, {
        key: "redirecttobill",
        value: function redirecttobill() {
          this.router.navigate(['/feedback'], {
            queryParamsHandling: 'preserve'
          });
        }
      }, {
        key: "logout",
        value: function logout() {
          localStorage.clear();
          sessionStorage.clear();
          this.router.navigate(['/'], {
            queryParamsHandling: 'preserve'
          });
        }
      }]);

      return MenuComponent;
    }();

    MenuComponent.ɵfac = function MenuComponent_Factory(t) {
      return new (t || MenuComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_global_service__WEBPACK_IMPORTED_MODULE_4__["GlobalService"]));
    };

    MenuComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MenuComponent,
      selectors: [["app-menu"]],
      decls: 14,
      vars: 6,
      consts: [["id", "loading-bar-spinner", "class", "spinner", 4, "ngIf"], [1, "container-fluid"], [1, "row"], [1, "col-xs-4"], ["src", "../../assets/image/logo.png", "alt", ""], [1, "col-xs-4", 2, "margin", "auto"], [1, "welcom-people"], [1, "fa", "fa-sign-out", 2, "color", "red", 3, "click"], ["class", "res-section", 4, "ngIf"], ["class", "row", 4, "ngIf"], ["id", "loading-bar-spinner", 1, "spinner"], [1, "spinner-icon"], [1, "res-section"], [1, "row", "res-desc"], [1, "col-sm-12", "p-0"], [1, "row", "t-center", "choose-item-desc"], [1, "col-sm-12"], [1, "view-order", 3, "click"], [1, "col-sm-12", "menu-scroll"], ["id", "accordion", 4, "ngFor", "ngForOf"], ["id", "accordion"], ["class", "card", 4, "ngIf"], [1, "card"], [1, "card-header", "t-center"], ["data-toggle", "collapse", 1, "card-link", 3, "href"], ["class", "collapse", "data-parent", "#accordion", 3, "id", 4, "ngFor", "ngForOf"], ["data-parent", "#accordion", 1, "collapse", 3, "id"], [1, "card-body", 2, "height", "70px"], ["id", "content"], ["id", "dishes"], ["id", "add"], [3, "click", 4, "ngIf"], [4, "ngIf"], [3, "click"], [2, "margin-left", "8px", 3, "click"]],
      template: function MenuComponent_Template(rf, ctx) {
        if (rf & 1) {
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

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MenuComponent_Template_i_click_9_listener() {
            return ctx.logout();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, MenuComponent_div_10_Template, 11, 1, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, MenuComponent_div_11_Template, 3, 0, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, MenuComponent_div_12_Template, 3, 0, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, MenuComponent_div_13_Template, 3, 1, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
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
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"]],
      styles: [".header-section-2[_ngcontent-%COMP%]{\n    display: -webkit-inline-box;\n    margin-top: 2%;\n}\n\n.header-section-2[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\n    margin-left: 20%;\n}\n\n.welcom-people[_ngcontent-%COMP%]{\n    font-size: 16px;\n    color: orange;\n    font-weight: 600;\n    margin: -10px;\n}\n\n.res-desc[_ngcontent-%COMP%]{\n    margin-top: 15px;\n    padding: 2%;\n}\n\n.res-desc[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{\n    font-size: 16px;\n    color: #529685;\n    font-weight: 600;\n    margin: 0 auto;\n    text-align: center;\n}\n\n.res-desc[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\n    font-size: 14px;\n    color: orange;\n}\n\n.choose-item-desc[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\n    font-size: 12px;\n    color: #ad9696;\n}\n\n.choose-item-desc[_ngcontent-%COMP%]{\n    margin: auto;\n}\n\n.card-header[_ngcontent-%COMP%] {\n    padding: 0.35rem 0.35rem !important;\n    margin-bottom: 0px !important;\n}\n\n.card[_ngcontent-%COMP%]{\nbackground-color: #529685;\nmargin-bottom: 1.5%;\n}\n\na.card-link[_ngcontent-%COMP%]{\n    color: #fff;\n    font-size: 16px;\n    font-weight: 500;\n}\n\ndiv#content[_ngcontent-%COMP%] {width: 100%; margin:0 auto; }\n\ndiv#dishes[_ngcontent-%COMP%] {   float: left;}\n\ndiv#add[_ngcontent-%COMP%] {float:right }\n\n#add[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{\n    width: 110px;\n    height: 32px;\n    text-align: center;\n    background: orange;\n    border: none;\n    color: #fff;\n    font-size: 12px;\n    font-weight: 600;\n}\n\n#dishes[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\n    margin: 0;\n    color: orange;\n    font-size: 12px;\n    font-weight: 800;\n}\n\n.item-desc[_ngcontent-%COMP%]{\n    margin-top: 13%;\n    font-size: 11px;\n    color: #bba3a3;\n    font-weight: 500;\n}\n\n#dishes[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{\n    font-size: 12px;\n    color: #529685;\n    font-weight: 600;\n    margin: 0;\n}\n\n.card-body[_ngcontent-%COMP%]{\n    background: #fff;\n    padding:1%;\n    padding-top: 5%;\n}\n\n.menu-scroll[_ngcontent-%COMP%]{\n    overflow-x: scroll;\n    height: 415px;\n    margin-top: 3%;\n}\n\n#loading-bar-spinner.spinner[_ngcontent-%COMP%] {\n    left: 50%;\n    margin-left: -20px;\n    top: 50%;\n    margin-top: -20px;\n    position: absolute;\n    z-index: 19 !important;\n    -webkit-animation: loading-bar-spinner 400ms linear infinite;\n            animation: loading-bar-spinner 400ms linear infinite;\n  }\n\n#loading-bar-spinner.spinner[_ngcontent-%COMP%]   .spinner-icon[_ngcontent-%COMP%] {\n    width: 40px;\n    height: 40px;\n    border: solid 4px transparent;\n    border-top-color: #00C8B1 !important;\n    border-left-color: #00C8B1 !important;\n    border-radius: 50%;\n  }\n\n@-webkit-keyframes loading-bar-spinner {\n    0% {\n      transform: rotate(0deg);\n      transform: rotate(0deg);\n    }\n    100% {\n      transform: rotate(360deg);\n      transform: rotate(360deg);\n    }\n  }\n\n@keyframes loading-bar-spinner {\n    0% {\n      transform: rotate(0deg);\n      transform: rotate(0deg);\n    }\n    100% {\n      transform: rotate(360deg);\n      transform: rotate(360deg);\n    }\n  }\n\n.view-order[_ngcontent-%COMP%]{\n    width: 200px;\n    border: 1px solid grey;\n    background: none;\n    color: #529685;\n    margin: 0 auto;\n    font-size: 15px;\n    font-weight: 500;\n    height: 35px;\n    margin-top: 2%;\n}\n\n@media screen and (max-width: 380px) and (min-width: 320px) {\n    .choose-item-desc[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\n        font-size: 10px !important;\n    }\n    .res-desc[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{\n        font-size: 14px !important;\n    }\n    .welcom-people[_ngcontent-%COMP%]{\n        font-size: 14px !important;\n    }\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVudS9tZW51LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSwyQkFBMkI7SUFDM0IsY0FBYztBQUNsQjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFDQTtJQUNJLGVBQWU7SUFDZixhQUFhO0lBQ2IsZ0JBQWdCO0lBQ2hCLGFBQWE7QUFDakI7O0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsV0FBVztBQUNmOztBQUNBO0lBQ0ksZUFBZTtJQUNmLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIsY0FBYztJQUNkLGtCQUFrQjtBQUN0Qjs7QUFDQTtJQUNJLGVBQWU7SUFDZixhQUFhO0FBQ2pCOztBQUNBO0lBQ0ksZUFBZTtJQUNmLGNBQWM7QUFDbEI7O0FBQ0E7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksbUNBQW1DO0lBQ25DLDZCQUE2QjtBQUNqQzs7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QixtQkFBbUI7QUFDbkI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsZUFBZTtJQUNmLGdCQUFnQjtBQUNwQjs7QUFFQSxhQUFhLFdBQVcsRUFBRSxhQUFhLEVBQUU7O0FBQ3pDLGVBQWUsV0FBVyxDQUFDOztBQUMzQixTQUFTLFlBQVk7O0FBQ3JCO0lBQ0ksWUFBWTtJQUNaLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixXQUFXO0lBQ1gsZUFBZTtJQUNmLGdCQUFnQjtBQUNwQjs7QUFDQTtJQUNJLFNBQVM7SUFDVCxhQUFhO0lBQ2IsZUFBZTtJQUNmLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixlQUFlO0lBQ2YsY0FBYztJQUNkLGdCQUFnQjtBQUNwQjs7QUFDQTtJQUNJLGVBQWU7SUFDZixjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLFNBQVM7QUFDYjs7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixVQUFVO0lBQ1YsZUFBZTtBQUNuQjs7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsY0FBYztBQUNsQjs7QUFFQTtJQUNJLFNBQVM7SUFDVCxrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsc0JBQXNCO0lBQ3RCLDREQUE0RDtZQUNwRCxvREFBb0Q7RUFDOUQ7O0FBRUE7SUFDRSxXQUFXO0lBQ1gsWUFBWTtJQUNaLDZCQUE2QjtJQUM3QixvQ0FBb0M7SUFDcEMscUNBQXFDO0lBQ3JDLGtCQUFrQjtFQUNwQjs7QUFFQTtJQUNFO01BRVUsdUJBQXVCO01BQy9CLHVCQUF1QjtJQUN6QjtJQUNBO01BRVUseUJBQXlCO01BQ2pDLHlCQUF5QjtJQUMzQjtFQUNGOztBQUVBO0lBQ0U7TUFFVSx1QkFBdUI7TUFDL0IsdUJBQXVCO0lBQ3pCO0lBQ0E7TUFFVSx5QkFBeUI7TUFDakMseUJBQXlCO0lBQzNCO0VBQ0Y7O0FBSUY7SUFDSSxZQUFZO0lBQ1osc0JBQXNCO0lBQ3RCLGdCQUFnQjtJQUNoQixjQUFjO0lBQ2QsY0FBYztJQUNkLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLGNBQWM7QUFDbEI7O0FBRUE7SUFDSTtRQUNJLDBCQUEwQjtJQUM5QjtJQUNBO1FBQ0ksMEJBQTBCO0lBQzlCO0lBQ0E7UUFDSSwwQkFBMEI7SUFDOUI7RUFDRiIsImZpbGUiOiJzcmMvYXBwL21lbnUvbWVudS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRlci1zZWN0aW9uLTJ7XG4gICAgZGlzcGxheTogLXdlYmtpdC1pbmxpbmUtYm94O1xuICAgIG1hcmdpbi10b3A6IDIlO1xufVxuXG4uaGVhZGVyLXNlY3Rpb24tMiBpbWd7XG4gICAgbWFyZ2luLWxlZnQ6IDIwJTtcbn1cbi53ZWxjb20tcGVvcGxle1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBjb2xvcjogb3JhbmdlO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgbWFyZ2luOiAtMTBweDtcbn1cbi5yZXMtZGVzY3tcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xuICAgIHBhZGRpbmc6IDIlO1xufVxuLnJlcy1kZXNjIGgxe1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBjb2xvcjogIzUyOTY4NTtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5yZXMtZGVzYyBwe1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBjb2xvcjogb3JhbmdlO1xufVxuLmNob29zZS1pdGVtLWRlc2MgcHtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgY29sb3I6ICNhZDk2OTY7XG59XG4uY2hvb3NlLWl0ZW0tZGVzY3tcbiAgICBtYXJnaW46IGF1dG87XG59XG5cbi5jYXJkLWhlYWRlciB7XG4gICAgcGFkZGluZzogMC4zNXJlbSAwLjM1cmVtICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luLWJvdHRvbTogMHB4ICFpbXBvcnRhbnQ7XG59XG4uY2FyZHtcbmJhY2tncm91bmQtY29sb3I6ICM1Mjk2ODU7XG5tYXJnaW4tYm90dG9tOiAxLjUlO1xufVxuXG5hLmNhcmQtbGlua3tcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuZGl2I2NvbnRlbnQge3dpZHRoOiAxMDAlOyBtYXJnaW46MCBhdXRvOyB9XG5kaXYjZGlzaGVzIHsgICBmbG9hdDogbGVmdDt9XG5kaXYjYWRkIHtmbG9hdDpyaWdodCB9XG4jYWRkIGJ1dHRvbntcbiAgICB3aWR0aDogMTEwcHg7XG4gICAgaGVpZ2h0OiAzMnB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kOiBvcmFuZ2U7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBmb250LXdlaWdodDogNjAwO1xufVxuI2Rpc2hlcyBwe1xuICAgIG1hcmdpbjogMDtcbiAgICBjb2xvcjogb3JhbmdlO1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBmb250LXdlaWdodDogODAwO1xufVxuXG4uaXRlbS1kZXNje1xuICAgIG1hcmdpbi10b3A6IDEzJTtcbiAgICBmb250LXNpemU6IDExcHg7XG4gICAgY29sb3I6ICNiYmEzYTM7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cbiNkaXNoZXMgaDF7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGNvbG9yOiAjNTI5Njg1O1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgbWFyZ2luOiAwO1xufVxuLmNhcmQtYm9keXtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgIHBhZGRpbmc6MSU7XG4gICAgcGFkZGluZy10b3A6IDUlO1xufVxuLm1lbnUtc2Nyb2xse1xuICAgIG92ZXJmbG93LXg6IHNjcm9sbDtcbiAgICBoZWlnaHQ6IDQxNXB4O1xuICAgIG1hcmdpbi10b3A6IDMlO1xufVxuXG4jbG9hZGluZy1iYXItc3Bpbm5lci5zcGlubmVyIHtcbiAgICBsZWZ0OiA1MCU7XG4gICAgbWFyZ2luLWxlZnQ6IC0yMHB4O1xuICAgIHRvcDogNTAlO1xuICAgIG1hcmdpbi10b3A6IC0yMHB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB6LWluZGV4OiAxOSAhaW1wb3J0YW50O1xuICAgIC13ZWJraXQtYW5pbWF0aW9uOiBsb2FkaW5nLWJhci1zcGlubmVyIDQwMG1zIGxpbmVhciBpbmZpbml0ZTtcbiAgICAgICAgICAgIGFuaW1hdGlvbjogbG9hZGluZy1iYXItc3Bpbm5lciA0MDBtcyBsaW5lYXIgaW5maW5pdGU7XG4gIH1cbiAgXG4gICNsb2FkaW5nLWJhci1zcGlubmVyLnNwaW5uZXIgLnNwaW5uZXItaWNvbiB7XG4gICAgd2lkdGg6IDQwcHg7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIGJvcmRlcjogc29saWQgNHB4IHRyYW5zcGFyZW50O1xuICAgIGJvcmRlci10b3AtY29sb3I6ICMwMEM4QjEgIWltcG9ydGFudDtcbiAgICBib3JkZXItbGVmdC1jb2xvcjogIzAwQzhCMSAhaW1wb3J0YW50O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgfVxuICBcbiAgQC13ZWJraXQta2V5ZnJhbWVzIGxvYWRpbmctYmFyLXNwaW5uZXIge1xuICAgIDAlIHtcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gICAgfVxuICAgIDEwMCUge1xuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xuICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xuICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbiAgICB9XG4gIH1cbiAgXG4gIEBrZXlmcmFtZXMgbG9hZGluZy1iYXItc3Bpbm5lciB7XG4gICAgMCUge1xuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgICB9XG4gICAgMTAwJSB7XG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xuICAgIH1cbiAgfVxuICBcbiAgXG5cbi52aWV3LW9yZGVye1xuICAgIHdpZHRoOiAyMDBweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCBncmV5O1xuICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgY29sb3I6ICM1Mjk2ODU7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgaGVpZ2h0OiAzNXB4O1xuICAgIG1hcmdpbi10b3A6IDIlO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzODBweCkgYW5kIChtaW4td2lkdGg6IDMyMHB4KSB7XG4gICAgLmNob29zZS1pdGVtLWRlc2MgcHtcbiAgICAgICAgZm9udC1zaXplOiAxMHB4ICFpbXBvcnRhbnQ7XG4gICAgfVxuICAgIC5yZXMtZGVzYyBoMXtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4ICFpbXBvcnRhbnQ7XG4gICAgfVxuICAgIC53ZWxjb20tcGVvcGxle1xuICAgICAgICBmb250LXNpemU6IDE0cHggIWltcG9ydGFudDtcbiAgICB9XG4gIH0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MenuComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-menu',
          templateUrl: './menu.component.html',
          styleUrls: ['./menu.component.css']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: _service_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]
        }, {
          type: _service_global_service__WEBPACK_IMPORTED_MODULE_4__["GlobalService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/menu/menu.module.ts":
  /*!*************************************!*\
    !*** ./src/app/menu/menu.module.ts ***!
    \*************************************/

  /*! exports provided: MenuModule */

  /***/
  function srcAppMenuMenuModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MenuModule", function () {
      return MenuModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _menu_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./menu-routing.module */
    "./src/app/menu/menu-routing.module.ts");
    /* harmony import */


    var _menu_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./menu.component */
    "./src/app/menu/menu.component.ts");

    var MenuModule = function MenuModule() {
      _classCallCheck(this, MenuModule);
    };

    MenuModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: MenuModule
    });
    MenuModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function MenuModule_Factory(t) {
        return new (t || MenuModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _menu_routing_module__WEBPACK_IMPORTED_MODULE_2__["MenuRoutingModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MenuModule, {
        declarations: [_menu_component__WEBPACK_IMPORTED_MODULE_3__["MenuComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _menu_routing_module__WEBPACK_IMPORTED_MODULE_2__["MenuRoutingModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MenuModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_menu_component__WEBPACK_IMPORTED_MODULE_3__["MenuComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _menu_routing_module__WEBPACK_IMPORTED_MODULE_2__["MenuRoutingModule"]]
        }]
      }], null, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=menu-menu-module-es5.js.map