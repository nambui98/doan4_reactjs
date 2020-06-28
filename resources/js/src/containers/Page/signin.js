import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import Button from '../../components/uielements/button';
import authAction from '../../redux/auth/actions';
import appAction from '../../redux/app/actions';
import IntlMessages from '../../components/utility/intlMessages';
import { Input } from 'antd';
import Form from '../../components/uielements/form';
import clone from 'clone';
import DataWrapper from '../../common/data.style';
import logo from '../../../src/public/images/logo.png';
import icon from '../../../src/public/images/icon-login.png';
const FormItem = Form.Item;

const { login, forget, resetStatusForgot } = authAction;
const { clearMenu } = appAction;

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
			changed: false,
			emailForgot: ''
		};
		this.handleLogin = this.handleLogin.bind(this);
		this.handleForgot = this.handleForgot.bind(this);
	}
	handleChange() {
		this.setState({
			changed: true
		});
	}
	handleLogin = (e) => {
		// e.preventDefault();
		const { login, clearMenu } = this.props;
		this.setState({
			show: 'login'
		});
		this.props.form.validateFieldsAndScroll((err, values) => {
			if (!err) {
				let obj = values;
				login(obj);
				clearMenu();
				this.props.history.push('/admin');
			}
		});
	};
	handleForgot = (e) => {
		this.setState({ show: 'forgot' });
	};
	handleReLogin = (e) => {
		e.preventDefault();
		const { resetStatusForgot } = this.props;
		resetStatusForgot(false);
		this.setState({ show: 'login', changed: false });
	};
	onKeyUp = (e) => {
		if (e.keyCode === 13) {
			let text = e.target.value;
			if (!text) {
				return;
			}
			text = text.trim();
			if (!text) {
				return;
			}
			this.handleLogin();
		}
	};
	onKeyUpForgot = (e) => {
		if (e.keyCode === 13) {
			let text = e.target.value;
			if (!text) {
				return;
			}
			text = text.trim();
			if (!text) {
				return;
			}
			this.handleSend(e);
		}
	};
	handleSend = (e) => {
		e.preventDefault();
		const { forget } = this.props;
		this.props.form.validateFieldsAndScroll((err, values) => {
			if (!err) {
				let email = values.email;
				let usernameForgot = values.usernameForgot;
				forget({ email: email, username: usernameForgot });
				this.setState({
					emailForgot: email
				});
			}
		});
	};
	componentWillUpdate(prevProps) {
		console.log(this.props, prevProps);
		if (this.props.statusForgot !== prevProps.statusForgot && prevProps.statusForgot === true) {
			const { resetStatusForgot } = this.props;
			resetStatusForgot(false);
			this.props.history.push('/sendSuccess/' + this.state.emailForgot);
		}
	}
	checkUserName = (rule, value, callback) => {
		let checkAdmin = false;
		let isLength = false;
		if (value !== 'admin' && value !== '') {
			checkAdmin = false;
		} else {
			checkAdmin = true;
		}
		if (checkAdmin === false) {
			if (value.length >= 6 && value.length <= 20) {
				isLength = true;
				checkAdmin = true;
			} else {
				isLength = false;
			}
		}
		return checkAdmin
			? isLength ? callback() : callback()
			: callback('Must be between 6 and 20 characters long.');
	};
	render() {
		let from = { pathname: '/admin' };
		const { redirectToReferrer } = this.state;
		const { getFieldDecorator } = this.props.form;
		console.log(this.props);
		const formItemLayout = {
			wrapperCol: {
				sm: { span: 24 }
			}
		};
		if (redirectToReferrer) {
			let role_detail = clone(this.props.role_detail);
			if (role_detail && role_detail.length > 0) {
				if (role_detail[0].address === 'dashboard') {
					from = { pathname: '/admin' };
				} else {
					from = { pathname: role_detail[0].address };
				}
			}
			return <Redirect to={from} />;
		}
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
									{this.state.show === 'login' ? (
										<Form onSubmit={this.handleLogin}>
											<FormItem {...formItemLayout} hasFeedback style={{ marginBottom: '10px' }}>
												{getFieldDecorator('username', {
													rules: [
														{
															required: true,
															message: 'Username is required'
														},
														{
															validator: this.checkUserName
														},
														{
															pattern: new RegExp('^[A-Za-z][A-Za-z0-9_.]+$'),
															message: <IntlMessages id="form.validate.usernameSpecial" />
														}
														// {
														//   min: 6,
														//   max: 20,
														//   message: "Must be between 6 and 20 characters long."
														// }
													]
												})(
													<Input
														ref={function(input) {
															if (Input != null) {
																input.focus();
															}
														}}
														className="inputLogin"
														size="large"
														placeholder="Username"
														//autofocus
														onChange={this.handleChange.bind(this)}
														onKeyUp={this.onKeyUp}
													/>
												)}
											</FormItem>
											<FormItem {...formItemLayout} hasFeedback style={{ marginBottom: '10px' }}>
												{getFieldDecorator('password', {
													rules: [
														{
															required: true,
															message: 'Password is required'
														},
														{
															min: 6,
															max: 20,
															message: 'Must be between 6 and 20 characters long.'
														}
													]
												})(
													<Input
														className="inputLogin"
														size="large"
														type="password"
														placeholder="Password"
														onChange={this.handleChange.bind(this)}
														onKeyUp={this.onKeyUp}
													/>
												)}
											</FormItem>
										</Form>
									) : (
										<Form>
											<h4 level={3} style={{ textAlign: 'center', textTransform: 'uppercase' }}>
												Forgot Password
											</h4>
											<FormItem {...formItemLayout} hasFeedback style={{ marginBottom: '10px' }}>
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
													]
												})(
													<Input
														className="inputLogin"
														size="large"
														placeholder="Email"
														onChange={this.handleChange.bind(this)}
														type="email"
														onKeyUp={this.onKeyUpForgot}
													/>
												)}
											</FormItem>
											<FormItem {...formItemLayout} hasFeedback style={{ marginBottom: '10px' }}>
												{getFieldDecorator('usernameForgot', {
													rules: [
														{
															required: true,
															message: <IntlMessages id="form.validate.username" />
														},
														{
															min: 6,
															max: 20,
															message: <IntlMessages id="form.validate.username6_20" />
														},
														{
															whitespace: true,
															message: <IntlMessages id="form.validate.usernameOrther" />
														},
														{
															pattern: new RegExp('^[A-Za-z][A-Za-z0-9_.]+$'),
															message: <IntlMessages id="form.validate.usernameSpecial" />
														}
													]
												})(
													<Input
														className="inputLogin"
														size="large"
														placeholder="User name"
														onKeyUp={this.onKeyUpForgot}
														onChange={this.handleChange.bind(this)}
													/>
												)}
											</FormItem>
										</Form>
									)}

									{this.state.show === 'login' ? (
										[
											<div className="isoInputWrapper isoLeftRightComponent" key="loginsubmit">
												<Button
													className="loginButton"
													onClick={this.handleLogin}
													disabled={!this.state.changed}
													htmlType="submit"
												>
													<IntlMessages id="button.login" />
												</Button>
											</div>,
											<button
												style={{ marginTop: '5px', textDecoration: 'underline' }}
												href="#"
												onClick={this.handleForgot}
												key="loginforgot"
											>
												Forgot password
											</button>
										]
									) : (
										<div>
											<Button className="loginButton" onClick={this.handleReLogin}>
												<i className="ion-android-arrow-back"> </i>{' '}
												<IntlMessages id="button.login" />
											</Button>
											<Button
												style={{ marginLeft: '5px' }}
												className="loginButton"
												onClick={this.handleSend}
												disabled={!this.state.changed}
											>
												SEND
											</Button>
										</div>
									)}
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
		role_detail: state.Auth.role_detail,
		statusForgot: state.Auth.statusForgot
	}),
	{ login, clearMenu, forget, resetStatusForgot }
)(WrappedSingIn);
