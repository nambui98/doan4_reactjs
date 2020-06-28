import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-domv5';

Footer.propTypes = {};

function Footer(props) {
	return (
		<footer className="page-footer">
			<section className="sec-space light-bg">
				<div className="container">
					<div className="row">
						<div className="col-md-3 col-sm-12 footer-widget">
							<div className="main-logo">
								<Link to="index.html">
									{' '}
									<img alt="" src="img/logo/main-logo.png" />
								</Link>
								<span className="medium-font">ORGANIC CỬA HÀNG</span>
							</div>
							<span className="divider-2" />
							<div className="text-widget">
								<p>Chúng tôi tự hào là nơi cung cấp các sản phẩm an toàn.</p>
								<ul>
									<li>
										{' '}
										<i className="fa fa-map-marker" />{' '}
										<span>
											{' '}
											<strong>Nhân hoà</strong> Mỹ Hào, Hưng Yên{' '}
										</span>{' '}
									</li>
									<li>
										{' '}
										<i className="fa fa-envelope-square" />{' '}
										<span>
											<Link to="#">bvnam98@gmail.com</Link>{' '}
										</span>{' '}
									</li>
									<li>
										{' '}
										<i className="fa fa-phone-square" />{' '}
										<span>
											<Link to="#">0355817589</Link>{' '}
										</span>{' '}
									</li>
								</ul>
							</div>
						</div>
						<div className="col-md-3 col-sm-4 footer-widget">
							<h2 className="title-1">
								{' '}
								<span className="light-font">naturix</span> <strong>thông tin </strong>{' '}
							</h2>
							<span className="divider-2" />
							<ul className="list">
								<li>
									{' '}
									<Link to="/about"> về cửa hàng chúng tôi </Link>{' '}
								</li>
								<li>
									{' '}
									<Link to="/sell"> sản phẩm selling </Link>{' '}
								</li>
								<li>
									{' '}
									<Link to="/blog"> tin tức </Link>{' '}
								</li>
								<li>
									{' '}
									<Link to="/new"> sản phẩm mới </Link>{' '}
								</li>
								<li>
									{' '}
									<Link to="/shop"> cửa hàng </Link>{' '}
								</li>
							</ul>
						</div>
						<div className="col-md-3 col-sm-4 footer-widget">
							<h2 className="title-1">
								{' '}
								<span className="light-font">Tài khoản</span> <strong>của tôi </strong>{' '}
							</h2>
							<span className="divider-2" />
							<ul className="list">
								<li>
									<Link to="/myAccount">Thông tin tài khoản </Link>
								</li>

								<li>
									<Link to="/statusCart"> Đơn hàng</Link>
								</li>
							</ul>
						</div>
						<div className="col-md-3 col-sm-4 footer-widget">
							<h2 className="title-1">
								{' '}
								<span className="light-font">Hình ảnh</span> <strong>instagram </strong>{' '}
							</h2>
							<span className="divider-2" />
							<ul className="instagram-widget">
								<li>
									{' '}
									<Link to="#">
										{' '}
										<img src="img/extra/80x80-1.jpg" alt="" />{' '}
									</Link>{' '}
								</li>
								<li>
									{' '}
									<Link to="#">
										{' '}
										<img src="img/extra/80x80-2.jpg" alt="" />{' '}
									</Link>{' '}
								</li>
								<li>
									{' '}
									<Link to="#">
										{' '}
										<img src="img/extra/80x80-3.jpg" alt="" />{' '}
									</Link>{' '}
								</li>
								<li>
									{' '}
									<Link to="#">
										{' '}
										<img src="img/extra/80x80-4.jpg" alt="" />{' '}
									</Link>{' '}
								</li>
								<li>
									{' '}
									<Link to="#">
										{' '}
										<img src="img/extra/80x80-5.jpg" alt="" />{' '}
									</Link>{' '}
								</li>
								<li>
									{' '}
									<Link to="#">
										{' '}
										<img src="img/extra/80x80-6.jpg" alt="" />{' '}
									</Link>{' '}
								</li>
							</ul>
						</div>
					</div>
				</div>
			</section>
			<section className="footer-bottom">
				<div className="pattern">
					<img alt="" src="img/icons/white-pattern.png" />
				</div>
				<div id="to-top" className="to-top">
					{' '}
					<i className="fa fa-arrow-circle-o-up" />{' '}
				</div>
			</section>
		</footer>
	);
}

export default Footer;
