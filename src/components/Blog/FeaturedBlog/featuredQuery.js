import React from "react"
import { graphql, StaticQuery } from "gatsby"
import FeaturedComp from "./featuredComp"

const query = graphql`
  query FeaturedBlogQuery {
    queryPost: allSanityPost(
      limit: 1
      sort: { fields: publishedAt, order: DESC }
    ) {
      edges {
        node {
          excerpt
          id
          mainImage {
            alt
            asset {
              fluid(maxWidth: 820) {
                ...GatsbySanityImageFluid_withWebp
              }
            }
          }
          slug {
            current
          }
          title
        }
      }
    }
  }
`

const FeaturedQuery = () => {
  return (
    <StaticQuery query={query} render={data => <FeaturedComp post={data} />} />
  )
}

export default FeaturedQuery
