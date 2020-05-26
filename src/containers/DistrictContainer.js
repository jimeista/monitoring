import React, { useState, useEffect, useContext } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import OwlCarousel from 'react-owl-carousel'
import 'owl.carousel/dist/assets/owl.carousel.css'
import 'owl.carousel/dist/assets/owl.theme.default.css'

import { getDistricts } from '../utils/main'
import { getDistrict } from '../utils/api'
import { AppContext } from '../context/main'

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
  const classes = useStyles()

  const { db } = useContext(AppContext)
  const [ev, setEv] = useState()
  const [pass, setPass] = useState()

  useEffect(() => {
    const url1 = '/api/districts/events?district='
    const url2 = '/api/districts/passports?district='

    getData(url1, url2)
  }, [])

  const getData = (url1, url2) => {
    getDistricts().map((dis) => {
      getDistrict(`${url1}${dis}`).then((data) =>
        setEv((ev) => ({
          ...ev,
          [dis]: { events: data },
        }))
      )
      getDistrict(`${url2}${dis}`).then((data) =>
        setPass((pass) => ({
          ...pass,
          [dis]: { passport: data },
        }))
      )
    })
  }

  const renderPanel = getDistricts().map((dis) => (
    <District
      district={{
        district: dis,
        passport: db[dis].passport,
        events: db[dis].events,
      }}
    />
  ))
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
        {renderPanel}
      </OwlCarousel>
    </Card>
  )
}
