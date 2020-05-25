import React from 'react'
import { AppContext } from '../context/main'

import { District } from '../components/District/District'

export const DistrictContainer = () => {
  const { db } = React.useContext(AppContext)

  const dis = 'Алатайский район'
  let district = {
    district: dis,
    events: db[dis].events,
    passport: db[dis].passport,
  }

  return (
    <div>
      <District district={district} />
    </div>
  )
}
