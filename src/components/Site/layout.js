import React, { useState } from "react"
import NewHead from "./newHead"
import styled, { ThemeProvider } from "styled-components"
import GlobalStyle from "../../styles/globalStyling"
import webTheme from "../../styles/theme"

const LayoutWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  margin: 0 auto;
  overflow: hidden;
`

const StyledMain = styled.main`
  position: ${({ open }) => (open ? "fixed" : "relative")};
`

const Layout = ({ children }) => {
  const [open, setOpen] = useState(false)

  return (
    <LayoutWrapper>
      <ThemeProvider theme={webTheme}>
        <GlobalStyle />
        <NewHead open={open} setOpen={setOpen} />
        <StyledMain open={open}>{children}</StyledMain>
      </ThemeProvider>
    </LayoutWrapper>
  )
}

export default Layout
