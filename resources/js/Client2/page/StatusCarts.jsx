import React, { useState, useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link, useHistory } from 'react-router-domv5';
import axios from 'axios';
import Breadcrumb from '../conponents/Breadcrumb';
import { Table } from 'react-bootstrap';
import { Radio, Empty, Select, Steps, Form, Space, Card, Tabs, Button, Popconfirm, Spin } from 'antd-v4';
import moment from 'moment';
import { ToastContainer, toast } from 'react-toastify';

import {
	UserOutlined,
	SolutionOutlined,
	LoadingOutlined,
	CodeSandboxOutlined,
	SmileOutlined,
	DropboxOutlined,
	ClockCircleOutlined,
	FrownOutlined
} from '@ant-design/icons';
import { CartContext } from '../helpers/contextAPI';
import helperFunc from '../helpers/helperFunc';

const { convertNumber } = helperFunc;
const { Option } = Select;
const { Step } = Steps;
const { TabPane } = Tabs;
CheckOut.propTypes = {};

function CheckOut(props) {
	let history = useHistory();
	const [ cartsUser, setCatsUser ] = useState([]);
	const [ currentPage, setCurrentPage ] = useState(0);
	const [ totalPage, setTotalPage ] = useState(0);
	const [ loading, setLoading ] = useState(true);
	const [ typeTab, setTypeTab ] = useState(1);
	const [ form ] = Form.useForm();
	const cart = useContext(CartContext);
	const user = JSON.parse(sessionStorage.getItem('account'));
	async function getData(page, status = 1) {
		return await axios
			.get('/api/auth/viewCarts/' + user.id + '&&' + status + '?page=' + page, {
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer ${sessionStorage.getItem('access_token')}`
				}
			})
			.then((response) => {
				console.log(response);

				setCatsUser(response.data.data);
				setCurrentPage(response.data.current_page);
				setTotalPage(response.data.last_page);
				setLoading(false);
			})
			.catch((error) => {
				console.log(error);
			});
	}
	async function cancel(id) {
		return await axios
			.get('/api/auth/cancelCart/' + id, {
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer ${sessionStorage.getItem('access_token')}`
				}
			})
			.then((response) => {
				console.log(response);
				getData();
				toast.success('Bạn đã huỷ đơn hàng');
				// setCatsUser(response.data.data);
				// setCurrentPage(response.data.current_page);
				// setTotalPage(response.data.last_page);
			})
			.catch((error) => {
				console.log(error);
			});
	}
	useEffect(() => {
		getData();
	}, []);

	const onFinish = (values) => {
		// saveCart(values);
	};
	const onChange = (current) => {
		console.log('onChange:', current);
		setCurrent(current);
	};
	const callback = (key) => {
		setLoading(true);
		setTypeTab(key);
		getData(1, key);
	};
	let pagination = [];
	if (totalPage > 0) {
		let styleActive = {
			backgroundColor: '#92d2a7',
			color: '#fff'
		};
		for (let index = 1; index <= totalPage; index++) {
			if (index === currentPage) {
				pagination.push(
					<li key={index}>
						<a onClick={changePage} style={styleActive}>
							{index}
						</a>
					</li>
				);
			} else {
				pagination.push(
					<li key={index}>
						<a onClick={() => changePage(index)}>{index}</a>
					</li>
				);
			}
		}
	}
	const changePage = (page) => {
		getData(page, typeTab);
	};
	const tablist = [
		{
			icon: <ClockCircleOutlined />,
			title: 'Chờ xác nhận'
		},
		{
			icon: <CodeSandboxOutlined />,
			title: 'Đang giao'
		},
		{
			icon: <DropboxOutlined />,
			title: 'Đã nhận'
		},
		{
			icon: <FrownOutlined />,
			title: 'Đã huỷ'
		}
	];
	const handleCancel = (id) => {
		cancel(id);
	};
	return (
		<div>
			<Breadcrumb nameLocation="Đơn hàng" />
			<section className="checkout-wrap sec-space" style={{ paddingTop: 50, paddingBottom: 50 }}>
				<div className="container">
					<div id="collapseOne" className="panel-collapse collapse in">
						<div className="chk-body pt-15 block-inline">
							<Form
								className="chk-form"
								form={form}
								onFinish={onFinish}
								initialValues={{
									typePay: 1,
									typePayOfPay: 1
								}}
							>
								<div className="col-md-12">
									<div className="chk-heading">
										<a
											className="fsz-30"
											data-toggle="collapse"
											data-parent="#accordion"
											href="#collapseOne"
										>
											<strong>Đơn hàng</strong>
											<span className="light-font"> của tôi</span>
										</a>
									</div>
									<Tabs defaultActiveKey="1" size="large" onChange={callback}>
										{tablist.map((tab, indexTab) => {
											return (
												<TabPane tab={[ tab.icon, tab.title ]} key={indexTab + 1}>
													{!loading ? cartsUser && cartsUser.length > 0 ? (
														cartsUser.map((cart, index) => {
															return (
																<Card key={index} style={{ width: '100%' }}>
																	<p>Tên người nhận: {cart.name}</p>
																	<p>Địa chỉ: {cart.address}</p>
																	<p>Số điện thoại: {cart.phone}</p>
																	<p>Tổng tiền: {convertNumber(cart.totalmoney)} ₫</p>
																	<p>
																		Ngày đặt hàng:{' '}
																		{moment(cart.created_at).format('DD/MM/YYYY')}
																	</p>
																	{indexTab === 0 ? (
																		<Popconfirm
																			title="Bạn có chắc chắn muốn huỷ bỏ đơn hàng？"
																			onConfirm={() => handleCancel(cart.id)}
																			okText="Đồng ý"
																			cancelText="Không"
																		>
																			<Button type="danger">Huỷ</Button>
																		</Popconfirm>
																	) : (
																		''
																	)}
																</Card>
															);
														})
													) : (
														<Empty />
													) : (
														<Spin />
													)}
												</TabPane>
											);
										})}
									</Tabs>
									<Space direction="vertical" style={{ width: '100%' }} />
								</div>
							</Form>
						</div>
					</div>
				</div>
				{cartsUser && cartsUser.length > 0 ? (
					[
						<div className="rel-div">
							<div className="divider-full-1" />
							<div className="nav-page">
								<a
									disabled={currentPage === 1 ? true : false}
									onClick={() => changePage(currentPage - 1)}
									className="fa fa-long-arrow-left left"
								/>
								<a
									disabled={currentPage === totalPage ? true : false}
									onClick={() => changePage(currentPage + 1)}
									className="fa fa-long-arrow-right right"
								/>
							</div>
						</div>,
						<div className="pagination-wrap">
							<ul className="pagintn">{pagination}</ul>
						</div>
					]
				) : (
					''
				)}
			</section>
		</div>
	);
}

export default CheckOut;
