import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  heading: {
    width: '90%',
    display: 'flex',
    alignItems: 'center',
    color: '#fff',
    fontSize: 25,
    fontWeight: 700,
    height: '10vh',
    fontFamily: 'Karla',
    [theme.breakpoints.up('lg')]: {
      height: '15vh',
    },
  },
  h1: {
    marginLeft: 10,
  },
}))

export const Heading = ({ title, style }) => {
  const classes = useStyles()

  const headingStyle = style ? style : classes.heading
  return (
    <div className={headingStyle}>
      <h1 className={classes.h1}>{title}</h1>
    </div>
  )
}
