import React from 'react'

export const PassportCard = (data) => {
  return (
    <div className='passport_card'>
      <span>{data.data['number-tag']}</span>
      <sub>{data.data['measurement']}</sub>
      <p>{data.data['description-tag']}</p>
    </div>
  )
}
