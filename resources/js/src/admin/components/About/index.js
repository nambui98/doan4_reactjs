import React from 'react';
import Modals from '../../../common/modal.style';
import BaseModal from '../../../components/base';
import WithDirection from '../../../../isomophic/settings/withDirection';
import isoModal from '../../../components/feedback/modal';
import { urlConfig } from '../../../settings';
import DataWrapper from '../../../common/data.style';
import helperFunc from '../../../helpers/helperFunc';
import styleControl from '../../../common/styleControl';

import { EditorState, convertToRaw, ContentState } from 'draft-js';
import draftToHtml from 'draftjs-to-html';
import htmlToDraft from 'html-to-draftjs';
//import CKEditor from "react-ckeditor-component";
//import CKEditor from 'ckeditor4-react';
//import CKEditor from '@ckeditor/ckeditor5-react';
//import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

//import moment from "moment";
import { Editor } from 'react-draft-wysiwyg';
import '../../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import IntlMessages from '../../../components/utility/intlMessages';
import formItemLayout from '../../../helpers/formItem';
import { Form, Input, Select, Button, Icon, Upload } from 'antd';

const { dummyRequest, beforeUpload, getBase64 } = helperFunc;
const WDModal = Modals(isoModal);
const Modal = WithDirection(WDModal);
const FormItem = Form.Item;
const { Option } = Select;
const { TextArea } = Input;
const html = '<div><p></p></div>';
const blocksFromHTML1 = htmlToDraft(html);
const content = ContentState.createFromBlockArray(blocksFromHTML1);

class ModalForm extends BaseModal {
	constructor(props) {
		super(props);
		let editorState = EditorState.createWithContent(content);
		if (props.content != null && typeof props.content !== 'undefined' && props.content !== '') {
			const blocksFromHtml = htmlToDraft(props.content);
			const { contentBlocks, entityMap } = blocksFromHtml;
			const contentState = ContentState.createFromBlockArray(contentBlocks, entityMap);
			editorState = EditorState.createWithContent(contentState);
		}
		this.state = {
			...props,
			changed: false,
			editorState: editorState,
			content: 'content'
		};
	}

	componentWillReceiveProps(nextProps) {
		if (nextProps.modalType === helperFunc.modeType.Insert) {
			this.setState({
				changed: false,
				editorState: EditorState.createWithContent(content),
				content: ''
			});
		} else {
			if (
				nextProps.row.content != null &&
				typeof nextProps.row.content !== 'undefined' &&
				nextProps.row.content !== '' &&
				nextProps.row.content !== this.props.row.content
			) {
				const blocksFromHtml = htmlToDraft(nextProps.row.content);
				const { contentBlocks, entityMap } = blocksFromHtml;
				const contentState = ContentState.createFromBlockArray(contentBlocks, entityMap);
				this.setState({
					editorState: EditorState.createWithContent(contentState)
					// content:nextProps.row.content
				});
			} else if (this.props.row.content != null && typeof this.props.row.content !== 'undefined') {
				const blocksFromHtml = htmlToDraft(this.props.row.content);
				const { contentBlocks, entityMap } = blocksFromHtml;
				const contentState = ContentState.createFromBlockArray(contentBlocks, entityMap);
				const editorState = EditorState.createWithContent(contentState);
				this.setState({
					editorState: editorState
					//  content:this.props.row.content
				});
			}
		}
	}
	//Bật tắt nút Save
	handleChange = () => {
		this.setState({
			changed: true
		});
	};
	//Bật tắt nút Save
	onEditorStateChange = (editorState) => {
		this.setState({
			editorState,
			changed: true
		});
	};

	onChange = (evt) => {
		var newContent = evt.editor.getData();
		this.setState({
			content: newContent,
			changed: true
		});
	};

	onBlur(evt) {
		//console.log("onBlur event called with event info: ", evt);
	}

	afterPaste(evt) {
		//console.log("afterPaste event called with event info: ", evt);
	}

