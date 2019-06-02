import { useState, useEffect } from 'react'

const URL = 'ws://localhost:1019'
const RETRY_INTERVAL = 2000

function useWebSocket(dispatch) {
  const [retryCount, setCount] = useState(0)

  useEffect(() => {
    const connection = new WebSocket(URL)

    connection.onopen = () => {
      dispatch({
        type: 'CONNECTION_SUCCESSFUL',
        send: connection.send.bind(connection)
      })
    }

    connection.onmessage = (message) => {
      dispatch({
        type: 'NEW_FISHY',
        freshFishes: JSON.parse(message.data)
      })
    }

    connection.onclose = () => {
      dispatch({ type: 'CONNECTION_TERMINATED' })
      setTimeout(() => setCount(retryCount + 1), RETRY_INTERVAL)
    }

    connection.onerror = () => {
      console.log(`Failed to connect, retrying in ${RETRY_INTERVAL}ms`)
    }

    return () => {
      connection.close()
    }
  }, [retryCount])
}

export default useWebSocket
