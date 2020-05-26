import React, { createContext, useState } from 'react'

const AppContext = createContext()

const AppContextProvider = ({ children }) => {
  let [passport, setPassport] = useState([])
  let [events, setEvent] = useState([])
  let [ev, setEv] = useState([])
  let [pass, setPass] = useState([])
  let [district, setDistrict] = useState('')

  return (
    <AppContext.Provider
      value={{
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
