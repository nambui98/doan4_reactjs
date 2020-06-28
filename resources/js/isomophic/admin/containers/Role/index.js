import { connect } from 'react-redux';
import actions from '../../redux/Role/actions';
import React, { Component } from 'react';
import BaseModal from '../../../components/base';
import {
	TitleWrapper,
	ButtonHolders,
	ActionWrapper,
	ComponentTitle,
	TableWrapper
} from '../../../common/control.style';
import Box from '../../../components/utility/box';
import ContentHolder from '../../../components/utility/contentHolder';
import { Row, Col, Icon, Input, Popconfirm } from 'antd';
import { dataConfig } from '../../../settings/index';
import LayoutWrapper from '../../../components/utility/layoutWrapper';
import basicStyle from '../../../settings/basicStyle';
import DataWrapper from '../../../common/data.style';

import moment from 'moment';
import Tooltip from '../../../components/uielements/tooltip';
import helperFunc from '../../../helpers/helperFunc';
import IntlMessages from '../../../components/utility/intlMessages';

import { connectSocket, listenSocket } from './../../../helpers/message';
import flags from './../../../helpers/flags';
import socketActions from '../../../admin/redux/Socket/actions';
const { trimByWord } = helperFunc;

class Roles extends Component {
	constructor(props) {
		super(props);
		// save and add
		this.state = {
			confirmDirty: false,
			search: '',
			connection: null,
			modalType: '',
			page: 1,
			modalActive: false,
			strAddress: 'Address',
			strName: 'Role'
		};
		this.updateStatusAdd = this.updateStatusAdd.bind(this);
	}
	componentDidMount() {
		const page = {
			name: this.state.search,
			page: this.state.page,
			limit: dataConfig.pageLimit
		};
		this.props.loadData(page);
	}
	// save and add
	updateStatusAdd(value) {
		this.props.updateStatusSaveAdd(value);
	}

	shouldComponentUpdate = (nextProps, nextState) => {
		if (this.props.isSuccess === nextProps.isSuccess) {
			return true;
		} else {
			if (nextProps.isSuccess === true) {
				if (nextState.modalType === 'insert' && nextProps.saveAdd === true) {
					this.setState({
						modalActive: true,
						modalType: 'insert'
					});
				} else {
					this.setState({
						modalActive: false,
						modalType: 'none'
					});
				}
				this.updateStatusAdd(false);
				const page = {
					name: this.state.search,
					page: this.state.page,
					limit: dataConfig.pageLimit
				};
				this.props.loadData(page);
			}
			return true;
		}
	};

	imageUpload = (image) => {
		this.props.imageUpload(image);
	};
	onKeyUp = (e) => {
		if (e.keyCode === 13) {
			let text = e.target.value;
			if (!text) {
				return;
			}
			text = text.trim();
			if (!text) {
				return;
			}
			this.setState({ ...this.state, search: e.target.value });
			this.handleSearch();
		}
	};
	handleSubmit = (actionName, obj) => {
		if (obj.id > 0 && actionName !== 'delete') actionName = 'update';
		if (actionName !== 'view') {
			this.setState({ loading: true });
			this.props.saveInto(obj, actionName);
		}
	};
	// Refresh
	handleRefresh = (name = null) => {
		this.props.loadData({
			name: '',
			page: 1,
			limit: dataConfig.pageLimit
		});
		this.reset();
	};

	handleSearchChange = (e) => {
		this.setState({ ...this.state, search: e.target.value });
	};

	handleSearch = () => {
		const page = {
			name: this.state.search,
			page: 1,
			limit: dataConfig.pageLimit
		};
		this.setState(page, () => {
			this.props.loadData(page);
		});
	};

