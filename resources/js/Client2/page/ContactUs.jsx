import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

ContactUs.propTypes = {};

function ContactUs(props) {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	return (
		<div>
			<section className="breadcrumb-bg">
				<div className="theme-container container ">
					<div className="site-breadcumb white-clr">
						<h2 className="section-title">
							{' '}
							<strong className="clr-txt">naturix </strong> <span className="light-font">Shop </span>{' '}
						</h2>
						<ol className="breadcrumb breadcrumb-menubar">
							<li>
								{' '}
								<a href="#"> Trang chủ </a> Liên hệ
							</li>
						</ol>
					</div>
				</div>
			</section>
			{/*Breadcrumb Section End*/}
			{/* Shop Starts*/}
			<section className="contact-wrap sec-space-bottom">
				<div className="container rel-div pt-50">
					<div className="row">
						<div className="col-md-8">
							<div className="contact-map">
								{' '}
								<div id="map" />{' '}
							</div>
						</div>
						<div className="col-md-4">
							<div className="contact-details">
								<h3 className="fsz-25">
									<span className="light-font">Naturix</span> <strong>Địa chỉ </strong>
								</h3>
								<h6 className="sub-title-1 pb-15">ORGANIC CỬA HÀNG</h6>
								<h5 className="clr-txt fsz-12 pt-15">NATURIX CỬA HÀNG</h5>
								<p>Nhân hoà, Mỹ hào, Hưng Yên</p>
								<ul>
									<li>
										{' '}
										<strong>Điện thoại:</strong> <i>0355817589</i>{' '}
									</li>
									<li>
										{' '}
										<strong>Email: </strong>{' '}
										<i>
											{' '}
											<a href="#">bvnam98@gmail.com</a>{' '}
										</i>{' '}
									</li>
									<li>
										{' '}
										<strong>Skype: </strong>{' '}
										<i>
											{' '}
											<a href="#"> nambv98@outlook.com.vn </a>{' '}
										</i>{' '}
									</li>
									<li>
										{' '}
										<strong>Facebook: </strong>{' '}
										<i>
											{' '}
											<a href="#">https://www.facebook.com/songoku.bui </a>{' '}
										</i>{' '}
									</li>
									<li>
										{' '}
										<strong>Twitter: </strong>{' '}
										<i>
											{' '}
											<a href="#"> bvnam98.twitter </a>{' '}
										</i>{' '}
									</li>
								</ul>
							</div>
						</div>
					</div>
					<div className="divider-full-1" />
					{/* <div className="pt-50 col-md-8 col-md-offset-2">
						<h3 className="fsz-25 text-center">
							<span className="light-font">Contact </span> <strong>naturix </strong>
						</h3>
						<h6 className="sub-title-1 text-center">ORGANIC STORE</h6>
						<div className="contact-form pt-50">
							<form className="contact-form row" id="contact-form">
								<div className="form-group col-sm-4">
									<input
										className="form-control"
										placeholder="Name"
										name="Name"
										id="Name"
										required
										type="text"
									/>
								</div>
								<div className="form-group col-sm-4">
									<input
										className="form-control"
										placeholder="Email"
										name="Email"
										id="Email"
										required
										type="email"
									/>
								</div>
								<div className="form-group col-sm-4">
									<input
										className="form-control"
										placeholder="Phone"
										name="Phone"
										id="Phone"
										type="text"
									/>
								</div>
								<div className="form-group col-sm-12">
									<textarea
										className="form-control"
										placeholder="Message"
										name="Message"
										id="Message"
										cols={12}
										rows={4}
										defaultValue={''}
									/>
								</div>
								<div className="form-group col-sm-12 text-center pt-15">
									<button className="theme-btn" type="submit">
										{' '}
										<strong> SEND EMAIL </strong>{' '}
									</button>
								</div>
							</form>
						</div>
					</div>
				 */}
				</div>
			</section>
		</div>
	);
}

export default ContactUs;
