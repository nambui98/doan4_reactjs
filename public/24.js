(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[24],{

/***/ "./resources/js/isomophic/admin/components/Incidents/index.js":
/*!********************************************************************!*\
  !*** ./resources/js/isomophic/admin/components/Incidents/index.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! util */ "./node_modules/node-libs-browser/node_modules/util/util.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _common_data_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../common/data.style */ "./resources/js/isomophic/common/data.style.js");
/* harmony import */ var _common_modal_style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../common/modal.style */ "./resources/js/isomophic/common/modal.style.js");
/* harmony import */ var _common_styleControl__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../common/styleControl */ "./resources/js/isomophic/common/styleControl.js");
/* harmony import */ var _components_feedback_modal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../components/feedback/modal */ "./resources/js/isomophic/components/feedback/modal.js");
/* harmony import */ var _components_utility_intlMessages__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../components/utility/intlMessages */ "./resources/js/isomophic/components/utility/intlMessages.js");
/* harmony import */ var _helpers_formItem__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../helpers/formItem */ "./resources/js/isomophic/helpers/formItem.js");
/* harmony import */ var _helpers_helperFunc__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../helpers/helperFunc */ "./resources/js/isomophic/helpers/helperFunc.js");
/* harmony import */ var _settings__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../settings */ "./resources/js/isomophic/settings/index.js");
/* harmony import */ var _settings_withDirection__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../settings/withDirection */ "./resources/js/isomophic/settings/withDirection.js");
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
    Method Name: Incidents
    Description: Add, update, delete,  search, refresh
    Author: Nam Nam
    Last Modified Author: Nam Nam
    Created Date: 20/02/2020
    Modified Date: 2/03/2020
*/













var dummyRequest = _helpers_helperFunc__WEBPACK_IMPORTED_MODULE_10__["default"].dummyRequest,
    beforeUpload = _helpers_helperFunc__WEBPACK_IMPORTED_MODULE_10__["default"].beforeUpload,
    getBase64 = _helpers_helperFunc__WEBPACK_IMPORTED_MODULE_10__["default"].getBase64;
