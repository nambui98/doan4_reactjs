import React from "react";
import { connect } from "react-redux";
import BaseComponent from "../../../containers/base";
import actions from "../../redux/News/actions";
import ModalForm from "../../components/News";
import basicStyle from "../../../settings/basicStyle";
import moment from "moment";
import {
  ActionWrapper,
  TableWrapper,
  ButtonHolders,
  TitleWrapper,
  ComponentTitle,
  StatusTag
} from "../../../common/control.style";
import DataWrapper from "../../../common/data.style";
import { Row, Col, Icon, Input } from "antd";
import Popconfirms from "../../../components/feedback/popconfirm";
import LayoutWrapper from "../../../components/utility/layoutWrapper";
import Box from "../../../components/utility/box";
import ContentHolder from "../../../components/utility/contentHolder";
import { dataConfig, urlConfig } from "../../../settings/index";
import helperFunc from "../../../helpers/helperFunc";
import IntlMessages from "../../../components/utility/intlMessages";
const { trimByWord } = helperFunc;
class News extends BaseComponent {
  constructor(props) {
    super(props);
    // save and add
    this.updateStatusAdd = this.updateStatusAdd.bind(this);
    this.state = {
      confirmDirty: false,
      search: "",
      connection: null,
      modalType: "",
      page: 1,
      modalActive: false,
      strName: <IntlMessages id="form.news" />
    };
  }
  // save and add
  updateStatusAdd(value) {
    this.props.updateStatusSaveAdd(value);
  }
  handleRefresh = (name = null) => {
    this.props.loadData({
      name: "",
      page: this.state.page,
      limit: dataConfig.pageLimit
    });
    this.reset();
  };
  reset = () => {
    this.setState({
      search: "",
      page: 1
    });
  };
  render() {
    const { rows, count, row, newsType } = this.props;
    const { rowStyle, colStyle, gutter } = basicStyle;
    const { modalActive } = this.state;
    const dataSource = [];
    if (typeof rows !== "undefined") {
      Object.keys(rows).map((row, index) => {
        return dataSource.push({
          ...rows[row],
          key: row
        });
      });
    }
    let columns = [];
    columns = [
      {
        title: <IntlMessages id="form.title" />,
        dataIndex: "title",
        key: "title",
        width: "200px",
        sorter: (a, b) => {
          if (a.title < b.title) return -1;
          if (a.title > b.title) return 1;
          return 0;
        },
        render: (text, row) => {
          if (row.title) {
            return <b>{trimByWord(row.title)}</b>;
          }
        }
      },
      {
        title: <IntlMessages id="form.type" />,
        dataIndex: "news_type.name",
        key: "news_type.name",
        width: "200px",
        sorter: (a, b) => {
          if (a.news_type.name < b.news_type.name) return -1;
          if (a.news_type.name > b.news_type.name) return 1;
          return 0;
        },
        render: (text, row) => {
          if (row.news_type && row.news_type.name) {
            return <span>{row.news_type.name}</span>;
          }
        }
      },
      {
        title: <IntlMessages id="form.image" />,
        dataIndex: "image",
        key: "image",
        width: "200px",
        className: "noWrapCell",
        render: (text, row) => {
          if (row.image) {
            return (
              <img
                style={{ height: "60px" }}
                alt={row.name}
                src={urlConfig.imageUrl + row.image}
              />
            );
          }
        }
      },
      {
        title: <IntlMessages id="form.introduction" />,
        dataIndex: "intro",
        key: "intro",
        width: "200px",
        sorter: (a, b) => {
          if (a.intro < b.intro) return -1;
          if (a.intro > b.intro) return 1;
          return 0;
        },
        render: (text, row) => {
          if (row.intro) {
            return trimByWord(row.intro);
          }
        }
      },
      {
        title: "Public Date",
        dataIndex: "publish_date",
        width: "170px",
        key: "PublicDate",
        sorter: (a, b) => {
          if (a.publish_date < b.publish_date) return -1;
          if (a.publish_date > b.publish_date) return 1;
          return 0;
        },
        render: (text, row) => {
          if (row.publish_date) {
            return (
              <span>
                {moment(row.publish_date).format(helperFunc.fomatDateTime())}
              </span>
            );
          }
        }
      },
      {
        title: <IntlMessages id="form.status" />,
        dataIndex: "status",
        className: "noWrapCell",
        key: "status",
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
            <StatusTag className={className}>
              {row.status === helperFunc.status.Active
                ? helperFunc.status.properties[helperFunc.status.Active]
                : helperFunc.status.properties[helperFunc.status.Inactive]}
            </StatusTag>
          );
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
        width: "170px",
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
        key: "action",
        fixed: "right",
        width: 100,
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
      <div>
        <DataWrapper>
          <LayoutWrapper style={{ padding: "0px" }}>
            <h1 className="PageHeader"> {this.state.strName}</h1>
            <Row style={rowStyle} gutter={gutter} justify="start">
              <Col md={24} sm={24} xs={24} style={colStyle}>
                <Box className="boxWrapper">
                  <ContentHolder style={{ marginTop: 0, overflow: "hidden" }}>
                    <TitleWrapper className="titleWrapper">
                      <ComponentTitle>
                        <Input
                          onChange={this.handleSearchChange}
                          className="inputSearch"
                          placeholder="Title search"
                          onKeyUp={this.onKeyUp}
                          value={this.state.search}
                        />
                        <button
                          className="btSearch"
                          onClick={this.handleSearch}
                        >
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
                          {" "}
                          <Icon type="plus-square" theme="outlined" />
                          <IntlMessages id="button.add" />
                        </button>
                      </ButtonHolders>
                    </TitleWrapper>

                    {row ? (
                      <ModalForm
                        modalActive={modalActive}
                        modalType={this.state.modalType}
                        row={row}
                        strName={this.state.strName}
                        strAddress={this.state.strAddress}
                        handleCancel={this.handleCancel}
                        handleSubmit={this.handleSubmit}
                        handleClose={this.handleCancel}
                        newsType={newsType}
                        updateStatusAdd={this.updateStatusAdd}
                      />
                    ) : (
                      ""
                    )}
                    <TableWrapper
                      rowKey="key"
                      columns={columns}
                      bordered={true}
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
                      pagination={{
                        showSizeChanger: false,
                        defaultCurrent: 1,
                        defaultPageSize: dataConfig.pageLimit || 10,
                        hideOnSinglePage: true,
                        onChange: this.onPageChange,
                        total: count
                      }}
                    />
                  </ContentHolder>
                </Box>
              </Col>
            </Row>
          </LayoutWrapper>
        </DataWrapper>
      </div>
    );
  }
}

export default connect(
  state => ({
    ...state.NewsReducer
  }),
  actions
)(News);
