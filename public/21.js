(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[21],{

/***/ "./resources/js/isomophic/admin/components/News/index.js":
/*!***************************************************************!*\
  !*** ./resources/js/isomophic/admin/components/News/index.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _common_modal_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../common/modal.style */ "./resources/js/isomophic/common/modal.style.js");
/* harmony import */ var _components_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../components/base */ "./resources/js/isomophic/components/base/index.js");
/* harmony import */ var _src_settings_withDirection__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../src/settings/withDirection */ "./resources/js/src/settings/withDirection.js");
/* harmony import */ var _components_feedback_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components/feedback/modal */ "./resources/js/isomophic/components/feedback/modal.js");
/* harmony import */ var _settings__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../settings */ "./resources/js/isomophic/settings/index.js");
/* harmony import */ var _common_data_style__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../common/data.style */ "./resources/js/isomophic/common/data.style.js");
/* harmony import */ var _helpers_helperFunc__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../helpers/helperFunc */ "./resources/js/isomophic/helpers/helperFunc.js");
/* harmony import */ var _common_styleControl__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../common/styleControl */ "./resources/js/isomophic/common/styleControl.js");
/* harmony import */ var draft_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! draft-js */ "./node_modules/draft-js/lib/Draft.js");
/* harmony import */ var draft_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(draft_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var draftjs_to_html__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! draftjs-to-html */ "./node_modules/draftjs-to-html/lib/draftjs-to-html.js");
/* harmony import */ var draftjs_to_html__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(draftjs_to_html__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var html_to_draftjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! html-to-draftjs */ "./node_modules/html-to-draftjs/dist/html-to-draftjs.js");
/* harmony import */ var html_to_draftjs__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(html_to_draftjs__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var react_draft_wysiwyg__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-draft-wysiwyg */ "./node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.js");
/* harmony import */ var react_draft_wysiwyg__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_draft_wysiwyg__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _node_modules_react_draft_wysiwyg_dist_react_draft_wysiwyg_css__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css */ "./node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css");
/* harmony import */ var _node_modules_react_draft_wysiwyg_dist_react_draft_wysiwyg_css__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_node_modules_react_draft_wysiwyg_dist_react_draft_wysiwyg_css__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _components_utility_intlMessages__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../components/utility/intlMessages */ "./resources/js/isomophic/components/utility/intlMessages.js");
/* harmony import */ var _helpers_formItem__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../helpers/formItem */ "./resources/js/isomophic/helpers/formItem.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! util */ "./node_modules/node-libs-browser/node_modules/util/util.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_18__);
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












 //import CKEditor from "react-ckeditor-component";
//import CKEditor from 'ckeditor4-react';
//import CKEditor from '@ckeditor/ckeditor5-react';
//import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
//import Editor from "nib-core";


 // import "../../../../../../n"






var dummyRequest = _helpers_helperFunc__WEBPACK_IMPORTED_MODULE_7__["default"].dummyRequest,
    beforeUpload = _helpers_helperFunc__WEBPACK_IMPORTED_MODULE_7__["default"].beforeUpload,
    getBase64 = _helpers_helperFunc__WEBPACK_IMPORTED_MODULE_7__["default"].getBase64;
