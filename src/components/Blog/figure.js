import React from "react"
import Img from "gatsby-image"
import { getFluidGatsbyImage } from "gatsby-source-sanity"
import clientConfig from "../../../client-config"
import styled from "styled-components"

const StyledFigure = styled.figure`
  .figure-img {
    max-width: 1200px;
    margin: 0 auto;
  }
`

export default ({ node }) => {
  if (!node || !node.asset || !node.asset.id) {
    return null
  }

  const fluidProps = getFluidGatsbyImage(
    node.asset._id,
    { maxWidth: 675 },
    clientConfig.sanity
  )

  return (
    <StyledFigure>
      <Img fluid={fluidProps} alt={node.alt} className="figure-img" />
    </StyledFigure>
  )
}
