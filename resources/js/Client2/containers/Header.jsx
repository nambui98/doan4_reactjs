import React, { useState, useEffect, useContext } from 'react';
import { Link, useLocation, useHistory } from 'react-router-domv5';
import PropTypes from 'prop-types';
import OwlCarousel from 'react-owl-carousel';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';

import ModalLogin from '../conponents/ModalLogin';
import ModalRegister from '../conponents/ModalRegister';
import { CartContext } from '../helpers/contextAPI';
import CartsHeader from '../conponents/CartsHeader';
import { Popover, Button } from 'antd-v4';
Header.propTypes = {};

function Header(props) {
	let history = useHistory();
	const buttonWidth = 70;
	let location = useLocation();
	const [ active, setActive ] = useState(location.pathname);
	const [ user, setUser ] = useState();
	const [ showLogin, setShowLogin ] = useState(false);
	const [ showRegister, setShowRegister ] = useState(false);
	const cart = useContext(CartContext);
	let userSS = JSON.parse(sessionStorage.getItem('account'));

	const handleLogin = () => setShowLogin(!showLogin);
	const handleRegister = () => setShowRegister(!showRegister);

	useEffect(
		() => {
			setActive(location.pathname);
		},
		[ location.pathname ]
	);
	useEffect(() => {
		setUser(userSS);
	}, []);
	let access_token = sessionStorage.getItem('access_token');
	let classMenu = location.pathname === '/' ? 'main-header' : 'main-header white-bg';
	const onchageMenu = (name) => {
		setActive(name);
	};
	const menu = [
		{ name: 'Trang chủ', path: '/' },
		{ name: 'Về chúng tôi', path: '/about' },
		{ name: 'Cửa hàng', path: '/shop' },
		{ name: 'Tin tức', path: '/blog' },
		{ name: 'Liên hệ', path: '/contact' }
	];
	const logout = async () => {
		return await axios
			.get('/api/auth/logout', {
				headers: {
					'Content-Type': 'application/json',
					'X-Requested-With': 'XMLHttpRequest',
					Authorization: `Bearer ${sessionStorage.getItem('access_token')}`
				}
			})
			.then((response) => {
				if (response.status === 200) {
					sessionStorage.removeItem('carts');
					sessionStorage.removeItem('account');
					sessionStorage.removeItem('access_token');
					cart.deleteAllCart();
					toast.success('Đăng xuất thành công!');
					history.push('/');
				} else {
					toast.error('Lỗi!');
				}
			})
			.catch((error) => {
				toast.error('Lỗi!');
			});
	};
	const contentAcc = (
		<div>
			<p>
				<Link to="/myAccount">Tài khoản của tôi</Link>
			</p>
			<p>
				<Link to="/statusCart">Đơn hàng</Link>
			</p>
			<p>
				<a onClick={logout}>Đăng xuất</a>
			</p>
		</div>
	);
	const contentNoAcc = (
		<div>
			<p>
				<a onClick={handleLogin}>Đăng nhập</a>
			</p>
			<p>
				<a onClick={handleRegister}>Đăng ký</a>
			</p>
		</div>
	);

	return (
		<header className={classMenu}>
			<div className="container-fluid rel-div">
				<div className="col-lg-4 col-sm-8">
					<div className="main-logo">
						<Link to="/">
							<img alt="" src="img/logo/main-logo.png" />
						</Link>

						<span className="medium-font">ORGANIC STORE</span>
					</div>
				</div>
				<div className="col-lg-6 responsive-menu">
					<div className="responsive-toggle fa fa-bars"> </div>
					<nav className="fix-navbar" id="primary-navigation">
						<ul className="primary-navbar">
							{menu.map((item, index) => {
								return (
									<li key={index} className={active === item.path ? 'dropdown active' : 'dropdown'}>
										<Link to={item.path} onClick={() => onchageMenu(item.path)}>
											{item.name}
										</Link>
									</li>
								);
							})}
						</ul>
					</nav>
				</div>

				<div className="col-lg-2 col-sm-4 cart-megamenu">
					<CartsHeader />
					<Popover placement="bottomLeft" content={access_token ? contentAcc : contentNoAcc} trigger="hover">
						<a style={{ cursor: 'pointer' }}>
							{userSS ? (
								[
									<img
										src={'img/avatar/' + userSS.avatar}
										style={{ width: 29, height: 29, margin: '0 10px 0 20px', borderRadius: '50%' }}
										alt=""
									/>,
									<span>{userSS.username}</span>
								]
							) : (
								<img src="ico/person.png" style={{ width: 29, marginLeft: 20 }} alt="" />
							)}
						</a>
					</Popover>

					<div className="mega-submenu">
						<span className="nav-trigger">
							<Link className="menu-toggle" to="#">
								{' '}
								<img src="img/icons/menu.png" alt="" />{' '}
							</Link>
						</span>
						<div className="mega-dropdown-menu">
							<Link className="menu-toggle fa fa-close" to="#" />
							<OwlCarousel
								dots={false}
								loop={true}
								autoplay={true}
								nav={false}
								margin={1}
								responsive={{
									0: { items: 1 },
									1200: { items: 5 },
									992: { items: 3 },
									768: { items: 3 },
									568: { items: 2 }
								}}
							>
								{/* <div className="slider-mega-menu"> */}
								<div className="menu-block">
									<div className="menu-caption">
										<h2 className="menu-title">
											{' '}
											<span className="light-font"> Hoa Quả </span> <strong>Tươi</strong>{' '}
										</h2>
										<ul className="sub-list">
											<li>
												{' '}
												<Link to="#">Chuối</Link>{' '}
											</li>
											<li>
												{' '}
												<Link to="#">Water Melon </Link>{' '}
											</li>
											<li>
												{' '}
												<Link to="#">Blackberry </Link>{' '}
											</li>
											<li>
												{' '}
												<Link to="#">Plume</Link>{' '}
											</li>
											<li>
												{' '}
												<Link to="#">Orange</Link>{' '}
											</li>
											<li>
												{' '}
												<Link to="#">Lemon</Link>{' '}
											</li>
											<li>
												{' '}
												<Link to="#">Pineapple</Link>{' '}
											</li>
											<li>
												{' '}
												<Link to="#">Apple</Link>{' '}
											</li>
											<li>
												{' '}
												<Link to="#">Kiwi</Link>{' '}
											</li>
										</ul>
										<h2 className="title">
											{' '}
											<Link to="#" className="clr-txt">
												{' '}
												Tất Cả Hoa Quả{' '}
											</Link>{' '}
										</h2>
									</div>
									<div className="menu-img">
										<img alt="" src="img/extra/menu-1.png" />
									</div>
								</div>
								<div className="menu-block">
									<div className="menu-caption">
										<h2 className="menu-title">
											{' '}
											<span className="light-font"> Rau </span> <strong>Tươi</strong>{' '}
										</h2>
										<ul className="sub-list">
											<li>
												{' '}
												<Link to="#">Cabbage</Link>{' '}
											</li>
											<li>
												{' '}
												<Link to="#">Garlic </Link>{' '}
											</li>
											<li>
												{' '}
												<Link to="#">Onion </Link>{' '}
											</li>
											<li>
												{' '}
												<Link to="#">Plume</Link>{' '}
											</li>
											<li>
												{' '}
												<Link to="#">Carrot</Link>{' '}
											</li>
											<li>
												{' '}
												<Link to="#">Papper</Link>{' '}
											</li>
											<li>
												{' '}
												<Link to="#">Mushrome</Link>{' '}
											</li>
											<li>
												{' '}
												<Link to="#">Apple</Link>{' '}
											</li>
											<li>
												{' '}
												<Link to="#">Kiwi</Link>{' '}
											</li>
										</ul>
										<h2 className="title">
											{' '}
											<Link to="#" className="clr-txt">
												{' '}
												Tất Cả Rau{' '}
											</Link>{' '}
										</h2>
									</div>
									<div className="menu-img">
										<img alt="" src="img/extra/menu-2.png" />
									</div>
								</div>
								<div className="menu-block">
									<div className="menu-caption">
										<h2 className="menu-title">
											{' '}
											<span className="light-font"> Nước Ép </span> <strong>Tươi</strong>{' '}
										</h2>
										<ul className="sub-list">
											<li>
												{' '}
												<Link to="#">Banana Juice</Link>{' '}
											</li>
											<li>
												{' '}
												<Link to="#">Water Melon Juice</Link>{' '}
											</li>
											<li>
												{' '}
												<Link to="#">Blackberry Juice</Link>{' '}
											</li>
											<li>
												{' '}
												<Link to="#">Plume Juice</Link>{' '}
											</li>
											<li>
												{' '}
												<Link to="#">Orange Juice</Link>{' '}
											</li>
											<li>
												{' '}
												<Link to="#">Lemon Juice</Link>{' '}
											</li>
											<li>
												{' '}
												<Link to="#">Pineapple Juice</Link>{' '}
											</li>
											<li>
												{' '}
												<Link to="#">Apple Juice</Link>{' '}
											</li>
											<li>
												{' '}
												<Link to="#">Kiwi Juice</Link>{' '}
											</li>
										</ul>
										<h2 className="title">
											{' '}
											<Link to="#" className="clr-txt">
												{' '}
												Tất Cả Nước Ép Tươi{' '}
											</Link>{' '}
										</h2>
									</div>
									<div className="menu-img">
										<img alt="" src="img/extra/menu-3.png" />
									</div>
								</div>
							</OwlCarousel>
						</div>
					</div>
					<div className="responsive-toggle fa fa-bars"> </div>
				</div>
			</div>
			<ModalLogin isShow={showLogin} handleLogin={handleLogin} />
			<ModalRegister isShow={showRegister} handleRegister={handleRegister} />
		</header>
	);
}

export default Header;
