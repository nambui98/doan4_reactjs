(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[40],{

/***/ "./resources/js/isomophic/admin/components/Job/index.js":
/*!**************************************************************!*\
  !*** ./resources/js/isomophic/admin/components/Job/index.js ***!
  \**************************************************************/
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
/* harmony import */ var _common_styleControl__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../common/styleControl */ "./resources/js/isomophic/common/styleControl.js");
/* harmony import */ var _components_utility_intlMessages__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../components/utility/intlMessages */ "./resources/js/isomophic/components/utility/intlMessages.js");
/* harmony import */ var _helpers_formItem__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../helpers/formItem */ "./resources/js/isomophic/helpers/formItem.js");
/* harmony import */ var _helpers_helperFunc__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../helpers/helperFunc */ "./resources/js/isomophic/helpers/helperFunc.js");
/* harmony import */ var _settings__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../settings */ "./resources/js/isomophic/settings/index.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! util */ "./node_modules/node-libs-browser/node_modules/util/util.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_12__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

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
    Method Name: Job
    Description: Add, update, delete,  search, refresh
    Author: Nam Nam
    Last Modified Author: Nam Nam
    Created Date: 20/02/2020
    Modified Date: 17/03/2020
*/













var dummyRequest = _helpers_helperFunc__WEBPACK_IMPORTED_MODULE_10__["default"].dummyRequest,
    beforeUpload = _helpers_helperFunc__WEBPACK_IMPORTED_MODULE_10__["default"].beforeUpload,
    getBase64 = _helpers_helperFunc__WEBPACK_IMPORTED_MODULE_10__["default"].getBase64;
