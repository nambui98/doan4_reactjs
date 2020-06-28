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
	ComponentTitle
} from '../../../common/control.style';
import moment from 'moment';
import DataWrapper from '../../../common/data.style';
import LayoutWrapper from '../../../components/utility/layoutWrapper';
import { Row, Col, Button, Icon, Input, Popconfirm, Tooltip, DatePicker, Spin } from 'antd';
import Box from '../../../components/utility/box';
import Modal from '../../components/Annoucement';
import actions from '../../redux/ExpiredProduct/actions';
import { dataConfig, urlConfig } from '../../../settings/index';
import IntlMessages from '../../../components/utility/intlMessages';
import helperFunc from '../../../helpers/helperFunc';
import socketActions from '../../redux/Socket/actions';
import { connectSocket, listenSocket } from './../../../helpers/message';
import flags from '../../../helpers/flags';
import ReactTestUtils from 'react-dom/test-utils';
import ReactToPrint from 'react-to-print';
import Print from './print';
const { convertNumber } = helperFunc;

const { RangePicker } = DatePicker;

class ExpiredProduct extends BaseComponent {
	constructor(props) {
		super(props);
		this.state = {
			confirmDirty: false,
			search: '',
			type: 1,
			modalType: '',
			page: 1,
			modalActive: false,
			announcement_type_id: '',
			startDate: moment(new Date()).subtract(1, 'months').format('YYYY/MM/DD 00:00:00'),
			endDate: moment(new Date()).format('YYYY/MM/DD 23:59:59')
		};
	}
	componentDidMount() {
		const { isPrint } = this.props;
		const page = {
			type: this.state.type,
			page: this.state.page,
			limit: dataConfig.pageLimit,
			isPrint: isPrint
		};
		this.props.loadData(page);

		this.socketIO = connectSocket(this.props.socketIO);
		listenSocket(this.socketIO, flags.ANNOUNCEMENT, (flag, data) => {
			const newPage = {
				StartDate: this.state.startDate,
				EndDate: this.state.endDate,
				isPrint: isPrint,
				name: this.state.search,
				page: this.state.page,
				limit: dataConfig.pageLimit
			};
			this.props.loadData(newPage);
		});
		if (this.props.socketIO === null) {
			this.props.setSocket(this.socketIO);
		}
	}
	componentDidUpdate(prevProps) {
		if (
			this.props.printer === true &&
			prevProps.modalType === this.props.modalType &&
			this.props.printer !== prevProps.printer
		) {
			let node = document.querySelector('.btPrint');
			ReactTestUtils.Simulate.click(node);
		}
		if (this.props.printerAll === true && this.props.printerAll !== prevProps.printerAll) {
			let node = document.querySelector('.btPrintAll');
			ReactTestUtils.Simulate.click(node);
		}
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
			}
			return true;
		}
	};
	// Refresh
	handleRefresh = (name = null) => {
		this.props.loadData({
			StartDate: moment(new Date()).subtract(1, 'months').format('YYYY/MM/DD 00:00:00'),
			EndDate: moment(new Date()).format('YYYY/MM/DD 23:59:59'),
			name: '',
			page: 1,
			limit: dataConfig.pageLimit
		});
		this.reset();
	};

	handleSearch = () => {
		const page = {
			type: 1,
			isPrint: 2,
			page: this.state.page,
			limit: dataConfig.pageLimit
		};
		this.setState(page, () => {
			this.props.loadData(page);
		});
	};
	reset = () => {
		this.setState({
			type: 1,
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
			limit: pageSize,
			StartDate: this.state.startDate,
			EndDate: this.state.endDate,
			isPrint: 2
		};
		this.setState(page, () => {
			this.props.loadData(page);
		});
	};

	printAll = () => {
		const { loadData } = this.props;
		const page = {
			type: this.state.type,
			page: this.state.page,
			limit: dataConfig.pageLimit,
			isPrint: 1
		};
		loadData(page);
	};
	updatePrinter = () => {
		this.props.turnOffPrint(false);
	};
	onChangeDate = (value, dateString) => {
		this.setState({
			startDate: dateString[0],
			endDate: dateString[1]
		});
	};
	handelSeachToday = () => {
		const page = {
			type: 4,
			page: this.state.page,
			limit: dataConfig.pageLimit,
			isPrint: 2
		};
		this.setState(page);
		this.props.loadData(page);
	};
	handelSeachLast7Days = () => {
		const page = {
			type: 1,
			page: this.state.page,
			limit: dataConfig.pageLimit,
			isPrint: 2
		};
		this.setState(page);
		this.props.loadData(page);
	};
	handelSeachLast30Days = () => {
		const page = {
			type: 2,
			page: this.state.page,
			limit: dataConfig.pageLimit,
			isPrint: 2
		};
		this.setState(page);
		this.props.loadData(page);
	};
	handelSeachLast6months = () => {
		const page = {
			type: 3,
			page: this.state.page,
			limit: dataConfig.pageLimit,
			isPrint: 2
		};
		this.setState(page);
		this.props.loadData(page);
	};
	render() {
		const { rows, count, row, disable, announcementType, newRow } = this.props;
		const { rowStyle, colStyle, gutter } = basicStyle;
		const { modalActive, startDate, endDate } = this.state;
		const dataSource = [];
		const wisgetPageStyle = {
			display: 'flex',
			flexFlow: 'row wrap',
			overflow: 'hidden'
		};
		if (typeof rows !== 'undefined' && rows !== null) {
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
				title: 'Id',
				dataIndex: 'id',
				key: 'id',
				sorter: (a, b) => {
					if (a.id < b.id) return -1;
					if (a.id > b.id) return 1;
					return 0;
				},
				render: (text, row) => {
					return <div style={{ whiteSpace: 'pre-wrap', wordWrap: 'break-word' }}>{row.id}</div>;
				}
			},
			{
				title: 'Tên sản phẩm',
				dataIndex: 'name',
				key: 'name',
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
				title: 'Hạn sử dụng',
				dataIndex: 'dateUse',
				key: 'dateUse',
				className: 'noWrapCell',

				sorter: (a, b) => {
					if (a.dateUse < b.dateUse) return -1;
					if (a.dateUse > b.dateUse) return 1;
					return 0;
				},
				render: (text, row) => {
					return <span>{row.dateUse}</span>;
				}
			},
			{
				title: 'Số lượng tồn',
				dataIndex: 'massRest',
				className: 'noWrapCell',
				key: 'massRest',
				sorter: (a, b) => {
					if (a.massRest < b.massRest) return -1;
					if (a.massRest > b.massRest) return 1;
					return 0;
				},
				render: (text, row) => {
					return <span>{row.massRest}</span>;
				}
			},
			{
				title: 'Giá nhập',
				dataIndex: 'inputprice',
				className: 'noWrapCell',
				key: 'inputprice',

				render: (text, row) => {
					return <span>{convertNumber(row.inputprice)} ₫</span>;
				}
			},
			{
				title: 'Ngày nhập',
				dataIndex: 'Description',
				key: 'Description',
				sorter: (a, b) => {
					if (a.created_at < b.created_at) return -1;
					if (a.created_at > b.created_at) return 1;
					return 0;
				},
				render: (text, row) => {
					return <span>{row.created_at}</span>;
				}
			}
		];
		return (
			<DataWrapper>
				<LayoutWrapper style={{ padding: '0px' }}>
					<h1 className="PageHeader">
						{' '}
						<IntlMessages id="sidebar.expiredProduct" />
					</h1>
					<Row style={rowStyle} gutter={gutter} justify="start">
						<Col md={24} sm={24} xs={24} style={colStyle}>
							<Box className="boxWrapper">
								{/* <div style={wisgetPageStyle}> */}
								<TitleWrapper className="titleWrapper">
									<ComponentTitle>
										<Button
											className="btWizard"
											onClick={this.handelSeachToday}
											style={{ paddingLeft: 15, marginRight: 15 }}
										>
											Hôm nay
										</Button>
										<Button
											className="btWizard"
											onClick={this.handelSeachLast7Days}
											style={{ paddingLeft: 15, marginRight: 15 }}
										>
											Trong tuần
										</Button>
										<Button
											className="btWizard"
											onClick={this.handelSeachLast30Days}
											style={{ paddingLeft: 15, marginRight: 15 }}
										>
											Trong tháng
										</Button>
										<Button
											className="btWizard"
											onClick={this.handelSeachLast6months}
											style={{ paddingLeft: 15, marginRight: 15 }}
										>
											Trong năm
										</Button>
										<ReactToPrint
											key="print"
											trigger={() => (
												<button
													style={{ display: 'none' }}
													className="btnRefresh btWizard btPrintAll"
													title="Print"
													TableWrapper
												>
													<Icon type="printer" theme="outlined" /> Print
												</button>
											)}
											content={() => this.componentPrintRef}
											onAfterPrint={() => this.updatePrinter(row, false)}
										/>
										<button className="btWizard" onClick={this.printAll}>
											<Icon type="printer" theme="outlined" /> Print
										</button>
										<div style={{ display: 'none' }}>
											<Print rows={rows} ref={(el) => (this.componentPrintRef = el)} />
										</div>
										{this.props.isLoading ? <Spin size="large" /> : ''}
										<strong>
											{this.state.type === 4 ? (
												'Hôm nay'
											) : this.state.type === 1 ? (
												'Trong tuần'
											) : this.state.type === 2 ? (
												'Trong tháng'
											) : this.state.type === 3 ? (
												'Trong năm'
											) : (
												''
											)}
										</strong>
									</ComponentTitle>
									<ButtonHolders className="group_bt_head">
										<button
											onClick={this.handleRefresh}
											className="btnRefresh btWizard"
											style={{ cursor: 'pointer' }}
										>
											<Icon type="sync" theme="outlined" />
											Làm mới
										</button>
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
										newRow={newRow}
										announcementType={announcementType}
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
		...state.ExpiredProductReducer,
		...state.SocketReducer
	}),
	{ ...actions, ...socketActions }
)(ExpiredProduct);
