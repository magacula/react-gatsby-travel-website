import React from "react"
import SEO from "../components/seo"
import Destinations from "../components/Destinations"
import Layout from "../components/layout"
import "../components/styles/GlobalStyles.js"

const Destination = () => (
  <Layout>
    <SEO title="Destinations" />
    <Destinations />
  </Layout>
)

export default Destination
