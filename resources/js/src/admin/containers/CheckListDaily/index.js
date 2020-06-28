import React from "react";
import { connect } from "react-redux";
import BaseComponent from "../../../containers/base";
import basicStyle from "../../../settings/basicStyle";
import {
  ActionWrapper,
  TableWrapper,
  ButtonHolders,
  TitleWrapper,
  ComponentTitle
} from "../../../common/control.style";
import DataWrapper from "../../../common/data.style";
import LayoutWrapper from "../../../components/utility/layoutWrapper";
import moment from "moment";
import { Row, Col, Icon, Popconfirm, Button } from "antd";
import Box from "../../../components/utility/box";
import Modal from "../../components/CheckListDaily";
import actions from "../../redux/CheckListDaily/actions";
import Tooltip from "../../../components/uielements/tooltip";
import { dataConfig } from "../../../settings/index";
import IntlMessages from "../../../components/utility/intlMessages";
import helperFunc from "../../../helpers/helperFunc";
import socketActions from "../../redux/Socket/actions";
import { connectSocket, listenSocket } from "./../../../helpers/message";
import flags from "../../../helpers/flags";

class CheckListDaily extends BaseComponent {
  constructor(props) {
    super(props);
    this.updateCheck = this.updateCheck.bind(this);
  }
  componentDidMount() {
    const page = {
      name: this.state.search,
      page: this.state.page,
      limit: dataConfig.pageLimit
    };
    this.props.loadData(page);
    this.socketIO = connectSocket(this.props.socketIO);
    listenSocket(this.socketIO, flags.CHECKLIST_DAILY, (flag, data) => {
      const newPage = {
        name: this.state.search,
        page: this.state.page,
        limit: dataConfig.pageLimit
      };
      this.props.loadData(newPage);
    });
    if (this.props.socketIO === null) {
      this.props.setSocket(this.socketIO);
    }
  }
  updateCheck(arr, dataCheck, arrCheckedList) {
    this.props.updateCheck(arr, dataCheck, arrCheckedList);
  }
  updateStatusAdd = value => {
    //this.props.updateStatusSaveAdd(value);
  };

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
        this.updateStatusAdd(false);
        // const page = {
        //   name: this.state.search,
        //   title: "",
        //   page: this.state.page,
        //   limit: dataConfig.pageLimit
        // };
        // nextProps.loadData(page);
      }
      return true;
    }
  };
  // Refresh
  handleRefresh = (name = null) => {
    this.props.loadData({
      name: "",
      title: "",
      page: 1,
      limit: dataConfig.pageLimit
    });
    this.reset();
  };
  handleLogout = row => {
    this.props.LogoutOne(row);
  };
  reset = () => {
    this.setState({
      search: "",
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
      title: "",
      page: pageNumber,
      limit: pageSize
    };
    this.setState(page, () => {
      this.props.loadData(page);
    });
  };

  onPageChange_customer = data => {
    this.props.loadData(data);
  };

  render() {
    const { rows, count, row, disable } = this.props;
    const { rowStyle, colStyle, gutter } = basicStyle;
    const { modalActive, newUserId } = this.state;
    const dataSource = [];
    let date = new Date();
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
        dataIndex: "user",
        key: "user",
        className: "noWrapCell",
        sorter: (a, b) => {
          if (a.admin.full_name < b.admin.full_name) return -1;
          if (a.admin.full_name > b.admin.full_name) return 1;
          return 0;
        },
        render: (text, row) => {
          return <span>{row.admin.full_name}</span>;
        }
      },
      {
        title: " Date",
        dataIndex: "check_date",
        key: "check_date",
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
        title: "Checklist",
        dataIndex: "user_checklist_dailies",
        className: "noWrapCell",
        key: "user_checklist_dailies",
        render: (text, row) => {
          if (row && row.user_checklist_dailies) {
            let countCheck = row.user_checklist_dailies.filter(item => {
              return item.status === 1;
            }).length;
            let countUnCheck = row.user_checklist_dailies.filter(item => {
              return item.status === 2;
            }).length;
            return countCheck + ` checked,` + countUnCheck + ` uncheck`;
          }
        }
      },
      
      {
        title: <IntlMessages id="form.updatedAt" />,
        dataIndex: "updated_at",
        className: "noWrapCell",
        key: "updated_at",
        sorter: (a, b) => {
          if (a.updated_at < b.updated_at) return -1;
          if (a.updated_at > b.updated_at) return 1;
          return 0;
        },
        render: (text, row) => {
          return <span>{row.updated_at}</span>;
        }
      },
      {
        title: <IntlMessages id="form.createdAt" />,
        dataIndex: "created_at",
        className: "noWrapCell",
        key: "created_at",
        sorter: (a, b) => {
          if (a.created_at < b.created_at) return -1;
          if (a.created_at > b.created_at) return 1;
          return 0;
        },
        render: (text, row) => {
          return <span>{row.created_at}</span>;
        }
      },
      {
        title: "",
        key: "action",
        fixed: 'right',
        width: 100,
        className: "noWrapCell",
        render: (text, row) => {
          return (
            <ActionWrapper>
              {(row && moment(date).format("YYYY-MM-DD") !== row.check_date) ||!JSON.parse(localStorage.getItem("role_detail")).some(
                  role => role.address === "100"
                ) ? (
                <Tooltip title="View Info">
                  <button
                    className="deleteBtn aSimple"
                    onClick={this.handleModal.bind(this, "view", row)}
                  >
                    <i className="ion-android-document" />
                  </button>
                </Tooltip>
              ) : (
                <button
                  onClick={this.handleModal.bind(this, "edit", row)}
                  className="aSimple"
                >
                  <Icon type="form" theme="outlined" />
                </button>
              )}

              {localStorage.getItem("user_name") === "admin"
                    ||JSON.parse(localStorage.getItem("role_detail")).some(role => role.address === "105")  ? (
                <Popconfirm
                  title="Are you sure delete this profile?."
                  okText={<IntlMessages id="button.delete" />}
                  cancelText={<IntlMessages id="button.cancel" />}
                  placement="topRight"
                  onConfirm={this.handleSubmit.bind(this, "delete", row)}
                >
                  <button className="deleteBtn aSimple">
                    <i className="ion-android-delete deleteRow" />
                  </button>
                </Popconfirm>
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
            <IntlMessages id="sidebar.checklistDaily" />
          </h1>
          <Row style={rowStyle} gutter={gutter} justify="start">
            <Col md={24} sm={24} xs={24} style={colStyle}>
              <Box className="boxWrapper">
                <TitleWrapper className="titleWrapper">
                  <ComponentTitle>
                  </ComponentTitle>
                  <ButtonHolders className="group_bt_head">
                    <button
                      onClick={this.handleRefresh}
                      className="btnRefresh btWizard"
                    >
                      <Icon type="sync" theme="outlined" />
                      Refresh
                    </button>
                    {rows &&
                    rows.length > 0 &&
                    (rows.some(row=>row.user_id===JSON.parse(localStorage.getItem("user_id"))&& moment(date).format("YYYY-MM-DD") === row.check_date))===true ? (
                      
                      <Tooltip
                      title="Checked today"
                      style={{ backgroundColor: "#EEE" }}
                    >
                      <Button
                        disabled
                        onClick={this.handleModal.bind(this, "insert", null)}
                        className="btnAdd"
                      >
                        <Icon type="plus-square" theme="outlined" />
                        Add new
                      </Button>
                    </Tooltip>
                    ) : (
                      <button
                        onClick={this.handleModal.bind(this, "insert", null)}
                        className="btnAdd btWizard"
                      >
                        <Icon type="plus-square" theme="outlined" />
                        Add new
                      </button>
                    )}
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
                    displayname={row.displayname}
                    modalActive={modalActive}
                    modalType={this.state.modalType}
                    checkList={this.props.checkList}
                    row={row}
                    handleCancel={this.handleCancel}
                    handleSubmit={this.handleSubmit}
                    handleClose={this.handleCancel}
                    newUserId={newUserId}
                    updateCheck={this.updateCheck}
                    disable={disable}
                    onPageChange_customer={this.onPageChange_customer}
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
    ...state.CheckListDailyReducer,
    ...state.SocketReducer
  }),
  { ...actions, ...socketActions }
)(CheckListDaily);
