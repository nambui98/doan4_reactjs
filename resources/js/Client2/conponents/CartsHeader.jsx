import React, { useState, useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-domv5';

import { CartContext } from '../helpers/contextAPI';
import helperFunc from '../helpers/helperFunc';
const { convertNumber } = helperFunc;

CartsHeader.propTypes = {};

function CartsHeader(props) {
	let price = (product) => {
		return product.type === 1 && product.numbersale
			? product.outputprice - product.outputprice * product.numbersale / 100
			: product.type === 2 && product.numbersale ? product.outputprice - product.numbersale : product.outputprice;
	};
	const images = (product) => product.images.split('#####');
	return (
		<div className="cart-hover">
			<Link to="/cart">
				{' '}
				<img alt="" src="img/icons/cart-icon.png" />{' '}
			</Link>
			<CartContext.Consumer>
				{({ cartItems, cartsTotalMoney }) => {
					return [
						<span className="cnt crl-bg">{cartItems ? cartItems.length : 0}</span>
						// <span className="price">{convertNumber(cartsTotalMoney)} ₫</span>
					];
				}}
			</CartContext.Consumer>

			<ul className="pop-up-box cart-popup">
				<CartContext.Consumer>
					{({ cartItems, deleteCart, cartsTotalMoney }) => {
						if (cartItems && cartItems.length > 0) {
							return [
								cartItems.map((cart, index) => {
									return [
										<li
											key={index}
											className="cart-list"
											style={{ display: 'flex', alignItems: 'center' }}
										>
											<div className="cart-img">
												{' '}
												<img src={'img/products/' + images(cart)[0]} alt="" />{' '}
											</div>
											<div className="cart-title">
												<div className="fsz-16">
													<Link to="#">
														{' '}
														<strong>{cart.name}</strong>{' '}
														<span className="light-font">
															{cart.idparent === 2 ? 'hữu cơ' : 'sạch'}
														</span>
													</Link>
													<h6 className="sub-title-1">
														{cart.idparent === 2 ? 'Rau' : 'Quả'}
													</h6>
												</div>
												<div className="price">
													{price(cart) !== cart.outputprice ? (
														[
															<strong className="clr-txt">
																{convertNumber(price(cart))} ₫{' '}
															</strong>,
															<del className="light-font">
																{convertNumber(cart.outputprice)} ₫{' '}
															</del>
														]
													) : (
														<strong className="clr-txt fsz-20">
															{convertNumber(cart.outputprice)} ₫{' '}
														</strong>
													)}
													{/* <strong className="clr-txt">{price ? convertNumber(price) : convertNumber(product.outputprice)} ₫ </strong>{' '}
                                                <del className="light-font">{price ? convertNumber(price) : convertNumber(product.outputprice)} ₫ </del> */}
												</div>
											</div>
											<div style={{ width: '10%' }}>x{cart.quantity}</div>
											<div className="close-icon" onClick={() => deleteCart(cart.id)}>
												{' '}
												<i className="fa fa-close clr-txt" />{' '}
											</div>
										</li>
									];
								}),
								<li className="cart-list sub-total">
									<div className="pull-left">
										<strong>Tổng tiền</strong>
									</div>
									<div className="pull-right">
										<strong className="clr-txt">{convertNumber(cartsTotalMoney)} ₫</strong>
									</div>
								</li>,
								<li className="cart-list buttons">
									<div className="pull-left">
										<Link to="/cart" className="theme-btn-sm-2">
											Giỏ hàng
										</Link>
									</div>
									<div className="pull-right">
										<Link to="/checkout" className="theme-btn-sm-3">
											Thanh toán
										</Link>
									</div>
								</li>
							];
						} else {
							return [
								<li
									className="cart-list sub-total"
									style={{
										display: 'flex',
										alignItems: 'center',
										flexDirection: 'column'
									}}
								>
									<img src="ico/empty-cart.png" style={{ width: 50 }} />;
									<p>Giỏ hàng trống !</p>
								</li>
							];
						}
					}}
				</CartContext.Consumer>

				{/* <li className="cart-list">
								<div className="cart-img">
									{' '}
									<img src="img/extra/cart-sm-2.jpg" alt="" />{' '}
								</div>
								<div className="cart-title">
									<div className="fsz-16">
										<Link to="#">
											{' '}
											<span className="light-font"> organic </span> <strong>pepper</strong>
										</Link>
										<h6 className="sub-title-1">VEGETABLES</h6>
									</div>
									<div className="price">
										<strong className="clr-txt">$50.00 </strong>{' '}
										<del className="light-font">$65.00 </del>
									</div>
								</div>
								<div className="close-icon">
									{' '}
									<i className="fa fa-close clr-txt" />{' '}
								</div>
							</li>
							<li className="cart-list">
								<div className="cart-img">
									{' '}
									<img src="img/extra/cart-sm-3.jpg" alt="" />{' '}
								</div>
								<div className="cart-title">
									<div className="fsz-16">
										<Link to="#">
											{' '}
											<span className="light-font"> organic </span> <strong>onion</strong>
										</Link>
										<h6 className="sub-title-1">VAGETABLES</h6>
									</div>
									<div className="price">
										<strong className="clr-txt">$50.00 </strong>{' '}
										<del className="light-font">$65.00 </del>
									</div>
								</div>
								<div className="close-icon">
									{' '}
									<i className="fa fa-close clr-txt" />{' '}
								</div>
							</li>
							 */}
			</ul>
		</div>
	);
}

export default CartsHeader;
