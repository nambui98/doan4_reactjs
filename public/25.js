(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[25],{

/***/ "./resources/js/isomophic/admin/components/Summary/index.js":
/*!******************************************************************!*\
  !*** ./resources/js/isomophic/admin/components/Summary/index.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _common_modal_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../common/modal.style */ "./resources/js/isomophic/common/modal.style.js");
/* harmony import */ var _settings_withDirection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../settings/withDirection */ "./resources/js/isomophic/settings/withDirection.js");
/* harmony import */ var _components_feedback_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/feedback/modal */ "./resources/js/isomophic/components/feedback/modal.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _common_data_style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../common/data.style */ "./resources/js/isomophic/common/data.style.js");
/* harmony import */ var _common_styleControl__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../common/styleControl */ "./resources/js/isomophic/common/styleControl.js");
/* harmony import */ var _components_utility_intlMessages__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../components/utility/intlMessages */ "./resources/js/isomophic/components/utility/intlMessages.js");
/* harmony import */ var _helpers_formItem__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../helpers/formItem */ "./resources/js/isomophic/helpers/formItem.js");
/* harmony import */ var _helpers_helperFunc__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../helpers/helperFunc */ "./resources/js/isomophic/helpers/helperFunc.js");
/* harmony import */ var _common_control_style__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../common/control.style */ "./resources/js/isomophic/common/control.style.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

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

/*
    Method Name: Incident Type
    Description: Add, update, delete,  search, refresh
    Author: Nam Nam
    Last Modified Author: Nam Nam
    Created Date: 20/02/2020
    Modified Date: 2/03/2020
*/











