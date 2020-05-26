import React, { useContext, useEffect } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import { AppContext } from './context/main'
import { getDistrict } from './utils/api'
import { getDistricts } from './utils/main'
import { Admin } from './pages/Admin'
import { Monitoring } from './pages/Monitoring'

function App() {
  const { db, setDb, disEv, setDisEv, disPass, setDisPass } = useContext(
    AppContext
  )

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
