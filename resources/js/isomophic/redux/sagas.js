import { all } from 'redux-saga/effects';
import authSagas from './auth/saga';
import hrmSagas from '../admin/redux/sagas';

export default function* rootSaga(getState) {
  yield all([
    authSagas(),
    hrmSagas(),
  ]);
}
