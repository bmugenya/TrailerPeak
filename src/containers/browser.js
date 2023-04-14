import React, { useState, useContext, useEffect } from 'react'
import { SelectProfile } from './profile'
import { Loading } from '../components'
import Banner from '../components/banner'
import Nav from '../components/nav'
import { Browse } from '../pages'

export default function BrowserContainer({ slides }) {
  const [profile, setProfile] = useState({})
  const [loading, setLoading] = useState(true)


  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 3000)
  }, [profile.displayName])

  return profile.displayName ? 

  (
      <SelectProfile  setProfile={setProfile} />
   
  ) : (
  




 <>

      {loading ? <Loading  /> : <Loading.ReleaseBody />}
      <Nav />
      <Banner />
      <Browse />
    </>







  )
}
