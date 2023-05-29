import React, { useState, useContext, useEffect } from 'react'
import { SelectProfile } from './profile'
import { Loading } from '../components'
import Banner from '../components/banner'
import Nav from '../components/nav'
import { Browse } from '../pages'
import useAuthListener from '../hooks/use-auth-listener'

export default function BrowserContainer({ slides }) {
  const [profile, setProfile] = useState({})
  const [loading, setLoading] = useState(true)


const { user } = useAuthListener();
console.log(user)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 3000)
  }, [profile.username])

  return (
    <>
     
      <Nav />
      <Banner />
      <Browse />
    </>
  ) 
}





