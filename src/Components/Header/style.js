import styled, { css } from "styled-components";

const Container = styled.div`
  width: 100%;
`;

const common = css`
  font-family: "Rubik";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  color: #ffffff;
  cursor: pointer;
`;

const Wrapper = styled.div`
  background: #7ac751;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Main = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const Nav = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 80px;
  img {
    margin-left: 10px;
  }
`;

const Title = styled.p`
  margin-left: 80px;
  ${common}
`;
const Select = styled.select`
  border: none;
  color: white;
  background: #7ac751;
  width: 70px;
  cursor: pointer;
`;

const Item = styled.option`
  ${common}
`;

const Button = styled.button`
  ${common}
  border:solid 1px white;
  width: 100px;
  background: #7ac751;
  border-radius: 7px;
  margin-left: 15px;
  :active {
    transform: scale(0.97);
    opacity: 0.7;
  }
`;
const Something = styled.p`
  ${common}
  margin-left:15px;
`;

export {
  Container,
  Wrapper,
  Nav,
  Main,
  Title,
  Item,
  Select,
  Button,
  Something,
};
