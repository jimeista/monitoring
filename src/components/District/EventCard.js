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
  title: {
    fontSize: 18,
    fontFamily: 'Karla',
    padding: 10,
  },
  icon: {
    fontSize: 10,
    marginLeft: 10,
    color: '#333',
  },
})

export const EventCard = (props) => {
  const classes = useStyles()

  const { event } = props

  return (
    <Card className={classes.root}>
      <FiberManualRecordIcon className={classes.icon} />
      <Typography className={classes.title} color='textSecondary'>
        {event}
      </Typography>
    </Card>
  )
}
