/*
    Method Name: User
    Description: Add, update, changeStatus, changePassWord,
    Author: Bùi Văn Quý
    Last Modified Author: Nam Nam
    Created Date: 23/12/2019
    Modified Date: 05/11/2019
*/

import React, { Component } from 'react';
import Modals from '../../../common/modal.style';
import WithDirection from '../../../../isomophic/settings/withDirection';
import isoModal from '../../../components/feedback/modal';
import moment from 'moment';
import { Radio, Input, Form, Button, Row, Col, Upload, Icon, DatePicker } from 'antd';
import DataWrapper from '../../../common/data.style';
import styleControl from '../../../common/styleControl';
import IntlMessages from '../../../components/utility/intlMessages';
import formItemLayout from '../../../helpers/formItem';
import helperFunc from '../../../helpers/helperFunc';
import { urlConfig } from '../../../settings';
// import { isNullOrUndefined } from "util";

// import {
//   TableWrapper,
// } from '../../../common/control.style';
const { dummyRequest, beforeUpload, getBase64 } = helperFunc;
// const { Option } = Select;
const WDModal = Modals(isoModal);
const Modal = WithDirection(WDModal);
const FormItem = Form.Item;
const RadioGroup = Radio.Group;
// const { TextArea } = Input;
class ModalFormAccount extends Component {
	constructor(props) {
		super(props);
		this.state = {
			base64: null,
			changed: false,
			isLoadding: false,
			currAuthority: [],
			isAdding: true,
			limitAdd: false
		};
		this.handleChange = this.handleChange.bind(this);
	}
	componentWillReceiveProps(nextProps) {
		if (nextProps.modalType === 'none') {
			this.setState({
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

	// onPageChange_Charge = (pageNumber, pageSize) => {
	//   const page = {
	//     name: this.props.displayname,
	//     page: pageNumber,
	//     limit: pageSize,
	//     loadData: "Charge"
	//   };
	//   this.setState(page, () => {
	//     this.props.onPageChange_customer(page);
	//   });
	// }

	// onPageChange_UserdCoin = (pageNumber, pageSize) => {

	//   const page = {
	//     name: this.props.displayname,
	//     page: pageNumber,
	//     limit: pageSize,
	//     loadData: "CoidUserd"
	//   };
	//   this.setState(page, () => {
	//     this.props.onPageChange_customer(page);
	//   });
	// }
	render() {
		const { modalActive, modalType, row, handleCancel, handleSubmit } = this.props;
		const { getFieldDecorator } = this.props.form;
		let fileList = [];
		if (row && row.avata) {
			fileList.push({
				uid: '-1',
				name: '',
				status: 'done',
				url: row.avata,
				thumbUrl: urlConfig.imageUrl + row.avata
			});
		}

		const normFile = (e) => {
			if (Array.isArray(e)) {
				return e;
			}
			e.fileList = e.fileList.slice(-1);
			return e && e.fileList;
		};
		//     const prefixSelector = getFieldDecorator('prefix', {
		//   initialValue: row.id != 0 && row.user && row.user.phone !== null ? row.user.phone.slice(0, 3) : '+84',
		// })(
		//   <Select style={{ width: 70 }} onChange={this.handleChange}>
		//     <Option value="84">+84</Option>
		//     <Option value="87">+87</Option>
		//   </Select>,
		// );
		const saveButton = (e) => {
			e.preventDefault();
			this.setState({
				changed: false
			});
			this.props.form.validateFieldsAndScroll((err, values) => {
				if (!err) {
					if (modalType === 'changeStatus') {
						row.status = values.status;
						handleSubmit(modalType, row);
					} else if (modalType === 'editPass') {
						row.newpass = values.newpass;
						handleSubmit(modalType, row);
					} else {
						row.username = values.username;
						row.phone = values.phone;
						row.password = values.password;
						row.full_name = values.full_name;
						row.birthday = values.birthday;
						row.gender = values.gender;
						row.address = values.address;
						if (values.avatar[0].originFileObj) {
							getBase64(values.avatar[0].originFileObj, (result) => {
								row.avata = result.replace(/^data:image\/[a-z]+;base64,/, '');
								handleSubmit(modalType, row);
								this.props.form.resetFields();
							});
						} else {
							handleSubmit(modalType, row);
							this.props.form.resetFields();
						}
					}
				}
			});
		};
		return (
			<Modal
				title={
					modalType === 'changeStatus' ? (
						<IntlMessages id="form.titleChangeStatus" />
					) : modalType === 'insert' ? (
						'Add New'
					) : modalType === 'edit' ? (
						'Update'
					) : modalType === 'viewBlockHistory' ? (
						'Block History'
					) : modalType === 'editPass' ? (
						'THAY ĐỔI MẬT KHẨU'
					) : (
						'DETAIL'
					)
				}
				className="FormModal"
				style={{ top: 50 }}
				width={modalType === 'changeStatus' ? '25%' : '50%'}
				visible={modalActive}
				onCancel={handleCancel}
				cancelText={
					modalType === 'view' ? <IntlMessages id="button.close" /> : <IntlMessages id="button.cancel" />
				}
				onOk={saveButton}
				okText="Save"
				footer={
					modalType === 'changeStatus' ||
					modalType === helperFunc.modeType.Insert ||
					modalType === 'edit' ||
					modalType === 'editPass' ? (
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
								style={{
									backgroundColor: '#2d3446',
									color: '#FFFFFF',
									borderRadius: '6px',
									display: modalType === 'view' || modalType === 'viewBlockHistory' ? 'none' : ''
								}}
								disabled={!this.state.changed}
							>
								<IntlMessages id="button.save" />
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
							</Button>
						]
					)
				}
			>
				<DataWrapper>
					<div className="clearfix">
						{modalType === helperFunc.modeType.Insert ? (
							<Form className="isoCardInfoForm FormData">
								<Row>
									<Col className="ant-col-xl-12 ant-col-lg-24">
										<FormItem {...formItemLayout} label="Full name" hasFeedback>
											{getFieldDecorator('full_name', {
												rules: [
													{
														required: true,
														message: 'Full name is required'
													}
												]
											})(<Input onChange={this.handleChange} />)}
										</FormItem>
										<FormItem {...formItemLayout} label="User name" hasFeedback>
											{getFieldDecorator('username', {
												rules: [
													{
														required: true,
														message: <IntlMessages id="form.validate.name" />
													},
													{
														min: 8,
														message: 'Must be 8 characters long.'
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
												initialValue: null,
												rules: [
													{
														required: true,
														message: <IntlMessages id="form.validate.this" />
													},
													{
														min: 8,
														max: 30,
														message: <IntlMessages id="form.validate.passworde8_30" />
													}
												]
											})(<Input type="password" onChange={this.handleChange} />)}
										</FormItem>
										<FormItem
											{...formItemLayout}
											label={<span>Phone</span>}
											hasFeedback
											style={{ marginBottom: 10 + 'px' }}
										>
											{getFieldDecorator('phone', {
												rules: [
													{
														required: true,
														message: <IntlMessages id="form.validate.this" />
													},

													{
														validator: this.checkNumber
													}
												]
											})(<Input onChange={this.handleChange} style={{ width: '100%' }} />)}
										</FormItem>
									</Col>
									<Col className="ant-col-xl-12 ant-col-lg-24">
										<FormItem
											{...formItemLayout}
											label="Avatar"
											style={{ marginBottom: 10 + 'px' }}
										>
											{getFieldDecorator('avatar', {
												valuePropName: 'fileList',
												getValueFromEvent: normFile,
												rules: [
													{
														required: true,
														message: <IntlMessages id="form.validate.image" />
													}
												]
											})(
												<Upload
													name="avatar"
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

										<FormItem {...formItemLayout} label="Address" hasFeedback>
											{getFieldDecorator('address', {
												rules: [
													{
														required: true,
														message: 'Address is required'
													}
												]
											})(<Input onChange={this.handleChange} />)}
										</FormItem>

										<FormItem
											{...formItemLayout}
											style={{
												width: '100%',
												marginBottom: '10px'
											}}
											label="Birth day"
										>
											{getFieldDecorator('birthday', {
												rules: [
													{
														required: true,
														message: 'Birth day is required'
													}
												]
											})(
												<DatePicker
													format={helperFunc.dateFormat}
													disabledDate={this.disabledDate}
													allowClear={false}
													onChange={this.handleChange}
												/>
											)}
										</FormItem>
										<FormItem {...formItemLayout} label="Gender">
											{getFieldDecorator('gender', {
												rules: [
													{
														required: true,
														message: 'Gender is required'
													}
												]
											})(
												<RadioGroup onChange={this.handleChange}>
													<Radio value={1}>Male</Radio>
													<Radio value={2}>Female</Radio>
												</RadioGroup>
											)}
										</FormItem>
									</Col>
								</Row>
							</Form>
						) : modalType === 'edit' ? (
							<Form className="isoCardInfoForm FormData">
								<Row>
									<Col className="ant-col-xl-12 ant-col-lg-24">
										<FormItem {...formItemLayout} label="Full name" hasFeedback>
											{getFieldDecorator('full_name', {
												initialValue: row.full_name,
												rules: [
													{
														required: true,
														message: 'Full name is required'
													}
												]
											})(<Input onChange={this.handleChange} />)}
										</FormItem>
										<FormItem {...formItemLayout} label="User name" hasFeedback>
											{getFieldDecorator('username', {
												initialValue: row.username,
												rules: [
													{
														required: true,
														message: <IntlMessages id="form.validate.name" />
													},
													{
														min: 8,
														message: 'Must be 8 characters long.'
													}
												]
											})(<Input onChange={this.handleChange} />)}
										</FormItem>

										<FormItem
											{...formItemLayout}
											label={<span>Phone</span>}
											hasFeedback
											style={{ marginBottom: 10 + 'px' }}
										>
											{getFieldDecorator('phone', {
												initialValue: row.phone,
												rules: [
													{
														required: true,
														message: <IntlMessages id="form.validate.this" />
													},

													{
														validator: this.checkNumber
													}
												]
											})(<Input onChange={this.handleChange} style={{ width: '100%' }} />)}
										</FormItem>
									</Col>
									<Col className="ant-col-xl-12 ant-col-lg-24">
										<FormItem
											{...formItemLayout}
											label="Avatar"
											style={{ marginBottom: 10 + 'px' }}
										>
											{getFieldDecorator('avatar', {
												valuePropName: 'fileList',
												getValueFromEvent: normFile,
												initialValue: fileList.length > 0 ? fileList : null,
												rules: [
													{
														required: true,
														message: <IntlMessages id="form.validate.image" />
													}
												]
											})(
												<Upload
													name="avatar"
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

										<FormItem {...formItemLayout} label="Address" hasFeedback>
											{getFieldDecorator('address', {
												initialValue: row.address,
												rules: [
													{
														required: true,
														message: 'Address is required'
													}
												]
											})(<Input onChange={this.handleChange} />)}
										</FormItem>

										<FormItem
											{...formItemLayout}
											style={{
												width: '100%',
												marginBottom: '10px'
											}}
											label="Birth day"
										>
											{getFieldDecorator('birthday', {
												initialValue: moment(row.birthday, helperFunc.dateFormat),
												rules: [
													{
														required: true,
														message: 'Birth day is required'
													}
												]
											})(
												<DatePicker
													format={helperFunc.dateFormat}
													disabledDate={this.disabledDate}
													allowClear={false}
													onChange={this.handleChange}
												/>
											)}
										</FormItem>
										<FormItem {...formItemLayout} label="Gender">
											{getFieldDecorator('gender', {
												initialValue: row.gender,

												rules: [
													{
														required: true,
														message: 'Gender is required'
													}
												]
											})(
												<RadioGroup onChange={this.handleChange}>
													<Radio value={1}>Male</Radio>
													<Radio value={2}>Female</Radio>
												</RadioGroup>
											)}
										</FormItem>
									</Col>
								</Row>
							</Form>
						) : modalType === 'changeStatus' ? (
							<Form className="FormData">
								<FormItem {...formItemLayout} label="Status">
									{getFieldDecorator('status', { initialValue: row ? row.status : '' })(
										<RadioGroup onChange={this.handleChange}>
											<Radio value="1">
												<IntlMessages id="form.active" />
											</Radio>
											<Radio value={2}>
												<IntlMessages id="form.inactive" />
											</Radio>
										</RadioGroup>
									)}
								</FormItem>
								{/* <FormItem
                  {...formItemLayout}
                  style={{
                    width: "100%",
                    marginBottom: "10px",
                    textAlign: "left"
                  }}
                  label="Reason"
                >
                  {getFieldDecorator("reason", {
                  })(<TextArea rows={3} onChange={this.handleChange} />)}
                </FormItem> */}
							</Form>
						) : modalType === 'view' ? (
							<div>
								<div className="clearfix" />
								<div className="detailField clearfix">
									<label className="label">Full name:</label>
									<div className="contentDetail">{row ? row.full_name : ''}</div>
								</div>
								<div className="detailField clearfix">
									<label className="label">Phone:</label>
									<div className="contentDetail">{row ? row.phone : ''}</div>
								</div>
								<div className="detailField clearfix">
									<label className="label detailFieldFullBorder">Gender</label>
									<div className="contentDetail">
										{row ? row.gender === 1 ? 'Male' : row.gender === 2 ? 'Female' : '' : ''}
									</div>
								</div>

								<div className="detailField clearfix">
									<label className="label detailFieldFullBorder">Address</label>
									<div className="contentDetail">{row ? row.address : ''}</div>
								</div>
								<div className="detailField clearfix">
									<label className="label detailFieldFullBorder">Birth day</label>
									<div className="contentDetail">{row ? row.birthday : ''}</div>
								</div>
								<div className="detailField clearfix">
									<label className="label">Created at</label>
									<div className="contentDetail">
										{row ? moment(row.created_at).format('MM/DD/YYYY') : ''}
									</div>
								</div>
								<div className="detailField clearfix">
									<label className="label">Updated at</label>
									<div className="contentDetail">
										{row ? moment(row.updated_at).format('MM/DD/YYYY') : ''}
									</div>
								</div>
							</div>
						) : modalType === 'editPass' ? (
							<Form>
								<FormItem {...formItemLayout} label="Mật khẩu mới" hasFeedback>
									{getFieldDecorator('newpass', {
										rules: [
											{
												required: true,
												message: 'Không được để trống mật khẩu mới'
											},
											{
												max: 50,
												message: 'Tối đa 50 ký tự'
											}
										]
									})(<Input onChange={this.handleChange} type="password" />)}
								</FormItem>
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
