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
      </Wrapper>
        <Nav>
          <NavItem>HOME</NavItem>
          <NavItem>SHOP</NavItem>
          <NavItem>BLOG</NavItem>
          <NavItem>ABOUT</NavItem>
          <NavItem>CONTACT US</NavItem>
        </Nav>
    </Container>
  );
};

export default Navbar;
