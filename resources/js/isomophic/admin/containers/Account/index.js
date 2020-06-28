import React from 'react';
import { connect } from 'react-redux';

import BaseComponent from '../../../containers/base';

import basicStyle from '../../../settings/basicStyle';
import {
	ActionWrapper,
	StatusTag,
	TableWrapper,
	ButtonHolders,
	TitleWrapper,
	ComponentTitle
} from '../../../common/control.style';
import DataWrapper from '../../../common/data.style';
import LayoutWrapper from '../../../components/utility/layoutWrapper';
import { Row, Col, Icon, Input } from 'antd';
import Box from '../../../components/utility/box';
import Account from '../../components/Account';
import actions from '../../redux/Account/actions';

import Tooltip from '../../../components/uielements/tooltip';
import { dataConfig, urlConfig } from '../../../settings/index';
import IntlMessages from '../../../components/utility/intlMessages';
import helperFunc from '../../../helpers/helperFunc';
import socketActions from '../../redux/Socket/actions';
import { connectSocket, listenSocket } from './../../../helpers/message';
import flags from '../../../helpers/flags';

class Accounts extends BaseComponent {
	constructor(props) {
		super(props);
		this.updateIsAddNew = this.updateIsAddNew.bind(this);
		this.updateStatusAdd = this.updateStatusAdd.bind(this);
		this.updateCheck = this.updateCheck.bind(this);
		this.state = {
			search: '',
			modalType: '',
			modalActive: false,
			isAddNew: false,
			username: '',
			page: 1
		};
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

	updateIsAddNew(value) {
		this.setState({ isAddNew: value });
	}
	// save and add
	updateStatusAdd(value) {
		this.props.updateStatusSaveAdd(value);
	}

	//load datatable
	shouldComponentUpdate = (nextProps, nextState) => {
		if (this.props.isSuccess === nextProps.isSuccess) {
			return true;
		} else {
			if (nextProps.isSuccess === true) {
				if (nextState.modalType === helperFunc.modeType.Insert && nextProps.saveAdd === true) {
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
				if (this.props.modalType === 'roles') {
					let row = {};
					row.username = this.state.username;
				}
				const page = {
					name: '',
					page: 1,
					limit: dataConfig.pageLimit
				};
				this.props.loadData(page);
			}
			return true;
		}
	};

	handleLogout = (row) => {
		this.props.LogoutOne(row);
	};

	handleSubmit = (actionName, obj) => {
		// if (obj.id > 0 && actionName !== 'delete')
		//    actionName = 'update';
		if (actionName !== 'view') {
			this.setState({ loading: true });
			this.props.saveInto(obj, actionName);
		}
	};

	handleRefresh = (name = null) => {
		this.props.loadData({ name: '', page: 1, limit: dataConfig.pageLimit });
		this.reset();
	};

	handleSearchChange = (e) => {
		this.setState({ ...this.state, search: e.target.value });
	};
	reset = () => {
		this.setState({
			search: '',
			page: 1
		});
	};
	handleSearch = () => {
		this.props.loadData({
			name: this.state.search,
			page: 1,
			limit: dataConfig.pageLimit
		});
	};

	handleCancel = () => {
		this.setState({
			modalType: 'none',
			modalActive: false
		});
	};

	handleModal(action, row = null) {
		if (row) {
			this.setState(
				{
					modalType: action,
					modalActive: true,
					username: row.username
				},
				() => {
					this.props.toggleModal(action, row, this.props.roles);
				}
			);
		} else {
			this.setState(
				{
					modalType: action,
					modalActive: true
				},
				() => {
					this.props.toggleModal(action, row, this.props.roles);
				}
			);
		}
	}

	onPageChange = (pageNumber, pageSize) => {
		const page = {
			name: this.state.search,
			page: pageNumber,
			limit: pageSize
		};
		this.setState(page, () => {
			this.props.loadData(page);
		});
	};

	render() {
		const { rows, count, row, roles, disable, updateCheckRole } = this.props;
		const { rowStyle, colStyle, gutter } = basicStyle;
		const { modalActive, newUserId } = this.state;
		const dataSource = [];
		if (rows !== 'undefined' && rows !== null) {
			Object.keys(rows).map((row, index) => {
				return dataSource.push({
					...rows[row],
					key: row
				});
			});
		}
		// group header content of table
		let columns = [
			{
				title: 'Username',
				dataIndex: 'username',
				key: 'username',
				className: 'noWrapCell',
				sorter: (a, b) => {
					if (a.username < b.username) return -1;
					if (a.username > b.username) return 1;
					return 0;
				},
				render: (text, row) => {
					return row.username;
				}
			},
			{
				title: 'Email',
				dataIndex: 'email',
				key: 'email',
				className: 'noWrapCell',
				sorter: (a, b) => {
					if (a.email < b.email) return -1;
					if (a.email > b.email) return 1;
					return 0;
				},
				render: (text, row) => {
					return row.email;
				}
			},
			{
				title: 'Phone',
				dataIndex: 'phone',
				key: 'phone',
				className: 'noWrapCell',
				sorter: (a, b) => {
					if (a.phone < b.phone) return -1;
					if (a.phone > b.phone) return 1;
					return 0;
				},
				render: (text, row) => {
					return row.phone;
				}
			},

			{
				title: 'Avatar',
				dataIndex: 'Avatar',
				key: 'Avatar',
				width: '151px',
				className: 'noWrapCell',
				render: (text, row) => {
					return (
						<img
							style={{ height: '60px', width: '100%' }}
							alt={row.username ? row.username : ''}
							src={row.avatar ? urlConfig.imageUrl + 'img/avatar/' + row.avatar : ''}
						/>
					);
				}
			},
			{
				title: <IntlMessages id="form.status" />,
				dataIndex: 'status',
				className: 'noWrapCell',
				key: 'status',
				sorter: (a, b) => {
					if (a.status < b.status) return -1;
					if (a.status > b.status) return 1;
					return 0;
				},
				render: (text, row) => {
					if (row.username === localStorage.getItem('user_name')) return '';
					if (row.username === 'admin') return '';
					let className;
					if (row.status === helperFunc.status.Active) {
						className = 'publish';
					} else if (row.status === helperFunc.status.Inactive) {
						className = 'private';
					}
					return (
						<Tooltip title={<IntlMessages id="form.changStatus" />}>
							<StatusTag
								className={className}
								style={{ backgroundColor: row.status === 3 ? '#e74c3c' : '' }}
								onClick={this.handleModal.bind(this, 'editStatus', row)}
							>
								{row.status === helperFunc.status.Active ? (
									<IntlMessages id="form.active" />
								) : (
									<IntlMessages id="form.inactive" />
								)}
							</StatusTag>
						</Tooltip>
					);
				}
			},
			// {
			//     title: <IntlMessages id="form.updatedAt" />,
			//     dataIndex: 'updated_at',
			//     className: 'noWrapCell',
			//     key: 'updated_at',
			//     sorter: (a, b) => {
			//         if (a.updated_at < b.updated_at) return -1;
			//         if (a.updated_at > b.updated_at) return 1;
			//         return 0;
			//     },
			//     render: (text, row) => {
			//         return (
			//             <span>{row.updated_at}</span>
			//         )
			//     }
			// },
			/*
             <Tooltip title="Edit">
                <a onClick={this.handleModal.bind(this, 'update', row)} className="aSimple">
                    <Icon type="form" theme="outlined" />
                </a>
            </Tooltip>
            */
			{
				title: 'Action',
				key: 'actions',
				fixed: 'right',
				width: 100,
				render: (text, row) => {
					if (
						localStorage.getItem('user_name') === 'NamNamNam' ||
						localStorage.getItem('user_name') === 'admin'
					)
						return (
							<ActionWrapper>
								<Tooltip title="Edit">
									<button onClick={this.handleModal.bind(this, 'edit', row)} className="aSimple">
										<Icon type="form" theme="outlined" />
									</button>
								</Tooltip>
								<Tooltip title={<IntlMessages id="form.changeRole" />}>
									<button onClick={this.handleModal.bind(this, 'roles', row)} className="aSimple">
										<Icon type="key" theme="outlined" />
										<i
											style={{
												color: '#fff',
												fontStyle: 'normal',
												fontSize: '10px'
											}}
										>
											+
										</i>
									</button>
								</Tooltip>
								<Tooltip title="Reset Password">
									<button
										onClick={this.handleModal.bind(this, 'resetPassword', row)}
										className="aSimple"
									>
										<Icon type="idcard" />
									</button>
								</Tooltip>
							</ActionWrapper>
						);
					else if (row.username !== 'admin')
						return (
							<ActionWrapper>
								<Tooltip title="Edit">
									<button onClick={this.handleModal.bind(this, 'edit', row)} className="aSimple">
										<Icon type="form" theme="outlined" />
									</button>
								</Tooltip>

								<Tooltip title={<IntlMessages id="form.changeRole" />}>
									<button onClick={this.handleModal.bind(this, 'roles', row)} className="aSimple">
										<Icon type="key" theme="outlined" />
										<i
											style={{
												color: '#fff',
												fontStyle: 'normal',
												fontSize: '10px'
											}}
										>
											+
										</i>
									</button>
								</Tooltip>

								<Tooltip title="Reset Password">
									<button
										onClick={this.handleModal.bind(this, 'resetPassword', row)}
										className="aSimple"
									>
										<Icon type="idcard" />
									</button>
								</Tooltip>
							</ActionWrapper>
						);
				}
			}
		];
		return (
			<DataWrapper>
				<LayoutWrapper style={{ padding: '0px' }}>
					<h1 className="PageHeader">
						{' '}
						<IntlMessages id="sidebar.account" />
					</h1>
					<Row style={rowStyle} gutter={gutter} justify="start">
						<Col md={24} sm={24} xs={24} style={colStyle}>
							<Box className="boxWrapper">
								<TitleWrapper className="titleWrapper">
									<ComponentTitle>
										<Input
											placeholder="User name..."
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
										<button onClick={this.handleRefresh} className="btnRefresh btWizard">
											<Icon type="sync" theme="outlined" />
											Refresh
										</button>
										<button
											onClick={this.handleModal.bind(this, 'insert', null)}
											className="btnAdd btWizard"
										>
											<Icon type="plus-square" theme="outlined" />
											<IntlMessages id="button.add" />
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
													<i />
													<i />
													<i />
													<i />
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
									<Account
										modalActive={modalActive}
										modalType={this.state.modalType}
										row={row}
										rows={rows}
										handleCancel={this.handleCancel}
										handleSubmit={this.handleSubmit}
										handleClose={this.handleCancel}
										newUserId={newUserId}
										updateIsAddNew={this.updateIsAddNew}
										isAddNew={this.state.isAddNew}
										roles={roles}
										// save and add
										updateStatusAdd={this.updateStatusAdd}
										updateCheck={this.updateCheck}
										disable={disable}
										updateCheckRole={updateCheckRole}
									/>
								) : (
									''
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
	(state) => ({
		...state.Accounts,
		...state.SocketReducer
	}),
	{ ...actions, ...socketActions }
)(Accounts);
