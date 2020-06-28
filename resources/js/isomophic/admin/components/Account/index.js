/*
    Method Name: Account
    Description: Add, update, delete,  search, refresh, chageRole, reset passWord, changeStatus
    Author: Nam Nam
    Last Modified Author: Nam Nam
    Created Date: 20/02/2020
    Modified Date: 2/03/2020
*/

import React, { Component } from 'react';
import Modals from '../../../common/modal.style';
import WithDirection from '../../../../isomophic/settings/withDirection';
import isoModal from '../../../components/feedback/modal';
import moment from 'moment';
import { Radio, Input, Form, Button, Checkbox, Row, Col, Upload, Icon } from 'antd';
import DataWrapper from '../../../common/data.style';
import styleControl from '../../../common/styleControl';
import clone from 'clone';
import IntlMessages from '../../../components/utility/intlMessages';
import helperFunc from '../../../helpers/helperFunc';
import { urlConfig } from '../../../settings';
import formItemLayout from '../../../helpers/formItem';
const WDModal = Modals(isoModal);
const Modal = WithDirection(WDModal);
const FormItem = Form.Item;
const RadioGroup = Radio.Group;
const { dummyRequest, beforeUpload, getBase64 } = helperFunc;

class ModalFormAccount extends Component {
	constructor(props) {
		super(props);
		this.state = {
			base64: null,
			changed: false,
			isLoadding: false,
			currAuthority: [],
			isAdding: true,
			limitAdd: false,
			startDate: moment(new Date()).add(1, 'days')
		};
		this.handleChange = this.handleChange.bind(this);
	}
	componentWillReceiveProps(nextProps) {
		if (nextProps.modalType === 'none') {
			this.setState({
				base64: null,
				currAuthority: [],
				isAdding: true,
				changed: false
			});
			this.props.form.resetFields();
		}
	}

	//Disable or enable save button
	handleChange = () => {
		this.setState({
			changed: true
		});
	};

	// convert image to base64
	getBase64(file, cb) {
		let reader = new FileReader();
		reader.readAsDataURL(file);
		reader.onload = function() {
			cb(reader.result);
		};
		reader.onerror = function(error) {};
	}
	// check phone number
	checkPhone = (rule, value, callback) => {
		const isNumber = /[^0-9]/;
		const { form } = this.props;
		const { rows } = this.props;
		let number = `+84${value}`;
		let isExitNumber = false;
		let isExitPhone = false;

		// if (!value) {
		// 	isExitNumber = false;
		// } else {
		if (value.length > 8 && value.length < 14 && isNumber.test(value) === false) {
			console.log(typeof value === 'undefined');
			isExitNumber = true;
			for (let i = 0; i < rows.length; i++) {
				if (value === form.getFieldValue('PhoneCheck')) {
					break;
				}
				if (number === rows[i].mobile || value === rows[i].mobile) {
					isExitPhone = true;
					break;
				}
			}
		}
		//}

		return isExitNumber
			? isExitPhone ? callback('Phone already exists.') : callback()
			: typeof value === 'undefined' ? callback() : callback('Must be between 9 and 13 characters long.');
	};

