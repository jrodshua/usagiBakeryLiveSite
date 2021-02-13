import React from "react"
import styled from "styled-components"
import iconPaths from "../Icons/iconPaths"

const StyledWrapper = styled.div`
  width: 95%;
  margin: 0 auto;
  max-width: 1500px;
  .faq-header {
    border-radius: 6px;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.11), 0 3px 6px rgba(0, 0, 0, 0.14);
    width: 100%;
    margin-bottom: 0.25rem;
    background: #fff;
    padding: 1.5rem 0;
    h1 {
      font-weight: 400;
      letter-spacing: 2px;
      font-size: 3.2rem;
      text-align: center;
      font-family: "Sacramento", cursive;
      text-transform: lowercase;
      padding: 0.5rem 0 0.8rem 0;
    }
  }
  .contact-wrap-header {
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    padding: 0.5rem 0;
    width: 100%;
    margin-bottom: 0.25rem;
    border-radius: 6px;
    background: #fff;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.11), 0 3px 6px rgba(0, 0, 0, 0.14);
    h2 {
      padding: 0.2rem 0;
      font-size: 1.3rem;
      text-transform: lowercase;
    }
    p {
      width: 85%;
      margin: 0 auto;
      font-size: 0.8rem;
    }
  }
  .contact-card-grid {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .contact-card-container {
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.11), 0 3px 6px rgba(0, 0, 0, 0.14);
    border-radius: 6px;
    width: 100%;
    margin-bottom: 0.25rem;
    background: #262526;
    color: #fff;
  }
  .contact-card-link {
    display: flex;
    padding: 0.7rem 0.3rem;
    align-items: center;
    svg {
      fill: #fff;
      margin: 0 1rem 0 0.5rem;
    }
  }
  .contact-card-inner {
    display: flex;
    flex-direction: column;
    width: 75%;
    line-height: 1.15rem;
    text-transform: lowercase;
    .card-header {
      font-size: 1.1rem;
      font-weight: 600;
      letter-spacing: 1px;
    }
    .card-body {
      font-size: 0.8rem;
    }
  }

  @media (min-width: 950px) {
    .faq-header {
      margin: 0;
      border-radius: 3px 3px 0 0;
      height: 200px;
      h1 {
        height: 100%;
        margin: revert;
      }
    }
    .contact-breakpoint-lg {
      display: flex;
      background: #fff;
      justify-content: center;
      height: 180px;
    }
    .contact-wrap-header {
      width: 50%;
      max-width: 450px;
      box-shadow: none;
      border-radius: 0;
      margin: 0;
      padding: 0;
      justify-content: center;
      h2 {
        padding-bottom: 1rem;
        text-align: left;
      }
      p {
        display: block;
        text-align: left;
        width: 100%;
        font-size: 0.95rem;
        margin: 0;
        padding-right: 0.5rem;
        line-height: 1.7rem;
      }
    }
    .contact-card-grid {
      width: 50%;
      max-width: 450px;
      box-shadow: none;
      border-radius: 0;
      padding: 0;
    }
    .contact-card-container {
      margin-bottom: 0.5rem;
      border-radius: 3px;
      transition: all 0.3s ease-in-out;
      :hover {
        background: #fff;
        color: #262526;
        border: 1px solid #262526;
        svg {
          fill: #262526;
        }
      }
    }
  }
`

const Contact = () => {
  const { instagram, email } = iconPaths

  return (
    <StyledWrapper>
      <div className="faq-header">
        <h1>FAQ & CONTACT</h1>
      </div>
      <div className="contact-breakpoint-lg">
        <div className="contact-wrap-header">
          <h2>Need to reach out?</h2>
          <p>
            Please reach out via email for any inquires regarding custom orders,
            your order status, or any general questions or concerns. Thanks!
          </p>
        </div>
        <div className="contact-card-grid">
          <div className="contact-card-container">
            <a
              className="contact-card-link"
              href="mailto:bunny.veganbakedgoods@gmail.com"
            >
              <svg
                width={email.width}
                height={email.height}
                viewBox={email.viewBox}
              >
                <path d={email.path} />
              </svg>
              <p className="contact-card-inner">
                <span className="card-header">Email Us!</span>
                <span className="card-body">
                  bunny.veganbakedgoods@gmail.com
                </span>
              </p>
            </a>
          </div>
          <div className="contact-card-container">
            <a
              className="contact-card-link"
              href="https://www.instagram.com/usagi.bakery/"
            >
              <svg
                width={instagram.width}
                height={instagram.height}
                viewBox={instagram.viewBox}
              >
                <path d={instagram.path} />
              </svg>
              <p className="contact-card-inner">
                <span className="card-header">DM Us!</span>
                <span className="card-body">@usagi.bakery</span>
              </p>
            </a>
          </div>
        </div>
      </div>
    </StyledWrapper>
  )
}

export default Contact
