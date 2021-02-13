import React from "react"
import Layout from "../components/Site/layout"
import SEO from "../components/Seo/seo"
import Hero from "../components/Site/hero"
import FeaturedStorePage from "../components/Store/FeaturedStore/featuredStorePage"
import FeaturedQuery from "../components/Blog/FeaturedBlog/featuredQuery"
import IgData from "../components/Insta/igData"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <FeaturedStorePage />
    <FeaturedQuery />
    <IgData />
  </Layout>
)

export default IndexPage
