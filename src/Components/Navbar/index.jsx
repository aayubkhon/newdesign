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
  CarouselSection,
  DropDown,
} from "./style";
import { Collections } from "../mock/data";
import menu from "../../Assets/Logo/menu.svg";
import NavCarousel from "../Navbar/Carousel"
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Container>
      <Menu>
    <DropDown>
    <Wrapper>
      <MenuLogo onClick={() => setIsOpen(!isOpen)} src={menu} alt="" />
        <Button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? "" : ""} All Colections
        </Button>
      </Wrapper>
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
    </DropDown>
        <div>
        <CarouselSection>
          <NavCarousel/>
        </CarouselSection>
        </div>
        <Main>
          <Nav>
            <NavItem>HOME</NavItem>
            <NavItem>SHOP</NavItem>
            <NavItem>BLOG</NavItem>
            <NavItem>ABOUT</NavItem>
            <NavItem>CONTACT US</NavItem>
          </Nav>
        </Main>
      </Menu>
    </Container>
  );
};

export default Navbar;

{
  /* <Wrapper>
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
       <CarouselSec key={value.id}>
         <TableName>{value.name}</TableName>
       </CarouselSec>
     );
   })}
 </DropMneu>
  )}
</Main>
</Wrapper> */
}
