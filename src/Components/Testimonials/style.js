import styled from "styled-components";


export const Container = styled.div`
display:flex;
align-items:center;
justify-content:center;
flex-direction:column;
margin-top:80px;
.alice-carousel__next-btn {
    width: 45px;
    height: 45px;
    border-radius: 50%;
    box-shadow: 0px 10px 50px rgba(13, 38, 59, 0.1);
    background: #ffffff;
    border: 1px solid #e6e9ec;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    right: -8%;
    top: 50%;
    transform: translate(0, -50%);
    font-size: 15px;
    cursor: pointer;
    transition: all 0.3s ease;
    :hover {
      box-shadow: 0px 5px 20px grey;
    }
  }
  .alice-carousel__prev-btn {
    width: 45px;
    height: 45px;
    border-radius: 50%;
    box-shadow: 0px 10px 50px rgba(13, 38, 59, 0.1);
    background: #ffffff;
    border: 1px solid #e6e9ec;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    left: -8%;
    top: 50%;
    transform: translate(0, -50%);
    font-size: 15px;
    cursor: pointer;
    transition: all 0.3s ease;
    :hover {
      box-shadow: 0px 5px 20px grey;
    }
  }
`

export const Wrapper = styled.div`
display:flex;
flex-direction:column;
background: #F8FAFB;
box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.05);
border-radius: 8px;
width:800px;
height:300px;
position:relative;
margin-top:70px;
`

export const Title = styled.p`
font-family: 'Mulish';
font-style: normal;
font-weight: 700;
font-size: 36px;
text-align: center;
text-transform: uppercase;
color: #555555;
`

export const GirlImg = styled.img`
width:88px;
height:88px;
position:absolute;
left:45%;
bottom:85%;
`

export const AboutTesti = styled.p`
font-family: 'DM Sans';
font-style: normal;
font-weight: 400;
font-size: 16px;
text-align: center;
color: #515151;
width:66%;
position:absolute;
top:30%;
left:18%;
`

export const GirlsName = styled.p`
font-family: 'Mulish';
font-style: normal;
font-weight: 600;
font-size: 24px;
text-align: center;
color: #555555;
margin-top:30px;
`

export const GirlsJob = styled.p`
font-family: 'Rubik';
font-style: normal;
font-weight: 400;
font-size: 16px;
text-align: center;
color: #515151;
`