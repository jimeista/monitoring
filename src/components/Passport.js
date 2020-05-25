import React from 'react'

import { CardPassport } from './CardPassport'

export const Passport = ({ passport }) => {
  const renderCards = () => {
    // Object.keys(passport).map((key) => console.log(key))
  }

  return (
    <>
      <CardPassport />
    </>
  )
}
