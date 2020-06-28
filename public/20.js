(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[20],{

/***/ "./resources/js/isomophic/admin/components/NewsType/index.js":
/*!*******************************************************************!*\
  !*** ./resources/js/isomophic/admin/components/NewsType/index.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _common_modal_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../common/modal.style */ "./resources/js/isomophic/common/modal.style.js");
/* harmony import */ var _src_settings_withDirection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../src/settings/withDirection */ "./resources/js/src/settings/withDirection.js");
/* harmony import */ var _components_feedback_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/feedback/modal */ "./resources/js/isomophic/components/feedback/modal.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _components_uielements_form__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../components/uielements/form */ "./resources/js/isomophic/components/uielements/form.js");
/* harmony import */ var _common_data_style__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../common/data.style */ "./resources/js/isomophic/common/data.style.js");
/* harmony import */ var _common_styleControl__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../common/styleControl */ "./resources/js/isomophic/common/styleControl.js");
/* harmony import */ var _helpers_helperFunc__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../helpers/helperFunc */ "./resources/js/isomophic/helpers/helperFunc.js");
/* harmony import */ var _helpers_formItem__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../helpers/formItem */ "./resources/js/isomophic/helpers/formItem.js");
/* harmony import */ var _components_utility_intlMessages__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../components/utility/intlMessages */ "./resources/js/isomophic/components/utility/intlMessages.js");
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












