(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4],{

/***/ "./resources/js/isomophic/common/modal.style.js":
/*!******************************************************!*\
  !*** ./resources/js/isomophic/common/modal.style.js ***!
  \******************************************************/
/*! exports provided: default, ModalContent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalContent", function() { return ModalContent; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var styled_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-theme */ "./node_modules/styled-theme/index.js");
/* harmony import */ var styled_theme__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_theme__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _settings_style_util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../settings/style-util */ "./resources/js/isomophic/settings/style-util.js");
function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  p {\n    font-size: 13px;\n    color: ", ";\n    line-height: 1.5;\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  @media screen and (max-width: 767px){\n    .ant-modal{\n      top: 0px!important;\n    }\n  }\n  .ant-modal-header {\n    padding: 13px 16px;\n    background-color: #1f2431;\n    color: ", ";\n    border-bottom: 1px solid #1f2431;\n    ", ";\n  }\n\n  .ant-modal-title {\n    margin: 0;\n    font-size: 15px;\n    line-height: 21px;\n    font-weight: 500;\n    color: #fff;\n  }\n\n  .ant-modal-close {\n    right: ", ";\n    left: ", ";\n    color: #fff;\n  }\n\n  .ant-modal-close:focus, \n  .ant-modal-close:hover{\n    color: #e1e1e1;\n  }\n\n  .ant-modal-body {\n    padding: 16px;\n    font-size: 13px;\n    color: ", ";\n    line-height: 1.5;\n  }\n\n  .ant-modal-footer {\n    border-top: 1px solid ", ";\n    padding: 10px 16px 10px 10px;\n    text-align: right;\n    ", ";\n\n    .ant-btn-lg {\n      padding: 0 35px;\n      font-size: 14px;\n      height: 42px;\n    }\n\n    button + button {\n      margin: ", ";\n    }\n  }\n\n  .ant-confirm {\n    .ant-modal-body {\n      padding: 30px 35px;\n    }\n  }\n\n  .ant-confirm-body {\n    .ant-confirm-title {\n      color: ", ";\n      font-weight: 700;\n      font-size: 15px;\n    }\n\n    .ant-confirm-content {\n      margin-left: 42px;\n      font-size: 13px;\n      color: ", ";\n      margin-top: 8px;\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }




/* harmony default export */ __webpack_exports__["default"] = (function (ComponentName) {
  return Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["default"])(ComponentName)(_templateObject(), Object(styled_theme__WEBPACK_IMPORTED_MODULE_1__["palette"])('text', 0), Object(_settings_style_util__WEBPACK_IMPORTED_MODULE_2__["borderRadius"])('4px 4px 0 0'), function (props) {
    return props['data-rtl'] === 'rtl' ? 'inherit' : '0';
  }, function (props) {
    return props['data-rtl'] === 'rtl' ? '0' : 'inherit';
  }, Object(styled_theme__WEBPACK_IMPORTED_MODULE_1__["palette"])('text', 3), Object(styled_theme__WEBPACK_IMPORTED_MODULE_1__["palette"])('border', 0), Object(_settings_style_util__WEBPACK_IMPORTED_MODULE_2__["borderRadius"])('0 0 4px 4px'), function (props) {
    return props['data-rtl'] === 'rtl' ? '0 8px 0 0' : '0 0 0 8px';
  }, Object(styled_theme__WEBPACK_IMPORTED_MODULE_1__["palette"])('text', 0), Object(styled_theme__WEBPACK_IMPORTED_MODULE_1__["palette"])('text', 3));
});
var ModalContent = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div(_templateObject2(), Object(styled_theme__WEBPACK_IMPORTED_MODULE_1__["palette"])('text', 3));


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

/***/ "./resources/js/isomophic/components/base/index.js":
/*!*********************************************************!*\
  !*** ./resources/js/isomophic/components/base/index.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _common_modal_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../common/modal.style */ "./resources/js/isomophic/common/modal.style.js");
/* harmony import */ var _isomophic_settings_withDirection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../isomophic/settings/withDirection */ "./resources/js/isomophic/settings/withDirection.js");
/* harmony import */ var _feedback_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../feedback/modal */ "./resources/js/isomophic/components/feedback/modal.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _common_data_style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../common/data.style */ "./resources/js/isomophic/common/data.style.js");
/* harmony import */ var _common_styleControl__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../common/styleControl */ "./resources/js/isomophic/common/styleControl.js");
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

