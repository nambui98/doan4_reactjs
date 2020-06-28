(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[23],{

/***/ "./resources/js/isomophic/components/uielements/form.js":
/*!**************************************************************!*\
  !*** ./resources/js/isomophic/components/uielements/form.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");

/* harmony default export */ __webpack_exports__["default"] = (antd__WEBPACK_IMPORTED_MODULE_0__["Form"]);

/***/ }),

/***/ "./resources/js/isomophic/containers/Page/updateNewPass.js":
/*!*****************************************************************!*\
  !*** ./resources/js/isomophic/containers/Page/updateNewPass.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _components_uielements_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/uielements/button */ "./resources/js/isomophic/components/uielements/button.js");
/* harmony import */ var _redux_auth_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../redux/auth/actions */ "./resources/js/isomophic/redux/auth/actions.js");
/* harmony import */ var _components_utility_intlMessages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/utility/intlMessages */ "./resources/js/isomophic/components/utility/intlMessages.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _components_uielements_form__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/uielements/form */ "./resources/js/isomophic/components/uielements/form.js");
/* harmony import */ var _common_data_style__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../common/data.style */ "./resources/js/isomophic/common/data.style.js");
/* harmony import */ var _src_public_images_logo_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../src/public/images/logo.png */ "./resources/js/src/public/images/logo.png");
/* harmony import */ var _src_public_images_logo_png__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_src_public_images_logo_png__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _src_public_images_icon_login_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../src/public/images/icon-login.png */ "./resources/js/src/public/images/icon-login.png");
/* harmony import */ var _src_public_images_icon_login_png__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_src_public_images_icon_login_png__WEBPACK_IMPORTED_MODULE_9__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }











var FormItem = _components_uielements_form__WEBPACK_IMPORTED_MODULE_6__["default"].Item;
var confirmPass = _redux_auth_actions__WEBPACK_IMPORTED_MODULE_3__["default"].confirmPass;

