import React, { useContext } from 'react'
import styled from 'styled-components'

import Sea from './Sea'
import Sky from './Sky'
import Status from './Status'
import HookedContext from '../context'

const Wrapper = styled.div`
  height: 100vh;
  overflow: hidden;
`

const App = () => {
  const { status } = useContext(HookedContext)

  return (
    <Wrapper>
      <Sky />
      <Sea />
      <Status status={status} />
    </Wrapper>
  )
}

export default App
