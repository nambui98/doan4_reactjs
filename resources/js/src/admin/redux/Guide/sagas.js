import { all, takeEvery, put } from 'redux-saga/effects';
import actions from './actions';
import notification from '../../../components/notification';
import { callAPI } from '../../../helpers/api';

function* loadData({ payload }) {
    try {
        let vData = yield (callAPI("v1/guides/getAll", "POST", {
            name: payload.data.name,
            limit: payload.data.limit,
            page: payload.data.page
        }));
        if (vData !== null && vData.success === true) {
            let guide_types = yield (callAPI("v1/guide-types", "GET"));
            if (guide_types !== null && guide_types.success === true) {
                let result = {
                    data: vData.data,
                    guide_types: guide_types.data
                };
                yield put(actions.loadDataSuccess(result));
            }
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
                data_output = yield callAPI("v1/guides", "POST", data);
                break;
            case 'delete':
                data_output = yield callAPI("v1/guides/" + data.id, "DELETE");
                break;
            case 'update':
                data_output = yield callAPI("v1/guides/" + data.id, "PUT", data);
                break;
            case 'addContent':
                data_output = yield callAPI("v1/guide-contents", "POST", data);
                break;
            case 'editContent':
                data_output = yield callAPI("v1/guide-contents/" + data.id, "PUT", data);
                break;
            case 'deleteContent':
                data_output = yield callAPI("v1/guide-contents/" + data.id, "DELETE");
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
