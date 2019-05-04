import { call, put, takeEvery } from 'redux-saga/effects'
import api from '@/api'

const defaultState = {}

const constants = {
  OUT: 'OUT',
  OUT_DATA: 'OUT_DATA',
}

function* loginSaga() {
  try {
    const res = yield call(api.common.test, {})
    const action = actionCreators.loginGetDataAction(res.data)
    yield put(action)
  } catch (error) {
    console.log(error)
  }
}

function* watchOutSaga() {
  yield takeEvery('OUT', loginSaga)
}


const reducer = (state = defaultState, action: any) => {
  const newState = JSON.parse(JSON.stringify(state))
  if (action.type === constants.OUT) {
    // newState.collapsed = action.value
    return newState
  }
  return state
}

const actionCreators = {
  loginAction: () => ({
    type: constants.OUT,
  }),
  loginGetDataAction: (value: any) => ({
    type: constants.OUT_DATA,
    value
  }),
}

export {
  constants,
  watchOutSaga,
  reducer,
  actionCreators,
}