import { put, takeEvery } from 'redux-saga/effects'
import { initListAction } from './actionCreators'
import * as constants from './constants'
import axios from 'axios'


function* getIniteList() {
  try {
    const res = yield axios.get('http://localhost:3000/list.json')
    const action = initListAction(res.data)
    yield put(action)
  } catch (error) {
    // console.log(error)
  }
}

function* mySaga() {
  yield takeEvery(constants.GET_INIT_LIST, getIniteList);
}

export default mySaga;