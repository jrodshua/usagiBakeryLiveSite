import React from "react"
import { StaticQuery, graphql } from "gatsby"
import FeaturedStore from "./featuredStore"

const query = graphql`
  query FeaturedStoreQuery {
    featuredStoreQuery: allStripeProduct(
      filter: { metadata: { featured: { eq: "true" } } }
    ) {
      edges {
        node {
          id
          localFiles {
            childImageSharp {
              fluid(maxWidth: 360, quality: 80) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
          metadata {
            slug
          }
          name
        }
      }
    }
  }
`

const FeaturedStorePage = () => {
  return (
    <StaticQuery
      query={query}
      render={data => {
        const featStore = data && data.featuredStoreQuery
        return <FeaturedStore {...featStore} />
      }}
    />
  )
}

export default FeaturedStorePage
