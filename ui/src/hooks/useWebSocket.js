import { useEffect } from 'react'

const URL = 'ws://10.150.36.123:1019'

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

    connection.onclose = () => {
      dispatch({ type: 'CONNECTION_TERMINATED' })
    }

    return () => {
      connection.close()
    }
  }, [])
}

export default useWebSocket
