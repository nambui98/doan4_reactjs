import React, { useEffect, useContext, useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { InputNumber, Input, Button, Form } from 'antd-v4';
import { Modal } from 'react-bootstrap';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import { CartContext } from '../helpers/contextAPI';
import { Upload, message } from 'antd-v4';
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
// import Cart from '../page/Cart';

SubscribeNewsletter.propTypes = {};

function getBase64(img, callback) {
	const reader = new FileReader();
	reader.addEventListener('load', () => callback(reader.result));
	reader.readAsDataURL(img);
}
function beforeUpload(file) {
	const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
	if (!isJpgOrPng) {
		message.error('You can only upload JPG/PNG file!');
	}
	const isLt2M = file.size / 1024 / 1024 < 2;
	if (!isLt2M) {
		message.error('Image must smaller than 2MB!');
	}
	return isJpgOrPng && isLt2M;
}
function SubscribeNewsletter(props) {
	const [ form ] = Form.useForm();
	const [ imageUrl, setImageUrl ] = useState();
	const [ loading, setLoading ] = useState(false);
	useEffect(() => {
		form.resetFields();
	}, []);
	const cart = useContext(CartContext);
	const register = async (data) => {
		// const requestUrl = 'api/categories';
		console.log(data);
		return await axios
			.post('/api/auth/signup', data.user, {
				headers: {
					'Content-Type': 'application/json',
					'X-Requested-With': 'XMLHttpRequest'
				}
			})
			.then((response) => {
				if (response.status === 200) {
					toast.success('Đăng ký thành công!');
					props.handleRegister();
				} else {
					toast.error('Lỗi1!');
				}
			})
			.catch((error) => {
				console.log(error);
				toast.error('Lỗi!');
			});
	};
	const onFinish = (values) => {
		if (values.user.avatar && values.user.avatar.fileList.length > 0) {
			values.user.typeImg = values.user.avatar.fileList[0].originFileObj.type;
			values.user.avatar = values.user.avatar.fileList[0].originFileObj.name;
			values.user.avatarBase64 = imageUrl;
		}
		values.user.status = 1;
		values.user.password_confirmation = values.user.password;
		register(values);
	};
	const handleChange = (info) => {
		if (info.file.status === 'uploading') {
			setLoading(true);
			return;
		}
		if (info.file.status === 'done') {
			// Get this url from response in real world.
			getBase64(info.file.originFileObj, (imageUrl) => {
				// console.log(imageUrl);
				setImageUrl(imageUrl);
				setLoading(false);
			});
		}
	};
	const uploadButton = (
		<div>
			{loading ? <LoadingOutlined /> : <PlusOutlined />}
			<div className="ant-upload-text">Upload</div>
		</div>
	);
	const onFinishFailed = (errorInfo) => {
		console.log('Failed:', errorInfo);
	};
	const layout = {
		labelCol: {
			span: 8
		},
		wrapperCol: {
			span: 16
		}
	};
	return [
		<Modal show={props.isShow} onHide={props.handleRegister} dialogClassName="modalRegister ">
			{/* <img src="img/extra/subscribe.jpg" style={{ height: 50, width: '100%' }} alt="" />{' '} */}
			<button type="button" onClick={props.handleRegister} className="sb-close-btn close popup-cls">
				{' '}
				<i className="fa-times fa clr-txt" />{' '}
			</button>
			<div className="subscribe-wrap" style={{ textAlign: 'unset', paddingTop: 0 }}>
				<div className="title-wrap">
					<h2 className="section-title" style={{ paddingTop: '30px' }}>
						{' '}
						<strong>Đăng Ký</strong>{' '}
					</h2>
				</div>
				<Form
					{...layout}
					className="newsletter-form"
					form={form}
					// size="large"
					onFinish={onFinish}
					onFinishFailed={onFinishFailed}
				>
					<div style={{ backgroundColor: '#fff', padding: 30 }}>
						<div className="col-md-6">
							<Form.Item
								name={[ 'user', 'name' ]}
								label="Họ và tên"
								rules={[
									{
										required: true,
										message: 'Bắt buộc'
									}
								]}
								style={{ marginBottom: 15 }}
							>
								<Input placeholder="họ và tên ..." />
							</Form.Item>
							<Form.Item
								name={[ 'user', 'email' ]}
								label="Email"
								rules={[
									{
										type: 'email',
										required: true,
										message: 'Email là bắt buộc'
									}
								]}
								style={{ marginBottom: 15 }}
							>
								<Input placeholder="Email ..." />
							</Form.Item>
							<Form.Item
								name={[ 'user', 'address' ]}
								label="Địa chỉ"
								rules={[
									{
										required: true,
										message: 'Địa chỉ là bắt buộc'
									}
								]}
								style={{ marginBottom: 15 }}
							>
								<Input placeholder="Địa chỉ ..." />
							</Form.Item>

							<Form.Item
								name={[ 'user', 'phone' ]}
								label="Số điện thoại"
								rules={[
									{
										required: true,
										message: 'Số điện thoại là bắt buộc'
									}
								]}
								style={{ marginBottom: 15 }}
							>
								<Input placeholder="Số điện thoại..." />
							</Form.Item>
						</div>
						<div className="col-md-6">
							<Form.Item name={[ 'user', 'avatar' ]} style={{ marginBottom: 15 }} label="Ảnh đại diện">
								<Upload
									name="avatar"
									listType="picture-card"
									className="avatar-uploader"
									showUploadList={false}
									action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
									beforeUpload={beforeUpload}
									onChange={handleChange}
								>
									{imageUrl ? (
										<img src={imageUrl} alt="avatar" style={{ width: '100%' }} />
									) : (
										uploadButton
									)}
								</Upload>
							</Form.Item>
							<Form.Item
								name={[ 'user', 'username' ]}
								rules={[
									{
										required: true,
										message: 'Tên đăng nhập là bắt buộc'
									},
									{
										min: 6,
										message: 'Tên đăng nhập có số ký tự phải lớn hơn 6'
									}
								]}
								label="Tên đăng nhập"
								style={{ marginBottom: 15 }}
							>
								<Input placeholder="Tên đăng nhập..." />
							</Form.Item>
							<Form.Item
								name={[ 'user', 'password' ]}
								rules={[
									{
										required: true,
										message: 'Mật khẩu là bắt buộc'
									},
									{
										min: 6,
										message: 'Mật khẩu có số ký tự phải lớn hơn 6'
									}
								]}
								label="Mật khẩu"
								style={{ marginBottom: 15 }}
							>
								<Input.Password placeholder="Mật khẩu..." />
							</Form.Item>

							<Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }} style={{ marginTop: 10 }}>
								<Button type="primary" htmlType="submit">
									Đăng ký
								</Button>
							</Form.Item>
						</div>
					</div>
				</Form>
			</div>
		</Modal>
	];
}

export default SubscribeNewsletter;