var WDModal = Object(_common_modal_style__WEBPACK_IMPORTED_MODULE_1__["default"])(_components_feedback_modal__WEBPACK_IMPORTED_MODULE_4__["default"]);
var Modal = Object(_src_settings_withDirection__WEBPACK_IMPORTED_MODULE_3__["default"])(WDModal);
var FormItem = antd__WEBPACK_IMPORTED_MODULE_17__["Form"].Item;
var Option = antd__WEBPACK_IMPORTED_MODULE_17__["Select"].Option;
var TextArea = antd__WEBPACK_IMPORTED_MODULE_17__["Input"].TextArea;
var blocksFromHTML1 = html_to_draftjs__WEBPACK_IMPORTED_MODULE_11___default()('');
var content = draft_js__WEBPACK_IMPORTED_MODULE_9__["ContentState"].createFromBlockArray(blocksFromHTML1);

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

    _defineProperty(_assertThisInitialized(_this), "onChange", function (evt) {
      var newContent = evt.editor.getData();

      _this.setState({
        content: newContent,
        changed: true
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleCancel", function () {
      console.log('vao day');

      _this.setState({
        editorState: draft_js__WEBPACK_IMPORTED_MODULE_9__["EditorState"].createWithContent(content),
        changed: false
      });

      _this.props.handleCancel();
    });

    var _editorState = draft_js__WEBPACK_IMPORTED_MODULE_9__["EditorState"].createWithContent(content);

    if (props.content != null && typeof props.content !== 'undefined' && props.content !== '') {
      var _content = props.content;

      if (props.content.startsWith('<img')) {
        _content = '<p></p>' + props.content;
      }

      var blocksFromHtml = html_to_draftjs__WEBPACK_IMPORTED_MODULE_11___default()(_content);
      var contentBlocks = blocksFromHtml.contentBlocks,
          entityMap = blocksFromHtml.entityMap;
      var contentState = draft_js__WEBPACK_IMPORTED_MODULE_9__["ContentState"].createFromBlockArray(contentBlocks, entityMap);
      _editorState = draft_js__WEBPACK_IMPORTED_MODULE_9__["EditorState"].createWithContent(contentState);
    }

    _this.state = _objectSpread({}, props, {
      changed: false,
      editorState: _editorState,
      content: 'content'
    });
    return _this;
  }

  _createClass(ModalForm, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.modalType === _helpers_helperFunc__WEBPACK_IMPORTED_MODULE_7__["default"].modeType.Insert) {
        this.setState({
          editorState: this.state.editorState
        });
      } else if (nextProps.modalType === _helpers_helperFunc__WEBPACK_IMPORTED_MODULE_7__["default"].modeType.Update) {
        if (nextProps.row.content != null && typeof nextProps.row.content !== 'undefined' && nextProps.row.content !== '') {
          var _content2 = nextProps.row.content;

          if (nextProps.row.content.startsWith('<img')) {
            _content2 = '<p></p>' + nextProps.row.content;
          }

          var _htmlToDraft = html_to_draftjs__WEBPACK_IMPORTED_MODULE_11___default()(_content2),
              contentBlocks = _htmlToDraft.contentBlocks,
              entityMap = _htmlToDraft.entityMap;

          var contentState = draft_js__WEBPACK_IMPORTED_MODULE_9__["ContentState"].createFromBlockArray(contentBlocks, entityMap);
          var editorState = draft_js__WEBPACK_IMPORTED_MODULE_9__["EditorState"].createWithContent(contentState);
          this.setState({
            editorState: editorState
          });
        }
      }
    } //Bật tắt nút Save

  }, {
    key: "onBlur",
    value: function onBlur(evt) {
      console.log('onBlur event called with event info: ', evt);
    }
  }, {
    key: "afterPaste",
    value: function afterPaste(evt) {
      console.log('afterPaste event called with event info: ', evt);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          modalActive = _this$props.modalActive,
          modalType = _this$props.modalType,
          row = _this$props.row,
          handleSubmit = _this$props.handleSubmit,
          newsType = _this$props.newsType,
          updateStatusAdd = _this$props.updateStatusAdd; //draft.js

      var editorState = this.state.editorState;
      var fileList = [];

      if (row.image) {
        fileList.push({
          uid: '-1',
          name: '',
          status: 'done',
          url: row.image,
          thumbUrl: _settings__WEBPACK_IMPORTED_MODULE_5__["urlConfig"].imageUrl + 'img/news/' + row.image
        });
      }

      var getFieldDecorator = this.props.form.getFieldDecorator;

      var normFile = function normFile(e) {
        if (Array.isArray(e)) {
          return e;
        }

        e.fileList = e.fileList.slice(-1);
        return e && e.fileList;
      }; //Xử lý khi click nút Save


      var saveButton = function saveButton(e) {
        e.preventDefault();

        _this2.props.form.validateFieldsAndScroll(function (err, values) {
          if (!err) {
            row.title = values.title;
            row.idcategory = values.idcategory;
            row.intro = values.intro; // row.image = values.image;

            row.content = draftjs_to_html__WEBPACK_IMPORTED_MODULE_10___default()(Object(draft_js__WEBPACK_IMPORTED_MODULE_9__["convertToRaw"])(_this2.state.editorState.getCurrentContent()));

            if (modalType === _helpers_helperFunc__WEBPACK_IMPORTED_MODULE_7__["default"].modeType.Insert) {
              row.status = 1;
            } else {
              row.status = values.status;
            }

            var baseImage = '';

            if (values.image[0].originFileObj) {
              getBase64(values.image[0].originFileObj, function (result) {
                baseImage = result;
                var str = baseImage.replace(/^data:image\/[a-z]+;base64,/, '');
                row.image = str;
                handleSubmit(modalType, row);
              });
            } else {
              row.image = '';
              handleSubmit(modalType, row);
            }

            _this2.handleCancel();

            setTimeout(function () {
              _this2.setState({
                editorState: draft_js__WEBPACK_IMPORTED_MODULE_9__["EditorState"].createWithContent(content),
                changed: false
              });
            }, 1000);
          }
        });
      };

      var uploadImageCallBack = function uploadImageCallBack(file) {
        return new Promise(function (resolve, reject) {
          getBase64(file, function (result) {
            try {
              var str = result.replace(/^data:image\/[a-z]+;base64,/, '');
              var object = {};
              object['image'] = str;
              var vbody = JSON.stringify(object);
              fetch(_settings__WEBPACK_IMPORTED_MODULE_5__["urlConfig"].baseUrl + 'v1/uploadImage', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                  Accept: 'application/json',
                  Authorization: 'Bearer ' + localStorage.getItem('id_token')
                },
                body: vbody
              }).then(function (response) {
                return response.json();
              }).then(function (data) {
                resolve({
                  data: {
                    link: _settings__WEBPACK_IMPORTED_MODULE_5__["urlConfig"].imageUrl + 'img/news/' + data.data
                  }
                });
              });
            } catch (error) {
              reject(error);
            }
          });
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
        onCancel: this.handleCancel,
        cancelText: modalType === _helpers_helperFunc__WEBPACK_IMPORTED_MODULE_7__["default"].modeType.View ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_utility_intlMessages__WEBPACK_IMPORTED_MODULE_15__["default"], {
          id: "button.close"
        }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_utility_intlMessages__WEBPACK_IMPORTED_MODULE_15__["default"], {
          id: "button.cancel"
        }),
        onOk: saveButton // okText="Save"
        ,
        width: 100 + '%',
        style: {
          top: 0
        },
        footer: modalType === _helpers_helperFunc__WEBPACK_IMPORTED_MODULE_7__["default"].modeType.Insert ? [/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_17__["Button"], {
          key: "cancel",
          className: "cancelType",
          onClick: this.handleCancel,
          style: Object(_common_styleControl__WEBPACK_IMPORTED_MODULE_8__["default"])(3, modalType)
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_utility_intlMessages__WEBPACK_IMPORTED_MODULE_15__["default"], {
          id: "button.close"
        })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_17__["Button"], {
          key: "ok",
          className: "okType",
          onClick: saveButton,
          style: Object(_common_styleControl__WEBPACK_IMPORTED_MODULE_8__["default"])(1, modalType),
          disabled: !this.state.changed
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_utility_intlMessages__WEBPACK_IMPORTED_MODULE_15__["default"], {
          id: "button.save"
        })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_17__["Button"], {
          key: "oknew",
          className: "okNewType",
          onClick: saveButton,
          style: Object(_common_styleControl__WEBPACK_IMPORTED_MODULE_8__["default"])(2, modalType),
          disabled: !this.state.changed
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_utility_intlMessages__WEBPACK_IMPORTED_MODULE_15__["default"], {
          id: "button.save&AddNew"
        }))] : [/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_17__["Button"], {
          key: "cancel",
          className: "cancelType",
          onClick: this.handleCancel,
          style: Object(_common_styleControl__WEBPACK_IMPORTED_MODULE_8__["default"])(3, modalType)
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_utility_intlMessages__WEBPACK_IMPORTED_MODULE_15__["default"], {
          id: "button.close"
        })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_17__["Button"], {
          key: "ok",
          className: "okType",
          onClick: saveButton,
          style: Object(_common_styleControl__WEBPACK_IMPORTED_MODULE_8__["default"])(1, modalType),
          disabled: !this.state.changed
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_utility_intlMessages__WEBPACK_IMPORTED_MODULE_15__["default"], {
          id: "button.save"
        }))]
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_data_style__WEBPACK_IMPORTED_MODULE_6__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "clearfix"
      }, modalType === 'insert' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_17__["Form"], {
        className: "FormData"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "LeftSideContent"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FormItem, _extends({}, _helpers_formItem__WEBPACK_IMPORTED_MODULE_16__["default"], {
        label: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "Lo\u1EA1i tin t\u1EE9c"),
        hasFeedback: true,
        style: {
          marginBottom: 10 + 'px'
        }
      }), getFieldDecorator('idcategory', {
        rules: [{
          required: true,
          message: 'Bắt buộc'
        }]
      })( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_17__["Select"], {
        placeholder: "Ch\u1ECDn lo\u1EA1i",
        onChange: this.handleChange
      }, newsType.map(function (value, index) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Option, {
          key: index,
          value: value.id
        }, value.name);
      })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FormItem, _extends({}, _helpers_formItem__WEBPACK_IMPORTED_MODULE_16__["default"], {
        label: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "Ti\xEAu \u0111\u1EC1"),
        hasFeedback: true,
        style: {
          marginBottom: 10 + 'px'
        }
      }), getFieldDecorator('title', {
        rules: [{
          required: true,
          message: 'Bắt buộc'
        }, {
          max: 200,
          message: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_utility_intlMessages__WEBPACK_IMPORTED_MODULE_15__["default"], {
            id: "form.validate.max200"
          })
        }]
      })( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_17__["Input"], {
        onChange: this.handleChange
      })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "RightSideContent"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FormItem, _extends({}, _helpers_formItem__WEBPACK_IMPORTED_MODULE_16__["default"], {
        label: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "Gi\u1EDBi thi\u1EC7u"),
        hasFeedback: true,
        style: {
          marginBottom: 10 + 'px'
        }
      }), getFieldDecorator('intro', {
        rules: [{
          required: true,
          message: 'Bắt buộc'
        }, {
          max: 500,
          message: 'Không quá 500 kí tự'
        }]
      })( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TextArea, {
        rows: 3,
        onChange: this.handleChange
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FormItem, _extends({}, _helpers_formItem__WEBPACK_IMPORTED_MODULE_16__["default"], {
        label: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "Tr\u1EA1ng th\xE1i"),
        style: {
          marginBottom: 10 + 'px'
        }
      }), getFieldDecorator('status', {
        initialValue: 1
      })( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_17__["Select"], {
        onChange: this.handleChange
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Option, {
        value: _helpers_helperFunc__WEBPACK_IMPORTED_MODULE_7__["default"].status.Active
      }, _helpers_helperFunc__WEBPACK_IMPORTED_MODULE_7__["default"].status.properties[_helpers_helperFunc__WEBPACK_IMPORTED_MODULE_7__["default"].status.Active]), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Option, {
        value: _helpers_helperFunc__WEBPACK_IMPORTED_MODULE_7__["default"].status.Inactive
      }, _helpers_helperFunc__WEBPACK_IMPORTED_MODULE_7__["default"].status.properties[_helpers_helperFunc__WEBPACK_IMPORTED_MODULE_7__["default"].status.Inactive])))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FormItem, _extends({}, _helpers_formItem__WEBPACK_IMPORTED_MODULE_16__["default"], {
        label: "\u1EA2nh bi\u1EC3u tr\u01B0ng (261x130)",
        style: {
          marginBottom: 10 + 'px'
        }
      }), getFieldDecorator('image', {
        valuePropName: 'fileList',
        getValueFromEvent: normFile,
        rules: [{
          required: true,
          message: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_utility_intlMessages__WEBPACK_IMPORTED_MODULE_15__["default"], {
            id: "form.validate.image"
          })
        }]
      })( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_17__["Upload"], {
        name: "logo",
        customRequest: dummyRequest,
        listType: "picture",
        accept: "image/png, image/jpeg",
        beforeUpload: beforeUpload,
        onChange: this.handleChange
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_17__["Button"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_17__["Icon"], {
        type: "upload"
      }), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_utility_intlMessages__WEBPACK_IMPORTED_MODULE_15__["default"], {
        id: "form.upload"
      })))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "clearfix"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_draft_wysiwyg__WEBPACK_IMPORTED_MODULE_13__["Editor"], {
        wrapperClassName: "demo-wrapper",
        editorClassName: "editer-content",
        editorState: editorState,
        onEditorStateChange: this.onEditorStateChange,
        onChange: this.handleChange,
        initialEditorState: draft_js__WEBPACK_IMPORTED_MODULE_9__["EditorState"].createEmpty(),
        toolbar: {
          inline: {
            inDropdown: true
          },
          list: {
            inDropdown: true
          },
          textAlign: {
            inDropdown: true
          },
          link: {
            inDropdown: true
          },
          history: {
            inDropdown: true
          },
          image: {
            uploadCallback: uploadImageCallBack,
            previewImage: true //  alt: { present: true, mandatory: true }

          }
        }
      }))) : modalType === 'edit' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_17__["Form"], {
        className: "FormData"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "LeftSideContent"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FormItem, _extends({}, _helpers_formItem__WEBPACK_IMPORTED_MODULE_16__["default"], {
        label: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "Lo\u1EA1i tin t\u1EE9c"),
        hasFeedback: true,
        style: {
          marginBottom: 10 + 'px'
        }
      }), getFieldDecorator('idcategory', {
        initialValue: row.idcategory,
        rules: [{
          required: true,
          message: 'Bắt buộc'
        }]
      })( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_17__["Select"], {
        placeholder: "Ch\u1ECDn lo\u1EA1i",
        onChange: this.handleChange
      }, newsType.map(function (value, index) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Option, {
          key: index,
          value: value.id
        }, value.name);
      })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FormItem, _extends({}, _helpers_formItem__WEBPACK_IMPORTED_MODULE_16__["default"], {
        label: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "Ti\xEAu \u0111\u1EC1"),
        hasFeedback: true,
        style: {
          marginBottom: 10 + 'px'
        }
      }), getFieldDecorator('title', {
        initialValue: row.title,
        rules: [{
          required: true,
          message: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_utility_intlMessages__WEBPACK_IMPORTED_MODULE_15__["default"], {
            id: "form.validate.title"
          })
        }, {
          max: 200,
          message: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_utility_intlMessages__WEBPACK_IMPORTED_MODULE_15__["default"], {
            id: "form.validate.max200"
          })
        }]
      })( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_17__["Input"], {
        onChange: this.handleChange
      })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "RightSideContent"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FormItem, _extends({}, _helpers_formItem__WEBPACK_IMPORTED_MODULE_16__["default"], {
        label: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "Gi\u1EDBi thi\u1EC7u"),
        hasFeedback: true,
        style: {
          marginBottom: 10 + 'px'
        }
      }), getFieldDecorator('intro', {
        initialValue: row.intro,
        rules: [{
          max: 500,
          message: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_utility_intlMessages__WEBPACK_IMPORTED_MODULE_15__["default"], {
            id: "form.validate.max500"
          })
        }]
      })( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TextArea, {
        rows: 3,
        onChange: this.handleChange
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FormItem, _extends({}, _helpers_formItem__WEBPACK_IMPORTED_MODULE_16__["default"], {
        label: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "Tr\u1EA1ng th\xE1i"),
        style: {
          marginBottom: 10 + 'px'
        }
      }), getFieldDecorator('status', {
        initialValue: row.status
      })( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_17__["Select"], {
        onChange: this.handleChange
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Option, {
        value: _helpers_helperFunc__WEBPACK_IMPORTED_MODULE_7__["default"].status.Active
      }, _helpers_helperFunc__WEBPACK_IMPORTED_MODULE_7__["default"].status.properties[_helpers_helperFunc__WEBPACK_IMPORTED_MODULE_7__["default"].status.Active]), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Option, {
        value: _helpers_helperFunc__WEBPACK_IMPORTED_MODULE_7__["default"].status.Inactive
      }, _helpers_helperFunc__WEBPACK_IMPORTED_MODULE_7__["default"].status.properties[_helpers_helperFunc__WEBPACK_IMPORTED_MODULE_7__["default"].status.Inactive])))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FormItem, _extends({}, _helpers_formItem__WEBPACK_IMPORTED_MODULE_16__["default"], {
        label: "\u1EA2nh bi\u1EC3u tr\u01B0ng (261x130)",
        style: {
          marginBottom: 10 + 'px'
        }
      }), getFieldDecorator('image', {
        valuePropName: 'fileList',
        getValueFromEvent: normFile,
        initialValue: fileList.length > 0 ? fileList : null,
        rules: [{
          required: true,
          message: 'Bắt buộc'
        }]
      })( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_17__["Upload"], {
        name: "logo",
        customRequest: dummyRequest,
        listType: "picture",
        accept: "image/png, image/jpeg",
        beforeUpload: beforeUpload,
        onChange: this.handleChange
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_17__["Button"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_17__["Icon"], {
        type: "upload"
      }), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_utility_intlMessages__WEBPACK_IMPORTED_MODULE_15__["default"], {
        id: "form.upload"
      })))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "clearfix"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_draft_wysiwyg__WEBPACK_IMPORTED_MODULE_13__["Editor"], {
        wrapperClassName: "demo-wrapper",
        editorClassName: "demo-editor",
        editorState: editorState,
        onEditorStateChange: this.onEditorStateChange,
        initialEditorState: editorState,
        toolbar: {
          inline: {
            inDropdown: true
          },
          list: {
            inDropdown: true
          },
          textAlign: {
            inDropdown: true
          },
          link: {
            inDropdown: true
          },
          history: {
            inDropdown: true
          },
          image: {
            uploadCallback: uploadImageCallBack,
            previewImage: true // alt: { present: true, mandatory: true }

          }
        }
      }))) : '')));
    }
  }]);

  return ModalForm;
}(_components_base__WEBPACK_IMPORTED_MODULE_2__["default"]);

