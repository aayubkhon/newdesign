import React from "react";
import { ChairImg, Container, Items, Price, Sale, Size, Title, Wrapper } from "./style";
import { Products } from "../mock/trading";
import sofa from "../../Assets/Img/sofa1.png";
const TopProduct = () => {
  return (
    <Container>
      {Products.map((data) => {
        return (
          <Wrapper key={data.id}>
            <ChairImg src={data.src} alt="" />
            <Title>{data.title}</Title>
            <Size>{data.size}</Size>
           <Items>
           <Price>{data.price}</Price>
            <Sale>{data.sale}</Sale>
           </Items>
          </Wrapper>
        );
      })}
    </Container>
  );
};

export default TopProduct;
