import React from 'react'
import logo from '../logo.png'
import { Header, Profile } from '../components'
import * as ROUTES from '../constants/routes'
export function SelectProfile({ user, setProfile }) {
  return (
    <>
      <Header bg={false}>
        <Header.Frame>
          <Header.Logo to={ROUTES.HOME} src={logo} alt='Narutopia' />
        </Header.Frame>
      </Header>
      <Profile>
        <Profile.Title>Who's watching?</Profile.Title>
        <Profile.List>
          <Profile.Item >
            <Profile.Picture  />
            <Profile.Name></Profile.Name>
          </Profile.Item>
        </Profile.List>
      </Profile>
    </>
  )
}
