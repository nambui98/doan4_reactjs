(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[17],{

/***/ "./resources/js/isomophic/admin/components/Config/Index.js":
/*!*****************************************************************!*\
  !*** ./resources/js/isomophic/admin/components/Config/Index.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_contacts_contactCard_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../components/contacts/contactCard.style */ "./resources/js/isomophic/components/contacts/contactCard.style.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _common_data_style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../common/data.style */ "./resources/js/isomophic/common/data.style.js");
/* harmony import */ var _helpers_helperFunc__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../helpers/helperFunc */ "./resources/js/isomophic/helpers/helperFunc.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_utility_intlMessages__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../components/utility/intlMessages */ "./resources/js/isomophic/components/utility/intlMessages.js");
/* harmony import */ var _common_styleControl__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../common/styleControl */ "./resources/js/isomophic/common/styleControl.js");
/* harmony import */ var _settings__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../settings */ "./resources/js/isomophic/settings/index.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! util */ "./node_modules/node-libs-browser/node_modules/util/util.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_9__);
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











var Option = antd__WEBPACK_IMPORTED_MODULE_2__["Select"].Option;
var FormItem = antd__WEBPACK_IMPORTED_MODULE_2__["Form"].Item;
var dummyRequest = _helpers_helperFunc__WEBPACK_IMPORTED_MODULE_4__["default"].dummyRequest,
    beforeUpload = _helpers_helperFunc__WEBPACK_IMPORTED_MODULE_4__["default"].beforeUpload,
    getBase64 = _helpers_helperFunc__WEBPACK_IMPORTED_MODULE_4__["default"].getBase64;

