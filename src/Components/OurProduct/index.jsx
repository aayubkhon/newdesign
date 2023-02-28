import React from 'react'
import { Container, Main, MainTitle, PagesTitle, ProductPages, Title } from './style'

const OurProduct = () => {
  return (
     <Container>
    <Main>
      <MainTitle>
        <Title>OUR PRODUCTS</Title>
      </MainTitle>
      <ProductPages>
        <PagesTitle>All Products</PagesTitle>
        <PagesTitle>Best Sellers</PagesTitle>
        <PagesTitle>New Arrivals</PagesTitle>
        <PagesTitle>Todays Deals</PagesTitle>
      </ProductPages>
    </Main>
  </Container>
  )
}

export default OurProduct