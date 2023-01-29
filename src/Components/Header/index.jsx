import React from 'react'
import { Container, Main, Nav, Item, Title, Wrapper, Select, Button, Something } from './style'
import head from "../../Assets/Logo/head.svg"
const Header = () => {
  return (
    <Container>
      <Wrapper>
        <Title >Welcome to our online shop</Title>
        <Main>
        <Nav>
          <Select>
            <Item>English</Item>
            <Item>Korean</Item>
          </Select>
          <img src={head} alt="" />
          <Button>Login</Button>
          <Something>or</Something>
          <Button>Sign Up</Button>
        </Nav>
        </Main>
      </Wrapper>
    </Container>
  )
}

export default Header