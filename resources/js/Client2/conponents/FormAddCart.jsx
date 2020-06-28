import React, { useState, useRef, useContext, useEffect } from 'react';

import PropTypes from 'prop-types';
import { InputNumber, Select, Form, Button, Spin } from 'antd-v4';
import { Link, useParams } from 'react-router-domv5';
import { CartContext } from '../helpers/contextAPI';
import helperFunc from '../helpers/helperFunc';
const { convertNumber } = helperFunc;
FormAddCart.propTypes = {};

function FormAddCart(props) {
	const cart = useContext(CartContext);

	const onFinish = (values) => {
		cart.addToCart(props.product, values.quantity, values.typequantity);
		// props.toggle();
	};
	const addCart = (data, quantity, typequantity) => {
		cart.addToCart(props.product, quantity, typequantity);
	};
	return (
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
						<span className="light-font"> {props.product.id === 2 ? 'hữu cơ' : 'sạch'} </span>{' '}
					</Link>
				</h3>
				<span className="divider-2" />
				<p className="price">
					{props.price ? (
						[
							<strong className="clr-txt fsz-20">{convertNumber(props.price)} ₫ </strong>,
							<del className="light-font">{convertNumber(props.product.outputprice)} ₫ </del>
						]
					) : (
						<strong className="clr-txt fsz-20">{convertNumber(props.product.outputprice)} ₫ </strong>
					)}
					{/* <strong className="clr-txt fsz-20">$50.00 </strong>{' '}
												<del className="light-font">$65.00 </del> */}
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
						</div>
					</div>
					<div className="form-group">
						{' '}
						<i className="fa  fa-check-square-o clr-txt" /> <span>Ready in stock</span>{' '}
					</div>
				</div>
				<ul className="meta">
					<li>
						{' '}
						<strong> SKU </strong> <span>: &nbsp; AB2922-B</span>{' '}
					</li>
					<li>
						{' '}
						<strong> CATEGORY </strong> <span>: &nbsp; Fruits</span>{' '}
					</li>
					<li className="tags-widget">
						{' '}
						<strong> TAGS </strong>{' '}
						<span>
							: &nbsp; <a href="#">fruits</a> <a href="#">vegetables</a> <a href="#">juices</a>
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
				</div>
			</Form>
		</div>
	);
}

export default FormAddCart;
