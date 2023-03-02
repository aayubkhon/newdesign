import React from 'react'
import { CardImg, Container, ImgTitle, ImgWrapper, Title, Wrapper } from './style'
import card from "../../Assets/Img/Card.png"
import card1 from "../../Assets/Img/Card1.png"
import card2 from "../../Assets/Img/Card2.png"
import card3 from "../../Assets/Img/Card3.png"

const Lates = () => {
  return (
    <Container>
      <Title>Our Latest Articles</Title>
        <Wrapper>
        <ImgWrapper>
            <CardImg src={card} alt="" />
            <ImgTitle>Begineer guide buying minimal sofa</ImgTitle>
        </ImgWrapper>
        <ImgWrapper>
            <CardImg src={card1} alt="" />
            <ImgTitle>Begineer guide buying minimal sofa</ImgTitle>
        </ImgWrapper>
        <ImgWrapper>
            <CardImg src={card3} alt="" />
            <ImgTitle>Begineer guide buying minimal sofa</ImgTitle>
        </ImgWrapper>
        <ImgWrapper>
            <CardImg src={card2} alt="" />
            <ImgTitle>Begineer guide buying minimal sofa</ImgTitle>
        </ImgWrapper>
        </Wrapper>
    </Container>
  )
}

export default Lates