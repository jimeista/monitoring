import React from 'react'

const classes = {
  heading: {
    display: 'flex',
    alignItems: 'center',
    color: '#333',
    fontSize: 25,
    height: '10vh',
    marginLeft: '20px',
    fontFamily: 'Karla',
  },
}

export const Heading = ({ title, style }) => {
  const headingStyle = style ? style : classes.heading
  return (
    <div style={headingStyle}>
      <h1>{title}</h1>
    </div>
  )
}
