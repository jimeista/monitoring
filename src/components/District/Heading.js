import React from 'react'

const classes = {
  heading: {
    color: '#333',
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
