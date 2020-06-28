(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[30],{

/***/ "./resources/js/isomophic/admin/components/Bill_Import/index.js":
/*!**********************************************************************!*\
  !*** ./resources/js/isomophic/admin/components/Bill_Import/index.js ***!
  \**********************************************************************/
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
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! util */ "./node_modules/node-libs-browser/node_modules/util/util.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _common_data_style__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../common/data.style */ "./resources/js/isomophic/common/data.style.js");
/* harmony import */ var _common_styleControl__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../common/styleControl */ "./resources/js/isomophic/common/styleControl.js");
/* harmony import */ var _components_utility_intlMessages__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../components/utility/intlMessages */ "./resources/js/isomophic/components/utility/intlMessages.js");
/* harmony import */ var _helpers_formItem__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../helpers/formItem */ "./resources/js/isomophic/helpers/formItem.js");
/* harmony import */ var _helpers_helperFunc__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../helpers/helperFunc */ "./resources/js/isomophic/helpers/helperFunc.js");
/* harmony import */ var _settings_index__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../settings/index */ "./resources/js/isomophic/settings/index.js");
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
    Method Name: Incident Damages
    Description: Add, update, delete,  search, refresh
    Author: Nam Nam
    Last Modified Author: Nam Nam
    Created Date: 20/02/2020
    Modified Date: 2/03/2020
*/












var dummyRequest = _helpers_helperFunc__WEBPACK_IMPORTED_MODULE_11__["default"].dummyRequest,
    beforeUpload = _helpers_helperFunc__WEBPACK_IMPORTED_MODULE_11__["default"].beforeUpload,
    getBase64 = _helpers_helperFunc__WEBPACK_IMPORTED_MODULE_11__["default"].getBase64;

var WDModal = Object(_common_modal_style__WEBPACK_IMPORTED_MODULE_1__["default"])(_components_feedback_modal__WEBPACK_IMPORTED_MODULE_3__["default"]);
var Modal = Object(_settings_withDirection__WEBPACK_IMPORTED_MODULE_2__["default"])(WDModal);
var FormItem = antd__WEBPACK_IMPORTED_MODULE_6__["Form"].Item;
var RadioGroup = antd__WEBPACK_IMPORTED_MODULE_6__["Radio"].Group;
var Option = antd__WEBPACK_IMPORTED_MODULE_6__["Select"].Option;
var TextArea = antd__WEBPACK_IMPORTED_MODULE_6__["Input"].TextArea; // const { InputNumber } = Input;