	// hủy hoặc Close
	handleCancel = () => {
		this.setState({
			modalType: 'none',
			modalActive: false,
			contentState: null
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
		this.setState(page, () => {
			this.props.loadData(page);
		});
	};
	reset = () => {
		this.setState({
			search: '',
			page: 1
		});
	};
	render() {
		const { rows, count, row } = this.props;
		console.log(this.props);
		const { rowStyle, colStyle, gutter } = basicStyle;
		const { modalActive } = this.state;
		const dataSource = [];
		if (rows) {
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
				title: this.state.strName,
				dataIndex: 'name',
				key: 'name',
				width: '200px',
				sorter: (a, b) => {
					if (a.rolename < b.rolename) return -1;
					if (a.rolename > b.rolename) return 1;
					return 0;
				},
				render: (text, row) => {
					return <b>{trimByWord(row.rolename)}</b>;
				}
			},
			{
				title: 'Address',
				dataIndex: 'address',
				key: 'address',
				width: '200px',
				sorter: (a, b) => {
					if (a.address < b.address) return -1;
					if (a.address > b.address) return 1;
					return 0;
				},
				render: (text, row) => {
					if (row.address) {
						return <b>{trimByWord(row.address)}</b>;
					}
				}
			},
			// {
			// 	title: <IntlMessages id="form.updatedBy" />,
			// 	dataIndex: 'admin.full_name',
			// 	key: 'admin.full_name',
			// 	width: '220px',
			// 	sorter: (a, b) => {
			// 		if (a.admin.full_name < b.admin.full_name) return -1;
			// 		if (a.admin.full_name > b.admin.full_name) return 1;
			// 		return 0;
			// 	},
			// 	render: (text, row) => {
			// 		if (row.admin.full_name) {
			// 			return row.admin.full_name;
			// 		}
			// 	}
			// },
			{
				title: <IntlMessages id="form.updatedAt" />,
				dataIndex: 'updatedTime',
				width: '170px',
				key: 'slug',
				sorter: (a, b) => {
					if (a.updated_at < b.updated_at) return -1;
					if (a.updated_at > b.updated_at) return 1;
					return 0;
				},
				render: (text, row) => {
					return <span>{moment(row.updated_at).format(helperFunc.fomatDateTime())}</span>;
				}
			},
			{
				title: '',
				key: 'action',
				width: '60px',
				className: 'noWrapCell',
				render: (text, row) => {
					return (
						<ActionWrapper>
							<Tooltip title="Edit">
								<button onClick={this.handleModal.bind(this, 'edit', row)} className="aSimple">
									<Icon type="form" theme="outlined" />
								</button>
							</Tooltip>
							{/*<Tooltip title="View">
                <a onClick={this.handleModal.bind(this, "view", row)} className="aSimple">
                  <Icon type="file-text" theme="twoTone"/>
                </a>
              </Tooltip>*/}
							<Tooltip title="Delete">
								<Popconfirm
									title="Are you sure delete this profile?."
									okText={<IntlMessages id="button.delete" />}
									cancelText={<IntlMessages id="button.cancel" />}
									placement="topRight"
									onConfirm={this.handleSubmit.bind(this, 'delete', row)}
								>
									<button className="deleteBtn aSimple">
										<i className="ion-android-delete deleteRow" />
									</button>
								</Popconfirm>
							</Tooltip>
						</ActionWrapper>
					);
				}
			}
		];

		return (
			<div>
				<DataWrapper>
					<LayoutWrapper style={{ padding: '0px' }}>
						<h1 className="PageHeader">{this.state.strName}</h1>
						<Row style={rowStyle} gutter={gutter} justify="start">
							<Col md={24} sm={24} xs={24} style={colStyle}>
								<Box className="boxWrapper">
									<ContentHolder style={{ marginTop: 0, overflow: 'hidden' }}>
										<TitleWrapper className="titleWrapper">
											<ComponentTitle>
												<Input
													onChange={this.handleSearchChange}
													className="inputSearch"
													placeholder="Search..."
													onKeyUp={this.onKeyUp}
													value={this.state.search}
												/>
												<button className="btSearch" onClick={this.handleSearch}>
													<Icon type="search" theme="outlined" />
												</button>
											</ComponentTitle>
											<ButtonHolders className="group_bt_head">
												<button onClick={this.handleRefresh} className="btnRefresh btWizard">
													<Icon type="sync" theme="outlined" />{' '}
													<IntlMessages id="button.refresh" />
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

										{row ? (
											<BaseModal
												modalActive={modalActive}
												modalType={this.state.modalType}
												row={row}
												strName={this.state.strName}
												strAddress={this.state.strAddress}
												handleCancel={this.handleCancel}
												handleSubmit={this.handleSubmit}
												handleClose={this.handleCancel}
												// save and add
												updateStatusAdd={this.updateStatusAdd}
											/>
										) : (
											''
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
															</span>
														</div>
													) : (
														<span>
															<IntlMessages id="button.empty" />
														</span>
													)
											}}
											////loading={this.props.isLoading}
											className="isoSimpleTable"
											pagination={{
												showSizeChanger: false,
												defaultCurrent: 1,
												defaultPageSize: dataConfig.pageLimit || 10,
												current: this.state.page,
												hideOnSinglePage: true,
												onChange: this.onPageChange,
												total: count,
												showTotal: (total, range) => {
													return `Show ${range[0]}-${range[1]} on ${dataSource.length} record`;
												}
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
	(state) => ({
		...state.RoleReducer,
		...state.SocketReducer
	}),
	{ ...actions, ...socketActions }
)(Roles);
