import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { InputNumber, Select, Form } from 'antd';
import Breadcrumb from '../conponents/Breadcrumb';
import CartInCarts from '../conponents/CartInCarts';
import { CartContext } from '../helpers/contextAPI';
import helperFunc from '../helpers/helperFunc';
const { convertNumber } = helperFunc;
const { Option } = Select;

Cart.propTypes = {};

function Cart(props) {
	const [ form ] = Form.useForm();
	const cart = useContext(CartContext);
	let price = (product) => {
		return product.type === 1 && product.numbersale
			? product.outputprice - product.outputprice * product.numbersale / 100
			: product.type === 2 && product.numbersale ? product.outputprice - product.numbersale : product.outputprice;
	};
	const images = (product) => product.images.split('#####');
	const changeQuantity = (index) => {
		let quantity = form.getFieldValue('quantity');
		let typequantity = form.getFieldValue('typequantity');
		cart.changeQuantity(index, quantity, typequantity);
		console.log(form.getFieldValue('quantity'));
	};
	return (
		<div>
			<Breadcrumb nameLocation="Giỏ hàng" />,
			{/*Breadcrumb Section End*/}
			{/* Cart Starts*/}
			<section className="shop-wrap sec-space">
				<div className="container">
					{/* Shopping Cart Starts */}
					<div className="cart-table">
						<form className="cart-form">
							<table className="product-table">
								<thead className>
									<tr>
										<th>Chi tiết</th>
										<th />
										<th>Giá</th>
										<th>Số lượng</th>
										<th>Tổng tiền</th>
									</tr>
								</thead>
								<tbody>
									<CartContext.Consumer>
										{({ cartItems, deleteCart, cartsTotalMoney }) => {
											if (cartItems && cartItems.length > 0) {
												return cartItems.map((cart, index) => {
													return <CartInCarts key={index} product={cart} />;
												});
											} else {
												return [
													<tr>
														<td colspan="5">
															<img src="ico/empty-cart.png" style={{ width: 50 }} />;
															<p>Giỏ hàng trống !</p>
														</td>
													</tr>
												];
											}
										}}
									</CartContext.Consumer>
								</tbody>
							</table>
							<div className="continue-shopping">
								<div className="left">
									<h6>
										MÃ VOUCHER.
										<span className="clr-txt-2"> ÁP DỤNG NGAY </span>{' '}
									</h6>
									<div className="coupan-form">
										<input className="form-control" />
										<button className="btn" type="submit">
											{' '}
											ÁP DỤNG{' '}
										</button>
									</div>
								</div>
								<div className="right">
									<CartContext.Consumer>
										{({ cartsTotalMoney }) => {
											return (
												<strong className="fsz-20">
													Tổng :
													<span className="clr-txt">
														{' '}
														{convertNumber(cartsTotalMoney)} ₫{' '}
													</span>{' '}
												</strong>
											);
										}}
									</CartContext.Consumer>
								</div>
							</div>
							<div className="shp-btn col-sm-12 text-center">
								<Link to="/" className="theme-btn-2 btn">
									{' '}
									<b> Tiếp tục mua hàng </b>{' '}
								</Link>
								<CartContext.Consumer>
									{({ cartItems }) => {
										if (cartItems && cartItems.length > 0) {
											return (
												<Link to="/checkout" className="theme-btn-3 btn">
													{' '}
													<b> Tiến hành thanh toán </b>{' '}
												</Link>
											);
										}
									}}
								</CartContext.Consumer>
							</div>
						</form>
					</div>
					{/* / Shopping Cart Ends */}
				</div>
			</section>
		</div>
	);
}

export default Cart;
