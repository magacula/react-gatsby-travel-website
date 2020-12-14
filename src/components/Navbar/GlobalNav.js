import React, { useState } from "react"
import {
  Nav,
  NavbarContainer,
  NavLogo,
  NavIcon,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  Bars,
  Times,
} from "./NavbarElements"

const GlobalNav = () => {
  const [click, setClick] = useState(false)

  const handleClick = () => setClick(!click) // toggle the mobile icon from 3 bars to X

  return (
    <Nav click={click}>
      <NavbarContainer>
        <NavLogo to="/">
          <NavIcon />
          XCAPE
        </NavLogo>
        <MobileIcon onClick={handleClick} click={click}>
          {click ? <Times /> : <Bars />}
        </MobileIcon>
        <NavMenu onClick={handleClick} click={click}>
          <NavItem>
            <NavLinks to="/">Home</NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to="/destinations">Explore</NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to="/about">About Us</NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to="/contact">Contact</NavLinks>
          </NavItem>
        </NavMenu>
      </NavbarContainer>
    </Nav>
  )
}

export default GlobalNav
