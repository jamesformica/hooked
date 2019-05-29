import React, { useContext } from 'react'
import styled from 'styled-components'

import Sea from './Sea'
import Sky from './Sky'
import Loading from './Loading'
import HookedContext from '../context'

const Wrapper = styled.div`
  height: 100vh;
  overflow: hidden;
`

const App = () => {
  const { ready } = useContext(HookedContext)

  return ready
    ? (
      <Wrapper>
        <Sky />
        <Sea />
      </Wrapper>
    )
    : <Loading />
}

export default App