var ModalFormAccount = /*#__PURE__*/function (_Component) {
  _inherits(ModalFormAccount, _Component);

  var _super = _createSuper(ModalFormAccount);

  function ModalFormAccount(props) {
    var _this;

    _classCallCheck(this, ModalFormAccount);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "handleChange", function () {
      _this.setState({
        imagesStr: [],
        changed: true
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleChangeImage", function (e) {
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

      _this.setState({
        changed: true
      });
    });

    _this.state = {
      base64: null,
      changed: false,
      isLoadding: false,
      currAuthority: [],
      imagesStr: [],
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
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          modalActive = _this$props.modalActive,
          modalType = _this$props.modalType,
          row = _this$props.row,
          handleCancel = _this$props.handleCancel,
          handleSubmit = _this$props.handleSubmit,
          categories = _this$props.categories;
      var getFieldDecorator = this.props.form.getFieldDecorator;

      var listImage = _toConsumableArray(new Set(this.state.imagesStr)).join('#####');

      var fileList = [];
      var date = new Date();
      var images = [];

      if (row.images) {
        images = row.images.split('#####').slice(0, row.images.split('#####').length);
        images.forEach(function (image, index) {
          return fileList.push({
            uid: index,
            name: '',
            status: 'done',
            url: image,
            thumbUrl: _settings_index__WEBPACK_IMPORTED_MODULE_12__["urlConfig"].imageUrl + 'img/bill/' + image
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
              if (modalType === 'insert') {
                (function () {
                  row.idBill = values.idBill; // row.amount = values.amount;
                  // row.totalmoney = values.totalmoney;

                  var baseImage = '';
                  var imagesStr = '';

                  if (values.image) {
                    var _loop = function _loop(i) {
                      // eslint-disable-next-line
                      getBase64(values.image[i].originFileObj, function (result) {
                        baseImage = result;
                        var str = baseImage.replace(/^data:image\/[a-z]+;base64,/, '');

                        if (i !== 0) {
                          imagesStr += '#####' + str;
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
                    // row.amount = values.amount;
                    // row.totalmoney = values.totalmoney;
                    handleSubmit(modalType, row);
                  }
                })();
              } else if (modalType === 'edit') {
                if (values.image) {
                  listImage = values.image ? values.image.reduce(function (total, num) {
                    if (num.url) {
                      return total + num.url + '#####';
                    } else {
                      return total + '';
                    }
                  }, '') + listImage : '';
                  row.images = listImage;
                }

                handleSubmit(modalType, row);
              } else if (modalType === 'addProduct') {
                row.idcategories = values.idcategories;
                row.mass = values.mass;
                row.inputprice = values.inputprice;
                row.outputprice = values.outputprice;
                row.intomoney = values.inputprice * values.mass;
                row.dateUse = values.dateUse;
                row.idbill_im = row.id;
                handleSubmit(modalType, row);
              }
            } // this.props.form.resetFields();
            // handleSubmit(modalType, row);

          }
        });
      };

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Modal, {
        title: modalType === 'changeStatus' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_utility_intlMessages__WEBPACK_IMPORTED_MODULE_9__["default"], {
          id: "form.titleChangeStatus"
        }) : modalType === 'insert' ? 'Thêm mới' : modalType === 'edit' ? 'Sửa' : modalType === 'addProduct' ? 'Thêm sản phẩm' : 'Chi tiết',
        className: "FormModal",
        style: {
          top: 50
        },
        width: window.innerWidth > 1100 ? modalType === 'ChangeStatus' ? 30 + '%' : 40 + '%' : '100%',
        visible: modalActive,
        onCancel: handleCancel,
        cancelText: modalType === 'view' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_utility_intlMessages__WEBPACK_IMPORTED_MODULE_9__["default"], {
          id: "button.close"
        }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_utility_intlMessages__WEBPACK_IMPORTED_MODULE_9__["default"], {
          id: "button.cancel"
        }),
        onOk: saveButton,
        okText: "Save",
        footer: modalType === 'changeStatus' || modalType === _helpers_helperFunc__WEBPACK_IMPORTED_MODULE_11__["default"].modeType.Insert || modalType === 'update' || modalType === 'edit' || modalType === 'addProduct' ? [/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_6__["Button"], {
          key: "cancel",
          className: "cancelType",
          onClick: handleCancel,
          style: Object(_common_styleControl__WEBPACK_IMPORTED_MODULE_8__["default"])(3, modalType)
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_utility_intlMessages__WEBPACK_IMPORTED_MODULE_9__["default"], {
          id: "button.close"
        })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_6__["Button"], {
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
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_utility_intlMessages__WEBPACK_IMPORTED_MODULE_9__["default"], {
          id: "button.save"
        }))] : [/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_6__["Button"], {
          key: "cancel",
          className: "cancelType",
          onClick: handleCancel,
          style: Object(_common_styleControl__WEBPACK_IMPORTED_MODULE_8__["default"])(3, modalType)
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_utility_intlMessages__WEBPACK_IMPORTED_MODULE_9__["default"], {
          id: "button.close"
        }))]
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_data_style__WEBPACK_IMPORTED_MODULE_7__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "clearfix"
      }, modalType === _helpers_helperFunc__WEBPACK_IMPORTED_MODULE_11__["default"].modeType.Insert ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_6__["Form"], {
        className: "isoCardInfoForm FormData"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_6__["Row"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_6__["Col"], {
        className: "ant-col-xl-24 ant-col-lg-24"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FormItem, _extends({}, _helpers_formItem__WEBPACK_IMPORTED_MODULE_10__["default"], {
        label: "M\xE3 ho\xE1 \u0111\u01A1n",
        hasFeedback: true
      }), getFieldDecorator('idBill', {
        rules: [{
          required: true,
          message: 'Mã hoá đơn là bắt buộc'
        }]
      })( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_6__["Input"], {
        onChange: this.handleChange
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FormItem, _extends({}, _helpers_formItem__WEBPACK_IMPORTED_MODULE_10__["default"], {
        label: "\u1EA2nh",
        style: {
          marginBottom: 10 + 'px'
        }
      }), getFieldDecorator('image', {
        valuePropName: 'fileList',
        getValueFromEvent: normFile,
        rules: [{
          required: true,
          message: 'Ảnh là bắt buộc'
        }]
      })( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_6__["Upload"], {
        name: "image",
        customRequest: dummyRequest,
        listType: "picture",
        accept: "image/png, image/jpeg",
        beforeUpload: beforeUpload,
        onChange: this.handleChange //className= "upload-list-inline"

      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_6__["Button"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_6__["Icon"], {
        type: "upload"
      }), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_utility_intlMessages__WEBPACK_IMPORTED_MODULE_9__["default"], {
        id: "form.upload"
      })))))))) : modalType === 'addProduct' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_6__["Form"], {
        className: "isoCardInfoForm FormData"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_6__["Row"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_6__["Col"], {
        className: "ant-col-xl-24 ant-col-lg-24"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FormItem, _extends({}, _helpers_formItem__WEBPACK_IMPORTED_MODULE_10__["default"], {
        label: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "S\u1EA3n ph\u1EA9m"),
        hasFeedback: true,
        style: {
          marginBottom: 10 + 'px'
        }
      }), getFieldDecorator('idcategories', {
        rules: [{
          required: true,
          message: 'Sản phẩm là bắt buộc'
        }]
      })( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_6__["Select"], {
        showSearch: true,
        placeholder: "Ch\u1ECDn s\u1EA3n ph\u1EA9m",
        onChange: this.handleChange,
        filterOption: function filterOption(input, option) {
          return option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0;
        }
      }, !Object(util__WEBPACK_IMPORTED_MODULE_5__["isNullOrUndefined"])(categories) ? categories.map(function (value, index) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Option, {
          key: index,
          value: value.id
        }, value.name);
      }) : ''))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FormItem, _extends({}, _helpers_formItem__WEBPACK_IMPORTED_MODULE_10__["default"], {
        label: "Kh\u1ED1i l\u01B0\u1EE3ng",
        hasFeedback: true
      }), getFieldDecorator('mass', {
        rules: [{
          required: true,
          message: 'Khối lượng là bắt buộc'
        }]
      })( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_6__["InputNumber"], {
        style: {
          width: '100%'
        },
        min: 1,
        onChange: this.handleChange
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FormItem, _extends({}, _helpers_formItem__WEBPACK_IMPORTED_MODULE_10__["default"], {
        label: "Gi\xE1 nh\u1EADp",
        hasFeedback: true
      }), getFieldDecorator('inputprice', {
        rules: [{
          required: true,
          message: 'Giá nhập là bắt buộc'
        }]
      })( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_6__["InputNumber"], {
        style: {
          width: '100%'
        },
        min: 1,
        onChange: this.handleChange
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FormItem, _extends({}, _helpers_formItem__WEBPACK_IMPORTED_MODULE_10__["default"], {
        label: "Gi\xE1 b\xE1n",
        hasFeedback: true
      }), getFieldDecorator('outputprice', {
        rules: [{
          required: true,
          message: 'Giá bán là bắt buộc'
        }]
      })( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_6__["InputNumber"], {
        style: {
          width: '100%'
        },
        min: 1,
        onChange: this.handleChange
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FormItem, _extends({}, _helpers_formItem__WEBPACK_IMPORTED_MODULE_10__["default"], {
        label: "S\u1ED1 ng\xE0y s\u1EED d\u1EE5ng",
        hasFeedback: true
      }), getFieldDecorator('dateUse', {
        rules: [{
          required: true,
          message: 'Bắt buộc'
        }]
      })( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_6__["InputNumber"], {
        style: {
          width: '100%'
        },
        min: 1,
        onChange: this.handleChange
      })))))) : modalType === 'changeStatus' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_6__["Form"], {
        className: "FormData"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FormItem, _extends({}, _helpers_formItem__WEBPACK_IMPORTED_MODULE_10__["default"], {
        label: "Status"
      }), getFieldDecorator('status', {
        initialValue: row ? row.status : ''
      })( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(RadioGroup, {
        onChange: this.handleChange
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_6__["Radio"], {
        value: 1
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_utility_intlMessages__WEBPACK_IMPORTED_MODULE_9__["default"], {
        id: "form.active"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_6__["Radio"], {
        value: 2
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_utility_intlMessages__WEBPACK_IMPORTED_MODULE_9__["default"], {
        id: "form.inactive"
      })))))) : modalType === 'view' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "clearfix"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "detailField clearfix"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        className: "label"
      }, "Full name:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "contentDetail"
      }, row && row.userdetail ? row.userdetail.full_name : '')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
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
      }, row && row.userdetail ? row.userdetail.gender === 1 ? 'Male' : row.userdetail.gender === 2 ? 'Female' : '' : '')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "detailField clearfix"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        className: "label detailFieldFullBorder"
      }, "Address"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "contentDetail"
      }, row && row.userdetail ? row.userdetail.address : '')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "detailField clearfix"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        className: "label detailFieldFullBorder"
      }, "Birth day"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "contentDetail"
      }, row && row.userdetail ? row.userdetail.birthday : '')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
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
      }, row ? moment__WEBPACK_IMPORTED_MODULE_4___default()(row.updated_at).format('MM/DD/YYYY') : ''))) : '')));
    }
  }]);

  return ModalFormAccount;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

