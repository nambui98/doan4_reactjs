import React from 'react';
import PropTypes from 'prop-types';

Contact.propTypes = {};

function Contact(props) {
	return (
		<div className="header-topbar">
			<div className="container-fluid">
				<div className="left">
					<ul className="top-nav">
						<li>
							<span>Email : </span> <a href="#">contact@naturix.com </a>
						</li>
						<li> Phone : +100 3434 1057 </li>
					</ul>
				</div>
				<div className="right">
					<ul className="top-nav">
						<li>
							<form action="#" className="currency">
								<div className="search-selectpicker selectpicker-wrapper">
									<select
										className="selectpicker input-price"
										data-width="100%"
										data-toggle="tooltip"
									>
										<option>USD</option>
										<option>EUR</option>
										<option>ARS</option>
										<option>BRL</option>
										<option>XAF</option>
										<option>HUF</option>
									</select>
								</div>
							</form>
						</li>
						<li>
							<form action="#" className="currency">
								<div className="search-selectpicker selectpicker-wrapper">
									<select
										className="selectpicker input-price"
										data-width="100%"
										data-toggle="tooltip"
									>
										<option>United State</option>
										<option>Argentina</option>
										<option>Germany</option>
										<option>Cameroon</option>
										<option>Hungary</option>
									</select>
								</div>
							</form>
						</li>
						<li className="social-icon">
							<a href="#" className="fa fa-facebook" />
							<a href="#" className="fa fa-twitter" />
							<a href="#" className="fa fa-google-plus" />
							<a href="#" className="fa fa-instagram" />
							<a href="#" className="fa fa-behance" />
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
}

export default Contact;
