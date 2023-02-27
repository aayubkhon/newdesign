import styled,{css} from "styled-components";

const common = css`
font-family: 'Mulish';
font-style: normal;
font-weight: 600;
font-size: 20px;
line-height: 30px;
color: #C2C2C2;
cursor: pointer;
`;

export const Container = styled.div`
margin-top:55px;
`

export const Main = styled.div`
display:flex;
align-items:center;
justify-content:center;
flex-direction:column;
width:1400px;
`

export const MainTitle = styled.div`
display:flex;
align-items:center;
justify-content:center;
flex-direction:column;
`

export const ProductPages = styled.div`
display:flex;
align-items:center;
justify-content:space-around;
width:700px;
`
export const Title = styled.p`
${common}
font-weight: 700;
font-size: 36px;
color: #555555;
`

export const PagesTitle = styled.p`
${common}
`