var Option = antd__WEBPACK_IMPORTED_MODULE_5__["Select"].Option;
var WDModal = Object(_common_modal_style__WEBPACK_IMPORTED_MODULE_1__["default"])(_components_feedback_modal__WEBPACK_IMPORTED_MODULE_3__["default"]);
var Modal = Object(_settings_withDirection__WEBPACK_IMPORTED_MODULE_2__["default"])(WDModal);
var FormItem = antd__WEBPACK_IMPORTED_MODULE_5__["Form"].Item;
var RadioGroup = antd__WEBPACK_IMPORTED_MODULE_5__["Radio"].Group;
var TextArea = antd__WEBPACK_IMPORTED_MODULE_5__["Input"].TextArea;

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

    _defineProperty(_assertThisInitialized(_this), "handleChangeImage", function (e) {
      _this.setState({
        changed: true
      });

      if (typeof e.file.url === 'undefined') {
        getBase64(e.file.originFileObj, function (result) {
          var str = result.replace(/^data:image\/[a-z]+;base64,/, '');

          if (e.file.status === 'removed') {
            _this.setState({
              imagesStr: _this.state.imagesStr.filter(function (item) {
                return item !== str;
              })
            });
          } else {
            _this.setState({
              imagesStr: [].concat(_toConsumableArray(_this.state.imagesStr), [str])
            });
          }
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleCancel", function () {
      _this.setState({
        imagesStr: []
      });

      _this.props.handleCancel();
    });

    _this.state = {
      base64: null,
      changed: false,
      isLoadding: false,
      currAuthority: [],
      isAdding: true,
      limitAdd: false,
      imagesStr: []
    };
    _this.handleChange = _this.handleChange.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(ModalFormAccount, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      console.log(nextProps.modalType);

      if (nextProps.modalType === 'none') {
        console.log(this.props.form);
        this.setState({
          isAdding: true,
          changed: false,
          imagesStr: []
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
          handleSubmit = _this$props.handleSubmit,
          jobType = _this$props.jobType,
          jobSite = _this$props.jobSite;
      var getFieldDecorator = this.props.form.getFieldDecorator;

      var listImage = _toConsumableArray(new Set(this.state.imagesStr)).join('##########');

      var fileList = [];

      if (row.images) {
        var images = row.images.split('##########').slice(0, row.images.split('##########').length - 1);
        images.forEach(function (image, index) {
          return fileList.push({
            uid: index,
            name: '',
            status: 'done',
            url: image,
            thumbUrl: _settings__WEBPACK_IMPORTED_MODULE_11__["urlConfig"].imageUrl + image
          });
        });
      }

      var normFile = function normFile(e) {
        if (Array.isArray(e)) {
          return e;
        }

        return e && e.fileList;
      };

      var saveButton = function saveButton(e) {
        e.preventDefault();

        _this2.setState({
          changed: false
        });

        _this2.props.form.validateFieldsAndScroll(function (err, values) {
          if (!err) {
            if (modalType === 'changeStatus') {
              row.status = values.status;
            } else {
              (function () {
                row.is_job_done = values.is_job_done;
                row.is_job_briefed = values.is_job_briefed;
                row.hazard = values.hazard;
                row.ra = values.ra;
                row.is_rish_mitigate = values.is_rish_mitigate;
                row.description = values.description;
                row.job_date = values.job_date;
                row.job_site_id = values.job_site_id;
                row.job_type_id = values.job_type_id;
                row.status = modalType === 'insert' ? 1 : values.status;
                var baseImage = '';

                if (modalType === 'insert') {
                  (function () {
                    var imagesStr = '';

                    if (values.image) {
                      var _loop = function _loop(i) {
                        // eslint-disable-next-line
                        getBase64(values.image[i].originFileObj, function (result) {
                          baseImage = result;
                          var str = baseImage.replace(/^data:image\/[a-z]+;base64,/, '');

                          if (i !== 0) {
                            imagesStr += '##########' + str;
                          } else {
                            imagesStr = str;
                          }

                          if (i === values.image.length - 1) {
                            row.images = imagesStr;
                            handleSubmit(modalType, row);
                          }
                        });
                      };

                      for (var i = 0; i < values.image.length; i++) {
                        _loop(i);
                      }
                    } else {
                      handleSubmit(modalType, row);
                    }
                  })();
                } else if (modalType === 'edit') {
                  if (values.image) {
                    listImage = values.image.reduce(function (total, num) {
                      if (num.url) {
                        return total + num.url + '##########';
                      } else {
                        return total + '';
                      }
                    }, '') + listImage;
                    row.images = listImage;
                  }

                  handleSubmit(modalType, row);
                }
              })();
            }
          }
        });
      };

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Modal, {
        title: modalType === 'changeStatus' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_utility_intlMessages__WEBPACK_IMPORTED_MODULE_8__["default"], {
          id: "form.titleChangeStatus"
        }) : modalType === 'insert' ? 'Add New' : modalType === 'edit' ? 'Update' : 'DETAIL',
        className: "FormModal",
        style: {
          top: 50
        },
        width: window.innerWidth > 1100 ? modalType === 'ChangeStatus' ? 30 + '%' : 70 + '%' : '100%',
        visible: modalActive,
        onCancel: this.handleCancel,
        cancelText: modalType === 'view' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_utility_intlMessages__WEBPACK_IMPORTED_MODULE_8__["default"], {
          id: "button.close"
        }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_utility_intlMessages__WEBPACK_IMPORTED_MODULE_8__["default"], {
          id: "button.cancel"
        }),
        onOk: saveButton,
        okText: "Save",
        footer: modalType === 'changeStatus' || modalType === _helpers_helperFunc__WEBPACK_IMPORTED_MODULE_10__["default"].modeType.Insert || modalType === 'update' || modalType === 'edit' ? [/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_5__["Button"], {
          key: "cancel",
          className: "cancelType",
          onClick: this.handleCancel,
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
          onClick: this.handleCancel,
          style: Object(_common_styleControl__WEBPACK_IMPORTED_MODULE_7__["default"])(3, modalType)
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_utility_intlMessages__WEBPACK_IMPORTED_MODULE_8__["default"], {
          id: "button.close"
        }))]
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_data_style__WEBPACK_IMPORTED_MODULE_6__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "clearfix"
      }, modalType === _helpers_helperFunc__WEBPACK_IMPORTED_MODULE_10__["default"].modeType.Insert ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_5__["Form"], {
        className: " FormData"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_5__["Row"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_5__["Col"], {
        className: "ant-col-xl-12 ant-col-lg-24"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "LeftSideContent",
        style: {
          width: '100%'
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FormItem, _extends({}, _helpers_formItem__WEBPACK_IMPORTED_MODULE_9__["default"], {
        label: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "Job Site"),
        hasFeedback: true,
        style: {
          marginBottom: 10 + 'px'
        }
      }), getFieldDecorator('job_site_id', {
        initialValue: null,
        rules: [{
          required: true,
          message: 'Job site is required'
        }]
      })( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_5__["Select"], {
        placeholder: "Select job site",
        onChange: this.handleChange
      }, !Object(util__WEBPACK_IMPORTED_MODULE_12__["isNullOrUndefined"])(jobSite) ? jobSite.map(function (value, index) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Option, {
          key: index,
          value: value.id
        }, value.name);
      }) : ''))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FormItem, _extends({}, _helpers_formItem__WEBPACK_IMPORTED_MODULE_9__["default"], {
        label: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "Job Type"),
        hasFeedback: true,
        style: {
          marginBottom: 10 + 'px'
        }
      }), getFieldDecorator('job_type_id', {
        initialValue: null,
        rules: [{
          required: true,
          message: 'Job type is required'
        }]
      })( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_5__["Select"], {
        placeholder: "Select job type",
        onChange: this.handleChange
      }, !Object(util__WEBPACK_IMPORTED_MODULE_12__["isNullOrUndefined"])(jobType) ? jobType.map(function (value, index) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Option, {
          key: index,
          value: value.id
        }, value.name);
      }) : ''))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FormItem, _extends({}, _helpers_formItem__WEBPACK_IMPORTED_MODULE_9__["default"], {
        label: "Is job done"
      }), getFieldDecorator('is_job_done', {
        initialValue: 1,
        rules: [{
          required: true,
          message: 'Job done is required'
        }]
      })( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(RadioGroup, {
        onChange: this.handleChange
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_5__["Radio"], {
        value: 1
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_utility_intlMessages__WEBPACK_IMPORTED_MODULE_8__["default"], {
        id: "text.yes"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_5__["Radio"], {
        value: 2
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_utility_intlMessages__WEBPACK_IMPORTED_MODULE_8__["default"], {
        id: "text.no"
      }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FormItem, _extends({}, _helpers_formItem__WEBPACK_IMPORTED_MODULE_9__["default"], {
        label: "Is job briefed"
      }), getFieldDecorator('is_job_briefed', {
        initialValue: 1,
        rules: [{
          required: true,
          message: 'Job briefed is required'
        }]
      })( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(RadioGroup, {
        onChange: this.handleChange
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_5__["Radio"], {
        value: 1
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_utility_intlMessages__WEBPACK_IMPORTED_MODULE_8__["default"], {
        id: "text.yes"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_5__["Radio"], {
        value: 2
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_utility_intlMessages__WEBPACK_IMPORTED_MODULE_8__["default"], {
        id: "text.no"
      }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FormItem, _extends({}, _helpers_formItem__WEBPACK_IMPORTED_MODULE_9__["default"], {
        label: "Hazard",
        hasFeedback: true,
        style: {
          marginBottom: 10 + 'px'
        }
      }), getFieldDecorator('hazard', {
        initialValue: null,
        rules: [{
          required: true,
          message: 'Hazard is required'
        }, {
          max: 500,
          message: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_utility_intlMessages__WEBPACK_IMPORTED_MODULE_8__["default"], {
            id: "form.validate.max500"
          })
        }]
      })( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_5__["Input"], {
        onChange: this.handleChange
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FormItem, _extends({}, _helpers_formItem__WEBPACK_IMPORTED_MODULE_9__["default"], {
        label: "RA",
        hasFeedback: true,
        style: {
          marginBottom: 10 + 'px'
        }
      }), getFieldDecorator('ra', {
        initialValue: null,
        rules: [{
          required: true,
          message: 'Ra is required'
        }, {
          max: 500,
          message: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_utility_intlMessages__WEBPACK_IMPORTED_MODULE_8__["default"], {
            id: "form.validate.max500"
          })
        }]
      })( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_5__["Input"], {
        onChange: this.handleChange
      }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_5__["Col"], {
        className: "ant-col-xl-12 ant-col-lg-24"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "RightSideContent",
        style: {
          width: '100%'
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FormItem, _extends({}, _helpers_formItem__WEBPACK_IMPORTED_MODULE_9__["default"], {
        label: "Job date",
        hasFeedback: true,
        style: {
          marginBottom: 10 + 'px'
        }
      }), getFieldDecorator('job_date', {
        initialValue: null,
        rules: [{
          required: true,
          message: 'Job date is required'
        }]
      })( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_5__["DatePicker"], {
        format: _helpers_helperFunc__WEBPACK_IMPORTED_MODULE_10__["default"].dateFormat,
        disabledDate: this.disabledDate,
        allowClear: false,
        onChange: this.handleChange
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FormItem, _extends({}, _helpers_formItem__WEBPACK_IMPORTED_MODULE_9__["default"], {
        label: "Description",
        hasFeedback: true,
        style: {
          marginBottom: 10 + 'px'
        }
      }), getFieldDecorator('description', {
        initialValue: null,
        rules: [// {
        //   required: true,
        //   message: "Description is required"
        // },
        {
          min: 8,
          message: 'Minimum 8 characters long'
        }]
      })( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TextArea, {
        rows: 3,
        onChange: this.handleChange
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FormItem, _extends({}, _helpers_formItem__WEBPACK_IMPORTED_MODULE_9__["default"], {
        label: "Image",
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
        name: "image",
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
        label: "Is risk mitigate"
      }), getFieldDecorator('is_rish_mitigate', {
        initialValue: 1,
        rules: [{
          required: true,
          message: 'Risk mitigate is required'
        }]
      })( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(RadioGroup, {
        onChange: this.handleChange
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_5__["Radio"], {
        value: 1
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_utility_intlMessages__WEBPACK_IMPORTED_MODULE_8__["default"], {
        id: "text.yes"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_5__["Radio"], {
        value: 2
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_utility_intlMessages__WEBPACK_IMPORTED_MODULE_8__["default"], {
        id: "text.no"
      }))))))))) : modalType === 'edit' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_5__["Form"], {
        className: "isoCardInfoForm FormData"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_5__["Row"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_5__["Col"], {
        className: "ant-col-xl-12 ant-col-lg-24"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "LeftSideContent",
        style: {
          width: '100%'
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FormItem, _extends({}, _helpers_formItem__WEBPACK_IMPORTED_MODULE_9__["default"], {
        label: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "Job Site"),
        hasFeedback: true,
        style: {
          marginBottom: 10 + 'px'
        }
      }), getFieldDecorator('job_site_id', {
        initialValue: row && row.job_site_id ? row.job_site_id : null,
        rules: [{
          required: true,
          message: 'Job site is required'
        }]
      })( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_5__["Select"], {
        placeholder: "Select job site",
        onChange: this.handleChange
      }, !Object(util__WEBPACK_IMPORTED_MODULE_12__["isNullOrUndefined"])(jobSite) ? jobSite.map(function (value, index) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Option, {
          key: index,
          value: value.id
        }, value.name);
      }) : ''))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FormItem, _extends({}, _helpers_formItem__WEBPACK_IMPORTED_MODULE_9__["default"], {
        label: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "Job Type"),
        hasFeedback: true,
        style: {
          marginBottom: 10 + 'px'
        }
      }), getFieldDecorator('job_type_id', {
        initialValue: row && row.job_type_id ? row.job_type_id : null,
        rules: [{
          required: true,
          message: 'Job type is required'
        }]
      })( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_5__["Select"], {
        placeholder: "Select job type",
        onChange: this.handleChange
      }, !Object(util__WEBPACK_IMPORTED_MODULE_12__["isNullOrUndefined"])(jobType) ? jobType.map(function (value, index) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Option, {
          key: index,
          value: value.id
        }, value.name);
      }) : ''))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FormItem, _extends({}, _helpers_formItem__WEBPACK_IMPORTED_MODULE_9__["default"], {
        label: "Is job done"
      }), getFieldDecorator('is_job_done', {
        initialValue: row && row.is_job_done ? row.is_job_done : null,
        rules: [{
          required: true,
          message: 'Job done is required'
        }]
      })( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(RadioGroup, {
        onChange: this.handleChange
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_5__["Radio"], {
        value: 1
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_utility_intlMessages__WEBPACK_IMPORTED_MODULE_8__["default"], {
        id: "text.yes"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_5__["Radio"], {
        value: 2
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_utility_intlMessages__WEBPACK_IMPORTED_MODULE_8__["default"], {
        id: "text.no"
      }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FormItem, _extends({}, _helpers_formItem__WEBPACK_IMPORTED_MODULE_9__["default"], {
        label: "Is job briefed"
      }), getFieldDecorator('is_job_briefed', {
        initialValue: row && row.is_job_briefed ? row.is_job_briefed : null,
        rules: [{
          required: true,
          message: 'Job briefed is required'
        }]
      })( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(RadioGroup, {
        onChange: this.handleChange
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_5__["Radio"], {
        value: 1
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_utility_intlMessages__WEBPACK_IMPORTED_MODULE_8__["default"], {
        id: "text.yes"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_5__["Radio"], {
        value: 2
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_utility_intlMessages__WEBPACK_IMPORTED_MODULE_8__["default"], {
        id: "text.no"
      }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FormItem, _extends({}, _helpers_formItem__WEBPACK_IMPORTED_MODULE_9__["default"], {
        label: "Hazard",
        hasFeedback: true,
        style: {
          marginBottom: 10 + 'px'
        }
      }), getFieldDecorator('hazard', {
        initialValue: row && row.hazard ? row.hazard : null,
        rules: [{
          required: true,
          message: 'Hazard is required'
        }, {
          max: 500,
          message: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_utility_intlMessages__WEBPACK_IMPORTED_MODULE_8__["default"], {
            id: "form.validate.max500"
          })
        }]
      })( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_5__["Input"], {
        onChange: this.handleChange
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FormItem, _extends({}, _helpers_formItem__WEBPACK_IMPORTED_MODULE_9__["default"], {
        label: "RA",
        hasFeedback: true,
        style: {
          marginBottom: 10 + 'px'
        }
      }), getFieldDecorator('ra', {
        initialValue: row && row.ra ? row.ra : null,
        rules: [{
          required: true,
          message: 'Ra is required'
        }, {
          max: 500,
          message: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_utility_intlMessages__WEBPACK_IMPORTED_MODULE_8__["default"], {
            id: "form.validate.max500"
          })
        }]
      })( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_5__["Input"], {
        onChange: this.handleChange
      }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_5__["Col"], {
        className: "ant-col-xl-12 ant-col-lg-24"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "RightSideContent",
        style: {
          width: '100%'
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FormItem, _extends({}, _helpers_formItem__WEBPACK_IMPORTED_MODULE_9__["default"], {
        label: "Job date",
        hasFeedback: true,
        style: {
          marginBottom: 10 + 'px'
        }
      }), getFieldDecorator('job_date', {
        initialValue: row.job_date ? moment__WEBPACK_IMPORTED_MODULE_4___default()(row.job_date, _helpers_helperFunc__WEBPACK_IMPORTED_MODULE_10__["default"].dateFormat) : null,
        rules: [{
          required: true,
          message: 'Job date is required'
        }]
      })( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_5__["DatePicker"], {
        format: _helpers_helperFunc__WEBPACK_IMPORTED_MODULE_10__["default"].dateFormat,
        disabledDate: this.disabledDate,
        allowClear: false,
        onChange: this.handleChange
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FormItem, _extends({}, _helpers_formItem__WEBPACK_IMPORTED_MODULE_9__["default"], {
        label: "Description",
        hasFeedback: true,
        style: {
          marginBottom: 10 + 'px'
        }
      }), getFieldDecorator('description', {
        initialValue: row && row.description ? row.description : null,
        rules: [// {
        //   required: true,
        //   message: "Description is required"
        // },
        {
          min: 8,
          message: 'Minimum 8 characters long'
        }]
      })( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TextArea, {
        rows: 3,
        onChange: this.handleChange
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FormItem, _extends({}, _helpers_formItem__WEBPACK_IMPORTED_MODULE_9__["default"], {
        label: "Image",
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
        name: "image",
        customRequest: dummyRequest,
        listType: "picture",
        accept: "image/png, image/jpeg",
        beforeUpload: beforeUpload,
        onChange: this.handleChangeImage
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_5__["Button"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_5__["Icon"], {
        type: "upload"
      }), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_utility_intlMessages__WEBPACK_IMPORTED_MODULE_8__["default"], {
        id: "form.upload"
      }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FormItem, _extends({}, _helpers_formItem__WEBPACK_IMPORTED_MODULE_9__["default"], {
        label: "Is risk mitigate"
      }), getFieldDecorator('is_rish_mitigate', {
        initialValue: row && row.is_rish_mitigate ? row.is_rish_mitigate : null,
        rules: [{
          required: true,
          message: 'Rish mitigate is required'
        }]
      })( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(RadioGroup, {
        onChange: this.handleChange
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_5__["Radio"], {
        value: 1
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_utility_intlMessages__WEBPACK_IMPORTED_MODULE_8__["default"], {
        id: "text.yes"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_5__["Radio"], {
        value: 2
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_utility_intlMessages__WEBPACK_IMPORTED_MODULE_8__["default"], {
        id: "text.no"
      }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FormItem, _extends({}, _helpers_formItem__WEBPACK_IMPORTED_MODULE_9__["default"], {
        label: "Status"
      }), getFieldDecorator('status', {
        initialValue: row ? row.status : ''
      })( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(RadioGroup, {
        onChange: this.handleChange
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_5__["Radio"], {
        value: 1
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_utility_intlMessages__WEBPACK_IMPORTED_MODULE_8__["default"], {
        id: "form.active"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_5__["Radio"], {
        value: 2
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_utility_intlMessages__WEBPACK_IMPORTED_MODULE_8__["default"], {
        id: "form.inactive"
      }))))))))) : modalType === 'changeStatus' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_5__["Form"], {
        className: "FormData"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FormItem, _extends({}, _helpers_formItem__WEBPACK_IMPORTED_MODULE_9__["default"], {
        label: "Status"
      }), getFieldDecorator('status', {
        initialValue: row ? row.status : ''
      })( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(RadioGroup, {
        onChange: this.handleChange
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_5__["Radio"], {
        value: 1
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_utility_intlMessages__WEBPACK_IMPORTED_MODULE_8__["default"], {
        id: "form.active"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_5__["Radio"], {
        value: 2
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_utility_intlMessages__WEBPACK_IMPORTED_MODULE_8__["default"], {
        id: "form.inactive"
      })))))) : modalType === 'view' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "clearfix"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "LeftSideContent"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "detailField clearfix"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        className: "label",
        style: {
          width: '33%'
        }
      }, "Name:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "contentDetail",
        style: {
          width: '67%'
        }
      }, row && row.name ? row.name : '')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "detailField clearfix"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        className: "label",
        style: {
          width: '33%'
        }
      }, "Location:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "contentDetail",
        style: {
          width: '67%'
        }
      }, row ? row.location : '')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "detailField clearfix"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        className: "label",
        style: {
          width: '33%'
        }
      }, "Reported on"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "contentDetail",
        style: {
          width: '67%'
        }
      }, row && row.reported_on ? moment__WEBPACK_IMPORTED_MODULE_4___default()(row.reported_on).format('MM/DD/YYYY') : '')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "detailField clearfix"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        className: "label",
        style: {
          width: '33%'
        }
      }, "Incident date"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "contentDetail",
        style: {
          width: '67%'
        }
      }, row && row.incident_date ? moment__WEBPACK_IMPORTED_MODULE_4___default()(row.incident_date).format('MM/DD/YYYY') : '')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "detailField clearfix"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        className: "label",
        style: {
          width: '33%'
        }
      }, "Description:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "contentDetail",
        style: {
          width: '67%'
        }
      }, row ? row.description : ''))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "RightSideContent"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "detailField clearfix"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        className: "label",
        style: {
          width: '33%'
        }
      }, "Action plan:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "contentDetail",
        style: {
          width: '67%'
        }
      }, row ? row.action_plan : '')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "detailField clearfix"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        className: "label",
        style: {
          width: '33%'
        }
      }, "Incident type:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "contentDetail",
        style: {
          width: '67%'
        }
      }, row && row.incident_type ? row.incident_type.name : '')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "detailField clearfix"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        className: "label",
        style: {
          width: '33%'
        }
      }, "Incident severity:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "contentDetail",
        style: {
          width: '67%'
        }
      }, row && row.incident_severity ? row.incident_severity.name : '')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "detailField clearfix"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        className: "label",
        style: {
          width: '33%'
        }
      }, "Created at"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "contentDetail",
        style: {
          width: '67%'
        }
      }, row ? moment__WEBPACK_IMPORTED_MODULE_4___default()(row.created_at).format('MM/DD/YYYY') : '')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "detailField clearfix"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        className: "label",
        style: {
          width: '33%'
        }
      }, "Updated at"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "contentDetail",
        style: {
          width: '67%'
        }
      }, row ? moment__WEBPACK_IMPORTED_MODULE_4___default()(row.updated_at).format('MM/DD/YYYY') : '')))) : '')));
    }
  }]);

  return ModalFormAccount;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

