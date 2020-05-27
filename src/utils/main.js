export const getColumns = (arr) => {
  let cols = []
  let obj = arr[0]
  let lookup = {}

  rusTitles = translateTableTitles(arr[0])
  data.forEach((dis) => {
    lookup = { ...lookup, [dis]: dis }
  })

  for (let key in obj) {
    if (key === 'id') continue
    key === 'district'
      ? cols.push({
          title: capitalizeFirstLetter(rusTitles[key]),
          field: [key],
          lookup,
        })
      : cols.push({
          title: capitalizeFirstLetter(rusTitles[key]),
          field: key,
        })
  }

  return cols
}

export const getData = (arr) => {
  let data = []
  let obj = {}

  rusTitles = translateTableTitles(arr[0])

  arr.map((item) => {
    Object.keys(item).map((key) =>
      item[key] === 'district'
        ? (obj = { ...obj, [key]: key })
        : (obj = { ...obj, [key]: item[key] })
    )
    data.push(obj)
  })

  return data
}

export const getDistricts = () => {
  const districts = []
  data.map((key) => districts.push(key))
  return districts
}

const translateTableTitles = (obj) => {
  let rusKeys = {}
  Object.keys(obj).map((key) => {
    if (key === 'number-tag') rusKeys = { ...rusKeys, [key]: 'число' }
    if (key === 'measurement')
      rusKeys = { ...rusKeys, [key]: 'единица измерение' }
    if (key === 'district') rusKeys = { ...rusKeys, [key]: 'район' }
    if (key === 'description-tag') rusKeys = { ...rusKeys, [key]: 'описание' }
    if (key === 'event') rusKeys = { ...rusKeys, [key]: 'новости' }
  })

  return rusKeys
}

const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1)
}

export const data = [
  'Алтайский район',
  'Алмалинский район',
  'Ауезовский район',
  'Бостандыкский район',
  'Медеуский район',
  'Наурызбайский район',
  'Турксибский район',
  'Жетысуский район',
]

let rusTitles
