import React from 'react'

import { News } from './News'
import { Passport } from './Passport'

export const CardRegion = ({ region }) => {
  return (
    <div>
      {region.district}
      {/* <News news={region.events} />
      <Passport passport={region.passport} /> */}
    </div>
  )
}
