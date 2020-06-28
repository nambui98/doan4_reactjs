// eslint-disable-next-line
import React from "react";
import { connect } from "react-redux";
import BaseComponent from "../../../containers/base";
import basicStyle from "../../../settings/basicStyle";
import {
  ActionWrapper,
  TableWrapper,
  ButtonHolders,
  TitleWrapper,
  StatusTag,
  ComponentTitle
} from "../../../common/control.style";

import ReactToPrint from "react-to-print";
import moment from "moment";

import DataWrapper from "../../../common/data.style";
import LayoutWrapper from "../../../components/utility/layoutWrapper";

import {
  Row,
  Col,
  Icon,
  Popconfirm,
  Tooltip,
  Select,
  Button,
  DatePicker
} from "antd";
import Box from "../../../components/utility/box";
import Modal from "../../components/Incidents";
import actions from "../../redux/Incidents/actions";
import { dataConfig } from "../../../settings/index";
import IntlMessages from "../../../components/utility/intlMessages";
import helperFunc from "../../../helpers/helperFunc";
import socketActions from "../../redux/Socket/actions";
import { connectSocket, listenSocket } from "./../../../helpers/message";
import flags from "../../../helpers/flags";
import { isNullOrUndefined } from "util";
import ReactTestUtils from "react-dom/test-utils";
import Print from "./print";
const { Option } = Select;
const { RangePicker } = DatePicker;
class Index extends BaseComponent {
  constructor(props) {
    super(props);
    this.state = {
      confirmDirty: false,
      search: "",
      connection: null,
      modalType: "",
      page: 1,
      modalActive: false,
      startDate: moment(new Date())
        .subtract(1, "months")
        .format("YYYY/MM/DD 00:00:00"),
      endDate: moment(new Date()).format("YYYY/MM/DD 23:59:59")
    };
  }
  componentDidMount() {
    const { isPrint } = this.props;
    const page = {
      StartDate: this.state.startDate,
      EndDate: this.state.endDate,
      incident_type_id: this.state.incidentTypeId,
      page: this.state.page,
      limit: dataConfig.pageLimit,
      isPrint: isPrint
    };

    this.props.loadData(page);

    //quybv90: Added 2/3/2020
    this.socketIO = connectSocket(this.props.socketIO);
    listenSocket(this.socketIO, flags.INCIDENT, (flag, data) => {
      const newPage = {
        incident_type_id: this.state.incidentTypeId,
        StartDate: this.state.startDate,
        EndDate: this.state.endDate,
        page: this.state.page,
        limit: dataConfig.pageLimit,
        isPrint: isPrint
      };
      this.props.loadData(newPage);
    });
    if (this.props.socketIO === null) {
      this.props.setSocket(this.socketIO);
    }
  }
  componentDidUpdate(prevProps) {
    if (
      this.props.printer === true &&
      prevProps.modalType === this.props.modalType &&
      this.props.printer !== prevProps.printer
    ) {
      let node = document.querySelector(".btPrint");
      ReactTestUtils.Simulate.click(node);
    }
    if (
      this.props.printerAll === true &&
      this.props.printerAll !== prevProps.printerAll
    ) {
      let node = document.querySelector(".btPrintAll");
      ReactTestUtils.Simulate.click(node);
    }
  }
  //load datatable
  shouldComponentUpdate = (nextProps, nextState) => {
    if (this.props.isSuccess === nextProps.isSuccess) {
      return true;
    } else {
      if (nextProps.isSuccess === true) {
        // const { isPrint } = this.props;
        if (
          nextState.modalType === helperFunc.modeType.Insert &&
          nextProps.saveAdd === true
        ) {
          this.setState({
            modalActive: true,
            modalType: helperFunc.modeType.Insert
          });
        } else {
          this.setState({
            modalActive: false,
            modalType: helperFunc.modeType.None
          });
        }
      }
      return true;
    }
  };
  // Refresh
  handleRefresh = (name = null) => {
    this.props.loadData({
      incident_type_id: [],
      StartDate: moment(new Date())
        .subtract(1, "months")
        .format("YYYY/MM/DD 00:00:00"),
      EndDate: moment(new Date()).format("YYYY/MM/DD 23:59:59"),
      page: 1,
      limit: dataConfig.pageLimit,
      isPrint: 2
    });
    this.reset();
  };