/*
Method Name: Modal chung cơ bản
Description: Xử lý thông tin form Show on modal, validate form
Author: Bùi Văn Quý
Last Modified Author: Bùi Văn Quý
Created Date: 31/10/2018
Modified Date: 31/10/2018
*/







var WDModal = Object(_common_modal_style__WEBPACK_IMPORTED_MODULE_1__["default"])(_feedback_modal__WEBPACK_IMPORTED_MODULE_3__["default"]);
var Modal = Object(_isomophic_settings_withDirection__WEBPACK_IMPORTED_MODULE_2__["default"])(WDModal);
var FormItem = antd__WEBPACK_IMPORTED_MODULE_4__["Form"].Item;

var ModalForm = /*#__PURE__*/function (_Component) {
  _inherits(ModalForm, _Component);

  var _super = _createSuper(ModalForm);

  function ModalForm(props) {
    var _this;

    _classCallCheck(this, ModalForm);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "handleChange", function () {
      _this.setState({
        changed: true
      });
    });

    _this.state = {
      changed: false,
      strName: 'Role'
    };
    return _this;
  }

  _createClass(ModalForm, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          modalActive = _this$props.modalActive,
          modalType = _this$props.modalType,
          row = _this$props.row,
          handleCancel = _this$props.handleCancel,
          handleSubmit = _this$props.handleSubmit,
          updateStatusAdd = _this$props.updateStatusAdd;
      var getFieldDecorator = this.props.form.getFieldDecorator;
      var formItemLayout = {
        labelCol: {
          xs: {
            span: 24
          },
          sm: {
            span: 8
          }
        },
        wrapperCol: {
          xs: {
            span: 24
          },
          sm: {
            span: 16
          }
        }
      }; //Xử lý khi click nút Save

      var saveButton = function saveButton(e) {
        e.preventDefault();

        _this2.setState({
          changed: false
        });

        _this2.props.form.validateFieldsAndScroll(function (err, values) {
          if (!err) {
            row.name = values.name;
            if (typeof _this2.props.strAddress !== 'undefined') row.address = values.address;
            handleSubmit(modalType, row);
          }
        });
      }; // save and add


      var saveAdd = function saveAdd(e) {
        e.preventDefault();

        if (modalType === 'insert') {
          updateStatusAdd(true);

          _this2.props.form.validateFieldsAndScroll(function (err, values) {
            if (!err) {
              row.name = values.name;
              row.status = 1;
              if (typeof _this2.props.strAddress !== 'undefined') row.address = values.address;

              _this2.props.form.resetFields();

              handleSubmit(modalType, row);
            }
          });
        }
      };

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Modal, {
        title: modalType === 'insert' ? 'ADD NEW' : modalType === 'edit' ? 'UPDATE' : modalType === 'view' ? 'DETAIL' : '',
        className: "FormModal",
        visible: modalActive,
        onCancel: handleCancel,
        cancelText: modalType === 'view' ? 'Close' : 'Cancel',
        onOk: saveButton,
        okText: "Save",
        width: 30 + '%' // save and add
        ,
        footer: modalType === 'insert' ? [/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_4__["Button"], {
          key: "cancel",
          className: "cancelType",
          onClick: handleCancel,
          style: {
            backgroundColor: '#af1921',
            color: '#FFFFFF',
            borderRadius: '6px'
          }
        }, "Close"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_4__["Button"], {
          key: "ok",
          className: "okType",
          onClick: saveButton,
          style: {
            backgroundColor: '#2d3446',
            color: '#FFFFFF',
            borderRadius: '6px',
            display: modalType === 'view' ? 'none' : ''
          },
          disabled: !this.state.changed
        }, "Save"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_4__["Button"], {
          key: "oknew",
          className: "okNewType",
          onClick: saveAdd,
          style: Object(_common_styleControl__WEBPACK_IMPORTED_MODULE_6__["default"])(2, modalType),
          disabled: !this.state.changed
        }, "Save & Add new")] : [/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_4__["Button"], {
          key: "cancel",
          className: "cancelType",
          onClick: handleCancel,
          style: {
            backgroundColor: '#af1921',
            color: '#FFFFFF',
            borderRadius: '6px'
          }
        }, "Close"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_4__["Button"], {
          key: "ok",
          className: "okType",
          onClick: saveButton,
          style: {
            backgroundColor: '#2d3446',
            color: '#FFFFFF',
            borderRadius: '6px',
            display: modalType === 'view' ? 'none' : ''
          },
          disabled: !this.state.changed
        }, "Save")],
        okButtonProps: {
          style: {
            backgroundColor: '#fff',
            color: '#205B0C',
            borderRadius: 0,
            borderColor: '#205B0C',
            display: modalType === 'view' ? 'none' : ''
          },
          disabled: !this.state.changed
        },
        cancelButtonProps: {
          style: {
            backgroundColor: '#fff',
            color: '#0E40A4',
            borderRadius: 0,
            borderColor: '#1086F6'
          }
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_data_style__WEBPACK_IMPORTED_MODULE_5__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "clearfix"
      }, modalType === 'insert' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_4__["Form"], {
        className: "FormData"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FormItem, _extends({}, formItemLayout, {
        label: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, this.props.strName),
        hasFeedback: true,
        style: {
          marginBottom: 10 + 'px'
        }
      }), getFieldDecorator('name', {
        rules: [{
          required: true,
          message: this.props.strName + ' is required'
        }, {
          max: 200,
          message: 'Maximum 200 characters long.'
        }]
      })( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_4__["Input"], {
        onChange: this.handleChange
      }))), typeof this.props.strAddress !== 'undefined' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FormItem, _extends({}, formItemLayout, {
        label: this.props.strAddress,
        hasFeedback: true,
        style: {
          marginBottom: 10 + 'px'
        }
      }), getFieldDecorator('address', {
        rules: [{
          max: 300,
          message: 'Maximum 300 characters long.'
        }]
      })( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_4__["Input"], {
        size: "large",
        onChange: this.handleChange
      }))) : '') : modalType === 'edit' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_4__["Form"], {
        className: "FormData"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FormItem, _extends({}, formItemLayout, {
        label: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, this.props.strName),
        hasFeedback: true,
        style: {
          marginBottom: 10 + 'px'
        }
      }), getFieldDecorator('name', {
        initialValue: row.rolename,
        rules: [{
          required: true,
          message: this.props.strName + ' is required'
        }, {
          max: 200,
          message: this.props.strName + ' Maximum 200 characters long.'
        }]
      })( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_4__["Input"], {
        onChange: this.handleChange
      }))), typeof this.props.strAddress !== 'undefined' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FormItem, _extends({}, formItemLayout, {
        label: this.props.strAddress,
        hasFeedback: true,
        style: {
          marginBottom: 10 + 'px'
        }
      }), getFieldDecorator('address', {
        initialValue: row.address,
        rules: [{
          max: 300,
          message: 'Maximum 300 characters long.'
        }]
      })( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_4__["Input"], {
        size: "large",
        onChange: this.handleChange
      }))) : '') : '')));
    }
  }]);

  return ModalForm;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