var Option = antd__WEBPACK_IMPORTED_MODULE_0__["Select"].Option;
var WDModal = Object(_common_modal_style__WEBPACK_IMPORTED_MODULE_5__["default"])(_components_feedback_modal__WEBPACK_IMPORTED_MODULE_7__["default"]);
var Modal = Object(_settings_withDirection__WEBPACK_IMPORTED_MODULE_12__["default"])(WDModal);
var FormItem = antd__WEBPACK_IMPORTED_MODULE_0__["Form"].Item;
var RadioGroup = antd__WEBPACK_IMPORTED_MODULE_0__["Radio"].Group;
var TextArea = antd__WEBPACK_IMPORTED_MODULE_0__["Input"].TextArea;

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

    _defineProperty(_assertThisInitialized(_this), "handleChangeIsImage", function (e) {
      _this.setState({
        changed: true,
        isImage: e.target.value === 1 ? true : false
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleCancel", function () {
      _this.setState({
        imagesStr: [],
        isImage: true,
        dateTimeIncident: '',
        dateTimeReport: ''
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
      imagesStr: [],
      isImage: false
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
          changed: false,
          imagesStr: [],
          isImage: false
        });
        this.props.form.resetFields();
      }
    } //cập nhật isImage khi mở form update để hiện image

  }, {
    key: "componentWillUpdate",
    value: function componentWillUpdate(prevProps) {
      if (prevProps.modalType === _helpers_helperFunc__WEBPACK_IMPORTED_MODULE_10__["default"].modeType.Update && this.props.row !== prevProps.row) {
        this.setState({
          isImage: prevProps.row.is_image === 2 ? false : true
        });
      }
    } //Disable or enable save button

  }, {
    key: "render",
    // range=(start, end)=> {
    //   const result = [];
    //   for (let i = start; i < end; i++) {
    //     result.push(i);
    //   }
    //   return result;
    // }
    // disabledDateTime=()=> {
    //   return {
    //     disabledHours: () => this.range(0, 24).splice(0, moment().get('hours')),
    //     disabledMinutes: () => this.range(0, 60).splice(0, moment().get('minutes')),
    //     disabledSeconds: () => [0, 60].splice(0, moment().get('seconds')),
    //   };
    // }
    // disabledDate=(current)=>{
    //   const date=new Date()
    //     // Can not select days before today and today
    //   return current && current < moment(date).subtract(1, 'day').endOf('day');
    // }
    // onOk=(value, dateString)=> {
    //   console.log('onOk: ', value);
    //   const date=new Date(value._d)
    //   console.log(moment(date).format('YYYY-MM-DD HH:mm:ss'))
    //   console.log(date)
    // }
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          modalActive = _this$props.modalActive,
          modalType = _this$props.modalType,
          row = _this$props.row,
          handleSubmit = _this$props.handleSubmit,
          incidentDataInit = _this$props.incidentDataInit;
      var getFieldDecorator = this.props.form.getFieldDecorator;

      var listImage = _toConsumableArray(new Set(this.state.imagesStr)).join('##########');

      var date = new Date();
      var fileList = [];
      var images = '';

      if (row.images) {
        images = row.images.split('##########').slice(0, row.images.split('##########').length - 1);
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
                row.is_any_injury = values.is_any_injury;
                row.is_SAS_report = values.is_SAS_report;
                row.is_image = values.is_image;
                row.reported_on = moment__WEBPACK_IMPORTED_MODULE_1___default.a.utc(values.reported_on).format('YYYY-MM-DD HH:mm:ss');
                row.incident_date = moment__WEBPACK_IMPORTED_MODULE_1___default.a.utc(values.incident_date).format('YYYY-MM-DD HH:mm:ss');
                row.description = values.description;
                row.incident_damages_id = values.incident_damages_id;
                row.incident_type_id = values.incident_type_id;
                row.incident_severity_id = values.incident_severity_id;
                var baseImage = '';

                if (modalType === 'insert') {
                  (function () {
                    row.incident_severity_id = 6;
                    var imagesStr = ''; //console.log(values, this.state.isImage)

                    if (_this2.state.isImage && values.image) {
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

                      // console.log("vao day")
                      for (var i = 0; i < values.image.length; i++) {
                        _loop(i);
                      }
                    } else {
                      handleSubmit(modalType, row);
                    }
                  })();
                } else if (modalType === 'edit') {
                  if (values.image) {
                    listImage = values.is_image === 1 ? values.image.reduce(function (total, num) {
                      if (num.url) {
                        return total + num.url + '##########';
                      } else {
                        return total + '';
                      }
                    }, '') + listImage : '';
                    row.images = listImage;
                  }

                  handleSubmit(modalType, row);
                }
              })();
            }
          }
        });
      };

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Modal, {
        title: modalType === 'changeStatus' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_utility_intlMessages__WEBPACK_IMPORTED_MODULE_8__["default"], {
          id: "form.titleChangeStatus"
        }) : modalType === 'insert' ? 'Add New' : modalType === 'edit' ? 'Update' : 'DETAIL',
        className: "FormModal",
        style: {
          top: 50
        },
        width: window.innerWidth > 1100 ? modalType === 'ChangeStatus' ? 30 + '%' : 70 + '%' : '100%',
        visible: modalActive,
        onCancel: this.handleCancel,
        cancelText: modalType === 'view' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_utility_intlMessages__WEBPACK_IMPORTED_MODULE_8__["default"], {
          id: "button.close"
        }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_utility_intlMessages__WEBPACK_IMPORTED_MODULE_8__["default"], {
          id: "button.cancel"
        }),
        onOk: saveButton,
        okText: "Save",
        footer: modalType === 'changeStatus' || modalType === _helpers_helperFunc__WEBPACK_IMPORTED_MODULE_10__["default"].modeType.Insert || modalType === 'update' || modalType === 'edit' ? [/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_0__["Button"], {
          key: "cancel",
          className: "cancelType",
          onClick: this.handleCancel,
          style: Object(_common_styleControl__WEBPACK_IMPORTED_MODULE_6__["default"])(3, modalType)
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_utility_intlMessages__WEBPACK_IMPORTED_MODULE_8__["default"], {
          id: "button.close"
        })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_0__["Button"], {
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
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_utility_intlMessages__WEBPACK_IMPORTED_MODULE_8__["default"], {
          id: "button.save"
        }))] : [/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_0__["Button"], {
          key: "cancel",
          className: "cancelType",
          onClick: this.handleCancel,
          style: Object(_common_styleControl__WEBPACK_IMPORTED_MODULE_6__["default"])(3, modalType)
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_utility_intlMessages__WEBPACK_IMPORTED_MODULE_8__["default"], {
          id: "button.close"
        }))]
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_common_data_style__WEBPACK_IMPORTED_MODULE_4__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: "clearfix"
      }, modalType === _helpers_helperFunc__WEBPACK_IMPORTED_MODULE_10__["default"].modeType.Insert ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_0__["Form"], {
        className: " FormData"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_0__["Row"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_0__["Col"], {
        className: "ant-col-xl-12 ant-col-lg-24"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: "LeftSideContent",
        style: {
          width: '100%'
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(FormItem, _extends({}, _helpers_formItem__WEBPACK_IMPORTED_MODULE_9__["default"], {
        label: "Is any injury"
      }), getFieldDecorator('is_any_injury', {
        initialValue: 1,
        rules: [{
          required: true,
          message: 'Is any injury is required'
        }]
      })( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(RadioGroup, {
        onChange: this.handleChange
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_0__["Radio"], {
        value: 1
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_utility_intlMessages__WEBPACK_IMPORTED_MODULE_8__["default"], {
        id: "text.yes"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_0__["Radio"], {
        value: 2
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_utility_intlMessages__WEBPACK_IMPORTED_MODULE_8__["default"], {
        id: "text.no"
      }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(FormItem, _extends({}, _helpers_formItem__WEBPACK_IMPORTED_MODULE_9__["default"], {
        label: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", null, "Incident Type"),
        hasFeedback: true,
        style: {
          marginBottom: 10 + 'px'
        }
      }), getFieldDecorator('incident_type_id', {
        rules: [{
          required: true,
          message: 'Incident type is required'
        }]
      })( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_0__["Select"], {
        placeholder: "Select incident type",
        onChange: this.handleChange
      }, !Object(util__WEBPACK_IMPORTED_MODULE_3__["isNullOrUndefined"])(incidentDataInit.incidentTypes) ? incidentDataInit.incidentTypes.map(function (value, index) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Option, {
          key: index,
          value: value.id
        }, value.name);
      }) : ''))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(FormItem, _extends({}, _helpers_formItem__WEBPACK_IMPORTED_MODULE_9__["default"], {
        label: "Is image"
      }), getFieldDecorator('is_image', {
        initialValue: 2,
        rules: [{
          required: true,
          message: 'Is image is required'
        }]
      })( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(RadioGroup, {
        onChange: this.handleChangeIsImage
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_0__["Radio"], {
        value: 1
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_utility_intlMessages__WEBPACK_IMPORTED_MODULE_8__["default"], {
        id: "text.yes"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_0__["Radio"], {
        value: 2
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_utility_intlMessages__WEBPACK_IMPORTED_MODULE_8__["default"], {
        id: "text.no"
      }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(FormItem, _extends({}, _helpers_formItem__WEBPACK_IMPORTED_MODULE_9__["default"], {
        label: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", null, "Incident damages"),
        hasFeedback: true,
        style: {
          marginBottom: 10 + 'px'
        }
      }), getFieldDecorator('incident_damages_id', {
        rules: [{
          required: true,
          message: 'Incident damages is required'
        }]
      })( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_0__["Select"], {
        placeholder: "Select Incident damages",
        onChange: this.handleChange
      }, !Object(util__WEBPACK_IMPORTED_MODULE_3__["isNullOrUndefined"])(incidentDataInit.incidentDamages) ? incidentDataInit.incidentDamages.map(function (value, index) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Option, {
          key: index,
          value: value.id
        }, value.name);
      }) : ''))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(FormItem, _extends({}, _helpers_formItem__WEBPACK_IMPORTED_MODULE_9__["default"], {
        label: "Is SAS report"
      }), getFieldDecorator('is_SAS_report', {
        initialValue: 1,
        rules: [{
          required: true,
          message: 'Is SAS report is required'
        }]
      })( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(RadioGroup, {
        onChange: this.handleChange
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_0__["Radio"], {
        value: 1
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_utility_intlMessages__WEBPACK_IMPORTED_MODULE_8__["default"], {
        id: "text.yes"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_0__["Radio"], {
        value: 2
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_utility_intlMessages__WEBPACK_IMPORTED_MODULE_8__["default"], {
        id: "text.no"
      }))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_0__["Col"], {
        className: "ant-col-xl-12 ant-col-lg-24"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: "RightSideContent",
        style: {
          width: '100%'
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(FormItem, _extends({}, _helpers_formItem__WEBPACK_IMPORTED_MODULE_9__["default"], {
        label: "Reported on",
        hasFeedback: true,
        style: {
          marginBottom: 10 + 'px'
        }
      }), getFieldDecorator('reported_on', {
        initialValue: moment__WEBPACK_IMPORTED_MODULE_1___default()(date, _helpers_helperFunc__WEBPACK_IMPORTED_MODULE_10__["default"].dateFormat)
      })( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_0__["DatePicker"], {
        format: "YYYY/MM/DD HH:mm:ss",
        disabledDate: this.disabledDate,
        disabledTime: this.disabledDateTime,
        disabled: true,
        allowClear: false,
        onChange: this.handleChange,
        showTime: {
          defaultValue: moment__WEBPACK_IMPORTED_MODULE_1___default()(date, 'HH:mm:ss')
        }
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(FormItem, _extends({}, _helpers_formItem__WEBPACK_IMPORTED_MODULE_9__["default"], {
        label: "Incident datetime",
        hasFeedback: true,
        style: {
          marginBottom: 10 + 'px'
        }
      }), getFieldDecorator('incident_date', {
        rules: [{
          required: true,
          message: 'Incident datetime is required'
        }]
      })( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_0__["DatePicker"], {
        format: "YYYY/MM/DD HH:mm:ss",
        disabledDate: this.disabledDate,
        disabledTime: this.disabledDateTime // allowClear={false}
        ,
        onChange: this.onChangeDate,
        showTime: {
          defaultValue: moment__WEBPACK_IMPORTED_MODULE_1___default()(date, 'HH:mm:ss')
        },
        onOk: this.onOk
      }))), this.state.isImage === true ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(FormItem, _extends({}, _helpers_formItem__WEBPACK_IMPORTED_MODULE_9__["default"], {
        label: "Image",
        style: {
          marginBottom: 10 + 'px'
        }
      }), getFieldDecorator('image', {
        valuePropName: 'fileList',
        getValueFromEvent: normFile,
        rules: [{
          required: true,
          message: 'Image is required'
        }]
      })( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_0__["Upload"], {
        name: "image",
        customRequest: dummyRequest,
        listType: "picture",
        accept: "image/png, image/jpeg",
        beforeUpload: beforeUpload,
        onChange: this.handleChange
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_0__["Button"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_0__["Icon"], {
        type: "upload"
      }), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_utility_intlMessages__WEBPACK_IMPORTED_MODULE_8__["default"], {
        id: "form.upload"
      }))))) : '', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(FormItem, _extends({}, _helpers_formItem__WEBPACK_IMPORTED_MODULE_9__["default"], {
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
          // {
          //   min: 8,
          //   message: "Minimum 8 characters long"
          // }
        ]
      })( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(TextArea, {
        rows: 3,
        onChange: this.handleChange
      }))))))) : modalType === 'edit' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_0__["Form"], {
        className: "isoCardInfoForm FormData"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_0__["Row"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_0__["Col"], {
        className: "ant-col-xl-12 ant-col-lg-24"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: "LeftSideContent",
        style: {
          width: '100%'
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(FormItem, _extends({}, _helpers_formItem__WEBPACK_IMPORTED_MODULE_9__["default"], {
        label: "Is any injury"
      }), getFieldDecorator('is_any_injury', {
        initialValue: row && row.is_any_injury ? row.is_any_injury : null,
        rules: [{
          required: true,
          message: 'Is any injury is required'
        }]
      })( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(RadioGroup, {
        onChange: this.handleChange
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_0__["Radio"], {
        value: 1
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_utility_intlMessages__WEBPACK_IMPORTED_MODULE_8__["default"], {
        id: "text.yes"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_0__["Radio"], {
        value: 2
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_utility_intlMessages__WEBPACK_IMPORTED_MODULE_8__["default"], {
        id: "text.no"
      }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(FormItem, _extends({}, _helpers_formItem__WEBPACK_IMPORTED_MODULE_9__["default"], {
        label: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", null, "Incident Type"),
        hasFeedback: true,
        style: {
          marginBottom: 10 + 'px'
        }
      }), getFieldDecorator('incident_type_id', {
        initialValue: row.incident_type_id,
        rules: [{
          required: true,
          message: 'Incident type is required'
        }]
      })( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_0__["Select"], {
        placeholder: "Select incident type",
        onChange: this.handleChange
      }, !Object(util__WEBPACK_IMPORTED_MODULE_3__["isNullOrUndefined"])(incidentDataInit.incidentTypes) ? incidentDataInit.incidentTypes.map(function (value, index) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Option, {
          key: index,
          value: value.id
        }, value.name);
      }) : ''))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(FormItem, _extends({}, _helpers_formItem__WEBPACK_IMPORTED_MODULE_9__["default"], {
        label: "Is image"
      }), getFieldDecorator('is_image', {
        initialValue: row && row.is_image ? row.is_image : null,
        rules: [{
          required: true,
          message: 'Is image is required'
        }]
      })( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(RadioGroup, {
        onChange: this.handleChangeIsImage
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_0__["Radio"], {
        value: 1
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_utility_intlMessages__WEBPACK_IMPORTED_MODULE_8__["default"], {
        id: "text.yes"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_0__["Radio"], {
        value: 2
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_utility_intlMessages__WEBPACK_IMPORTED_MODULE_8__["default"], {
        id: "text.no"
      }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(FormItem, _extends({}, _helpers_formItem__WEBPACK_IMPORTED_MODULE_9__["default"], {
        label: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", null, "Incident damages"),
        hasFeedback: true,
        style: {
          marginBottom: 10 + 'px'
        }
      }), getFieldDecorator('incident_damages_id', {
        initialValue: row && row.incident_damages_id ? row.incident_damages_id : null,
        rules: [{
          required: true,
          message: 'Incident damages is required'
        }]
      })( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_0__["Select"], {
        placeholder: "Select Incident damages",
        onChange: this.handleChange
      }, !Object(util__WEBPACK_IMPORTED_MODULE_3__["isNullOrUndefined"])(incidentDataInit.incidentDamages) ? incidentDataInit.incidentDamages.map(function (value, index) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Option, {
          key: index,
          value: value.id
        }, value.name);
      }) : ''))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(FormItem, _extends({}, _helpers_formItem__WEBPACK_IMPORTED_MODULE_9__["default"], {
        label: "Is SAS report"
      }), getFieldDecorator('is_SAS_report', {
        initialValue: row && row.is_SAS_report ? row.is_SAS_report : null,
        rules: [{
          required: true,
          message: 'Is SAS report is required'
        }]
      })( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(RadioGroup, {
        onChange: this.handleChange
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_0__["Radio"], {
        value: 1
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_utility_intlMessages__WEBPACK_IMPORTED_MODULE_8__["default"], {
        id: "text.yes"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_0__["Radio"], {
        value: 2
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_utility_intlMessages__WEBPACK_IMPORTED_MODULE_8__["default"], {
        id: "text.no"
      }))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_0__["Col"], {
        className: "ant-col-xl-12 ant-col-lg-24"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: "RightSideContent",
        style: {
          width: '100%'
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(FormItem, _extends({}, _helpers_formItem__WEBPACK_IMPORTED_MODULE_9__["default"], {
        label: "Reported date",
        hasFeedback: true,
        style: {
          marginBottom: 10 + 'px'
        }
      }), getFieldDecorator('reported_on', {
        initialValue: row.reported_on ? moment__WEBPACK_IMPORTED_MODULE_1___default()(row.reported_on, 'YYYY/MM/DD HH:mm:ss') : null,
        rules: [{
          required: true,
          message: 'Reported date is required'
        }]
      })( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_0__["DatePicker"], {
        format: "YYYY/MM/DD HH:mm:ss",
        disabledDate: this.disabledDate,
        disabledTime: this.disabledDateTime,
        allowClear: false,
        onChange: this.handleChange,
        showTime: {
          defaultValue: moment__WEBPACK_IMPORTED_MODULE_1___default()(date, 'HH:mm:ss')
        }
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(FormItem, _extends({}, _helpers_formItem__WEBPACK_IMPORTED_MODULE_9__["default"], {
        label: "Incident date",
        hasFeedback: true,
        style: {
          marginBottom: 10 + 'px'
        }
      }), getFieldDecorator('incident_date', {
        initialValue: row.incident_date ? moment__WEBPACK_IMPORTED_MODULE_1___default()(row.incident_date, 'YYYY/MM/DD HH:mm:ss') : null,
        rules: [{
          required: true,
          message: 'Incident date is required'
        }]
      })( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_0__["DatePicker"], {
        format: "YYYY/MM/DD HH:mm:ss",
        disabledDate: this.disabledDate,
        disabledTime: this.disabledDateTime,
        allowClear: false,
        onChange: this.handleChange,
        showTime: {
          defaultValue: moment__WEBPACK_IMPORTED_MODULE_1___default()(date, 'HH:mm:ss')
        }
      }))), this.state.isImage ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(FormItem, _extends({}, _helpers_formItem__WEBPACK_IMPORTED_MODULE_9__["default"], {
        label: "Image",
        style: {
          marginBottom: 10 + 'px'
        }
      }), getFieldDecorator('image', {
        valuePropName: 'fileList',
        getValueFromEvent: normFile,
        initialValue: fileList.length > 0 ? fileList : null,
        rules: [{
          required: true,
          message: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_utility_intlMessages__WEBPACK_IMPORTED_MODULE_8__["default"], {
            id: "form.validate.image"
          })
        }]
      })( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_0__["Upload"], {
        name: "image",
        customRequest: dummyRequest,
        listType: "picture",
        accept: "image/png, image/jpeg",
        beforeUpload: beforeUpload,
        onChange: this.handleChangeImage
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_0__["Button"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_0__["Icon"], {
        type: "upload"
      }), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_utility_intlMessages__WEBPACK_IMPORTED_MODULE_8__["default"], {
        id: "form.upload"
      }))))) : '', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(FormItem, _extends({}, _helpers_formItem__WEBPACK_IMPORTED_MODULE_9__["default"], {
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
      })( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(TextArea, {
        rows: 3,
        onChange: this.handleChange
      }))), localStorage.getItem('type') === '1' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(FormItem, _extends({}, _helpers_formItem__WEBPACK_IMPORTED_MODULE_9__["default"], {
        label: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", null, "Incident Severity"),
        hasFeedback: true,
        style: {
          marginBottom: 10 + 'px'
        }
      }), getFieldDecorator('incident_severity_id', {
        initialValue: row.incident_severity_id,
        rules: [{
          required: true,
          message: 'Incident Severity is required'
        }]
      })( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_0__["Select"], {
        placeholder: "Select incident severity",
        onChange: this.handleChange
      }, !Object(util__WEBPACK_IMPORTED_MODULE_3__["isNullOrUndefined"])(incidentDataInit.incidentSeverities) ? incidentDataInit.incidentSeverities.map(function (value, index) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Option, {
          key: index,
          value: value.id
        }, value.name);
      }) : ''))) : '')))) : modalType === 'changeStatus' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_0__["Form"], {
        className: "FormData"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(FormItem, _extends({}, _helpers_formItem__WEBPACK_IMPORTED_MODULE_9__["default"], {
        label: "Status"
      }), getFieldDecorator('status', {
        initialValue: row ? row.status : ''
      })( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(RadioGroup, {
        onChange: this.handleChange
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_0__["Radio"], {
        value: 1
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_utility_intlMessages__WEBPACK_IMPORTED_MODULE_8__["default"], {
        id: "form.active"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_0__["Radio"], {
        value: 2
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_utility_intlMessages__WEBPACK_IMPORTED_MODULE_8__["default"], {
        id: "form.inactive"
      })))))) : modalType === 'view' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: "clearfix"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: "LeftSideContent"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: "detailField clearfix"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("label", {
        className: "label",
        style: {
          width: '33%'
        }
      }, "Is any injury:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: "contentDetail",
        style: {
          width: '67%'
        }
      }, row && row.is_any_injury === 1 ? 'Yes' : 'No')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: "detailField clearfix"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("label", {
        className: "label",
        style: {
          width: '33%'
        }
      }, "Is SAS Report:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: "contentDetail",
        style: {
          width: '67%'
        }
      }, row && row.is_SAS_report === 1 ? 'Yes' : 'No')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: "detailField clearfix"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("label", {
        className: "label",
        style: {
          width: '33%'
        }
      }, "Reported on"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: "contentDetail",
        style: {
          width: '67%'
        }
      }, row && row.reported_on ? moment__WEBPACK_IMPORTED_MODULE_1___default()(row.reported_on).format('MM/DD/YYYY HH:mm:ss') : '')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: "detailField clearfix"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("label", {
        className: "label",
        style: {
          width: '33%'
        }
      }, "Incident date"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: "contentDetail",
        style: {
          width: '67%'
        }
      }, row && row.incident_date ? moment__WEBPACK_IMPORTED_MODULE_1___default()(row.incident_date).format('MM/DD/YYYY HH:mm:ss') : '')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: "detailField clearfix"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("label", {
        className: "label",
        style: {
          width: '33%'
        }
      }, "Description:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: "contentDetail",
        style: {
          width: '67%'
        }
      }, row ? row.description : ''))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: "RightSideContent"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: "detailField clearfix"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("label", {
        className: "label",
        style: {
          width: '33%'
        }
      }, "Incident Damage:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: "contentDetail",
        style: {
          width: '67%'
        }
      }, row && row.incident_damage ? row.incident_damage.name : '')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: "detailField clearfix"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("label", {
        className: "label",
        style: {
          width: '33%'
        }
      }, "Incident type:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: "contentDetail",
        style: {
          width: '67%'
        }
      }, row && row.incident_type ? row.incident_type.name : '')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: "detailField clearfix"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("label", {
        className: "label",
        style: {
          width: '33%'
        }
      }, "Incident severity:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: "contentDetail",
        style: {
          width: '67%'
        }
      }, row && row.incident_severity ? row.incident_severity.name : '')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: "detailField clearfix"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("label", {
        className: "label",
        style: {
          width: '33%'
        }
      }, "Created at"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: "contentDetail",
        style: {
          width: '67%'
        }
      }, row ? moment__WEBPACK_IMPORTED_MODULE_1___default()(row.created_at).format('MM/DD/YYYY') : '')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: "detailField clearfix"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("label", {
        className: "label",
        style: {
          width: '33%'
        }
      }, "Updated at"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: "contentDetail",
        style: {
          width: '67%'
        }
      }, row ? moment__WEBPACK_IMPORTED_MODULE_1___default()(row.updated_at).format('MM/DD/YYYY') : ''))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: "FullSideContent"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: "contentDetail",
        style: {
          borderLeft: 'none',
          width: '100%'
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        style: {
          fontWeight: 'bold',
          padding: '0 7px'
        }
      }, "Images:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        style: {
          width: '100%'
        }
      }, images ? images.map(function (image, index) {
        return [/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("img", {
          key: index,
          style: {
            width: '45%',
            margin: '4px 4px'
          },
          alt: row.name,
          src: _settings__WEBPACK_IMPORTED_MODULE_11__["urlConfig"].imageUrl + image
        })];
      }) : '')))) : '')));
    }
  }]);

  return ModalFormAccount;
}(react__WEBPACK_IMPORTED_MODULE_2__["Component"]);

var WrappedModalFormAccount = antd__WEBPACK_IMPORTED_MODULE_0__["Form"].create()(ModalFormAccount);
/* harmony default export */ __webpack_exports__["default"] = (WrappedModalFormAccount);

/***/ }),

/***/ "./resources/js/isomophic/admin/containers/Incidents/index.js":
/*!********************************************************************!*\
  !*** ./resources/js/isomophic/admin/containers/Incidents/index.js ***!
  \********************************************************************/
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
/* harmony import */ var react_to_print__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-to-print */ "./node_modules/react-to-print/lib/index.js");
/* harmony import */ var react_to_print__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_to_print__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _common_data_style__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../common/data.style */ "./resources/js/isomophic/common/data.style.js");
/* harmony import */ var _components_utility_layoutWrapper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../components/utility/layoutWrapper */ "./resources/js/isomophic/components/utility/layoutWrapper.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _components_utility_box__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../components/utility/box */ "./resources/js/isomophic/components/utility/box.js");
/* harmony import */ var _components_Incidents__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../components/Incidents */ "./resources/js/isomophic/admin/components/Incidents/index.js");
/* harmony import */ var _redux_Incidents_actions__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../redux/Incidents/actions */ "./resources/js/isomophic/admin/redux/Incidents/actions.js");
/* harmony import */ var _settings_index__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../settings/index */ "./resources/js/isomophic/settings/index.js");
/* harmony import */ var _components_utility_intlMessages__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../components/utility/intlMessages */ "./resources/js/isomophic/components/utility/intlMessages.js");
/* harmony import */ var _helpers_helperFunc__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../helpers/helperFunc */ "./resources/js/isomophic/helpers/helperFunc.js");
/* harmony import */ var _redux_Socket_actions__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../redux/Socket/actions */ "./resources/js/isomophic/admin/redux/Socket/actions.js");
/* harmony import */ var _helpers_message__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./../../../helpers/message */ "./resources/js/isomophic/helpers/message.js");
/* harmony import */ var _helpers_flags__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../helpers/flags */ "./resources/js/isomophic/helpers/flags.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! util */ "./node_modules/node-libs-browser/node_modules/util/util.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var react_dom_test_utils__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! react-dom/test-utils */ "./node_modules/react-dom/test-utils.js");
/* harmony import */ var react_dom_test_utils__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(react_dom_test_utils__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var _print__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./print */ "./resources/js/isomophic/admin/containers/Incidents/print.js");
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






















