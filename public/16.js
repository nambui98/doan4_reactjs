(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[16],{

/***/ "./resources/js/isomophic/admin/components/UserAnnouncement/index.js":
/*!***************************************************************************!*\
  !*** ./resources/js/isomophic/admin/components/UserAnnouncement/index.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _common_modal_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../common/modal.style */ "./resources/js/isomophic/common/modal.style.js");
/* harmony import */ var _settings_withDirection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../settings/withDirection */ "./resources/js/isomophic/settings/withDirection.js");
/* harmony import */ var _components_feedback_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/feedback/modal */ "./resources/js/isomophic/components/feedback/modal.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _common_data_style__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../common/data.style */ "./resources/js/isomophic/common/data.style.js");
/* harmony import */ var _components_utility_intlMessages__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../components/utility/intlMessages */ "./resources/js/isomophic/components/utility/intlMessages.js");
/* harmony import */ var _settings__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../settings */ "./resources/js/isomophic/settings/index.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! util */ "./node_modules/node-libs-browser/node_modules/util/util.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_9__);
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

/*
    Method Name: UserAnnouncement
    Description: Add, update, delete,  search, refresh
    Author: Nam Nam
    Last Modified Author: Nam Nam
    Created Date: 20/02/2020
    Modified Date: 2/03/2020
*/










var WDModal = Object(_common_modal_style__WEBPACK_IMPORTED_MODULE_1__["default"])(_components_feedback_modal__WEBPACK_IMPORTED_MODULE_3__["default"]);
var Modal = Object(_settings_withDirection__WEBPACK_IMPORTED_MODULE_2__["default"])(WDModal);

var ModalFormAccount = /*#__PURE__*/function (_Component) {
  _inherits(ModalFormAccount, _Component);

  var _super = _createSuper(ModalFormAccount);

  function ModalFormAccount(props) {
    var _this;

    _classCallCheck(this, ModalFormAccount);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "handleChange", function (e) {
      _this.setState({
        changed: true
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleCancel", function () {
      _this.props.handleCancel();
    });

    _this.state = {
      changed: false,
      isLoadding: false
    };
    _this.handleChange = _this.handleChange.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(ModalFormAccount, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.modalType === "none") {
        this.setState({
          changed: false
        });
        this.props.form.resetFields();
      }
    } //Disable or enable save button

  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          modalActive = _this$props.modalActive,
          modalType = _this$props.modalType,
          row = _this$props.row,
          handleSubmit = _this$props.handleSubmit;

      var saveButton = function saveButton(e) {
        e.preventDefault();

        var newRow = _objectSpread({}, row);

        newRow.announcement_type_id = 1;
        handleSubmit(newRow);
      };

      var images = !Object(util__WEBPACK_IMPORTED_MODULE_9__["isNullOrUndefined"])(row) && !Object(util__WEBPACK_IMPORTED_MODULE_9__["isNullOrUndefined"])(row.announcement) && row.announcement.images ? row.announcement.images.split("##########").slice(0, row.announcement.images.split("##########").length - 1) : [];
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Modal, {
        title: "DETAIL",
        className: "FormModal",
        style: {
          top: 50
        },
        width: 50 + "%",
        visible: modalActive,
        onCancel: this.handleCancel,
        cancelText: modalType === "view" ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_utility_intlMessages__WEBPACK_IMPORTED_MODULE_7__["default"], {
          id: "button.close"
        }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_utility_intlMessages__WEBPACK_IMPORTED_MODULE_7__["default"], {
          id: "button.cancel"
        }),
        onOk: saveButton,
        okText: "Save",
        footer: ( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_5__["Button"], {
          key: "cancel",
          className: "cancelType",
          onClick: this.handleCancel
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_utility_intlMessages__WEBPACK_IMPORTED_MODULE_7__["default"], {
          id: "button.close"
        })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, localStorage.getItem("type") === 1 ? "" : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          style: {
            marginBottom: 10,
            fontWeight: "bold"
          }
        }, "I read and understand"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_5__["Button"], {
          key: "ok",
          className: "okType",
          onClick: saveButton,
          style: {
            backgroundColor: "#55D604",
            color: "#FFFFFF",
            borderRadius: "6px"
          },
          disabled: row.announcement_type_id === 1
        }, "Acknowledge"))))
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_data_style__WEBPACK_IMPORTED_MODULE_6__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "clearfix"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "clearfix"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "detailField clearfix"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        className: "label"
      }, "User"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "contentDetail"
      }, row && row.admin ? row.admin.full_name : "")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "detailField clearfix"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        className: "label"
      }, "Title"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "contentDetail"
      }, row && row.announcement ? row.announcement.title : "")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "detailField clearfix"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        className: "label detailFieldFullBorder"
      }, "Type"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "contentDetail"
      }, row && row.announcement_type ? row.announcement_type.name : "")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "detailField clearfix"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        className: "label detailFieldFullBorder"
      }, "Date"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "contentDetail"
      }, row && row.announcement.announcement_date ? moment__WEBPACK_IMPORTED_MODULE_4___default()(row.announcement.announcement_date).format("DD/MM/YYYY") : ""))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        style: {
          fontWeight: "bold",
          padding: "0 7px"
        }
      }, "Description:")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: {
          fontWeight: "500",
          padding: "7px 7px"
        }
      }, row && row.announcement ? row.announcement.description : ""), images.map(function (image, index) {
        return [/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
          alt: "",
          key: index,
          style: {
            width: "100%",
            margin: "4px 0"
          },
          src: _settings__WEBPACK_IMPORTED_MODULE_8__["urlConfig"].imageUrl + image
        }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
          key: index + images.length
        })];
      }))));
    }
  }]);

  return ModalFormAccount;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

