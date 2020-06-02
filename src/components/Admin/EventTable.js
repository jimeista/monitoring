import React, { useState, useEffect } from 'react'
import { Button, Table, Input, InputNumber, Popconfirm, Form } from 'antd'
import { DeleteFilled, EditFilled } from '@ant-design/icons'
import axios from 'axios'

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
  return (
    <td {...restProps}>
      {editing ? (
        <Form.Item
          name={dataIndex}
          style={{
            margin: 0,
          }}
          rules={[
            {
              required: true,
              message: `Введите ${title}!`,
            },
          ]}
        >
          {inputNode}
        </Form.Item>
      ) : (
        children
      )}
    </td>
  )
}

export const EventTable = ({ tabledata, district }) => {
  const [form] = Form.useForm()
  const [data, setData] = useState()
  const [event, setEvent] = useState()
  const [editingKey, setEditingKey] = useState('')

  useEffect(() => {
    const url = '/api/districts/events?district='

    const fetchData = async () => {
      const response = await axios(`${url}${district}`)
      setData(setTableData(response.data))
    }

    fetchData()
  }, [data])

  const isEditing = (record) => record.key === editingKey

  const handleNews = (e) => setEvent(e.target.value)

  const add = () => {
    let key =
      data.length === 0 ? data.length + 1 : data[data.length - 1].key + 1
    let newData = {
      key,
      event,
    }
    setData([...data, newData])
    newData = {
      ...newData,
      district,
    }
    delete newData.key

    axios.put(`/api/districts/events`, newData).then((res) => {
      console.log(res)
      console.log(res.data)
    })
  }

  const edit = (record) => {
    form.setFieldsValue({
      event: '',
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
      let newData = [...data]
      const index = newData.findIndex((item) => key === item.key)

      if (index > -1) {
        const item = newData[index]
        newData.splice(index, 1, { ...item, ...row })
        setData(newData)
        delete newData[key]
        axios
          .post(`/api/districts/events/${key}`, {
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
    axios.delete(`/api/districts/events/${key}`).then((res) => {
      console.log(res)
      console.log(res.data)
    })
  }

  const columns = [
    {
      key: 'event',
      title: 'Новости',
      dataIndex: 'event',
      width: '50%',
      editable: true,
    },
    ,
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
          placeholder='новость'
          style={{ width: '60%', marginRight: 8 }}
          onChange={handleNews}
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
