import styled from "styled-components";

export const Container = styled.div`
  margin-top: 80px;
  width: 100%;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const IconBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Icons = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 20px;
  margin-left: 10px;
`;

export const IconsImg = styled.img`
  width: 45px;
  cursor: pointer;
  :active {
    transform: scale(0.97);
    opacity: 0.7;
  }
`;

export const IconTitle = styled.p`
  font-family: "Rubik";
  font-style: normal;
  font-weight: 500;
  font-size: 17px;
  color: #555555;
  cursor: pointer;
  margin: 0px;
`;

export const IconPrice = styled.p`
  font-family: "Rubik";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  color: rgba(81, 81, 81, 0.71);
  cursor: pointer;
`;
