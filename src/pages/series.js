import requests from '../utils/requests'
import Column from '../components/Column'

import { React, useState } from 'react'
import PropTypes from 'prop-types'
import { Grid, Typography, Tabs, Tab, Grow, Box } from '@mui/material'



function Series() {
  const [value, setValue] = useState(0)
  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <>
      <div style={{ marginBottom: '16px' }}>

 <Column title='Tv Series' fetchUrl={requests.latest} />
        </div>


    </>
  )
}

export default Series