var WrappedModalForm = antd__WEBPACK_IMPORTED_MODULE_4__["Form"].create()(ModalForm);
/* harmony default export */ __webpack_exports__["default"] = (WrappedModalForm);

/***/ }),

/***/ "./resources/js/isomophic/components/feedback/modal.js":
/*!*************************************************************!*\
  !*** ./resources/js/isomophic/components/feedback/modal.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");

/* harmony default export */ __webpack_exports__["default"] = (antd__WEBPACK_IMPORTED_MODULE_0__["Modal"]);

/***/ }),

/***/ "./resources/js/isomophic/components/uielements/tooltip.js":
/*!*****************************************************************!*\
  !*** ./resources/js/isomophic/components/uielements/tooltip.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");

/* harmony default export */ __webpack_exports__["default"] = (antd__WEBPACK_IMPORTED_MODULE_0__["Tooltip"]);

/***/ }),

/***/ "./resources/js/isomophic/components/utility/box.js":
/*!**********************************************************!*\
  !*** ./resources/js/isomophic/components/utility/box.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _boxTitle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./boxTitle */ "./resources/js/isomophic/components/utility/boxTitle.js");
/* harmony import */ var _box_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./box.style */ "./resources/js/isomophic/components/utility/box.style.js");



/* harmony default export */ __webpack_exports__["default"] = (function (props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_box_style__WEBPACK_IMPORTED_MODULE_2__["BoxWrapper"], {
    className: "".concat(props.className, " isoBoxWrapper"),
    style: props.style
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_boxTitle__WEBPACK_IMPORTED_MODULE_1__["default"], {
    title: props.title,
    subtitle: props.subtitle
  }), props.children);
});

