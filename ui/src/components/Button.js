import React, { useContext } from 'react'
import styled from 'styled-components'

import { ADD_FISHY } from '../../../common/events'
import HookedContext from '../context'

const ClickMe = styled.button`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  color: white;
  outline: none;
  border: 0;
  text-shadow: 1px 1px 2px rgba(0,0,0,0.5);
  background: transparent;
  user-select: none;
`

const Button = () => {
  const { send, freshFishes } = useContext(HookedContext)

  const windyBoi = () => {
    send(ADD_FISHY)
  }

  return (
    <ClickMe type="button" onClick={windyBoi}>
      YAS! {freshFishes.length}
    </ClickMe>
  )
}

export default Button
