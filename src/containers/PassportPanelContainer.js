import React, { useContext } from 'react'

import { AppContext } from '../context/main'
import { postData, putData, deleteData } from '../utils/api'
import { getColumns, getData } from '../utils/main'

import { Panel } from '../components/Panel'
// import { AddEvent } from '../components/AddEvent'
import { Loading } from '../components/Loading'

export const PassportPanelContainer = () => {
  const { passport } = useContext(AppContext)
  const url = '/api/districts/passports'
  // const url = 'http://localhost:8000/passport'

  // const handleOnSubmit = (obj) => {
  //   const data = {
  //     district: obj.district,
  //     ['number-tag']: obj.number,
  //     measurement: obj.measure,
  //     ['description-tag']: obj.text,
  //   }
  //   postData(url, data)
  // }

  return passport.length <= 0 ? (
    <Loading />
  ) : (
    <div>
      {/* <AddEvent handleSubmit={handleOnSubmit} bool={true} /> */}
      <Panel
        cols={getColumns(passport)}
        data={getData(passport)}
        url={url}
        postData={postData}
        putData={putData}
        deleteData={deleteData}
      />
    </div>
  )
}
