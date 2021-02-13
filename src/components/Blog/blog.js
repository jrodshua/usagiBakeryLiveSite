import React from "react"
import Img from "gatsby-image"
import BlockContent from "./block-content"
import styled from "styled-components"

const StyledContainer = styled.article`
  max-width: 1500px;
  padding: 5rem 0;
  width: 95%;
  margin: 0 auto;
  border-radius: 3px;
  background: #fff;
  h1 {
    padding: 0 1rem;
    text-align: center;
  }
  p {
    padding: 0.5rem 1rem;
    font-size: 1rem;
    width: 80%;
    margin: 0 auto;
    line-height: 2rem;
  }
  a {
    color: blue;
    text-decoration: underline;
  }
  .post-meta {
    text-align: center;
    padding: 0.5rem 1rem;
    a {
      font-weight: bold;
      font-size: 0.9rem;
      line-height: 0.5rem;
      text-decoration: none;
      color: black;
    }
    p {
      font-size: 0.7rem;
      font-style: italic;
      line-height: 1rem;
      padding: 0;
      margin: 0 auto;
    }
  }
  .projectComp-img {
    max-width: 80%;
    margin: 2rem auto;
  }
`

function Blog(props) {
  const { _rawBody, mainImage, publishedAt, title } = props
  return (
    <StyledContainer className="root">
      {title && <h1>{title}</h1>}
      <div className="post-meta">
        <a
          href="https://www.instagram.com/usagi.bakery/"
          alt="Link to Marianne Re Instagram"
        >
          Marianne Re
        </a>
        {publishedAt && <p>{publishedAt}</p>}
      </div>
      {mainImage.asset && mainImage.asset.fluid && (
        <Img
          fluid={mainImage.asset.fluid}
          alt={mainImage.alt}
          className="projectComp-img"
        />
      )}
      {_rawBody && <BlockContent blocks={_rawBody || []} />}
    </StyledContainer>
  )
}

export default Blog
