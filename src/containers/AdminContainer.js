import React, { useContext } from 'react'
import { AppContext } from '../context/context'

import { AdminHeader } from '../components/Admin/AdminHeader'
import { DistrictTabs as Tabs } from '../components/Admin/Tabs'
import { sortObject } from '../utils/helper'

export const AdminContainer = () => {
  const { state } = useContext(AppContext)

  return (
    <>
      <AdminHeader />
      <Tabs data={sortObject(state)} />
    </>
  )
}
