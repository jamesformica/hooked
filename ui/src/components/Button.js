import React, { useContext } from 'react'

import { ADD_FISHY } from '../../../common/events'
import HookedContext from '../context'

const Button = () => {
  const { send, freshFishes } = useContext(HookedContext)

  const windyBoi = () => {
    send(ADD_FISHY)
  }

  return (
    <button type="button" onClick={windyBoi}>💨 wind {freshFishes.length}</button>
  )
}

export default Button