var WDModal = Object(_common_modal_style__WEBPACK_IMPORTED_MODULE_1__["default"])(_components_feedback_modal__WEBPACK_IMPORTED_MODULE_3__["default"]);
var Modal = Object(_settings_withDirection__WEBPACK_IMPORTED_MODULE_2__["default"])(WDModal);
var FormItem = antd__WEBPACK_IMPORTED_MODULE_4__["Form"].Item;
var RadioGroup = antd__WEBPACK_IMPORTED_MODULE_4__["Radio"].Group;

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
      if (nextProps.modalType === "none") {
        this.setState({
          isAdding: true,
          changed: false
        });
        this.props.form.resetFields();
      }
    } //Disable or enable save button

  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          modalActive = _this$props.modalActive,
          modalType = _this$props.modalType,
          row = _this$props.row,
          handleCancel = _this$props.handleCancel,
          handleSubmit = _this$props.handleSubmit;
      var getFieldDecorator = this.props.form.getFieldDecorator;

      var saveButton = function saveButton(e) {
        e.preventDefault();

        _this2.props.form.validateFieldsAndScroll(function (err, values) {
          if (!err) {
            if (modalType === "changeStatus") {
              row.status = values.status;
            } else {
              row.name = values.name;
              row.color = values.color;
              row.order = values.order;
              row.status = modalType === "insert" ? 1 : values.status;
            }

            handleSubmit(modalType, row);
          }
        });
      };

      var dataSource = [];

      if (typeof row !== "undefined" && row !== null) {
        Object.keys(row).map(function (rows, index) {
          return dataSource.push(_objectSpread({}, row[rows], {
            key: rows
          }));
        });
      }

      var expandedRowRender = function expandedRowRender(row) {
        var columns = [{
          title: "Name",
          dataIndex: "Name",
          key: "Name",
          sorter: function sorter(a, b) {
            if (a.Name < b.Name) return -1;
            if (a.Name > b.Name) return 1;
            return 0;
          }
        }, {
          title: "Status",
          dataIndex: "Status",
          key: "Status",
          width: "151px"
        }];
        var data = [];

        for (var i = 0; i < row.user_checklist_dailies.length; ++i) {
          data.push({
            key: i,
            Name: row.user_checklist_dailies[i].checklist.name,
            Status: row.user_checklist_dailies[i].status === 1 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
              style: {
                fontSize: "25px"
              },
              className: "ion-android-checkbox"
            }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
              style: {
                fontSize: "25px"
              },
              className: "ion-android-checkbox-outline-blank"
            })
          });
        }

        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_4__["Table"], {
          style: {
            margin: "0px"
          },
          columns: columns,
          dataSource: data,
          pagination: false
        });
      };

      var columns = [{
        title: "User",
        dataIndex: "admin",
        key: "admin",
        render: function render(text, rows) {
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", null, rows && rows.admin ? rows.admin.full_name : "");
        }
      }, {
        title: "Checklist",
        dataIndex: "checklist",
        key: "checklist",
        render: function render(text, row) {
          if (row && row.user_checklist_dailies) {
            var countCheck = row.user_checklist_dailies.filter(function (item) {
              return item.status === 1;
            }).length;
            var countUnCheck = row.user_checklist_dailies.filter(function (item) {
              return item.status === 2;
            }).length;
            return countCheck + " checked," + countUnCheck + " uncheck";
          }
        }
      }, {
        title: "Check date",
        dataIndex: "check_date",
        key: "check_date",
        width: 250,
        render: function render(text, rows) {
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", null, rows && rows.check_date ? rows.check_date : "");
        }
      }];
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Modal, {
        title: modalType === "changeStatus" ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_utility_intlMessages__WEBPACK_IMPORTED_MODULE_7__["default"], {
          id: "form.titleChangeStatus"
        }) : modalType === "insert" ? "Add New" : modalType === "edit" ? "Update" : "DETAIL",
        className: "FormModal",
        style: {
          top: 50
        },
        width: window.innerWidth > 1100 ? modalType === "ChangeStatus" ? 30 + "%" : 60 + "%" : "100%",
        visible: modalActive,
        onCancel: handleCancel,
        cancelText: modalType === "view" ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_utility_intlMessages__WEBPACK_IMPORTED_MODULE_7__["default"], {
          id: "button.close"
        }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_utility_intlMessages__WEBPACK_IMPORTED_MODULE_7__["default"], {
          id: "button.cancel"
        }),
        onOk: saveButton,
        okText: "Save",
        footer: modalType === "changeStatus" || modalType === _helpers_helperFunc__WEBPACK_IMPORTED_MODULE_9__["default"].modeType.Insert || modalType === "update" || modalType === "edit" ? [/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_4__["Button"], {
          key: "cancel",
          className: "cancelType",
          onClick: handleCancel,
          style: Object(_common_styleControl__WEBPACK_IMPORTED_MODULE_6__["default"])(3, modalType)
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_utility_intlMessages__WEBPACK_IMPORTED_MODULE_7__["default"], {
          id: "button.close"
        })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_4__["Button"], {
          key: "ok",
          className: "okType",
          onClick: saveButton,
          style: {
            backgroundColor: "#2d3446",
            color: "#FFFFFF",
            borderRadius: "6px",
            display: modalType === "view" || modalType === "viewBlockHistory" ? "none" : ""
          },
          disabled: !this.state.changed
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_utility_intlMessages__WEBPACK_IMPORTED_MODULE_7__["default"], {
          id: "button.save"
        }))] : [/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_4__["Button"], {
          key: "cancel",
          className: "cancelType",
          onClick: handleCancel,
          style: Object(_common_styleControl__WEBPACK_IMPORTED_MODULE_6__["default"])(3, modalType)
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_utility_intlMessages__WEBPACK_IMPORTED_MODULE_7__["default"], {
          id: "button.close"
        }))]
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_data_style__WEBPACK_IMPORTED_MODULE_5__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "clearfix"
      }, modalType === _helpers_helperFunc__WEBPACK_IMPORTED_MODULE_9__["default"].modeType.Insert ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_4__["Form"], {
        className: "isoCardInfoForm FormData"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_4__["Row"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_4__["Col"], {
        className: "ant-col-xl-24 ant-col-lg-24"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FormItem, _extends({}, _helpers_formItem__WEBPACK_IMPORTED_MODULE_8__["default"], {
        label: "Name",
        hasFeedback: true,
        style: {
          marginBottom: 10 + "px"
        }
      }), getFieldDecorator("name", {
        rules: [{
          required: true,
          message: "Name is required"
        }]
      })( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_4__["Input"], {
        onChange: this.handleChange
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FormItem, _extends({}, _helpers_formItem__WEBPACK_IMPORTED_MODULE_8__["default"], {
        label: "Color",
        hasFeedback: true,
        style: {
          marginBottom: 10 + "px"
        }
      }), getFieldDecorator("color", {
        rules: [{
          required: true,
          message: "Color is required"
        }]
      })( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_4__["Input"], {
        onChange: this.handleChange
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FormItem, _extends({}, _helpers_formItem__WEBPACK_IMPORTED_MODULE_8__["default"], {
        label: "Order",
        hasFeedback: true,
        style: {
          marginBottom: 10 + "px"
        }
      }), getFieldDecorator("order", {
        initialValue: null,
        rules: [{
          required: true,
          message: "Order is required"
        }]
      })( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_4__["InputNumber"], {
        min: 1,
        onChange: this.handleChange
      })))))) : modalType === "edit" ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_4__["Form"], {
        className: "isoCardInfoForm FormData"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_4__["Row"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_4__["Col"], {
        className: "ant-col-xl-24 ant-col-lg-24"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FormItem, _extends({}, _helpers_formItem__WEBPACK_IMPORTED_MODULE_8__["default"], {
        label: "Name",
        hasFeedback: true
      }), getFieldDecorator("name", {
        initialValue: row.name,
        rules: [{
          required: true,
          message: "Name is required"
        }]
      })( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_4__["Input"], {
        onChange: this.handleChange
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FormItem, _extends({}, _helpers_formItem__WEBPACK_IMPORTED_MODULE_8__["default"], {
        label: "Color",
        hasFeedback: true,
        style: {
          marginBottom: 10 + "px"
        }
      }), getFieldDecorator("color", {
        initialValue: row && row.color ? row.color : null,
        rules: [{
          required: true,
          message: "Color is required"
        }]
      })( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_4__["Input"], {
        onChange: this.handleChange
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FormItem, _extends({}, _helpers_formItem__WEBPACK_IMPORTED_MODULE_8__["default"], {
        label: "Order",
        hasFeedback: true,
        style: {
          marginBottom: 10 + "px"
        }
      }), getFieldDecorator("order", {
        initialValue: row && row.order ? row.order : null,
        rules: [{
          required: true,
          message: "Order is required"
        }]
      })( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_4__["InputNumber"], {
        min: 1,
        onChange: this.handleChange
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FormItem, _extends({}, _helpers_formItem__WEBPACK_IMPORTED_MODULE_8__["default"], {
        label: "Status"
      }), getFieldDecorator("status", {
        initialValue: row ? row.status : ""
      })( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(RadioGroup, {
        onChange: this.handleChange
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_4__["Radio"], {
        value: 1
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_utility_intlMessages__WEBPACK_IMPORTED_MODULE_7__["default"], {
        id: "form.active"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_4__["Radio"], {
        value: 2
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_utility_intlMessages__WEBPACK_IMPORTED_MODULE_7__["default"], {
        id: "form.inactive"
      })))))))) : modalType === "changeStatus" ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_4__["Form"], {
        className: "FormData"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FormItem, _extends({}, _helpers_formItem__WEBPACK_IMPORTED_MODULE_8__["default"], {
        label: "Status"
      }), getFieldDecorator("status", {
        initialValue: row ? row.status : ""
      })( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(RadioGroup, {
        onChange: this.handleChange
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_4__["Radio"], {
        value: 1
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_utility_intlMessages__WEBPACK_IMPORTED_MODULE_7__["default"], {
        id: "form.active"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_4__["Radio"], {
        value: 2
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_utility_intlMessages__WEBPACK_IMPORTED_MODULE_7__["default"], {
        id: "form.inactive"
      })))))) : modalType === "view" ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "clearfix"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_control_style__WEBPACK_IMPORTED_MODULE_10__["TableWrapper"], {
        dataSource: dataSource,
        columns: columns,
        bordered: true,
        expandedRowRender: expandedRowRender,
        expandIconAsCell: false,
        expandIconColumnIndex: 0 // pagination={false}

      })) : "")));
    }
  }]);

  return ModalFormAccount;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

var WrappedModalFormAccount = antd__WEBPACK_IMPORTED_MODULE_4__["Form"].create()(ModalFormAccount);
/* harmony default export */ __webpack_exports__["default"] = (WrappedModalFormAccount);

/***/ }),

