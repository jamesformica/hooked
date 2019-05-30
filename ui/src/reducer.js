export const INITIAL_STATE = {
  status: 'Connecting...',
  send: undefined,
  freshFishes: [],
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'CONNECTION_SUCCESSFUL':
      return { ...state, status: 'Connected', send: action.send }
    case 'CONNECTION_TERMINATED':
        return { ...state, status: 'Error: Refresh Page', send: undefined }
    case 'NEW_FISHY':
      return {
        ...state,
        freshFishes: action.freshFishes
      }
    default:
      return state
  }
}

export default reducer
