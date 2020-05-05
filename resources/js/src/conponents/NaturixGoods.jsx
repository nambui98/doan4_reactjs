import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

NaturixGoods.propTypes = {};

function NaturixGoods(props) {
	return (
		<section className="naturix-goods sec-space-bottom">
			<div className="container">
				<div className="title-wrap">
					<h4 className="sub-title"> FRESH FROM OUR FARM </h4>
					<h2 className="section-title">
						{' '}
						<span className="round-shape">
							{' '}
							<span className="light-font">naturix </span>{' '}
							<strong>
								{' '}
								organic goods <img src="img/icons/logo-icon.png" alt="" />
							</strong>{' '}
						</span>{' '}
					</h2>
				</div>
				<div className="tabs-box text-center">
					<ul className="theme-tabs small">
						<li className="">
							<Link to="#naturix-tab-1" data-toggle="tab">
								{' '}
								<span className="light-font">all </span> <strong>goods </strong>{' '}
							</Link>
						</li>
						<li className="active">
							<Link to="#naturix-tab-2" data-toggle="tab">
								{' '}
								<span className="light-font">organic </span> <strong>vegetables </strong>{' '}
							</Link>
						</li>
						<li className="">
							<Link to="#naturix-tab-3" data-toggle="tab">
								{' '}
								<span className="light-font">organic </span> <strong>fruits </strong>{' '}
							</Link>
						</li>
						<li className="">
							<Link to="#naturix-tab-4" data-toggle="tab">
								{' '}
								<span className="light-font">organic </span> <strong>tea </strong>{' '}
							</Link>
						</li>
						<li className="">
							<Link to="#naturix-tab-5" data-toggle="tab">
								{' '}
								<span className="light-font">all </span> <strong>bread </strong>{' '}
							</Link>
						</li>
						<li className="">
							<Link to="#naturix-tab-6" data-toggle="tab">
								{' '}
								<span className="light-font">organic </span> <strong>juices </strong>{' '}
							</Link>
						</li>
					</ul>
				</div>
				<div className="tab-content organic-content row">
					<div id="naturix-tab-1" className="tab-pane fade active in">
						<div className="naturix-slider-1 dots-1">
							<div className="item">
								<div className="product-box">
									<div className="product-media">
										<img className="prod-img" alt="" src="img/products/7.png" />
										<img className="shape" alt="" src="img/icons/shap-small.png" />
										<div className="prod-icons">
											<Link to="#" className="fa fa-heart" />
											<Link to="#" className="fa fa-shopping-basket" />
											<Link
												to="#product-preview"
												data-toggle="modal"
												className="fa fa-expand"
											/>
										</div>
									</div>
									<div className="product-caption">
										<h3 className="product-title">
											<Link to="#">
												{' '}
												<span className="light-font"> organic </span> <strong>mushroom</strong>
											</Link>
										</h3>
										<div className="price">
											<strong className="clr-txt">$50.00 </strong>{' '}
											<del className="light-font">$65.00 </del>
										</div>
									</div>
								</div>
								<div className="product-box">
									<div className="product-media">
										<img className="prod-img" alt="" src="img/products/6.png" />
										<img className="shape" alt="" src="img/icons/shap-small.png" />
										<div className="prod-icons">
											<Link to="#" className="fa fa-heart" />
											<Link to="#" className="fa fa-shopping-basket" />
											<Link
												to="#product-preview"
												data-toggle="modal"
												className="fa fa-expand"
											/>
										</div>
									</div>
									<div className="product-caption">
										<h3 className="product-title">
											<Link to="#">
												{' '}
												<span className="light-font"> organic </span> <strong>onion</strong>
											</Link>
										</h3>
										<div className="price">
											<strong className="clr-txt">$50.00 </strong>{' '}
											<del className="light-font">$65.00 </del>
										</div>
									</div>
								</div>
							</div>
							<div className="item">
								<div className="product-box">
									<div className="product-media">
										<img className="prod-img" alt="" src="img/products/3.png" />
										<img className="shape" alt="" src="img/icons/shap-small.png" />
										<div className="prod-icons">
											<Link to="#" className="fa fa-heart" />
											<Link to="#" className="fa fa-shopping-basket" />
											<Link
												to="#product-preview"
												data-toggle="modal"
												className="fa fa-expand"
											/>
										</div>
									</div>
									<div className="product-caption">
										<h3 className="product-title">
											<Link to="#">
												{' '}
												<span className="light-font"> organic </span> <strong>cherry</strong>
											</Link>
										</h3>
										<div className="price">
											<strong className="clr-txt">$50.00 </strong>{' '}
											<del className="light-font">$65.00 </del>
										</div>
									</div>
								</div>
								<div className="product-box">
									<div className="product-media">
										<img className="prod-img" alt="" src="img/products/5.png" />
										<img className="shape" alt="" src="img/icons/shap-small.png" />
										<div className="prod-icons">
											<Link to="#" className="fa fa-heart" />
											<Link to="#" className="fa fa-shopping-basket" />
											<Link
												to="#product-preview"
												data-toggle="modal"
												className="fa fa-expand"
											/>
										</div>
									</div>
									<div className="product-caption">
										<h3 className="product-title">
											<Link to="#">
												{' '}
												<span className="light-font"> organic </span> <strong>pinapple</strong>
											</Link>
										</h3>
										<div className="price">
											<strong className="clr-txt">$50.00 </strong>{' '}
											<del className="light-font">$65.00 </del>
										</div>
									</div>
								</div>
							</div>
							<div className="item">
								<div className="product-box">
									<div className="product-media">
										<img className="prod-img" alt="" src="img/products/2.png" />
										<img className="shape" alt="" src="img/icons/shap-small.png" />
										<div className="prod-icons">
											<Link to="#" className="fa fa-heart" />
											<Link to="#" className="fa fa-shopping-basket" />
											<Link
												to="#product-preview"
												data-toggle="modal"
												className="fa fa-expand"
											/>
										</div>
									</div>
									<div className="product-caption">
										<h3 className="product-title">
											<Link to="#">
												{' '}
												<span className="light-font"> organic </span> <strong>cabbage</strong>
											</Link>
										</h3>
										<div className="price">
											<strong className="clr-txt">$50.00 </strong>{' '}
											<del className="light-font">$65.00 </del>
										</div>
									</div>
								</div>
								<div className="product-box">
									<div className="product-media">
										<img className="prod-img" alt="" src="img/products/4.png" />
										<img className="shape" alt="" src="img/icons/shap-small.png" />
										<div className="prod-icons">
											<Link to="#" className="fa fa-heart" />
											<Link to="#" className="fa fa-shopping-basket" />
											<Link
												to="#product-preview"
												data-toggle="modal"
												className="fa fa-expand"
											/>
										</div>
									</div>
									<div className="product-caption">
										<h3 className="product-title">
											<Link to="#">
												{' '}
												<span className="light-font"> green </span> <strong>salad</strong>
											</Link>
										</h3>
										<div className="price">
											<strong className="clr-txt">$50.00 </strong>{' '}
											<del className="light-font">$65.00 </del>
										</div>
									</div>
								</div>
							</div>
							<div className="item">
								<div className="product-box">
									<div className="product-media">
										<img className="prod-img" alt="" src="img/products/8.png" />
										<img className="shape" alt="" src="img/icons/shap-small.png" />
										<div className="prod-icons">
											<Link to="#" className="fa fa-heart" />
											<Link to="#" className="fa fa-shopping-basket" />
											<Link
												to="#product-preview"
												data-toggle="modal"
												className="fa fa-expand"
											/>
										</div>
									</div>
									<div className="product-caption">
										<h3 className="product-title">
											<Link to="#">
												{' '}
												<span className="light-font"> organic </span> <strong>pepper </strong>
											</Link>
										</h3>
										<div className="price">
											<strong className="clr-txt">$50.00 </strong>{' '}
											<del className="light-font">$65.00 </del>
										</div>
									</div>
								</div>
								<div className="product-box">
									<div className="product-media">
										<img className="prod-img" alt="" src="img/products/1.png" />
										<img className="shape" alt="" src="img/icons/shap-small.png" />
										<div className="prod-icons">
											<Link to="#" className="fa fa-heart" />
											<Link to="#" className="fa fa-shopping-basket" />
											<Link
												to="#product-preview"
												data-toggle="modal"
												className="fa fa-expand"
											/>
										</div>
									</div>
									<div className="product-caption">
										<h3 className="product-title">
											<Link to="#">
												{' '}
												<span className="light-font"> organic </span> <strong>tomato</strong>
											</Link>
										</h3>
										<div className="price">
											<strong className="clr-txt">$50.00 </strong>{' '}
											<del className="light-font">$65.00 </del>
										</div>
									</div>
								</div>
							</div>
							<div className="item">
								<div className="product-box">
									<div className="product-media">
										<img className="prod-img" alt="" src="img/products/3.png" />
										<img className="shape" alt="" src="img/icons/shap-small.png" />
										<div className="prod-icons">
											<Link to="#" className="fa fa-heart" />
											<Link to="#" className="fa fa-shopping-basket" />
											<Link
												to="#product-preview"
												data-toggle="modal"
												className="fa fa-expand"
											/>
										</div>
									</div>
									<div className="product-caption">
										<h3 className="product-title">
											<Link to="#">
												{' '}
												<span className="light-font"> organic </span> <strong>cherry</strong>
											</Link>
										</h3>
										<div className="price">
											<strong className="clr-txt">$50.00 </strong>{' '}
											<del className="light-font">$65.00 </del>
										</div>
									</div>
								</div>
								<div className="product-box">
									<div className="product-media">
										<img className="prod-img" alt="" src="img/products/5.png" />
										<img className="shape" alt="" src="img/icons/shap-small.png" />
										<div className="prod-icons">
											<Link to="#" className="fa fa-heart" />
											<Link to="#" className="fa fa-shopping-basket" />
											<Link
												to="#product-preview"
												data-toggle="modal"
												className="fa fa-expand"
											/>
										</div>
									</div>
									<div className="product-caption">
										<h3 className="product-title">
											<Link to="#">
												{' '}
												<span className="light-font"> organic </span> <strong>pinapple</strong>
											</Link>
										</h3>
										<div className="price">
											<strong className="clr-txt">$50.00 </strong>{' '}
											<del className="light-font">$65.00 </del>
										</div>
									</div>
								</div>
							</div>
							<div className="item">
								<div className="product-box">
									<div className="product-media">
										<img className="prod-img" alt="" src="img/products/2.png" />
										<img className="shape" alt="" src="img/icons/shap-small.png" />
										<div className="prod-icons">
											<Link to="#" className="fa fa-heart" />
											<Link to="#" className="fa fa-shopping-basket" />
											<Link
												to="#product-preview"
												data-toggle="modal"
												className="fa fa-expand"
											/>
										</div>
									</div>
									<div className="product-caption">
										<h3 className="product-title">
											<Link to="#">
												{' '}
												<span className="light-font"> organic </span> <strong>cabbage</strong>
											</Link>
										</h3>
										<div className="price">
											<strong className="clr-txt">$50.00 </strong>{' '}
											<del className="light-font">$65.00 </del>
										</div>
									</div>
								</div>
								<div className="product-box">
									<div className="product-media">
										<img className="prod-img" alt="" src="img/products/4.png" />
										<img className="shape" alt="" src="img/icons/shap-small.png" />
										<div className="prod-icons">
											<Link to="#" className="fa fa-heart" />
											<Link to="#" className="fa fa-shopping-basket" />
											<Link
												to="#product-preview"
												data-toggle="modal"
												className="fa fa-expand"
											/>
										</div>
									</div>
									<div className="product-caption">
										<h3 className="product-title">
											<Link to="#">
												{' '}
												<span className="light-font"> green </span> <strong>salad</strong>
											</Link>
										</h3>
										<div className="price">
											<strong className="clr-txt">$50.00 </strong>{' '}
											<del className="light-font">$65.00 </del>
										</div>
									</div>
								</div>
							</div>
							<div className="item">
								<div className="product-box">
									<div className="product-media">
										<img className="prod-img" alt="" src="img/products/7.png" />
										<img className="shape" alt="" src="img/icons/shap-small.png" />
										<div className="prod-icons">
											<Link to="#" className="fa fa-heart" />
											<Link to="#" className="fa fa-shopping-basket" />
											<Link
												to="#product-preview"
												data-toggle="modal"
												className="fa fa-expand"
											/>
										</div>
									</div>
									<div className="product-caption">
										<h3 className="product-title">
											<Link to="#">
												{' '}
												<span className="light-font"> organic </span> <strong>mushroom</strong>
											</Link>
										</h3>
										<div className="price">
											<strong className="clr-txt">$50.00 </strong>{' '}
											<del className="light-font">$65.00 </del>
										</div>
									</div>
								</div>
								<div className="product-box">
									<div className="product-media">
										<img className="prod-img" alt="" src="img/products/6.png" />
										<img className="shape" alt="" src="img/icons/shap-small.png" />
										<div className="prod-icons">
											<Link to="#" className="fa fa-heart" />
											<Link to="#" className="fa fa-shopping-basket" />
											<Link
												to="#product-preview"
												data-toggle="modal"
												className="fa fa-expand"
											/>
										</div>
									</div>
									<div className="product-caption">
										<h3 className="product-title">
											<Link to="#">
												{' '}
												<span className="light-font"> organic </span> <strong>onion</strong>
											</Link>
										</h3>
										<div className="price">
											<strong className="clr-txt">$50.00 </strong>{' '}
											<del className="light-font">$65.00 </del>
										</div>
									</div>
								</div>
							</div>
							<div className="item">
								<div className="product-box">
									<div className="product-media">
										<img className="prod-img" alt="" src="img/products/8.png" />
										<img className="shape" alt="" src="img/icons/shap-small.png" />
										<div className="prod-icons">
											<Link to="#" className="fa fa-heart" />
											<Link to="#" className="fa fa-shopping-basket" />
											<Link
												to="#product-preview"
												data-toggle="modal"
												className="fa fa-expand"
											/>
										</div>
									</div>
									<div className="product-caption">
										<h3 className="product-title">
											<Link to="#">
												{' '}
												<span className="light-font"> organic </span> <strong>pepper </strong>
											</Link>
										</h3>
										<div className="price">
											<strong className="clr-txt">$50.00 </strong>{' '}
											<del className="light-font">$65.00 </del>
										</div>
									</div>
								</div>
								<div className="product-box">
									<div className="product-media">
										<img className="prod-img" alt="" src="img/products/1.png" />
										<img className="shape" alt="" src="img/icons/shap-small.png" />
										<div className="prod-icons">
											<Link to="#" className="fa fa-heart" />
											<Link to="#" className="fa fa-shopping-basket" />
											<Link
												to="#product-preview"
												data-toggle="modal"
												className="fa fa-expand"
											/>
										</div>
									</div>
									<div className="product-caption">
										<h3 className="product-title">
											<Link to="#">
												{' '}
												<span className="light-font"> organic </span> <strong>tomato</strong>
											</Link>
										</h3>
										<div className="price">
											<strong className="clr-txt">$50.00 </strong>{' '}
											<del className="light-font">$65.00 </del>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div id="naturix-tab-2" className="tab-pane fade">
						<div className="naturix-slider-1 dots-1">
							<div className="item">
								<div className="product-box">
									<div className="product-media">
										<img className="prod-img" alt="" src="img/products/7.png" />
										<img className="shape" alt="" src="img/icons/shap-small.png" />
										<div className="prod-icons">
											<Link to="#" className="fa fa-heart" />
											<Link to="#" className="fa fa-shopping-basket" />
											<Link
												to="#product-preview"
												data-toggle="modal"
												className="fa fa-expand"
											/>
										</div>
									</div>
									<div className="product-caption">
										<h3 className="product-title">
											<Link to="#">
												{' '}
												<span className="light-font"> organic </span> <strong>mushroom</strong>
											</Link>
										</h3>
										<div className="price">
											<strong className="clr-txt">$50.00 </strong>{' '}
											<del className="light-font">$65.00 </del>
										</div>
									</div>
								</div>
								<div className="product-box">
									<div className="product-media">
										<img className="prod-img" alt="" src="img/products/6.png" />
										<img className="shape" alt="" src="img/icons/shap-small.png" />
										<div className="prod-icons">
											<Link to="#" className="fa fa-heart" />
											<Link to="#" className="fa fa-shopping-basket" />
											<Link
												to="#product-preview"
												data-toggle="modal"
												className="fa fa-expand"
											/>
										</div>
									</div>
									<div className="product-caption">
										<h3 className="product-title">
											<Link to="#">
												{' '}
												<span className="light-font"> organic </span> <strong>onion</strong>
											</Link>
										</h3>
										<div className="price">
											<strong className="clr-txt">$50.00 </strong>{' '}
											<del className="light-font">$65.00 </del>
										</div>
									</div>
								</div>
							</div>
							<div className="item">
								<div className="product-box">
									<div className="product-media">
										<img className="prod-img" alt="" src="img/products/3.png" />
										<img className="shape" alt="" src="img/icons/shap-small.png" />
										<div className="prod-icons">
											<Link to="#" className="fa fa-heart" />
											<Link to="#" className="fa fa-shopping-basket" />
											<Link
												to="#product-preview"
												data-toggle="modal"
												className="fa fa-expand"
											/>
										</div>
									</div>
									<div className="product-caption">
										<h3 className="product-title">
											<Link to="#">
												{' '}
												<span className="light-font"> organic </span> <strong>cherry</strong>
											</Link>
										</h3>
										<div className="price">
											<strong className="clr-txt">$50.00 </strong>{' '}
											<del className="light-font">$65.00 </del>
										</div>
									</div>
								</div>
								<div className="product-box">
									<div className="product-media">
										<img className="prod-img" alt="" src="img/products/5.png" />
										<img className="shape" alt="" src="img/icons/shap-small.png" />
										<div className="prod-icons">
											<Link to="#" className="fa fa-heart" />
											<Link to="#" className="fa fa-shopping-basket" />
											<Link
												to="#product-preview"
												data-toggle="modal"
												className="fa fa-expand"
											/>
										</div>
									</div>
									<div className="product-caption">
										<h3 className="product-title">
											<Link to="#">
												{' '}
												<span className="light-font"> organic </span> <strong>pinapple</strong>
											</Link>
										</h3>
										<div className="price">
											<strong className="clr-txt">$50.00 </strong>{' '}
											<del className="light-font">$65.00 </del>
										</div>
									</div>
								</div>
							</div>
							<div className="item">
								<div className="product-box">
									<div className="product-media">
										<img className="prod-img" alt="" src="img/products/2.png" />
										<img className="shape" alt="" src="img/icons/shap-small.png" />
										<div className="prod-icons">
											<Link to="#" className="fa fa-heart" />
											<Link to="#" className="fa fa-shopping-basket" />
											<Link
												to="#product-preview"
												data-toggle="modal"
												className="fa fa-expand"
											/>
										</div>
									</div>
									<div className="product-caption">
										<h3 className="product-title">
											<Link to="#">
												{' '}
												<span className="light-font"> organic </span> <strong>cabbage</strong>
											</Link>
										</h3>
										<div className="price">
											<strong className="clr-txt">$50.00 </strong>{' '}
											<del className="light-font">$65.00 </del>
										</div>
									</div>
								</div>
								<div className="product-box">
									<div className="product-media">
										<img className="prod-img" alt="" src="img/products/4.png" />
										<img className="shape" alt="" src="img/icons/shap-small.png" />
										<div className="prod-icons">
											<Link to="#" className="fa fa-heart" />
											<Link to="#" className="fa fa-shopping-basket" />
											<Link
												to="#product-preview"
												data-toggle="modal"
												className="fa fa-expand"
											/>
										</div>
									</div>
									<div className="product-caption">
										<h3 className="product-title">
											<Link to="#">
												{' '}
												<span className="light-font"> green </span> <strong>salad</strong>
											</Link>
										</h3>
										<div className="price">
											<strong className="clr-txt">$50.00 </strong>{' '}
											<del className="light-font">$65.00 </del>
										</div>
									</div>
								</div>
							</div>
							<div className="item">
								<div className="product-box">
									<div className="product-media">
										<img className="prod-img" alt="" src="img/products/8.png" />
										<img className="shape" alt="" src="img/icons/shap-small.png" />
										<div className="prod-icons">
											<Link to="#" className="fa fa-heart" />
											<Link to="#" className="fa fa-shopping-basket" />
											<Link
												to="#product-preview"
												data-toggle="modal"
												className="fa fa-expand"
											/>
										</div>
									</div>
									<div className="product-caption">
										<h3 className="product-title">
											<Link to="#">
												{' '}
												<span className="light-font"> organic </span> <strong>pepper </strong>
											</Link>
										</h3>
										<div className="price">
											<strong className="clr-txt">$50.00 </strong>{' '}
											<del className="light-font">$65.00 </del>
										</div>
									</div>
								</div>
								<div className="product-box">
									<div className="product-media">
										<img className="prod-img" alt="" src="img/products/1.png" />
										<img className="shape" alt="" src="img/icons/shap-small.png" />
										<div className="prod-icons">
											<Link to="#" className="fa fa-heart" />
											<Link to="#" className="fa fa-shopping-basket" />
											<Link
												to="#product-preview"
												data-toggle="modal"
												className="fa fa-expand"
											/>
										</div>
									</div>
									<div className="product-caption">
										<h3 className="product-title">
											<Link to="#">
												{' '}
												<span className="light-font"> organic </span> <strong>tomato</strong>
											</Link>
										</h3>
										<div className="price">
											<strong className="clr-txt">$50.00 </strong>{' '}
											<del className="light-font">$65.00 </del>
										</div>
									</div>
								</div>
							</div>
							<div className="item">
								<div className="product-box">
									<div className="product-media">
										<img className="prod-img" alt="" src="img/products/3.png" />
										<img className="shape" alt="" src="img/icons/shap-small.png" />
										<div className="prod-icons">
											<Link to="#" className="fa fa-heart" />
											<Link to="#" className="fa fa-shopping-basket" />
											<Link
												to="#product-preview"
												data-toggle="modal"
												className="fa fa-expand"
											/>
										</div>
									</div>
									<div className="product-caption">
										<h3 className="product-title">
											<Link to="#">
												{' '}
												<span className="light-font"> organic </span> <strong>cherry</strong>
											</Link>
										</h3>
										<div className="price">
											<strong className="clr-txt">$50.00 </strong>{' '}
											<del className="light-font">$65.00 </del>
										</div>
									</div>
								</div>
								<div className="product-box">
									<div className="product-media">
										<img className="prod-img" alt="" src="img/products/5.png" />
										<img className="shape" alt="" src="img/icons/shap-small.png" />
										<div className="prod-icons">
											<Link to="#" className="fa fa-heart" />
											<Link to="#" className="fa fa-shopping-basket" />
											<Link
												to="#product-preview"
												data-toggle="modal"
												className="fa fa-expand"
											/>
										</div>
									</div>
									<div className="product-caption">
										<h3 className="product-title">
											<Link to="#">
												{' '}
												<span className="light-font"> organic </span> <strong>pinapple</strong>
											</Link>
										</h3>
										<div className="price">
											<strong className="clr-txt">$50.00 </strong>{' '}
											<del className="light-font">$65.00 </del>
										</div>
									</div>
								</div>
							</div>
							<div className="item">
								<div className="product-box">
									<div className="product-media">
										<img className="prod-img" alt="" src="img/products/2.png" />
										<img className="shape" alt="" src="img/icons/shap-small.png" />
										<div className="prod-icons">
											<Link to="#" className="fa fa-heart" />
											<Link to="#" className="fa fa-shopping-basket" />
											<Link
												to="#product-preview"
												data-toggle="modal"
												className="fa fa-expand"
											/>
										</div>
									</div>
									<div className="product-caption">
										<h3 className="product-title">
											<Link to="#">
												{' '}
												<span className="light-font"> organic </span> <strong>cabbage</strong>
											</Link>
										</h3>
										<div className="price">
											<strong className="clr-txt">$50.00 </strong>{' '}
											<del className="light-font">$65.00 </del>
										</div>
									</div>
								</div>
								<div className="product-box">
									<div className="product-media">
										<img className="prod-img" alt="" src="img/products/4.png" />
										<img className="shape" alt="" src="img/icons/shap-small.png" />
										<div className="prod-icons">
											<Link to="#" className="fa fa-heart" />
											<Link to="#" className="fa fa-shopping-basket" />
											<Link
												to="#product-preview"
												data-toggle="modal"
												className="fa fa-expand"
											/>
										</div>
									</div>
									<div className="product-caption">
										<h3 className="product-title">
											<Link to="#">
												{' '}
												<span className="light-font"> green </span> <strong>salad</strong>
											</Link>
										</h3>
										<div className="price">
											<strong className="clr-txt">$50.00 </strong>{' '}
											<del className="light-font">$65.00 </del>
										</div>
									</div>
								</div>
							</div>
							<div className="item">
								<div className="product-box">
									<div className="product-media">
										<img className="prod-img" alt="" src="img/products/7.png" />
										<img className="shape" alt="" src="img/icons/shap-small.png" />
										<div className="prod-icons">
											<Link to="#" className="fa fa-heart" />
											<Link to="#" className="fa fa-shopping-basket" />
											<Link
												to="#product-preview"
												data-toggle="modal"
												className="fa fa-expand"
											/>
										</div>
									</div>
									<div className="product-caption">
										<h3 className="product-title">
											<Link to="#">
												{' '}
												<span className="light-font"> organic </span> <strong>mushroom</strong>
											</Link>
										</h3>
										<div className="price">
											<strong className="clr-txt">$50.00 </strong>{' '}
											<del className="light-font">$65.00 </del>
										</div>
									</div>
								</div>
								<div className="product-box">
									<div className="product-media">
										<img className="prod-img" alt="" src="img/products/6.png" />
										<img className="shape" alt="" src="img/icons/shap-small.png" />
										<div className="prod-icons">
											<Link to="#" className="fa fa-heart" />
											<Link to="#" className="fa fa-shopping-basket" />
											<Link
												to="#product-preview"
												data-toggle="modal"
												className="fa fa-expand"
											/>
										</div>
									</div>
									<div className="product-caption">
										<h3 className="product-title">
											<Link to="#">
												{' '}
												<span className="light-font"> organic </span> <strong>onion</strong>
											</Link>
										</h3>
										<div className="price">
											<strong className="clr-txt">$50.00 </strong>{' '}
											<del className="light-font">$65.00 </del>
										</div>
									</div>
								</div>
							</div>
							<div className="item">
								<div className="product-box">
									<div className="product-media">
										<img className="prod-img" alt="" src="img/products/8.png" />
										<img className="shape" alt="" src="img/icons/shap-small.png" />
										<div className="prod-icons">
											<Link to="#" className="fa fa-heart" />
											<Link to="#" className="fa fa-shopping-basket" />
											<Link
												to="#product-preview"
												data-toggle="modal"
												className="fa fa-expand"
											/>
										</div>
									</div>
									<div className="product-caption">
										<h3 className="product-title">
											<Link to="#">
												{' '}
												<span className="light-font"> organic </span> <strong>pepper </strong>
											</Link>
										</h3>
										<div className="price">
											<strong className="clr-txt">$50.00 </strong>{' '}
											<del className="light-font">$65.00 </del>
										</div>
									</div>
								</div>
								<div className="product-box">
									<div className="product-media">
										<img className="prod-img" alt="" src="img/products/1.png" />
										<img className="shape" alt="" src="img/icons/shap-small.png" />
										<div className="prod-icons">
											<Link to="#" className="fa fa-heart" />
											<Link to="#" className="fa fa-shopping-basket" />
											<Link
												to="#product-preview"
												data-toggle="modal"
												className="fa fa-expand"
											/>
										</div>
									</div>
									<div className="product-caption">
										<h3 className="product-title">
											<Link to="#">
												{' '}
												<span className="light-font"> organic </span> <strong>tomato</strong>
											</Link>
										</h3>
										<div className="price">
											<strong className="clr-txt">$50.00 </strong>{' '}
											<del className="light-font">$65.00 </del>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div id="naturix-tab-3" className="tab-pane fade">
						<div className="naturix-slider-1 dots-1">
							<div className="item">
								<div className="product-box">
									<div className="product-media">
										<img className="prod-img" alt="" src="img/products/7.png" />
										<img className="shape" alt="" src="img/icons/shap-small.png" />
										<div className="prod-icons">
											<Link to="#" className="fa fa-heart" />
											<Link to="#" className="fa fa-shopping-basket" />
											<Link
												to="#product-preview"
												data-toggle="modal"
												className="fa fa-expand"
											/>
										</div>
									</div>
									<div className="product-caption">
										<h3 className="product-title">
											<Link to="#">
												{' '}
												<span className="light-font"> organic </span> <strong>mushroom</strong>
											</Link>
										</h3>
										<div className="price">
											<strong className="clr-txt">$50.00 </strong>{' '}
											<del className="light-font">$65.00 </del>
										</div>
									</div>
								</div>
								<div className="product-box">
									<div className="product-media">
										<img className="prod-img" alt="" src="img/products/6.png" />
										<img className="shape" alt="" src="img/icons/shap-small.png" />
										<div className="prod-icons">
											<Link to="#" className="fa fa-heart" />
											<Link to="#" className="fa fa-shopping-basket" />
											<Link
												to="#product-preview"
												data-toggle="modal"
												className="fa fa-expand"
											/>
										</div>
									</div>
									<div className="product-caption">
										<h3 className="product-title">
											<Link to="#">
												{' '}
												<span className="light-font"> organic </span> <strong>onion</strong>
											</Link>
										</h3>
										<div className="price">
											<strong className="clr-txt">$50.00 </strong>{' '}
											<del className="light-font">$65.00 </del>
										</div>
									</div>
								</div>
							</div>
							<div className="item">
								<div className="product-box">
									<div className="product-media">
										<img className="prod-img" alt="" src="img/products/3.png" />
										<img className="shape" alt="" src="img/icons/shap-small.png" />
										<div className="prod-icons">
											<Link to="#" className="fa fa-heart" />
											<Link to="#" className="fa fa-shopping-basket" />
											<Link
												to="#product-preview"
												data-toggle="modal"
												className="fa fa-expand"
											/>
										</div>
									</div>
									<div className="product-caption">
										<h3 className="product-title">
											<Link to="#">
												{' '}
												<span className="light-font"> organic </span> <strong>cherry</strong>
											</Link>
										</h3>
										<div className="price">
											<strong className="clr-txt">$50.00 </strong>{' '}
											<del className="light-font">$65.00 </del>
										</div>
									</div>
								</div>
								<div className="product-box">
									<div className="product-media">
										<img className="prod-img" alt="" src="img/products/5.png" />
										<img className="shape" alt="" src="img/icons/shap-small.png" />
										<div className="prod-icons">
											<Link to="#" className="fa fa-heart" />
											<Link to="#" className="fa fa-shopping-basket" />
											<Link
												to="#product-preview"
												data-toggle="modal"
												className="fa fa-expand"
											/>
										</div>
									</div>
									<div className="product-caption">
										<h3 className="product-title">
											<Link to="#">
												{' '}
												<span className="light-font"> organic </span> <strong>pinapple</strong>
											</Link>
										</h3>
										<div className="price">
											<strong className="clr-txt">$50.00 </strong>{' '}
											<del className="light-font">$65.00 </del>
										</div>
									</div>
								</div>
							</div>
							<div className="item">
								<div className="product-box">
									<div className="product-media">
										<img className="prod-img" alt="" src="img/products/2.png" />
										<img className="shape" alt="" src="img/icons/shap-small.png" />
										<div className="prod-icons">
											<Link to="#" className="fa fa-heart" />
											<Link to="#" className="fa fa-shopping-basket" />
											<Link
												to="#product-preview"
												data-toggle="modal"
												className="fa fa-expand"
											/>
										</div>
									</div>
									<div className="product-caption">
										<h3 className="product-title">
											<Link to="#">
												{' '}
												<span className="light-font"> organic </span> <strong>cabbage</strong>
											</Link>
										</h3>
										<div className="price">
											<strong className="clr-txt">$50.00 </strong>{' '}
											<del className="light-font">$65.00 </del>
										</div>
									</div>
								</div>
								<div className="product-box">
									<div className="product-media">
										<img className="prod-img" alt="" src="img/products/4.png" />
										<img className="shape" alt="" src="img/icons/shap-small.png" />
										<div className="prod-icons">
											<Link to="#" className="fa fa-heart" />
											<Link to="#" className="fa fa-shopping-basket" />
											<Link
												to="#product-preview"
												data-toggle="modal"
												className="fa fa-expand"
											/>
										</div>
									</div>
									<div className="product-caption">
										<h3 className="product-title">
											<Link to="#">
												{' '}
												<span className="light-font"> green </span> <strong>salad</strong>
											</Link>
										</h3>
										<div className="price">
											<strong className="clr-txt">$50.00 </strong>{' '}
											<del className="light-font">$65.00 </del>
										</div>
									</div>
								</div>
							</div>
							<div className="item">
								<div className="product-box">
									<div className="product-media">
										<img className="prod-img" alt="" src="img/products/8.png" />
										<img className="shape" alt="" src="img/icons/shap-small.png" />
										<div className="prod-icons">
											<Link to="#" className="fa fa-heart" />
											<Link to="#" className="fa fa-shopping-basket" />
											<Link
												to="#product-preview"
												data-toggle="modal"
												className="fa fa-expand"
											/>
										</div>
									</div>
									<div className="product-caption">
										<h3 className="product-title">
											<Link to="#">
												{' '}
												<span className="light-font"> organic </span> <strong>pepper </strong>
											</Link>
										</h3>
										<div className="price">
											<strong className="clr-txt">$50.00 </strong>{' '}
											<del className="light-font">$65.00 </del>
										</div>
									</div>
								</div>
								<div className="product-box">
									<div className="product-media">
										<img className="prod-img" alt="" src="img/products/1.png" />
										<img className="shape" alt="" src="img/icons/shap-small.png" />
										<div className="prod-icons">
											<Link to="#" className="fa fa-heart" />
											<Link to="#" className="fa fa-shopping-basket" />
											<Link
												to="#product-preview"
												data-toggle="modal"
												className="fa fa-expand"
											/>
										</div>
									</div>
									<div className="product-caption">
										<h3 className="product-title">
											<Link to="#">
												{' '}
												<span className="light-font"> organic </span> <strong>tomato</strong>
											</Link>
										</h3>
										<div className="price">
											<strong className="clr-txt">$50.00 </strong>{' '}
											<del className="light-font">$65.00 </del>
										</div>
									</div>
								</div>
							</div>
							<div className="item">
								<div className="product-box">
									<div className="product-media">
										<img className="prod-img" alt="" src="img/products/3.png" />
										<img className="shape" alt="" src="img/icons/shap-small.png" />
										<div className="prod-icons">
											<Link to="#" className="fa fa-heart" />
											<Link to="#" className="fa fa-shopping-basket" />
											<Link
												to="#product-preview"
												data-toggle="modal"
												className="fa fa-expand"
											/>
										</div>
									</div>
									<div className="product-caption">
										<h3 className="product-title">
											<Link to="#">
												{' '}
												<span className="light-font"> organic </span> <strong>cherry</strong>
											</Link>
										</h3>
										<div className="price">
											<strong className="clr-txt">$50.00 </strong>{' '}
											<del className="light-font">$65.00 </del>
										</div>
									</div>
								</div>
								<div className="product-box">
									<div className="product-media">
										<img className="prod-img" alt="" src="img/products/5.png" />
										<img className="shape" alt="" src="img/icons/shap-small.png" />
										<div className="prod-icons">
											<Link to="#" className="fa fa-heart" />
											<Link to="#" className="fa fa-shopping-basket" />
											<Link
												to="#product-preview"
												data-toggle="modal"
												className="fa fa-expand"
											/>
										</div>
									</div>
									<div className="product-caption">
										<h3 className="product-title">
											<Link to="#">
												{' '}
												<span className="light-font"> organic </span> <strong>pinapple</strong>
											</Link>
										</h3>
										<div className="price">
											<strong className="clr-txt">$50.00 </strong>{' '}
											<del className="light-font">$65.00 </del>
										</div>
									</div>
								</div>
							</div>
							<div className="item">
								<div className="product-box">
									<div className="product-media">
										<img className="prod-img" alt="" src="img/products/2.png" />
										<img className="shape" alt="" src="img/icons/shap-small.png" />
										<div className="prod-icons">
											<Link to="#" className="fa fa-heart" />
											<Link to="#" className="fa fa-shopping-basket" />
											<Link
												to="#product-preview"
												data-toggle="modal"
												className="fa fa-expand"
											/>
										</div>
									</div>
									<div className="product-caption">
										<h3 className="product-title">
											<Link to="#">
												{' '}
												<span className="light-font"> organic </span> <strong>cabbage</strong>
											</Link>
										</h3>
										<div className="price">
											<strong className="clr-txt">$50.00 </strong>{' '}
											<del className="light-font">$65.00 </del>
										</div>
									</div>
								</div>
								<div className="product-box">
									<div className="product-media">
										<img className="prod-img" alt="" src="img/products/4.png" />
										<img className="shape" alt="" src="img/icons/shap-small.png" />
										<div className="prod-icons">
											<Link to="#" className="fa fa-heart" />
											<Link to="#" className="fa fa-shopping-basket" />
											<Link
												to="#product-preview"
												data-toggle="modal"
												className="fa fa-expand"
											/>
										</div>
									</div>
									<div className="product-caption">
										<h3 className="product-title">
											<Link to="#">
												{' '}
												<span className="light-font"> green </span> <strong>salad</strong>
											</Link>
										</h3>
										<div className="price">
											<strong className="clr-txt">$50.00 </strong>{' '}
											<del className="light-font">$65.00 </del>
										</div>
									</div>
								</div>
							</div>
							<div className="item">
								<div className="product-box">
									<div className="product-media">
										<img className="prod-img" alt="" src="img/products/7.png" />
										<img className="shape" alt="" src="img/icons/shap-small.png" />
										<div className="prod-icons">
											<Link to="#" className="fa fa-heart" />
											<Link to="#" className="fa fa-shopping-basket" />
											<Link
												to="#product-preview"
												data-toggle="modal"
												className="fa fa-expand"
											/>
										</div>
									</div>
									<div className="product-caption">
										<h3 className="product-title">
											<Link to="#">
												{' '}
												<span className="light-font"> organic </span> <strong>mushroom</strong>
											</Link>
										</h3>
										<div className="price">
											<strong className="clr-txt">$50.00 </strong>{' '}
											<del className="light-font">$65.00 </del>
										</div>
									</div>
								</div>
								<div className="product-box">
									<div className="product-media">
										<img className="prod-img" alt="" src="img/products/6.png" />
										<img className="shape" alt="" src="img/icons/shap-small.png" />
										<div className="prod-icons">
											<Link to="#" className="fa fa-heart" />
											<Link to="#" className="fa fa-shopping-basket" />
											<Link
												to="#product-preview"
												data-toggle="modal"
												className="fa fa-expand"
											/>
										</div>
									</div>
									<div className="product-caption">
										<h3 className="product-title">
											<Link to="#">
												{' '}
												<span className="light-font"> organic </span> <strong>onion</strong>
											</Link>
										</h3>
										<div className="price">
											<strong className="clr-txt">$50.00 </strong>{' '}
											<del className="light-font">$65.00 </del>
										</div>
									</div>
								</div>
							</div>
							<div className="item">
								<div className="product-box">
									<div className="product-media">
										<img className="prod-img" alt="" src="img/products/8.png" />
										<img className="shape" alt="" src="img/icons/shap-small.png" />
										<div className="prod-icons">
											<Link to="#" className="fa fa-heart" />
											<Link to="#" className="fa fa-shopping-basket" />
											<Link
												to="#product-preview"
												data-toggle="modal"
												className="fa fa-expand"
											/>
										</div>
									</div>
									<div className="product-caption">
										<h3 className="product-title">
											<Link to="#">
												{' '}
												<span className="light-font"> organic </span> <strong>pepper </strong>
											</Link>
										</h3>
										<div className="price">
											<strong className="clr-txt">$50.00 </strong>{' '}
											<del className="light-font">$65.00 </del>
										</div>
									</div>
								</div>
								<div className="product-box">
									<div className="product-media">
										<img className="prod-img" alt="" src="img/products/1.png" />
										<img className="shape" alt="" src="img/icons/shap-small.png" />
										<div className="prod-icons">
											<Link to="#" className="fa fa-heart" />
											<Link to="#" className="fa fa-shopping-basket" />
											<Link
												to="#product-preview"
												data-toggle="modal"
												className="fa fa-expand"
											/>
										</div>
									</div>
									<div className="product-caption">
										<h3 className="product-title">
											<Link to="#">
												{' '}
												<span className="light-font"> organic </span> <strong>tomato</strong>
											</Link>
										</h3>
										<div className="price">
											<strong className="clr-txt">$50.00 </strong>{' '}
											<del className="light-font">$65.00 </del>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div id="naturix-tab-4" className="tab-pane fade">
						<div className="naturix-slider-1 dots-1">
							<div className="item">
								<div className="product-box">
									<div className="product-media">
										<img className="prod-img" alt="" src="img/products/7.png" />
										<img className="shape" alt="" src="img/icons/shap-small.png" />
										<div className="prod-icons">
											<Link to="#" className="fa fa-heart" />
											<Link to="#" className="fa fa-shopping-basket" />
											<Link
												to="#product-preview"
												data-toggle="modal"
												className="fa fa-expand"
											/>
										</div>
									</div>
									<div className="product-caption">
										<h3 className="product-title">
											<Link to="#">
												{' '}
												<span className="light-font"> organic </span> <strong>mushroom</strong>
											</Link>
										</h3>
										<div className="price">
											<strong className="clr-txt">$50.00 </strong>{' '}
											<del className="light-font">$65.00 </del>
										</div>
									</div>
								</div>
								<div className="product-box">
									<div className="product-media">
										<img className="prod-img" alt="" src="img/products/6.png" />
										<img className="shape" alt="" src="img/icons/shap-small.png" />
										<div className="prod-icons">
											<Link to="#" className="fa fa-heart" />
											<Link to="#" className="fa fa-shopping-basket" />
											<Link
												to="#product-preview"
												data-toggle="modal"
												className="fa fa-expand"
											/>
										</div>
									</div>
									<div className="product-caption">
										<h3 className="product-title">
											<Link to="#">
												{' '}
												<span className="light-font"> organic </span> <strong>onion</strong>
											</Link>
										</h3>
										<div className="price">
											<strong className="clr-txt">$50.00 </strong>{' '}
											<del className="light-font">$65.00 </del>
										</div>
									</div>
								</div>
							</div>
							<div className="item">
								<div className="product-box">
									<div className="product-media">
										<img className="prod-img" alt="" src="img/products/3.png" />
										<img className="shape" alt="" src="img/icons/shap-small.png" />
										<div className="prod-icons">
											<Link to="#" className="fa fa-heart" />
											<Link to="#" className="fa fa-shopping-basket" />
											<Link
												to="#product-preview"
												data-toggle="modal"
												className="fa fa-expand"
											/>
										</div>
									</div>
									<div className="product-caption">
										<h3 className="product-title">
											<Link to="#">
												{' '}
												<span className="light-font"> organic </span> <strong>cherry</strong>
											</Link>
										</h3>
										<div className="price">
											<strong className="clr-txt">$50.00 </strong>{' '}
											<del className="light-font">$65.00 </del>
										</div>
									</div>
								</div>
								<div className="product-box">
									<div className="product-media">
										<img className="prod-img" alt="" src="img/products/5.png" />
										<img className="shape" alt="" src="img/icons/shap-small.png" />
										<div className="prod-icons">
											<Link to="#" className="fa fa-heart" />
											<Link to="#" className="fa fa-shopping-basket" />
											<Link
												to="#product-preview"
												data-toggle="modal"
												className="fa fa-expand"
											/>
										</div>
									</div>
									<div className="product-caption">
										<h3 className="product-title">
											<Link to="#">
												{' '}
												<span className="light-font"> organic </span> <strong>pinapple</strong>
											</Link>
										</h3>
										<div className="price">
											<strong className="clr-txt">$50.00 </strong>{' '}
											<del className="light-font">$65.00 </del>
										</div>
									</div>
								</div>
							</div>
							<div className="item">
								<div className="product-box">
									<div className="product-media">
										<img className="prod-img" alt="" src="img/products/2.png" />
										<img className="shape" alt="" src="img/icons/shap-small.png" />
										<div className="prod-icons">
											<Link to="#" className="fa fa-heart" />
											<Link to="#" className="fa fa-shopping-basket" />
											<Link
												to="#product-preview"
												data-toggle="modal"
												className="fa fa-expand"
											/>
										</div>
									</div>
									<div className="product-caption">
										<h3 className="product-title">
											<Link to="#">
												{' '}
												<span className="light-font"> organic </span> <strong>cabbage</strong>
											</Link>
										</h3>
										<div className="price">
											<strong className="clr-txt">$50.00 </strong>{' '}
											<del className="light-font">$65.00 </del>
										</div>
									</div>
								</div>
								<div className="product-box">
									<div className="product-media">
										<img className="prod-img" alt="" src="img/products/4.png" />
										<img className="shape" alt="" src="img/icons/shap-small.png" />
										<div className="prod-icons">
											<Link to="#" className="fa fa-heart" />
											<Link to="#" className="fa fa-shopping-basket" />
											<Link
												to="#product-preview"
												data-toggle="modal"
												className="fa fa-expand"
											/>
										</div>
									</div>
									<div className="product-caption">
										<h3 className="product-title">
											<Link to="#">
												{' '}
												<span className="light-font"> green </span> <strong>salad</strong>
											</Link>
										</h3>
										<div className="price">
											<strong className="clr-txt">$50.00 </strong>{' '}
											<del className="light-font">$65.00 </del>
										</div>
									</div>
								</div>
							</div>
							<div className="item">
								<div className="product-box">
									<div className="product-media">
										<img className="prod-img" alt="" src="img/products/8.png" />
										<img className="shape" alt="" src="img/icons/shap-small.png" />
										<div className="prod-icons">
											<Link to="#" className="fa fa-heart" />
											<Link to="#" className="fa fa-shopping-basket" />
											<Link
												to="#product-preview"
												data-toggle="modal"
												className="fa fa-expand"
											/>
										</div>
									</div>
									<div className="product-caption">
										<h3 className="product-title">
											<Link to="#">
												{' '}
												<span className="light-font"> organic </span> <strong>pepper </strong>
											</Link>
										</h3>
										<div className="price">
											<strong className="clr-txt">$50.00 </strong>{' '}
											<del className="light-font">$65.00 </del>
										</div>
									</div>
								</div>
								<div className="product-box">
									<div className="product-media">
										<img className="prod-img" alt="" src="img/products/1.png" />
										<img className="shape" alt="" src="img/icons/shap-small.png" />
										<div className="prod-icons">
											<Link to="#" className="fa fa-heart" />
											<Link to="#" className="fa fa-shopping-basket" />
											<Link
												to="#product-preview"
												data-toggle="modal"
												className="fa fa-expand"
											/>
										</div>
									</div>
									<div className="product-caption">
										<h3 className="product-title">
											<Link to="#">
												{' '}
												<span className="light-font"> organic </span> <strong>tomato</strong>
											</Link>
										</h3>
										<div className="price">
											<strong className="clr-txt">$50.00 </strong>{' '}
											<del className="light-font">$65.00 </del>
										</div>
									</div>
								</div>
							</div>
							<div className="item">
								<div className="product-box">
									<div className="product-media">
										<img className="prod-img" alt="" src="img/products/3.png" />
										<img className="shape" alt="" src="img/icons/shap-small.png" />
										<div className="prod-icons">
											<Link to="#" className="fa fa-heart" />
											<Link to="#" className="fa fa-shopping-basket" />
											<Link
												to="#product-preview"
												data-toggle="modal"
												className="fa fa-expand"
											/>
										</div>
									</div>
									<div className="product-caption">
										<h3 className="product-title">
											<Link to="#">
												{' '}
												<span className="light-font"> organic </span> <strong>cherry</strong>
											</Link>
										</h3>
										<div className="price">
											<strong className="clr-txt">$50.00 </strong>{' '}
											<del className="light-font">$65.00 </del>
										</div>
									</div>
								</div>
								<div className="product-box">
									<div className="product-media">
										<img className="prod-img" alt="" src="img/products/5.png" />
										<img className="shape" alt="" src="img/icons/shap-small.png" />
										<div className="prod-icons">
											<Link to="#" className="fa fa-heart" />
											<Link to="#" className="fa fa-shopping-basket" />
											<Link
												to="#product-preview"
												data-toggle="modal"
												className="fa fa-expand"
											/>
										</div>
									</div>
									<div className="product-caption">
										<h3 className="product-title">
											<Link to="#">
												{' '}
												<span className="light-font"> organic </span> <strong>pinapple</strong>
											</Link>
										</h3>
										<div className="price">
											<strong className="clr-txt">$50.00 </strong>{' '}
											<del className="light-font">$65.00 </del>
										</div>
									</div>
								</div>
							</div>
							<div className="item">
								<div className="product-box">
									<div className="product-media">
										<img className="prod-img" alt="" src="img/products/2.png" />
										<img className="shape" alt="" src="img/icons/shap-small.png" />
										<div className="prod-icons">
											<Link to="#" className="fa fa-heart" />
											<Link to="#" className="fa fa-shopping-basket" />
											<Link
												to="#product-preview"
												data-toggle="modal"
												className="fa fa-expand"
											/>
										</div>
									</div>
									<div className="product-caption">
										<h3 className="product-title">
											<Link to="#">
												{' '}
												<span className="light-font"> organic </span> <strong>cabbage</strong>
											</Link>
										</h3>
										<div className="price">
											<strong className="clr-txt">$50.00 </strong>{' '}
											<del className="light-font">$65.00 </del>
										</div>
									</div>
								</div>
								<div className="product-box">
									<div className="product-media">
										<img className="prod-img" alt="" src="img/products/4.png" />
										<img className="shape" alt="" src="img/icons/shap-small.png" />
										<div className="prod-icons">
											<Link to="#" className="fa fa-heart" />
											<Link to="#" className="fa fa-shopping-basket" />
											<Link
												to="#product-preview"
												data-toggle="modal"
												className="fa fa-expand"
											/>
										</div>
									</div>
									<div className="product-caption">
										<h3 className="product-title">
											<Link to="#">
												{' '}
												<span className="light-font"> green </span> <strong>salad</strong>
											</Link>
										</h3>
										<div className="price">
											<strong className="clr-txt">$50.00 </strong>{' '}
											<del className="light-font">$65.00 </del>
										</div>
									</div>
								</div>
							</div>
							<div className="item">
								<div className="product-box">
									<div className="product-media">
										<img className="prod-img" alt="" src="img/products/7.png" />
										<img className="shape" alt="" src="img/icons/shap-small.png" />
										<div className="prod-icons">
											<Link to="#" className="fa fa-heart" />
											<Link to="#" className="fa fa-shopping-basket" />
											<Link
												to="#product-preview"
												data-toggle="modal"
												className="fa fa-expand"
											/>
										</div>
									</div>
									<div className="product-caption">
										<h3 className="product-title">
											<Link to="#">
												{' '}
												<span className="light-font"> organic </span> <strong>mushroom</strong>
											</Link>
										</h3>
										<div className="price">
											<strong className="clr-txt">$50.00 </strong>{' '}
											<del className="light-font">$65.00 </del>
										</div>
									</div>
								</div>
								<div className="product-box">
									<div className="product-media">
										<img className="prod-img" alt="" src="img/products/6.png" />
										<img className="shape" alt="" src="img/icons/shap-small.png" />
										<div className="prod-icons">
											<Link to="#" className="fa fa-heart" />
											<Link to="#" className="fa fa-shopping-basket" />
											<Link
												to="#product-preview"
												data-toggle="modal"
												className="fa fa-expand"
											/>
										</div>
									</div>
									<div className="product-caption">
										<h3 className="product-title">
											<Link to="#">
												{' '}
												<span className="light-font"> organic </span> <strong>onion</strong>
											</Link>
										</h3>
										<div className="price">
											<strong className="clr-txt">$50.00 </strong>{' '}
											<del className="light-font">$65.00 </del>
										</div>
									</div>
								</div>
							</div>
							<div className="item">
								<div className="product-box">
									<div className="product-media">
										<img className="prod-img" alt="" src="img/products/8.png" />
										<img className="shape" alt="" src="img/icons/shap-small.png" />
										<div className="prod-icons">
											<Link to="#" className="fa fa-heart" />
											<Link to="#" className="fa fa-shopping-basket" />
											<Link
												to="#product-preview"
												data-toggle="modal"
												className="fa fa-expand"
											/>
										</div>
									</div>
									<div className="product-caption">
										<h3 className="product-title">
											<Link to="#">
												{' '}
												<span className="light-font"> organic </span> <strong>pepper </strong>
											</Link>
										</h3>
										<div className="price">
											<strong className="clr-txt">$50.00 </strong>{' '}
											<del className="light-font">$65.00 </del>
										</div>
									</div>
								</div>
								<div className="product-box">
									<div className="product-media">
										<img className="prod-img" alt="" src="img/products/1.png" />
										<img className="shape" alt="" src="img/icons/shap-small.png" />
										<div className="prod-icons">
											<Link to="#" className="fa fa-heart" />
											<Link to="#" className="fa fa-shopping-basket" />
											<Link
												to="#product-preview"
												data-toggle="modal"
												className="fa fa-expand"
											/>
										</div>
									</div>
									<div className="product-caption">
										<h3 className="product-title">
											<Link to="#">
												{' '}
												<span className="light-font"> organic </span> <strong>tomato</strong>
											</Link>
										</h3>
										<div className="price">
											<strong className="clr-txt">$50.00 </strong>{' '}
											<del className="light-font">$65.00 </del>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div id="naturix-tab-5" className="tab-pane fade">
						<div className="naturix-slider-1 dots-1">
							<div className="item">
								<div className="product-box">
									<div className="product-media">
										<img className="prod-img" alt="" src="img/products/7.png" />
										<img className="shape" alt="" src="img/icons/shap-small.png" />
										<div className="prod-icons">
											<Link to="#" className="fa fa-heart" />
											<Link to="#" className="fa fa-shopping-basket" />
											<Link
												to="#product-preview"
												data-toggle="modal"
												className="fa fa-expand"
											/>
										</div>
									</div>
									<div className="product-caption">
										<h3 className="product-title">
											<Link to="#">
												{' '}
												<span className="light-font"> organic </span> <strong>mushroom</strong>
											</Link>
										</h3>
										<div className="price">
											<strong className="clr-txt">$50.00 </strong>{' '}
											<del className="light-font">$65.00 </del>
										</div>
									</div>
								</div>
								<div className="product-box">
									<div className="product-media">
										<img className="prod-img" alt="" src="img/products/6.png" />
										<img className="shape" alt="" src="img/icons/shap-small.png" />
										<div className="prod-icons">
											<Link to="#" className="fa fa-heart" />
											<Link to="#" className="fa fa-shopping-basket" />
											<Link
												to="#product-preview"
												data-toggle="modal"
												className="fa fa-expand"
											/>
										</div>
									</div>
									<div className="product-caption">
										<h3 className="product-title">
											<Link to="#">
												{' '}
												<span className="light-font"> organic </span> <strong>onion</strong>
											</Link>
										</h3>
										<div className="price">
											<strong className="clr-txt">$50.00 </strong>{' '}
											<del className="light-font">$65.00 </del>
										</div>
									</div>
								</div>
							</div>
							<div className="item">
								<div className="product-box">
									<div className="product-media">
										<img className="prod-img" alt="" src="img/products/3.png" />
										<img className="shape" alt="" src="img/icons/shap-small.png" />
										<div className="prod-icons">
											<Link to="#" className="fa fa-heart" />
											<Link to="#" className="fa fa-shopping-basket" />
											<Link
												to="#product-preview"
												data-toggle="modal"
												className="fa fa-expand"
											/>
										</div>
									</div>
									<div className="product-caption">
										<h3 className="product-title">
											<Link to="#">
												{' '}
												<span className="light-font"> organic </span> <strong>cherry</strong>
											</Link>
										</h3>
										<div className="price">
											<strong className="clr-txt">$50.00 </strong>{' '}
											<del className="light-font">$65.00 </del>
										</div>
									</div>
								</div>
								<div className="product-box">
									<div className="product-media">
										<img className="prod-img" alt="" src="img/products/5.png" />
										<img className="shape" alt="" src="img/icons/shap-small.png" />
										<div className="prod-icons">
											<Link to="#" className="fa fa-heart" />
											<Link to="#" className="fa fa-shopping-basket" />
											<Link
												to="#product-preview"
												data-toggle="modal"
												className="fa fa-expand"
											/>
										</div>
									</div>
									<div className="product-caption">
										<h3 className="product-title">
											<Link to="#">
												{' '}
												<span className="light-font"> organic </span> <strong>pinapple</strong>
											</Link>
										</h3>
										<div className="price">
											<strong className="clr-txt">$50.00 </strong>{' '}
											<del className="light-font">$65.00 </del>
										</div>
									</div>
								</div>
							</div>
							<div className="item">
								<div className="product-box">
									<div className="product-media">
										<img className="prod-img" alt="" src="img/products/2.png" />
										<img className="shape" alt="" src="img/icons/shap-small.png" />
										<div className="prod-icons">
											<Link to="#" className="fa fa-heart" />
											<Link to="#" className="fa fa-shopping-basket" />
											<Link
												to="#product-preview"
												data-toggle="modal"
												className="fa fa-expand"
											/>
										</div>
									</div>
									<div className="product-caption">
										<h3 className="product-title">
											<Link to="#">
												{' '}
												<span className="light-font"> organic </span> <strong>cabbage</strong>
											</Link>
										</h3>
										<div className="price">
											<strong className="clr-txt">$50.00 </strong>{' '}
											<del className="light-font">$65.00 </del>
										</div>
									</div>
								</div>
								<div className="product-box">
									<div className="product-media">
										<img className="prod-img" alt="" src="img/products/4.png" />
										<img className="shape" alt="" src="img/icons/shap-small.png" />
										<div className="prod-icons">
											<Link to="#" className="fa fa-heart" />
											<Link to="#" className="fa fa-shopping-basket" />
											<Link
												to="#product-preview"
												data-toggle="modal"
												className="fa fa-expand"
											/>
										</div>
									</div>
									<div className="product-caption">
										<h3 className="product-title">
											<Link to="#">
												{' '}
												<span className="light-font"> green </span> <strong>salad</strong>
											</Link>
										</h3>
										<div className="price">
											<strong className="clr-txt">$50.00 </strong>{' '}
											<del className="light-font">$65.00 </del>
										</div>
									</div>
								</div>
							</div>
							<div className="item">
								<div className="product-box">
									<div className="product-media">
										<img className="prod-img" alt="" src="img/products/8.png" />
										<img className="shape" alt="" src="img/icons/shap-small.png" />
										<div className="prod-icons">
											<Link to="#" className="fa fa-heart" />
											<Link to="#" className="fa fa-shopping-basket" />
											<Link
												to="#product-preview"
												data-toggle="modal"
												className="fa fa-expand"
											/>
										</div>
									</div>
									<div className="product-caption">
										<h3 className="product-title">
											<Link to="#">
												{' '}
												<span className="light-font"> organic </span> <strong>pepper </strong>
											</Link>
										</h3>
										<div className="price">
											<strong className="clr-txt">$50.00 </strong>{' '}
											<del className="light-font">$65.00 </del>
										</div>
									</div>
								</div>
								<div className="product-box">
									<div className="product-media">
										<img className="prod-img" alt="" src="img/products/1.png" />
										<img className="shape" alt="" src="img/icons/shap-small.png" />
										<div className="prod-icons">
											<Link to="#" className="fa fa-heart" />
											<Link to="#" className="fa fa-shopping-basket" />
											<Link
												to="#product-preview"
												data-toggle="modal"
												className="fa fa-expand"
											/>
										</div>
									</div>
									<div className="product-caption">
										<h3 className="product-title">
											<Link to="#">
												{' '}
												<span className="light-font"> organic </span> <strong>tomato</strong>
											</Link>
										</h3>
										<div className="price">
											<strong className="clr-txt">$50.00 </strong>{' '}
											<del className="light-font">$65.00 </del>
										</div>
									</div>
								</div>
							</div>
							<div className="item">
								<div className="product-box">
									<div className="product-media">
										<img className="prod-img" alt="" src="img/products/3.png" />
										<img className="shape" alt="" src="img/icons/shap-small.png" />
										<div className="prod-icons">
											<Link to="#" className="fa fa-heart" />
											<Link to="#" className="fa fa-shopping-basket" />
											<Link
												to="#product-preview"
												data-toggle="modal"
												className="fa fa-expand"
											/>
										</div>
									</div>
									<div className="product-caption">
										<h3 className="product-title">
											<Link to="#">
												{' '}
												<span className="light-font"> organic </span> <strong>cherry</strong>
											</Link>
										</h3>
										<div className="price">
											<strong className="clr-txt">$50.00 </strong>{' '}
											<del className="light-font">$65.00 </del>
										</div>
									</div>
								</div>
								<div className="product-box">
									<div className="product-media">
										<img className="prod-img" alt="" src="img/products/5.png" />
										<img className="shape" alt="" src="img/icons/shap-small.png" />
										<div className="prod-icons">
											<Link to="#" className="fa fa-heart" />
											<Link to="#" className="fa fa-shopping-basket" />
											<Link
												to="#product-preview"
												data-toggle="modal"
												className="fa fa-expand"
											/>
										</div>
									</div>
									<div className="product-caption">
										<h3 className="product-title">
											<Link to="#">
												{' '}
												<span className="light-font"> organic </span> <strong>pinapple</strong>
											</Link>
										</h3>
										<div className="price">
											<strong className="clr-txt">$50.00 </strong>{' '}
											<del className="light-font">$65.00 </del>
										</div>
									</div>
								</div>
							</div>
							<div className="item">
								<div className="product-box">
									<div className="product-media">
										<img className="prod-img" alt="" src="img/products/2.png" />
										<img className="shape" alt="" src="img/icons/shap-small.png" />
										<div className="prod-icons">
											<Link to="#" className="fa fa-heart" />
											<Link to="#" className="fa fa-shopping-basket" />
											<Link
												to="#product-preview"
												data-toggle="modal"
												className="fa fa-expand"
											/>
										</div>
									</div>
									<div className="product-caption">
										<h3 className="product-title">
											<Link to="#">
												{' '}
												<span className="light-font"> organic </span> <strong>cabbage</strong>
											</Link>
										</h3>
										<div className="price">
											<strong className="clr-txt">$50.00 </strong>{' '}
											<del className="light-font">$65.00 </del>
										</div>
									</div>
								</div>
								<div className="product-box">
									<div className="product-media">
										<img className="prod-img" alt="" src="img/products/4.png" />
										<img className="shape" alt="" src="img/icons/shap-small.png" />
										<div className="prod-icons">
											<Link to="#" className="fa fa-heart" />
											<Link to="#" className="fa fa-shopping-basket" />
											<Link
												to="#product-preview"
												data-toggle="modal"
												className="fa fa-expand"
											/>
										</div>
									</div>
									<div className="product-caption">
										<h3 className="product-title">
											<Link to="#">
												{' '}
												<span className="light-font"> green </span> <strong>salad</strong>
											</Link>
										</h3>
										<div className="price">
											<strong className="clr-txt">$50.00 </strong>{' '}
											<del className="light-font">$65.00 </del>
										</div>
									</div>
								</div>
							</div>
							<div className="item">
								<div className="product-box">
									<div className="product-media">
										<img className="prod-img" alt="" src="img/products/7.png" />
										<img className="shape" alt="" src="img/icons/shap-small.png" />
										<div className="prod-icons">
											<Link to="#" className="fa fa-heart" />
											<Link to="#" className="fa fa-shopping-basket" />
											<Link
												to="#product-preview"
												data-toggle="modal"
												className="fa fa-expand"
											/>
										</div>
									</div>
									<div className="product-caption">
										<h3 className="product-title">
											<Link to="#">
												{' '}
												<span className="light-font"> organic </span> <strong>mushroom</strong>
											</Link>
										</h3>
										<div className="price">
											<strong className="clr-txt">$50.00 </strong>{' '}
											<del className="light-font">$65.00 </del>
										</div>
									</div>
								</div>
								<div className="product-box">
									<div className="product-media">
										<img className="prod-img" alt="" src="img/products/6.png" />
										<img className="shape" alt="" src="img/icons/shap-small.png" />
										<div className="prod-icons">
											<Link to="#" className="fa fa-heart" />
											<Link to="#" className="fa fa-shopping-basket" />
											<Link
												to="#product-preview"
												data-toggle="modal"
												className="fa fa-expand"
											/>
										</div>
									</div>
									<div className="product-caption">
										<h3 className="product-title">
											<Link to="#">
												{' '}
												<span className="light-font"> organic </span> <strong>onion</strong>
											</Link>
										</h3>
										<div className="price">
											<strong className="clr-txt">$50.00 </strong>{' '}
											<del className="light-font">$65.00 </del>
										</div>
									</div>
								</div>
							</div>
							<div className="item">
								<div className="product-box">
									<div className="product-media">
										<img className="prod-img" alt="" src="img/products/8.png" />
										<img className="shape" alt="" src="img/icons/shap-small.png" />
										<div className="prod-icons">
											<Link to="#" className="fa fa-heart" />
											<Link to="#" className="fa fa-shopping-basket" />
											<Link
												to="#product-preview"
												data-toggle="modal"
												className="fa fa-expand"
											/>
										</div>
									</div>
									<div className="product-caption">
										<h3 className="product-title">
											<Link to="#">
												{' '}
												<span className="light-font"> organic </span> <strong>pepper </strong>
											</Link>
										</h3>
										<div className="price">
											<strong className="clr-txt">$50.00 </strong>{' '}
											<del className="light-font">$65.00 </del>
										</div>
									</div>
								</div>
								<div className="product-box">
									<div className="product-media">
										<img className="prod-img" alt="" src="img/products/1.png" />
										<img className="shape" alt="" src="img/icons/shap-small.png" />
										<div className="prod-icons">
											<Link to="#" className="fa fa-heart" />
											<Link to="#" className="fa fa-shopping-basket" />
											<Link
												to="#product-preview"
												data-toggle="modal"
												className="fa fa-expand"
											/>
										</div>
									</div>
									<div className="product-caption">
										<h3 className="product-title">
											<Link to="#">
												{' '}
												<span className="light-font"> organic </span> <strong>tomato</strong>
											</Link>
										</h3>
										<div className="price">
											<strong className="clr-txt">$50.00 </strong>{' '}
											<del className="light-font">$65.00 </del>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div id="naturix-tab-6" className="tab-pane fade">
						<div className="naturix-slider-1 dots-1">
							<div className="item">
								<div className="product-box">
									<div className="product-media">
										<img className="prod-img" alt="" src="img/products/7.png" />
										<img className="shape" alt="" src="img/icons/shap-small.png" />
										<div className="prod-icons">
											<Link to="#" className="fa fa-heart" />
											<Link to="#" className="fa fa-shopping-basket" />
											<Link
												to="#product-preview"
												data-toggle="modal"
												className="fa fa-expand"
											/>
										</div>
									</div>
									<div className="product-caption">
										<h3 className="product-title">
											<Link to="#">
												{' '}
												<span className="light-font"> organic </span> <strong>mushroom</strong>
											</Link>
										</h3>
										<div className="price">
											<strong className="clr-txt">$50.00 </strong>{' '}
											<del className="light-font">$65.00 </del>
										</div>
									</div>
								</div>
								<div className="product-box">
									<div className="product-media">
										<img className="prod-img" alt="" src="img/products/6.png" />
										<img className="shape" alt="" src="img/icons/shap-small.png" />
										<div className="prod-icons">
											<Link to="#" className="fa fa-heart" />
											<Link to="#" className="fa fa-shopping-basket" />
											<Link
												to="#product-preview"
												data-toggle="modal"
												className="fa fa-expand"
											/>
										</div>
									</div>
									<div className="product-caption">
										<h3 className="product-title">
											<Link to="#">
												{' '}
												<span className="light-font"> organic </span> <strong>onion</strong>
											</Link>
										</h3>
										<div className="price">
											<strong className="clr-txt">$50.00 </strong>{' '}
											<del className="light-font">$65.00 </del>
										</div>
									</div>
								</div>
							</div>
							<div className="item">
								<div className="product-box">
									<div className="product-media">
										<img className="prod-img" alt="" src="img/products/3.png" />
										<img className="shape" alt="" src="img/icons/shap-small.png" />
										<div className="prod-icons">
											<Link to="#" className="fa fa-heart" />
											<Link to="#" className="fa fa-shopping-basket" />
											<Link
												to="#product-preview"
												data-toggle="modal"
												className="fa fa-expand"
											/>
										</div>
									</div>
									<div className="product-caption">
										<h3 className="product-title">
											<Link to="#">
												{' '}
												<span className="light-font"> organic </span> <strong>cherry</strong>
											</Link>
										</h3>
										<div className="price">
											<strong className="clr-txt">$50.00 </strong>{' '}
											<del className="light-font">$65.00 </del>
										</div>
									</div>
								</div>
								<div className="product-box">
									<div className="product-media">
										<img className="prod-img" alt="" src="img/products/5.png" />
										<img className="shape" alt="" src="img/icons/shap-small.png" />
										<div className="prod-icons">
											<Link to="#" className="fa fa-heart" />
											<Link to="#" className="fa fa-shopping-basket" />
											<Link
												to="#product-preview"
												data-toggle="modal"
												className="fa fa-expand"
											/>
										</div>
									</div>
									<div className="product-caption">
										<h3 className="product-title">
											<Link to="#">
												{' '}
												<span className="light-font"> organic </span> <strong>pinapple</strong>
											</Link>
										</h3>
										<div className="price">
											<strong className="clr-txt">$50.00 </strong>{' '}
											<del className="light-font">$65.00 </del>
										</div>
									</div>
								</div>
							</div>
							<div className="item">
								<div className="product-box">
									<div className="product-media">
										<img className="prod-img" alt="" src="img/products/2.png" />
										<img className="shape" alt="" src="img/icons/shap-small.png" />
										<div className="prod-icons">
											<Link to="#" className="fa fa-heart" />
											<Link to="#" className="fa fa-shopping-basket" />
											<Link
												to="#product-preview"
												data-toggle="modal"
												className="fa fa-expand"
											/>
										</div>
									</div>
									<div className="product-caption">
										<h3 className="product-title">
											<Link to="#">
												{' '}
												<span className="light-font"> organic </span> <strong>cabbage</strong>
											</Link>
										</h3>
										<div className="price">
											<strong className="clr-txt">$50.00 </strong>{' '}
											<del className="light-font">$65.00 </del>
										</div>
									</div>
								</div>
								<div className="product-box">
									<div className="product-media">
										<img className="prod-img" alt="" src="img/products/4.png" />
										<img className="shape" alt="" src="img/icons/shap-small.png" />
										<div className="prod-icons">
											<Link to="#" className="fa fa-heart" />
											<Link to="#" className="fa fa-shopping-basket" />
											<Link
												to="#product-preview"
												data-toggle="modal"
												className="fa fa-expand"
											/>
										</div>
									</div>
									<div className="product-caption">
										<h3 className="product-title">
											<Link to="#">
												{' '}
												<span className="light-font"> green </span> <strong>salad</strong>
											</Link>
										</h3>
										<div className="price">
											<strong className="clr-txt">$50.00 </strong>{' '}
											<del className="light-font">$65.00 </del>
										</div>
									</div>
								</div>
							</div>
							<div className="item">
								<div className="product-box">
									<div className="product-media">
										<img className="prod-img" alt="" src="img/products/8.png" />
										<img className="shape" alt="" src="img/icons/shap-small.png" />
										<div className="prod-icons">
											<Link to="#" className="fa fa-heart" />
											<Link to="#" className="fa fa-shopping-basket" />
											<Link
												to="#product-preview"
												data-toggle="modal"
												className="fa fa-expand"
											/>
										</div>
									</div>
									<div className="product-caption">
										<h3 className="product-title">
											<Link to="#">
												{' '}
												<span className="light-font"> organic </span> <strong>pepper </strong>
											</Link>
										</h3>
										<div className="price">
											<strong className="clr-txt">$50.00 </strong>{' '}
											<del className="light-font">$65.00 </del>
										</div>
									</div>
								</div>
								<div className="product-box">
									<div className="product-media">
										<img className="prod-img" alt="" src="img/products/1.png" />
										<img className="shape" alt="" src="img/icons/shap-small.png" />
										<div className="prod-icons">
											<Link to="#" className="fa fa-heart" />
											<Link to="#" className="fa fa-shopping-basket" />
											<Link
												to="#product-preview"
												data-toggle="modal"
												className="fa fa-expand"
											/>
										</div>
									</div>
									<div className="product-caption">
										<h3 className="product-title">
											<Link to="#">
												{' '}
												<span className="light-font"> organic </span> <strong>tomato</strong>
											</Link>
										</h3>
										<div className="price">
											<strong className="clr-txt">$50.00 </strong>{' '}
											<del className="light-font">$65.00 </del>
										</div>
									</div>
								</div>
							</div>
							<div className="item">
								<div className="product-box">
									<div className="product-media">
										<img className="prod-img" alt="" src="img/products/3.png" />
										<img className="shape" alt="" src="img/icons/shap-small.png" />
										<div className="prod-icons">
											<Link to="#" className="fa fa-heart" />
											<Link to="#" className="fa fa-shopping-basket" />
											<Link
												to="#product-preview"
												data-toggle="modal"
												className="fa fa-expand"
											/>
										</div>
									</div>
									<div className="product-caption">
										<h3 className="product-title">
											<Link to="#">
												{' '}
												<span className="light-font"> organic </span> <strong>cherry</strong>
											</Link>
										</h3>
										<div className="price">
											<strong className="clr-txt">$50.00 </strong>{' '}
											<del className="light-font">$65.00 </del>
										</div>
									</div>
								</div>
								<div className="product-box">
									<div className="product-media">
										<img className="prod-img" alt="" src="img/products/5.png" />
										<img className="shape" alt="" src="img/icons/shap-small.png" />
										<div className="prod-icons">
											<Link to="#" className="fa fa-heart" />
											<Link to="#" className="fa fa-shopping-basket" />
											<Link
												to="#product-preview"
												data-toggle="modal"
												className="fa fa-expand"
											/>
										</div>
									</div>
									<div className="product-caption">
										<h3 className="product-title">
											<Link to="#">
												{' '}
												<span className="light-font"> organic </span> <strong>pinapple</strong>
											</Link>
										</h3>
										<div className="price">
											<strong className="clr-txt">$50.00 </strong>{' '}
											<del className="light-font">$65.00 </del>
										</div>
									</div>
								</div>
							</div>
							<div className="item">
								<div className="product-box">
									<div className="product-media">
										<img className="prod-img" alt="" src="img/products/2.png" />
										<img className="shape" alt="" src="img/icons/shap-small.png" />
										<div className="prod-icons">
											<Link to="#" className="fa fa-heart" />
											<Link to="#" className="fa fa-shopping-basket" />
											<Link
												to="#product-preview"
												data-toggle="modal"
												className="fa fa-expand"
											/>
										</div>
									</div>
									<div className="product-caption">
										<h3 className="product-title">
											<Link to="#">
												{' '}
												<span className="light-font"> organic </span> <strong>cabbage</strong>
											</Link>
										</h3>
										<div className="price">
											<strong className="clr-txt">$50.00 </strong>{' '}
											<del className="light-font">$65.00 </del>
										</div>
									</div>
								</div>
								<div className="product-box">
									<div className="product-media">
										<img className="prod-img" alt="" src="img/products/4.png" />
										<img className="shape" alt="" src="img/icons/shap-small.png" />
										<div className="prod-icons">
											<Link to="#" className="fa fa-heart" />
											<Link to="#" className="fa fa-shopping-basket" />
											<Link
												to="#product-preview"
												data-toggle="modal"
												className="fa fa-expand"
											/>
										</div>
									</div>
									<div className="product-caption">
										<h3 className="product-title">
											<Link to="#">
												{' '}
												<span className="light-font"> green </span> <strong>salad</strong>
											</Link>
										</h3>
										<div className="price">
											<strong className="clr-txt">$50.00 </strong>{' '}
											<del className="light-font">$65.00 </del>
										</div>
									</div>
								</div>
							</div>
							<div className="item">
								<div className="product-box">
									<div className="product-media">
										<img className="prod-img" alt="" src="img/products/7.png" />
										<img className="shape" alt="" src="img/icons/shap-small.png" />
										<div className="prod-icons">
											<Link to="#" className="fa fa-heart" />
											<Link to="#" className="fa fa-shopping-basket" />
											<Link
												to="#product-preview"
												data-toggle="modal"
												className="fa fa-expand"
											/>
										</div>
									</div>
									<div className="product-caption">
										<h3 className="product-title">
											<Link to="#">
												{' '}
												<span className="light-font"> organic </span> <strong>mushroom</strong>
											</Link>
										</h3>
										<div className="price">
											<strong className="clr-txt">$50.00 </strong>{' '}
											<del className="light-font">$65.00 </del>
										</div>
									</div>
								</div>
								<div className="product-box">
									<div className="product-media">
										<img className="prod-img" alt="" src="img/products/6.png" />
										<img className="shape" alt="" src="img/icons/shap-small.png" />
										<div className="prod-icons">
											<Link to="#" className="fa fa-heart" />
											<Link to="#" className="fa fa-shopping-basket" />
											<Link
												to="#product-preview"
												data-toggle="modal"
												className="fa fa-expand"
											/>
										</div>
									</div>
									<div className="product-caption">
										<h3 className="product-title">
											<Link to="#">
												{' '}
												<span className="light-font"> organic </span> <strong>onion</strong>
											</Link>
										</h3>
										<div className="price">
											<strong className="clr-txt">$50.00 </strong>{' '}
											<del className="light-font">$65.00 </del>
										</div>
									</div>
								</div>
							</div>
							<div className="item">
								<div className="product-box">
									<div className="product-media">
										<img className="prod-img" alt="" src="img/products/8.png" />
										<img className="shape" alt="" src="img/icons/shap-small.png" />
										<div className="prod-icons">
											<Link to="#" className="fa fa-heart" />
											<Link to="#" className="fa fa-shopping-basket" />
											<Link
												to="#product-preview"
												data-toggle="modal"
												className="fa fa-expand"
											/>
										</div>
									</div>
									<div className="product-caption">
										<h3 className="product-title">
											<Link to="#">
												{' '}
												<span className="light-font"> organic </span> <strong>pepper </strong>
											</Link>
										</h3>
										<div className="price">
											<strong className="clr-txt">$50.00 </strong>{' '}
											<del className="light-font">$65.00 </del>
										</div>
									</div>
								</div>
								<div className="product-box">
									<div className="product-media">
										<img className="prod-img" alt="" src="img/products/1.png" />
										<img className="shape" alt="" src="img/icons/shap-small.png" />
										<div className="prod-icons">
											<Link to="#" className="fa fa-heart" />
											<Link to="#" className="fa fa-shopping-basket" />
											<Link
												to="#product-preview"
												data-toggle="modal"
												className="fa fa-expand"
											/>
										</div>
									</div>
									<div className="product-caption">
										<h3 className="product-title">
											<Link to="#">
												{' '}
												<span className="light-font"> organic </span> <strong>tomato</strong>
											</Link>
										</h3>
										<div className="price">
											<strong className="clr-txt">$50.00 </strong>{' '}
											<del className="light-font">$65.00 </del>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default NaturixGoods;
