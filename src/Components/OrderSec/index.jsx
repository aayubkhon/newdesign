import React from 'react'
import { Container, IconBox, IconPrice, Icons, IconsImg, IconTitle, Wrapper } from './style'
import free from "../../Assets/Logo/free.svg"
const OrderIcon = () => {
  return (
    <Container>
        <Wrapper>
            <IconBox>
            <IconsImg src={free} alt="" />
            <Icons>
            <IconTitle>Free Shipping</IconTitle>
            <IconPrice>Orders over $100</IconPrice>
            </Icons>
            </IconBox>
        </Wrapper>
    </Container>
  )
}

export default OrderIcon