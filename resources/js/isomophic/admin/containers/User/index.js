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
} from '../../../common/control.style';
import DataWrapper from "../../../common/data.style";
import LayoutWrapper from "../../../components/utility/layoutWrapper";

import { Row, Col, Icon, Input } from "antd";
import Box from "../../../components/utility/box";
import Modal from "../../components/User";
import actions from "../../redux/User/actions";
import Tooltip from '../../../components/uielements/tooltip';
import { dataConfig, urlConfig } from '../../../settings/index';
import IntlMessages from '../../../components/utility/intlMessages';
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
            limit: dataConfig.pageLimit,
            loadData: "User"
        };
        this.props.loadData(page);
    }
    updateCheck(arr, dataCheck, arrCheckedList) {
        this.props.updateCheck(arr, dataCheck, arrCheckedList);
    }
    updateStatusAdd = (value) => {
        //this.props.updateStatusSaveAdd(value);
    };

    //load datatable  
    shouldComponentUpdate = (nextProps, nextState) => {
        if ((this.props.isSuccess === nextProps.isSuccess)) {
            return true;
        } else {
            if (nextProps.isSuccess === true) {
                if (nextState.modalType === helperFunc.modeType.Insert && nextProps.saveAdd === true) {
                    this.setState({
                        modalActive: true,
                        modalType: helperFunc.modeType.Insert,
                    });
                }
                else {
                    this.setState({
                        modalActive: false,
                        modalType: helperFunc.modeType.None,
                    });
                }
                this.updateStatusAdd(false);
                const page = {
                    name: this.state.search,
                    phone:"",
                    page: this.state.page,
                    limit: dataConfig.pageLimit,
                    loadData: "User"
                };
                nextProps.loadData(page);
            }
            return true;
        }
    }
    // Refresh
    handleRefresh = (name = null) => {
        this.props.loadData({
            name: "",
            phone:"",
            page: this.state.page,
            limit: dataConfig.pageLimit,
            loadData: "User"
        });
    };

    handleSearch = () => {
        const page = {
            name: this.state.search,
            phone:"",
            page: this.state.page,
            limit: dataConfig.pageLimit,
            loadData: "User"
        };
        this.setState(page, () => {
            this.props.loadData(page);
        });
    };
    handleLogout = (row) => {
        this.props.LogoutOne(row);
    };


    handleSubmit = (actionName, obj) => {
        if (actionName !== 'view') {
            this.setState({ loading: true });
            this.props.saveInto(obj, actionName);
        }
    };

    handleModal(action, row = null) {
        
        if (row) {
            this.setState({
                modalType: action,
                modalActive: true,
                displayname: row.displayname
            }, () => {
                this.props.toggleModal(action, row);
            });
        }
        else {
            this.setState({
                modalType: action,
                modalActive: true
            }, () => {
                this.props.toggleModal(action, row);
            });
        }
    };

    onPageChange = (pageNumber, pageSize) => {
        const page = {
            name: this.state.search,
            phone:"",
            page: pageNumber,
            limit: pageSize,
            loadData: "User"
        };
        this.setState(page, () => {
            this.props.loadData(page);
        });
    }

    onPageChange_customer = (data) => {
        this.props.loadData(data);
    }


    render() {
        const { rows, count, row, disable
        } = this.props;
        const { rowStyle, colStyle, gutter } = basicStyle;
        const { modalActive, newUserId } = (this.state);
        const dataSource = [];
        if (typeof (rows) !== "undefined" && rows !== null) {
            Object.keys(rows).map((row, index) => {
                return dataSource.push({
                    ...rows[row],
                    key: row,
                });
            });
        }
        // group header content of table
        let columns = [];
        columns = [
            {
                title: 'User name',
                dataIndex: 'username',
                key: 'username',
                className: 'noWrapCell',
                sorter: (a, b) => {
                    if (a.username < b.username) return -1;
                    if (a.username > b.username) return 1;
                    return 0;
                },
                render: (text, row) => {
                    return <button style={{ fontWeight: "bold" }} onClick={this.handleModal.bind(this, 'view', row)} >{row.username}</button>;
                },
            },
            {
                title: "Phone",
                dataIndex: 'phone',
                className: 'noWrapCell',
                key: 'phone',
                sorter: (a, b) => {
                    if (a.phone < b.phone) return -1;
                    if (a.phone > b.phone) return 1;
                    return 0;
                },
                render: (text, row) => {
                    return (
                        <span>{row.phone}</span>
                    )
                }
            },
            {
                title: <IntlMessages id="form.image" />,
                dataIndex: "image",
                key: "image",
                className: "noWrapCell",
                width:60,
                render: (text, row) => {
                if (row&&row.userdetail&&row.userdetail.avata) {
                    return (
                        <img style={{ width: 60 }} alt={row.name} src={urlConfig.imageUrl + row.userdetail.avata} />
                        )
                    }
                }
            },
            {
                title: <IntlMessages id="form.status" />,
                dataIndex: "status",
                className: "noWrapCell",
                key: "status",
                width:150,
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
                        <button onClick={this.handleModal.bind(this, 'changeStatus', row)} className="conten" >
                            <StatusTag className={className}>
                                {row.status === helperFunc.status.Active
                                    ? helperFunc.status.properties[helperFunc.status.Active]
                                    : helperFunc.status.properties[helperFunc.status.Inactive]}
                            </StatusTag>
                            
                        </button>
                    );
                }
            },
            {
                title: <IntlMessages id="form.updatedAt" />,
                dataIndex: 'updated_at',
                className: 'noWrapCell',
                key: 'updated_at',
                sorter: (a, b) => {
                    if (a.updated_at < b.updated_at) return -1;
                    if (a.updated_at > b.updated_at) return 1;
                    return 0;
                },
                render: (text, row) => {
                    return (
                        <span>{row.updated_at}</span>
                    )
                }
            },
            {
                title: <IntlMessages id="form.createdAt" />,
                dataIndex: 'created_at',
                className: 'noWrapCell',
                key: 'created_at',
                sorter: (a, b) => {
                    if (a.created_at < b.created_at) return -1;
                    if (a.created_at > b.created_at) return 1;
                    return 0;
                },
                render: (text, row) => {
                    return (
                        <span>{row.created_at}</span>
                    )
                }
            },
            // {
            //     title: "Topup History",
            //     key: 'Charge',
            //     fixed: 'right',
            //     width: 120,
            //     render: (text, row) => {
            //         return (
            //             <ActionWrapper>
            //                 <Tooltip title="View Topup History">
            //                     <button onClick={this.handleModal.bind(this, 'viewChargeHistory', row)} className="aSimple">
            //                         <Icon type="database" />
            //                     </button>
            //                 </Tooltip>
            //             </ActionWrapper>
            //         )
            //     }
            // }
            // ,
            // {
            //     title: "Coin Used",
            //     key: 'CoinUsed',
            //     fixed: 'right',
            //     width: 120,
            //     render: (text, row) => {
            //         return (
            //             <ActionWrapper>
            //                 <Tooltip title="View Coin Used History">
            //                     <button onClick={this.handleModal.bind(this, 'viewCoinUsedHistory', row)} className="aSimple">
            //                         <Icon type="database" />
            //                     </button>
            //                 </Tooltip>
            //             </ActionWrapper>
            //         )
            //     }
            // }
            // ,
            // {
            //     title: "Block History",
            //     key: 'Blockhistory',
            //     fixed: 'right',
            //     width: 120,
            //     render: (text, row) => {
            //         return (
            //             <ActionWrapper>
            //                 <Tooltip title="View Block History">
            //                     <button onClick={this.handleModal.bind(this, 'viewBlockHistory', row)} className="aSimple">
            //                         <Icon type="database" />
            //                     </button>
            //                 </Tooltip>
            //             </ActionWrapper>
            //         )
            //     }
            // }
            // ,
            {
                title: "",
                key: 'action',
                fixed: 'right',
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
                            <Tooltip title="Thay đổi mật khẩu">
                                <button onClick={this.handleModal.bind(this, 'editPass', row)} className="aSimple">
                                <Icon type="key" theme="outlined" />
                                {/* <Icon type="form" /> */}
                                </button>
                            </Tooltip>
                            {/* <Popconfirm
                                title="Are you sure delete this profile?."
                                okText={<IntlMessages id="button.delete" />}
                                cancelText={<IntlMessages id="button.cancel" />}
                                placement="topRight"
                                onConfirm={this.handleSubmit.bind(this, "delete", row)}
                            >
                                <button className="deleteBtn aSimple" >
                                    <i className="ion-android-delete deleteRow" />
                                </button>
                            </Popconfirm> */}
                        </ActionWrapper>
                    )
                }
            }
        ];
        return (
            <DataWrapper>
                <LayoutWrapper style={{ padding: "0px" }}>
                    <h1 className="PageHeader"> <IntlMessages id="sidebar.usersManagement" /></h1>
                    <Row style={rowStyle} gutter={gutter} justify="start">
                        <Col md={24} sm={24} xs={24} style={colStyle}>
                            <Box className="boxWrapper">
                                <TitleWrapper className="titleWrapper">
                                    <ComponentTitle>
                                        <Input
                                            placeholder="User name"
                                            onChange={this.handleSearchChange}
                                            className="inputSearch"
                                        />
                                        <button onClick={this.handleSearch} className="btSearch">
                                            <Icon type="search" theme="outlined" />
                                        </button>
                                    </ComponentTitle>
                                    <ButtonHolders className="group_bt_head">
                                        <button onClick={this.handleRefresh}
                                            className="btnRefresh btWizard" >
                                            <Icon type="sync" theme="outlined" />Refresh
                                        </button>
                                        <button onClick={this.handleModal.bind(this, "insert", null)}
                                            className="btnAdd btWizard" >
                                            <Icon type="plus-square" theme="outlined" />Add new
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
                                                <span className="ant-spin-dot ant-spin-dot-spin"><i></i><i></i><i></i><i></i></span>
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
                                        current: this.state.page,
                                        total: count,
                                        hideOnSinglePage: true,
                                        onChange: this.onPageChange,
                                        showTotal: (total, range) => {
                                            return `Show ${range[0]}-${range[1]} in ${
                                                dataSource.length
                                                } records`;
                                        },
                                    }}
                                />
                                {row ? (
                                    <Modal
                                        displayname={row.displayname}
                                        modalActive={modalActive}
                                        modalType={this.state.modalType}
                                        row={this.props.newRow}
                                        handleCancel={this.handleCancel}
                                        handleSubmit={this.handleSubmit}
                                        handleClose={this.handleCancel}
                                        newUserId={newUserId}
                                        updateCheck={this.updateCheck}
                                        disable={disable}
                                        onPageChange_customer={this.onPageChange_customer}
                                    />
                                ) : ("")}
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
        ...state.UserReducer,
    }),
    actions
)(Users);