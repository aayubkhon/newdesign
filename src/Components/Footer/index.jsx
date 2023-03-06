import React from "react";
import {
  Container,
  Wrapper,
  MainItems,
  LogoItems,
  Logo,
  LogoTitle,
  LogoText,
} from "./style";
import logos from "../../Assets/Logo/logo.svg";
const Footer = () => {
  return (
    <Container>
      <Wrapper>
        <MainItems>
          <LogoItems>
            <Logo src={logos} alt="" />
            <LogoTitle>Funkling</LogoTitle>
            <LogoText>
            Funking is the a popular Ecommerce site. Lorem ipsum dolor sit amet,
            consectetur!
          </LogoText>
          </LogoItems>
        </MainItems>
      </Wrapper>
    </Container>
  );
};

export default Footer;
