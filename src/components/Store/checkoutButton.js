import React, { useState } from "react"
import getStripe from "../../utils/stripe"
import { useStateContext } from "../../context/storeProvider"
import styled from "styled-components"

const StyledContainer = styled.div`
  form {
    width: 95%;
    margin: 0.5rem auto;
    height: 300px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .checkout-form-description {
    height: 15%;
    font-size: 0.95rem;
    width: 95%;
    max-width: 780px;
    margin: 0.5rem auto;
    text-align: center;
    line-height: 1.5rem;
    font-weight: 600;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .checkout-form-nameEmail-div {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 100%;
    text-align: center;
    height: 25%;
    label {
      font-size: 0.8rem;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 95%;
      max-width: 780px;
      margin: 0.5rem auto;
    }
    span {
      display: inline-block;
      width: 15%;
      text-align: center;
      background: #262526;
      color: #fff;
    }
    input {
      display: inline-block;
      width: 82%;
      margin-left: 0.25rem;
      height: 26px;
      border: none;
      padding: 0.5rem 0.75rem;
      border: 1px solid #262526;
    }
  }
  .checkout-form-textArea {
    height: 45%;
    display: flex;
    align-items: center;
    textarea {
      display: block;
      width: 95%;
      max-width: 780px;
      margin: 0.25rem auto;
      height: 85%;
      border: 1px solid #262526;
      vertical-align: center;
      padding: 0.5rem 0.75rem;
      font-size: 0.85rem;
      line-height: 1.5rem;
      ::placeholder {
      }
    }
  }
  button {
    background: #262526;
    color: #fff;
    width: 95%;
    max-width: 780px;
    height: 10%;
    display: flex;
    align-items: center;
    justify-content: center;
    max-height: 45px;
    text-align: center;
    margin: 0.25rem auto;
    padding: 1rem 0;
    border: none;
    border-radius: 3px;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  }
  @media (min-width: 950px) {
    width: 95%;
    margin: 0 auto;
    background: #fff;
    padding: 0.5rem 0;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
    border-radius: 3px;
  }
`

const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")
}

const CheckoutButton = () => {
  const [state, setState] = useState({})

  const checkoutBag = useStateContext()

  const handleChange = event => {
    setState({ ...state, [event.target.name]: event.target.value })
  }

  const handleSubmit = async event => {
    event.preventDefault()
    const form = event.target
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        ...state,
      }),
    })
      .then(() => console.log("Form successfully submitted"))
      .catch(error => alert(error))

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
      console.error("Error: ", error)
    }
  }

  return (
    <StyledContainer>
      <form
        name="order-details"
        method="post"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        onSubmit={handleSubmit}
      >
        <input type="hidden" name="form-name" value="order-details" />
        <input type="hidden" name="bot-field" />
        <span className="checkout-form-description">
          Please let us know when you'd like your order or if you have any
          questions!
        </span>
        <div className="checkout-form-nameEmail-div">
          <p className="checkout-form-nameEmail">
            <label>
              <span>name:</span>
              <input
                type="text"
                name="name"
                onChange={handleChange}
                placeholder="enter your name"
              />
            </label>
          </p>
          <p className="checkout-form-nameEmail">
            <label>
              <span>email:</span>
              <input
                type="email"
                name="email"
                onChange={handleChange}
                placeholder="enter your email"
              />
            </label>
          </p>
        </div>
        <p className="checkout-form-textArea">
          <textarea
            name="message"
            onChange={handleChange}
            placeholder="or let us know if you have any questions or special requests for your order..."
          ></textarea>
        </p>
        <button type="submit">checkout</button>
      </form>
    </StyledContainer>
  )
}

export default CheckoutButton