var Option = antd__WEBPACK_IMPORTED_MODULE_9__["Select"].Option;
var RangePicker = antd__WEBPACK_IMPORTED_MODULE_9__["DatePicker"].RangePicker;

var Index = /*#__PURE__*/function (_BaseComponent) {
  _inherits(Index, _BaseComponent);

  var _super = _createSuper(Index);

  function Index(props) {
    var _this;

    _classCallCheck(this, Index);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "shouldComponentUpdate", function (nextProps, nextState) {
      if (_this.props.isSuccess === nextProps.isSuccess) {
        return true;
      } else {
        if (nextProps.isSuccess === true) {
          // const { isPrint } = this.props;
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
        incident_type_id: [],
        StartDate: moment__WEBPACK_IMPORTED_MODULE_6___default()(new Date()).subtract(1, "months").format("YYYY/MM/DD 00:00:00"),
        EndDate: moment__WEBPACK_IMPORTED_MODULE_6___default()(new Date()).format("YYYY/MM/DD 23:59:59"),
        page: 1,
        limit: _settings_index__WEBPACK_IMPORTED_MODULE_13__["dataConfig"].pageLimit,
        isPrint: 2
      });

      _this.reset();
    });

    _defineProperty(_assertThisInitialized(_this), "handleSearch", function () {
      var page = {
        incident_type_id: _this.state.incidentTypeId,
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
        incidentTypeId: [],
        startDate: moment__WEBPACK_IMPORTED_MODULE_6___default()(new Date()).subtract(1, "months").format("YYYY/MM/DD 00:00:00"),
        endDate: moment__WEBPACK_IMPORTED_MODULE_6___default()(new Date()).format("YYYY/MM/DD 23:59:59"),
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
        page: pageNumber,
        limit: pageSize,
        incident_type_id: _this.state.incidentTypeId,
        StartDate: _this.state.startDate,
        EndDate: _this.state.endDate,
        isPrint: 2
      };

      _this.setState(page, function () {
        _this.props.loadData(page);
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handlSelectChange", function (id) {
      _this.setState(_objectSpread({}, _this.state, {
        incidentTypeId: id
      }));
    });

    _defineProperty(_assertThisInitialized(_this), "printAll", function () {
      var loadData = _this.props.loadData;
      var page = {
        incident_type_id: _this.state.incidentTypeId,
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
      startDate: moment__WEBPACK_IMPORTED_MODULE_6___default()(new Date()).subtract(1, "months").format("YYYY/MM/DD 00:00:00"),
      endDate: moment__WEBPACK_IMPORTED_MODULE_6___default()(new Date()).format("YYYY/MM/DD 23:59:59")
    };
    return _this;
  }

  _createClass(Index, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      var isPrint = this.props.isPrint;
      var page = {
        StartDate: this.state.startDate,
        EndDate: this.state.endDate,
        incident_type_id: this.state.incidentTypeId,
        page: this.state.page,
        limit: _settings_index__WEBPACK_IMPORTED_MODULE_13__["dataConfig"].pageLimit,
        isPrint: isPrint
      };
      this.props.loadData(page); //quybv90: Added 2/3/2020

      this.socketIO = Object(_helpers_message__WEBPACK_IMPORTED_MODULE_17__["connectSocket"])(this.props.socketIO);
      Object(_helpers_message__WEBPACK_IMPORTED_MODULE_17__["listenSocket"])(this.socketIO, _helpers_flags__WEBPACK_IMPORTED_MODULE_18__["default"].INCIDENT, function (flag, data) {
        var newPage = {
          incident_type_id: _this2.state.incidentTypeId,
          StartDate: _this2.state.startDate,
          EndDate: _this2.state.endDate,
          page: _this2.state.page,
          limit: _settings_index__WEBPACK_IMPORTED_MODULE_13__["dataConfig"].pageLimit,
          isPrint: isPrint
        };

        _this2.props.loadData(newPage);
      });

      if (this.props.socketIO === null) {
        this.props.setSocket(this.socketIO);
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (this.props.printer === true && prevProps.modalType === this.props.modalType && this.props.printer !== prevProps.printer) {
        var node = document.querySelector(".btPrint");
        react_dom_test_utils__WEBPACK_IMPORTED_MODULE_20___default.a.Simulate.click(node);
      }

      if (this.props.printerAll === true && this.props.printerAll !== prevProps.printerAll) {
        var _node = document.querySelector(".btPrintAll");

        react_dom_test_utils__WEBPACK_IMPORTED_MODULE_20___default.a.Simulate.click(_node);
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

          if (action === "view") {
            _this3.props.updateStatusRead(row.id);
          }
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
          incidentDataInit = _this$props.incidentDataInit;
      var rowStyle = _settings_basicStyle__WEBPACK_IMPORTED_MODULE_3__["default"].rowStyle,
          colStyle = _settings_basicStyle__WEBPACK_IMPORTED_MODULE_3__["default"].colStyle,
          gutter = _settings_basicStyle__WEBPACK_IMPORTED_MODULE_3__["default"].gutter;
      var _this$state = this.state,
          modalActive = _this$state.modalActive,
          incidentTypeId = _this$state.incidentTypeId,
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
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
            style: {
              color: row && row.status === 2 ? "#ff3838" : "",
              fontWeight: row && row.status === 2 ? "bold" : ""
            }
          }, row && row.admin ? row.admin.full_name : "");
        }
      }, {
        title: "Reported on",
        dataIndex: "reported_on",
        className: "noWrapCell",
        key: "reported_on",
        width: 120,
        sorter: function sorter(a, b) {
          if (a.reported_on < b.reported_on) return -1;
          if (a.reported_on > b.reported_on) return 1;
          return 0;
        },
        render: function render(text, row) {
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, row ? row.reported_on : "");
        }
      }, {
        title: "Incident date",
        dataIndex: "incident_date",
        className: "noWrapCell",
        key: "incident_date",
        width: 120,
        sorter: function sorter(a, b) {
          if (a.incident_date < b.incident_date) return -1;
          if (a.incident_date > b.incident_date) return 1;
          return 0;
        },
        render: function render(text, row) {
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, row ? row.incident_date : "");
        }
      }, {
        title: "Any injury",
        dataIndex: "is_any_injury",
        className: "noWrapCell",
        key: "is_any_injury",
        width: 90,
        sorter: function sorter(a, b) {
          if (a.is_any_injury < b.is_any_injury) return -1;
          if (a.is_any_injury > b.is_any_injury) return 1;
          return 0;
        },
        render: function render(text, row) {
          var className;

          if (row.is_any_injury === _helpers_helperFunc__WEBPACK_IMPORTED_MODULE_15__["default"].yesNo.Yes) {
            className = "publish";
          } else {
            className = "private";
          }

          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_control_style__WEBPACK_IMPORTED_MODULE_4__["StatusTag"], {
            className: className
          }, row && row.is_any_injury === _helpers_helperFunc__WEBPACK_IMPORTED_MODULE_15__["default"].yesNo.Yes ? _helpers_helperFunc__WEBPACK_IMPORTED_MODULE_15__["default"].yesNo.properties[_helpers_helperFunc__WEBPACK_IMPORTED_MODULE_15__["default"].yesNo.Yes] : _helpers_helperFunc__WEBPACK_IMPORTED_MODULE_15__["default"].yesNo.properties[_helpers_helperFunc__WEBPACK_IMPORTED_MODULE_15__["default"].yesNo.No]);
        }
      }, {
        title: "SAS Report",
        dataIndex: "is_SAS_report",
        className: "noWrapCell",
        key: "is_SAS_report",
        width: 90,
        sorter: function sorter(a, b) {
          if (a.is_SAS_report < b.is_SAS_report) return -1;
          if (a.is_SAS_report > b.is_SAS_report) return 1;
          return 0;
        },
        render: function render(text, row) {
          var className;

          if (row.is_SAS_report === _helpers_helperFunc__WEBPACK_IMPORTED_MODULE_15__["default"].yesNo.Yes) {
            className = "publish";
          } else {
            className = "private";
          }

          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_control_style__WEBPACK_IMPORTED_MODULE_4__["StatusTag"], {
            className: className
          }, row && row.is_SAS_report === _helpers_helperFunc__WEBPACK_IMPORTED_MODULE_15__["default"].yesNo.Yes ? _helpers_helperFunc__WEBPACK_IMPORTED_MODULE_15__["default"].yesNo.properties[_helpers_helperFunc__WEBPACK_IMPORTED_MODULE_15__["default"].yesNo.Yes] : _helpers_helperFunc__WEBPACK_IMPORTED_MODULE_15__["default"].yesNo.properties[_helpers_helperFunc__WEBPACK_IMPORTED_MODULE_15__["default"].yesNo.No]);
        }
      }, {
        title: "Type",
        dataIndex: "incident_type",
        className: "noWrapCell",
        key: "incident_type",
        width: 150,
        sorter: function sorter(a, b) {
          if (a.incident_type_id < b.incident_type_id) return -1;
          if (a.incident_type_id > b.incident_type_id) return 1;
          return 0;
        },
        render: function render(text, row) {
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
            style: {
              color: row && row.status === 2 ? "#ff3838" : "",
              fontWeight: row && row.status === 2 ? "bold" : ""
            }
          }, row && row.incident_type ? row.incident_type.name : "");
        }
      }, {
        title: "Severity",
        dataIndex: "incident_severity",
        className: "noWrapCell",
        key: "incident_severity",
        width: 120,
        sorter: function sorter(a, b) {
          if (a.incident_severity_id < b.incident_severity_id) return -1;
          if (a.incident_severity_id > b.incident_severity_id) return 1;
          return 0;
        },
        render: function render(text, row) {
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
            style: {
              color: row && row.status === 2 ? "#ff3838" : "",
              fontWeight: row && row.status === 2 ? "bold" : ""
            }
          }, row && row.incident_severity ? row.incident_severity.name : "");
        }
      }, {
        title: "Description",
        dataIndex: "description",
        key: "description",
        sorter: function sorter(a, b) {
          if (a.description < b.description) return -1;
          if (a.description > b.description) return 1;
          return 0;
        },
        render: function render(text, row) {
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            style: {
              whiteSpace: "pre-wrap",
              wordWrap: "break-word",
              width: 200,
              color: row && row.status === 2 ? "#ff3838" : "",
              fontWeight: row && row.status === 2 ? "bold" : ""
            }
          }, row ? row.description : "");
        }
      }, {
        title: "",
        key: "action",
        // fixed: 'right',
        className: "noWrapCell",
        render: function render(text, row) {
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_control_style__WEBPACK_IMPORTED_MODULE_4__["ActionWrapper"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_9__["Tooltip"], {
            title: "View Info"
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
            className: "deleteBtn aSimple",
            onClick: _this4.handleModal.bind(_this4, "view", row)
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
            className: "ion-android-document"
          }))), localStorage.getItem("user_name") === "admin" ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
            onClick: _this4.handleModal.bind(_this4, "edit", row),
            className: "aSimple",
            style: {
              cursor: "pointer"
            }
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_9__["Icon"], {
            type: "form",
            theme: "outlined"
          })), localStorage.getItem("user_name") === "admin" || JSON.parse(localStorage.getItem("role_detail")).some(function (role) {
            return role.address === "105";
          }) ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_9__["Popconfirm"], {
            title: "Are you sure delete this profile?.",
            okText: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_utility_intlMessages__WEBPACK_IMPORTED_MODULE_14__["default"], {
              id: "button.delete"
            }),
            cancelText: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_utility_intlMessages__WEBPACK_IMPORTED_MODULE_14__["default"], {
              id: "button.cancel"
            }),
            placement: "topRight",
            onConfirm: _this4.handleSubmit.bind(_this4, "delete", row)
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
            className: "deleteBtn aSimple",
            style: {
              cursor: "pointer"
            }
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
            className: "ion-android-delete deleteRow"
          }))) : "") : "");
        }
      }];
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_data_style__WEBPACK_IMPORTED_MODULE_7__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_utility_layoutWrapper__WEBPACK_IMPORTED_MODULE_8__["default"], {
        style: {
          padding: "0px"
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
        className: "PageHeader"
      }, " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_utility_intlMessages__WEBPACK_IMPORTED_MODULE_14__["default"], {
        id: "sidebar.incidents"
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
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_control_style__WEBPACK_IMPORTED_MODULE_4__["ComponentTitle"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_9__["Select"], {
        placeholder: "Select Type",
        style: {
          width: "140px"
        },
        onChange: this.handlSelectChange,
        value: incidentTypeId
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Option, {
        value: ""
      }, "All"), incidentDataInit && !Object(util__WEBPACK_IMPORTED_MODULE_19__["isNullOrUndefined"])(incidentDataInit.incidentTypes) ? incidentDataInit.incidentTypes.map(function (value, index) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Option, {
          key: index,
          value: value.id
        }, value.name);
      }) : ""), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(RangePicker, {
        format: "YYYY-MM-DD",
        placeholder: ["Start date", "End date"],
        value: startDate && endDate ? [moment__WEBPACK_IMPORTED_MODULE_6___default()(startDate, "YYYY-MM-DD"), moment__WEBPACK_IMPORTED_MODULE_6___default()(endDate, "YYYY-MM-DD")] : "",
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
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_to_print__WEBPACK_IMPORTED_MODULE_5___default.a, {
        key: "print",
        trigger: function trigger() {
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_9__["Button"], {
            style: {
              display: "none"
            },
            className: "btnRefresh btWizard btPrintAll",
            title: "Print",
            TableWrapper: true,
            onClick: _this4.handleSearch
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
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_print__WEBPACK_IMPORTED_MODULE_21__["default"], {
        rows: rows,
        ref: function ref(el) {
          return _this4.componentPrintRef = el;
        }
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_control_style__WEBPACK_IMPORTED_MODULE_4__["ButtonHolders"], {
        className: "group_bt_head"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        onClick: this.handleRefresh,
        className: "btnRefresh btWizard",
        style: {
          cursor: "pointer"
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_9__["Icon"], {
        type: "sync",
        theme: "outlined"
      }), "Refresh"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        onClick: this.handleModal.bind(this, "insert", null),
        style: {
          cursor: "pointer"
        },
        className: "btnAdd btWizard"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_9__["Icon"], {
        type: "plus-square",
        theme: "outlined"
      }), "Add new"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_control_style__WEBPACK_IMPORTED_MODULE_4__["TableWrapper"], {
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
      }), row ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Incidents__WEBPACK_IMPORTED_MODULE_11__["default"], {
        modalActive: modalActive,
        modalType: this.state.modalType,
        row: row,
        incidentDataInit: incidentDataInit,
        handleCancel: this.handleCancel,
        handleSubmit: this.handleSubmit,
        handleClose: this.handleCancel,
        disable: disable
      }) : "")))));
    }
  }]);

  return Index;
}(_containers_base__WEBPACK_IMPORTED_MODULE_2__["default"]); //quybv90: modified 2/3/2029


