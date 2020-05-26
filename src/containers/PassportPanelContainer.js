import React, { useContext } from 'react'

import { AppContext } from '../context/main'
import { postData, putData, deleteData } from '../utils/api'
import { getColumns, getData } from '../utils/main'

import { Panel } from '../components/Panel'
import { AddBtn } from '../components/AddBtn'
import { Loading } from '../components/Loading'

export const PassportPanelContainer = () => {
  const { district, setDistrict, passport } = useContext(AppContext)
  const url = '/api/districts/passports'

  const handleChange = (dis) => setDistrict(dis)

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
