import React, { useContext, useEffect } from 'react'

import { AppContext } from '../context/main'
import { fetchData, postData, putData, deleteData } from '../utils/api'
import { getColumns, getData } from '../utils/main'

import { Panel } from '../components/Panel'
import { Loading } from '../components/Loading'

export const PassportPanelContainer = () => {
  const { district, passport, setPassport } = useContext(AppContext)
  const url = '/api/districts/passports'

  useEffect(() => {
    fetchData(url, {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    }).then((data) => setPassport(data))
  }, [setPassport])

  return passport.length <= 0 ? (
    <Loading />
  ) : (
    <div>
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
