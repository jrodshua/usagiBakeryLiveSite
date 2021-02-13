import React from "react"
import Layout from "../../components/Site/layout"
import ConfirmedComp from "../../components/Orders/confirmed"
import Hero from "../../components/Site/hero"

const OrderConfirmedPage = () => {
  return (
    <Layout>
      <ConfirmedComp />
      <Hero />
    </Layout>
  )
}

export default OrderConfirmedPage
