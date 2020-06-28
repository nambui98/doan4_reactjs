(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[47],{

/***/ "./resources/js/isomophic/admin/containers/Annoucement/index.js":
/*!**********************************************************************!*\
  !*** ./resources/js/isomophic/admin/containers/Annoucement/index.js ***!
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
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _common_data_style__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../common/data.style */ "./resources/js/isomophic/common/data.style.js");
/* harmony import */ var _components_utility_layoutWrapper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../components/utility/layoutWrapper */ "./resources/js/isomophic/components/utility/layoutWrapper.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _components_utility_box__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../components/utility/box */ "./resources/js/isomophic/components/utility/box.js");
/* harmony import */ var _components_Annoucement__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/Annoucement */ "./resources/js/isomophic/admin/components/Annoucement/index.js");
/* harmony import */ var _redux_Annoucement_actions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../redux/Annoucement/actions */ "./resources/js/isomophic/admin/redux/Annoucement/actions.js");
/* harmony import */ var _settings_index__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../settings/index */ "./resources/js/isomophic/settings/index.js");
/* harmony import */ var _components_utility_intlMessages__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../components/utility/intlMessages */ "./resources/js/isomophic/components/utility/intlMessages.js");
/* harmony import */ var _helpers_helperFunc__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../helpers/helperFunc */ "./resources/js/isomophic/helpers/helperFunc.js");
/* harmony import */ var _redux_Socket_actions__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../redux/Socket/actions */ "./resources/js/isomophic/admin/redux/Socket/actions.js");
/* harmony import */ var _helpers_message__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./../../../helpers/message */ "./resources/js/isomophic/helpers/message.js");
/* harmony import */ var _helpers_flags__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../helpers/flags */ "./resources/js/isomophic/helpers/flags.js");
/* harmony import */ var react_dom_test_utils__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! react-dom/test-utils */ "./node_modules/react-dom/test-utils.js");
/* harmony import */ var react_dom_test_utils__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(react_dom_test_utils__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var react_to_print__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! react-to-print */ "./node_modules/react-to-print/lib/index.js");
/* harmony import */ var react_to_print__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(react_to_print__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _print__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./print */ "./resources/js/isomophic/admin/containers/Annoucement/print.js");
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





















var RangePicker = antd__WEBPACK_IMPORTED_MODULE_8__["DatePicker"].RangePicker;

