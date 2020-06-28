(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[28],{

/***/ "./resources/js/isomophic/admin/components/Account/index.js":
/*!******************************************************************!*\
  !*** ./resources/js/isomophic/admin/components/Account/index.js ***!
  \******************************************************************/
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
/* harmony import */ var clone__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! clone */ "./node_modules/clone/clone.js");
/* harmony import */ var clone__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(clone__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _components_utility_intlMessages__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../components/utility/intlMessages */ "./resources/js/isomophic/components/utility/intlMessages.js");
/* harmony import */ var _helpers_helperFunc__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../helpers/helperFunc */ "./resources/js/isomophic/helpers/helperFunc.js");
/* harmony import */ var _settings__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../settings */ "./resources/js/isomophic/settings/index.js");
/* harmony import */ var _helpers_formItem__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../helpers/formItem */ "./resources/js/isomophic/helpers/formItem.js");
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
    Method Name: Account
    Description: Add, update, delete,  search, refresh, chageRole, reset passWord, changeStatus
    Author: Nam Nam
    Last Modified Author: Nam Nam
    Created Date: 20/02/2020
    Modified Date: 2/03/2020
*/













var WDModal = Object(_common_modal_style__WEBPACK_IMPORTED_MODULE_1__["default"])(_components_feedback_modal__WEBPACK_IMPORTED_MODULE_3__["default"]);
var Modal = Object(_isomophic_settings_withDirection__WEBPACK_IMPORTED_MODULE_2__["default"])(WDModal);
var FormItem = antd__WEBPACK_IMPORTED_MODULE_5__["Form"].Item;
var RadioGroup = antd__WEBPACK_IMPORTED_MODULE_5__["Radio"].Group;
var dummyRequest = _helpers_helperFunc__WEBPACK_IMPORTED_MODULE_10__["default"].dummyRequest,
    beforeUpload = _helpers_helperFunc__WEBPACK_IMPORTED_MODULE_10__["default"].beforeUpload,
    getBase64 = _helpers_helperFunc__WEBPACK_IMPORTED_MODULE_10__["default"].getBase64;

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

    _defineProperty(_assertThisInitialized(_this), "checkPhone", function (rule, value, callback) {
      var isNumber = /[^0-9]/;
      var form = _this.props.form;
      var rows = _this.props.rows;
      var number = "+84".concat(value);
      var isExitNumber = false;
      var isExitPhone = false; // if (!value) {
      // 	isExitNumber = false;
      // } else {

      if (value.length > 8 && value.length < 14 && isNumber.test(value) === false) {
        console.log(typeof value === 'undefined');
        isExitNumber = true;

        for (var i = 0; i < rows.length; i++) {
          if (value === form.getFieldValue('PhoneCheck')) {
            break;
          }

          if (number === rows[i].mobile || value === rows[i].mobile) {
            isExitPhone = true;
            break;
          }
        }
      } //}


      return isExitNumber ? isExitPhone ? callback('Phone already exists.') : callback() : typeof value === 'undefined' ? callback() : callback('Must be between 9 and 13 characters long.');
    });

    _this.state = {
      base64: null,
      changed: false,
      isLoadding: false,
      currAuthority: [],
      isAdding: true,
      limitAdd: false,
      startDate: moment__WEBPACK_IMPORTED_MODULE_4___default()(new Date()).add(1, 'days')
    };
    _this.handleChange = _this.handleChange.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(ModalFormAccount, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.modalType === 'none') {
        this.setState({
          base64: null,
          currAuthority: [],
          isAdding: true,
          changed: false
        });
        this.props.form.resetFields();
      }
    } //Disable or enable save button

  }, {
    key: "getBase64",
    // convert image to base64
    value: function getBase64(file, cb) {
      var reader = new FileReader();
      reader.readAsDataURL(file);

      reader.onload = function () {
        cb(reader.result);
      };

      reader.onerror = function (error) {};
    } // check phone number

  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          modalActive = _this$props.modalActive,
          modalType = _this$props.modalType,
          row = _this$props.row,
          handleCancel = _this$props.handleCancel,
          handleSubmit = _this$props.handleSubmit,
          updateIsAddNew = _this$props.updateIsAddNew,
          updateStatusAdd = _this$props.updateStatusAdd,
          updateCheckRole = _this$props.updateCheckRole;
      var fileList = [];

      if (row.avatar) {
        fileList.push({
          uid: '-1',
          name: '',
          status: 'done',
          url: row.avatar,
          thumbUrl: _settings__WEBPACK_IMPORTED_MODULE_11__["urlConfig"].imageUrl + 'img/avatar/' + row.avatar
        });
      }

      var normFile = function normFile(e) {
        if (Array.isArray(e)) {
          return e;
        }

        e.fileList = e.fileList.slice(-1);
        return e && e.fileList;
      };

      var roles = clone__WEBPACK_IMPORTED_MODULE_8___default()(this.props.roles);
      var getFieldDecorator = this.props.form.getFieldDecorator;

      var saveButton = function saveButton(e) {
        e.preventDefault();

        _this2.setState({
          changed: false
        });

        _this2.props.form.validateFieldsAndScroll(function (err, values) {
          if (!err) {
            if (modalType === 'roles') {
              var Arr = [];

              if (roles.length > 0) {
                roles.forEach(function (item) {
                  if (item.checked === true) {
                    Arr.push(item.id);
                  }
                });
              }

              row.RolesAfterChange = Arr;
              handleSubmit(modalType, row);
            } else if (modalType === 'editStatus') {
              row.status = values.status;
              handleSubmit(modalType, row);
            } else {
              row.fullname = values.full_name;
              row.email = values.email;
              row.phone = values.phone;
              row.username = values.username;
              row.password = values.password;
              row.status = values.status; // row.type = values.type;

              var baseImage = '';
              console.log(values.image);

              if (values.image && values.image[0] && values.image[0].originFileObj) {
                getBase64(values.image[0].originFileObj, function (result) {
                  baseImage = result;
                  var str = baseImage.replace(/^data:image\/[a-z]+;base64,/, '');
                  row.avatar = str;
                  handleSubmit(modalType, row);
                });
              } else {
                row.avatar = '';
                handleSubmit(modalType, row);
              }
            }
          }
        });
      }; // save and add


      var saveAdd = function saveAdd(e) {
        e.preventDefault();

        _this2.props.form.validateFieldsAndScroll(function (err, values) {
          if (!err) {
            row.username = values.username;
            row.password = values.password;
            row.status = values.status;

            if (modalType === _helpers_helperFunc__WEBPACK_IMPORTED_MODULE_10__["default"].modeType.Insert) {
              updateIsAddNew(true);
              updateStatusAdd(true);
            }

            _this2.props.form.resetFields();

            handleSubmit(modalType, row);
          }
        });
      };

      var HandleCheckRoleDetail = function HandleCheckRoleDetail(e, obj) {
        _this2.setState({
          changed: true
        }, function () {
          updateCheckRole(obj);
        });
      }; // if (row.phone && row.phone.length < 12) {
      //   row.phone = "+84" + row.phone;
      // }
      // const prefixSelector = getFieldDecorator('prefix', {
      //   initialValue: row.id != 0 && row.mobile && row.mobile !== null ? row.mobile.slice(0, 3) : '+84',
      // })(
      //   <Select style={{ width: 70 }} onChange={this.handleChange}>
      //     <Option value="+84">+84</Option>
      //     <Option value="+87">+87</Option>
      //   </Select>,
      // );


      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Modal, {
        title: modalType === 'editStatus' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_utility_intlMessages__WEBPACK_IMPORTED_MODULE_9__["default"], {
          id: "form.titleChangeStatus"
        }) : modalType === _helpers_helperFunc__WEBPACK_IMPORTED_MODULE_10__["default"].modeType.Insert ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_utility_intlMessages__WEBPACK_IMPORTED_MODULE_9__["default"], {
          id: "form.titleInsert"
        }) : modalType === 'roles' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_utility_intlMessages__WEBPACK_IMPORTED_MODULE_9__["default"], {
          id: "form.titleChangeRole"
        }) : modalType === 'resetPassword' ? 'CHANGE PASSWORD' : modalType === 'edit' ? 'Update' : 'DETAIL',
        className: "FormModal",
        style: {
          top: 50
        },
        visible: modalActive,
        onCancel: handleCancel,
        cancelText: modalType === 'view' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_utility_intlMessages__WEBPACK_IMPORTED_MODULE_9__["default"], {
          id: "button.close"
        }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_utility_intlMessages__WEBPACK_IMPORTED_MODULE_9__["default"], {
          id: "button.cancel"
        }),
        onOk: saveButton,
        okText: "Save",
        width: window.innerWidth > 1100 ? modalType === 'ChangeStatus' ? 30 + '%' : 50 + '%' : '100%',
        footer: modalType === _helpers_helperFunc__WEBPACK_IMPORTED_MODULE_10__["default"].modeType.Insert ? [/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_5__["Button"], {
          key: "cancel",
          className: "cancelType",
          onClick: handleCancel,
          style: Object(_common_styleControl__WEBPACK_IMPORTED_MODULE_7__["default"])(3, modalType)
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_utility_intlMessages__WEBPACK_IMPORTED_MODULE_9__["default"], {
          id: "button.close"
        })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_5__["Button"], {
          key: "ok",
          className: "okType",
          onClick: saveButton,
          style: Object(_common_styleControl__WEBPACK_IMPORTED_MODULE_7__["default"])(1, modalType),
          disabled: !this.state.changed
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_utility_intlMessages__WEBPACK_IMPORTED_MODULE_9__["default"], {
          id: "button.save"
        })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_5__["Button"], {
          key: "oknew",
          className: "okNewType",
          onClick: saveAdd,
          style: Object(_common_styleControl__WEBPACK_IMPORTED_MODULE_7__["default"])(2, modalType),
          disabled: !this.state.changed
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_utility_intlMessages__WEBPACK_IMPORTED_MODULE_9__["default"], {
          id: "button.save&AddNew"
        }))] : [/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_5__["Button"], {
          key: "cancel",
          className: "cancelType",
          onClick: handleCancel,
          style: Object(_common_styleControl__WEBPACK_IMPORTED_MODULE_7__["default"])(3, modalType)
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_utility_intlMessages__WEBPACK_IMPORTED_MODULE_9__["default"], {
          id: "button.close"
        })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_5__["Button"], {
          key: "ok",
          className: "okType",
          onClick: saveButton,
          style: Object(_common_styleControl__WEBPACK_IMPORTED_MODULE_7__["default"])(1, modalType),
          disabled: !this.state.changed
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_utility_intlMessages__WEBPACK_IMPORTED_MODULE_9__["default"], {
          id: "button.save"
        }))]
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_data_style__WEBPACK_IMPORTED_MODULE_6__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "clearfix"
      }, modalType === 'insert' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_5__["Form"], {
        className: "FormData"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FormItem, _extends({}, _helpers_formItem__WEBPACK_IMPORTED_MODULE_12__["default"], {
        label: "Full name",
        hasFeedback: true
      }), getFieldDecorator('full_name', {
        rules: [{
          required: true,
          message: 'Full name is required'
        }, {
          max: 200,
          message: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_utility_intlMessages__WEBPACK_IMPORTED_MODULE_9__["default"], {
            id: "form.validate.max200"
          })
        }, {
          pattern: new RegExp('^[A-Za-z][A-Za-z0-9 .]+$'),
          message: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_utility_intlMessages__WEBPACK_IMPORTED_MODULE_9__["default"], {
            id: "form.validate.fullnameSpecial"
          })
        }]
      })( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_5__["Input"], {
        onChange: this.handleChange,
        type: "text"
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FormItem, _extends({}, _helpers_formItem__WEBPACK_IMPORTED_MODULE_12__["default"], {
        label: "Email",
        hasFeedback: true
      }), getFieldDecorator('email', {
        rules: [{
          type: 'email',
          message: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_utility_intlMessages__WEBPACK_IMPORTED_MODULE_9__["default"], {
            id: "form.validate.email_orther"
          })
        }, {
          max: 200,
          message: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_utility_intlMessages__WEBPACK_IMPORTED_MODULE_9__["default"], {
            id: "form.validate.max200"
          })
        }]
      })( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_5__["Input"], {
        onChange: this.handleChange,
        type: "email"
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FormItem, _extends({}, _helpers_formItem__WEBPACK_IMPORTED_MODULE_12__["default"], {
        label: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "Phone"),
        hasFeedback: true,
        style: {
          marginBottom: 10 + 'px'
        }
      }), getFieldDecorator('phone', {
        rules: [{
          required: true,
          message: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_utility_intlMessages__WEBPACK_IMPORTED_MODULE_9__["default"], {
            id: "form.validate.this"
          })
        }, {
          min: 9,
          max: 13,
          message: 'Must be between 9 and 13 characters long.'
        }, {
          pattern: new RegExp('^[0-9]+$'),
          message: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_utility_intlMessages__WEBPACK_IMPORTED_MODULE_9__["default"], {
            id: "form.validate.phoneSpecial"
          })
        } // {
        // 	validator: this.checkPhone
        // }
        ]
      })( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_5__["Input"], {
        onChange: this.handleChange,
        style: {
          width: '100%'
        }
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FormItem, _extends({}, _helpers_formItem__WEBPACK_IMPORTED_MODULE_12__["default"], {
        label: "Avatar",
        style: {
          marginBottom: 10 + 'px'
        }
      }), getFieldDecorator('image', {
        valuePropName: 'fileList',
        getValueFromEvent: normFile // rules: [
        //   {
        //     required: true,
        //     message: <IntlMessages id="form.validate.image" />
        //   }
        // ]

      })( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_5__["Upload"], {
        name: "logo",
        customRequest: dummyRequest,
        listType: "picture",
        accept: "image/png, image/jpeg",
        beforeUpload: beforeUpload,
        onChange: this.handleChange
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_5__["Button"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_5__["Icon"], {
        type: "upload"
      }), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_utility_intlMessages__WEBPACK_IMPORTED_MODULE_9__["default"], {
        id: "form.upload"
      }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FormItem, _extends({}, _helpers_formItem__WEBPACK_IMPORTED_MODULE_12__["default"], {
        label: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_utility_intlMessages__WEBPACK_IMPORTED_MODULE_9__["default"], {
          id: "form.username"
        }), " \xA0"),
        hasFeedback: true,
        style: {
          marginBottom: 10 + 'px'
        }
      }), getFieldDecorator('username', {
        rules: [{
          required: true,
          message: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_utility_intlMessages__WEBPACK_IMPORTED_MODULE_9__["default"], {
            id: "form.validate.username"
          })
        }, {
          min: 6,
          max: 20,
          message: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_utility_intlMessages__WEBPACK_IMPORTED_MODULE_9__["default"], {
            id: "form.validate.username6_20"
          })
        }, {
          whitespace: true,
          message: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_utility_intlMessages__WEBPACK_IMPORTED_MODULE_9__["default"], {
            id: "form.validate.usernameOrther"
          })
        }, {
          pattern: new RegExp('^[A-Za-z][A-Za-z0-9_.]+$'),
          message: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_utility_intlMessages__WEBPACK_IMPORTED_MODULE_9__["default"], {
            id: "form.validate.usernameSpecial"
          })
        }]
      })( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_5__["Input"], {
        onChange: this.handleChange
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FormItem, _extends({}, _helpers_formItem__WEBPACK_IMPORTED_MODULE_12__["default"], {
        label: "Password",
        hasFeedback: true,
        style: {
          marginBottom: 10 + 'px'
        }
      }), getFieldDecorator('password', {
        rules: [{
          required: true,
          message: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_utility_intlMessages__WEBPACK_IMPORTED_MODULE_9__["default"], {
            id: "form.validate.password"
          })
        }, {
          min: 6,
          max: 20,
          message: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_utility_intlMessages__WEBPACK_IMPORTED_MODULE_9__["default"], {
            id: "form.validate.username6_20"
          })
        }, {
          whitespace: true,
          message: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_utility_intlMessages__WEBPACK_IMPORTED_MODULE_9__["default"], {
            id: "form.validate.passwordOrther"
          })
        }]
      })( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_5__["Input"], {
        type: "password",
        onChange: this.handleChange
      }))))) : modalType === 'edit' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_5__["Form"], {
        className: "FormData"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FormItem, _extends({}, _helpers_formItem__WEBPACK_IMPORTED_MODULE_12__["default"], {
        label: "Full name",
        hasFeedback: true
      }), getFieldDecorator('full_name', {
        initialValue: row && row.fullname ? row.fullname : null,
        rules: [{
          required: true,
          message: 'Full name is required'
        }, {
          max: 200,
          message: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_utility_intlMessages__WEBPACK_IMPORTED_MODULE_9__["default"], {
            id: "form.validate.max200"
          })
        }, {
          pattern: new RegExp('^[A-Za-z][A-Za-z0-9 .]+$'),
          message: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_utility_intlMessages__WEBPACK_IMPORTED_MODULE_9__["default"], {
            id: "form.validate.fullnameSpecial"
          })
        }]
      })( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_5__["Input"], {
        onChange: this.handleChange,
        type: "text"
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FormItem, _extends({}, _helpers_formItem__WEBPACK_IMPORTED_MODULE_12__["default"], {
        label: "Email",
        hasFeedback: true
      }), getFieldDecorator('email', {
        initialValue: row && row.email ? row.email : null,
        rules: [{
          type: 'email',
          message: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_utility_intlMessages__WEBPACK_IMPORTED_MODULE_9__["default"], {
            id: "form.validate.email_orther"
          })
        }, {
          max: 200,
          message: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_utility_intlMessages__WEBPACK_IMPORTED_MODULE_9__["default"], {
            id: "form.validate.max200"
          })
        }]
      })( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_5__["Input"], {
        onChange: this.handleChange,
        type: "email"
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FormItem, _extends({}, _helpers_formItem__WEBPACK_IMPORTED_MODULE_12__["default"], {
        label: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "Phone"),
        hasFeedback: true,
        style: {
          marginBottom: 10 + 'px'
        }
      }), getFieldDecorator('phone', {
        initialValue: row && row.phone ? row.phone : null,
        rules: [{
          required: true,
          message: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_utility_intlMessages__WEBPACK_IMPORTED_MODULE_9__["default"], {
            id: "form.validate.this"
          })
        }, {
          min: 9,
          max: 13,
          message: 'Must be between 9 and 13 characters long.'
        }, {
          pattern: new RegExp('^[0-9]+$'),
          message: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_utility_intlMessages__WEBPACK_IMPORTED_MODULE_9__["default"], {
            id: "form.validate.phoneSpecial"
          })
        }]
      })( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_5__["Input"], {
        onChange: this.handleChange,
        style: {
          width: '100%'
        }
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FormItem, _extends({}, _helpers_formItem__WEBPACK_IMPORTED_MODULE_12__["default"], {
        label: "Avatar",
        style: {
          marginBottom: 10 + 'px'
        }
      }), getFieldDecorator('image', {
        valuePropName: 'fileList',
        getValueFromEvent: normFile,
        initialValue: fileList.length > 0 ? fileList : null // rules: [
        //   {
        //     required: true,
        //     message: <IntlMessages id="form.validate.image" />
        //   }
        // ]

      })( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_5__["Upload"], {
        name: "logo",
        customRequest: dummyRequest,
        listType: "picture",
        accept: "image/png, image/jpeg",
        beforeUpload: beforeUpload,
        onChange: this.handleChange
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_5__["Button"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_5__["Icon"], {
        type: "upload"
      }), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_utility_intlMessages__WEBPACK_IMPORTED_MODULE_9__["default"], {
        id: "form.upload"
      }))))))) : modalType === 'editStatus' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_5__["Form"], {
        className: "FormData"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FormItem, _extends({}, _helpers_formItem__WEBPACK_IMPORTED_MODULE_12__["default"], {
        label: "Status"
      }), getFieldDecorator('status', {
        initialValue: row.status
      })( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(RadioGroup, {
        onChange: this.handleChange
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_5__["Radio"], {
        value: 1
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_utility_intlMessages__WEBPACK_IMPORTED_MODULE_9__["default"], {
        id: "form.active"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_5__["Radio"], {
        value: 2
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_utility_intlMessages__WEBPACK_IMPORTED_MODULE_9__["default"], {
        id: "form.inactive"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_5__["Radio"], {
        value: 3
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_utility_intlMessages__WEBPACK_IMPORTED_MODULE_9__["default"], {
        id: "form.delete"
      }))))))) : modalType === 'resetPassword' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_5__["Form"], {
        className: "FormData"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FormItem // {...formItemLayout}
      , {
        label: "Password",
        hasFeedback: true,
        style: {
          marginBottom: 10 + 'px'
        }
      }, getFieldDecorator('password', {
        rules: [{
          required: true,
          message: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_utility_intlMessages__WEBPACK_IMPORTED_MODULE_9__["default"], {
            id: "form.validate.password"
          })
        }, {
          min: 6,
          max: 20,
          message: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_utility_intlMessages__WEBPACK_IMPORTED_MODULE_9__["default"], {
            id: "form.validate.username6_20"
          })
        }, {
          whitespace: true,
          message: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_utility_intlMessages__WEBPACK_IMPORTED_MODULE_9__["default"], {
            id: "form.validate.passwordOrther"
          })
        }]
      })( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_5__["Input"].Password, {
        type: "password",
        onChange: this.handleChange
      }))))) : modalType === 'roles' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_5__["Form"], {
        className: "FormData"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "clearfix"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "LeftSideContent"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FormItem, _extends({}, _helpers_formItem__WEBPACK_IMPORTED_MODULE_12__["default"], {
        label: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_utility_intlMessages__WEBPACK_IMPORTED_MODULE_9__["default"], {
          id: "form.changRole"
        })),
        style: {
          marginBottom: 10 + 'px'
        }
      }), getFieldDecorator('username')( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", null, row.username))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
        style: {
          color: '#b37604',
          textTransform: 'uppercase',
          padding: '0 0 10px 0',
          margin: '10px 0 10px 0',
          borderBottom: 'solid 1px #b37604'
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_utility_intlMessages__WEBPACK_IMPORTED_MODULE_9__["default"], {
        id: "form.role"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, roles.length > 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_5__["Row"], {
        className: "rowCheckbox"
      }, roles.map(function (role) {
        if (role.status === 1) return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_5__["Col"], {
          key: 'checkbox' + role.id,
          md: 6,
          sm: 8
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_5__["Checkbox"], {
          checked: role.checked,
          value: role.id,
          onChange: function onChange(e) {
            HandleCheckRoleDetail(e, role);
          }
        }, role.rolename));else return '';
      })) : '')) : '')));
    }
  }]);

  return ModalFormAccount;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

