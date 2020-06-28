(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[45],{

/***/ "./resources/js/isomophic/admin/components/Slide/index.js":
/*!****************************************************************!*\
  !*** ./resources/js/isomophic/admin/components/Slide/index.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _common_modal_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../common/modal.style */ "./resources/js/isomophic/common/modal.style.js");
/* harmony import */ var _components_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../components/base */ "./resources/js/isomophic/components/base/index.js");
/* harmony import */ var _isomophic_settings_withDirection__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../isomophic/settings/withDirection */ "./resources/js/isomophic/settings/withDirection.js");
/* harmony import */ var _components_feedback_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components/feedback/modal */ "./resources/js/isomophic/components/feedback/modal.js");
/* harmony import */ var _settings__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../settings */ "./resources/js/isomophic/settings/index.js");
/* harmony import */ var _common_data_style__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../common/data.style */ "./resources/js/isomophic/common/data.style.js");
/* harmony import */ var _helpers_helperFunc__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../helpers/helperFunc */ "./resources/js/isomophic/helpers/helperFunc.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _common_styleControl__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../common/styleControl */ "./resources/js/isomophic/common/styleControl.js");
/* harmony import */ var _components_utility_intlMessages__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../components/utility/intlMessages */ "./resources/js/isomophic/components/utility/intlMessages.js");
/* harmony import */ var _helpers_formItem__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../helpers/formItem */ "./resources/js/isomophic/helpers/formItem.js");
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








 // save and add





var dummyRequest = _helpers_helperFunc__WEBPACK_IMPORTED_MODULE_7__["default"].dummyRequest,
    beforeUpload = _helpers_helperFunc__WEBPACK_IMPORTED_MODULE_7__["default"].beforeUpload,
    getBase64 = _helpers_helperFunc__WEBPACK_IMPORTED_MODULE_7__["default"].getBase64;
var WDModal = Object(_common_modal_style__WEBPACK_IMPORTED_MODULE_1__["default"])(_components_feedback_modal__WEBPACK_IMPORTED_MODULE_4__["default"]);
var Modal = Object(_isomophic_settings_withDirection__WEBPACK_IMPORTED_MODULE_3__["default"])(WDModal);
var FormItem = antd__WEBPACK_IMPORTED_MODULE_8__["Form"].Item;
var Option = antd__WEBPACK_IMPORTED_MODULE_8__["Select"].Option;

