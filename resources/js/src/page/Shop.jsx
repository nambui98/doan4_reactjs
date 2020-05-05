import React from 'react';
// import { DropdownButton, FormGroup, FormControl, MenuItem } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Breadcrumb from '../conponents/Breadcrumb';

import { Select, Form, Slider } from 'antd';
const { Option } = Select;
Shop.propTypes = {};

function Shop(props) {
	const handleChange = (value) => {
		console.log(`selected ${value}`);
	};
	const onFinish = (values) => {
		console.log('Received values of form: ', values);
	};
	return (
		<div>
			<Breadcrumb nameLocation="Cửa hàng" />,
			<section className="shop-wrap sec-space-bottom">
				<div className="pattern">
					<img alt="" src="img/icons/white-pattern.png" />
				</div>
				<div className="container rel-div">
					<Form name="complex-form" onFinish={onFinish} labelCol={{ span: 8 }} wrapperCol={{ span: 16 }}>
						<div className="row sort-bar" style={{ padding: 0 }}>
							<div className="icon">
								{' '}
								<img alt="" src="img/logo/logo-2.png" />{' '}
							</div>
							<div className="col-lg-6">
								<div className="sort-dropdown left">
									<span>CATEGORY</span>
									<div className="search-selectpicker selectpicker-wrapper">
										<Form.Item>
											{/* <div className="search-selectpicker selectpicker-wrapper"> */}
											{/* <Select
									className="search-selectpicker selectpicker-wrapper input-price"
									styles={ width: '150px' }
									options={options}
								/> */}

											<Select
												// className="search-selectpicker"
												defaultValue="lucy"
												style={{ width: 150 }}
												onChange={handleChange}
											>
												<Option value="jack">Jack</Option>
												<Option value="lucy">Lucy</Option>
												<Option value="disabled" disabled>
													Disabled
												</Option>
												<Option value="Yiminghe">yiminghe</Option>
											</Select>
										</Form.Item>
									</div>
									{/* <FormGroup
										controlId="formControlsSelect"
										className="search-selectpicker selectpicker-wrapper"
									>

										<FormControl placeholder="select">
											<Select className=" selectpicker input-price">
												<option value="select">select</option>
												<option value="other">...</option>
											</Select>
										</FormControl>
									</FormGroup> */}
									{/* </div> */}
									{/* <div className="search-selectpicker selectpicker-wrapper">
									<select
										className="selectpicker input-price"
										data-width="100%"
										data-toggle="tooltip"
									>
										<option>All product</option>
										<option>A - Z</option>
										<option>Z - A</option>
										<option> Low - High </option>
										<option> High - Low </option>
									</select>
								</div> */}
									{/* </Form> */}
								</div>
								<div className="sort-dropdown" style={{ margin: 0 }}>
									<span>SORT BY</span>
									<div className="search-selectpicker selectpicker-wrapper">
										<Form.Item>
											<Select
												defaultValue="lucy"
												style={{ width: 150 }}
												onChange={handleChange}
												className="selectpicker input-price"
											>
												<Option value="jack">Jack</Option>
												<Option value="lucy">Lucy</Option>
												<Option value="disabled" disabled>
													Disabled
												</Option>
												<Option value="Yiminghe">yiminghe</Option>
											</Select>
										</Form.Item>
									</div>
									{/* <div className="search-selectpicker selectpicker-wrapper">
									<select
										className="selectpicker input-price"
										data-width="100%"
										data-toggle="tooltip"
									>
										<option>Popular item</option>
										<option>A - Z</option>
										<option>Z - A</option>
										<option> Low - High </option>
										<option> High - Low </option>
									</select>
								</div> */}
								</div>
							</div>

							<div className="col-lg-5 right">
								<div className="sort-dropdown">
									<span>BY PRICE</span>
									<div className="search-selectpicker selectpicker-wrapper">
										<Form.Item className="selectpicker input-price">
											<Select defaultValue="lucy" style={{ width: 150 }} onChange={handleChange}>
												<Option value="jack">Jack</Option>
												<Option value="lucy">Lucy</Option>
												<Option value="disabled" disabled>
													Disabled
												</Option>
												<Option value="Yiminghe">yiminghe</Option>
											</Select>
										</Form.Item>
									</div>
									{/* <div className="search-selectpicker selectpicker-wrapper">
									<select
										className="selectpicker input-price"
										data-width="100%"
										data-toggle="tooltip"
									>
										<option> Low to High </option>
										<option> High to Low </option>
									</select>
								</div> */}
								</div>
								<div className="sort-range">
									<Slider range defaultValue={[ 20, 50 ]} />
								</div>
							</div>
						</div>
					</Form>
					<div className="divider-full-1" />
					<div className="result-bar block-inline">
						<h4 className="result-txt">
							search result <b> 125 </b>{' '}
						</h4>
						<ul className="view-tabs">
							<li className="active">
								<Link to="#grid-view" data-toggle="tab">
									<i className="fa fa-th" />
								</Link>
							</li>
							<li className>
								<Link to="#list-view" data-toggle="tab">
									<i className="fa fa-th-list" />
								</Link>
							</li>
						</ul>
					</div>
					<div className="tab-content shop-content">
						<div id="grid-view" className="tab-pane fade active in" role="tabpanel">
							<div className="row">
								<div className="col-lg-3 col-md-4 col-sm-6">
									<div className="product-box">
										<div className="product-media">
											<img className="prod-img" alt="" src="img/products/7.png" />
											<img className="shape" alt="" src="img/icons/shap-small.png" />
											<div className="prod-icons">
												<Link to="#" className="fa fa-heart" />
												<Link to="#" className="fa fa-shopping-basket" />
												<a
													href="#product-preview"
													data-toggle="modal"
													className="fa fa-expand"
												/>
											</div>
										</div>
										<div className="product-caption">
											<h3 className="product-title">
												<Link to="#">
													{' '}
													<span className="light-font"> organic </span>{' '}
													<strong>mushroom</strong>
												</Link>
											</h3>
											<div className="price">
												<strong className="clr-txt">$50.00 </strong>{' '}
												<del className="light-font">$65.00 </del>
											</div>
										</div>
									</div>
								</div>
								<div className="col-lg-3 col-md-4 col-sm-6">
									<div className="product-box">
										<div className="product-media">
											<img className="prod-img" alt="" src="img/products/6.png" />
											<img className="shape" alt="" src="img/icons/shap-small.png" />
											<div className="prod-icons">
												<Link to="#" className="fa fa-heart" />
												<Link to="#" className="fa fa-shopping-basket" />
												<a
													href="#product-preview"
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
								<div className="col-lg-3 col-md-4 col-sm-6">
									<div className="product-box">
										<div className="product-media">
											<img className="prod-img" alt="" src="img/products/3.png" />
											<img className="shape" alt="" src="img/icons/shap-small.png" />
											<div className="prod-icons">
												<Link to="#" className="fa fa-heart" />
												<Link to="#" className="fa fa-shopping-basket" />
												<a
													href="#product-preview"
													data-toggle="modal"
													className="fa fa-expand"
												/>
											</div>
										</div>
										<div className="product-caption">
											<h3 className="product-title">
												<Link to="#">
													{' '}
													<span className="light-font"> organic </span>{' '}
													<strong>cherry</strong>
												</Link>
											</h3>
											<div className="price">
												<strong className="clr-txt">$50.00 </strong>{' '}
												<del className="light-font">$65.00 </del>
											</div>
										</div>
									</div>
								</div>
								<div className="col-lg-3 col-md-4 col-sm-6">
									<div className="product-box">
										<div className="product-media">
											<img className="prod-img" alt="" src="img/products/5.png" />
											<img className="shape" alt="" src="img/icons/shap-small.png" />
											<div className="prod-icons">
												<Link to="#" className="fa fa-heart" />
												<Link to="#" className="fa fa-shopping-basket" />
												<a
													href="#product-preview"
													data-toggle="modal"
													className="fa fa-expand"
												/>
											</div>
										</div>
										<div className="product-caption">
											<h3 className="product-title">
												<Link to="#">
													{' '}
													<span className="light-font"> organic </span>{' '}
													<strong>pinapple</strong>
												</Link>
											</h3>
											<div className="price">
												<strong className="clr-txt">$50.00 </strong>{' '}
												<del className="light-font">$65.00 </del>
											</div>
										</div>
									</div>
								</div>
								<div className="col-lg-3 col-md-4 col-sm-6">
									<div className="product-box">
										<div className="product-media">
											<img className="prod-img" alt="" src="img/products/2.png" />
											<img className="shape" alt="" src="img/icons/shap-small.png" />
											<div className="prod-icons">
												<Link to="#" className="fa fa-heart" />
												<Link to="#" className="fa fa-shopping-basket" />
												<a
													href="#product-preview"
													data-toggle="modal"
													className="fa fa-expand"
												/>
											</div>
										</div>
										<div className="product-caption">
											<h3 className="product-title">
												<Link to="#">
													{' '}
													<span className="light-font"> organic </span>{' '}
													<strong>cabbage</strong>
												</Link>
											</h3>
											<div className="price">
												<strong className="clr-txt">$50.00 </strong>{' '}
												<del className="light-font">$65.00 </del>
											</div>
										</div>
									</div>
								</div>
								<div className="col-lg-3 col-md-4 col-sm-6">
									<div className="product-box">
										<div className="product-media">
											<img className="prod-img" alt="" src="img/products/4.png" />
											<img className="shape" alt="" src="img/icons/shap-small.png" />
											<div className="prod-icons">
												<Link to="#" className="fa fa-heart" />
												<Link to="#" className="fa fa-shopping-basket" />
												<a
													href="#product-preview"
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
								<div className="col-lg-3 col-md-4 col-sm-6">
									<div className="product-box">
										<div className="product-media">
											<img className="prod-img" alt="" src="img/products/8.png" />
											<img className="shape" alt="" src="img/icons/shap-small.png" />
											<div className="prod-icons">
												<Link to="#" className="fa fa-heart" />
												<Link to="#" className="fa fa-shopping-basket" />
												<a
													href="#product-preview"
													data-toggle="modal"
													className="fa fa-expand"
												/>
											</div>
										</div>
										<div className="product-caption">
											<h3 className="product-title">
												<Link to="#">
													{' '}
													<span className="light-font"> organic </span>{' '}
													<strong>pepper </strong>
												</Link>
											</h3>
											<div className="price">
												<strong className="clr-txt">$50.00 </strong>{' '}
												<del className="light-font">$65.00 </del>
											</div>
										</div>
									</div>
								</div>
								<div className="col-lg-3 col-md-4 col-sm-6">
									<div className="product-box">
										<div className="product-media">
											<img className="prod-img" alt="" src="img/products/1.png" />
											<img className="shape" alt="" src="img/icons/shap-small.png" />
											<div className="prod-icons">
												<Link to="#" className="fa fa-heart" />
												<Link to="#" className="fa fa-shopping-basket" />
												<a
													href="#product-preview"
													data-toggle="modal"
													className="fa fa-expand"
												/>
											</div>
										</div>
										<div className="product-caption">
											<h3 className="product-title">
												<Link to="#">
													{' '}
													<span className="light-font"> organic </span>{' '}
													<strong>tomato</strong>
												</Link>
											</h3>
											<div className="price">
												<strong className="clr-txt">$50.00 </strong>{' '}
												<del className="light-font">$65.00 </del>
											</div>
										</div>
									</div>
								</div>
								<div className="col-lg-3 col-md-4 col-sm-6">
									<div className="product-box">
										<div className="product-media">
											<img className="prod-img" alt="" src="img/products/3.png" />
											<img className="shape" alt="" src="img/icons/shap-small.png" />
											<div className="prod-icons">
												<Link to="#" className="fa fa-heart" />
												<Link to="#" className="fa fa-shopping-basket" />
												<a
													href="#product-preview"
													data-toggle="modal"
													className="fa fa-expand"
												/>
											</div>
										</div>
										<div className="product-caption">
											<h3 className="product-title">
												<Link to="#">
													{' '}
													<span className="light-font"> organic </span>{' '}
													<strong>cherry</strong>
												</Link>
											</h3>
											<div className="price">
												<strong className="clr-txt">$50.00 </strong>{' '}
												<del className="light-font">$65.00 </del>
											</div>
										</div>
									</div>
								</div>
								<div className="col-lg-3 col-md-4 col-sm-6">
									<div className="product-box">
										<div className="product-media">
											<img className="prod-img" alt="" src="img/products/5.png" />
											<img className="shape" alt="" src="img/icons/shap-small.png" />
											<div className="prod-icons">
												<Link to="#" className="fa fa-heart" />
												<Link to="#" className="fa fa-shopping-basket" />
												<a
													href="#product-preview"
													data-toggle="modal"
													className="fa fa-expand"
												/>
											</div>
										</div>
										<div className="product-caption">
											<h3 className="product-title">
												<Link to="#">
													{' '}
													<span className="light-font"> organic </span>{' '}
													<strong>pinapple</strong>
												</Link>
											</h3>
											<div className="price">
												<strong className="clr-txt">$50.00 </strong>{' '}
												<del className="light-font">$65.00 </del>
											</div>
										</div>
									</div>
								</div>
								<div className="col-lg-3 col-md-4 col-sm-6">
									<div className="product-box">
										<div className="product-media">
											<img className="prod-img" alt="" src="img/products/2.png" />
											<img className="shape" alt="" src="img/icons/shap-small.png" />
											<div className="prod-icons">
												<Link to="#" className="fa fa-heart" />
												<Link to="#" className="fa fa-shopping-basket" />
												<a
													href="#product-preview"
													data-toggle="modal"
													className="fa fa-expand"
												/>
											</div>
										</div>
										<div className="product-caption">
											<h3 className="product-title">
												<Link to="#">
													{' '}
													<span className="light-font"> organic </span>{' '}
													<strong>cabbage</strong>
												</Link>
											</h3>
											<div className="price">
												<strong className="clr-txt">$50.00 </strong>{' '}
												<del className="light-font">$65.00 </del>
											</div>
										</div>
									</div>
								</div>
								<div className="col-lg-3 col-md-4 col-sm-6">
									<div className="product-box">
										<div className="product-media">
											<img className="prod-img" alt="" src="img/products/4.png" />
											<img className="shape" alt="" src="img/icons/shap-small.png" />
											<div className="prod-icons">
												<Link to="#" className="fa fa-heart" />
												<Link to="#" className="fa fa-shopping-basket" />
												<a
													href="#product-preview"
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
							</div>
							<div className="rel-div pt-50">
								<div className="divider-full-1" />
								<div className="nav-page">
									<Link to="#" className="fa fa-long-arrow-left left" />
									<Link to="#" className="fa fa-long-arrow-right right" />
								</div>
							</div>
							<div className="pagination-wrap">
								<ul className="pagintn">
									<li>
										<Link
											style={{
												backgroundColor: '#92d2a7',
												color: '#fff'
											}}
											to="#"
										>
											01
										</Link>
									</li>
									<li>
										<Link to="#">02</Link>
									</li>
									<li>
										<Link to="#">03</Link>
									</li>
									<li>
										<Link to="#">04</Link>
									</li>
									<li>
										<Link to="#">05</Link>
									</li>
									<li>
										<Link to="#">...</Link>
									</li>
									<li>
										<Link to="#">15</Link>
									</li>
								</ul>
							</div>
						</div>
						<div id="list-view" className="tab-pane fade" role="tabpanel">
							<div className="row">
								<div className="col-md-6 col-sm-12">
									<div className="deal-item list-view">
										<div className="deal-icons">
											<Link to="#" className="fa fa-heart" />
											<Link to="#" className="fa fa-shopping-basket" />
											<Link to="#product-preview" data-toggle="modal" className="fa fa-expand" />
										</div>
										<div className="deal-content">
											<div className="text-right">
												<span className="prod-tag tag-1">new</span>{' '}
												<span className="prod-tag tag-2">sale</span>
											</div>
											<div className="deal-text">
												<h4 className="sub-title"> ORGANIC FRUITS </h4>
												<h2 className="fsz-30 pb-15">
													{' '}
													<Link to="#">
														{' '}
														<span className="light-font">fresh </span>{' '}
														<strong>rasberry </strong>{' '}
													</Link>{' '}
												</h2>
												<p>
													Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
													nonummy...
												</p>
												<div className="price pt-15">
													<strong className="clr-txt">$50.00 </strong>{' '}
													<del className="light-font">$65.00 </del>
												</div>
											</div>
											<div className="img">
												{' '}
												<img alt="" src="img/extra/deal-1.png" />{' '}
											</div>
										</div>
									</div>
								</div>
								<div className="col-md-6 col-sm-12">
									<div className="deal-item list-view">
										<div className="deal-icons">
											<Link to="#" className="fa fa-heart" />
											<Link to="#" className="fa fa-shopping-basket" />
											<Link to="#product-preview" data-toggle="modal" className="fa fa-expand" />
										</div>
										<div className="deal-content">
											<div className="text-right">
												<span className="prod-tag tag-1">new</span>{' '}
												<span className="prod-tag tag-2">sale</span>
											</div>
											<div className="deal-text">
												<h4 className="sub-title"> ORGANIC FRUITS </h4>
												<h2 className="fsz-30 pb-15">
													{' '}
													<Link to="#">
														{' '}
														<span className="light-font">fresh </span>{' '}
														<strong>cherry </strong>{' '}
													</Link>{' '}
												</h2>
												<p>
													Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
													nonummy...
												</p>
												<div className="price pt-15">
													<strong className="clr-txt">$50.00 </strong>{' '}
													<del className="light-font">$65.00 </del>
												</div>
											</div>
											<div className="img">
												{' '}
												<img alt="" src="img/products/3.png" />{' '}
											</div>
										</div>
									</div>
								</div>
								<div className="col-md-6 col-sm-12">
									<div className="deal-item list-view">
										<div className="deal-icons">
											<Link to="#" className="fa fa-heart" />
											<Link to="#" className="fa fa-shopping-basket" />
											<Link to="#product-preview" data-toggle="modal" className="fa fa-expand" />
										</div>
										<div className="deal-content">
											<div className="text-right">
												<span className="prod-tag tag-1">new</span>{' '}
												<span className="prod-tag tag-2">sale</span>
											</div>
											<div className="deal-text">
												<h4 className="sub-title"> ORGANIC FRUITS </h4>
												<h2 className="fsz-30 pb-15">
													{' '}
													<Link to="#">
														{' '}
														<span className="light-font">fresh </span>{' '}
														<strong>mushroom </strong>{' '}
													</Link>{' '}
												</h2>
												<p>
													Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
													nonummy...
												</p>
												<div className="price pt-15">
													<strong className="clr-txt">$50.00 </strong>{' '}
													<del className="light-font">$65.00 </del>
												</div>
											</div>
											<div className="img">
												{' '}
												<img alt="" src="img/products/7.png" />{' '}
											</div>
										</div>
									</div>
								</div>
								<div className="col-md-6 col-sm-12">
									<div className="deal-item list-view">
										<div className="deal-icons">
											<Link to="#" className="fa fa-heart" />
											<Link to="#" className="fa fa-shopping-basket" />
											<Link to="#product-preview" data-toggle="modal" className="fa fa-expand" />
										</div>
										<div className="deal-content">
											<div className="text-right">
												<span className="prod-tag tag-1">new</span>{' '}
												<span className="prod-tag tag-2">sale</span>
											</div>
											<div className="deal-text">
												<h4 className="sub-title"> ORGANIC FRUITS </h4>
												<h2 className="fsz-30 pb-15">
													{' '}
													<Link to="#">
														{' '}
														<span className="light-font">fresh </span>{' '}
														<strong>pepper </strong>{' '}
													</Link>{' '}
												</h2>
												<p>
													Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
													nonummy...
												</p>
												<div className="price pt-15">
													<strong className="clr-txt">$50.00 </strong>{' '}
													<del className="light-font">$65.00 </del>
												</div>
											</div>
											<div className="img">
												{' '}
												<img alt="" src="img/products/8.png" />{' '}
											</div>
										</div>
									</div>
								</div>
								<div className="col-md-6 col-sm-12">
									<div className="deal-item list-view">
										<div className="deal-icons">
											<Link to="#" className="fa fa-heart" />
											<Link to="#" className="fa fa-shopping-basket" />
											<Link to="#product-preview" data-toggle="modal" className="fa fa-expand" />
										</div>
										<div className="deal-content">
											<div className="text-right">
												<span className="prod-tag tag-1">new</span>{' '}
												<span className="prod-tag tag-2">sale</span>
											</div>
											<div className="deal-text">
												<h4 className="sub-title"> ORGANIC FRUITS </h4>
												<h2 className="fsz-30 pb-15">
													{' '}
													<Link to="#">
														{' '}
														<span className="light-font">fresh </span>{' '}
														<strong>cabbage </strong>{' '}
													</Link>{' '}
												</h2>
												<p>
													Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
													nonummy...
												</p>
												<div className="price pt-15">
													<strong className="clr-txt">$50.00 </strong>{' '}
													<del className="light-font">$65.00 </del>
												</div>
											</div>
											<div className="img">
												{' '}
												<img alt="" src="img/products/2.png" />{' '}
											</div>
										</div>
									</div>
								</div>
								<div className="col-md-6 col-sm-12">
									<div className="deal-item list-view">
										<div className="deal-icons">
											<Link to="#" className="fa fa-heart" />
											<Link to="#" className="fa fa-shopping-basket" />
											<Link to="#product-preview" data-toggle="modal" className="fa fa-expand" />
										</div>
										<div className="deal-content">
											<div className="text-right">
												<span className="prod-tag tag-1">new</span>{' '}
												<span className="prod-tag tag-2">sale</span>
											</div>
											<div className="deal-text">
												<h4 className="sub-title"> ORGANIC FRUITS </h4>
												<h2 className="fsz-30 pb-15">
													{' '}
													<Link to="#">
														{' '}
														<span className="light-font">fresh </span>{' '}
														<strong>salad </strong>{' '}
													</Link>{' '}
												</h2>
												<p>
													Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
													nonummy...
												</p>
												<div className="price pt-15">
													<strong className="clr-txt">$50.00 </strong>{' '}
													<del className="light-font">$65.00 </del>
												</div>
											</div>
											<div className="img">
												{' '}
												<img alt="" src="img/products/4.png" />{' '}
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="rel-div pt-50">
								<div className="divider-full-1" />
								<div className="nav-page">
									<Link to="#" className="fa fa-long-arrow-left left" />
									<Link to="#" className="fa fa-long-arrow-right right" />
								</div>
							</div>
							<div className="pagination-wrap">
								<ul className="pagintn">
									<li>
										<Link
											style={{
												color: '#fff !important'
											}}
											to="#"
										>
											01
										</Link>
									</li>
									<li>
										<Link to="#">02</Link>
									</li>
									<li>
										<Link to="#">03</Link>
									</li>
									<li>
										<Link to="#">04</Link>
									</li>
									<li>
										<Link to="#">05</Link>
									</li>
									<li>
										<Link to="#">15</Link>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}

export default Shop;
