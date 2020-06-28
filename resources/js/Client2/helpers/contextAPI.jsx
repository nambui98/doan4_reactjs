import React, { useState, useContext, useEffect } from 'react';
import ModalLogin from '../conponents/ModalLogin';
export const CartContext = React.createContext();

export function CartProvider(props) {
	const [ carts, setCarts ] = useState(JSON.parse(sessionStorage.getItem('carts')));
	const [ showLogin, setShowLogin ] = useState(false);
	const [ cart, setCart ] = useState([]);
	const handleLogin = () => setShowLogin(!showLogin);
	const addToCart = (product, quantity, typequantity) => {
		// const access_token = sessionStorage.getItem('access_token');
		// if (access_token) {
		let newCarts = carts ? [ ...carts ] : [];
		let index = newCarts.findIndex((item) => item.id === product.id);
		if (index >= 0) {
			newCarts[index].quantity = newCarts[index].quantity + quantity;
			newCarts[index].typequantity = typequantity;
			newCarts[index].totalMoneySale = price(newCarts[index]);
			newCarts[index].priceSale = priceSale(newCarts[index]);
			setCarts([ ...newCarts ]);
			sessionStorage.setItem('carts', JSON.stringify(newCarts));
		} else {
			product.quantity = quantity;
			product.typequantity = typequantity;
			product.totalMoneySale = price(product);
			product.priceSale = priceSale(product);

			let newCarts = carts ? carts : [];
			sessionStorage.setItem('carts', JSON.stringify(newCarts.concat(product)));
			setCarts(newCarts.concat(product));
		}
		// } else {
		// 	product.quantity = quantity;
		// 	product.typequantity = typequantity;
		// 	setCart(product);
		// 	setShowLogin(true);
		// }
	};
	const deleteCart = (id) => {
		let newCarts = [ ...carts ];
		let index = newCarts.findIndex((item) => item.id === id);
		newCarts.splice(index, 1);
		setCarts(newCarts);
		sessionStorage.setItem('carts', JSON.stringify(newCarts));
	};
	const deleteAllCart = () => {
		setCarts([]);
	};
	let price = (product) => {
		return product.type === 1 && product.numbersale
			? product.typequantity *
				product.quantity *
				(product.outputprice - product.outputprice * product.numbersale / 100)
			: product.type === 2 && product.numbersale
				? product.typequantity * product.quantity * (product.outputprice - product.numbersale)
				: product.typequantity * product.quantity * product.outputprice;
	};
	let priceSale = (product) => {
		return product.numbersale && product.type === 1
			? product.outputprice - product.outputprice * product.numbersale / 100
			: product.type === 2 && product.numbersale ? product.outputprice - product.numbersale : product.outputprice;
	};
	const cartsTotalMoney = carts && carts.length > 0 ? carts.reduce((total, cart) => total + price(cart), 0) : 0;
	const changeQuantity = (id, quantity, typequantity) => {
		let newCarts = [ ...carts ];
		let index = newCarts.findIndex((item) => item.id === id);
		newCarts[index].quantity = quantity;
		newCarts[index].typequantity = typequantity;
		newCarts[index].totalMoneySale = price(newCarts[index]);
		setCarts(newCarts);
		sessionStorage.setItem('carts', JSON.stringify(newCarts));
	};
	return (
		<CartContext.Provider
			value={{
				cartItems: carts,
				addToCart: addToCart,
				deleteCart: deleteCart,
				cartsTotalMoney: cartsTotalMoney,
				cartItem: cart,
				changeQuantity: changeQuantity,
				deleteAllCart: deleteAllCart,
				setShowLogin: setShowLogin,
				showLogin: showLogin
			}}
		>
			{props.children}
			<ModalLogin isShow={showLogin} handleLogin={handleLogin} />
		</CartContext.Provider>
	);
}