  handleSearch = () => {
    const page = {
      incident_type_id: this.state.incidentTypeId,
      page: 1,
      limit: dataConfig.pageLimit,
      StartDate: this.state.startDate,
      EndDate: this.state.endDate,
      isPrint: 2
    };
    this.setState(page, () => {
      this.props.loadData(page);
    });
  };
  reset = () => {
    this.setState({
      incidentTypeId: [],
      startDate: moment(new Date())
      .subtract(1, "months")
      .format("YYYY/MM/DD 00:00:00"),
      endDate: moment(new Date()).format("YYYY/MM/DD 23:59:59"),
      page: 1
    });
  };

  handleSubmit = (actionName, obj) => {
    if (obj.id > 0 && actionName !== "delete") actionName = "update";
    this.setState({ loading: true });
    this.props.saveInto(obj, actionName);
  };

  handleModal(action, row = null) {
    if (row) {
      this.setState(
        {
          modalType: action,
          modalActive: true,
          displayname: row.displayname
        },
        () => {
          this.props.toggleModal(action, row);
          if (action === "view") {
            this.props.updateStatusRead(row.id);
          }
        }
      );
    } else {
      this.setState(
        {
          modalType: action,
          modalActive: true
        },
        () => {
          this.props.toggleModal(action, row);
        }
      );
    }
  }

  onPageChange = (pageNumber, pageSize) => {
    const page = {
      page: pageNumber,
      limit: pageSize,
      incident_type_id: this.state.incidentTypeId,
      StartDate: this.state.startDate,
      EndDate: this.state.endDate,
      isPrint: 2
    };
    this.setState(page, () => {
      this.props.loadData(page);
    });
  };

