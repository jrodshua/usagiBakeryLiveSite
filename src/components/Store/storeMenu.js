import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"

const StyledWrapper = styled.div`
  width: 100%;
  max-width: 1500px;
  margin: 0 auto;

  .store-menu-header {
    width: 93%;
    margin: 0 auto;
    font-size: 0.9rem;
    background: #fff;
    padding: 1rem;
    border-radius: 3px;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
    h2 {
      padding: 0.5rem 0;
      width: 95%;
      margin: 0 auto;
      font-family: "Sacramento", cursive;
      font-size: 2.3rem;
      font-weight: 400;
      letter-spacing: 1.5px;
    }
    p {
      font-size: 0.8rem;
      width: 95%;
      margin: 0 auto;
    }
    .notice-bold {
      text-align: left;
      display: block;
      font-weight: 600;
      letter-spacing: 0.5px;
    }
    .menu-email-link {
      color: #012e4f;
      text-decoration: underline;
    }
  }

  .store-menu-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    width: 95%;
    margin: 0.5rem auto 0 auto;
  }

  @media (min-width: 950px) {
    background: #fff;
    border-radius: 3px;
    padding-bottom: 2rem;
    margin: 0 auto 2rem auto;
    box-shadow: 0 3px 20px rgba(0, 0, 0, 0.1), 0 6px 6px rgba(0, 0, 0, 0.19);
    .store-menu-header {
      max-width: 900px;
      box-shadow: none;
      padding: 4rem 0;
      h2 {
        font-size: 3.5rem;
        margin: 0 auto;
        text-align: center;
        padding: 2rem;
      }
      p {
        font-size: 1rem;
        line-height: 2.2rem;
        max-width: 80ch;
        margin: 0 auto;
      }
      .notice-bold {
        text-align: center;
      }
    }
    .store-menu-container {
      max-width: 900px;
      margin: 0.25rem auto;
    }
  }
`

const StyledCard = styled.div`
  width: 48%;
  background: #fff;
  margin: 0 0.1rem 0.5rem 0.1rem;
  border-radius: 4px;
  box-shadow: 0.5px 0.75px 3px 0px rgba(0, 0, 0, 0.3);

  .store-menu-link {
    cursor: pointer;
  }
  .store-menu-img {
    width: 100%;
    height: 114px;
    border-radius: 4px 4px 0 0;
    border-bottom: 1px solid #afb2b7;
  }
  .store-menu-text {
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-height: 82px;
    padding: 0.25rem 0;
  }
  .menu-text-title {
    font-size: 1rem;
    margin: 0;
    text-align: center;
    display: block;
    width: 100%;
  }
  .menu-text-description {
    font-size: 0.8rem;
    text-align: center;
    display: block;
    width: 100%;
  }

  @media (hover: hover) {
    &:hover {
      background: #262526;
      border: 1px solid #262526;
      color: #fff;
    }
  }

  @media (min-width: 405px) {
    .store-menu-img {
      height: 200px;
    }
  }

  @media (min-width: 680px) {
    .store-menu-img {
      height: 260px;
    }
  }

  @media (min-width: 950px) {
    margin: 0 0.5rem 1.5rem 0.5rem;
    max-width: 280px;
    border: 1px solid #d7d8da;
    box-shadow: 0 3px 20px rgba(0, 0, 0, 0.1), 0 6px 6px rgba(0, 0, 0, 0.19);
    .store-menu-text {
    }
    .menu-text-title {
      font-size: 1.1rem;
      display: block;
      width: 100%;
    }
    .menu-text-description {
      display: block;
      width: 100%;
      font-size: 0.9rem;
    }
  }
`

const StoreMenu = ({ edges }) => {
  return (
    <StyledWrapper>
      <div className="store-menu-header">
        <h2>order notice:</h2>
        <p>
          Please let us know when you would like your order @ checkout. Most
          orders will be available in 1-2 days. Large orders (such as a few
          dozen of something) and custom cakes will take about 2-4 days. Please
          order any cakes well in advance to ensure the best quality & care in
          their crafting.
          <br />
          <br />
          <span className="notice-bold">*before placing your order*</span>
          If you have any concerns regarding arrival time or general questions,
          please reach out at our email:{" "}
          <a
            href="mailto:bunny.veganbakedgoods@gmail.com"
            className="menu-email-link"
          >
            bunny.veganbakedgoods@gmail.com
          </a>
        </p>
      </div>
      <div className="store-menu-container">
        {edges.map(e => (
          <StyledCard key={e.node.id}>
            <Link
              to={`/store/${e.node.metadata.slug}/`}
              className="store-menu-link"
            >
              {e.node.localFiles.map(i => (
                <Img
                  key={e.node.id + 123}
                  fluid={i.childImageSharp.fluid}
                  className="store-menu-img"
                />
              ))}
              <div className="store-menu-text">
                <span className="menu-text-title">{e.node.name}</span>
                <span className="menu-text-description">{`from ${e.node.metadata.from}`}</span>
              </div>
            </Link>
          </StyledCard>
        ))}
      </div>
    </StyledWrapper>
  )
}

export default StoreMenu
