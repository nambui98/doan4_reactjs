import { all, takeEvery, put } from "redux-saga/effects";
import actions from "./actions";
import notification from "../../../components/notification";
import { callAPI } from "../../../helpers/api";
import { dataConfig } from '../../../settings/index';

function* loadData({ payload }) {
  try {
    if (payload.data.loadData === "User") {
      let vData = yield callAPI("v1/user/getAll", "POST", {
        name: payload.data.name,
        phone:"",
        limit: payload.data.limit,
        page: payload.data.page
      });
      if (vData.success === true) {
        let result = vData.data;
        yield put(actions.loadDataSuccess(result));
      }
    }
    // if (payload.data.loadData === "Charge") {
    //   let result = yield callAPI("v1/user-game/getChargeHistory", "POST", {
    //     type: "displayname",
    //     name: payload.data.name,
    //     limit: payload.data.limit,
    //     page: payload.data.page
    //   });
    //   if (result.success === true) {
    //     let output = result.data;
    //     output.modalType = "viewChargeHistory"
    //     yield put({ type: actions.TOGGLE_HANDLE_MODAL_SUCCESS, payload: output });
    //   }
    // }
    // if (payload.data.loadData === "CoidUserd") {
    //   let result = yield callAPI("v1/user-game/getUsedHistory", "POST", {
    //     type: "displayname",
    //     name: payload.data.name,
    //     limit: payload.data.limit,
    //     page: payload.data.page
    //   });
    //   if (result.success === true) {
    //     let output = result.data;
    //     output.modalType = "viewCoinUsedHistory";
    //     yield put({ type: actions.TOGGLE_HANDLE_MODAL_SUCCESS, payload: output });
    //   }
    // }

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
        data_output = yield callAPI("v1/user/changeStatus/"+data._id, "PUT", {status:data.status});
        break;
      case "insert":
        // data.phone = "+84" + data.phone.slice(4, data.phone.length);
        data_output = yield callAPI("v1/user", "POST", data);
        break;
      case "edit":
        data_output = yield callAPI("v1/user/" + data._id, "PUT",{
          username:data.username,
          phone:data.phone,
          full_name:data.full_name,
          birthday:data.birthday,
          gender:data.gender,
          address:data.address,
          avata:data.avata
        });
        break;
      case "delete":
        data_output = yield callAPI("v1/tarots/" + data._id, "DELETE");
        break;
      case "editPass":
        data_output = yield callAPI("v1/user/changePassword/" + data._id, "PUT",{
          newpassword:data.newpass
        });
        break;
      // case "changeStatus":
      //   data_output = yield callAPI(
      //     "v1/user/changeStatus/"+data._id,
      //     "PUT",
      //     {
      //       type: "displayname",
      //       name: payload.data.displayname,
      //       status: data.status === 1 ? "release" : "block",
      //       reason: payload.data.reason,
      //       admin: localStorage.getItem("user_name"),
      //     }
      //   );
      //   break;
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
  let userData = {};
  if (modalType === "view" || modalType === "changeStatus" ||modalType === "edit" ) {
    let result = yield callAPI("v1/user/" + data._id, "GET");
    if (result.success === true) {
      userData.data = result.data;
      yield put({ type: actions.TOGGLE_HANDLE_MODAL_SUCCESS, payload: userData });
    }
  }
  else if (modalType === "viewBlockHistory") {
    let result = yield callAPI("v1/user-game/getChangeStatusHistory", "POST", {
      type: "displayname",
      name: payload.data.displayname
    });
    if (result.success === true) {
      let output = {}
      output.lists = result.data;
      output.modalType = modalType;
      yield put({ type: actions.TOGGLE_HANDLE_MODAL_SUCCESS, payload: output });
    }
  }
  else if (modalType === "viewChargeHistory") {
    let result = yield callAPI("v1/user-game/getChargeHistory", "POST", {
      type: "displayname",
      name: payload.data.displayname,
      limit: dataConfig.pageLimit,
      page: 1
    });
    if (result.success === true) {
      let output = result.data;
      output.modalType = modalType;
      yield put({ type: actions.TOGGLE_HANDLE_MODAL_SUCCESS, payload: output });
    }
  }
  else if (modalType === "viewCoinUsedHistory") {
    let result = yield callAPI("v1/user-game/getUsedHistory", "POST", {
      type: "displayname",
      name: payload.data.displayname,
      limit: dataConfig.pageLimit,
      page: 1
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
