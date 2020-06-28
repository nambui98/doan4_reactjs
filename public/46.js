(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[46],{

/***/ "./resources/js/isomophic/admin/components/User/index.js":
/*!***************************************************************!*\
  !*** ./resources/js/isomophic/admin/components/User/index.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _common_modal_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../common/modal.style */ "./resources/js/isomophic/common/modal.style.js");
/* harmony import */ var _isomophic_settings_withDirection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../isomophic/settings/withDirection */ "./resources/js/isomophic/settings/withDirection.js");
/* harmony import */ var _components_feedback_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/feedback/modal */ "./resources/js/isomophic/components/feedback/modal.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _common_data_style__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../common/data.style */ "./resources/js/isomophic/common/data.style.js");
/* harmony import */ var _common_styleControl__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../common/styleControl */ "./resources/js/isomophic/common/styleControl.js");
/* harmony import */ var _components_utility_intlMessages__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../components/utility/intlMessages */ "./resources/js/isomophic/components/utility/intlMessages.js");
/* harmony import */ var _helpers_formItem__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../helpers/formItem */ "./resources/js/isomophic/helpers/formItem.js");
/* harmony import */ var _helpers_helperFunc__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../helpers/helperFunc */ "./resources/js/isomophic/helpers/helperFunc.js");
/* harmony import */ var _settings__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../settings */ "./resources/js/isomophic/settings/index.js");
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
    Method Name: User
    Description: Add, update, changeStatus, changePassWord,
    Author: Bùi Văn Quý
    Last Modified Author: Nam Nam
    Created Date: 23/12/2019
    Modified Date: 05/11/2019
*/











 // import { isNullOrUndefined } from "util";
// import {
//   TableWrapper,
// } from '../../../common/control.style';

var dummyRequest = _helpers_helperFunc__WEBPACK_IMPORTED_MODULE_10__["default"].dummyRequest,
    beforeUpload = _helpers_helperFunc__WEBPACK_IMPORTED_MODULE_10__["default"].beforeUpload,
    getBase64 = _helpers_helperFunc__WEBPACK_IMPORTED_MODULE_10__["default"].getBase64; // const { Option } = Select;

var WDModal = Object(_common_modal_style__WEBPACK_IMPORTED_MODULE_1__["default"])(_components_feedback_modal__WEBPACK_IMPORTED_MODULE_3__["default"]);
var Modal = Object(_isomophic_settings_withDirection__WEBPACK_IMPORTED_MODULE_2__["default"])(WDModal);
var FormItem = antd__WEBPACK_IMPORTED_MODULE_5__["Form"].Item;
var RadioGroup = antd__WEBPACK_IMPORTED_MODULE_5__["Radio"].Group; // const { TextArea } = Input;

