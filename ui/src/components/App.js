import React, { useContext } from 'react'
import styled from 'styled-components'

import Sea from './Sea'
import Sky from './Sky'
import Count from './Count'
import Status from './Status'
import HookedContext from '../context'

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
`

const App = () => {
  const { status, freshFishes } = useContext(HookedContext)

  return (
    <Wrapper>
      <Sky />
      <Sea />
      <Status status={status} />
      <Count count={freshFishes.length} />
    </Wrapper>
  )
}

export default App
