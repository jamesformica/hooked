import React, { useContext } from 'react'

import HookedContext from '../context'

const Button = () => {
  const { send } = useContext(HookedContext)

  const windyBoi = () => {
    send('fish boi mother fucker')
  }

  return (
    <button type="button" onClick={windyBoi}>💨 wind</button>
  )
}

export default Button
