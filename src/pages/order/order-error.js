import React from "react"
import Layout from "../../components/Site/layout"
import ErrorsComp from "../../components/Orders/errors"
import FeaturedStorePage from "../../components/Store/FeaturedStore/featuredStorePage"

const OrderErrorPage = () => {
  return (
    <Layout>
      <ErrorsComp />
      <FeaturedStorePage />
    </Layout>
  )
}

export default OrderErrorPage
