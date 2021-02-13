import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import iconPaths from "../Icons/iconPaths"

const StyledNavbar = styled.nav`
  display: none;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 80%;
    text-transform: lowercase;
    .navbar-link {
      position: relative;
      color: #262526;
      font-size: 0.9375rem;
      letter-spacing: 0.25px;
      padding-top: 8px;
      font-weight: 600;
      svg {
        fill: #262526;
      }
    }
    .navbar-link:before {
      content: "";
      position: absolute;
      width: 0;
      height: 3px;
      bottom: 0;
      left: 0;
      background-color: #7f8084;
      visibility: hidden;
      transition: all 0.3s ease-in-out;
    }
    .navbar-link:hover:before {
      visibility: visible;
      width: 100%;
    }
  }
`

const Navbar = () => {
  const { bag } = iconPaths

  return (
    <>
      <StyledNavbar>
        <Link className="navbar-link" to="/store/">
          Order
        </Link>
        <Link className="navbar-link" to="/blog/">
          Blog
        </Link>
        <Link className="navbar-link" to="/about/">
          About
        </Link>
        <Link className="navbar-link" to="/help">
          FAQ/Contact
        </Link>
        <Link to="/checkout/" className="navbar-link">
          <svg width={bag.width} height={bag.height} viewBox={bag.viewBox}>
            <path d={bag.path} />
          </svg>
        </Link>
      </StyledNavbar>
    </>
  )
}

export default Navbar
