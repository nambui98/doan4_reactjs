(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[19],{

/***/ "./resources/js/isomophic/components/uielements/checkbox.js":
/*!******************************************************************!*\
  !*** ./resources/js/isomophic/components/uielements/checkbox.js ***!
  \******************************************************************/
/*! exports provided: default, CheckboxGroup */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckboxGroup", function() { return CheckboxGroup; });
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _styles_checkbox_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/checkbox.style */ "./resources/js/isomophic/components/uielements/styles/checkbox.style.js");


var checkbox = Object(_styles_checkbox_style__WEBPACK_IMPORTED_MODULE_1__["default"])(antd__WEBPACK_IMPORTED_MODULE_0__["Checkbox"]);
var CheckboxGroup = antd__WEBPACK_IMPORTED_MODULE_0__["Checkbox"].Group;
/* harmony default export */ __webpack_exports__["default"] = (checkbox);


/***/ }),

/***/ "./resources/js/isomophic/components/uielements/styles/checkbox.style.js":
/*!*******************************************************************************!*\
  !*** ./resources/js/isomophic/components/uielements/styles/checkbox.style.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var styled_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-theme */ "./node_modules/styled-theme/index.js");
/* harmony import */ var styled_theme__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_theme__WEBPACK_IMPORTED_MODULE_1__);
function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  &.ant-checkbox-wrapper {\n    font-size: 13px;\n    color: ", ";\n\n    .ant-checkbox {\n      top: inherit;\n    }\n\n    .ant-checkbox-checked .ant-checkbox-inner,\n    .ant-checkbox-indeterminate .ant-checkbox-inner {\n      background-color: ", ";\n      border-color: ", ";\n    }\n\n    .ant-checkbox:hover .ant-checkbox-inner,\n    .ant-checkbox-input:focus + .ant-checkbox-inner {\n      border-color: ", ";\n    }\n\n    &:hover {\n      .ant-checkbox-inner {\n        border-color: ", ";\n      }\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }




var AntCheckbox = function AntCheckbox(ComponentName) {
  return Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["default"])(ComponentName)(_templateObject(), Object(styled_theme__WEBPACK_IMPORTED_MODULE_1__["palette"])("text", 1), Object(styled_theme__WEBPACK_IMPORTED_MODULE_1__["palette"])("primary", 0), Object(styled_theme__WEBPACK_IMPORTED_MODULE_1__["palette"])("primary", 0), Object(styled_theme__WEBPACK_IMPORTED_MODULE_1__["palette"])("primary", 0), Object(styled_theme__WEBPACK_IMPORTED_MODULE_1__["palette"])("primary", 0));
};

/* harmony default export */ __webpack_exports__["default"] = (AntCheckbox);

/***/ }),

/***/ "./resources/js/isomophic/containers/Page/signup.js":
/*!**********************************************************!*\
  !*** ./resources/js/isomophic/containers/Page/signup.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _components_uielements_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/uielements/input */ "./resources/js/isomophic/components/uielements/input.js");
/* harmony import */ var _components_uielements_checkbox__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/uielements/checkbox */ "./resources/js/isomophic/components/uielements/checkbox.js");
/* harmony import */ var _components_uielements_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/uielements/button */ "./resources/js/isomophic/components/uielements/button.js");
/* harmony import */ var _redux_auth_actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../redux/auth/actions */ "./resources/js/isomophic/redux/auth/actions.js");
/* harmony import */ var _redux_app_actions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../redux/app/actions */ "./resources/js/isomophic/redux/app/actions.js");
/* harmony import */ var _components_utility_intlMessages__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/utility/intlMessages */ "./resources/js/isomophic/components/utility/intlMessages.js");
/* harmony import */ var _signup_style__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./signup.style */ "./resources/js/isomophic/containers/Page/signup.style.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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











var login = _redux_auth_actions__WEBPACK_IMPORTED_MODULE_6__["default"].login;
var clearMenu = _redux_app_actions__WEBPACK_IMPORTED_MODULE_7__["default"].clearMenu;

