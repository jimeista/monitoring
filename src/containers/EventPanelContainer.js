import React, { useContext } from 'react'

import { postData, putData, deleteData } from '../utils/api'
import { AppContext } from '../context/main'
import { getColumns, getData } from '../utils/main'

import { Panel } from '../components/Panel'
// import { AddEvent } from '../components/AddEvent'
import { Loading } from '../components/Loading'

export const EventPanelContainer = () => {
  const { events } = useContext(AppContext)
  const url = '/api/districts/events'
  // const url = 'http://localhost:8000/events'

  // const handleOnSubmit = (obj) =>
  //   postData(url, { district: obj.district, event: obj.text })

  return events.length <= 0 ? (
    <Loading />
  ) : (
    <>
      {/* <AddEvent handleSubmit={handleOnSubmit} bool={false} /> */}
      <Panel
        cols={getColumns(events)}
        data={getData(events)}
        url={url}
        postData={postData}
        putData={putData}
        deleteData={deleteData}
      />
    </>
  )
}
