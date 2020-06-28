(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[5],{

/***/ "./resources/js/isomophic/containers/base/index.js":
/*!*********************************************************!*\
  !*** ./resources/js/isomophic/containers/base/index.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/base */ "./resources/js/isomophic/components/base/index.js");
/* harmony import */ var _common_control_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../common/control.style */ "./resources/js/isomophic/common/control.style.js");
/* harmony import */ var _components_utility_box__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/utility/box */ "./resources/js/isomophic/components/utility/box.js");
/* harmony import */ var _components_utility_contentHolder__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/utility/contentHolder */ "./resources/js/isomophic/components/utility/contentHolder.js");
/* harmony import */ var _settings_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../settings/index */ "./resources/js/isomophic/settings/index.js");
/* harmony import */ var _components_utility_layoutWrapper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/utility/layoutWrapper */ "./resources/js/isomophic/components/utility/layoutWrapper.js");
/* harmony import */ var _settings_basicStyle__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../settings/basicStyle */ "./resources/js/isomophic/settings/basicStyle.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _common_data_style__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../common/data.style */ "./resources/js/isomophic/common/data.style.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _components_uielements_tooltip__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../components/uielements/tooltip */ "./resources/js/isomophic/components/uielements/tooltip.js");
/* harmony import */ var _helpers_helperFunc__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../helpers/helperFunc */ "./resources/js/isomophic/helpers/helperFunc.js");
/* harmony import */ var _components_utility_intlMessages__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../components/utility/intlMessages */ "./resources/js/isomophic/components/utility/intlMessages.js");
/* harmony import */ var _helpers_message__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./../../helpers/message */ "./resources/js/isomophic/helpers/message.js");
/* harmony import */ var _helpers_flags__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./../../helpers/flags */ "./resources/js/isomophic/helpers/flags.js");
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
Description: add, edit, list, delete
Author: Bùi Văn Quý
Last Modified Author: Bùi Văn Quý
Created Date: 31/10/2018
Modified Date: 31/10/2018
*/
















var trimByWord = _helpers_helperFunc__WEBPACK_IMPORTED_MODULE_12__["default"].trimByWord;

