import React, { useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { InputNumber, Input, Button, Form } from 'antd';
import { Modal } from 'react-bootstrap';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import { CartContext } from '../helpers/contextAPI';
// import Cart from '../page/Cart';

SubscribeNewsletter.propTypes = {};

function SubscribeNewsletter(props) {
	const [ form ] = Form.useForm();
	useEffect(() => {
		form.resetFields();
	}, []);
	const cart = useContext(CartContext);
	const login = async (data) => {
		// const requestUrl = 'api/categories';
		return await axios
			.post('/api/auth/login', data, {
				headers: {
					'Content-Type': 'application/json'
				}
			})
			.then((response) => {
				if (response.status === 200) {
					sessionStorage.setItem('access_token', response.data.access_token);
					sessionStorage.setItem('account', JSON.stringify(response.data));
					cart.addToCart(cart.cartItem, cart.cartItem.quantity, cart.cartItem.typequantity);
					toast.success('Đăng nhập thành công!');
					props.handleLogin();
				} else {
					toast.error('Lỗi, tài khoản hoặc mật khẩu không chính xác!');
				}
			})
			.catch((error) => {
				toast.error('Lỗi, tài khoản hoặc mật khẩu không chính xác!');
			});
	};
	const onFinish = (values) => {
		login(values);
	};

	const onFinishFailed = (errorInfo) => {
		console.log('Failed:', errorInfo);
	};
	return [
		<Modal show={props.isShow} onHide={props.handleLogin} dialogClassName="subscribe-me popups-wrap">
			<button type="button" onClick={props.handleLogin} className="sb-close-btn close popup-cls">
				{' '}
				<i className="fa-times fa clr-txt" />{' '}
			</button>
			<div className="subscribe-wrap">
				<div className="main-logo">
					<Link href="index.html">
						{' '}
						<img alt="" src="img/logo/main-logo.png" />
					</Link>
				</div>
				<div className="title-wrap">
					<h2 className="section-title">
						{' '}
						<strong>Đăng nhập</strong>{' '}
					</h2>
				</div>
				<Form
					className="newsletter-form"
					form={form}
					size="large"
					onFinish={onFinish}
					onFinishFailed={onFinishFailed}
				>
					<div className="form-group">
						<Form.Item
							name="username"
							rules={[
								{
									required: true,
									message: 'Tên đăng nhập là bắt buộc!'
								},
								{
									min: 6,
									message: 'Tên đăng nhập có số ký tự phải lớn hơn 6'
								}
							]}
						>
							<Input
								className="form-control"
								placeholder="Tên đăng nhập..."
								style={{ width: 250 }}

								//  onChange={onChange}
							/>
						</Form.Item>
						<Form.Item
							name="password"
							rules={[
								{
									required: true,
									message: 'Mật khẩu là bắt buộc!'
								},
								{
									min: 6,
									message: 'Mật khẩu có số ký tự phải lớn hơn 6'
								}
							]}
						>
							<Input.Password
								placeholder="Mật khẩu..."
								style={{
									width: 250,
									textAlign: 'center',
									margin: 'auto',
									borderRadius: '2em',
									boxShadow: '0 0 6px 0 rgba(0, 0, 0, 0.25)',
									height: '45px'
								}}
								className="form-control"
								//  onChange={onChange}
							/>
						</Form.Item>
						{/* <input

								placeholder="enter your email address"
								required
								type="text"
							/> */}
					</div>
					<Form.Item>
						<Button
							className="theme-btn upper-text"
							style={{
								borderRadius: '2em',
								boxShadow: 'none',
								fontSize: '18px',
								height: '52px',
								padding: '0 25px',
								color: '#fff',
								minWidth: '200px',
								lineHeight: '50px',
								backgroundColor: '#7fba00'
							}}
							htmlType="submit"
						>
							Submit
						</Button>
						{/* <button className="theme-btn upper-text" htmlType="submit">
							{' '}
							<strong> Đăng nhập </strong>{' '}
						</button> */}
						{/* <Button type="primary" htmlType="submit">
                            Submit
        </Button> */}
					</Form.Item>
					{/* <div className="form-group">
						<button className="theme-btn upper-text" type="submit">
							{' '}
							<strong> Đăng nhập </strong>{' '}
						</button>
					</div> */}
				</Form>
			</div>
		</Modal>
	];
}

export default SubscribeNewsletter;
