/*
    Method Name: CheckList
    Description: Add, update, delete,  search, refresh
    Author: Nam Nam
    Last Modified Author: Nam Nam
    Created Date: 20/02/2020
    Modified Date: 17/03/2020
*/

import React, { Component } from 'react';
import Modals from '../../../common/modal.style';
import WithDirection from '../../../settings/withDirection';
import isoModal from '../../../components/feedback/modal';
import moment from 'moment';
import { Radio, Input, Icon, Form, Button, Row, Col, Upload } from 'antd';
import { urlConfig } from '../../../settings';
import DataWrapper from '../../../common/data.style';
import styleControl from '../../../common/styleControl';
import IntlMessages from '../../../components/utility/intlMessages';
import formItemLayout from '../../../helpers/formItem';
import helperFunc from '../../../helpers/helperFunc';
import { isNullOrUndefined } from 'util';

const { dummyRequest, beforeUpload, getBase64 } = helperFunc;
const WDModal = Modals(isoModal);
const Modal = WithDirection(WDModal);
const FormItem = Form.Item;
const RadioGroup = Radio.Group;
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
	render() {
		const { modalActive, modalType, row, handleCancel, handleSubmit } = this.props;
		const { getFieldDecorator } = this.props.form;
		let fileList = [];
		if (!isNullOrUndefined(row) && row.image) {
			fileList.push({
				uid: '-1',
				name: '',
				status: 'done',
				url: row.image,
				thumbUrl: urlConfig.imageUrl + row.image
			});
		}
		const normFile = (e) => {
			if (Array.isArray(e)) {
				return e;
			}
			e.fileList = e.fileList.slice(-1);
			return e && e.fileList;
		};
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
					} else {
						row.name = values.name;
						row.description = values.description;
						row.status = modalType === 'insert' ? 1 : values.status;
						let baseImage = '';
						if (values.image[0].originFileObj) {
							getBase64(values.image[0].originFileObj, (result) => {
								baseImage = result;
								let str = baseImage.replace(/^data:image\/[a-z]+;base64,/, '');
								row.image = str;
								handleSubmit(modalType, row);
							});
						} else {
							handleSubmit(modalType, row);
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
					) : (
						'DETAIL'
					)
				}
				className="FormModal"
				style={{ top: 50 }}
				width={window.innerWidth > 1100 ? modalType === 'ChangeStatus' ? 30 + '%' : 50 + '%' : '100%'}
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
					modalType === 'update' ||
					modalType === 'edit' ? (
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
									<Col className="ant-col-xl-24 ant-col-lg-24">
										<FormItem {...formItemLayout} label="Name" hasFeedback>
											{getFieldDecorator('name', {
												rules: [
													{
														required: true,
														message: 'Name is required'
													}
												]
											})(<Input onChange={this.handleChange} />)}
										</FormItem>

										<FormItem
											{...formItemLayout}
											label="Description"
											hasFeedback
											style={{ marginBottom: 10 + 'px' }}
										>
											{getFieldDecorator('description', {
												initialValue: null,
												rules: [
													// {
													//   required: true,
													//   message: "Description is required"
													// },
													{
														min: 8,
														message: 'Minimum 8 characters long'
													}
												]
											})(<Input onChange={this.handleChange} />)}
										</FormItem>
										<FormItem {...formItemLayout} label="Image" style={{ marginBottom: 10 + 'px' }}>
											{getFieldDecorator('image', {
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
													name="image"
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
									</Col>
								</Row>
							</Form>
						) : modalType === 'edit' ? (
							<Form className="isoCardInfoForm FormData">
								<Row>
									<Col className="ant-col-xl-24 ant-col-lg-24">
										<FormItem {...formItemLayout} label="Name" hasFeedback>
											{getFieldDecorator('name', {
												initialValue: row.name,
												rules: [
													{
														required: true,
														message: 'Name is required'
													}
												]
											})(<Input onChange={this.handleChange} />)}
										</FormItem>

										<FormItem
											{...formItemLayout}
											label="Description"
											hasFeedback
											style={{ marginBottom: 10 + 'px' }}
										>
											{getFieldDecorator('description', {
												initialValue: row.description,
												rules: [
													// {
													//   required: true,
													//   message: "Description is required"
													// },
													{
														min: 8,
														message: 'Minimum 8 characters long'
													}
												]
											})(<Input onChange={this.handleChange} />)}
										</FormItem>
										<FormItem {...formItemLayout} label="Image" style={{ marginBottom: 10 + 'px' }}>
											{getFieldDecorator('image', {
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
													name="image"
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
										<FormItem {...formItemLayout} label="Status">
											{getFieldDecorator('status', { initialValue: row ? row.status : '' })(
												<RadioGroup onChange={this.handleChange}>
													<Radio value={1}>
														<IntlMessages id="form.active" />
													</Radio>
													<Radio value={2}>
														<IntlMessages id="form.inactive" />
													</Radio>
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
											<Radio value={1}>
												<IntlMessages id="form.active" />
											</Radio>
											<Radio value={2}>
												<IntlMessages id="form.inactive" />
											</Radio>
										</RadioGroup>
									)}
								</FormItem>
							</Form>
						) : modalType === 'view' ? (
							<div>
								<div className="clearfix" />
								<div className="detailField clearfix">
									<label className="label">Full name:</label>
									<div className="contentDetail">
										{row && row.userdetail ? row.userdetail.full_name : ''}
									</div>
								</div>
								<div className="detailField clearfix">
									<label className="label">Phone:</label>
									<div className="contentDetail">{row ? row.phone : ''}</div>
								</div>
								<div className="detailField clearfix">
									<label className="label detailFieldFullBorder">Gender</label>
									<div className="contentDetail">
										{row && row.userdetail ? row.userdetail.gender === 1 ? (
											'Male'
										) : row.userdetail.gender === 2 ? (
											'Female'
										) : (
											''
										) : (
											''
										)}
									</div>
								</div>

								<div className="detailField clearfix">
									<label className="label detailFieldFullBorder">Address</label>
									<div className="contentDetail">
										{row && row.userdetail ? row.userdetail.address : ''}
									</div>
								</div>
								<div className="detailField clearfix">
									<label className="label detailFieldFullBorder">Birth day</label>
									<div className="contentDetail">
										{row && row.userdetail ? row.userdetail.birthday : ''}
									</div>
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
