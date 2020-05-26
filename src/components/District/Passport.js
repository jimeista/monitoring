import React from 'react'
import DoneIcon from '@material-ui/icons/Done'
import Card from '@material-ui/core/Card'
import { makeStyles } from '@material-ui/core/styles'

import { Heading } from './Heading'
import { PassportCard } from './PassportCard'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '50%',
    height: '80vh',
    padding: 20,
    paddingTop: 0,
    overflow: 'scroll',

    [theme.breakpoints.down('lg')]: {
      fontSize: '0.1rem',
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: '0.1rem',
      width: '46%',
      height: '75vh',
    },
    [theme.breakpoints.down('md')]: {
      width: '46%',
      height: '75vh',
    },
    [theme.breakpoints.down('sm')]: {
      width: '90%',
      maxHeight: '100vh',
      margin: 'auto',
      marginTop: 10,
    },
  },
  heading: {
    display: 'flex',
    paddingTop: 10,
  },
  icon: {
    fontSize: 40,
    [theme.breakpoints.up('lg')]: {
      fontSize: 60,
    },
  },
  style: {
    fontSize: '10px',
    marginTop: 5,
    marginBottom: 15,
    marginLeft: 10,
    [theme.breakpoints.up('lg')]: {
      fontSize: 12,
      margin: 0,
    },
  },
}))

export const Passport = ({ passport }) => {
  const classes = useStyles()

  const renderPassport = passport
    ? passport.map((pass, key) => (
        <PassportCard
          key={key}
          number={pass['number-tag']}
          measurement={pass['measurement']}
          description={pass['description-tag']}
        />
      ))
    : null

  return (
    <Card classes={{ root: classes.root }}>
      <div className={classes.heading}>
        <DoneIcon className={classes.icon} />
        <Heading title={'Паспорт'} style={classes.style} />
      </div>
      {renderPassport}
    </Card>
  )
}
