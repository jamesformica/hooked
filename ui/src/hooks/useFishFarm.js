import { useContext, useState, useEffect } from 'react'

import HookedContext from '../context'

function useFishFarm(sea) {
  const { freshFishes } = useContext(HookedContext)

  const [fishies, setFishies] = useState([])

  useEffect(() => {
    const { height } = sea.current.getBoundingClientRect()

    const newFishies = freshFishes.map(fishy => ({
      id: fishy,
      y: fishy % height,
      delay: fishy % 1000,
      variant: fishy % 3,
    }))

    setFishies(newFishies)
  }, [freshFishes])

  return fishies
}

export default useFishFarm
