import React, { useContext } from 'react'

import HookedContext from '../context'

const Button = () => {
  const { send, numberOfFishies } = useContext(HookedContext)

  const windyBoi = () => {
    send('fish boi mother fucker')
  }

  return (
    <button type="button" onClick={windyBoi}>💨 wind {numberOfFishies}</button>
  )
}

export default Button
