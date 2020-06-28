/*
    Method Name: Incidents
    Description: Add, update, delete,  search, refresh
    Author: Nam Nam
    Last Modified Author: Nam Nam
    Created Date: 20/02/2020
    Modified Date: 2/03/2020
*/

import { Button, Col, DatePicker, Form, Icon, Input, Radio, Row, Select, Upload } from 'antd';
import moment from 'moment';
import React, { Component } from 'react';
import { isNullOrUndefined } from 'util';
import DataWrapper from '../../../common/data.style';
import Modals from '../../../common/modal.style';
import styleControl from '../../../common/styleControl';
import isoModal from '../../../components/feedback/modal';
import IntlMessages from '../../../components/utility/intlMessages';
import formItemLayout from '../../../helpers/formItem';
import helperFunc from '../../../helpers/helperFunc';
import { urlConfig } from '../../../settings';
import WithDirection from '../../../settings/withDirection';

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
			imagesStr: [],
			isImage: false
		};
		this.handleChange = this.handleChange.bind(this);
	}
	componentWillReceiveProps(nextProps) {
		if (nextProps.modalType === 'none') {
			this.setState({
				isAdding: true,
				changed: false,
				imagesStr: [],
				isImage: false
			});
			this.props.form.resetFields();
		}
	}
	//cập nhật isImage khi mở form update để hiện image
	componentWillUpdate(prevProps) {
		if (prevProps.modalType === helperFunc.modeType.Update && this.props.row !== prevProps.row) {
			this.setState({
				isImage: prevProps.row.is_image === 2 ? false : true
			});
		}
	}
	//Disable or enable save button
	handleChange = (e) => {
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
					this.setState({
						imagesStr: this.state.imagesStr.filter((item) => item !== str)
					});
				} else {
					this.setState({ imagesStr: [ ...this.state.imagesStr, str ] });
				}
			});
		}
	};
	handleChangeIsImage = (e) => {
		this.setState({
			changed: true,
			isImage: e.target.value === 1 ? true : false
		});
	};
	handleCancel = () => {
		this.setState({
			imagesStr: [],
			isImage: true,
			dateTimeIncident: '',
			dateTimeReport: ''
		});
		this.props.handleCancel();
	};
	// range=(start, end)=> {
	//   const result = [];
	//   for (let i = start; i < end; i++) {
	//     result.push(i);
	//   }
	//   return result;
	// }
	// disabledDateTime=()=> {
	//   return {
	//     disabledHours: () => this.range(0, 24).splice(0, moment().get('hours')),
	//     disabledMinutes: () => this.range(0, 60).splice(0, moment().get('minutes')),
	//     disabledSeconds: () => [0, 60].splice(0, moment().get('seconds')),
	//   };
	// }
	// disabledDate=(current)=>{
	//   const date=new Date()
	//     // Can not select days before today and today
	//   return current && current < moment(date).subtract(1, 'day').endOf('day');
	// }
	// onOk=(value, dateString)=> {
	//   console.log('onOk: ', value);
	//   const date=new Date(value._d)
	//   console.log(moment(date).format('YYYY-MM-DD HH:mm:ss'))
	//   console.log(date)

	// }

	render() {
		const { modalActive, modalType, row, handleSubmit, incidentDataInit } = this.props;
		const { getFieldDecorator } = this.props.form;
		let listImage = [ ...new Set(this.state.imagesStr) ].join('##########');
		const date = new Date();
		let fileList = [];
		let images = '';
		if (row.images) {
			images = row.images.split('##########').slice(0, row.images.split('##########').length - 1);
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
						row.is_any_injury = values.is_any_injury;
						row.is_SAS_report = values.is_SAS_report;
						row.is_image = values.is_image;
						row.reported_on = moment.utc(values.reported_on).format('YYYY-MM-DD HH:mm:ss');
						row.incident_date = moment.utc(values.incident_date).format('YYYY-MM-DD HH:mm:ss');
						row.description = values.description;
						row.incident_damages_id = values.incident_damages_id;
						row.incident_type_id = values.incident_type_id;
						row.incident_severity_id = values.incident_severity_id;

						let baseImage = '';
						if (modalType === 'insert') {
							row.incident_severity_id = 6;
							let imagesStr = '';
							//console.log(values, this.state.isImage)
							if (this.state.isImage && values.image) {
								// console.log("vao day")
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
									values.is_image === 1
										? values.image.reduce((total, num) => {
												if (num.url) {
													return total + num.url + '##########';
												} else {
													return total + '';
												}
											}, '') + listImage
										: '';
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
											<FormItem {...formItemLayout} label="Is any injury">
												{getFieldDecorator('is_any_injury', {
													initialValue: 1,
													rules: [
														{
															required: true,
															message: 'Is any injury is required'
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
												label={<span>Incident Type</span>}
												hasFeedback
												style={{ marginBottom: 10 + 'px' }}
											>
												{getFieldDecorator('incident_type_id', {
													rules: [
														{
															required: true,
															message: 'Incident type is required'
														}
													]
												})(
													<Select
														placeholder="Select incident type"
														onChange={this.handleChange}
													>
														{!isNullOrUndefined(incidentDataInit.incidentTypes) ? (
															incidentDataInit.incidentTypes.map((value, index) => (
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
											<FormItem {...formItemLayout} label="Is image">
												{getFieldDecorator('is_image', {
													initialValue: 2,
													rules: [
														{
															required: true,
															message: 'Is image is required'
														}
													]
												})(
													<RadioGroup onChange={this.handleChangeIsImage}>
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
												label={<span>Incident damages</span>}
												hasFeedback
												style={{ marginBottom: 10 + 'px' }}
											>
												{getFieldDecorator('incident_damages_id', {
													rules: [
														{
															required: true,
															message: 'Incident damages is required'
														}
													]
												})(
													<Select
														placeholder="Select Incident damages"
														onChange={this.handleChange}
													>
														{!isNullOrUndefined(incidentDataInit.incidentDamages) ? (
															incidentDataInit.incidentDamages.map((value, index) => (
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
											<FormItem {...formItemLayout} label="Is SAS report">
												{getFieldDecorator('is_SAS_report', {
													initialValue: 1,
													rules: [
														{
															required: true,
															message: 'Is SAS report is required'
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
									<Col className="ant-col-xl-12 ant-col-lg-24">
										<div className="RightSideContent" style={{ width: '100%' }}>
											<FormItem
												{...formItemLayout}
												label="Reported on"
												hasFeedback
												style={{ marginBottom: 10 + 'px' }}
											>
												{getFieldDecorator('reported_on', {
													initialValue: moment(date, helperFunc.dateFormat)
												})(
													<DatePicker
														format="YYYY/MM/DD HH:mm:ss"
														disabledDate={this.disabledDate}
														disabledTime={this.disabledDateTime}
														disabled
														allowClear={false}
														onChange={this.handleChange}
														showTime={{
															defaultValue: moment(date, 'HH:mm:ss')
														}}
													/>
												)}
											</FormItem>

											<FormItem
												{...formItemLayout}
												label="Incident datetime"
												hasFeedback
												style={{ marginBottom: 10 + 'px' }}
											>
												{getFieldDecorator('incident_date', {
													rules: [
														{
															required: true,
															message: 'Incident datetime is required'
														}
													]
												})(
													<DatePicker
														format="YYYY/MM/DD HH:mm:ss"
														disabledDate={this.disabledDate}
														disabledTime={this.disabledDateTime}
														// allowClear={false}
														onChange={this.onChangeDate}
														showTime={{
															defaultValue: moment(date, 'HH:mm:ss')
														}}
														onOk={this.onOk}
													/>
												)}
											</FormItem>

											{this.state.isImage === true ? (
												<FormItem
													{...formItemLayout}
													label="Image"
													style={{ marginBottom: 10 + 'px' }}
												>
													{getFieldDecorator('image', {
														valuePropName: 'fileList',
														getValueFromEvent: normFile,
														rules: [
															{
																required: true,
																message: 'Image is required'
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
											) : (
												''
											)}
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
														// {
														//   min: 8,
														//   message: "Minimum 8 characters long"
														// }
													]
												})(<TextArea rows={3} onChange={this.handleChange} />)}
											</FormItem>
											{/* <FormItem
                          {...formItemLayout}
                          label="Action plan"
                          hasFeedback
                          style={{ marginBottom: 10 + "px" }}
                        >
                          {getFieldDecorator("action_plan", {
                            initialValue: null,
                            rules: [
                              {
                                required: true,
                                message: "Action plan is required"
                              },
                              {
                                min: 8,
                                message:"Minimum 8 characters long"
                              }
                            ]
                          })(<TextArea rows={3} onChange={this.handleChange} />)}
                        </FormItem> */}
											{/* {localStorage.getItem("type") === "1" ? (
                        <FormItem
                          {...formItemLayout}
                          label={<span>Incident Severity</span>}
                          hasFeedback
                          style={{ marginBottom: 10 + "px" }}
                        >
                          {getFieldDecorator("incident_severity_id", {
                            rules: [
                              {
                                required: true,
                                message: "Incident Severity is required"
                              }
                            ]
                          })(
                            <Select
                              placeholder="Select incident severity"
                              onChange={this.handleChange}
                            >
                              {!isNullOrUndefined(
                                incidentDataInit.incidentSeverities
                              )
                                ? incidentDataInit.incidentSeverities.map(
                                    (value, index) => (
                                      <Option key={index} value={value.id}>
                                        {value.name}
                                      </Option>
                                    )
                                  )
                                : ""}
                            </Select>
                          )}
                        </FormItem>
                      ) : (
                        ""
                      )} */}
										</div>
									</Col>
								</Row>
							</Form>
						) : modalType === 'edit' ? (
							<Form className="isoCardInfoForm FormData">
								<Row>
									<Col className="ant-col-xl-12 ant-col-lg-24">
										<div className="LeftSideContent" style={{ width: '100%' }}>
											<FormItem {...formItemLayout} label="Is any injury">
												{getFieldDecorator('is_any_injury', {
													initialValue: row && row.is_any_injury ? row.is_any_injury : null,
													rules: [
														{
															required: true,
															message: 'Is any injury is required'
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
												label={<span>Incident Type</span>}
												hasFeedback
												style={{ marginBottom: 10 + 'px' }}
											>
												{getFieldDecorator('incident_type_id', {
													initialValue: row.incident_type_id,
													rules: [
														{
															required: true,
															message: 'Incident type is required'
														}
													]
												})(
													<Select
														placeholder="Select incident type"
														onChange={this.handleChange}
													>
														{!isNullOrUndefined(incidentDataInit.incidentTypes) ? (
															incidentDataInit.incidentTypes.map((value, index) => (
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
											<FormItem {...formItemLayout} label="Is image">
												{getFieldDecorator('is_image', {
													initialValue: row && row.is_image ? row.is_image : null,
													rules: [
														{
															required: true,
															message: 'Is image is required'
														}
													]
												})(
													<RadioGroup onChange={this.handleChangeIsImage}>
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
												label={<span>Incident damages</span>}
												hasFeedback
												style={{ marginBottom: 10 + 'px' }}
											>
												{getFieldDecorator('incident_damages_id', {
													initialValue:
														row && row.incident_damages_id ? row.incident_damages_id : null,
													rules: [
														{
															required: true,
															message: 'Incident damages is required'
														}
													]
												})(
													<Select
														placeholder="Select Incident damages"
														onChange={this.handleChange}
													>
														{!isNullOrUndefined(incidentDataInit.incidentDamages) ? (
															incidentDataInit.incidentDamages.map((value, index) => (
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
											<FormItem {...formItemLayout} label="Is SAS report">
												{getFieldDecorator('is_SAS_report', {
													initialValue: row && row.is_SAS_report ? row.is_SAS_report : null,
													rules: [
														{
															required: true,
															message: 'Is SAS report is required'
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
									<Col className="ant-col-xl-12 ant-col-lg-24">
										<div className="RightSideContent" style={{ width: '100%' }}>
											<FormItem
												{...formItemLayout}
												label="Reported date"
												hasFeedback
												style={{ marginBottom: 10 + 'px' }}
											>
												{getFieldDecorator('reported_on', {
													initialValue: row.reported_on
														? moment(row.reported_on, 'YYYY/MM/DD HH:mm:ss')
														: null,
													rules: [
														{
															required: true,
															message: 'Reported date is required'
														}
													]
												})(
													<DatePicker
														format="YYYY/MM/DD HH:mm:ss"
														disabledDate={this.disabledDate}
														disabledTime={this.disabledDateTime}
														allowClear={false}
														onChange={this.handleChange}
														showTime={{
															defaultValue: moment(date, 'HH:mm:ss')
														}}
													/>
												)}
											</FormItem>
											<FormItem
												{...formItemLayout}
												label="Incident date"
												hasFeedback
												style={{ marginBottom: 10 + 'px' }}
											>
												{getFieldDecorator('incident_date', {
													initialValue: row.incident_date
														? moment(row.incident_date, 'YYYY/MM/DD HH:mm:ss')
														: null,
													rules: [
														{
															required: true,
															message: 'Incident date is required'
														}
													]
												})(
													<DatePicker
														format="YYYY/MM/DD HH:mm:ss"
														disabledDate={this.disabledDate}
														disabledTime={this.disabledDateTime}
														allowClear={false}
														onChange={this.handleChange}
														showTime={{
															defaultValue: moment(date, 'HH:mm:ss')
														}}
													/>
												)}
											</FormItem>
											{this.state.isImage ? (
												<FormItem
													{...formItemLayout}
													label="Image"
													style={{ marginBottom: 10 + 'px' }}
												>
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
															onChange={this.handleChangeImage}
														>
															<Button>
																<Icon type="upload" /> <IntlMessages id="form.upload" />
															</Button>
														</Upload>
													)}
												</FormItem>
											) : (
												''
											)}
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
											{localStorage.getItem('type') === '1' ? (
												<FormItem
													{...formItemLayout}
													label={<span>Incident Severity</span>}
													hasFeedback
													style={{ marginBottom: 10 + 'px' }}
												>
													{getFieldDecorator('incident_severity_id', {
														initialValue: row.incident_severity_id,
														rules: [
															{
																required: true,
																message: 'Incident Severity is required'
															}
														]
													})(
														<Select
															placeholder="Select incident severity"
															onChange={this.handleChange}
														>
															{!isNullOrUndefined(incidentDataInit.incidentSeverities) ? (
																incidentDataInit.incidentSeverities.map(
																	(value, index) => (
																		<Option key={index} value={value.id}>
																			{value.name}
																		</Option>
																	)
																)
															) : (
																''
															)}
														</Select>
													)}
												</FormItem>
											) : (
												''
											)}

											{/* <FormItem {...formItemLayout} label="Status">
                          {getFieldDecorator("status", { initialValue: row?row.status:"" })(
                            <RadioGroup onChange={this.handleChange}>
                              <Radio value={1}>
                                <IntlMessages id="form.active" />
                              </Radio>
                              <Radio value={2}>
                                <IntlMessages id="form.inactive" />
                              </Radio>
                            </RadioGroup>
                          )}
                        </FormItem> */}
										</div>
									</Col>
								</Row>
							</Form>
						) : modalType === 'changeStatus' ? (
							<Form className="FormData">
								<FormItem {...formItemLayout} label="Status">
									{getFieldDecorator('status', {
										initialValue: row ? row.status : ''
									})(
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
											Is any injury:
										</label>
										<div className="contentDetail" style={{ width: '67%' }}>
											{row && row.is_any_injury === 1 ? 'Yes' : 'No'}
										</div>
									</div>
									<div className="detailField clearfix">
										<label className="label" style={{ width: '33%' }}>
											Is SAS Report:
										</label>
										<div className="contentDetail" style={{ width: '67%' }}>
											{row && row.is_SAS_report === 1 ? 'Yes' : 'No'}
										</div>
									</div>
									<div className="detailField clearfix">
										<label className="label" style={{ width: '33%' }}>
											Reported on
										</label>
										<div className="contentDetail" style={{ width: '67%' }}>
											{row && row.reported_on ? (
												moment(row.reported_on).format('MM/DD/YYYY HH:mm:ss')
											) : (
												''
											)}
										</div>
									</div>

									<div className="detailField clearfix">
										<label className="label" style={{ width: '33%' }}>
											Incident date
										</label>
										<div className="contentDetail" style={{ width: '67%' }}>
											{row && row.incident_date ? (
												moment(row.incident_date).format('MM/DD/YYYY HH:mm:ss')
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
											Incident Damage:
										</label>
										<div className="contentDetail" style={{ width: '67%' }}>
											{row && row.incident_damage ? row.incident_damage.name : ''}
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
								<div className="FullSideContent">
									<div className="contentDetail" style={{ borderLeft: 'none', width: '100%' }}>
										<div style={{ fontWeight: 'bold', padding: '0 7px' }}>Images:</div>
										<div style={{ width: '100%' }}>
											{images ? (
												images.map((image, index) => [
													<img
														key={index}
														style={{ width: '45%', margin: '4px 4px' }}
														alt={row.name}
														src={urlConfig.imageUrl + image}
													/>
												])
											) : (
												''
											)}
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
