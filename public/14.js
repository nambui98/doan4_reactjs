(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[14],{

/***/ "./resources/js/isomophic/admin/components/Annoucement/index.js":
/*!**********************************************************************!*\
  !*** ./resources/js/isomophic/admin/components/Annoucement/index.js ***!
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
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _common_control_style__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../common/control.style */ "./resources/js/isomophic/common/control.style.js");
/* harmony import */ var _common_data_style__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../common/data.style */ "./resources/js/isomophic/common/data.style.js");
/* harmony import */ var _common_styleControl__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../common/styleControl */ "./resources/js/isomophic/common/styleControl.js");
/* harmony import */ var _components_utility_intlMessages__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../components/utility/intlMessages */ "./resources/js/isomophic/components/utility/intlMessages.js");
/* harmony import */ var _helpers_formItem__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../helpers/formItem */ "./resources/js/isomophic/helpers/formItem.js");
/* harmony import */ var _helpers_helperFunc__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../helpers/helperFunc */ "./resources/js/isomophic/helpers/helperFunc.js");
/* harmony import */ var _settings__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../settings */ "./resources/js/isomophic/settings/index.js");
/* harmony import */ var emoji_mart_css_emoji_mart_css__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! emoji-mart/css/emoji-mart.css */ "./node_modules/emoji-mart/css/emoji-mart.css");
/* harmony import */ var emoji_mart_css_emoji_mart_css__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(emoji_mart_css_emoji_mart_css__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var emoji_mart__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! emoji-mart */ "./node_modules/emoji-mart/dist-es/index.js");
/* harmony import */ var react_feather__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react-feather */ "./node_modules/react-feather/dist/index.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! util */ "./node_modules/node-libs-browser/node_modules/util/util.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_16__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

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
    Method Name: Annoucement
    Description: Add, update, delete,  search, refresh
    Author: Nam Nam
    Last Modified Author: Nam Nam
    Created Date: 20/02/2020
    Modified Date: 2/03/2020
*/

















