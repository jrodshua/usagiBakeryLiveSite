import React from "react"
import Layout from "../components/Site/layout"
import SEO from "../components/Seo/seo"
import AboutPage from "../components/About/about"

const About = () => {
  return (
    <Layout>
      <SEO title="About Usagi.Bakery, A Vegan, Ethical, and Sustainable Bakery" />
      <AboutPage />
    </Layout>
  )
}

export default About
