import React, { useContext, useEffect } from 'react'

import { AppContext } from '../context/main'
import { fetchData, postData, putData, deleteData } from '../utils/api'
import { getColumns, getData } from '../utils/main'

import { Panel } from '../components/Panel'
import { AddBtn } from '../components/AddBtn'
import { Loading } from '../components/Loading'

export const PassportPanelContainer = () => {
  const { district, setDistrict, passport, setPassport } = useContext(
    AppContext
  )
  const url = '/api/districts/passports'

  const handleChange = (dis) => setDistrict(dis)

  useEffect(() => {
    fetchData('/api/districts/passports', {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    }).then((data) => setPassport(data))
  }, [])

  return passport.length <= 0 ? (
    <Loading />
  ) : (
    <div>
      {/* <AddBtn onChange={handleChange} /> */}
      <Panel
        cols={getColumns(passport)}
        data={getData(passport)}
        url={url}
        postData={postData}
        putData={putData}
        deleteData={deleteData}
        dis={district}
      />
    </div>
  )
}