var dummyRequest = _helpers_helperFunc__WEBPACK_IMPORTED_MODULE_11__["default"].dummyRequest,
    beforeUpload = _helpers_helperFunc__WEBPACK_IMPORTED_MODULE_11__["default"].beforeUpload,
    getBase64 = _helpers_helperFunc__WEBPACK_IMPORTED_MODULE_11__["default"].getBase64;
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

    _defineProperty(_assertThisInitialized(_this), "handleChange", function (e) {
      _this.setState({
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

    _defineProperty(_assertThisInitialized(_this), "handleCancel", function () {
      _this.setState({
        imagesStr: [],
        showEmojiPicker: false
      });

      _this.props.handleCancel();
    });

    _defineProperty(_assertThisInitialized(_this), "toggleEmojiPicker", function () {
      _this.setState({
        showEmojiPicker: !_this.state.showEmojiPicker
      });
    });

    _defineProperty(_assertThisInitialized(_this), "addEmoji", function (emoji) {
      _this.props.form.setFieldsValue({
        description: _this.props.form.getFieldValue('description') ? _this.props.form.getFieldValue('description') + emoji["native"] : '' + emoji["native"]
      });

      _this.setState({
        changed: true
      });
    });

    _defineProperty(_assertThisInitialized(_this), "disabledDate", function (current) {
      var date = new Date(); // Can not select days before today and today

      return current && current < moment__WEBPACK_IMPORTED_MODULE_4___default()(date).subtract(1, 'day').endOf('day');
    });

    _this.state = {
      base64: null,
      changed: false,
      isLoadding: false,
      currAuthority: [],
      isAdding: true,
      limitAdd: false,
      imagesStr: [],
      showEmojiPicker: false
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
          showEmojiPicker: false
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
          newRow = _this$props.newRow,
          handleSubmit = _this$props.handleSubmit,
          announcementType = _this$props.announcementType;
      var getFieldDecorator = this.props.form.getFieldDecorator;

      var listImage = _toConsumableArray(new Set(this.state.imagesStr)).join('##########');

      var fileList = [];
      var date = new Date();
      var images = [];

      if (row.images) {
        images = row.images.split('##########').slice(0, row.images.split('##########').length - 1);
        images.forEach(function (image, index) {
          return fileList.push({
            uid: index,
            name: '',
            status: 'done',
            url: image,
            thumbUrl: _settings__WEBPACK_IMPORTED_MODULE_12__["urlConfig"].imageUrl + image
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
                row.announced_date = values.announced_date;
                row.announcement_type_id = values.announcement_type_id;
                row.title = values.title;
                row.description = values.description;
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
                    listImage = values.image ? values.image.reduce(function (total, num) {
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

      var dataSource = [];

      if (typeof newRow !== 'undefined' && newRow !== null) {
        Object.keys(newRow).map(function (rows, index) {
          return dataSource.push(_objectSpread({}, newRow[rows], {
            key: rows
          }));
        });
      }

      var columns = [{
        title: 'User',
        dataIndex: 'admin',
        key: 'admin',
        render: function render(text, rows) {
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", null, rows && rows.admin ? rows.admin.full_name : '');
        }
      }, {
        title: 'Announcement',
        dataIndex: 'announcement',
        key: 'announcement',
        width: 250,
        render: function render(text, rows) {
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", null, rows && rows.announcement ? rows.announcement.title : '');
        }
      }, {
        title: 'Announcement type',
        dataIndex: 'announcement_type',
        key: 'announcement_type',
        width: 250,
        render: function render(text, rows) {
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", {
            style: {
              color: rows && rows.announcement_type ? rows.announcement_type.color : ''
            }
          }, rows && rows.announcement_type ? rows.announcement_type.name : '');
        }
      }];
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Modal, {
        title: modalType === 'changeStatus' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_utility_intlMessages__WEBPACK_IMPORTED_MODULE_9__["default"], {
          id: "form.titleChangeStatus"
        }) : modalType === 'insert' ? 'Add New' : modalType === 'edit' ? 'Update' : 'DETAIL',
        className: "FormModal",
        style: {
          top: 50
        },
        width: window.innerWidth > 1100 ? modalType === 'ChangeStatus' ? 30 + '%' : 50 + '%' : '100%',
        visible: modalActive,
        onCancel: this.handleCancel,
        cancelText: modalType === 'viewInfo' || modalType === 'viewUser' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_utility_intlMessages__WEBPACK_IMPORTED_MODULE_9__["default"], {
          id: "button.close"
        }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_utility_intlMessages__WEBPACK_IMPORTED_MODULE_9__["default"], {
          id: "button.cancel"
        }),
        onOk: saveButton,
        okText: "Save",
        footer: modalType === 'changeStatus' || modalType === _helpers_helperFunc__WEBPACK_IMPORTED_MODULE_11__["default"].modeType.Insert || modalType === 'update' || modalType === 'edit' ? [/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_5__["Button"], {
          key: "cancel",
          className: "cancelType",
          onClick: this.handleCancel,
          style: Object(_common_styleControl__WEBPACK_IMPORTED_MODULE_8__["default"])(3, modalType)
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_utility_intlMessages__WEBPACK_IMPORTED_MODULE_9__["default"], {
          id: "button.close"
        })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_5__["Button"], {
          key: "ok",
          className: "okType",
          onClick: saveButton,
          style: {
            backgroundColor: '#2d3446',
            color: '#FFFFFF',
            borderRadius: '6px',
            display: modalType === 'view' || modalType === 'viewInfo' || modalType === 'viewUser' ? 'none' : ''
          },
          disabled: !this.state.changed
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_utility_intlMessages__WEBPACK_IMPORTED_MODULE_9__["default"], {
          id: "button.save"
        }))] : [/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_5__["Button"], {
          key: "cancel",
          className: "cancelType",
          onClick: this.handleCancel,
          style: Object(_common_styleControl__WEBPACK_IMPORTED_MODULE_8__["default"])(3, modalType)
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_utility_intlMessages__WEBPACK_IMPORTED_MODULE_9__["default"], {
          id: "button.close"
        }))]
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_data_style__WEBPACK_IMPORTED_MODULE_7__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "clearfix"
      }, modalType === _helpers_helperFunc__WEBPACK_IMPORTED_MODULE_11__["default"].modeType.Insert ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_5__["Form"], {
        className: "isoCardInfoForm FormData"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_5__["Row"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_5__["Col"], {
        className: "ant-col-xl-24 ant-col-lg-24"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FormItem, _extends({}, _helpers_formItem__WEBPACK_IMPORTED_MODULE_10__["default"], {
        label: "Title",
        hasFeedback: true,
        style: {
          marginBottom: 10 + 'px'
        }
      }), getFieldDecorator('title', {
        rules: [{
          required: true,
          message: 'Title is required'
        }, {
          max: 200,
          message: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_utility_intlMessages__WEBPACK_IMPORTED_MODULE_9__["default"], {
            id: "form.validate.max200"
          })
        }]
      })( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_5__["Input"], {
        onChange: this.handleChange
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FormItem, _extends({}, _helpers_formItem__WEBPACK_IMPORTED_MODULE_10__["default"], {
        label: "Announcement date",
        hasFeedback: true,
        style: {
          marginBottom: 10 + 'px'
        }
      }), getFieldDecorator('announced_date', {
        initialValue: moment__WEBPACK_IMPORTED_MODULE_4___default()(date, _helpers_helperFunc__WEBPACK_IMPORTED_MODULE_11__["default"].dateFormat),
        rules: [{
          required: true,
          message: 'Announcement date is required'
        }]
      })( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_5__["DatePicker"], {
        format: _helpers_helperFunc__WEBPACK_IMPORTED_MODULE_11__["default"].dateFormat,
        disabledDate: this.disabledDate,
        allowClear: false,
        onChange: this.handleChange
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FormItem, _extends({}, _helpers_formItem__WEBPACK_IMPORTED_MODULE_10__["default"], {
        label: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "Announcement Type"),
        hasFeedback: true,
        style: {
          marginBottom: 10 + 'px'
        }
      }), getFieldDecorator('announcement_type_id', {
        initialValue: 2,
        rules: [{
          required: true,
          message: 'Announcement type is required'
        }]
      })( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_5__["Select"], {
        placeholder: "Select announcement type",
        onChange: this.handleChange,
        disabled: true
      }, !Object(util__WEBPACK_IMPORTED_MODULE_16__["isNullOrUndefined"])(announcementType) ? announcementType.map(function (value, index) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Option, {
          key: index,
          value: value.id
        }, value.name);
      }) : ''))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FormItem, _extends({}, _helpers_formItem__WEBPACK_IMPORTED_MODULE_10__["default"], {
        style: {
          marginBottom: 10 + 'px',
          display: 'flex',
          justifyContent: 'flex-end'
        }
      }), this.state.showEmojiPicker ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(emoji_mart__WEBPACK_IMPORTED_MODULE_14__["Picker"], {
        set: "emojione",
        style: {
          width: 'auto'
        },
        emojiTooltip: false,
        showPreview: false,
        showSkinTones: false,
        onSelect: this.addEmoji
      }) : null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FormItem, _extends({}, _helpers_formItem__WEBPACK_IMPORTED_MODULE_10__["default"], {
        style: {
          width: '100%',
          marginBottom: '10px',
          textAlign: 'left'
        },
        label: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_utility_intlMessages__WEBPACK_IMPORTED_MODULE_9__["default"], {
          id: "form.description"
        })
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: {
          width: 100 + '%',
          display: 'flex'
        }
      }, getFieldDecorator('description', {
        rules: [{
          required: true,
          message: 'Description is required'
        }]
      })( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TextArea, {
        rows: 3,
        style: {
          width: 95 + '%'
        },
        onChange: this.handleChange
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_5__["Button"], {
        type: "button",
        className: "toggle-emoji",
        onClick: this.toggleEmojiPicker,
        style: {
          height: 'auto',
          marginBottom: '4px',
          padding: '10px'
        } //style={{width:5+"%", height:0,backgroundColor:"white",borderRadius: "10px"}}

      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_feather__WEBPACK_IMPORTED_MODULE_15__["Smile"], null)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FormItem, _extends({}, _helpers_formItem__WEBPACK_IMPORTED_MODULE_10__["default"], {
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
        onChange: this.handleChange //className= "upload-list-inline"

      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_5__["Button"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_5__["Icon"], {
        type: "upload"
      }), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_utility_intlMessages__WEBPACK_IMPORTED_MODULE_9__["default"], {
        id: "form.upload"
      })))))))) : modalType === 'edit' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_5__["Form"], {
        className: "isoCardInfoForm FormData"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_5__["Row"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_5__["Col"], {
        className: "ant-col-xl-24 ant-col-lg-24"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FormItem, _extends({}, _helpers_formItem__WEBPACK_IMPORTED_MODULE_10__["default"], {
        label: "Title",
        hasFeedback: true,
        style: {
          marginBottom: 10 + 'px'
        }
      }), getFieldDecorator('title', {
        initialValue: row.title,
        rules: [{
          required: true,
          message: 'Title is required'
        }, {
          max: 200,
          message: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_utility_intlMessages__WEBPACK_IMPORTED_MODULE_9__["default"], {
            id: "form.validate.max200"
          })
        }]
      })( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_5__["Input"], {
        onChange: this.handleChange
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FormItem, _extends({}, _helpers_formItem__WEBPACK_IMPORTED_MODULE_10__["default"], {
        label: "Announcement date",
        hasFeedback: true,
        style: {
          marginBottom: 10 + 'px'
        }
      }), getFieldDecorator('announced_date', {
        initialValue: row.announcement_date ? moment__WEBPACK_IMPORTED_MODULE_4___default()(row.announcement_date, _helpers_helperFunc__WEBPACK_IMPORTED_MODULE_11__["default"].dateFormat) : null,
        rules: [{
          required: true,
          message: 'Announcement date is required'
        }]
      })( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_5__["DatePicker"], {
        format: _helpers_helperFunc__WEBPACK_IMPORTED_MODULE_11__["default"].dateFormat,
        disabledDate: this.disabledDate,
        allowClear: false,
        onChange: this.handleChange
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FormItem, _extends({}, _helpers_formItem__WEBPACK_IMPORTED_MODULE_10__["default"], {
        label: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "Announcement Type"),
        hasFeedback: true,
        style: {
          marginBottom: 10 + 'px'
        }
      }), getFieldDecorator('announcement_type_id', {
        initialValue: row && row.announcement_type_id ? row.announcement_type_id : null,
        rules: [{
          required: true,
          message: 'Announcement type is required'
        }]
      })( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_5__["Select"], {
        placeholder: "Select announcement type",
        onChange: this.handleChange
      }, !Object(util__WEBPACK_IMPORTED_MODULE_16__["isNullOrUndefined"])(announcementType) ? announcementType.map(function (value, index) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Option, {
          key: index,
          value: value.id
        }, value.name);
      }) : ''))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FormItem, _extends({}, _helpers_formItem__WEBPACK_IMPORTED_MODULE_10__["default"], {
        style: {
          marginBottom: 10 + 'px',
          display: 'flex',
          justifyContent: 'flex-end'
        }
      }), this.state.showEmojiPicker ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(emoji_mart__WEBPACK_IMPORTED_MODULE_14__["Picker"], {
        set: "emojione",
        style: {
          width: 'auto'
        },
        emojiTooltip: false,
        showPreview: false,
        showSkinTones: false,
        onSelect: this.addEmoji
      }) : null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FormItem, _extends({}, _helpers_formItem__WEBPACK_IMPORTED_MODULE_10__["default"], {
        style: {
          width: '100%',
          marginBottom: '10px',
          textAlign: 'left'
        },
        label: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_utility_intlMessages__WEBPACK_IMPORTED_MODULE_9__["default"], {
          id: "form.description"
        })
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: {
          width: 100 + '%',
          display: 'flex'
        }
      }, getFieldDecorator('description', {
        rules: [{
          required: true,
          message: 'Description is required'
        }],
        initialValue: row.description
      })( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TextArea, {
        rows: 3,
        style: {
          width: 95 + '%'
        },
        onChange: this.handleChange
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_5__["Button"], {
        type: "button",
        className: "toggle-emoji",
        onClick: this.toggleEmojiPicker,
        style: {
          height: 'auto',
          marginBottom: '4px',
          padding: '10px'
        } //style={{width:5+"%", height:0,backgroundColor:"white",borderRadius: "10px"}}

      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_feather__WEBPACK_IMPORTED_MODULE_15__["Smile"], null)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FormItem, _extends({}, _helpers_formItem__WEBPACK_IMPORTED_MODULE_10__["default"], {
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
      }), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_utility_intlMessages__WEBPACK_IMPORTED_MODULE_9__["default"], {
        id: "form.upload"
      }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FormItem, _extends({}, _helpers_formItem__WEBPACK_IMPORTED_MODULE_10__["default"], {
        label: "Status"
      }), getFieldDecorator('status', {
        initialValue: row ? row.status : ''
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
      })))))))) : modalType === 'changeStatus' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_5__["Form"], {
        className: "FormData"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FormItem, _extends({}, _helpers_formItem__WEBPACK_IMPORTED_MODULE_10__["default"], {
        label: "Status"
      }), getFieldDecorator('status', {
        initialValue: row ? row.status : ''
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
      })))))) : modalType === 'viewUser' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "clearfix"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_control_style__WEBPACK_IMPORTED_MODULE_6__["TableWrapper"], {
        dataSource: dataSource,
        columns: columns,
        bordered: true // pagination={false}

      })) : modalType === 'viewInfo' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "clearfix"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "clearfix"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "detailField clearfix"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        className: "label"
      }, "User"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "contentDetail"
      }, row && row.admin ? row.admin.full_name : '')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "detailField clearfix"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        className: "label"
      }, "Title"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "contentDetail"
      }, row ? row.title : '')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "detailField clearfix"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        className: "label detailFieldFullBorder"
      }, "Type"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "contentDetail"
      }, row && row.announcement_type ? row.announcement_type.name : '')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "detailField clearfix"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        className: "label detailFieldFullBorder"
      }, "Date"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "contentDetail"
      }, row && row.announcement_date ? moment__WEBPACK_IMPORTED_MODULE_4___default()(row.announcement_date).format('DD/MM/YYYY') : '')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "detailField clearfix"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        className: "label detailFieldFullBorder"
      }, "Created at"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "contentDetail"
      }, row && row.created_at ? moment__WEBPACK_IMPORTED_MODULE_4___default()(row.created_at).format('DD/MM/YYYY HH:mm:ss') : ''))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        style: {
          fontWeight: 'bold',
          padding: '0 7px'
        }
      }, "Description:")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: {
          fontWeight: '500',
          padding: '7px 7px'
        }
      }, row ? row.description : ''), images.map(function (image, index) {
        return [/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
          alt: "",
          key: index,
          style: {
            width: '100%',
            margin: '4px 0'
          },
          src: _settings__WEBPACK_IMPORTED_MODULE_12__["urlConfig"].imageUrl + image
        }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
          key: index + images.length
        })];
      })) : '')));
    }
  }]);

  return ModalFormAccount;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

var WrappedModalFormAccount = antd__WEBPACK_IMPORTED_MODULE_5__["Form"].create()(ModalFormAccount);
/* harmony default export */ __webpack_exports__["default"] = (WrappedModalFormAccount);

/***/ }),

/***/ "./resources/js/isomophic/public/images/imagePrint.jpg":
/*!*************************************************************!*\
  !*** ./resources/js/isomophic/public/images/imagePrint.jpg ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/imagePrint.jpg?14225a569158b649a168854569af9194";

/***/ }),

/***/ "./resources/js/isomophic/public/images/logo.png":
/*!*******************************************************!*\
  !*** ./resources/js/isomophic/public/images/logo.png ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/logo.png?c21b12899044c3377229f1ade7d2c207";

/***/ })

}]);