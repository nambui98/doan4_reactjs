import React, { useState, useContext } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch, useLocation, Link } from 'react-router-dom';
import Footer from './conponents/Footer';
import Menu from './containers/Header';
import ProductsPreview from './conponents/ProductsPreview';
import SubscribeNewsletter from './conponents/SubscribeNewsletter';
import About from './page/About';
import Error from './page/Error';
import Shop from './page/Shop2';
import Home from './page/Home';
import ContactUs from './page/ContactUs';
import Blog from './page/Blog';
import Cart from './page/Cart';
import StatusCarts from './page/StatusCarts';
import CheckOut from './page/CheckOut';
import MyAccount from './page/MyAccount';
import ProductSingle from './page/ProductSingle';
import ModalLogin from './conponents/ModalLogin';
import Contact from './conponents/Contact';
import { CartProvider } from './helpers/contextAPI';
import { ToastContainer, toast } from 'react-toastify';

function App(props) {
	let location = useLocation();
	let classMain = location.pathname === '/' ? ' home-wrap' : '';
	const [ show, setShow ] = useState(false);
	const [ showLogin, setShowLogin ] = useState(false);
	const [ carts, setCarts ] = useState([]);
	const [ cart, setCart ] = useState([]);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);
	const handleCloseLogin = () => setShowLogin(false);

	const [ modal, setModal ] = useState(false);

	const toggle = () => setModal(!modal);
	return (
		<CartProvider
		// value={{
		// 	cartItems: carts,
		// 	cartItem: cart,
		// 	addToCart: addToCart,
		// 	deleteCart: deleteCart
		// }}
		>
			{/* {showLogin === true ? <ModalLogin isShow={showLogin} handleCloseLogin={handleCloseLogin} /> : ''} */}

			<div className="wrapper">
				<main className={classMain}>
					{location.pathname === '/home' || location.pathname === '/' || location.pathname === '/about' ? (
						''
					) : (
						<Contact />
					)}

					<Menu key="menu" />
					<Switch>
						<Route path="/about" exact>
							<About key="about" />
						</Route>
						<Route path="/" exact>
							<Home key="home" handleShow={handleShow} />
						</Route>
						<Route path="/shop" exact>
							<Shop key="shop" handleShow={handleShow} />
						</Route>
						<Route path="/blog" exact>
							<Blog key="blog" />
						</Route>
						<Route path="/contact" exact>
							<ContactUs key="contact" />
						</Route>
						<Route path="/cart" exact>
							<Cart key="cart" />
						</Route>
						<Route path="/checkout" exact>
							<CheckOut key="checkout" />
						</Route>
						<Route path="/statusCart" exact>
							<StatusCarts key="statusCart" />
						</Route>
						<Route path="/myAccount" exact>
							<MyAccount key="myAccount" />
						</Route>
						<Route path="/product/:id" exact={false}>
							<ProductSingle key="product" />
						</Route>
						<Route component={Error} />
					</Switch>
					<Footer />
					<ToastContainer />
					<div id="to-top-mb" className="to-top mb">
						{' '}
						<i className="fa fa-arrow-circle-o-up" />{' '}
					</div>
				</main>
				{/* <ProductsPreview show={show} toggle={handleClose} /> */}
				{/* <SubscribeNewsletter /> */}
				{/* <ModalLogin isShow={showLogin} handleCloseLogin={setShowLogin} /> */}
			</div>
		</CartProvider>
	);
}

export default App;
// import * as serviceWorker from './serviceWorker';
// serviceWorker.unregister();
// if (document.getElementById('root')) {
// 	ReactDOM.render(
// 		<React.StrictMode>
// 			<Router>
// 				<App />
// 			</Router>
// 		</React.StrictMode>,
// 		document.getElementById('root')
// 	);
// }