/***/ }),

/***/ "./resources/js/isomophic/components/utility/box.style.js":
/*!****************************************************************!*\
  !*** ./resources/js/isomophic/components/utility/box.style.js ***!
  \****************************************************************/
/*! exports provided: BoxWrapper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoxWrapper", function() { return BoxWrapper; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var styled_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-theme */ "./node_modules/styled-theme/index.js");
/* harmony import */ var styled_theme__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_theme__WEBPACK_IMPORTED_MODULE_1__);
function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n  height: 100%;\n  padding: 20px;\n  background-color: #ffffff;\n  border: 1px solid ", ";\n  margin: 0 0 30px;\n\n  &:last-child {\n    margin-bottom: 0;\n  }\n\n  @media only screen and (max-width: 767px) {\n    padding: 20px;\n    ", ";\n  }\n\n  &.half {\n    width: calc(50% - 34px);\n    @media (max-width: 767px) {\n      width: 100%;\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }



var BoxWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div(_templateObject(), Object(styled_theme__WEBPACK_IMPORTED_MODULE_1__["palette"])('border', 0), ''
/* margin: 0 10px 30px; */
);


/***/ }),

/***/ "./resources/js/isomophic/components/utility/boxTitle.js":
/*!***************************************************************!*\
  !*** ./resources/js/isomophic/components/utility/boxTitle.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _boxTitle_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./boxTitle.style */ "./resources/js/isomophic/components/utility/boxTitle.style.js");


/* harmony default export */ __webpack_exports__["default"] = (function (props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, props.title ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_boxTitle_style__WEBPACK_IMPORTED_MODULE_1__["BoxTitle"], {
    className: "isoBoxTitle"
  }, ' ', props.title, ' ') : '', props.subtitle ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_boxTitle_style__WEBPACK_IMPORTED_MODULE_1__["BoxSubTitle"], {
    className: "isoBoxSubTitle"
  }, ' ', props.subtitle, ' ') : '');
});

/***/ }),

/***/ "./resources/js/isomophic/components/utility/boxTitle.style.js":
/*!*********************************************************************!*\
  !*** ./resources/js/isomophic/components/utility/boxTitle.style.js ***!
  \*********************************************************************/
/*! exports provided: BoxTitle, BoxSubTitle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoxTitle", function() { return BoxTitle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoxSubTitle", function() { return BoxSubTitle; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var styled_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-theme */ "./node_modules/styled-theme/index.js");
/* harmony import */ var styled_theme__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_theme__WEBPACK_IMPORTED_MODULE_1__);
function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  font-size: 13px;\n  font-weight: 400;\n  color: ", ";\n  line-height: 24px;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  font-size: 14px;\n  font-weight: 500;\n  color: ", ";\n  margin: 0;\n  margin-bottom: 5px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }



var BoxTitle = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].h3(_templateObject(), Object(styled_theme__WEBPACK_IMPORTED_MODULE_1__["palette"])('text', 0));
var BoxSubTitle = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].p(_templateObject2(), Object(styled_theme__WEBPACK_IMPORTED_MODULE_1__["palette"])('text', 3));


/***/ }),

/***/ "./resources/js/isomophic/components/utility/contentHolder.js":
/*!********************************************************************!*\
  !*** ./resources/js/isomophic/components/utility/contentHolder.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _contentHolder_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contentHolder.style */ "./resources/js/isomophic/components/utility/contentHolder.style.js");


