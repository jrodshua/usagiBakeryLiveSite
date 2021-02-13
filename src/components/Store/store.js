import React, { useState } from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"
import { formatPrice } from "../../lib/lib"
import { useDispatchContext } from "../../context/storeProvider"
import iconPaths from "../Icons/iconPaths"

const StyledWrapper = styled.section`
  width: 100%;
  margin-bottom: 0.5rem;
  padding-bottom: 4.5rem;
`

const StyledContainer = styled.div`
  width: 95%;
  margin: 0 auto;
  border-radius: 3px;
  .return-arrow {
    display: flex;
    flex-direction: row;
    padding: 1.5rem 0;
    line-height: 1rem;
    font-size: 2.7rem;
    letter-spacing: 1px;
    font-family: "Sacramento", cursive;
    text-transform: lowercase;
    color: #262526;
    margin-bottom: 0.5rem;
    background: #fff;
    border-radius: 3px;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.11), 0 3px 6px rgba(0, 0, 0, 0.14);
    svg {
      margin: 0.2rem 1rem 0 0.5rem;
      fill: #262526;
    }
  }
  .store-comp-img {
    width: 100%;
    margin-bottom: 0.5rem;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.19), 0 3px 3px rgba(0, 0, 0, 0.23);
    border-radius: 3px;
    max-height: 740px;
  }

  .store-details-div {
    width: 100%;
    background: #fff;
    border-radius: 3px;
    padding: 1rem 0;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.2), 0 3px 6px rgba(0, 0, 0, 0.25);
  }

  .product-name-price {
    display: flex;
    justify-content: space-between;
    padding: 1rem 0.75rem;
    h1 {
      font-size: 1rem;
      text-transform: lowercase;
      font-weight: bold;
    }
  }
  .qty {
    display: flex;
    justify-content: space-between;
    padding: 1rem 0.75rem;
    font-size: 0.9rem;
    text-transform: lowercase;
    .qty-button {
      display: flex;
      button,
      p {
        margin-left: 0.55rem;
        border: none;
        background: #fff;
        outline-style: none;
      }
    }
  }
  .size-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 0.9rem;
    padding: 1rem 0.75rem;
    text-transform: lowercase;
    button {
      margin-left: 0.75rem;
      border: 1px solid #000;
      height: 3rem;
      width: 6.5rem;
      background: #fff;
      outline-style: none;
      text-transform: lowercase;
      border-radius: 3px;
      transition: all 0.3s ease-in-out;
    }
    .size-large {
      background: ${({ productSize }) =>
        productSize === "regular" ? "#d7d8da" : "#fff"};
      color: ${({ productSize }) =>
        productSize === "regular" ? "#7f8084" : "#262526"};
      border: ${({ productSize }) =>
        productSize === "regular" ? "none" : "1px solid #262526"};
      :hover {
        color: #fff;
        background: #262526;
      }
    }
    .size-regular {
      background: ${({ productSize }) =>
        productSize === "regular" ? "#fff" : "#d7d8da"};
      color: ${({ productSize }) =>
        productSize === "regular" ? "#262526" : "#7f8084"};
      border: ${({ productSize }) =>
        productSize === "regular" ? "1px solid #262526" : "none"};
      :hover {
        color: #fff;
        background: #262526;
      }
    }
  }
  .product-description {
    font-size: 0.9rem;
    padding: 0.5rem 0.75rem;
  }
  .cart-button {
    padding: 0.5rem 0.75rem;
    button {
      width: 90%;
      margin: 0 auto;
      display: block;
      border-radius: 3px;
      color: #fff;
      height: 3rem;
      border: none;
      background: #262526;
      outline-style: none;
      transition: all 0.3s ease-in-out;
      :hover {
        color: #262526;
        border: 1px solid #262526;
        background: #fff;
      }
    }
  }
  .add-to-cart {
    background: #262526;
    color: #fff;
    position: fixed;
    bottom: 0;
    width: 95%;
    margin-left: auto;
    height: 25%;
    text-align: right;
    transition: all 0.3s ease-in-out;
    transform: ${({ showCart }) =>
      showCart ? "translateY(0)" : "translateY(100%)"};
    opacity: ${({ showCart }) => (showCart ? "1" : "0")};
    button {
      border: none;
      margin: 0.5rem;
    }
    p {
      position: relative;
      margin-top: 2rem;
      padding: 0 2.5rem;
      font-size: 1.1rem;
      font-weight: 600;
      text-align: center;
    }
  }

  @media (min-width: 780px) {
    .return-arrow {
      max-width: 900px;
      margin: 0 auto 0.5rem auto;
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    }
    .store-breakpoint-flex {
      display: flex;
      flex-direction: row-reverse;
      justify-content: center;
      max-width: 900px;
      margin: 0 auto;
      box-shadow: 0 3px 20px rgba(0, 0, 0, 0.1), 0 6px 6px rgba(0, 0, 0, 0.19);
    }
    .store-comp-img {
      margin: 0;
      border-radius: 0 3px 3px 0;
      box-shadow: none;
      max-width: 438px;
      width: 100%;
    }
    .store-details-div {
      border-radius: 3px 0 0 3px;
      box-shadow: none;
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      width: 100%;
    }
    .product-name-price {
      padding: 1rem;
      flex-direction: column;
      h1 {
        font-family: "Sacramento", cursive;
        font-weight: 400;
        font-size: 2.75rem;
        padding-bottom: 2.5rem;
      }
      p {
        font-size: 0.9rem;
        font-weight: 600;
      }
    }
    .qty {
      padding: 1rem;
      p {
        font-size: 1rem;
      }
    }
    .qty-button {
      p {
        font-size: 1rem;
      }
    }
    .size-container {
      padding: 1rem;
      p {
        font-size: 1rem;
      }
    }
    .product-description {
      padding: 1rem;
      p {
        font-size: 1rem;
        line-height: 2rem;
        text-align: left;
        max-width: 100ch;
      }
    }
    .add-to-cart {
      transform: ${({ showCart }) =>
        showCart ? "translateY(0)" : "translateY(-100%)"};
      height: 90px;
      top: 0;
      button {
      }
      p {
        margin: 0;
      }
    }
  }
`

