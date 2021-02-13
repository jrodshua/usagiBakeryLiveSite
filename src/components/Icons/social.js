import React from "react"

const Social = ({ iLink, iWidth, iHeight, iViewBox, iPathD }) => {
  return (
    <a href={iLink}>
      <svg width={iWidth} height={iHeight} viewBox={iViewBox}>
        <path d={iPathD} />
      </svg>
    </a>
  )
}

export default Social
