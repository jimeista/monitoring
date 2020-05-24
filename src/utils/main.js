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

export const getDistricts = (data) => {
  const districts = []

  Object.keys(data).map((key) => districts.push(key))

  return districts
}

const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1)
}

const data = {
  'Алатайский район': { events: [], passport: [] },
  'Алмалинский район': { events: [], passport: [] },
  'Ауэзовский район': { events: [], passport: [] },
  'Бостандыкский район': { events: [], passport: [] },
  'Медеуский район': { events: [], passport: [] },
  'Наурызбайский район': { events: [], passport: [] },
  'Турксибский район': { events: [], passport: [] },
  'Жетысуский район': { events: [], passport: [] },
}
