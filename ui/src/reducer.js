export const INITIAL_STATE = {
  ready: false,
  send: undefined,
  numberOfFishies: 0,
  previousValues: [],
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'CONNECTION_SUCCESSFUL':
      return { ...state, ready: true, send: action.send }
    case 'NEW_FISHY':
      const current = { fishies: state.numberOfFishies, date: Date.now() }

      return {
        ...state,
        previousValues: [...state.previousValues, current],
        numberOfFishies: action.numberOfFishies
      }
    default:
      return state
  }
}

export default reducer
