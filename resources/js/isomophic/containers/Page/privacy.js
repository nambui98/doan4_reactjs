import React, { Component } from 'react';
import logo from '../../../src/public/images/logo.png';
import DataWrapper from '../../common/data.style';

export default class extends Component {
	handleReLogin = (e) => {
		e.preventDefault();
		this.props.history.push('/admin');
	};
	render() {
		return (
			<DataWrapper>
				<div className="my-body">
					<div className="my-container">
						<div className="my-logo">
							<a href="#home">
								<img src={logo} alt="Beta Three" />
							</a>
						</div>
						<div className="bound-login" style={{ backgroundColor: '#fff' }}>
							<div className="outer-form">
								<h4 style={{ padding: '0 20px' }}>
									When you use one of our offerings, you trust us with your personal and professional
									financial information. We help safeguard that data and protect your privacy by using
									industry-leading technology and practices.
								</h4>
								{/* <div className="icon-success" style={{ display: 'flex', justifyContent: 'center' }}>
									<i
										className="ion-checkmark-circled"
										style={{ fontSize: '40px', color: 'rgb(82, 196, 26)', textAlign: 'center' }}
									/>
								</div>
								<div className="content-login" style={{ paddingTop: '0' }}>
									<h2>
										Successfully sent to <strong>{this.props.match.params.email}</strong>, please
										email to confirm
									</h2>
									<Button className="loginButton" onClick={this.handleReLogin}>
										<i className="ion-android-arrow-back"> </i> <IntlMessages id="button.login" />
									</Button>
								</div> */}
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
