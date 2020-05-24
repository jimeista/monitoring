import React, { createContext, useState, useEffect } from 'react'

const AppContext = createContext()

const AppContextProvider = ({ children }) => {
  let [passport, setPassport] = useState([])
  let [events, setEvent] = useState([])
  let [db, setDb] = useState({
    'Алатайский район': { events: [], passport: [] },
    'Алмалинский район': { events: [], passport: [] },
    'Ауэзовский район': { events: [], passport: [] },
    'Бостандыкский район': { events: [], passport: [] },
    'Медеуский район': { events: [], passport: [] },
    'Наурызбайский район': { events: [], passport: [] },
    'Турксибский район': { events: [], passport: [] },
    'Жетысуский район': { events: [], passport: [] },
  })

  useEffect(() => {
    if (events.length > 0) {
      events.map((item) => {
        let obj = {}
        const district = item.district
        for (let key in item) {
          if (key !== 'district') {
            obj = { ...obj, [key]: item[key] }
          }
        }
        // console.log(events)
        // console.log(district)
        // console.log(db)
        // console.log(db[district])
      })
    }

    // console.log(events)
    // console.log(passport)
    // console.log(db)
  })

  return (
    <AppContext.Provider
      value={{ db, setDb, passport, setPassport, events, setEvent }}
    >
      {children}
    </AppContext.Provider>
  )
}

export { AppContext, AppContextProvider }

// const getDb = ({ events, passport }) => {
//   console.log(events)
//   // if (events) {
//   //   // evetns map
//   //   events.map((item) => {
//   //     let obj = {}
//   //     console.log(item)
//   //     const district = item.district
//   //     for (let key in item) {
//   //       if (key !== 'district') {
//   //         obj = { ...obj, [key]: item[key] }
//   //       }
//   //     }
//   //     data[district].events.push(obj)
//   //   })

//   //   console.log('hello')
//   // }

//   // if (passport) {
//   //   //passport map
//   //   passport.map((item) => {
//   //     let obj = {}
//   //     const district = item.district

//   //     for (let key in item) {
//   //       if (key !== 'district') {
//   //         obj = { ...obj, [key]: item[key] }
//   //       }
//   //     }

//   //     data[district].events.push(obj)
//   //   })
//   // }

//   return data
// }
