import { fork } from 'redux-saga/effects';
import { watchLoginSaga as login } from '../common/saga'
import { watchOutSaga } from '../pages/test/store'


export default function* rootSaga() {
  yield fork(login)
  yield fork(watchOutSaga)
}
