import { all, takeEvery, put } from 'redux-saga/effects';
import actions from './actions';
import notification from '../../../components/notification';
import { callAPI } from '../../../helpers/api';

function* loadData({ payload }) {
	try {
		let vData = yield callAPI('v1/user_announcement/getAll', 'POST', {
			name: payload.data.name,
			startDate: payload.data.StartDate,
			endDate: payload.data.EndDate,
			announcement_type_id: payload.data.announcement_type_id,
			limit: payload.data.limit,
			page: payload.data.page,
			isAdmin: localStorage.getItem('type'),
			isPrint: payload.data.isPrint
		});

		if (vData.success === true) {
			let announcementType = yield callAPI('v1/announcementType', 'GET');
			let result = {
				data: vData.data,
				announcementType: announcementType.data,
				isPrint: payload.data.isPrint
			};
			yield put(actions.loadDataSuccess(result));
		}
	} catch (error) {
		yield put(actions.loadDataError(error));
	}
}

function* changeAnnouncementType({ payload }) {
	const { data } = payload;
	try {
		let text = 'Success';
		let data_output = yield callAPI('v1/user_announcement/' + data.id, 'PUT', data);
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
	yield all([ takeEvery(actions.LOAD_FORM, loadData), takeEvery(actions.SAVE_INTO, changeAnnouncementType) ]);
}
