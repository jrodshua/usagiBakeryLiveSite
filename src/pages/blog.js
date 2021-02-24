import React from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/Site/layout"
import SEO from "../components/Seo/seo"
import styled from "styled-components"

const StyledContainer = styled.div`
  .post-container {
    padding-bottom: 1rem;
    width: 95%;
    margin: 0 auto 1rem auto;
    background: #fff;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
    border-radius: 6px;
    img {
      width: 100%;
      border-radius: 6px 6px 0 0;
    }
    h2 {
      font-size: 1rem;
      padding: 1rem 1rem 0 1rem;
    }
    p,
    b {
      font-size: 0.8rem;
      padding: 0.5rem 1rem;
    }
  }

  @media (min-width: 780px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(6, 1fr);
    grid-column-gap: 0px;
    grid-row-gap: 0px;
    .post-container {
      overflow: scroll;
      height: 560px;
    }
    .post-container-img {
      height: 240px;
    }
  }

  @media (min-width: 1100px) {
    max-width: 1500px;
    margin: auto;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(3, 1fr);
    grid-column-gap: 4px;
    grid-row-gap: 8px;
    .post-container {
      height: 580px;
      width: 100%;
      margin: 0;
    }
    .post-container-img {
      height: 200px;
    }
  }
`

const BlogIndex = ({ data }) => {
  return (
    <Layout>
      <SEO title="Usagi.Bakery Blog by Marianne Re" />
      <StyledContainer>
        {data.allSanityPost.edges.map(edge => {
          return (
            <Link
              to={`/blog/${edge.node.slug.current}/`}
              key={edge.node.id + 777}
            >
              <div className="post-container">
                <Img
                  fluid={edge.node.mainImage.asset.fluid}
                  alt={edge.node.mainImage.alt}
                  className="post-container-img"
                />
                <h2>{edge.node.title}</h2>
                <p>{edge.node.excerpt}</p>
                <b>{edge.node.publishedAt}</b>
              </div>
            </Link>
          )
        })}
      </StyledContainer>
    </Layout>
  )
}

export default BlogIndex

export const query = graphql`
  query BlogArchiveQuery {
    allSanityPost(limit: 12, sort: { fields: publishedAt, order: DESC }) {
      edges {
        node {
          id
          title
          excerpt
          publishedAt(formatString: "MMMM DD, YYYY")
          slug {
            current
          }
          mainImage {
            alt
            asset {
              fluid(maxWidth: 1500) {
                ...GatsbySanityImageFluid_withWebp
              }
            }
          }
        }
      }
    }
  }
`
