// eslint-disable-next-line
import React from 'react';
import { connect } from 'react-redux';
import BaseComponent from '../../../containers/base';
import basicStyle from '../../../settings/basicStyle';
import {
	ActionWrapper,
	TableWrapper,
	ButtonHolders,
	TitleWrapper,
	StatusTag,
	ComponentTitle
} from '../../../common/control.style';
import DataWrapper from '../../../common/data.style';
import LayoutWrapper from '../../../components/utility/layoutWrapper';
import moment from 'moment';

import { Row, Col, Icon, Input, Popconfirm } from 'antd';
import Box from '../../../components/utility/box';
import Modal from '../../components/CategoriesTwo';
import actions from '../../redux/CartSuccess/actions';
import { dataConfig } from '../../../settings/index';
import IntlMessages from '../../../components/utility/intlMessages';
import helperFunc from '../../../helpers/helperFunc';
const { convertNumber } = helperFunc;

class IncidentDamages extends BaseComponent {
	componentDidMount() {
		const page = {
			name: this.state.search,
			page: this.state.page,
			limit: dataConfig.pageLimit
		};
		this.props.loadData(page);
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
				// this.updateStatusAdd(false);
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
	// Refresh
	handleRefresh = (name = null) => {
		this.props.loadData({
			name: '',
			page: 1,
			limit: dataConfig.pageLimit
		});
		this.reset();
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
	handleLogout = (row) => {
		this.props.LogoutOne(row);
	};
	reset = () => {
		this.setState({
			search: '',
			page: 1
		});
	};

	handleSubmit = (actionName, obj) => {
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
			limit: pageSize
		};
		this.setState(page, () => {
			this.props.loadData(page);
		});
	};
	render() {
		const { rows, count, row, disable, categoriesBig } = this.props;
		const { rowStyle, colStyle, gutter } = basicStyle;
		const { modalActive } = this.state;
		const dataSource = [];
		if (typeof rows !== 'undefined' && rows !== null) {
			Object.keys(rows).map((row, index) => {
				return dataSource.push({
					...rows[row],
					key: row
				});
			});
		}
		// group header content of table
		const expandedRowRender = (row) => {
			const columns = [
				{
					title: 'Tên',
					dataIndex: 'name',
					key: 'name',
					sorter: (a, b) => {
						if (a.name < b.name) return -1;
						if (a.name > b.name) return 1;
						return 0;
					}
				},
				{
					title: 'Khối lượng',
					dataIndex: 'mass',
					key: 'mass',
					sorter: (a, b) => {
						if (a.mass < b.mass) return -1;
						if (a.mass > b.mass) return 1;
						return 0;
					},
					render: (text, row) => <span>{row.mass} kg</span>
				},
				{
					title: 'Kiểu',
					dataIndex: 'typeCategory',
					key: 'typeCategory',
					sorter: (a, b) => {
						if (a.typeCategory < b.typeCategory) return -1;
						if (a.typeCategory > b.typeCategory) return 1;
						return 0;
					},
					render: (text, row) => <span>{row.typeCategory} kg/1 túi</span>
				},
				{
					title: 'Giá',
					dataIndex: 'price',
					key: 'price',
					sorter: (a, b) => {
						if (a.price < b.price) return -1;
						if (a.price > b.price) return 1;
						return 0;
					},
					render: (text, row) => <span>{convertNumber(row.price)} ₫/1kg</span>
				},

				{
					title: 'Tổng tiền',
					dataIndex: 'intomoney',
					key: 'intomoney',

					render: (text, row) => <span>{convertNumber(row.price * row.mass * row.typeCategory)} ₫</span>
				}
			];
			const data = [];
			for (let i = 0; i < row.carts.length; ++i) {
				data.push({
					key: i,
					idproduct: row.carts[i].idproduct,
					typeCategory: row.carts[i].typeCategory,
					name: row.carts[i].name,
					mass: row.carts[i].mass,
					price: row.carts[i].price
				});
			}
			return <TableWrapper style={{ margin: 0 }} columns={columns} dataSource={data} pagination={false} />;
		};
		// group header content of table
		let columns = [];
		columns = [
			{
				title: 'Tên',
				dataIndex: 'Name',
				key: 'Name',
				className: 'noWrapCell',
				sorter: (a, b) => {
					if (a.name < b.name) return -1;
					if (a.name > b.name) return 1;
					return 0;
				},
				render: (text, row) => {
					return <span>{row.name}</span>;
				}
			},
			{
				title: 'Địa chỉ',
				dataIndex: 'address',
				key: 'address',
				className: 'noWrapCell',
				sorter: (a, b) => {
					if (a.address < b.address) return -1;
					if (a.address > b.address) return 1;
					return 0;
				},
				render: (text, row) => {
					return <span>{row.address}</span>;
				}
			},
			{
				title: 'Số điện thoại',
				dataIndex: 'phone',
				key: 'phone',
				className: 'noWrapCell',
				sorter: (a, b) => {
					if (a.phone < b.phone) return -1;
					if (a.phone > b.phone) return 1;
					return 0;
				},
				render: (text, row) => {
					return <span>{row.phone}</span>;
				}
			},
			{
				title: 'Kiểu thanh toán',
				dataIndex: 'paytype',
				key: 'paytype',
				className: 'noWrapCell',
				sorter: (a, b) => {
					if (a.paytype < b.paytype) return -1;
					if (a.paytype > b.paytype) return 1;
					return 0;
				},
				render: (text, row) => {
					return <span>{row.paytype === 1 ? 'ship code' : 'paypal'}</span>;
				}
			},
			{
				title: 'Kiểu giao hàng',
				dataIndex: 'payTypeOfType',
				key: 'payTypeOfType',
				className: 'noWrapCell',
				sorter: (a, b) => {
					if (a.payTypeOfType < b.payTypeOfType) return -1;
					if (a.payTypeOfType > b.payTypeOfType) return 1;
					return 0;
				},
				render: (text, row) => {
					return <span>{row.payTypeOfType === 1 ? 'Giao hàng nhanh' : 'Giao hàng bình thường'}</span>;
				}
			},
			{
				title: 'Tổng tiền',
				dataIndex: 'totalmoney',
				key: 'totalmoney',
				className: 'noWrapCell',
				sorter: (a, b) => {
					if (a.totalmoney < b.totalmoney) return -1;
					if (a.totalmoney > b.totalmoney) return 1;
					return 0;
				},
				render: (text, row) => {
					return <span>{convertNumber(row.totalmoney)} ₫</span>;
				}
			},
			{
				title: 'Trạng thái',
				dataIndex: 'status',
				className: 'noWrapCell',
				key: 'status',
				width: 150,
				sorter: (a, b) => {
					if (a.status < b.status) return -1;
					if (a.status > b.status) return 1;
					return 0;
				},
				render: (text, row) => {
					return <StatusTag style={{ backgroundColor: '#2ecc71' }}>Thành công</StatusTag>;
				}
			},
			{
				title: 'Ngày cập nhật',
				dataIndex: 'updated_at',
				className: 'noWrapCell',
				key: 'updated_at',
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
				title: 'Ngày tạo',
				dataIndex: 'created_at',
				className: 'noWrapCell',
				key: 'created_at',
				sorter: (a, b) => {
					if (a.created_at < b.created_at) return -1;
					if (a.created_at > b.created_at) return 1;
					return 0;
				},
				render: (text, row) => {
					return <span>{moment(row.created_at).format(helperFunc.fomatDateTime())}</span>;
				}
			},
			{
				title: '',
				key: 'action',
				className: 'noWrapCell',
				render: (text, row) => {
					return (
						<ActionWrapper>
							<Popconfirm
								title="Bạn có chắc muốn xoá ?"
								okText="Đồng ý"
								cancelText="Thoát"
								placement="topRight"
								onConfirm={this.handleSubmit.bind(this, 'delete', row)}
							>
								<button className="deleteBtn aSimple">
									<i className="ion-android-delete deleteRow" />
								</button>
							</Popconfirm>
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
						<IntlMessages id="sidebar.cartSuccess" />
					</h1>
					<Row style={rowStyle} gutter={gutter} justify="start">
						<Col md={24} sm={24} xs={24} style={colStyle}>
							<Box className="boxWrapper">
								<TitleWrapper className="titleWrapper">
									<ComponentTitle>
										<Input
											placeholder="Tên"
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
											Làm mới
										</button>
										<button
											onClick={this.handleModal.bind(this, 'insert', null)}
											className="btnAdd btWizard"
										>
											<Icon type="plus-square" theme="outlined" />
											Thêm mới
										</button>
									</ButtonHolders>
								</TitleWrapper>
								<TableWrapper
									rowKey="key"
									columns={columns}
									dataSource={dataSource}
									expandedRowRender={expandedRowRender}
									expandIconAsCell={false}
									expandIconColumnIndex={0}
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
												<span>Không có dữ liệu</span>
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
										categoriesBig={categoriesBig}
										handleCancel={this.handleCancel}
										handleSubmit={this.handleSubmit}
										handleClose={this.handleCancel}
										disable={disable}
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
		...state.CartSuccessReducer
	}),
	{ ...actions }
)(IncidentDamages);
