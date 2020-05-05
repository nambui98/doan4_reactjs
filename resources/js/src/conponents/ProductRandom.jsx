import React from 'react';
import { Link } from 'react-router-dom';
import helperFunc from '../helpers/helperFunc';
const { convertNumber } = helperFunc;
import PropTypes from 'prop-types';

ProductRandom.propTypes = {};

function ProductRandom(props) {
	const { product } = props;
	const image = props.product.images.split('#####');
	const price =
		product.type === 1
			? product.outputprice - product.outputprice * product.numbersale / 100
			: product.type === 2 ? product.outputprice - product.numbersale : 0;
	return (
		<div className="random-prod">
			<div className="random-img">
				<img alt="" src={'img/products/' + image[0]} />
			</div>
			<div className="random-text">
				<h3 className="title-1 no-margin">
					{' '}
					<Link to="#">
						<strong>{props.product.name}</strong>{' '}
						<span className="light-font">{props.product.idparent === 2 ? 'hữu cơ' : 'sạch'}</span>
					</Link>
				</h3>
				<span className="divider" />
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
	);
}

export default ProductRandom;
