// eslint-disable-next-line
import React from "react";
import { connect } from "react-redux";
import BaseComponent from "../../../containers/base";
import basicStyle from "../../../settings/basicStyle";
import {
  ActionWrapper,
  TableWrapper,
  TitleWrapper,
  ButtonHolders,
  ComponentTitle
} from "../../../common/control.style";
import DataWrapper from "../../../common/data.style";
import LayoutWrapper from "../../../components/utility/layoutWrapper";
import ReactToPrint from "react-to-print";
import moment from "moment";
import { Row, Col, Icon, Tooltip, DatePicker, Button } from "antd";
import Box from "../../../components/utility/box";
import Modal from "../../components/Summary";
import actions from "../../redux/Summary/actions";
import { dataConfig } from "../../../settings/index";
import IntlMessages from "../../../components/utility/intlMessages";
import helperFunc from "../../../helpers/helperFunc";
import socketActions from "../../redux/Socket/actions";
import { connectSocket, listenSocket } from "./../../../helpers/message";
import ReactTestUtils from "react-dom/test-utils";
import flags from "../../../helpers/flags";
import Print from "./print";
const { RangePicker } = DatePicker;

class Summary extends BaseComponent {
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
      isPrint: isPrint,
      EndDate: this.state.endDate,
      name: this.state.search,
      page: this.state.page,
      limit: dataConfig.pageLimit
    };
    this.props.loadData(page);
    this.socketIO = connectSocket(this.props.socketIO);
    listenSocket(this.socketIO, flags.INCIDENT_TYPE, (flag, data) => {
      const newPage = {
        name: this.state.search,
        isPrint: isPrint,
        StartDate: this.state.startDate,
        EndDate: this.state.endDate,
        page: this.state.page,
        limit: dataConfig.pageLimit
      };
      this.props.loadData(newPage);
    });
    if (this.props.socketIO === null) {
      this.props.setSocket(this.socketIO);
    }
  }
  //load datatable
  shouldComponentUpdate = (nextProps, nextState) => {
    if (this.props.isSuccess === nextProps.isSuccess) {
      return true;
    } else {
      if (nextProps.isSuccess === true) {
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
  // Refresh
  handleRefresh = (name = null) => {
    this.props.loadData({
      name: "",
      page: 1,
      StartDate: moment(new Date())
        .subtract(1, "months")
        .format("YYYY/MM/DD 00:00:00"),
      EndDate: moment(new Date()).format("YYYY/MM/DD 23:59:59"),
      limit: dataConfig.pageLimit,
      isPrint: 2
    });
    this.reset();
  };

  handleSearch = () => {
    const page = {
      name: this.state.search,
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
      search: "",
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
      name: this.state.search,
      page: pageNumber,
      limit: pageSize,
      StartDate: this.state.startDate,
      EndDate: this.state.endDate,
      isPrint: 2
    };
    this.setState(page, () => {
      this.props.loadData(page);
    });
  };
  printAll = () => {
    const { loadData } = this.props;
    const page = {
      name: this.state.search,
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
    const { rows, count, row, disable, newRow } = this.props;
    const { rowStyle, colStyle, gutter } = basicStyle;
    const { modalActive, startDate, endDate } = this.state;
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
        title: "Date",
        dataIndex: "Date",
        key: "Date",
        className: "noWrapCell",
        sorter: (a, b) => {
          if (a.check_date < b.check_date) return -1;
          if (a.check_date > b.check_date) return 1;
          return 0;
        },
        render: (text, row) => {
          return <span>{row.check_date}</span>;
        }
      },
      {
        title: "Count",
        dataIndex: "Count",
        className: "noWrapCell",
        key: "Count",
        sorter: (a, b) => {
          if (a.count1 < b.count1) return -1;
          if (a.count1 > b.count1) return 1;
          return 0;
        },
        render: (text, row) => {
          return <span>{row.count1}</span>;
        }
      },

      {
        title: "",
        key: "action",
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
            <IntlMessages id="sidebar.summary" />
          </h1>
          <Row style={rowStyle} gutter={gutter} justify="start">
            <Col md={24} sm={24} xs={24} style={colStyle}>
              <Box className="boxWrapper">
                <TitleWrapper className="titleWrapper">
                  <ComponentTitle>
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
                    >
                      <Icon type="sync" theme="outlined" />
                      Refresh
                    </button>
                    {/* <button
                                        onClick={this.handleModal.bind(this, "insert", null)}
                                        className="btnAdd btWizard"
                                        >
                                        <Icon type="plus-square" theme="outlined" />
                                        Add new
                                        </button> */}
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
                    row={newRow}
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

export default connect(
  state => ({
    ...state.SummaryReducer,
    ...state.SocketReducer
  }),
  { ...actions, ...socketActions }
)(Summary);
