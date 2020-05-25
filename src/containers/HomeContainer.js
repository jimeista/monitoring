import React, { useContext } from 'react'
import { AppContext } from '../context/main'

import { CardRegion } from '../components/CardRegion'

export const HomeContainer = () => {
  const { db } = useContext(AppContext)

  const renderRegions = () => {
    let regions
    if (db) {
      console.log(db)
      regions = Object.keys(db).map((key) => (
        <CardRegion key={key} region={{ district: key }} />
      ))
    }

    return regions
  }

  return <div>{renderRegions()}</div>
}
