import React from 'react'

const classes = {
  root: {
    width: '50%',
    padding: '10px',
  },
}

export const Events = (props) => {
  const { events } = props

  const renderEvents = events.map((event, key) => (
    <p key={key}>{event.event}</p>
  ))

  return <div style={classes.root}>{renderEvents}</div>
}