/* harmony default export */ __webpack_exports__["default"] = (function (props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_contentHolder_style__WEBPACK_IMPORTED_MODULE_1__["ContentHolderWrapper"], {
    className: "isoExampleWrapper",
    style: props.style
  }, props.children);
});

/***/ }),

/***/ "./resources/js/isomophic/components/utility/contentHolder.style.js":
/*!**************************************************************************!*\
  !*** ./resources/js/isomophic/components/utility/contentHolder.style.js ***!
  \**************************************************************************/
/*! exports provided: ContentHolderWrapper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentHolderWrapper", function() { return ContentHolderWrapper; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var styled_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-theme */ "./node_modules/styled-theme/index.js");
/* harmony import */ var styled_theme__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_theme__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _settings_withDirection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../settings/withDirection */ "./resources/js/isomophic/settings/withDirection.js");
function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  margin-top: 30px;\n  -webkit-overflow-scrolling: touch;\n\n  .demoBtn {\n    margin-right: ", ";\n    margin-left: ", ";\n  }\n\n  .demoBtnsWrapper {\n    &:nth-child(1) {\n      margin-left: ", ";\n      margin-right: ", ";\n      white-space: nowrap;\n    }\n\n    &:nth-child(2) {\n      width: 70px;\n      float: ", ";\n    }\n\n    &:nth-child(3) {\n      width: 70px;\n      margin-left: ", ";\n      margin-right: ", ";\n    }\n\n    &:nth-child(4) {\n      margin-left: ", ";\n      margin-right: ", ";\n      clear: both;\n      white-space: nowrap;\n    }\n\n    @media only screen and (max-width: 480px) {\n      margin-left: ", ";\n      white-space: nowrap;\n      margin-right: ", ";\n      float: none !important;\n    }\n\n    .demoPosBtn {\n      width: 70px;\n      margin-right: ", ";\n      margin-left: ", ";\n      margin-bottom: 8px;\n      padding: 0;\n\n      @media only screen and (max-width: 480px) {\n        width: 65px;\n      }\n    }\n  }\n\n  .ant-btn {\n    &:not(.demoPosBtn) {\n      &:last-child {\n        margin-right: 0;\n      }\n    }\n  }\n\n  .tooltipBtn {\n    display: inline-block;\n    line-height: 32px;\n    height: 32px;\n    width: 70px;\n    font-size: 14px;\n    text-align: center;\n    background: ", ";\n    margin-right: ", ";\n    margin-left: ", ";\n    margin-bottom: 6px;\n    border-radius: 6px;\n  }\n\n  .ant-progress {\n    &.ant-progress-circle {\n      margin-right: ", ";\n      margin-left: ", ";\n\n      &:last-child {\n        margin-right: ", ";\n        margin-left: ", ";\n      }\n    }\n  }\n\n  strong {\n    font-weight: 700;\n    font-size: 14px;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }




var WDContentHolderWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div(_templateObject(), function (props) {
  return props['data-rtl'] === 'rtl' ? '0' : '10px';
}, function (props) {
  return props['data-rtl'] === 'rtl' ? '10px' : '0';
}, function (props) {
  return props['data-rtl'] === 'rtl' ? '0' : '70px';
}, function (props) {
  return props['data-rtl'] === 'rtl' ? '70px' : '0';
}, function (props) {
  return props['data-rtl'] === 'rtl' ? 'right' : 'left';
}, function (props) {
  return props['data-rtl'] === 'rtl' ? '0' : '295px';
}, function (props) {
  return props['data-rtl'] === 'rtl' ? '295px' : '0';
}, function (props) {
  return props['data-rtl'] === 'rtl' ? '0' : '70px';
}, function (props) {
  return props['data-rtl'] === 'rtl' ? '70px' : '0';
}, function (props) {
  return props['data-rtl'] === 'rtl' ? '8px' : '0 !important';
}, function (props) {
  return props['data-rtl'] === 'rtl' ? '0 !important' : '8px';
}, function (props) {
  return props['data-rtl'] === 'rtl' ? '0' : '8px';
}, function (props) {
  return props['data-rtl'] === 'rtl' ? '8px' : '0';
}, Object(styled_theme__WEBPACK_IMPORTED_MODULE_1__["palette"])('secondary', 1), function (props) {
  return props['data-rtl'] === 'rtl' ? 'auto' : '6px';
}, function (props) {
  return props['data-rtl'] === 'rtl' ? '6px' : '0';
}, function (props) {
  return props['data-rtl'] === 'rtl' ? '0' : '15px';
}, function (props) {
  return props['data-rtl'] === 'rtl' ? '15px' : '0';
}, function (props) {
  return props['data-rtl'] === 'rtl' ? '0' : '0';
}, function (props) {
  return props['data-rtl'] === 'rtl' ? '0' : '0';
});
var ContentHolderWrapper = Object(_settings_withDirection__WEBPACK_IMPORTED_MODULE_2__["default"])(WDContentHolderWrapper);