var WrappedModalFormAccount = antd__WEBPACK_IMPORTED_MODULE_5__["Form"].create()(ModalFormAccount);
/* harmony default export */ __webpack_exports__["default"] = (WrappedModalFormAccount);

/***/ }),

/***/ "./resources/js/isomophic/admin/containers/UserAnnouncement/index.js":
/*!***************************************************************************!*\
  !*** ./resources/js/isomophic/admin/containers/UserAnnouncement/index.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _settings_basicStyle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../settings/basicStyle */ "./resources/js/isomophic/settings/basicStyle.js");
/* harmony import */ var _common_control_style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../common/control.style */ "./resources/js/isomophic/common/control.style.js");
/* harmony import */ var _common_data_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../common/data.style */ "./resources/js/isomophic/common/data.style.js");
/* harmony import */ var _components_utility_layoutWrapper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../components/utility/layoutWrapper */ "./resources/js/isomophic/components/utility/layoutWrapper.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _components_utility_box__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../components/utility/box */ "./resources/js/isomophic/components/utility/box.js");
/* harmony import */ var _components_UserAnnouncement__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/UserAnnouncement */ "./resources/js/isomophic/admin/components/UserAnnouncement/index.js");
/* harmony import */ var _redux_UserAnnouncement_actions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../redux/UserAnnouncement/actions */ "./resources/js/isomophic/admin/redux/UserAnnouncement/actions.js");
/* harmony import */ var _settings_index__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../settings/index */ "./resources/js/isomophic/settings/index.js");
/* harmony import */ var _components_utility_intlMessages__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../components/utility/intlMessages */ "./resources/js/isomophic/components/utility/intlMessages.js");
/* harmony import */ var _helpers_helperFunc__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../helpers/helperFunc */ "./resources/js/isomophic/helpers/helperFunc.js");
/* harmony import */ var _redux_Socket_actions__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../redux/Socket/actions */ "./resources/js/isomophic/admin/redux/Socket/actions.js");
/* harmony import */ var _helpers_message__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./../../../helpers/message */ "./resources/js/isomophic/helpers/message.js");
/* harmony import */ var _helpers_flags__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../helpers/flags */ "./resources/js/isomophic/helpers/flags.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! util */ "./node_modules/node-libs-browser/node_modules/util/util.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var react_dom_test_utils__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! react-dom/test-utils */ "./node_modules/react-dom/test-utils.js");
/* harmony import */ var react_dom_test_utils__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(react_dom_test_utils__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var react_to_print__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! react-to-print */ "./node_modules/react-to-print/lib/index.js");
/* harmony import */ var react_to_print__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(react_to_print__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _print__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./print */ "./resources/js/isomophic/admin/containers/UserAnnouncement/print.js");
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





















