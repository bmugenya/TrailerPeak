import React, { useState, useEffect, useContext } from 'react'
import '../assets/nav.css'
import { FirebaseContext } from '../context/firebase'
const Nav = () => {
  const [show, handleShow] = useState(false)
  const { firebase } = useContext(FirebaseContext)
  const user = firebase.auth().currentUser || {}

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
        handleShow(true)
      } else handleShow(false)
    })
    return () => {
      window.removeEventListener('scroll')
    }
  }, [])
  return (
    <div className={`nav ${show && 'nav_black'}`}>
      <img
        className='nav_logo'
        src='https://res.cloudinary.com/doammcpie/image/upload/v1618310918/topia_ctxiz9.png'
        alt='netflix logo'
      />

      <img
        className='nav_avatar'
        src='https://res.cloudinary.com/doammcpie/image/upload/v1618310958/2_vohnwl.png'
        alt='naruto logo'
      />
      <div className='list'>
        <img className='list-img' src={user.photoURL} alt='naruto logo' />
        <p>{user.displayName}</p>
        <p className={'link'} onClick={() => firebase.auth().signOut()}>
          SignOut
        </p>
      </div>
    </div>
  )
}

export default Nav
