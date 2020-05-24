import React, { useContext } from 'react'

import { AppContext } from '../context/main'
import { getColumns, getData } from '../utils/main'

import { Panel } from '../components/Panel'
import { Loading } from '../components/Loading'

export const PassportPanelContainer = () => {
  const { passport } = useContext(AppContext)

  return passport.length <= 0 ? (
    <Loading />
  ) : (
    <Panel cols={getColumns(passport)} data={getData(passport)} />
  )
}
