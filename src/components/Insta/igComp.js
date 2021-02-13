import React from "react"
import styled from "styled-components"
import iconPaths from "../Icons/iconPaths"

const StyledContainer = styled.div`
  width: 100%;
  margin: 0.25rem auto 0 auto;
  background: transparent;
  padding-bottom: 0.5rem;

  .igComp-header {
    padding: 1rem 0;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 95%;
    margin: 0 auto 0.25rem auto;
    background: #fff;
    border-radius: 3px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    svg {
      margin-right: 0.7rem;
    }
    p {
      font-size: 1rem;
      padding-bottom: 0.1rem;
    }
  }
  .igHeader-hidden {
    display: none;
  }

  .igGrid-one {
    width: 95%;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(4, 1fr);
    grid-column-gap: 4px;
    grid-row-gap: 4px;
  }
  .igGrid-two {
    display: none;
  }
  .igComp-grid {
    width: 100%;
    line-height: 0;
    img {
      width: 100%;
      height: auto;
      border-radius: 6px;
    }
  }

  @media (min-width: 760px) {
    .igGrid-two {
      width: 95%;
      margin: 0 auto;
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gird-template-rows: repeat(4, 1fr);
      grid-column-gap: 4px;
      grid-row-gap: 4px;
    }
    .igGrid-one {
      display: none;
    }
  }

  @media (min-width: 950px) {
    max-width: 1200px;
    width: 95%;
    .igComp-header {
      width: 100%;
      height: 72px;
      svg {
        width: 26px;
        height: 26px;
        margin: 1.5rem;
      }
      p {
        font-size: 1.1rem;
        font-weight: 600;
      }
    }
    .igHeader-hidden {
      display: block;
      font-family: "Sacramento", cursive;
      font-size: 1.75rem;
      letter-spacing: 1.5px;
      padding-top: 3px;
    }
    .igGrid-two {
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
    }
    .igComp-grid {
      width: 24.6%;
      img {
        width: 100%;
        height: auto;
        border-radius: 3px;
      }
    }
  }
`

const IgComp = ({ posts }) => {
  const { instagram } = iconPaths
  const postsSlice = posts.slice(0, 8)

  return (
    <>
      <StyledContainer>
        <a
          className="igComp-header"
          href="https://www.instagram.com/usagi.bakery/"
        >
          <b className="igHeader-hidden">follow us!</b>
          <svg
            width={instagram.width}
            height={instagram.height}
            viewBox={instagram.viewBox}
          >
            <path d={instagram.path} />
          </svg>
          <p>@usagi.bakery</p>
        </a>
        <div className="igGrid-one">
          {postsSlice.map(p => {
            return (
              <div key={p.id} className="igComp-grid">
                <a
                  href={`https://www.instagram.com/p/${p.url}/`}
                  target="_blank"
                  aria-label="Link to instagram post"
                  className="igComp-link"
                  rel="noopener noreferrer"
                >
                  <img src={p.src} alt={p.caption} className="igComp-img" />
                </a>
              </div>
            )
          })}
        </div>
        <div className="igGrid-two">
          {posts.map(p => {
            return (
              <div key={p.id + 654} className="igComp-grid">
                <a
                  href={`https://www.instagram.com/p/${p.url}/`}
                  target="_blank"
                  aria-label="Link to instagram post"
                  className="igComp-link"
                  rel="noopener noreferrer"
                >
                  <img src={p.src} alt={p.caption} className="igComp-img" />
                </a>
              </div>
            )
          })}
        </div>
      </StyledContainer>
    </>
  )
}

export default IgComp
