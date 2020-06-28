import { all, takeEvery, put } from "redux-saga/effects";
import actions from "./actions";
import { callAPI } from "../../../helpers/api";
function* loadData({ payload }) {
  try {
    let vData = yield callAPI("v1/dashboard", "POST", {
      startDate: payload.data.startDate,
      endDate: payload.data.endDate,
      isAdmin: localStorage.getItem("type")
    });

    if (vData.success === true) {
      yield put(actions.loadDataSuccess(vData.data));
    }
  } catch (error) {
    yield put(actions.loadDataError(error));
  }
}

export default function* rootSaga() {
  yield all([takeEvery(actions.LOAD_FORM, loadData)]);
}
