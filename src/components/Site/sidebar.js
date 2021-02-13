import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import Social from "../Icons/social"
import iconPaths from "../Icons/iconPaths"

const StyledBackdrop = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  bottom: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.4);
  z-index: 9;
  transition: all 0.2s ease-in-out;
  display: ${({ open }) => (open ? "block" : "none")};
  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    display: none;
  }
`

const StyledContainer = styled.div`
  display: block;
  position: fixed;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  outline: 0;
  z-index: 10;
  transition: all 0.3s ease-in-out;
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
  visibility: ${({ open }) => (open ? "visible" : "hidden")};

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    display: none;
  }
`

const StyledSidebar = styled.nav`
  background: #fff;
  display: flex;
  flex-direction: column;
  bottom: 0;
  right: 0;
  height: 100%;
  z-index: 10;
  box-shadow: inset 0px 1px 3px -1px rgba(0, 0, 0, 0.35);
  justify-content: flex-start;
  width: 80%;
  position: absolute;
  margin-left: auto;

  .top {
    padding-top: 4rem;
  }

  .side-navlink {
    padding: 1.2rem 3.2rem;
    font-size: 1.1rem !important;
    color: #262526;
    text-transform: lowercase;
    font-weight: 600;
    letter-spacing: 1px;
  }

  .bottom {
    box-shadow: 0 6px 6px -5px rgba(0, 0, 0, 0.25);
    padding-top: 1.5rem;
    width: 90%;
    margin: 0 auto;
  }

  .sidebar-icons {
    display: flex;
    padding: 2.15rem 3.2rem;
    svg {
      margin-right: 2rem;
      fill: #262526;
    }
  }
`

const Sidebar = ({ open, setOpen }) => {
  const { instagram, youtube, email } = iconPaths

  return (
    <>
      <StyledContainer open={open} aria-hidden={!open}>
        <StyledSidebar>
          <div className="top"></div>
          <Link
            to="/store/"
            className="side-navlink"
            onClick={() => setOpen(!open)}
          >
            Order
          </Link>
          <Link
            to="/blog/"
            className="side-navlink"
            onClick={() => setOpen(!open)}
          >
            Blog
          </Link>
          <Link
            to="/about/"
            className="side-navlink"
            onClick={() => setOpen(!open)}
          >
            About
          </Link>
          <Link
            to="/help/"
            className="side-navlink"
            onClick={() => setOpen(!open)}
          >
            FAQ/Contact
          </Link>
          <Link
            to="/checkout/"
            className="side-navlink"
            onClick={() => setOpen(!open)}
          >
            Checkout
          </Link>
          <div className="bottom"></div>
          <div className="sidebar-icons">
            <Social
              iLink="https://www.instagram.com/usagi.bakery/"
              iWidth={instagram.width}
              iHeight={instagram.height}
              iViewBox={instagram.viewBox}
              iPathD={instagram.path}
              className="social-svg"
            />
            <Social
              iLink="https://www.youtube.com/channel/UCu9oKcEcPQuoA0avtLfRyzw/featured"
              iWidth={youtube.width}
              iHeight={youtube.height}
              iViewBox={youtube.viewBox}
              iPathD={youtube.path}
              className="social-svg"
            />
            <Social
              iLink="mailto:bunny.veganbakedgoods@gmail.com"
              iWidth={email.width}
              iHeight={email.height}
              iViewBox={email.viewBox}
              iPathD={email.path}
              className="social-svg"
            />
          </div>
        </StyledSidebar>
      </StyledContainer>
      <StyledBackdrop open={open} />
    </>
  )
}

export default Sidebar