var WrappedModalForm = antd__WEBPACK_IMPORTED_MODULE_17__["Form"].create()(ModalForm);
/* harmony default export */ __webpack_exports__["default"] = (WrappedModalForm);

/***/ }),

/***/ "./resources/js/isomophic/admin/containers/News/index.js":
/*!***************************************************************!*\
  !*** ./resources/js/isomophic/admin/containers/News/index.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _containers_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../containers/base */ "./resources/js/isomophic/containers/base/index.js");
/* harmony import */ var _redux_News_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../redux/News/actions */ "./resources/js/isomophic/admin/redux/News/actions.js");
/* harmony import */ var _components_News__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/News */ "./resources/js/isomophic/admin/components/News/index.js");
/* harmony import */ var _settings_basicStyle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../settings/basicStyle */ "./resources/js/isomophic/settings/basicStyle.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _common_control_style__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../common/control.style */ "./resources/js/isomophic/common/control.style.js");
/* harmony import */ var _common_data_style__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../common/data.style */ "./resources/js/isomophic/common/data.style.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _components_feedback_popconfirm__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../components/feedback/popconfirm */ "./resources/js/isomophic/components/feedback/popconfirm.js");
/* harmony import */ var _components_utility_layoutWrapper__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../components/utility/layoutWrapper */ "./resources/js/isomophic/components/utility/layoutWrapper.js");
/* harmony import */ var _components_utility_box__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../components/utility/box */ "./resources/js/isomophic/components/utility/box.js");
/* harmony import */ var _components_utility_contentHolder__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../components/utility/contentHolder */ "./resources/js/isomophic/components/utility/contentHolder.js");
/* harmony import */ var _settings_index__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../settings/index */ "./resources/js/isomophic/settings/index.js");
/* harmony import */ var _helpers_helperFunc__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../helpers/helperFunc */ "./resources/js/isomophic/helpers/helperFunc.js");
/* harmony import */ var _components_utility_intlMessages__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../components/utility/intlMessages */ "./resources/js/isomophic/components/utility/intlMessages.js");
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


















