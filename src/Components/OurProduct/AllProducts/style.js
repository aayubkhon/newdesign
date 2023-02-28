import styled,{css} from "styled-components"


const common = css`
  font-family: "Rubik";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  color: #555555;
  cursor: pointer;
`;

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  row-gap: 30px;
  margin-top: 20px;
  margin-left: 45px;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SofaImg = styled.img`
  width: 300px;
  height: 320px;
  cursor: pointer;
`;

export const Title = styled.p`
  ${common}
  font-family: 'Mulish';
  font-size: 14px;
  text-transform: uppercase;
  color: rgba(117, 117, 117, 0.71);
  margin-top: 15px;
`;

export const Size = styled.p`
  ${common}
`;
export const Items = styled.div`
  display: flex;
  align-items: center;
`;

export const Price = styled.p`
  ${common}
  font-family: 'Mulish';
  font-size: 18px;
  color: #7ac751;
  text-align: center;
`;

export const Sale = styled.p`
  ${common}
  font-size: 18px;
  text-align: center;
  text-decoration-line: line-through;
  color: #cccccc;
  margin-left: 8px;
`;
