import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles({
  root: {
    padding: 10,
    flexGrow: 1,
    margin: '8px 0',
    borderLeft: '10px solid blue',
  },
  numbers: {
    display: 'flex',
  },
  number: {
    fontSize: 20,
    color: 'blue',
    fontWeight: 700,
  },
  measurement: {
    fontSize: 12,
    fontWeight: 600,
    color: 'blue',
    marginLeft: 2,
    paddingTop: 9,
  },
  description: {
    fontFamily: 'Karla',
    fontSize: 18,
  },
})

export const PassportCard = (props) => {
  const classes = useStyles()

  const { number, measurement, description } = props

  return (
    <Card className={classes.root}>
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
    </Card>
  )
}
