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
import facebook from "../../Assets/Logo/facebook.svg";
import instagram from "../../Assets/Logo/instagram.svg";
import twitter from "../../Assets/Logo/twitter.svg";
import painterest from "../../Assets/Logo/pinterest.svg";

const Footer = () => {
  return (
    <Container>
      <Wrapper>
        <MainItems>
          <LogoItems>
            <Logo src={logos} alt="" />
            <Title>Furniking</Title>
          </LogoItems>
          <BoxTitles>Chicago</BoxTitles>
          <BoxTitles>Los Angels</BoxTitles>
          <BoxTitles>Miami</BoxTitles>
          <LogoItems>
            <Logo src={facebook} alt="" />
            <Logo src={instagram} alt="" />
            <Logo src={twitter} alt="" />
            <Logo src={painterest} alt="" />
          </LogoItems>
        </MainItems>
        <div>
          <Title>Help</Title>
          <BoxTitles>Privacy Policy</BoxTitles>
          <BoxTitles>Shipping & Delivery</BoxTitles>
          <BoxTitles>Refund Policy</BoxTitles>
          <BoxTitles>Track Your Order</BoxTitles>
        </div>
        <div>
          <Title>Store</Title>
          <BoxTitles>Furniture</BoxTitles>
          <BoxTitles>Tabble</BoxTitles>
          <BoxTitles>Sofa</BoxTitles>
          <BoxTitles>Other</BoxTitles>
        </div>
        <div>
          <Title>Supports</Title>
          <BoxTitles>Feedback</BoxTitles>
          <BoxTitles>Contact us</BoxTitles>
          <BoxTitles>Dowload app</BoxTitles>
          <BoxTitles>Terms conditins</BoxTitles>
        </div>
      </Wrapper>
    </Container>
  );
};

export default Footer;