var Annoucement = /*#__PURE__*/function (_BaseComponent) {
  _inherits(Annoucement, _BaseComponent);

  var _super = _createSuper(Annoucement);

  function Annoucement(props) {
    var _this;

    _classCallCheck(this, Annoucement);

    _this = _super.call(this, props);

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
          }
        }

        return true;
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleRefresh", function () {
      var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

      _this.props.loadData({
        StartDate: moment__WEBPACK_IMPORTED_MODULE_5___default()(new Date()).subtract(1, 'months').format('YYYY/MM/DD 00:00:00'),
        EndDate: moment__WEBPACK_IMPORTED_MODULE_5___default()(new Date()).format('YYYY/MM/DD 23:59:59'),
        name: '',
        page: 1,
        limit: _settings_index__WEBPACK_IMPORTED_MODULE_12__["dataConfig"].pageLimit
      });

      _this.reset();
    });

    _defineProperty(_assertThisInitialized(_this), "handleSearch", function () {
      var page = {
        StartDate: _this.state.startDate,
        EndDate: _this.state.endDate,
        isPrint: 2,
        name: _this.state.search,
        page: _this.state.page,
        limit: _settings_index__WEBPACK_IMPORTED_MODULE_12__["dataConfig"].pageLimit
      };

      _this.setState(page, function () {
        _this.props.loadData(page);
      });
    });

    _defineProperty(_assertThisInitialized(_this), "reset", function () {
      _this.setState({
        search: '',
        page: 1,
        startDate: moment__WEBPACK_IMPORTED_MODULE_5___default()(new Date()).subtract(1, 'months').format('YYYY/MM/DD 00:00:00'),
        endDate: moment__WEBPACK_IMPORTED_MODULE_5___default()(new Date()).format('YYYY/MM/DD 23:59:59')
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleSubmit", function (actionName, obj) {
      if (obj.id > 0 && actionName !== 'delete') actionName = 'update';

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
        announcement_type_id: _this.state.announcementTypeId,
        page: _this.state.page,
        limit: _settings_index__WEBPACK_IMPORTED_MODULE_12__["dataConfig"].pageLimit,
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
      search: '',
      modalType: '',
      page: 1,
      modalActive: false,
      announcement_type_id: '',
      startDate: moment__WEBPACK_IMPORTED_MODULE_5___default()(new Date()).subtract(1, 'months').format('YYYY/MM/DD 00:00:00'),
      endDate: moment__WEBPACK_IMPORTED_MODULE_5___default()(new Date()).format('YYYY/MM/DD 23:59:59')
    };
    return _this;
  }

  _createClass(Annoucement, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      var isPrint = this.props.isPrint;
      var page = {
        name: this.state.search,
        page: this.state.page,
        limit: _settings_index__WEBPACK_IMPORTED_MODULE_12__["dataConfig"].pageLimit,
        isPrint: isPrint,
        StartDate: this.state.startDate,
        EndDate: this.state.endDate
      };
      this.props.loadData(page);
      this.socketIO = Object(_helpers_message__WEBPACK_IMPORTED_MODULE_16__["connectSocket"])(this.props.socketIO);
      Object(_helpers_message__WEBPACK_IMPORTED_MODULE_16__["listenSocket"])(this.socketIO, _helpers_flags__WEBPACK_IMPORTED_MODULE_17__["default"].ANNOUNCEMENT, function (flag, data) {
        var newPage = {
          StartDate: _this2.state.startDate,
          EndDate: _this2.state.endDate,
          isPrint: isPrint,
          name: _this2.state.search,
          page: _this2.state.page,
          limit: _settings_index__WEBPACK_IMPORTED_MODULE_12__["dataConfig"].pageLimit
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
          announcementType = _this$props.announcementType,
          newRow = _this$props.newRow;
      var rowStyle = _settings_basicStyle__WEBPACK_IMPORTED_MODULE_3__["default"].rowStyle,
          colStyle = _settings_basicStyle__WEBPACK_IMPORTED_MODULE_3__["default"].colStyle,
          gutter = _settings_basicStyle__WEBPACK_IMPORTED_MODULE_3__["default"].gutter;
      var _this$state = this.state,
          modalActive = _this$state.modalActive,
          startDate = _this$state.startDate,
          endDate = _this$state.endDate;
      var dataSource = [];

      if (typeof rows !== 'undefined' && rows !== null) {
        Object.keys(rows).map(function (row, index) {
          return dataSource.push(_objectSpread({}, rows[row], {
            key: row
          }));
        });
      } // group header content of table


      var columns = [];
      columns = [{
        title: 'Title',
        dataIndex: 'Title',
        key: 'Title',
        width: 150,
        sorter: function sorter(a, b) {
          if (a.title < b.title) return -1;
          if (a.title > b.title) return 1;
          return 0;
        },
        render: function render(text, row) {
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            style: {
              whiteSpace: 'pre-wrap',
              wordWrap: 'break-word'
            }
          }, row.title);
        }
      }, {
        title: ' Type',
        dataIndex: 'Announcement_type',
        key: 'Announcement_type',
        className: 'noWrapCell',
        sorter: function sorter(a, b) {
          if (a.announcement_type_id < b.announcement_type_id) return -1;
          if (a.announcement_type_id > b.announcement_type_id) return 1;
          return 0;
        },
        render: function render(text, row) {
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, row && row.announcement_type ? row.announcement_type.name : '');
        }
      }, {
        title: 'Date',
        dataIndex: 'Annouced_date',
        className: 'noWrapCell',
        key: 'Annouced_date',
        width: 90,
        sorter: function sorter(a, b) {
          if (a.announcement_date < b.announcement_date) return -1;
          if (a.announcement_date > b.announcement_date) return 1;
          return 0;
        },
        render: function render(text, row) {
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, row.announcement_date);
        }
      }, {
        title: 'Description',
        dataIndex: 'Description',
        key: 'Description',
        sorter: function sorter(a, b) {
          if (a.description < b.description) return -1;
          if (a.description > b.description) return 1;
          return 0;
        },
        render: function render(text, row) {
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            style: {
              whiteSpace: 'pre-wrap',
              wordWrap: 'break-word'
            }
          }, row.description);
        }
      }, {
        title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_utility_intlMessages__WEBPACK_IMPORTED_MODULE_13__["default"], {
          id: "form.image"
        }),
        dataIndex: 'image',
        key: 'image',
        className: 'noWrapCell',
        render: function render(text, row) {
          if (row && row.images) {
            var images = row.images.split('##########').slice(0, row.images.split('##########').length - 1);
            return images.map(function (image, index) {
              return [/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
                key: index,
                style: {
                  width: '60px',
                  margin: '4px 0'
                },
                alt: row.name,
                src: _settings_index__WEBPACK_IMPORTED_MODULE_12__["urlConfig"].imageUrl + image
              }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
                key: index + images.length
              })];
            });
          }
        }
      }, // {
      //   title: <IntlMessages id="form.status" />,
      //   dataIndex: "status",
      //   className: "noWrapCell",
      //   key: "status",
      //   sorter: (a, b) => {
      //     if (a.status < b.status) return -1;
      //     if (a.status > b.status) return 1;
      //     return 0;
      //   },
      //   render: (text, row) => {
      //     let className;
      //     if (row.status === helperFunc.status.Active) {
      //       className = "publish";
      //     } else {
      //       className = "private";
      //     }
      //     return (
      //       <span className="content">
      //         <StatusTag className={className}>
      //           {row.status === helperFunc.status.Active
      //             ? helperFunc.status.properties[helperFunc.status.Active]
      //             : helperFunc.status.properties[helperFunc.status.Inactive]}
      //         </StatusTag>
      //       </span>
      //     );
      //   }
      // },
      {
        title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_utility_intlMessages__WEBPACK_IMPORTED_MODULE_13__["default"], {
          id: "form.updatedAt"
        }),
        dataIndex: 'updated_at',
        className: 'noWrapCell',
        key: 'updated_at',
        sorter: function sorter(a, b) {
          if (a.updated_at < b.updated_at) return -1;
          if (a.updated_at > b.updated_at) return 1;
          return 0;
        },
        render: function render(text, row) {
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, row.updated_at);
        }
      }, {
        title: '',
        key: 'action',
        className: 'noWrapCell',
        render: function render(text, row) {
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_control_style__WEBPACK_IMPORTED_MODULE_4__["ActionWrapper"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_8__["Tooltip"], {
            title: "View User"
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
            className: "deleteBtn aSimple",
            onClick: _this4.handleModal.bind(_this4, 'viewUser', row)
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
            className: "ion-android-person"
          }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_8__["Tooltip"], {
            title: "View Info"
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
            className: "deleteBtn aSimple",
            onClick: _this4.handleModal.bind(_this4, 'viewInfo', row)
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
            className: "ion-android-document"
          }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, localStorage.getItem('user_name') === 'admin' || JSON.parse(localStorage.getItem('role_detail')).some(function (role) {
            return role.address === '104';
          }) ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_8__["Tooltip"], {
            title: "Edit"
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
            onClick: _this4.handleModal.bind(_this4, 'edit', row),
            className: "aSimple"
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_8__["Icon"], {
            type: "form",
            theme: "outlined"
          }))) : '', localStorage.getItem('user_name') === 'admin' || JSON.parse(localStorage.getItem('role_detail')).some(function (role) {
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
            onConfirm: _this4.handleSubmit.bind(_this4, 'delete', row)
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
            className: "deleteBtn aSimple"
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
            className: "ion-android-delete deleteRow"
          }))) : ''));
        }
      }];
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_data_style__WEBPACK_IMPORTED_MODULE_6__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_utility_layoutWrapper__WEBPACK_IMPORTED_MODULE_7__["default"], {
        style: {
          padding: '0px'
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
        className: "PageHeader"
      }, ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_utility_intlMessages__WEBPACK_IMPORTED_MODULE_13__["default"], {
        id: "sidebar.annoucement"
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
        placeholder: "Search ...",
        onChange: this.handleSearchChange,
        className: "inputSearch",
        onKeyUp: this.onKeyUp,
        value: this.state.search
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(RangePicker, {
        format: "YYYY-MM-DD",
        placeholder: ['Start date', 'End date'],
        value: startDate && endDate ? [moment__WEBPACK_IMPORTED_MODULE_5___default()(startDate, 'YYYY-MM-DD'), moment__WEBPACK_IMPORTED_MODULE_5___default()(endDate, 'YYYY-MM-DD')] : '',
        allowClear: false,
        onChange: this.onChangeDate,
        style: {
          width: '300px'
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        onClick: this.handleSearch,
        className: "btSearch",
        style: {
          top: 0
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_8__["Icon"], {
        type: "search",
        theme: "outlined"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_to_print__WEBPACK_IMPORTED_MODULE_19___default.a, {
        key: "print",
        trigger: function trigger() {
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
            style: {
              display: 'none'
            },
            className: "btnRefresh btWizard btPrintAll",
            title: "Print",
            TableWrapper: true
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_8__["Icon"], {
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
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        className: "btWizard",
        onClick: this.printAll
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_8__["Icon"], {
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
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_control_style__WEBPACK_IMPORTED_MODULE_4__["ButtonHolders"], {
        className: "group_bt_head"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        onClick: this.handleRefresh,
        className: "btnRefresh btWizard",
        style: {
          cursor: 'pointer'
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_8__["Icon"], {
        type: "sync",
        theme: "outlined"
      }), "Refresh"), JSON.parse(localStorage.getItem('role_detail')).some(function (role) {
        return role.address === '103';
      }) ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        onClick: this.handleModal.bind(this, 'insert', null),
        className: "btnAdd btWizard",
        style: {
          cursor: 'pointer'
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_8__["Icon"], {
        type: "plus-square",
        theme: "outlined"
      }), "Add new") : '')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_control_style__WEBPACK_IMPORTED_MODULE_4__["TableWrapper"], {
        rowKey: "key",
        columns: columns,
        dataSource: dataSource,
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
      }), row ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Annoucement__WEBPACK_IMPORTED_MODULE_10__["default"], {
        modalActive: modalActive,
        modalType: this.state.modalType,
        row: row,
        newRow: newRow,
        announcementType: announcementType,
        handleCancel: this.handleCancel,
        handleSubmit: this.handleSubmit,
        handleClose: this.handleCancel,
        disable: disable
      }) : '')))));
    }
  }]);

  return Annoucement;
}(_containers_base__WEBPACK_IMPORTED_MODULE_2__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(function (state) {
  return _objectSpread({}, state.AnnoucementReducer, {}, state.SocketReducer);
}, _objectSpread({}, _redux_Annoucement_actions__WEBPACK_IMPORTED_MODULE_11__["default"], {}, _redux_Socket_actions__WEBPACK_IMPORTED_MODULE_15__["default"]))(Annoucement));

