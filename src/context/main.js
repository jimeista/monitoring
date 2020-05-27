import React, { createContext, useState } from 'react'

const AppContext = createContext()

const AppContextProvider = ({ children }) => {
  let [passport, setPassport] = useState([])
  let [events, setEvent] = useState([])
  let [ev, setEv] = useState([])
  let [pass, setPass] = useState([])

  return (
    <AppContext.Provider
      value={{
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

// {
//   event: '',
//   id: 1,
//   district: '',
// },
