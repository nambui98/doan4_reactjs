import { all, takeEvery, put } from 'redux-saga/effects';
import actions from './actions';
import notification from '../../../components/notification';
import { callAPI } from '../../../helpers/api';

function* loadData({ payload }) {
	try {
		let news = yield callAPI('v1/news/getAll', 'POST', {
			name: payload.data.name,
			limit: payload.data.limit,
			page: payload.data.page
		});
		console.log(news);
		if (news !== null && news.success === true) {
			let news_types = yield callAPI('v1/categoriesBig', 'GET', null);
			if (news_types !== null && news_types.success === true) {
				let result = {
					data: news,
					newsType: news_types.data
				};
				console.log(result);

				yield put(actions.loadDataSuccess(result));
			}
		}
	} catch (error) {
		notification('error', 'Please try again!', '');
	}
}

function* actionFrom({ payload }) {
	const { data, actionName } = payload;
	try {
		let data_output = {};
		let text = 'Success';
		switch (actionName) {
			case 'insert':
				data_output = yield callAPI('v1/news', 'POST', {
					title: data.title,
					idcategory: data.idcategory,
					intro: data.intro,
					image: data.image,
					content: data.content,
					status: data.status
				});
				break;
			case 'delete':
				data_output = yield callAPI('v1/news/' + data.id, 'DELETE');
				break;
			case 'update':
				let output = {
					title: data.title,
					idcategory: data.idcategory,
					intro: data.intro,
					image: data.image,
					content: data.content,
					status: data.status
				};

				data_output = yield callAPI('v1/news/' + data.id, 'PUT', output);
				break;
			default:
				break;
		}
		//reload list
		if (data_output !== null && data_output.success === true) {
			yield put({
				type: actions.SAVE_INTO_SUCCESS
			});
			notification('success', text, '');
		} else notification('error', data_output.error, '');
	} catch (error) {
		notification('error', 'Please try again!', '');
	}
}

export default function* rootSaga() {
	yield all([ takeEvery(actions.LOAD_DATA, loadData), takeEvery(actions.SAVE_INTO, actionFrom) ]);
}
