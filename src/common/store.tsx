
const defaultState = {
  username: '',
  password: '',
  sessionid: '',
}

const constants = {
  LOGIN: 'LOGIN',
  LOGIN_ACTION: 'LOGIN_ACTION',
  LOGOUT: 'LOGOUT',
}

const reducer = (state = defaultState, action: any) => {
  const newState = JSON.parse(JSON.stringify(state))
  if (action.type === constants.LOGIN) {
    newState.sessionid = action.value.sessionid
    newState.username = action.value.username
    return newState
  }
  if (action.type === constants.LOGOUT) {
    newState.sessionid = ''
    return newState
  }
  return state
}

const actionCreators = {
  loginAction:(value: any) => ({
    type: constants.LOGIN_ACTION,
    value
  }),
  login: (value: any) => ({
    type: constants.LOGIN,
    value,
  }),
  logout: () => ({
    type: constants.LOGOUT,
  }),
}



export {
  constants,
  reducer,
  actionCreators,
}