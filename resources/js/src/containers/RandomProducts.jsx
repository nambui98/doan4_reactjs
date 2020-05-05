import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import OwlCarousel from 'react-owl-carousel';
import axios from 'axios';
import Product from '../conponents/ProductRandom';

RandomProducts.propTypes = {};

function RandomProducts(props) {
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
		Promise.all([ getData('api/products/productNew'), getData('api/products/productCommon') ]).then(function(
			values
		) {
			setData(values);
		});
		// getData();
	}, []);
	console.log(data);
	let listDataNew = [];
	// const listDataNew=data&&data.length>0?
	if (data && data.length > 0) {
		for (let i = 0; i < Math.ceil(data[0].length / 3); i++) {
			let productnew = (
				<div className="item">
					{data[0].map((item, index) => {
						if (index < (i + 1) * 3 && index >= i * 3) {
							return <Product key={index} product={item} />;
						}
					})}
				</div>
			);
			listDataNew.push(productnew);
		}
	}
	let listDataCommon = [];
	// const listDataNew=data&&data.length>0?
	if (data && data.length > 0) {
		for (let i = 0; i < Math.ceil(data[1].length / 3); i++) {
			let productCommon = (
				<div className="item">
					{data[1].map((item, index) => {
						if (index < (i + 1) * 3 && index >= i * 3) {
							return <Product key={index} product={item} />;
						}
					})}
				</div>
			);
			listDataCommon.push(productCommon);
		}
	}
	return (
		<section className=" sec-space-bottom">
			<div className="pattern">
				<img alt="" src="img/icons/white-pattern.png" />
			</div>
			<div className="section-icon">
				<img alt="" src="img/icons/icon-1.png" />
				<div className="pt-15 icon">
					<i className="fa fa-star" />
					<i className="fa fa-star" />
					<i className="fa fa-star" />
					<span className="light-font"> Hương vị </span> <strong>sản phẩm tốt</strong>
					<i className="fa fa-star" />
					<i className="fa fa-star" />
					<i className="fa fa-star" />
				</div>
			</div>
			<div className="container">
				{/* Random Products */}
				<div className="row  justify-content-md-center">
					{/* <div
						style={{
							margin: '0 auto',
							width: '60%'
						}}
					> */}
					<div class="col-md-8 col-md-offset-2">
						<div className="col-md-6 pt-50">
							<h4 className="sub-title-sm"> Sản phẩm mới </h4>
							<h2 className="fsz-30 pb-15">
								{' '}
								<span className="light-font">Sản phẩm </span> <strong>mới về </strong>{' '}
							</h2>
							{data && data.length > 0 && data[0].length > 0 ? (
								<OwlCarousel
									className="nav-1"
									dots={false}
									loop={true}
									autoplay={true}
									autoplayHoverPause={true}
									smartSpeed={100}
									nav={true}
									margin={30}
									navText={[
										"<i class='fa fa-long-arrow-left'></i>",
										"<i class='fa fa-long-arrow-right'></i>"
									]}
									responsive={{
										0: { items: 1 },
										1024: { items: 1 },
										768: { items: 2 }
									}}
								>
									{listDataNew}
								</OwlCarousel>
							) : (
								''
							)}
						</div>
						<div className="col-md-6 pt-50">
							<h4 className="sub-title-sm">Giảm giá tốt </h4>
							<h2 className="fsz-30 pb-15">
								{' '}
								<span className="light-font">Sản phẩm </span> <strong>phổ biến </strong>{' '}
							</h2>
							{data && data.length > 0 && data[1].length > 0 ? (
								<OwlCarousel
									className="nav-1"
									dots={false}
									loop={true}
									autoplay={true}
									autoplayHoverPause={true}
									smartSpeed={100}
									nav={true}
									margin={30}
									navText={[
										"<i class='fa fa-long-arrow-left'></i>",
										"<i class='fa fa-long-arrow-right'></i>"
									]}
									responsive={{
										0: { items: 1 },
										1024: { items: 1 },
										768: { items: 2 }
									}}
								>
									{listDataCommon}
								</OwlCarousel>
							) : (
								''
							)}
						</div>
					</div>
					{/* </div> */}

					{/* <div className="col-md-4 pt-50">
						<h4 className="sub-title-sm"> Ngẫu nhiên </h4>
						<h2 className="fsz-30 pb-15">
							{' '}
							<span className="light-font" /> <strong>Ngẫu nhiên </strong>{' '}
						</h2>
						<OwlCarousel
							className="nav-1"
							dots={false}
							loop={true}
							autoplay={true}
							autoplayHoverPause={true}
							smartSpeed={100}
							nav={true}
							margin={30}
							navText={[
								"<i class='fa fa-long-arrow-left'></i>",
								"<i class='fa fa-long-arrow-right'></i>"
							]}
							responsive={{
								0: { items: 1 },
								1024: { items: 1 },
								768: { items: 2 }
							}}
						>
							<div className="item">
								<div className="random-prod">
									<div className="random-img">
										<img alt="" src="img/extra/random-7.png" />
									</div>
									<div className="random-text">
										<h3 className="title-1 no-margin">
											{' '}
											<Link to="#">
												{' '}
												<span className="light-font">organic </span> <strong>grapes </strong>{' '}
											</Link>{' '}
										</h3>
										<span className="divider" />
										<div className="price">
											<strong className="clr-txt">$50.00 </strong>
										</div>
									</div>
								</div>
								<div className="random-prod">
									<div className="random-img">
										<img alt="" src="img/extra/random-1.png" />
									</div>
									<div className="random-text">
										<h3 className="title-1 no-margin">
											{' '}
											<Link to="#">
												{' '}
												<span className="light-font">organic </span>{' '}
												<strong>blackberry </strong>{' '}
											</Link>{' '}
										</h3>
										<span className="divider" />
										<div className="price">
											<strong className="clr-txt">$50.00 </strong>
										</div>
									</div>
								</div>
								<div className="random-prod">
									<div className="random-img">
										<img alt="" src="img/extra/random-8.png" />
									</div>
									<div className="random-text">
										<h3 className="title-1 no-margin">
											{' '}
											<Link to="#">
												{' '}
												<span className="light-font">organic </span> <strong>beans </strong>{' '}
											</Link>{' '}
										</h3>
										<span className="divider" />
										<div className="price">
											<strong className="clr-txt">$50.00 </strong>
										</div>
									</div>
								</div>
							</div>
							<div className="item">
								<div className="random-prod">
									<div className="random-img">
										<img alt="" src="img/extra/random-1.png" />
									</div>
									<div className="random-text">
										<h3 className="title-1 no-margin">
											{' '}
											<Link to="#">
												{' '}
												<span className="light-font">organic </span>{' '}
												<strong>blackberry </strong>{' '}
											</Link>{' '}
										</h3>
										<span className="divider" />
										<div className="price">
											<strong className="clr-txt">$50.00 </strong>{' '}
											<del className="light-font">$65.00 </del>
										</div>
									</div>
								</div>
								<div className="random-prod">
									<div className="random-img">
										<img alt="" src="img/extra/random-2.png" />
									</div>
									<div className="random-text">
										<h3 className="title-1 no-margin">
											{' '}
											<Link to="#">
												{' '}
												<span className="light-font">organic </span> <strong>peach </strong>{' '}
											</Link>{' '}
										</h3>
										<span className="divider" />
										<div className="price">
											<strong className="clr-txt">$50.00 </strong>
										</div>
									</div>
								</div>
								<div className="random-prod">
									<div className="random-img">
										<img alt="" src="img/extra/random-3.png" />
									</div>
									<div className="random-text">
										<h3 className="title-1 no-margin">
											{' '}
											<Link to="#">
												{' '}
												<span className="light-font">organic </span> <strong>redberry </strong>{' '}
											</Link>{' '}
										</h3>
										<span className="divider" />
										<div className="price">
											<strong className="clr-txt">$50.00 </strong>
										</div>
									</div>
								</div>
							</div>
						</OwlCarousel>
					</div>
				 */}
				</div>
				{/* Banner */}
				<div className="row">
					<div className="col-md-6">
						<div className="prod-banner green-banner">
							<h4 className="title">
								{' '}
								<span className="light-font"> TƯƠI TỚI TỪ TRANG TRẠNG : </span>{' '}
								<strong>Ô liu xanh </strong>{' '}
							</h4>
							<div className="banner-box">
								<div className="banner-content">
									<h3 className="title-sec">Rau</h3>
									<h2 className="section-title">
										{' '}
										<span className="light-font">Xanh </span> <strong>OLIVE </strong>{' '}
									</h2>
									<h4 className="sub-title"> 35% VÀO THỨ 4 </h4>
									<Link to="#" className="btn">
										{' '}
										<span> cửa hàng </span> <i className="fa fa-long-arrow-right" />{' '}
									</Link>
								</div>
							</div>
							<img src="img/extra/banner-1.png" alt="" className="top-img" />
							<img src="img/extra/banner-2.png" alt="" className="bottom-img" />
						</div>
					</div>
					<div className="col-md-6">
						<div className="prod-banner orange-banner">
							<h4 className="title">
								{' '}
								<span className="light-font"> MÙA HÈ VỚI </span> <strong>HOA QUẢ </strong>{' '}
							</h4>
							<div className="banner-box">
								<div className="banner-content">
									<h3 className="title-sec">Hoa quả</h3>
									<h2 className="section-title">
										{' '}
										<span className="light-font">Tất cả</span> <strong>Mùa hè </strong>{' '}
									</h2>
									<h4 className="sub-title"> 35% VÀO THỨ 4 </h4>
									<Link to="#" className="btn">
										{' '}
										<span> cửa hàng </span> <i className="fa fa-long-arrow-right" />{' '}
									</Link>
								</div>
							</div>
							<img src="img/extra/banner-3.png" alt="" className="bottom-img" />
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default RandomProducts;
