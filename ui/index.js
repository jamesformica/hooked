import React, { useReducer } from 'react'
import ReactDOM from 'react-dom'

import reducer, { INITIAL_STATE } from './src/reducer'
import useWebSocket from './src/hooks/useWebSocket'
import App from './src/components/App'
import HookedContext from './src/context'

const Root = () => {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE)

  useWebSocket(dispatch)

  return (
    <HookedContext.Provider value={state}>
      <App />
    </HookedContext.Provider>
  )
}

ReactDOM.render(<Root />, global.document.getElementById('root'))
