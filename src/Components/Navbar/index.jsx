import React from "react";
import {
  Container,
  ImgLogo,
  Input,
  Item,
  Icons,
  Logo,
  LogoTitle,
  MainLogo,
  Search,
  SearchBox,
  Wrapper,
} from "./style";
import logo from "../../Assets/Logo/logo.svg";
import search from "../../Assets/Logo/sear.svg";
import belt from "../../Assets/Logo/belt.svg";
import shop from "../../Assets/Logo/shop.svg";
import contact from "../../Assets/Logo/contact.svg";

const Navbar = () => {
  return (
    <Container>
      <MainLogo>
       <ImgLogo src={logo} alt="" />
        <LogoTitle>Furniking</LogoTitle>
      </MainLogo>
      <Wrapper>
        <Input type="text" placeholder="Search here" />
        <Item>
          <option>Categories</option>
          <option>Chair</option>
          <option>Sofa</option>
        </Item>
        <SearchBox>
          <Search src={search} alt="" />
        </SearchBox>
      </Wrapper>
      <Logo>
          <Icons src={shop} alt="" />
          <Icons src={belt} alt="" />
          <Icons src={contact} alt="" />
      </Logo>
    </Container>
  );
};

export default Navbar;
