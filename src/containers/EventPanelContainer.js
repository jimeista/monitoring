import React, { useContext, useEffect } from 'react'

import { fetchData, postData, putData, deleteData } from '../utils/api'
import { AppContext } from '../context/main'
import { getColumns, getData } from '../utils/main'

import { Panel } from '../components/Panel'
import { Loading } from '../components/Loading'

export const EventPanelContainer = () => {
  const { district, events, setEvent } = useContext(AppContext)
  const url = '/api/districts/events'

  useEffect(() => {
    fetchData(url, {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    }).then((data) => setEvent(data))
  }, [setEvent])

  return events.length <= 0 ? (
    <Loading />
  ) : (
    <div>
      <Panel
        cols={getColumns(events)}
        data={getData(events)}
        url={url}
        postData={postData}
        putData={putData}
        deleteData={deleteData}
        dis={district}
      />
    </div>
  )
}
