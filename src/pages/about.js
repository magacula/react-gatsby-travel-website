import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"
import aboutImg from "../assets/images/about.jpg"

const AboutHero = styled.div`
  text-align: center;
  background: url(${aboutImg}) center center/cover no-repeat;
  padding: 12rem calc((100vw - 1300px) / 2);
  width: 100%;
  height: 100%;
  font-size: 5rem;
  color: #fff;
  font-family: "PT Sans Caption", sans-serif;
  box-shadow: inset 0 0 0 1000px rgba(0, 0, 0, 0.35);
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
`

const About = () => (
  <Layout>
    <SEO title="About Us" />
    {/* <div className="about">ABOUT US</div> */}
    <AboutHero>ABOUT US</AboutHero>
  </Layout>
)

export default About
