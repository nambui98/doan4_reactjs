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
import Modal from '../../components/Promotion';
import actions from '../../redux/Promotion/actions';
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
		if (obj.id > 0 && actionName !== 'delete') actionName = 'update';
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
		const { rows, count, row, disable, categoriesTwo } = this.props;
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
		const expandedRowRender = (row) => {
			const columns = [
				{
					title: 'Tên sản phẩm',
					dataIndex: 'name',
					key: 'name',
					sorter: (a, b) => {
						if (a.name < b.name) return -1;
						if (a.name > b.name) return 1;
						return 0;
					}
				},
				{
					title: 'Giá bán',
					dataIndex: 'outputPrice',
					key: 'outputPrice',
					sorter: (a, b) => {
						if (a.outputPrice < b.outputPrice) return -1;
						if (a.outputPrice > b.outputPrice) return 1;
						return 0;
					},
					render: (text, row) => <span>{convertNumber(row.outputPrice)} ₫/1kg</span>
				},
				{
					title: 'Khuyến mãi',
					dataIndex: 'numbersale',
					key: 'numbersale',
					sorter: (a, b) => {
						if (a.promotion.numbersale < b.promotion.numbersale) return -1;
						if (a.promotion.numbersale > b.promotion.numbersale) return 1;
						return 0;
					},
					render: (text, row) => (
						<span>
							{row.promotion.type === 1 ? (
								row.promotion.numbersale + ' %'
							) : (
								convertNumber(row.promotion.numbersale) + ' ₫'
							)}{' '}
						</span>
					)
				},
				{
					title: 'Giá khuyến mãi',
					dataIndex: 'intomoney',
					key: 'intomoney',

					render: (text, row) => (
						<span>
							{row.promotion.type === 1 ? (
								convertNumber(row.outputPrice - row.outputPrice * row.promotion.numbersale / 100)
							) : (
								convertNumber(row.outputPrice - row.promotion.numbersale)
							)}{' '}
							₫/1kg
						</span>
					)
				}

				// {
				//     title: 'Tổng tiền',
				//     dataIndex: 'intomoney',
				//     key: 'intomoney',

				//     render: (text, row) => <span>{convertNumber(row.price * row.mass * row.typeCategory)} ₫</span>
				// }
			];
			const data = [];
			for (let i = 0; i < row.products.length; ++i) {
				data.push({
					key: i,
					name: row.products[i].name,
					outputPrice: row.products[i].outputPrice,
					intomoney: row.products[i].outputPrice,
					numbersale: row.products[i].promotion.numbersale,
					promotion: row.products[i].promotion
					// mass: row.products[i].mass,
					// price: row.products[i].price
				});
			}
			return <TableWrapper style={{ margin: 0 }} columns={columns} dataSource={data} pagination={false} />;
		};
		// group header content of table
		let columns = [];
		columns = [
			{
				title: 'Tiêu đề',
				dataIndex: 'Name',
				key: 'Name',
				className: 'noWrapCell',
				sorter: (a, b) => {
					if (a.title < b.title) return -1;
					if (a.title > b.title) return 1;
					return 0;
				},
				render: (text, row) => {
					return <span>{row.title}</span>;
				}
			},
			{
				title: 'Ngày khuyến mãi',
				dataIndex: 'datePromotion',
				className: 'noWrapCell',
				key: 'datePromotion',
				sorter: (a, b) => {
					if (a.datePromotion < b.datePromotion) return -1;
					if (a.datePromotion > b.datePromotion) return 1;
					return 0;
				},
				render: (text, row) => {
					return <span>{moment(row.datePromotion).format(helperFunc.fomatDateTime())}</span>;
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
			}
			// {
			// 	title: '',
			// 	key: 'action',
			// 	fixed: 'right',
			// 	width: 150,
			// 	className: 'noWrapCell',
			// 	render: (text, row) => {
			// 		return (
			// 			<ActionWrapper>
			// 				<Popconfirm
			// 					title="Are you sure delete this profile?."
			// 					okText={<IntlMessages id="button.delete" />}
			// 					cancelText={<IntlMessages id="button.cancel" />}
			// 					placement="topRight"
			// 					onConfirm={this.handleSubmit.bind(this, 'delete', row)}
			// 				>
			// 					<button className="deleteBtn aSimple">
			// 						<i className="ion-android-delete deleteRow" />
			// 					</button>
			// 				</Popconfirm>
			// 			</ActionWrapper>
			// 		);
			// 	}
			// }
		];
		return (
			<DataWrapper>
				<LayoutWrapper style={{ padding: '0px' }}>
					<h1 className="PageHeader">
						{' '}
						<IntlMessages id="sidebar.promotion" />
					</h1>
					<Row style={rowStyle} gutter={gutter} justify="start">
						<Col md={24} sm={24} xs={24} style={colStyle}>
							<Box className="boxWrapper">
								<TitleWrapper className="titleWrapper">
									<ComponentTitle>
										<Input
											placeholder="Title"
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
											Làm mớI
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
										categoriesTwo={categoriesTwo}
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
		...state.PromotionReducer
	}),
	{ ...actions }
)(IncidentDamages);
