import React from 'react'
import Card from '@material-ui/core/Card'
import { makeStyles } from '@material-ui/core/styles'
import RssFeedIcon from '@material-ui/icons/RssFeed'

import { EventCard } from './EventCard'
import { Heading } from './Heading'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '40%',
    height: '80vh',
    padding: 20,
    paddingTop: 0,
    overflow: 'auto',
    [theme.breakpoints.up('lg')]: {
      width: '44%',
      height: '75vh',
      fontSize: '0.1rem',
    },
    [theme.breakpoints.down('md')]: {
      width: '43%',
      height: '75vh',
    },
    [theme.breakpoints.down('sm')]: {
      width: '90%',
      maxHeight: '100vh',
      margin: 'auto',
      marginTop: 20,
    },
    [theme.breakpoints.down('lg')]: {
      fontSize: '0.1rem',
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

export const Events = ({ events }) => {
  const classes = useStyles()

  const renderEvents = events
    ? events.map((event, key) => <EventCard key={key} event={event.event} />)
    : null

  return (
    <Card classes={{ root: classes.root }}>
      <div className={classes.heading}>
        <RssFeedIcon className={classes.icon} />
        <Heading title={'Новости'} style={classes.style} />
      </div>
      {renderEvents}
    </Card>
  )
}
