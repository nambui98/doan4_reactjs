import React, { useState, useRef, useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link, useParams } from 'react-router-domv5';
import axios from 'axios';
import moment from 'moment';
import ReactHtmlParser from 'react-html-parser';

import OwlCarousel from 'react-owl-carousel';
import { InputNumber, Select, Form, Button, Spin } from 'antd-v4';
import { CartContext } from '../helpers/contextAPI';
import helperFunc from '../helpers/helperFunc';
const { convertNumber } = helperFunc;
const { Option } = Select;

ProductSingle.propTypes = {};

function ProductSingle(props) {
	const inputRef = useRef();
	const [ data, setData ] = useState();
	const [ star, setStar ] = useState(0);
	const [ content, setContent ] = useState();
	const [ comment, setComment ] = useState();
	const [ reload, setReload ] = useState(false);
	console.log('comment', comment);
	const cart = useContext(CartContext);
	let { id } = useParams();
	const handelChangeImage = (index) => {
		// e.preventdefault();
		inputRef.current.to(index, 1000);
	};

	async function getDataComment(id) {
		return await axios
			.get('/api/comment/commentPro/' + id, {
				headers: {
					'Content-Type': 'application/json'
				}
			})
			.then((response) => {
				// console.log('comment', response);
				setComment(response.data);
			})
			.catch((error) => {
				console.log(error);
			});
	}
	useEffect(() => {
        window.scrollTo(0, 0);

		async function getData() {
			return await axios
				.get('/api/products/' + id, {
					headers: {
						'Content-Type': 'application/json'
					}
				})
				.then((response) => {
					console.log(response);
					setData(response.data);
					getDataComment(response.data.id);
				})
				.catch((error) => {
					console.log(error);
				});
		}
		getData();
	}, []);
	let images = [];
	let price = 0;
	if (data) {
		console.log('data', data);
		images = data.images.split('#####');
		price =
			data.type === 1
				? data.outputprice - data.outputprice * data.numbersale / 100
				: data.type === 2 ? data.outputprice - data.numbersale : 0;
	}
	const onFinish = (values) => {
		cart.addToCart(data, values.quantity, values.typequantity);
		// props.toggle();
	};
	const handelChangeStar = (value) => {
		console.log(value);
		setStar(value);
	};
	const saveComment = async () => {
		// const requestUrl = 'api/categories';
		const user = JSON.parse(sessionStorage.getItem('account'));
		const dataPost = {
			idcustomer: user.id,
			idproduct: data.id,
			content: content,
			rate: star
		};
		return await axios
			.post('/api/auth/commentPro', dataPost, {
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer ${sessionStorage.getItem('access_token')}`
				}
			})
			.then((response) => {
				if (response.status === 200) {
					setComment(response.data);
					setContent('');
					setStar(0);
					// saveInfoCarts(response.data.id);
				} else {
					toast.error('Lỗi!');
				}
			})
			.catch((error) => {
				toast.error('Lỗi!');
			});
	};
	const handelChangeContent = (e) => {
		setContent(e.target.value);
	};
	const sendComment = () => {
		const access_token = sessionStorage.getItem('access_token');
		if (access_token) {
			saveComment();
		} else {
			cart.setShowLogin(true);
		}
	};
	let starList = [];
	for (let index = 0; index < 5; index++) {
		if (star > index) {
			starList.push(<span className="star active" onClick={() => handelChangeStar(index + 1)} />);
		} else {
			starList.push(<span className="star" onClick={() => handelChangeStar(index + 1)} />);
		}
	}
	const getStar = (star) => {
		let starListNew = [];
		for (let index = 0; index < 5; index++) {
			if (star > index) {
				starListNew.push(<span className="star active" onClick={() => handelChangeStar(index + 1)} />);
			} else {
				starListNew.push(<span className="star" onClick={() => handelChangeStar(index + 1)} />);
			}
		}
		return starListNew;
	};

	const getAverageStar = () => {
		let averageStar =
			comment && comment.length > 0
				? Math.ceil(comment.reduce((total, item) => total + item.rate, 0) / comment.length)
				: 5;
		console.log('total', averageStar);
		let starListNew = [];
		for (let index = 0; index < 5; index++) {
			if (averageStar > index) {
				starListNew.push(<span className="star active" onClick={() => handelChangeStar(index + 1)} />);
			} else {
				starListNew.push(<span className="star" onClick={() => handelChangeStar(index + 1)} />);
			}
		}
		return starListNew;
	};
	// const addCart = (data, quantity, typequantity) => {
	// 	return cart.addToCart(data, quantity, typequantity);
	// };
	// console.log('props', id);
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
								<a href="#"> Home </a> SHOP
							</li>
						</ol>
					</div>
				</div>
			</section>
			{/*Breadcrumb Section End*/}
			{/* Shop Starts*/}
			{data ? (
				<section className="shop-wrap sec-space-bottom">
					<div className="container rel-div pt-50">
						<div className="row">
							<div className="col-md-12 pt-15">
								<div className="product-single sec-space-bottom  clearfix">
									{/* Single Products Slider Starts */}
									<div className="col-lg-6 pb-50 col-sm-8 col-sm-offset-2 col-lg-offset-0">
										{data ? (
											[
												<OwlCarousel
													className="prod-slider sync1"
													ref={inputRef}
													rtl={false}
													dots={false}
													items={1}
													// to=(indexImage, 1000)
													navSpeed={1000}
													nav={false}
													// onChanged={syncPosition}
													responsiveRefreshRate={200}
												>
													{images.map((item, index) => {
														return (
															<div key={index} className="item">
																<img
																	style={{ height: '450px' }}
																	src={'/img/products/' + item}
																	alt=""
																/>

																<Link
																	to={'img/products/' + item}
																	data-gal="prettyPhoto[prettyPhoto]"
																	title="Product"
																	className="caption-link"
																>
																	<i className="arrow_expand" />
																</Link>
															</div>
														);
													})}
												</OwlCarousel>,
												<OwlCarousel
													className="sync2"
													dots={false}
													rtl={false}
													items={3}
													nav={true}
													navSpeed={500}
													responsive={{
														0: { items: 1 },
														480: { items: 3 }
													}}
													responsiveRefreshRate={200}
													navText={[
														"<i class='fa fa-long-arrow-left'></i> PREV",
														"NEXT <i class='fa fa-long-arrow-right'></i>"
													]}
												>
													{images.map((item, index) => {
														return (
															<div key={index} className="item">
																{' '}
																<a
																	onClick={() => handelChangeImage(index)}
																	style={{ width: '98px', height: '98px' }}
																>
																	{' '}
																	<img src={'/img/products/' + item} alt="" />{' '}
																</a>{' '}
															</div>
														);
													})}
												</OwlCarousel>
											]
										) : (
											''
										)}
									</div>
									{/* Single Products Slider Ends */}
									<div className="col-lg-6">
										<div className="product-content block-inline">
											<div className="tag-rate">
												{data && data.numbersale ? (
													[
														<span className="prod-tag tag-1">new</span>,
														<span className="prod-tag tag-2">sale</span>
													]
												) : (
													''
												)}

												<div className="rating">
													{getAverageStar()}

													<span className="fsz-12 gray-color ml-10">
														{comment && comment.length > 0 ? comment.length : 0} đánh giá
													</span>
												</div>
											</div>
											<div className="single-caption">
												<Form
													initialValues={{
														quantity: 1,
														typequantity: 1
													}}
													onFinish={onFinish}
													labelCol={{ span: 8 }}
													wrapperCol={{ span: 16 }}
												>
													<h3 className="section-title">
														<Link to={'/product/' + data.id}>
															{' '}
															<strong>{data.name}</strong>
															<span className="light-font">
																{' '}
																{data.id === 2 ? 'hữu cơ' : 'sạch'}{' '}
															</span>{' '}
														</Link>
													</h3>
													<span className="divider-2" />
													<p className="price">
														{price ? (
															[
																<strong className="clr-txt fsz-20">
																	{convertNumber(price)} ₫{' '}
																</strong>,
																<del className="light-font">
																	{convertNumber(data.outputprice)} ₫{' '}
																</del>
															]
														) : (
															<strong className="clr-txt fsz-20">
																{convertNumber(data.outputprice)} ₫{' '}
															</strong>
														)}
														{/* <strong className="clr-txt fsz-20">$50.00 </strong>{' '}
												<del className="light-font">$65.00 </del> */}
													</p>
													<div className="fsz-16">
														<p>{data.content}</p>
													</div>
													<div className="prod-btns">
														<div className="quantity">
															<Form.Item name="quantity" style={{ margin: 0 }}>
																<InputNumber
																	min={1}
																	// defaultValue={1}
																	style={{ width: 150 }}
																	//  onChange={onChange}
																/>
															</Form.Item>
														</div>
														<div className="sort-dropdown">
															<div className="search-selectpicker selectpicker-wrapper">
																<Form.Item name="typequantity" style={{ margin: 0 }}>
																	<Select
																		// defaultValue="1"
																		style={{ width: 100 }}
																		// onChange={handleChange}
																	>
																		<Option value={1}>Kilo</Option>
																		<Option value={2}>2 Kilo</Option>
																		<Option value={3}>3 Kilo</Option>
																		<Option value={4}>4 Kilo</Option>
																		<Option value={5}>5 Kilo</Option>
																	</Select>
																</Form.Item>
															</div>
														</div>
														<div className="form-group">
															{' '}
															<i className="fa  fa-check-square-o clr-txt" />{' '}
															<span>Ready in stock</span>{' '}
														</div>
													</div>
													<ul className="meta">
														<li>
															{' '}
															<strong> MÃ </strong> <span>: &nbsp; {data.id}</span>{' '}
														</li>
														<li>
															{' '}
															<strong> LOẠI </strong>{' '}
															<span>
																: &nbsp; {data.idparent === 1 ? 'Hoa quả' : 'Rau'}
															</span>{' '}
														</li>
														<li className="tags-widget">
															{' '}
															<strong> THẺ </strong>{' '}
															<span>
																: &nbsp; <Link to="/shop/category=1">Hoa quả</Link>{' '}
																<Link to="/shop/category=2">Rau</Link>{' '}
															</span>{' '}
														</li>
													</ul>
													<div className="divider-full-1" />
													<div className="add-cart pt-15">
														<Form.Item>
															<Button
																className="theme-btn btn"
																type="primary"
																htmlType="submit"
															>
																<strong> Thêm vào giỏ</strong>{' '}
															</Button>
														</Form.Item>
													</div>
												</Form>
											</div>
										</div>
									</div>
								</div>
								<div className="prod-tabs pb-50">
									<ul className="tabs fsz-20">
										<li className>
											<a href="#prod-tab-1" data-toggle="tab">
												<span className="light-font">Thông tin</span>{' '}
												<strong> sản phẩm </strong>{' '}
											</a>
										</li>
										<li className>
											<a href="#prod-tab-2" data-toggle="tab">
												{' '}
												<span className="light-font">Thông tin</span>
												<strong> bổ xung </strong>
											</a>
										</li>
										<li className="active">
											<a href="#prod-tab-3" data-toggle="tab">
												{' '}
												<span className="light-font">
													Đánh giá ({comment && comment.length > 0 ? comment.length : 0}){' '}
												</span>
												<strong>sản phẩm</strong>{' '}
											</a>
										</li>
									</ul>
									<div className="divider-full-1" />
									<div className="tab-content prod-tab-content">
										<div id="prod-tab-1" className="tab-pane fade">
											<h3 className="fsz-16">
												<span className="light-font"> Thông tin </span>
												<strong>sản phẩm </strong>
											</h3>
											<span className="divider-2 crl-bg" />
											<div className="block-inline pera">
												{data ? ReactHtmlParser(data.description) : ''}
											</div>
										</div>
										<div id="prod-tab-2" className="tab-pane fade">
											<h3 className="fsz-16">
												<span className="light-font">Thông tin </span>
												<strong> bổ xung</strong>
											</h3>
											<span className="divider-2 crl-bg" />
											<div className="block-inline pera">
												<p>Chưa có thông tin</p>
											</div>
										</div>
										<div id="prod-tab-3" className="tab-pane fade in active">
											<h3 className="fsz-16">
												<strong>Khách hàng </strong>{' '}
												<span className="light-font"> đánh giá</span>
												<span className="clr-txt">
													{comment && comment.length > 0 ? comment.length : 0}
												</span>{' '}
											</h3>
											<span className="divider-2 crl-bg" />
											{comment && comment.length > 0 ? (
												comment.map((item, index) => {
													return (
														<div className="review-wrap">
															<div className="review-img">
																<a href="#">
																	{' '}
																	<img
																		style={{ width: 50, height: 50 }}
																		alt=""
																		src={'/img/avatar/' + item.avatar}
																	/>{' '}
																</a>
															</div>
															<div className="review-caption">
																<h4 className="title fsz-16">
																	<a href="#">{item.name}</a>
																	<span className="fsz-10 gray-color">
																		{moment(item.updated_at).format('MM/DD/YYYY')}
																	</span>
																</h4>
																<div className="rating">
																	{getStar(item.rate)}

																	<span className="fsz-12 gray-color">
																		{' '}
																		Xếp hạng : {item.rate}/5{' '}
																	</span>
																</div>
																<div className="block-inline pera">
																	<p>{item.content}</p>
																</div>
															</div>
														</div>
													);
												})
											) : (
												''
											)}
										</div>
									</div>
								</div>
								<div className="your-review">
									<h3 className="fsz-20 pb-15 text-center">
										<span className="light-font">Bạn </span> <strong>đánh giá </strong>
									</h3>
									<div className="divider-full-1" />
									<div className="your-review">
										<div className="block-inline your-rating">
											<div className="left">
												<div className="rating">
													<span className="fsz-12 gray-color"> Your Rating :</span>
													{starList}
												</div>
											</div>
										</div>
										<form className="review-form row">
											<div className="form-group col-sm-12">
												<textarea
													className="form-control"
													placeholder="Message"
													cols={12}
													rows={4}
													onChange={handelChangeContent}
													value={content}
												/>
											</div>
											<div className="form-group col-sm-12 text-center ptb-15">
												<button type="button" className="theme-btn" onClick={sendComment}>
													{' '}
													<strong> ĐÁNH GIÁ </strong>{' '}
												</button>
											</div>
										</form>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
			) : (
				<section className="shop-wrap sec-space-bottom">
					<div className="container rel-div pt-50">
						<div
							className="row"
							style={{
								display: 'flex',
								justifyContent: 'center'
							}}
						>
							<Spin />
						</div>
					</div>
				</section>
			)}
		</div>
	);
}

export default ProductSingle;
