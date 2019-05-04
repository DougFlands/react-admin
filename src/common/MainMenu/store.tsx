const defaultState = {
  collapsed: false,
}

const constants = {
  CHANGE_COOLAPSED: 'CHANGE_COOLAPSED'
}

const sagas = {
  
}

function* menuSaga() {
}


const reducer = (state = defaultState, action: any) => {
  const newState = JSON.parse(JSON.stringify(state))
  if (action.type === constants.CHANGE_COOLAPSED) {
    newState.collapsed = action.value
    return newState
  }
  return state
}

const actionCreators = {
  collapsedChangeAction: (value: boolean) => ({
    type: constants.CHANGE_COOLAPSED,
    value
  }),
}

export {
  constants,
  menuSaga,
  reducer,
  actionCreators,
}