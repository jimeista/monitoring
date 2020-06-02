import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const Title = ({ icon, name }) => {
  return (
    <div className='title'>
      <FontAwesomeIcon icon={icon} size='2x' color='white' />
      <span>{name}</span>
    </div>
  )
}
