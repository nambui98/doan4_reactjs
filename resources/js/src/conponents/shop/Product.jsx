import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import ProductsPreview from '../ProductsPreview';

import helperFunc from '../../helpers/helperFunc';
const { convertNumber } = helperFunc;
import { CartContext } from '../../helpers/contextAPI';

Product.propTypes = {};

function Product(props) {
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
	console.log(props);
	return (
		<div className="col-lg-4 col-sm-6">
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
					<img className="shape" alt="" src="img/icons/shap-small.png" />
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
						<a onClick={handleShow} className="fa fa-expand" />
					</div>
				</div>
				<div className="product-caption">
					<h3 className="product-title">
						<Link to={'/product/' + props.product.id}>
							<strong>{props.product.name}</strong>{' '}
							<span className="light-font">{props.product.idparent === 2 ? 'hữu cơ' : 'sạch'}</span>
						</Link>
					</h3>
					<div className="price">
						{price ? (
							[
								<strong className="clr-txt">{convertNumber(price)} ₫ </strong>,
								<del className="light-font">{convertNumber(props.product.outputprice)} ₫ </del>
							]
						) : (
							<strong className="clr-txt">{convertNumber(props.product.outputprice)} ₫ </strong>
						)}
					</div>
				</div>
			</div>
			<ProductsPreview
				show={show}
				product={props.product}
				priceSale={price}
				category={props.product.idparent}
				toggle={handleClose}
			/>
		</div>
	);
}

export default Product;
