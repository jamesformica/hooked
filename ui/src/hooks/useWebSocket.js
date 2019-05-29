import { useEffect, useState } from 'react'

const URL = 'ws://localhost:1019'

function useWebSocket() {
  const [socket, setSocket] = useState()

  useEffect(() => {
    const connection = new WebSocket(URL)

    connection.onopen = () => {
      setSocket(connection)
    }

    return () => {
      connection.close()
    }
  }, [])

  return {
    ready: !!socket,
    ...(socket && { send: msg => socket.send(msg) })
  }
}

export default useWebSocket
