import React from 'react'
import { AppContext } from '../context/main'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import OwlCarousel from 'react-owl-carousel'
import 'owl.carousel/dist/assets/owl.carousel.css'
import 'owl.carousel/dist/assets/owl.theme.default.css'

import { District } from '../components/District/District'

const useStyles = makeStyles({
  card: {
    height: '100vh',
  },
})

export const DistrictContainer = () => {
  const { db } = React.useContext(AppContext)
  const classes = useStyles()

  const renderDistrict = Object.keys(db).map((key) => {
    let district = {
      district: key,
      events: db[key].events,
      passport: db[key].passport,
    }

    return <District key={key} district={district} />
  })

  return (
    <Card className={classes.card}>
      <OwlCarousel
        items={1}
        className='owl-theme'
        loop
        autoplay={true}
        autoplayTimeout={60000}
        animateIn={true}
        dots
      >
        {renderDistrict}
      </OwlCarousel>
    </Card>
  )
}
