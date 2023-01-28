import React from 'react'
import { Container, Main, Nav, Wrapper } from './style'
import head from "../../Assets/Logo/head.svg"
const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <p>Welcome to our online shop</p>
        <Main>
        <Nav>
          <select>
            <option>English(USD)</option>
            <option>Korean(한국)</option>
          </select>
          <img src={head} alt="" />
          <button>Login</button>
          <p>or</p>
          <button>Sign Up</button>
        </Nav>
        </Main>
      </Wrapper>
      asdsa
    </Container>
  )
}

export default Navbar