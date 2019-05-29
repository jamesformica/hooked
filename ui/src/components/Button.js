import React, { useContext } from 'react'

import { ADD_FISHY } from '../../../common/events'
import HookedContext from '../context'

const Button = () => {
  const { send, numberOfFishies } = useContext(HookedContext)

  const windyBoi = () => {
    send(ADD_FISHY)
  }

  return (
    <button type="button" onClick={windyBoi}>💨 wind {numberOfFishies}</button>
  )
}

export default Button
