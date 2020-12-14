import React from "react"
import Destinations from "../components/Destinations"
import Hero from "../components/Hero"
import SEO from "../components/seo"
import HomeNav from "../components/Navbar/HomeNav"
import Stats from "../components/Stats"
import Testimonials from "../components/Testimonials"
import Email from "../components/Email"
import Footer from "../components/Footer"
import "../components/styles/GlobalStyles.css"

const IndexPage = () => (
  <>
    <SEO title="Home" />
    <HomeNav />
    <Hero />
    <Destinations />
    <Stats />
    <Testimonials />
    <Email />
    <Footer />
  </>
)

export default IndexPage
