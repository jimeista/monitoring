import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Button, Table, Input, InputNumber, Popconfirm, Form } from 'antd'
import { DeleteFilled, EditFilled } from '@ant-design/icons'

import { setTableData } from '../../utils/helper'

const EditableCell = ({
  editing,
  dataIndex,
  title,
  inputType,
  record,
  index,
  children,
  ...restProps
}) => {
  const inputNode = inputType === 'number' ? <InputNumber /> : <Input />
  const rule =
    dataIndex === 'measurement'
      ? [
          {
            required: false,
            message: `Введите ${title}!`,
          },
        ]
      : [
          {
            required: true,
            message: `Введите ${title}!`,
          },
        ]
  return (
    <td {...restProps}>
      {editing ? (
        <Form.Item
          name={dataIndex}
          style={{
            margin: 0,
          }}
          rules={rule}
        >
          {inputNode}
        </Form.Item>
      ) : (
        children
      )}
    </td>
  )
}

export const PassportTable = ({ district }) => {
  const [form] = Form.useForm()
  const [data, setData] = useState([])
  const [state, setState] = useState([])
  const [editingKey, setEditingKey] = useState('')
  const [number, setNumber] = useState()
  const [measurement, setMeasurement] = useState('')
  const [description, setDescription] = useState()

  useEffect(() => {
    const url1 = '/api/districts/passports?district='

    const fetchData = async () => {
      const pass = await axios(`${url1}${district}`)
      setState(pass.data)
      setData(setTableData(pass.data))
    }
    fetchData()
  }, [data])

  const isEditing = (record) => record.key === editingKey

  const handleNumber = (e) => setNumber(e.target.value)
  const handleDescription = (e) => setDescription(e.target.value)
  const handleMeasurement = (e) => setMeasurement(e.target.value)

  const add = () => {
    let key =
      data.length === 0 ? data.length + 1 : data[data.length - 1].key + 1
    let newData = {
      key: key,
      'number-tag': number,
      measurement: measurement,
      'description-tag': description,
    }
    setData([...data, newData])
    newData = {
      ...newData,
      district,
    }
    console.log(newData)
    delete newData.key
    axios.put(`/api/districts/passports`, newData).then((res) => {
      console.log(res)
      console.log(res.data)
    })
  }

  const edit = (record) => {
    form.setFieldsValue({
      'number-tag': '',
      measurement: '',
      'description-tag': '',
      ...record,
    })
    setEditingKey(record.key)
  }

  const cancel = () => {
    setEditingKey('')
  }

  const save = async (key) => {
    try {
      let row = await form.validateFields()
      const newData = [...data]
      const index = newData.findIndex((item) => key === item.key)

      if (index > -1) {
        const item = newData[index]
        newData.splice(index, 1, { ...item, ...row })
        setData(newData)
        delete newData[key]
        axios
          .post(`/api/districts/passports/${key}`, {
            ...newData[index],
            district,
          })
          .then((res) => {
            console.log(res)
            console.log(res.data)
          })
        setEditingKey('')
      } else {
        newData.push(row)
        setData(newData)
        setEditingKey('')
      }
    } catch (errInfo) {
      console.log('Validate Failed:', errInfo)
    }
  }

  const handleDelete = (key) => {
    setData(data.filter((item) => item.key !== key))
    axios.delete(`/api/districts/passports/${key}`).then((res) => {
      console.log(res)
      console.log(res.data)
    })
  }

  const columns = [
    {
      key: 'number-tag',
      title: 'Число',
      dataIndex: 'number-tag',
      width: '15%',
      editable: true,
    },
    {
      key: 'measurement',
      title: 'Единица измерение',
      dataIndex: 'measurement',
      width: '10%',
      editable: true,
    },
    {
      key: 'description-tag',
      title: 'Описание',
      dataIndex: 'description-tag',
      width: '50%',
      editable: true,
    },
    {
      title: 'Операции',
      width: '10%',
      dataIndex: 'operation',
      render: (_, record) => {
        const editable = isEditing(record)
        return (
          <>
            {editable ? (
              <span>
                <a
                  href='javascript:;'
                  onClick={() => save(record.key)}
                  style={{
                    marginRight: 8,
                  }}
                >
                  Сохранить
                </a>
                <Popconfirm
                  title='Вы уверены что хотите отменить действие?'
                  onConfirm={cancel}
                >
                  <a>Отмена</a>
                </Popconfirm>
              </span>
            ) : (
              <a disabled={editingKey !== ''} onClick={() => edit(record)}>
                <EditFilled style={{ fontSize: '20px', color: '#08c' }} />
              </a>
            )}{' '}
            {data.length >= 1 ? (
              <Popconfirm
                title='Вы уверены что хотите удалить данные?'
                onConfirm={() => handleDelete(record.key)}
              >
                <a>
                  <DeleteFilled
                    style={{
                      fontSize: '20px',
                      color: '#08c',
                      marginLeft: '20px',
                    }}
                  />
                </a>
              </Popconfirm>
            ) : null}
          </>
        )
      },
    },
  ]
  const mergedColumns = columns.map((col) => {
    if (!col.editable) {
      return col
    }

    return {
      ...col,
      onCell: (record) => ({
        record,
        inputType: col.dataIndex === 'age' ? 'number' : 'text',
        dataIndex: col.dataIndex,
        title: col.title,
        editing: isEditing(record),
      }),
    }
  })
  return (
    <Form form={form} component={false}>
      <Form.Item label={''} required={false}>
        <Input
          placeholder='число'
          style={{ width: '15%', marginRight: 8 }}
          onChange={(e) => handleNumber(e)}
        />
        <Input
          placeholder='ед измерения'
          style={{ width: '10%', marginRight: 8 }}
          onChange={(e) => handleMeasurement(e)}
        />
        <Input
          placeholder='описание'
          style={{ width: '60%', marginRight: 8 }}
          onChange={(e) => handleDescription(e)}
        />
      </Form.Item>
      <Button
        onClick={add}
        type='primary'
        size='large'
        style={{
          marginBottom: 16,
        }}
      >
        Добавить данные
      </Button>
      <Table
        components={{
          body: {
            cell: EditableCell,
          },
        }}
        bordered
        dataSource={data}
        columns={mergedColumns}
        rowClassName='editable-row'
        pagination={{
          onChange: cancel,
        }}
      />
    </Form>
  )
}
