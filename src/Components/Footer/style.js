import styled, { css } from "styled-components";

const common = css`
  font-family: "Rubik";
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 20px;
  color: #555555;
`;

const Container = styled.div`
  margin-top:80px;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center; 
  justify-content:space-around;
`;
const LogoItems = styled.div`
  display: flex;
  align-items: center;
`;
const MainItems = styled.div`
  display: flex;
  align-items:center;
  flex-direction:column; 
`;

const Logo = styled.img`
  width: 45px;
  height: 45px;
`;

const Title = styled.p`
  ${common}
  margin:0;
  padding: 0;
`;

const BoxTitles = styled.p`
  ${common}
  margin:0;
  padding: 0;
  font-size: 16px;
`;

export { Container, Wrapper, MainItems, LogoItems, Logo,BoxTitles, Title };
