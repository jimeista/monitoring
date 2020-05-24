import React, { createContext, useState, useEffect } from 'react'

import { mapp, data } from '../utils/main'

const AppContext = createContext()

const AppContextProvider = ({ children }) => {
  let [passport, setPassport] = useState([])
  let [events, setEvent] = useState([])
  let [db, setDb] = useState(data)

  useEffect(() => {
    if (passport.length > 0 && events.length > 0) {
      mapp(passport, false, db)
      mapp(events, true, db)
    }
  }, [events, passport, db])

  return (
    <AppContext.Provider
      value={{ db, setDb, passport, setPassport, events, setEvent }}
    >
      {children}
    </AppContext.Provider>
  )
}

export { AppContext, AppContextProvider }
