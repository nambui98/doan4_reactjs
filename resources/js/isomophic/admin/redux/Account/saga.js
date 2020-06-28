import { all, takeEvery, put } from 'redux-saga/effects';
import actions from './actions';
import notification from '../../../components/notification';
import { callAPI } from '../../../helpers/api';

function* loadData({ payload }) {
	try {
		let vData = yield callAPI('v1/admin/getAll', 'POST', {
			name: payload.data.name,
			limit: payload.data.limit,
			page: payload.data.page
		});
		if (vData.success === true) {
			let result = vData;
			yield put(actions.loadDataSuccess(result));
		}
	} catch (error) {
		yield put(actions.loadDataError(error));
	}
}

function* actionForm({ payload }) {
	const { data, actionName } = payload;
	try {
		let data_output = {};
		let checkThisAccount = [];
		let text = 'Success';
		console.log(actionName);
		switch (actionName) {
			case 'insert':
				data_output = yield callAPI('v1/admin', 'POST', {
					fullname: data.fullname,
					email: data.email,
					phone: data.phone,
					username: data.username,
					password: data.password,
					avatar: data.avatar,
					type: data.type
					// 'avatar': data.avatar,
				});
				break;
			case 'edit':
				data_output = yield callAPI('v1/admin/' + data.id, 'PUT', {
					fullname: data.fullname,
					email: data.email,
					phone: data.phone,
					avatar: data.avatar,
					status: data.status ? data.status : 1
				});
				break;
			case 'editStatus':
				data_output = yield callAPI('v1/admin/changeStatus/' + data.id, 'PUT', {
					status: data.status
				});
				break;
			case 'resetPassword':
				data_output = yield callAPI('v1/admin/resetPassword/' + data.id, 'PUT', {
					password: data.password
				});
				break;
			case 'update':
				//  data_output = yield callAPI("api/user/" + data.userId, "PUT", {});
				break;
			case 'roles':
				data_output = yield callAPI('v1/admin/changeRoles/' + data.id, 'PUT', {
					roles: data.RolesAfterChange
				});
				if (data_output != null && data_output.success === true) {
					if (data.id === parseInt(localStorage.getItem('user_id'))) {
						let roleStore = [];
						data.roles.forEach(function(value, index) {
							let obj = {};
							obj['id'] = value.id;
							obj['name'] = value.name;
							obj['address'] = value.address;
							roleStore.push(obj);
						});

						// console.log(roleStore);
						// debugger;
						yield localStorage.setItem('role_detail', JSON.stringify(roleStore));
					}
				}
				break;
			default:
				break;
		}
		if (data_output != null && data_output.success === true) {
			if (actionName === 'roles') {
				if (checkThisAccount.length > 0) {
					let roleStore = [];
					data_output.data.forEach(function(value, index) {
						value.roles.forEach(function(value1, index1) {
							let obj = {};
							obj['id'] = value1.id;
							obj['name'] = value1.name;
							obj['address'] = value1.address;
							roleStore.push(obj);
						});
					});
					yield put({
						type: actions.SAVE_INTO_SUCCESS,
						payload: roleStore
					});
				} else {
					yield put({
						type: actions.SAVE_INTO_SUCCESS
					});
				}
			} else {
				yield put({
					type: actions.SAVE_INTO_SUCCESS
				});
			}
			notification('success', text, '');
		} else notification('error', data_output.error, '');
	} catch (error) {
		yield put(actions.saveIntoError(error));
	}
}

function* toggleModal({ payload, modalType }) {
	try {
		let vData = {};
		if (modalType === 'roles') {
			let result = yield callAPI('v1/role', 'GET', null);
			if (result !== null && result.success === true) {
				result.data.forEach(function(item) {
					let check = false;
					if (payload.data.roles.length > 0) {
						payload.data.roles.forEach(function(detail) {
							if (detail.id === item.id) {
								check = true;
								item.checked = true;
							}
						});
					}
					if (!check) {
						item.checked = false;
					}
				});
				vData = {
					...vData,
					payload: payload.data,
					modalType: modalType,
					userRole: payload.data.roles,
					roles: result.data
				};
				yield put(actions.toggleModalSuccess(vData));
			}
		}
	} catch (err) {
		notification('error', 'There was an error, please try again', '');
	}
}

export default function* rootSaga() {
	yield all([
		takeEvery(actions.LOAD_FORM, loadData),
		takeEvery(actions.SAVE_INTO, actionForm),
		takeEvery(actions.TOGGLE_HANDLE_MODAL, toggleModal)
	]);
}
