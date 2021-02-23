import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"
import contactImg from "../assets/images/contact.jpg"

const ContactHero = styled.div`
  text-align: center;
  background: url(${contactImg}) center center/cover no-repeat;
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

const Contact = () => (
  <Layout>
    <SEO title="Contact" />
    <ContactHero>CONTACT US</ContactHero>
  </Layout>
)

export default Contact
