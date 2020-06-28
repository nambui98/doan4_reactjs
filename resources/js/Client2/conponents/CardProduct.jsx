import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-domv5';
import ProductsPreview from '../conponents/ProductsPreview';
import ModalLogin from '../conponents/ModalLogin';
import helperFunc from '../helpers/helperFunc';
const { convertNumber } = helperFunc;
import { CartContext } from '../helpers/contextAPI';
CardProduct.propTypes = {};

function CardProduct(props) {
	const [ show, setShow ] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => {
		setShow(true);
	};
	const { product } = props;
	const image = props.product.images.split('#####');
	const price =
		product.type === 1
			? product.outputprice - product.outputprice * product.numbersale / 100
			: product.type === 2 ? product.outputprice - product.numbersale : 0;
	// console.log(cart);
	return [
		<div className="item">
			<div className="product-box">
				<div className="product-media">
					<img className="prod-img" alt="" src={'img/products/' + image[0]} />
					{props.product.type ? (
						[
							<img className="shape" alt="" src="img/icons/shap-small.png" />,
							<span className="prod-tag tag-1">new</span>,
							<span className="prod-tag tag-2">sale</span>
						]
					) : (
						''
					)}
					<div className="prod-icons">
						<CartContext.Consumer>
							{({ addToCart }) => {
								return (
									<a
										onClick={() => addToCart(props.product, 1, 1)}
										className="fa fa-shopping-basket"
									/>
								);
							}}
						</CartContext.Consumer>
						<a // to=""
							className="fa fa-expand"
							onClick={handleShow}
						/>
					</div>
				</div>
				<div className="product-caption">
					<h3 className="product-title">
						<Link to={'/product/' + props.product.id}>
							<strong>{props.product.name}</strong>{' '}
							<span className="light-font">{props.category.id === 2 ? 'hữu cơ' : 'sạch'}</span>
						</Link>
					</h3>
					<div className="price">
						<strong className="clr-txt">
							{price ? convertNumber(price) : convertNumber(product.outputprice)} ₫{' '}
						</strong>
					</div>
				</div>
			</div>
			<ProductsPreview
				show={show}
				product={props.product}
				priceSale={price}
				category={props.category}
				toggle={handleClose}
			/>
		</div>
	];
}

export default CardProduct;
