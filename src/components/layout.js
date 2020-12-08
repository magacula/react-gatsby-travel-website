import React from "react"
import "./styles/GlobalStyles.css"
import GlobalNav from "./Navbar/GlobalNav"

const Layout = ({ children }) => {
  return (
    <>
      <GlobalNav />
      <main>{children}</main>
    </>
  )
}

export default Layout
