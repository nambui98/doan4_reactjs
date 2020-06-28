import React, { Component } from 'react';
import { connect } from 'react-redux';
import actions from '../../redux/Dashboard/actions';

import clone from 'clone';
import { Row, Col, Icon, Button, Spin, Card } from 'antd';
import { TitleWrapper, ComponentTitle } from '../../../common/control.style';
import LayoutWrapper from './../../../components/utility/layoutWrapper.js';
import basicStyle from './../../../settings/basicStyle';
import IsoWidgetsWrapper from './../../containers/Widgets/widgets-wrapper';
import SaleWidget from './../../containers/Widgets/sale/sale-widget';
import IsoWidgetBox from './../../containers/Widgets/widget-box';
import helperFunc from '../../../helpers/helperFunc';

import StickerWidget from './../../containers/Widgets/sticker/sticker-widget';
import { dataList } from './../../../containers/Tables/antTables';
import DatatabePageWrapper from '../../../common/data.style';
import { withWindowSizeListener } from 'react-window-size-listener';
import moment from 'moment';
import * as googleChartConfigs from './../../containers/Charts/GoogleChart/config';
import { GoogleChart } from './../../containers/Charts/GoogleChart/';
import socketActions from '../../redux/Socket/actions';
import IntlMessages from '../../../components/utility/intlMessages';
const { convertNumber } = helperFunc;

const tableDataList = clone(dataList);
tableDataList.size = 5;