var Config = /*#__PURE__*/function (_Component) {
  _inherits(Config, _Component);

  var _super = _createSuper(Config);

  function Config(props) {
    var _this;

    _classCallCheck(this, Config);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "disabledDate", function (date) {
      var startDate = _this.state.startDate;

      if (!startDate || !date) {
        return false;
      }

      return date.valueOf() > startDate.valueOf();
    });

    _this.state = {
      confirmDirty: false,
      base64: null,
      loading: false,
      changed: false,
      startDate: moment__WEBPACK_IMPORTED_MODULE_5___default()(new Date())
    };
    _this.handleChangedField = _this.handleChangedField.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Config, [{
    key: "handleChangedField",
    value: function handleChangedField() {
      this.setState({
        changed: true
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var info = this.props.info;
      var getFieldDecorator = this.props.form.getFieldDecorator;
      var formItemLayout = {
        labelCol: {
          xs: {
            span: 24
          },
          sm: {
            span: 6
          }
        },
        wrapperCol: {
          xs: {
            span: 24
          },
          sm: {
            span: 14
          }
        }
      };

      var handleSubmit = function handleSubmit(e) {
        e.preventDefault();

        _this2.props.form.validateFields(function (err, values) {
          if (!err) {
            var newData = {
              footer1: values.footer1,
              footer2: values.footer2,
              footer3: values.footer3,
              link_popup: values.link_popup,
              enable_popup: values.enable_popup
            };

            if (values.image_popup[0].originFileObj) {
              getBase64(values.image_popup[0].originFileObj, function (result2) {
                var str = result2.replace(/^data:image\/[a-z]+;base64,/, "");
                newData.image_popup = str;

                _this2.props.update(newData);

                _this2.props.form.resetFields();
              });
            } else {
              _this2.props.update(newData);

              _this2.props.form.resetFields();
            }
          }
        });
      };

      var fileList = [];

      if (!Object(util__WEBPACK_IMPORTED_MODULE_9__["isNullOrUndefined"])(info) && !Object(util__WEBPACK_IMPORTED_MODULE_9__["isNullOrUndefined"])(info.image_popup)) {
        fileList.push({
          uid: "-1",
          name: "",
          status: "done",
          url: info.image,
          thumbUrl: _settings__WEBPACK_IMPORTED_MODULE_8__["urlConfig"].imageUrl + info.image_popup
        });
      }

      var normFile = function normFile(e) {
        if (Array.isArray(e)) {
          return e;
        }

        e.fileList = e.fileList.slice(-1);
        return e && e.fileList;
      };

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_contacts_contactCard_style__WEBPACK_IMPORTED_MODULE_1__["ContactCardWrapper"], {
        className: "isoContactCard"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "isoContactInfoWrapper"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Form"], {
        onSubmit: handleSubmit
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FormItem, _extends({}, formItemLayout, {
        label: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "Eanble popup"),
        style: {
          marginBottom: 10 + "px"
        }
      }), getFieldDecorator("enable_popup", {
        initialValue: info ? info.enable_popup : 1
      })( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Select"], {
        onChange: this.handleChangedField
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Option, {
        value: 1
      }, _helpers_helperFunc__WEBPACK_IMPORTED_MODULE_4__["default"].status.properties[_helpers_helperFunc__WEBPACK_IMPORTED_MODULE_4__["default"].status.Active]), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Option, {
        value: 2
      }, _helpers_helperFunc__WEBPACK_IMPORTED_MODULE_4__["default"].status.properties[_helpers_helperFunc__WEBPACK_IMPORTED_MODULE_4__["default"].status.Inactive])))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FormItem, _extends({}, formItemLayout, {
        label: "Image popup",
        style: {
          marginBottom: 10 + "px"
        }
      }), getFieldDecorator("image_popup", {
        valuePropName: "fileList",
        getValueFromEvent: normFile,
        initialValue: fileList.length > 0 ? fileList : null,
        rules: [{
          required: true,
          message: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_utility_intlMessages__WEBPACK_IMPORTED_MODULE_6__["default"], {
            id: "form.validate.image"
          })
        }]
      })( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Upload"], {
        name: "image",
        customRequest: dummyRequest,
        listType: "picture",
        accept: "image/png, image/jpeg",
        beforeUpload: beforeUpload,
        onChange: this.handleChangedField
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Icon"], {
        type: "upload"
      }), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_utility_intlMessages__WEBPACK_IMPORTED_MODULE_6__["default"], {
        id: "form.upload"
      }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FormItem, _extends({}, formItemLayout, {
        label: "Link popup",
        hasFeedback: true
      }), getFieldDecorator("link_popup", {
        rules: [{
          required: true,
          message: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_utility_intlMessages__WEBPACK_IMPORTED_MODULE_6__["default"], {
            id: "form.validate.this"
          })
        }],
        initialValue: info ? info.link_popup : ""
      })( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Input"], {
        onChange: this.handleChangedField,
        type: "text"
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FormItem, _extends({
        style: {
          display: "none"
        }
      }, formItemLayout, {
        label: "Footer1",
        hasFeedback: true
      }), getFieldDecorator("footer1", {
        rules: [{
          required: true,
          message: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_utility_intlMessages__WEBPACK_IMPORTED_MODULE_6__["default"], {
            id: "form.validate.this"
          })
        }],
        initialValue: info ? info.footer1 : ""
      })( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Input"], {
        onChange: this.handleChangedField,
        type: "text"
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FormItem, _extends({
        style: {
          display: "none"
        }
      }, formItemLayout, {
        label: "Footer2",
        hasFeedback: true
      }), getFieldDecorator("footer2", {
        rules: [{
          required: true,
          message: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_utility_intlMessages__WEBPACK_IMPORTED_MODULE_6__["default"], {
            id: "form.validate.this"
          })
        }],
        initialValue: info ? info.footer2 : ""
      })( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Input"], {
        onChange: this.handleChangedField,
        type: "text"
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FormItem, _extends({
        style: {
          display: "none"
        }
      }, formItemLayout, {
        label: "Footer3",
        hasFeedback: true
      }), getFieldDecorator("footer3", {
        rules: [{
          required: true,
          message: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_utility_intlMessages__WEBPACK_IMPORTED_MODULE_6__["default"], {
            id: "form.validate.this"
          })
        }],
        initialValue: info ? info.footer3 : ""
      })( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Input"], {
        onChange: this.handleChangedField,
        type: "text"
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FormItem, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "ant-col-xs-24 ant-col-sm-6"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "ant-col-xs-24 ant-col-sm-14"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_data_style__WEBPACK_IMPORTED_MODULE_3__["default"], {
        style: {
          textAlign: "right"
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
        htmlType: "submit",
        style: Object(_common_styleControl__WEBPACK_IMPORTED_MODULE_7__["default"])(1, ''),
        disabled: !this.state.changed,
        onClick: this.handleSubmit
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_utility_intlMessages__WEBPACK_IMPORTED_MODULE_6__["default"], {
        id: "button.save"
      }))))))));
    }
  }]);

  return Config;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

