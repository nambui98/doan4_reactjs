import React from 'react';
import PropTypes from 'prop-types';

ContactUs.propTypes = {};

function ContactUs(props) {
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
								<a href="#"> Home </a> Contact
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
									<span className="light-font">Naturix</span> <strong>Address </strong>
								</h3>
								<h6 className="sub-title-1 pb-15">ORGANIC STORE</h6>
								<h5 className="clr-txt fsz-12 pt-15">NATURIX STORE</h5>
								<p>142 West newton, NY 19088, United States</p>
								<ul>
									<li>
										{' '}
										<strong>Call:</strong> <i>+7 (100) 2234 999</i>{' '}
									</li>
									<li>
										{' '}
										<strong>Email: </strong>{' '}
										<i>
											{' '}
											<a href="#">info@montero.com</a>{' '}
										</i>{' '}
									</li>
									<li>
										{' '}
										<strong>Skype: </strong>{' '}
										<i>
											{' '}
											<a href="#"> Montero.Property </a>{' '}
										</i>{' '}
									</li>
									<li>
										{' '}
										<strong>Facebook: </strong>{' '}
										<i>
											{' '}
											<a href="#"> Montero.facebook </a>{' '}
										</i>{' '}
									</li>
									<li>
										{' '}
										<strong>Twitter: </strong>{' '}
										<i>
											{' '}
											<a href="#"> @Montero.Property </a>{' '}
										</i>{' '}
									</li>
								</ul>
							</div>
						</div>
					</div>
					<div className="divider-full-1" />
					<div className="pt-50 col-md-8 col-md-offset-2">
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
				</div>
			</section>
		</div>
	);
}

export default ContactUs;
