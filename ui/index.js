import React from 'react'
import ReactDOM from 'react-dom'

import HookedContext from './src/context'
import Button from './src/components/Button'
import Loading from './src/components/Loading'
import useWebSocket from './src/hooks/useWebSocket'

const App = () => {
  const { ready, send } = useWebSocket()

  return (
    <HookedContext.Provider value={{ send }}>
      {ready
        ? <Button />
        : <Loading />
      }
    </HookedContext.Provider>
  )
}

ReactDOM.render(<App />, global.document.getElementById('root'))
