import React from 'react'

import { Title } from './Title'
import { EventCard } from './EventCard'
import { Card } from '../Layout/Card'
import { faNewspaper } from '@fortawesome/free-solid-svg-icons'

export const Event = ({ events }) => {
  const renderEventCards = events ? (
    events.map((data, index) => <EventCard key={index} data={data} />)
  ) : (
    <>loading</>
  )

  return (
    <Card classname={'panel'}>
      <Title name='Новости ' icon={faNewspaper} />
      <ul>{renderEventCards}</ul>
    </Card>
  )
}
