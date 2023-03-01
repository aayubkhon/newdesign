import React from "react";
import {
  Container,
  Title,
  Wrapper,
  GirlImg,
  AboutTesti,
  GirlsName,
  GirlsJob,
} from "./style";
import girl from "../../Assets/Logo/girl.svg";
export default function Testimonials() {
  return (
    <Container>
      <Title>What Our Customer Says</Title>
      <Wrapper>
        <GirlImg src={girl} alt="" />
        <AboutTesti>
          I like Furniking.com and as compared to other company it's polices and
          customers support is very good easy to reach., also many time they
          unable to delivered. The ultricies are pregnant while the quis is
          suspended. Risus commodo viverra maecenas accumsan lacus vel
          facilisist amet.
          <GirlsName>Angelina Joly</GirlsName>
          <GirlsJob>Co-founder</GirlsJob>
        </AboutTesti>
      </Wrapper>
    </Container>
  );
}
