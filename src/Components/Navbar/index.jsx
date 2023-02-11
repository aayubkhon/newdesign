import React, { useState } from "react";
import {
  Button,
  Container,
  MenuLogo,
  TableName,
  Menu,
  DropMneu,
  Nav,
  NavItem,
  Wrapper,
  Main,
  Mains,
} from "./style";
import { Collections } from "../mock/data";
import menu from "../../Assets/Logo/menu.svg";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Container>
      <Wrapper>
        <Menu>
          <MenuLogo onClick={() => setIsOpen(!isOpen)} src={menu} alt="" />
          <Button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? "" : ""} All Colections
          </Button>
        </Menu>
        <Main>
        {isOpen && (
           <DropMneu>
            {Collections.map((value) => {
              return (
                <div key={value.id}>
                  <TableName>{value.name}</TableName>
                </div>
              );
            })}
          </DropMneu>
        )}
        </Main>
      </Wrapper>
      <Main>
       <Nav>
          <NavItem>HOME</NavItem>
          <NavItem>SHOP</NavItem>
          <NavItem>BLOG</NavItem>
          <NavItem>ABOUT</NavItem>
          <NavItem>CONTACT US</NavItem>
        </Nav>
        <Mains>
          <p>asdasd</p>
        </Mains>
       </Main>
       <Main>
       <Nav>
          <NavItem>HOME</NavItem>
          <NavItem>SHOP</NavItem>
          <NavItem>BLOG</NavItem>
          <NavItem>ABOUT</NavItem>
          <NavItem>CONTACT US</NavItem>
        </Nav>
        <Mains>
          <p>asdasd</p>
        </Mains>
       </Main> <Main>
       <Nav>
          <NavItem>HOME</NavItem>
          <NavItem>SHOP</NavItem>
          <NavItem>BLOG</NavItem>
          <NavItem>ABOUT</NavItem>
          <NavItem>CONTACT US</NavItem>
        </Nav>
        <Mains>
          <p>asdasd</p>
        </Mains>
       </Main> <Main>
       <Nav>
          <NavItem>HOME</NavItem>
          <NavItem>SHOP</NavItem>
          <NavItem>BLOG</NavItem>
          <NavItem>ABOUT</NavItem>
          <NavItem>CONTACT US</NavItem>
        </Nav>
        <Mains>
          <p>asdasd</p>
        </Mains>
       </Main> <Main>
       <Nav>
          <NavItem>HOME</NavItem>
          <NavItem>SHOP</NavItem>
          <NavItem>BLOG</NavItem>
          <NavItem>ABOUT</NavItem>
          <NavItem>CONTACT US</NavItem>
        </Nav>
        <Mains>
          <p>asdasd</p>
        </Mains>
       </Main> <Main>
       <Nav>
          <NavItem>HOME</NavItem>
          <NavItem>SHOP</NavItem>
          <NavItem>BLOG</NavItem>
          <NavItem>ABOUT</NavItem>
          <NavItem>CONTACT US</NavItem>
        </Nav>
        <Mains>
          <p>asdasd</p>
        </Mains>
       </Main> <Main>
       <Nav>
          <NavItem>HOME</NavItem>
          <NavItem>SHOP</NavItem>
          <NavItem>BLOG</NavItem>
          <NavItem>ABOUT</NavItem>
          <NavItem>CONTACT US</NavItem>
        </Nav>
        <Mains>
          <p>asdasd</p>
        </Mains>
       </Main> <Main>
       <Nav>
          <NavItem>HOME</NavItem>
          <NavItem>SHOP</NavItem>
          <NavItem>BLOG</NavItem>
          <NavItem>ABOUT</NavItem>
          <NavItem>CONTACT US</NavItem>
        </Nav>
        <Mains>
          <p>asdasd</p>
        </Mains>
       </Main>
    </Container>
  );
};

export default Navbar;
