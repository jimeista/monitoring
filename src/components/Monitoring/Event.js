import React, { useContext } from 'react'
import Carousel from 're-carousel'

import { AppContext } from '../../context/context'
import { Title } from './Title'
import { EventCard } from './EventCard'
import { Card } from '../Layout/Card'
import { faNewspaper } from '@fortawesome/free-solid-svg-icons'

export const Event = ({ events }) => {
  const { interval } = useContext(AppContext)

  const renderEventCards = events ? (
    events.map((data, index) => <EventCard key={index} data={data} />)
  ) : (
    <>loading</>
  )

  return (
    <Card classname={'panel'}>
      <Title name='Новости ' icon={faNewspaper} />
      {/* <Carousel auto interval={interval}> */}
      <div className='panelcards-wrapper'>
        <ul> {renderEventCards} </ul>
      </div>
      {/* </Carousel> */}
    </Card>
  )
}
