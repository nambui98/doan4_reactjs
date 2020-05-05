import React from 'react';
import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';


Blog.propTypes = {
    
};

function Blog(props) {
    return (
        <div>
            <section className="breadcrumb-bg bg-2">
                <div className="theme-container container ">
                    <div className="site-breadcumb white-clr">
                        <h2 className="section-title"> <strong className="clr-txt">naturix </strong> <span className="light-font">Blog </span> </h2>
                        <ol className="breadcrumb breadcrumb-menubar">
                            <li> <Link to="/"> Home </Link> Blog</li>
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
                                <h2 className="widget-title"> <span className="light-font">Blog</span> <strong>category</strong> </h2>
                                <div className="divider-full-1" />
                                <ul className="cate-widget">
                                    <li> <i className="fa fa-arrow-circle-o-right clr-txt" /> <Link to="#">Fruits</Link>
                                        <ul className="cate-widget">
                                            <li> <i className="fa fa-arrow-circle-o-right clr-txt" /> <Link to="#">Apple</Link> </li>
                                            <li> <i className="fa fa-arrow-circle-o-right clr-txt" /> <Link to="#">Cherry</Link> </li>
                                            <li> <i className="fa fa-arrow-circle-o-right clr-txt" /> <Link to="#">Pinapple</Link> </li>
                                        </ul>
                                    </li>
                                    <li> <i className="fa fa-arrow-circle-o-right clr-txt" /> <Link to="#">Vegetables</Link>
                                        <ul className="cate-widget">
                                            <li> <i className="fa fa-arrow-circle-o-right clr-txt" /> <Link to="#">Onion</Link> </li>
                                            <li> <i className="fa fa-arrow-circle-o-right clr-txt" /> <Link to="#">Cabbage</Link> </li>
                                            <li> <i className="fa fa-arrow-circle-o-right clr-txt" /> <Link to="#">Salad</Link> </li>
                                        </ul>
                                    </li>
                                    <li> <i className="fa fa-arrow-circle-o-right clr-txt" /> <Link to="#">Juices</Link> </li>
                                    <li> <i className="fa fa-arrow-circle-o-right clr-txt" /> <Link to="#">Dried Fruits</Link> </li>
                                    <li> <i className="fa fa-arrow-circle-o-right clr-txt" /> <Link to="#">Breads</Link> </li>
                                </ul>
                            </div>
                            <div className="widget-wrap">
                                <h2 className="widget-title"> <span className="light-font">Best</span> <strong>Sellers</strong> </h2>
                                <div className="divider-full-1" />
                                <div className="widget-post pt-15">
                                    <div className="random-prod">
                                        <div className="random-img">
                                            <img alt="" src="img/extra/post-xs-1.png" />
                                        </div>
                                        <div className="random-text">
                                            <h3 className="title-1 no-margin"> <Link to="#"> <span className="light-font">organic </span> <strong>blackberry </strong> </Link> </h3>
                                            <span className="divider" />
                                            <div className="price">
                                                <strong className="clr-txt">$50.00 </strong> <del className="light-font">$65.00 </del>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="random-prod">
                                        <div className="random-img">
                                            <img alt="" src="img/extra/post-xs-2.png" />
                                        </div>
                                        <div className="random-text">
                                            <h3 className="title-1 no-margin"> <Link to="#"> <span className="light-font">organic </span> <strong>peach </strong> </Link> </h3>
                                            <span className="divider" />
                                            <div className="price">
                                                <strong className="clr-txt">$50.00 </strong> <del className="light-font">$65.00 </del>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="random-prod">
                                        <div className="random-img">
                                            <img alt="" src="img/extra/post-xs-3.png" />
                                        </div>
                                        <div className="random-text">
                                            <h3 className="title-1 no-margin"> <Link to="#"> <span className="light-font">organic </span> <strong>redberry </strong> </Link> </h3>
                                            <span className="divider" />
                                            <div className="price">
                                                <strong className="clr-txt">$50.00 </strong> <del className="light-font">$65.00 </del>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="random-prod">
                                        <div className="random-img">
                                            <img alt="" src="img/extra/post-xs-4.png" />
                                        </div>
                                        <div className="random-text">
                                            <h3 className="title-1 no-margin"> <Link to="#"> <span className="light-font">organic </span> <strong>grapes </strong> </Link> </h3>
                                            <span className="divider" />
                                            <div className="price">
                                                <strong className="clr-txt">$50.00 </strong> <del className="light-font">$65.00 </del>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="widget-wrap">
                                <h2 className="widget-title"> <span className="light-font">Sort by</span> <strong>Tags</strong> </h2>
                                <div className="divider-full-1" />
                                <ul className="tags-widget">
                                    <li> <Link to="#">fruits</Link> </li>
                                    <li> <Link to="#">vegetables</Link> </li>
                                    <li> <Link to="#">juices</Link> </li>
                                    <li> <Link to="#">natural food</Link> </li>
                                    <li> <Link to="#">food</Link> </li>
                                    <li> <Link to="#">Breads</Link> </li>
                                    <li> <Link to="#">natural</Link> </li>
                                    <li> <Link to="#">healthy</Link> </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-8 pt-15">
                            <div className="blog-wrap">
                                <div className="blog-heading">
                                    <h2 className="title-2"> Latest News </h2>
                                    <ul id="tabs" className="blog-tabs">
                                        <li className="active"><Link to="#blog-tab-1" data-toggle="tab"> All Topic </Link></li>
                                        <li className><Link to="#blog-tab-2" data-toggle="tab">  Organic </Link></li>
                                        <li className><Link to="#blog-tab-3" data-toggle="tab"> Fruits </Link></li>
                                        <li className><Link to="#blog-tab-4" data-toggle="tab"> Vegetables </Link></li>
                                        <li className><Link to="#blog-tab-5" data-toggle="tab"> Juices </Link></li>
                                        <li className><Link to="#blog-tab-6" data-toggle="tab">  Natural </Link></li>
                                        <li className><Link to="#blog-tab-7" data-toggle="tab"> Other </Link></li>
                                    </ul>
                                </div>
                                <div className="divider-full-1" />
                                <div className="blog-content tab-content">
                                    <div id="blog-tab-1" className="tab-pane fade active in">
                                        <div className="row ptb-15">
                                            <div className="col-sm-6">
                                                <Link to="#" className> <img alt="" src="img/blog/blog-1.jpg" /> </Link>
                                            </div>
                                            <div className="col-sm-6">
                                                <div className="blog-caption">
                                                    <h4 className="sub-title-1"> Date: 26 June 2016 </h4>
                                                    <h2 className="title-2"> <Link to="blog-single.html"> 15 Best &amp; cheap foods for your healthy hair and skin </Link> </h2>
                                                    <span className="divider-1 crl-bg" />
                                                    <div className="ptb-10">
                                                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam Lorem ipsum dolor...</p>
                                                    </div>
                                                    <Link to="#" className="clr-txt"> <strong> Continue Reading <i className="fa fa-long-arrow-right" /> </strong> </Link>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row ptb-15">
                                            <div className="col-sm-6">
                                                <Link to="#" className> <img alt="" src="img/blog/blog-2.jpg" /> </Link>
                                            </div>
                                            <div className="col-sm-6">
                                                <div className="blog-caption">
                                                    <h4 className="sub-title-1"> Date: 26 June 2016 </h4>
                                                    <h2 className="title-2"> <Link to="blog-single.html"> 15 Best &amp; cheap foods for your healthy hair and skin </Link> </h2>
                                                    <span className="divider-1 crl-bg" />
                                                    <div className="ptb-10">
                                                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam Lorem ipsum dolor...</p>
                                                    </div>
                                                    <Link to="#" className="clr-txt"> <strong> Continue Reading <i className="fa fa-long-arrow-right" /> </strong> </Link>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row ptb-15">
                                            <div className="col-sm-6">
                                                <Link to="#" className> <img alt="" src="img/blog/blog-3.jpg" /> </Link>
                                            </div>
                                            <div className="col-sm-6">
                                                <div className="blog-caption">
                                                    <h4 className="sub-title-1"> Date: 26 June 2016 </h4>
                                                    <h2 className="title-2"> <Link to="blog-single.html"> 15 Best &amp; cheap foods for your healthy hair and skin </Link> </h2>
                                                    <span className="divider-1 crl-bg" />
                                                    <div className="ptb-10">
                                                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam Lorem ipsum dolor...</p>
                                                    </div>
                                                    <Link to="#" className="clr-txt"> <strong> Continue Reading <i className="fa fa-long-arrow-right" /> </strong> </Link>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row ptb-15">
                                            <div className="col-sm-6">
                                                <Link to="#" className> <img alt="" src="img/blog/blog-4.jpg" /> </Link>
                                            </div>
                                            <div className="col-sm-6">
                                                <div className="blog-caption">
                                                    <h4 className="sub-title-1"> Date: 26 June 2016 </h4>
                                                    <h2 className="title-2"> <Link to="blog-single.html"> 15 Best &amp; cheap foods for your healthy hair and skin </Link> </h2>
                                                    <span className="divider-1 crl-bg" />
                                                    <div className="ptb-10">
                                                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam Lorem ipsum dolor...</p>
                                                    </div>
                                                    <Link to="#" className="clr-txt"> <strong> Continue Reading <i className="fa fa-long-arrow-right" /> </strong> </Link>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="pagination-wrap">
                                            <div className="divider-full-1" />
                                            <ul className="pagintn pt-50">
                                                <li><Link to="#">01</Link></li>
                                                <li><Link to="#">02</Link></li>
                                                <li><Link to="#">03</Link></li>
                                                <li><Link to="#">04</Link></li>
                                                <li><Link to="#">05</Link></li>
                                                <li><Link to="#">...</Link></li>
                                                <li><Link to="#">15</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div id="blog-tab-2" className="tab-pane fade">
                                        <div className="row ptb-15">
                                            <div className="col-sm-6">
                                                <Link to="#" className> <img alt="" src="img/blog/blog-4.jpg" /> </Link>
                                            </div>
                                            <div className="col-sm-6">
                                                <div className="blog-caption">
                                                    <h4 className="sub-title-1"> Date: 26 June 2016 </h4>
                                                    <h2 className="title-2"> <Link to="blog-single.html"> 15 Best &amp; cheap foods for your healthy hair and skin </Link> </h2>
                                                    <span className="divider-1 crl-bg" />
                                                    <div className="ptb-10">
                                                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam Lorem ipsum dolor...</p>
                                                    </div>
                                                    <Link to="#" className="clr-txt"> <strong> Continue Reading <i className="fa fa-long-arrow-right" /> </strong> </Link>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row ptb-15">
                                            <div className="col-sm-6">
                                                <Link to="#" className> <img alt="" src="img/blog/blog-3.jpg" /> </Link>
                                            </div>
                                            <div className="col-sm-6">
                                                <div className="blog-caption">
                                                    <h4 className="sub-title-1"> Date: 26 June 2016 </h4>
                                                    <h2 className="title-2"> <Link to="blog-single.html"> 15 Best &amp; cheap foods for your healthy hair and skin </Link> </h2>
                                                    <span className="divider-1 crl-bg" />
                                                    <div className="ptb-10">
                                                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam Lorem ipsum dolor...</p>
                                                    </div>
                                                    <Link to="#" className="clr-txt"> <strong> Continue Reading <i className="fa fa-long-arrow-right" /> </strong> </Link>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row ptb-15">
                                            <div className="col-sm-6">
                                                <Link to="#" className> <img alt="" src="img/blog/blog-2.jpg" /> </Link>
                                            </div>
                                            <div className="col-sm-6">
                                                <div className="blog-caption">
                                                    <h4 className="sub-title-1"> Date: 26 June 2016 </h4>
                                                    <h2 className="title-2"> <Link to="blog-single.html"> 15 Best &amp; cheap foods for your healthy hair and skin </Link> </h2>
                                                    <span className="divider-1 crl-bg" />
                                                    <div className="ptb-10">
                                                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam Lorem ipsum dolor...</p>
                                                    </div>
                                                    <Link to="#" className="clr-txt"> <strong> Continue Reading <i className="fa fa-long-arrow-right" /> </strong> </Link>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row ptb-15">
                                            <div className="col-sm-6">
                                                <Link to="#" className> <img alt="" src="img/blog/blog-1.jpg" /> </Link>
                                            </div>
                                            <div className="col-sm-6">
                                                <div className="blog-caption">
                                                    <h4 className="sub-title-1"> Date: 26 June 2016 </h4>
                                                    <h2 className="title-2"> <Link to="blog-single.html"> 15 Best &amp; cheap foods for your healthy hair and skin </Link> </h2>
                                                    <span className="divider-1 crl-bg" />
                                                    <div className="ptb-10">
                                                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam Lorem ipsum dolor...</p>
                                                    </div>
                                                    <Link to="#" className="clr-txt"> <strong> Continue Reading <i className="fa fa-long-arrow-right" /> </strong> </Link>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="pagination-wrap">
                                            <div className="divider-full-1" />
                                            <ul className="pagintn pt-50">
                                                <li><Link to="#">01</Link></li>
                                                <li><Link to="#">02</Link></li>
                                                <li><Link to="#">03</Link></li>
                                                <li><Link to="#">04</Link></li>
                                                <li><Link to="#">05</Link></li>
                                                <li><Link to="#">...</Link></li>
                                                <li><Link to="#">15</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div id="blog-tab-3" className="tab-pane fade">
                                        <div className="row ptb-15">
                                            <div className="col-sm-6">
                                                <Link to="#" className> <img alt="" src="img/blog/blog-3.jpg" /> </Link>
                                            </div>
                                            <div className="col-sm-6">
                                                <div className="blog-caption">
                                                    <h4 className="sub-title-1"> Date: 26 June 2016 </h4>
                                                    <h2 className="title-2"> <Link to="blog-single.html"> 15 Best &amp; cheap foods for your healthy hair and skin </Link> </h2>
                                                    <span className="divider-1 crl-bg" />
                                                    <div className="ptb-10">
                                                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam Lorem ipsum dolor...</p>
                                                    </div>
                                                    <Link to="#" className="clr-txt"> <strong> Continue Reading <i className="fa fa-long-arrow-right" /> </strong> </Link>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row ptb-15">
                                            <div className="col-sm-6">
                                                <Link to="#" className> <img alt="" src="img/blog/blog-2.jpg" /> </Link>
                                            </div>
                                            <div className="col-sm-6">
                                                <div className="blog-caption">
                                                    <h4 className="sub-title-1"> Date: 26 June 2016 </h4>
                                                    <h2 className="title-2"> <Link to="blog-single.html"> 15 Best &amp; cheap foods for your healthy hair and skin </Link> </h2>
                                                    <span className="divider-1 crl-bg" />
                                                    <div className="ptb-10">
                                                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam Lorem ipsum dolor...</p>
                                                    </div>
                                                    <Link to="#" className="clr-txt"> <strong> Continue Reading <i className="fa fa-long-arrow-right" /> </strong> </Link>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="pagination-wrap">
                                            <div className="divider-full-1" />
                                            <ul className="pagintn pt-50">
                                                <li><Link to="#">01</Link></li>
                                                <li><Link to="#">02</Link></li>
                                                <li><Link to="#">03</Link></li>
                                                <li><Link to="#">04</Link></li>
                                                <li><Link to="#">05</Link></li>
                                                <li><Link to="#">...</Link></li>
                                                <li><Link to="#">15</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div id="blog-tab-4" className="tab-pane fade">
                                        <div className="row ptb-15">
                                            <div className="col-sm-6">
                                                <Link to="#" className> <img alt="" src="img/blog/blog-2.jpg" /> </Link>
                                            </div>
                                            <div className="col-sm-6">
                                                <div className="blog-caption">
                                                    <h4 className="sub-title-1"> Date: 26 June 2016 </h4>
                                                    <h2 className="title-2"> <Link to="blog-single.html"> 15 Best &amp; cheap foods for your healthy hair and skin </Link> </h2>
                                                    <span className="divider-1 crl-bg" />
                                                    <div className="ptb-10">
                                                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam Lorem ipsum dolor...</p>
                                                    </div>
                                                    <Link to="#" className="clr-txt"> <strong> Continue Reading <i className="fa fa-long-arrow-right" /> </strong> </Link>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row ptb-15">
                                            <div className="col-sm-6">
                                                <Link to="#" className> <img alt="" src="img/blog/blog-4.jpg" /> </Link>
                                            </div>
                                            <div className="col-sm-6">
                                                <div className="blog-caption">
                                                    <h4 className="sub-title-1"> Date: 26 June 2016 </h4>
                                                    <h2 className="title-2"> <Link to="blog-single.html"> 15 Best &amp; cheap foods for your healthy hair and skin </Link> </h2>
                                                    <span className="divider-1 crl-bg" />
                                                    <div className="ptb-10">
                                                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam Lorem ipsum dolor...</p>
                                                    </div>
                                                    <Link to="#" className="clr-txt"> <strong> Continue Reading <i className="fa fa-long-arrow-right" /> </strong> </Link>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="pagination-wrap">
                                            <div className="divider-full-1" />
                                            <ul className="pagintn pt-50">
                                                <li><Link to="#">01</Link></li>
                                                <li><Link to="#">02</Link></li>
                                                <li><Link to="#">03</Link></li>
                                                <li><Link to="#">04</Link></li>
                                                <li><Link to="#">05</Link></li>
                                                <li><Link to="#">...</Link></li>
                                                <li><Link to="#">15</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div id="blog-tab-5" className="tab-pane fade">
                                        <div className="row ptb-15">
                                            <div className="col-sm-6">
                                                <Link to="#" className> <img alt="" src="img/blog/blog-2.jpg" /> </Link>
                                            </div>
                                            <div className="col-sm-6">
                                                <div className="blog-caption">
                                                    <h4 className="sub-title-1"> Date: 26 June 2016 </h4>
                                                    <h2 className="title-2"> <Link to="blog-single.html"> 15 Best &amp; cheap foods for your healthy hair and skin </Link> </h2>
                                                    <span className="divider-1 crl-bg" />
                                                    <div className="ptb-10">
                                                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam Lorem ipsum dolor...</p>
                                                    </div>
                                                    <Link to="#" className="clr-txt"> <strong> Continue Reading <i className="fa fa-long-arrow-right" /> </strong> </Link>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row ptb-15">
                                            <div className="col-sm-6">
                                                <Link to="#" className> <img alt="" src="img/blog/blog-4.jpg" /> </Link>
                                            </div>
                                            <div className="col-sm-6">
                                                <div className="blog-caption">
                                                    <h4 className="sub-title-1"> Date: 26 June 2016 </h4>
                                                    <h2 className="title-2"> <Link to="blog-single.html"> 15 Best &amp; cheap foods for your healthy hair and skin </Link> </h2>
                                                    <span className="divider-1 crl-bg" />
                                                    <div className="ptb-10">
                                                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam Lorem ipsum dolor...</p>
                                                    </div>
                                                    <Link to="#" className="clr-txt"> <strong> Continue Reading <i className="fa fa-long-arrow-right" /> </strong> </Link>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="pagination-wrap">
                                            <div className="divider-full-1" />
                                            <ul className="pagintn pt-50">
                                                <li><Link to="#">01</Link></li>
                                                <li><Link to="#">02</Link></li>
                                                <li><Link to="#">03</Link></li>
                                                <li><Link to="#">04</Link></li>
                                                <li><Link to="#">05</Link></li>
                                                <li><Link to="#">...</Link></li>
                                                <li><Link to="#">15</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div id="blog-tab-6" className="tab-pane fade">
                                        <div className="row ptb-15">
                                            <div className="col-sm-6">
                                                <Link to="#" className> <img alt="" src="img/blog/blog-2.jpg" /> </Link>
                                            </div>
                                            <div className="col-sm-6">
                                                <div className="blog-caption">
                                                    <h4 className="sub-title-1"> Date: 26 June 2016 </h4>
                                                    <h2 className="title-2"> <Link to="blog-single.html"> 15 Best &amp; cheap foods for your healthy hair and skin </Link> </h2>
                                                    <span className="divider-1 crl-bg" />
                                                    <div className="ptb-10">
                                                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam Lorem ipsum dolor...</p>
                                                    </div>
                                                    <Link to="#" className="clr-txt"> <strong> Continue Reading <i className="fa fa-long-arrow-right" /> </strong> </Link>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row ptb-15">
                                            <div className="col-sm-6">
                                                <Link to="#" className> <img alt="" src="img/blog/blog-4.jpg" /> </Link>
                                            </div>
                                            <div className="col-sm-6">
                                                <div className="blog-caption">
                                                    <h4 className="sub-title-1"> Date: 26 June 2016 </h4>
                                                    <h2 className="title-2"> <Link to="blog-single.html"> 15 Best &amp; cheap foods for your healthy hair and skin </Link> </h2>
                                                    <span className="divider-1 crl-bg" />
                                                    <div className="ptb-10">
                                                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam Lorem ipsum dolor...</p>
                                                    </div>
                                                    <Link to="#" className="clr-txt"> <strong> Continue Reading <i className="fa fa-long-arrow-right" /> </strong> </Link>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="pagination-wrap">
                                            <div className="divider-full-1" />
                                            <ul className="pagintn pt-50">
                                                <li><Link to="#">01</Link></li>
                                                <li><Link to="#">02</Link></li>
                                                <li><Link to="#">03</Link></li>
                                                <li><Link to="#">04</Link></li>
                                                <li><Link to="#">05</Link></li>
                                                <li><Link to="#">...</Link></li>
                                                <li><Link to="#">15</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div id="blog-tab-7" className="tab-pane fade">
                                        <div className="row ptb-15">
                                            <div className="col-sm-6">
                                                <Link to="#" className> <img alt="" src="img/blog/blog-2.jpg" /> </Link>
                                            </div>
                                            <div className="col-sm-6">
                                                <div className="blog-caption">
                                                    <h4 className="sub-title-1"> Date: 26 June 2016 </h4>
                                                    <h2 className="title-2"> <Link to="blog-single.html"> 15 Best &amp; cheap foods for your healthy hair and skin </Link> </h2>
                                                    <span className="divider-1 crl-bg" />
                                                    <div className="ptb-10">
                                                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam Lorem ipsum dolor...</p>
                                                    </div>
                                                    <Link to="#" className="clr-txt"> <strong> Continue Reading <i className="fa fa-long-arrow-right" /> </strong> </Link>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row ptb-15">
                                            <div className="col-sm-6">
                                                <Link to="#" className> <img alt="" src="img/blog/blog-4.jpg" /> </Link>
                                            </div>
                                            <div className="col-sm-6">
                                                <div className="blog-caption">
                                                    <h4 className="sub-title-1"> Date: 26 June 2016 </h4>
                                                    <h2 className="title-2"> <Link to="blog-single.html"> 15 Best &amp; cheap foods for your healthy hair and skin </Link> </h2>
                                                    <span className="divider-1 crl-bg" />
                                                    <div className="ptb-10">
                                                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam Lorem ipsum dolor...</p>
                                                    </div>
                                                    <Link to="#" className="clr-txt"> <strong> Continue Reading <i className="fa fa-long-arrow-right" /> </strong> </Link>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="pagination-wrap">
                                            <div className="divider-full-1" />
                                            <ul className="pagintn pt-50">
                                                <li><Link to="#">01</Link></li>
                                                <li><Link to="#">02</Link></li>
                                                <li><Link to="#">03</Link></li>
                                                <li><Link to="#">04</Link></li>
                                                <li><Link to="#">05</Link></li>
                                                <li><Link to="#">...</Link></li>
                                                <li><Link to="#">15</Link></li>
                                            </ul>
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