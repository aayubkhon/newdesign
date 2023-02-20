import React from 'react'
import { Carousel } from 'antd'
import { Container, Img, ImgSec, Wrapper } from './style'
import furniture1 from "../../../Assets/Img/furniture1.png"
import furniture2 from "../../../Assets/Img/furniture2.jpeg"
import furniture3 from "../../../Assets/Img/hero.jpg"
const NavCarousel = () => {

  return (
    <Container>
      <Wrapper>
      <Carousel autoplay dotPosition='buttom' draggable>
      <ImgSec>
      <Img src={furniture1} alt="" />
      </ImgSec>
      <ImgSec>
      <Img src={furniture2} alt="" />
      </ImgSec>
      <ImgSec>
      <Img src={furniture3} alt="" />
      </ImgSec>
      </Carousel>
      </Wrapper>
    </Container>
  )
}

export default NavCarousel