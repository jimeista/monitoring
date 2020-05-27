import React, { useContext, useState, useEffect } from 'react'

import { fetchData, postData, putData, deleteData } from '../utils/api'
import { AppContext } from '../context/main'
import { disableTableDistrict, getColumns, getData } from '../utils/main'

import { Panel } from '../components/Panel'
import { AddBtn } from '../components/AddBtn'
import { Loading } from '../components/Loading'

export const EventPanelContainer = () => {
  const { district, setDistrict, events, setEvent } = useContext(AppContext)
  const url = '/api/districts/events'

  useEffect(() => {
    fetchData('/api/districts/events', {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    }).then((data) => setEvent(data))
  }, [])

  const handleChange = (dis) => setDistrict(dis)

  return events.length <= 0 ? (
    <Loading />
  ) : (
    <>
      {/* <AddBtn onChange={handleChange} /> */}
      <Panel
        cols={getColumns(events)}
        data={getData(events)}
        url={url}
        postData={postData}
        putData={putData}
        deleteData={deleteData}
        dis={district}
      />
    </>
  )
}
