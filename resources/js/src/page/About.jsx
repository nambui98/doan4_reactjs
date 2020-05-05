import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Breadcrumb from '../conponents/Breadcrumb';

About.propTypes = {};

function About(props) {
	return [
		<Breadcrumb nameLocation="Về chúng tôi" />,
		<section className="organic-farm-2 sec-space-bottom">
			<img alt="" src="img/extra/sec-img-7.png" className="left-bottom-img" />
			<img alt="" src="img/extra/sec-img-8.png" className="right-top-img" />
			<div className="pattern">
				<img alt="" src="img/icons/white-pattern.png" />
			</div>
			<div className="section-icon">
				<img alt="" src="img/icons/icon-1.png" />
				<div className="ptb-15 icon">
					<i className="fa fa-star" />
					<i className="fa fa-star" />
					<i className="fa fa-star" />
					<span className="light-font"> a taste of </span> <strong>real food</strong>
					<i className="fa fa-star" />
					<i className="fa fa-star" />
					<i className="fa fa-star" />
				</div>
			</div>
			<div className="container rel-div">
				<div className="row">
					<div className="col-sm-6 text-right fsz-16 pt-15 xs-text">
						<p>
							Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod
							tincidunt ut laoreet dolore magna aliquam enim ad minim veniam, quis nostrud exerci tation.
						</p>
					</div>
					<div className="col-sm-6 text-left xs-text">
						<h2 className="section-title">
							{' '}
							<span className="light-font">we are </span>{' '}
							<strong>
								organic farmfood <img src="img/icons/logo-icon.png" alt="" />{' '}
							</strong>{' '}
						</h2>
						<h4 className="sub-title"> ABOUT NATURIX FARMFOOD </h4>
					</div>
				</div>
				<div className="row">
					<div className="col-md-3 col-sm-6 text-center">
						<div className="feature-wrap">
							<img src="img/extra/feature-1.png" alt="" />
							<h3 className="title-1 ptb-15">
								{' '}
								<span className="light-font">fresh from </span> <strong> naturix farm</strong>{' '}
							</h3>
							<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy.</p>
							<Link to="#" className="sm-bnt-wht">
								Read More
							</Link>
						</div>
					</div>
					<div className="col-md-3 col-sm-6 text-center">
						<div className="feature-wrap">
							<img src="img/extra/feature-2.png" alt="" />
							<h3 className="title-1 ptb-15">
								{' '}
								<span className="light-font"> 100%</span> <strong> organic goods</strong>{' '}
							</h3>
							<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy.</p>
							<Link to="#" className="sm-bnt-wht">
								Read More
							</Link>
						</div>
					</div>
					<div className="col-md-3 col-sm-6 text-center">
						<div className="feature-wrap">
							<img src="img/extra/feature-3.png" alt="" />
							<h3 className="title-1 ptb-15">
								{' '}
								<span className="light-font">premium </span> <strong> quality</strong>{' '}
							</h3>
							<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy.</p>
							<Link to="#" className="sm-bnt-wht">
								Read More
							</Link>
						</div>
					</div>
					<div className="col-md-3 col-sm-6 text-center">
						<div className="feature-wrap">
							<img src="img/extra/feature-4.png" alt="" />
							<h3 className="title-1 ptb-15">
								{' '}
								<span className="light-font">100% </span> <strong>natural</strong>{' '}
							</h3>
							<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy.</p>
							<Link to="#" className="sm-bnt-wht">
								Read More
							</Link>
						</div>
					</div>
				</div>
				<div className="rel-div feature-img">
					<img src="img/extra/feature.png" alt="" />
				</div>
			</div>
		</section>,
		<section className="short-about sec-space light-bg">
			<img alt="" src="img/extra/sec-img-1.png" className="left-top-img" />
			<img alt="" src="img/extra/sec-img-3.png" className="center-bg-img" />
			<img alt="" src="img/extra/sec-img-4.png" className="left-bottom-img" />
			<div className="container rel-div">
				<div className="title-wrap pt-15">
					<h4 className="fsz-20">
						{' '}
						<strong>naturix</strong> <span className="light-font"> organic farmfood since 1990 </span>{' '}
					</h4>
					<h2 className="fsz-50 over-txt-title">
						<span className="light-font">
							{' '}
							WE DO <span className="over-txt light-bg">100% ORGANIC GUARANTEE</span>{' '}
						</span>
						<strong>HEALTHY</strong>
					</h2>
					<p>
						Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod
						tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
						nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
						Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod
						tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
						nostrud ullamcorper .{' '}
					</p>
				</div>
				<div className="about-wrap">
					<img className="logo-img" alt="" src="img/extra/sign-1.png" />
					<h4>
						{' '}
						<strong>Gabriel</strong> <span className="light-font"> Johnson </span>{' '}
					</h4>
					<h5 className="clr-txt sub-title-sm">NATURIX OWNER</h5>
					<img className="logo-img" alt="" src="img/extra/about-1.png" />
					<h2 className="font-3 fsz-35">Live Organic Live Healthy</h2>
					<div className="icon">
						<i className="fa fa-star" />
						<i className="fa fa-star" />
						<i className="fa fa-star" />
						<span className="light-font"> a taste of </span> <strong>real food</strong>
						<i className="fa fa-star" />
						<i className="fa fa-star" />
						<i className="fa fa-star" />
					</div>
				</div>
			</div>
		</section>,
		<section className="organic-product sec-space-bottom">
			<div className="container">
				<div className="row sec-space-top">
					<div className="col-lg-6 col-sm-12">
						<div className="row">
							<div className="col-sm-4">
								<div className="organic-prod">
									<img src="img/extra/organic-1.png" alt="" />
									<span className="divider" />
									<h3 className="title-1">
										{' '}
										<Link to="#">
											{' '}
											<span className="light-font">organic </span> <strong> fruits</strong>{' '}
										</Link>{' '}
									</h3>
									<i className="clr-txt font-2"> 52 items </i>
								</div>
							</div>
							<div className="col-sm-4">
								<div className="organic-prod">
									<img src="img/extra/organic-2.png" alt="" />
									<span className="divider" />
									<h3 className="title-1">
										{' '}
										<Link to="#">
											{' '}
											<span className="light-font">fresh </span> <strong> vegetables</strong>{' '}
										</Link>{' '}
									</h3>
									<i className="clr-txt font-2"> 35 items </i>
								</div>
							</div>
							<div className="col-sm-4">
								<div className="organic-prod">
									<img src="img/extra/organic-3.png" alt="" />
									<span className="divider" />
									<h3 className="title-1">
										{' '}
										<Link to="#">
											{' '}
											<span className="light-font">organic </span> <strong> breads</strong>{' '}
										</Link>{' '}
									</h3>
									<i className="clr-txt font-2"> 23 items </i>
								</div>
							</div>
						</div>
					</div>
					<div className="col-lg-6 col-sm-12">
						<div className="organic-prod-info">
							<h4 className="sub-title"> FRESH FROM OUR FARM </h4>
							<h2 className="section-title ptb-15">
								{' '}
								<span className="light-font">220+ </span> <strong>fruits, vegetables </strong>{' '}
								<span className="light-font"> &amp; </span> <strong> lot more</strong>{' '}
							</h2>
							<p className="fsz-16">
								Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod
								tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam,
								quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
								consequat.{' '}
							</p>
						</div>
					</div>
				</div>
				<div className="row sec-space-top">
					<div className="col-lg-6 col-sm-12">
						<div className="organic-prod-info">
							<h4 className="sub-title"> FRESH FROM OUR FARM </h4>
							<h2 className="section-title ptb-15">
								{' '}
								<span className="light-font">115+ </span> <strong>organic juices </strong>{' '}
								<span className="light-font"> and </span> <strong> organic tea</strong>{' '}
							</h2>
							<p className="fsz-16">
								Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod
								tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam,
								quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
								consequat.{' '}
							</p>
						</div>
					</div>
					<div className="col-lg-6 col-sm-12">
						<div className="row">
							<div className="col-sm-4">
								<div className="organic-prod">
									<img src="img/extra/organic-4.png" alt="" />
									<span className="divider" />
									<h3 className="title-1">
										{' '}
										<Link to="#">
											{' '}
											<span className="light-font">organic </span> <strong> juices</strong>{' '}
										</Link>{' '}
									</h3>
									<i className="clr-txt font-2"> 26 items </i>
								</div>
							</div>
							<div className="col-sm-4">
								<div className="organic-prod">
									<img src="img/extra/organic-5.png" alt="" />
									<span className="divider" />
									<h3 className="title-1">
										{' '}
										<Link to="#">
											{' '}
											<span className="light-font">dried </span> <strong> juices</strong>{' '}
										</Link>{' '}
									</h3>
									<i className="clr-txt font-2"> 31 items </i>
								</div>
							</div>
							<div className="col-sm-4">
								<div className="organic-prod">
									<img src="img/extra/organic-6.png" alt="" />
									<span className="divider" />
									<h3 className="title-1">
										{' '}
										<Link to="#">
											{' '}
											<span className="light-font">organic </span> <strong> tea</strong>{' '}
										</Link>{' '}
									</h3>
									<i className="clr-txt font-2"> 17 items </i>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>,
		<div id="to-top-mb" className="to-top mb">
			<i className="fa fa-arrow-circle-o-up" />
		</div>
	];
}

export default About;