/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(function (state) {
  return _objectSpread({}, state.IncidentsReducer, {}, state.SocketReducer);
}, _objectSpread({}, _redux_Incidents_actions__WEBPACK_IMPORTED_MODULE_12__["default"], {}, _redux_Socket_actions__WEBPACK_IMPORTED_MODULE_16__["default"]))(Index));

/***/ }),

/***/ "./resources/js/isomophic/admin/containers/Incidents/print.js":
/*!********************************************************************!*\
  !*** ./resources/js/isomophic/admin/containers/Incidents/print.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _common_control_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../common/control.style */ "./resources/js/isomophic/common/control.style.js");
/* harmony import */ var _helpers_helperFunc__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../helpers/helperFunc */ "./resources/js/isomophic/helpers/helperFunc.js");
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

      var columns = [// {
      //     title: 'STT',
      //     dataIndex: 'id',
      //     key: 'id',
      //     align: 'center',
      //     width: 30,
      //     className: 'noWrapCell',
      //     render: (text, row, index) => {
      //         return <span>{index + 1}</span>
      //     }
      // },
      {
        title: "User",
        dataIndex: "created_by",
        className: "noWrapCell",
        key: "created_by",
        render: function render(text, row) {
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, row && row.admin ? row.admin.full_name : "");
        }
      }, {
        title: "Reported on",
        dataIndex: "reported_on",
        className: "noWrapCell",
        key: "reported_on",
        render: function render(text, row) {
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, row ? row.reported_on : "");
        }
      }, {
        title: "Incident date",
        dataIndex: "incident_date",
        className: "noWrapCell",
        key: "incident_date",
        render: function render(text, row) {
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, row ? row.incident_date : "");
        }
      }, {
        title: "Any injury",
        dataIndex: "is_any_injury",
        className: "noWrapCell",
        key: "is_any_injury",
        render: function render(text, row) {
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, row && row.is_any_injury === _helpers_helperFunc__WEBPACK_IMPORTED_MODULE_2__["default"].yesNo.Yes ? _helpers_helperFunc__WEBPACK_IMPORTED_MODULE_2__["default"].yesNo.properties[_helpers_helperFunc__WEBPACK_IMPORTED_MODULE_2__["default"].yesNo.Yes] : _helpers_helperFunc__WEBPACK_IMPORTED_MODULE_2__["default"].yesNo.properties[_helpers_helperFunc__WEBPACK_IMPORTED_MODULE_2__["default"].yesNo.No]);
        }
      }, {
        title: "SAS Report",
        dataIndex: "is_SAS_report",
        className: "noWrapCell",
        key: "is_SAS_report",
        width: 90,
        render: function render(text, row) {
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, row && row.is_SAS_report === _helpers_helperFunc__WEBPACK_IMPORTED_MODULE_2__["default"].yesNo.Yes ? _helpers_helperFunc__WEBPACK_IMPORTED_MODULE_2__["default"].yesNo.properties[_helpers_helperFunc__WEBPACK_IMPORTED_MODULE_2__["default"].yesNo.Yes] : _helpers_helperFunc__WEBPACK_IMPORTED_MODULE_2__["default"].yesNo.properties[_helpers_helperFunc__WEBPACK_IMPORTED_MODULE_2__["default"].yesNo.No]);
        }
      }, {
        title: "Type",
        dataIndex: "incident_type",
        className: "noWrapCell",
        key: "incident_type",
        render: function render(text, row) {
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, row && row.incident_type ? row.incident_type.name : "");
        }
      }, {
        title: "Severity",
        dataIndex: "incident_severity",
        className: "noWrapCell",
        key: "incident_severity",
        render: function render(text, row) {
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, row && row.incident_severity ? row.incident_severity.name : "");
        }
      }, {
        title: "Description",
        dataIndex: "description",
        key: "description",
        render: function render(text, row) {
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, row ? row.description : "");
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