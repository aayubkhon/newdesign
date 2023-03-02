import styled from "styled-components";

export const Container = styled.div`
  margin-top: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  row-gap: 30px;
`;

export const Title = styled.p`
  font-family: "Mulish";
  font-style: normal;
  font-weight: 700;
  font-size: 36px;
  line-height: 45px;
  text-transform: uppercase;
  color: #555555;
`;

export const ImgWrapper = styled.div`
  position: relative;
`;
export const ImgTitle = styled.p`
  position: absolute;
  font-family: "Mulish";
  font-style: normal;
  font-weight: 700;
  font-size: 35px;
  line-height: 120%;
  letter-spacing: 0.005em;
  color: #ffffff;
  bottom: 10%;
  width: 70%;
  margin-left: 50px;
  cursor: pointer;
`;

export const CardImg = styled.img`
  width: 570;
  height: 455px;
  margin-left: 28px;
`;
