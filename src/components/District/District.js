import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

import { Events } from './Events'
import { Passport } from './Passport'
import { Heading } from './Heading'

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexGrow: 1,
    margin: '5px 0',
    alignItems: 'center',
    boxSizing: 'border-box',
  },
  panel: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: 10,
  },
  card: {},
})

export const District = ({ district }) => {
  const classes = useStyles()
  return (
    <div>
      <Heading title={district.district} />
      <div className={classes.panel}>
        <Passport passport={district.passport} />
        <Events events={district.events} />
      </div>
    </div>
  )
}
