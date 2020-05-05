import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

OrganicFarmfood.propTypes = {};

function OrganicFarmfood(props) {
	return (
		<section className="organic-farm sec-space-top light-bg">
			<img alt="" src="img/extra/sec-img-1.png" className="left-bg-img" />
			<img alt="" src="img/extra/sec-img-2.png" className="center-bg-img" />
			<div className="container rel-div">
				<div className="title-wrap">
					<h2 className="section-title">
						{' '}
						<span className="light-font">we are </span>{' '}
						<strong>
							organic farmfood <img src="img/icons/logo-icon.png" alt="" />{' '}
						</strong>{' '}
					</h2>
					<h4 className="sub-title">
						{' '}
						<span> ABOUT NATURIX FARMFOOD </span>{' '}
					</h4>
					<p>
						Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod
						tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
						nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.{' '}
					</p>
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
		</section>
	);
}

export default OrganicFarmfood;
