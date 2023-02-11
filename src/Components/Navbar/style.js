import styled, { css } from "styled-components";

const common = css`
  font-family: "Rubik";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: #555555;
`;

const Container = styled.div`
  display: flex;
  background: #f7f8fa;
  width: 100%;
  height: 50px;
  margin-top: 35px;
`;

const Main = styled.div`
  display: flex;
  flex-direction:column;
  `;

const Mains = styled.div`
  display: flex;
  flex-direction:column;
  margin-top:30px;
  `;
  

const Wrapper = styled.div`
  margin-left: 80px;
`;

const Menu = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
`;

const MenuLogo = styled.img`
  width: 24px;
  height: 24px;
  background: #7ac751;
  position: absolute;
  left: 20px;
  top: 10px;
  cursor: pointer;
`;

const Button = styled.button`
  background: #7ac751;
  width: 250px;
  height: 50px;
  font-family: "Rubik";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  letter-spacing: 0.02em;
  color: #ffffff;
  border: none;
  cursor: pointer;
`;
const DropMneu = styled.div`
  display: flex;
  flex-direction: column;
`;

const TableName = styled.p`
  ${common}
  background: #F7F8FA;
  border: 0.8px solid #e3e3e3;
  width: 250px;
  height: 40px;
  padding: 10px 20px;
  cursor: pointer;
`;
const Nav = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width:710px;
`;

const NavItem = styled.p`
  ${common}
  cursor: pointer;
`;

export {
  Container,
  Main,
  Wrapper,
  Menu,
  Button,
  MenuLogo,
  TableName,
  DropMneu,
  Nav,
  NavItem,
  Mains
};
