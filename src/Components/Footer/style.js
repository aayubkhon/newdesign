import styled, { css } from "styled-components";

const common = css`
  font-family: "Rubik";
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 28px;
  color: #555555;
`;

const Container = styled.div`
  display: flex;
  margin-top:80px;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const LogoItems = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction:column;
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

const LogoTitle = styled.p`
  ${common}
  margin:0;
  padding: 0;
  margin-left: 10px;
`;

const LogoText = styled.p`
  ${common}
  margin:0;
  padding: 0;
  font-size: 16px;
  width:70%;
`;

export { Container, Wrapper, MainItems, LogoItems, Logo,LogoText, LogoTitle };
