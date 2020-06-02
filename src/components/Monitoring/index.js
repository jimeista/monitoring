import React, { useContext } from 'react'
import Carousel from 're-carousel'

import { AppContext } from '../../context/context'

import IndicatorDots from './IndicatorDots'
import { Heading } from './Heading'
import { Passport } from './Passport'
import { Event } from './Event'
import { Card } from '../Layout/Card'

import './style.css'

export const Monitoring = ({ data }) => {
  const { interval } = useContext(AppContext)

  return (
    <Card classname='district'>
      <Carousel loop auto widgets={[IndicatorDots]} interval={interval}>
        {Object.keys(data).map((dis, index) => (
          <div className={'wrapper'} key={index}>
            <Heading name={dis} />
            <div className='panel_wrapper'>
              <Passport passports={data[dis].passports} />
              <Event events={data[dis].events} />
            </div>
          </div>
        ))}
      </Carousel>
    </Card>
  )
}
