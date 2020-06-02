import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Monitoring } from '../components/Monitoring'

import { districtList, sortObject } from '../utils/helper'

export const MonitoringContainer = () => {
  const [state, setState] = useState({})

  useEffect(() => {
    const url1 = '/api/districts/passports?district='
    const url2 = '/api/districts/events?district='

    const fetchData = async () => {
      districtList.map(async (dis) => {
        const ev = await axios(`${url2}${dis}`)
        const pass = await axios(`${url1}${dis}`)
        setState((state) => ({
          ...state,
          [dis]: { passports: pass.data, events: ev.data },
        }))
      })
    }

    fetchData()
  }, [state])

  return <Monitoring data={sortObject(state)} />
}
