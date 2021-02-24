import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const StyledContainer = styled.div`
  height: 40%;
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  text-transform: lowercase;
  border-radius: 3px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  h2 {
    max-width: 15ch;
    margin: 0 auto;
    text-align: center;
    color: #262526;
    text-decoration: none;
    font-size: 1.8rem;
    font-weight: 400;
    line-height: 2.5rem;
    letter-spacing: 2px;
    font-family: "Sacramento", cursive;
  }

  .product-collection-link {
    padding: 0.15rem 2rem;
    margin: 0.25rem 0;
    border-radius: 3px;
    border: 1px solid rgba(0, 0, 0, 0.1);
    background: #262526;
    color: #fff;
    cursor: pointer;
    font-size: 0.9rem;
    font-weight: 400;
    &:hover {
      background: #fff;
      color: #262526;
      border: 1px solid #262526;
    }
  }

  @media (min-width: 680px) {
    h2 {
      font-size: 2.5rem;
      max-width: 14ch;
      line-height: 3.2rem;
    }
    .product-collection-link {
    }
  }

  @media (min-width: 950px) {
    width: 100%;
    height: 100%;
    border: none;
    border-radius: 0 3px 3px 0;
    box-shadow: none;
    justify-content: space-evenly;
    box-shadow: none;
    h2 {
      font-size: 3.5rem;
      line-height: 5.5rem;
      margin: 0 auto;
      width: 90%;
    }
    .product-collection-link {
      font-weight: 600;
      letter-spacing: 0.5px;
      box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.18);
    }
  }
`

const ProdCollection = () => {
  return (
    <>
      <StyledContainer>
        <h2>vegan cakes & pastries, ethically & sustainably baked</h2>
        <Link to="/store/" className="product-collection-link">
          <p>Order Now</p>
        </Link>
      </StyledContainer>
    </>
  )
}

export default ProdCollection
