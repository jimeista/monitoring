import React, { createContext, useState } from 'react'

const AppContext = createContext()

const AppContextProvider = ({ children }) => {
  let [passport, setPassport] = useState([])
  let [events, setEvent] = useState([])
  let [ev, setEv] = useState([])
  let [pass, setPass] = useState([])
  const [db, setDb] = useState(data)
  let [district, setDistrict] = useState('')

  return (
    <AppContext.Provider
      value={{
        db,
        setDb,
        district,
        setDistrict,
        pass,
        setPass,
        ev,
        setEv,
        passport,
        setPassport,
        events,
        setEvent,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export { AppContext, AppContextProvider }

const data = {
  'Алтайский район': {
    events: [
      {
        event: 'Проведено сейсмоусиление школы №5',
        id: 2,
      },
      {
        event: 'Проведено сейсмоусиление школы №5',
        id: 1,
      },
    ],
    passport: [
      {
        'number-tag': '6763',
        measurement: '',
        id: 3,
        'description-tag': 'Саженцев хвойных и лиственных пород высажены',
      },
      {
        'number-tag': '733',
        measurement: 'km',
        id: 2,
        'description-tag': 'Саженцев хвойных и лиственных пород высажены',
      },
      {
        'number-tag': '6763',
        measurement: '',
        id: 3,
        'description-tag': 'Саженцев хвойных и лиственных пород высажены',
      },
      {
        'number-tag': '6763',
        measurement: '',
        id: 3,
        'description-tag': 'Саженцев хвойных и лиственных пород высажены',
      },
      {
        'number-tag': '6763',
        measurement: '',
        id: 3,
        'description-tag': 'Саженцев хвойных и лиственных пород высажены',
      },
      {
        'number-tag': '6763',
        measurement: '',
        id: 3,
        'description-tag': 'Саженцев хвойных и лиственных пород высажены',
      },
      {
        'number-tag': '6763',
        measurement: '',
        id: 3,
        'description-tag': 'Саженцев хвойных и лиственных пород высажены',
      },
    ],
  },
  'Алмалинский район': { events: [], passport: [] },
  'Ауезовский район': { events: [], passport: [] },
  'Бостандыкский район': { events: [], passport: [] },
  'Медеуский район': { events: [], passport: [] },
  'Наурызбайский район': { events: [], passport: [] },
  'Турксибский район': { events: [], passport: [] },
  'Жетысуский район': { events: [], passport: [] },
}
