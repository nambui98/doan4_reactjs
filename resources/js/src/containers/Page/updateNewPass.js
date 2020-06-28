import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from '../../components/uielements/button';
import authAction from '../../redux/auth/actions';
import IntlMessages from '../../components/utility/intlMessages';
import { Input } from 'antd';
import Form from '../../components/uielements/form';
import DataWrapper from '../../common/data.style';
import logo from '../../../src/public/images/logo.png';
import icon from '../../../src/public/images/icon-login.png';
const FormItem = Form.Item;

const { confirmPass } = authAction;

class SignIn extends Component {
	constructor(props) {
		super(props);
		this.state = {
			redirectToReferrer: props.isLoggedIn,
			show: 'login',
			userLogin: {
				username: '',
				password: ''
			},
			changed: false
		};
	}
	handleChange() {
		this.setState({
			changed: true
		});
	}
	handleSave = (e) => {
		e.preventDefault();
		const { confirmPass } = this.props;
		this.props.form.validateFieldsAndScroll((err, values) => {
			if (!err) {
				let obj = {
					confirmCode: this.props.location.pathname.replace('/confirm_password/', ''),
					platform: 'web',
					password: values.newpass,
					confirmPassword: values.confirmpass
				};
				confirmPass(obj);
				this.props.history.push('/signin');
			}
		});
	};
	compareToFirstPassword = (rule, value, callback) => {
		const form = this.props.form;
		if (value && value.length >= 5 && value !== form.getFieldValue('newpass')) {
			callback('Password mismatch');
		} else {
			callback();
		}
	};
	componentDidMount() {}
	render() {
		const { getFieldDecorator } = this.props.form;
		const formItemLayout = {
			wrapperCol: {
				sm: { span: 24 }
			}
		};

		return (
			<DataWrapper>
				<div className="my-body">
					<div className="my-container">
						<div className="my-logo">
							<a href="#home">
								<img src={logo} alt="Beta Three" />
							</a>
						</div>
						<div className="bound-login">
							<div className="outer-form">
								<div className="icon-login">
									<span>
										<img src={icon} alt="Beta Three" />
									</span>
								</div>
								<div className="content-login">
									<Form>
										<h4 level={3} style={{ textAlign: 'center', textTransform: 'uppercase' }}>
											Reset password
										</h4>
										<FormItem {...formItemLayout} style={{ marginBottom: '10px' }} hasFeedback>
											{getFieldDecorator('newpass', {
												rules: [
													{
														required: true,
														message: <IntlMessages id="form.validate.this" />
													},
													{
														min: 6,
														message: <IntlMessages id="form.validate.username6_20" />
													},
													{
														max: 20,
														message: <IntlMessages id="form.validate.username6_20" />
													},
													{
														whitespace: true,
														message: <IntlMessages id="form.validate.passwordOrther" />
													},
													{
														validator: this.validateToNextPassword
													}
												]
											})(
												<Input
													className="inputLogin"
													size="large"
													onChange={this.handleChange.bind(this)}
													placeholder="New Password"
													type="password"
												/>
											)}
										</FormItem>
										<FormItem {...formItemLayout} style={{ marginBottom: '10px' }} hasFeedback>
											{getFieldDecorator('confirmpass', {
												rules: [
													{
														required: true,
														message: <IntlMessages id="form.validate.this" />
													},
													{
														min: 6,
														message: <IntlMessages id="form.validate.username6_20" />
													},
													{
														max: 20,
														message: <IntlMessages id="form.validate.username6_20" />
													},
													{
														whitespace: true,
														message: <IntlMessages id="form.validate.passwordOrther" />
													},
													{
														validator: this.compareToFirstPassword
													}
												]
											})(
												<Input
													onChange={this.handleChange.bind(this)}
													placeholder="Confirm Password"
													className="inputLogin"
													size="large"
													type="password"
												/>
											)}
										</FormItem>
									</Form>
									<div className="isoInputWrapper isoLeftRightComponent">
										<Button
											className="loginButton"
											onClick={this.handleSave}
											disabled={!this.state.changed}
										>
											<IntlMessages id="button.save" />
										</Button>
									</div>
								</div>
							</div>
							<div className="footer-login hidden-xs">
								<div className="address">2020 @ Copyright Fors Co,. Ltd</div>
							</div>
						</div>
					</div>
				</div>
			</DataWrapper>
		);
	}
}
const WrappedSingIn = Form.create()(SignIn);
export default connect(
	(state) => ({
		isLoggedIn: state.Auth.idToken !== null ? true : false,
		role_detail: state.Auth.role_detail
	}),
	{ confirmPass }
)(WrappedSingIn);
