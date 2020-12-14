import React from "react"
import "./styles/GlobalStyles.css"
import GlobalNav from "./Navbar/GlobalNav"
import { Footer } from "./Footer"

const Layout = ({ children }) => {
  return (
    <>
      <GlobalNav />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
