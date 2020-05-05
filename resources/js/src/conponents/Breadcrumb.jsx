import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

Breadcrumb.propTypes = {};

function Breadcrumb(props) {
	return (
		<section className="breadcrumb-bg">
			<div className="theme-container container ">
				<div className="site-breadcumb white-clr">
					<h2 className="section-title">
						{' '}
						<span className="light-font">about </span> <strong className="clr-txt">naturix </strong>{' '}
						<span className="light-font">farmfood </span>{' '}
					</h2>
					<ol className="breadcrumb breadcrumb-menubar">
						<li>
							{' '}
							<Link to="/"> Trang Chủ </Link> {props.nameLocation}
						</li>
					</ol>
				</div>
			</div>
		</section>
	);
}

export default Breadcrumb;
