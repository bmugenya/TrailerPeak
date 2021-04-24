import React, { useState, useContext, useEffect } from 'react'
import { SelectProfile } from './profile'
import { FirebaseContext } from '../context/firebase'
import { Loading } from '../components'
import Banner from '../components/banner'
import Nav from '../components/nav'
import { Browse } from '../pages'

export default function BrowserContainer({ slides }) {
  const [profile, setProfile] = useState({})
  const [loading, setLoading] = useState(true)
  const { firebase } = useContext(FirebaseContext)
  const user = firebase.auth().currentUser || {}

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 3000)
  }, [profile.displayName])

  return profile.displayName ? (
    <>
      {loading ? <Loading src={user.photoURL} /> : <Loading.ReleaseBody />}
      <Nav />
      <Banner />
      <Browse />
    </>
  ) : (
    <SelectProfile user={user} setProfile={setProfile} />
  )
}
