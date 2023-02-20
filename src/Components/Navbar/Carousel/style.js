import styled from "styled-components";

const Container = styled.div`
display:flex;
flex-direction:column;
padding-left:150px;
`
const Wrapper = styled.div`
display:flex;
flex-direction:column;
margin-left:180px;

`

const ImgSec = styled.div`
display:flex;
align-items:center;
justify-content:center; 
`

const Img = styled.img`
width:900px;
height:440px;
margin-top:10px;
cursor: pointer;
:active {
    opacity: 0.9;
  }
`

export{Container,Wrapper,ImgSec,Img}