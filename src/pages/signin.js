import { React, useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import Header from '../containers/header'
import { Form } from '../components'
import * as ROUTES from '../constants/routes'
import { useForm } from 'react-hook-form'

import { useDispatch, useSelector } from 'react-redux'
import { authUserAsync } from '../features/user/userActions'

export default function Signin() {

  const history = useNavigate()
  const [emailAddress, setEmailAddress] = useState('')
  const [password, setPassword] = useState('')
  const isInvalid = password === '' || emailAddress === ''
const dispatch = useDispatch()
  const { error } = useSelector((state) => state.user)
  const { register, handleSubmit, formState: { errors }, } = useForm()

  const handleSignIn = (event) => {
    event.preventDefault()
   let data = {
      'email':emailAddress,
      'password':password
    }

    authentication(data)

  }
    const authentication = async (data) => {
    const auth = await dispatch(authUserAsync(data))
    const error = auth?.error?.message
     !error && history('/browse')

  }

  
  return (
    <Header>
      <Form>
        <Form.Title>signin</Form.Title>
        {error && <Form.Error>{error}</Form.Error>}
        <Form.Base onSubmit={handleSignIn} method='POST'>
          <Form.Input
            placeholder='Email address'
            value={emailAddress}
            onChange={({ target }) => setEmailAddress(target.value)}
          />
          <Form.Input
            type='password'
            placeholder='Password'
            autoComplete='off'
            value={password}
            onChange={({ target }) => setPassword(target.value)}
          />
          <Form.Submit disabled={isInvalid} type='submit'>
            Sign In
          </Form.Submit>
        </Form.Base>
        <Form.Text>
          New to TrailerPeak? <Form.Link to='/signup'>Signup Now</Form.Link>
        </Form.Text>
        <Form.TextSmall>
          This page is protected by google reCapture
        </Form.TextSmall>
      </Form>
    </Header>
  )
}
