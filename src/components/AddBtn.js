import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import MenuItem from '@material-ui/core/MenuItem'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'
import IconButton from '@material-ui/core/IconButton'
import Icon from '@material-ui/core/Icon'

import { getDistricts } from '../utils/main'

const useStyles = makeStyles((theme) => ({
  formControl: {
    minWidth: 120,
    marginLeft: theme.spacing(2),
  },
  btn: {
    display: 'flex',
    height: 60,
  },
}))

export const AddBtn = ({ handleSubmit }) => {
  const classes = useStyles()
  const [district, setDistrict] = React.useState()

  const handleChange = (event) => {
    setDistrict(event.target.value)
  }

  const handleClick = () => handleSubmit(district)

  const renderMenuItems = getDistricts().map((dis) => (
    <MenuItem value={dis}>{dis}</MenuItem>
  ))

  return (
    <div className={classes.btn}>
      <FormControl variant='outlined' className={classes.formControl}>
        <Select
          labelId='demo-simple-select-filled-label'
          onChange={handleChange}
          value={district}
        >
          {renderMenuItems}
        </Select>
      </FormControl>
      <IconButton aria-label='delete' onClick={handleClick}>
        <Icon color='primary' style={{ fontSize: 30 }}>
          add_circle
        </Icon>
      </IconButton>
    </div>
  )
}
