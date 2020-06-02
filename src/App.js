import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import { Admin } from './pages/Admin'
import { Monitoring } from './pages/Monitoring'

function App() {
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