var WrappedModalFormAccount = antd__WEBPACK_IMPORTED_MODULE_5__["Form"].create()(ModalFormAccount);
/* harmony default export */ __webpack_exports__["default"] = (WrappedModalFormAccount);

/***/ }),

/***/ "./resources/js/isomophic/admin/containers/Job/index.js":
/*!**************************************************************!*\
  !*** ./resources/js/isomophic/admin/containers/Job/index.js ***!
  \**************************************************************/
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
/* harmony import */ var _components_Job__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/Job */ "./resources/js/isomophic/admin/components/Job/index.js");
/* harmony import */ var _redux_Job_actions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../redux/Job/actions */ "./resources/js/isomophic/admin/redux/Job/actions.js");
/* harmony import */ var _settings_index__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../settings/index */ "./resources/js/isomophic/settings/index.js");
/* harmony import */ var _components_utility_intlMessages__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../components/utility/intlMessages */ "./resources/js/isomophic/components/utility/intlMessages.js");
/* harmony import */ var _helpers_helperFunc__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../helpers/helperFunc */ "./resources/js/isomophic/helpers/helperFunc.js");
/* harmony import */ var _redux_Socket_actions__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../redux/Socket/actions */ "./resources/js/isomophic/admin/redux/Socket/actions.js");
/* harmony import */ var _helpers_message__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./../../../helpers/message */ "./resources/js/isomophic/helpers/message.js");
/* harmony import */ var _helpers_flags__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../helpers/flags */ "./resources/js/isomophic/helpers/flags.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! util */ "./node_modules/node-libs-browser/node_modules/util/util.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_17__);
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

