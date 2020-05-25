import React from 'react'
import Card from '@material-ui/core/Card'
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
    height: '80%',
    justifyContent: 'space-between',
    padding: 10,
  },
  card: {
    height: '100vh',
  },
})

export const District = ({ district }) => {
  const classes = useStyles()
  return (
    <Card classes={{ root: classes.card }}>
      <Heading title={district.district} />
      <div className={classes.panel}>
        <Passport passport={district.passport} />
        <Events events={district.events} />
      </div>
    </Card>
  )
}
