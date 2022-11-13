import React from "react";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarMenu,
  SidebarLink,
  SideBtnWrap,
  SidebarRoute,
} from "./SidebarElements";

import { useSpring, animated } from 'react-spring'

const Sidebar = ({ menuState, closeMenu }) => {
  // const props = useSpring({
  //   from: {
  //     opacity: menuState ? 0 : 1,
  //     visibility: menuState ? "hidden": "visible",
  //   },
  //   to: {
  //     opacity: menuState ? 1 : 0,
  //     visibility: menuState ? "visible": "hidden",
  //   }
  // });

  // return (
  //   <animated.div style={props}>
  //     <SidebarContainer>
  //             <Icon onClick={closeMenu}>
  //               <CloseIcon />
  //             </Icon>
  //             <SidebarMenu>
  //               <SidebarLink smooth to="#pizza" onClick={closeMenu}>Pizzas</SidebarLink>
  //               <SidebarLink smooth to="#dessert" onClick={closeMenu}>Desserts</SidebarLink>
  //               <SidebarLink to="/" onClick={closeMenu}>Full Menu</SidebarLink>
  //             </SidebarMenu>
  //             <SideBtnWrap>
  //               <SidebarRoute to="/">Order</SidebarRoute>
  //             </SideBtnWrap>
  //           </SidebarContainer>
  //   </animated.div>)
  
  return (
    <SidebarContainer
      style={{
        opacity: !menuState ? 0 : 1,
        transition: "all 0.2s ease-in-out",
        right: !menuState ? -1000 : 0,
      }}
    >
      <Icon onClick={closeMenu}>
        <CloseIcon />
      </Icon>
      <SidebarMenu>
        <SidebarLink smooth to="#pizza" onClick={closeMenu}>
          Pizzas
        </SidebarLink>
        <SidebarLink smooth to="#dessert" onClick={closeMenu}>
          Desserts
        </SidebarLink>
        <SidebarLink to="/" onClick={closeMenu}>
          Full Menu
        </SidebarLink>
      </SidebarMenu>
      <SideBtnWrap>
        <SidebarRoute to="/">Order</SidebarRoute>
      </SideBtnWrap>
    </SidebarContainer>
  );

};

export default Sidebar;
