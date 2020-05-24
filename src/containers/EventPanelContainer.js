import React, { useContext } from 'react'

import { AppContext } from '../context/main'
import { getColumns, getData } from '../utils/main'

import { Panel } from '../components/Panel'
import { AddEvent } from '../components/AddEvent'
import { Loading } from '../components/Loading'

export const EventPanelContainer = () => {
  const { events } = useContext(AppContext)

  return events.length <= 0 ? (
    <Loading />
  ) : (
    <>
      <AddEvent />
      <Panel cols={getColumns(events)} data={getData(events)} />
    </>
  )
}