var trimByWord = _helpers_helperFunc__WEBPACK_IMPORTED_MODULE_15__["default"].trimByWord;

var News = /*#__PURE__*/function (_BaseComponent) {
  _inherits(News, _BaseComponent);

  var _super = _createSuper(News);

  function News(props) {
    var _this;

    _classCallCheck(this, News);

    _this = _super.call(this, props); // save and add

    _defineProperty(_assertThisInitialized(_this), "handleRefresh", function () {
      var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

      _this.props.loadData({
        name: '',
        page: _this.state.page,
        limit: _settings_index__WEBPACK_IMPORTED_MODULE_14__["dataConfig"].pageLimit
      });

      _this.reset();
    });

    _defineProperty(_assertThisInitialized(_this), "reset", function () {
      _this.setState({
        search: '',
        page: 1
      });
    });

    _this.updateStatusAdd = _this.updateStatusAdd.bind(_assertThisInitialized(_this));
    _this.state = {
      confirmDirty: false,
      search: '',
      connection: null,
      modalType: '',
      page: 1,
      modalActive: false,
      strName: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_utility_intlMessages__WEBPACK_IMPORTED_MODULE_16__["default"], {
        id: "form.news"
      })
    };
    return _this;
  } // save and add


  _createClass(News, [{
    key: "updateStatusAdd",
    value: function updateStatusAdd(value) {
      this.props.updateStatusSaveAdd(value);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          rows = _this$props.rows,
          count = _this$props.count,
          row = _this$props.row,
          newsType = _this$props.newsType;
      console.log('test' + newsType);
      var rowStyle = _settings_basicStyle__WEBPACK_IMPORTED_MODULE_5__["default"].rowStyle,
          colStyle = _settings_basicStyle__WEBPACK_IMPORTED_MODULE_5__["default"].colStyle,
          gutter = _settings_basicStyle__WEBPACK_IMPORTED_MODULE_5__["default"].gutter;
      var modalActive = this.state.modalActive;
      var dataSource = [];

      if (typeof rows !== 'undefined') {
        Object.keys(rows).map(function (row, index) {
          return dataSource.push(_objectSpread({}, rows[row], {
            key: row
          }));
        });
      }

      var columns = [];
      columns = [{
        title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_utility_intlMessages__WEBPACK_IMPORTED_MODULE_16__["default"], {
          id: "form.title"
        }),
        dataIndex: 'title',
        key: 'title',
        width: '200px',
        sorter: function sorter(a, b) {
          if (a.title < b.title) return -1;
          if (a.title > b.title) return 1;
          return 0;
        },
        render: function render(text, row) {
          if (row.title) {
            return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", null, trimByWord(row.title));
          }
        }
      }, {
        title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_utility_intlMessages__WEBPACK_IMPORTED_MODULE_16__["default"], {
          id: "form.type"
        }),
        dataIndex: 'news_type.name',
        key: 'news_type.name',
        width: '200px',
        sorter: function sorter(a, b) {
          if (a.news_type.name < b.news_type.name) return -1;
          if (a.news_type.name > b.news_type.name) return 1;
          return 0;
        },
        render: function render(text, row) {
          if (row.news_type && row.news_type.name) {
            return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, row.news_type.name);
          }
        }
      }, {
        title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_utility_intlMessages__WEBPACK_IMPORTED_MODULE_16__["default"], {
          id: "form.image"
        }),
        dataIndex: 'image',
        key: 'image',
        width: '200px',
        className: 'noWrapCell',
        render: function render(text, row) {
          if (row.image) {
            return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
              style: {
                height: '60px'
              },
              alt: row.title,
              src: _settings_index__WEBPACK_IMPORTED_MODULE_14__["urlConfig"].imageUrl + 'img/news/' + row.image
            });
          }
        }
      }, {
        title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_utility_intlMessages__WEBPACK_IMPORTED_MODULE_16__["default"], {
          id: "form.introduction"
        }),
        dataIndex: 'intro',
        key: 'intro',
        width: '200px',
        sorter: function sorter(a, b) {
          if (a.intro < b.intro) return -1;
          if (a.intro > b.intro) return 1;
          return 0;
        },
        render: function render(text, row) {
          if (row.intro) {
            return trimByWord(row.intro);
          }
        }
      }, // {
      // 	title: 'Public Date',
      // 	dataIndex: 'publish_date',
      // 	width: '170px',
      // 	key: 'PublicDate',
      // 	sorter: (a, b) => {
      // 		if (a.publish_date < b.publish_date) return -1;
      // 		if (a.publish_date > b.publish_date) return 1;
      // 		return 0;
      // 	},
      // 	render: (text, row) => {
      // 		if (row.publish_date) {
      // 			return <span>{moment(row.publish_date).format(helperFunc.fomatDateTime())}</span>;
      // 		}
      // 	}
      // },
      {
        title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_utility_intlMessages__WEBPACK_IMPORTED_MODULE_16__["default"], {
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
          var className;

          if (row.status === _helpers_helperFunc__WEBPACK_IMPORTED_MODULE_15__["default"].status.Active) {
            className = 'publish';
          } else {
            className = 'private';
          }

          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_control_style__WEBPACK_IMPORTED_MODULE_7__["StatusTag"], {
            className: className
          }, row.status === _helpers_helperFunc__WEBPACK_IMPORTED_MODULE_15__["default"].status.Active ? _helpers_helperFunc__WEBPACK_IMPORTED_MODULE_15__["default"].status.properties[_helpers_helperFunc__WEBPACK_IMPORTED_MODULE_15__["default"].status.Active] : _helpers_helperFunc__WEBPACK_IMPORTED_MODULE_15__["default"].status.properties[_helpers_helperFunc__WEBPACK_IMPORTED_MODULE_15__["default"].status.Inactive]);
        }
      }, {
        title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_utility_intlMessages__WEBPACK_IMPORTED_MODULE_16__["default"], {
          id: "form.updatedBy"
        }),
        dataIndex: 'admin.username',
        className: 'noWrapCell',
        key: 'admin.username',
        sorter: function sorter(a, b) {
          if (a.admin.username < b.admin.username) return -1;
          if (a.admin.username > b.admin.username) return 1;
          return 0;
        },
        render: function render(text, row) {
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, row.admin.username);
        }
      }, {
        title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_utility_intlMessages__WEBPACK_IMPORTED_MODULE_16__["default"], {
          id: "form.updatedAt"
        }),
        dataIndex: 'updated_at',
        width: '170px',
        key: 'updated_at',
        sorter: function sorter(a, b) {
          if (a.updated_at < b.updated_at) return -1;
          if (a.updated_at > b.updated_at) return 1;
          return 0;
        },
        render: function render(text, row) {
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, moment__WEBPACK_IMPORTED_MODULE_6___default()(row.updated_at).format(_helpers_helperFunc__WEBPACK_IMPORTED_MODULE_15__["default"].fomatDateTime()));
        }
      }, {
        title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_utility_intlMessages__WEBPACK_IMPORTED_MODULE_16__["default"], {
          id: "form.action"
        }),
        key: 'action',
        fixed: 'right',
        width: 100,
        className: 'noWrapCell',
        render: function render(text, row) {
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_control_style__WEBPACK_IMPORTED_MODULE_7__["ActionWrapper"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
            onClick: _this2.handleModal.bind(_this2, 'edit', row),
            className: "aSimple"
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_9__["Icon"], {
            type: "form",
            theme: "outlined"
          })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_feedback_popconfirm__WEBPACK_IMPORTED_MODULE_10__["default"], {
            title: "B\u1EA1n c\xF3 ch\u1EAFc mu\u1ED1n xo\xE1?",
            okText: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_utility_intlMessages__WEBPACK_IMPORTED_MODULE_16__["default"], {
              id: "button.delete"
            }),
            cancelText: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_utility_intlMessages__WEBPACK_IMPORTED_MODULE_16__["default"], {
              id: "button.cancel"
            }),
            placement: "topRight",
            onConfirm: _this2.handleSubmit.bind(_this2, 'delete', row)
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
            className: "deleteBtn aSimple"
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
            className: "ion-android-delete deleteRow"
          }))));
        }
      }];
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_data_style__WEBPACK_IMPORTED_MODULE_8__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_utility_layoutWrapper__WEBPACK_IMPORTED_MODULE_11__["default"], {
        style: {
          padding: '0px'
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
        className: "PageHeader"
      }, " ", this.state.strName), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_9__["Row"], {
        style: rowStyle,
        gutter: gutter,
        justify: "start"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_9__["Col"], {
        md: 24,
        sm: 24,
        xs: 24,
        style: colStyle
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_utility_box__WEBPACK_IMPORTED_MODULE_12__["default"], {
        className: "boxWrapper"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_utility_contentHolder__WEBPACK_IMPORTED_MODULE_13__["default"], {
        style: {
          marginTop: 0,
          overflow: 'hidden'
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_control_style__WEBPACK_IMPORTED_MODULE_7__["TitleWrapper"], {
        className: "titleWrapper"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_control_style__WEBPACK_IMPORTED_MODULE_7__["ComponentTitle"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_9__["Input"], {
        onChange: this.handleSearchChange,
        className: "inputSearch",
        placeholder: "Ti\xEAu \u0111\u1EC1",
        onKeyUp: this.onKeyUp,
        value: this.state.search
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        className: "btSearch",
        onClick: this.handleSearch
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_9__["Icon"], {
        type: "search",
        theme: "outlined"
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_control_style__WEBPACK_IMPORTED_MODULE_7__["ButtonHolders"], {
        className: "group_bt_head"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        onClick: this.handleRefresh,
        className: "btnRefresh btWizard"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_9__["Icon"], {
        type: "sync",
        theme: "outlined"
      }), ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_utility_intlMessages__WEBPACK_IMPORTED_MODULE_16__["default"], {
        id: "button.refresh"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        onClick: this.handleModal.bind(this, 'insert', null),
        className: "btnAdd btWizard"
      }, ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_9__["Icon"], {
        type: "plus-square",
        theme: "outlined"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_utility_intlMessages__WEBPACK_IMPORTED_MODULE_16__["default"], {
        id: "button.add"
      })))), row ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_News__WEBPACK_IMPORTED_MODULE_4__["default"], {
        modalActive: modalActive,
        modalType: this.state.modalType,
        row: row,
        strName: this.state.strName,
        strAddress: this.state.strAddress,
        handleCancel: this.handleCancel,
        handleSubmit: this.handleSubmit,
        handleClose: this.handleCancel,
        newsType: newsType,
        updateStatusAdd: this.updateStatusAdd
      }) : '', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_control_style__WEBPACK_IMPORTED_MODULE_7__["TableWrapper"], {
        rowKey: "key",
        columns: columns,
        bordered: true,
        dataSource: dataSource,
        locale: {
          emptyText: this.props.isLoading === true ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            className: "ant-spin ant-spin-spinning ant-table-with-pagination ant-table-spin-holder"
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
            className: "ant-spin-dot ant-spin-dot-spin"
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", null))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_utility_intlMessages__WEBPACK_IMPORTED_MODULE_16__["default"], {
            id: "button.empty"
          }))
        } //loading={this.props.isLoading}
        ,
        className: "isoSimpleTable",
        pagination: {
          showSizeChanger: false,
          defaultCurrent: 1,
          defaultPageSize: _settings_index__WEBPACK_IMPORTED_MODULE_14__["dataConfig"].pageLimit || 10,
          hideOnSinglePage: true,
          onChange: this.onPageChange,
          total: count
        }
      }))))))));
    }
  }]);

  return News;
}(_containers_base__WEBPACK_IMPORTED_MODULE_2__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(function (state) {
  return _objectSpread({}, state.NewsReducer);
}, _redux_News_actions__WEBPACK_IMPORTED_MODULE_3__["default"])(News));

/***/ }),

/***/ "./resources/js/isomophic/components/feedback/popconfirm.js":
/*!******************************************************************!*\
  !*** ./resources/js/isomophic/components/feedback/popconfirm.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");

/* harmony default export */ __webpack_exports__["default"] = (antd__WEBPACK_IMPORTED_MODULE_0__["Popconfirm"]);

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