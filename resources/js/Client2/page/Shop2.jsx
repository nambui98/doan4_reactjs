import React, { useState, useEffect } from 'react';
// import { DropdownButton, FormGroup, FormControl, MenuItem } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { Link } from 'react-router-domv5';
import Breadcrumb from '../conponents/Breadcrumb';
import Product from '../conponents/shop/Product';
import axios from 'axios';

import { Select, Form, Slider, Input, Spin, Empty } from 'antd-v4';
const { Option } = Select;
Shop2.propTypes = {};

function Shop2(props) {
	const [ form ] = Form.useForm();

	const [ data, setData ] = useState([]);
	const [ dataCategories, setDataCtg ] = useState([]);
	const [ category, setCategory ] = useState(1);
	const [ nameSearch, setName ] = useState('');
	const [ page, setPage ] = useState(false);
	const [ sort, setSort ] = useState();
	const [ loading, setLoading ] = useState(true);

	const [ currentPage, setCurrentPage ] = useState(0);
	const [ totalPage, setTotalPage ] = useState(0);
	const handleChange = (value) => {
		console.log(`selected ${value}`);
	};
	const onFinish = (values) => {
		console.log('Received values of form: ', values);
	};
	const [ show, setShow ] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = (item) => {
		setShow(true);
		setProduct(item);
	};
	async function getData(page, name, sort, category) {
		return await axios
			.post(
				'/api/products/productPaginate/' + '?page=' + page,
				{ name: name, sort: sort, category: category },
				{
					headers: {
						'Content-Type': 'application/json'
					}
				}
			)
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
	useEffect(() => {
		window.scrollTo(0, 0);
		getDataCategories();
		getData();
	}, []);
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
	const onSearch = (e) => {
		let name = form.getFieldValue('name');
		setName(name);
		getData(page, name, sort);
	};
	const onSort = (value) => {
		setSort(value);
		getData(page, nameSearch, value);
	};
	const onChangeRange = (value) => {
		console.log(value);
	};
	return (
		<div>
			<Breadcrumb nameLocation="Cửa hàng" />,
			<section className="shop-wrap sec-space-bottom">
				<div className="pattern">
					<img alt="" src="img/icons/white-pattern.png" />
				</div>
				<div className="container rel-div">
					<div className="row sort-bar">
						<div className="icon">
							{' '}
							<img alt="" src="img/logo/logo-2.png" />{' '}
						</div>
						<Form form={form}>
							<div className="col-lg-6">
								<div className="sort-dropdown left">
									<span>Tên</span>
									<div className="search-wrap">
										<Form.Item name="name" style={{ margin: 0 }}>
											<Input placeholder="Tên sản phẩm..." />
										</Form.Item>

										<button className="btn" onClick={onSearch}>
											{' '}
											<i className="fa fa-search" />{' '}
										</button>
									</div>
								</div>
							</div>
							<div className="col-lg-5 right">
								<div className="sort-dropdown ">
									<span>Sắp xếp theo giá</span>
									<div className="search-wrap">
										{/* <div className="search-selectpicker selectpicker-wrapper"> */}
										<Form.Item style={{ margin: 0 }}>
											<Select defaultValue="" onChange={onSort} style={{ width: 200 }}>
												<Option value="ASC">Thấp đến cao</Option>
												<Option value="DESC">Cao xuống thấp</Option>
												<Option value="">Mặc định</Option>
											</Select>
										</Form.Item>
									</div>
									{/* </div> */}
								</div>
							</div>
						</Form>
					</div>
					<div className="divider-full-1" />
					<div className="row">
						<div className="col-md-3 pt-15">
							<div className="widget-wrap">
								<h2 className="widget-title">
									{' '}
									<span className="light-font">Tùy chỉnh</span> <strong> theo loại </strong>{' '}
								</h2>
								<div className="divider-full-1" />
								<ul className="cate-widget">
									{dataCategories && dataCategories.length > 0 ? (
										dataCategories.map((item, index) => {
											return (
												<li key={index}>
													<i className="fa fa-arrow-circle-o-right clr-txt" />
													<a style={{ cursor: 'context-menu' }}>{item.name}</a>
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
							</div>

							<div className="widget-wrap">
								<h2 className="widget-title">
									{' '}
									<span className="light-font">Sắp xếp theo</span> <strong>khoảng giá</strong>{' '}
								</h2>
								<div className="divider-full-1" />
								<div className="sort-range pt-15">
									<span>Giá</span>

									<Slider onChange={onChangeRange} range defaultValue={[ 0, 100 ]} />
								</div>
							</div>
							<div className="widget-wrap">
								<h2 className="widget-title">
									{' '}
									<span className="light-font">Đang</span> <strong>giảm giá</strong>{' '}
								</h2>
								<div className="divider-full-1" />
								<div className="widget-post pt-15">
									<div className="random-prod">
										<div className="random-img">
											<img alt="" src="img/extra/post-xs-1.png" />
										</div>
										<div className="random-text">
											<h3 className="title-1 no-margin">
												{' '}
												<a href="#">
													{' '}
													<span className="light-font">organic </span>{' '}
													<strong>blackberry </strong>{' '}
												</a>{' '}
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
											<img alt="" src="img/extra/post-xs-2.png" />
										</div>
										<div className="random-text">
											<h3 className="title-1 no-margin">
												{' '}
												<a href="#">
													{' '}
													<span className="light-font">organic </span> <strong>peach </strong>{' '}
												</a>{' '}
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
											<img alt="" src="img/extra/post-xs-3.png" />
										</div>
										<div className="random-text">
											<h3 className="title-1 no-margin">
												{' '}
												<a href="#">
													{' '}
													<span className="light-font">organic </span>{' '}
													<strong>redberry </strong>{' '}
												</a>{' '}
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
											<img alt="" src="img/extra/post-xs-4.png" />
										</div>
										<div className="random-text">
											<h3 className="title-1 no-margin">
												{' '}
												<a href="#">
													{' '}
													<span className="light-font">organic </span>{' '}
													<strong>grapes </strong>{' '}
												</a>{' '}
											</h3>
											<span className="divider" />
											<div className="price">
												<strong className="clr-txt">$50.00 </strong>{' '}
												<del className="light-font">$65.00 </del>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="col-md-9">
							<div className="result-bar block-inline">
								<h4 className="result-txt">
									kết quả tìm kiếm <b>{data && data.length ? data.length : 0} </b>{' '}
								</h4>
							</div>
							<div className="tab-content shop-content">
								<div className="tab-pane fade active in">
									<div className="row">
										{!loading ? data && data.length > 0 ? (
											data.map((item, index) => {
												return <Product key={item.id} product={item} />;
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
									</div>
									<div className="rel-div pt-50">
										<div className="divider-full-1" />
										<div className="nav-page">
											<a
												disabled={currentPage === 1 ? true : false}
												onClick={() => changePage(currentPage - 1)}
												className="fa fa-long-arrow-left left"
											/>
											<a
												disabled={currentPage === totalPage ? true : false}
												onClick={() => changePage(currentPage + 1)}
												className="fa fa-long-arrow-right right"
											/>
										</div>
									</div>
									<div className="pagination-wrap">
										<ul className="pagintn">{pagination}</ul>
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

export default Shop2;
