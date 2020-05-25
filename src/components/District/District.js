import React from 'react'

import { Events } from './Events'
import { Passport } from './Passport'

const classes = {
  root: {
    width: '100%',
  },
  heading: {
    display: 'flex',
    alignItems: 'center',
    color: '#333',
    padding: '10px',
  },
  panel: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '10px',
  },
}

export const District = ({ district }) => {
  return (
    <div style={classes.root}>
      <div style={classes.heading}>
        <h1>{district.district}</h1>
      </div>
      <div style={classes.panel}>
        <Events events={district.events} />
        <Passport passport={district.passport} />
      </div>
    </div>
  )
}