var ModalFormAccount = /*#__PURE__*/function (_Component) {
  _inherits(ModalFormAccount, _Component);

  var _super = _createSuper(ModalFormAccount);

  function ModalFormAccount(props) {
    var _this;

    _classCallCheck(this, ModalFormAccount);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "handleChange", function () {
      _this.setState({
        changed: true
      });
    });

    _this.state = {
      base64: null,
      changed: false,
      isLoadding: false,
      currAuthority: [],
      isAdding: true,
      limitAdd: false
    };
    _this.handleChange = _this.handleChange.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(ModalFormAccount, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.modalType === 'none') {
        this.setState({
          isAdding: true,
          changed: false
        });
        this.props.form.resetFields();
      }
    } //Disable or enable save button

  }, {
    key: "render",
    // onPageChange_Charge = (pageNumber, pageSize) => {
    //   const page = {
    //     name: this.props.displayname,
    //     page: pageNumber,
    //     limit: pageSize,
    //     loadData: "Charge"
    //   };
    //   this.setState(page, () => {
    //     this.props.onPageChange_customer(page);
    //   });
    // }
    // onPageChange_UserdCoin = (pageNumber, pageSize) => {
    //   const page = {
    //     name: this.props.displayname,
    //     page: pageNumber,
    //     limit: pageSize,
    //     loadData: "CoidUserd"
    //   };
    //   this.setState(page, () => {
    //     this.props.onPageChange_customer(page);
    //   });
    // }
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          modalActive = _this$props.modalActive,
          modalType = _this$props.modalType,
          row = _this$props.row,
          handleCancel = _this$props.handleCancel,
          handleSubmit = _this$props.handleSubmit;
      var getFieldDecorator = this.props.form.getFieldDecorator;
      var fileList = [];

      if (row && row.avata) {
        fileList.push({
          uid: '-1',
          name: '',
          status: 'done',
          url: row.avata,
          thumbUrl: _settings__WEBPACK_IMPORTED_MODULE_11__["urlConfig"].imageUrl + row.avata
        });
      }

      var normFile = function normFile(e) {
        if (Array.isArray(e)) {
          return e;
        }

        e.fileList = e.fileList.slice(-1);
        return e && e.fileList;
      }; //     const prefixSelector = getFieldDecorator('prefix', {
      //   initialValue: row.id != 0 && row.user && row.user.phone !== null ? row.user.phone.slice(0, 3) : '+84',
      // })(
      //   <Select style={{ width: 70 }} onChange={this.handleChange}>
      //     <Option value="84">+84</Option>
      //     <Option value="87">+87</Option>
      //   </Select>,
      // );


      var saveButton = function saveButton(e) {
        e.preventDefault();

        _this2.setState({
          changed: false
        });

        _this2.props.form.validateFieldsAndScroll(function (err, values) {
          if (!err) {
            if (modalType === 'changeStatus') {
              row.status = values.status;
              handleSubmit(modalType, row);
            } else if (modalType === 'editPass') {
              row.newpass = values.newpass;
              handleSubmit(modalType, row);
            } else {
              row.username = values.username;
              row.phone = values.phone;
              row.password = values.password;
              row.full_name = values.full_name;
              row.birthday = values.birthday;
              row.gender = values.gender;
              row.address = values.address;

              if (values.avatar[0].originFileObj) {
                getBase64(values.avatar[0].originFileObj, function (result) {
                  row.avata = result.replace(/^data:image\/[a-z]+;base64,/, '');
                  handleSubmit(modalType, row);

                  _this2.props.form.resetFields();
                });
              } else {
                handleSubmit(modalType, row);

                _this2.props.form.resetFields();
              }
            }
          }
        });
      };

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Modal, {
        title: modalType === 'changeStatus' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_utility_intlMessages__WEBPACK_IMPORTED_MODULE_8__["default"], {
          id: "form.titleChangeStatus"
        }) : modalType === 'insert' ? 'Add New' : modalType === 'edit' ? 'Update' : modalType === 'viewBlockHistory' ? 'Block History' : modalType === 'editPass' ? 'THAY ĐỔI MẬT KHẨU' : 'DETAIL',
        className: "FormModal",
        style: {
          top: 50
        },
        width: modalType === 'changeStatus' ? '25%' : '50%',
        visible: modalActive,
        onCancel: handleCancel,
        cancelText: modalType === 'view' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_utility_intlMessages__WEBPACK_IMPORTED_MODULE_8__["default"], {
          id: "button.close"
        }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_utility_intlMessages__WEBPACK_IMPORTED_MODULE_8__["default"], {
          id: "button.cancel"
        }),
        onOk: saveButton,
        okText: "Save",
        footer: modalType === 'changeStatus' || modalType === _helpers_helperFunc__WEBPACK_IMPORTED_MODULE_10__["default"].modeType.Insert || modalType === 'edit' || modalType === 'editPass' ? [/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_5__["Button"], {
          key: "cancel",
          className: "cancelType",
          onClick: handleCancel,
          style: Object(_common_styleControl__WEBPACK_IMPORTED_MODULE_7__["default"])(3, modalType)
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_utility_intlMessages__WEBPACK_IMPORTED_MODULE_8__["default"], {
          id: "button.close"
        })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_5__["Button"], {
          key: "ok",
          className: "okType",
          onClick: saveButton,
          style: {
            backgroundColor: '#2d3446',
            color: '#FFFFFF',
            borderRadius: '6px',
            display: modalType === 'view' || modalType === 'viewBlockHistory' ? 'none' : ''
          },
          disabled: !this.state.changed
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_utility_intlMessages__WEBPACK_IMPORTED_MODULE_8__["default"], {
          id: "button.save"
        }))] : [/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_5__["Button"], {
          key: "cancel",
          className: "cancelType",
          onClick: handleCancel,
          style: Object(_common_styleControl__WEBPACK_IMPORTED_MODULE_7__["default"])(3, modalType)
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_utility_intlMessages__WEBPACK_IMPORTED_MODULE_8__["default"], {
          id: "button.close"
        }))]
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_data_style__WEBPACK_IMPORTED_MODULE_6__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "clearfix"
      }, modalType === _helpers_helperFunc__WEBPACK_IMPORTED_MODULE_10__["default"].modeType.Insert ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_5__["Form"], {
        className: "isoCardInfoForm FormData"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_5__["Row"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_5__["Col"], {
        className: "ant-col-xl-12 ant-col-lg-24"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FormItem, _extends({}, _helpers_formItem__WEBPACK_IMPORTED_MODULE_9__["default"], {
        label: "Full name",
        hasFeedback: true
      }), getFieldDecorator('full_name', {
        rules: [{
          required: true,
          message: 'Full name is required'
        }]
      })( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_5__["Input"], {
        onChange: this.handleChange
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FormItem, _extends({}, _helpers_formItem__WEBPACK_IMPORTED_MODULE_9__["default"], {
        label: "User name",
        hasFeedback: true
      }), getFieldDecorator('username', {
        rules: [{
          required: true,
          message: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_utility_intlMessages__WEBPACK_IMPORTED_MODULE_8__["default"], {
            id: "form.validate.name"
          })
        }, {
          min: 8,
          message: 'Must be 8 characters long.'
        }]
      })( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_5__["Input"], {
        onChange: this.handleChange
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FormItem, _extends({}, _helpers_formItem__WEBPACK_IMPORTED_MODULE_9__["default"], {
        label: "Password",
        hasFeedback: true,
        style: {
          marginBottom: 10 + 'px'
        }
      }), getFieldDecorator('password', {
        initialValue: null,
        rules: [{
          required: true,
          message: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_utility_intlMessages__WEBPACK_IMPORTED_MODULE_8__["default"], {
            id: "form.validate.this"
          })
        }, {
          min: 8,
          max: 30,
          message: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_utility_intlMessages__WEBPACK_IMPORTED_MODULE_8__["default"], {
            id: "form.validate.passworde8_30"
          })
        }]
      })( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_5__["Input"], {
        type: "password",
        onChange: this.handleChange
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FormItem, _extends({}, _helpers_formItem__WEBPACK_IMPORTED_MODULE_9__["default"], {
        label: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "Phone"),
        hasFeedback: true,
        style: {
          marginBottom: 10 + 'px'
        }
      }), getFieldDecorator('phone', {
        rules: [{
          required: true,
          message: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_utility_intlMessages__WEBPACK_IMPORTED_MODULE_8__["default"], {
            id: "form.validate.this"
          })
        }, {
          validator: this.checkNumber
        }]
      })( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_5__["Input"], {
        onChange: this.handleChange,
        style: {
          width: '100%'
        }
      })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_5__["Col"], {
        className: "ant-col-xl-12 ant-col-lg-24"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FormItem, _extends({}, _helpers_formItem__WEBPACK_IMPORTED_MODULE_9__["default"], {
        label: "Avatar",
        style: {
          marginBottom: 10 + 'px'
        }
      }), getFieldDecorator('avatar', {
        valuePropName: 'fileList',
        getValueFromEvent: normFile,
        rules: [{
          required: true,
          message: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_utility_intlMessages__WEBPACK_IMPORTED_MODULE_8__["default"], {
            id: "form.validate.image"
          })
        }]
      })( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_5__["Upload"], {
        name: "avatar",
        customRequest: dummyRequest,
        listType: "picture",
        accept: "image/png, image/jpeg",
        beforeUpload: beforeUpload,
        onChange: this.handleChange
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_5__["Button"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_5__["Icon"], {
        type: "upload"
      }), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_utility_intlMessages__WEBPACK_IMPORTED_MODULE_8__["default"], {
        id: "form.upload"
      }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FormItem, _extends({}, _helpers_formItem__WEBPACK_IMPORTED_MODULE_9__["default"], {
        label: "Address",
        hasFeedback: true
      }), getFieldDecorator('address', {
        rules: [{
          required: true,
          message: 'Address is required'
        }]
      })( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_5__["Input"], {
        onChange: this.handleChange
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FormItem, _extends({}, _helpers_formItem__WEBPACK_IMPORTED_MODULE_9__["default"], {
        style: {
          width: '100%',
          marginBottom: '10px'
        },
        label: "Birth day"
      }), getFieldDecorator('birthday', {
        rules: [{
          required: true,
          message: 'Birth day is required'
        }]
      })( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_5__["DatePicker"], {
        format: _helpers_helperFunc__WEBPACK_IMPORTED_MODULE_10__["default"].dateFormat,
        disabledDate: this.disabledDate,
        allowClear: false,
        onChange: this.handleChange
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FormItem, _extends({}, _helpers_formItem__WEBPACK_IMPORTED_MODULE_9__["default"], {
        label: "Gender"
      }), getFieldDecorator('gender', {
        rules: [{
          required: true,
          message: 'Gender is required'
        }]
      })( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(RadioGroup, {
        onChange: this.handleChange
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_5__["Radio"], {
        value: 1
      }, "Male"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_5__["Radio"], {
        value: 2
      }, "Female"))))))) : modalType === 'edit' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_5__["Form"], {
        className: "isoCardInfoForm FormData"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_5__["Row"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_5__["Col"], {
        className: "ant-col-xl-12 ant-col-lg-24"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FormItem, _extends({}, _helpers_formItem__WEBPACK_IMPORTED_MODULE_9__["default"], {
        label: "Full name",
        hasFeedback: true
      }), getFieldDecorator('full_name', {
        initialValue: row.full_name,
        rules: [{
          required: true,
          message: 'Full name is required'
        }]
      })( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_5__["Input"], {
        onChange: this.handleChange
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FormItem, _extends({}, _helpers_formItem__WEBPACK_IMPORTED_MODULE_9__["default"], {
        label: "User name",
        hasFeedback: true
      }), getFieldDecorator('username', {
        initialValue: row.username,
        rules: [{
          required: true,
          message: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_utility_intlMessages__WEBPACK_IMPORTED_MODULE_8__["default"], {
            id: "form.validate.name"
          })
        }, {
          min: 8,
          message: 'Must be 8 characters long.'
        }]
      })( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_5__["Input"], {
        onChange: this.handleChange
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FormItem, _extends({}, _helpers_formItem__WEBPACK_IMPORTED_MODULE_9__["default"], {
        label: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "Phone"),
        hasFeedback: true,
        style: {
          marginBottom: 10 + 'px'
        }
      }), getFieldDecorator('phone', {
        initialValue: row.phone,
        rules: [{
          required: true,
          message: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_utility_intlMessages__WEBPACK_IMPORTED_MODULE_8__["default"], {
            id: "form.validate.this"
          })
        }, {
          validator: this.checkNumber
        }]
      })( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_5__["Input"], {
        onChange: this.handleChange,
        style: {
          width: '100%'
        }
      })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_5__["Col"], {
        className: "ant-col-xl-12 ant-col-lg-24"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FormItem, _extends({}, _helpers_formItem__WEBPACK_IMPORTED_MODULE_9__["default"], {
        label: "Avatar",
        style: {
          marginBottom: 10 + 'px'
        }
      }), getFieldDecorator('avatar', {
        valuePropName: 'fileList',
        getValueFromEvent: normFile,
        initialValue: fileList.length > 0 ? fileList : null,
        rules: [{
          required: true,
          message: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_utility_intlMessages__WEBPACK_IMPORTED_MODULE_8__["default"], {
            id: "form.validate.image"
          })
        }]
      })( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_5__["Upload"], {
        name: "avatar",
        customRequest: dummyRequest,
        listType: "picture",
        accept: "image/png, image/jpeg",
        beforeUpload: beforeUpload,
        onChange: this.handleChange
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_5__["Button"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_5__["Icon"], {
        type: "upload"
      }), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_utility_intlMessages__WEBPACK_IMPORTED_MODULE_8__["default"], {
        id: "form.upload"
      }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FormItem, _extends({}, _helpers_formItem__WEBPACK_IMPORTED_MODULE_9__["default"], {
        label: "Address",
        hasFeedback: true
      }), getFieldDecorator('address', {
        initialValue: row.address,
        rules: [{
          required: true,
          message: 'Address is required'
        }]
      })( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_5__["Input"], {
        onChange: this.handleChange
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FormItem, _extends({}, _helpers_formItem__WEBPACK_IMPORTED_MODULE_9__["default"], {
        style: {
          width: '100%',
          marginBottom: '10px'
        },
        label: "Birth day"
      }), getFieldDecorator('birthday', {
        initialValue: moment__WEBPACK_IMPORTED_MODULE_4___default()(row.birthday, _helpers_helperFunc__WEBPACK_IMPORTED_MODULE_10__["default"].dateFormat),
        rules: [{
          required: true,
          message: 'Birth day is required'
        }]
      })( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_5__["DatePicker"], {
        format: _helpers_helperFunc__WEBPACK_IMPORTED_MODULE_10__["default"].dateFormat,
        disabledDate: this.disabledDate,
        allowClear: false,
        onChange: this.handleChange
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FormItem, _extends({}, _helpers_formItem__WEBPACK_IMPORTED_MODULE_9__["default"], {
        label: "Gender"
      }), getFieldDecorator('gender', {
        initialValue: row.gender,
        rules: [{
          required: true,
          message: 'Gender is required'
        }]
      })( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(RadioGroup, {
        onChange: this.handleChange
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_5__["Radio"], {
        value: 1
      }, "Male"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_5__["Radio"], {
        value: 2
      }, "Female"))))))) : modalType === 'changeStatus' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_5__["Form"], {
        className: "FormData"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FormItem, _extends({}, _helpers_formItem__WEBPACK_IMPORTED_MODULE_9__["default"], {
        label: "Status"
      }), getFieldDecorator('status', {
        initialValue: row ? row.status : ''
      })( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(RadioGroup, {
        onChange: this.handleChange
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_5__["Radio"], {
        value: "1"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_utility_intlMessages__WEBPACK_IMPORTED_MODULE_8__["default"], {
        id: "form.active"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_5__["Radio"], {
        value: 2
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_utility_intlMessages__WEBPACK_IMPORTED_MODULE_8__["default"], {
        id: "form.inactive"
      })))))) : modalType === 'view' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "clearfix"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "detailField clearfix"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        className: "label"
      }, "Full name:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "contentDetail"
      }, row ? row.full_name : '')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "detailField clearfix"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        className: "label"
      }, "Phone:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "contentDetail"
      }, row ? row.phone : '')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "detailField clearfix"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        className: "label detailFieldFullBorder"
      }, "Gender"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "contentDetail"
      }, row ? row.gender === 1 ? 'Male' : row.gender === 2 ? 'Female' : '' : '')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "detailField clearfix"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        className: "label detailFieldFullBorder"
      }, "Address"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "contentDetail"
      }, row ? row.address : '')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "detailField clearfix"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        className: "label detailFieldFullBorder"
      }, "Birth day"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "contentDetail"
      }, row ? row.birthday : '')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "detailField clearfix"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        className: "label"
      }, "Created at"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "contentDetail"
      }, row ? moment__WEBPACK_IMPORTED_MODULE_4___default()(row.created_at).format('MM/DD/YYYY') : '')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "detailField clearfix"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        className: "label"
      }, "Updated at"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "contentDetail"
      }, row ? moment__WEBPACK_IMPORTED_MODULE_4___default()(row.updated_at).format('MM/DD/YYYY') : ''))) : modalType === 'editPass' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_5__["Form"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FormItem, _extends({}, _helpers_formItem__WEBPACK_IMPORTED_MODULE_9__["default"], {
        label: "M\u1EADt kh\u1EA9u m\u1EDBi",
        hasFeedback: true
      }), getFieldDecorator('newpass', {
        rules: [{
          required: true,
          message: 'Không được để trống mật khẩu mới'
        }, {
          max: 50,
          message: 'Tối đa 50 ký tự'
        }]
      })( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_5__["Input"], {
        onChange: this.handleChange,
        type: "password"
      })))) : '')));
    }
  }]);

  return ModalFormAccount;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

