import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';
import { connect } from 'react-redux';
import App from './containers/App/App';
import asyncComponent from './helpers/AsyncFunc';
import clone from 'clone';
import actions from './redux/auth/actions';
import helperFunc from './helpers/helperFunc';
const RestrictedRoute = ({ component: Component, isLoggedIn, isUserLogin, roleStore, logout, ...rest }) => {
	if (rest.location) {
		if (isLoggedIn) {
			const pathname = rest.location.pathname.replace('/', '');
			const role = clone(roleStore) ? clone(roleStore) : JSON.parse(localStorage.getItem('role_detail'));
			let chk = -1;
			if (role) {
				chk = role.findIndex((x) => x.address === pathname.toString());
				if (chk === -1) {
					chk = role.findIndex((x) => x.address === 'dashboard');
				}
			}
			if (chk === -1) {
				logout();
				return (
					<Route
						{...rest}
						render={(props) => {
							return (
								<Redirect
									to={{
										pathname: '/404',
										state: { from: props.location }
									}}
								/>
							);
						}}
					/>
				);
			} else {
				return (
					<Route
						{...rest}
						render={(props) => {
							return <Component {...props} />;
						}}
					/>
				);
			}
		} else {
			return (
				<Route
					{...rest}
					render={(props) => {
						return (
							<Redirect
								to={{
									pathname: '/admin/login',
									state: { from: props.location }
								}}
							/>
						);
					}}
				/>
			);
		}
	} else {
		//Bên thứ 3 đăng nhập
		return (
			<Route
				{...rest}
				render={(props) => {
					const url = props.location.pathname;
					if (url.includes(helperFunc.Front.properties[helperFunc.Home].key)) {
						return isUserLogin ? (
							<Component {...props} />
						) : (
							<Redirect
								to={{
									pathname: '/home',
									state: { from: props.location }
								}}
							/>
						);
					} else {
						if (isLoggedIn) {
							return <Component {...props} />;
						} else {
							return (
								<Redirect
									to={{
										pathname: '/signin',
										state: { from: props.location }
									}}
								/>
							);
						}
					}
				}}
			/>
		);
	}
};
const PublicRoutes = ({ history, isLoggedIn, roleStore, logout }) => {
	return (
		<ConnectedRouter history={history}>
			<div>
				<Switch>
					<Route exact path={'/404'} component={asyncComponent(() => import('./containers/Page/404'))} />
					<Route exact path={'/500'} component={asyncComponent(() => import('./containers/Page/500'))} />
					<Route
						exact
						path={'/signin'}
						component={asyncComponent(() => import('./containers/Page/signin'))}
					/>
					<Route
						exact
						path={'/admin/login'}
						component={asyncComponent(() => import('./containers/Page/signin'))}
					/>
					<Route
						exact
						path={'/signup'}
						component={asyncComponent(() => import('./containers/Page/signup'))}
					/>
					<Route
						exact
						path={'/forgotpassword'}
						component={asyncComponent(() => import('./containers/Page/forgotPassword'))}
					/>
					<Route
						exact
						path={'/resetpassword'}
						component={asyncComponent(() => import('./containers/Page/resetPassword'))}
					/>
					<Route
						exact
						path={'/sendSuccess/:email'}
						component={asyncComponent(() => import('./containers/Page/sendEmailSuccess'))}
					/>
					<Route
						exact={false}
						path={'/confirm_password/:token'}
						component={asyncComponent(() => import('./containers/Page/updateNewPass'))}
					/>
					<Route
						exact
						path={'/privacy'}
						component={asyncComponent(() => import('./containers/Page/privacy'))}
					/>
					<RestrictedRoute
						path={'/'}
						component={App}
						isLoggedIn={isLoggedIn}
						history={history}
						logout={logout}
					/>
				</Switch>
			</div>
		</ConnectedRouter>
	);
};

export default connect(
	(state) => ({
		isLoggedIn: state.Auth.idToken !== null,
		...state.Accounts
	}),
	{ ...actions }
)(PublicRoutes);
