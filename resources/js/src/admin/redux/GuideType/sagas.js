import { all, takeEvery, put } from 'redux-saga/effects';
import actions from './actions';
import notification from '../../../components/notification';
import { callAPI } from '../../../helpers/api';

function* loadData({ payload }) {
    try {
        let vData = yield (callAPI("v1/guide-types/getAll", "POST", {
            name: payload.data.name,
            limit: payload.data.limit,
            page: payload.data.page
        }));
        if (vData !== null && vData.success === true) {
            yield put(actions.loadDataSuccess(vData.data));
        }
    } catch (error) {
        yield put(actions.loadDataError(error));
    }
}

function* actionForm({ payload }) {
    const { data, actionName } = payload;
    try {
        let data_output = {};
        let text = "Success";
        switch (actionName) {
            case 'insert':
                data_output = yield callAPI("v1/guide-types", "POST", data);
                break;
            case 'delete':
                data_output = yield callAPI("v1/guide-types/" + data.id, "DELETE");
                break;
            case 'update':
                data_output = yield callAPI("v1/guide-types/" + data.id, "PUT", data);
                break;
            default:
                break;
        }
        if (data_output !== null && data_output.success === true) {
            yield put({
                type: actions.SAVE_INTO_SUCCESS,
            })
            notification('success', text, '');
        }
        else
            notification('error', data_output.error, '');


    } catch (error) {
        yield put(actions.saveIntoError(error));
    }
}


export default function* rootSaga() {
    yield all([
        takeEvery(actions.LOAD_FORM, loadData),
        takeEvery(actions.SAVE_INTO, actionForm),
    ]);
}
