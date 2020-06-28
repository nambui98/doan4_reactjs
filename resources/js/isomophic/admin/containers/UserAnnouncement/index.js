// eslint-disable-next-line
import React, { Component } from 'react';
import { connect } from 'react-redux';
import basicStyle from '../../../settings/basicStyle';
import {
	ActionWrapper,
	TableWrapper,
	ButtonHolders,
	TitleWrapper,
	ComponentTitle
} from '../../../common/control.style';
import DataWrapper from '../../../common/data.style';
import LayoutWrapper from '../../../components/utility/layoutWrapper';
import moment from 'moment';
import { Row, Col, Icon, Input, Select, DatePicker, Button } from 'antd';
import Box from '../../../components/utility/box';
import Modal from '../../components/UserAnnouncement';
import actions from '../../redux/UserAnnouncement/actions';
import { dataConfig } from '../../../settings/index';
import IntlMessages from '../../../components/utility/intlMessages';
import helperFunc from '../../../helpers/helperFunc';
import socketActions from '../../redux/Socket/actions';
import { connectSocket, listenSocket } from './../../../helpers/message';
import flags from '../../../helpers/flags';
import { isNullOrUndefined } from 'util';
import ReactTestUtils from 'react-dom/test-utils';
import ReactToPrint from 'react-to-print';
import Print from './print';
const { Option } = Select;
const { RangePicker } = DatePicker;

