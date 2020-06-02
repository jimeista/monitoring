import React, { useContext } from 'react'
import Carousel from 're-carousel'

import { AppContext } from '../../context/context'
import { Title } from './Title'
import { PassportCard } from './PassportCard'
import { Card } from '../Layout/Card'
import { faCheck } from '@fortawesome/free-solid-svg-icons'

export const Passport = ({ passports }) => {
  const { interval } = useContext(AppContext)

  const renderPassportCards = passports ? (
    passports.map((data, index) => <PassportCard key={index} data={data} />)
  ) : (
    <>loading</>
  )
  return (
    <Card classname='panel'>
      <Title name='Паспорт ' icon={faCheck} />
      {/* <Carousel auto interval={interval}> */}
      <div className={'panelcards-wrapper'}>{renderPassportCards}</div>
      {/* </Carousel> */}
    </Card>
  )
}
