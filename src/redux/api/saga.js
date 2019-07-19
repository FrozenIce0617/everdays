import { all, takeEvery, call, put, fork } from 'redux-saga/effects';
import { push } from 'connected-react-router';
import axios from 'axios';

import actions from './actions';

export function* getData() {
  yield takeEvery(actions.GET_DATA_REQUEST, function*({ payload }) {
    const { username } = payload;
    const params = {
      username,
    };

    try {
      yield call(httpApi.logOut, params);
      yield put(actions.logoutSuccess());
      yield put(push('/'));
    } catch (error) {
      yield put(actions.logoutFailed(error));
    }
  });
}

export default function* rootSaga() {
  yield all([fork(getData)]);
}
