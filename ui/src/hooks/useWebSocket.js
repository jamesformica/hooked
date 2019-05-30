import { useEffect } from 'react'

const URL = 'ws://localhost:1019'

function useWebSocket(dispatch) {
  useEffect(() => {
    const connection = new WebSocket(URL)

    connection.onopen = () => {
      const send = msg => connection.send(msg)
      dispatch({ type: 'CONNECTION_SUCCESSFUL', send })
    }

    connection.onmessage = (message) => {
      dispatch({ type: 'NEW_FISHY', freshFishes: JSON.parse(message.data) })
    }

    return () => {
      connection.close()
      dispatch({ type: 'CONNECTION_TERMINATED' })
    }
  }, [])
}

export default useWebSocket
