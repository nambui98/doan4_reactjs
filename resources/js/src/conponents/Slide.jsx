import { Link } from 'react-router-dom';
import React from 'react';
import PropTypes from 'prop-types';
import OwlCarousel from 'react-owl-carousel';

Slide.propTypes = {};

function Slide(props) {
	return (
		<section className="main-slide">
			<OwlCarousel
				className="nav-1 owl-theme owl-loaded"
				id="naturix-slider"
				animateIn="fadeInDown"
				animateOut="slideOutUp"
				dots={false}
				loop={true}
				autoplay={true}
				smartSpeed={100}
				nav={true}
				margin={30}
				items={1}
				navText={[
					'<div class="owl-prev" style=""><i class="fa fa-long-arrow-left"></i></div>',
					'<div class="owl-next" style=""><i class="fa fa-long-arrow-right"></i></div>'
				]}
				responsive={{
					0: { items: 1 },
					1024: { items: 1 }
				}}
			>
				<div className="item">
					<img alt=".." src="img/slider/slide-1.jpg" />
					<div className="tbl-wrp slide-1">
						<div className="text-middle">
							<div className="tbl-cell">
								<div className="slide-caption container text-center">
									<div className="slide-title">
										<img src="img/icons/slide-txt-1.png" alt="" />
										<span>100% Bảo Hành</span>
									</div>
									<div className="slide-title2 pb-50">
										<h2 className="section-title">
											{' '}
											<span className="light-font">Sống </span> <strong>hữu cơ </strong>{' '}
											<span className="light-font">để sống </span> <strong>khoẻ mạnh </strong>{' '}
										</h2>
										<h4 className="sub-title"> TRÁI CÂY VÀ RAU HỮU CƠ CHO BẠN </h4>
									</div>
									<div className="slide">
										<Link to="/shop" className="slide-btn">
											{' '}
											cửa hàng
										</Link>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="item">
					<img alt=".." src="img/slider/sliced-fruits-on-tray-1132047.jpg" />
					<div className="tbl-wrp slide-1">
						<div className="text-middle">
							<div className="tbl-cell">
								<div className="slide-caption container text-center">
									<div className="slide-title">
										<img src="img/icons/slide-txt-1.png" alt="" />
										<span>100% Bảo Hành</span>
									</div>
									<div className="slide-title2 pb-50">
										<h2 className="section-title">
											{' '}
											<span className="light-font">Sống </span> <strong>hữu cơ </strong>{' '}
											<span className="light-font">để sống </span> <strong>khoẻ mạnh </strong>{' '}
										</h2>
										<h4 className="sub-title"> TRÁI CÂY VÀ RAU HỮU CƠ CHO BẠN </h4>
									</div>
									<div className="slide">
										<Link to="/shop" className="slide-btn">
											{' '}
											cửa hàng
										</Link>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</OwlCarousel>
		</section>

		// <section className="main-slide">
		// 	<div id="naturix-slider" className="owl-carousel nav-1">
		// 		{/* <OwlCarousel
		// 		//className="nav-1 owl-theme owl-loaded"
		// 		id="naturix-slider"
		// 		animateIn="fadeInDown"
		// 		animateOut="slideOutUp"
		// 		dots={false}
		// 		loop={true}
		// 		autoplay={true}
		// 		smartSpeed={100}
		// 		nav={true}
		// 		margin={30}
		// 		items={1}
		// 		navText={[ "<i class='fa fa-long-arrow-left'></i>", "<i class='fa fa-long-arrow-right'></i>" ]}
		// 		responsive={{
		// 			0: { items: 1 },
		// 			1024: { items: 1 }
		// 		}}
		// 	> */}
		// 		<div className="item">
		// 			<img alt=".." src="img/slider/slide-1.jpg" />
		// 			<div className="tbl-wrp slide-1">
		// 				<div className="text-middle">
		// 					<div className="tbl-cell">
		// 						<div className="slide-caption container text-center">
		// 							<div className="slide-title">
		// 								<img src="img/icons/slide-txt-1.png" alt="" />
		// 								<span>100% Guarantee</span>
		// 							</div>
		// 							<div className="slide-title2 pb-50">
		// 								<h2 className="section-title">
		// 									<span className="light-font">Live </span> <strong>organic </strong>
		// 									<span className="light-font">for live </span> <strong>healthy </strong>
		// 								</h2>
		// 								<h4 className="sub-title">
		// 									ORGANIC FRUITS, VEGETABLES, AND LOT MORE TO YOUR DOOR
		// 								</h4>
		// 							</div>
		// 							<div className="slide">
		// 								<Link href="#" className="slide-btn">
		// 									Shop Now
		// 								</Link>
		// 							</div>
		// 						</div>
		// 					</div>
		// 				</div>
		// 			</div>
		// 		</div>
		// 		<div className="item">
		// 			<img alt=".." src="img/slider/slide-1.jpg.jpeg" />
		// 			<div className="tbl-wrp slide-1">
		// 				<div className="text-middle">
		// 					<div className="tbl-cell">
		// 						<div className="slide-caption container text-center">
		// 							<div className="slide-title">
		// 								<img src="img/icons/slide-txt-1.png" alt="" />
		// 								<span>100% Guarantee</span>
		// 							</div>
		// 							<div className="slide-title2 pb-50">
		// 								<h2 className="section-title">
		// 									<span className="light-font">Live </span> <strong>organic </strong>{' '}
		// 									<span className="light-font">for live </span> <strong>healthy </strong>{' '}
		// 								</h2>
		// 								<h4 className="sub-title">
		// 									ORGANIC FRUITS, VEGETABLES, AND LOT MORE TO YOUR DOOR
		// 								</h4>
		// 							</div>
		// 							<div className="slide">
		// 								<Link href="#" className="slide-btn">
		// 									Shop Now
		// 								</Link>
		// 							</div>
		// 						</div>
		// 					</div>
		// 				</div>
		// 			</div>
		// 		</div>
		// 		{/* </OwlCarousel> */}
		// 	</div>
		// </section>
	);
}

export default Slide;
