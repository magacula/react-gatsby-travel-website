import React, { useState, useEffect } from "react"
import { FaBars, FaTimes } from "react-icons/fa"
import styled from "styled-components"
import {
  NavbarContainer,
  NavLogo,
  NavIcon,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
} from "./NavbarElements"

const HomeNavbar = () => {
  const [click, setClick] = useState(false)
  const [scroll, setScroll] = useState(false)

  const handleClick = () => setClick(!click) // toggle the mobile icon from 3 bars to X

  const changeNavbarBg = () => {
    // if the scrollY value is more than 80px then we change the state value of the scroll to true
    if (window.scrollY >= 80) {
      setScroll(true)
    } else {
      setScroll(false)
    }
  }

  useEffect(() => {
    changeNavbarBg()
    window.addEventListener("scroll", changeNavbarBg)

    return () => {
      console.log("cleanup")
      window.removeEventListener("scroll", changeNavbarBg)
    }
  }, [])

  return (
    <HomeNav active={scroll} click={click}>
      <NavbarContainer>
        <NavLogo to="/" active={scroll}>
          <NavIcon active={scroll} />
          XCAPE
        </NavLogo>
        <MobileIcon onClick={handleClick}>
          {click ? <Times /> : <Bars />}
        </MobileIcon>
        <NavMenu onClick={handleClick} click={click}>
          <NavItem>
            <NavLinks to="/">Home</NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to="/destinations">Destinations</NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to="/contact">Contact</NavLinks>
          </NavItem>
        </NavMenu>
      </NavbarContainer>
    </HomeNav>
  )
}

export default HomeNavbar

export const Bars = styled(FaBars)`
  color: #fff;
`

export const Times = styled(FaTimes)`
  color: #141414;
`

// Nav is styled to be transparent as default, then when scrolled, changes
// background to white
export const HomeNav = styled.nav`
  background: ${({ active }) => (active ? "#141414" : "#transparent")};
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 999;

  @media screen and (max-width: 960px) {
    background: ${({ click }) => (click ? "#fff" : "#141414")};
    transition: 0.8s all ease;
  }
`
