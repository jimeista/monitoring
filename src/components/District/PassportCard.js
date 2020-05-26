import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles({
  root: {
    padding: 10,
    flexGrow: 1,
    margin: '10px 0',
    borderLeft: '5px solid #286090',
  },
  numbers: {
    display: 'flex',
  },
  number: {
    fontSize: 30,
    color: '#286090',
    fontWeight: 700,
  },
  measurement: {
    fontSize: 12,
    fontWeight: 600,
    color: '#286090',
    marginLeft: 2,
    paddingTop: 20,
  },
  description: {
    fontFamily: 'Karla',
    color: '#333',
    fontSize: 18,
    letterSpacing: '0.5',
  },
})

export const PassportCard = (props) => {
  const classes = useStyles()

  const { number, measurement, description } = props

  return (
    <div className={classes.root}>
      <div className={classes.numbers}>
        <Typography className={classes.number} color='textSecondary'>
          {number}
        </Typography>
        <Typography className={classes.measurement} color='textSecondary'>
          {measurement}
        </Typography>
      </div>
      <Typography className={classes.description} color='textSecondary'>
        {description}
      </Typography>
    </div>
  )
}