var Option = antd__WEBPACK_IMPORTED_MODULE_7__["Select"].Option;
var RangePicker = antd__WEBPACK_IMPORTED_MODULE_7__["DatePicker"].RangePicker;

var Index = /*#__PURE__*/function (_Component) {
  _inherits(Index, _Component);

  var _super = _createSuper(Index);

  function Index(props) {
    var _this;

    _classCallCheck(this, Index);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "handleCancel", function () {
      _this.setState({
        modalType: 'none',
        modalActive: false,
        contentState: null
      });
    });

    _defineProperty(_assertThisInitialized(_this), "shouldComponentUpdate", function (nextProps, nextState) {
      if (_this.props.isSuccess === nextProps.isSuccess) {
        return true;
      } else {
        if (nextProps.isSuccess === true) {
          if (nextState.modalType === _helpers_helperFunc__WEBPACK_IMPORTED_MODULE_13__["default"].modeType.Insert && nextProps.saveAdd === true) {
            _this.setState({
              modalActive: true,
              modalType: _helpers_helperFunc__WEBPACK_IMPORTED_MODULE_13__["default"].modeType.Insert
            });
          } else {
            _this.setState({
              modalActive: false,
              modalType: _helpers_helperFunc__WEBPACK_IMPORTED_MODULE_13__["default"].modeType.None
            });
          }
        }

        return true;
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleRefresh", function () {
      var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

      _this.props.loadData({
        name: '',
        StartDate: moment__WEBPACK_IMPORTED_MODULE_6___default()(new Date()).subtract(1, 'months').format('YYYY/MM/DD 00:00:00'),
        EndDate: moment__WEBPACK_IMPORTED_MODULE_6___default()(new Date()).format('YYYY/MM/DD 23:59:59'),
        announcement_type_id: '',
        isPrint: 2,
        page: 1,
        limit: _settings_index__WEBPACK_IMPORTED_MODULE_11__["dataConfig"].pageLimit
      });

      _this.reset();
    });

    _defineProperty(_assertThisInitialized(_this), "onKeyUp", function (e) {
      if (e.keyCode === 13) {
        var text = e.target.value;

        if (!text) {
          return;
        }

        text = text.trim();

        if (!text) {
          return;
        }

        _this.setState(_objectSpread({}, _this.state, {
          search: e.target.value
        }));

        _this.handleSearch();
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleSearch", function () {
      var page = {
        StartDate: _this.state.startDate,
        EndDate: _this.state.endDate,
        name: _this.state.search,
        announcement_type_id: _this.state.announcementTypeId,
        isPrint: 2,
        page: 1,
        limit: _settings_index__WEBPACK_IMPORTED_MODULE_11__["dataConfig"].pageLimit
      };

      _this.setState(page, function () {
        _this.props.loadData(page);
      });
    });

    _defineProperty(_assertThisInitialized(_this), "reset", function () {
      _this.setState({
        search: '',
        announcementTypeId: [],
        page: 1,
        startDate: moment__WEBPACK_IMPORTED_MODULE_6___default()(new Date()).subtract(1, 'months').format('YYYY/MM/DD 00:00:00'),
        endDate: moment__WEBPACK_IMPORTED_MODULE_6___default()(new Date()).format('YYYY/MM/DD 23:59:59')
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleSubmit", function (obj) {
      _this.props.saveInto(obj);
    });

    _defineProperty(_assertThisInitialized(_this), "handlSelectChange", function (id) {
      _this.setState(_objectSpread({}, _this.state, {
        announcementTypeId: id
      }));
    });

    _defineProperty(_assertThisInitialized(_this), "handleSearchChange", function (e) {
      _this.setState(_objectSpread({}, _this.state, {
        search: e.target.value
      }));
    });

    _defineProperty(_assertThisInitialized(_this), "onPageChange", function (pageNumber, pageSize) {
      var page = {
        name: _this.state.search,
        announcement_type_id: _this.state.announcementTypeId,
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
        announcement_type_id: _this.state.announcementTypeId,
        page: _this.state.page,
        limit: _settings_index__WEBPACK_IMPORTED_MODULE_11__["dataConfig"].pageLimit,
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

    _this.updateCheck = _this.updateCheck.bind(_assertThisInitialized(_this));
    _this.state = {
      confirmDirty: false,
      search: '',
      modalType: '',
      page: 1,
      modalActive: false,
      announcement_type_id: '',
      startDate: moment__WEBPACK_IMPORTED_MODULE_6___default()(new Date()).subtract(1, 'months').format('YYYY/MM/DD 00:00:00'),
      endDate: moment__WEBPACK_IMPORTED_MODULE_6___default()(new Date()).format('YYYY/MM/DD 23:59:59')
    };
    return _this;
  } // hủy hoặc Close


  _createClass(Index, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      var isPrint = this.props.isPrint;
      var page = {
        name: this.state.search,
        isPrint: isPrint,
        StartDate: this.state.startDate,
        EndDate: this.state.endDate,
        announcement_type_id: this.state.announcementTypeId,
        page: this.state.page,
        limit: _settings_index__WEBPACK_IMPORTED_MODULE_11__["dataConfig"].pageLimit
      };
      this.props.loadData(page);
      this.socketIO = Object(_helpers_message__WEBPACK_IMPORTED_MODULE_15__["connectSocket"])(this.props.socketIO);
      Object(_helpers_message__WEBPACK_IMPORTED_MODULE_15__["listenSocket"])(this.socketIO, _helpers_flags__WEBPACK_IMPORTED_MODULE_16__["default"].ANNOUNCEMENT, function (flag, data) {
        var newPage = {
          StartDate: _this2.state.startDate,
          EndDate: _this2.state.endDate,
          isPrint: isPrint,
          name: _this2.state.search,
          announcement_type_id: _this2.state.announcementTypeId,
          page: _this2.state.page,
          limit: _settings_index__WEBPACK_IMPORTED_MODULE_11__["dataConfig"].pageLimit
        };

        _this2.props.loadData(newPage);
      });

      if (this.props.socketIO === null) {
        this.props.setSocket(this.socketIO);
      }
    }
  }, {
    key: "updateCheck",
    value: function updateCheck(arr, dataCheck, arrCheckedList) {
      this.props.updateCheck(arr, dataCheck, arrCheckedList);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (this.props.printer === true && prevProps.modalType === this.props.modalType && this.props.printer !== prevProps.printer) {
        var node = document.querySelector('.btPrint');
        react_dom_test_utils__WEBPACK_IMPORTED_MODULE_18___default.a.Simulate.click(node);
      }

      if (this.props.printerAll === true && this.props.printerAll !== prevProps.printerAll) {
        var _node = document.querySelector('.btPrintAll');

        react_dom_test_utils__WEBPACK_IMPORTED_MODULE_18___default.a.Simulate.click(_node);
      }
    } //load datatable

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
          announcementType = _this$props.announcementType;
      var rowStyle = _settings_basicStyle__WEBPACK_IMPORTED_MODULE_2__["default"].rowStyle,
          colStyle = _settings_basicStyle__WEBPACK_IMPORTED_MODULE_2__["default"].colStyle,
          gutter = _settings_basicStyle__WEBPACK_IMPORTED_MODULE_2__["default"].gutter;
      var _this$state = this.state,
          modalActive = _this$state.modalActive,
          announcementTypeId = _this$state.announcementTypeId,
          startDate = _this$state.startDate,
          endDate = _this$state.endDate;
      var dataSource = [];

      if (typeof rows !== 'undefined' && rows !== null) {
        Object.keys(rows).map(function (row, index) {
          return dataSource.push(_objectSpread({}, rows[row], {
            key: row
          }));
        });
      }

      var columns = [];
      columns = [{
        title: 'User',
        dataIndex: 'User',
        className: 'noWrapCell',
        key: 'User',
        width: 150,
        sorter: function sorter(a, b) {
          if (a.admin.full_name < b.admin.full_name) return -1;
          if (a.admin.full_name > b.admin.full_name) return 1;
          return 0;
        },
        render: function render(text, row) {
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, row && row.admin ? row.admin.full_name : '');
        }
      }, {
        title: 'Title',
        dataIndex: 'Title',
        key: 'Title',
        width: 200,
        sorter: function sorter(a, b) {
          if (a.announcement.title < b.announcement.title) return -1;
          if (a.title > b.title) return 1;
          return 0;
        },
        render: function render(text, row) {
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, row && row.announcement ? row.announcement.title : '');
        }
      }, {
        title: 'Type',
        dataIndex: 'Announcement_type',
        key: 'Announcement_type',
        className: 'noWrapCell',
        width: 90,
        sorter: function sorter(a, b) {
          if (a.announcement_type_id < b.announcement_type_id) return -1;
          if (a.announcement_type_id > b.announcement_type_id) return 1;
          return 0;
        },
        render: function render(text, row) {
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
            style: row && row.announcement_type && row.announcement_type_id === 1 ? {
              color: '#55D604',
              fontWeight: 'bold'
            } : {
              color: '#FF0000',
              fontWeight: 'bold'
            }
          }, row && row.announcement_type ? row.announcement_type.name : '');
        }
      }, {
        title: 'Date',
        dataIndex: 'Annouced_date',
        className: 'noWrapCell',
        key: 'Annouced_date',
        width: 90,
        sorter: function sorter(a, b) {
          if (a.announcement.announcement_date < b.announcement.announcement_date) return -1;
          if (a.announcement.announcement_date > b.announcement.announcement_date) return 1;
          return 0;
        },
        render: function render(text, row) {
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, row && row.announcement ? row.announcement.announcement_date : '');
        }
      }, {
        title: 'Description',
        dataIndex: 'Description',
        key: 'Description',
        sorter: function sorter(a, b) {
          if (a.announcement.description < b.announcement.description) return -1;
          if (a.announcement.description > b.announcement.description) return 1;
          return 0;
        },
        render: function render(text, row) {
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            style: {
              whiteSpace: 'pre-wrap',
              wordWrap: 'break-word'
            }
          }, row && row.announcement ? row.announcement.description : '');
        }
      }, {
        title: '',
        key: 'action',
        className: 'noWrapCell',
        render: function render(text, row) {
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_control_style__WEBPACK_IMPORTED_MODULE_3__["ActionWrapper"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
            onClick: _this4.handleModal.bind(_this4, 'View', row),
            className: "aSimple"
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
            className: "ion-android-document"
          })));
        }
      }];
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_data_style__WEBPACK_IMPORTED_MODULE_4__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_utility_layoutWrapper__WEBPACK_IMPORTED_MODULE_5__["default"], {
        style: {
          padding: '0px'
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
        className: "PageHeader"
      }, ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_utility_intlMessages__WEBPACK_IMPORTED_MODULE_12__["default"], {
        id: "sidebar.userAnnouncement"
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
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_control_style__WEBPACK_IMPORTED_MODULE_3__["TitleWrapper"], {
        className: "titleWrapper"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_control_style__WEBPACK_IMPORTED_MODULE_3__["ComponentTitle"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_7__["Input"], {
        placeholder: "Search ...",
        style: {
          width: 170
        },
        onChange: this.handleSearchChange,
        className: "inputSearch",
        onKeyUp: this.onKeyUp,
        value: this.state.search
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_7__["Select"], {
        placeholder: "Select Type",
        style: {
          width: '170px'
        },
        onChange: this.handlSelectChange,
        value: announcementTypeId
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Option, {
        value: ""
      }, "All"), announcementType && !Object(util__WEBPACK_IMPORTED_MODULE_17__["isNullOrUndefined"])(announcementType) ? announcementType.map(function (value, index) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Option, {
          key: index,
          value: value.id
        }, value.name);
      }) : ''), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(RangePicker, {
        format: "YYYY-MM-DD",
        placeholder: ['Start date', 'End date'],
        value: startDate && endDate ? [moment__WEBPACK_IMPORTED_MODULE_6___default()(startDate, 'YYYY-MM-DD'), moment__WEBPACK_IMPORTED_MODULE_6___default()(endDate, 'YYYY-MM-DD')] : '',
        allowClear: false,
        onChange: this.onChangeDate,
        style: {
          width: '300px'
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_7__["Button"], {
        onClick: this.handleSearch,
        className: "btSearch",
        style: {
          top: 0
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_7__["Icon"], {
        type: "search",
        theme: "outlined"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_to_print__WEBPACK_IMPORTED_MODULE_19___default.a, {
        key: "print",
        trigger: function trigger() {
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_7__["Button"], {
            style: {
              display: 'none'
            },
            className: "btnRefresh btWizard btPrintAll",
            title: "Print",
            TableWrapper: true
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_7__["Icon"], {
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
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_7__["Button"], {
        className: "btWizard",
        onClick: this.printAll
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_7__["Icon"], {
        type: "printer",
        theme: "outlined"
      }), " Print"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: {
          display: 'none'
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_print__WEBPACK_IMPORTED_MODULE_20__["default"], {
        rows: rows,
        ref: function ref(el) {
          return _this4.componentPrintRef = el;
        }
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_control_style__WEBPACK_IMPORTED_MODULE_3__["ButtonHolders"], {
        className: "group_bt_head"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        onClick: this.handleRefresh,
        className: "btnRefresh btWizard"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_7__["Icon"], {
        type: "sync",
        theme: "outlined"
      }), "Refresh"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_control_style__WEBPACK_IMPORTED_MODULE_3__["TableWrapper"], {
        rowKey: "key",
        columns: columns,
        dataSource: dataSource,
        locale: {
          emptyText: this.props.isLoading === true ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            className: "ant-spin ant-spin-spinning ant-table-with-pagination ant-table-spin-holder"
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
            className: "ant-spin-dot ant-spin-dot-spin"
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", null))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_utility_intlMessages__WEBPACK_IMPORTED_MODULE_12__["default"], {
            id: "button.empty"
          }))
        } //loading={this.props.isLoading}
        ,
        className: "isoSimpleTable",
        bordered: true,
        pagination: {
          showSizeChanger: false,
          defaultCurrent: 1,
          defaultPageSize: _settings_index__WEBPACK_IMPORTED_MODULE_11__["dataConfig"].pageLimit || 10,
          current: this.state.page,
          total: count,
          hideOnSinglePage: true,
          onChange: this.onPageChange,
          showTotal: function showTotal(total, range) {
            return "Show ".concat(range[0], "-").concat(range[1], " in ").concat(dataSource.length, " records");
          }
        }
      }), row ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_UserAnnouncement__WEBPACK_IMPORTED_MODULE_9__["default"], {
        displayname: row.displayname,
        modalActive: modalActive,
        modalType: this.state.modalType,
        row: row,
        handleCancel: this.handleCancel,
        handleSubmit: this.handleSubmit,
        handleClose: this.handleCancel,
        disable: disable
      }) : '')))));
    }
  }]);

  return Index;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(function (state) {
  return _objectSpread({}, state.UserAnnouncementReducer, {}, state.SocketReducer);
}, _objectSpread({}, _redux_UserAnnouncement_actions__WEBPACK_IMPORTED_MODULE_10__["default"], {}, _redux_Socket_actions__WEBPACK_IMPORTED_MODULE_14__["default"]))(Index));

