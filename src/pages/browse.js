import requests from '../utils/requests'
import Row from '../components/Row'

import { React, useState } from 'react'
import PropTypes from 'prop-types'
import { Grid, Typography, Tabs, Tab, Grow, Box } from '@mui/material'

function TabPanel(props) {
  const { children, value, index, ...other } = props

  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  )
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  }
}

function Browse() {
  const [value, setValue] = useState(0)
  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <>
      <Grid item xs={12}>
        <Tabs value={value} indicatorColor='white' onChange={handleChange}>
          <Tab label='naruto' {...a11yProps(0)} />
          <Tab label='shippuden' {...a11yProps(1)} />
          
        </Tabs>
      </Grid>
      <TabPanel value={value} index={0}>
        <Row title='Season One' fetchUrl={requests.fetchSeasonOne} isLargeRow />
        <Row title='Season Two' fetchUrl={requests.fetchSeasonTwo} />
        <Row title='Season Three' fetchUrl={requests.fetchSeasonThree} />
        <Row title='Season Four' fetchUrl={requests.fetchSeasonFour} />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Row title='Special' fetchUrl={requests.fetchShippdenSpecial} />
        <Row title='Season 1' fetchUrl={requests.fetchShippden1} />
        <Row title='Season 2' fetchUrl={requests.fetchShippden2} />
        <Row title='Season 3' fetchUrl={requests.fetchShippden3} />
        <Row title='Season 4' fetchUrl={requests.fetchShippden4} />
        <Row title='Season 5' fetchUrl={requests.fetchShippden5} />
        <Row title='Season 6' fetchUrl={requests.fetchShippden6} />
        <Row title='Season 7' fetchUrl={requests.fetchShippden7} />
        <Row title='Season 8' fetchUrl={requests.fetchShippden8} />
        <Row title='Season 9' fetchUrl={requests.fetchShippden9} />
        <Row title='Season 10' fetchUrl={requests.fetchShippden10} />
        <Row title='Season 11' fetchUrl={requests.fetchShippden11} />
        <Row title='Season 12' fetchUrl={requests.fetchShippden12} />
        <Row title='Season 13' fetchUrl={requests.fetchShippden13} />
        <Row title='Season 14' fetchUrl={requests.fetchShippden14} />
        <Row title='Season 15' fetchUrl={requests.fetchShippden15} />
        <Row title='Season 16' fetchUrl={requests.fetchShippden16} />
        <Row title='Season 17' fetchUrl={requests.fetchShippden17} />
        <Row title='Season 18' fetchUrl={requests.fetchShippden18} />
        <Row title='Season 19' fetchUrl={requests.fetchShippden19} />
        <Row title='Season 20' fetchUrl={requests.fetchShippden20} />
      </TabPanel>

    </>
  )
}

export default Browse
