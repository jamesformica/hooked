import React from 'react'
import styled from 'styled-components'

const Text = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  color: white;
  padding: 1rem;
  font-size: 1.25rem;
  text-shadow: 1px 1px 2px rgba(0,0,0,0.6);
  letter-spacing: 1px;
`

const Status = ({ status }) => {
  return (
    <Text>{status.toUpperCase()}</Text>
  )
}

export default Status
