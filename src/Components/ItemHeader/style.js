import styled, {css} from "styled-components";

const common = css`
  font-family: "Rubik";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  color: #b0b0b0;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 1300px;
  margin-top: 40px;
`;
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;
const MainLogo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left:80px;
`;


const ImgLogo = styled.img`
  width: 50px;
  height: 40px;
  cursor: pointer;

`;

const LogoTitle = styled.p`
  font-family: "Rubik";
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  color: #555555;
`;

const Input = styled.input`
  width: 500px;
  height: 46px;
  box-sizing: border-box;
  border: 2px solid #7ac751;
  border-radius: 8px;
  padding-left: 20px;
  ${common}
`;

const Search = styled.img`
  width: 20px;
  height: 20px;
  cursor: pointer;
  :active {
    transform: scale(0.97);
    opacity: 0.7;
  }
`;

const Item = styled.select`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 44px;
  position: absolute;
  border: 1px solid #7ac751;
  left: 71%;
  cursor: pointer;
`;

const Icons = styled.img`
  margin-left: 10px;
  cursor: pointer;
  :active {
    transform: scale(0.97);
    opacity: 0.7;
  }
`;

const SearchBox = styled.div`
  background: #7ac751;
  width: 58px;
  height: 43px;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  left: 88%;
  border-radius: 3px;
  box-sizing: border-box;
`;
const Logo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 50px;
`;

export {
  Container,
  Wrapper,
  MainLogo,
  Item,
  Search,
  Logo,
  LogoTitle,
  ImgLogo,
  Input,
  SearchBox,
  Icons,
};
