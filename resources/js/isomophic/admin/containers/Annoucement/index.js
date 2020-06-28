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
import { Row, Col, Button, Icon, Input, Popconfirm, Tooltip, DatePicker } from 'antd';
import Box from '../../../components/utility/box';
import Modal from '../../components/Annoucement';
import actions from '../../redux/Annoucement/actions';
import { dataConfig, urlConfig } from '../../../settings/index';
import IntlMessages from '../../../components/utility/intlMessages';
import helperFunc from '../../../helpers/helperFunc';
import socketActions from '../../redux/Socket/actions';
import { connectSocket, listenSocket } from './../../../helpers/message';
import flags from '../../../helpers/flags';
import ReactTestUtils from 'react-dom/test-utils';
import ReactToPrint from 'react-to-print';
import Print from './print';

const { RangePicker } = DatePicker;

class Annoucement extends BaseComponent {
	constructor(props) {
		super(props);
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
	componentDidMount() {
		const { isPrint } = this.props;
		const page = {
			name: this.state.search,
			page: this.state.page,
			limit: dataConfig.pageLimit,
			isPrint: isPrint,
			StartDate: this.state.startDate,
			EndDate: this.state.endDate
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
			StartDate: this.state.startDate,
			EndDate: this.state.endDate,
			isPrint: 2,
			name: this.state.search,
			page: this.state.page,
			limit: dataConfig.pageLimit
		};
		this.setState(page, () => {
			this.props.loadData(page);
		});
	};
	reset = () => {
		this.setState({
			search: '',
			page: 1,
			startDate: moment(new Date()).subtract(1, 'months').format('YYYY/MM/DD 00:00:00'),
			endDate: moment(new Date()).format('YYYY/MM/DD 23:59:59')
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
		const { rows, count, row, disable, announcementType, newRow } = this.props;
		const { rowStyle, colStyle, gutter } = basicStyle;
		const { modalActive, startDate, endDate } = this.state;
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
		let columns = [];
		columns = [
			{
				title: 'Title',
				dataIndex: 'Title',
				key: 'Title',
				width: 150,
				sorter: (a, b) => {
					if (a.title < b.title) return -1;
					if (a.title > b.title) return 1;
					return 0;
				},
				render: (text, row) => {
					return <div style={{ whiteSpace: 'pre-wrap', wordWrap: 'break-word' }}>{row.title}</div>;
				}
			},
			{
				title: ' Type',
				dataIndex: 'Announcement_type',
				key: 'Announcement_type',
				className: 'noWrapCell',

				sorter: (a, b) => {
					if (a.announcement_type_id < b.announcement_type_id) return -1;
					if (a.announcement_type_id > b.announcement_type_id) return 1;
					return 0;
				},
				render: (text, row) => {
					return <span>{row && row.announcement_type ? row.announcement_type.name : ''}</span>;
				}
			},
			{
				title: 'Date',
				dataIndex: 'Annouced_date',
				className: 'noWrapCell',
				key: 'Annouced_date',
				width: 90,
				sorter: (a, b) => {
					if (a.announcement_date < b.announcement_date) return -1;
					if (a.announcement_date > b.announcement_date) return 1;
					return 0;
				},
				render: (text, row) => {
					return <span>{row.announcement_date}</span>;
				}
			},

			{
				title: 'Description',
				dataIndex: 'Description',
				key: 'Description',
				sorter: (a, b) => {
					if (a.description < b.description) return -1;
					if (a.description > b.description) return 1;
					return 0;
				},
				render: (text, row) => {
					return <div style={{ whiteSpace: 'pre-wrap', wordWrap: 'break-word' }}>{row.description}</div>;
				}
			},
			{
				title: <IntlMessages id="form.image" />,
				dataIndex: 'image',
				key: 'image',
				className: 'noWrapCell',
				render: (text, row) => {
					if (row && row.images) {
						let images = row.images.split('##########').slice(0, row.images.split('##########').length - 1);
						return images.map((image, index) => [
							<img
								key={index}
								style={{ width: '60px', margin: '4px 0' }}
								alt={row.name}
								src={urlConfig.imageUrl + image}
							/>,
							<br key={index + images.length} />
						]);
					}
				}
			},
			// {
			//   title: <IntlMessages id="form.status" />,
			//   dataIndex: "status",
			//   className: "noWrapCell",
			//   key: "status",
			//   sorter: (a, b) => {
			//     if (a.status < b.status) return -1;
			//     if (a.status > b.status) return 1;
			//     return 0;
			//   },
			//   render: (text, row) => {
			//     let className;
			//     if (row.status === helperFunc.status.Active) {
			//       className = "publish";
			//     } else {
			//       className = "private";
			//     }
			//     return (
			//       <span className="content">
			//         <StatusTag className={className}>
			//           {row.status === helperFunc.status.Active
			//             ? helperFunc.status.properties[helperFunc.status.Active]
			//             : helperFunc.status.properties[helperFunc.status.Inactive]}
			//         </StatusTag>
			//       </span>
			//     );
			//   }
			// },
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
					return <span>{row.updated_at}</span>;
				}
			},
			{
				title: '',
				key: 'action',
				className: 'noWrapCell',
				render: (text, row) => {
					return (
						<ActionWrapper>
							<Tooltip title="View User">
								<button
									className="deleteBtn aSimple"
									onClick={this.handleModal.bind(this, 'viewUser', row)}
								>
									<i className="ion-android-person" />
								</button>
							</Tooltip>
							<Tooltip title="View Info">
								<button
									className="deleteBtn aSimple"
									onClick={this.handleModal.bind(this, 'viewInfo', row)}
								>
									<i className="ion-android-document" />
								</button>
							</Tooltip>

							<div>
								{localStorage.getItem('user_name') === 'admin' ||
								JSON.parse(localStorage.getItem('role_detail')).some(
									(role) => role.address === '104'
								) ? (
									<Tooltip title="Edit">
										<button onClick={this.handleModal.bind(this, 'edit', row)} className="aSimple">
											<Icon type="form" theme="outlined" />
										</button>
									</Tooltip>
								) : (
									''
								)}

								{localStorage.getItem('user_name') === 'admin' ||
								JSON.parse(localStorage.getItem('role_detail')).some(
									(role) => role.address === '105'
								) ? (
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
								) : (
									''
								)}
							</div>
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
						<IntlMessages id="sidebar.annoucement" />
					</h1>
					<Row style={rowStyle} gutter={gutter} justify="start">
						<Col md={24} sm={24} xs={24} style={colStyle}>
							<Box className="boxWrapper">
								<TitleWrapper className="titleWrapper">
									<ComponentTitle>
										<Input
											placeholder="Search ..."
											onChange={this.handleSearchChange}
											className="inputSearch"
											onKeyUp={this.onKeyUp}
											value={this.state.search}
										/>
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
										<button onClick={this.handleSearch} className="btSearch" style={{ top: 0 }}>
											<Icon type="search" theme="outlined" />
										</button>
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
									</ComponentTitle>
									<ButtonHolders className="group_bt_head">
										<button
											onClick={this.handleRefresh}
											className="btnRefresh btWizard"
											style={{ cursor: 'pointer' }}
										>
											<Icon type="sync" theme="outlined" />
											Refresh
										</button>
										{JSON.parse(localStorage.getItem('role_detail')).some(
											(role) => role.address === '103'
										) ? (
											<button
												onClick={this.handleModal.bind(this, 'insert', null)}
												className="btnAdd btWizard"
												style={{ cursor: 'pointer' }}
											>
												<Icon type="plus-square" theme="outlined" />
												Add new
											</button>
										) : (
											''
										)}
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
		...state.AnnoucementReducer,
		...state.SocketReducer
	}),
	{ ...actions, ...socketActions }
)(Annoucement);
