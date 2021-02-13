import React from "react"
import { StaticQuery, graphql } from "gatsby"
import FeaturedStore from "./featuredStore"

const query = graphql`
  query FeaturedStoreQuery {
    featuredStoreQuery: allStripeProduct(
      filter: { active: { eq: true }, metadata: { featured: { eq: "true" } } }
    ) {
      edges {
        node {
          id
          localFiles {
            childImageSharp {
              fluid(maxWidth: 360, quality: 90) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
          metadata {
            featured
            slug
            from
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
