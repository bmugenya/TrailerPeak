import React from 'react'
import { Footer } from '../components'
export default function footer() {
  return (
    <Footer>
      <Footer.Title>Narutopia</Footer.Title>
      <Footer.Row>
        <Footer.Column>
          <Footer.Link href='#'>
            Narutopia is a streaming website, where you can watch naruto
            epsiodes online for free.Lorem ipsum dolor sit amet, consectetur
            adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit
            esse cillum dolore eu fugiat nulla pariatur.
          </Footer.Link>
        </Footer.Column>
      </Footer.Row>
      <Footer.Break />
      <Footer.Text>Nautopia</Footer.Text>
    </Footer>
  )
}
