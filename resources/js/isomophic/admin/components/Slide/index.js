import React from 'react';
import Modals from '../../../common/modal.style';
import BaseModal from '../../../components/base';
import WithDirection from '../../../../isomophic/settings/withDirection';
import isoModal from '../../../components/feedback/modal';
import { urlConfig } from '../../../settings';
import DataWrapper from '../../../common/data.style';
import helperFunc from '../../../helpers/helperFunc';
// save and add
import { Form, Input, Select, Button, Icon, Upload, InputNumber } from 'antd';
import styleControl from '../../../common/styleControl';
import IntlMessages from '../../../components/utility/intlMessages';
import formItemLayout from '../../../helpers/formItem';

const { dummyRequest, beforeUpload, getBase64 } = helperFunc;
const WDModal = Modals(isoModal);
const Modal = WithDirection(WDModal);
const FormItem = Form.Item;
const { Option } = Select;

class ModalForm extends BaseModal {
	constructor(props) {
		super(props);
		this.state = {
			changed: false
		};
	}
	componentWillReceiveProps(nextProps) {
		if (nextProps.modalType === helperFunc.modeType.None) {
			this.setState({
				changed: false
			});
		}
	}
	handleChange = () => {
		this.setState({
			changed: true
		});
	};
	onEditorStateChange = (editorState) => {
		this.setState({
			editorState,
			changed: true
		});
	};

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

		const saveButton = (e) => {
			e.preventDefault();
			this.props.form.validateFieldsAndScroll((err, values) => {
				if (!err) {
					row.name = values.name;
					row.link = values.link;
					row.image = values.image;
					row.type = values.type;
					row.order = values.order;
					if (modalType === helperFunc.modeType.Insert) {
						row.status = helperFunc.status.Active;
					} else {
						row.status = values.status;
					}
					let baseImage = '';
					if (values.image[0].originFileObj) {
						getBase64(values.image[0].originFileObj, (result) => {
							baseImage = result;
							let str = baseImage.replace(/^data:image\/[a-z]+;base64,/, '');
							row.image = str;

							this.props.form.resetFields();
							handleSubmit(modalType, row);
						});
					} else {
						row.image = '';
						handleSubmit(modalType, row);
					}
				}
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
				width={40 + '%'}
				style={{ top: 30 }}
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
								<FormItem
									{...formItemLayout}
									label={<span>Type</span>}
									style={{ marginBottom: 10 + 'px' }}
								>
									{getFieldDecorator('type', {
										initialValue: row.type
									})(
										<Select onChange={this.handleChange}>
											<Option value={helperFunc.slideType.Slide}>
												{helperFunc.slideType.properties[helperFunc.slideType.Slide]}
											</Option>
											<Option value={helperFunc.slideType.Banner}>
												{helperFunc.slideType.properties[helperFunc.slideType.Banner]}
											</Option>
										</Select>
									)}
								</FormItem>
								<FormItem
									{...formItemLayout}
									label={
										<span>
											<IntlMessages id="form.name" />
										</span>
									}
									hasFeedback
									style={{ marginBottom: 10 + 'px' }}
								>
									{getFieldDecorator('name', {
										rules: [
											{
												required: true,
												message: <IntlMessages id="form.validate.name" />
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
									label={
										<span>
											<IntlMessages id="form.link" />
										</span>
									}
									hasFeedback
									style={{ marginBottom: 10 + 'px' }}
								>
									{getFieldDecorator('link', {
										rules: [
											{
												max: 200,
												message: <IntlMessages id="form.validate.max200" />
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
									label={<span>Order</span>}
									hasFeedback
									style={{ marginBottom: 10 + 'px' }}
								>
									{getFieldDecorator('order', {
										initialValue: 0,
										rules: [
											{
												required: true,
												message: <IntlMessages id="form.validate.order" />
											}
										]
									})(<InputNumber min="0" onChange={this.handleChange} />)}
								</FormItem>
							</Form>
						) : modalType === 'edit' ? (
							<Form className="FormData">
								<FormItem
									{...formItemLayout}
									label={
										<span>
											<IntlMessages id="form.type" />
										</span>
									}
									style={{ marginBottom: 10 + 'px' }}
								>
									{getFieldDecorator('type', {
										initialValue: row.type
									})(
										<Select onChange={this.handleChange}>
											<Option value={helperFunc.slideType.Slide}>
												{helperFunc.slideType.properties[helperFunc.slideType.Slide]}
											</Option>
											<Option value={helperFunc.slideType.Banner}>
												{helperFunc.slideType.properties[helperFunc.slideType.Banner]}
											</Option>
										</Select>
									)}
								</FormItem>

								<FormItem
									{...formItemLayout}
									label={
										<span>
											<IntlMessages id="form.name" />
										</span>
									}
									hasFeedback
									style={{ marginBottom: 10 + 'px' }}
								>
									{getFieldDecorator('name', {
										initialValue: row.name,
										rules: [
											{
												required: true,
												message: <IntlMessages id="form.validate.name" />
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
									label={
										<span>
											<IntlMessages id="form.link" />
										</span>
									}
									hasFeedback
									style={{ marginBottom: 10 + 'px' }}
								>
									{getFieldDecorator('link', {
										initialValue: row.link,
										rules: [
											{
												max: 200,
												message: <IntlMessages id="form.validate.max200" />
											}
										]
									})(<Input onChange={this.handleChange} />)}
								</FormItem>
								<FormItem
									{...formItemLayout}
									label={<IntlMessages id="form.image" />}
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
											<IntlMessages id="form.order" />
										</span>
									}
									hasFeedback
									style={{ marginBottom: 10 + 'px' }}
								>
									{getFieldDecorator('order', {
										initialValue: row.order,
										rules: [
											{
												required: true,
												message: <IntlMessages id="form.validate.order" />
											}
										]
									})(<InputNumber min="0" onChange={this.handleChange} />)}
								</FormItem>
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
											<Option value={1}>
												{helperFunc.status.properties[helperFunc.status.Active]}
											</Option>
											<Option value={2}>
												{helperFunc.status.properties[helperFunc.status.Inactive]}
											</Option>
										</Select>
									)}
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
const WrappedModalForm = Form.create()(ModalForm);
export default WrappedModalForm;
