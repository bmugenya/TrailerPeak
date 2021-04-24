import React from 'react'
import { Jumbo } from '../components'
import jumboData from '../utils/jumbo.json'

function Jumbotron() {
  return (
    <>
      <Jumbo.Container>
        {jumboData.map((item) => (
          <Jumbo key={item.id} direction={item.direction}>
            <Jumbo.Pane>
              <Jumbo.Title>{item.title}</Jumbo.Title>
              <Jumbo.SubTitle>{item.subTitle}</Jumbo.SubTitle>
            </Jumbo.Pane>
            <Jumbo.Pane>
              <Jumbo.Image src={item.image} alt={item.alt} />
            </Jumbo.Pane>
          </Jumbo>
        ))}
      </Jumbo.Container>
      {/* </div> */}
    </>
  )
}

export default Jumbotron