var Objects = /*#__PURE__*/function (_BaseModal) {
  _inherits(Objects, _BaseModal);

  var _super = _createSuper(Objects);

  function Objects(props) {
    var _this;

    _classCallCheck(this, Objects);

    _this = _super.call(this, props); // save and add

    _defineProperty(_assertThisInitialized(_this), "shouldComponentUpdate", function (nextProps, nextState) {
      if (_this.props.isSuccess === nextProps.isSuccess) {
        return true;
      } else {
        if (nextProps.isSuccess === true) {
          if (nextState.modalType === 'insert' && nextProps.saveAdd === true) {
            _this.setState({
              modalActive: true,
              modalType: 'insert'
            });
          } else {
            _this.setState({
              modalActive: false,
              modalType: 'none'
            });
          }

          _this.updateStatusAdd(false);

          var page = {
            name: '',
            page: 1,
            limit: _settings_index__WEBPACK_IMPORTED_MODULE_5__["dataConfig"].pageLimit
          };

          _this.props.loadData(page);
        }

        return true;
      }
    });

    _defineProperty(_assertThisInitialized(_this), "imageUpload", function (image) {
      _this.props.imageUpload(image);
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

    _defineProperty(_assertThisInitialized(_this), "handleSubmit", function (actionName, obj) {
      if (obj.id > 0 && actionName !== 'delete') actionName = 'update';

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
        limit: _settings_index__WEBPACK_IMPORTED_MODULE_5__["dataConfig"].pageLimit
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleSearchChange", function (e) {
      _this.setState(_objectSpread({}, _this.state, {
        search: e.target.value
      }));
    });

    _defineProperty(_assertThisInitialized(_this), "handleSearch", function () {
      var page = {
        name: _this.state.search,
        page: _this.state.page,
        limit: _settings_index__WEBPACK_IMPORTED_MODULE_5__["dataConfig"].pageLimit
      };

      _this.setState(page, function () {
        _this.props.loadData(page);
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleCancel", function () {
      _this.setState({
        modalType: 'none',
        modalActive: false,
        contentState: null
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

    _defineProperty(_assertThisInitialized(_this), "reset", function () {
      _this.setState({
        search: '',
        page: 1
      });
    });

    _this.state = {
      confirmDirty: false,
      search: '',
      connection: null,
      modalType: '',
      page: 1,
      modalActive: false
    };
    _this.updateStatusAdd = _this.updateStatusAdd.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Objects, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var page = {
        name: this.state.search,
        page: this.state.page,
        limit: _settings_index__WEBPACK_IMPORTED_MODULE_5__["dataConfig"].pageLimit
      };
      this.props.loadData(page); // this.socketIO = connectSocket(this.props.socketIO);
      // listenSocket(this.socketIO, flags.ROLE, (flag, data) => {
      //   const newPage = {
      //     name: this.state.search,
      //     page: this.state.page,
      //     limit: dataConfig.pageLimit
      //   };
      //   this.props.loadData(newPage);
      // });
      // if (this.props.socketIO === null) {
      //   this.props.setSocket(this.socketIO);
      // }
    } // save and add

  }, {
    key: "updateStatusAdd",
    value: function updateStatusAdd(value) {
      this.props.updateStatusSaveAdd(value);
    }
  }, {
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
      var rowStyle = _settings_basicStyle__WEBPACK_IMPORTED_MODULE_7__["default"].rowStyle,
          colStyle = _settings_basicStyle__WEBPACK_IMPORTED_MODULE_7__["default"].colStyle,
          gutter = _settings_basicStyle__WEBPACK_IMPORTED_MODULE_7__["default"].gutter;
      var modalActive = this.state.modalActive;
      var dataSource = [];

      if (rows) {
        Object.keys(rows).map(function (row, index) {
          return dataSource.push(_objectSpread({}, rows[row], {
            key: row
          }));
        });
      }

      var columns = [];

      if (typeof this.props.strAddress !== 'undefined') {
        columns = [{
          title: this.state.strName,
          dataIndex: 'name',
          key: 'name',
          width: '200px',
          sorter: function sorter(a, b) {
            if (a.name < b.name) return -1;
            if (a.name > b.name) return 1;
            return 0;
          },
          render: function render(text, row) {
            return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", null, trimByWord(row.name));
          }
        }, {
          title: 'Address',
          dataIndex: 'address',
          key: 'address',
          width: '200px',
          sorter: function sorter(a, b) {
            if (a.address < b.address) return -1;
            if (a.address > b.address) return 1;
            return 0;
          },
          render: function render(text, row) {
            if (row.address) {
              return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", null, trimByWord(row.address));
            }
          }
        }, {
          title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_utility_intlMessages__WEBPACK_IMPORTED_MODULE_13__["default"], {
            id: "form.updatedBy"
          }),
          dataIndex: 'admin.username',
          key: 'admin.username',
          width: '220px',
          sorter: function sorter(a, b) {
            if (a.admin.username < b.admin.username) return -1;
            if (a.admin.username > b.admin.username) return 1;
            return 0;
          },
          render: function render(text, row) {
            if (row.admin.username) {
              return trimByWord(row.admin.username);
            }
          }
        }, {
          title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_utility_intlMessages__WEBPACK_IMPORTED_MODULE_13__["default"], {
            id: "form.updatedAt"
          }),
          dataIndex: 'updatedTime',
          width: '170px',
          key: 'slug',
          sorter: function sorter(a, b) {
            if (a.updated_at < b.updated_at) return -1;
            if (a.updated_at > b.updated_at) return 1;
            return 0;
          },
          render: function render(text, row) {
            return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, moment__WEBPACK_IMPORTED_MODULE_10___default()(row.updated_at).format(_helpers_helperFunc__WEBPACK_IMPORTED_MODULE_12__["default"].fomatDateTime()));
          }
        }, {
          title: '',
          key: 'action',
          width: '60px',
          className: 'noWrapCell',
          render: function render(text, row) {
            return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_control_style__WEBPACK_IMPORTED_MODULE_2__["ActionWrapper"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_uielements_tooltip__WEBPACK_IMPORTED_MODULE_11__["default"], {
              title: "Edit"
            }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
              onClick: _this3.handleModal.bind(_this3, 'edit', row),
              className: "aSimple"
            }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_8__["Icon"], {
              type: "form",
              theme: "outlined"
            }))), localStorage.getItem('user_name') === 'admin' || JSON.parse(localStorage.getItem('role_detail')).some(function (role) {
              return role.address === '105';
            }) ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_8__["Popconfirm"], {
              title: "Are you sure delete this profile?.",
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
            }))) : '');
          }
        }];
      } else {
        columns = [{
          title: this.state.strName,
          dataIndex: 'name',
          key: 'name',
          // width: "200px",
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
          title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_utility_intlMessages__WEBPACK_IMPORTED_MODULE_13__["default"], {
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
            if (row && row.admin) {
              return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, row.admin.username);
            }
          }
        }, {
          title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_utility_intlMessages__WEBPACK_IMPORTED_MODULE_13__["default"], {
            id: "form.updatedAt"
          }),
          dataIndex: 'updated_at',
          className: 'noWrapCell',
          key: 'slug',
          sorter: function sorter(a, b) {
            if (a.updated_at < b.updated_at) return -1;
            if (a.updated_at > b.updated_at) return 1;
            return 0;
          },
          render: function render(row) {
            return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, moment__WEBPACK_IMPORTED_MODULE_10___default()(row.updated_at).format(_helpers_helperFunc__WEBPACK_IMPORTED_MODULE_12__["default"].fomatDateTime()));
          }
        }, {
          title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_utility_intlMessages__WEBPACK_IMPORTED_MODULE_13__["default"], {
            id: "form.action"
          }),
          key: 'action',
          fixed: 'right',
          width: 100,
          className: 'noWrapCell',
          render: function render(row) {
            return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_control_style__WEBPACK_IMPORTED_MODULE_2__["ActionWrapper"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_uielements_tooltip__WEBPACK_IMPORTED_MODULE_11__["default"], {
              title: "Edit"
            }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
              onClick: _this3.handleModal.bind(_this3, 'edit', row),
              className: "aSimple"
            }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_8__["Icon"], {
              type: "form",
              theme: "outlined"
            }))), localStorage.getItem('user_name') === 'admin' || JSON.parse(localStorage.getItem('role_detail')).some(function (role) {
              return role.address === '105';
            }) ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_8__["Popconfirm"], {
              title: "Are you sure delete this profile?.",
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
            }))) : '');
          }
        }];
      }

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_data_style__WEBPACK_IMPORTED_MODULE_9__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_utility_layoutWrapper__WEBPACK_IMPORTED_MODULE_6__["default"], {
        style: {
          padding: '0px'
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
        className: "PageHeader"
      }, this.state.strName), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_8__["Row"], {
        style: rowStyle,
        gutter: gutter,
        justify: "start"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_8__["Col"], {
        md: 24,
        sm: 24,
        xs: 24,
        style: colStyle
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_utility_box__WEBPACK_IMPORTED_MODULE_3__["default"], {
        className: "boxWrapper"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_utility_contentHolder__WEBPACK_IMPORTED_MODULE_4__["default"], {
        style: {
          marginTop: 0,
          overflow: 'hidden'
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_control_style__WEBPACK_IMPORTED_MODULE_2__["TitleWrapper"], {
        className: "titleWrapper"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_control_style__WEBPACK_IMPORTED_MODULE_2__["ComponentTitle"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_8__["Input"], {
        onChange: this.handleSearchChange,
        className: "inputSearch",
        placeholder: "Search...",
        onKeyUp: this.onKeyUp,
        value: this.state.search
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        className: "btSearch",
        onClick: this.handleSearch
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_8__["Icon"], {
        type: "search",
        theme: "outlined"
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_control_style__WEBPACK_IMPORTED_MODULE_2__["ButtonHolders"], {
        className: "group_bt_head"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        onClick: this.handleRefresh,
        className: "btnRefresh btWizard"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_8__["Icon"], {
        type: "sync",
        theme: "outlined"
      }), ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_utility_intlMessages__WEBPACK_IMPORTED_MODULE_13__["default"], {
        id: "button.refresh"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        onClick: this.handleModal.bind(this, 'insert', null),
        className: "btnAdd btWizard"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_8__["Icon"], {
        type: "plus-square",
        theme: "outlined"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_utility_intlMessages__WEBPACK_IMPORTED_MODULE_13__["default"], {
        id: "button.add"
      })))), row ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_base__WEBPACK_IMPORTED_MODULE_1__["default"], {
        modalActive: modalActive,
        modalType: this.state.modalType,
        row: row,
        strName: this.state.strName,
        strAddress: this.state.strAddress,
        handleCancel: this.handleCancel,
        handleSubmit: this.handleSubmit,
        handleClose: this.handleCancel // save and add
        ,
        updateStatusAdd: this.updateStatusAdd
      }) : '', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_control_style__WEBPACK_IMPORTED_MODULE_2__["TableWrapper"], {
        rowKey: "key",
        columns: columns,
        bordered: true,
        dataSource: dataSource,
        locale: {
          emptyText: this.props.isLoading === true ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            className: "ant-spin ant-spin-spinning ant-table-with-pagination ant-table-spin-holder"
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
            className: "ant-spin-dot ant-spin-dot-spin"
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", null))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_utility_intlMessages__WEBPACK_IMPORTED_MODULE_13__["default"], {
            id: "button.empty"
          }))
        } ////loading={this.props.isLoading}
        ,
        className: "isoSimpleTable",
        pagination: {
          showSizeChanger: false,
          defaultCurrent: 1,
          defaultPageSize: _settings_index__WEBPACK_IMPORTED_MODULE_5__["dataConfig"].pageLimit || 10,
          hideOnSinglePage: true,
          onChange: this.onPageChange,
          total: count,
          showTotal: function showTotal(total, range) {
            return "Show ".concat(range[0], "-").concat(range[1], " on ").concat(dataSource.length, " record");
          }
        }
      }))))))));
    }
  }]);

  return Objects;
}(_components_base__WEBPACK_IMPORTED_MODULE_1__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (Objects);

/***/ }),

/***/ "./resources/js/isomophic/helpers/formItem.js":
/*!****************************************************!*\
  !*** ./resources/js/isomophic/helpers/formItem.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var formItemLayout = {
  labelCol: {
    xs: {
      span: 24
    },
    sm: {
      span: 8
    }
  },
  wrapperCol: {
    xs: {
      span: 24
    },
    sm: {
      span: 16
    }
  }
};
/* harmony default export */ __webpack_exports__["default"] = (formItemLayout);

/***/ })

}]);