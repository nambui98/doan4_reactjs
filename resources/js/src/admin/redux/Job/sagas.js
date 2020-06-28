import { all, takeEvery, put } from "redux-saga/effects";
import actions from "./actions";
import notification from "../../../components/notification";
import { callAPI } from "../../../helpers/api";

function* loadData({ payload }) {
  try {
   
      let vData = yield callAPI("v1/job/getAll", "POST", {
        job_type_id: payload.data.job_type_id,
        limit: payload.data.limit,
        page: payload.data.page,
        isAdmin:localStorage.getItem("type")
      });
      if (vData.success === true) {
        let jobSite= yield callAPI("v1/jobSite", "GET");
        let jobType= yield callAPI("v1/jobType", "GET");
        let result = {
          data:vData.data,
          jobSite:jobSite.data,
          jobType:jobType.data
        };
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
        data_output = yield callAPI("v1/job", "POST", {
          is_job_done:data.is_job_done,
          is_job_briefed:data.is_job_briefed,
          hazard:data.hazard,
          ra:data.ra,
          is_rish_mitigate:data.is_rish_mitigate,
          job_date:data.job_date,
          description:data.description,
          images:data.images,
          job_site_id:data.job_site_id,
          job_type_id:data.job_type_id,
          status:data.status
        });
        break;
      case "delete":
        data_output = yield callAPI("v1/job/" + data.id, "DELETE");
        break;
      case "update":
        data_output = yield callAPI("v1/job/" + data.id, "PUT", {
          is_job_done:data.is_job_done,
          is_job_briefed:data.is_job_briefed,
          hazard:data.hazard,
          ra:data.ra,
          is_rish_mitigate:data.is_rish_mitigate,
          job_date:data.job_date,
          description:data.description,
          images:data.images,
          job_site_id:data.job_site_id,
          job_type_id:data.job_type_id,
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
