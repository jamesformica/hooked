import React, { useContext } from 'react'

import Button from './Button'
import Loading from './Loading'
import HookedContext from '../context'

const App = () => {
  const { ready } = useContext(HookedContext)

  return ready
  ? <Button />
  : <Loading />
}

export default App
