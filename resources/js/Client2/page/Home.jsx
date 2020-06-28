import React, { useEffect } from 'react';
import Loading from '../conponents/Loading';
import Header from '../containers/Header';
import Slider from '../conponents/Slide';
import Organic from '../containers/Organic';
import OrganicFarmfood from '../conponents/OrganicFarmfood';
import OurProducts from '../conponents/OurProducts';
import NaturixGoods from '../conponents/NaturixGoods';
import NewsHighlights from '../conponents/NewsHighlights';
import Deals from '../containers/Deals';
import RandomProducts from '../containers/RandomProducts';
import Footer from '../conponents/Footer';
import SubscribeNewsletter from '../conponents/SubscribeNewsletter';
import { Link } from 'react-router-domv5';
import { CartConsumer } from '../helpers/contextAPI';
import ModalLogin from '../conponents/ModalLogin';

function Home(props) {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	return (
		// <div className="App">
		// 	{/* <Loading /> */}
		[
			<Slider />,
			<Organic />,
			<OurProducts />,
			<Deals />,
			<RandomProducts />,
			<NewsHighlights />,
			<div id="to-top-mb" className="to-top mb">
				{' '}
				<i className="fa fa-arrow-circle-o-up" />
			</div>
		]

		// </div>
	);
}

export default Home;
