import React, { useContext, useState } from 'react'

import { postData, putData, deleteData } from '../utils/api'
import { AppContext } from '../context/main'
import { getColumns, getData } from '../utils/main'

import { Panel } from '../components/Panel'
import { AddBtn } from '../components/AddBtn'
import { Loading } from '../components/Loading'

export const EventPanelContainer = () => {
  const { district, setDistrict, events } = useContext(AppContext)
  const url = '/api/districts/events'

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
