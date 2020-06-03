function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["orders-orders-module"], {
  /***/
  "./src/app/orders/orders-routing.module.ts":
  /*!*************************************************!*\
    !*** ./src/app/orders/orders-routing.module.ts ***!
    \*************************************************/

  /*! exports provided: OrdersRoutingModule */

  /***/
  function srcAppOrdersOrdersRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OrdersRoutingModule", function () {
      return OrdersRoutingModule;
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


    var _orders_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./orders.component */
    "./src/app/orders/orders.component.ts");

    var routes = [{
      path: '',
      component: _orders_component__WEBPACK_IMPORTED_MODULE_2__["OrdersComponent"]
    }];

    var OrdersRoutingModule = function OrdersRoutingModule() {
      _classCallCheck(this, OrdersRoutingModule);
    };

    OrdersRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: OrdersRoutingModule
    });
    OrdersRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function OrdersRoutingModule_Factory(t) {
        return new (t || OrdersRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](OrdersRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OrdersRoutingModule, [{
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
  "./src/app/orders/orders.component.ts":
  /*!********************************************!*\
    !*** ./src/app/orders/orders.component.ts ***!
    \********************************************/

  /*! exports provided: OrdersComponent */

  /***/
  function srcAppOrdersOrdersComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OrdersComponent", function () {
      return OrdersComponent;
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


    var jquery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! jquery */
    "./node_modules/jquery/dist/jquery.js");
    /* harmony import */


    var jquery__WEBPACK_IMPORTED_MODULE_2___default =
    /*#__PURE__*/
    __webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _service_global_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../service/global.service */
    "./src/app/service/global.service.ts");
    /* harmony import */


    var _service_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../service/user.service */
    "./src/app/service/user.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    function OrdersComponent_div_11_div_1_div_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OrdersComponent_div_11_div_1_div_1_Template_span_click_7_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r38);

          var val_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r36.decreaseQnt(val_r34.SitemCode, val_r34.SubCategoryCode);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "-\xA0\xA0 \xA0 \xA0\xA0");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OrdersComponent_div_11_div_1_div_1_Template_span_click_11_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r38);

          var val_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r39.increaseQnt(val_r34.SitemCode, val_r34.SubCategoryCode);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "\xA0\xA0\xA0\xA0\xA0+");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var val_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](val_r34.DisplayName);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](val_r34.Item_UOM[0].Qty);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u20B9", val_r34.Item_UOM[0].Qty * val_r34.Item_UOM[0].Rate, "");
      }
    }

    function OrdersComponent_div_11_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, OrdersComponent_div_11_div_1_div_1_Template, 16, 3, "div", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var val_r34 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", val_r34.Item_UOM[0].Qty > 0);
      }
    }

    function OrdersComponent_div_11_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, OrdersComponent_div_11_div_1_Template, 2, 1, "div", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r32 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", item_r32.Items);
      }
    }

    function OrdersComponent_div_33_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var OrdersComponent =
    /*#__PURE__*/
    function () {
      function OrdersComponent(router, _globalService, _userService) {
        _classCallCheck(this, OrdersComponent);

        this.router = router;
        this._globalService = _globalService;
        this._userService = _userService;
        this.menuData = [];
        this.cartItems = [];
        this.subtotal = 0;
        this.totalamount = 0;
        this.TableCode = "";
        this.tax = 200;
        this.res = [];
        this.orderID = '';
      }

      _createClass(OrdersComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          if (localStorage.getItem('otpStatus') == null) {
            return this.router.navigate(['/'], {
              queryParamsHandling: 'preserve'
            });
          }

          this.menuData = JSON.parse(sessionStorage.getItem('menuData'));

          if (sessionStorage.getItem('TableCode')) {
            this.TableCode = sessionStorage.getItem('TableCode');
            jquery__WEBPACK_IMPORTED_MODULE_2___default()("#tableno").prop('disabled', true);
          }

          this.fetchMenu();
          this.customerName = localStorage.getItem('customerName');
        }
      }, {
        key: "fetchMenu",
        value: function fetchMenu() {
          this.cartItems = [];
          this.menuData = JSON.parse(sessionStorage.getItem('menuData'));

          for (var i = 0; i < this.menuData.length; i++) {
            for (var j = 0; j < this.menuData[i].Items.length; j++) {
              if (this.menuData[i].Items[j].Item_UOM[0].Qty > 0) {
                this.cartItems.push({
                  'SitemCode': this.menuData[i].Items[j].SitemCode,
                  'Qty': this.menuData[i].Items[j].Item_UOM[0].Qty
                });
                this.totalamount += this.menuData[i].Items[j].Item_UOM[0].Rate * this.menuData[i].Items[j].Item_UOM[0].Qty;
              }
            }
          }

          this.subtotal = this.totalamount; // this.totalamount +=this.tax

          if (this.totalamount === 0) {
            return this.router.navigate(['/menu'], {
              queryParamsHandling: 'preserve'
            });
          }
        }
      }, {
        key: "redirect",
        value: function redirect() {
          var _this = this;

          if (this.TableCode === undefined || this.TableCode === null || this.TableCode === "") {
            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire('Oops...', 'Please enter table no !', 'error');
          } else {
            this.loading = true;
            this.orderID = sessionStorage.getItem('orderID');
            console.log(this.orderID);

            if (this.orderID === null) {
              var body = {
                "TableCode": this.TableCode,
                "FloorLocation": sessionStorage.getItem('floorCode'),
                "CustPhone": localStorage.getItem('customerPhone'),
                "CustomerName": localStorage.getItem('customerName'),
                "OrderItems": this.cartItems
              };

              this._userService.placeOrder(body).subscribe({
                next: function next(data) {
                  _this.res = data;
                  console.log(_this.res);

                  if (_this.res.error == false) {
                    sessionStorage.setItem('TableCode', _this.TableCode);
                    sessionStorage.setItem('orderID', _this.res.data);
                    _this.loading = false;

                    _this.router.navigate(['/feedback'], {
                      queryParamsHandling: 'preserve'
                    });
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
            } else {
              var bodyData = {
                "OrderNumber": this.orderID,
                "OrderItems": this.cartItems
              };

              this._userService.modifyOrder(bodyData).subscribe({
                next: function next(data) {
                  _this.res = data;

                  if (_this.res.error == false) {
                    sessionStorage.setItem('orderID', _this.res.data);
                    _this.loading = false;

                    _this.router.navigate(['/feedback'], {
                      queryParamsHandling: 'preserve'
                    });
                  }
                },
                error: function error(_error2) {
                  _this.loading = false;

                  if (_error2.status == 403) {
                    localStorage.clear();
                    sessionStorage.clear();
                    sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire('Oops...', 'Session Expired ! Please login again.', 'error');

                    _this.router.navigate(['/'], {
                      queryParamsHandling: 'preserve'
                    });
                  } else {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire('Oops...', "".concat(_error2.error.info), 'error');
                  }
                }
              });
            }
          }
        }
      }, {
        key: "increaseQnt",
        value: function increaseQnt(SitemCode, SubCategoryCode) {
          if (this.loading) {
            return;
          }

          this.totalamount = 0;

          for (var i = 0; i < this.menuData.length; i++) {
            for (var j = 0; j < this.menuData[i].Items.length; j++) {
              if (this.menuData[i].Items[j].SitemCode === SitemCode && this.menuData[i].Items[j].SubCategoryCode === SubCategoryCode) {
                this.menuData[i].Items[j].Item_UOM[0].Qty += 1;
                sessionStorage.setItem("menuData", JSON.stringify(this.menuData));
                this.fetchMenu();
              }
            }
          }
        }
      }, {
        key: "decreaseQnt",
        value: function decreaseQnt(SitemCode, SubCategoryCode) {
          if (this.loading) {
            return;
          }

          this.totalamount = 0;

          for (var i = 0; i < this.menuData.length; i++) {
            for (var j = 0; j < this.menuData[i].Items.length; j++) {
              if (this.menuData[i].Items[j].SitemCode === SitemCode && this.menuData[i].Items[j].SubCategoryCode === SubCategoryCode) {
                if (this.menuData[i].Items[j].Item_UOM[0].Qty == 0) {
                  break;
                }

                this.menuData[i].Items[j].Item_UOM[0].Qty -= 1;
                sessionStorage.setItem("menuData", JSON.stringify(this.menuData));
                this.fetchMenu();
              }
            }
          }
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

      return OrdersComponent;
    }();

    OrdersComponent.ɵfac = function OrdersComponent_Factory(t) {
      return new (t || OrdersComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_global_service__WEBPACK_IMPORTED_MODULE_4__["GlobalService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"]));
    };

    OrdersComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: OrdersComponent,
      selectors: [["app-orders"]],
      decls: 38,
      vars: 5,
      consts: [[1, "container-fluid"], [1, "row"], [1, "col-xs-3"], ["src", "../../assets/image/logo.png", "alt", ""], [1, "col-xs-6", 2, "margin", "auto"], [1, "welcom-people"], [1, "col-xs-3", 2, "margin", "auto"], [1, "fa", "fa-sign-out", 2, "color", "red", 3, "click"], [1, "order-summary-btn"], ["class", "row", 4, "ngFor", "ngForOf"], [1, "col-xs-12", "col-sm-12", 2, "margin-top", "5%"], [1, "row", "t-center"], [1, "col-xs-4"], [2, "font-size", "14px", "color", "#529685", "font-weight", "600", "text-align", "left", "margin-left", "15%"], [1, "rate"], [1, "row", 2, "margin", "0 auto"], [2, "width", "100%", "margin", "0 auto", "text-align", "center"], [1, "inline", 2, "margin-right", "6px"], [1, "inline"], ["type", "text", "id", "tableno", 1, "tbl-no", 3, "ngModel", "ngModelChange"], [1, "place-order", 2, "position", "relative", 3, "click"], ["id", "loading-bar-spinner", "class", "spinner", 4, "ngIf"], [1, "on-place-order"], ["class", "col-sm-12 col-xs-12", 4, "ngFor", "ngForOf"], [1, "col-sm-12", "col-xs-12"], [4, "ngIf"], [1, "row", "t-center", 2, "margin-bottom", "5%"], [1, "displayname"], [1, "addbtn"], [3, "click"], [2, "margin-left", "8px", 3, "click"], ["id", "loading-bar-spinner", 1, "spinner"], [1, "spinner-icon"]],
      template: function OrdersComponent_Template(rf, ctx) {
        if (rf & 1) {
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

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "i", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OrdersComponent_Template_i_click_8_listener() {
            return ctx.logout();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Order Summary");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, OrdersComponent_div_11_Template, 2, 1, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Total Amount");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Choose your table number");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "input", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function OrdersComponent_Template_input_ngModelChange_29_listener($event) {
            return ctx.TableCode = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "button", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OrdersComponent_Template_button_click_31_listener() {
            return ctx.redirect();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, " Place Order");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, OrdersComponent_div_33_Template, 2, 0, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "p", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "On placing the order, our server will");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "attend to you shortly");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Welcome ", ctx.customerName, "!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.menuData);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u20B9", ctx.totalamount, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.TableCode);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"]],
      styles: [".header-section-2[_ngcontent-%COMP%]{\n    display: -webkit-inline-box;\n    margin-top: 2%;\n}\n\n.header-section-2[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\n    margin-left: 20%;\n}\n\n.welcom-people[_ngcontent-%COMP%]{\n    font-size: 16px;\n    color: orange;\n    font-weight: 600;\n    margin: -10px;\n}\n\n.res-desc[_ngcontent-%COMP%]{\n    margin-top: 15px;\n    padding: 2%;\n}\n\n.res-desc[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{\n    font-size: 16px;\n    color: #529685;\n    font-weight: 600;\n    margin: 0;\n}\n\n.res-desc[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\n    font-size: 14px;\n    color: orange;\n}\n\n.order-summary-btn[_ngcontent-%COMP%]{\n    background-color: #529685;\n    border: 1px solid #529685;\n    color: #fff;\n    width: 100%;\n    text-align: center;\n    text-decoration: none;\n    display: inline-block;\n    font-size: 16px;\n    margin: 6% 0% 5% 0%;\n    height: 38px;\n}\n\n.count-btn[_ngcontent-%COMP%]{\n    width: 65px;\n    height: 25px;\n    text-align: center;\n    background: orange;\n    border: none;\n    color: #fff;\n    font-size: 12px;\n    font-weight: 600;\n}\n\n.inline[_ngcontent-%COMP%] { \n    display: inline-block; \n    margin:10px;\n    font-size: 12px;\n    color: #529685;\n    font-weight: 300;\n    margin: 0;\n    margin-bottom: 3%;\n    margin-top: 3%;\n    }\n\n.tbl-no[_ngcontent-%COMP%]{\n    width: 30px;\n    height: 30px;\n    border: 1px solid #529685;\n    border-radius: 4px;\n    text-align: center;\n   \n}\n\n.place-order[_ngcontent-%COMP%]{\n    background-color: #529685;\n    border: 1px solid #529685;\n    color: #fff;\n    width: 60%;\n    padding: 2%;\n    text-align: center;\n    text-decoration: none;\n    display: inline-block;\n    font-size: 16px;\n    margin: 8px 10px;\n}\n\n.on-place-order[_ngcontent-%COMP%]{\n    font-size: 10px;\n    color: #529685;\n}\n\n.addbtn[_ngcontent-%COMP%]{\n    background: orange;\n    border: none;\n    width: 99px;\n    height: 30px;\n    font-size: 12px;\n    color: #fff;\n}\n\n.displayname[_ngcontent-%COMP%]{\n    font-size: 12px;\n    color: #529685;\n    font-weight: 300;\n    margin: 0 auto;\n    text-align: left;\n    margin-left: 15%;\n}\n\n.Qty[_ngcontent-%COMP%]{\n    font-size: 14px;\n    color: #529685;\n    font-weight: 600;\n}\n\n.rate[_ngcontent-%COMP%]{\n    color: orange;\n    font-size: 12px;\n    font-weight: 800;\n}\n\n.col-xs-4[_ngcontent-%COMP%]{\n    width: 33.3%;\n}\n\n\n\n#loading-bar-spinner.spinner[_ngcontent-%COMP%] {\n    right: 8%;\n    margin-left: -20px;\n    top: 80%;\n    margin-top: -20px;\n    position: absolute;\n    z-index: 19 !important;\n    -webkit-animation: loading-bar-spinner 400ms linear infinite;\n            animation: loading-bar-spinner 400ms linear infinite;\n  }\n\n#loading-bar-spinner.spinner[_ngcontent-%COMP%]   .spinner-icon[_ngcontent-%COMP%] {\n    width: 20px;\n    height: 20px;\n    border: solid 4px transparent;\n    border-top-color: #00C8B1 !important;\n    border-left-color: #00C8B1 !important;\n    border-radius: 50%;\n  }\n\n@-webkit-keyframes loading-bar-spinner {\n    0% {\n      transform: rotate(0deg);\n      transform: rotate(0deg);\n    }\n    100% {\n      transform: rotate(360deg);\n      transform: rotate(360deg);\n    }\n  }\n\n@keyframes loading-bar-spinner {\n    0% {\n      transform: rotate(0deg);\n      transform: rotate(0deg);\n    }\n    100% {\n      transform: rotate(360deg);\n      transform: rotate(360deg);\n    }\n  }\n\n@media screen and (max-width: 380px) and (min-width: 320px) {\n    .choose-item-desc[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\n        font-size: 10px !important;\n    }\n    .res-desc[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{\n        font-size: 14px !important;\n    }\n    .welcom-people[_ngcontent-%COMP%]{\n        font-size: 14px !important;\n    }\n    .order-summary-btn[_ngcontent-%COMP%]{\n        font-size: 14px;\n    }\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvb3JkZXJzL29yZGVycy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksMkJBQTJCO0lBQzNCLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBQ0E7SUFDSSxlQUFlO0lBQ2YsYUFBYTtJQUNiLGdCQUFnQjtJQUNoQixhQUFhO0FBQ2pCOztBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLFdBQVc7QUFDZjs7QUFDQTtJQUNJLGVBQWU7SUFDZixjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLFNBQVM7QUFDYjs7QUFDQTtJQUNJLGVBQWU7SUFDZixhQUFhO0FBQ2pCOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLHlCQUF5QjtJQUN6QixXQUFXO0lBQ1gsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixxQkFBcUI7SUFDckIscUJBQXFCO0lBQ3JCLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIsWUFBWTtBQUNoQjs7QUFDQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osV0FBVztJQUNYLGVBQWU7SUFDZixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsV0FBVztJQUNYLGVBQWU7SUFDZixjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLFNBQVM7SUFDVCxpQkFBaUI7SUFDakIsY0FBYztJQUNkOztBQUdKO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWix5QkFBeUI7SUFDekIsa0JBQWtCO0lBQ2xCLGtCQUFrQjs7QUFFdEI7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIseUJBQXlCO0lBQ3pCLFdBQVc7SUFDWCxVQUFVO0lBQ1YsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixxQkFBcUI7SUFDckIscUJBQXFCO0lBQ3JCLGVBQWU7SUFDZixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsY0FBYztBQUNsQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osV0FBVztJQUNYLFlBQVk7SUFDWixlQUFlO0lBQ2YsV0FBVztBQUNmOztBQUNBO0lBQ0ksZUFBZTtJQUNmLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIsY0FBYztJQUNkLGdCQUFnQjtJQUNoQixnQkFBZ0I7QUFDcEI7O0FBQ0E7SUFDSSxlQUFlO0lBQ2YsY0FBYztJQUNkLGdCQUFnQjtBQUNwQjs7QUFDQTtJQUNJLGFBQWE7SUFDYixlQUFlO0lBQ2YsZ0JBQWdCO0FBQ3BCOztBQUNBO0lBQ0ksWUFBWTtBQUNoQjs7QUFHQSxXQUFXOztBQUdYO0lBQ0ksU0FBUztJQUNULGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixzQkFBc0I7SUFDdEIsNERBQTREO1lBQ3BELG9EQUFvRDtFQUM5RDs7QUFFQTtJQUNFLFdBQVc7SUFDWCxZQUFZO0lBQ1osNkJBQTZCO0lBQzdCLG9DQUFvQztJQUNwQyxxQ0FBcUM7SUFDckMsa0JBQWtCO0VBQ3BCOztBQUVBO0lBQ0U7TUFFVSx1QkFBdUI7TUFDL0IsdUJBQXVCO0lBQ3pCO0lBQ0E7TUFFVSx5QkFBeUI7TUFDakMseUJBQXlCO0lBQzNCO0VBQ0Y7O0FBRUE7SUFDRTtNQUVVLHVCQUF1QjtNQUMvQix1QkFBdUI7SUFDekI7SUFDQTtNQUVVLHlCQUF5QjtNQUNqQyx5QkFBeUI7SUFDM0I7RUFDRjs7QUFHRjtJQUNJO1FBQ0ksMEJBQTBCO0lBQzlCO0lBQ0E7UUFDSSwwQkFBMEI7SUFDOUI7SUFDQTtRQUNJLDBCQUEwQjtJQUM5QjtJQUNBO1FBQ0ksZUFBZTtJQUNuQjtFQUNGIiwiZmlsZSI6InNyYy9hcHAvb3JkZXJzL29yZGVycy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRlci1zZWN0aW9uLTJ7XG4gICAgZGlzcGxheTogLXdlYmtpdC1pbmxpbmUtYm94O1xuICAgIG1hcmdpbi10b3A6IDIlO1xufVxuXG4uaGVhZGVyLXNlY3Rpb24tMiBpbWd7XG4gICAgbWFyZ2luLWxlZnQ6IDIwJTtcbn1cbi53ZWxjb20tcGVvcGxle1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBjb2xvcjogb3JhbmdlO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgbWFyZ2luOiAtMTBweDtcbn1cbi5yZXMtZGVzY3tcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xuICAgIHBhZGRpbmc6IDIlO1xufVxuLnJlcy1kZXNjIGgxe1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBjb2xvcjogIzUyOTY4NTtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIG1hcmdpbjogMDtcbn1cbi5yZXMtZGVzYyBwe1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBjb2xvcjogb3JhbmdlO1xufVxuXG4ub3JkZXItc3VtbWFyeS1idG57XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzUyOTY4NTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjNTI5Njg1O1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBtYXJnaW46IDYlIDAlIDUlIDAlO1xuICAgIGhlaWdodDogMzhweDtcbn1cbi5jb3VudC1idG57XG4gICAgd2lkdGg6IDY1cHg7XG4gICAgaGVpZ2h0OiAyNXB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kOiBvcmFuZ2U7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBmb250LXdlaWdodDogNjAwO1xufVxuXG4uaW5saW5lIHsgXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrOyBcbiAgICBtYXJnaW46MTBweDtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgY29sb3I6ICM1Mjk2ODU7XG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICBtYXJnaW46IDA7XG4gICAgbWFyZ2luLWJvdHRvbTogMyU7XG4gICAgbWFyZ2luLXRvcDogMyU7XG4gICAgfVxuXG5cbi50Ymwtbm97XG4gICAgd2lkdGg6IDMwcHg7XG4gICAgaGVpZ2h0OiAzMHB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICM1Mjk2ODU7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgIFxufVxuXG4ucGxhY2Utb3JkZXJ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzUyOTY4NTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjNTI5Njg1O1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIHdpZHRoOiA2MCU7XG4gICAgcGFkZGluZzogMiU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIG1hcmdpbjogOHB4IDEwcHg7XG59XG5cbi5vbi1wbGFjZS1vcmRlcntcbiAgICBmb250LXNpemU6IDEwcHg7XG4gICAgY29sb3I6ICM1Mjk2ODU7XG59XG5cbi5hZGRidG57XG4gICAgYmFja2dyb3VuZDogb3JhbmdlO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICB3aWR0aDogOTlweDtcbiAgICBoZWlnaHQ6IDMwcHg7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGNvbG9yOiAjZmZmO1xufVxuLmRpc3BsYXluYW1le1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBjb2xvcjogIzUyOTY4NTtcbiAgICBmb250LXdlaWdodDogMzAwO1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgbWFyZ2luLWxlZnQ6IDE1JTtcbn1cbi5RdHl7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGNvbG9yOiAjNTI5Njg1O1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG4ucmF0ZXtcbiAgICBjb2xvcjogb3JhbmdlO1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBmb250LXdlaWdodDogODAwO1xufVxuLmNvbC14cy00e1xuICAgIHdpZHRoOiAzMy4zJTtcbn1cblxuXG4vKiBsb2FkZXIgKi9cblxuXG4jbG9hZGluZy1iYXItc3Bpbm5lci5zcGlubmVyIHtcbiAgICByaWdodDogOCU7XG4gICAgbWFyZ2luLWxlZnQ6IC0yMHB4O1xuICAgIHRvcDogODAlO1xuICAgIG1hcmdpbi10b3A6IC0yMHB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB6LWluZGV4OiAxOSAhaW1wb3J0YW50O1xuICAgIC13ZWJraXQtYW5pbWF0aW9uOiBsb2FkaW5nLWJhci1zcGlubmVyIDQwMG1zIGxpbmVhciBpbmZpbml0ZTtcbiAgICAgICAgICAgIGFuaW1hdGlvbjogbG9hZGluZy1iYXItc3Bpbm5lciA0MDBtcyBsaW5lYXIgaW5maW5pdGU7XG4gIH1cbiAgXG4gICNsb2FkaW5nLWJhci1zcGlubmVyLnNwaW5uZXIgLnNwaW5uZXItaWNvbiB7XG4gICAgd2lkdGg6IDIwcHg7XG4gICAgaGVpZ2h0OiAyMHB4O1xuICAgIGJvcmRlcjogc29saWQgNHB4IHRyYW5zcGFyZW50O1xuICAgIGJvcmRlci10b3AtY29sb3I6ICMwMEM4QjEgIWltcG9ydGFudDtcbiAgICBib3JkZXItbGVmdC1jb2xvcjogIzAwQzhCMSAhaW1wb3J0YW50O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgfVxuICBcbiAgQC13ZWJraXQta2V5ZnJhbWVzIGxvYWRpbmctYmFyLXNwaW5uZXIge1xuICAgIDAlIHtcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gICAgfVxuICAgIDEwMCUge1xuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xuICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xuICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbiAgICB9XG4gIH1cbiAgXG4gIEBrZXlmcmFtZXMgbG9hZGluZy1iYXItc3Bpbm5lciB7XG4gICAgMCUge1xuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgICB9XG4gICAgMTAwJSB7XG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xuICAgIH1cbiAgfVxuXG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDM4MHB4KSBhbmQgKG1pbi13aWR0aDogMzIwcHgpIHtcbiAgICAuY2hvb3NlLWl0ZW0tZGVzYyBwe1xuICAgICAgICBmb250LXNpemU6IDEwcHggIWltcG9ydGFudDtcbiAgICB9XG4gICAgLnJlcy1kZXNjIGgxe1xuICAgICAgICBmb250LXNpemU6IDE0cHggIWltcG9ydGFudDtcbiAgICB9XG4gICAgLndlbGNvbS1wZW9wbGV7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweCAhaW1wb3J0YW50O1xuICAgIH1cbiAgICAub3JkZXItc3VtbWFyeS1idG57XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICB9XG4gIH0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OrdersComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-orders',
          templateUrl: './orders.component.html',
          styleUrls: ['./orders.component.css']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }, {
          type: _service_global_service__WEBPACK_IMPORTED_MODULE_4__["GlobalService"]
        }, {
          type: _service_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/orders/orders.module.ts":
  /*!*****************************************!*\
    !*** ./src/app/orders/orders.module.ts ***!
    \*****************************************/

  /*! exports provided: OrdersModule */

  /***/
  function srcAppOrdersOrdersModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OrdersModule", function () {
      return OrdersModule;
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


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _orders_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./orders-routing.module */
    "./src/app/orders/orders-routing.module.ts");
    /* harmony import */


    var _orders_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./orders.component */
    "./src/app/orders/orders.component.ts");

    var OrdersModule = function OrdersModule() {
      _classCallCheck(this, OrdersModule);
    };

    OrdersModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: OrdersModule
    });
    OrdersModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function OrdersModule_Factory(t) {
        return new (t || OrdersModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _orders_routing_module__WEBPACK_IMPORTED_MODULE_3__["OrdersRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](OrdersModule, {
        declarations: [_orders_component__WEBPACK_IMPORTED_MODULE_4__["OrdersComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _orders_routing_module__WEBPACK_IMPORTED_MODULE_3__["OrdersRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OrdersModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_orders_component__WEBPACK_IMPORTED_MODULE_4__["OrdersComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _orders_routing_module__WEBPACK_IMPORTED_MODULE_3__["OrdersRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]]
        }]
      }], null, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=orders-orders-module-es5.js.map