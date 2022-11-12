import React from "react";
import { useSpring, animated } from "react-spring";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarMenu,
  SidebarLink,
  SideBtnWrap,
  SidebarRoute,
} from "./SidebarElements";

const Sidebar = ({ showMenu, closeMenu }) => {

  const menuTransition = useSpring({
    opacity: showMenu? 1: 0,
    right: showMenu? -1000: 0,
    config: {duration: 250}
  })

  if (!showMenu) return null;
  return (
      <animated.div style={menuTransition}>
      <SidebarContainer>
        <Icon onClick={closeMenu}>
          <CloseIcon />
        </Icon>
        <SidebarMenu>
          <SidebarLink smooth to="#pizza" onClick={closeMenu}>Pizzas</SidebarLink>
          <SidebarLink smooth to="#dessert" onClick={closeMenu}>Desserts</SidebarLink>
          <SidebarLink to="/" onClick={closeMenu}>Full Menu</SidebarLink>
        </SidebarMenu>
        <SideBtnWrap>
          <SidebarRoute to="/">Order</SidebarRoute>
        </SideBtnWrap>
      </SidebarContainer>
      </animated.div>

  );
};

export default Sidebar;