class Index extends Component {
	constructor(props) {
		super(props);
		this.updateCheck = this.updateCheck.bind(this);
		this.state = {
			confirmDirty: false,
			search: '',
			modalType: '',
			page: 1,
			modalActive: false,
			announcement_type_id: '',
			startDate: moment(new Date()).subtract(1, 'months').format('YYYY/MM/DD 00:00:00'),
			endDate: moment(new Date()).format('YYYY/MM/DD 23:59:59')
		};
	}
	// hủy hoặc Close
	handleCancel = () => {
		this.setState({
			modalType: 'none',
			modalActive: false,
			contentState: null
		});
	};
	componentDidMount() {
		const { isPrint } = this.props;
		const page = {
			name: this.state.search,
			isPrint: isPrint,
			StartDate: this.state.startDate,
			EndDate: this.state.endDate,
			announcement_type_id: this.state.announcementTypeId,
			page: this.state.page,
			limit: dataConfig.pageLimit
		};
		this.props.loadData(page);

		this.socketIO = connectSocket(this.props.socketIO);
		listenSocket(this.socketIO, flags.ANNOUNCEMENT, (flag, data) => {
			const newPage = {
				StartDate: this.state.startDate,
				EndDate: this.state.endDate,
				isPrint: isPrint,
				name: this.state.search,
				announcement_type_id: this.state.announcementTypeId,
				page: this.state.page,
				limit: dataConfig.pageLimit
			};
			this.props.loadData(newPage);
		});
		if (this.props.socketIO === null) {
			this.props.setSocket(this.socketIO);
		}
	}
	updateCheck(arr, dataCheck, arrCheckedList) {
		this.props.updateCheck(arr, dataCheck, arrCheckedList);
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
			name: '',
			StartDate: moment(new Date()).subtract(1, 'months').format('YYYY/MM/DD 00:00:00'),
			EndDate: moment(new Date()).format('YYYY/MM/DD 23:59:59'),
			announcement_type_id: '',
			isPrint: 2,
			page: 1,
			limit: dataConfig.pageLimit
		});
		this.reset();
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
	handleSearch = () => {
		const page = {
			StartDate: this.state.startDate,
			EndDate: this.state.endDate,
			name: this.state.search,
			announcement_type_id: this.state.announcementTypeId,
			isPrint: 2,
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
			announcementTypeId: [],
			page: 1,
			startDate: moment(new Date()).subtract(1, 'months').format('YYYY/MM/DD 00:00:00'),
			endDate: moment(new Date()).format('YYYY/MM/DD 23:59:59')
		});
	};

	handleSubmit = (obj) => {
		this.props.saveInto(obj);
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
	handlSelectChange = (id) => {
		this.setState({
			...this.state,
			announcementTypeId: id
		});
	};
	handleSearchChange = (e) => {
		this.setState({
			...this.state,
			search: e.target.value
		});
	};
	onPageChange = (pageNumber, pageSize) => {
		const page = {
			name: this.state.search,
			announcement_type_id: this.state.announcementTypeId,
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
			name: this.state.search,
			announcement_type_id: this.state.announcementTypeId,
			page: this.state.page,
			limit: dataConfig.pageLimit,
			StartDate: this.state.startDate,
			EndDate: this.state.endDate,
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
	render() {
		const { rows, count, row, disable, announcementType } = this.props;
		const { rowStyle, colStyle, gutter } = basicStyle;
		const { modalActive, announcementTypeId, startDate, endDate } = this.state;
		const dataSource = [];
		if (typeof rows !== 'undefined' && rows !== null) {
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
				title: 'User',
				dataIndex: 'User',
				className: 'noWrapCell',
				key: 'User',
				width: 150,
				sorter: (a, b) => {
					if (a.admin.full_name < b.admin.full_name) return -1;
					if (a.admin.full_name > b.admin.full_name) return 1;
					return 0;
				},
				render: (text, row) => {
					return <span>{row && row.admin ? row.admin.full_name : ''}</span>;
				}
			},
			{
				title: 'Title',
				dataIndex: 'Title',
				key: 'Title',
				width: 200,
				sorter: (a, b) => {
					if (a.announcement.title < b.announcement.title) return -1;
					if (a.title > b.title) return 1;
					return 0;
				},
				render: (text, row) => {
					return <span>{row && row.announcement ? row.announcement.title : ''}</span>;
				}
			},
			{
				title: 'Type',
				dataIndex: 'Announcement_type',
				key: 'Announcement_type',
				className: 'noWrapCell',
				width: 90,
				sorter: (a, b) => {
					if (a.announcement_type_id < b.announcement_type_id) return -1;
					if (a.announcement_type_id > b.announcement_type_id) return 1;
					return 0;
				},
				render: (text, row) => {
					return (
						<span
							style={
								row && row.announcement_type && row.announcement_type_id === 1 ? (
									{ color: '#55D604', fontWeight: 'bold' }
								) : (
									{ color: '#FF0000', fontWeight: 'bold' }
								)
							}
						>
							{row && row.announcement_type ? row.announcement_type.name : ''}
						</span>
					);
				}
			},
			{
				title: 'Date',
				dataIndex: 'Annouced_date',
				className: 'noWrapCell',
				key: 'Annouced_date',
				width: 90,
				sorter: (a, b) => {
					if (a.announcement.announcement_date < b.announcement.announcement_date) return -1;
					if (a.announcement.announcement_date > b.announcement.announcement_date) return 1;
					return 0;
				},
				render: (text, row) => {
					return <span>{row && row.announcement ? row.announcement.announcement_date : ''}</span>;
				}
			},

			{
				title: 'Description',
				dataIndex: 'Description',
				key: 'Description',
				sorter: (a, b) => {
					if (a.announcement.description < b.announcement.description) return -1;
					if (a.announcement.description > b.announcement.description) return 1;
					return 0;
				},
				render: (text, row) => {
					return (
						<div style={{ whiteSpace: 'pre-wrap', wordWrap: 'break-word' }}>
							{row && row.announcement ? row.announcement.description : ''}
						</div>
					);
				}
			},
			{
				title: '',
				key: 'action',
				className: 'noWrapCell',
				render: (text, row) => {
					return (
						<ActionWrapper>
							<button onClick={this.handleModal.bind(this, 'View', row)} className="aSimple">
								<i className="ion-android-document" />
							</button>
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
						<IntlMessages id="sidebar.userAnnouncement" />
					</h1>
					<Row style={rowStyle} gutter={gutter} justify="start">
						<Col md={24} sm={24} xs={24} style={colStyle}>
							<Box className="boxWrapper">
								<TitleWrapper className="titleWrapper">
									<ComponentTitle>
										<Input
											placeholder="Search ..."
											style={{ width: 170 }}
											onChange={this.handleSearchChange}
											className="inputSearch"
											onKeyUp={this.onKeyUp}
											value={this.state.search}
										/>
										<Select
											placeholder="Select Type"
											style={{ width: '170px' }}
											onChange={this.handlSelectChange}
											value={announcementTypeId}
										>
											<Option value="">All</Option>
											{announcementType && !isNullOrUndefined(announcementType) ? (
												announcementType.map((value, index) => (
													<Option key={index} value={value.id}>
														{value.name}
													</Option>
												))
											) : (
												''
											)}
										</Select>

										<RangePicker
											format="YYYY-MM-DD"
											placeholder={[ 'Start date', 'End date' ]}
											value={
												startDate && endDate ? (
													[ moment(startDate, 'YYYY-MM-DD'), moment(endDate, 'YYYY-MM-DD') ]
												) : (
													''
												)
											}
											allowClear={false}
											onChange={this.onChangeDate}
											style={{ width: '300px' }}
										/>
										<Button onClick={this.handleSearch} className="btSearch" style={{ top: 0 }}>
											<Icon type="search" theme="outlined" />
										</Button>
										<ReactToPrint
											key="print"
											trigger={() => (
												<Button
													style={{ display: 'none' }}
													className="btnRefresh btWizard btPrintAll"
													title="Print"
													TableWrapper
												>
													<Icon type="printer" theme="outlined" /> Print
												</Button>
											)}
											content={() => this.componentPrintRef}
											onAfterPrint={() => this.updatePrinter(row, false)}
										/>
										<Button className="btWizard" onClick={this.printAll}>
											<Icon type="printer" theme="outlined" /> Print
										</Button>
										<div style={{ display: 'none' }}>
											<Print rows={rows} ref={(el) => (this.componentPrintRef = el)} />
										</div>
									</ComponentTitle>
									<ButtonHolders className="group_bt_head">
										<button onClick={this.handleRefresh} className="btnRefresh btWizard">
											<Icon type="sync" theme="outlined" />
											Refresh
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
										displayname={row.displayname}
										modalActive={modalActive}
										modalType={this.state.modalType}
										row={row}
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
		...state.UserAnnouncementReducer,
		...state.SocketReducer
	}),
	{ ...actions, ...socketActions }
)(Index);
