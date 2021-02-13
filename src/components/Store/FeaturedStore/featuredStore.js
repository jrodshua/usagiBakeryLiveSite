import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"

const StyledWrapper = styled.div`
  width: 100%;
  background: transparent;

  .featured-store-header {
    width: 95%;
    padding: 1.5rem 0;
    margin: 0 auto 0.25rem auto;
    text-transform: lowercase;
    background: #fff;
    color: #262526;
    font-family: "Sacramento", cursive;
    font-weight: 400;
    font-size: 2.5rem;
    letter-spacing: 2px;
    text-align: center;
    border-radius: 3px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  }

  .featured-store-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 95%;
    margin: 0 auto;
  }

  @media (min-width: 950px) {
    width: 95%;
    margin: 0 auto;
    max-width: 1200px;

    .featured-store-header {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .featured-store-container {
      width: 100%;
      justify-content: space-between;
    }
  }
`

const StyledCard = styled.div`
  width: 49.55%;
  padding-bottom: 0.5rem;
  border-radius: 3px;
  margin-bottom: 0.25rem;
  background: #fff;
  color: #262526;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  &:hover {
    background: #262526;
    border: 1px solid #262526;
    color: #fff;
  }
  .featured-store-link {
    cursor: pointer;
  }
  .featured-store-img {
    width: 100%;
    max-width: 100%;
    height: auto;
    border-radius: 3px 3px 0 0;
    img {
      height: auto;
    }
  }
  .featured-store-title {
    font-family: "Open Sans", sans-serif;
    font-weight: 400;
    font-size: 0.8rem;
    text-transform: lowercase;
    display: block;
    text-align: center;
    padding-top: 0.5rem;
  }
  .featured-store-body {
    font-family: "Open Sans", sans-serif;
    font-weight: 400;
    font-size: 0.75rem;
    display: block;
    text-align: center;
  }
  @media (min-width: 540px) {
    height: 380px;
    .featured-store-img {
      height: 85%;
      width: auto;
      img {
        height: auto;
      }
    }
    .featured-store-title {
      font-size: 1rem;
    }
  }
  @media (min-width: 700px) {
    height: auto;
    width: 24.55%;
    overflow: hidden;
    max-height: 450px;

    .featured-store-img {
      height: 80%;
      width: auto;
    }
    .featured-store-text {
      height: 20%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      text-transform: lowercase;
    }
    .featured-store-title {
      font-size: 0.8rem;
      font-weight: 600;
      padding: 0;
    }
    .featured-store-body {
      font-size: 0.75rem;
    }
  }

  @media (min-width: 950px) {
    width: 24.7%;
    max-height: 400px;
    .featured-store-img {
    }
    .featured-store-text {
      justify-content: space-evenly;
    }
    .featured-store-title {
      font-size: 1rem;
      padding: 0;
    }
    .featured-store-body {
      font-size: 0.9rem;
    }
  }
`

const FeaturedStore = ({ edges }) => {
  return (
    <StyledWrapper>
      <div className="featured-store-header">
        <span>Featured</span>
      </div>
      <div className="featured-store-container">
        {edges.map(e => (
          <StyledCard key={e.node.id + 222}>
            <Link
              to={`/store/${e.node.metadata.slug}/`}
              className="featured-store-link"
            >
              {e.node.localFiles.map(i => (
                <Img
                  key={e.node.id + 234}
                  fluid={i.childImageSharp.fluid}
                  className="featured-store-img"
                />
              ))}
              <div className="featured-store-text">
                <span className="featured-store-title">{e.node.name}</span>
                <span className="featured-store-body">from $30</span>
              </div>
            </Link>
          </StyledCard>
        ))}
      </div>
    </StyledWrapper>
  )
}

export default FeaturedStore
