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
import DataWrapper from "../../../common/data.style";
import LayoutWrapper from "../../../components/utility/layoutWrapper";

import { Row, Col, Icon, Input, Popconfirm } from "antd";
import Box from "../../../components/utility/box";
import Modal from "../../components/IncidentType";
import actions from "../../redux/IncidentType/actions";
import Tooltip from "../../../components/uielements/tooltip";
import { dataConfig, urlConfig } from "../../../settings/index";
import IntlMessages from "../../../components/utility/intlMessages";
import helperFunc from "../../../helpers/helperFunc";

class Users extends BaseComponent {
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
        const page = {
          name: this.state.search,
          title: "",
          page: this.state.page,
          limit: dataConfig.pageLimit
        };
        nextProps.loadData(page);
      }
      return true;
    }
  };
  // Refresh
  handleRefresh = (name = null) => {
    this.props.loadData({
      name: "",
      title: "",
      page: this.state.page,
      limit: dataConfig.pageLimit
    });
    this.reset();
  };

  handleSearch = () => {
    const page = {
      name: this.state.search,
      title: "",
      page: this.state.page,
      limit: dataConfig.pageLimit
    };
    this.setState(page, () => {
      this.props.loadData(page);
    });
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
        title: "Name",
        dataIndex: "Name",
        key: "Name",
        className: "noWrapCell",
        sorter: (a, b) => {
          if (a.name < b.name) return -1;
          if (a.name > b.name) return 1;
          return 0;
        },
        render: (text, row) => {
          return (
            <a
              style={{ fontWeight: "bold" }}
              onClick={this.handleModal.bind(this, "view", row)}
            >
              {row.name}
            </a>
          );
        }
      },

      {
        title: "Content",
        dataIndex: "content",
        className: "noWrapCell",
        key: "content",
        sorter: (a, b) => {
          if (a.content < b.content) return -1;
          if (a.content > b.content) return 1;
          return 0;
        },
        render: (text, row) => {
          return <span>{row.content}</span>;
        }
      },
      {
        title: <IntlMessages id="form.status" />,
        dataIndex: "status",
        className: "noWrapCell",
        key: "status",
        width: 150,
        sorter: (a, b) => {
          if (a.status < b.status) return -1;
          if (a.status > b.status) return 1;
          return 0;
        },
        render: (text, row) => {
          let className;
          if (row.status === helperFunc.status.Active) {
            className = "publish";
          } else {
            className = "private";
          }
          return (
            <a
              onClick={this.handleModal.bind(this, "changeStatus", row)}
              className="conten"
            >
              <StatusTag className={className}>
                {row.status === helperFunc.status.Active
                  ? helperFunc.status.properties[helperFunc.status.Active]
                  : helperFunc.status.properties[helperFunc.status.Inactive]}
              </StatusTag>
            </a>
          );
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
        fixed: "right",
        width: 150,
        className: "noWrapCell",
        render: (text, row) => {
          return (
            <ActionWrapper>
              <button
                onClick={this.handleModal.bind(this, "edit", row)}
                className="aSimple"
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
            <IntlMessages id="sidebar.incidentType" />
          </h1>
          <Row style={rowStyle} gutter={gutter} justify="start">
            <Col md={24} sm={24} xs={24} style={colStyle}>
              <Box className="boxWrapper">
                <TitleWrapper className="titleWrapper">
                  <ComponentTitle>
                    <Input
                      placeholder="Name"
                      onChange={this.handleSearchChange}
                      className="inputSearch"
                      onKeyUp={this.onKeyUp}
                      value={this.state.search}
                    />
                    <button onClick={this.handleSearch} className="btSearch">
                      <Icon type="search" theme="outlined" />
                    </button>
                  </ComponentTitle>
                  <ButtonHolders className="group_bt_head">
                    <button
                      onClick={this.handleRefresh}
                      className="btnRefresh btWizard"
                    >
                      <Icon type="sync" theme="outlined" />
                      Refresh
                    </button>
                    <button
                      onClick={this.handleModal.bind(this, "insert", null)}
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
                    emptyText: (
                      <div className="ant-spin ant-spin-spinning ant-table-with-pagination ant-table-spin-holder">
                        <span className="ant-spin-dot ant-spin-dot-spin">
                          <i></i>
                          <i></i>
                          <i></i>
                          <i></i>
                        </span>
                      </div>
                    )
                  }}
                  //loading={this.props.isLoading}
                  className="isoSimpleTable"
                  bordered={true}
                  pagination={{
                    showSizeChanger: false,
                    defaultCurrent: 1,
                    defaultPageSize: dataConfig.pageLimit || 10,
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
    ...state.IncidentTypeReducer
  }),
  actions
)(Users);
