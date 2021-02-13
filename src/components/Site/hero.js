import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import ProdCollection from "../Store/prodCollection"
import styled from "styled-components"

const HeroContainer = styled.section`
  height: 440px;
  overflow: hidden;
  width: 95%;
  margin: 0 auto 0.25rem auto;
  .hero-div-img {
    width: auto;
    height: 60%;
    overflow: hidden;
    margin-bottom: 0.25rem;
    border-radius: 3px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    img {
      width: 100%;
      max-width: 100%;
      height: auto;
    }
  }

  @media (min-width: 950px) {
    width: 95%;
    max-height: 340px;
    max-width: 1200px;
    margin: 0 auto 0.25rem auto;
    display: grid;
    border-radius: 3px;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 1fr;
    grid-column-gap: 0px;
    grid-row-gap: 0px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    .hero-div-img {
      border-radius: 3px 0 0 3px;
      border: none;
      width: 100%;
      height: auto;
      margin: 0;
      box-shadow: none;
    }
  }
`

const Hero = () => {
  const data = useStaticQuery(graphql`
    query {
      heroImg: file(relativePath: { eq: "usagi-hero.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000, quality: 85) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)
  return (
    <HeroContainer>
      <Img
        fluid={data.heroImg.childImageSharp.fluid}
        className="hero-div-img"
        objectFit="cover"
      />
      <ProdCollection />
    </HeroContainer>
  )
}

export default Hero
