import React from 'react'
import { Footer } from '../components'
export default function footer() {
  return (
    <Footer>
      <Footer.Title>TrailerPeak</Footer.Title>
      <Footer.Row>
        <Footer.Column>
          <Footer.Text>
          TrailerPeak offers a personalized and immersive movie trailer experience, 
          catering to the diverse tastes and preferences of film enthusiasts.
           The website utilizes advanced recommendation algorithms to curate a tailored selection of trailers based on users' viewing history,
            genre preferences, and ratings. By delivering highly relevant and intriguing trailers,
             TrailerPeak ensures users discover new movies that resonate with their individual interests.<Footer.Break />
               <Footer.Link href='https://www.youtube.com/@trailerPeak'> <Footer.Button>Youtube</Footer.Button></Footer.Link>
                
          </Footer.Text>

      
        

        </Footer.Column>
      </Footer.Row>
      <Footer.Break />
      <Footer.Text>This site does not store any files on its server. All contents are provided by non-affiliated third parties.</Footer.Text>
    </Footer>
  )
}