var Job = /*#__PURE__*/function (_BaseComponent) {
  _inherits(Job, _BaseComponent);

  var _super = _createSuper(Job);

  function Job() {
    var _this;

    _classCallCheck(this, Job);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "updateStatusAdd", function (value) {//this.props.updateStatusSaveAdd(value);
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
        job_type_id: [],
        page: 1,
        limit: _settings_index__WEBPACK_IMPORTED_MODULE_11__["dataConfig"].pageLimit
      });

      _this.reset();
    });

    _defineProperty(_assertThisInitialized(_this), "handleSearch", function () {
      var page = {
        job_type_id: _this.state.jobTypeId,
        page: 1,
        limit: _settings_index__WEBPACK_IMPORTED_MODULE_11__["dataConfig"].pageLimit
      };

      _this.setState(page, function () {
        _this.props.loadData(page);
      });
    });

    _defineProperty(_assertThisInitialized(_this), "reset", function () {
      _this.setState({
        jobTypeId: [],
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
        job_type_id: _this.state.jobTypeId,
        page: pageNumber,
        limit: pageSize
      };

      _this.setState(page, function () {
        _this.props.loadData(page);
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onPageChange_customer", function (data) {
      _this.props.loadData(data);
    });

    _defineProperty(_assertThisInitialized(_this), "handlSelectChange", function (id) {
      _this.setState(_objectSpread({}, _this.state, {
        jobTypeId: id
      }));
    });

    return _this;
  }

  _createClass(Job, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      var page = {
        job_type_id: this.state.jobTypeId,
        page: this.state.page,
        limit: _settings_index__WEBPACK_IMPORTED_MODULE_11__["dataConfig"].pageLimit
      };
      this.props.loadData(page);
      this.socketIO = Object(_helpers_message__WEBPACK_IMPORTED_MODULE_15__["connectSocket"])(this.props.socketIO);
      Object(_helpers_message__WEBPACK_IMPORTED_MODULE_15__["listenSocket"])(this.socketIO, _helpers_flags__WEBPACK_IMPORTED_MODULE_16__["default"].JOB, function (flag, data) {
        var newPage = {
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
          jobType = _this$props.jobType,
          jobSite = _this$props.jobSite;
      var rowStyle = _settings_basicStyle__WEBPACK_IMPORTED_MODULE_3__["default"].rowStyle,
          colStyle = _settings_basicStyle__WEBPACK_IMPORTED_MODULE_3__["default"].colStyle,
          gutter = _settings_basicStyle__WEBPACK_IMPORTED_MODULE_3__["default"].gutter;
      var _this$state = this.state,
          modalActive = _this$state.modalActive,
          newUserId = _this$state.newUserId,
          jobTypeId = _this$state.jobTypeId;
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
        title: "User",
        dataIndex: "created_by",
        className: "noWrapCell",
        key: "created_by",
        sorter: function sorter(a, b) {
          if (a.created_by < b.created_by) return -1;
          if (a.created_by > b.created_by) return 1;
          return 0;
        },
        render: function render(text, row) {
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, row.admin.full_name);
        }
      }, {
        title: "Type",
        dataIndex: "job_type",
        className: "noWrapCell",
        key: "job_type",
        sorter: function sorter(a, b) {
          if (a.job_type_id < b.job_type_id) return -1;
          if (a.job_type_id > b.job_type_id) return 1;
          return 0;
        },
        render: function render(text, row) {
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, row.job_type.name);
        }
      }, {
        title: "Site",
        dataIndex: "job_site",
        className: "noWrapCell",
        key: "job_site",
        sorter: function sorter(a, b) {
          if (a.job_site_id < b.job_site_id) return -1;
          if (a.job_site_id > b.job_site_id) return 1;
          return 0;
        },
        render: function render(text, row) {
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, row && row.job_site ? row.job_site.name : "");
        }
      }, {
        title: "Done",
        dataIndex: "is_job_done",
        className: "noWrapCell",
        key: "is_job_done",
        width: 50,
        sorter: function sorter(a, b) {
          if (a.is_job_done < b.is_job_done) return -1;
          if (a.is_job_done > b.is_job_done) return 1;
          return 0;
        },
        render: function render(text, row) {
          var className;

          if (row.is_job_done === _helpers_helperFunc__WEBPACK_IMPORTED_MODULE_13__["default"].yesNo.Yes) {
            className = "publish";
          } else {
            className = "private";
          }

          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_control_style__WEBPACK_IMPORTED_MODULE_4__["StatusTag"], {
            className: className
          }, row.is_job_done === _helpers_helperFunc__WEBPACK_IMPORTED_MODULE_13__["default"].yesNo.Yes ? _helpers_helperFunc__WEBPACK_IMPORTED_MODULE_13__["default"].yesNo.properties[_helpers_helperFunc__WEBPACK_IMPORTED_MODULE_13__["default"].yesNo.Yes] : _helpers_helperFunc__WEBPACK_IMPORTED_MODULE_13__["default"].yesNo.properties[_helpers_helperFunc__WEBPACK_IMPORTED_MODULE_13__["default"].yesNo.No]);
        }
      }, {
        title: "Briefed",
        dataIndex: "is_job_briefed",
        className: "noWrapCell",
        key: "is_job_briefed",
        width: 50,
        sorter: function sorter(a, b) {
          if (a.is_job_briefed < b.is_job_briefed) return -1;
          if (a.is_job_briefed > b.is_job_briefed) return 1;
          return 0;
        },
        render: function render(text, row) {
          var className;

          if (row.is_job_briefed === _helpers_helperFunc__WEBPACK_IMPORTED_MODULE_13__["default"].yesNo.Yes) {
            className = "publish";
          } else {
            className = "private";
          }

          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_control_style__WEBPACK_IMPORTED_MODULE_4__["StatusTag"], {
            className: className
          }, row.is_job_briefed === _helpers_helperFunc__WEBPACK_IMPORTED_MODULE_13__["default"].yesNo.Yes ? _helpers_helperFunc__WEBPACK_IMPORTED_MODULE_13__["default"].yesNo.properties[_helpers_helperFunc__WEBPACK_IMPORTED_MODULE_13__["default"].yesNo.Yes] : _helpers_helperFunc__WEBPACK_IMPORTED_MODULE_13__["default"].yesNo.properties[_helpers_helperFunc__WEBPACK_IMPORTED_MODULE_13__["default"].yesNo.No]);
        }
      }, {
        title: "Hazard",
        dataIndex: "hazard",
        className: "noWrapCell",
        key: "hazard",
        sorter: function sorter(a, b) {
          if (a.hazard < b.hazard) return -1;
          if (a.hazard > b.hazard) return 1;
          return 0;
        },
        render: function render(text, row) {
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, row.hazard);
        }
      }, {
        title: "RA",
        dataIndex: "ra",
        className: "noWrapCell",
        key: "ra",
        sorter: function sorter(a, b) {
          if (a.ra < b.ra) return -1;
          if (a.ra > b.ra) return 1;
          return 0;
        },
        render: function render(text, row) {
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, row.ra);
        }
      }, {
        title: "Rish mitigate",
        dataIndex: "is_rish_mitigate",
        className: "noWrapCell",
        key: "is_rish_mitigate",
        width: 90,
        sorter: function sorter(a, b) {
          if (a.is_rish_mitigate < b.is_rish_mitigate) return -1;
          if (a.is_rish_mitigate > b.is_rish_mitigate) return 1;
          return 0;
        },
        render: function render(text, row) {
          var className;

          if (row.is_rish_mitigate === _helpers_helperFunc__WEBPACK_IMPORTED_MODULE_13__["default"].yesNo.Yes) {
            className = "publish";
          } else {
            className = "private";
          }

          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_control_style__WEBPACK_IMPORTED_MODULE_4__["StatusTag"], {
            className: className
          }, row.is_rish_mitigate === _helpers_helperFunc__WEBPACK_IMPORTED_MODULE_13__["default"].yesNo.Yes ? _helpers_helperFunc__WEBPACK_IMPORTED_MODULE_13__["default"].yesNo.properties[_helpers_helperFunc__WEBPACK_IMPORTED_MODULE_13__["default"].yesNo.Yes] : _helpers_helperFunc__WEBPACK_IMPORTED_MODULE_13__["default"].yesNo.properties[_helpers_helperFunc__WEBPACK_IMPORTED_MODULE_13__["default"].yesNo.No]);
        }
      }, // {
      //   title: "Site",
      //   dataIndex: "job_site",
      //   className: "noWrapCell",
      //   key: "job_site",
      //   sorter: (a, b) => {
      //     if (a.job_site_id < b.job_site_id) return -1;
      //     if (a.job_site_id > b.job_site_id) return 1;
      //     return 0;
      //   },
      //   render: (text, row) => {
      //     return <span>{row && row.job_site ? row.job_site.name : ""}</span>;
      //   }
      // },
      {
        title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_utility_intlMessages__WEBPACK_IMPORTED_MODULE_12__["default"], {
          id: "form.image"
        }),
        dataIndex: "image",
        key: "image",
        className: "noWrapCell",
        render: function render(text, row) {
          if (row && row.images) {
            var images = row.images.split("##########").slice(0, row.images.split("##########").length - 1);
            return images.map(function (image, index) {
              return [/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
                key: index,
                style: {
                  width: "60px",
                  margin: "4px 0"
                },
                alt: row.name,
                src: _settings_index__WEBPACK_IMPORTED_MODULE_11__["urlConfig"].imageUrl + image
              }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
                key: index + images.length
              })];
            });
          }
        }
      }, {
        title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_utility_intlMessages__WEBPACK_IMPORTED_MODULE_12__["default"], {
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
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, row.updated_at);
        }
      }, {
        title: "",
        key: "action",
        className: "noWrapCell",
        // style:{display:"none"},
        render: function render(text, row) {
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_control_style__WEBPACK_IMPORTED_MODULE_4__["ActionWrapper"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, localStorage.getItem("user_name") === "admin" || JSON.parse(localStorage.getItem("role_detail")).some(function (role) {
            return role.address === "102";
          }) ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
            onClick: _this4.handleModal.bind(_this4, "edit", row),
            className: "aSimple"
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_7__["Icon"], {
            type: "form",
            theme: "outlined"
          })) : "", localStorage.getItem("user_name") === "admin" || JSON.parse(localStorage.getItem("role_detail")).some(function (role) {
            return role.address === "105";
          }) ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_7__["Popconfirm"], {
            title: "Are you sure delete this profile?.",
            okText: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_utility_intlMessages__WEBPACK_IMPORTED_MODULE_12__["default"], {
              id: "button.delete"
            }),
            cancelText: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_utility_intlMessages__WEBPACK_IMPORTED_MODULE_12__["default"], {
              id: "button.cancel"
            }),
            placement: "topRight",
            onConfirm: _this4.handleSubmit.bind(_this4, "delete", row)
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
            className: "deleteBtn aSimple"
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
            className: "ion-android-delete deleteRow"
          }))) : ""));
        }
      }];
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_data_style__WEBPACK_IMPORTED_MODULE_5__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_utility_layoutWrapper__WEBPACK_IMPORTED_MODULE_6__["default"], {
        style: {
          padding: "0px"
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
        className: "PageHeader"
      }, " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_utility_intlMessages__WEBPACK_IMPORTED_MODULE_12__["default"], {
        id: "sidebar.job"
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
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_control_style__WEBPACK_IMPORTED_MODULE_4__["ComponentTitle"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_7__["Select"], {
        placeholder: "Select Type",
        style: {
          width: "140px"
        },
        onChange: this.handlSelectChange,
        value: jobTypeId
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Option, {
        value: ""
      }, "All"), jobType && !Object(util__WEBPACK_IMPORTED_MODULE_17__["isNullOrUndefined"])(jobType) ? jobType.map(function (value, index) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Option, {
          key: index,
          value: value.id
        }, value.name);
      }) : ""), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
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
      }), "Refresh"), JSON.parse(localStorage.getItem("role_detail")).some(function (role) {
        return role.address === "101";
      }) ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        onClick: this.handleModal.bind(this, "insert", null),
        className: "btnAdd btWizard"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_7__["Icon"], {
        type: "plus-square",
        theme: "outlined"
      }), "Add new") : "")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_control_style__WEBPACK_IMPORTED_MODULE_4__["TableWrapper"], {
        rowKey: "key",
        columns: localStorage.getItem("user_name") === "admin" || JSON.parse(localStorage.getItem("role_detail")).some(function (role) {
          return role.address === "102";
        }) || JSON.parse(localStorage.getItem("role_detail")).some(function (role) {
          return role.address === "101";
        }) ? columns : columns.slice(0, columns.length - 1),
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
      }), row ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Job__WEBPACK_IMPORTED_MODULE_9__["default"], {
        displayname: row.displayname,
        modalActive: modalActive,
        modalType: this.state.modalType,
        row: row,
        jobType: jobType,
        jobSite: jobSite,
        handleCancel: this.handleCancel,
        handleSubmit: this.handleSubmit,
        handleClose: this.handleCancel,
        updateStatusAdd: this.updateStatusAdd,
        newUserId: newUserId,
        updateCheck: this.updateCheck,
        disable: disable,
        onPageChange_customer: this.onPageChange_customer
      }) : "")))));
    }
  }]);

  return Job;
}(_containers_base__WEBPACK_IMPORTED_MODULE_2__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(function (state) {
  return _objectSpread({}, state.JobReducer, {}, state.SocketReducer);
}, _objectSpread({}, _redux_Job_actions__WEBPACK_IMPORTED_MODULE_10__["default"], {}, _redux_Socket_actions__WEBPACK_IMPORTED_MODULE_14__["default"]))(Job));

/***/ })

}]);