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
