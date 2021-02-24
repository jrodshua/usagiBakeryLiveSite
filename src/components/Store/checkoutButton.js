import React from "react"
import getStripe from "../../utils/stripe"
import { useStateContext } from "../../context/storeProvider"
import styled from "styled-components"

const StyledContainer = styled.div`
  p {
    height: 240px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 1rem 0;
  }
  label {
    display: block;
    width: 95%;
    height: 100%;
    text-align: center;
    padding: 0.5rem 0;
    font-weight: 600;
    letter-spacing: 0.5px;
  }
  textarea {
    display: block;
    width: 90%;
    margin: 1rem auto 0 auto;
    height: 80%;
    border: none;
    padding: 0.5rem;
    font-size: 0.9rem;
    ::placeholder {
      padding: 0.5rem;
      font-size: 0.85rem;
    }
  }
`

const StyledButton = styled.button`
  background: #262526;
  color: #fff;
  width: 95%;
  display: block;
  margin: 0 auto;
  padding: 1rem 0;
  border: none;
  border-radius: 3px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
`

const CheckoutButton = () => {
  const checkoutBag = useStateContext()

  const handleSubmit = async event => {
    event.preventDefault()
    let stripeItems = checkoutBag.map(i => {
      return { price: i.id, quantity: i.quantity }
    })
    const stripe = await getStripe()
    const { error } = await stripe.redirectToCheckout({
      lineItems: stripeItems,
      mode: "payment",
      successUrl: `${window.location.origin}/order/order-confirmed/`,
      cancelUrl: `${window.location.origin}/order/order-error/`,
      billingAddressCollection: "required",
    })

    if (error) {
      console.warn("Error: ", error)
    }
  }

  return (
    <StyledContainer>
      <form
        name="order-details"
        method="POST"
        netlify-honeypot="bot-field"
        data-netlify="true"
        onSubmit={handleSubmit}
      >
        <input type="hidden" name="bot-field" />
        <input type="hidden" name="form-name" value="order-details" />
        <p>
          <label>
            Please let us know when you'd like your order!{" "}
            <textarea
              name="message"
              placeholder="or let us know if you have any questions or special requests for your order..."
            ></textarea>
          </label>
        </p>
        <StyledButton type="submit">checkout</StyledButton>
      </form>
    </StyledContainer>
  )
}

export default CheckoutButton
