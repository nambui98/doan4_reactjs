import { all, takeEvery, put } from 'redux-saga/effects';
import actions from './actions';
import { callAPI } from '../../../helpers/api';
function* loadData({ payload }) {
	try {
		let vData = yield callAPI('v1/profit', 'POST', {
			type: payload.data.type,
			year: payload.data.year
		});
		console.log('vdata', vData);
		if (vData.success === true) {
			let cartSuccess = yield callAPI('v1/getCountCart', 'POST', {
				type: payload.data.type,
				status: 3,
				year: payload.data.year
			});
			let cartDelivery = yield callAPI('v1/getCountCart', 'POST', {
				type: payload.data.type,
				year: payload.data.year,
				status: 2
			});
			let cartCancel = yield callAPI('v1/getCountCart', 'POST', {
				type: payload.data.type,
				year: payload.data.year,
				status: 4
			});
			let totalCart = yield callAPI('v1/getTotalCart', 'POST', {
				type: payload.data.type,
				year: payload.data.year
			});
			let lostMoney = yield callAPI('v1/getLostMoney', 'POST', {
				type: payload.data.type
			});
			let soldMoney = yield callAPI('v1/getSoldMoney', 'POST', {
				type: payload.data.type,
				year: payload.data.year
			});
			let result = {
				dataGraph: vData.data,
				cartSuccess: cartSuccess.data,
				cartDelivery: cartDelivery.data,
				cartCancel: cartCancel.data,
				totalCart: totalCart.data,
				lostMoney: lostMoney.data,
				soldMoney: soldMoney.data
			};
			yield put(actions.loadDataSuccess(result));
		}
	} catch (error) {
		yield put(actions.loadDataError(error));
	}
}

export default function* rootSaga() {
	yield all([ takeEvery(actions.LOAD_FORM, loadData) ]);
}