const Store = ({ edges }) => {
  const [qty, setQty] = useState(1)
  const [size, setSize] = useState("regular")
  const [added, setAdded] = useState(false)

  const dispatch = useDispatchContext()

  const { backArrow } = iconPaths

  let regObj
  edges
    .filter(edge => {
      return edge.node.nickname.includes("regular")
    })
    .map(e => {
      return (regObj = {
        price: e.node.unit_amount,
        currency: e.node.currency,
        id: e.node.id,
        image: e.node.product.localFiles.map(i => i.childImageSharp.fluid),
        name: e.node.product.name,
        description: e.node.product.description,
      })
    })

  let largeObj
  edges
    .filter(edge => {
      return edge.node.nickname.includes("large")
    })
    .map(e => {
      return (largeObj = {
        price: e.node.unit_amount,
        currency: e.node.currency,
        id: e.node.id,
        image: e.node.product.localFiles.map(i => i.childImageSharp.fluid),
        name: e.node.product.name,
        description: e.node.product.description,
      })
    })

  const handleCart = obj => {
    setAdded(true)
    dispatch({
      type: "add",
      payload: {
        cartObject: {
          id: obj.id,
          price: obj.price,
          currency: obj.currency,
          image: obj.image,
          name: obj.name,
          description: obj.description,
          quantity: qty,
        },
      },
    })
  }

  return (
    <StyledWrapper>
      {regObj && (
        <StyledContainer productSize={size} showCart={added}>
          <Link to="/store/" className="return-arrow">
            <svg
              width={backArrow.width}
              height={backArrow.height}
              viewBox={backArrow.viewBox}
            >
              <path d={backArrow.path} />
            </svg>
            <p>return to store</p>
          </Link>
          <div className="store-breakpoint-flex">
            <div className="add-to-cart"></div>
            <Img
              fluid={regObj.image}
              alt={regObj.name}
              className="store-comp-img"
            />
            <div className="store-details-div">
              <div className="product-name-price">
                <h1>{regObj.name}</h1>
                <p>
                  {size === "regular"
                    ? formatPrice(regObj.price * qty)
                    : formatPrice(largeObj.price * qty)}
                </p>
              </div>
              <div className="qty">
                <p>QTY</p>
                <div className="qty-button">
                  <button onClick={() => setQty(qty - 1)}>&#x2212;</button>
                  <p>{qty}</p>
                  <button onClick={() => setQty(qty + 1)}>&#x2b;</button>
                </div>
              </div>
              <div className="size-container">
                <p>SIZE</p>
                {!largeObj ? (
                  <div className="size-button">
                    <button
                      onClick={() => setSize("regular")}
                      className="size-regular"
                    >
                      Regular
                    </button>
                  </div>
                ) : (
                  <div className="size-button">
                    <button
                      onClick={() => setSize("regular")}
                      className="size-regular"
                    >
                      5 INCH
                    </button>
                    <button
                      onClick={() => setSize("large")}
                      className="size-large"
                    >
                      8 INCH
                    </button>
                  </div>
                )}
              </div>
              <div className="product-description">
                <p>{regObj.description}</p>
              </div>
              <div className="cart-button">
                <button
                  onClick={() => {
                    size === "regular"
                      ? handleCart(regObj)
                      : handleCart(largeObj)
                  }}
                >
                  add to cart
                </button>
              </div>
            </div>
          </div>

          <div className="add-to-cart">
            <button onClick={() => setAdded(false)}>X</button>
            <p>{`${regObj.name} added to cart.`}</p>
          </div>
        </StyledContainer>
      )}
    </StyledWrapper>
  )
}

export default Store
