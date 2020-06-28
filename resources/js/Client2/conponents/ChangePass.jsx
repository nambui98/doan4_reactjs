import React, { useEffect, useContext, useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-domv5';
import { InputNumber, Input, Button, Form } from 'antd-v4';
import { Modal } from 'react-bootstrap';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import { CartContext } from '../helpers/contextAPI';
import { Upload, message } from 'antd';
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
// import Cart from '../page/Cart';

ChangePass.propTypes = {};

function ChangePass(props) {
	const [ form ] = Form.useForm();
	const [ imageUrl, setImageUrl ] = useState();
	const [ isDisabled, setIsDisabled ] = useState(true);
	const [ loading, setLoading ] = useState(false);
	useEffect(() => {
		form.resetFields();
	}, []);
	const update = async (data) => {
		return await axios
			.post('/api/auth/changePass', data.pass, {
				headers: {
					'Content-Type': 'application/json',
					'X-Requested-With': 'XMLHttpRequest',
					Authorization: `Bearer ${sessionStorage.getItem('access_token')}`
				}
			})
			.then((response) => {
				console.log(response);

				if (response.status === 200) {
					toast.success(response.data.message);
					closeModal();
				} else {
					toast.error(response.data.message);
				}
			})
			.catch((error) => {
				console.log(error);
				toast.error(error.message);
			});
	};
	const onFinish = (values) => {
		update(values);
	};
	const layout = {
		labelCol: {
			span: 8
		},
		wrapperCol: {
			span: 16
		}
	};
	const onchange = () => {
		setIsDisabled(false);
	};
	const closeModal = () => {
		props.handleRegister();
		form.resetFields();
	};
	return [
		<Modal show={props.isShow} onHide={closeModal} dialogClassName="modalChangePass">
			<button type="button" onClick={closeModal} className="sb-close-btn close popup-cls">
				{' '}
				<i className="fa-times fa clr-txt" />{' '}
			</button>
			<div className="subscribe-wrap" style={{ textAlign: 'unset', paddingTop: 0 }}>
				<div className="title-wrap" style={{ margin: 0 }}>
					<h2 className="section-title" style={{ paddingTop: '50px' }}>
						{' '}
						<strong>Thay đổi mật khẩu</strong>{' '}
					</h2>
				</div>
				<Form
					{...layout}
					className="newsletter-form"
					form={form}
					// size="large"
					onFinish={onFinish}
					initialValues={{}}
				>
					<div style={{ backgroundColor: '#fff', padding: 30 }}>
						<div className="col-md-12">
							<Form.Item
								name={[ 'pass', 'passwordOld' ]}
								label="Mật khẩu cũ"
								rules={[
									{
										required: true,
										message: 'Bắt buộc'
									},
									{
										min: 6,
										message: 'Số ký tự phải lớn hơn 6'
									}
								]}
								style={{ marginBottom: 15 }}
							>
								<Input.Password onChange={onchange} placeholder="Mật khẩu cũ..." />
							</Form.Item>
							<Form.Item
								name={[ 'pass', 'password' ]}
								label="Mật khẩu mới"
								rules={[
									{
										required: true,
										message: 'Bắt buộc'
									},
									{
										min: 6,
										message: 'Số ký tự phải lớn hơn 6'
									}
								]}
								style={{ marginBottom: 15 }}
							>
								<Input.Password onChange={onchange} placeholder="Mật khẩu mới..." />
							</Form.Item>
							<Form.Item
								name={[ 'pass', 'password_confirmation' ]}
								label="Nhập lại"
								rules={[
									{
										required: true,
										message: 'Bắt buộc'
									},
									{
										min: 6,
										message: 'Mật khẩu có số ký tự phải lớn hơn 6'
									}
								]}
								style={{ marginBottom: 15 }}
							>
								<Input.Password onChange={onchange} placeholder="Nhập lại..." />
							</Form.Item>
							<Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }} style={{ marginTop: 10 }}>
								<Button
									type="primary"
									disabled={isDisabled}
									loading={loading ? true : false}
									htmlType="submit"
								>
									Sửa
								</Button>
							</Form.Item>
						</div>
					</div>
				</Form>
			</div>
		</Modal>
	];
}

export default ChangePass;
