import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-domv5';
import { Select, Form, Slider, Input, Spin, Empty } from 'antd-v4';
import moment from 'moment';

import axios from 'axios';

Blog.propTypes = {};

function Blog(props) {
	// const [ form ] = Form.useForm();
	const [ data, setData ] = useState([]);

	const [ dataCategories, setDataCtg ] = useState([]);
	const [ loading, setLoading ] = useState(true);

	const [ currentPage, setCurrentPage ] = useState(0);
	const [ totalPage, setTotalPage ] = useState(0);
	async function getData(page = 1, name, sort, category) {
		return await axios
			.post('/api/news/paginate/' + '?page=' + page, {
				headers: {
					'Content-Type': 'application/json'
				}
			})
			.then((response) => {
				setLoading(false);
				console.log(response);
				setData(response.data.data);
				setCurrentPage(response.data.current_page);
				setTotalPage(response.data.last_page);
			})
			.catch((error) => {
				console.log(error);
			});
	}
	async function getDataCategories() {
		return await axios
			.get('/api/categories/categories', {
				headers: {
					'Content-Type': 'application/json'
				}
			})
			.then((response) => {
				console.log(response);
				setDataCtg(response.data.data);
			})
			.catch((error) => {
				console.log(error);
			});
	}
	let pagination = [];
	if (totalPage > 0) {
		let styleActive = {
			backgroundColor: '#92d2a7',
			color: '#fff'
		};
		for (let index = 1; index <= totalPage; index++) {
			if (index === currentPage) {
				pagination.push(
					<li key={index}>
						<a onClick={changePage} style={styleActive}>
							{index}
						</a>
					</li>
				);
			} else {
				pagination.push(
					<li key={index}>
						<a onClick={() => changePage(index)}>{index}</a>
					</li>
				);
			}
		}
	}
	const changePage = (page) => {
		setPage(page);
		getData(page, nameSearch, sort);
	};
	useEffect(() => {
		window.scrollTo(0, 0);
		getDataCategories();
		getData();
	}, []);
	console.log(data);
	return (
		<div>
			<section className="breadcrumb-bg bg-2">
				<div className="theme-container container ">
					<div className="site-breadcumb white-clr">
						<h2 className="section-title">
							{' '}
							<strong className="clr-txt">naturix </strong> <span className="light-font">Tin tức </span>{' '}
						</h2>
						<ol className="breadcrumb breadcrumb-menubar">
							<li>
								{' '}
								<Link to="/"> Trang Chủ </Link> Tin tức
							</li>
						</ol>
					</div>
				</div>
			</section>
			{/*Breadcrumb Section End*/}
			{/* Blog Starts*/}
			<section className="blog-wrap sec-space-bottom">
				<div className="container pt-50">
					<div className="row">
						<div className="col-md-3 pt-15">
							<div className="widget-wrap">
								<h2 className="widget-title">
									{' '}
									<strong>Loại</strong> <span className="light-font">Tin tức</span>
								</h2>
								<div className="divider-full-1" />
								<ul className="cate-widget">
									<li>
										<ul className="cate-widget">
											{dataCategories && dataCategories.length > 0 ? (
												dataCategories.map((item, index) => {
													return (
														<li key={index}>
															<i className="fa fa-arrow-circle-o-right clr-txt" />
															<a style={{ marginLeft: '5px' }}>{item.name}</a>
															<ul className="cate-widget" style={{ marginLeft: '10px' }}>
																{item.data && item.data.length > 0 ? (
																	item.data.map((elm, index1) => {
																		return (
																			<li key={index1}>
																				{' '}
																				<i className="fa fa-arrow-circle-o-right clr-txt" />{' '}
																				<a onClick={() => getData(null, null, null, elm.id)}>{elm.name}</a>{' '}
																			</li>
																		);
																	})
																) : (
																	''
																)}
															</ul>
														</li>
													);
												})
											) : (
												<li>
													<Spin />
												</li>
											)}
										</ul>
									</li>
								</ul>
							</div>
						</div>
						<div className="col-md-8 pt-15">
							<div className="blog-wrap">
								<div className="blog-heading">
									<h2 className="title-2"> Tin Mới Nhất </h2>
									<ul id="tabs" className="blog-tabs">
										<li className="active">
											<Link to="#blog-tab-1" data-toggle="tab">
												Tất cả
											</Link>
										</li>
									</ul>
								</div>
								<div className="divider-full-1" />
								<div className="blog-content tab-content">
									<div id="blog-tab-1" className="tab-pane fade active in">
										{!loading ? data && data.length > 0 ? (
											data.map((item, index) => {
												return (
													<div className="row ptb-15">
														<div className="col-sm-6">
															<Link to={'blog/' + item.id} className>
																{' '}
																<img alt="" src={'/img/news/' + item.image} />{' '}
															</Link>
														</div>
														<div className="col-sm-6">
															<div className="blog-caption">
																<h4 className="sub-title-1">
																	{' '}
																	{moment(item.created_at).format('DD/MM/YYYY')}{' '}
																</h4>
																<h2 className="title-2">
																	{' '}
																	<Link to={'blog/' + item.id}>
																		{item.title}
																	</Link>{' '}
																</h2>
																<span className="divider-1 crl-bg" />
																<div className="ptb-10">
																	<p>{item.intro}</p>
																</div>
																<Link to={'blog/' + item.id} className="clr-txt">
																	{' '}
																	<strong>
																		{' '}
																		Đọc tiếp
																		<i className="fa fa-long-arrow-right" />{' '}
																	</strong>{' '}
																</Link>
															</div>
														</div>
													</div>
												);
											})
										) : (
											<Empty description={<span>Không có dữ liệu</span>} />
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
										<div className="pagination-wrap">
											<div className="divider-full-1" />
											<ul className="pagintn pt-50">{pagination}</ul>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}

export default Blog;
