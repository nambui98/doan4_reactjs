import React, { useState, useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios';
import Breadcrumb from '../conponents/Breadcrumb';
import { Radio, Input, Select, Form } from 'antd';
import { ToastContainer, toast } from 'react-toastify';

import { CartContext } from '../helpers/contextAPI';
import helperFunc from '../helpers/helperFunc';
const { convertNumber } = helperFunc;
const { Option } = Select;

CheckOut.propTypes = {};

function CheckOut(props) {
	let history = useHistory();
	const [ form ] = Form.useForm();
	const cart = useContext(CartContext);

	const [ changeType, setType ] = useState(1);
	const [ totalMoney, setTotalMoney ] = useState(cart.cartsTotalMoney);
	const radioStyle = {
		display: 'block',
		height: '35px',
		lineHeight: '30px'
	};
	useEffect(() => {
		setTotalMoney(cart.cartsTotalMoney + 35000);
	}, []);
	const handleOnChangeType = () => {
		let type = form.getFieldValue('typePay');
		setType(type);
	};
	const handleOnChangeTypeOfType = () => {
		let typeOfType = form.getFieldValue('typePayOfPay');
		let total = typeOfType === 1 ? cart.cartsTotalMoney + 35000 : cart.cartsTotalMoney + 15000;
		setTotalMoney(total);
	};
	const saveInfoCart = async (id, product) => {
		let dataPost = {
			idproduct: product.id,
			idcart: id,
			mass: product.quantity,
			typeCategory: product.typequantity,
			price: product.totalMoneySale
		};
		return await axios
			.post('/api/auth/addInfoCart', dataPost, {
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer ${sessionStorage.getItem('access_token')}`
				}
			})
			.then((response) => {
				console.log(response);
				if (response.status === 200) {
				} else {
					toast.error('Lỗi!');
				}
			})
			.catch((error) => {
				toast.error('Lỗi!');
			});
	};
	const saveInfoCarts = (id) => {
		let carts = JSON.parse(sessionStorage.getItem('carts'));
		try {
			for (let i = 0; i < carts.length; i++) {
				saveInfoCart(id, carts[i]);
			}
			toast.success('Thành công!');
			sessionStorage.removeItem('carts');
			cart.deleteAllCart();
			history.push('/');
		} catch (error) {
			toast.error('Lỗi!');
		}
	};
	const saveCart = async (data) => {
		// const requestUrl = 'api/categories';
		const user = JSON.parse(sessionStorage.getItem('account'));
		const dataPost = {
			name: data.name,
			idcustomer: user.id,
			address: data.address,
			phone: data.phone,
			totalmoney: totalMoney,
			status: 1,
			paytype: data.typePay,
			payTypeOfType: data.typePayOfPay
		};
		return await axios
			.post('/api/auth/addCart', dataPost, {
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer ${sessionStorage.getItem('access_token')}`
				}
			})
			.then((response) => {
				console.log(response);
				if (response.status === 200) {
					saveInfoCarts(response.data.id);
				} else {
					toast.error('Lỗi!');
				}
			})
			.catch((error) => {
				toast.error('Lỗi!');
			});
	};
	const onFinish = (values) => {
		const access_token = sessionStorage.getItem('access_token');
		if (access_token) {
			saveCart(values);
		} else {
			cart.setShowLogin(true);
		}
	};
	return (
		<div>
			<Breadcrumb nameLocation="Thanh toán" />
			{/*Breadcrumb Section End*/}
			{/* Checkout Starts*/}
			{cart && cart.cartItems && cart.cartItems.length > 0 ? (
				<section className="checkout-wrap sec-space" style={{ paddingTop: 50, paddingBottom: 50 }}>
					<div className="container">
						<div className="panel-group chk-panel" id="accordion">
							<div className="panel">
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
											<div className="col-md-6">
												{/* <form className="chk-form"> */}
												<div className="chk-heading">
													<a
														className="fsz-30"
														data-toggle="collapse"
														data-parent="#accordion"
														href="#collapseOne"
													>
														<strong>Phương thức </strong>
														<span className="light-font"> thanh toán </span>
													</a>
												</div>
												{/* <h2 className="title-1">Phương thức thanh toán</h2> */}
												{/* <p>Register with us for future convenience:</p> */}
												{/* <div className="form-group block-inline "> */}
												<Form.Item name="typePay">
													<Radio.Group onChange={handleOnChangeType}>
														<Radio style={radioStyle} value={1}>
															<span> Ship code </span>
															<img src="ico/truck.png" style={{ width: 30 }} alt="" />
														</Radio>
														<Radio style={radioStyle} value={2}>
															<span> Paypal </span>
															<img src="ico/paypal.png" style={{ width: 30 }} alt="" />
														</Radio>
													</Radio.Group>
												</Form.Item>
												{changeType === 1 ? (
													[
														<h2 className="title-1"> Phương thức vận chuyển </h2>,
														<Form.Item name="typePayOfPay">
															<Radio.Group onChange={handleOnChangeTypeOfType}>
																<Radio style={{ ...radioStyle, height: 50 }} value={1}>
																	<span> Vận chuyển nhanh </span>
																	<span className="red-clr"> 35,000 ₫ </span>
																	<p
																		style={{
																			fontSize: '13px',
																			fontWeight: 200
																		}}
																	>
																		{' '}
																		Khoảng 2 đến 3 ngày nhận được hàng{' '}
																	</p>
																</Radio>
																<Radio style={{ ...radioStyle, height: 50 }} value={2}>
																	<span> Vận chuyển thường </span>
																	<span className="red-clr"> 15,000 ₫ </span>
																	<p
																		style={{
																			fontSize: '13px',
																			fontWeight: 200
																		}}
																	>
																		{' '}
																		Khoảng 4 đến 5 ngày nhận được hàng{' '}
																	</p>
																</Radio>
															</Radio.Group>
														</Form.Item>
													]
												) : (
													''
												)}
											</div>

											<div className="col-md-6">
												<form className="registed-form">
													<div className="chk-heading">
														<a
															className="fsz-30"
															data-toggle="collapse"
															data-parent="#accordion"
															href="#collapseOne"
														>
															<strong>Thông tin </strong>
															<span className="light-font"> người nhận </span>
														</a>
													</div>
													{/* <h2 className="title-1"> Thông tin người nhận </h2> */}
													{/* <p className> Please log in below : </p> */}
													<div className="form-group block-inline">
														<label>
															{' '}
															Họ và tên <span className="red-clr"> * </span>{' '}
														</label>
														<Form.Item
															name="name"
															style={{ margin: 0 }}
															rules={[
																{
																	required: true,
																	message: 'Họ và tên là bắt buộc'
																}
															]}
														>
															<Input
																style={{ borderRadius: 25 }}
																placeholder="Họ và tên..."
																className="form-control name input-your-name"
															/>
														</Form.Item>
													</div>
													<div className="form-group block-inline">
														<label>
															{' '}
															Địa chỉ<span className="red-clr"> * </span>{' '}
														</label>
														<Form.Item
															name="address"
															style={{ margin: 0 }}
															rules={[
																{
																	required: true,
																	message: 'Địa chỉ là bắt buộc'
																}
															]}
														>
															<Input
																style={{ borderRadius: 25 }}
																placeholder="Địa chỉ..."
																className="form-control name input-your-name"
															/>
														</Form.Item>
													</div>
													<div className="form-group block-inline">
														<label>
															{' '}
															Số điện thoại <span className="red-clr"> * </span>{' '}
														</label>
														<Form.Item
															name="phone"
															style={{ margin: 0 }}
															rules={[
																{
																	required: true,
																	message: 'Số điện thoại là bắt buộc'
																}
															]}
														>
															<Input
																style={{ borderRadius: 25 }}
																placeholder="Số điện thoại..."
																className="form-control name input-your-name"
															/>
														</Form.Item>
													</div>
													<div className="form-group block-inline">
														{/* <CartContext.Consumer>
														{({ cartsTotalMoney }) => {
															return ( */}
														<strong className="fsz-20">
															Tổng :
															<span className="clr-txt">
																{' '}
																{convertNumber(totalMoney)} ₫{' '}
															</span>{' '}
														</strong>
														{/* );
														}}
													</CartContext.Consumer> */}
														{/* <label>Tổng tiền:</label>
													<Form.Item>
														<Input
															placeholder="Số điện thoại..."
															className="form-control name input-your-name"
														/>
													</Form.Item> */}
													</div>

													<div className="form-group block-inline text-right">
														<button className="theme-btn-sm-3 btn submit-btn" type="submit">
															{' '}
															<b> Thanh toán </b>{' '}
														</button>
													</div>
												</form>
											</div>
										</Form>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
			) : (
				<section
					className="checkout-wrap"
					style={{
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
						height: 200
					}}
				>
					{/* <div
						className="col-md-12"
						style={{
							display: 'flex',
							flexDirection: 'column',
							alignItems: 'center'
						}}
					> */}
					<img src="ico/empty-cart.png" style={{ width: 100 }} />;
					<h2 className="title-1">Giỏ hàng trống!</h2>
					{/* </div> */}
				</section>
			)}
		</div>
	);
}

export default CheckOut;
