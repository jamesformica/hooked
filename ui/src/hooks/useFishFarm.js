import { useContext, useState, useEffect } from 'react'

import HookedContext from '../context'

const SPAWN_BUFFER = 100

function useFishFarm(sea) {
  const { freshFishes } = useContext(HookedContext)

  const [fishies, setFishies] = useState([])

  useEffect(() => {
    const { height } = sea.current.getBoundingClientRect()

    const newFishies = freshFishes.map(fishy => ({
      id: fishy.id,
      y: Math.max(SPAWN_BUFFER, fishy.time % height),
      delay: fishy.time % 1000,
      variant: fishy.time % 3,
    }))

    setFishies(newFishies)
  }, [freshFishes])

  return fishies
}

export default useFishFarm
