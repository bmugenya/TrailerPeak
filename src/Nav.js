import React, { useState, useEffect } from 'react'
import './Nav.css'
const Nav = () => {
  const [show, handleShow] = useState(false)

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
        src='https://res.cloudinary.com/doammcpie/image/upload/v1615115881/logo_l2njh1.png'
        alt='netflix logo'
      />
      <img
        className='nav_avatar'
        src='https://res.cloudinary.com/doammcpie/image/upload/v1615116028/smily_st0o6u.jpg'
        alt='naruto logo'
      />
    </div>
  )
}

export default Nav
