import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import iconPaths from "../Icons/iconPaths"

const StyledContainer = styled.div`
  display: none;
  @media (min-width: 320px) {
    display: block;
    position: fixed;
    left: 0;
    bottom: 1rem;
    width: 100%;
    height: 50px;
    outline: 0;
    background: transparent;
    border: none;
    z-index: 8;
    transition: all 0.3s ease-in-out;
    transform: ${({ vis }) => (!vis ? "translateY(150%)" : "translateY(0)")};

    .bottom-nav-grid {
      display: flex;
      justify-content: space-between;
      padding: 0 1.15rem;
      height: 100%;
      align-items: center;
      text-transform: lowercase;
      background: #262526;
      color: #fff;
      width: 85%;
      max-width: 30rem;
      margin: auto;
      border-radius: 50px;
    }

    .bottom-nav-link {
      font-size: 0.9rem;
      font-weight: 600;
      cursor: pointer;
      letter-spacing: 0.25px;
      svg {
        margin-top: 5px;
        fill: #fff;
      }
    }
  }
`

const BottomNav = ({ open, vis }) => {
  const { bag } = iconPaths

  return (
    <>
      <StyledContainer open={open} vis={vis}>
        <div className="bottom-nav-grid">
          <Link to="/store/" className="bottom-nav-link">
            Order
          </Link>
          <Link to="/blog/" className="bottom-nav-link">
            Blog
          </Link>
          <Link to="/about/" className="bottom-nav-link">
            About
          </Link>
          <Link to="/help/" className="bottom-nav-link">
            FAQ
          </Link>
          <Link to="/checkout/" className="bottom-nav-link">
            <svg width={22} height={22} viewBox={bag.viewBox}>
              <path d={bag.path} />
            </svg>
          </Link>
        </div>
      </StyledContainer>
    </>
  )
}

export default BottomNav
