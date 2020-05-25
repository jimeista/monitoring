import React from 'react'

const classes = {
  root: {
    width: '50%',
    padding: '10px',
  },
}

export const Passport = (props) => {
  const { passport } = props

  const renderPassport = passport.map((pass, key) => (
    <p key={key}>{pass['description-tag']}</p>
  ))

  return <div style={classes.root}>{renderPassport}</div>
}
