import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

import { Events } from './Events'
import { Passport } from './Passport'
import { Heading } from './Heading'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '90%',
    margin: 'auto',
    boxSizing: 'border-box',
  },
  panel: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: 50,
    [theme.breakpoints.up('lg')]: {
      marginBottom: 10,
    },
    [theme.breakpoints.down('sm')]: {
      display: 'block',
      marginBottom: 20,
    },
  },
}))

export const District = ({ district }) => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <Heading title={district.district} />
      <div className={classes.panel}>
        <Passport passport={district.passport} />
        <Events events={district.events} />
      </div>
    </div>
  )
}
