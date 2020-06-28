import React, { useState, useRef, useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link, useParams } from 'react-router-domv5';
import axios from 'axios';
import moment from 'moment';
import { EditorState, Modifier } from 'draft-js';
import { convertFromHTML, ContentState, convertToRaw } from 'draft-js';
import draftToHtml from 'draftjs-to-html';
// import { convertToRaw } from 'draft-js';
import ReactHtmlParser from 'react-html-parser';
import draftToMarkdown from 'draftjs-to-markdown';
import OwlCarousel from 'react-owl-carousel';
import { InputNumber, Select, Form, Button, Spin } from 'antd-v4';
import { CartContext } from '../helpers/contextAPI';
import helperFunc from '../helpers/helperFunc';
const { convertNumber } = helperFunc;
const { Option } = Select;
BlogSingle.propTypes = {};

function BlogSingle(props) {
	const inputRef = useRef();
	const [ data, setData ] = useState();
	const [ reload, setReload ] = useState(false);
	const cart = useContext(CartContext);
	let { id } = useParams();
	const handelChangeImage = (index) => {
		// e.preventdefault();
		inputRef.current.to(index, 1000);
	};

	useEffect(() => {
		window.scrollTo(0, 0);
		async function getData() {
			return await axios
				.get('/api/news/' + id, {
					headers: {
						'Content-Type': 'application/json'
					}
				})
				.then((response) => {
					console.log(response);
					setData(response.data);
				})
				.catch((error) => {
					console.log(error);
				});
		}
		getData();
	}, []);
	const html = '<div><p>hello</p></div>';
	const blocksFromHTML = convertFromHTML(html);
	const content = blocksFromHTML;
	// console.log(content.contentBlocks);
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
			<section className="sec-space-bottom">
				<div className="container pt-50">
					<div className="row">
						<div className="col-md-12 pt-15">
							<div className="blog-single">
								<div className="content">
									{data ? (
										[
											<div className="blog-media">
												<h4 className="sub-title-1">
													{' '}
													{moment(data.created_at).format('DD/MM/YYYY')}{' '}
												</h4>
												<h2 className="fsz-30">
													{' '}
													{/* <span className="light-font">15 Best fruits for your </span>{' '} */}
													<strong>{data.title}</strong>{' '}
												</h2>
												<img alt="" src={'/img/news/' + data.image} />
											</div>,
											<div className="caption">{ReactHtmlParser(data.content)}</div>
											// <div className="caption">{convertFromRaw(data.content)}</div>
										]
									) : (
										''
									)}
								</div>
								{/* <div className="author crl-bg">
									<img alt="" src="assets/img/extra/author-1.png" />
									<p>
										Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh
										euismod tincidunt ut laoreet dolore magna aliquam Lorem ipsum dolor sit amet
										consectetuer{' '}
									</p>
								</div> */}
								{/* <div className="pb-50">
									<h2 className="title-2 pb-15">
										{' '}
										<span className="light-font"> Visitor </span> <strong> Comments </strong>{' '}
										<span className="gray-color fsz-12">(2)</span>
									</h2>
									<div className="view-comment">
										<div className="img-comment">
											<img alt="" src="assets/img/extra/comment-1.png" />
										</div>
										<div className="caption-comment">
											<h3 className="fsz-16 no-margin">
												LUISIANA GARCIAS <span className="fsz-12 gray-color">5 Min ago</span>{' '}
											</h3>
											<p>
												{' '}
												Category : <span className="clr-txt">Fruits</span>{' '}
											</p>
											<p>
												Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
												nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
												volutpat. Ut wisi enim ad minim veniam...
											</p>
										</div>
										<div className="view-comment child">
											<div className="img-comment">
												<img alt="" src="assets/img/extra/comment-1.png" />
											</div>
											<div className="caption-comment">
												<h3 className="fsz-16 no-margin">
													JAMES TYLOR <span className="fsz-12 gray-color">5 Min ago</span>{' '}
												</h3>
												<p>
													{' '}
													Category : <span className="clr-txt">Fruits</span>{' '}
												</p>
												<p>
													Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
													nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
													volutpat. Ut wisi enim ad minim veniam...
												</p>
											</div>
											<div className="view-comment child">
												<div className="img-comment">
													<img alt="" src="assets/img/extra/comment-1.png" />
												</div>
												<div className="caption-comment">
													<h3 className="fsz-16 no-margin">
														LUISIANA GARCIAS{' '}
														<span className="fsz-12 gray-color">5 Min ago</span>{' '}
													</h3>
													<p>
														{' '}
														Category : <span className="clr-txt">Fruits</span>{' '}
													</p>
													<p>
														Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
														diam nonummy nibh euismod tincidunt ut laoreet dolore magna
														aliquam erat volutpat. Ut wisi enim ad minim veniam...
													</p>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className="divider-full-1" />
								<div className="pt-50">
									<h2 className="title-2 pb-15">
										{' '}
										<span className="light-font"> Leave a</span> <strong> Comments </strong>
									</h2>
									<div className="comment-form pt-15">
										<form className="comment-form row">
											<div className="form-group col-sm-4">
												<input
													className="form-control"
													placeholder="Name"
													required
													type="text"
												/>
											</div>
											<div className="form-group col-sm-4">
												<input
													className="form-control"
													placeholder="Email"
													required
													type="email"
												/>
											</div>
											<div className="form-group col-sm-4">
												<input className="form-control" placeholder="Website" type="text" />
											</div>
											<div className="form-group col-sm-12">
												<textarea
													className="form-control"
													placeholder="Message"
													cols={12}
													rows={4}
													defaultValue={''}
												/>
											</div>
											<div className="form-group col-sm-12 text-center pt-15">
												<button className="theme-btn" type="submit">
													{' '}
													<strong> SEND MESSSAGE </strong>{' '}
												</button>
											</div>
										</form>
									</div>
								</div>
							 */}
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}

export default BlogSingle;
