import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

OurProducts.propTypes = {};

function OurProducts(props) {
	return (
		<section className="organic-product sec-space">
			<div className="container">
				<div className="row sec-space-top">
					<div className="col-lg-6 col-sm-12">
						<div className="row">
							<div className="col-sm-6">
								<div className="organic-prod">
									<img src="img/extra/organic-1.png" alt="" />
									<span className="divider" />
									<h3 className="title-1">
										{' '}
										<Link to="#">
											{' '}
											<strong>Hoa quả </strong> <span className="light-font"> tươi</span>{' '}
										</Link>{' '}
									</h3>
									<Link className="clr-txt font-2" to="#">
										{' '}
										<i> 52 items </i>{' '}
									</Link>
								</div>
							</div>
							<div className="col-sm-6">
								<div className="organic-prod">
									<img src="img/extra/organic-2.png" alt="" />
									<span className="divider" />
									<h3 className="title-1">
										{' '}
										<Link to="#">
											{' '}
											<strong>Rau </strong> <span className="light-font"> hữu cơ</span>{' '}
										</Link>{' '}
									</h3>
									<Link className="clr-txt font-2" to="#">
										{' '}
										<i> 35 items </i>{' '}
									</Link>
								</div>
							</div>
						</div>
					</div>
					<div className="col-lg-6 col-sm-12">
						<div className="organic-prod-info">
							<h4 className="sub-title">TƯƠI MỚI TỪ CHÚNG TÔI </h4>
							<h2 className="section-title ptb-15">
								{' '}
								<span className="light-font">220+ </span> <strong>hoa quả, rau xanh </strong>{' '}
							</h2>
							<p className="fsz-16">
								Sản phẩm sạch sẽ và tươi mới từ chúng tôi, được trồng với công nghệ hiện đại, mang tới
								những sản phẩm tươi mới, sạch sẽ, đảm bảo chất lượng nhất.{' '}
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default OurProducts;
