import React from 'react'

export const EventCard = (data) => {
  return (
    <div className='event_card'>
      <li>
        <p>{data.data['event']}</p>
      </li>
    </div>
  )
}
