import React from "react"
import Layout from "../components/Site/layout"
import SEO from "../components/Seo/seo"
import StoreMenuPage from "../components/Store/storeMenuPage"

const StoreIndex = () => {
  return (
    <Layout>
      <SEO title="All pastries and baked goods in Usagi.Bakery Store" />
      <StoreMenuPage />
    </Layout>
  )
}

export default StoreIndex
