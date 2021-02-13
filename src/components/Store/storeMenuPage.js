import React from "react"
import { StaticQuery, graphql } from "gatsby"
import StoreMenu from "./storeMenu"

const query = graphql`
  query StoreMenuQuery {
    queryMenu: allStripeProduct(filter: { active: { eq: true } }) {
      edges {
        node {
          description
          id
          images
          localFiles {
            childImageSharp {
              fluid(maxWidth: 1080, quality: 95) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
          metadata {
            slug
            from
          }
          name
        }
      }
    }
  }
`

const StoreMenuPage = () => {
  return (
    <StaticQuery
      query={query}
      render={data => {
        const menu = data && data.queryMenu
        return <StoreMenu {...menu} />
      }}
    />
  )
}

export default StoreMenuPage
