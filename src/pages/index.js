import React from "react"
import Destinations from "../components/Destinations"
import Hero from "../components/Hero"
import SEO from "../components/seo"
import HomeNav from "../components/Navbar/HomeNav"
import Stats from "../components/Stats"
import Testimonials from "../components/Testimonials"

const IndexPage = () => (
  <>
    <SEO title="Home" />
    <HomeNav />
    <Hero />
    <Destinations />
    <Stats />
    <Testimonials />
  </>
)

export default IndexPage
