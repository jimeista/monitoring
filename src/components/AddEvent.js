import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'

import { AddBtn } from './AddBtn'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    marginBottom: theme.spacing(4),
  },
  textarea: {
    flexGrow: 1,
    minWidth: 250,
    padding: theme.spacing(2),
    margin: theme.spacing(2),
    marginTop: 0,
  },
  textfield: {
    marginLeft: 10,
  },
}))

export const AddEvent = ({ handleSubmit, bool }) => {
  const classes = useStyles()
  const [text, setText] = useState()
  const [number, setNum] = useState()
  const [measure, setMeasure] = useState()

  const handleChange = (e) => setText(e.target.value)

  const handleNumberChange = (e) => setNum(e.target.value)
  const handleMeasureChange = (e) => setMeasure(e.target.value)

  const handleOnSubmit = (district) => {
    if (district && text && number) {
      const obj = { text, number, measure, district }
      handleSubmit(obj)
    }
  }

  const textfields = bool ? (
    <>
      <TextField onNumberChange={handleNumberChange} label='number' />
      <TextField
        classes={{ root: classes.textfield }}
        onMeasureChange={handleMeasureChange}
        label='measurement'
      />
    </>
  ) : null

  return (
    <div className={classes.root}>
      {textfields}
      <textarea
        className={classes.textarea}
        rows='6'
        placeholder='add event'
        onChange={handleChange}
      ></textarea>
      <AddBtn handleSubmit={handleOnSubmit} />
    </div>
  )
}
