import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-domv5';
import { Modal, Button } from 'react-bootstrap';

SubscribeNewsletter.propTypes = {};

function SubscribeNewsletter(props) {
	return (
		<section id="subscribe-popups" className="subscribe-me popups-wrap">
			<Modal // onHide={props.toggle} // show={true}
			dialogClassName="subscribe-me popups-wrap">
				// style={{ padding: 0 }}
				{/* <div className="modal-content"> */}
				<button type="button" className="sb-close-btn close popup-cls">
					{' '}
					<i className="fa-times fa clr-txt" />{' '}
				</button>
				<div className="subscribe-wrap">
					<div className="main-logo">
						<Link href="index.html">
							{' '}
							<img alt="" src="img/logo/main-logo.png" />
						</Link>
					</div>
					<div className="title-wrap">
						<h2 className="section-title">
							{' '}
							<strong>Subscribe Newsletter</strong>{' '}
						</h2>
						<h4 className="fsz-12"> Join our newsletter for free &amp; get latest news weekly </h4>
					</div>
					<form className="newsletter-form">
						<div className="form-group">
							<input
								className="form-control"
								placeholder="enter your email address"
								required
								type="text"
							/>
						</div>
						<div className="form-group">
							<button className="theme-btn upper-text" type="submit">
								{' '}
								<strong> subscribe </strong>{' '}
							</button>
						</div>
					</form>
				</div>
				{/* </div> */}
			</Modal>
		</section>
	);
}

export default SubscribeNewsletter;
