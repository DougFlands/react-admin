import * as constants from './constants';

export const getInputChangeAction = (value: any) => ({
  type: constants.CHENGE_INPUT_VALUE,
  value
})

export const getAddItemAction = () => ({
  type: constants.ADD_TODO_ITEM,
})

export const getDeleteItemAction = (index: any) => ({
  index,
  type: constants.DELETE_TODO_ITEM,
})

export const initListAction = (data: any) => ({
  data,
  type: constants.INIT_LIST_ACTION,
})

export const getInitList = () => ({
  type: constants.GET_INIT_LIST,
})