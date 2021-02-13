import React, { useState, useEffect } from "react"
import Logo from "./logo"
import Navbar from "./navbar"
import Sidebar from "./sidebar"
import BottomNav from "./bottomNav"
import { isMobile, isSSR } from "../../lib/lib"
import styled from "styled-components"

const StyledHeader = styled.header`
  width: 100%;
  background: #fff;
  height: 70px;
  display: flex;
  box-shadow: 0.5px 0.75px 3px 0px rgba(0, 0, 0, 0.3);
  margin-bottom: 0.25rem;
`
const StyledWrapper = styled.div`
  max-width: 76rem;
  margin: 0 auto;
  padding: 0 2rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const StyledBurger = styled.button`
  z-index: 12;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2.2rem;
  height: 1.5rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;

  &:focus {
    outline: none;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    display: none;
  }

  div {
    width: 1.5rem;
    height: 1.85px;
    background: #000000;
    border-radius: 0.625rem;
    transition: all 0.3s ease-in-out;
    position: relative;
    transform-origin: 1.5px;

    :first-child {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
    }

    :nth-child(2) {
      opacity: ${({ open }) => (open ? "0" : "1")};
      transform: ${({ open }) => (open ? "rotate(-270deg)" : "rotate(0)")};
    }

    :nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
`

const NewHead = ({ open, setOpen }) => {
  const [windowWidth, setWindowWidth] = useState(0)
  const [scroll, setScroll] = useState({
    prevScroll: 0,
    visible: false,
  })

  useEffect(() => {
    let handleWindowSize
    if (!isSSR) {
      handleWindowSize = () => setWindowWidth(window.innerWidth)
      setWindowWidth(window.innerWidth)
    }
    window.addEventListener("resize", handleWindowSize)
    return () => window.removeEventListener("resize", handleWindowSize)
  }, [windowWidth])

  useEffect(() => {
    let handleScrollPos
    if (!isSSR) {
      handleScrollPos = () => {
        const { prevScroll } = scroll
        const newScrollPos = window.pageYOffset
        const visible = prevScroll > newScrollPos
        setScroll({
          prevScroll: newScrollPos,
          visible,
        })
      }
    }
    window.addEventListener("scroll", handleScrollPos)
    return () => window.removeEventListener("scroll", handleScrollPos)
  }, [scroll])

  let siteNav
  if (isMobile(windowWidth)) {
    siteNav = (
      <>
        <StyledBurger
          aria-controls="sidebar"
          open={open}
          onClick={() => setOpen(!open)}
        >
          <div />
          <div />
          <div />
        </StyledBurger>
        <Sidebar id="sidebar" open={open} setOpen={setOpen} />
      </>
    )
  } else {
    siteNav = <Navbar />
  }

  let bottomNavComp
  if (isMobile(windowWidth)) {
    bottomNavComp = (
      <>
        <BottomNav open={open} vis={scroll.visible} />
      </>
    )
  } else {
    bottomNavComp = <></>
  }

  return (
    <StyledHeader>
      <StyledWrapper>
        <Logo />
        {siteNav}
      </StyledWrapper>
      {bottomNavComp}
    </StyledHeader>
  )
}

export default NewHead
