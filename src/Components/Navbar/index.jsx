import React from "react";
import { Container } from "./style";
import logo from "../../Assets/Logo/logo.svg"
import search from "../../Assets/Logo/search.svg"
import belt from "../../Assets/Logo/belt.svg"
import shop from "../../Assets/Logo/shop.svg"
import contact from "../../Assets/Logo/contact.svg"

const Navbar = () => {
  return <Container>
    <div>
        <div>
            <img src={logo} alt="" />
            <p>Furniking</p>
        </div>
        <div>
            <input type="text" placeholder="Search here" />
            <select>
                <option>Categories</option>
                <option>Sofa</option>
                <option>Chair</option>
            </select>
            <img src={search} alt="" />
        </div>
        <div>
            <img src={shop} alt="" />
            <img src={belt} alt="" />
            <img src={contact} alt="" />
        </div>
    </div>
  </Container>;
};

export default Navbar;
