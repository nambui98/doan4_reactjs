import { all, takeEvery, put } from "redux-saga/effects";
import actions from "./actions";
import notification from "../../../components/notification";
import { callAPI } from "../../../helpers/api";

function* loadData({ payload }) {
  try {
      let vData = yield callAPI("v1/checklist_daily/getAllSummary", "POST", {
        startDate:payload.data.StartDate?payload.data.StartDate:null,
        endDate:payload.data.EndDate?payload.data.EndDate:null,
        name:"",
        limit: payload.data.limit,
        page: payload.data.page,
        isAdmin:localStorage.getItem("type"),
        isPrint:payload.data.isPrint,
      });
      
      if (vData.success === true) {
        let result = {
          data:vData.data,
          isPrint:payload.data.isPrint,
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
      case "changeStatus":
        data_output = yield callAPI("v1/annoucement/changeStatus/"+data._id, "PUT", {status:data.status});
        break;
      case "insert":
        data_output = yield callAPI("v1/announcement", "POST", {
          title:data.title,
          announcement_date:data.announced_date,
          announcement_type_id:data.announcement_type_id,
          description:data.description,
          images:data.images,
          acknowledgement:data.acknowledgement,
          status:data.status
        });
        break;
      case "delete":
        data_output = yield callAPI("v1/announcement/" + data.id, "DELETE");
        break;
      case "update":
        data_output = yield callAPI("v1/announcement/" + data.id, "PUT", {
          title:data.title,
          announcement_date:data.announced_date,
          announcement_type_id:data.announcement_type_id,
          description:data.description,
          images:data.images,
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
function* toggleModal({ payload, modalType }) {
  const { data } = payload;
  let vData = {};
  if (modalType === "view") {
    let result = yield callAPI("v1/checklist_daily/getAllByDay", "POST",{
      name:"",
	    page:1,
    	limit:15,
      isAdmin:true,
      check_date:data.check_date
    });
    if (result.success === true) {
      vData.data = result.data.rows;
      yield put({ type: actions.TOGGLE_HANDLE_MODAL_SUCCESS, payload: vData });
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
