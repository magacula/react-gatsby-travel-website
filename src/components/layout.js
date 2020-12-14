import React from "react"
import "./styles/GlobalStyles.js"
import GlobalNav from "./Navbar/GlobalNav"
import { GlobalStyles } from "./styles/GlobalStyles"
import { Footer } from "./Footer"

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyles />
      <GlobalNav />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
