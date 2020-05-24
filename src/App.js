import React, { useContext, useEffect } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import { AppContext } from './context/main'
import { fetchData } from './utils/api'
import { Admin } from './pages/Admin'
import { Home } from './pages/Home'

function App() {
  const { events, setEvent, passport, setPassport } = useContext(AppContext)

  useEffect(() => {
    const pass = fetchData('http://localhost:8000/passport')
    setPassport(pass)
    const evs = fetchData('http://localhost:8000/events')

    setEvent(evs)
  }, [])

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
