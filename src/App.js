import React, { useContext, useEffect } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import { AppContext } from './context/main'
import { fetchData } from './utils/api'
import { Admin } from './pages/Admin'
import { Home } from './pages/Home'

function App() {
  const { setEvent, setPassport } = useContext(AppContext)

  useEffect(() => {
    fetchData('/api/districts/passports', {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    }).then((data) => setPassport(data))

    fetchData('/api/districts/events', {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    }).then((data) => setEvent(data))
  }, [setEvent, setPassport])

  return (
    <Router>
      <div className='App'>
        <Switch>
          <Route exact path='/'>
            <Home />
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
