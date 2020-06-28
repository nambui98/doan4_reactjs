import React from "react";

import { connect } from "react-redux";
import LayoutWrapper from "../../../components/utility/layoutWrapper";
import { Row, Col, Icon, Input, Popconfirm } from "antd";
import basicStyle from "../../../settings/basicStyle";
import Box from "../../../components/utility/box";
import moment from "moment";
import {
  ActionWrapper,
  TableWrapper,
  ButtonHolders,
  TitleWrapper,
  ComponentTitle
} from "../../../common/control.style";
import DataWrapper from "../../../common/data.style";
import ContentHolder from "../../../components/utility/contentHolder";
import IntlMessages from "../../../components/utility/intlMessages";
import helperFunc from "../../../helpers/helperFunc";
import { dataConfig } from "../../../settings/index";
import BaseComponent from "../../../containers/base";
import NewsType from "../../components/NewsType";
import actions from "../../redux/NewsType/actions";
const { trimByWord } = helperFunc;

class NewsTypes extends BaseComponent {
  constructor(props) {
    super(props);
    this.state = {
      confirmDirty: false,
      search: "",
      connection: null,
      modalType: "",
      modalActive: false,
      page: 1,
      strName: <IntlMessages id="form.newsType" />
    };
  }
  // save and add
  updateStatusAdd = value => {
    this.props.updateStatusSaveAdd(value);
  };

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
          page: 1,
          limit: dataConfig.pageLimit
        };
        this.props.loadData(page);
      }
      return true;
    }
  };

  handleSubmit = (actionName, obj) => {
    if (obj.id > 0 && actionName !== "delete") actionName = "update";
    this.setState({ loading: true });
    this.props.saveInto(obj, actionName);
  };
  handleRefresh = (name = null) => {
    const page = {
      name: "",
      page: 1,
      limit: dataConfig.pageLimit
    };
    this.props.loadData(page);
    this.reset();
  };
  handleSearchChange = e => {
    this.setState({ ...this.state, search: e.target.value });
  };
  handleSearch = () => {
    const page = {
      name: this.state.search,
      page: 1,
      limit: dataConfig.pageLimit
    };
    this.props.loadData(page);
  };
  reset = () => {
    this.setState({
      search: "",
      page: 1
    });
  };
  handleCancel = () => {
    this.setState({
      modalType: helperFunc.modeType.None,
      modalActive: false
    });
  };
  handleModal(action, row = null) {
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
  onPageChange = (pageNumber, pageSize) => {
    const page = {
      name: this.state.search,
      page: pageNumber,
      limit: pageSize
    };
    this.props.loadData(page);
  };

  render() {
    const { rows, count, row } = this.props;
    const { rowStyle, colStyle, gutter } = basicStyle;
    const { modalActive } = this.state;
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
    this.columns = [
      {
        title: <IntlMessages id="form.name" />,
        dataIndex: "name",
        key: "name",
        sorter: (a, b) => {
          if (a.name < b.name) return -1;
          if (a.name > b.name) return 1;
          return 0;
        },
        render: (text, row) => {
          if (row.name) {
            return <b>{trimByWord(row.name)}</b>;
          }
        }
      },
      {
        title: <IntlMessages id="form.updatedBy" />,
        dataIndex: "admin.username",
        className: "noWrapCell",
        key: "admin.username",
        sorter: (a, b) => {
          if (a.admin.username < b.admin.username) return -1;
          if (a.admin.username > b.admin.username) return 1;
          return 0;
        },
        render: (text, row) => {
          return <span>{row.admin.username}</span>;
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
          return (
            <span>
              {moment(row.updated_at).format(helperFunc.fomatDateTime())}
            </span>
          );
        }
      },
      {
        title: <IntlMessages id="form.action" />,
        key: "actions",
        fixed: "right",
        width: 100,
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
            <IntlMessages id="form.newsType" />
          </h1>
          <Row style={rowStyle} gutter={gutter} justify="start">
            <Col md={24} sm={24} xs={24} style={colStyle}>
              <Box className="boxWrapper">
                <ContentHolder style={{ marginTop: 0, overflow: "hidden" }}>
                  <TitleWrapper className="titleWrapper">
                    <ComponentTitle>
                      <Input
                        placeholder="Name"
                        onChange={this.handleSearchChange}
                        className="inputSearch"
                        onKeyUp={this.onKeyUp}
                        value={this.state.search}
                      />
                      <button className="btSearch" onClick={this.handleSearch}>
                        <Icon type="search" theme="outlined" />
                      </button>
                    </ComponentTitle>
                    <ButtonHolders className="group_bt_head">
                      <button
                        onClick={this.handleRefresh}
                        className="btnRefresh btWizard"
                      >
                        <Icon type="sync" theme="outlined" />{" "}
                        <IntlMessages id="button.refresh" />
                      </button>
                      <button
                        onClick={this.handleModal.bind(this, "insert", null)}
                        className="btnAdd btWizard"
                      >
                        <Icon type="plus-square" theme="outlined" />{" "}
                        <IntlMessages id="button.add" />
                      </button>
                    </ButtonHolders>
                  </TitleWrapper>
                  <TableWrapper
                    rowKey="id"
                    columns={this.columns}
                    dataSource={dataSource}
                    locale={{
                      emptyText:
                        this.props.isLoading === true ? (
                          <div className="ant-spin ant-spin-spinning ant-table-with-pagination ant-table-spin-holder">
                            <span className="ant-spin-dot ant-spin-dot-spin" />
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
                      total: count,
                      hideOnSinglePage: true,
                      onChange: this.onPageChange,
                      showTotal: (total, range) => {
                        return `Show ${range[0]}-${range[1]} on ${dataSource.length} record`;
                      }
                    }}
                  />
                  {row ? (
                    <NewsType
                      modalActive={modalActive}
                      modalType={this.state.modalType}
                      row={row}
                      handleCancel={this.handleCancel}
                      handleSubmit={this.handleSubmit}
                      handleClose={this.handleCancel}
                      updateStatusAdd={this.updateStatusAdd}
                    />
                  ) : (
                    ""
                  )}
                </ContentHolder>
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
    ...state.NewsTypeReducer
  }),
  actions
)(NewsTypes);