var SignIn = /*#__PURE__*/function (_Component) {
  _inherits(SignIn, _Component);

  var _super = _createSuper(SignIn);

  function SignIn(props) {
    var _this;

    _classCallCheck(this, SignIn);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "handleSave", function (e) {
      e.preventDefault();
      var confirmPass = _this.props.confirmPass;

      _this.props.form.validateFieldsAndScroll(function (err, values) {
        if (!err) {
          var obj = {
            confirmCode: _this.props.location.pathname.replace('/confirm_password/', ''),
            platform: 'web',
            password: values.newpass,
            confirmPassword: values.confirmpass
          };
          confirmPass(obj);

          _this.props.history.push('/signin');
        }
      });
    });

    _defineProperty(_assertThisInitialized(_this), "compareToFirstPassword", function (rule, value, callback) {
      var form = _this.props.form;

      if (value && value.length >= 5 && value !== form.getFieldValue('newpass')) {
        callback('Password mismatch');
      } else {
        callback();
      }
    });

    _this.state = {
      redirectToReferrer: props.isLoggedIn,
      show: 'login',
      userLogin: {
        username: '',
        password: ''
      },
      changed: false
    };
    return _this;
  }

  _createClass(SignIn, [{
    key: "handleChange",
    value: function handleChange() {
      this.setState({
        changed: true
      });
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {}
  }, {
    key: "render",
    value: function render() {
      var getFieldDecorator = this.props.form.getFieldDecorator;
      var formItemLayout = {
        wrapperCol: {
          sm: {
            span: 24
          }
        }
      };
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_data_style__WEBPACK_IMPORTED_MODULE_7__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "my-body"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "my-container"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "my-logo"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "#home"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: _src_public_images_logo_png__WEBPACK_IMPORTED_MODULE_8___default.a,
        alt: "Beta Three"
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "bound-login"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "outer-form"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "icon-login"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: _src_public_images_icon_login_png__WEBPACK_IMPORTED_MODULE_9___default.a,
        alt: "Beta Three"
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "content-login"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_uielements_form__WEBPACK_IMPORTED_MODULE_6__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
        level: 3,
        style: {
          textAlign: 'center',
          textTransform: 'uppercase'
        }
      }, "Reset password"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FormItem, _extends({}, formItemLayout, {
        style: {
          marginBottom: '10px'
        },
        hasFeedback: true
      }), getFieldDecorator('newpass', {
        rules: [{
          required: true,
          message: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_utility_intlMessages__WEBPACK_IMPORTED_MODULE_4__["default"], {
            id: "form.validate.this"
          })
        }, {
          min: 6,
          message: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_utility_intlMessages__WEBPACK_IMPORTED_MODULE_4__["default"], {
            id: "form.validate.username6_20"
          })
        }, {
          max: 20,
          message: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_utility_intlMessages__WEBPACK_IMPORTED_MODULE_4__["default"], {
            id: "form.validate.username6_20"
          })
        }, {
          whitespace: true,
          message: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_utility_intlMessages__WEBPACK_IMPORTED_MODULE_4__["default"], {
            id: "form.validate.passwordOrther"
          })
        }, {
          validator: this.validateToNextPassword
        }]
      })( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_5__["Input"], {
        className: "inputLogin",
        size: "large",
        onChange: this.handleChange.bind(this),
        placeholder: "New Password",
        type: "password"
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FormItem, _extends({}, formItemLayout, {
        style: {
          marginBottom: '10px'
        },
        hasFeedback: true
      }), getFieldDecorator('confirmpass', {
        rules: [{
          required: true,
          message: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_utility_intlMessages__WEBPACK_IMPORTED_MODULE_4__["default"], {
            id: "form.validate.this"
          })
        }, {
          min: 6,
          message: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_utility_intlMessages__WEBPACK_IMPORTED_MODULE_4__["default"], {
            id: "form.validate.username6_20"
          })
        }, {
          max: 20,
          message: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_utility_intlMessages__WEBPACK_IMPORTED_MODULE_4__["default"], {
            id: "form.validate.username6_20"
          })
        }, {
          whitespace: true,
          message: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_utility_intlMessages__WEBPACK_IMPORTED_MODULE_4__["default"], {
            id: "form.validate.passwordOrther"
          })
        }, {
          validator: this.compareToFirstPassword
        }]
      })( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_5__["Input"], {
        onChange: this.handleChange.bind(this),
        placeholder: "Confirm Password",
        className: "inputLogin",
        size: "large",
        type: "password"
      })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "isoInputWrapper isoLeftRightComponent"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_uielements_button__WEBPACK_IMPORTED_MODULE_2__["default"], {
        className: "loginButton",
        onClick: this.handleSave,
        disabled: !this.state.changed
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_utility_intlMessages__WEBPACK_IMPORTED_MODULE_4__["default"], {
        id: "button.save"
      }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "footer-login hidden-xs"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "address"
      }, "2020 @ Copyright Fors Co,. Ltd"))))));
    }
  }]);

  return SignIn;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

var WrappedSingIn = _components_uielements_form__WEBPACK_IMPORTED_MODULE_6__["default"].create()(SignIn);
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(function (state) {
  return {
    isLoggedIn: state.Auth.idToken !== null ? true : false,
    role_detail: state.Auth.role_detail
  };
}, {
  confirmPass: confirmPass
})(WrappedSingIn));

/***/ }),

/***/ "./resources/js/src/public/images/icon-login.png":
/*!*******************************************************!*\
  !*** ./resources/js/src/public/images/icon-login.png ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/icon-login.png?4ee225b6c8d0c66ab6716125823b941e";

/***/ }),

/***/ "./resources/js/src/public/images/logo.png":
/*!*************************************************!*\
  !*** ./resources/js/src/public/images/logo.png ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/logo.png?c92da89e75b9f5ed4b88c185ddffaa31";

/***/ })

}]);