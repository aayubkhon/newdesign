import React from 'react'
import { Carousel } from 'antd'
import { Container } from './style'
const NavCarousel = () => {

  return (
    <Container>
      <Carousel autoplay dots={true} >
      <div>
        <h3>1</h3>
      </div><div>
        <h3>2</h3>
      </div><div>
        <h3>3</h3>
      </div><div>
        <h3>4</h3>
      </div>
      </Carousel>
    </Container>
  )
}

export default NavCarousel