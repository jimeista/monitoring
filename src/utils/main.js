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

const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1)
}

export const mapp = (arr, bool, db) => {
  arr.forEach((item) => {
    let obj = {}
    const district = item.district
    for (let key in item) {
      if (key !== 'district') {
        obj = { ...obj, [key]: item[key] }
      }
    }
    bool ? db[district].events.push(obj) : db[district].passport.push(obj)
  })
}

export const data = [
  'Алатайский район',
  'Алмалинский район',
  'Ауезовский район',
  'Бостандыкский район',
  'Медеуский район',
  'Наурызбайский район',
  'Турксибский район',
  'Жетысуский район',
]
