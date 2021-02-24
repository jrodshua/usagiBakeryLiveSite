import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
import {
  useStateContext,
  useDispatchContext,
} from "../../context/storeProvider"
import { formatPrice } from "../../lib/lib"
import CheckoutButton from "./checkoutButton"
import iconPaths from "../Icons/iconPaths"
import styled from "styled-components"

const StyledWrapper = styled.main`
  width: 100%;
  padding-bottom: 6.5rem;

  @media (min-width: 780px) {
    max-width: 1200px;
    margin: 0 auto;
  }
`
const StyledGrid = styled.div`
  width: 100%;
  .checkout-header {
    background: #fff;
    color: #262526;
    padding: 0.5rem 0;
    width: 95%;
    margin: 0 auto;
    border-radius: 6px;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  }
  .checkout-header-row {
    padding: 0.5rem 0;
    display: flex;
    flex-direction: row;
    justify-content: center;
    svg {
      margin: 0.25rem 1rem 0 0;
    }
    p {
      text-transform: lowercase;
      font-size: 2.5rem;
      font-family: "Sacramento", cursive;
    }
  }
  .checkout-header-description {
    font-size: 0.8rem;
    width: 95%;
    margin: 0 auto;
  }

  .checkoutCart-row {
    display: flex;
    justify-content: space-between;
    padding: 0.5rem;
    background: #fff;
    width: 95%;
    margin: 0.5rem auto 0.7rem auto;
    border-radius: 6px;
    box-shadow: 0 3px 20px rgba(0, 0, 0, 0.1), 0 6px 6px rgba(0, 0, 0, 0.19);
  }
  .checkoutCart-row-img {
    width: 50%;
    height: auto;
    border-radius: 3px;
  }
  .checkoutCart-details {
    width: 42%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    padding: 0 0.25rem;
    text-align: left;
    h3 {
      font-size: 1.5rem;
      max-width: 95%;
      text-transform: lowercase;
      padding-top: 0.5rem;
    }
    p {
      padding: 0.5rem 0;
      font-size: 0.95rem;
    }
  }
  .checkoutCart-details-bottom {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    border: 1px solid #262526;
    border-radius: 3px;
    width: 100%;
    font-size: 1rem;
    button {
      border: none;
      background: transparent;
      color: #262526;
    }
  }
  .checkoutCart-details-count {
    font-weight: 600;
    font-size: 0.9rem;
  }
  .checkout-delete-div {
    width: 6%;
  }
  .checkout-delete {
    display: flex;
    height: 20px;
    font-size: 0.8rem;
    border: none;
    font-weight: bold;
    color: #000;
    background: #fff;
    width: 100%;
  }

  .checkout-total-card {
    width: 95%;
    border-radius: 6px;
    margin: 0 auto 0.7rem auto;
    text-align: center;
    background: #fff;
    padding: 1rem 0;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
    text-transform: lowercase;
  }

  @media (min-width: 400px) {
    .checkoutCart-row {
      justify-content: space-between;
      padding: 0.5rem;
      height: 300px;
    }
    .checkoutCart-row-img {
      width: 279px;
      height: auto;
    }
    .checkoutCart-details {
      justify-content: space-evenly;
      text-align: left;
      width: 50%;
      padding: 0 0.5rem;
      h3 {
        font-size: 2rem;
        line-height: 2.5rem;
      }
      p {
        font-size: 1.2rem;
      }
    }
    .checkoutCart-details-bottom {
      font-size: 1.2rem;
      border: 2px solid #262526;
      max-width: 220px;
      button {
        font-weight: 600;
      }
    }
    .checkoutCart-details-count {
      font-size: 1rem;
      font-weight: 600;
    }
  }

  @media (min-width: 780px) {
    .checkout-header-row {
      padding: 1rem 0;
      p {
        font-size: 3rem;
      }
    }
    .checkout-header-description {
      font-size: 1.4rem;
      line-height: 2.2rem;
      text-align: center;
      padding: 0.5rem 0;
    }
    .checkoutCart-grid {
      background: #fff;
      width: 95%;
      margin: 1rem auto 1rem auto;
      padding: 0.5rem 0;
      border-radius: 3px;
    }
    .checkoutCart-row {
      height: 220px;
      margin: 1.5rem auto;
      padding: 0.5rem;
      max-width: 788px;
      background: transparent;
      border: 1px solid #d7d8da;
    }
    .checkoutCart-row-img {
      width: 35%;
      max-width: 280px;
    }
    .checkoutCart-details {
      justify-content: space-between;
      padding: 0.25rem 0 0.25rem 2rem;
      width: 61%;
      h3 {
        font-size: 2.3rem;
      }
      p {
        font-weight: 600;
        padding: 0;
      }
    }
    .checkout-delete-div {
      width: 4%;
    }
  }
`