var WrappedModalFormAccount = antd__WEBPACK_IMPORTED_MODULE_6__["Form"].create()(ModalFormAccount);
/* harmony default export */ __webpack_exports__["default"] = (WrappedModalFormAccount);

/***/ }),

/***/ "./resources/js/isomophic/admin/containers/Bill_Import/index.js":
/*!**********************************************************************!*\
  !*** ./resources/js/isomophic/admin/containers/Bill_Import/index.js ***!
  \**********************************************************************/
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
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _components_utility_box__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../components/utility/box */ "./resources/js/isomophic/components/utility/box.js");
/* harmony import */ var _components_Bill_Import__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/Bill_Import */ "./resources/js/isomophic/admin/components/Bill_Import/index.js");
/* harmony import */ var _redux_Bill_Import_actions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../redux/Bill_Import/actions */ "./resources/js/isomophic/admin/redux/Bill_Import/actions.js");
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















var convertNumber = _helpers_helperFunc__WEBPACK_IMPORTED_MODULE_14__["default"].convertNumber;

var IncidentDamages = /*#__PURE__*/function (_BaseComponent) {
  _inherits(IncidentDamages, _BaseComponent);

  var _super = _createSuper(IncidentDamages);

  function IncidentDamages() {
    var _this;

    _classCallCheck(this, IncidentDamages);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

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
          } // this.updateStatusAdd(false);


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

    _defineProperty(_assertThisInitialized(_this), "handleRefresh", function () {
      var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

      _this.props.loadData({
        name: '',
        page: 1,
        limit: _settings_index__WEBPACK_IMPORTED_MODULE_12__["dataConfig"].pageLimit
      });

      _this.reset();
    });

    _defineProperty(_assertThisInitialized(_this), "handleSearch", function () {
      var page = {
        name: _this.state.search,
        page: 1,
        limit: _settings_index__WEBPACK_IMPORTED_MODULE_12__["dataConfig"].pageLimit
      };

      _this.setState(page, function () {
        _this.props.loadData(page);
      });
    });

    _defineProperty(_assertThisInitialized(_this), "reset", function () {
      _this.setState({
        search: '',
        page: 1
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleSubmit", function (actionName, obj) {
      _this.setState({
        loading: true
      });

      _this.props.saveInto(obj, actionName);
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

    return _this;
  }

  _createClass(IncidentDamages, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var page = {
        name: this.state.search,
        page: this.state.page,
        limit: _settings_index__WEBPACK_IMPORTED_MODULE_12__["dataConfig"].pageLimit
      };
      this.props.loadData(page);
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
          disable = _this$props.disable,
          categories = _this$props.categories;
      var rowStyle = _settings_basicStyle__WEBPACK_IMPORTED_MODULE_3__["default"].rowStyle,
          colStyle = _settings_basicStyle__WEBPACK_IMPORTED_MODULE_3__["default"].colStyle,
          gutter = _settings_basicStyle__WEBPACK_IMPORTED_MODULE_3__["default"].gutter;
      var modalActive = this.state.modalActive;
      var dataSource = [];
      var date = new Date();

      if (typeof rows !== 'undefined' && rows !== null) {
        Object.keys(rows).map(function (row, index) {
          return dataSource.push(_objectSpread({}, rows[row], {
            key: row
          }));
        });
      } // group header content of table


      var expandedRowRender = function expandedRowRender(row) {
        var columns = [{
          title: 'Tên',
          dataIndex: 'name',
          key: 'name',
          sorter: function sorter(a, b) {
            if (a.name < b.name) return -1;
            if (a.name > b.name) return 1;
            return 0;
          }
        }, {
          title: 'Khối lượng',
          dataIndex: 'mass',
          key: 'mass',
          sorter: function sorter(a, b) {
            if (a.mass < b.mass) return -1;
            if (a.mass > b.mass) return 1;
            return 0;
          },
          render: function render(text, row) {
            return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, row.mass, " kg");
          }
        }, {
          title: 'Giá nhập',
          dataIndex: 'inputprice',
          key: 'inputprice',
          sorter: function sorter(a, b) {
            if (a.inputprice < b.inputprice) return -1;
            if (a.inputprice > b.inputprice) return 1;
            return 0;
          },
          render: function render(text, row) {
            return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, convertNumber(row.inputprice), " \u20AB");
          }
        }, {
          title: 'Giá bán',
          dataIndex: 'outputprice',
          key: 'outputprice',
          sorter: function sorter(a, b) {
            if (a.outputprice < b.outputprice) return -1;
            if (a.outputprice > b.outputprice) return 1;
            return 0;
          },
          render: function render(text, row) {
            return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, convertNumber(row.outputprice), " \u20AB");
          }
        }, {
          title: 'Tổng tiền',
          dataIndex: 'intomoney',
          key: 'intomoney',
          sorter: function sorter(a, b) {
            if (a.intomoney < b.intomoney) return -1;
            if (a.intomoney > b.intomoney) return 1;
            return 0;
          },
          render: function render(text, row) {
            return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, convertNumber(row.intomoney), " \u20AB");
          }
        }];
        var data = [];

        for (var i = 0; i < row.products.length; ++i) {
          data.push({
            key: i,
            name: row.products[i].name,
            mass: row.products[i].mass,
            inputprice: row.products[i].inputprice,
            outputprice: row.products[i].outputprice,
            intomoney: row.products[i].intomoney // Status:
            //     row.products[i].status === 1 ? (
            //         <i
            //             style={{ fontSize: "25px" }}
            //             className="ion-android-checkbox"
            //         ></i>
            //     ) : (
            //             <i
            //                 style={{ fontSize: "25px" }}
            //                 className="ion-android-checkbox-outline-blank"
            //             ></i>
            //         )

          });
        }

        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_control_style__WEBPACK_IMPORTED_MODULE_4__["TableWrapper"], {
          style: {
            margin: 0
          },
          columns: columns,
          dataSource: data,
          pagination: false
        });
      };

      var columns = [];
      columns = [{
        title: 'Mã hoá đơn',
        dataIndex: 'idBill',
        key: 'idBill',
        sorter: function sorter(a, b) {
          if (a.idBill < b.idBill) return -1;
          if (a.idBill > b.idBill) return 1;
          return 0;
        },
        render: function render(text, row) {
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, row.idBill);
        }
      }, {
        title: 'Nhân viên',
        dataIndex: 'Name',
        key: 'Name',
        className: 'noWrapCell',
        sorter: function sorter(a, b) {
          if (a.admin.username < b.admin.username) return -1;
          if (a.admin.username > b.admin.username) return 1;
          return 0;
        },
        render: function render(text, row) {
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, row.admin.username);
        }
      }, {
        title: 'Số lượng',
        dataIndex: 'amount',
        key: 'amount',
        className: 'noWrapCell',
        sorter: function sorter(a, b) {
          if (a.amount < b.amount) return -1;
          if (a.amount > b.amount) return 1;
          return 0;
        },
        render: function render(text, row) {
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, row.amount);
        }
      }, {
        title: 'Tổng tiền',
        dataIndex: 'total',
        key: 'total',
        className: 'noWrapCell',
        sorter: function sorter(a, b) {
          if (a.totalmoney < b.totalmoney) return -1;
          if (a.totalmoney > b.totalmoney) return 1;
          return 0;
        },
        render: function render(text, row) {
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, convertNumber(row.totalmoney), " \u20AB");
        }
      }, {
        title: 'Ảnh',
        dataIndex: 'image',
        key: 'image',
        className: 'noWrapCell',
        sorter: function sorter(a, b) {
          if (a.images < b.images) return -1;
          if (a.images > b.images) return 1;
          return 0;
        },
        render: function render(text, row) {
          return row.images.split('#####').map(function (image, index) {
            return [/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
              key: index,
              style: {
                height: '60px'
              },
              alt: row.name ? row.name : '',
              src: _settings_index__WEBPACK_IMPORTED_MODULE_12__["urlConfig"].imageUrl + 'img/bill/' + image
            }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
              key: index + row.images.split('#####').length
            })];
          });
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
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, moment__WEBPACK_IMPORTED_MODULE_7___default()(row.created_at).format(_helpers_helperFunc__WEBPACK_IMPORTED_MODULE_14__["default"].fomatDateTime()));
        }
      }, {
        title: '',
        key: 'action',
        className: 'noWrapCell',
        render: function render(text, row) {
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_control_style__WEBPACK_IMPORTED_MODULE_4__["ActionWrapper"], null, row && moment__WEBPACK_IMPORTED_MODULE_7___default()(date).format('YYYY-MM-DD') === moment__WEBPACK_IMPORTED_MODULE_7___default()(row.created_at).format('YYYY-MM-DD') ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
            onClick: _this3.handleModal.bind(_this3, 'addProduct', row),
            className: "aSimple"
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_8__["Icon"], {
            type: "plus-circle"
          })) : '', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_8__["Popconfirm"], {
            title: "B\u1EA1n c\xF3 ch\u1EAFc mu\u1ED1n xo\xE1",
            okText: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_utility_intlMessages__WEBPACK_IMPORTED_MODULE_13__["default"], {
              id: "button.delete"
            }),
            cancelText: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_utility_intlMessages__WEBPACK_IMPORTED_MODULE_13__["default"], {
              id: "button.cancel"
            }),
            placement: "topRight",
            onConfirm: _this3.handleSubmit.bind(_this3, 'delete', row)
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
            className: "deleteBtn aSimple"
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
            className: "ion-android-delete deleteRow"
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
        id: "sidebar.Bill_Import"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_8__["Row"], {
        style: rowStyle,
        gutter: gutter,
        justify: "start"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_8__["Col"], {
        md: 24,
        sm: 24,
        xs: 24,
        style: colStyle
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_utility_box__WEBPACK_IMPORTED_MODULE_9__["default"], {
        className: "boxWrapper"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_control_style__WEBPACK_IMPORTED_MODULE_4__["TitleWrapper"], {
        className: "titleWrapper"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_control_style__WEBPACK_IMPORTED_MODULE_4__["ComponentTitle"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_8__["Input"], {
        placeholder: "M\xE3 ho\xE1 \u0111\u01A1n",
        onChange: this.handleSearchChange,
        className: "inputSearch",
        onKeyUp: this.onKeyUp,
        value: this.state.search
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        onClick: this.handleSearch,
        className: "btSearch"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_8__["Icon"], {
        type: "search",
        theme: "outlined"
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_control_style__WEBPACK_IMPORTED_MODULE_4__["ButtonHolders"], {
        className: "group_bt_head"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        onClick: this.handleRefresh,
        className: "btnRefresh btWizard"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_8__["Icon"], {
        type: "sync",
        theme: "outlined"
      }), "L\xE0m m\u1EDBi"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        onClick: this.handleModal.bind(this, 'insert', null),
        className: "btnAdd btWizard"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_8__["Icon"], {
        type: "plus-square",
        theme: "outlined"
      }), "Th\xEAm m\u1EDBi"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_control_style__WEBPACK_IMPORTED_MODULE_4__["TableWrapper"], {
        rowKey: "key",
        columns: columns,
        dataSource: dataSource,
        expandedRowRender: expandedRowRender,
        expandIconAsCell: false,
        expandIconColumnIndex: 0,
        locale: {
          emptyText: this.props.isLoading === true ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            className: "ant-spin ant-spin-spinning ant-table-with-pagination ant-table-spin-holder"
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
            className: "ant-spin-dot ant-spin-dot-spin"
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", null))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_utility_intlMessages__WEBPACK_IMPORTED_MODULE_13__["default"], {
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
          current: this.state.page,
          total: count,
          hideOnSinglePage: true,
          onChange: this.onPageChange,
          showTotal: function showTotal(total, range) {
            return "Show ".concat(range[0], "-").concat(range[1], " in ").concat(dataSource.length, " records");
          }
        }
      }), row ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Bill_Import__WEBPACK_IMPORTED_MODULE_10__["default"], {
        modalActive: modalActive,
        modalType: this.state.modalType,
        row: row,
        categories: categories,
        handleCancel: this.handleCancel,
        handleSubmit: this.handleSubmit,
        handleClose: this.handleCancel,
        disable: disable
      }) : '')))));
    }
  }]);

  return IncidentDamages;
}(_containers_base__WEBPACK_IMPORTED_MODULE_2__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(function (state) {
  return _objectSpread({}, state.Bill_ImportReducer);
}, _objectSpread({}, _redux_Bill_Import_actions__WEBPACK_IMPORTED_MODULE_11__["default"]))(IncidentDamages));

/***/ })

}]);