	render() {
		const {
			modalActive,
			modalType,
			row,
			handleCancel,
			handleSubmit,
			updateIsAddNew,
			updateStatusAdd,
			updateCheckRole
		} = this.props;
		let fileList = [];

		if (row.avatar) {
			fileList.push({
				uid: '-1',
				name: '',
				status: 'done',
				url: row.avatar,
				thumbUrl: urlConfig.imageUrl + 'img/avatar/' + row.avatar
			});
		}
		const normFile = (e) => {
			if (Array.isArray(e)) {
				return e;
			}
			e.fileList = e.fileList.slice(-1);
			return e && e.fileList;
		};
		const roles = clone(this.props.roles);

		const { getFieldDecorator } = this.props.form;
		const saveButton = (e) => {
			e.preventDefault();
			this.setState({
				changed: false
			});
			this.props.form.validateFieldsAndScroll((err, values) => {
				if (!err) {
					if (modalType === 'roles') {
						let Arr = [];
						if (roles.length > 0) {
							roles.forEach(function(item) {
								if (item.checked === true) {
									Arr.push(item.id);
								}
							});
						}
						row.RolesAfterChange = Arr;
						handleSubmit(modalType, row);
					} else if (modalType === 'editStatus') {
						row.status = values.status;
						handleSubmit(modalType, row);
					} else {
						row.fullname = values.full_name;
						row.email = values.email;
						row.phone = values.phone;
						row.username = values.username;
						row.password = values.password;
						row.status = values.status;
						// row.type = values.type;
						let baseImage = '';
						console.log(values.image);
						if (values.image && values.image[0] && values.image[0].originFileObj) {
							getBase64(values.image[0].originFileObj, (result) => {
								baseImage = result;
								let str = baseImage.replace(/^data:image\/[a-z]+;base64,/, '');
								row.avatar = str;
								handleSubmit(modalType, row);
							});
						} else {
							row.avatar = '';
							handleSubmit(modalType, row);
						}
					}
				}
			});
		};

		// save and add
		const saveAdd = (e) => {
			e.preventDefault();

			this.props.form.validateFieldsAndScroll((err, values) => {
				if (!err) {
					row.username = values.username;
					row.password = values.password;
					row.status = values.status;

					if (modalType === helperFunc.modeType.Insert) {
						updateIsAddNew(true);
						updateStatusAdd(true);
					}
					this.props.form.resetFields();
					handleSubmit(modalType, row);
				}
			});
		};
		const HandleCheckRoleDetail = (e, obj) => {
			this.setState(
				{
					changed: true
				},
				function() {
					updateCheckRole(obj);
				}
			);
		};
		// if (row.phone && row.phone.length < 12) {
		//   row.phone = "+84" + row.phone;
		// }
		// const prefixSelector = getFieldDecorator('prefix', {
		//   initialValue: row.id != 0 && row.mobile && row.mobile !== null ? row.mobile.slice(0, 3) : '+84',
		// })(
		//   <Select style={{ width: 70 }} onChange={this.handleChange}>
		//     <Option value="+84">+84</Option>
		//     <Option value="+87">+87</Option>
		//   </Select>,
		// );
		return (
			<Modal
				title={
					modalType === 'editStatus' ? (
						<IntlMessages id="form.titleChangeStatus" />
					) : modalType === helperFunc.modeType.Insert ? (
						<IntlMessages id="form.titleInsert" />
					) : modalType === 'roles' ? (
						<IntlMessages id="form.titleChangeRole" />
					) : modalType === 'resetPassword' ? (
						'CHANGE PASSWORD'
					) : modalType === 'edit' ? (
						'Update'
					) : (
						'DETAIL'
					)
				}
				className="FormModal"
				style={{ top: 50 }}
				visible={modalActive}
				onCancel={handleCancel}
				cancelText={
					modalType === 'view' ? <IntlMessages id="button.close" /> : <IntlMessages id="button.cancel" />
				}
				onOk={saveButton}
				okText="Save"
				width={window.innerWidth > 1100 ? modalType === 'ChangeStatus' ? 30 + '%' : 50 + '%' : '100%'}
				footer={
					modalType === helperFunc.modeType.Insert ? (
						[
							<Button
								key="cancel"
								className="cancelType"
								onClick={handleCancel}
								style={styleControl(3, modalType)}
							>
								<IntlMessages id="button.close" />
							</Button>,
							<Button
								key="ok"
								className="okType"
								onClick={saveButton}
								style={styleControl(1, modalType)}
								disabled={!this.state.changed}
							>
								<IntlMessages id="button.save" />
							</Button>,
							<Button
								key="oknew"
								className="okNewType"
								onClick={saveAdd}
								style={styleControl(2, modalType)}
								disabled={!this.state.changed}
							>
								<IntlMessages id="button.save&AddNew" />
							</Button>
						]
					) : (
						[
							<Button
								key="cancel"
								className="cancelType"
								onClick={handleCancel}
								style={styleControl(3, modalType)}
							>
								<IntlMessages id="button.close" />
							</Button>,
							<Button
								key="ok"
								className="okType"
								onClick={saveButton}
								style={styleControl(1, modalType)}
								disabled={!this.state.changed}
							>
								<IntlMessages id="button.save" />
							</Button>
						]
					)
				}
			>
				<DataWrapper>
					<div className="clearfix">
						{modalType === 'insert' ? (
							<Form className="FormData">
								<div>
									<FormItem {...formItemLayout} label="Full name" hasFeedback>
										{getFieldDecorator('full_name', {
											rules: [
												{
													required: true,
													message: 'Full name is required'
												},
												{
													max: 200,
													message: <IntlMessages id="form.validate.max200" />
												},
												{
													pattern: new RegExp('^[A-Za-z][A-Za-z0-9 .]+$'),
													message: <IntlMessages id="form.validate.fullnameSpecial" />
												}
											]
										})(<Input onChange={this.handleChange} type="text" />)}
									</FormItem>
									<FormItem {...formItemLayout} label="Email" hasFeedback>
										{getFieldDecorator('email', {
											rules: [
												{
													type: 'email',
													message: <IntlMessages id="form.validate.email_orther" />
												},
												{
													max: 200,
													message: <IntlMessages id="form.validate.max200" />
												}
											]
										})(<Input onChange={this.handleChange} type="email" />)}
									</FormItem>
									<FormItem
										{...formItemLayout}
										label={<span>Phone</span>}
										hasFeedback
										style={{ marginBottom: 10 + 'px' }}
									>
										{/* {getFieldDecorator('PhoneCheck', {
											initialValue: row && row.mobile ? row.mobile : null
										})} */}
										{getFieldDecorator('phone', {
											rules: [
												{
													required: true,
													message: <IntlMessages id="form.validate.this" />
												},
												{
													min: 9,
													max: 13,
													message: 'Must be between 9 and 13 characters long.'
												},
												{
													pattern: new RegExp('^[0-9]+$'),
													message: <IntlMessages id="form.validate.phoneSpecial" />
												}
												// {
												// 	validator: this.checkPhone
												// }
											]
										})(<Input onChange={this.handleChange} style={{ width: '100%' }} />)}
									</FormItem>
									<FormItem {...formItemLayout} label="Avatar" style={{ marginBottom: 10 + 'px' }}>
										{getFieldDecorator('image', {
											valuePropName: 'fileList',
											getValueFromEvent: normFile
											// rules: [
											//   {
											//     required: true,
											//     message: <IntlMessages id="form.validate.image" />
											//   }
											// ]
										})(
											<Upload
												name="logo"
												customRequest={dummyRequest}
												listType="picture"
												accept="image/png, image/jpeg"
												beforeUpload={beforeUpload}
												onChange={this.handleChange}
											>
												<Button>
													<Icon type="upload" /> <IntlMessages id="form.upload" />
												</Button>
											</Upload>
										)}
									</FormItem>
									<FormItem
										{...formItemLayout}
										label={
											<span>
												<IntlMessages id="form.username" /> &nbsp;
											</span>
										}
										hasFeedback
										style={{ marginBottom: 10 + 'px' }}
									>
										{getFieldDecorator('username', {
											rules: [
												{
													required: true,
													message: <IntlMessages id="form.validate.username" />
												},
												{
													min: 6,
													max: 20,
													message: <IntlMessages id="form.validate.username6_20" />
												},
												{
													whitespace: true,
													message: <IntlMessages id="form.validate.usernameOrther" />
												},
												{
													pattern: new RegExp('^[A-Za-z][A-Za-z0-9_.]+$'),
													message: <IntlMessages id="form.validate.usernameSpecial" />
												}
											]
										})(<Input onChange={this.handleChange} />)}
									</FormItem>
									<FormItem
										{...formItemLayout}
										label="Password"
										hasFeedback
										style={{ marginBottom: 10 + 'px' }}
									>
										{getFieldDecorator('password', {
											rules: [
												{
													required: true,
													message: <IntlMessages id="form.validate.password" />
												},
												{
													min: 6,
													max: 20,
													message: <IntlMessages id="form.validate.username6_20" />
												},
												{
													whitespace: true,
													message: <IntlMessages id="form.validate.passwordOrther" />
												}
											]
										})(<Input type="password" onChange={this.handleChange} />)}
									</FormItem>
									{/* <FormItem {...formItemLayout} label="Type">
										{getFieldDecorator('type', {
											initialValue: row && row.mobile ? row.type : 2
										})(
											<RadioGroup onChange={this.handleChange}>
												<Radio value={1}>Admin</Radio>
												<Radio value={3}>Supervisor or HOD </Radio>
												<Radio value={2}>User</Radio>
											</RadioGroup>
										)}
									</FormItem> */}
								</div>
							</Form>
						) : modalType === 'edit' ? (
							<Form className="FormData">
								<div>
									<FormItem {...formItemLayout} label="Full name" hasFeedback>
										{getFieldDecorator('full_name', {
											initialValue: row && row.fullname ? row.fullname : null,
											rules: [
												{
													required: true,
													message: 'Full name is required'
												},
												{
													max: 200,
													message: <IntlMessages id="form.validate.max200" />
												},
												{
													pattern: new RegExp('^[A-Za-z][A-Za-z0-9 .]+$'),
													message: <IntlMessages id="form.validate.fullnameSpecial" />
												}
											]
										})(<Input onChange={this.handleChange} type="text" />)}
									</FormItem>
									<FormItem {...formItemLayout} label="Email" hasFeedback>
										{getFieldDecorator('email', {
											initialValue: row && row.email ? row.email : null,
											rules: [
												{
													type: 'email',
													message: <IntlMessages id="form.validate.email_orther" />
												},
												{
													max: 200,
													message: <IntlMessages id="form.validate.max200" />
												}
											]
										})(<Input onChange={this.handleChange} type="email" />)}
									</FormItem>
									{/* <FormItem {...formItemLayout} label="Type">
										{getFieldDecorator('type', {
											initialValue: row && row.type ? row.type : 2
										})(
											<RadioGroup onChange={this.handleChange}>
												<Radio value={1}>Admin</Radio>
												<Radio value={3}>Supervisor or HOD </Radio>
												<Radio value={2}>User</Radio>
											</RadioGroup>
										)}
									</FormItem> */}
									<FormItem
										{...formItemLayout}
										label={<span>Phone</span>}
										hasFeedback
										style={{ marginBottom: 10 + 'px' }}
									>
										{/* {getFieldDecorator('PhoneCheck', {
											initialValue: row && row.mobile ? row.mobile : null
										})} */}
										{getFieldDecorator('phone', {
											initialValue: row && row.phone ? row.phone : null,
											rules: [
												{
													required: true,
													message: <IntlMessages id="form.validate.this" />
												},
												{
													min: 9,
													max: 13,
													message: 'Must be between 9 and 13 characters long.'
												},
												{
													pattern: new RegExp('^[0-9]+$'),
													message: <IntlMessages id="form.validate.phoneSpecial" />
												}
											]
										})(<Input onChange={this.handleChange} style={{ width: '100%' }} />)}
									</FormItem>

									<FormItem {...formItemLayout} label="Avatar" style={{ marginBottom: 10 + 'px' }}>
										{getFieldDecorator('image', {
											valuePropName: 'fileList',
											getValueFromEvent: normFile,
											initialValue: fileList.length > 0 ? fileList : null
											// rules: [
											//   {
											//     required: true,
											//     message: <IntlMessages id="form.validate.image" />
											//   }
											// ]
										})(
											<Upload
												name="logo"
												customRequest={dummyRequest}
												listType="picture"
												accept="image/png, image/jpeg"
												beforeUpload={beforeUpload}
												onChange={this.handleChange}
											>
												<Button>
													<Icon type="upload" /> <IntlMessages id="form.upload" />
												</Button>
											</Upload>
										)}
									</FormItem>
								</div>
							</Form>
						) : modalType === 'editStatus' ? (
							<Form className="FormData">
								<div>
									<FormItem {...formItemLayout} label="Status">
										{getFieldDecorator('status', { initialValue: row.status })(
											<RadioGroup onChange={this.handleChange}>
												<Radio value={1}>
													<IntlMessages id="form.active" />
												</Radio>
												<Radio value={2}>
													<IntlMessages id="form.inactive" />
												</Radio>
												<Radio value={3}>
													<IntlMessages id="form.delete" />
												</Radio>
											</RadioGroup>
										)}
									</FormItem>
								</div>
							</Form>
						) : modalType === 'resetPassword' ? (
							<Form className="FormData">
								<div>
									<FormItem
										// {...formItemLayout}
										label="Password"
										hasFeedback
										style={{ marginBottom: 10 + 'px' }}
									>
										{getFieldDecorator('password', {
											rules: [
												{
													required: true,
													message: <IntlMessages id="form.validate.password" />
												},
												{
													min: 6,
													max: 20,
													message: <IntlMessages id="form.validate.username6_20" />
												},
												{
													whitespace: true,
													message: <IntlMessages id="form.validate.passwordOrther" />
												}
											]
										})(<Input.Password type="password" onChange={this.handleChange} />)}
									</FormItem>
								</div>
							</Form>
						) : modalType === 'roles' ? (
							<Form className="FormData">
								<div className="clearfix">
									<div className="LeftSideContent">
										<FormItem
											{...formItemLayout}
											label={
												<span>
													<IntlMessages id="form.changRole" />
												</span>
											}
											style={{ marginBottom: 10 + 'px' }}
										>
											{getFieldDecorator('username')(<b>{row.username}</b>)}
										</FormItem>
									</div>
								</div>
								<h4
									style={{
										color: '#b37604',
										textTransform: 'uppercase',
										padding: '0 0 10px 0',
										margin: '10px 0 10px 0',
										borderBottom: 'solid 1px #b37604'
									}}
								>
									<IntlMessages id="form.role" />
								</h4>
								{
									<div>
										{roles.length > 0 ? (
											<Row className="rowCheckbox">
												{roles.map((role) => {
													if (role.status === 1)
														return (
															<Col key={'checkbox' + role.id} md={6} sm={8}>
																<Checkbox
																	checked={role.checked}
																	value={role.id}
																	onChange={(e) => {
																		HandleCheckRoleDetail(e, role);
																	}}
																>
																	{role.rolename}
																</Checkbox>
															</Col>
														);
													else return '';
												})}
											</Row>
										) : (
											''
										)}
									</div>
								}
							</Form>
						) : (
							''
						)}
					</div>
				</DataWrapper>
			</Modal>
		);
	}
}

const WrappedModalFormAccount = Form.create()(ModalFormAccount);
export default WrappedModalFormAccount;