/***/ "./resources/js/isomophic/admin/containers/Summary/index.js":
/*!******************************************************************!*\
  !*** ./resources/js/isomophic/admin/containers/Summary/index.js ***!
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
/* harmony import */ var react_to_print__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-to-print */ "./node_modules/react-to-print/lib/index.js");
/* harmony import */ var react_to_print__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_to_print__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _components_utility_box__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../components/utility/box */ "./resources/js/isomophic/components/utility/box.js");
/* harmony import */ var _components_Summary__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../components/Summary */ "./resources/js/isomophic/admin/components/Summary/index.js");
/* harmony import */ var _redux_Summary_actions__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../redux/Summary/actions */ "./resources/js/isomophic/admin/redux/Summary/actions.js");
/* harmony import */ var _settings_index__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../settings/index */ "./resources/js/isomophic/settings/index.js");
/* harmony import */ var _components_utility_intlMessages__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../components/utility/intlMessages */ "./resources/js/isomophic/components/utility/intlMessages.js");
/* harmony import */ var _helpers_helperFunc__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../helpers/helperFunc */ "./resources/js/isomophic/helpers/helperFunc.js");
/* harmony import */ var _redux_Socket_actions__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../redux/Socket/actions */ "./resources/js/isomophic/admin/redux/Socket/actions.js");
/* harmony import */ var _helpers_message__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./../../../helpers/message */ "./resources/js/isomophic/helpers/message.js");
/* harmony import */ var react_dom_test_utils__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! react-dom/test-utils */ "./node_modules/react-dom/test-utils.js");
/* harmony import */ var react_dom_test_utils__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(react_dom_test_utils__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _helpers_flags__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../helpers/flags */ "./resources/js/isomophic/helpers/flags.js");
/* harmony import */ var _print__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./print */ "./resources/js/isomophic/admin/containers/Summary/print.js");
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





















