import { all, takeEvery, put } from "redux-saga/effects";
import actions from "./actions";
import notification from "../../../components/notification";
import { callAPI } from "../../../helpers/api";

function* loadData({ payload }) {
  try {
    let slides = yield callAPI("v1/admin/slide/getAll", "POST", {
      name: payload.data.name,
      limit: payload.data.limit,
      page: payload.data.page
    });
    if (slides !== null && slides.success === true) {
      let result = {
        data: slides.data
      };
      yield put(actions.loadDataSuccess(result));
    }
  } catch (error) {
    yield put({
      type: actions.SAVE_INTO_SUCCESS
    });
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
        data_output = yield callAPI("v1/admin/slide", "POST", {
          name: data.name,
          link: data.link,
          order: data.order,
          type: data.type,
          image: data.image,
          status: data.status
        });
        break;
      case "delete":
        data_output = yield callAPI("v1/admin/slide/" + data.id, "DELETE");
        break;
      case "update":
        let output = {
          name: data.name,
          link: data.link,
          order: data.order,
          type: data.type,
          status: data.status
        };
        if (data.image !== "") {
          output["image"] = data.image;
        }

        data_output = yield callAPI("v1/admin/slide/" + data.id, "PUT", output);
        break;
      default:
        break;
    }
    //reload list
    yield put({
      type: actions.SAVE_INTO_SUCCESS
    });
    if (data_output !== null && data_output.success === true) {
      notification("success", text, "");
    } else notification("error", data_output.error, "");
  } catch (error) {
    yield put({
      type: actions.SAVE_INTO_SUCCESS
    });
    notification("error", "Please try again!", "");
  }
}

export default function* rootSaga() {
  yield all([
    takeEvery(actions.LOAD_DATA, loadData),
    takeEvery(actions.SAVE_INTO, actionFrom)
  ]);
}
