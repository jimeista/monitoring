import React from 'react'

import { Title } from './Title'
import { PassportCard } from './PassportCard'
import { Card } from '../Layout/Card'
import { faCheck } from '@fortawesome/free-solid-svg-icons'

export const Passport = ({ passports }) => {
  const renderPassportCards = passports ? (
    passports.map((data, index) => <PassportCard key={index} data={data} />)
  ) : (
    <>loading</>
  )
  return (
    <Card classname='panel'>
      <Title name='Паспорт ' icon={faCheck} />
      {renderPassportCards}
    </Card>
  )
}
