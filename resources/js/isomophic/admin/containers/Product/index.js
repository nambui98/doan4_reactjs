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

import { Row, Col, Icon, Input, Tooltip } from 'antd';
import Box from '../../../components/utility/box';
import Modal from '../../components/Product';
import actions from '../../redux/Product/actions';
import { dataConfig } from '../../../settings/index';
import IntlMessages from '../../../components/utility/intlMessages';
import helperFunc from '../../../helpers/helperFunc';

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
		const { rows, count, row, disable, promotionType, promotionInDay } = this.props;
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
		console.log('prom', promotionInDay);
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
				title: 'Khối lượng',
				dataIndex: 'mass',
				key: 'mass',
				className: 'noWrapCell',
				sorter: (a, b) => {
					if (a.mass < b.mass) return -1;
					if (a.mass > b.mass) return 1;
					return 0;
				},
				render: (text, row) => {
					return <span>{row.mass} kg</span>;
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
					let className;
					if (row.mass > 0) {
						className = 'publish';
					} else {
						className = 'private';
					}
					return (
						<StatusTag className={className}>
							{row.mass > 0 ? <span>Còn hàng</span> : <span>Hết hàng</span>}
						</StatusTag>
					);
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
				fixed: 'right',
				width: 150,
				className: 'noWrapCell',
				render: (text, row) => {
					return (
						<ActionWrapper>
							<Tooltip title="Thêm vào khuyến mãi">
								<button
									onClick={this.handleModal.bind(this, 'addPromotion', row)}
									style={{ backgroundColor: '#e67e22' }}
									className="aSimple"
								>
									<Icon type="plus" />
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
						<IntlMessages id="sidebar.product" />
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
										{/* <button
											onClick={this.handleModal.bind(this, 'insert', null)}
											className="btnAdd btWizard"
										>
											<Icon type="plus-square" theme="outlined" />
											Thêm mới
										</button> */}
									</ButtonHolders>
								</TitleWrapper>
								<TableWrapper
									rowKey="key"
									columns={columns}
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
										promotionInDay={promotionInDay}
										promotionType={promotionType}
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
		...state.ProductReducer
	}),
	{ ...actions }
)(IncidentDamages);