var WrappedFormConfig = antd__WEBPACK_IMPORTED_MODULE_2__["Form"].create()(Config);
/* harmony default export */ __webpack_exports__["default"] = (WrappedFormConfig);

/***/ }),

/***/ "./resources/js/isomophic/admin/containers/Config/index.js":
/*!*****************************************************************!*\
  !*** ./resources/js/isomophic/admin/containers/Config/index.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _components_utility_layoutWrapper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../components/utility/layoutWrapper.js */ "./resources/js/isomophic/components/utility/layoutWrapper.js");
/* harmony import */ var _components_utility_layoutContent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/utility/layoutContent */ "./resources/js/isomophic/components/utility/layoutContent.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _redux_Config_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../redux/Config/actions */ "./resources/js/isomophic/admin/redux/Config/actions.js");
/* harmony import */ var _components_Config_Index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/Config/Index */ "./resources/js/isomophic/admin/components/Config/Index.js");
/* harmony import */ var _common_data_style__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../common/data.style */ "./resources/js/isomophic/common/data.style.js");
/* harmony import */ var _components_utility_intlMessages__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../components/utility/intlMessages */ "./resources/js/isomophic/components/utility/intlMessages.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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










var Content = antd__WEBPACK_IMPORTED_MODULE_4__["Layout"].Content;

var Config = /*#__PURE__*/function (_Component) {
  _inherits(Config, _Component);

  var _super = _createSuper(Config);

  function Config() {
    _classCallCheck(this, Config);

    return _super.apply(this, arguments);
  }

  _createClass(Config, [{
    key: "OpenModal",
    value: function OpenModal() {
      this.setState({
        isShow: true
      });
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {}
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.props.getInfo();
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          info = _this$props.info,
          update = _this$props.update;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_data_style__WEBPACK_IMPORTED_MODULE_7__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_utility_layoutWrapper_js__WEBPACK_IMPORTED_MODULE_2__["default"], {
        style: {
          padding: "0px"
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
        className: "PageHeader"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_utility_intlMessages__WEBPACK_IMPORTED_MODULE_8__["default"], {
        id: "sidebar.homePopup"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_utility_layoutContent__WEBPACK_IMPORTED_MODULE_3__["default"], {
        style: {
          paddingBottom: "0px"
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_4__["Layout"], {
        className: "isoContactBoxWrapper",
        style: {
          border: "none"
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Content, {
        className: "isoContactBox"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Config_Index__WEBPACK_IMPORTED_MODULE_6__["default"], {
        info: info,
        update: update
      }))))));
    }
  }]);

  return Config;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(function (state) {
  return _objectSpread({}, state.ConfigReducer);
}, _redux_Config_actions__WEBPACK_IMPORTED_MODULE_5__["default"])(Config));

/***/ }),

/***/ "./resources/js/isomophic/common/styleControl.js":
/*!*******************************************************!*\
  !*** ./resources/js/isomophic/common/styleControl.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return styleControl; });
function styleControl(type, modalType) {
  if (type === 3) {
    return {
      backgroundColor: "#af1921",
      color: "#FFFFFF",
      borderRadius: "6px"
    };
  }

  if (type === 2) {
    return {
      display: "none"
    };
  } else {
    return {
      backgroundColor: "#2d3446",
      color: "#FFFFFF",
      borderRadius: "6px",
      display: modalType === "view" ? "none" : ""
    };
  }
}
/*

export default function styleColorByStatus(status, userRoleAddress,roleAddress) {
  if(roleAddress=="A" && userRoleAddress=="A")
  {
    if(status==1){
      return {
        backgroundColor: "yellow",
        color: "#FFFFFF",
        borderRadius: "6px",
      };
    }
    if(status==2){
      return {
        backgroundColor: "green",
        color: "#FFFFFF",
        borderRadius: "6px",
      };
    }
    if(status==5){
      return {
        backgroundColor: "red",
        color: "#FFFFFF",
        borderRadius: "6px"
      };
    }
  }
  if(roleAddress=="B" && userRoleAddress=="B")
  {
    if(status==1){
      return {
        backgroundColor: "yellow",
        color: "#FFFFFF",
        borderRadius: "6px",
      };
    }
    if(status==2){
      return {
        backgroundColor: "green",
        color: "#FFFFFF",
        borderRadius: "6px",
      };
    }
    if(status==5){
      return {
        backgroundColor: "red",
        color: "#FFFFFF",
        borderRadius: "6px"
      };
    }
  }
  else{

  }
}

*/

