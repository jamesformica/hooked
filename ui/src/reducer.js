export const INITIAL_STATE = {
  ready: false,
  send: undefined,
  freshFishes: [],
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'CONNECTION_SUCCESSFUL':
      return { ...state, ready: true, send: action.send }
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
