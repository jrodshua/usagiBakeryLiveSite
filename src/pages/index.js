import React from "react"
import Layout from "../components/Site/layout"
import SEO from "../components/Seo/seo"
import Hero from "../components/Site/hero"
import FeaturedStorePage from "../components/Store/FeaturedStore/featuredStorePage"
import FeaturedQuery from "../components/Blog/FeaturedBlog/featuredQuery"
import IgComp from "../components/Insta/igComp"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <FeaturedStorePage />
    <FeaturedQuery />
    <IgComp />
  </Layout>
)

export default IndexPage
