/*
    Method Name: Incident Damages
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
import { EditorState, convertToRaw, ContentState } from 'draft-js';
import draftToHtml from 'draftjs-to-html';
import htmlToDraft from 'html-to-draftjs';
import moment from 'moment';
import { isNullOrUndefined } from 'util';
import { Editor } from 'react-draft-wysiwyg';
import '../../../../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

import { Radio, Input, Form, Button, Row, Col, Select, Upload, Icon } from 'antd';
import DataWrapper from '../../../common/data.style';
import styleControl from '../../../common/styleControl';
import IntlMessages from '../../../components/utility/intlMessages';
import formItemLayout from '../../../helpers/formItem';
import helperFunc from '../../../helpers/helperFunc';
// import htmlToDraft from 'html-to-draftjs';

const { dummyRequest, beforeUpload, getBase64 } = helperFunc;
import { dataConfig, urlConfig } from '../../../settings/index';

const WDModal = Modals(isoModal);
const Modal = WithDirection(WDModal);
const FormItem = Form.Item;
const RadioGroup = Radio.Group;
const { Option } = Select;
const { TextArea } = Input;
const blocksFromHTML1 = htmlToDraft('');
const content = ContentState.createFromBlockArray(blocksFromHTML1);
class ModalFormAccount extends Component {
	constructor(props) {
		super(props);
		let editorState = EditorState.createWithContent(content);
		if (props.content != null && typeof props.content !== 'undefined' && props.content !== '') {
			let content = props.content;
			if (props.content.startsWith('<img')) {
				content = '<p></p>' + props.content;
			}
			const blocksFromHtml = htmlToDraft(content);
			const { contentBlocks, entityMap } = blocksFromHtml;
			const contentState = ContentState.createFromBlockArray(contentBlocks, entityMap);
			editorState = EditorState.createWithContent(contentState);
		}
		this.state = {
			...props,
			changed: false,
			editorState: editorState,
			description: 'description',
			base64: null,
			changed: false,
			isLoadding: false,
			currAuthority: [],
			imagesStr: [],
			isAdding: true,
			limitAdd: false
		};
		this.handleChange = this.handleChange.bind(this);
	}
	componentWillReceiveProps(nextProps) {
		console.log('tét', nextProps);
		if (nextProps.modalType === helperFunc.modeType.Insert) {
			this.setState({
				editorState: this.state.editorState
			});
		} else if (nextProps.modalType === helperFunc.modeType.Update) {
			if (
				nextProps.row.description != null &&
				typeof nextProps.row.description !== 'undefined' &&
				nextProps.row.description !== ''
			) {
				let description = nextProps.row.description;
				if (nextProps.row.description.startsWith('<img')) {
					description = '<p></p>' + nextProps.row.description;
				}
				const { contentBlocks, entityMap } = htmlToDraft(description);
				const contentState = ContentState.createFromBlockArray(contentBlocks, entityMap);
				const editorState = EditorState.createWithContent(contentState);
				this.setState({
					editorState: editorState
				});
			}
		}
	}
	// componentWillReceiveProps(nextProps) {
	// 	if (nextProps.modalType === 'none') {
	// 		this.setState({
	// 			isAdding: true,
	// 			changed: false
	// 		});
	// 		this.props.form.resetFields();
	// 	}
	// }
	//Disable or enable save button
	handleChange = () => {
		this.setState({
			imagesStr: [],
			changed: true
		});
	};
	onEditorStateChange = (editorState) => {
		this.setState({
			editorState,
			changed: true
		});
	};
	onChange = (evt) => {
		var newContent = evt.editor.getData();
		this.setState({
			description: newContent,
			changed: true
		});
	};
	onBlur(evt) {
		console.log('onBlur event called with event info: ', evt);
	}

	afterPaste(evt) {
		console.log('afterPaste event called with event info: ', evt);
	}
	handleCancel = () => {
		console.log('vao day');
		this.setState({
			imagesStr: [],
			editorState: EditorState.createWithContent(content),
			changed: false
		});
		this.props.handleCancel();
	};

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
	render() {
		const { modalActive, modalType, row, handleSubmit, categoriesTwo } = this.props;
		const { getFieldDecorator } = this.props.form;
		let { editorState } = this.state;

		let listImage = [ ...new Set(this.state.imagesStr) ].join('#####');
		let fileList = [];

		const date = new Date();
		let images = [];
		if (row.images) {
			images = row.images.split('#####').slice(0, row.images.split('#####').length);
			images.forEach((image, index) =>
				fileList.push({
					uid: index,
					name: '',
					status: 'done',
					url: image,
					thumbUrl: urlConfig.imageUrl + 'img/products/' + image
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
						row.name = values.name;
						row.idparent = values.idparent;
						row.content = values.content;
						row.description = draftToHtml(convertToRaw(this.state.editorState.getCurrentContent()));
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
											imagesStr += '#####' + str;
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
												return total + num.url + '#####';
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
					setTimeout(() => {
						this.setState({
							editorState: EditorState.createWithContent(content),
							imagesStr: [],
							changed: false
						});
					}, 1000);
					// this.props.form.resetFields();
					// handleSubmit(modalType, row);
				}
			});
		};
		const uploadImageCallBack = (file) => {
			return new Promise((resolve, reject) => {
				getBase64(file, (result) => {
					try {
						let str = result.replace(/^data:image\/[a-z]+;base64,/, '');
						let object = {};
						object['image'] = str;
						let vbody = JSON.stringify(object);
						fetch(urlConfig.baseUrl + 'v1/uploadImage', {
							method: 'POST',
							headers: {
								'Content-Type': 'application/json',
								Accept: 'application/json',
								Authorization: 'Bearer ' + localStorage.getItem('id_token')
							},
							body: vbody
						})
							.then(function(response) {
								return response.json();
							})
							.then(function(data) {
								resolve({ data: { link: urlConfig.imageUrl + 'img/news/' + data.data } });
							});
					} catch (error) {
						reject(error);
					}
				});
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
				width={window.innerWidth > 1100 ? modalType === 'ChangeStatus' ? 30 + '%' : 40 + '%' : '100%'}
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
							<Form className="isoCardInfoForm FormData">
								<Row>
									<Col className="ant-col-xl-24 ant-col-lg-24">
										<FormItem {...formItemLayout} label="Tên" hasFeedback>
											{getFieldDecorator('name', {
												rules: [
													{
														required: true,
														message: 'Tên là bắt buộc'
													}
												]
											})(<Input onChange={this.handleChange} />)}
										</FormItem>
										<FormItem
											{...formItemLayout}
											label={<span>Loại</span>}
											hasFeedback
											style={{ marginBottom: 10 + 'px' }}
										>
											{getFieldDecorator('idparent', {
												initialValue: null,
												rules: [
													{
														required: true,
														message: 'Loại là bắt buộc'
													}
												]
											})(
												<Select
													showSearch
													filterOption={(input, option) =>
														option.props.children
															.toLowerCase()
															.indexOf(input.toLowerCase()) >= 0}
													placeholder="Chọn loại"
													onChange={this.handleChange}
												>
													{!isNullOrUndefined(categoriesTwo) ? (
														categoriesTwo.map((value, index) => (
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
												width: '100%',
												marginBottom: '10px',
												textAlign: 'left'
											}}
											label="Tóm tắt"
										>
											<div style={{ width: 100 + '%', display: 'flex' }}>
												{getFieldDecorator('content', {
													rules: [
														{
															required: true,
															message: 'Tóm tắt là bắt buộc'
														}
													]
												})(
													<TextArea
														rows={3}
														style={{ width: 95 + '%' }}
														onChange={this.handleChange}
													/>
												)}
											</div>
										</FormItem>
										{/* <FormItem
											{...formItemLayout}
											style={{
												width: '100%',
												marginBottom: '10px',
												textAlign: 'left'
											}}
											label="Thông tin chi tiết"
										>
											<div style={{ width: 100 + '%', display: 'flex' }}>
												{getFieldDecorator('description', {
													rules: [
														{
															required: true,
															message: 'Thông tin là bắt buộc'
														}
													]
												})(
													<TextArea
														rows={3}
														style={{ width: 95 + '%' }}
														onChange={this.handleChange}
													/>
												)}
											</div>
										</FormItem> */}
										<FormItem {...formItemLayout} label="Ảnh" style={{ marginBottom: 10 + 'px' }}>
											{getFieldDecorator('image', {
												valuePropName: 'fileList',
												getValueFromEvent: normFile,
												rules: [
													{
														required: true,
														message: 'Ảnh là bắt buộc'
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
								<div className="clearfix" />
								<div>
									<Editor
										wrapperClassName="demo-wrapper"
										editorClassName="editer-content"
										editorState={editorState}
										onEditorStateChange={this.onEditorStateChange}
										onChange={this.handleChange}
										initialEditorState={EditorState.createEmpty()}
										toolbar={{
											inline: { inDropdown: true },
											list: { inDropdown: true },
											textAlign: { inDropdown: true },
											link: { inDropdown: true },
											history: { inDropdown: true },
											image: {
												uploadCallback: uploadImageCallBack,
												previewImage: true
												//  alt: { present: true, mandatory: true }
											}
										}}
									/>
								</div>
							</Form>
						) : modalType === 'edit' ? (
							<Form className="isoCardInfoForm FormData">
								<Row>
									<Col className="ant-col-xl-24 ant-col-lg-24">
										<FormItem {...formItemLayout} label="Tên" hasFeedback>
											{getFieldDecorator('name', {
												initialValue: row.name,
												rules: [
													{
														required: true,
														message: 'Tên là bắt buộc'
													}
												]
											})(<Input onChange={this.handleChange} />)}
										</FormItem>
										<FormItem
											{...formItemLayout}
											label={<span>Loại</span>}
											hasFeedback
											style={{ marginBottom: 10 + 'px' }}
										>
											{getFieldDecorator('idparent', {
												initialValue: row.idparent,
												rules: [
													{
														required: true,
														message: 'Loại là bắt buộc'
													}
												]
											})(
												<Select placeholder="Chọn loại" onChange={this.handleChange}>
													{!isNullOrUndefined(categoriesTwo) ? (
														categoriesTwo.map((value, index) => (
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
												width: '100%',
												marginBottom: '10px',
												textAlign: 'left'
											}}
											label="Tóm tắt"
										>
											<div style={{ width: 100 + '%', display: 'flex' }}>
												{getFieldDecorator('content', {
													initialValue: row.content,

													rules: [
														{
															required: true,
															message: 'Tóm tắt là bắt buộc'
														}
													]
												})(
													<TextArea
														rows={3}
														style={{ width: 95 + '%' }}
														onChange={this.handleChange}
													/>
												)}
											</div>
										</FormItem>
										{/* <FormItem
											{...formItemLayout}
											style={{
												width: '100%',
												marginBottom: '10px',
												textAlign: 'left'
											}}
											label="Thông tin chi tiết"
										>
											<div style={{ width: 100 + '%', display: 'flex' }}>
												{getFieldDecorator('description', {
													initialValue: row.description,
													rules: [
														{
															required: true,
															message: 'Thông tin là bắt buộc'
														}
													]
												})(
													<TextArea
														rows={3}
														style={{ width: 95 + '%' }}
														onChange={this.handleChange}
													/>
												)}
											</div>
										</FormItem> */}
										<FormItem {...formItemLayout} label="Ảnh" style={{ marginBottom: 10 + 'px' }}>
											{getFieldDecorator('image', {
												valuePropName: 'fileList',
												getValueFromEvent: normFile,
												initialValue: fileList.length > 0 ? fileList : null,
												rules: [
													{
														required: true,
														message: 'Ảnh là bắt buộc'
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
													//className= "upload-list-inline"
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
								<div className="clearfix" />
								<div>
									<Editor
										wrapperClassName="demo-wrapper"
										editorClassName="demo-editor"
										editorState={editorState}
										onEditorStateChange={this.onEditorStateChange}
										initialEditorState={editorState}
										toolbar={{
											inline: { inDropdown: true },
											list: { inDropdown: true },
											textAlign: { inDropdown: true },
											link: { inDropdown: true },
											history: { inDropdown: true },

											image: {
												uploadCallback: uploadImageCallBack,
												previewImage: true
												// alt: { present: true, mandatory: true }
											}
										}}
									/>
								</div>
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
