import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ProductsPreview from './ProductsPreview';
import { Link } from 'react-router-dom';
import helperFunc from '../helpers/helperFunc';
import { CartContext } from '../helpers/contextAPI';

const { convertNumber } = helperFunc;
ProductPromotion.propTypes = {};

function ProductPromotion(props) {
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
	return (
		<div className="item">
			<div className="deal-item">
				<div className="deal-icons">
					<Link to="#" className="fa fa-heart" />
					<CartContext.Consumer>
						{({ addToCart }) => {
							return (
								<a onClick={() => addToCart(props.product, 1, 1)} className="fa fa-shopping-basket" />
							);
						}}
					</CartContext.Consumer>
					<a onClick={handleShow} data-toggle="modal" className="fa fa-expand" />
				</div>
				<div className="deal-content">
					<div className="text-right">
						<span className="prod-tag tag-1">new</span> <span className="prod-tag tag-2">sale</span>
					</div>
					<div className="deal-text">
						<h4 className="sub-title"> ORGANIC FRUITS </h4>
						<h2 className="fsz-30 pb-15">
							{' '}
							<Link to="#">
								{' '}
								<strong>{props.product.name} </strong>{' '}
								<span className="light-font">
									{props.product.idparent === 2 ? 'hữu cơ' : 'sạch'}{' '}
								</span>{' '}
							</Link>{' '}
						</h2>
						<p>{props.product.content}</p>
						<div className="price pt-15">
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
					<div className="deal-img">
						{' '}
						<img alt="" src={'img/products/' + image[0]} style={{ width: 216 }} />{' '}
						{/* <img alt="" src={'img/extra/deal-1.png'} style={{width:216}} />{' '} */}
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

export default ProductPromotion;
