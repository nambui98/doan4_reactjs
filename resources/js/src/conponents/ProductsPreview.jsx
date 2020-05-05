import React, { useState, useRef, useContext } from 'react';
import PropTypes from 'prop-types';
import { Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import OwlCarousel from 'react-owl-carousel';
import { InputNumber, Select, Form, Button } from 'antd';
import { CartContext } from '../helpers/contextAPI';

const { Option } = Select;
import helperFunc from '../helpers/helperFunc';
const { convertNumber } = helperFunc;

ProductsPreview.propTypes = {};

function ProductsPreview(props) {
	const inputRef = useRef();
	const [ indexImage, setIndexImage ] = useState(0);
	const cart = useContext(CartContext);

	const handelChangeImage = (index) => {
		// e.preventdefault();
		inputRef.current.to(index, 1000);
	};
	const images = props.product.images.split('#####');
	const onFinish = (values) => {
		cart.addToCart(props.product, values.quantity, values.typequantity);
		props.toggle();
	};
	return (
		<section className="modal fade in">
			<Modal
				show={props.show}
				onHide={props.toggle}
				dialogClassName=" modal-lg product-modal"
				style={{ padding: 0 }}
				// onHide={props.handleClose}
				// className="modal fade"
				// id="product-preview"
				// tabIndex={-1}
				// role="dialog"
				// aria-hidden="true"
			>
				{/* <Modal.Dialog className=" modal-lg product-modal"> */}
				{/* <div className="modal-dialog modal-lg product-modal"> */}
				{/* <div className="modal-content"> */}
				<Link
					aria-hidden="true"
					onClick={props.toggle}
					data-dismiss="modal"
					className="sb-close-btn close"
					to="#"
				>
					{' '}
					<i className=" fa fa-close" />{' '}
				</Link>
				<div className="product-single pb-50 clearfix">
					<div className="col-lg-6 col-sm-8 col-sm-offset-2 col-lg-offset-0 pt-50">
						{/* <div className="prod-slider sync1"> */}
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
										<img style={{ height: '450px' }} src={'img/products/' + item} alt="" />

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
						</OwlCarousel>
						{/* </div> */}
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
											<img src={'img/products/' + item} alt="" />{' '}
										</a>{' '}
									</div>
								);
							})}
						</OwlCarousel>
					</div>

					<div className="col-lg-6 pt-50">
						<div className="product-content block-inline">
							<div className="tag-rate">
								{props.priceSale ? (
									[
										<span className="prod-tag tag-1">new</span>,
										<span className="prod-tag tag-2">sale</span>
									]
								) : (
									''
								)}
								<div className="rating">
									<span className="star active" />
									<span className="star active" />
									<span className="star active" />
									<span className="star active" />
									<span className="star active" />
									<span className="fsz-12"> Based on 25 reviews</span>
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
										<Link to={'/product/' + props.product.id}>
											{' '}
											<strong>{props.product.name}</strong>
											<span className="light-font">
												{' '}
												{props.category.id === 2 ? 'hữu cơ' : 'sạch'}{' '}
											</span>{' '}
										</Link>
									</h3>
									<span className="divider-2" />
									<p className="price">
										{props.priceSale ? (
											[
												<strong className="clr-txt fsz-20">
													{convertNumber(props.priceSale)} ₫{' '}
												</strong>,
												<del className="light-font">
													{convertNumber(props.product.outputprice)} ₫{' '}
												</del>
											]
										) : (
											<strong className="clr-txt fsz-20">
												{convertNumber(props.product.outputprice)} ₫{' '}
											</strong>
										)}
									</p>
									<div className="fsz-16">
										<p>{props.product.content}</p>
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
												{/* <select
													className="selectpicker input-price"
													data-width="100%"
													data-toggle="tooltip"
												>
													<option>Kilo</option>
													<option>2 Kilo</option>
													<option>3 Kilo</option>
													<option>4 Kilo</option>
													<option>5 Kilo</option>
												</select> */}
											</div>
										</div>
										<div className="form-group">
											<label className="checkbox-inline">
												<input defaultValue type="checkbox" /> <span>Ready in stock</span>
											</label>{' '}
										</div>
									</div>

									<ul className="meta">
										<li>
											{' '}
											<strong> Mã </strong> <span>:{props.product.id}</span>{' '}
										</li>
										<li>
											{' '}
											<strong> Loại </strong>{' '}
											<span>: {props.product.idparent === 1 ? 'Hoa quả' : 'Rau'} </span>{' '}
										</li>
										<li className="tags-widget">
											{' '}
											<strong> Thẻ </strong>{' '}
											<span>
												: <Link to="/shop/category=1">Hoa quả</Link>{' '}
												<Link to="/shop/category=2">Rau</Link>{' '}
											</span>{' '}
										</li>
									</ul>
									<div className="divider-full-1" />
									<div className="add-cart pt-15">
										<Form.Item>
											<Button className="theme-btn btn" type="primary" htmlType="submit">
												<strong> Thêm vào giỏ</strong>{' '}
											</Button>
										</Form.Item>
										{/* <Link to="#" >
											{' '}

										</Link> */}
									</div>
								</Form>
							</div>
						</div>
					</div>
				</div>
				{/* </div> */}
				{/* </div> */}
				{/* </Modal.Dialog> */}
			</Modal>
		</section>
	);
}

export default ProductsPreview;
