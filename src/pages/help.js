import React from "react"
import Layout from "../components/Site/layout"
import SEO from "../components/Seo/seo"
import Contact from "../components/Faq/contact"
import HelpComp from "../components/Faq/helpComp"

const HelpPage = () => {
  return (
    <Layout>
      <SEO title="Usagi.Bakery FAQ and Contact Page" />
      <Contact />
      <HelpComp />
    </Layout>
  )
}

export default HelpPage
