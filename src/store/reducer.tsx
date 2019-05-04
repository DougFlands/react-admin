import {combineReducers} from 'redux'
import { reducer as commonReducer } from '../common/store'
import { reducer as menuReducer } from '../common/MainMenu/store'

export default combineReducers({
  menu: menuReducer,
  common: commonReducer,
})