var WrappedModalFormAccount = antd__WEBPACK_IMPORTED_MODULE_5__["Form"].create()(ModalFormAccount);
/* harmony default export */ __webpack_exports__["default"] = (WrappedModalFormAccount);

/***/ }),

/***/ "./resources/js/isomophic/admin/containers/User/index.js":
/*!***************************************************************!*\
  !*** ./resources/js/isomophic/admin/containers/User/index.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _containers_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../containers/base */ "./resources/js/isomophic/containers/base/index.js");
/* harmony import */ var _settings_basicStyle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../settings/basicStyle */ "./resources/js/isomophic/settings/basicStyle.js");
/* harmony import */ var _common_control_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../common/control.style */ "./resources/js/isomophic/common/control.style.js");
/* harmony import */ var _common_data_style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../common/data.style */ "./resources/js/isomophic/common/data.style.js");
/* harmony import */ var _components_utility_layoutWrapper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../components/utility/layoutWrapper */ "./resources/js/isomophic/components/utility/layoutWrapper.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _components_utility_box__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../components/utility/box */ "./resources/js/isomophic/components/utility/box.js");
/* harmony import */ var _components_User__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/User */ "./resources/js/isomophic/admin/components/User/index.js");
/* harmony import */ var _redux_User_actions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../redux/User/actions */ "./resources/js/isomophic/admin/redux/User/actions.js");
/* harmony import */ var _components_uielements_tooltip__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../components/uielements/tooltip */ "./resources/js/isomophic/components/uielements/tooltip.js");
/* harmony import */ var _settings_index__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../settings/index */ "./resources/js/isomophic/settings/index.js");
/* harmony import */ var _components_utility_intlMessages__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../components/utility/intlMessages */ "./resources/js/isomophic/components/utility/intlMessages.js");
/* harmony import */ var _helpers_helperFunc__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../helpers/helperFunc */ "./resources/js/isomophic/helpers/helperFunc.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

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

