import React, { useState } from "react"
import styled from "styled-components"

const StyledFAQ = styled.section`
  width: 100%;
  margin-bottom: 0.25rem;
  .faq-container-div {
    display: flex;
    flex-direction: column;
    background: #fff;
    margin-top: -1px;
    margin-left: -1px;
    outline-style: none;
    border-radius: 6px;
    .faq-button-container {
      padding: 0;
      background: #fff;
      border: none;
      outline: none;
      border-radius: 6px;
      .faq-button-row {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 80px;
        padding: 0 8px;
        h2 {
          font-size: 1rem;
          width: 85%;
          text-align: left;
          line-height: 1.3rem;
          color: #262526;
        }
        span {
          margin-right: 0.5rem;
          font-size: 1.5rem;
          line-height: 1.1rem;
        }
      }
    }
    .faq-content-div {
      font-size: 0.9rem;
      padding: 0 0.75rem 1rem 0.75rem;
      width: 90%;
      display: ${({ tog }) => (tog.display ? "block" : "none")};
      line-height: 1.3rem;
      color: #262526;
      .p-newline {
        white-space: pre-line;
        line-height: 1.7rem;
        max-width: 100ch;
      }
    }
  }

  @media (min-width: 950px) {
    max-width: 900px;
    margin: 0 auto;
    .faq-container-div {
      border-radius: 0;
      margin: 0;
      border-bottom: 1px solid #262526;
    }
  }
`

const Help = ({ fTitle, fBody, val }) => {
  const [open, setOpen] = useState({
    val: 0,
    toggle: "+",
    display: false,
  })

  const handleToggle = e => {
    const { value } = e.currentTarget
    if (value === open.val) {
      setOpen({ val: 0, toggle: "+", display: false })
    } else {
      setOpen({ val: value, toggle: "-", display: true })
    }
  }

  return (
    <StyledFAQ tog={open}>
      <div className="faq-container-div">
        <button
          className="faq-button-container"
          onClick={handleToggle}
          value={val}
        >
          <div className="faq-button-row">
            <h2>{fTitle}</h2>
            <span>{open.toggle}</span>
          </div>
        </button>
        <div className="faq-content-div">
          <p className="p-newline">{fBody}</p>
        </div>
      </div>
    </StyledFAQ>
  )
}

export default Help