var WDModal = Object(_common_modal_style__WEBPACK_IMPORTED_MODULE_1__["default"])(_components_feedback_modal__WEBPACK_IMPORTED_MODULE_3__["default"]);
var Modal = Object(_src_settings_withDirection__WEBPACK_IMPORTED_MODULE_2__["default"])(WDModal);
var FormItem = _components_uielements_form__WEBPACK_IMPORTED_MODULE_5__["default"].Item;

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
      changed: false
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

      var saveButton = function saveButton(e) {
        e.preventDefault();

        _this2.props.form.validateFieldsAndScroll(function (err, values) {
          if (!err) {
            row.name = values.name;
            handleSubmit(modalType, row);
          }
        });
      };

      var saveAdd = function saveAdd(e) {
        e.preventDefault();

        if (modalType === _helpers_helperFunc__WEBPACK_IMPORTED_MODULE_8__["default"].modeType.Insert) {
          updateStatusAdd(true);

          _this2.saveButton(e);
        }
      };

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Modal, {
        title: modalType === _helpers_helperFunc__WEBPACK_IMPORTED_MODULE_8__["default"].modeType.Update ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_utility_intlMessages__WEBPACK_IMPORTED_MODULE_10__["default"], {
          id: "form.titleUpdate"
        }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_utility_intlMessages__WEBPACK_IMPORTED_MODULE_10__["default"], {
          id: "form.titleInsert"
        }),
        className: "FormModal",
        visible: modalActive,
        onCancel: handleCancel,
        cancelText: "Cancel",
        onOk: saveButton,
        okText: "Save",
        footer: modalType === _helpers_helperFunc__WEBPACK_IMPORTED_MODULE_8__["default"].modeType.Insert ? [/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_4__["Button"], {
          key: "cancel",
          className: "cancelType",
          onClick: handleCancel,
          style: Object(_common_styleControl__WEBPACK_IMPORTED_MODULE_7__["default"])(3, modalType)
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_utility_intlMessages__WEBPACK_IMPORTED_MODULE_10__["default"], {
          id: "button.close"
        })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_4__["Button"], {
          key: "ok",
          className: "okType",
          onClick: saveButton,
          style: Object(_common_styleControl__WEBPACK_IMPORTED_MODULE_7__["default"])(1, modalType),
          disabled: !this.state.changed
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_utility_intlMessages__WEBPACK_IMPORTED_MODULE_10__["default"], {
          id: "button.save"
        })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_4__["Button"], {
          key: "oknew",
          className: "okNewType",
          onClick: saveAdd,
          style: Object(_common_styleControl__WEBPACK_IMPORTED_MODULE_7__["default"])(2, modalType),
          disabled: !this.state.changed
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_utility_intlMessages__WEBPACK_IMPORTED_MODULE_10__["default"], {
          id: "button.save&AddNew"
        }))] : [/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_4__["Button"], {
          key: "cancel",
          className: "cancelType",
          onClick: handleCancel,
          style: Object(_common_styleControl__WEBPACK_IMPORTED_MODULE_7__["default"])(3, modalType)
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_utility_intlMessages__WEBPACK_IMPORTED_MODULE_10__["default"], {
          id: "button.close"
        })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_4__["Button"], {
          key: "ok",
          className: "okType",
          onClick: saveButton,
          style: Object(_common_styleControl__WEBPACK_IMPORTED_MODULE_7__["default"])(1, modalType),
          disabled: !this.state.changed
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_utility_intlMessages__WEBPACK_IMPORTED_MODULE_10__["default"], {
          id: "button.save"
        }))]
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_data_style__WEBPACK_IMPORTED_MODULE_6__["default"], null, modalType === _helpers_helperFunc__WEBPACK_IMPORTED_MODULE_8__["default"].modeType.Insert ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_uielements_form__WEBPACK_IMPORTED_MODULE_5__["default"], {
        className: "isoCardInfoForm FormData"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: {
          width: "100%"
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FormItem, _extends({}, _helpers_formItem__WEBPACK_IMPORTED_MODULE_9__["default"], {
        label: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_utility_intlMessages__WEBPACK_IMPORTED_MODULE_10__["default"], {
          id: "form.name"
        })),
        hasFeedback: true
      }), getFieldDecorator('name', {
        rules: [{
          required: true,
          message: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_utility_intlMessages__WEBPACK_IMPORTED_MODULE_10__["default"], {
            id: "form.validate.name"
          })
        }]
      })( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_4__["Input"], {
        onChange: this.handleChange
      }))))) : modalType === _helpers_helperFunc__WEBPACK_IMPORTED_MODULE_8__["default"].modeType.Update ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_uielements_form__WEBPACK_IMPORTED_MODULE_5__["default"], {
        className: "isoCardInfoForm FormData"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: {
          width: "100%"
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FormItem, _extends({}, _helpers_formItem__WEBPACK_IMPORTED_MODULE_9__["default"], {
        label: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_utility_intlMessages__WEBPACK_IMPORTED_MODULE_10__["default"], {
          id: "form.name"
        })),
        hasFeedback: true
      }), getFieldDecorator('name', {
        initialValue: row.name,
        rules: [{
          required: true,
          message: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_utility_intlMessages__WEBPACK_IMPORTED_MODULE_10__["default"], {
            id: "form.validate.name"
          })
        }]
      })( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_4__["Input"], {
        onChange: this.handleChange
      }))))) : ""));
    }
  }]);

  return ModalForm;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

var WrappedModalForm = _components_uielements_form__WEBPACK_IMPORTED_MODULE_5__["default"].create()(ModalForm);
/* harmony default export */ __webpack_exports__["default"] = (WrappedModalForm);

/***/ }),

/***/ "./resources/js/isomophic/admin/containers/NewsType/index.js":
/*!*******************************************************************!*\
  !*** ./resources/js/isomophic/admin/containers/NewsType/index.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _components_utility_layoutWrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../components/utility/layoutWrapper */ "./resources/js/isomophic/components/utility/layoutWrapper.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _settings_basicStyle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../settings/basicStyle */ "./resources/js/isomophic/settings/basicStyle.js");
