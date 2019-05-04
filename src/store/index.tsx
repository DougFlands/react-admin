import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
import reducer from './reducer'
import rootSaga from './sagas'

const sagaMiddleware = createSagaMiddleware()
const composeEnhancers = (window as any) && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({ }) : compose;

const enhancer = composeEnhancers(applyMiddleware(sagaMiddleware));

const store = createStore(
  reducer,
  enhancer
)
sagaMiddleware.run(rootSaga)
export default store