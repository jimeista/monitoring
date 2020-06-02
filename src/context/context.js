import React, { createContext, useState } from 'react'

const AppContext = createContext()

const AppContextProvider = ({ children }) => {
  let [state, setState] = useState([])
  let [interval, setInterval] = useState(30000)

  return (
    <AppContext.Provider
      value={{
        state,
        setState,
        interval,
        setInterval,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export { AppContext, AppContextProvider }