var ModalForm = /*#__PURE__*/function (_BaseModal) {
  _inherits(ModalForm, _BaseModal);

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

    _defineProperty(_assertThisInitialized(_this), "onEditorStateChange", function (editorState) {
      _this.setState({
        editorState: editorState,
        changed: true
      });
    });

    _this.state = {
      changed: false
    };
    return _this;
  }

  _createClass(ModalForm, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.modalType === _helpers_helperFunc__WEBPACK_IMPORTED_MODULE_7__["default"].modeType.None) {
        this.setState({
          changed: false
        });
      }
    }
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
          updateStatusAdd = _this$props.updateStatusAdd;
      var fileList = [];

      if (row.image) {
        fileList.push({
          uid: '-1',
          name: '',
          status: 'done',
          url: row.image,
          thumbUrl: _settings__WEBPACK_IMPORTED_MODULE_5__["urlConfig"].imageUrl + row.image
        });
      }

      var getFieldDecorator = this.props.form.getFieldDecorator;

      var normFile = function normFile(e) {
        if (Array.isArray(e)) {
          return e;
        }

        e.fileList = e.fileList.slice(-1);
        return e && e.fileList;
      };

      var saveButton = function saveButton(e) {
        e.preventDefault();

        _this2.props.form.validateFieldsAndScroll(function (err, values) {
          if (!err) {
            row.name = values.name;
            row.link = values.link;
            row.image = values.image;
            row.type = values.type;
            row.order = values.order;

            if (modalType === _helpers_helperFunc__WEBPACK_IMPORTED_MODULE_7__["default"].modeType.Insert) {
              row.status = _helpers_helperFunc__WEBPACK_IMPORTED_MODULE_7__["default"].status.Active;
            } else {
              row.status = values.status;
            }

            var baseImage = '';

            if (values.image[0].originFileObj) {
              getBase64(values.image[0].originFileObj, function (result) {
                baseImage = result;
                var str = baseImage.replace(/^data:image\/[a-z]+;base64,/, '');
                row.image = str;

                _this2.props.form.resetFields();

                handleSubmit(modalType, row);
              });
            } else {
              row.image = '';
              handleSubmit(modalType, row);
            }
          }
        });
      }; // save and add


      var saveAdd = function saveAdd(e) {
        e.preventDefault();

        if (modalType === _helpers_helperFunc__WEBPACK_IMPORTED_MODULE_7__["default"].modeType.Insert) {
          updateStatusAdd(true);
          saveButton(e);
        }
      };

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Modal, {
        title: modalType === _helpers_helperFunc__WEBPACK_IMPORTED_MODULE_7__["default"].modeType.Insert ? _helpers_helperFunc__WEBPACK_IMPORTED_MODULE_7__["default"].modeType.properties[_helpers_helperFunc__WEBPACK_IMPORTED_MODULE_7__["default"].modeType.Insert] : modalType === _helpers_helperFunc__WEBPACK_IMPORTED_MODULE_7__["default"].modeType.Update ? _helpers_helperFunc__WEBPACK_IMPORTED_MODULE_7__["default"].modeType.properties[_helpers_helperFunc__WEBPACK_IMPORTED_MODULE_7__["default"].modeType.Update] : modalType === _helpers_helperFunc__WEBPACK_IMPORTED_MODULE_7__["default"].modeType.View ? _helpers_helperFunc__WEBPACK_IMPORTED_MODULE_7__["default"].modeType.properties[_helpers_helperFunc__WEBPACK_IMPORTED_MODULE_7__["default"].modeType.View] : '',
        className: "FormModal",
        visible: modalActive,
        onCancel: handleCancel,
        cancelText: modalType === _helpers_helperFunc__WEBPACK_IMPORTED_MODULE_7__["default"].modeType.View ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_utility_intlMessages__WEBPACK_IMPORTED_MODULE_10__["default"], {
          id: "button.close"
        }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_utility_intlMessages__WEBPACK_IMPORTED_MODULE_10__["default"], {
          id: "button.cancel"
        }),
        onOk: saveButton // okText="Save"
        ,
        width: 40 + '%',
        style: {
          top: 30
        },
        footer: modalType === _helpers_helperFunc__WEBPACK_IMPORTED_MODULE_7__["default"].modeType.Insert ? [/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_8__["Button"], {
          key: "cancel",
          className: "cancelType",
          onClick: handleCancel,
          style: Object(_common_styleControl__WEBPACK_IMPORTED_MODULE_9__["default"])(3, modalType)
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_utility_intlMessages__WEBPACK_IMPORTED_MODULE_10__["default"], {
          id: "button.close"
        })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_8__["Button"], {
          key: "ok",
          className: "okType",
          onClick: saveButton,
          style: Object(_common_styleControl__WEBPACK_IMPORTED_MODULE_9__["default"])(1, modalType),
          disabled: !this.state.changed
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_utility_intlMessages__WEBPACK_IMPORTED_MODULE_10__["default"], {
          id: "button.save"
        })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_8__["Button"], {
          key: "oknew",
          className: "okNewType",
          onClick: saveAdd,
          style: Object(_common_styleControl__WEBPACK_IMPORTED_MODULE_9__["default"])(2, modalType),
          disabled: !this.state.changed
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_utility_intlMessages__WEBPACK_IMPORTED_MODULE_10__["default"], {
          id: "button.save&AddNew"
        }))] : [/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_8__["Button"], {
          key: "cancel",
          className: "cancelType",
          onClick: handleCancel,
          style: Object(_common_styleControl__WEBPACK_IMPORTED_MODULE_9__["default"])(3, modalType)
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_utility_intlMessages__WEBPACK_IMPORTED_MODULE_10__["default"], {
          id: "button.close"
        })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_8__["Button"], {
          key: "ok",
          className: "okType",
          onClick: saveButton,
          style: Object(_common_styleControl__WEBPACK_IMPORTED_MODULE_9__["default"])(1, modalType),
          disabled: !this.state.changed
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_utility_intlMessages__WEBPACK_IMPORTED_MODULE_10__["default"], {
          id: "button.save"
        }))]
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_data_style__WEBPACK_IMPORTED_MODULE_6__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "clearfix"
      }, modalType === 'insert' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_8__["Form"], {
        className: "FormData"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FormItem, _extends({}, _helpers_formItem__WEBPACK_IMPORTED_MODULE_11__["default"], {
        label: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "Type"),
        style: {
          marginBottom: 10 + 'px'
        }
      }), getFieldDecorator('type', {
        initialValue: row.type
      })( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_8__["Select"], {
        onChange: this.handleChange
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Option, {
        value: _helpers_helperFunc__WEBPACK_IMPORTED_MODULE_7__["default"].slideType.Slide
      }, _helpers_helperFunc__WEBPACK_IMPORTED_MODULE_7__["default"].slideType.properties[_helpers_helperFunc__WEBPACK_IMPORTED_MODULE_7__["default"].slideType.Slide]), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Option, {
        value: _helpers_helperFunc__WEBPACK_IMPORTED_MODULE_7__["default"].slideType.Banner
      }, _helpers_helperFunc__WEBPACK_IMPORTED_MODULE_7__["default"].slideType.properties[_helpers_helperFunc__WEBPACK_IMPORTED_MODULE_7__["default"].slideType.Banner])))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FormItem, _extends({}, _helpers_formItem__WEBPACK_IMPORTED_MODULE_11__["default"], {
        label: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_utility_intlMessages__WEBPACK_IMPORTED_MODULE_10__["default"], {
          id: "form.name"
        })),
        hasFeedback: true,
        style: {
          marginBottom: 10 + 'px'
        }
      }), getFieldDecorator('name', {
        rules: [{
          required: true,
          message: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_utility_intlMessages__WEBPACK_IMPORTED_MODULE_10__["default"], {
            id: "form.validate.name"
          })
        }, {
          max: 200,
          message: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_utility_intlMessages__WEBPACK_IMPORTED_MODULE_10__["default"], {
            id: "form.validate.max200"
          })
        }]
      })( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_8__["Input"], {
        onChange: this.handleChange
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FormItem, _extends({}, _helpers_formItem__WEBPACK_IMPORTED_MODULE_11__["default"], {
        label: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_utility_intlMessages__WEBPACK_IMPORTED_MODULE_10__["default"], {
          id: "form.link"
        })),
        hasFeedback: true,
        style: {
          marginBottom: 10 + 'px'
        }
      }), getFieldDecorator('link', {
        rules: [{
          max: 200,
          message: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_utility_intlMessages__WEBPACK_IMPORTED_MODULE_10__["default"], {
            id: "form.validate.max200"
          })
        }]
      })( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_8__["Input"], {
        onChange: this.handleChange
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FormItem, _extends({}, _helpers_formItem__WEBPACK_IMPORTED_MODULE_11__["default"], {
        label: "Image",
        style: {
          marginBottom: 10 + 'px'
        }
      }), getFieldDecorator('image', {
        valuePropName: 'fileList',
        getValueFromEvent: normFile,
        rules: [{
          required: true,
          message: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_utility_intlMessages__WEBPACK_IMPORTED_MODULE_10__["default"], {
            id: "form.validate.image"
          })
        }]
      })( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_8__["Upload"], {
        name: "logo",
        customRequest: dummyRequest,
        listType: "picture",
        accept: "image/png, image/jpeg",
        beforeUpload: beforeUpload,
        onChange: this.handleChange
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_8__["Button"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_8__["Icon"], {
        type: "upload"
      }), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_utility_intlMessages__WEBPACK_IMPORTED_MODULE_10__["default"], {
        id: "form.upload"
      }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FormItem, _extends({}, _helpers_formItem__WEBPACK_IMPORTED_MODULE_11__["default"], {
        label: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "Order"),
        hasFeedback: true,
        style: {
          marginBottom: 10 + 'px'
        }
      }), getFieldDecorator('order', {
        initialValue: 0,
        rules: [{
          required: true,
          message: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_utility_intlMessages__WEBPACK_IMPORTED_MODULE_10__["default"], {
            id: "form.validate.order"
          })
        }]
      })( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_8__["InputNumber"], {
        min: "0",
        onChange: this.handleChange
      })))) : modalType === 'edit' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_8__["Form"], {
        className: "FormData"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FormItem, _extends({}, _helpers_formItem__WEBPACK_IMPORTED_MODULE_11__["default"], {
        label: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_utility_intlMessages__WEBPACK_IMPORTED_MODULE_10__["default"], {
          id: "form.type"
        })),
        style: {
          marginBottom: 10 + 'px'
        }
      }), getFieldDecorator('type', {
        initialValue: row.type
      })( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_8__["Select"], {
        onChange: this.handleChange
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Option, {
        value: _helpers_helperFunc__WEBPACK_IMPORTED_MODULE_7__["default"].slideType.Slide
      }, _helpers_helperFunc__WEBPACK_IMPORTED_MODULE_7__["default"].slideType.properties[_helpers_helperFunc__WEBPACK_IMPORTED_MODULE_7__["default"].slideType.Slide]), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Option, {
        value: _helpers_helperFunc__WEBPACK_IMPORTED_MODULE_7__["default"].slideType.Banner
      }, _helpers_helperFunc__WEBPACK_IMPORTED_MODULE_7__["default"].slideType.properties[_helpers_helperFunc__WEBPACK_IMPORTED_MODULE_7__["default"].slideType.Banner])))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FormItem, _extends({}, _helpers_formItem__WEBPACK_IMPORTED_MODULE_11__["default"], {
        label: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_utility_intlMessages__WEBPACK_IMPORTED_MODULE_10__["default"], {
          id: "form.name"
        })),
        hasFeedback: true,
        style: {
          marginBottom: 10 + 'px'
        }
      }), getFieldDecorator('name', {
        initialValue: row.name,
        rules: [{
          required: true,
          message: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_utility_intlMessages__WEBPACK_IMPORTED_MODULE_10__["default"], {
            id: "form.validate.name"
          })
        }, {
          max: 200,
          message: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_utility_intlMessages__WEBPACK_IMPORTED_MODULE_10__["default"], {
            id: "form.validate.max200"
          })
        }]
      })( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_8__["Input"], {
        onChange: this.handleChange
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FormItem, _extends({}, _helpers_formItem__WEBPACK_IMPORTED_MODULE_11__["default"], {
        label: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_utility_intlMessages__WEBPACK_IMPORTED_MODULE_10__["default"], {
          id: "form.link"
        })),
        hasFeedback: true,
        style: {
          marginBottom: 10 + 'px'
        }
      }), getFieldDecorator('link', {
        initialValue: row.link,
        rules: [{
          max: 200,
          message: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_utility_intlMessages__WEBPACK_IMPORTED_MODULE_10__["default"], {
            id: "form.validate.max200"
          })
        }]
      })( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_8__["Input"], {
        onChange: this.handleChange
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FormItem, _extends({}, _helpers_formItem__WEBPACK_IMPORTED_MODULE_11__["default"], {
        label: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_utility_intlMessages__WEBPACK_IMPORTED_MODULE_10__["default"], {
          id: "form.image"
        }),
        style: {
          marginBottom: 10 + 'px'
        }
      }), getFieldDecorator('image', {
        valuePropName: 'fileList',
        getValueFromEvent: normFile,
        initialValue: fileList.length > 0 ? fileList : null,
        rules: [{
          required: true,
          message: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_utility_intlMessages__WEBPACK_IMPORTED_MODULE_10__["default"], {
            id: "form.validate.image"
          })
        }]
      })( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_8__["Upload"], {
        name: "image",
        customRequest: dummyRequest,
        listType: "picture",
        accept: "image/png, image/jpeg",
        beforeUpload: beforeUpload,
        onChange: this.handleChange
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_8__["Button"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_8__["Icon"], {
        type: "upload"
      }), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_utility_intlMessages__WEBPACK_IMPORTED_MODULE_10__["default"], {
        id: "form.upload"
      }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FormItem, _extends({}, _helpers_formItem__WEBPACK_IMPORTED_MODULE_11__["default"], {
        label: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_utility_intlMessages__WEBPACK_IMPORTED_MODULE_10__["default"], {
          id: "form.order"
        })),
        hasFeedback: true,
        style: {
          marginBottom: 10 + 'px'
        }
      }), getFieldDecorator('order', {
        initialValue: row.order,
        rules: [{
          required: true,
          message: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_utility_intlMessages__WEBPACK_IMPORTED_MODULE_10__["default"], {
            id: "form.validate.order"
          })
        }]
      })( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_8__["InputNumber"], {
        min: "0",
        onChange: this.handleChange
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FormItem, _extends({}, _helpers_formItem__WEBPACK_IMPORTED_MODULE_11__["default"], {
        label: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_utility_intlMessages__WEBPACK_IMPORTED_MODULE_10__["default"], {
          id: "form.status"
        })),
        style: {
          marginBottom: 10 + 'px'
        }
      }), getFieldDecorator('status', {
        initialValue: row.status
      })( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_8__["Select"], {
        onChange: this.handleChange
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Option, {
        value: 1
      }, _helpers_helperFunc__WEBPACK_IMPORTED_MODULE_7__["default"].status.properties[_helpers_helperFunc__WEBPACK_IMPORTED_MODULE_7__["default"].status.Active]), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Option, {
        value: 2
      }, _helpers_helperFunc__WEBPACK_IMPORTED_MODULE_7__["default"].status.properties[_helpers_helperFunc__WEBPACK_IMPORTED_MODULE_7__["default"].status.Inactive]))))) : '')));
    }
  }]);

  return ModalForm;
}(_components_base__WEBPACK_IMPORTED_MODULE_2__["default"]);

