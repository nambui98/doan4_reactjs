import { all, takeEvery, put } from 'redux-saga/effects';
import actions from './actions';
import notification from '../../../components/notification';
import { callAPI } from '../../../helpers/api';
import { dataConfig } from '../../../settings/index';

function* loadData({ payload }) {
	try {
		let vData = yield callAPI('v1/billImport/getAll', 'POST', {
			name: payload.data.name,
			limit: payload.data.limit,
			page: payload.data.page
		});
		if (vData.success === true) {
			let categories = yield callAPI('v1/categoriesSmall', 'GET');

			let result = {
				data: vData,
				categories: categories.data
			};
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
				data_output = yield callAPI('v1/billImport', 'POST', {
					amount: 0,
					totalmoney: 0,
					idBill: data.idBill,
					images: data.images
				});
				break;
			case 'delete':
				data_output = yield callAPI('v1/billImport/' + data.id, 'DELETE');
				break;
			case 'update':
				data_output = yield callAPI('v1/billImport/' + data.id, 'PUT', {
					name: data.name,
					status: data.status,
					idparent: data.idparent,
					images: data.images,
					content: data.content,
					description: data.description
				});
				break;
			case 'addProduct':
				data_output = yield callAPI('v1/billImport/products', 'POST', {
					idcategories: data.idcategories,
					mass: data.mass,
					inputprice: data.inputprice,
					outputprice: data.outputprice,
					intomoney: data.intomoney,
					dateUse: data.dateUse,
					idbill_im: data.idbill_im
				});
				break;
			default:
				break;
		}
		console.log(data_output);
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
