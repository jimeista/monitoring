import React, { useContext, useEffect } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import { AppContext } from './context/main'
import { fetchData, getDistrict } from './utils/api'
import { getDistricts } from './utils/main'
import { Admin } from './pages/Admin'
import { Monitoring } from './pages/Monitoring'

function App() {
  const {
    db,
    setDb,
    disEv,
    setDisEv,
    disPass,
    setDisPass,
    setEvent,
    setPassport,
  } = useContext(AppContext)

  useEffect(() => {
    fetchData('/api/districts/passports', {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    }).then((data) => setPassport(data))

    fetchData('/api/districts/events', {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    }).then((data) => setEvent(data))
    getDb()
  }, [setEvent, setPassport])

  const getDb = () => {
    const districts = getDistricts()
    const obj = {}

    getDistrict(`/api/districts/passports?district=Ауезовский`).then((data) =>
      setDisPass(data)
    )

    districts.map((dis) => {
      const ob = { [dis]: { events: [], passport: [] } }

      // getDistrict(`/api/districts/passports?district=${dis}`).then((data) =>
      //   setDisPass(data)
      // )
      // getDistrict(`/api/districts/events?district=${dis}`).then((data) =>
      //   setDisEv(data)
      // )

      // disEv ? (ob.dis.events = () => disEv) : null
      // disPass ? (ob.dis.passport = () => disPass) : null
    })
  }

  console.log(disPass)
  return (
    <Router>
      <div className='App'>
        <Switch>
          <Route exact path='/'>
            <Monitoring />
          </Route>
          <Route path='/admin'>
            <Admin />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App
