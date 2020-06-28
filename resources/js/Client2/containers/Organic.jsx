import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes, { element } from 'prop-types';
import { Spin } from 'antd-v4';
import OwlCarousel from 'react-owl-carousel';
import ProductsPreview from '../conponents/ProductsPreview';
import CartProduct from '../conponents/CardProduct';
import axios from 'axios';

Organic.propTypes = {};

function Organic(props) {
	const [ data, setData ] = useState([]);
	const [ product, setProduct ] = useState({});
	const [ show, setShow ] = useState(false);
	const [ category, setCategory ] = useState(1);
	const handleClose = () => setShow(false);
	const handleShow = (item) => {
		setShow(true);
		setProduct(item);
	};
	useEffect(() => {
		function getData(requestUrl) {
			// const requestUrl = 'api/categories';
			return axios
				.get(requestUrl)
				.then((response) => {
					return response.data;
				})
				.catch((error) => {
					console.log(error);
				});
		}
		Promise.all([ getData('api/categories'), getData('api/products') ]).then(function(values) {
			setData(values);
		});
		// getData();
	}, []);
	const changeAllOganic = (id) => {
		setCategory(id);
	};
	console.log(data);
	return [
		<section className="organic-all sec-space-bottom">
			<div className="pattern">
				<img alt="" src="img/icons/white-pattern.png" />
			</div>
			<div className="section-icon">
				<img alt="" src="img/icons/icon-1.png" />
			</div>
			<div className="container">
				<div className="organic-wrap">
					<img className="logo-img" alt="" src="img/logo/logo-1.png" />
					<div className="tabs-box">
						<ul className="theme-tabs">
							{data.length > 0 ? (
								data[0].data.map((item, index) => {
									return item.idparent ? (
										''
									) : (
										<li key={index} className={item.id === category ? 'active' : ''}>
											<a
												href={'#product-tab-' + item.id}
												// onClick={() => changeAllOganic(item.id)}
												data-toggle="tab"
											>
												{' '}
												<strong>{item.name} </strong>{' '}
												<span className="light-font">hữu cơ </span>{' '}
											</a>
										</li>
									);
								})
							) : (
								''
							)}
						</ul>
					</div>
				</div>
			</div>

			<div className="container-fluid">
				<div className="col-md-12">
					<div className="tab-content organic-content row">
						{data.length > 0 ? (
							data[0].data.map((element, index) => {
								return element.idparent ? (
									''
								) : (
									<div
										id={'product-tab-' + element.id}
										key={index}
										className={element.id === 1 ? 'tab-pane fade in active' : ' tab-pane fade'}
									>
										{/* {data.length > 0 ? ( */}
										<OwlCarousel
											className="product-slider-1"
											items={6}
											dots={true}
											loop={false}
											autoplay={false}
											autoplayHoverPause={true}
											smartSpeed={100}
											margin={0}
											responsive={{
												0: { items: 1 },
												1500: { items: 6 },
												1200: { items: 5 },
												992: { items: 3 },
												600: { items: 2 }
											}}
										>
											{/* {dataOwl} */}
											{data[1].data.map((item, indexItem) => {
												if (item.idparent === element.id)
													return (
														<CartProduct
															key={indexItem}
															category={element}
															product={item}
														/>
													);
											})}
										</OwlCarousel>
										{/* ) : (
                                            ''
                                        )} */}
									</div>
								);
							})
						) : (
							<div
								style={{
									display: 'flex',
									justifyContent: 'center'
								}}
							>
								<Spin />
							</div>
						)}
					</div>
				</div>
			</div>
		</section>
	];
}

export default Organic;
