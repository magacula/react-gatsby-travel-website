import React from "react"
import Destinations from "../components/Destinations"
import Hero from "../components/Hero"
import SEO from "../components/seo"
import HomeNav from "../components/Navbar/HomeNav"

const IndexPage = () => (
  <>
    <SEO title="Home" />
    <HomeNav />
    <Hero />
    <Destinations />
  </>
)

export default IndexPage