var WrappedModalForm = antd__WEBPACK_IMPORTED_MODULE_8__["Form"].create()(ModalForm);
/* harmony default export */ __webpack_exports__["default"] = (WrappedModalForm);

/***/ }),

/***/ "./resources/js/isomophic/admin/containers/Slide/index.js":
/*!****************************************************************!*\
  !*** ./resources/js/isomophic/admin/containers/Slide/index.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _containers_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../containers/base */ "./resources/js/isomophic/containers/base/index.js");
/* harmony import */ var _settings_basicStyle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../settings/basicStyle */ "./resources/js/isomophic/settings/basicStyle.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _common_control_style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../common/control.style */ "./resources/js/isomophic/common/control.style.js");
/* harmony import */ var _common_data_style__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../common/data.style */ "./resources/js/isomophic/common/data.style.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _components_utility_layoutWrapper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../components/utility/layoutWrapper */ "./resources/js/isomophic/components/utility/layoutWrapper.js");
/* harmony import */ var _components_utility_box__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../components/utility/box */ "./resources/js/isomophic/components/utility/box.js");
/* harmony import */ var _components_utility_contentHolder__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../components/utility/contentHolder */ "./resources/js/isomophic/components/utility/contentHolder.js");
/* harmony import */ var _settings_index__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../settings/index */ "./resources/js/isomophic/settings/index.js");
/* harmony import */ var _helpers_helperFunc__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../helpers/helperFunc */ "./resources/js/isomophic/helpers/helperFunc.js");
/* harmony import */ var _redux_Slide_actions__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../redux/Slide/actions */ "./resources/js/isomophic/admin/redux/Slide/actions.js");
/* harmony import */ var _components_Slide__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../components/Slide */ "./resources/js/isomophic/admin/components/Slide/index.js");
/* harmony import */ var _components_utility_intlMessages__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../components/utility/intlMessages */ "./resources/js/isomophic/components/utility/intlMessages.js");
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

















