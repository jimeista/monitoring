import React from 'react'
import { TableTabs } from '../components/TableTabs'

import { PassportPanelContainer } from '../containers/PassportPanelContainer'
import { EventPanelContainer } from '../containers/EventPanelContainer'

export const Admin = () => {
  return (
    <>
      <TableTabs
        PassportPanel={PassportPanelContainer}
        EventPanel={EventPanelContainer}
      />
    </>
  )
}
