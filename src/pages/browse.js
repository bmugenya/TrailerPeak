import requests from '../utils/requests'
import Row from '../components/Row'

import { React, useState } from 'react'
import PropTypes from 'prop-types'
import { Grid, Typography, Tabs, Tab, Grow, Box } from '@mui/material'

function Browse() {
  const [value, setValue] = useState(0)
  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <>
   <div class="margin-align">
     <Row title='Airing Today' fetchUrl={requests.airing} />
     </div>
        <Row title='Upcoming' fetchUrl={requests.upcoming}  />
        <Row title='Popular' fetchUrl={requests.popular} />
        <Row title='Trending' fetchUrl={requests.trend} />
        <Row title='Top Rated' fetchUrl={requests.latest} />
       
   

    </>
  )
}

export default Browse