/***/ }),

/***/ "./resources/js/isomophic/components/contacts/contactCard.style.js":
/*!*************************************************************************!*\
  !*** ./resources/js/isomophic/components/contacts/contactCard.style.js ***!
  \*************************************************************************/
/*! exports provided: ContactCardWrapper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactCardWrapper", function() { return ContactCardWrapper; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var styled_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-theme */ "./node_modules/styled-theme/index.js");
/* harmony import */ var styled_theme__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_theme__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _settings_style_util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../settings/style-util */ "./resources/js/isomophic/settings/style-util.js");
/* harmony import */ var _settings_withDirection__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../settings/withDirection */ "./resources/js/isomophic/settings/withDirection.js");
function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n  height: calc(100% - 145px);\n  padding: 0 35px;\n  display: -webkit-flex;\n  display: -ms-flex;\n  display: flex;\n\n  @media only screen and (max-width: 600px) {\n    flex-direction: column;\n  }\n\n  @media only screen and (max-width: 767px) {\n    padding: 0 20px;\n  }\n\n  @media only screen and (min-width: 767px) and (max-width: 990px) {\n    flex-direction: column;\n  }\n\n  .isoContactCardHead {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    width: 200px;\n    flex-shrink: 0;\n    margin-right: ", ";\n    margin-left: ", ";\n    flex-shrink: 0;\n\n    @media only screen and (max-width: 600px) {\n      margin:0;\n      width: 100%;\n    }\n\n    @media only screen and (min-width: 767px) and (max-width: 990px) {\n      margin-bottom: 20px;\n    }\n\n    .isoPersonImage {\n      width: 200px;\n      height: 200px;\n      display: flex;\n      flex-shrink: 0;\n      align-items: center;\n      justify-content: center;\n      margin-bottom: 10px;\n      overflow: hidden;\n      @media only screen and (max-width: 600px) {\n        width: 100%;\n        height: auto;\n      }\n      ", ";\n\n      .avatar-uploader {\n        display: block;\n        width: 100%;\n        height: 100%;\n        position: relative;\n      }\n      .ant-upload.ant-upload-select{\n        position: absolute;\n        top: 50%;\n        left: 50%;\n        -ms-transform: translate(-50%, -50%); /* IE 9 */\n        -webkit-transform: translate(-50%, -50%); /* Safari */\n        transform: translate(-50%, -50%);\n      }\n      img {\n        width: 100%;\n        height: 100%;\n        object-fit: cover;\n        \n      }\n    }\n\n    .isoPersonName {\n      font-size: 15px;\n      font-weight: 500;\n      color: ", ";\n      line-height: 1.5;\n      margin: 0;\n    }\n  }\n\n  .isoContactInfoWrapper {\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n\n    @media only screen and (max-width: 767px) {\n      padding: 20px 0;\n    }\n\n    .isoContactCardInfos {\n      width: 100%;\n      display: flex;\n      flex-shrink: 0;\n      align-items: baseline;\n      flex-direction: row;\n      margin-bottom: 15px;\n\n      @media only screen and (max-width: 430px) {\n        flex-direction: column;\n        margin-bottom: 20px;\n      }\n\n      .isoInfoLabel {\n        font-size: 14px;\n        font-weight: 500;\n        color: ", ";\n        line-height: 1.5;\n        margin: 0;\n        margin-right: ", ";\n        margin-left: ", ";\n        text-align: ", ";\n        min-width: 115px;\n        position: relative;\n\n        @media only screen and (max-width: 430px) {\n          margin-bottom: 5px;\n          margin-right: ", ";\n          margin-left: ", ";\n          padding-right: ", ";\n          padding-left: ", ";\n          min-width: 0;\n        }\n\n        &::after {\n          content: ':';\n          position: absolute;\n          right: ", ";\n          left: ", ";\n        }\n      }\n\n      .isoInfoDetails {\n        font-size: 14px;\n        font-weight: 400;\n        color: ", ";\n        line-height: 1.5;\n        margin: 0;\n        text-align: ", ";\n      }\n\n      input {\n        font-size: 14px;\n        font-weight: 400;\n        color: ", ";\n        line-height: inherit;\n        height: 36px;\n        padding: 0 15px;\n        margin: 0;\n        border: 1px solid ", ";\n        outline: 0 !important;\n        overflow: hidden;\n        background-color: #ffffff;\n        ", ";\n        ", ";\n        ", ";\n\n        &:focus {\n          border-color: ", ";\n          ", ";\n          outline: 0;\n        }\n\n        &:hover {\n          border-color: ", ";\n        }\n\n        &::-webkit-input-placeholder {\n          color: ", ";\n        }\n\n        &:-moz-placeholder {\n          color: ", ";\n        }\n\n        &::-moz-placeholder {\n          color: ", ";\n        }\n        &:-ms-input-placeholder {\n          color: ", ";\n        }\n      }\n\n      textarea {\n        font-size: 14px;\n        font-weight: 400;\n        color: ", ";\n        line-height: 24px;\n        height: 210px;\n        padding: 10px 15px;\n        margin: 0;\n        border: 1px solid ", ";\n        outline: 0 !important;\n        background-color: #ffffff;\n        ", ";\n        ", ";\n        ", ";\n\n        &:focus {\n          border-color: ", ";\n          ", ";\n          outline: 0;\n        }\n\n        &:hover {\n          border-color: ", ";\n        }\n\n        &::-webkit-input-placeholder {\n          color: ", ";\n        }\n\n        &:-moz-placeholder {\n          color: ", ";\n        }\n\n        &::-moz-placeholder {\n          color: ", ";\n        }\n        &:-ms-input-placeholder {\n          color: ", ";\n        }\n      }\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }





var WDContactCardWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div(_templateObject(), function (props) {
  return props['data-rtl'] === 'rtl' ? 'inherit' : '50px';
}, function (props) {
  return props['data-rtl'] === 'rtl' ? '50px' : 'inherit';
}, Object(_settings_style_util__WEBPACK_IMPORTED_MODULE_2__["borderRadius"])('5px'), Object(styled_theme__WEBPACK_IMPORTED_MODULE_1__["palette"])('text', 0), Object(styled_theme__WEBPACK_IMPORTED_MODULE_1__["palette"])('text', 0), function (props) {
  return props['data-rtl'] === 'rtl' ? 'inherit' : '15px';
}, function (props) {
  return props['data-rtl'] === 'rtl' ? '15px' : 'inherit';
}, function (props) {
  return props['data-rtl'] === 'rtl' ? 'right' : 'left';
}, function (props) {
  return props['data-rtl'] === 'rtl' ? 'inherit' : '0';
}, function (props) {
  return props['data-rtl'] === 'rtl' ? '0' : 'inherit';
}, function (props) {
  return props['data-rtl'] === 'rtl' ? 'inherit' : '10px';
}, function (props) {
  return props['data-rtl'] === 'rtl' ? '10px' : 'inherit';
}, function (props) {
  return props['data-rtl'] === 'rtl' ? 'inherit' : '0';
}, function (props) {
  return props['data-rtl'] === 'rtl' ? '0' : 'inherit';
}, Object(styled_theme__WEBPACK_IMPORTED_MODULE_1__["palette"])('text', 2), function (props) {
  return props['data-rtl'] === 'rtl' ? 'right' : 'left';
}, Object(styled_theme__WEBPACK_IMPORTED_MODULE_1__["palette"])('text', 2), Object(styled_theme__WEBPACK_IMPORTED_MODULE_1__["palette"])('border', 0), Object(_settings_style_util__WEBPACK_IMPORTED_MODULE_2__["boxShadow"])('none'), Object(_settings_style_util__WEBPACK_IMPORTED_MODULE_2__["borderRadius"])('3px'), Object(_settings_style_util__WEBPACK_IMPORTED_MODULE_2__["transition"])(), Object(styled_theme__WEBPACK_IMPORTED_MODULE_1__["palette"])('primary', 0), Object(_settings_style_util__WEBPACK_IMPORTED_MODULE_2__["boxShadow"])('0 0 0 2px rgba(68, 130, 255, 0.2)'), Object(styled_theme__WEBPACK_IMPORTED_MODULE_1__["palette"])('primary', 0), Object(styled_theme__WEBPACK_IMPORTED_MODULE_1__["palette"])('grayscale', 0), Object(styled_theme__WEBPACK_IMPORTED_MODULE_1__["palette"])('grayscale', 0), Object(styled_theme__WEBPACK_IMPORTED_MODULE_1__["palette"])('grayscale', 0), Object(styled_theme__WEBPACK_IMPORTED_MODULE_1__["palette"])('grayscale', 0), Object(styled_theme__WEBPACK_IMPORTED_MODULE_1__["palette"])('text', 2), Object(styled_theme__WEBPACK_IMPORTED_MODULE_1__["palette"])('border', 0), Object(_settings_style_util__WEBPACK_IMPORTED_MODULE_2__["boxShadow"])('none'), Object(_settings_style_util__WEBPACK_IMPORTED_MODULE_2__["borderRadius"])('3px'), Object(_settings_style_util__WEBPACK_IMPORTED_MODULE_2__["transition"])(), Object(styled_theme__WEBPACK_IMPORTED_MODULE_1__["palette"])('primary', 0), Object(_settings_style_util__WEBPACK_IMPORTED_MODULE_2__["boxShadow"])('0 0 0 2px rgba(68, 130, 255, 0.2)'), Object(styled_theme__WEBPACK_IMPORTED_MODULE_1__["palette"])('primary', 0), Object(styled_theme__WEBPACK_IMPORTED_MODULE_1__["palette"])('grayscale', 0), Object(styled_theme__WEBPACK_IMPORTED_MODULE_1__["palette"])('grayscale', 0), Object(styled_theme__WEBPACK_IMPORTED_MODULE_1__["palette"])('grayscale', 0), Object(styled_theme__WEBPACK_IMPORTED_MODULE_1__["palette"])('grayscale', 0));
var ContactCardWrapper = Object(_settings_withDirection__WEBPACK_IMPORTED_MODULE_3__["default"])(WDContactCardWrapper);


/***/ }),

/***/ "./resources/js/isomophic/components/utility/layoutContent.js":
/*!********************************************************************!*\
  !*** ./resources/js/isomophic/components/utility/layoutContent.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _layoutContent_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./layoutContent.style */ "./resources/js/isomophic/components/utility/layoutContent.style.js");

