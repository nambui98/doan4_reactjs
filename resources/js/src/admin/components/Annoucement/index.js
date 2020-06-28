/*
    Method Name: Annoucement
    Description: Add, update, delete,  search, refresh
    Author: Nam Nam
    Last Modified Author: Nam Nam
    Created Date: 20/02/2020
    Modified Date: 2/03/2020
*/

import React, { Component } from 'react';
import Modals from '../../../common/modal.style';
import WithDirection from '../../../settings/withDirection';
import isoModal from '../../../components/feedback/modal';
import moment from 'moment';
import { Radio, Input, Form, Button, Row, Col, Upload, Icon, DatePicker, Select } from 'antd';
import { TableWrapper } from '../../../common/control.style';
import DataWrapper from '../../../common/data.style';
import styleControl from '../../../common/styleControl';
import IntlMessages from '../../../components/utility/intlMessages';
import formItemLayout from '../../../helpers/formItem';
import helperFunc from '../../../helpers/helperFunc';
import { urlConfig } from '../../../settings';
import 'emoji-mart/css/emoji-mart.css';
import { Picker } from 'emoji-mart';
import { Smile } from 'react-feather';
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
			imagesStr: [],
			showEmojiPicker: false
		};
		this.handleChange = this.handleChange.bind(this);
	}
	componentWillReceiveProps(nextProps) {
		if (nextProps.modalType === 'none') {
			this.setState({
				isAdding: true,
				changed: false,
				imagesStr: [],
				showEmojiPicker: false
			});
			this.props.form.resetFields();
		}
	}

	//Disable or enable save button
	handleChange = (e) => {
		this.setState({
			changed: true
		});
	};
	//update images
	handleChangeImage = (e) => {
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
		this.setState({
			changed: true
		});
	};
	handleCancel = () => {
		this.setState({
			imagesStr: [],
			showEmojiPicker: false
		});
		this.props.handleCancel();
	};
	//open and close emojipicker
	toggleEmojiPicker = () => {
		this.setState({
			showEmojiPicker: !this.state.showEmojiPicker
		});
	};
	//add emoji
	addEmoji = (emoji) => {
		this.props.form.setFieldsValue({
			description: this.props.form.getFieldValue('description')
				? this.props.form.getFieldValue('description') + emoji.native
				: '' + emoji.native
		});
		this.setState({
			changed: true
		});
	};
	// disabled past days
	disabledDate = (current) => {
		const date = new Date();
		// Can not select days before today and today
		return current && current < moment(date).subtract(1, 'day').endOf('day');
	};
	render() {
		const { modalActive, modalType, row, newRow, handleSubmit, announcementType } = this.props;
		const { getFieldDecorator } = this.props.form;
		let listImage = [ ...new Set(this.state.imagesStr) ].join('##########');
		let fileList = [];
		const date = new Date();
		let images = [];
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
						row.announced_date = values.announced_date;
						row.announcement_type_id = values.announcement_type_id;
						row.title = values.title;
						row.description = values.description;
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
								listImage = values.image
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
		const dataSource = [];
		if (typeof newRow !== 'undefined' && newRow !== null) {
			Object.keys(newRow).map((rows, index) => {
				return dataSource.push({
					...newRow[rows],
					key: rows
				});
			});
		}
		const columns = [
			{
				title: 'User',
				dataIndex: 'admin',
				key: 'admin',
				render: (text, rows) => {
					return <b>{rows && rows.admin ? rows.admin.full_name : ''}</b>;
				}
			},
			{
				title: 'Announcement',
				dataIndex: 'announcement',
				key: 'announcement',
				width: 250,
				render: (text, rows) => {
					return <b>{rows && rows.announcement ? rows.announcement.title : ''}</b>;
				}
			},
			{
				title: 'Announcement type',
				dataIndex: 'announcement_type',
				key: 'announcement_type',
				width: 250,
				render: (text, rows) => {
					return (
						<b style={{ color: rows && rows.announcement_type ? rows.announcement_type.color : '' }}>
							{rows && rows.announcement_type ? rows.announcement_type.name : ''}
						</b>
					);
				}
			}
		];
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
				onCancel={this.handleCancel}
				cancelText={
					modalType === 'viewInfo' || modalType === 'viewUser' ? (
						<IntlMessages id="button.close" />
					) : (
						<IntlMessages id="button.cancel" />
					)
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
									display:
										modalType === 'view' || modalType === 'viewInfo' || modalType === 'viewUser'
											? 'none'
											: ''
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
							<Form className="isoCardInfoForm FormData">
								<Row>
									<Col className="ant-col-xl-24 ant-col-lg-24">
										<FormItem
											{...formItemLayout}
											label="Title"
											hasFeedback
											style={{ marginBottom: 10 + 'px' }}
										>
											{getFieldDecorator('title', {
												rules: [
													{
														required: true,
														message: 'Title is required'
													},

													{
														max: 200,
														message: <IntlMessages id="form.validate.max200" />
													}
												]
											})(<Input onChange={this.handleChange} />)}
										</FormItem>
										<FormItem
											{...formItemLayout}
											label="Announcement date"
											hasFeedback
											style={{ marginBottom: 10 + 'px' }}
										>
											{getFieldDecorator('announced_date', {
												initialValue: moment(date, helperFunc.dateFormat),
												rules: [
													{
														required: true,
														message: 'Announcement date is required'
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
											label={<span>Announcement Type</span>}
											hasFeedback
											style={{ marginBottom: 10 + 'px' }}
										>
											{getFieldDecorator('announcement_type_id', {
												initialValue: 2,
												rules: [
													{
														required: true,
														message: 'Announcement type is required'
													}
												]
											})(
												<Select
													placeholder="Select announcement type"
													onChange={this.handleChange}
													disabled
												>
													{!isNullOrUndefined(announcementType) ? (
														announcementType.map((value, index) => (
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
											style={{
												marginBottom: 10 + 'px',
												display: 'flex',
												justifyContent: 'flex-end'
											}}
										>
											{this.state.showEmojiPicker ? (
												<Picker
													set="emojione"
													style={{ width: 'auto' }}
													emojiTooltip={false}
													showPreview={false}
													showSkinTones={false}
													onSelect={this.addEmoji}
												/>
											) : null}
										</FormItem>
										<FormItem
											{...formItemLayout}
											style={{
												width: '100%',
												marginBottom: '10px',
												textAlign: 'left'
											}}
											label={<IntlMessages id="form.description" />}
										>
											<div style={{ width: 100 + '%', display: 'flex' }}>
												{getFieldDecorator('description', {
													rules: [
														{
															required: true,
															message: 'Description is required'
														}
													]
												})(
													<TextArea
														rows={3}
														style={{ width: 95 + '%' }}
														onChange={this.handleChange}
													/>
												)}
												<Button
													type="button"
													className="toggle-emoji"
													onClick={this.toggleEmojiPicker}
													style={{ height: 'auto', marginBottom: '4px', padding: '10px' }}
													//style={{width:5+"%", height:0,backgroundColor:"white",borderRadius: "10px"}}
												>
													<Smile />
												</Button>
											</div>
										</FormItem>
										<FormItem {...formItemLayout} label="Image" style={{ marginBottom: 10 + 'px' }}>
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
													//className= "upload-list-inline"
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
										<FormItem
											{...formItemLayout}
											label="Title"
											hasFeedback
											style={{ marginBottom: 10 + 'px' }}
										>
											{getFieldDecorator('title', {
												initialValue: row.title,
												rules: [
													{
														required: true,
														message: 'Title is required'
													},

													{
														max: 200,
														message: <IntlMessages id="form.validate.max200" />
													}
												]
											})(<Input onChange={this.handleChange} />)}
										</FormItem>
										<FormItem
											{...formItemLayout}
											label="Announcement date"
											hasFeedback
											style={{ marginBottom: 10 + 'px' }}
										>
											{getFieldDecorator('announced_date', {
												initialValue: row.announcement_date
													? moment(row.announcement_date, helperFunc.dateFormat)
													: null,
												rules: [
													{
														required: true,
														message: 'Announcement date is required'
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
											label={<span>Announcement Type</span>}
											hasFeedback
											style={{ marginBottom: 10 + 'px' }}
										>
											{getFieldDecorator('announcement_type_id', {
												initialValue:
													row && row.announcement_type_id ? row.announcement_type_id : null,
												rules: [
													{
														required: true,
														message: 'Announcement type is required'
													}
												]
											})(
												<Select
													placeholder="Select announcement type"
													onChange={this.handleChange}
												>
													{!isNullOrUndefined(announcementType) ? (
														announcementType.map((value, index) => (
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
											style={{
												marginBottom: 10 + 'px',
												display: 'flex',
												justifyContent: 'flex-end'
											}}
										>
											{this.state.showEmojiPicker ? (
												<Picker
													set="emojione"
													style={{ width: 'auto' }}
													emojiTooltip={false}
													showPreview={false}
													showSkinTones={false}
													onSelect={this.addEmoji}
												/>
											) : null}
										</FormItem>

										<FormItem
											{...formItemLayout}
											style={{
												width: '100%',
												marginBottom: '10px',
												textAlign: 'left'
											}}
											label={<IntlMessages id="form.description" />}
										>
											<div style={{ width: 100 + '%', display: 'flex' }}>
												{getFieldDecorator('description', {
													rules: [
														{
															required: true,
															message: 'Description is required'
														}
													],
													initialValue: row.description
												})(
													<TextArea
														rows={3}
														style={{ width: 95 + '%' }}
														onChange={this.handleChange}
													/>
												)}
												<Button
													type="button"
													className="toggle-emoji"
													onClick={this.toggleEmojiPicker}
													style={{ height: 'auto', marginBottom: '4px', padding: '10px' }}
													//style={{width:5+"%", height:0,backgroundColor:"white",borderRadius: "10px"}}
												>
													<Smile />
												</Button>
											</div>
										</FormItem>
										<FormItem {...formItemLayout} label="Image" style={{ marginBottom: 10 + 'px' }}>
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
						) : modalType === 'viewUser' ? (
							<div>
								<div className="clearfix" />
								<TableWrapper
									dataSource={dataSource}
									columns={columns}
									bordered={true}
									// pagination={false}
								/>
							</div>
						) : modalType === 'viewInfo' ? (
							<div className="clearfix">
								<div>
									<div className="clearfix" />
									<div className="detailField clearfix">
										<label className="label">User</label>
										<div className="contentDetail">
											{row && row.admin ? row.admin.full_name : ''}
										</div>
									</div>
									<div className="detailField clearfix">
										<label className="label">Title</label>
										<div className="contentDetail">{row ? row.title : ''}</div>
									</div>

									<div className="detailField clearfix">
										<label className="label detailFieldFullBorder">Type</label>
										<div className="contentDetail">
											{row && row.announcement_type ? row.announcement_type.name : ''}
										</div>
									</div>

									<div className="detailField clearfix">
										<label className="label detailFieldFullBorder">Date</label>
										<div className="contentDetail">
											{row && row.announcement_date ? (
												moment(row.announcement_date).format('DD/MM/YYYY')
											) : (
												''
											)}
										</div>
									</div>
									<div className="detailField clearfix">
										<label className="label detailFieldFullBorder">Created at</label>
										<div className="contentDetail">
											{row && row.created_at ? (
												moment(row.created_at).format('DD/MM/YYYY HH:mm:ss')
											) : (
												''
											)}
										</div>
									</div>
								</div>
								<div>
									<label style={{ fontWeight: 'bold', padding: '0 7px' }}>Description:</label>
								</div>
								<div style={{ fontWeight: '500', padding: '7px 7px' }}>
									{row ? row.description : ''}
								</div>

								{images.map((image, index) => [
									<img
										alt=""
										key={index}
										style={{ width: '100%', margin: '4px 0' }}
										src={urlConfig.imageUrl + image}
									/>,
									<br key={index + images.length} />
								])}
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
