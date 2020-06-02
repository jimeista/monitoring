export const districtList = [
  'Алатауский район',
  'Алмалинский район',
  'Ауезовский район',
  'Бостандыкский район',
  'Жетысуский район',
  'Медеуский район',
  'Наурызбайский район',
  'Турксибский район',
]

// export const setTableColumns = (data) => {
//   const cols = []

//   if (data.length > 0) {
//     Object.keys(data[0]).map((key) => {
//       let ob
//       if (key !== 'district' && key !== 'id') {
//         ob = switchCheck(key, data[0])
//         cols.push(ob)
//       }
//     })
//   }

//   return cols
// }

export const setTableData = (data) => {
  const dataSource = []

  if (data.length > 0) {
    let ob
    data.map((item, index) => {
      Object.keys(item).map((key) => {
        if (key === 'id') {
          ob = {
            ...ob,
            key: item[key],
          }
        }
        if (key !== 'district' && key !== 'id') {
          ob = { ...ob, [key]: item[key] }
        }
      })
      dataSource.push(ob)
    })
  }

  return dataSource
}

export const sortObject = (unordered) => {
  const ordered = {}
  if (unordered) {
    Object.keys(unordered)
      .sort()
      .forEach(function (key) {
        ordered[key] = unordered[key]
      })
  }
  return ordered
}

const switchCheck = (key, item) => {
  switch (key) {
    case 'number-tag':
      return {
        key: key,
        title: capitalizeFirstLetter(translateTableTitles(key)),
        dataIndex: key,
        width: '15%',
        editable: true,
      }
    case 'description-tag':
      return {
        key: key,
        title: capitalizeFirstLetter(translateTableTitles(key)),
        dataIndex: key,
        width: '40%',
        editable: true,
      }
    case 'event':
      return {
        key: key,
        title: capitalizeFirstLetter(translateTableTitles(key)),
        dataIndex: key,
        width: '40%',
        editable: true,
      }
    default:
      return {
        key: key,
        title: capitalizeFirstLetter(translateTableTitles(key)),
        dataIndex: key,
        width: '25%',
        editable: true,
      }
  }
}

const translateTableTitles = (word) => {
  if (word === 'number-tag') return 'число'
  if (word === 'measurement') return 'единица измерение'
  if (word === 'district') return 'район'
  if (word === 'description-tag') return 'описание'
  if (word === 'event') return 'новости'
}

const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1)
}
