import React from "react"
import { Link } from "gatsby"
import iconPaths from "../Icons/iconPaths"
import styled from "styled-components"

const StyledBackdrop = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  bottom: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.45);
  z-index: 14;
  transition: all 0.2s ease-in-out;
  backdrop-filter: blur(5px);
  display: block;
`

const StyledWrapper = styled.div`
  position: absolute;
  z-index: 15;
  background: #fff;
  border-radius: 3px;
  left: 50%;
  transform: translateX(-50%);
  padding: 0.75rem 0.5rem;
  overflow: scroll;
  width: 85%;
  max-width: 520px;
  margin: 4rem auto 0 auto;
  height: auto;
  max-height: 320px;
  .order-confirmed-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    svg {
      margin-bottom: 1.25rem;
    }
  }
  .order-confirmed-email {
    font-size: 0.8rem;
    font-weight: 600;
    letter-spacing: 1px;
    padding: 0.25rem 0;
    cursor: pointer;
  }
  .order-confirmed-title {
    font-weight: 600;
    font-size: 1.4rem;
    padding-bottom: 0.25rem;
    text-align: center;
  }
  .order-confirmed-body {
    font-size: 0.85rem;
    text-align: center;
    padding: 0.25rem 0;
    width: 85%;
    margin: 0 auto;
  }
  .order-confirmed-doneButton {
    border: 1px solid black;
    background: #262526;
    color: #fff;
    width: 80%;
    margin-top: 1rem;
    text-align: center;
    max-width: 210px;
    border-radius: 3px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 40px;
  }
`

const ConfirmedComp = () => {
  const { success } = iconPaths

  return (
    <>
      <StyledWrapper>
        <div className="order-confirmed-container">
          <svg
            width={success.width}
            height={success.height}
            viewBox={success.viewBox}
          >
            <path d={success.path} />
          </svg>
          <span className="order-confirmed-title">
            Thank you for your order!
          </span>
          <span className="order-confirmed-body">
            If you have not done so already, please feel free to reach out if
            you have any questions regarding your order. Thanks!
          </span>
          <a
            href="mailto:bunny.veganbakedgoods@gmail.com"
            className="order-confirmed-email"
          >
            bunny.veganbakedgoods@gmail.com
          </a>
          <Link to="/" className="order-confirmed-doneButton">
            Done
          </Link>
        </div>
      </StyledWrapper>
      <StyledBackdrop />
    </>
  )
}

export default ConfirmedComp