const StyledCheckoutDisplay = styled.div`
  width: 95%;
  margin: 2rem auto 0.5rem auto;
  border-radius: 6px;
  color: #262526;
  h3 {
    font-family: "Sacramento", cursive;
    font-size: 3rem;
    text-transform: lowercase;
    font-weight: 400;
    letter-spacing: 2px;
    line-height: 3.5rem;
    text-align: center;
  }
`

const CheckoutComp = () => {
  const cart = useStateContext()
  const dispatch = useDispatchContext()

  const { backArrow } = iconPaths

  let checkoutTotal
  if (cart.length !== 0) {
    checkoutTotal = cart.map(c => c.price * c.quantity).reduce((a, b) => a + b)
  }

  let checkoutFinalTotal
  if (checkoutTotal) {
    checkoutFinalTotal = checkoutTotal
  }

  let checkoutDisplay
  if (cart.length !== 0) {
    checkoutDisplay = <CheckoutButton />
  } else {
    checkoutDisplay = (
      <StyledCheckoutDisplay>
        <h3>Your cart is currently empty...</h3>
      </StyledCheckoutDisplay>
    )
  }

  return (
    <StyledWrapper>
      <StyledGrid>
        <div className="checkout-header">
          <Link to="/store/" className="checkout-header-row">
            <svg
              width={backArrow.width}
              height={backArrow.height}
              viewBox={backArrow.viewBox}
            >
              <path d={backArrow.path} />
            </svg>
            <p>Back to Store</p>
          </Link>
          <p className="checkout-header-description">
            Most orders received before 5pm, will be available in 1-2 days.
            Large orders (5 or more items) may take to 1-4 days to be completed.
            If you have any concerns regarding arrival time or general
            questions, please reach out at bunny.veganbakedgoods@gmail.com
            before placing your order.
          </p>
        </div>
        <div className="checkoutCart-grid">
          {cart
            .filter(i => i.quantity !== 0)
            .map((c, index) => {
              return (
                <div key={c.id + 1918} className="checkoutCart-row">
                  <Img
                    fluid={c.image}
                    alt={c.name}
                    className="checkoutCart-row-img"
                  />
                  <div className="checkoutCart-details">
                    {/* <h3>{c.name}</h3> */}
                    {c.units === "none" ? (
                      <h3>{c.name}</h3>
                    ) : (
                      <span>
                        <h3>{c.name}</h3>
                        {c.units}
                      </span>
                    )}
                    <p>{formatPrice(c.price * c.quantity, c.currency)}</p>
                    <div className="checkoutCart-details-bottom">
                      <button
                        onClick={() =>
                          dispatch({
                            type: "decrease",
                            payload: {
                              id: c.id,
                            },
                          })
                        }
                      >
                        -
                      </button>
                      <div className="checkoutCart-details-count">
                        {c.quantity}
                      </div>
                      <button
                        onClick={() =>
                          dispatch({ type: "increase", payload: { id: c.id } })
                        }
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <div className="checkout-delete-div">
                    <button
                      className="checkout-delete"
                      onClick={() => dispatch({ type: "delete", index })}
                    >
                      X
                    </button>
                  </div>
                </div>
              )
            })}
        </div>
        {checkoutFinalTotal && (
          <div className="checkout-total-card">
            <p>{`Total: ${formatPrice(checkoutFinalTotal)}`}</p>
          </div>
        )}
        {checkoutDisplay}
      </StyledGrid>
    </StyledWrapper>
  )
}

export default CheckoutComp
