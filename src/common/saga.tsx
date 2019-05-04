import { put, takeEvery } from 'redux-saga/effects'
import api from '@/api'
import { actionCreators } from './store'

function* loginSaga(value) {
  try {
    value = value.value
    const res = yield api.common.login(value.username, value.password)
    res.username = value.username
    const action = actionCreators.login(res)
    yield put(action)
  } catch (error) {
    console.log(error)
  }
}

function* watchLoginSaga() {
  yield takeEvery('LOGIN_ACTION', loginSaga)
}

export {
  watchLoginSaga
}