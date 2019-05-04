import { call, put, takeEvery } from 'redux-saga/effects'
import api from '@/api'

const defaultState = {}

const constants = {
  OUT: 'OUT',
  OUT_DATA: 'OUT_DATA',
}

function* outSaga() {
  try {
    console.log(111)
    const res = yield call(api.common[502], {})
    const action = actionCreators.outGetDataAction(res.data)
    yield put(action)
  } catch (error) {
    console.log(error)
  }
}

function* watchOutSaga() {
    yield takeEvery('OUT', outSaga)
}

const sagas = {
  watchOutSaga
}


const reducer = (state = defaultState, action: any) => {
  return state
}

const actionCreators = {
  outAction: () => ({
    type: constants.OUT,
  }),
  outGetDataAction: (value: any) => ({
    type: constants.OUT_DATA,
    value
  }),
}

export {
  constants,
  sagas,
  watchOutSaga,
  reducer,
  actionCreators,
}