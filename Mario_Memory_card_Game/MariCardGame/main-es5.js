(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<router-outlet></router-outlet>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/card-grid/card-grid.component.html":
  /*!******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/card-grid/card-grid.component.html ***!
    \******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppCardGridCardGridComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div id=ga>\n\n     <div id=\"btndiv\"><button *ngFor=\"let level of levels\"  (click)=\"start(level)\">level {{level}}</button></div>\n     <div id=\"game\" >\n     </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/instruction/instruction.component.html":
  /*!**********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/instruction/instruction.component.html ***!
    \**********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppInstructionInstructionComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div id=\"inst\">\n<div class=\"instructions_div\">\n    \n    <H2>HOW TO PLAY ?</H2>\n    <ol>\n        <li>Cards are mixed and set in a form of grid facing down.</li>\n        <li>Turn over any two cards.</li>\n        <li>If the two cards match, you score.</li>\n        <li>If they don't match, cards turns over.</li>\n        <li>Remember what was on each card and where it was.</li>\n        <li>The game is completed when all the cards have been matched.</li>\n    </ol>   \n    <br>\n    <h3>Good Luck!!!!!</h3>    \n    <button routerLink = \"/game\">Play</button> \n</div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/registeration/registeration.component.html":
  /*!**************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/registeration/registeration.component.html ***!
    \**************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppRegisterationRegisterationComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "                <div class=\"container\"> \n                <div id=\"name-box\"> \n                  <p class=\"text\"> Welcome to <br>Mario <br>Memory <br>Card Game <p>\n                </div> \n                <div id=\"login-box\"> \n                     <h3>Login </h3>\n                    <h2>Welcome back!! </h2>\n                    <br>\n                    <br>\n                    <form (ngSubmit) = \"onLogin(loginForm)\" #loginForm = \"ngForm\">\n                    <input type=email required \n                    \n                    id=\"email\"\n\t\t\t\tmatInput \n\t\t\t\tplaceholder=\"Email\" \n\t\t\t\tname=\"email\"\n\t\t\t\tngModel\n\t\t\t\t #email = \"ngModel\" \n\t\t\t\t pattern = \"^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$\"\n                    required\n                    >\n                    <br>\n                    <br>\n                    <input type=password\n                     \n                     type=password \n\t\t\t\tplaceholder=\"Password\"  \n\t\t\t\tminlength=\"9\"\n\t\t\t\tname=\"password\"\n\t\t\t\tngModel \n\t\t\t\t#password = \"ngModel\" \n\t\t\t\tmatInput \n\t\t\t\tclass=\"validate\"\n                    required\n                     >\n                    <br>\n                    <br>\n                    <br>        \n                    <button  id=\"loginbtn\">Login</button>\n                </form>\n                </div> \n                <div id=\"signup-box\">\n                    <h3> New User ? </h3>\n                    <h2>Sign up below</h2>\n                    <br>\n                   <form (ngSubmit) = \"onRegister(registerForm)\" \n                   #registerForm = \"ngForm\">\n                    <label>Username:</label>\n                    <div class=\"input-field\">\n          <input \n          \n          id=\"username\"\n           type=\"text\"\n           minlength=\"3\"\n           name=\"username\"\n           ngModel\n           #username=\"ngModel\"\n           matInput\n           required\n          class=\"validate\">\n        </div>\n        <br>\n                    <label>Email:</label>\n                    <input type=email \n                    id=\"email\"\n\t\t\t\tmatInput \n\t\t\t\t\n\t\t\t\tname=\"email\"\n\t\t\t\tngModel\n\t\t\t\t #email = \"ngModel\" \n\t\t\t\t pattern = \"^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$\"\n                    required>\n                    <br>\n                    <br>\n                    <label>Password:</label>\n                    <input type=password \n\t\t\t\t \n\t\t\t\tminlength=\"9\"\n\t\t\t\tname=\"password\"\n\t\t\t\tngModel \n\t\t\t\t#password = \"ngModel\" \n\t\t\t\tmatInput \n\t\t\t\tclass=\"validate\"\n                    required>\n                    <br>\n                    <br>        \n                    <button (click) = \"registerProcess(registerForm)\" id=\"signupbtn\" >Sign up</button>\n                </form>\n                </div> \n            </div>   ";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/terms/terms.component.html":
  /*!**********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/terms/terms.component.html ***!
    \**********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppTermsTermsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>terms works!</p>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/welcome/welcome.component.html":
  /*!**************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/welcome/welcome.component.html ***!
    \**************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppWelcomeWelcomeComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div id=\"wlcm\">\n<h1>BENVENUTO</h1>\n<br>\n<div id=\"instructions_div\">\n    <H2>HOW TO PLAY ?</H2>\n    <ol>\n        <li>Cards are mixed and set in a form of grid facing down.</li>\n        <li>Turn over any two cards.</li>\n        <li>If the two cards match, you score.</li>\n        <li>If they don't match, cards turns over.</li>\n        <li>Remember what was on each card and where it was.</li>\n        <li>The game is completed when all the cards have been matched.</li>\n    </ol>   \n    <h3>Good Luck!!!!!</h3>\n\n    <button routerLink = \"/game\">Play</button> \n</div>    \n</div>\n";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function () {
      return __classPrivateFieldGet;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function () {
      return __classPrivateFieldSet;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0
    
    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.
    
    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function (resolve) {
          resolve(value);
        });
      }

      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) try {
          if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
          if (y = 0, t) op = [op[0] & 2, t.value];

          switch (op[0]) {
            case 0:
            case 1:
              t = op;
              break;

            case 4:
              _.label++;
              return {
                value: op[1],
                done: false
              };

            case 5:
              _.label++;
              y = op[1];
              op = [0];
              continue;

            case 7:
              op = _.ops.pop();

              _.trys.pop();

              continue;

            default:
              if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                _ = 0;
                continue;
              }

              if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                _.label = op[1];
                break;
              }

              if (op[0] === 6 && _.label < t[1]) {
                _.label = t[1];
                t = op;
                break;
              }

              if (t && _.label < t[2]) {
                _.label = t[2];

                _.ops.push(op);

                break;
              }

              if (t[2]) _.ops.pop();

              _.trys.pop();

              continue;
          }

          op = body.call(thisArg, _);
        } catch (e) {
          op = [6, e];
          y = 0;
        } finally {
          f = t = 0;
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __exportStar(m, exports) {
      for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }

    function __values(o) {
      var s = typeof Symbol === "function" && Symbol.iterator,
          m = s && o[s],
          i = 0;
      if (m) return m.call(o);
      if (o && typeof o.length === "number") return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;

      for (var r = Array(s), k = 0, i = 0; i < il; i++) for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) r[k] = a[j];

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      result.default = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        default: mod
      };
    }

    function __classPrivateFieldGet(receiver, privateMap) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
      }

      return privateMap.get(receiver);
    }

    function __classPrivateFieldSet(receiver, privateMap, value) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
      }

      privateMap.set(receiver, value);
      return value;
    }
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    const routes = [];
    let AppRoutingModule = class AppRoutingModule {};
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.css":
  /*!***********************************!*\
    !*** ./src/app/app.component.css ***!
    \***********************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    let AppComponent = class AppComponent {
      constructor() {
        this.title = 'Project';
      }

    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.css */
      "./src/app/app.component.css")).default]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _card_grid_card_grid_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./card-grid/card-grid.component */
    "./src/app/card-grid/card-grid.component.ts");
    /* harmony import */


    var _instruction_instruction_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./instruction/instruction.component */
    "./src/app/instruction/instruction.component.ts");
    /* harmony import */


    var _registeration_registeration_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./registeration/registeration.component */
    "./src/app/registeration/registeration.component.ts");
    /* harmony import */


    var _terms_terms_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./terms/terms.component */
    "./src/app/terms/terms.component.ts");
    /* harmony import */


    var _user_registration_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./user-registration.service */
    "./src/app/user-registration.service.ts");
    /* harmony import */


    var _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./welcome/welcome.component */
    "./src/app/welcome/welcome.component.ts");

    let AppModule = class AppModule {};
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"], _registeration_registeration_component__WEBPACK_IMPORTED_MODULE_10__["RegisterationComponent"], _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_13__["WelcomeComponent"], _instruction_instruction_component__WEBPACK_IMPORTED_MODULE_9__["InstructionComponent"], _card_grid_card_grid_component__WEBPACK_IMPORTED_MODULE_8__["CardGridComponent"], _terms_terms_component__WEBPACK_IMPORTED_MODULE_11__["TermsComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["BrowserModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forRoot([{
        path: '',
        redirectTo: '/',
        pathMatch: 'full'
      }, {
        path: '',
        component: _registeration_registeration_component__WEBPACK_IMPORTED_MODULE_10__["RegisterationComponent"]
      }, {
        path: 'welcome',
        component: _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_13__["WelcomeComponent"]
      }, {
        path: 'submit',
        component: _terms_terms_component__WEBPACK_IMPORTED_MODULE_11__["TermsComponent"]
      }, {
        path: 'game',
        component: _card_grid_card_grid_component__WEBPACK_IMPORTED_MODULE_8__["CardGridComponent"]
      }])],
      providers: [_user_registration_service__WEBPACK_IMPORTED_MODULE_12__["UserRegistrationService"]],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/card-grid/card-grid.component.css":
  /*!***************************************************!*\
    !*** ./src/app/card-grid/card-grid.component.css ***!
    \***************************************************/

  /*! exports provided: default */

  /***/
  function srcAppCardGridCardGridComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "button{\r\n        background-color:#4d004d ; \r\n        border-radius:10px;\r\n        width: 150px;\r\n        color: white;\r\n        padding: 15px 32px;\r\n        text-align: center;\r\n        text-decoration: none;\r\n        display: inline-block;\r\n        font-size: 18px;\r\n        font-weight: bold;\r\n        margin: 4px 2px;\r\n        cursor: pointer;\r\n        -webkit-transition-duration: 0.4s; /* Safari */\r\n        transition-duration: 0.4s;\r\n    }\r\n#btndiv\r\n{\r\n    text-align: center;\r\n}\r\nbutton:hover{\r\n        background-color: #ffff80;\r\n        color:#4d0026;\r\n    }\r\n#ga\r\n    {\r\n background-image: url('welcome1_background.jpg'); \r\nbackground-attachment: fixed;\r\nbackground-repeat: no-repeat;\r\nbackground-size: cover;\r\nposition: fixed;\r\ntop: 0px;\r\nleft: 0px;\r\nright: 0px; \r\nbottom: 0px;\r\n    }    \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2FyZC1ncmlkL2NhcmQtZ3JpZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO1FBQ1EseUJBQXlCO1FBQ3pCLGtCQUFrQjtRQUNsQixZQUFZO1FBQ1osWUFBWTtRQUNaLGtCQUFrQjtRQUNsQixrQkFBa0I7UUFDbEIscUJBQXFCO1FBQ3JCLHFCQUFxQjtRQUNyQixlQUFlO1FBQ2YsaUJBQWlCO1FBQ2pCLGVBQWU7UUFDZixlQUFlO1FBQ2YsaUNBQWlDLEVBQUUsV0FBVztRQUM5Qyx5QkFBeUI7SUFDN0I7QUFDSjs7SUFFSSxrQkFBa0I7QUFDdEI7QUFFSTtRQUNJLHlCQUF5QjtRQUN6QixhQUFhO0lBQ2pCO0FBRUE7O0NBRUgsZ0RBQXlFO0FBQzFFLDRCQUE0QjtBQUM1Qiw0QkFBNEI7QUFDNUIsc0JBQXNCO0FBQ3RCLGVBQWU7QUFDZixRQUFRO0FBQ1IsU0FBUztBQUNULFVBQVU7QUFDVixXQUFXO0lBQ1AiLCJmaWxlIjoic3JjL2FwcC9jYXJkLWdyaWQvY2FyZC1ncmlkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJidXR0b257XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjojNGQwMDRkIDsgXHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czoxMHB4O1xyXG4gICAgICAgIHdpZHRoOiAxNTBweDtcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgcGFkZGluZzogMTVweCAzMnB4O1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICBtYXJnaW46IDRweCAycHg7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNpdGlvbi1kdXJhdGlvbjogMC40czsgLyogU2FmYXJpICovXHJcbiAgICAgICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC40cztcclxuICAgIH1cclxuI2J0bmRpdlxyXG57XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbiAgICBidXR0b246aG92ZXJ7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmY4MDtcclxuICAgICAgICBjb2xvcjojNGQwMDI2O1xyXG4gICAgfSAgIFxyXG5cclxuICAgICNnYVxyXG4gICAge1xyXG4gYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLy4uLy4vLi4vYXNzZXRzL2ltYWdlcy93ZWxjb21lMV9iYWNrZ3JvdW5kLmpwZycpIDsgXHJcbmJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XHJcbmJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbmJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbnBvc2l0aW9uOiBmaXhlZDtcclxudG9wOiAwcHg7XHJcbmxlZnQ6IDBweDtcclxucmlnaHQ6IDBweDsgXHJcbmJvdHRvbTogMHB4O1xyXG4gICAgfSAgICAiXX0= */";
    /***/
  },

  /***/
  "./src/app/card-grid/card-grid.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/card-grid/card-grid.component.ts ***!
    \**************************************************/

  /*! exports provided: CardGridComponent */

  /***/
  function srcAppCardGridCardGridComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CardGridComponent", function () {
      return CardGridComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _images_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../images.service */
    "./src/app/images.service.ts");

    let CardGridComponent = class CardGridComponent {
      constructor(imageService) {
        this.imageService = imageService;
        this.cardsArray = this.imageService.Images;
        this.gameGrid = [];
        this.matchedCard = this.gameGrid.length;
        this.bool = false;
        this.levels = [1, 2, 3, 4, 5];
      }

      ngOnInit() {}

      addImages(l) {
        this.gameGrid = [];
        var imagearr = this.cardsArray.sort(function () {
          return 0.5 - Math.random();
        });
        console.log(l);

        for (var i = 0; i < l * 6; i++) {
          this.gameGrid[i] = imagearr[i]; //console.log(gameGrid[i]);
        }
      }

      start(l) {
        this.startGame(l);
      }

      startGame(l) {
        var firstGuess = '';
        var secondGuess = '';
        var count = 0;
        var previousTarget = null;
        var delay = 500;
        var matchedCard = this.matchedCard;
        var game = document.getElementById('game');
        var grid = document.createElement('section');
        grid.setAttribute('class', 'grid');
        game.innerHTML = "";
        grid.innerHTML = "";
        game.appendChild(grid);
        console.log(game);
        this.addImages(l);
        this.gameGrid = this.gameGrid.concat(this.gameGrid).sort(function () {
          return 0.5 - Math.random();
        });

        for (var i = 0; i < this.gameGrid.length; i++) {
          matchedCard = this.gameGrid.length;
          var name = this.gameGrid[i].name,
              img = this.gameGrid[i].img;
          var card = document.createElement('div');
          card.classList.add('card');
          card.dataset.name = name;
          var front = document.createElement('div');
          front.classList.add('front');
          var back = document.createElement('div');
          back.classList.add('back');
          back.style.backgroundImage = 'url(./assets/' + img + ')'; // back.setAttribute(src,img);

          if (l == 5) {
            var x = 150 - (l - 1) * 15.2;
            var y = 150 - 27.5 * 2;
          } else if (l == 4) {
            var x = 150 - (l - 1) * 12.2;
            var y = 150 - 27.5 * 2;
          } else if (l > 1) {
            var x = 150;
            var y = 150 - (l - 1) * 27.5;
          } else {
            var y = 150;
            var x = 150;
          }

          card.style.height = y + 'px';
          card.style.width = x + 'px';
          front.style.height = y + 'px';
          front.style.width = x + 'px';
          back.style.height = y + 'px';
          back.style.width = x + 'px';
          grid.appendChild(card);
          card.appendChild(front);
          card.appendChild(back);
        }

        var match = function match() {
          var selected = document.querySelectorAll('.selected');
          selected.forEach(function (card) {
            card.classList.add('match');
          });
        };

        var resetGuesses = function resetGuesses() {
          firstGuess = '';
          secondGuess = '';
          count = 0;
          previousTarget = null;
          var selected = document.querySelectorAll('.selected');
          selected.forEach(function (card) {
            card.classList.remove('selected');
          });
        };

        var bool = this.bool;
        grid.addEventListener('click', function (event) {
          var clicked = event.target;
          var click = clicked.parentNode;

          if (clicked.nodeName === 'SECTION' || clicked === previousTarget || click.classList.contains('selected') || click.classList.contains('match')) {
            return;
          }

          if (count < 2) {
            count++;

            if (count === 1) {
              firstGuess = click.dataset.name;
              console.log(firstGuess);
              click.classList.add('selected');
            } else {
              secondGuess = click.dataset.name;
              console.log(secondGuess);
              click.classList.add('selected');
            }

            if (firstGuess && secondGuess) {
              if (firstGuess === secondGuess) {
                setTimeout(match, delay);
                matchedCard = matchedCard - 2;
                console.log(matchedCard);
              }

              setTimeout(resetGuesses, delay);

              if (matchedCard == 0) {
                grid.innerHTML = "";
                alert("lvel complted");
              }
            }

            previousTarget = clicked;
          }
        });
      }

    };

    CardGridComponent.ctorParameters = () => [{
      type: _images_service__WEBPACK_IMPORTED_MODULE_2__["ImagesService"]
    }];

    CardGridComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-card-grid',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./card-grid.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/card-grid/card-grid.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./card-grid.component.css */
      "./src/app/card-grid/card-grid.component.css")).default]
    })], CardGridComponent);
    /***/
  },

  /***/
  "./src/app/images.service.ts":
  /*!***********************************!*\
    !*** ./src/app/images.service.ts ***!
    \***********************************/

  /*! exports provided: ImagesService */

  /***/
  function srcAppImagesServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ImagesService", function () {
      return ImagesService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    let ImagesService = class ImagesService {
      constructor() {
        this.Images = [{
          name: 'backtoad',
          img: 'images/Banktoad.png'
        }, {
          name: 'blue-shell',
          img: 'images/blue-shell.png'
        }, {
          name: 'blue-toad',
          img: 'images/BlueToad.png'
        }, {
          name: 'bomb',
          img: 'images/bomb.png'
        }, {
          name: 'boo',
          img: 'images/boo.png'
        }, {
          name: 'bowser-jr',
          img: 'images/bowser-jr.png'
        }, {
          name: 'bowser',
          img: 'images/Browser.png'
        }, {
          name: 'diddy',
          img: 'images/diddy-kong.png'
        }, {
          name: 'donkeykong',
          img: 'images/donkeykong.png'
        }, {
          name: 'Lggy',
          img: 'images/Iggy.png'
        }, {
          name: 'lemmy',
          img: 'images/lemmy.png'
        }, {
          name: 'Ludwig',
          img: 'images/Ludwig.png'
        }, {
          name: 'luigi',
          img: 'images/luigi.png'
        }, {
          name: 'Mario',
          img: 'images/Mario-PNG-Transparent-Image.png'
        }, {
          name: 'Morton',
          img: 'images/Morton.png'
        }, {
          name: 'mushroom',
          img: 'images/mushroom.png'
        }, {
          name: 'peach',
          img: 'images/princess-peach.png'
        }, {
          name: 'daisy',
          img: 'images/princess-daisy-png-1.png'
        }, {
          name: 'roy',
          img: 'images/Roy.png'
        }, {
          name: 'star',
          img: 'images/star.png'
        }, {
          name: 'Super_Crown',
          img: 'images/Super_Crown.png'
        }, {
          name: 'Toad',
          img: 'images/Toad.png'
        }, {
          name: 'Toadette',
          img: 'images/Toadette.png'
        }, {
          name: 'Toadsworth',
          img: 'images/Toadsworth.png'
        }, {
          name: 'Tortoise',
          img: 'images/tortoise.png'
        }, {
          name: 'Walugi',
          img: 'images/Waluigi.png'
        }, {
          name: 'Wario',
          img: 'images/Wario.png'
        }, {
          name: 'Yellow_Luma',
          img: 'images/Yellow_Luma.png'
        }, {
          name: 'Yoshi',
          img: 'images/Yoshi.png'
        }, {
          name: 'Boom_Boom',
          img: 'images/Boom_Boom.png'
        }];
      }

    };
    ImagesService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], ImagesService);
    /***/
  },

  /***/
  "./src/app/instruction/instruction.component.css":
  /*!*******************************************************!*\
    !*** ./src/app/instruction/instruction.component.css ***!
    \*******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppInstructionInstructionComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "#inst{\nbackground-image: url('welcome1_background.jpg');\n}\n\n.instructions_div{\n    margin-top: 1vw;\n     background: rgb(1,1,1,0.3);  \n    position: absolute;\n    padding: 1vw;\n    left: 30vw;\n    right: 30vw;\n    }\n\nH2{\n            font-size:30px;\n            font-family:sans-serif;\n            color: #4d004d;\n            margin-left:20px;\n            text-align: center;   \n        }\n\nh3{\n            font-size:25px;\n            font-family:sans-serif;\n            color: #4d004d;\n            text-align: center;\n        }\n\nol{\n            font-size:15px;\n            font-family:sans-serif;\n            font-weight: bold;\n            line-height: 30px;\n            color: #4d004d;\n    }\n\nbutton{\n        background-color:#4d004d ; \n        border-radius:10px;\n        width: 150px;\n        color: white;\n        padding: 15px 32px;\n        text-align: center;\n        text-decoration: none;\n        display: inline-block;\n        font-size: 16px;\n        margin: 4px 2px;\n        cursor: pointer;\n        -webkit-transition-duration: 0.4s; /* Safari */\n        transition-duration: 0.4s;\n    }\n\nbutton:hover{\n        box-shadow: 0 0 16px 0 rgba(0,0,0,0.24);\n    } \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW5zdHJ1Y3Rpb24vaW5zdHJ1Y3Rpb24uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBLGdEQUF3RTtBQUN4RTs7QUFFQTtJQUNJLGVBQWU7S0FDZCwwQkFBMEI7SUFDM0Isa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixVQUFVO0lBQ1YsV0FBVztJQUNYOztBQUNJO1lBQ0ksY0FBYztZQUNkLHNCQUFzQjtZQUN0QixjQUFjO1lBQ2QsZ0JBQWdCO1lBQ2hCLGtCQUFrQjtRQUN0Qjs7QUFDQTtZQUNJLGNBQWM7WUFDZCxzQkFBc0I7WUFDdEIsY0FBYztZQUNkLGtCQUFrQjtRQUN0Qjs7QUFDSjtZQUNRLGNBQWM7WUFDZCxzQkFBc0I7WUFDdEIsaUJBQWlCO1lBQ2pCLGlCQUFpQjtZQUNqQixjQUFjO0lBQ3RCOztBQUNBO1FBQ0kseUJBQXlCO1FBQ3pCLGtCQUFrQjtRQUNsQixZQUFZO1FBQ1osWUFBWTtRQUNaLGtCQUFrQjtRQUNsQixrQkFBa0I7UUFDbEIscUJBQXFCO1FBQ3JCLHFCQUFxQjtRQUNyQixlQUFlO1FBQ2YsZUFBZTtRQUNmLGVBQWU7UUFDZixpQ0FBaUMsRUFBRSxXQUFXO1FBQzlDLHlCQUF5QjtJQUM3Qjs7QUFDQTtRQUNJLHVDQUF1QztJQUMzQyIsImZpbGUiOiJzcmMvYXBwL2luc3RydWN0aW9uL2luc3RydWN0aW9uLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjaW5zdHtcbmJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi8uLi8uLy4uL2Fzc2V0cy9pbWFnZXMvd2VsY29tZTFfYmFja2dyb3VuZC5qcGcnKTtcbn1cblxuLmluc3RydWN0aW9uc19kaXZ7XG4gICAgbWFyZ2luLXRvcDogMXZ3O1xuICAgICBiYWNrZ3JvdW5kOiByZ2IoMSwxLDEsMC4zKTsgIFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBwYWRkaW5nOiAxdnc7XG4gICAgbGVmdDogMzB2dztcbiAgICByaWdodDogMzB2dztcbiAgICB9XG4gICAgICAgIEgye1xuICAgICAgICAgICAgZm9udC1zaXplOjMwcHg7XG4gICAgICAgICAgICBmb250LWZhbWlseTpzYW5zLXNlcmlmO1xuICAgICAgICAgICAgY29sb3I6ICM0ZDAwNGQ7XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDoyMHB4O1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyOyAgIFxuICAgICAgICB9ICAgICAgXG4gICAgICAgIGgze1xuICAgICAgICAgICAgZm9udC1zaXplOjI1cHg7XG4gICAgICAgICAgICBmb250LWZhbWlseTpzYW5zLXNlcmlmO1xuICAgICAgICAgICAgY29sb3I6ICM0ZDAwNGQ7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIH0gXG4gICAgb2x7XG4gICAgICAgICAgICBmb250LXNpemU6MTVweDtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OnNhbnMtc2VyaWY7XG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xuICAgICAgICAgICAgY29sb3I6ICM0ZDAwNGQ7XG4gICAgfVxuICAgIGJ1dHRvbntcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjojNGQwMDRkIDsgXG4gICAgICAgIGJvcmRlci1yYWRpdXM6MTBweDtcbiAgICAgICAgd2lkdGg6IDE1MHB4O1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgIHBhZGRpbmc6IDE1cHggMzJweDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICBtYXJnaW46IDRweCAycHg7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgLXdlYmtpdC10cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjRzOyAvKiBTYWZhcmkgKi9cbiAgICAgICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC40cztcbiAgICB9XG4gICAgYnV0dG9uOmhvdmVye1xuICAgICAgICBib3gtc2hhZG93OiAwIDAgMTZweCAwIHJnYmEoMCwwLDAsMC4yNCk7XG4gICAgfSAiXX0= */";
    /***/
  },

  /***/
  "./src/app/instruction/instruction.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/instruction/instruction.component.ts ***!
    \******************************************************/

  /*! exports provided: InstructionComponent */

  /***/
  function srcAppInstructionInstructionComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InstructionComponent", function () {
      return InstructionComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    let InstructionComponent = class InstructionComponent {
      constructor() {}

      ngOnInit() {}

    };
    InstructionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-instruction',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./instruction.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/instruction/instruction.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./instruction.component.css */
      "./src/app/instruction/instruction.component.css")).default]
    })], InstructionComponent);
    /***/
  },

  /***/
  "./src/app/registeration/registeration.component.css":
  /*!***********************************************************!*\
    !*** ./src/app/registeration/registeration.component.css ***!
    \***********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppRegisterationRegisterationComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".container { \n    width:90%; \n    height:560px; \n    padding-top:20px; \n    padding-left:20px; \n    padding-right:20px;\n    margin-left: 40px; \n} \n\ninput{\n    width:360px;\n    height:30px;\n    border-radius:10px;\n    padding-left: 17px;\n    color: #4d1933;\n    font-size:15px;   \n    font-weight: bold;\n    background-color: #f5f5f0;    \n} \n\nbutton{\n    background-color:#4d1933 ; \n    border-radius:10px;\n    width: 150px;\n    color: white;\n    padding: 15px 32px;\n    text-align: center;\n    text-decoration: none;\n    display: inline-block;\n    font-size: 16px;\n    margin: 4px 2px;\n    cursor: pointer;\n    -webkit-transition-duration: 0.4s; /* Safari */\n    transition-duration: 0.4s;\n} \n\nbutton:hover{\n        box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24),0 17px 50px 0 rgba(0,0,0,0.19);\n    } \n\n#name-box { \n    float:left; \n    width:300px; \n    height:500px; \n    border-radius: 5px;\n    background-color:#e9e9e2; \n    margin-right:40px;\n\n} \n\n.text{\n    color: #99004d;\n    font-size:60px;\n    font-family:'Brush Script MT',Georgia,Times,'Times New Roman',serif;\n    font-weight: bolder;    \n    padding-top: 50px;  \n    padding-bottom: 50px;\n    text-align: center;\n} \n\n#login-box { \n    float:left; \n    width:400px; \n    height:500px; \n    border-radius: 5px;\n    background-color:#e9e9e2; \n    padding-left:10px;\n} \n\nh3{\n    margin-top: 40px;\n    font-size:40px;\n    font-family:sans-serif;\n    color:#602040;\n    text-align: center;\n} \n\nh2{\n    font-size:26px;\n    font-family:sans-serif;\n    color:#602040;\n    margin-left:20px;\n    text-align: left;   \n} \n\nlabel{\n    font-size:17px;\n    font-family:sans-serif;\n    color:#602040;\n    margin-left:20px;\n    text-align: left; \n    font-weight:bold;\n} \n\n#signup-box { \n    float:right; \n    width:400px; \n    height:500px; \n    border-radius: 5px;\n    background-color:#e9e9e2; \n    padding-left:10px;\n} \n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVnaXN0ZXJhdGlvbi9yZWdpc3RlcmF0aW9uLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxTQUFTO0lBQ1QsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixjQUFjO0lBQ2QsY0FBYztJQUNkLGlCQUFpQjtJQUNqQix5QkFBeUI7QUFDN0I7O0FBQ0E7SUFDSSx5QkFBeUI7SUFDekIsa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixxQkFBcUI7SUFDckIscUJBQXFCO0lBQ3JCLGVBQWU7SUFDZixlQUFlO0lBQ2YsZUFBZTtJQUNmLGlDQUFpQyxFQUFFLFdBQVc7SUFDOUMseUJBQXlCO0FBQzdCOztBQUNJO1FBQ0kseUVBQXlFO0lBQzdFOztBQUVKO0lBQ0ksVUFBVTtJQUNWLFdBQVc7SUFDWCxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLHdCQUF3QjtJQUN4QixpQkFBaUI7O0FBRXJCOztBQUNBO0lBQ0ksY0FBYztJQUNkLGNBQWM7SUFDZCxtRUFBbUU7SUFDbkUsbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQixvQkFBb0I7SUFDcEIsa0JBQWtCO0FBQ3RCOztBQUNBO0lBQ0ksVUFBVTtJQUNWLFdBQVc7SUFDWCxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLHdCQUF3QjtJQUN4QixpQkFBaUI7QUFDckI7O0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsY0FBYztJQUNkLHNCQUFzQjtJQUN0QixhQUFhO0lBQ2Isa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksY0FBYztJQUNkLHNCQUFzQjtJQUN0QixhQUFhO0lBQ2IsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtBQUNwQjs7QUFDQTtJQUNJLGNBQWM7SUFDZCxzQkFBc0I7SUFDdEIsYUFBYTtJQUNiLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksV0FBVztJQUNYLFdBQVc7SUFDWCxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLHdCQUF3QjtJQUN4QixpQkFBaUI7QUFDckIiLCJmaWxlIjoic3JjL2FwcC9yZWdpc3RlcmF0aW9uL3JlZ2lzdGVyYXRpb24uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIgeyBcbiAgICB3aWR0aDo5MCU7IFxuICAgIGhlaWdodDo1NjBweDsgXG4gICAgcGFkZGluZy10b3A6MjBweDsgXG4gICAgcGFkZGluZy1sZWZ0OjIwcHg7IFxuICAgIHBhZGRpbmctcmlnaHQ6MjBweDtcbiAgICBtYXJnaW4tbGVmdDogNDBweDsgXG59IFxuXG5pbnB1dHtcbiAgICB3aWR0aDozNjBweDtcbiAgICBoZWlnaHQ6MzBweDtcbiAgICBib3JkZXItcmFkaXVzOjEwcHg7XG4gICAgcGFkZGluZy1sZWZ0OiAxN3B4O1xuICAgIGNvbG9yOiAjNGQxOTMzO1xuICAgIGZvbnQtc2l6ZToxNXB4OyAgIFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmNWY1ZjA7ICAgIFxufVxuYnV0dG9ue1xuICAgIGJhY2tncm91bmQtY29sb3I6IzRkMTkzMyA7IFxuICAgIGJvcmRlci1yYWRpdXM6MTBweDtcbiAgICB3aWR0aDogMTUwcHg7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHBhZGRpbmc6IDE1cHggMzJweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgbWFyZ2luOiA0cHggMnB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAtd2Via2l0LXRyYW5zaXRpb24tZHVyYXRpb246IDAuNHM7IC8qIFNhZmFyaSAqL1xuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuNHM7XG59XG4gICAgYnV0dG9uOmhvdmVye1xuICAgICAgICBib3gtc2hhZG93OiAwIDEycHggMTZweCAwIHJnYmEoMCwwLDAsMC4yNCksMCAxN3B4IDUwcHggMCByZ2JhKDAsMCwwLDAuMTkpO1xuICAgIH0gICAgXG4gICAgXG4jbmFtZS1ib3ggeyBcbiAgICBmbG9hdDpsZWZ0OyBcbiAgICB3aWR0aDozMDBweDsgXG4gICAgaGVpZ2h0OjUwMHB4OyBcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjojZTllOWUyOyBcbiAgICBtYXJnaW4tcmlnaHQ6NDBweDtcblxufSBcbi50ZXh0e1xuICAgIGNvbG9yOiAjOTkwMDRkO1xuICAgIGZvbnQtc2l6ZTo2MHB4O1xuICAgIGZvbnQtZmFtaWx5OidCcnVzaCBTY3JpcHQgTVQnLEdlb3JnaWEsVGltZXMsJ1RpbWVzIE5ldyBSb21hbicsc2VyaWY7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjsgICAgXG4gICAgcGFkZGluZy10b3A6IDUwcHg7ICBcbiAgICBwYWRkaW5nLWJvdHRvbTogNTBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4jbG9naW4tYm94IHsgXG4gICAgZmxvYXQ6bGVmdDsgXG4gICAgd2lkdGg6NDAwcHg7IFxuICAgIGhlaWdodDo1MDBweDsgXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6I2U5ZTllMjsgXG4gICAgcGFkZGluZy1sZWZ0OjEwcHg7XG59XG5oM3tcbiAgICBtYXJnaW4tdG9wOiA0MHB4O1xuICAgIGZvbnQtc2l6ZTo0MHB4O1xuICAgIGZvbnQtZmFtaWx5OnNhbnMtc2VyaWY7XG4gICAgY29sb3I6IzYwMjA0MDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59IFxuXG5oMntcbiAgICBmb250LXNpemU6MjZweDtcbiAgICBmb250LWZhbWlseTpzYW5zLXNlcmlmO1xuICAgIGNvbG9yOiM2MDIwNDA7XG4gICAgbWFyZ2luLWxlZnQ6MjBweDtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0OyAgIFxufSBcbmxhYmVse1xuICAgIGZvbnQtc2l6ZToxN3B4O1xuICAgIGZvbnQtZmFtaWx5OnNhbnMtc2VyaWY7XG4gICAgY29sb3I6IzYwMjA0MDtcbiAgICBtYXJnaW4tbGVmdDoyMHB4O1xuICAgIHRleHQtYWxpZ246IGxlZnQ7IFxuICAgIGZvbnQtd2VpZ2h0OmJvbGQ7XG59ICAgXG4gICAgICAgIFxuI3NpZ251cC1ib3ggeyBcbiAgICBmbG9hdDpyaWdodDsgXG4gICAgd2lkdGg6NDAwcHg7IFxuICAgIGhlaWdodDo1MDBweDsgXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6I2U5ZTllMjsgXG4gICAgcGFkZGluZy1sZWZ0OjEwcHg7XG59IFxuIl19 */";
    /***/
  },

  /***/
  "./src/app/registeration/registeration.component.ts":
  /*!**********************************************************!*\
    !*** ./src/app/registeration/registeration.component.ts ***!
    \**********************************************************/

  /*! exports provided: RegisterationComponent */

  /***/
  function srcAppRegisterationRegisterationComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RegisterationComponent", function () {
      return RegisterationComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _user_registration_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./../user-registration.service */
    "./src/app/user-registration.service.ts");

    let RegisterationComponent = class RegisterationComponent {
      constructor(service, router) {
        this.service = service;
        this.router = router;
        this.name = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      }

      ngOnInit() {}

      onRegister(form) {// if(form.valid == true)
        // { 
        //   this.router.navigate(['/submit']);
        // }
      }

      registerProcess(form) {
        console.log(form.value);

        if (form.valid == false) {
          alert("Fill all details");
        } else {
          alert("Registered Successfully");
          let response = this.service.doRegistration(form.value);
          response.subscribe(data => this.message = data);
        }
      }

      onLogin(form) {
        this.name.emit(form.value.email);
        console.log(form);

        if (form.value.email != "" && form.value.password != "") {
          let response = this.service.gettingCredentials();
          response.subscribe(data => this.credentials = data);
          let email = form.value.email;
          let password = form.value.password;

          for (let i = 0; i < this.credentials.length; i++) {
            console.log(form.valid);

            if (email == this.credentials[i].email && password == this.credentials[i].password) {
              //   this.auth.flag = true;
              this.flag = 1;
              alert("Credentials Verified");
              this.router.navigateByUrl('/welcome');
              break;
            } else {
              //   this.auth.flag = false;
              //   console.log(this.credentials[i].password);
              this.flag = 0;
            }
          }

          if (this.flag == 0) {
            alert("Invalid Credentials");
          }
        } else {
          alert("Pls enter all fields");
        }
      }

    };

    RegisterationComponent.ctorParameters = () => [{
      type: _user_registration_service__WEBPACK_IMPORTED_MODULE_3__["UserRegistrationService"]
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
    }];

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], RegisterationComponent.prototype, "name", void 0);
    RegisterationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-registeration',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./registeration.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/registeration/registeration.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./registeration.component.css */
      "./src/app/registeration/registeration.component.css")).default]
    })], RegisterationComponent);
    /***/
  },

  /***/
  "./src/app/terms/terms.component.css":
  /*!*******************************************!*\
    !*** ./src/app/terms/terms.component.css ***!
    \*******************************************/

  /*! exports provided: default */

  /***/
  function srcAppTermsTermsComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Rlcm1zL3Rlcm1zLmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/terms/terms.component.ts":
  /*!******************************************!*\
    !*** ./src/app/terms/terms.component.ts ***!
    \******************************************/

  /*! exports provided: TermsComponent */

  /***/
  function srcAppTermsTermsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TermsComponent", function () {
      return TermsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    let TermsComponent = class TermsComponent {
      constructor() {}

      ngOnInit() {}

    };
    TermsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-terms',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./terms.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/terms/terms.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./terms.component.css */
      "./src/app/terms/terms.component.css")).default]
    })], TermsComponent);
    /***/
  },

  /***/
  "./src/app/user-registration.service.ts":
  /*!**********************************************!*\
    !*** ./src/app/user-registration.service.ts ***!
    \**********************************************/

  /*! exports provided: UserRegistrationService */

  /***/
  function srcAppUserRegistrationServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserRegistrationService", function () {
      return UserRegistrationService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    let UserRegistrationService = class UserRegistrationService {
      constructor(http) {
        this.http = http;
      }

      doRegistration(user) {
        return this.http.post("http://localhost:8090/create", user, {
          responseType: 'text'
        });
      }

      gettingCredentials() {
        return this.http.get("http://localhost:8090/getAll");
      }

    };

    UserRegistrationService.ctorParameters = () => [{
      type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
    }];

    UserRegistrationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
      providedIn: 'root'
    })], UserRegistrationService);
    /***/
  },

  /***/
  "./src/app/welcome/welcome.component.css":
  /*!***********************************************!*\
    !*** ./src/app/welcome/welcome.component.css ***!
    \***********************************************/

  /*! exports provided: default */

  /***/
  function srcAppWelcomeWelcomeComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\r\nh1\r\n{\r\n    color: #99004d;\r\n    font-size:35px;\r\n    font-family:sans-serif;\r\n    font-weight: bolder;    \r\n    padding-top: 25px;  \r\n    padding-left: 30px;\r\n    text-align: center;\r\n}\r\n#wlcm\r\n{\r\nbackground-image: url('welcome2_background.jpg'); \r\nbackground-attachment: fixed;\r\nbackground-repeat: no-repeat;\r\nbackground-size: cover;\r\nheight:800px;\r\nposition: fixed;\r\ntop: 0px;\r\nleft: 0px;\r\nright: 0px;\r\n}\r\n#instructions_div{\r\n    margin-top: 1vw;\r\n     background: rgba(221, 218, 218, 0.6);  \r\n    position: absolute;\r\n    padding: 1vw;\r\n    left: 30vw;\r\n    right: 30vw;\r\n    text-align: center;\r\n    }\r\nH2{\r\n            font-size:30px;\r\n            font-family:sans-serif;\r\n            color: #391439;\r\n            margin-left:20px;\r\n            text-align: center;   \r\n        }\r\nh3{\r\n            font-size:25px;\r\n            font-family:sans-serif;\r\n            color: #391439;\r\n            text-align: center;\r\n        }\r\nol{\r\n            font-size:20px;\r\n            font-family:sans-serif;\r\n            font-weight: bold;\r\n            line-height: 30px;\r\n            color:  #391439;\r\n\r\n            text-align: left;\r\n    }\r\nbutton{\r\n        background-color:#4d004d ; \r\n        border-radius:10px;\r\n        width: 150px;\r\n        color: white;\r\n        padding: 15px 32px;\r\n        text-align: center;\r\n        text-decoration: none;\r\n        display: inline-block;\r\n        font-size: 16px;\r\n        margin: 4px 2px;\r\n        cursor: pointer;\r\n        -webkit-transition-duration: 0.4s; /* Safari */\r\n        transition-duration: 0.4s;\r\n    }\r\nbutton:hover{\r\n        box-shadow: 0 0 16px 0 rgba(0,0,0,0.24);\r\n    } \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd2VsY29tZS93ZWxjb21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBOztJQUVJLGNBQWM7SUFDZCxjQUFjO0lBQ2Qsc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtBQUN0QjtBQUNBOztBQUVBLGdEQUF5RTtBQUN6RSw0QkFBNEI7QUFDNUIsNEJBQTRCO0FBQzVCLHNCQUFzQjtBQUN0QixZQUFZO0FBQ1osZUFBZTtBQUNmLFFBQVE7QUFDUixTQUFTO0FBQ1QsVUFBVTtBQUNWO0FBR0E7SUFDSSxlQUFlO0tBQ2Qsb0NBQW9DO0lBQ3JDLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osVUFBVTtJQUNWLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEI7QUFDSTtZQUNJLGNBQWM7WUFDZCxzQkFBc0I7WUFDdEIsY0FBYztZQUNkLGdCQUFnQjtZQUNoQixrQkFBa0I7UUFDdEI7QUFDQTtZQUNJLGNBQWM7WUFDZCxzQkFBc0I7WUFDdEIsY0FBYztZQUNkLGtCQUFrQjtRQUN0QjtBQUNKO1lBQ1EsY0FBYztZQUNkLHNCQUFzQjtZQUN0QixpQkFBaUI7WUFDakIsaUJBQWlCO1lBQ2pCLGVBQWU7O1lBRWYsZ0JBQWdCO0lBQ3hCO0FBQ0E7UUFDSSx5QkFBeUI7UUFDekIsa0JBQWtCO1FBQ2xCLFlBQVk7UUFDWixZQUFZO1FBQ1osa0JBQWtCO1FBQ2xCLGtCQUFrQjtRQUNsQixxQkFBcUI7UUFDckIscUJBQXFCO1FBQ3JCLGVBQWU7UUFDZixlQUFlO1FBQ2YsZUFBZTtRQUNmLGlDQUFpQyxFQUFFLFdBQVc7UUFDOUMseUJBQXlCO0lBQzdCO0FBQ0E7UUFDSSx1Q0FBdUM7SUFDM0MiLCJmaWxlIjoic3JjL2FwcC93ZWxjb21lL3dlbGNvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5oMVxyXG57XHJcbiAgICBjb2xvcjogIzk5MDA0ZDtcclxuICAgIGZvbnQtc2l6ZTozNXB4O1xyXG4gICAgZm9udC1mYW1pbHk6c2Fucy1zZXJpZjtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7ICAgIFxyXG4gICAgcGFkZGluZy10b3A6IDI1cHg7ICBcclxuICAgIHBhZGRpbmctbGVmdDogMzBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4jd2xjbVxyXG57XHJcbmJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi8uLi8uLy4uL2Fzc2V0cy9pbWFnZXMvd2VsY29tZTJfYmFja2dyb3VuZC5qcGcnKSA7IFxyXG5iYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xyXG5iYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG5iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG5oZWlnaHQ6ODAwcHg7XHJcbnBvc2l0aW9uOiBmaXhlZDtcclxudG9wOiAwcHg7XHJcbmxlZnQ6IDBweDtcclxucmlnaHQ6IDBweDtcclxufVxyXG5cclxuXHJcbiNpbnN0cnVjdGlvbnNfZGl2e1xyXG4gICAgbWFyZ2luLXRvcDogMXZ3O1xyXG4gICAgIGJhY2tncm91bmQ6IHJnYmEoMjIxLCAyMTgsIDIxOCwgMC42KTsgIFxyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcGFkZGluZzogMXZ3O1xyXG4gICAgbGVmdDogMzB2dztcclxuICAgIHJpZ2h0OiAzMHZ3O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG4gICAgICAgIEgye1xyXG4gICAgICAgICAgICBmb250LXNpemU6MzBweDtcclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6c2Fucy1zZXJpZjtcclxuICAgICAgICAgICAgY29sb3I6ICMzOTE0Mzk7XHJcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OjIwcHg7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjsgICBcclxuICAgICAgICB9ICAgICAgXHJcbiAgICAgICAgaDN7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZToyNXB4O1xyXG4gICAgICAgICAgICBmb250LWZhbWlseTpzYW5zLXNlcmlmO1xyXG4gICAgICAgICAgICBjb2xvcjogIzM5MTQzOTtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIH0gXHJcbiAgICBvbHtcclxuICAgICAgICAgICAgZm9udC1zaXplOjIwcHg7XHJcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OnNhbnMtc2VyaWY7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMzBweDtcclxuICAgICAgICAgICAgY29sb3I6ICAjMzkxNDM5O1xyXG5cclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIH1cclxuICAgIGJ1dHRvbntcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiM0ZDAwNGQgOyBcclxuICAgICAgICBib3JkZXItcmFkaXVzOjEwcHg7XHJcbiAgICAgICAgd2lkdGg6IDE1MHB4O1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICBwYWRkaW5nOiAxNXB4IDMycHg7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgIG1hcmdpbjogNHB4IDJweDtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjRzOyAvKiBTYWZhcmkgKi9cclxuICAgICAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjRzO1xyXG4gICAgfVxyXG4gICAgYnV0dG9uOmhvdmVye1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDAgMCAxNnB4IDAgcmdiYSgwLDAsMCwwLjI0KTtcclxuICAgIH0gIl19 */";
    /***/
  },

  /***/
  "./src/app/welcome/welcome.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/welcome/welcome.component.ts ***!
    \**********************************************/

  /*! exports provided: WelcomeComponent */

  /***/
  function srcAppWelcomeWelcomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WelcomeComponent", function () {
      return WelcomeComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    let WelcomeComponent = class WelcomeComponent {
      constructor() {}

      ngOnInit() {}

      onFetchUser(event) {
        console.log("hello");
        this.username = event;
      }

    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], WelcomeComponent.prototype, "username", void 0);
    WelcomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-welcome',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./welcome.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/welcome/welcome.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./welcome.component.css */
      "./src/app/welcome/welcome.component.css")).default]
    })], WelcomeComponent);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
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

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"]).catch(err => console.error(err));
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Users\DELL\Desktop\Project\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map