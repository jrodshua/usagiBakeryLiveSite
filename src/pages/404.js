import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Site/layout"
import styled from "styled-components"

const StyledPage = styled.div`
  padding: 1rem;
  width: 95%;
  margin: 0 auto;
  background: #fff;
  border-radius: 3px;
  p {
    margin: 1rem 0;
  }
  a {
    color: blue;
  }
`

const NotFoundPage = () => (
  <Layout>
    <StyledPage>
      <h1>404: Not Found</h1>
      <p>Sorry this page doesn't exist</p>
      <Link to="/">Click here to return home</Link>
    </StyledPage>
  </Layout>
)

export default NotFoundPage
