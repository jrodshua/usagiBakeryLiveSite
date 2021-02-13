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
  .order-errors-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    svg {
      margin-bottom: 1.25rem;
    }
  }
  .order-errors-email {
    font-size: 0.75rem;
    line-height: 1.2rem;
    text-align: center;
    padding: 0.7rem 0;
    cursor: pointer;
  }
  .order-errors-title {
    font-weight: 600;
    font-size: 1.4rem;
    padding-bottom: 0.25rem;
    text-align: center;
  }
  .order-errors-body {
    font-size: 0.9rem;
    text-align: center;
    padding: 0.25rem 0;
    width: 85%;
    margin: 0 auto;
  }
  .order-errors-doneButton {
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

const ErrorsComp = () => {
  const { warning } = iconPaths

  return (
    <>
      <StyledWrapper>
        <div className="order-errors-container">
          <svg
            width={warning.width}
            height={warning.height}
            viewBox={warning.viewBox}
          >
            <path d={warning.path} />
          </svg>
          <span className="order-errors-title">Uh oh..</span>
          <span className="order-errors-body">
            We're sorry, but there was an issue with your order. Please try
            again.
          </span>
          <a
            href="mailto:bunny.veganbakedgoods@gmail.com"
            className="order-errors-email"
          >
            <span>
              been here before? please reach out to us at:{" "}
              <b>bunny.veganbakedgoods@gmail.com</b>
            </span>
          </a>
          <Link to="/store/" className="order-errors-doneButton">
            Try Again
          </Link>
        </div>
      </StyledWrapper>
      <StyledBackdrop />
    </>
  )
}

export default ErrorsComp
