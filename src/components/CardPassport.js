import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(2),
  },
  title: {
    fontSize: 14,
  },
}))

export const CardPassport = (props) => {
  const classes = useStyles()

  const { number, measurement, description } = props
  return (
    <Card className={classes.root}>
      <CardContent>
        <div>
          <Typography
            className={classes.title}
            color='textSecondary'
            gutterBottom
          >
            {number}
          </Typography>
          <Typography variant='h5' component='h2'>
            {measurement}
          </Typography>
        </div>
        <Typography color='textSecondary'>{description}</Typography>
      </CardContent>
    </Card>
  )
}
