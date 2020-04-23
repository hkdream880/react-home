import { all, takeEvery, put, call, fork, delay, select } from 'redux-saga/effects'
import { LOG_IN_REQUEST, LOG_IN_FAILURE, LOG_IN_SUCCESS } from '../reducers/user'

function* loginRequest() {
  
}

const dummyLoginUserInfo = {
  id: 'TestUserId',
  nick: 'TestUserNick'
}

function* login(action) {
  console.log(action)
  try {
    yield delay(1000)
    yield call(loginRequest);
    yield put({
      type: LOG_IN_SUCCESS,
      //data: action.data
      data: dummyLoginUserInfo
    })
  } catch (error) {
    console.log(error)
    yield put({
      type: LOG_IN_FAILURE
    })
  }
}

function* watchLogin() {
  yield takeEvery(LOG_IN_REQUEST, login)
  //yield takeLatest(LOG_IN_REQUEST, login)
}

export default function* () {
  yield all([
    fork(watchLogin)  //watchLogin(), call 도 상관은 없지만 순서 필요없으니 비동기
  ])
}

//fork : 비동기 호출
//call : 동기 호출