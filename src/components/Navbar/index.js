import React, { useState, useEffect } from "react"
import { FaBars, FaTimes } from "react-icons/fa"
import { IconContext } from "react-icons/lib"
import {
  Nav,
  NavbarContainer,
  NavLogo,
  NavIcon,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
} from "./NavbarElements"

const Navbar = () => {
  const [click, setClick] = useState(false)
  const [scroll, setScroll] = useState(false)

  const handleClick = () => setClick(!click) // toggle the mobile icon from 3 bars to X

  const changeNavbarColor = () => {
    // if the scrollY value is more than 80px then we change the state value of the scroll to true
    if (window.scrollY >= 80) {
      setScroll(true)
    } else {
      setScroll(false)
    }
  }

  useEffect(() => {
    changeNavbarColor()
    window.addEventListener("scroll", changeNavbarColor)
  }, [])

  return (
    <>
      <Nav active={scroll} click={click}>
        <NavbarContainer>
          <NavLogo to="/" active={scroll}>
            <NavIcon active={scroll} />
            XCAPE
          </NavLogo>
          <MobileIcon onClick={handleClick} active={scroll} click={click}>
            {click ? <FaTimes /> : <FaBars />}
          </MobileIcon>
          <NavMenu onClick={handleClick} click={click}>
            <NavItem>
              <NavLinks to="/" active={scroll}>
                Home
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="/" active={scroll}>
                Images
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="/" active={scroll}>
                Destinations
              </NavLinks>
            </NavItem>
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </>
  )
}

export default Navbar