var trimByWord = _helpers_helperFunc__WEBPACK_IMPORTED_MODULE_12__["default"].trimByWord;

var Slide = /*#__PURE__*/function (_BaseComponent) {
  _inherits(Slide, _BaseComponent);

  var _super = _createSuper(Slide);

  function Slide(props) {
    var _this;

    _classCallCheck(this, Slide);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "updateStatusAdd", function (value) {
      _this.props.updateStatusSaveAdd(value);
    });

    _this.state = {
      confirmDirty: false,
      search: "",
      connection: null,
      modalType: "",
      modalActive: false,
      page: 1,
      strName: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_utility_intlMessages__WEBPACK_IMPORTED_MODULE_15__["default"], {
        id: "sidebar.slides"
      })
    };
    return _this;
  } // save and add


  _createClass(Slide, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          rows = _this$props.rows,
          count = _this$props.count,
          row = _this$props.row;
      var rowStyle = _settings_basicStyle__WEBPACK_IMPORTED_MODULE_3__["default"].rowStyle,
          colStyle = _settings_basicStyle__WEBPACK_IMPORTED_MODULE_3__["default"].colStyle,
          gutter = _settings_basicStyle__WEBPACK_IMPORTED_MODULE_3__["default"].gutter;
      var modalActive = this.state.modalActive;
      var dataSource = [];

      if (typeof rows !== "undefined") {
        Object.keys(rows).map(function (row, index) {
          return dataSource.push(_objectSpread({}, rows[row], {
            key: row
          }));
        });
      }

      var columns = [];
      columns = [{
        title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_utility_intlMessages__WEBPACK_IMPORTED_MODULE_15__["default"], {
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
        title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_utility_intlMessages__WEBPACK_IMPORTED_MODULE_15__["default"], {
          id: "form.image"
        }),
        dataIndex: "image",
        key: "image",
        className: "noWrapCell",
        render: function render(text, row) {
          if (row.image) {
            return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
              style: {
                height: "60px"
              },
              alt: row.name,
              src: _settings_index__WEBPACK_IMPORTED_MODULE_11__["urlConfig"].imageUrl + row.image
            });
          }
        }
      }, {
        title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_utility_intlMessages__WEBPACK_IMPORTED_MODULE_15__["default"], {
          id: "form.type"
        }),
        dataIndex: "type",
        className: "noWrapCell",
        key: "type",
        sorter: function sorter(a, b) {
          if (a.type < b.type) return -1;
          if (a.type > b.type) return 1;
          return 0;
        },
        render: function render(text, row) {
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_control_style__WEBPACK_IMPORTED_MODULE_5__["StatusTag"], {
            className: row.type === _helpers_helperFunc__WEBPACK_IMPORTED_MODULE_12__["default"].slideType.Slide ? "publish" : "private"
          }, row.type === _helpers_helperFunc__WEBPACK_IMPORTED_MODULE_12__["default"].slideType.Slide ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_utility_intlMessages__WEBPACK_IMPORTED_MODULE_15__["default"], {
            id: "form.slideType"
          }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_utility_intlMessages__WEBPACK_IMPORTED_MODULE_15__["default"], {
            id: "form.bannerType"
          }));
        }
      }, {
        title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_utility_intlMessages__WEBPACK_IMPORTED_MODULE_15__["default"], {
          id: "form.status"
        }),
        dataIndex: "status",
        className: "noWrapCell",
        key: "status",
        sorter: function sorter(a, b) {
          if (a.status < b.status) return -1;
          if (a.status > b.status) return 1;
          return 0;
        },
        render: function render(text, row) {
          var className;

          if (row.status === _helpers_helperFunc__WEBPACK_IMPORTED_MODULE_12__["default"].status.Active) {
            className = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_utility_intlMessages__WEBPACK_IMPORTED_MODULE_15__["default"], {
              id: "form.publish"
            });
          } else {
            className = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_utility_intlMessages__WEBPACK_IMPORTED_MODULE_15__["default"], {
              id: "form.private"
            });
          }

          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_control_style__WEBPACK_IMPORTED_MODULE_5__["StatusTag"], {
            className: className
          }, row.status === _helpers_helperFunc__WEBPACK_IMPORTED_MODULE_12__["default"].status.Active ? _helpers_helperFunc__WEBPACK_IMPORTED_MODULE_12__["default"].status.properties[_helpers_helperFunc__WEBPACK_IMPORTED_MODULE_12__["default"].status.Active] : _helpers_helperFunc__WEBPACK_IMPORTED_MODULE_12__["default"].status.properties[_helpers_helperFunc__WEBPACK_IMPORTED_MODULE_12__["default"].status.Inactive]);
        }
      }, {
        title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_utility_intlMessages__WEBPACK_IMPORTED_MODULE_15__["default"], {
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
          if (row.admin) {
            return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, row.admin.username);
          }
        }
      }, {
        title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_utility_intlMessages__WEBPACK_IMPORTED_MODULE_15__["default"], {
          id: "form.updatedAt"
        }),
        dataIndex: "updated_at",
        key: "slug",
        sorter: function sorter(a, b) {
          if (a.updated_at < b.updated_at) return -1;
          if (a.updated_at > b.updated_at) return 1;
          return 0;
        },
        render: function render(text, row) {
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, moment__WEBPACK_IMPORTED_MODULE_4___default()(row.updated_at).format(_helpers_helperFunc__WEBPACK_IMPORTED_MODULE_12__["default"].fomatDateTime()));
        }
      }, {
        title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_utility_intlMessages__WEBPACK_IMPORTED_MODULE_15__["default"], {
          id: "form.action"
        }),
        key: "action",
        fixed: 'right',
        width: 100,
        className: "noWrapCell",
        render: function render(text, row) {
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_control_style__WEBPACK_IMPORTED_MODULE_5__["ActionWrapper"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
            onClick: _this2.handleModal.bind(_this2, "edit", row),
            className: "aSimple"
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_7__["Icon"], {
            type: "form",
            theme: "outlined"
          })), localStorage.getItem("user_name") === "admin" || JSON.parse(localStorage.getItem("role_detail")).some(function (role) {
            return role.address === "105";
          }) ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_7__["Popconfirm"], {
            title: "Are you sure delete this profile?.",
            okText: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_utility_intlMessages__WEBPACK_IMPORTED_MODULE_15__["default"], {
              id: "button.delete"
            }),
            cancelText: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_utility_intlMessages__WEBPACK_IMPORTED_MODULE_15__["default"], {
              id: "button.cancel"
            }),
            placement: "topRight",
            onConfirm: _this2.handleSubmit.bind(_this2, "delete", row)
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
            className: "deleteBtn aSimple"
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
            className: "ion-android-delete deleteRow"
          }))) : "");
        }
      }];
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_data_style__WEBPACK_IMPORTED_MODULE_6__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_utility_layoutWrapper__WEBPACK_IMPORTED_MODULE_8__["default"], {
        style: {
          padding: "0px"
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
        className: "PageHeader"
      }, " ", this.state.strName), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_7__["Row"], {
        style: rowStyle,
        gutter: gutter,
        justify: "start"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_7__["Col"], {
        md: 24,
        sm: 24,
        xs: 24,
        style: colStyle
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_utility_box__WEBPACK_IMPORTED_MODULE_9__["default"], {
        className: "boxWrapper"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_utility_contentHolder__WEBPACK_IMPORTED_MODULE_10__["default"], {
        style: {
          marginTop: 0,
          overflow: "hidden"
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_control_style__WEBPACK_IMPORTED_MODULE_5__["TitleWrapper"], {
        className: "titleWrapper"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_control_style__WEBPACK_IMPORTED_MODULE_5__["ComponentTitle"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_7__["Input"], {
        onChange: this.handleSearchChange,
        className: "inputSearch",
        onKeyUp: this.onKeyUp,
        value: this.state.search,
        placeholder: "Search..."
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        className: "btSearch",
        onClick: this.handleSearch
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_7__["Icon"], {
        type: "search",
        theme: "outlined"
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_control_style__WEBPACK_IMPORTED_MODULE_5__["ButtonHolders"], {
        className: "group_bt_head"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        onClick: this.handleRefresh,
        className: "btnRefresh btWizard"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_7__["Icon"], {
        type: "sync",
        theme: "outlined"
      }), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_utility_intlMessages__WEBPACK_IMPORTED_MODULE_15__["default"], {
        id: "button.refresh"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        onClick: this.handleModal.bind(this, "insert", null),
        className: "btnAdd btWizard"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_7__["Icon"], {
        type: "plus-square",
        theme: "outlined"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_utility_intlMessages__WEBPACK_IMPORTED_MODULE_15__["default"], {
        id: "button.add"
      })))), row ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Slide__WEBPACK_IMPORTED_MODULE_14__["default"], {
        modalActive: modalActive,
        modalType: this.state.modalType,
        row: row,
        strName: this.state.strName,
        handleCancel: this.handleCancel,
        handleSubmit: this.handleSubmit,
        handleClose: this.handleCancel // save and add
        ,
        updateStatusAdd: this.updateStatusAdd
      }) : "", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_control_style__WEBPACK_IMPORTED_MODULE_5__["TableWrapper"], {
        rowKey: "key",
        columns: columns,
        bordered: true,
        dataSource: dataSource,
        locale: {
          emptyText: this.props.isLoading === true ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            className: "ant-spin ant-spin-spinning ant-table-with-pagination ant-table-spin-holder"
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
            className: "ant-spin-dot ant-spin-dot-spin"
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", null))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_utility_intlMessages__WEBPACK_IMPORTED_MODULE_15__["default"], {
            id: "button.empty"
          }))
        } //loading={this.props.isLoading}
        ,
        className: "isoSimpleTable",
        pagination: {
          showSizeChanger: false,
          defaultCurrent: 1,
          defaultPageSize: _settings_index__WEBPACK_IMPORTED_MODULE_11__["dataConfig"].pageLimit || 10,
          hideOnSinglePage: true,
          onChange: this.onPageChange,
          total: count
        }
      }))))))));
    }
  }]);

  return Slide;
}(_containers_base__WEBPACK_IMPORTED_MODULE_2__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(function (state) {
  return _objectSpread({}, state.SlideReducer);
}, _redux_Slide_actions__WEBPACK_IMPORTED_MODULE_13__["default"])(Slide));

/***/ })

}]);