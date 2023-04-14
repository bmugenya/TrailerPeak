import { React, useState } from 'react'
import axios from 'axios';
import { Navigate, useNavigate } from 'react-router-dom';
import Header from '../containers/header'
import { Form } from '../components'
import * as ROUTES from '../constants/routes'

// redux
import { useDispatch, useSelector } from 'react-redux'
import { createUserAsync } from '../features/register/registerActions'
import { useForm } from 'react-hook-form'



export default function Signup() {


  const history = useNavigate()
  const dispatch = useDispatch()
   const { error } = useSelector((state) => state.user)
  const { register, handleSubmit, formState: { errors }, } = useForm()

    const [firstName, setFirstName] = useState('')
  const [emailAddress, setEmailAddress] = useState('')
  const [password, setPassword] = useState('')


  const handleSignup = (event) => {
    event.preventDefault()
   let data = {
      'username':firstName,
      'email':emailAddress,
      'password':password
    }
    regUser(data)

  }


  const regUser =  async (data) => {
  const auth = await dispatch(createUserAsync(data))
   const error = auth?.error?.message
    !error && history('/signin')
  }


  return (
    <>
      <Header>
        <Form>
          <Form.Title>Sign Up</Form.Title>
           {error && <Form.Error>{error}</Form.Error>}
           <Form.Base onSubmit={handleSignup} method='POST'>
            <Form.Input
              placeholder='First Name'
              name="username"
              type="text"
               onChange={({ target }) => setFirstName(target.value)}
            />
            <Form.Input
            type="email"
            name="email"
              placeholder='Email address'
                onChange={({ target }) => setEmailAddress(target.value)}
            />
            <Form.Input
              type='password'
              placeholder='Password'
              name="password"
              autoComplete='off'
               onChange={({ target }) => setPassword(target.value)}
            />
            <Form.Submit  type='submit'>
              Sign Up
            </Form.Submit>
          </Form.Base>
          <Form.Text>
            Already have an account?{' '}
            <Form.Link to='/signin'>SignIn Now</Form.Link>
          </Form.Text>
          <Form.TextSmall>
            This page is protected by google reCapture
          </Form.TextSmall>
        </Form>
      </Header>
    </>
  )
}
