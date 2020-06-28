/*
Method Name: Modal chung cơ bản
Description: Xử lý thông tin form Show on modal, validate form
Author: Bùi Văn Quý
Last Modified Author: Bùi Văn Quý
Created Date: 31/10/2018
Modified Date: 31/10/2018
*/
import React, { Component } from 'react';
import Modals from '../../common/modal.style';
import WithDirection from '../../../isomophic/settings/withDirection';
import isoModal from '../feedback/modal';
import { Button, Input, Form } from 'antd';
import DataWrapper from '../../common/data.style';
import styleControl from '../../common/styleControl';
const WDModal = Modals(isoModal);
const Modal = WithDirection(WDModal);
const FormItem = Form.Item;

class ModalForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			changed: false,
			strName: 'Role'
		};
	}
	handleChange = () => {
		this.setState({
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

		const { getFieldDecorator } = this.props.form;

		const formItemLayout = {
			labelCol: {
				xs: { span: 24 },
				sm: { span: 8 }
			},
			wrapperCol: {
				xs: { span: 24 },
				sm: { span: 16 }
			}
		};

		//Xử lý khi click nút Save
		const saveButton = (e) => {
			e.preventDefault();
			this.setState({
				changed: false
			});
			this.props.form.validateFieldsAndScroll((err, values) => {
				if (!err) {
					row.name = values.name;
					if (typeof this.props.strAddress !== 'undefined') row.address = values.address;
					handleSubmit(modalType, row);
				}
			});
		};

		// save and add
		const saveAdd = (e) => {
			e.preventDefault();
			if (modalType === 'insert') {
				updateStatusAdd(true);
				this.props.form.validateFieldsAndScroll((err, values) => {
					if (!err) {
						row.name = values.name;
						row.status = 1;
						if (typeof this.props.strAddress !== 'undefined') row.address = values.address;
						this.props.form.resetFields();
						handleSubmit(modalType, row);
					}
				});
			}
		};

		return (
			<Modal
				title={
					modalType === 'insert' ? (
						'ADD NEW'
					) : modalType === 'edit' ? (
						'UPDATE'
					) : modalType === 'view' ? (
						'DETAIL'
					) : (
						''
					)
				}
				className="FormModal"
				visible={modalActive}
				onCancel={handleCancel}
				cancelText={modalType === 'view' ? 'Close' : 'Cancel'}
				onOk={saveButton}
				okText="Save"
				width={30 + '%'}
				// save and add
				footer={
					modalType === 'insert' ? (
						[
							<Button
								key="cancel"
								className="cancelType"
								onClick={handleCancel}
								style={{
									backgroundColor: '#af1921',
									color: '#FFFFFF',
									borderRadius: '6px'
								}}
							>
								Close
							</Button>,
							<Button
								key="ok"
								className="okType"
								onClick={saveButton}
								style={{
									backgroundColor: '#2d3446',
									color: '#FFFFFF',
									borderRadius: '6px',
									display: modalType === 'view' ? 'none' : ''
								}}
								disabled={!this.state.changed}
							>
								Save
							</Button>,
							<Button
								key="oknew"
								className="okNewType"
								onClick={saveAdd}
								style={styleControl(2, modalType)}
								disabled={!this.state.changed}
							>
								Save & Add new
							</Button>
						]
					) : (
						[
							<Button
								key="cancel"
								className="cancelType"
								onClick={handleCancel}
								style={{
									backgroundColor: '#af1921',
									color: '#FFFFFF',
									borderRadius: '6px'
								}}
							>
								Close
							</Button>,
							<Button
								key="ok"
								className="okType"
								onClick={saveButton}
								style={{
									backgroundColor: '#2d3446',
									color: '#FFFFFF',
									borderRadius: '6px',
									display: modalType === 'view' ? 'none' : ''
								}}
								disabled={!this.state.changed}
							>
								Save
							</Button>
						]
					)
				}
				okButtonProps={{
					style: {
						backgroundColor: '#fff',
						color: '#205B0C',
						borderRadius: 0,
						borderColor: '#205B0C',
						display: modalType === 'view' ? 'none' : ''
					},
					disabled: !this.state.changed
				}}
				cancelButtonProps={{
					style: {
						backgroundColor: '#fff',
						color: '#0E40A4',
						borderRadius: 0,
						borderColor: '#1086F6'
					}
				}}
			>
				<DataWrapper>
					<div className="clearfix">
						{modalType === 'insert' ? (
							<Form className="FormData">
								<FormItem
									{...formItemLayout}
									label={<span>{this.props.strName}</span>}
									hasFeedback
									style={{ marginBottom: 10 + 'px' }}
								>
									{getFieldDecorator('name', {
										rules: [
											{
												required: true,
												message: this.props.strName + ' is required'
											},
											{
												max: 200,
												message: 'Maximum 200 characters long.'
											}
										]
									})(<Input onChange={this.handleChange} />)}
								</FormItem>

								{typeof this.props.strAddress !== 'undefined' ? (
									<FormItem
										{...formItemLayout}
										label={this.props.strAddress}
										hasFeedback
										style={{ marginBottom: 10 + 'px' }}
									>
										{getFieldDecorator('address', {
											rules: [
												{
													max: 300,
													message: 'Maximum 300 characters long.'
												}
											]
										})(<Input size="large" onChange={this.handleChange} />)}
									</FormItem>
								) : (
									''
								)}
							</Form>
						) : modalType === 'edit' ? (
							<Form className="FormData">
								<FormItem
									{...formItemLayout}
									label={<span>{this.props.strName}</span>}
									hasFeedback
									style={{ marginBottom: 10 + 'px' }}
								>
									{getFieldDecorator('name', {
										initialValue: row.rolename,
										rules: [
											{
												required: true,
												message: this.props.strName + ' is required'
											},
											{
												max: 200,
												message: this.props.strName + ' Maximum 200 characters long.'
											}
										]
									})(<Input onChange={this.handleChange} />)}
								</FormItem>
								{typeof this.props.strAddress !== 'undefined' ? (
									<FormItem
										{...formItemLayout}
										label={this.props.strAddress}
										hasFeedback
										style={{ marginBottom: 10 + 'px' }}
									>
										{getFieldDecorator('address', {
											initialValue: row.address,
											rules: [
												{
													max: 300,
													message: 'Maximum 300 characters long.'
												}
											]
										})(<Input size="large" onChange={this.handleChange} />)}
									</FormItem>
								) : (
									''
								)}
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
