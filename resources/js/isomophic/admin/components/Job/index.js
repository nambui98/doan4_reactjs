/*
    Method Name: Job
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
import { Radio, Input, Form, Button, Row, Col, Upload, Icon, DatePicker, Select } from 'antd';
import DataWrapper from '../../../common/data.style';
import styleControl from '../../../common/styleControl';
import IntlMessages from '../../../components/utility/intlMessages';
import formItemLayout from '../../../helpers/formItem';
import helperFunc from '../../../helpers/helperFunc';
import { urlConfig } from '../../../settings';
import { isNullOrUndefined } from 'util';

const { dummyRequest, beforeUpload, getBase64 } = helperFunc;
const { Option } = Select;
const WDModal = Modals(isoModal);
const Modal = WithDirection(WDModal);
const FormItem = Form.Item;
const RadioGroup = Radio.Group;
const { TextArea } = Input;
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
			imagesStr: []
		};
		this.handleChange = this.handleChange.bind(this);
	}
	componentWillReceiveProps(nextProps) {
		console.log(nextProps.modalType);
		if (nextProps.modalType === 'none') {
			console.log(this.props.form);
			this.setState({
				isAdding: true,
				changed: false,
				imagesStr: []
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
	//update list image
	handleChangeImage = (e) => {
		this.setState({
			changed: true
		});
		if (typeof e.file.url === 'undefined') {
			getBase64(e.file.originFileObj, (result) => {
				let str = result.replace(/^data:image\/[a-z]+;base64,/, '');
				if (e.file.status === 'removed') {
					this.setState({ imagesStr: this.state.imagesStr.filter((item) => item !== str) });
				} else {
					this.setState({ imagesStr: [ ...this.state.imagesStr, str ] });
				}
			});
		}
	};
	handleCancel = () => {
		this.setState({
			imagesStr: []
		});
		this.props.handleCancel();
	};
	render() {
		const { modalActive, modalType, row, handleSubmit, jobType, jobSite } = this.props;
		const { getFieldDecorator } = this.props.form;
		let listImage = [ ...new Set(this.state.imagesStr) ].join('##########');
		let fileList = [];
		if (row.images) {
			let images = row.images.split('##########').slice(0, row.images.split('##########').length - 1);
			images.forEach((image, index) =>
				fileList.push({
					uid: index,
					name: '',
					status: 'done',
					url: image,
					thumbUrl: urlConfig.imageUrl + image
				})
			);
		}
		const normFile = (e) => {
			if (Array.isArray(e)) {
				return e;
			}
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
					} else {
						row.is_job_done = values.is_job_done;
						row.is_job_briefed = values.is_job_briefed;
						row.hazard = values.hazard;
						row.ra = values.ra;
						row.is_rish_mitigate = values.is_rish_mitigate;
						row.description = values.description;
						row.job_date = values.job_date;
						row.job_site_id = values.job_site_id;
						row.job_type_id = values.job_type_id;
						row.status = modalType === 'insert' ? 1 : values.status;
						let baseImage = '';
						if (modalType === 'insert') {
							let imagesStr = '';
							if (values.image) {
								for (let i = 0; i < values.image.length; i++) {
									// eslint-disable-next-line
									getBase64(values.image[i].originFileObj, (result) => {
										baseImage = result;
										let str = baseImage.replace(/^data:image\/[a-z]+;base64,/, '');
										if (i !== 0) {
											imagesStr += '##########' + str;
										} else {
											imagesStr = str;
										}
										if (i === values.image.length - 1) {
											row.images = imagesStr;
											handleSubmit(modalType, row);
										}
									});
								}
							} else {
								handleSubmit(modalType, row);
							}
						} else if (modalType === 'edit') {
							if (values.image) {
								listImage =
									values.image.reduce((total, num) => {
										if (num.url) {
											return total + num.url + '##########';
										} else {
											return total + '';
										}
									}, '') + listImage;
								row.images = listImage;
							}

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
				width={window.innerWidth > 1100 ? modalType === 'ChangeStatus' ? 30 + '%' : 70 + '%' : '100%'}
				visible={modalActive}
				onCancel={this.handleCancel}
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
								onClick={this.handleCancel}
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
								onClick={this.handleCancel}
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
							<Form className=" FormData">
								<Row>
									<Col className="ant-col-xl-12 ant-col-lg-24">
										<div className="LeftSideContent" style={{ width: '100%' }}>
											<FormItem
												{...formItemLayout}
												label={<span>Job Site</span>}
												hasFeedback
												style={{ marginBottom: 10 + 'px' }}
											>
												{getFieldDecorator('job_site_id', {
													initialValue: null,
													rules: [
														{
															required: true,
															message: 'Job site is required'
														}
													]
												})(
													<Select placeholder="Select job site" onChange={this.handleChange}>
														{!isNullOrUndefined(jobSite) ? (
															jobSite.map((value, index) => (
																<Option key={index} value={value.id}>
																	{value.name}
																</Option>
															))
														) : (
															''
														)}
													</Select>
												)}
											</FormItem>
											<FormItem
												{...formItemLayout}
												label={<span>Job Type</span>}
												hasFeedback
												style={{ marginBottom: 10 + 'px' }}
											>
												{getFieldDecorator('job_type_id', {
													initialValue: null,
													rules: [
														{
															required: true,
															message: 'Job type is required'
														}
													]
												})(
													<Select placeholder="Select job type" onChange={this.handleChange}>
														{!isNullOrUndefined(jobType) ? (
															jobType.map((value, index) => (
																<Option key={index} value={value.id}>
																	{value.name}
																</Option>
															))
														) : (
															''
														)}
													</Select>
												)}
											</FormItem>
											<FormItem {...formItemLayout} label="Is job done">
												{getFieldDecorator('is_job_done', {
													initialValue: 1,
													rules: [
														{
															required: true,
															message: 'Job done is required'
														}
													]
												})(
													<RadioGroup onChange={this.handleChange}>
														<Radio value={1}>
															<IntlMessages id="text.yes" />
														</Radio>
														<Radio value={2}>
															<IntlMessages id="text.no" />
														</Radio>
													</RadioGroup>
												)}
											</FormItem>
											<FormItem {...formItemLayout} label="Is job briefed">
												{getFieldDecorator('is_job_briefed', {
													initialValue: 1,
													rules: [
														{
															required: true,
															message: 'Job briefed is required'
														}
													]
												})(
													<RadioGroup onChange={this.handleChange}>
														<Radio value={1}>
															<IntlMessages id="text.yes" />
														</Radio>
														<Radio value={2}>
															<IntlMessages id="text.no" />
														</Radio>
													</RadioGroup>
												)}
											</FormItem>
											<FormItem
												{...formItemLayout}
												label="Hazard"
												hasFeedback
												style={{ marginBottom: 10 + 'px' }}
											>
												{getFieldDecorator('hazard', {
													initialValue: null,
													rules: [
														{
															required: true,
															message: 'Hazard is required'
														},
														{
															max: 500,
															message: <IntlMessages id="form.validate.max500" />
														}
													]
												})(<Input onChange={this.handleChange} />)}
											</FormItem>
											<FormItem
												{...formItemLayout}
												label="RA"
												hasFeedback
												style={{ marginBottom: 10 + 'px' }}
											>
												{getFieldDecorator('ra', {
													initialValue: null,
													rules: [
														{
															required: true,
															message: 'Ra is required'
														},
														{
															max: 500,
															message: <IntlMessages id="form.validate.max500" />
														}
													]
												})(<Input onChange={this.handleChange} />)}
											</FormItem>
										</div>
									</Col>
									<Col className="ant-col-xl-12 ant-col-lg-24">
										<div className="RightSideContent" style={{ width: '100%' }}>
											<FormItem
												{...formItemLayout}
												label="Job date"
												hasFeedback
												style={{ marginBottom: 10 + 'px' }}
											>
												{getFieldDecorator('job_date', {
													initialValue: null,
													rules: [
														{
															required: true,
															message: 'Job date is required'
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
												})(<TextArea rows={3} onChange={this.handleChange} />)}
											</FormItem>

											<FormItem
												{...formItemLayout}
												label="Image"
												style={{ marginBottom: 10 + 'px' }}
											>
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
											<FormItem {...formItemLayout} label="Is risk mitigate">
												{getFieldDecorator('is_rish_mitigate', {
													initialValue: 1,
													rules: [
														{
															required: true,
															message: 'Risk mitigate is required'
														}
													]
												})(
													<RadioGroup onChange={this.handleChange}>
														<Radio value={1}>
															<IntlMessages id="text.yes" />
														</Radio>
														<Radio value={2}>
															<IntlMessages id="text.no" />
														</Radio>
													</RadioGroup>
												)}
											</FormItem>
										</div>
									</Col>
								</Row>
							</Form>
						) : modalType === 'edit' ? (
							<Form className="isoCardInfoForm FormData">
								<Row>
									<Col className="ant-col-xl-12 ant-col-lg-24">
										<div className="LeftSideContent" style={{ width: '100%' }}>
											<FormItem
												{...formItemLayout}
												label={<span>Job Site</span>}
												hasFeedback
												style={{ marginBottom: 10 + 'px' }}
											>
												{getFieldDecorator('job_site_id', {
													initialValue: row && row.job_site_id ? row.job_site_id : null,
													rules: [
														{
															required: true,
															message: 'Job site is required'
														}
													]
												})(
													<Select placeholder="Select job site" onChange={this.handleChange}>
														{!isNullOrUndefined(jobSite) ? (
															jobSite.map((value, index) => (
																<Option key={index} value={value.id}>
																	{value.name}
																</Option>
															))
														) : (
															''
														)}
													</Select>
												)}
											</FormItem>
											<FormItem
												{...formItemLayout}
												label={<span>Job Type</span>}
												hasFeedback
												style={{ marginBottom: 10 + 'px' }}
											>
												{getFieldDecorator('job_type_id', {
													initialValue: row && row.job_type_id ? row.job_type_id : null,
													rules: [
														{
															required: true,
															message: 'Job type is required'
														}
													]
												})(
													<Select placeholder="Select job type" onChange={this.handleChange}>
														{!isNullOrUndefined(jobType) ? (
															jobType.map((value, index) => (
																<Option key={index} value={value.id}>
																	{value.name}
																</Option>
															))
														) : (
															''
														)}
													</Select>
												)}
											</FormItem>
											<FormItem {...formItemLayout} label="Is job done">
												{getFieldDecorator('is_job_done', {
													initialValue: row && row.is_job_done ? row.is_job_done : null,
													rules: [
														{
															required: true,
															message: 'Job done is required'
														}
													]
												})(
													<RadioGroup onChange={this.handleChange}>
														<Radio value={1}>
															<IntlMessages id="text.yes" />
														</Radio>
														<Radio value={2}>
															<IntlMessages id="text.no" />
														</Radio>
													</RadioGroup>
												)}
											</FormItem>
											<FormItem {...formItemLayout} label="Is job briefed">
												{getFieldDecorator('is_job_briefed', {
													initialValue: row && row.is_job_briefed ? row.is_job_briefed : null,
													rules: [
														{
															required: true,
															message: 'Job briefed is required'
														}
													]
												})(
													<RadioGroup onChange={this.handleChange}>
														<Radio value={1}>
															<IntlMessages id="text.yes" />
														</Radio>
														<Radio value={2}>
															<IntlMessages id="text.no" />
														</Radio>
													</RadioGroup>
												)}
											</FormItem>
											<FormItem
												{...formItemLayout}
												label="Hazard"
												hasFeedback
												style={{ marginBottom: 10 + 'px' }}
											>
												{getFieldDecorator('hazard', {
													initialValue: row && row.hazard ? row.hazard : null,
													rules: [
														{
															required: true,
															message: 'Hazard is required'
														},
														{
															max: 500,
															message: <IntlMessages id="form.validate.max500" />
														}
													]
												})(<Input onChange={this.handleChange} />)}
											</FormItem>
											<FormItem
												{...formItemLayout}
												label="RA"
												hasFeedback
												style={{ marginBottom: 10 + 'px' }}
											>
												{getFieldDecorator('ra', {
													initialValue: row && row.ra ? row.ra : null,
													rules: [
														{
															required: true,
															message: 'Ra is required'
														},
														{
															max: 500,
															message: <IntlMessages id="form.validate.max500" />
														}
													]
												})(<Input onChange={this.handleChange} />)}
											</FormItem>
										</div>
									</Col>
									<Col className="ant-col-xl-12 ant-col-lg-24">
										<div className="RightSideContent" style={{ width: '100%' }}>
											<FormItem
												{...formItemLayout}
												label="Job date"
												hasFeedback
												style={{ marginBottom: 10 + 'px' }}
											>
												{getFieldDecorator('job_date', {
													initialValue: row.job_date
														? moment(row.job_date, helperFunc.dateFormat)
														: null,
													rules: [
														{
															required: true,
															message: 'Job date is required'
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
											<FormItem
												{...formItemLayout}
												label="Description"
												hasFeedback
												style={{ marginBottom: 10 + 'px' }}
											>
												{getFieldDecorator('description', {
													initialValue: row && row.description ? row.description : null,
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
												})(<TextArea rows={3} onChange={this.handleChange} />)}
											</FormItem>

											<FormItem
												{...formItemLayout}
												label="Image"
												style={{ marginBottom: 10 + 'px' }}
											>
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
														name="image"
														customRequest={dummyRequest}
														listType="picture"
														accept="image/png, image/jpeg"
														beforeUpload={beforeUpload}
														onChange={this.handleChangeImage}
													>
														<Button>
															<Icon type="upload" /> <IntlMessages id="form.upload" />
														</Button>
													</Upload>
												)}
											</FormItem>
											<FormItem {...formItemLayout} label="Is risk mitigate">
												{getFieldDecorator('is_rish_mitigate', {
													initialValue:
														row && row.is_rish_mitigate ? row.is_rish_mitigate : null,
													rules: [
														{
															required: true,
															message: 'Rish mitigate is required'
														}
													]
												})(
													<RadioGroup onChange={this.handleChange}>
														<Radio value={1}>
															<IntlMessages id="text.yes" />
														</Radio>
														<Radio value={2}>
															<IntlMessages id="text.no" />
														</Radio>
													</RadioGroup>
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
										</div>
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
								<div className="LeftSideContent">
									<div className="detailField clearfix">
										<label className="label" style={{ width: '33%' }}>
											Name:
										</label>
										<div className="contentDetail" style={{ width: '67%' }}>
											{row && row.name ? row.name : ''}
										</div>
									</div>
									<div className="detailField clearfix">
										<label className="label" style={{ width: '33%' }}>
											Location:
										</label>
										<div className="contentDetail" style={{ width: '67%' }}>
											{row ? row.location : ''}
										</div>
									</div>
									<div className="detailField clearfix">
										<label className="label" style={{ width: '33%' }}>
											Reported on
										</label>
										<div className="contentDetail" style={{ width: '67%' }}>
											{row && row.reported_on ? moment(row.reported_on).format('MM/DD/YYYY') : ''}
										</div>
									</div>

									<div className="detailField clearfix">
										<label className="label" style={{ width: '33%' }}>
											Incident date
										</label>
										<div className="contentDetail" style={{ width: '67%' }}>
											{row && row.incident_date ? (
												moment(row.incident_date).format('MM/DD/YYYY')
											) : (
												''
											)}
										</div>
									</div>
									<div className="detailField clearfix">
										<label className="label" style={{ width: '33%' }}>
											Description:
										</label>
										<div className="contentDetail" style={{ width: '67%' }}>
											{row ? row.description : ''}
										</div>
									</div>
								</div>
								<div className="RightSideContent">
									<div className="detailField clearfix">
										<label className="label" style={{ width: '33%' }}>
											Action plan:
										</label>
										<div className="contentDetail" style={{ width: '67%' }}>
											{row ? row.action_plan : ''}
										</div>
									</div>
									<div className="detailField clearfix">
										<label className="label" style={{ width: '33%' }}>
											Incident type:
										</label>
										<div className="contentDetail" style={{ width: '67%' }}>
											{row && row.incident_type ? row.incident_type.name : ''}
										</div>
									</div>
									<div className="detailField clearfix">
										<label className="label" style={{ width: '33%' }}>
											Incident severity:
										</label>
										<div className="contentDetail" style={{ width: '67%' }}>
											{row && row.incident_severity ? row.incident_severity.name : ''}
										</div>
									</div>
									<div className="detailField clearfix">
										<label className="label" style={{ width: '33%' }}>
											Created at
										</label>
										<div className="contentDetail" style={{ width: '67%' }}>
											{row ? moment(row.created_at).format('MM/DD/YYYY') : ''}
										</div>
									</div>
									<div className="detailField clearfix">
										<label className="label" style={{ width: '33%' }}>
											Updated at
										</label>
										<div className="contentDetail" style={{ width: '67%' }}>
											{row ? moment(row.updated_at).format('MM/DD/YYYY') : ''}
										</div>
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
