import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Site/layout"
import SEO from "../components/Seo/seo"
import Blog from "../components/Blog/blog"

export const query = graphql`
  query ProjectTemplateQuery($id: String!) {
    samplePost: sanityPost(id: { eq: $id }) {
      id
      publishedAt(formatString: "MMMM DD, YY")
      categories {
        _id
        title
      }
      mainImage {
        alt
        asset {
          fluid(maxWidth: 1500) {
            ...GatsbySanityImageFluid_withWebp
          }
        }
      }
      title
      slug {
        current
      }
      excerpt
      _rawBody(resolveReferences: { maxDepth: 5 })
      author {
        image {
          crop {
            _key
            _type
            top
            bottom
            left
            right
          }
          hotspot {
            _key
            _type
            x
            y
            height
            width
          }
          asset {
            _id
            url
          }
        }
        name
      }
    }
  }
`

const BlogTemplate = props => {
  const { data } = props
  const blog = data && data.samplePost
  return (
    <Layout>
      <SEO title="Usagi.Bakery Vegan Bakery Blog by Marianne Re" />
      {blog && <Blog {...blog} />}
    </Layout>
  )
}

export default BlogTemplate