// eslint-disable-next-line 
















var Users = /*#__PURE__*/function (_BaseComponent) {
  _inherits(Users, _BaseComponent);

  var _super = _createSuper(Users);

  function Users(props) {
    var _this;

    _classCallCheck(this, Users);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "updateStatusAdd", function (value) {//this.props.updateStatusSaveAdd(value);
    });

    _defineProperty(_assertThisInitialized(_this), "shouldComponentUpdate", function (nextProps, nextState) {
      if (_this.props.isSuccess === nextProps.isSuccess) {
        return true;
      } else {
        if (nextProps.isSuccess === true) {
          if (nextState.modalType === _helpers_helperFunc__WEBPACK_IMPORTED_MODULE_14__["default"].modeType.Insert && nextProps.saveAdd === true) {
            _this.setState({
              modalActive: true,
              modalType: _helpers_helperFunc__WEBPACK_IMPORTED_MODULE_14__["default"].modeType.Insert
            });
          } else {
            _this.setState({
              modalActive: false,
              modalType: _helpers_helperFunc__WEBPACK_IMPORTED_MODULE_14__["default"].modeType.None
            });
          }

          _this.updateStatusAdd(false);

          var page = {
            name: _this.state.search,
            phone: "",
            page: _this.state.page,
            limit: _settings_index__WEBPACK_IMPORTED_MODULE_12__["dataConfig"].pageLimit,
            loadData: "User"
          };
          nextProps.loadData(page);
        }

        return true;
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleRefresh", function () {
      var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

      _this.props.loadData({
        name: "",
        phone: "",
        page: _this.state.page,
        limit: _settings_index__WEBPACK_IMPORTED_MODULE_12__["dataConfig"].pageLimit,
        loadData: "User"
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleSearch", function () {
      var page = {
        name: _this.state.search,
        phone: "",
        page: _this.state.page,
        limit: _settings_index__WEBPACK_IMPORTED_MODULE_12__["dataConfig"].pageLimit,
        loadData: "User"
      };

      _this.setState(page, function () {
        _this.props.loadData(page);
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleLogout", function (row) {
      _this.props.LogoutOne(row);
    });

    _defineProperty(_assertThisInitialized(_this), "handleSubmit", function (actionName, obj) {
      if (actionName !== 'view') {
        _this.setState({
          loading: true
        });

        _this.props.saveInto(obj, actionName);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onPageChange", function (pageNumber, pageSize) {
      var page = {
        name: _this.state.search,
        phone: "",
        page: pageNumber,
        limit: pageSize,
        loadData: "User"
      };

      _this.setState(page, function () {
        _this.props.loadData(page);
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onPageChange_customer", function (data) {
      _this.props.loadData(data);
    });

    _this.updateCheck = _this.updateCheck.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Users, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var page = {
        name: this.state.search,
        page: this.state.page,
        limit: _settings_index__WEBPACK_IMPORTED_MODULE_12__["dataConfig"].pageLimit,
        loadData: "User"
      };
      this.props.loadData(page);
    }
  }, {
    key: "updateCheck",
    value: function updateCheck(arr, dataCheck, arrCheckedList) {
      this.props.updateCheck(arr, dataCheck, arrCheckedList);
    }
  }, {
    key: "handleModal",
    value: function handleModal(action) {
      var _this2 = this;

      var row = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

      if (row) {
        this.setState({
          modalType: action,
          modalActive: true,
          displayname: row.displayname
        }, function () {
          _this2.props.toggleModal(action, row);
        });
      } else {
        this.setState({
          modalType: action,
          modalActive: true
        }, function () {
          _this2.props.toggleModal(action, row);
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var _this$props = this.props,
          rows = _this$props.rows,
          count = _this$props.count,
          row = _this$props.row,
          disable = _this$props.disable;
      var rowStyle = _settings_basicStyle__WEBPACK_IMPORTED_MODULE_3__["default"].rowStyle,
          colStyle = _settings_basicStyle__WEBPACK_IMPORTED_MODULE_3__["default"].colStyle,
          gutter = _settings_basicStyle__WEBPACK_IMPORTED_MODULE_3__["default"].gutter;
      var _this$state = this.state,
          modalActive = _this$state.modalActive,
          newUserId = _this$state.newUserId;
      var dataSource = [];

      if (typeof rows !== "undefined" && rows !== null) {
        Object.keys(rows).map(function (row, index) {
          return dataSource.push(_objectSpread({}, rows[row], {
            key: row
          }));
        });
      } // group header content of table


      var columns = [];
      columns = [{
        title: 'User name',
        dataIndex: 'username',
        key: 'username',
        className: 'noWrapCell',
        sorter: function sorter(a, b) {
          if (a.username < b.username) return -1;
          if (a.username > b.username) return 1;
          return 0;
        },
        render: function render(text, row) {
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
            style: {
              fontWeight: "bold"
            },
            onClick: _this3.handleModal.bind(_this3, 'view', row)
          }, row.username);
        }
      }, {
        title: "Phone",
        dataIndex: 'phone',
        className: 'noWrapCell',
        key: 'phone',
        sorter: function sorter(a, b) {
          if (a.phone < b.phone) return -1;
          if (a.phone > b.phone) return 1;
          return 0;
        },
        render: function render(text, row) {
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, row.phone);
        }
      }, {
        title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_utility_intlMessages__WEBPACK_IMPORTED_MODULE_13__["default"], {
          id: "form.image"
        }),
        dataIndex: "image",
        key: "image",
        className: "noWrapCell",
        width: 60,
        render: function render(text, row) {
          if (row && row.userdetail && row.userdetail.avata) {
            return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
              style: {
                width: 60
              },
              alt: row.name,
              src: _settings_index__WEBPACK_IMPORTED_MODULE_12__["urlConfig"].imageUrl + row.userdetail.avata
            });
          }
        }
      }, {
        title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_utility_intlMessages__WEBPACK_IMPORTED_MODULE_13__["default"], {
          id: "form.status"
        }),
        dataIndex: "status",
        className: "noWrapCell",
        key: "status",
        width: 150,
        sorter: function sorter(a, b) {
          if (a.status < b.status) return -1;
          if (a.status > b.status) return 1;
          return 0;
        },
        render: function render(text, row) {
          var className;

          if (row.status === _helpers_helperFunc__WEBPACK_IMPORTED_MODULE_14__["default"].status.Active) {
            className = "publish";
          } else {
            className = "private";
          }

          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
            onClick: _this3.handleModal.bind(_this3, 'changeStatus', row),
            className: "conten"
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_control_style__WEBPACK_IMPORTED_MODULE_4__["StatusTag"], {
            className: className
          }, row.status === _helpers_helperFunc__WEBPACK_IMPORTED_MODULE_14__["default"].status.Active ? _helpers_helperFunc__WEBPACK_IMPORTED_MODULE_14__["default"].status.properties[_helpers_helperFunc__WEBPACK_IMPORTED_MODULE_14__["default"].status.Active] : _helpers_helperFunc__WEBPACK_IMPORTED_MODULE_14__["default"].status.properties[_helpers_helperFunc__WEBPACK_IMPORTED_MODULE_14__["default"].status.Inactive]));
        }
      }, {
        title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_utility_intlMessages__WEBPACK_IMPORTED_MODULE_13__["default"], {
          id: "form.updatedAt"
        }),
        dataIndex: 'updated_at',
        className: 'noWrapCell',
        key: 'updated_at',
        sorter: function sorter(a, b) {
          if (a.updated_at < b.updated_at) return -1;
          if (a.updated_at > b.updated_at) return 1;
          return 0;
        },
        render: function render(text, row) {
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, row.updated_at);
        }
      }, {
        title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_utility_intlMessages__WEBPACK_IMPORTED_MODULE_13__["default"], {
          id: "form.createdAt"
        }),
        dataIndex: 'created_at',
        className: 'noWrapCell',
        key: 'created_at',
        sorter: function sorter(a, b) {
          if (a.created_at < b.created_at) return -1;
          if (a.created_at > b.created_at) return 1;
          return 0;
        },
        render: function render(text, row) {
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, row.created_at);
        }
      }, // {
      //     title: "Topup History",
      //     key: 'Charge',
      //     fixed: 'right',
      //     width: 120,
      //     render: (text, row) => {
      //         return (
      //             <ActionWrapper>
      //                 <Tooltip title="View Topup History">
      //                     <button onClick={this.handleModal.bind(this, 'viewChargeHistory', row)} className="aSimple">
      //                         <Icon type="database" />
      //                     </button>
      //                 </Tooltip>
      //             </ActionWrapper>
      //         )
      //     }
      // }
      // ,
      // {
      //     title: "Coin Used",
      //     key: 'CoinUsed',
      //     fixed: 'right',
      //     width: 120,
      //     render: (text, row) => {
      //         return (
      //             <ActionWrapper>
      //                 <Tooltip title="View Coin Used History">
      //                     <button onClick={this.handleModal.bind(this, 'viewCoinUsedHistory', row)} className="aSimple">
      //                         <Icon type="database" />
      //                     </button>
      //                 </Tooltip>
      //             </ActionWrapper>
      //         )
      //     }
      // }
      // ,
      // {
      //     title: "Block History",
      //     key: 'Blockhistory',
      //     fixed: 'right',
      //     width: 120,
      //     render: (text, row) => {
      //         return (
      //             <ActionWrapper>
      //                 <Tooltip title="View Block History">
      //                     <button onClick={this.handleModal.bind(this, 'viewBlockHistory', row)} className="aSimple">
      //                         <Icon type="database" />
      //                     </button>
      //                 </Tooltip>
      //             </ActionWrapper>
      //         )
      //     }
      // }
      // ,
      {
        title: "",
        key: 'action',
        fixed: 'right',
        width: 150,
        className: "noWrapCell",
        render: function render(text, row) {
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_control_style__WEBPACK_IMPORTED_MODULE_4__["ActionWrapper"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
            onClick: _this3.handleModal.bind(_this3, "edit", row),
            className: "aSimple"
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_7__["Icon"], {
            type: "form",
            theme: "outlined"
          })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_uielements_tooltip__WEBPACK_IMPORTED_MODULE_11__["default"], {
            title: "Thay \u0111\u1ED5i m\u1EADt kh\u1EA9u"
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
            onClick: _this3.handleModal.bind(_this3, 'editPass', row),
            className: "aSimple"
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_7__["Icon"], {
            type: "key",
            theme: "outlined"
          }))));
        }
      }];
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_data_style__WEBPACK_IMPORTED_MODULE_5__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_utility_layoutWrapper__WEBPACK_IMPORTED_MODULE_6__["default"], {
        style: {
          padding: "0px"
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
        className: "PageHeader"
      }, " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_utility_intlMessages__WEBPACK_IMPORTED_MODULE_13__["default"], {
        id: "sidebar.usersManagement"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_7__["Row"], {
        style: rowStyle,
        gutter: gutter,
        justify: "start"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_7__["Col"], {
        md: 24,
        sm: 24,
        xs: 24,
        style: colStyle
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_utility_box__WEBPACK_IMPORTED_MODULE_8__["default"], {
        className: "boxWrapper"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_control_style__WEBPACK_IMPORTED_MODULE_4__["TitleWrapper"], {
        className: "titleWrapper"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_control_style__WEBPACK_IMPORTED_MODULE_4__["ComponentTitle"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_7__["Input"], {
        placeholder: "User name",
        onChange: this.handleSearchChange,
        className: "inputSearch"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        onClick: this.handleSearch,
        className: "btSearch"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_7__["Icon"], {
        type: "search",
        theme: "outlined"
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_control_style__WEBPACK_IMPORTED_MODULE_4__["ButtonHolders"], {
        className: "group_bt_head"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        onClick: this.handleRefresh,
        className: "btnRefresh btWizard"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_7__["Icon"], {
        type: "sync",
        theme: "outlined"
      }), "Refresh"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        onClick: this.handleModal.bind(this, "insert", null),
        className: "btnAdd btWizard"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_7__["Icon"], {
        type: "plus-square",
        theme: "outlined"
      }), "Add new"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_control_style__WEBPACK_IMPORTED_MODULE_4__["TableWrapper"], {
        rowKey: "key",
        columns: columns,
        dataSource: dataSource,
        locale: {
          emptyText: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            className: "ant-spin ant-spin-spinning ant-table-with-pagination ant-table-spin-holder"
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
            className: "ant-spin-dot ant-spin-dot-spin"
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", null)))
        } //loading={this.props.isLoading}
        ,
        className: "isoSimpleTable",
        bordered: true,
        pagination: {
          showSizeChanger: false,
          defaultCurrent: 1,
          defaultPageSize: _settings_index__WEBPACK_IMPORTED_MODULE_12__["dataConfig"].pageLimit || 10,
          current: this.state.page,
          total: count,
          hideOnSinglePage: true,
          onChange: this.onPageChange,
          showTotal: function showTotal(total, range) {
            return "Show ".concat(range[0], "-").concat(range[1], " in ").concat(dataSource.length, " records");
          }
        }
      }), row ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_User__WEBPACK_IMPORTED_MODULE_9__["default"], {
        displayname: row.displayname,
        modalActive: modalActive,
        modalType: this.state.modalType,
        row: this.props.newRow,
        handleCancel: this.handleCancel,
        handleSubmit: this.handleSubmit,
        handleClose: this.handleCancel,
        newUserId: newUserId,
        updateCheck: this.updateCheck,
        disable: disable,
        onPageChange_customer: this.onPageChange_customer
      }) : "")))));
    }
  }]);

  return Users;
}(_containers_base__WEBPACK_IMPORTED_MODULE_2__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(function (state) {
  return _objectSpread({}, state.UserReducer);
}, _redux_User_actions__WEBPACK_IMPORTED_MODULE_10__["default"])(Users));

/***/ })

}]);