var RangePicker = antd__WEBPACK_IMPORTED_MODULE_9__["DatePicker"].RangePicker;

var Summary = /*#__PURE__*/function (_BaseComponent) {
  _inherits(Summary, _BaseComponent);

  var _super = _createSuper(Summary);

  function Summary(props) {
    var _this;

    _classCallCheck(this, Summary);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "shouldComponentUpdate", function (nextProps, nextState) {
      if (_this.props.isSuccess === nextProps.isSuccess) {
        return true;
      } else {
        if (nextProps.isSuccess === true) {
          if (nextState.modalType === _helpers_helperFunc__WEBPACK_IMPORTED_MODULE_15__["default"].modeType.Insert && nextProps.saveAdd === true) {
            _this.setState({
              modalActive: true,
              modalType: _helpers_helperFunc__WEBPACK_IMPORTED_MODULE_15__["default"].modeType.Insert
            });
          } else {
            _this.setState({
              modalActive: false,
              modalType: _helpers_helperFunc__WEBPACK_IMPORTED_MODULE_15__["default"].modeType.None
            });
          }
        }

        return true;
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleRefresh", function () {
      var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

      _this.props.loadData({
        name: "",
        page: 1,
        StartDate: moment__WEBPACK_IMPORTED_MODULE_8___default()(new Date()).subtract(1, "months").format("YYYY/MM/DD 00:00:00"),
        EndDate: moment__WEBPACK_IMPORTED_MODULE_8___default()(new Date()).format("YYYY/MM/DD 23:59:59"),
        limit: _settings_index__WEBPACK_IMPORTED_MODULE_13__["dataConfig"].pageLimit,
        isPrint: 2
      });

      _this.reset();
    });

    _defineProperty(_assertThisInitialized(_this), "handleSearch", function () {
      var page = {
        name: _this.state.search,
        page: 1,
        limit: _settings_index__WEBPACK_IMPORTED_MODULE_13__["dataConfig"].pageLimit,
        StartDate: _this.state.startDate,
        EndDate: _this.state.endDate,
        isPrint: 2
      };

      _this.setState(page, function () {
        _this.props.loadData(page);
      });
    });

    _defineProperty(_assertThisInitialized(_this), "reset", function () {
      _this.setState({
        search: "",
        startDate: moment__WEBPACK_IMPORTED_MODULE_8___default()(new Date()).subtract(1, "months").format("YYYY/MM/DD 00:00:00"),
        endDate: moment__WEBPACK_IMPORTED_MODULE_8___default()(new Date()).format("YYYY/MM/DD 23:59:59"),
        page: 1
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleSubmit", function (actionName, obj) {
      if (obj.id > 0 && actionName !== "delete") actionName = "update";

      _this.setState({
        loading: true
      });

      _this.props.saveInto(obj, actionName);
    });

    _defineProperty(_assertThisInitialized(_this), "onPageChange", function (pageNumber, pageSize) {
      var page = {
        name: _this.state.search,
        page: pageNumber,
        limit: pageSize,
        StartDate: _this.state.startDate,
        EndDate: _this.state.endDate,
        isPrint: 2
      };

      _this.setState(page, function () {
        _this.props.loadData(page);
      });
    });

    _defineProperty(_assertThisInitialized(_this), "printAll", function () {
      var loadData = _this.props.loadData;
      var page = {
        name: _this.state.search,
        page: _this.state.page,
        limit: _settings_index__WEBPACK_IMPORTED_MODULE_13__["dataConfig"].pageLimit,
        StartDate: _this.state.startDate,
        EndDate: _this.state.endDate,
        isPrint: 1
      };
      loadData(page);
    });

    _defineProperty(_assertThisInitialized(_this), "updatePrinter", function () {
      _this.props.turnOffPrint(false);
    });

    _defineProperty(_assertThisInitialized(_this), "onChangeDate", function (value, dateString) {
      _this.setState({
        startDate: dateString[0],
        endDate: dateString[1]
      });
    });

    _this.state = {
      confirmDirty: false,
      search: "",
      connection: null,
      modalType: "",
      page: 1,
      modalActive: false,
      startDate: moment__WEBPACK_IMPORTED_MODULE_8___default()(new Date()).subtract(1, "months").format("YYYY/MM/DD 00:00:00"),
      endDate: moment__WEBPACK_IMPORTED_MODULE_8___default()(new Date()).format("YYYY/MM/DD 23:59:59")
    };
    return _this;
  }

  _createClass(Summary, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      var isPrint = this.props.isPrint;
      var page = {
        StartDate: this.state.startDate,
        isPrint: isPrint,
        EndDate: this.state.endDate,
        name: this.state.search,
        page: this.state.page,
        limit: _settings_index__WEBPACK_IMPORTED_MODULE_13__["dataConfig"].pageLimit
      };
      this.props.loadData(page);
      this.socketIO = Object(_helpers_message__WEBPACK_IMPORTED_MODULE_17__["connectSocket"])(this.props.socketIO);
      Object(_helpers_message__WEBPACK_IMPORTED_MODULE_17__["listenSocket"])(this.socketIO, _helpers_flags__WEBPACK_IMPORTED_MODULE_19__["default"].INCIDENT_TYPE, function (flag, data) {
        var newPage = {
          name: _this2.state.search,
          isPrint: isPrint,
          StartDate: _this2.state.startDate,
          EndDate: _this2.state.endDate,
          page: _this2.state.page,
          limit: _settings_index__WEBPACK_IMPORTED_MODULE_13__["dataConfig"].pageLimit
        };

        _this2.props.loadData(newPage);
      });

      if (this.props.socketIO === null) {
        this.props.setSocket(this.socketIO);
      }
    } //load datatable

  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (this.props.printer === true && prevProps.modalType === this.props.modalType && this.props.printer !== prevProps.printer) {
        var node = document.querySelector(".btPrint");
        react_dom_test_utils__WEBPACK_IMPORTED_MODULE_18___default.a.Simulate.click(node);
      }

      if (this.props.printerAll === true && this.props.printerAll !== prevProps.printerAll) {
        var _node = document.querySelector(".btPrintAll");

        react_dom_test_utils__WEBPACK_IMPORTED_MODULE_18___default.a.Simulate.click(_node);
      }
    } // Refresh

  }, {
    key: "handleModal",
    value: function handleModal(action) {
      var _this3 = this;

      var row = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

      if (row) {
        this.setState({
          modalType: action,
          modalActive: true,
          displayname: row.displayname
        }, function () {
          _this3.props.toggleModal(action, row);
        });
      } else {
        this.setState({
          modalType: action,
          modalActive: true
        }, function () {
          _this3.props.toggleModal(action, row);
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this4 = this;

      var _this$props = this.props,
          rows = _this$props.rows,
          count = _this$props.count,
          row = _this$props.row,
          disable = _this$props.disable,
          newRow = _this$props.newRow;
      var rowStyle = _settings_basicStyle__WEBPACK_IMPORTED_MODULE_3__["default"].rowStyle,
          colStyle = _settings_basicStyle__WEBPACK_IMPORTED_MODULE_3__["default"].colStyle,
          gutter = _settings_basicStyle__WEBPACK_IMPORTED_MODULE_3__["default"].gutter;
      var _this$state = this.state,
          modalActive = _this$state.modalActive,
          startDate = _this$state.startDate,
          endDate = _this$state.endDate;
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
        title: "Date",
        dataIndex: "Date",
        key: "Date",
        className: "noWrapCell",
        sorter: function sorter(a, b) {
          if (a.check_date < b.check_date) return -1;
          if (a.check_date > b.check_date) return 1;
          return 0;
        },
        render: function render(text, row) {
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, row.check_date);
        }
      }, {
        title: "Count",
        dataIndex: "Count",
        className: "noWrapCell",
        key: "Count",
        sorter: function sorter(a, b) {
          if (a.count1 < b.count1) return -1;
          if (a.count1 > b.count1) return 1;
          return 0;
        },
        render: function render(text, row) {
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, row.count1);
        }
      }, {
        title: "",
        key: "action",
        className: "noWrapCell",
        render: function render(text, row) {
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_control_style__WEBPACK_IMPORTED_MODULE_4__["ActionWrapper"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_9__["Tooltip"], {
            title: "View Info"
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
            className: "deleteBtn aSimple",
            onClick: _this4.handleModal.bind(_this4, "view", row)
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
            className: "ion-android-document"
          }))));
        }
      }];
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_data_style__WEBPACK_IMPORTED_MODULE_5__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_utility_layoutWrapper__WEBPACK_IMPORTED_MODULE_6__["default"], {
        style: {
          padding: "0px"
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
        className: "PageHeader"
      }, " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_utility_intlMessages__WEBPACK_IMPORTED_MODULE_14__["default"], {
        id: "sidebar.summary"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_9__["Row"], {
        style: rowStyle,
        gutter: gutter,
        justify: "start"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_9__["Col"], {
        md: 24,
        sm: 24,
        xs: 24,
        style: colStyle
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_utility_box__WEBPACK_IMPORTED_MODULE_10__["default"], {
        className: "boxWrapper"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_control_style__WEBPACK_IMPORTED_MODULE_4__["TitleWrapper"], {
        className: "titleWrapper"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_control_style__WEBPACK_IMPORTED_MODULE_4__["ComponentTitle"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(RangePicker, {
        format: "YYYY-MM-DD",
        placeholder: ["Start date", "End date"],
        value: startDate && endDate ? [moment__WEBPACK_IMPORTED_MODULE_8___default()(startDate, "YYYY-MM-DD"), moment__WEBPACK_IMPORTED_MODULE_8___default()(endDate, "YYYY-MM-DD")] : "",
        allowClear: false,
        onChange: this.onChangeDate,
        style: {
          width: "300px"
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_9__["Button"], {
        onClick: this.handleSearch,
        className: "btSearch",
        style: {
          top: 0
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_9__["Icon"], {
        type: "search",
        theme: "outlined"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_to_print__WEBPACK_IMPORTED_MODULE_7___default.a, {
        key: "print",
        trigger: function trigger() {
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_9__["Button"], {
            style: {
              display: "none"
            },
            className: "btnRefresh btWizard btPrintAll",
            title: "Print",
            TableWrapper: true
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_9__["Icon"], {
            type: "printer",
            theme: "outlined"
          }), " Print");
        },
        content: function content() {
          return _this4.componentPrintRef;
        },
        onAfterPrint: function onAfterPrint() {
          return _this4.updatePrinter(row, false);
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_9__["Button"], {
        className: "btWizard",
        onClick: this.printAll
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_9__["Icon"], {
        type: "printer",
        theme: "outlined"
      }), " Print"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: {
          display: "none"
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_print__WEBPACK_IMPORTED_MODULE_20__["default"], {
        rows: rows,
        ref: function ref(el) {
          return _this4.componentPrintRef = el;
        }
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_control_style__WEBPACK_IMPORTED_MODULE_4__["ButtonHolders"], {
        className: "group_bt_head"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        onClick: this.handleRefresh,
        className: "btnRefresh btWizard"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_9__["Icon"], {
        type: "sync",
        theme: "outlined"
      }), "Refresh"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_control_style__WEBPACK_IMPORTED_MODULE_4__["TableWrapper"], {
        rowKey: "key",
        columns: columns,
        dataSource: dataSource,
        locale: {
          emptyText: this.props.isLoading === true ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            className: "ant-spin ant-spin-spinning ant-table-with-pagination ant-table-spin-holder"
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
            className: "ant-spin-dot ant-spin-dot-spin"
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", null))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_utility_intlMessages__WEBPACK_IMPORTED_MODULE_14__["default"], {
            id: "button.empty"
          }))
        } //loading={this.props.isLoading}
        ,
        className: "isoSimpleTable",
        bordered: true,
        pagination: {
          showSizeChanger: false,
          defaultCurrent: 1,
          defaultPageSize: _settings_index__WEBPACK_IMPORTED_MODULE_13__["dataConfig"].pageLimit || 10,
          current: this.state.page,
          total: count,
          hideOnSinglePage: true,
          onChange: this.onPageChange,
          showTotal: function showTotal(total, range) {
            return "Show ".concat(range[0], "-").concat(range[1], " in ").concat(dataSource.length, " records");
          }
        }
      }), row ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Summary__WEBPACK_IMPORTED_MODULE_11__["default"], {
        modalActive: modalActive,
        modalType: this.state.modalType,
        row: newRow,
        handleCancel: this.handleCancel,
        handleSubmit: this.handleSubmit,
        handleClose: this.handleCancel,
        disable: disable
      }) : "")))));
    }
  }]);

  return Summary;
}(_containers_base__WEBPACK_IMPORTED_MODULE_2__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(function (state) {
  return _objectSpread({}, state.SummaryReducer, {}, state.SocketReducer);
}, _objectSpread({}, _redux_Summary_actions__WEBPACK_IMPORTED_MODULE_12__["default"], {}, _redux_Socket_actions__WEBPACK_IMPORTED_MODULE_16__["default"]))(Summary));

