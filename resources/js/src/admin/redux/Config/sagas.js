import { all, takeEvery, put, fork } from "redux-saga/effects";
import actions from "./actions";
import { callAPI } from "../../../helpers/api";
import notification from '../../../components/notification';
export function* getInfo() {
  yield takeEvery(actions.GET_INFO, function* (action) {
    try {
      var result = yield callAPI("v1/config", "GET");
      if (result.success === true) {
        yield put({ type: actions.GET_INFO_SUCCESS, payload: result.data });
      } else {
        notification("error", result.error, "");
        yield put({ type: actions.GET_INFO_ERROR });
      }
    } catch (error) {
      yield put({ type: actions.GET_INFO_ERROR });
      notification("error", "Please try again!", "");
    }
  });
}


export function* update() {
  yield takeEvery(actions.UPDATE, function* ({ payload }) {
    try {
      let result = yield callAPI("v1/config", "PUT", payload.data);
      if (result.success === true) {
        yield put({
          type: actions.GET_INFO,
        });
        notification("success", "Successful!")
      } else {
        notification("error", "Update failed!")
      }

    } catch (error) {
      yield put({
        type: actions.UPDATE_ERROR,
      });
    }
  });
}
export default function* rootSaga() {
  yield all([
    fork(getInfo),
    fork(update),
  ]);
}
