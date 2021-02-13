import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Site/layout"
import SEO from "../components/Seo/seo"
import Store from "../components/Store/store"

export const query = graphql`
  query StoreTemplateQuery($id: String!) {
    sampleProduct: allStripePrice(filter: { product: { id: { eq: $id } } }) {
      edges {
        node {
          id
          nickname
          currency
          unit_amount
          product {
            name
            id
            description
            localFiles {
              childImageSharp {
                fluid(maxWidth: 1080, quality: 95) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
        }
      }
    }
  }
`

const StoreTemplate = props => {
  const { data } = props
  const store = data && data.sampleProduct
  return (
    <Layout>
      <SEO title="Usagi.Bakery, vegan, ethically sourced, sustainable pastries and baked goods" />
      {store && <Store {...store} />}
    </Layout>
  )
}

export default StoreTemplate
