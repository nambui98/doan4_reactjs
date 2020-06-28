import { all, takeEvery, put } from "redux-saga/effects";
import actions from "./actions";
import notification from "../../../components/notification";
import { callAPI } from "../../../helpers/api";

function* loadData({ payload }) {
  try {
    let vData = yield callAPI("v1/admin/role/getAll", "POST", {
      name: payload.data.name,
      limit: payload.data.limit,
      page: payload.data.page
    });
    if (vData != null && vData.success === true) {
      yield put(actions.loadDataSuccess(vData));
    }
  } catch (error) {
    notification("error", "Please try again!", "");
  }
}

function* actionFrom({ payload }) {
  const { data, actionName } = payload;
  try {
    let data_output = {};
    let text = "Success";
    switch (actionName) {
      case "insert":
      
        data_output = yield callAPI("v1/admin/role", "POST", {
          name: data.name,
          address: data.address
        });
        break;
      case "delete":
        data_output = yield callAPI("v1/admin/role/" + data.id, "DELETE");
        break;
      case "update":
        data_output = yield callAPI("v1/admin/role/" + data.id, "PUT", {
          name: data.name,
          address: data.address
        });
        break;
      default:
        break;
    }
    //reload list
    // const state = yield select();
    // const action = yield take();

    if (data_output !== null && data_output.success === true) {
      notification("success", text, "");
      yield put({
        type: actions.SAVE_INTO_SUCCESS
      });
    } else {
      notification("error", data_output.error, "");
    } 
  } catch (error) {
    notification("error", "Please try again!", "");
  }
}

export default function* rootSaga() {
  yield all([
    takeEvery(actions.LOAD_DATA, loadData),
    takeEvery(actions.SAVE_INTO, actionFrom)
  ]);
}
