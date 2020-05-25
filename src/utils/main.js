export const getColumns = (arr) => {
  let cols = []

  let obj = arr[0]

  for (let key in obj) {
    if (key === 'id') continue
    cols.push({ title: capitalizeFirstLetter(key), field: key })
  }

  return cols
}

export const getData = (arr) => {
  let data = []
  let obj = {}

  arr.map((item) => {
    Object.keys(item).map((key) => {
      obj = { ...obj, [key]: item[key] }
    })
    data.push(obj)
  })

  console.log(data)
  return data
}

export const getDistricts = () => {
  const districts = []
  data.map((key) => districts.push(key))
  return districts
}

export const mapp = (events, passport, db) => {
  events.map((item) => {
    let obj = {}
    const district = item.district
    //exctract obj from event
    for (let key in item) {
      if (key !== 'district') {
        obj = { ...obj, [key]: item[key] }
      }
    }

    db[district].events.push(obj)
  })

  passport.map((item) => {
    let obj = {}
    const district = item.district
    //exctract obj from event
    for (let key in item) {
      if (key !== 'district') {
        obj = { ...obj, [key]: item[key] }
      }
    }

    db[district].passport.push(obj)
  })

  return db
}

const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1)
}

const data = [
  'Алатайский район',
  'Алмалинский район',
  'Ауезовский район',
  'Бостандыкский район',
  'Медеуский район',
  'Наурызбайский район',
  'Турксибский район',
  'Жетысуский район',
]
