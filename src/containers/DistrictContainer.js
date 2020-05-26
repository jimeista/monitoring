import React from 'react'
import { AppContext } from '../context/main'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import OwlCarousel from 'react-owl-carousel'
import 'owl.carousel/dist/assets/owl.carousel.css'
import 'owl.carousel/dist/assets/owl.theme.default.css'

import { District } from '../components/District/District'

const useStyles = makeStyles((theme) => ({
  card: {
    backgroundColor: '#1E203A',
    padding: '10 0',
    height: '100vh',
    [theme.breakpoints.down('sm')]: {
      height: '100%',
    },
  },
  '@global': {
    '*::-webkit-scrollbar': {
      width: '0.4em',
    },
    '*::-webkit-scrollbar-track': {
      '-webkit-box-shadow': 'inset 0 0 6px rgba(0,0,0,0.00)',
    },
    '*::-webkit-scrollbar-thumb': {
      backgroundColor: 'rgba(0,0,0,.1)',
      outline: '1px solid slategrey',
    },
  },
}))

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
