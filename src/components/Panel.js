import React, { useState } from 'react'
import MaterialTable from 'material-table'

export const Panel = (props) => {
  const { cols, data, postData, putData, deleteData, url } = props

  const [state, setState] = useState({ cols, data })
  const [selectedRow, setSelectedRow] = useState(null)

  return (
    <MaterialTable
      title='Edit Table'
      columns={state.cols}
      data={state.data}
      onRowClick={(evt, row) => setSelectedRow(row)}
      options={{
        selection: true,
        actionsColumnIndex: -1,
        headerStyle: {
          backgroundColor: '#01579b',
          color: '#FFF',
        },
        rowStyle: (rowData) => ({
          backgroundColor:
            selectedRow && selectedRow.tableData.id === rowData.tableData.id
              ? '#EEE'
              : '#FFF',
        }),
      }}
      actions={[
        {
          tooltip: 'Remove All Selected Users',
          icon: 'delete',
          onClick: (evt, data) =>
            alert('You want to delete ' + data.length + ' rows'),
        },
      ]}
      editable={{
        onRowAdd: (newData) =>
          new Promise((resolve) => {
            setTimeout(() => {
              resolve()
              setState((prevState) => {
                const data = [...prevState.data]
                data.push(newData)
                postData(url, newData)
                return { ...prevState, data }
              })
            }, 600)
          }),
        onRowUpdate: (newData, oldData) =>
          new Promise((resolve) => {
            console.log(newData)
            console.log(oldData)
            setTimeout(() => {
              resolve()
              if (oldData) {
                setState((prevState) => {
                  const data = [...prevState.data]
                  data[data.indexOf(oldData)] = newData
                  putData(`${url}/${oldData.id}`, newData)
                  return { ...prevState, data }
                })
              }
            }, 600)
          }),
        onRowDelete: (oldData) =>
          new Promise((resolve) => {
            console.log(oldData)
            setTimeout(() => {
              resolve()
              setState((prevState) => {
                const data = [...prevState.data]
                data.splice(data.indexOf(oldData), 1)
                deleteData(`${url}/${oldData.id}`)
                return { ...prevState, data }
              })
            }, 600)
          }),
      }}
    />
  )
}
