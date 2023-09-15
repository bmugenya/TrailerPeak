import React from 'react'
import { FaqsContainer } from '../containers/faq'
import { Feature, OptForm } from '../components'
import Jumbotron from '../containers/jumbotron'
import Header from '../containers/header'
export default function Home() {
  return (
    <div>
      <Header>
        <Feature>
          <Feature.Title>TrailerPeak.</Feature.Title>
          <Feature.SubTitle>your one-stop destination for the hottest and most anticipated movie trailers!.</Feature.SubTitle>
        </Feature>
        <OptForm>
          <OptForm.Text>
            Ready to watch? Enter your email to create your membership.
          </OptForm.Text>
          <OptForm.Break />
          <OptForm.Input placeholder='Email Address' />
          <OptForm.Button>Get Started</OptForm.Button>
          <OptForm.Break />
          <OptForm.Text> </OptForm.Text>
        </OptForm>
      </Header>
      {/* <Jumbotron /> */}
      {/* <FaqsContainer /> */}
    </div>
  )
}