	render() {
		const {
			modalActive,
			modalType,
			row,
			handleCancel,
			handleSubmit,
			// save and add
			updateStatusAdd
		} = this.props;
		//draft.js
		let { editorState } = this.state;

		let fileList = [];

		if (row.image) {
			fileList.push({
				uid: '-1',
				name: '',
				status: 'done',
				url: row.image,
				thumbUrl: urlConfig.imageUrl + row.image
			});
		}

		const { getFieldDecorator } = this.props.form;
		const normFile = (e) => {
			if (Array.isArray(e)) {
				return e;
			}
			e.fileList = e.fileList.slice(-1);
			return e && e.fileList;
		};

		//Xử lý khi click nút Save
		const saveButton = (e) => {
			e.preventDefault();
			this.props.form.validateFieldsAndScroll((err, values) => {
				if (!err) {
					row.title = values.title;
					row.category = values.category;
					row.intro = values.intro;
					row.meta_keyword = values.meta_keyword;
					row.meta_desciption = values.meta_desciption;
					row.image = values.image;
					row.content = draftToHtml(convertToRaw(this.state.editorState.getCurrentContent()));
					// row.content = this.state.content;
					if (modalType === helperFunc.modeType.Insert) {
						row.status = helperFunc.status.Active;
					} else {
						row.status = values.status;
					}
					row.image = '';
					handleSubmit(modalType, row);

					// let baseImage = "";
					// if (values.image[0].originFileObj) {
					//   getBase64(values.image[0].originFileObj, result => {
					//     baseImage = result;
					//     let str = baseImage.replace(/^data:image\/[a-z]+;base64,/, "");
					//     row.image = str;

					//     this.props.form.resetFields();
					//     handleSubmit(modalType, row);
					//   });
					// } else {
					//   row.image = "";
					//   handleSubmit(modalType, row);
					// }
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
								Authorization: localStorage.getItem('id_token')
							},
							body: vbody
						})
							.then(function(response) {
								return response.json();
							})
							.then(function(data) {
								resolve({ data: { link: data.data } });
							});
					} catch (error) {
						reject(error);
					}
				});
			});
		};
		// save and add
		const saveAdd = (e) => {
			e.preventDefault();
			if (modalType === helperFunc.modeType.Insert) {
				updateStatusAdd(true);
				saveButton(e);
			}
		};
		return (
			<Modal
				title={
					modalType === helperFunc.modeType.Insert ? (
						helperFunc.modeType.properties[helperFunc.modeType.Insert]
					) : modalType === helperFunc.modeType.Update ? (
						helperFunc.modeType.properties[helperFunc.modeType.Update]
					) : modalType === helperFunc.modeType.View ? (
						helperFunc.modeType.properties[helperFunc.modeType.View]
					) : (
						''
					)
				}
				className="FormModal"
				visible={modalActive}
				onCancel={handleCancel}
				cancelText={
					modalType === helperFunc.modeType.View ? (
						<IntlMessages id="button.close" />
					) : (
						<IntlMessages id="button.cancel" />
					)
				}
				onOk={saveButton}
				// okText="Save"
				width={99 + '%'}
				style={{ top: 5 }}
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
								<div className="LeftSideContent">
									<FormItem
										{...formItemLayout}
										label={<span>Category</span>}
										style={{ marginBottom: 10 + 'px' }}
									>
										{getFieldDecorator('category', {
											initialValue: 1
										})(
											<Select onChange={this.handleChange}>
												{helperFunc.categoryAbout.map((row, index) => {
													return (
														<Option key={index} value={row.key}>
															{row.name}
														</Option>
													);
												})}
											</Select>
										)}
									</FormItem>
									<FormItem
										{...formItemLayout}
										label={
											<span>
												<IntlMessages id="form.title" />
											</span>
										}
										hasFeedback
										style={{ marginBottom: 10 + 'px' }}
									>
										{getFieldDecorator('title', {
											rules: [
												{
													required: true,
													message: <IntlMessages id="form.validate.title" />
												},
												{
													max: 200,
													message: <IntlMessages id="form.validate.max200" />
												}
											]
										})(<Input onChange={this.handleChange} />)}
									</FormItem>
								</div>
								<div className="RightSideContent">
									<FormItem
										{...formItemLayout}
										style={{
											width: '100%',
											marginBottom: '10px',
											textAlign: 'left'
										}}
										label={<IntlMessages id="form.keywordSeo" />}
									>
										{getFieldDecorator(
											'meta_keyword',
											{
												//initialValue: (row.description)
											}
										)(<TextArea rows={3} onChange={this.handleChange} />)}
									</FormItem>
									<FormItem
										{...formItemLayout}
										style={{
											width: '100%',
											marginBottom: '10px',
											textAlign: 'left'
										}}
										label={<IntlMessages id="form.descriptionSEO" />}
									>
										{getFieldDecorator(
											'meta_desciption',
											{
												//initialValue: (row.description)
											}
										)(<TextArea rows={3} onChange={this.handleChange} />)}
									</FormItem>
									{/* <FormItem
                    {...formItemLayout}
                    label={<IntlMessages id="form.image" />}
                    style={{ marginBottom: 10 + "px", display: "none" }}
                  >
                    {getFieldDecorator("image", {
                      valuePropName: "fileList",
                      getValueFromEvent: normFile,
                      rules: [
                      ]
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
                          <Icon type="upload" />{" "}
                          <IntlMessages id="form.upload" />
                        </Button>
                      </Upload>
                    )}
                  </FormItem> */}
								</div>
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
												// alt: { present: true, mandatory: true }
											}
										}}
									/>
								</div>
							</Form>
						) : modalType === 'edit' ? (
							<Form className="FormData">
								<div className="LeftSideContent">
									<FormItem
										{...formItemLayout}
										label={
											<span>
												<IntlMessages id="form.category" />
											</span>
										}
										style={{ marginBottom: 10 + 'px' }}
									>
										{getFieldDecorator('category', {
											initialValue: row.category
										})(
											<Select onChange={this.handleChange}>
												{helperFunc.categoryAbout.map((row, index) => {
													return (
														<Option key={index} value={row.key}>
															{row.name}
														</Option>
													);
												})}
											</Select>
										)}
									</FormItem>

									<FormItem
										{...formItemLayout}
										label={
											<span>
												<IntlMessages id="form.title" />
											</span>
										}
										hasFeedback
										style={{ marginBottom: 10 + 'px' }}
									>
										{getFieldDecorator('title', {
											initialValue: row.title,
											rules: [
												{
													required: true,
													message: <IntlMessages id="form.validate.title" />
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
										style={{
											width: '100%',
											marginBottom: '10px',
											textAlign: 'left'
										}}
										label={<IntlMessages id="form.keywordSeo" />}
									>
										{getFieldDecorator('meta_keyword', {
											initialValue: row.meta_keyword
										})(<TextArea rows={3} onChange={this.handleChange} />)}
									</FormItem>
									<FormItem
										{...formItemLayout}
										style={{
											width: '100%',
											marginBottom: '10px',
											textAlign: 'left'
										}}
										label={<IntlMessages id="form.descriptionSEO" />}
									>
										{getFieldDecorator('meta_desciption', {
											initialValue: row.meta_desciption
										})(<TextArea rows={3} onChange={this.handleChange} />)}
									</FormItem>
								</div>
								<div className="RightSideContent">
									<FormItem
										{...formItemLayout}
										label={
											<span>
												<IntlMessages id="form.status" />
											</span>
										}
										style={{ marginBottom: 10 + 'px' }}
									>
										{getFieldDecorator('status', {
											initialValue: row.status
										})(
											<Select onChange={this.handleChange}>
												<Option value={helperFunc.status.Active}>
													{helperFunc.status.properties[helperFunc.status.Active]}
												</Option>
												<Option value={helperFunc.status.Inactive}>
													{helperFunc.status.properties[helperFunc.status.Inactive]}
												</Option>
											</Select>
										)}
									</FormItem>
									<FormItem
										{...formItemLayout}
										label={<IntlMessages id="form.image" />}
										style={{ marginBottom: 10 + 'px', display: 'none' }}
									>
										{getFieldDecorator('image', {
											valuePropName: 'fileList',
											getValueFromEvent: normFile,
											initialValue: fileList.length > 0 ? fileList : null,
											rules: []
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
												//  alt: { present: true, mandatory: true }
											}
										}}
									/>

									{/* <CKEditor
                    activeClass="p10"
                    content={this.state.content}
                    events={{
                      "blur": this.onBlur,
                      "afterPaste": this.afterPaste,
                      "change": this.onChange
                    }}
                    config={{
                      "height": "800px"
                    }}
                  /> */}
								</div>
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
const WrappedModalForm = Form.create()(ModalForm);
export default WrappedModalForm;
