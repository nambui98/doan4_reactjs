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
import Modal from '../../components/Bill_Import';
import actions from '../../redux/Bill_Import/actions';
import { dataConfig, urlConfig } from '../../../settings/index';
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
		const { rows, count, row, disable, categories } = this.props;
		const { rowStyle, colStyle, gutter } = basicStyle;
		const { modalActive } = this.state;
		const dataSource = [];
		let date = new Date();

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
					title: 'Giá nhập',
					dataIndex: 'inputprice',
					key: 'inputprice',
					sorter: (a, b) => {
						if (a.inputprice < b.inputprice) return -1;
						if (a.inputprice > b.inputprice) return 1;
						return 0;
					},
					render: (text, row) => <span>{convertNumber(row.inputprice)} ₫</span>
				},
				{
					title: 'Giá bán',
					dataIndex: 'outputprice',
					key: 'outputprice',
					sorter: (a, b) => {
						if (a.outputprice < b.outputprice) return -1;
						if (a.outputprice > b.outputprice) return 1;
						return 0;
					},
					render: (text, row) => <span>{convertNumber(row.outputprice)} ₫</span>
				},

				{
					title: 'Tổng tiền',
					dataIndex: 'intomoney',
					key: 'intomoney',
					sorter: (a, b) => {
						if (a.intomoney < b.intomoney) return -1;
						if (a.intomoney > b.intomoney) return 1;
						return 0;
					},
					render: (text, row) => <span>{convertNumber(row.intomoney)} ₫</span>
				}
			];
			const data = [];
			for (let i = 0; i < row.products.length; ++i) {
				data.push({
					key: i,
					name: row.products[i].name,
					mass: row.products[i].mass,
					inputprice: row.products[i].inputprice,
					outputprice: row.products[i].outputprice,
					intomoney: row.products[i].intomoney

					// Status:
					//     row.products[i].status === 1 ? (
					//         <i
					//             style={{ fontSize: "25px" }}
					//             className="ion-android-checkbox"
					//         ></i>
					//     ) : (
					//             <i
					//                 style={{ fontSize: "25px" }}
					//                 className="ion-android-checkbox-outline-blank"
					//             ></i>
					//         )
				});
			}
			return <TableWrapper style={{ margin: 0 }} columns={columns} dataSource={data} pagination={false} />;
		};
		let columns = [];
		columns = [
			{
				title: 'Mã hoá đơn',
				dataIndex: 'idBill',
				key: 'idBill',
				sorter: (a, b) => {
					if (a.idBill < b.idBill) return -1;
					if (a.idBill > b.idBill) return 1;
					return 0;
				},
				render: (text, row) => {
					return <span>{row.idBill}</span>;
				}
			},
			{
				title: 'Nhân viên',
				dataIndex: 'Name',
				key: 'Name',
				className: 'noWrapCell',
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
				title: 'Số lượng',
				dataIndex: 'amount',
				key: 'amount',
				className: 'noWrapCell',
				sorter: (a, b) => {
					if (a.amount < b.amount) return -1;
					if (a.amount > b.amount) return 1;
					return 0;
				},
				render: (text, row) => {
					return <span>{row.amount}</span>;
				}
			},
			{
				title: 'Tổng tiền',
				dataIndex: 'total',
				key: 'total',
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
				title: 'Ảnh',
				dataIndex: 'image',
				key: 'image',
				className: 'noWrapCell',
				sorter: (a, b) => {
					if (a.images < b.images) return -1;
					if (a.images > b.images) return 1;
					return 0;
				},
				render: (text, row) => {
					return row.images.split('#####').map((image, index) => {
						return [
							<img
								key={index}
								style={{ height: '60px' }}
								alt={row.name ? row.name : ''}
								src={urlConfig.imageUrl + 'img/bill/' + image}
							/>,
							<br key={index + row.images.split('#####').length} />
						];
					});
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
							{row &&
							moment(date).format('YYYY-MM-DD') === moment(row.created_at).format('YYYY-MM-DD') ? (
								<button onClick={this.handleModal.bind(this, 'addProduct', row)} className="aSimple">
									<Icon type="plus-circle" />
								</button>
							) : (
								''
							)}

							<Popconfirm
								title="Bạn có chắc muốn xoá"
								okText={<IntlMessages id="button.delete" />}
								cancelText={<IntlMessages id="button.cancel" />}
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
						<IntlMessages id="sidebar.Bill_Import" />
					</h1>
					<Row style={rowStyle} gutter={gutter} justify="start">
						<Col md={24} sm={24} xs={24} style={colStyle}>
							<Box className="boxWrapper">
								<TitleWrapper className="titleWrapper">
									<ComponentTitle>
										<Input
											placeholder="Mã hoá đơn"
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
										row={row}
										categories={categories}
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
		...state.Bill_ImportReducer
	}),
	{ ...actions }
)(IncidentDamages);
