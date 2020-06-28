import { all, takeEvery, put, fork } from "redux-saga/effects";
import actions from "./actions";
import { callAPI } from "../../../helpers/api";
import notification from '../../../components/notification';
export function* requestChangePassword() {
  yield takeEvery(actions.CHANGE_PASSWORD, function* (action) {
    var dataReturn = {};
    try {
    
      dataReturn = yield callAPI("v1/admin/changePassword", "POST", {
        oldPassword: action.profile.oldpass,
        newPassword: action.profile.newpass
      });
      if (dataReturn.success === true) {
        notification("success", "Success", "");
        yield put({ type: actions.CHANGE_SUCCESS });
      } else {
        notification("error", dataReturn.error, "");
        //  yield put({ type: actions.CHANGE_ERROR });
      }
    } catch (error) {
      yield put({ type: actions.CHANGE_ERROR });
      notification("error", "Please try again!", "");
    }
  });
}
export function* fetchUser() {
  yield takeEvery(actions.GET_USER, function* (obj) {
    var dataReturn = {};
    try {
      dataReturn = yield callAPI("v1/admin", "get");
      if (dataReturn.success === true) {
        let vData = yield callAPI("v1/admin/getAll", "POST", {
          name: "",
          limit: 50,
          page: 1
        });
        yield put({
          type: actions.GET_USER_SUCCESS,
          currentUser: dataReturn.admin,
          dataUsers:vData.data.rows
        });
      } else {
        yield put({ type: actions.GET_USER_ERROR });
      }
    } catch (error) {
      yield put({ type: actions.GET_USER_ERROR });
    }
  });
}

export function* cancelEditProfile() {
  yield takeEvery(actions.CANCEL_EDIT_PROFILE, function* (obj) {
    yield put({
      type: actions.GET_USER,
      userId: obj.userId,
      token: obj.token
    });
  });
}

export function* submitEditProfile() {
  yield takeEvery(actions.SUBMIT_EDIT_PROFILE, function* (obj) {

    try {
      let dataReturn = yield callAPI("v1/admin/"+obj.userId, "put", obj.profile);

      if (dataReturn.success === true) {
        yield put({
          type: actions.GET_USER,
          userId: obj.userId,
          token: obj.token
        });
      } else {
        notification("error", dataReturn.error)
      }

    } catch (error) {
      yield put({
        type: actions.GET_USER,
        userId: obj.userId,
        token: obj.token
      });
    }
  });
}
export default function* rootSaga() {
  yield all([
    fork(requestChangePassword),
    fork(submitEditProfile),
    fork(cancelEditProfile),
    fork(fetchUser)
  ]);
}
