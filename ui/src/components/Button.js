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

const Text = styled.span`
  position: absolute;
  left: 50%;
  bottom: 1rem;
  font-size: 2rem;
  transform: translateX(-50%);
`

const Button = () => {
  const { send } = useContext(HookedContext)

  const windyBoi = () => {
    send(ADD_FISHY)
  }

  return (
    <ClickMe type="button" onClick={windyBoi}>
      <Text>Click the ocean to upvote</Text>
    </ClickMe>
  )
}

export default Button
