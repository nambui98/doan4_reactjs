import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

Error.propTypes = {};

function Error(props) {
	return [
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
							<Link to="/"> Home </Link> 404
						</li>
					</ol>
				</div>
			</div>
		</section>,
		<section className="error-wrap sec-space text-center">
			<div className="container">
				<img src="img/icons/error.png" alt="" />
				<h2 className="section-title pt-15">
					{' '}
					<span className="light-font">error - </span> <strong>not found </strong>{' '}
				</h2>
				<p className="fsz-16 ptb-15">
					It seems we can’t find what you’re looking for. Perhaps searching can help or go back to{' '}
					<Link to="/" className="clr-txt-2">
						{' '}
						Homepage.{' '}
					</Link>{' '}
				</p>
				<div className="search-wrap">
					<input className="form-control" placeholder />
					<button className="btn" type="submit">
						{' '}
						<i className="fa fa-search" />{' '}
					</button>
				</div>
			</div>
		</section>
	];
}

export default Error;