/* harmony import */ var _components_utility_box__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../components/utility/box */ "./resources/js/isomophic/components/utility/box.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _common_control_style__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../common/control.style */ "./resources/js/isomophic/common/control.style.js");
/* harmony import */ var _common_data_style__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../common/data.style */ "./resources/js/isomophic/common/data.style.js");
/* harmony import */ var _components_utility_contentHolder__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../components/utility/contentHolder */ "./resources/js/isomophic/components/utility/contentHolder.js");
/* harmony import */ var _components_utility_intlMessages__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../components/utility/intlMessages */ "./resources/js/isomophic/components/utility/intlMessages.js");
/* harmony import */ var _helpers_helperFunc__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../helpers/helperFunc */ "./resources/js/isomophic/helpers/helperFunc.js");
/* harmony import */ var _settings_index__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../settings/index */ "./resources/js/isomophic/settings/index.js");
/* harmony import */ var _containers_base__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../containers/base */ "./resources/js/isomophic/containers/base/index.js");
/* harmony import */ var _components_NewsType__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../components/NewsType */ "./resources/js/isomophic/admin/components/NewsType/index.js");
/* harmony import */ var _redux_NewsType_actions__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../redux/NewsType/actions */ "./resources/js/isomophic/admin/redux/NewsType/actions.js");
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

















var trimByWord = _helpers_helperFunc__WEBPACK_IMPORTED_MODULE_11__["default"].trimByWord;

