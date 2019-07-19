import { all, takeEvery, call, put, fork } from 'redux-saga/effects';
import { push } from 'connected-react-router';
import axios from 'axios';

import actions from './actions';

const API_URI = 'https://dev.requiemapp.com/public/memorial/random';

export function* getData() {
  yield takeEvery(actions.GET_DATA_REQUEST, function*({ payload }) {
    const params = {
      url: API_URI,
      method: 'GET',
    };

    try {
      const response = yield call(axios, params);
      const { data } = response.data;

      yield put(actions.getDataSuccess(data));
    } catch (error) {
      yield put(actions.getDataFailed(error));
    }
  });
}

export default function* rootSaga() {
  yield all([fork(getData)]);
}
