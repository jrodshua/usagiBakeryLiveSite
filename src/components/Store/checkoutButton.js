import React from "react"
import getStripe from "../../utils/stripe"
import { useStateContext } from "../../context/storeProvider"
import styled from "styled-components"

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
    <form onSubmit={handleSubmit}>
      <StyledButton>checkout</StyledButton>
    </form>
  )
}

export default CheckoutButton
