import requests from '../utils/requests'
import Column from '../components/Column'

import { React, useState } from 'react'
import PropTypes from 'prop-types'
import { Grid, Typography, Tabs, Tab, Grow, Box } from '@mui/material'




function Movies() {
  const [value, setValue] = useState(0)
  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <>

        <Column title='Movies' fetchUrl={requests.upcoming} />

    

    </>
  )
}

export default Movies