var WrappedModalFormAccount = antd__WEBPACK_IMPORTED_MODULE_5__["Form"].create()(ModalFormAccount);
/* harmony default export */ __webpack_exports__["default"] = (WrappedModalFormAccount);

/***/ }),

/***/ "./resources/js/isomophic/admin/containers/Account/index.js":
/*!******************************************************************!*\
  !*** ./resources/js/isomophic/admin/containers/Account/index.js ***!
  \******************************************************************/
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
/* harmony import */ var _components_Account__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/Account */ "./resources/js/isomophic/admin/components/Account/index.js");
/* harmony import */ var _redux_Account_actions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../redux/Account/actions */ "./resources/js/isomophic/admin/redux/Account/actions.js");
/* harmony import */ var _components_uielements_tooltip__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../components/uielements/tooltip */ "./resources/js/isomophic/components/uielements/tooltip.js");
/* harmony import */ var _settings_index__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../settings/index */ "./resources/js/isomophic/settings/index.js");
/* harmony import */ var _components_utility_intlMessages__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../components/utility/intlMessages */ "./resources/js/isomophic/components/utility/intlMessages.js");
/* harmony import */ var _helpers_helperFunc__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../helpers/helperFunc */ "./resources/js/isomophic/helpers/helperFunc.js");
/* harmony import */ var _redux_Socket_actions__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../redux/Socket/actions */ "./resources/js/isomophic/admin/redux/Socket/actions.js");
/* harmony import */ var _helpers_message__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./../../../helpers/message */ "./resources/js/isomophic/helpers/message.js");
/* harmony import */ var _helpers_flags__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../helpers/flags */ "./resources/js/isomophic/helpers/flags.js");
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




















