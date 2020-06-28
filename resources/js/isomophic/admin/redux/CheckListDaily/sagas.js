import { all, takeEvery, put } from "redux-saga/effects";
import actions from "./actions";
import notification from "../../../components/notification";
import { callAPI } from "../../../helpers/api";
function* loadData({ payload }) {
  try {
    let vData = yield callAPI("v1/checklist_daily/getAll", "POST", {
      name: payload.data.name,
      limit: payload.data.limit,
      page: payload.data.page,
      isAdmin:localStorage.getItem("type")
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
      case "insert":
        data_output = yield callAPI(
          "v1/user_checklist_daily/createMutil",
          "POST",
          {
            listCheckList: data.listCheckList,
            check_date: data.check_date,
            checklist_daily_id: data.checklist_daily_id,
            user_id:localStorage.getItem("user_id")
          }
        );
        break;
      case "delete":
        data_output = yield callAPI("v1/checklist_daily/" + data.id, "DELETE");
        break;
      case "update":
        const dataUpdate={
          listCheckList: data.listCheckList,
          check_date: data.check_date,
          checklist_daily_id: data.id,
          user_id:data.admin.id
        }
        data_output = yield callAPI(
          "v1/user_checklist_daily/createMutil",
          "POST",
          
            dataUpdate
          
        );
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

function* toggleModal({ payload, modalType }) {
  if (modalType === "edit" || modalType === "insert") {
    let result = yield callAPI("v1/checklist/getAll", "POST", {
      page: 1,
      limit: 15
    });
    if (result.success === true) {
      let output = result.data;
      output.modalType = modalType;
      yield put({ type: actions.TOGGLE_HANDLE_MODAL_SUCCESS, payload: output });
    }
  }
}
export default function* rootSaga() {
  yield all([
    takeEvery(actions.LOAD_FORM, loadData),
    takeEvery(actions.SAVE_INTO, actionForm),
    takeEvery(actions.TOGGLE_HANDLE_MODAL, toggleModal)
  ]);
}
