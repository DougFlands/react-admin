import * as constants from './constants';

const defaultState = {
  inputVal: '',
  list: []
}

export default (state = defaultState, action:any) => {
  const newState = JSON.parse(JSON.stringify(state))
  if (action.type === constants.CHENGE_INPUT_VALUE) {
    newState.inputVal = action.value
    return newState
  }
  if (action.type === constants.ADD_TODO_ITEM) {
    newState.list = [...newState.list, newState.inputVal]
    newState.inputVal = ''
    return newState
  }
  if (action.type === constants.DELETE_TODO_ITEM) {
    newState.list.splice(action.index, 1)
    return newState
  }
  if (action.type === constants.INIT_LIST_ACTION) {
    newState.list = action.data.data.list
    return newState
  }

  if (action.type === constants.GET_INIT_LIST) {
    
    return newState
  }

  return state
}