import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord'
import Card from '@material-ui/core/Card'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexGrow: 1,
    margin: '8px 0',
    alignItems: 'center',
  },
  event: {
    fontSize: 18,
    fontFamily: 'Karla',
    letterSpacing: '0.5',
    padding: 10,
    color: '#333',
  },
  icon: {
    fontSize: 10,
    marginLeft: 10,
    color: '#286090',
  },
})

export const EventCard = (props) => {
  const classes = useStyles()

  const { event } = props

  return (
    <div className={classes.root}>
      <FiberManualRecordIcon className={classes.icon} />
      <Typography className={classes.event} color='textSecondary'>
        {event}
      </Typography>
    </div>
  )
}