class Index extends Component {
	constructor(props) {
		super(props);
		// this.state = {
		// 	type: 7,
		// 	startDate: moment(new Date()).subtract(7, 'days').format('YYYY/MM/DD 00:00:00'),
		// 	endDate: moment(new Date()).format('YYYY/MM/DD 23:59:59')
		// };
		this.state = {
			type: 1
		};
	}
	componentDidMount() {
		const page = {
			type: 1,
			year: 2020
			// endDate: this.state.endDate
		};
		this.props.loadData(page);
	}
	handelSeachToday = () => {
		const page = {
			type: 4,
			year: 2020
		};
		this.setState(page);
		this.props.loadData(page);
	};
	handelSeachLast7Days = () => {
		const page = {
			type: 1,
			year: 2020
		};
		this.setState(page);
		this.props.loadData(page);
	};
	handelSeachLast30Days = () => {
		const page = {
			type: 2,
			year: 2020
		};
		this.setState(page);
		this.props.loadData(page);
	};
	handelSeachLast6months = () => {
		const page = {
			type: 3,
			year: 2020
		};
		this.setState(page);
		this.props.loadData(page);
	};
	render() {
		const { rowStyle, colStyle } = basicStyle;
		let { data } = this.props;
		console.log(data);
		// data = null;
		const { type } = this.state;

		// const wisgetPageStyle = {
		// 	display: 'flex',
		// 	flexFlow: 'row wrap',
		// 	alignItems: 'flex-start',
		// 	overflow: 'hidden',
		// 	marginTop: 10
		// };
		const { cartCancel, cartSuccess, cartDelivery, totalCart, lostMoney, soldMoney } = this.props;
		const chartEvents = [
			{
				eventName: 'select',
				callback(Chart) {}
			}
		];
		// console.log(shopReportIncome);
		const wisgetPageStyle = {
			display: 'flex',
			flexFlow: 'row wrap',
			alignItems: 'flex-start',
			overflow: 'hidden',
			marginTop: 10
		};
		let datashopReportIncome = [
			[
				'Year',
				'Doanh thu',
				{
					role: 'style'
				}
			]
		];
		if (data && data.length > 0) {
			// console.log(this.props.shopReportIncome);
			this.props.data.forEach((element) => {
				const data = [];
				data[0] = this.state.type === 3 ? element.month : moment(element.date).format('DD-MM');
				data[1] = element.profit;
				data[2] = 'fill-color: #3498db; fill-opacity: 0.4';
				datashopReportIncome.push(data);
			});
		}
		// else{
		//     const data = [];
		//     data[0] = this.state.type === 3 ? element.month : moment(element.date).format('DD-MM');
		//     data[1] = 0;
		//     data[2] = 'fill-color: #3498db; fill-opacity: 0.4';
		//     datashopReportIncome.push(data);
		// }
		googleChartConfigs.AreaChart.data = datashopReportIncome.sort(function(a, b) {
			return new Date(a[0]) - new Date(b[0]);
		});

		const stackConfigGoogleChart = {
			...googleChartConfigs.AreaChart,
			width:
				window.innerWidth < 450
					? 300
					: window.innerWidth < 700
						? 550
						: window.innerWidth < 1200 && datashopReportIncome.length > 11
							? 1050
							: datashopReportIncome.length > 11 ? 1300 : datashopReportIncome.length > 6 ? 800 : 500
		};
		//rechartConfigs.CustomShapeBarChart.datas=datasRechart;

		return (
			<DatatabePageWrapper>
				<LayoutWrapper style={{ padding: 0 }}>
					<h1 className="PageHeader">
						<Icon className="DisplayStyleButton" type="global" />
						&nbsp; Thống kê
					</h1>
					<div style={wisgetPageStyle}>
						<TitleWrapper className="titleWrapper allInner">
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
							</ComponentTitle>
						</TitleWrapper>
						<TitleWrapper className="titleWrapper allInner">
							<ComponentTitle>
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
						</TitleWrapper>
						<Row style={rowStyle} gutter={0} justify="start">
							<Col lg={6} md={12} sm={12} xs={24} style={colStyle}>
								<IsoWidgetsWrapper>
									{/* Sticker Widget */}
									<StickerWidget
										style={{ border: '2px solid #d9ba85' }}
										number={totalCart ? totalCart.count : ''}
										text="Tổng số đơn hàng"
										icon="ion-filing"
										fontColor="#ffffff"
										bgColor="#7266BA"
										height="120px"
									/>
								</IsoWidgetsWrapper>
							</Col>
							<Col lg={6} md={12} sm={12} xs={24} style={colStyle}>
								<IsoWidgetsWrapper>
									<StickerWidget
										number={cartSuccess ? cartSuccess.count : ''}
										text="Số đơn hàng thành công"
										icon="ion-outlet"
										fontColor="#ffffff"
										bgColor="#42A5F6"
										height="120px"
									/>
								</IsoWidgetsWrapper>
							</Col>
							<Col lg={6} md={12} sm={12} xs={24} style={colStyle}>
								<IsoWidgetsWrapper>
									<StickerWidget
										number={cartDelivery ? cartDelivery.count : ''}
										text="Số đơn hàng đang giao"
										icon="ion-checkmark-circled"
										fontColor="#ffffff"
										bgColor="#7ED320"
										height="120px"
									/>
								</IsoWidgetsWrapper>
							</Col>
							<Col lg={6} md={12} sm={12} xs={24} style={colStyle}>
								<IsoWidgetsWrapper>
									<StickerWidget
										number={cartCancel ? cartCancel.count : ''}
										text="Số đơn hàng bị huỷ"
										icon="ion-help-circled"
										fontColor="#ffffff"
										bgColor="#F75D81"
										height="120px"
									/>
								</IsoWidgetsWrapper>
							</Col>
						</Row>
						<Row style={rowStyle} gutter={0} justify="start">
							<Col lg={6} md={12} sm={12} xs={24} style={colStyle}>
								<IsoWidgetsWrapper>
									<SaleWidget
										label="Tổng tiền bán được"
										price={convertNumber(parseInt(soldMoney ? soldMoney.sold : '')) + ' đ'}
										details="Tổng số tiền bán được"
										fontColor="#795548"
									/>
								</IsoWidgetsWrapper>
							</Col>
							<Col lg={6} md={12} sm={12} xs={24} style={colStyle}>
								<IsoWidgetsWrapper>
									<SaleWidget
										label="Tổng tiền mất đi"
										price={convertNumber(parseInt(lostMoney ? lostMoney.lost : '')) + ' đ'}
										details="Tổng số tiền mất đi do sản phẩm hết hạn"
										fontColor="#795548"
									/>
								</IsoWidgetsWrapper>
							</Col>
							<Col lg={6} md={12} sm={12} xs={24} style={colStyle}>
								<IsoWidgetsWrapper>
									<SaleWidget
										label="Tổng lãi"
										price={
											convertNumber(
												parseInt(lostMoney && soldMoney ? soldMoney.sold - lostMoney.lost : '')
											) + ' đ'
										}
										details="Tổng số tiền lãi được"
										fontColor="#795548"
									/>
								</IsoWidgetsWrapper>
							</Col>
						</Row>
						<Col lg={24} md={24} sm={24} xs={24} style={colStyle}>
							<IsoWidgetsWrapper>
								<IsoWidgetBox height={455} style={{ overflow: 'hidden' }}>
									<GoogleChart {...stackConfigGoogleChart} chartEvents={chartEvents} />
								</IsoWidgetBox>
							</IsoWidgetsWrapper>
						</Col>
						{/* </Row> */}
						{/* ]
						) : type === 7 ? ( */}
						{/* <Row style={rowStyle} gutter={0} justify="start">
								<Col lg={12} md={24} sm={24} xs={24} style={colStyle}>
									<IsoWidgetsWrapper>
										<IsoWidgetBox height={455} style={{ overflow: 'hidden' }}>
											<GoogleChart {...stackConfigGoogleChart} chartEvents={chartEvents} />
										</IsoWidgetBox>
									</IsoWidgetsWrapper>
								</Col>
							</Row>
						) : type === 8 ? (
							<Row style={rowStyle} gutter={0} justify="start">
								<Col lg={12} md={24} sm={24} xs={24} style={colStyle}>
									<IsoWidgetsWrapper>
										<IsoWidgetBox height={455} style={{ overflow: 'hidden' }}>
											<GoogleChart {...stackConfigGoogleChart} chartEvents={chartEvents} />
										</IsoWidgetBox>
									</IsoWidgetsWrapper>
								</Col>
							</Row>
						) : type === 9 ? (
							[
								<Row style={rowStyle} gutter={0} justify="start">
									<Col lg={24} md={24} sm={24} xs={24} style={colStyle}>
										<IsoWidgetsWrapper>
											<IsoWidgetBox height={455} style={{ overflow: 'hidden' }}>
												<GoogleChart {...stackConfigGoogleChart} chartEvents={chartEvents} />
											</IsoWidgetBox>
										</IsoWidgetsWrapper>
									</Col>
								</Row>
							]
						) : (
							''
						)} */}
					</div>
				</LayoutWrapper>
			</DatatabePageWrapper>
		);
	}
}
export default connect(
	(state) => ({
		...state.DashboardReducer
	}),
	{ ...actions }
)(withWindowSizeListener(Index));