/***/ }),

/***/ "./resources/js/isomophic/admin/containers/Summary/print.js":
/*!******************************************************************!*\
  !*** ./resources/js/isomophic/admin/containers/Summary/print.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _common_control_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../common/control.style */ "./resources/js/isomophic/common/control.style.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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




var ComponentToPrint = /*#__PURE__*/function (_React$Component) {
  _inherits(ComponentToPrint, _React$Component);

  var _super = _createSuper(ComponentToPrint);

  function ComponentToPrint() {
    _classCallCheck(this, ComponentToPrint);

    return _super.apply(this, arguments);
  }

  _createClass(ComponentToPrint, [{
    key: "render",
    value: function render() {
      var rows = this.props.rows;
      var dataSource = [];

      if (rows) {
        Object.keys(rows).map(function (row, index) {
          return dataSource.push(_objectSpread({}, rows[row], {
            key: row
          }));
        });
      }

      var columns = [{
        title: "Date",
        dataIndex: "Date",
        key: "Date",
        className: "noWrapCell",
        sorter: function sorter(a, b) {
          if (a.check_date < b.check_date) return -1;
          if (a.check_date > b.check_date) return 1;
          return 0;
        },
        render: function render(text, row) {
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, row ? row.check_date : "");
        }
      }, {
        title: "Count",
        dataIndex: "Count",
        className: "noWrapCell",
        key: "Count",
        sorter: function sorter(a, b) {
          if (a.count1 < b.count1) return -1;
          if (a.count1 > b.count1) return 1;
          return 0;
        },
        render: function render(text, row) {
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, row ? row.count1 : "");
        }
      }];
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_control_style__WEBPACK_IMPORTED_MODULE_1__["TableWrapper"], {
        rowKey: "key",
        columns: columns,
        bordered: true,
        className: "isoSimpleTable components-table-demo-nested tableReport",
        dataSource: dataSource,
        pagination: false,
        locale: {
          emptyText: this.props.isLoading === true ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            className: "ant-spin ant-spin-spinning ant-table-with-pagination ant-table-spin-holder"
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
            className: "ant-spin-dot ant-spin-dot-spin"
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", null))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "No data")
        } // footer={() => (
        //     <div className="totalPrice clearfix">
        //         <div className="totalPriceItem hasBorder clearfix">
        //             <div className="w_50 karaoke_info text_bold">
        //                 TỔNG CỘNG :
        //             </div>
        //             <div className="w_50"><strong>{convertNumber(grandTotal)} đ</strong></div>
        //         </div>
        //     </div>
        // )}

      });
    }
  }]);

  return ComponentToPrint;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (ComponentToPrint);

/***/ })

}]);