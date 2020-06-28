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
import moment from 'moment';
import { isNullOrUndefined } from 'util';

import { Radio, Input, Form, Button, Row, Col, Select, Upload, Icon, InputNumber } from 'antd';
import DataWrapper from '../../../common/data.style';
import styleControl from '../../../common/styleControl';
import IntlMessages from '../../../components/utility/intlMessages';
import formItemLayout from '../../../helpers/formItem';
import helperFunc from '../../../helpers/helperFunc';

const { dummyRequest, beforeUpload, getBase64 } = helperFunc;
import { dataConfig, urlConfig } from '../../../settings/index';

const WDModal = Modals(isoModal);
const Modal = WithDirection(WDModal);
const FormItem = Form.Item;
const RadioGroup = Radio.Group;
const { Option } = Select;
const { TextArea } = Input;
// const { InputNumber } = Input;

class ModalFormAccount extends Component {
	constructor(props) {
		super(props);
		this.state = {
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
			imagesStr: [],
			changed: true
		});
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
		const { modalActive, modalType, row, handleCancel, handleSubmit, categories } = this.props;
		const { getFieldDecorator } = this.props.form;
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
					thumbUrl: urlConfig.imageUrl + 'img/bill/' + image
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
						if (modalType === 'insert') {
							row.idBill = values.idBill;
							// row.amount = values.amount;
							// row.totalmoney = values.totalmoney;
							let baseImage = '';
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
								// row.amount = values.amount;
								// row.totalmoney = values.totalmoney;
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
						} else if (modalType === 'addProduct') {
							row.idcategories = values.idcategories;
							row.mass = values.mass;
							row.inputprice = values.inputprice;
							row.outputprice = values.outputprice;
							row.intomoney = values.inputprice * values.mass;
							row.dateUse = values.dateUse;

							row.idbill_im = row.id;
							handleSubmit(modalType, row);
						}
					}
					// this.props.form.resetFields();
					// handleSubmit(modalType, row);
				}
			});
		};
		return (
			<Modal
				title={
					modalType === 'changeStatus' ? (
						<IntlMessages id="form.titleChangeStatus" />
					) : modalType === 'insert' ? (
						'Thêm mới'
					) : modalType === 'edit' ? (
						'Sửa'
					) : modalType === 'addProduct' ? (
						'Thêm sản phẩm'
					) : (
						'Chi tiết'
					)
				}
				className="FormModal"
				style={{ top: 50 }}
				width={window.innerWidth > 1100 ? modalType === 'ChangeStatus' ? 30 + '%' : 40 + '%' : '100%'}
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
					modalType === 'edit' ||
					modalType === 'addProduct' ? (
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
										<FormItem {...formItemLayout} label="Mã hoá đơn" hasFeedback>
											{getFieldDecorator('idBill', {
												rules: [
													{
														required: true,
														message: 'Mã hoá đơn là bắt buộc'
													}
												]
											})(<Input onChange={this.handleChange} />)}
										</FormItem>
										{/* <FormItem {...formItemLayout} label="Số lượng" hasFeedback>
											{getFieldDecorator('amount', {
												rules: [
													{
														required: true,
														message: 'Số lượng là bắt buộc'
													}
												]
											})(
												<InputNumber
													style={{ width: '100%' }}
													min={1}
													onChange={this.handleChange}
												/>
											)}
										</FormItem>
										<FormItem
											{...formItemLayout}
											label={<span>Tổng tiền</span>}
											hasFeedback
											style={{ marginBottom: 10 + 'px' }}
										>
											{getFieldDecorator('totalmoney', {
												initialValue: null,
												rules: [
													{
														required: true,
														message: 'Tổng tiền là bắt buộc'
													}
												]
											})(
												<InputNumber
													style={{ width: '100%' }}
													min={1}
													onChange={this.handleChange}
												/>
											)}
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
							</Form>
						) : modalType === 'addProduct' ? (
							<Form className="isoCardInfoForm FormData">
								<Row>
									<Col className="ant-col-xl-24 ant-col-lg-24">
										<FormItem
											{...formItemLayout}
											label={<span>Sản phẩm</span>}
											hasFeedback
											style={{ marginBottom: 10 + 'px' }}
										>
											{getFieldDecorator('idcategories', {
												rules: [
													{
														required: true,
														message: 'Sản phẩm là bắt buộc'
													}
												]
											})(
												<Select
													showSearch
													placeholder="Chọn sản phẩm"
													onChange={this.handleChange}
													filterOption={(input, option) =>
														option.props.children
															.toLowerCase()
															.indexOf(input.toLowerCase()) >= 0}
												>
													{!isNullOrUndefined(categories) ? (
														categories.map((value, index) => (
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
										<FormItem {...formItemLayout} label="Khối lượng" hasFeedback>
											{getFieldDecorator('mass', {
												rules: [
													{
														required: true,
														message: 'Khối lượng là bắt buộc'
													}
												]
											})(
												<InputNumber
													style={{ width: '100%' }}
													min={1}
													onChange={this.handleChange}
												/>
											)}
										</FormItem>
										<FormItem {...formItemLayout} label="Giá nhập" hasFeedback>
											{getFieldDecorator('inputprice', {
												rules: [
													{
														required: true,
														message: 'Giá nhập là bắt buộc'
													}
												]
											})(
												<InputNumber
													style={{ width: '100%' }}
													min={1}
													onChange={this.handleChange}
												/>
											)}
										</FormItem>
										<FormItem {...formItemLayout} label="Giá bán" hasFeedback>
											{getFieldDecorator('outputprice', {
												rules: [
													{
														required: true,
														message: 'Giá bán là bắt buộc'
													}
												]
											})(
												<InputNumber
													style={{ width: '100%' }}
													min={1}
													onChange={this.handleChange}
												/>
											)}
										</FormItem>
										<FormItem {...formItemLayout} label="Số ngày sử dụng" hasFeedback>
											{getFieldDecorator('dateUse', {
												rules: [
													{
														required: true,
														message: 'Bắt buộc'
													}
												]
											})(
												<InputNumber
													style={{ width: '100%' }}
													min={1}
													onChange={this.handleChange}
												/>
											)}
										</FormItem>
										{/* <FormItem
											{...formItemLayout}
											label={<span>Tổng tiền</span>}
											hasFeedback
											style={{ marginBottom: 10 + 'px' }}
										>
                                                {getFieldDecorator('intomoney', {
												initialValue: row.totalmoney,
												rules: [
													{
														required: true,
														message: 'Tổng tiền là bắt buộc'
													}
												]
											})(
												<InputNumber
													style={{ width: '100%' }}
													min={1}
													onChange={this.handleChange}
												/>
											)}
										</FormItem> */}
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