/***/ }),

/***/ "./resources/js/isomophic/helpers/flags.js":
/*!*************************************************!*\
  !*** ./resources/js/isomophic/helpers/flags.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var flags = {
  INCIDENT: 'INCIDENT',
  ANNOUNCEMENT: 'ANNOUNCEMENT',
  ADMIN: 'ADMIN',
  ANNOUNCEMENT_TYPE: 'ANNOUNCEMENT_TYPE',
  CHECKLIST_DAILY: 'CHECKLIST_DAILY',
  CHECKLIST: 'CHECKLIST',
  CONFIG: 'CONFIG',
  INCIDENT_DAMAGE: 'INCIDENT_DAMAGE',
  INCIDENT_SEVERITY: 'INCIDENT_SEVERITY',
  INCIDENT_TYPE: 'INCIDENT_TYPE',
  JOB_SITE: 'JOB_SITE',
  JOB_TYPE: 'JOB_TYPE',
  JOB: 'JOB',
  ROLE: 'ROLE',
  DASHBOARD: 'DASHBOARD'
};
/* harmony default export */ __webpack_exports__["default"] = (flags);

/***/ }),

/***/ "./resources/js/isomophic/helpers/message.js":
/*!***************************************************!*\
  !*** ./resources/js/isomophic/helpers/message.js ***!
  \***************************************************/
/*! exports provided: connectSocket, listenSocket */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "connectSocket", function() { return connectSocket; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "listenSocket", function() { return listenSocket; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var socket_io_client_dist_socket_io__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! socket.io-client/dist/socket.io */ "./node_modules/socket.io-client/dist/socket.io.js");
/* harmony import */ var socket_io_client_dist_socket_io__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(socket_io_client_dist_socket_io__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _settings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../settings */ "./resources/js/isomophic/settings/index.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }



function connectSocket(socket) {
  if (socket == null) {
    return socket_io_client_dist_socket_io__WEBPACK_IMPORTED_MODULE_1___default()(_settings__WEBPACK_IMPORTED_MODULE_2__["urlConfig"].socketUrl, {
      jsonp: false,
      transports: ['websocket'],
      reconnection: true,
      reconnectionDelay: 1000,
      reconnectionAttempts: Infinity
    });
  } else {
    return socket;
  }
}
function listenSocket(socket, flag, callback) {
  try {
    socket.on('connect_timeout', function (timeout) {//console.log('connect_timeout' + timeout);
    });
    socket.on('reconnect_error', function (error) {//console.log('reconnect_error');
    });
    socket.on('reconnect_attempt', function () {
      socket.io.opts.transports = ['websocket'];
    });
    socket.on('connect', function () {//console.log("connected")
    });
    socket.on(flag, /*#__PURE__*/function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(data) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (callback !== null) callback(flag, data);

              case 1:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }());
  } catch (ex) {//console.log('Socket exception ' + ex);
  }
}

/***/ }),

/***/ "./resources/js/isomophic/settings/basicStyle.js":
/*!*******************************************************!*\
  !*** ./resources/js/isomophic/settings/basicStyle.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var rowStyle = {
  width: '100%',
  display: 'flex',
  flexFlow: 'row wrap',
  margin: 0
};
var colStyle = {
  marginBottom: '0',
  padding: 0
};
var gutter = 16;
var basicStyle = {
  rowStyle: rowStyle,
  colStyle: colStyle,
  gutter: gutter
};
/* harmony default export */ __webpack_exports__["default"] = (basicStyle);

/***/ })

}]);