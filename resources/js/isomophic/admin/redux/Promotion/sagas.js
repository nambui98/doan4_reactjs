import { all, takeEvery, put } from 'redux-saga/effects';
import actions from './actions';
import notification from '../../../components/notification';
import { callAPI } from '../../../helpers/api';
import { dataConfig } from '../../../settings/index';

function* loadData({ payload }) {
	try {
		let vData = yield callAPI('v1/promotion/getAll', 'POST', {
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
		let text = 'Success';

		switch (actionName) {
			case 'changeStatus':
				data_output = yield callAPI('v1/calendarType/changeStatus/' + data._id, 'PUT', { status: data.status });
				break;
			case 'insert':
				console.log(data);
				data_output = yield callAPI('v1/promotion', 'POST', {
					title: data.title,
					datePromotion: data.datePromotion
				});
				break;
			case 'delete':
				data_output = yield callAPI('v1/promotion/' + data.id, 'DELETE');
				break;
			case 'update':
				data_output = yield callAPI('v1/promotion/' + data.id, 'PUT', {
					title: data.title,
					type: data.type,
					numbersale: data.numbersale
				});
				break;
			default:
				break;
		}
		if (data_output != null && data_output.success === true) {
			yield put({
				type: actions.SAVE_INTO_SUCCESS
			});
			notification('success', text, '');
		} else notification('error', data_output.error, '');
	} catch (error) {
		yield put(actions.saveIntoError(error));
	}
}

export default function* rootSaga() {
	yield all([ takeEvery(actions.LOAD_FORM, loadData), takeEvery(actions.SAVE_INTO, actionForm) ]);
}
