import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"

const StyledContainer = styled.div`
  width: 95%;
  margin: 0 auto;
  background: #fff;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  border-radius: 3px;
  border: 1px solid #f3f3f3;

  .featComp-grid {
    margin: auto;
  }

  .featComp-img {
    width: 100%;
    text-align: center;
    img {
      width: 100%;
      height: auto;
      border-radius: 3px 3px 0 0;
    }
  }

  .featComp-post-container {
    margin: 0 auto;
    padding: 0.5rem;
  }

  .featComp-post-content {
    line-height: 1.4rem;
    padding: 0.5rem;
    margin: 0 auto;
    span {
      font-size: 0.95rem;
      display: block;
    }
    b {
      text-transform: lowercase;
    }
    p {
      margin-top: 0.25rem;
      font-size: 0.8rem;
    }
  }

  .featComp-post-link {
    margin-top: 0.5rem;
    a {
      display: block;
      width: 90%;
      margin: auto;
      text-align: center;
      padding: 0.5rem 0;
      border-radius: 3px;
      background: #262526;
      border: none;
      color: #fff;
      box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
      :hover {
        background: #fff;
        color: #262526;
        border: 1px solid #262526;
      }
    }
  }

  @media (min-width: 640px) {
    position: relative;
    height: auto;
    padding: 0;
    position: relative;
    .featComp-grid {
      display: flex;
      width: 100%;
      height: 100%;
    }
    .featComp-img {
      width: 65%;
      overflow: hidden;
      img {
        border-radius: 3px 0 0 3px;
        height: 100%;
        width: auto;
      }
    }
    .featComp-post-container {
      width: 35%;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
    }
    .featComp-post-content {
      span {
        font-size: 0.8rem;
      }
      p {
        font-size: 0.75rem;
        line-height: 1.4rem;
        padding: 1rem 0;
      }
    }
    .featComp-post-link {
      font-size: 0.9rem;
      a {
        padding: 0.35rem 0;
        width: 95%;
      }
    }
  }

  @media (min-width: 825px) {
    max-width: 1500px;
    .featComp-img {
      max-width: 60%;
    }
    .featComp-post-container {
      max-width: 40%;
      height: auto;
    }
    .featComp-post-content {
      span {
        font-size: 1.15rem;
      }
      p {
        font-size: 0.85rem;
        line-height: 1.5rem;
      }
    }
    .featComp-post-link {
      font-size: 1rem;
      a {
        padding: 0.5rem 0;
      }
    }
  }

  @media (min-width: 950px) {
    height: auto;
    max-width: 1200px;
    .featComp-post-container {
    }
    .featComp-post-content {
      span {
        font-size: 1.1rem;
      }
      p {
        font-size: 0.9rem;
        line-height: 1.7rem;
        padding: 1.5rem 0 0.5rem 0;
      }
    }
  }
`

const FeaturedComp = ({ post }) => {
  return (
    <StyledContainer>
      {post &&
        post.queryPost.edges.map(({ node: post }) => (
          <div key={post.id} className="featComp-grid">
            {post.mainImage.asset && post.mainImage.asset.fluid && (
              <Img
                fluid={post.mainImage.asset.fluid}
                alt={post.mainImage.alt}
                className="featComp-img"
              />
            )}
            <div className="featComp-post-container">
              <div className="featComp-post-content">
                {post.title && (
                  <span>
                    <b>Latest Post: </b>
                    {post.title}
                  </span>
                )}
                {post.excerpt && <p>{post.excerpt}</p>}
              </div>
              <div className="featComp-post-link">
                <Link to={`/blog/${post.slug.current}/`}>view post</Link>
              </div>
            </div>
          </div>
        ))}
    </StyledContainer>
  )
}

export default FeaturedComp
