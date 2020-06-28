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

import { Radio, Input, Form, Button, Row, Col, Select } from 'antd';
import DataWrapper from '../../../common/data.style';
import styleControl from '../../../common/styleControl';
import IntlMessages from '../../../components/utility/intlMessages';
import formItemLayout from '../../../helpers/formItem';
import helperFunc from '../../../helpers/helperFunc';
const { convertNumber } = helperFunc;
const WDModal = Modals(isoModal);
const Modal = WithDirection(WDModal);
const FormItem = Form.Item;
const RadioGroup = Radio.Group;
const { Option } = Select;

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
		const { modalActive, modalType, row, handleCancel, handleSubmit, promotionInDay, promotionType } = this.props;
		const { getFieldDecorator } = this.props.form;
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
						row.idproduct_sale = values.idproduct_sale;
						row.idsale = values.idsale;
						row.idproduct = row.id;
						handleSubmit(modalType, row);

						// row.status = modalType === 'insert' ? 1 : values.status;
					}
					// this.props.form.resetFields();
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
					) : modalType === 'addPromotion' ? (
						'Thêm vào khuyến mãi'
					) : (
						'DETAIL'
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
					modalType === 'addPromotion' ||
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
						{modalType === 'addPromotion' ? (
							<Form className="isoCardInfoForm FormData">
								<Row>
									<Col className="ant-col-xl-24 ant-col-lg-24">
										<FormItem
											{...formItemLayout}
											label={<span>Ngày khuyến mãi</span>}
											hasFeedback
											style={{ marginBottom: 10 + 'px' }}
										>
											{getFieldDecorator('idproduct_sale', {
												initialValue: null,
												rules: [
													{
														required: true,
														message: 'Bắt buộc'
													}
												]
											})(
												<Select placeholder="Chọn ngày" onChange={this.handleChange}>
													{!isNullOrUndefined(promotionInDay) ? (
														promotionInDay.map((value, index) => (
															<Option key={index} value={value.id}>
																{moment(value.datePromotion).format('DD-MM-YYYY')}
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
											label={<span>Loại khuyến mãi</span>}
											hasFeedback
											style={{ marginBottom: 10 + 'px' }}
										>
											{getFieldDecorator('idsale', {
												initialValue: null,
												rules: [
													{
														required: true,
														message: 'Bắt buộc'
													}
												]
											})(
												<Select placeholder="Chọn kiểu khuyến mãi" onChange={this.handleChange}>
													{!isNullOrUndefined(promotionType) ? (
														promotionType.map((value, index) => (
															<Option key={index} value={value.id}>
																{value.type === 1 ? (
																	value.numbersale + ' %'
																) : (
																	convertNumber(value.numbersale) + ' ₫'
																)}
															</Option>
														))
													) : (
														''
													)}
												</Select>
											)}
										</FormItem>
									</Col>
								</Row>
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
													{!isNullOrUndefined(categoriesBig) ? (
														categoriesBig.map((value, index) => (
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
