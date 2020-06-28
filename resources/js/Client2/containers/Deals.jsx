import React, { useEffect, useState, useRef } from 'react';
import { Link, useHistory } from 'react-router-domv5';
import PropTypes from 'prop-types';
import axios from 'axios';
import OwlCarousel from 'react-owl-carousel';
import ProductPromotion from '../conponents/ProductPromotion';
import Countdown from 'react-countdown-now';
import helperFunc from '../helpers/helperFunc';

const { convertNumber } = helperFunc;

Deals.propTypes = {};

function Deals(props) {
	let history = useHistory();

	const [ data, setData ] = useState([]);
	const d = new Date();

	// let cou = ((2 - d.getHours() - 1) * 60 * 60 + (60 - d.getMinutes()) * 60 + (60 - d.getSeconds())) * 1000;
	let cou = ((24 - d.getHours() - 1) * 60 * 60 + (60 - d.getMinutes()) * 60 + (60 - d.getSeconds())) * 1000;
	// let cou = 5000;
	const [ timeCounDown, setTimeCounDown ] = useState(cou);
	const CountDownRef = useRef();

	const Completionist = () => <span>You are good to go!</span>;
	// Renderer callback with condition

	const renderer = ({ hours, minutes, seconds, completed }) => {
		// if (completed) {
		// 	// Render a complete state
		// 	return <Completionist />;
		// } else {
		// Render a countdown
		return (
			<div id="defaultCountdown" className="countdown is-countdown">
				<span className="countdown-row countdown-show4">
					<span className="countdown-section">
						<span className="countdown-amount">{hours}</span>
						<span className="countdown-period">Giờ</span>
					</span>
					<span className="countdown-section">
						<span className="countdown-amount">{minutes}</span>
						<span className="countdown-period">Phút</span>
					</span>
					<span className="countdown-section">
						<span className="countdown-amount">{seconds}</span>
						<span className="countdown-period">Giây</span>
					</span>
				</span>
			</div>
			// <span>
			// 	{hours}:{minutes}:{seconds}
			// </span>
		);
		// }
	};

	useEffect(() => {
		async function getData(page, status = 1) {
			return await axios
				.get('api/products/promotion?page=' + page, {
					headers: {
						'Content-Type': 'application/json'
					}
				})
				.then((response) => {
					console.log('pro', response);
					setData(response.data.data);
					// setCatsUser(response.data.data);
					// setCurrentPage(response.data.current_page);
					// setTotalPage(response.data.last_page);
				})
				.catch((error) => {
					console.log(error);
				});
		}
		getData();
	}, []);
	const onComplete = () => {
		console.log('vao');
		setTimeCounDown(cou);
		history.push('/');
		CountDownRef.current.start();
		// setTime(10000)
		// setStart(true);
		// window.location.reload();
	};
	return (
		<section className="deals sec-space light-bg">
			<img alt="" src="img/extra/sec-img-3.png" className="right-bg-img" />
			<img alt="" src="img/extra/sec-img-4.png" className="left-bg-img" />
			<div className="container">
				<div className="row">
					<div className="col-sm-5 text-right">
						<h4 className="sub-title"> NATURIX DEAL CỦA NGÀY </h4>
						<h2 className="section-title">
							{' '}
							<span className="light-font">sản phẩm tốt giảm </span> <strong>50% </strong>{' '}
							{/* <span className="light-font">off</span>{' '} */}
						</h2>
					</div>
					<div className="col-sm-2 text-center no-padding">
						<img alt="" src="img/extra/deal.png" />
					</div>
					<div className="col-sm-5">
						<p>
							Mỗi ngày sẽ có các sản phẩm rau hữu cơ và hoa quả sạch được giảm giá, bạn còn trông chờ gì
							nữa!
						</p>
					</div>
				</div>
				<div className="deal-count">
					<div className="countdown-wrapper">
						<Countdown
							className="countdown"
							onComplete={onComplete}
							ref={CountDownRef}
							renderer={renderer}
							date={Date.now() + timeCounDown}
						/>
						{/* <div id="defaultCountdown" className="countdown" /> */}
					</div>
				</div>
				{data.length > 0 ? (
					<OwlCarousel
						className="dots-2"
						items={6}
						dots={true}
						loop={false}
						autoplay={false}
						autoplayHoverPause={true}
						smartSpeed={100}
						nav={false}
						margin={30}
						responsive={{
							0: { items: 1 },
							1500: { items: 2 },
							1200: { items: 2 },
							992: { items: 2 }
						}}
					>
						{data.map((item, index) => {
							return <ProductPromotion key={index} product={item} />;
						})}
					</OwlCarousel>
				) : (
					''
				)}
			</div>
		</section>
	);
}

export default Deals;
