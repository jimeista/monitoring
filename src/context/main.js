import React, { createContext, useState, useEffect } from 'react'

import { mapp } from '../utils/main'

const AppContext = createContext()

const AppContextProvider = ({ children }) => {
  let [passport, setPassport] = useState([])
  let [events, setEvent] = useState([])
  let [db, setDb] = useState({
    'Алатайский район': { events: [], passport: [] },
    'Алмалинский район': { events: [], passport: [] },
    'Ауезовский район': { events: [], passport: [] },
    'Бостандыкский район': { events: [], passport: [] },
    'Медеуский район': { events: [], passport: [] },
    'Наурызбайский район': { events: [], passport: [] },
    'Турксибский район': { events: [], passport: [] },
    'Жетысуский район': { events: [], passport: [] },
  })

  useEffect(() => {
    if (events.length > 0 && passport.length > 0) {
      setDb(mapp(events, passport, db))
    }
  }, [db, events, passport, setDb])

  return (
    <AppContext.Provider
      value={{ db, setDb, passport, setPassport, events, setEvent }}
    >
      {children}
    </AppContext.Provider>
  )
}

export { AppContext, AppContextProvider }
