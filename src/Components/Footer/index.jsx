import React from "react";
import {
  Container,
  Wrapper,
  MainItems,
  LogoItems,
  Logo,
  Title,
  BoxTitles,
} from "./style";
import logos from "../../Assets/Logo/logo.svg";
const Footer = () => {
  return (
    <Container>
      <Wrapper>
        <MainItems>
        <LogoItems>
          <Logo src={logos} alt="" />
          <Title>Furniking</Title>
        </LogoItems>
        <p>adasdasd</p>
        </MainItems>
        <div>
          <Title>Help</Title>
          <BoxTitles>adsa</BoxTitles>
        </div>
        <div>
          <Title>Store</Title>
          <BoxTitles>adsa</BoxTitles>
        </div>
        <div>
          <Title>Supports</Title>
          <BoxTitles>adsa</BoxTitles>
        </div>
      </Wrapper>
    </Container>
  );
};

export default Footer;