/* harmony default export */ __webpack_exports__["default"] = (_layoutContent_style__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./resources/js/isomophic/components/utility/layoutContent.style.js":
/*!**************************************************************************!*\
  !*** ./resources/js/isomophic/components/utility/layoutContent.style.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var styled_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-theme */ "./node_modules/styled-theme/index.js");
/* harmony import */ var styled_theme__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_theme__WEBPACK_IMPORTED_MODULE_1__);
function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n  padding: 35px;\n  background-color: #ffffff;\n  border: 1px solid ", ";\n  height: 100%;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }



var LayoutContentStyle = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div(_templateObject(), Object(styled_theme__WEBPACK_IMPORTED_MODULE_1__["palette"])('border', 0));
/* harmony default export */ __webpack_exports__["default"] = (LayoutContentStyle);

/***/ }),

/***/ "./resources/js/isomophic/components/utility/layoutWrapper.js":
/*!********************************************************************!*\
  !*** ./resources/js/isomophic/components/utility/layoutWrapper.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _layoutWrapper_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./layoutWrapper.style */ "./resources/js/isomophic/components/utility/layoutWrapper.style.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



/* harmony default export */ __webpack_exports__["default"] = (function (props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_layoutWrapper_style__WEBPACK_IMPORTED_MODULE_1__["LayoutContentWrapper"], _extends({
    className: props.className != null ? "".concat(props.className, " isoLayoutContentWrapper") : "isoLayoutContentWrapper"
  }, props), props.children);
});

/***/ }),

/***/ "./resources/js/isomophic/components/utility/layoutWrapper.style.js":
/*!**************************************************************************!*\
  !*** ./resources/js/isomophic/components/utility/layoutWrapper.style.js ***!
  \**************************************************************************/
/*! exports provided: LayoutContentWrapper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutContentWrapper", function() { return LayoutContentWrapper; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  padding: 40px 20px;\n  display: flex;\n  flex-flow: row wrap;\n  overflow: hidden;\n\n  @media only screen and (max-width: 767px) {\n    padding: 50px 20px;\n  }\n\n  @media (max-width: 580px) {\n    padding: 15px;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }


var LayoutContentWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div(_templateObject());


/***/ })

}]);