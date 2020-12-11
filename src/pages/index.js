import React from "react"
import Destinations from "../components/Destinations"
import Hero from "../components/Hero"
import SEO from "../components/seo"
import HomeNav from "../components/Navbar/HomeNav"
import Stats from "../components/Stats"

const IndexPage = () => (
  <>
    <SEO title="Home" />
    <HomeNav />
    <Hero />
    <Destinations />
    <Stats />
  </>
)

export default IndexPage
