import { all, takeEvery, put, fork } from 'redux-saga/effects';
import { getToken, clearAllStorage } from '../../helpers/utility';
import { callAPI } from '../../helpers/api';
import actions from './actions';
import notification from '../../components/notification';

export function* loginRequest() {
	yield takeEvery('LOGIN_REQUEST', function*(obj) {
		var dataReturn = {};
		try {
			dataReturn = yield callAPI('login', 'POST', {
				username: obj.newUser.username,
				password: obj.newUser.password
			});
			// debugger;
			if (dataReturn.success === true) {
				console.log('vao day');
				yield localStorage.setItem('user', dataReturn.admin);
				yield localStorage.setItem('id_token', dataReturn.token);
				yield localStorage.setItem('user_id', dataReturn.admin.id);
				yield localStorage.setItem('user_name', dataReturn.admin.username);
				// yield localStorage.setItem('type', dataReturn.admin.type);
				yield localStorage.setItem('role_detail', JSON.stringify(dataReturn.admin.roles));

				yield put({
					type: actions.LOGIN_SUCCESS,
					token: dataReturn.token,
					userId: dataReturn.admin.id,
					role_detail: dataReturn.admin.roles,
					user_name: dataReturn.admin.username
				});
			} else {
				notification('error', 'Failed to login, please check your information again.', '');
			}
		} catch (error) {
			notification('error', 'Failed to login, please check your information again1.', '');
		}
	});
}

export function* loginError() {
	yield takeEvery(actions.LOGIN_ERROR, function*() {});
}

export function* logout() {
	yield takeEvery(actions.LOGOUT, function*() {
		// debugger;
		clearAllStorage();
		yield localStorage.clear();
	});
}
export function* forget() {
	yield takeEvery(actions.FORGET_PASS, function*(data) {
		console.log(data);
		var dataReturn = {};
		try {
			dataReturn = yield callAPI('v1/forgotPassword', 'POST', {
				email: data.data.email,
				username: data.data.username,
				platform: 'web'
			});
			if (dataReturn.success === true) {
				yield put({
					type: actions.FORGET_PASS_SUCCESS,
					statusForgot: true
				});
				notification('success', 'Success', '');
			} else {
				yield put({
					type: actions.FORGET_PASS_SUCCESS,
					statusForgot: false
				});
				notification('error', 'Failed to forgot, please check your information again.', '');
			}
		} catch (error) {
			notification('error', 'Failed to forgotaa, please check your information again1.', '');
		}
	});
}
export function* confirmPass() {
	yield takeEvery(actions.CONFIRM_PASS, function*(data) {
		var dataReturn = {};
		try {
			dataReturn = yield callAPI('v1/confirmPassword', 'POST', {
				confirmCode: data.data.confirmCode,
				platform: 'web',
				password: data.data.password,
				confirmPassword: data.data.confirmPassword
			});
			if (dataReturn.success === true) {
				notification('success', 'Password successfully recovered', '');
			} else {
				notification('error', 'Failed to login, please check your information again.', '');
			}
		} catch (error) {
			notification('error', 'Failed to login, please check your information again1.', '');
		}
	});
}
export function* checkAuthorization() {
	yield takeEvery(actions.CHECK_AUTHORIZATION, function*() {
		const token = getToken().get('idToken');
		if (token) {
			yield put({
				type: actions.LOGIN_SUCCESS,
				token,
				profile: 'Profile'
			});
		}
	});
}
export default function* rootSaga() {
	yield all([
		fork(checkAuthorization),
		fork(loginRequest),
		fork(loginError),
		fork(logout),
		fork(forget),
		fork(confirmPass)
	]);
}
