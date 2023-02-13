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
margin-bottom:30px;
  width: 50px;
  height: 40px;
  margin-top:20px;
  cursor: pointer;

`;

const LogoTitle = styled.p`
  font-family: "Rubik";
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  color: #555555;
  margin-top:20px;
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
  font-size:14px;
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
  width: 55px;
  height: 42px;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  left: 89%;
  border-radius:8px;
  border-top-left-radius:0;
  border-bottom-left-radius:0;
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
