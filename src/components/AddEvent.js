import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

import { AddBtn } from './AddBtn'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    marginBottom: theme.spacing(4),
  },
  textarea: {
    width: '70%',
    minWidth: 250,
    padding: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
}))

export const AddEvent = () => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <textarea
        className={classes.textarea}
        rows='6'
        placeholder='add event'
      ></textarea>
      <AddBtn />
    </div>
  )
}