var Accounts = /*#__PURE__*/function (_BaseComponent) {
  _inherits(Accounts, _BaseComponent);

  var _super = _createSuper(Accounts);

  function Accounts(props) {
    var _this;

    _classCallCheck(this, Accounts);

    _this = _super.call(this, props);

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

          if (_this.props.modalType === 'roles') {
            var row = {};
            row.username = _this.state.username;
          }

          var page = {
            name: '',
            page: 1,
            limit: _settings_index__WEBPACK_IMPORTED_MODULE_12__["dataConfig"].pageLimit
          };

          _this.props.loadData(page);
        }

        return true;
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleLogout", function (row) {
      _this.props.LogoutOne(row);
    });

    _defineProperty(_assertThisInitialized(_this), "handleSubmit", function (actionName, obj) {
      // if (obj.id > 0 && actionName !== 'delete')
      //    actionName = 'update';
      if (actionName !== 'view') {
        _this.setState({
          loading: true
        });

        _this.props.saveInto(obj, actionName);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleRefresh", function () {
      var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

      _this.props.loadData({
        name: '',
        page: 1,
        limit: _settings_index__WEBPACK_IMPORTED_MODULE_12__["dataConfig"].pageLimit
      });

      _this.reset();
    });

    _defineProperty(_assertThisInitialized(_this), "handleSearchChange", function (e) {
      _this.setState(_objectSpread({}, _this.state, {
        search: e.target.value
      }));
    });

    _defineProperty(_assertThisInitialized(_this), "reset", function () {
      _this.setState({
        search: '',
        page: 1
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleSearch", function () {
      _this.props.loadData({
        name: _this.state.search,
        page: 1,
        limit: _settings_index__WEBPACK_IMPORTED_MODULE_12__["dataConfig"].pageLimit
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleCancel", function () {
      _this.setState({
        modalType: 'none',
        modalActive: false
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onPageChange", function (pageNumber, pageSize) {
      var page = {
        name: _this.state.search,
        page: pageNumber,
        limit: pageSize
      };

      _this.setState(page, function () {
        _this.props.loadData(page);
      });
    });

    _this.updateIsAddNew = _this.updateIsAddNew.bind(_assertThisInitialized(_this));
    _this.updateStatusAdd = _this.updateStatusAdd.bind(_assertThisInitialized(_this));
    _this.updateCheck = _this.updateCheck.bind(_assertThisInitialized(_this));
    _this.state = {
      search: '',
      modalType: '',
      modalActive: false,
      isAddNew: false,
      username: '',
      page: 1
    };
    return _this;
  }

  _createClass(Accounts, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var page = {
        name: this.state.search,
        page: this.state.page,
        limit: _settings_index__WEBPACK_IMPORTED_MODULE_12__["dataConfig"].pageLimit
      };
      this.props.loadData(page);
    }
  }, {
    key: "updateCheck",
    value: function updateCheck(arr, dataCheck, arrCheckedList) {
      this.props.updateCheck(arr, dataCheck, arrCheckedList);
    }
  }, {
    key: "updateIsAddNew",
    value: function updateIsAddNew(value) {
      this.setState({
        isAddNew: value
      });
    } // save and add

  }, {
    key: "updateStatusAdd",
    value: function updateStatusAdd(value) {
      this.props.updateStatusSaveAdd(value);
    } //load datatable

  }, {
    key: "handleModal",
    value: function handleModal(action) {
      var _this2 = this;

      var row = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

      if (row) {
        this.setState({
          modalType: action,
          modalActive: true,
          username: row.username
        }, function () {
          _this2.props.toggleModal(action, row, _this2.props.roles);
        });
      } else {
        this.setState({
          modalType: action,
          modalActive: true
        }, function () {
          _this2.props.toggleModal(action, row, _this2.props.roles);
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
          roles = _this$props.roles,
          disable = _this$props.disable,
          updateCheckRole = _this$props.updateCheckRole;
      var rowStyle = _settings_basicStyle__WEBPACK_IMPORTED_MODULE_3__["default"].rowStyle,
          colStyle = _settings_basicStyle__WEBPACK_IMPORTED_MODULE_3__["default"].colStyle,
          gutter = _settings_basicStyle__WEBPACK_IMPORTED_MODULE_3__["default"].gutter;
      var _this$state = this.state,
          modalActive = _this$state.modalActive,
          newUserId = _this$state.newUserId;
      var dataSource = [];

      if (rows !== 'undefined' && rows !== null) {
        Object.keys(rows).map(function (row, index) {
          return dataSource.push(_objectSpread({}, rows[row], {
            key: row
          }));
        });
      } // group header content of table


      var columns = [{
        title: 'Username',
        dataIndex: 'username',
        key: 'username',
        className: 'noWrapCell',
        sorter: function sorter(a, b) {
          if (a.username < b.username) return -1;
          if (a.username > b.username) return 1;
          return 0;
        },
        render: function render(text, row) {
          return row.username;
        }
      }, {
        title: 'Email',
        dataIndex: 'email',
        key: 'email',
        className: 'noWrapCell',
        sorter: function sorter(a, b) {
          if (a.email < b.email) return -1;
          if (a.email > b.email) return 1;
          return 0;
        },
        render: function render(text, row) {
          return row.email;
        }
      }, {
        title: 'Phone',
        dataIndex: 'phone',
        key: 'phone',
        className: 'noWrapCell',
        sorter: function sorter(a, b) {
          if (a.phone < b.phone) return -1;
          if (a.phone > b.phone) return 1;
          return 0;
        },
        render: function render(text, row) {
          return row.phone;
        }
      }, {
        title: 'Avatar',
        dataIndex: 'Avatar',
        key: 'Avatar',
        width: '151px',
        className: 'noWrapCell',
        render: function render(text, row) {
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
            style: {
              height: '60px',
              width: '100%'
            },
            alt: row.username ? row.username : '',
            src: row.avatar ? _settings_index__WEBPACK_IMPORTED_MODULE_12__["urlConfig"].imageUrl + 'img/avatar/' + row.avatar : ''
          });
        }
      }, {
        title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_utility_intlMessages__WEBPACK_IMPORTED_MODULE_13__["default"], {
          id: "form.status"
        }),
        dataIndex: 'status',
        className: 'noWrapCell',
        key: 'status',
        sorter: function sorter(a, b) {
          if (a.status < b.status) return -1;
          if (a.status > b.status) return 1;
          return 0;
        },
        render: function render(text, row) {
          if (row.username === localStorage.getItem('user_name')) return '';
          if (row.username === 'admin') return '';
          var className;

          if (row.status === _helpers_helperFunc__WEBPACK_IMPORTED_MODULE_14__["default"].status.Active) {
            className = 'publish';
          } else if (row.status === _helpers_helperFunc__WEBPACK_IMPORTED_MODULE_14__["default"].status.Inactive) {
            className = 'private';
          }

          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_uielements_tooltip__WEBPACK_IMPORTED_MODULE_11__["default"], {
            title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_utility_intlMessages__WEBPACK_IMPORTED_MODULE_13__["default"], {
              id: "form.changStatus"
            })
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_control_style__WEBPACK_IMPORTED_MODULE_4__["StatusTag"], {
            className: className,
            style: {
              backgroundColor: row.status === 3 ? '#e74c3c' : ''
            },
            onClick: _this3.handleModal.bind(_this3, 'editStatus', row)
          }, row.status === _helpers_helperFunc__WEBPACK_IMPORTED_MODULE_14__["default"].status.Active ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_utility_intlMessages__WEBPACK_IMPORTED_MODULE_13__["default"], {
            id: "form.active"
          }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_utility_intlMessages__WEBPACK_IMPORTED_MODULE_13__["default"], {
            id: "form.inactive"
          })));
        }
      }, // {
      //     title: <IntlMessages id="form.updatedAt" />,
      //     dataIndex: 'updated_at',
      //     className: 'noWrapCell',
      //     key: 'updated_at',
      //     sorter: (a, b) => {
      //         if (a.updated_at < b.updated_at) return -1;
      //         if (a.updated_at > b.updated_at) return 1;
      //         return 0;
      //     },
      //     render: (text, row) => {
      //         return (
      //             <span>{row.updated_at}</span>
      //         )
      //     }
      // },

      /*
                <Tooltip title="Edit">
                   <a onClick={this.handleModal.bind(this, 'update', row)} className="aSimple">
                       <Icon type="form" theme="outlined" />
                   </a>
               </Tooltip>
               */
      {
        title: 'Action',
        key: 'actions',
        fixed: 'right',
        width: 100,
        render: function render(text, row) {
          if (localStorage.getItem('user_name') === 'NamNamNam' || localStorage.getItem('user_name') === 'admin') return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_control_style__WEBPACK_IMPORTED_MODULE_4__["ActionWrapper"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_uielements_tooltip__WEBPACK_IMPORTED_MODULE_11__["default"], {
            title: "Edit"
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
            onClick: _this3.handleModal.bind(_this3, 'edit', row),
            className: "aSimple"
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_7__["Icon"], {
            type: "form",
            theme: "outlined"
          }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_uielements_tooltip__WEBPACK_IMPORTED_MODULE_11__["default"], {
            title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_utility_intlMessages__WEBPACK_IMPORTED_MODULE_13__["default"], {
              id: "form.changeRole"
            })
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
            onClick: _this3.handleModal.bind(_this3, 'roles', row),
            className: "aSimple"
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_7__["Icon"], {
            type: "key",
            theme: "outlined"
          }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
            style: {
              color: '#fff',
              fontStyle: 'normal',
              fontSize: '10px'
            }
          }, "+"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_uielements_tooltip__WEBPACK_IMPORTED_MODULE_11__["default"], {
            title: "Reset Password"
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
            onClick: _this3.handleModal.bind(_this3, 'resetPassword', row),
            className: "aSimple"
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_7__["Icon"], {
            type: "idcard"
          }))));else if (row.username !== 'admin') return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_control_style__WEBPACK_IMPORTED_MODULE_4__["ActionWrapper"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_uielements_tooltip__WEBPACK_IMPORTED_MODULE_11__["default"], {
            title: "Edit"
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
            onClick: _this3.handleModal.bind(_this3, 'edit', row),
            className: "aSimple"
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_7__["Icon"], {
            type: "form",
            theme: "outlined"
          }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_uielements_tooltip__WEBPACK_IMPORTED_MODULE_11__["default"], {
            title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_utility_intlMessages__WEBPACK_IMPORTED_MODULE_13__["default"], {
              id: "form.changeRole"
            })
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
            onClick: _this3.handleModal.bind(_this3, 'roles', row),
            className: "aSimple"
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_7__["Icon"], {
            type: "key",
            theme: "outlined"
          }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
            style: {
              color: '#fff',
              fontStyle: 'normal',
              fontSize: '10px'
            }
          }, "+"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_uielements_tooltip__WEBPACK_IMPORTED_MODULE_11__["default"], {
            title: "Reset Password"
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
            onClick: _this3.handleModal.bind(_this3, 'resetPassword', row),
            className: "aSimple"
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_7__["Icon"], {
            type: "idcard"
          }))));
        }
      }];
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_data_style__WEBPACK_IMPORTED_MODULE_5__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_utility_layoutWrapper__WEBPACK_IMPORTED_MODULE_6__["default"], {
        style: {
          padding: '0px'
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
        className: "PageHeader"
      }, ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_utility_intlMessages__WEBPACK_IMPORTED_MODULE_13__["default"], {
        id: "sidebar.account"
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
        placeholder: "User name...",
        onChange: this.handleSearchChange,
        className: "inputSearch",
        onKeyUp: this.onKeyUp,
        value: this.state.search
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
        onClick: this.handleModal.bind(this, 'insert', null),
        className: "btnAdd btWizard"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_7__["Icon"], {
        type: "plus-square",
        theme: "outlined"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_utility_intlMessages__WEBPACK_IMPORTED_MODULE_13__["default"], {
        id: "button.add"
      })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_control_style__WEBPACK_IMPORTED_MODULE_4__["TableWrapper"], {
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
      }), row ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Account__WEBPACK_IMPORTED_MODULE_9__["default"], {
        modalActive: modalActive,
        modalType: this.state.modalType,
        row: row,
        rows: rows,
        handleCancel: this.handleCancel,
        handleSubmit: this.handleSubmit,
        handleClose: this.handleCancel,
        newUserId: newUserId,
        updateIsAddNew: this.updateIsAddNew,
        isAddNew: this.state.isAddNew,
        roles: roles // save and add
        ,
        updateStatusAdd: this.updateStatusAdd,
        updateCheck: this.updateCheck,
        disable: disable,
        updateCheckRole: updateCheckRole
      }) : '')))));
    }
  }]);

  return Accounts;
}(_containers_base__WEBPACK_IMPORTED_MODULE_2__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(function (state) {
  return _objectSpread({}, state.Accounts, {}, state.SocketReducer);
}, _objectSpread({}, _redux_Account_actions__WEBPACK_IMPORTED_MODULE_10__["default"], {}, _redux_Socket_actions__WEBPACK_IMPORTED_MODULE_15__["default"]))(Accounts));

/***/ })

}]);