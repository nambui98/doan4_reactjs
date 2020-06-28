import React, { useContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-domv5';
import axios from 'axios';

import { InputNumber, Select, Form } from 'antd-v4';
import { CartContext } from '../helpers/contextAPI';
import helperFunc from '../helpers/helperFunc';
const { convertNumber } = helperFunc;
const { Option } = Select;

CartInCarts.propTypes = {};

function CartInCarts(props) {
	const [ form ] = Form.useForm();
	const cart = useContext(CartContext);
	const [ comment, setComment ] = useState();
	// const [ averageStar, setAverageStar ] = useState();

	let price = (product) => {
		return product.type === 1 && product.numbersale
			? product.outputprice - product.outputprice * product.numbersale / 100
			: product.type === 2 && product.numbersale ? product.outputprice - product.numbersale : product.outputprice;
	};
	const images = (product) => product.images.split('#####');
	const changeQuantity = (id) => {
		let quantity = form.getFieldValue('quantity');
		let typequantity = form.getFieldValue('typequantity');
		cart.changeQuantity(id, quantity, typequantity);
		console.log(form.getFieldValue('quantity'));
	};
	const deleteCart = (id) => {
		cart.deleteCart(id);
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
		getDataComment(props.product.id);
	}, []);
	let averageStar;
	const getAverageStar = () => {
		averageStar =
			comment && comment.length > 0
				? Math.ceil(comment.reduce((total, item) => total + item.rate, 0) / comment.length)
				: 5;
		// setAverageStar(averageStar);
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
	return (
		<tr>
			<td className="image">
				<div className="white-bg">
					<Link className="media-link" to={'/' + props.product.id}>
						<img style={{ width: 170 }} src={'img/products/' + images(props.product)[0]} alt="" />
					</Link>
				</div>
			</td>
			<td className="description">
				<div className="rating">{getAverageStar()}</div>
				<h6 className="fsz-12 gray-color"> Đánh giá : {averageStar}/5 </h6>
				<div className="divider-2" />
				<h3 className="product-title no-margin">
					{' '}
					<Link to={'/' + props.product.id}>
						<strong>{props.product.name}</strong>{' '}
						<span className="light-font">{props.product.idparent === 2 ? 'hữu cơ' : 'sạch'}</span>
					</Link>
				</h3>
				<h6>{props.product.idparent === 2 ? 'Rau' : 'Hoa quả'}</h6>
			</td>
			<td>
				<div className="price fontbold-2">
					{price(props.product) !== props.product.outputprice ? (
						[
							<strong className="fsz-20">{convertNumber(price(props.product))} ₫ </strong>,
							<del className="light-font">
								<b> {convertNumber(props.product.outputprice)} ₫ </b>
							</del>
						]
					) : (
						<strong className="fsz-20"> {convertNumber(props.product.outputprice)} ₫ </strong>
					)}
				</div>
			</td>
			<td>
				<Form
					form={form}
					initialValues={{
						quantity: props.product.quantity,
						typequantity: props.product.typequantity
					}}
				>
					<div className="prod-btns fontbold-2">
						<div className="quantity">
							<Form.Item name="quantity" style={{ margin: 0 }}>
								<InputNumber
									min={1}
									defaultValue={1}
									style={{ width: 100 }}
									onChange={() => changeQuantity(props.product.id)}
								/>
							</Form.Item>
						</div>
						<div className="sort-dropdown">
							<div className="search-selectpicker selectpicker-wrapper">
								<Form.Item name="typequantity" style={{ margin: 0 }}>
									<Select
										// defaultValue="1"
										style={{ width: 100 }}
										onChange={() => changeQuantity(props.product.id)}
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
					</div>
				</Form>
			</td>
			<td>
				<strong className="clr-txt fsz-20 fontbold-2">
					{convertNumber(props.product.totalMoneySale)} ₫
				</strong>{' '}
				<a onClick={() => deleteCart(props.product.id)} className="remove fa fa-close clr-txt" />
			</td>
		</tr>
	);
}

export default CartInCarts;
