import React, { useState } from "react";
import { Nav, NavLink, NavLogo, NavH2, NavContainer, NavMenu, NavMenuItem, NavIcon, Bars } from "./NavbarElements";
import { GiFullPizza } from "react-icons/gi";
import {FaPizzaSlice} from 'react-icons/fa';


const Navbar = ({ openMenu }) => {
  const [hover, setHover] = useState(false);
  const onHover = () => {
    setHover(false);
  };

  const onLeave = () => {
    setHover(true);
  };

  return (
    <>
      <Nav>
        <NavLink to="/" onMouseEnter={onHover} onMouseLeave={onLeave}>
          {hover ? <FaPizzaSlice /> : <GiFullPizza />}
          <NavH2>PizzaJack</NavH2>
        </NavLink>
        <NavIcon onClick={openMenu}>
          <p>Menu</p>
          <Bars />
        </NavIcon>
      </Nav>
    </>
  );
};

export default Navbar;
