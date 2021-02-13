import React from "react"
import styled from "styled-components"
import { Link, useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const StyledLogo = styled.div`
  width: 55px;
  height: auto;
  .logo-link {
    cursor: pointer;
  }
`

const Logo = () => {
  const data = useStaticQuery(graphql`
    query {
      logoImage: file(relativePath: { eq: "logo.png" }) {
        childImageSharp {
          fluid(maxWidth: 120, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <StyledLogo>
      <Link to="/" className="logo-link">
        <Img fluid={data.logoImage.childImageSharp.fluid} />
      </Link>
    </StyledLogo>
  )
}

export default Logo