var SignUp = /*#__PURE__*/function (_Component) {
  _inherits(SignUp, _Component);

  var _super = _createSuper(SignUp);

  function SignUp() {
    var _this;

    _classCallCheck(this, SignUp);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "state", {
      redirectToReferrer: false
    });

    _defineProperty(_assertThisInitialized(_this), "handleLogin", function () {
      var _this$props = _this.props,
          login = _this$props.login,
          clearMenu = _this$props.clearMenu;
      login();
      clearMenu();

      _this.props.history.push("/");
    });

    return _this;
  }

  _createClass(SignUp, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      if (this.props.isLoggedIn !== nextProps.isLoggedIn && nextProps.isLoggedIn === true) {
        this.setState({
          redirectToReferrer: true
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_signup_style__WEBPACK_IMPORTED_MODULE_9__["default"], {
        className: "isoSignUpPage"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "isoSignUpContentWrapper"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "isoSignUpContent"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "isoLogoWrapper"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
        to: "/dashboard"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_utility_intlMessages__WEBPACK_IMPORTED_MODULE_8__["default"], {
        id: "page.signUpTitle"
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "isoSignUpForm"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "isoInputWrapper isoLeftRightComponent"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_uielements_input__WEBPACK_IMPORTED_MODULE_3__["default"], {
        size: "large",
        placeholder: "First name"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_uielements_input__WEBPACK_IMPORTED_MODULE_3__["default"], {
        size: "large",
        placeholder: "Last name"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "isoInputWrapper"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_uielements_input__WEBPACK_IMPORTED_MODULE_3__["default"], {
        size: "large",
        placeholder: "Username"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "isoInputWrapper"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_uielements_input__WEBPACK_IMPORTED_MODULE_3__["default"], {
        size: "large",
        placeholder: "Email"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "isoInputWrapper"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_uielements_input__WEBPACK_IMPORTED_MODULE_3__["default"], {
        size: "large",
        type: "password",
        placeholder: "Password"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "isoInputWrapper"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_uielements_input__WEBPACK_IMPORTED_MODULE_3__["default"], {
        size: "large",
        type: "password",
        placeholder: "Confirm Password"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "isoInputWrapper",
        style: {
          marginBottom: "50px"
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_uielements_checkbox__WEBPACK_IMPORTED_MODULE_4__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_utility_intlMessages__WEBPACK_IMPORTED_MODULE_8__["default"], {
        id: "page.signUpTermsConditions"
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "isoInputWrapper"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_uielements_button__WEBPACK_IMPORTED_MODULE_5__["default"], {
        type: "primary"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_utility_intlMessages__WEBPACK_IMPORTED_MODULE_8__["default"], {
        id: "page.signUpButton"
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "isoInputWrapper isoCenterComponent isoHelperWrapper"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
        to: "admin/login"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_utility_intlMessages__WEBPACK_IMPORTED_MODULE_8__["default"], {
        id: "page.signUpAlreadyAccount"
      })))))));
    }
  }]);

  return SignUp;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(function (state) {
  return {
    isLoggedIn: state.Auth.idToken !== null ? true : false
  };
}, {
  login: login,
  clearMenu: clearMenu
})(SignUp));

/***/ }),

/***/ "./resources/js/isomophic/containers/Page/signup.style.js":
/*!****************************************************************!*\
  !*** ./resources/js/isomophic/containers/Page/signup.style.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var styled_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-theme */ "./node_modules/styled-theme/index.js");
/* harmony import */ var styled_theme__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_theme__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _image_work_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../image/work.jpg */ "./resources/js/isomophic/image/work.jpg");
/* harmony import */ var _image_work_jpg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_image_work_jpg__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _settings_withDirection__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../settings/withDirection */ "./resources/js/isomophic/settings/withDirection.js");
function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n  min-height: 100vh;\n  height: 100vh;\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n  position: relative;\n  background: url(", ") no-repeat center center;\n  background-size: cover;\n\n  &:before {\n    content: '';\n    width: 100%;\n    height: 100%;\n    display: flex;\n    background-color: rgba(0, 0, 0, 0.6);\n    position: absolute;\n    z-index: 1;\n    top: 0;\n    left: ", ";\n    right: ", ";\n  }\n\n  .isoSignUpContentWrapper {\n    width: 500px;\n    height: 100%;\n    overflow-y: auto;\n    z-index: 10;\n    position: relative;\n  }\n\n  .isoSignUpContent {\n    min-height: 100%;\n    display: flex;\n    flex-direction: column;\n    padding: 70px 50px;\n    position: relative;\n    background-color: #ffffff;\n\n    @media only screen and (max-width: 767px) {\n      width: 100%;\n      padding: 70px 20px;\n    }\n\n    .isoLogoWrapper {\n      width: 100%;\n      display: flex;\n      margin-bottom: 50px;\n      justify-content: center;\n      flex-shrink: 0;\n\n      a {\n        font-size: 24px;\n        font-weight: 300;\n        line-height: 1;\n        text-transform: uppercase;\n        color: ", ";\n      }\n    }\n\n    .isoSignUpForm {\n      width: 100%;\n      flex-shrink: 0;\n      display: flex;\n      flex-direction: column;\n\n      .isoInputWrapper {\n        margin-bottom: 15px;\n\n        &:last-child {\n          margin-bottom: 0;\n        }\n\n        input {\n          &::-webkit-input-placeholder {\n            color: ", ";\n          }\n\n          &:-moz-placeholder {\n            color: ", ";\n          }\n\n          &::-moz-placeholder {\n            color: ", ";\n          }\n          &:-ms-input-placeholder {\n            color: ", ";\n          }\n        }\n      }\n\n      .isoLeftRightComponent {\n        input {\n          width: calc(100% - 10px);\n\n          &:first-child {\n            margin-right: ", ";\n            margin-left: ", ";\n          }\n        }\n      }\n\n      .isoHelperWrapper {\n        margin-top: 35px;\n        flex-direction: column;\n      }\n\n      .isoForgotPass {\n        font-size: 12px;\n        color: ", ";\n        margin-bottom: 10px;\n\n        &:hover {\n          color: ", ";\n        }\n      }\n\n      button {\n        font-weight: 500;\n        width: 100%;\n        height: 42px;\n        border: 0;\n\n        &.btnFacebook {\n          background-color: ", ";\n\n          &:hover {\n            background-color: ", ";\n          }\n        }\n\n        &.btnGooglePlus {\n          background-color: ", ";\n          margin-top: 15px;\n\n          &:hover {\n            background-color: ", ";\n          }\n        }\n\n        &.btnAuthZero {\n          background-color: ", ";\n          margin-top: 15px;\n\n          &:hover {\n            background-color: ", ";\n          }\n        }\n\n        &.btnFirebase {\n          background-color: ", ";\n          margin-top: 15px;\n\n          &:hover {\n            background-color: ", ";\n          }\n        }\n      }\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }





var SignUpStyleWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div(_templateObject(), _image_work_jpg__WEBPACK_IMPORTED_MODULE_2___default.a, function (props) {
  return props['data-rtl'] === 'rtl' ? 'inherit' : '0';
}, function (props) {
  return props['data-rtl'] === 'rtl' ? '0' : 'inherit';
}, Object(styled_theme__WEBPACK_IMPORTED_MODULE_1__["palette"])('secondary', 2), Object(styled_theme__WEBPACK_IMPORTED_MODULE_1__["palette"])('grayscale', 0), Object(styled_theme__WEBPACK_IMPORTED_MODULE_1__["palette"])('grayscale', 0), Object(styled_theme__WEBPACK_IMPORTED_MODULE_1__["palette"])('grayscale', 0), Object(styled_theme__WEBPACK_IMPORTED_MODULE_1__["palette"])('grayscale', 0), function (props) {
  return props['data-rtl'] === 'rtl' ? 'inherit' : '20px';
}, function (props) {
  return props['data-rtl'] === 'rtl' ? '20px' : 'inherit';
}, Object(styled_theme__WEBPACK_IMPORTED_MODULE_1__["palette"])('text', 2), Object(styled_theme__WEBPACK_IMPORTED_MODULE_1__["palette"])('primary', 0), Object(styled_theme__WEBPACK_IMPORTED_MODULE_1__["palette"])('color', 7), Object(styled_theme__WEBPACK_IMPORTED_MODULE_1__["palette"])('color', 8), Object(styled_theme__WEBPACK_IMPORTED_MODULE_1__["palette"])('color', 9), Object(styled_theme__WEBPACK_IMPORTED_MODULE_1__["palette"])('color', 10), Object(styled_theme__WEBPACK_IMPORTED_MODULE_1__["palette"])('color', 11), Object(styled_theme__WEBPACK_IMPORTED_MODULE_1__["palette"])('color', 12), Object(styled_theme__WEBPACK_IMPORTED_MODULE_1__["palette"])('color', 5), Object(styled_theme__WEBPACK_IMPORTED_MODULE_1__["palette"])('color', 6));
/* harmony default export */ __webpack_exports__["default"] = (Object(_settings_withDirection__WEBPACK_IMPORTED_MODULE_3__["default"])(SignUpStyleWrapper));

/***/ }),

/***/ "./resources/js/isomophic/image/work.jpg":
/*!***********************************************!*\
  !*** ./resources/js/isomophic/image/work.jpg ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/work.jpg?56bf912220fcc0ea7d0f6595a28f9a4d";

/***/ })

}]);