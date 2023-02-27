import React from "react";
import {
  Container,
  Main,
  MainTitle,
  PagesTitle,
  ProductPages,
  Title,
} from "./style";
const Trending = () => {
  return (
    <Container>
      <Main>
        <MainTitle>
          <Title>Trending</Title>
        </MainTitle>
        <ProductPages>
          <PagesTitle>Top Products</PagesTitle>
          <PagesTitle>New Arrivals</PagesTitle>
          <PagesTitle>Best Sellers</PagesTitle>
        </ProductPages>
      </Main>
    </Container>
  );
};

export default Trending;