/***/ }),

/***/ "./resources/js/isomophic/admin/containers/Annoucement/print.js":
/*!**********************************************************************!*\
  !*** ./resources/js/isomophic/admin/containers/Annoucement/print.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _public_images_logo_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../public/images/logo.png */ "./resources/js/isomophic/public/images/logo.png");
/* harmony import */ var _public_images_logo_png__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_public_images_logo_png__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _public_images_imagePrint_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../public/images/imagePrint.jpg */ "./resources/js/isomophic/public/images/imagePrint.jpg");
/* harmony import */ var _public_images_imagePrint_jpg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_public_images_imagePrint_jpg__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _settings_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../settings/index */ "./resources/js/isomophic/settings/index.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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
      console.log(rows);
      var container = rows && rows.length > 0 ? rows.map(function (row, index) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "clearfix",
          key: index,
          style: {
            margin: '20px 0 40px 0'
          }
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", null, index + 1, ". ", row.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          style: {
            fontSize: 12
          }
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
          style: {
            fontWeight: 700
          }
        }, row.admin.full_name, " "), "(", row.announcement_date, ")"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          style: {
            marginTop: '10px',
            whiteSpace: 'pre-wrap',
            wordWrap: 'break-word'
          }
        }, row.description), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, row && row.images && row.images.length > 0 ? row.images.split('##########').slice(0, row.images.split('##########').length - 1).map(function (image, index) {
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
            key: index,
            style: {
              width: '300px',
              display: 'block',
              marginTop: '5px',
              marginLeft: 'auto',
              marginRight: 'auto'
            },
            alt: row.name,
            src: _settings_index__WEBPACK_IMPORTED_MODULE_3__["urlConfig"].imageUrl + image
          });
        }) : '')));
      }) : '';
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "clearfix",
        style: {
          margin: '20px 30px 20px 30px'
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: {
          height: '50px'
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("image", {
        src: _public_images_logo_png__WEBPACK_IMPORTED_MODULE_1___default.a,
        style: {
          height: '50px',
          "float": 'left'
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("image", {
        src: _public_images_imagePrint_jpg__WEBPACK_IMPORTED_MODULE_2___default.a,
        style: {
          height: '50px',
          "float": 'right'
        }
      })), container);
    }
  }]);

  return ComponentToPrint;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (ComponentToPrint);

/***/ })

}]);