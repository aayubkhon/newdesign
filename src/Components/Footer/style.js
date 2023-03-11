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
  margin-top: 80px;
width:100%;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;
const LogoItems = styled.div`
  display: flex;
  align-items:center;
`;
const MainItems = styled.div`
  display: flex;
  flex-direction: column;

`;

const Logo = styled.img`
  width: 45px;
  height: 45px;
  padding:0;
  margin-left: 20px;

`;

const Title = styled.p`
  ${common}
  margin:0;
  padding: 0;
  font-size: 24px;
  margin-left: 20px;

  
`;

const BoxTitles = styled.p`
  ${common}
  margin-top: 17px;
  font-size: 16px;
  margin-left: 20px;
`;

const SLOgo = styled.div`
  display: flex;

`;

const SNS = styled.img`
  width: 45px;
  height: 45px;
`;

export { Container, Wrapper, MainItems, LogoItems,SLOgo,SNS,Logo, BoxTitles, Title };
