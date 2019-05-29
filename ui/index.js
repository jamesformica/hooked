import React from 'react'
import ReactDOM from 'react-dom'

import useWebSocket from './src/hooks/useWebSocket'

const App = () => {
  const { ready, send } = useWebSocket()

  return (
    <h1>
      {ready ? 'LETS GO!' : 'Hooked 🎣'}
    </h1>
  )
}

ReactDOM.render(<App />, global.document.getElementById('root'))
