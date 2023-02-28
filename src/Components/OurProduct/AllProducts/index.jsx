import React from 'react'
import { AllSofa } from '../../mock/ourproduct';
import { Container,Wrapper,SofaImg,Title,Size,Items,Price,Sale } from "../AllProducts/style";
const AllProduct = () => {
  return (
    <Container>
      {AllSofa.map((data) => {
        return (
          <Wrapper key={data.id}>
            <SofaImg src={data.src} alt="" />
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
  )
}

export default AllProduct