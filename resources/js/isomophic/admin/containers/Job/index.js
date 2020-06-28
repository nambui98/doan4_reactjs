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

import { Row, Col, Icon, Popconfirm, Select } from "antd";
import Box from "../../../components/utility/box";
import Modal from "../../components/Job";
import actions from "../../redux/Job/actions";
import { dataConfig, urlConfig } from "../../../settings/index";
import IntlMessages from "../../../components/utility/intlMessages";
import helperFunc from "../../../helpers/helperFunc";
import socketActions from "../../redux/Socket/actions";
import { connectSocket, listenSocket } from "./../../../helpers/message";
import flags from "../../../helpers/flags";
import { isNullOrUndefined } from "util";
const { Option } = Select;

class Job extends BaseComponent {
  componentDidMount() {
    const page = {
      job_type_id: this.state.jobTypeId,
      page: this.state.page,
      limit: dataConfig.pageLimit
    };

    this.props.loadData(page);
    this.socketIO = connectSocket(this.props.socketIO);
    listenSocket(this.socketIO, flags.JOB, (flag, data) => {
      const newPage = {
        page: this.state.page,
        limit: dataConfig.pageLimit
      };
      this.props.loadData(newPage);
    });

    if (this.props.socketIO === null) {
      this.props.setSocket(this.socketIO);
    }
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
      }
      return true;
    }
  };
  // Refresh
  handleRefresh = (name = null) => {
    this.props.loadData({
      job_type_id: [],
      page: 1,
      limit: dataConfig.pageLimit
    });
    this.reset();
  };

  handleSearch = () => {
    const page = {
      job_type_id: this.state.jobTypeId,
      page: 1,
      limit: dataConfig.pageLimit
    };
    this.setState(page, () => {
      this.props.loadData(page);
    });
  };
  reset = () => {
    this.setState({
      jobTypeId: [],
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
      job_type_id: this.state.jobTypeId,
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
  handlSelectChange = id => {
    this.setState({
      ...this.state,
      jobTypeId: id
    });
  };
  render() {
    const { rows, count, row, disable, jobType, jobSite } = this.props;
    const { rowStyle, colStyle, gutter } = basicStyle;
    const { modalActive, newUserId, jobTypeId } = this.state;
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
          return <span>{row.admin.full_name}</span>;
        }
      },
      {
        title: "Type",
        dataIndex: "job_type",
        className: "noWrapCell",
        key: "job_type",
        sorter: (a, b) => {
          if (a.job_type_id < b.job_type_id) return -1;
          if (a.job_type_id > b.job_type_id) return 1;
          return 0;
        },
        render: (text, row) => {
          return <span>{row.job_type.name}</span>;
        }
      },
      {
        title: "Site",
        dataIndex: "job_site",
        className: "noWrapCell",
        key: "job_site",
        sorter: (a, b) => {
          if (a.job_site_id < b.job_site_id) return -1;
          if (a.job_site_id > b.job_site_id) return 1;
          return 0;
        },
        render: (text, row) => {
          return <span>{row && row.job_site ? row.job_site.name : ""}</span>;
        }
      },
      {
        title: "Done",
        dataIndex: "is_job_done",
        className: "noWrapCell",
        key: "is_job_done",
        width: 50,
        sorter: (a, b) => {
          if (a.is_job_done < b.is_job_done) return -1;
          if (a.is_job_done > b.is_job_done) return 1;
          return 0;
        },
        render: (text, row) => {
          let className;
          if (row.is_job_done === helperFunc.yesNo.Yes) {
            className = "publish";
          } else {
            className = "private";
          }
          return (
            <StatusTag className={className}>
              {row.is_job_done === helperFunc.yesNo.Yes
                ? helperFunc.yesNo.properties[helperFunc.yesNo.Yes]
                : helperFunc.yesNo.properties[helperFunc.yesNo.No]}
            </StatusTag>
          );
        }
      },
      {
        title: "Briefed",
        dataIndex: "is_job_briefed",
        className: "noWrapCell",
        key: "is_job_briefed",
        width: 50,
        sorter: (a, b) => {
          if (a.is_job_briefed < b.is_job_briefed) return -1;
          if (a.is_job_briefed > b.is_job_briefed) return 1;
          return 0;
        },
        render: (text, row) => {
          let className;
          if (row.is_job_briefed === helperFunc.yesNo.Yes) {
            className = "publish";
          } else {
            className = "private";
          }
          return (
            <StatusTag className={className}>
              {row.is_job_briefed === helperFunc.yesNo.Yes
                ? helperFunc.yesNo.properties[helperFunc.yesNo.Yes]
                : helperFunc.yesNo.properties[helperFunc.yesNo.No]}
            </StatusTag>
          );
        }
      },
      {
        title: "Hazard",
        dataIndex: "hazard",
        className: "noWrapCell",
        key: "hazard",
        sorter: (a, b) => {
          if (a.hazard < b.hazard) return -1;
          if (a.hazard > b.hazard) return 1;
          return 0;
        },
        render: (text, row) => {
          return <span>{row.hazard}</span>;
        }
      },
      {
        title: "RA",
        dataIndex: "ra",
        className: "noWrapCell",
        key: "ra",
        sorter: (a, b) => {
          if (a.ra < b.ra) return -1;
          if (a.ra > b.ra) return 1;
          return 0;
        },
        render: (text, row) => {
          return <span>{row.ra}</span>;
        }
      },
      {
        title: "Rish mitigate",
        dataIndex: "is_rish_mitigate",
        className: "noWrapCell",
        key: "is_rish_mitigate",
        width: 90,
        sorter: (a, b) => {
          if (a.is_rish_mitigate < b.is_rish_mitigate) return -1;
          if (a.is_rish_mitigate > b.is_rish_mitigate) return 1;
          return 0;
        },
        render: (text, row) => {
          let className;
          if (row.is_rish_mitigate === helperFunc.yesNo.Yes) {
            className = "publish";
          } else {
            className = "private";
          }
          return (
            <StatusTag className={className}>
              {row.is_rish_mitigate === helperFunc.yesNo.Yes
                ? helperFunc.yesNo.properties[helperFunc.yesNo.Yes]
                : helperFunc.yesNo.properties[helperFunc.yesNo.No]}
            </StatusTag>
          );
        }
      },
      // {
      //   title: "Site",
      //   dataIndex: "job_site",
      //   className: "noWrapCell",
      //   key: "job_site",
      //   sorter: (a, b) => {
      //     if (a.job_site_id < b.job_site_id) return -1;
      //     if (a.job_site_id > b.job_site_id) return 1;
      //     return 0;
      //   },
      //   render: (text, row) => {
      //     return <span>{row && row.job_site ? row.job_site.name : ""}</span>;
      //   }
      // },
      {
        title: <IntlMessages id="form.image" />,
        dataIndex: "image",
        key: "image",
        className: "noWrapCell",
        render: (text, row) => {
          if (row && row.images) {
            let images = row.images
              .split("##########")
              .slice(0, row.images.split("##########").length - 1);
            return images.map((image, index) => [
              <img
                key={index}
                style={{ width: "60px", margin: "4px 0" }}
                alt={row.name}
                src={urlConfig.imageUrl + image}
              />,
              <br key={index + images.length}></br>
            ]);
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
        
        title: "",
        key: "action",
        className: "noWrapCell",
        // style:{display:"none"},
        render: (text, row) => {
          return (
            <ActionWrapper>
              <div>
                {localStorage.getItem("user_name") === "admin" ||
                JSON.parse(localStorage.getItem("role_detail")).some(
                  role => role.address === "102"
                ) ? (
                  <button
                    onClick={this.handleModal.bind(this, "edit", row)}
                    className="aSimple"
                  >
                    <Icon type="form" theme="outlined" />
                  </button>
                ) : (
                  ""
                )}
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
              </div>
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
            <IntlMessages id="sidebar.job" />
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
                      value={jobTypeId}
                    >
                      <Option value="">All</Option>
                      {jobType && !isNullOrUndefined(jobType)
                        ? jobType.map((value, index) => (
                            <Option key={index} value={value.id}>
                              {value.name}
                            </Option>
                          ))
                        : ""}
                    </Select>
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
                    {JSON.parse(localStorage.getItem("role_detail")).some(
                      role => role.address === "101"
                    ) ? (
                      <button
                        onClick={this.handleModal.bind(this, "insert", null)}
                        className="btnAdd btWizard"
                      >
                        <Icon type="plus-square" theme="outlined" />
                        Add new
                      </button>
                    ) : (
                      ""
                    )}
                  </ButtonHolders>
                </TitleWrapper>
                <TableWrapper
                  rowKey="key"
                  columns={localStorage.getItem("user_name") === "admin" ||
                  JSON.parse(localStorage.getItem("role_detail")).some(
                    role => role.address === "102"
                  ) || JSON.parse(localStorage.getItem("role_detail")).some(
                    role => role.address === "101"
                  ) ?columns: columns.slice(0, columns.length-1)}
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
                    row={row}
                    jobType={jobType}
                    jobSite={jobSite}
                    handleCancel={this.handleCancel}
                    handleSubmit={this.handleSubmit}
                    handleClose={this.handleCancel}
                    updateStatusAdd={this.updateStatusAdd}
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
    ...state.JobReducer,
    ...state.SocketReducer
  }),
  { ...actions, ...socketActions }
)(Job);
