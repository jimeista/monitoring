import React from 'react'
import Card from '@material-ui/core/Card'
import { makeStyles } from '@material-ui/core/styles'
import RssFeedIcon from '@material-ui/icons/RssFeed'

import { EventCard } from './EventCard'
import { Heading } from './Heading'

const useStyles = makeStyles({
  root: {
    width: '46%',
    height: '100%',
    padding: 20,
    paddingTop: 0,
    overflow: 'auto',
  },
  heading: {
    display: 'flex',
    paddingTop: 10,
  },
  icon: { fontSize: 40 },
})

const style = {
  fontSize: '8px',
  color: '#333',
  marginBottom: 15,
  marginLeft: 10,
}

export const Events = (props) => {
  const { events } = props
  const classes = useStyles()

  const renderEvents = events.map((event, key) => (
    <EventCard key={key} event={event.event} />
  ))

  return (
    <Card classes={{ root: classes.root }}>
      <div className={classes.heading}>
        <RssFeedIcon className={classes.icon} />
        <Heading title={'Новости'} style={style} />
      </div>
      {renderEvents}
    </Card>
  )
}
