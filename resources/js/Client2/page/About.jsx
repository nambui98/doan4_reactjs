import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-domv5';
import Breadcrumb from '../conponents/Breadcrumb';
import OurProducts from '../conponents/OurProducts';

About.propTypes = {};

function About(props) {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	return [
		<Breadcrumb nameLocation="Về chúng tôi" />,
		<section className="organic-farm-2 sec-space-bottom">
			<img alt="" src="img/extra/sec-img-7.png" className="left-bottom-img" />
			<img alt="" src="img/extra/sec-img-8.png" className="right-top-img" />
			<div className="pattern">
				<img alt="" src="img/icons/white-pattern.png" />
			</div>
			<div className="section-icon">
				<img alt="" src="img/icons/icon-1.png" />
				<div className="ptb-15 icon">
					<i className="fa fa-star" />
					<i className="fa fa-star" />
					<i className="fa fa-star" />
					<span className="light-font"> Một hương vị </span> <strong>của thức ăn thực sự</strong>
					<i className="fa fa-star" />
					<i className="fa fa-star" />
					<i className="fa fa-star" />
				</div>
			</div>
			<div className="container rel-div">
				<div className="row">
					<div className="col-sm-6 text-right fsz-16 pt-15 xs-text">
						<p>
							Chúng tôi đem đến những sản phẩm chất lượng và đảm bảo sức khoẻ nhất, sống hữu cơ là châm
							ngôn của chúng tôi
						</p>
					</div>
					<div className="col-sm-6 text-left xs-text">
						<h2 className="section-title">
							{' '}
							<span className="light-font">Chúng tôi là </span>{' '}
							<strong>
								organic farmfood <img src="img/icons/logo-icon.png" alt="" />{' '}
							</strong>{' '}
						</h2>
						<h4 className="sub-title"> VỀ NATURIX FARMFOOD </h4>
					</div>
				</div>
				<div className="row">
					<div className="col-md-3 col-sm-6 text-center">
						<div className="feature-wrap">
							<img src="img/extra/feature-1.png" alt="" />
							<h3 className="title-1 ptb-15">
								{' '}
								<span className="light-font">tươi từ </span> <strong>nông trại naturix</strong>{' '}
							</h3>
							<p>Được sản xuất theo dây chuyền hiện đại của châu âu.</p>
						</div>
					</div>
					<div className="col-md-3 col-sm-6 text-center">
						<div className="feature-wrap">
							<img src="img/extra/feature-2.png" alt="" />
							<h3 className="title-1 ptb-15">
								{' '}
								<span className="light-font"> 100%</span> <strong> hữu cơ</strong>{' '}
							</h3>
							<p>Được chăm bón từ các nguyên liệu hữu cơ.</p>
						</div>
					</div>
					<div className="col-md-3 col-sm-6 text-center">
						<div className="feature-wrap">
							<img src="img/extra/feature-3.png" alt="" />
							<h3 className="title-1 ptb-15">
								{' '}
								<span className="light-font">Chất lượng </span> <strong> cao</strong>{' '}
							</h3>
							<p>Chất lượng cao, mang nhiều chất dinh dưỡng.</p>
						</div>
					</div>
					<div className="col-md-3 col-sm-6 text-center">
						<div className="feature-wrap">
							<img src="img/extra/feature-4.png" alt="" />
							<h3 className="title-1 ptb-15">
								{' '}
								<span className="light-font">100% </span> <strong>tự nhiên</strong>{' '}
							</h3>
							<p>Được trồng trong trang trại hữu cơ, môi trường tự nhiên.</p>
						</div>
					</div>
				</div>
				<div className="rel-div feature-img">
					<img src="img/extra/feature.png" alt="" />
				</div>
			</div>
		</section>,
		<section className="short-about sec-space light-bg">
			<img alt="" src="img/extra/sec-img-1.png" className="left-top-img" />
			<img alt="" src="img/extra/sec-img-3.png" className="center-bg-img" />
			<img alt="" src="img/extra/sec-img-4.png" className="left-bottom-img" />
			<div className="container rel-div">
				<div className="title-wrap pt-15">
					<h4 className="fsz-20">
						{' '}
						<strong>naturix</strong> <span className="light-font"> organic farmfood từ 2010 </span>{' '}
					</h4>
					<h2 className="fsz-50 over-txt-title">
						<span className="light-font">
							{' '}
							CHÚNG TÔI <span className="over-txt light-bg">ĐẢM BẢO 100% HỮU CƠ</span>{' '}
						</span>
						<strong>KHOẺ MẠNH</strong>
					</h2>
					<p>
						Chúng tôi đi đầu trong cung cấp và sản xuất các sản phẩm hữu cơ, được ưa chuộng bởi sự tín
						nghiệm và tỉ mỉ trong mọi công đoạn để đem đến khách hàng
					</p>
				</div>
				<div className="about-wrap">
					<img className="logo-img" alt="" src="img/extra/sign-1.png" />
					<h4>
						{' '}
						<strong>Nam</strong> <span className="light-font"> Bùi </span>{' '}
					</h4>
					<h5 className="clr-txt sub-title-sm">NATURIX CHỦ</h5>
					<img className="logo-img" alt="" src="img/extra/about-1.png" />
					<h2 className="font-3 fsz-35">Sống hữu cơ sống khoẻ mạnh</h2>
					<div className="icon">
						<i className="fa fa-star" />
						<i className="fa fa-star" />
						<i className="fa fa-star" />
						<span className="light-font"> một hương vị </span> <strong>của thức ăn thực sự</strong>
						<i className="fa fa-star" />
						<i className="fa fa-star" />
						<i className="fa fa-star" />
					</div>
				</div>
			</div>
		</section>,
		<OurProducts />,
		<div id="to-top-mb" className="to-top mb">
			<i className="fa fa-arrow-circle-o-up" />
		</div>
	];
}

export default About;
