import React from 'react'
import DoneIcon from '@material-ui/icons/Done'
import Card from '@material-ui/core/Card'
import { makeStyles } from '@material-ui/core/styles'

import { Heading } from './Heading'
import { PassportCard } from './PassportCard'

const useStyles = makeStyles({
  root: {
    width: '46%',
    height: '100%',
    padding: 20,
    paddingTop: 0,
    overflow: 'auto',
  },
  heading: {
    display: 'flex',
    paddingTop: 10,
  },
  icon: { fontSize: 40 },
})

const style = {
  fontSize: '8px',
  color: '#333',
  marginBottom: 15,
  marginLeft: 10,
}

export const Passport = (props) => {
  const { passport } = props
  const classes = useStyles()

  const renderPassport = passport.map((pass, key) => (
    <PassportCard
      number={pass['number-tag']}
      measurement={pass['measurement']}
      description={pass['description-tag']}
    />
  ))

  return (
    <Card classes={{ root: classes.root }}>
      <div className={classes.heading}>
        <DoneIcon className={classes.icon} />
        <Heading title={'Паспорт'} style={style} />
      </div>
      {renderPassport}
    </Card>
  )
}
