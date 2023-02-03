import React, { useState } from 'react'
import { Button, Container,MenuLogo,TableName,Menu, DropMneu, Nav, NavItem } from './style'
import { Collections } from '../mock/data';
import menu from "../../Assets/Logo/menu.svg"
const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false);
  return (
    <Container>
    <Menu>
        <MenuLogo onClick={() => setIsOpen(!isOpen)} src={menu} alt="" />
    <Button onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? '' : ''} All Colections
      </Button>
      {isOpen && (
          <DropMneu>
            {Collections.map((value)=>{
                return(
                    <div key={value.id}>
                        <TableName>{value.name}</TableName>
                    </div>
                )
            })}
        </DropMneu>
      )}
      </Menu>
      <Nav>
        <NavItem>HOME</NavItem>
        <NavItem>SHOP</NavItem>
        <NavItem>BLOG</NavItem>
        <NavItem>ABOUT</NavItem>
        <NavItem>CONTACT US</NavItem>
      </Nav>
    </Container>
  )
}

export default Navbar