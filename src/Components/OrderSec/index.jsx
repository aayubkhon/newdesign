import React from "react";
import {
  Container,
  IconBox,
  IconPrice,
  Icons,
  IconsImg,
  IconTitle,
  Wrapper,
} from "./style";
import free from "../../Assets/Logo/free.svg";
import gift from "../../Assets/Logo/gift.svg";
import wallet from "../../Assets/Logo/wallet.svg";
import maic from "../../Assets/Logo/maic.svg";
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
        <IconBox>
          <IconsImg src={gift} alt="" />
          <Icons>
            <IconTitle>Smart Gift Card</IconTitle>
            <IconPrice>Buy $1000 to get card</IconPrice>
          </Icons>
        </IconBox>
        <IconBox>
          <IconsImg src={wallet} alt="" />
          <Icons>
            <IconTitle>Quick Payment</IconTitle>
            <IconPrice>100% secure payment</IconPrice>
          </Icons>
        </IconBox>
        <IconBox>
          <IconsImg src={maic} alt="" />
          <Icons>
            <IconTitle>24/7 Support</IconTitle>
            <IconPrice>Quick support</IconPrice>
          </Icons>
        </IconBox>
      </Wrapper>
    </Container>
  );
};

export default OrderIcon;
