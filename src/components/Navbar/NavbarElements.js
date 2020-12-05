// file that holds NavBar elements that are styled with styled components

import styled from "styled-components"
import { GiPalmTree } from "react-icons/gi"
import { Link } from "gatsby"

// Nav is styled to be transparent as default, then when scrolled, changes
// background to white
export const Nav = styled.nav`
  background: ${({ active }) => (active ? "#fff" : "#transparent")};
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 999;

  @media screen and (max-width: 960px) {
    background: ${({ click }) => (click ? "#fff" : "transparent")};
    transition: 0.8s all ease;
  }
`

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 100%;
  max-width: 1000px;
`

export const NavLogo = styled(Link)`
  color: ${({ active }) => (active ? "#141414" : "#fff")};
  justify-self: flex-start;
  cursor: pointer;
  text-decoration: none;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  font-family: "Righteous", cursive;
`

export const NavIcon = styled(GiPalmTree)`
  margin: 0 0.5rem 0 2rem;
  fill: ${({ active }) => (active ? "#141414" : "#fff")};
`

/*******************************************************************
 *******************  Mobile Menu  *********************************
 *******************************************************************/

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 960px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(
      -100%,
      60%
    ); // x-axis (left): -100% and y-axis (down): 60%
    font-size: 1.8rem;
    cursor: pointer;
  }
`

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;

  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 90vh;
    position: absolute;
    top: ${({ click }) => (click ? "100%" : "-1000px")};
    opacity: 1;
    transition: all 0.4s ease;
    background: #fff;
  }
`

export const NavItem = styled.li`
  height: 80px;

  @media screen and (max-width: 960px) {
    width: 100%;
  }
`

export const NavLinks = styled(Link)`
  color: ${({ active }) => (active ? "#141414" : "#fff")};
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0.5rem 1rem;
  height: 100%;
  font-family: "PT Sans Caption", sans-serif;
  font-weight: 700;

  &:hover {
    color: #f26a2e;
    transition: all 0.3s ease;
  }

  @media screen and (max-width: 960px) {
    color: #141414;
    text-align: center;
    padding: 2rem;
    width: 100%;
    display: table;

    &:hover {
      color: #ff4040;
      transition: all 0.3s ease;
    }
  }
`