var NewsTypes = /*#__PURE__*/function (_BaseComponent) {
  _inherits(NewsTypes, _BaseComponent);

  var _super = _createSuper(NewsTypes);

  function NewsTypes(props) {
    var _this;

    _classCallCheck(this, NewsTypes);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "updateStatusAdd", function (value) {
      _this.props.updateStatusSaveAdd(value);
    });

    _defineProperty(_assertThisInitialized(_this), "shouldComponentUpdate", function (nextProps, nextState) {
      if (_this.props.isSuccess === nextProps.isSuccess) {
        return true;
      } else {
        if (nextProps.isSuccess === true) {
          if (nextState.modalType === _helpers_helperFunc__WEBPACK_IMPORTED_MODULE_11__["default"].modeType.Insert && nextProps.saveAdd === true) {
            _this.setState({
              modalActive: true,
              modalType: _helpers_helperFunc__WEBPACK_IMPORTED_MODULE_11__["default"].modeType.Insert
            });
          } else {
            _this.setState({
              modalActive: false,
              modalType: _helpers_helperFunc__WEBPACK_IMPORTED_MODULE_11__["default"].modeType.None
            });
          }

          _this.updateStatusAdd(false);

          var page = {
            name: _this.state.search,
            page: 1,
            limit: _settings_index__WEBPACK_IMPORTED_MODULE_12__["dataConfig"].pageLimit
          };

          _this.props.loadData(page);
        }

        return true;
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleSubmit", function (actionName, obj) {
      if (obj.id > 0 && actionName !== "delete") actionName = "update";

      _this.setState({
        loading: true
      });

      _this.props.saveInto(obj, actionName);
    });

    _defineProperty(_assertThisInitialized(_this), "handleRefresh", function () {
      var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      var page = {
        name: "",
        page: 1,
        limit: _settings_index__WEBPACK_IMPORTED_MODULE_12__["dataConfig"].pageLimit
      };

      _this.props.loadData(page);
    });

    _defineProperty(_assertThisInitialized(_this), "handleSearchChange", function (e) {
      _this.setState(_objectSpread({}, _this.state, {
        search: e.target.value
      }));
    });

    _defineProperty(_assertThisInitialized(_this), "handleSearch", function () {
      var page = {
        name: _this.state.search,
        page: 1,
        limit: _settings_index__WEBPACK_IMPORTED_MODULE_12__["dataConfig"].pageLimit
      };

      _this.props.loadData(page);
    });

    _defineProperty(_assertThisInitialized(_this), "handleCancel", function () {
      _this.setState({
        modalType: _helpers_helperFunc__WEBPACK_IMPORTED_MODULE_11__["default"].modeType.None,
        modalActive: false
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onPageChange", function (pageNumber, pageSize) {
      var page = {
        name: _this.state.search,
        page: pageNumber,
        limit: pageSize
      };

      _this.props.loadData(page);
    });

    _this.state = {
      confirmDirty: false,
      search: "",
      connection: null,
      modalType: "",
      modalActive: false,
      page: 1,
      strName: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_utility_intlMessages__WEBPACK_IMPORTED_MODULE_10__["default"], {
        id: "form.newsType"
      })
    };
    return _this;
  } // save and add


  _createClass(NewsTypes, [{
    key: "handleModal",
    value: function handleModal(action) {
      var _this2 = this;

      var row = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      this.setState({
        modalType: action,
        modalActive: true
      }, function () {
        _this2.props.toggleModal(action, row);
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var _this$props = this.props,
          rows = _this$props.rows,
          count = _this$props.count,
          row = _this$props.row;
      var rowStyle = _settings_basicStyle__WEBPACK_IMPORTED_MODULE_4__["default"].rowStyle,
          colStyle = _settings_basicStyle__WEBPACK_IMPORTED_MODULE_4__["default"].colStyle,
          gutter = _settings_basicStyle__WEBPACK_IMPORTED_MODULE_4__["default"].gutter;
      var modalActive = this.state.modalActive;
      var dataSource = [];

      if (typeof rows !== "undefined" && rows !== null) {
        Object.keys(rows).map(function (row, index) {
          return dataSource.push(_objectSpread({}, rows[row], {
            key: row
          }));
        });
      } // group header content of table


      this.columns = [{
        title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_utility_intlMessages__WEBPACK_IMPORTED_MODULE_10__["default"], {
          id: "form.name"
        }),
        dataIndex: "name",
        key: "name",
        sorter: function sorter(a, b) {
          if (a.name < b.name) return -1;
          if (a.name > b.name) return 1;
          return 0;
        },
        render: function render(text, row) {
          if (row.name) {
            return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", null, trimByWord(row.name));
          }
        }
      }, {
        title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_utility_intlMessages__WEBPACK_IMPORTED_MODULE_10__["default"], {
          id: "form.updatedBy"
        }),
        dataIndex: "admin.username",
        className: "noWrapCell",
        key: "admin.username",
        sorter: function sorter(a, b) {
          if (a.admin.username < b.admin.username) return -1;
          if (a.admin.username > b.admin.username) return 1;
          return 0;
        },
        render: function render(text, row) {
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, row.admin.username);
        }
      }, {
        title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_utility_intlMessages__WEBPACK_IMPORTED_MODULE_10__["default"], {
          id: "form.updatedAt"
        }),
        dataIndex: "updated_at",
        className: "noWrapCell",
        key: "updated_at",
        sorter: function sorter(a, b) {
          if (a.updated_at < b.updated_at) return -1;
          if (a.updated_at > b.updated_at) return 1;
          return 0;
        },
        render: function render(text, row) {
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, moment__WEBPACK_IMPORTED_MODULE_6___default()(row.updated_at).format(_helpers_helperFunc__WEBPACK_IMPORTED_MODULE_11__["default"].fomatDateTime()));
        }
      }, {
        title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_utility_intlMessages__WEBPACK_IMPORTED_MODULE_10__["default"], {
          id: "form.action"
        }),
        key: "actions",
        fixed: "right",
        width: 100,
        render: function render(text, row) {
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_control_style__WEBPACK_IMPORTED_MODULE_7__["ActionWrapper"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
            onClick: _this3.handleModal.bind(_this3, "edit", row),
            className: "aSimple"
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_3__["Icon"], {
            type: "form",
            theme: "outlined"
          })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_3__["Popconfirm"], {
            title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_utility_intlMessages__WEBPACK_IMPORTED_MODULE_10__["default"], {
              id: "form.confirmDelete"
            }),
            okText: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_utility_intlMessages__WEBPACK_IMPORTED_MODULE_10__["default"], {
              id: "button.delete"
            }),
            cancelText: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_utility_intlMessages__WEBPACK_IMPORTED_MODULE_10__["default"], {
              id: "button.cancel"
            }),
            placement: "topRight",
            onConfirm: _this3.handleSubmit.bind(_this3, "delete", row)
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
            className: "deleteBtn aSimple"
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
            className: "ion-android-delete deleteRow"
          }))));
        }
      }];
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_data_style__WEBPACK_IMPORTED_MODULE_8__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_utility_layoutWrapper__WEBPACK_IMPORTED_MODULE_2__["default"], {
        style: {
          padding: "0px"
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
        className: "PageHeader"
      }, " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_utility_intlMessages__WEBPACK_IMPORTED_MODULE_10__["default"], {
        id: "form.newsType"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_3__["Row"], {
        style: rowStyle,
        gutter: gutter,
        justify: "start"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_3__["Col"], {
        md: 24,
        sm: 24,
        xs: 24,
        style: colStyle
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_utility_box__WEBPACK_IMPORTED_MODULE_5__["default"], {
        className: "boxWrapper"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_utility_contentHolder__WEBPACK_IMPORTED_MODULE_9__["default"], {
        style: {
          marginTop: 0,
          overflow: "hidden"
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_control_style__WEBPACK_IMPORTED_MODULE_7__["TitleWrapper"], {
        className: "titleWrapper"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_control_style__WEBPACK_IMPORTED_MODULE_7__["ComponentTitle"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_3__["Input"], {
        onChange: this.handleSearchChange,
        className: "inputSearch"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        className: "btSearch",
        onClick: this.handleSearch
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_3__["Icon"], {
        type: "search",
        theme: "outlined"
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_control_style__WEBPACK_IMPORTED_MODULE_7__["ButtonHolders"], {
        className: "group_bt_head"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        onClick: this.handleRefresh,
        className: "btnRefresh btWizard"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_3__["Icon"], {
        type: "sync",
        theme: "outlined"
      }), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_utility_intlMessages__WEBPACK_IMPORTED_MODULE_10__["default"], {
        id: "button.refresh"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        onClick: this.handleModal.bind(this, "insert", null),
        className: "btnAdd btWizard"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_3__["Icon"], {
        type: "plus-square",
        theme: "outlined"
      }), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_utility_intlMessages__WEBPACK_IMPORTED_MODULE_10__["default"], {
        id: "button.add"
      })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_control_style__WEBPACK_IMPORTED_MODULE_7__["TableWrapper"], {
        rowKey: "id",
        columns: this.columns,
        dataSource: dataSource,
        locale: {
          emptyText: this.props.isLoading === true ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            className: "ant-spin ant-spin-spinning ant-table-with-pagination ant-table-spin-holder"
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
            className: "ant-spin-dot ant-spin-dot-spin"
          })) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_utility_intlMessages__WEBPACK_IMPORTED_MODULE_10__["default"], {
            id: "button.empty"
          }))
        } //loading={this.props.isLoading}
        ,
        className: "isoSimpleTable",
        bordered: true,
        pagination: {
          showSizeChanger: false,
          defaultCurrent: 1,
          defaultPageSize: _settings_index__WEBPACK_IMPORTED_MODULE_12__["dataConfig"].pageLimit || 10,
          total: count,
          hideOnSinglePage: true,
          onChange: this.onPageChange,
          showTotal: function showTotal(total, range) {
            return "Show ".concat(range[0], "-").concat(range[1], " on ").concat(dataSource.length, " record");
          }
        }
      }), row ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_NewsType__WEBPACK_IMPORTED_MODULE_14__["default"], {
        modalActive: modalActive,
        modalType: this.state.modalType,
        row: row,
        handleCancel: this.handleCancel,
        handleSubmit: this.handleSubmit,
        handleClose: this.handleCancel,
        updateStatusAdd: this.updateStatusAdd
      }) : ""))))));
    }
  }]);

  return NewsTypes;
}(_containers_base__WEBPACK_IMPORTED_MODULE_13__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(function (state) {
  return _objectSpread({}, state.NewsTypeReducer);
}, _redux_NewsType_actions__WEBPACK_IMPORTED_MODULE_15__["default"])(NewsTypes));

/***/ }),

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

/***/ "./resources/js/src/settings/withDirection.js":
/*!****************************************************!*\
  !*** ./resources/js/src/settings/withDirection.js ***!
  \****************************************************/
/*! exports provided: default, rtl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rtl", function() { return rtl; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }


var rtl = document.getElementsByTagName('html')[0].getAttribute('dir');

var withDirection = function withDirection(Component) {
  return function (props) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Component, _extends({}, props, {
      "data-rtl": rtl
    }));
  };
};

/* harmony default export */ __webpack_exports__["default"] = (withDirection);


/***/ })

}]);