import React, { Component } from 'react';
import { ContactCardWrapper } from '../../../components/contacts/contactCard.style';
import { Input, Button, Upload, Icon, Form } from 'antd';
import DataWrapper from '../../../common/data.style';
import helperFunc from '../../../helpers/helperFunc';
import moment from 'moment';
import IntlMessages from '../../../components/utility/intlMessages';
import styleControl from '../../../common/styleControl';
import { urlConfig } from '../../../settings';
const FormItem = Form.Item;

//Hàm giả xử lý Component upload của theme
const dummyRequest = helperFunc.dummyRequest;
const beforeUpload = helperFunc.beforeUpload;
const getBase64 = helperFunc.getBase64;

class NewEditProfile extends Component {
	constructor(props) {
		super(props);
		this.state = {
			confirmDirty: false,
			base64: null,
			loading: false,
			changed: false,
			startDate: moment(new Date())
		};
		this.handleChangedField = this.handleChangedField.bind(this);
	}
	handleChangedField() {
		this.setState({
			changed: true
		});
	}
	disabledDate = (date) => {
		const { startDate } = this.state;
		if (!startDate || !date) {
			return false;
		}
		return date.valueOf() > startDate.valueOf();
	};
	checkPhone = (rule, value, callback) => {
		const isNumber = /[^0-9]/;
		const { form } = this.props;
		const { dataUsers } = this.props;
		let number = `+84${value}`;
		let isExitNumber = false;
		let isExitPhone = false;

		if (value.length > 8 && value.length < 11 && isNumber.test(value) === false) {
			isExitNumber = true;
			for (let i = 0; i < dataUsers.length; i++) {
				if (value === form.getFieldValue('PhoneCheck')) {
					break;
				}
				if (number === dataUsers[i].mobile || value === dataUsers[i].mobile) {
					isExitPhone = true;
					break;
				}
			}
		}
		return isExitNumber
			? isExitPhone ? callback('Phone already exists.') : callback()
			: value.length === 0 ? callback() : callback('Must be between 9 and 10 characters long.');
	};
	render() {
		const { profileUpdate, cancelEdit, submitEditProfile, idToken, userId } = this.props;
		const { getFieldDecorator } = this.props.form;
		let fileList = [];
		if (profileUpdate.avata) {
			fileList.push({
				uid: '-1',
				name: '',
				status: 'done',
				url: profileUpdate.avata,
				thumbUrl: urlConfig.imageUrl + profileUpdate.avata
			});
		}
		const normFile = (e) => {
			if (Array.isArray(e)) {
				return e;
			}
			e.fileList = e.fileList.slice(-1);
			return e && e.fileList;
		};
		const formItemLayout = {
			labelCol: {
				xs: { span: 24 },
				sm: { span: 6 }
			},
			wrapperCol: {
				xs: { span: 24 },
				sm: { span: 14 }
			}
		};
		// const handleChangeImageUpload = info => {
		//   if (info.file.status === "uploading") {
		//     this.setState({
		//       loading: true
		//     });
		//   }
		//   if (info.file.status === "done") {
		//     var base64File = "";
		//     getBase64(info.file.originFileObj, result => {
		//       base64File = result;
		//       this.setState({
		//         base64: result,
		//         loading: false,
		//         changed: true
		//       });
		//       var str = base64File.replace(/^data:image\/[a-z]+;base64,/, "");
		//       this.props.form.setFieldsValue({
		//         image: str
		//       });
		//     });
		//   }
		// };
		const handleCancelEditProfile = () => {
			cancelEdit();
		};
		const handleSubmit = (e) => {
			e.preventDefault();
			this.setState({
				changed: false
			});
			this.props.form.validateFields((err, values) => {
				if (!err) {
					if (values.dateIdentityCard) {
						values.dateIdentityCard = moment(values.dateIdentityCard.toDate()).format('YYYY-MM-DD');
					}
					let obj = {
						full_name: values.full_name,
						email: values.email,
						mobile: values.mobile
					};
					if (values.avatar[0].originFileObj) {
						getBase64(values.avatar[0].originFileObj, (result) => {
							obj.avata = result.replace(/^data:image\/[a-z]+;base64,/, '');
							submitEditProfile(obj, userId, idToken);
							// this.props.form.resetFields();
						});
					} else {
						submitEditProfile(obj, userId, idToken);
						// this.props.form.resetFields();
					}
				}
			});
		};
		return (
			<ContactCardWrapper className="isoContactCard">
				<div className="isoContactCardHead" />
				<div className="isoContactInfoWrapper">
					<Form onSubmit={handleSubmit}>
						{/* {getFieldDecorator("image", {
              initialValue: profileUpdate.image
            })(<Input type="hidden" />)} */}
						<FormItem {...formItemLayout} label="Full name" hasFeedback>
							{getFieldDecorator('full_name', {
								initialValue: profileUpdate.full_name,
								rules: [
									{
										max: 200,
										message: <IntlMessages id="form.validate.max200" />
									},
									{
										pattern: new RegExp('^[A-Za-z][A-Za-z0-9 .]+$'),
										message: <IntlMessages id="form.validate.fullnameSpecial" />
									}
								]
							})(<Input onChange={this.handleChangedField} type="text" />)}
						</FormItem>
						<FormItem {...formItemLayout} label="Email" hasFeedback>
							{getFieldDecorator('email', {
								rules: [
									{
										required: true,
										message: <IntlMessages id="form.validate.email" />
									},
									{
										type: 'email',
										message: <IntlMessages id="form.validate.email_orther" />
									},
									{
										max: 200,
										message: <IntlMessages id="form.validate.max200" />
									}
								],
								initialValue: profileUpdate.email
							})(<Input onChange={this.handleChangedField} type="email" />)}
						</FormItem>
						<FormItem {...formItemLayout} label={<span>Phone number</span>} hasFeedback>
							{/* {getFieldDecorator('PhoneCheck', {
								initialValue: profileUpdate && profileUpdate.mobile ? profileUpdate.mobile : null
							})} */}
							{getFieldDecorator('mobile', {
								initialValue: profileUpdate && profileUpdate.mobile ? profileUpdate.mobile : null,
								rules: [
									{
										required: true,
										message: <IntlMessages id="form.validate.this" />
									},
									{
										min: 9,
										max: 13,
										message: 'Must be between 9 and 13 characters long.'
									},
									{
										pattern: new RegExp('^[0-9]+$'),
										message: <IntlMessages id="form.validate.phoneSpecial" />
									}
								]
							})(<Input onChange={this.handleChangedField} style={{ width: '100%' }} />)}
						</FormItem>
						<FormItem {...formItemLayout} label="Avatar" style={{ marginBottom: 10 + 'px' }}>
							{getFieldDecorator('avatar', {
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
									name="avatar"
									customRequest={dummyRequest}
									listType="picture"
									accept="image/png, image/jpeg"
									beforeUpload={beforeUpload}
									onChange={this.handleChangedField}
								>
									<Button>
										<Icon type="upload" /> <IntlMessages id="form.upload" />
									</Button>
								</Upload>
							)}
						</FormItem>
						<FormItem>
							<div className="ant-col-xs-24 ant-col-sm-6" />
							<div className="ant-col-xs-24 ant-col-sm-14">
								<DataWrapper style={{ textAlign: 'right' }}>
									<Button style={styleControl(3, '')} onClick={handleCancelEditProfile}>
										<IntlMessages id="button.cancel" />
									</Button>
									<span style={{ margin: '3px' }} />
									<Button
										htmlType="submit"
										style={styleControl(1, '')}
										disabled={!this.state.changed}
									>
										<IntlMessages id="button.save" />
									</Button>
								</DataWrapper>
							</div>
						</FormItem>
					</Form>
				</div>
			</ContactCardWrapper>
		);
	}
}
const WrappedFormEditProfile = Form.create()(NewEditProfile);
export default WrappedFormEditProfile;
