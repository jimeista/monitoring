import React, { useContext, useEffect } from 'react'

import { AppContext } from '../context/main'
import { putData } from '../utils/api'
import { getColumns, getData } from '../utils/main'

import { Panel } from '../components/Panel'
import { Loading } from '../components/Loading'

export const PassportPanelContainer = () => {
  const { passport } = useContext(AppContext)

  useEffect(() => {
    const data = {
      event: 'dlkfmskdlfn сетей',
    }
    putData(`http://localhost:8000/events/${1}`, data)
  }, [])

  return passport.length <= 0 ? (
    <Loading />
  ) : (
    <Panel cols={getColumns(passport)} data={getData(passport)} />
  )
}