/***/ }),

/***/ "./resources/js/isomophic/admin/containers/UserAnnouncement/print.js":
/*!***************************************************************************!*\
  !*** ./resources/js/isomophic/admin/containers/UserAnnouncement/print.js ***!
  \***************************************************************************/
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




var ComponentToPrint = /*#__PURE__*/function (_Component) {
  _inherits(ComponentToPrint, _Component);

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
        title: "User",
        dataIndex: "User",
        className: "noWrapCell",
        key: "User",
        width: 150,
        render: function render(text, row) {
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, row && row.admin ? row.admin.full_name : "");
        }
      }, {
        title: "Title",
        dataIndex: "Title",
        key: "Title",
        width: 200,
        render: function render(text, row) {
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, row && row.announcement ? row.announcement.title : "");
        }
      }, {
        title: "Type",
        dataIndex: "Announcement_type",
        key: "Announcement_type",
        className: "noWrapCell",
        width: 90,
        render: function render(text, row) {
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, row && row.announcement_type ? row.announcement_type.name : "");
        }
      }, {
        title: "Date",
        dataIndex: "Annouced_date",
        className: "noWrapCell",
        key: "Annouced_date",
        width: 90,
        render: function render(text, row) {
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, row && row.announcement ? row.announcement.announcement_date : "");
        }
      }, {
        title: "Description",
        dataIndex: "Description",
        key: "Description",
        render: function render(text, row) {
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            style: {
              whiteSpace: "pre-wrap",
              wordWrap: "break-word"
            }
          }, row && row.announcement ? row.announcement.description : "");
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
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (ComponentToPrint);

/***/ }),

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