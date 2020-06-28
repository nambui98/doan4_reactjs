import { all, takeEvery, put } from "redux-saga/effects";
import actions from "./actions";
import notification from "../../../components/notification";
import { callAPI } from "../../../helpers/api";

function* loadData({ payload }) {
  try {
   
      let vData = yield callAPI("v1/jobSite/getAll", "POST", {
        name: payload.data.name,
        limit: payload.data.limit,
        page: payload.data.page
      });
      if (vData.success === true) {
        let result = vData.data;
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
    let text = "Success";

    switch (actionName) {
      case "changeStatus":
        data_output = yield callAPI("v1/calendarType/changeStatus/"+data._id, "PUT", {status:data.status});
        break;
      case "insert":
        data_output = yield callAPI("v1/jobSite", "POST", {
          name:data.name,
          order:data.order,
          status:data.status
        });
        break;
      case "delete":
        data_output = yield callAPI("v1/jobSite/" + data.id, "DELETE");
        break;
      case "update":
        data_output = yield callAPI("v1/jobSite/" + data.id, "PUT", {
          name:data.name,
          order:data.order,
          status:data.status
        });
        break;
      default:
        break;
    }
    if (data_output != null && data_output.success === true) {
      yield put({
        type: actions.SAVE_INTO_SUCCESS
      });
      notification("success", text, "");
    } else notification("error", data_output.error, "");
  } catch (error) {
    yield put(actions.saveIntoError(error));
  }
}



export default function* rootSaga() {
  yield all([
    takeEvery(actions.LOAD_FORM, loadData),
    takeEvery(actions.SAVE_INTO, actionForm)
  ]);
}
