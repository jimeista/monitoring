import React from 'react'
import { AppContext } from '../context/main'

import { District } from '../components/District/District'

export const DistrictContainer = () => {
  const { db } = React.useContext(AppContext)

  const renderDistrict = Object.keys(db).map((key) => {
    let district = {
      district: key,
      events: db[key].events,
      passport: db[key].passport,
    }

    return <District district={district} />
  })

  return <>{renderDistrict}</>
}
