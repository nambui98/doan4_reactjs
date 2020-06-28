import { all, takeEvery, put } from "redux-saga/effects";
import actions from "./actions";
import notification from "../../../components/notification";
import { callAPI } from "../../../helpers/api";
function* loadData({ payload }) {
  try {
      let vData = yield callAPI("v1/incident/getAll", "POST", {
        startDate:payload.data.StartDate,
        endDate:payload.data.EndDate,
        incident_type_id: payload.data.incident_type_id,
        limit: payload.data.limit,
        page: payload.data.page,
        isAdmin:localStorage.getItem("type"),
        isPrint:payload.data.isPrint,
      });
      if (vData.success === true) {
        let incidentDataInit= yield callAPI("v1/incident/getDataInit", "GET");
        let result = {
          data:vData.data,
          isPrint:payload.data.isPrint,
          incidentDataInit:incidentDataInit.data,
        };
        yield put(actions.loadDataSuccess(result));
      }
  } catch (error) {
    yield put(actions.loadDataError(error));
  }
}

function* actionForm({ payload }) {
  const { data, actionName } = payload;
  console.log(data, actionName)
  try {
    let data_output = {};
    let text = "Success";

    switch (actionName) {
      case "changeStatus":
        data_output = yield callAPI("v1/admin/incident/changeStatus/"+data._id, "PUT", {status:data.status});
        break;
      case "insert":
        data_output = yield callAPI("v1/incident", "POST", {
          is_any_injury:data.is_any_injury,
          is_SAS_report:data.is_SAS_report,
          is_image:data.is_image,
          reported_on:data.reported_on,
          incident_date:data.incident_date,
          images:data.images,
          description:data.description,
          incident_type_id:data.incident_type_id,
          incident_damages_id:data.incident_damages_id,
          status:2
        });
        break;
      case "delete":
        data_output = yield callAPI("v1/incident/" + data.id, "DELETE");
        break;
      case "updateStatusRead":
        data_output = yield callAPI("v1/incident/" + data.id, "PUT", {
          status:1
        });
        break;
      case "update":
        data_output = yield callAPI("v1/incident/" + data.id, "PUT", {
          is_any_injury:data.is_any_injury,
          is_SAS_report:data.is_SAS_report,
          is_image:data.is_image,
          reported_on:data.reported_on,
          incident_date:data.incident_date,
          images:data.images,
          description:data.description,
          incident_type_id:data.incident_type_id,
          incident_severity_id:data.incident_severity_id,
          incident_damages_id:data.incident_damages_id
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

function* updateStatusRead({ payload }) {
  yield callAPI("v1/incident/" + payload, "PUT", {
    status:1
  });
}

export default function* rootSaga() {
  yield all([
    takeEvery(actions.LOAD_FORM, loadData),
    takeEvery(actions.SAVE_INTO, actionForm),
    takeEvery(actions.UPDATE_STATUS_READ, updateStatusRead)
  ]);
}