  handlSelectChange = id => {
    this.setState({
      ...this.state,
      incidentTypeId: id
    });
  };
  printAll = () => {
    const { loadData } = this.props;
    const page = {
      incident_type_id: this.state.incidentTypeId,
      page: this.state.page,
      limit: dataConfig.pageLimit,
      StartDate: this.state.startDate,
      EndDate: this.state.endDate,
      isPrint: 1
    };
    loadData(page);
  };
  updatePrinter = () => {
    this.props.turnOffPrint(false);
  };
  onChangeDate = (value, dateString) => {
    this.setState({
      startDate: dateString[0],
      endDate: dateString[1]
    });
  };
  render() {
    const { rows, count, row, disable, incidentDataInit } = this.props;
    const { rowStyle, colStyle, gutter } = basicStyle;
    const { modalActive, incidentTypeId, startDate, endDate } = this.state;
    const dataSource = [];
    if (typeof rows !== "undefined" && rows !== null) {
      Object.keys(rows).map((row, index) => {
        return dataSource.push({
          ...rows[row],
          key: row
        });
      });
    }
    // group header content of table
    let columns = [];
    columns = [
      {
        title: "User",
        dataIndex: "created_by",
        className: "noWrapCell",
        key: "created_by",
        sorter: (a, b) => {
          if (a.created_by < b.created_by) return -1;
          if (a.created_by > b.created_by) return 1;
          return 0;
        },
        render: (text, row) => {
          return (
            <span
              style={{
                color: row && row.status === 2 ? "#ff3838" : "",
                fontWeight: row && row.status === 2 ? "bold" : ""
              }}
            >
              {row && row.admin ? row.admin.full_name : ""}
            </span>
          );
        }
      },
      {
        title: "Reported on",
        dataIndex: "reported_on",
        className: "noWrapCell",
        key: "reported_on",
        width: 120,
        sorter: (a, b) => {
          if (a.reported_on < b.reported_on) return -1;
          if (a.reported_on > b.reported_on) return 1;
          return 0;
        },
        render: (text, row) => {
          return <span>{row ? row.reported_on : ""}</span>;
        }
      },
      {
        title: "Incident date",
        dataIndex: "incident_date",
        className: "noWrapCell",
        key: "incident_date",
        width: 120,
        sorter: (a, b) => {
          if (a.incident_date < b.incident_date) return -1;
          if (a.incident_date > b.incident_date) return 1;
          return 0;
        },
        render: (text, row) => {
          return <span>{row ? row.incident_date : ""}</span>;
        }
      },
      {
        title: "Any injury",
        dataIndex: "is_any_injury",
        className: "noWrapCell",
        key: "is_any_injury",
        width: 90,
        sorter: (a, b) => {
          if (a.is_any_injury < b.is_any_injury) return -1;
          if (a.is_any_injury > b.is_any_injury) return 1;
          return 0;
        },
        render: (text, row) => {
          let className;
          if (row.is_any_injury === helperFunc.yesNo.Yes) {
            className = "publish";
          } else {
            className = "private";
          }
          return (
            <StatusTag className={className}>
              {row && row.is_any_injury === helperFunc.yesNo.Yes
                ? helperFunc.yesNo.properties[helperFunc.yesNo.Yes]
                : helperFunc.yesNo.properties[helperFunc.yesNo.No]}
            </StatusTag>
          );
        }
      },
      {
        title: "SAS Report",
        dataIndex: "is_SAS_report",
        className: "noWrapCell",
        key: "is_SAS_report",
        width: 90,
        sorter: (a, b) => {
          if (a.is_SAS_report < b.is_SAS_report) return -1;
          if (a.is_SAS_report > b.is_SAS_report) return 1;
          return 0;
        },
        render: (text, row) => {
          let className;
          if (row.is_SAS_report === helperFunc.yesNo.Yes) {
            className = "publish";
          } else {
            className = "private";
          }
          return (
            <StatusTag className={className}>
              {row && row.is_SAS_report === helperFunc.yesNo.Yes
                ? helperFunc.yesNo.properties[helperFunc.yesNo.Yes]
                : helperFunc.yesNo.properties[helperFunc.yesNo.No]}
            </StatusTag>
          );
        }
      },
      {
        title: "Type",
        dataIndex: "incident_type",
        className: "noWrapCell",
        key: "incident_type",
        width: 150,
        sorter: (a, b) => {
          if (a.incident_type_id < b.incident_type_id) return -1;
          if (a.incident_type_id > b.incident_type_id) return 1;
          return 0;
        },
        render: (text, row) => {
          return (
            <span
              style={{
                color: row && row.status === 2 ? "#ff3838" : "",
                fontWeight: row && row.status === 2 ? "bold" : ""
              }}
            >
              {row && row.incident_type ? row.incident_type.name : ""}
            </span>
          );
        }
      },
      {
        title: "Severity",
        dataIndex: "incident_severity",
        className: "noWrapCell",
        key: "incident_severity",
        width: 120,
        sorter: (a, b) => {
          if (a.incident_severity_id < b.incident_severity_id) return -1;
          if (a.incident_severity_id > b.incident_severity_id) return 1;
          return 0;
        },
        render: (text, row) => {
          return (
            <span
              style={{
                color: row && row.status === 2 ? "#ff3838" : "",
                fontWeight: row && row.status === 2 ? "bold" : ""
              }}
            >
              {row && row.incident_severity ? row.incident_severity.name : ""}
            </span>
          );
        }
      },
      {
        title: "Description",
        dataIndex: "description",
        key: "description",
        sorter: (a, b) => {
          if (a.description < b.description) return -1;
          if (a.description > b.description) return 1;
          return 0;
        },
        render: (text, row) => {
          return (
            <div
              style={{
                whiteSpace: "pre-wrap",
                wordWrap: "break-word",
                width: 200,
                color: row && row.status === 2 ? "#ff3838" : "",
                fontWeight: row && row.status === 2 ? "bold" : ""
              }}
            >
              {row ? row.description : ""}
            </div>
          );
        }
      },

      {
        title: "",
        key: "action",
        // fixed: 'right',
        className: "noWrapCell",
        render: (text, row) => {
          return (
            <ActionWrapper>
              <Tooltip title="View Info">
                <button
                  className="deleteBtn aSimple"
                  onClick={this.handleModal.bind(this, "view", row)}
                >
                  <i className="ion-android-document" />
                </button>
              </Tooltip>

              {localStorage.getItem("user_name") === "admin" ? (
                <div>
                  <button
                    onClick={this.handleModal.bind(this, "edit", row)}
                    className="aSimple"
                    style={{cursor:"pointer"}}
                  >
                    <Icon type="form" theme="outlined" />
                  </button>
                  {localStorage.getItem("user_name") === "admin" ||
                  JSON.parse(localStorage.getItem("role_detail")).some(
                    role => role.address === "105"
                  ) ? (
                    <Popconfirm
                      title="Are you sure delete this profile?."
                      okText={<IntlMessages id="button.delete" />}
                      cancelText={<IntlMessages id="button.cancel" />}
                      placement="topRight"
                      onConfirm={this.handleSubmit.bind(this, "delete", row)}
                    >
                      <button className="deleteBtn aSimple" style={{cursor:"pointer"}}>
                        <i className="ion-android-delete deleteRow" />
                      </button>
                    </Popconfirm>
                  ) : (
                    ""
                  )}
                </div>
              ) : (
                ""
              )}
            </ActionWrapper>
          );
        }
      }
    ];
    return (
      <DataWrapper>
        <LayoutWrapper style={{ padding: "0px" }}>
          <h1 className="PageHeader">
            {" "}
            <IntlMessages id="sidebar.incidents" />
          </h1>
          <Row style={rowStyle} gutter={gutter} justify="start">
            <Col md={24} sm={24} xs={24} style={colStyle}>
              <Box className="boxWrapper">
                <TitleWrapper className="titleWrapper">
                  <ComponentTitle>
                    <Select
                      placeholder="Select Type"
                      style={{ width: "140px" }}
                      onChange={this.handlSelectChange}
                      value={incidentTypeId}
                    >
                      <Option value="">All</Option>
                      {incidentDataInit &&
                      !isNullOrUndefined(incidentDataInit.incidentTypes)
                        ? incidentDataInit.incidentTypes.map((value, index) => (
                            <Option key={index} value={value.id}>
                              {value.name}
                            </Option>
                          ))
                        : ""}
                    </Select>
                    <RangePicker
                      format="YYYY-MM-DD"
                      placeholder={["Start date", "End date"]}
                      value={
                        startDate && endDate
                          ? [
                              moment(startDate, "YYYY-MM-DD"),
                              moment(endDate, "YYYY-MM-DD")
                            ]
                          : ""
                      }
                      allowClear={false}
                      onChange={this.onChangeDate}
                      style={{ width: "300px" }}
                    />
                    <Button
                      onClick={this.handleSearch}
                      className="btSearch"
                      style={{ top: 0 }}
                    >
                      <Icon type="search" theme="outlined" />
                    </Button>
                    <ReactToPrint
                      key="print"
                      trigger={() => (
                        <Button
                          style={{ display: "none" }}
                          className="btnRefresh btWizard btPrintAll"
                          title="Print"
                          TableWrapper
                          onClick={this.handleSearch}
                        >
                          <Icon type="printer" theme="outlined" /> Print
                        </Button>
                      )}
                      content={() => this.componentPrintRef}
                      onAfterPrint={() => this.updatePrinter(row, false)}
                    />
                    <Button className="btWizard" onClick={this.printAll}>
                      <Icon type="printer" theme="outlined" /> Print
                    </Button>
                    <div style={{ display: "none" }}>
                      <Print
                        rows={rows}
                        ref={el => (this.componentPrintRef = el)}
                      />
                    </div>
                  </ComponentTitle>
                  <ButtonHolders className="group_bt_head">
                    <button
                      onClick={this.handleRefresh}
                      className="btnRefresh btWizard"
                      style={{cursor:"pointer"}}
                    >
                      <Icon type="sync" theme="outlined" />
                      Refresh
                    </button>
                    
                      <button
                      onClick={this.handleModal.bind(this, "insert", null)}
                      style={{cursor:"pointer"}}
                      className="btnAdd btWizard"
                    >
                      <Icon type="plus-square" theme="outlined" />
                      Add new
                    </button>
                    
                  </ButtonHolders>
                </TitleWrapper>

                <TableWrapper
                  rowKey="key"
                  columns={columns}
                  dataSource={dataSource}
                  locale={{
                    emptyText:
                      this.props.isLoading === true ? (
                        <div className="ant-spin ant-spin-spinning ant-table-with-pagination ant-table-spin-holder">
                          <span className="ant-spin-dot ant-spin-dot-spin">
                            <i />
                            <i />
                          </span>
                        </div>
                      ) : (
                        <span>
                          <IntlMessages id="button.empty" />
                        </span>
                      )
                  }}
                  //loading={this.props.isLoading}
                  className="isoSimpleTable"
                  bordered={true}
                  pagination={{
                    showSizeChanger: false,
                    defaultCurrent: 1,
                    defaultPageSize: dataConfig.pageLimit || 10,
                    current: this.state.page,
                    total: count,
                    hideOnSinglePage: true,
                    onChange: this.onPageChange,
                    showTotal: (total, range) => {
                      return `Show ${range[0]}-${range[1]} in ${dataSource.length} records`;
                    }
                  }}
                />
                {row ? (
                  <Modal
                    modalActive={modalActive}
                    modalType={this.state.modalType}
                    row={row}
                    incidentDataInit={incidentDataInit}
                    handleCancel={this.handleCancel}
                    handleSubmit={this.handleSubmit}
                    handleClose={this.handleCancel}
                    disable={disable}
                  />
                ) : (
                  ""
                )}
              </Box>
            </Col>
          </Row>
        </LayoutWrapper>
      </DataWrapper>
    );
  }
}

//quybv90: modified 2/3/2029
export default connect(
  state => ({
    ...state.IncidentsReducer,
    ...state.SocketReducer
  }),
  { ...actions, ...socketActions }
)(Index);
