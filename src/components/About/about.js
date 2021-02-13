import React from "react"
import styled from "styled-components"

const StyledWrapper = styled.main`
  padding-bottom: 0.25rem;
  width: 100%;
  max-width: 1500px;
  margin: 0 auto;
  aside {
    width: 95%;
    margin: 0.25rem auto 0 auto;
    text-align: center;
    background: #fff;
    color: #262526;
    border-radius: 6px;
    font-size: 0.75rem;
    font-weight: 600;
    padding: 0.5rem 1rem;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.11), 0 3px 6px rgba(0, 0, 0, 0.14);
  }
  @media (min-width: 780px) {
    aside {
      font-size: 0.9rem;
      padding: 1rem 0;
    }
  }
`
const StyledSection = styled.section`
  width: 95%;
  margin: 0 auto;
  .about-header-hidden {
    display: none;
  }
  .aboutPage-hero {
    text-align: center;
    width: 100%;
    line-height: 0;
    margin-bottom: 0.25rem;
    h1 {
      width: 100%;
      margin: 0 auto 0.25rem auto;
      padding: 2rem 0 1rem 0;
      font-size: 3rem;
      text-transform: lowercase;
      font-family: "Sacramento", cursive;
      letter-spacing: 2px;
      font-weight: 400;
      background: #fff;
      color: #262526;
      border-radius: 6px;
      box-shadow: 0 3px 6px rgba(0, 0, 0, 0.11), 0 3px 6px rgba(0, 0, 0, 0.14);
    }
    img {
      width: 100%;
      height: auto;
      border-radius: 6px;
      border: 1px solid #f3f3f3;
    }
  }
  .aboutPage-grid {
    margin-bottom: 0.25rem;
    display: flex;
    flex-direction: column;
    background: #fff;
    padding: 1rem;
    border-radius: 6px;
    h2 {
      font-family: "Sacramento", cursive;
      text-transform: lowercase;
      font-weight: 400;
      letter-spacing: 1px;
      font-size: 3.2rem;
      padding: 1rem 0 2rem 0;
      color: #262526;
    }
    p {
      font-size: 0.8rem;
      color: #262526;
    }
  }

  @media (min-width: 480px) {
    .about-first {
      display: flex;
      .aboutPage-hero {
        width: 50%;
        h1 {
          font-size: 2.7rem;
        }
      }
      div:nth-child(2) {
        width: 50%;
        margin-left: 0.25rem;
      }
    }
    .aboutPage-grid {
      h2 {
        font-size: 3.5rem;
        padding: 1rem 0 2rem 0;
      }
      p {
        font-size: 0.9rem;
      }
    }
  }
  @media (min-width: 580px) {
    .about-first {
      .aboutPage-hero {
        overflow: hidden;
        width: 50%;
        height: auto;
        img {
          width: 100%:
        }
      }
      div:nth-child(2) {
        width: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        h2 {
          margin: 0 auto;
        }
        p {
          line-height: 1.75rem;
          max-width: 30ch;
          margin: 0 auto;
        }
      }
    }
    .about-header-hidden {
      display: flex;
      margin-bottom: 0.25rem;
      background: #fff;
      color: #262526;
      justify-content: center;
      align-items: center;
      font-family: "Sacramento", cursive;
      font-weight: 400;
      text-transform: lowercase;
      font-size: 2.7rem;
      padding: 0.75rem 0 0.4rem 0;
      border-radius: 6px;
    }
    .about-header-og {
      display: none;
    }
    .aboutPage-grid {
      h2 {
        font-size: 4rem;
      }
      p {
        font-size: 0.9rem;
      }
    }
  }

  @media (min-width: 1000px) {
    .about-first {
      max-height: 500px;
      .aboutPage-hero {
        img {
          object-position: 0 -110px;
        }
      }
      div:nth-child(2) {
        h2 {
          margin: 1rem auto;
        }
        p {
          line-height: 2.7rem;
          max-width: 30ch;
          margin: 1rem auto;
        }
      }
    }
    .about-header-hidden {
      padding: 2rem 0 1.2rem 0;
    }
    .aboutPage-grid {
      h2 {
        font-size: 5rem;
        padding: 1rem;
        margin: 1rem;
      }
      p {
        width: 70%;
        margin: 1rem auto;
        line-height: 2rem;
      }
    }
  }
  
`

const AboutPage = () => {
  return (
    <StyledWrapper>
      <StyledSection>
        <h1 className="about-header-hidden">ABOUT US</h1>
        <div className="about-first">
          <div className="aboutPage-hero">
            <h1 className="about-header-og">ABOUT US</h1>
            <img
              src="https://res.cloudinary.com/jrod-cdn/image/upload/v1612031944/about-hero_qy8k4r.jpg"
              alt="Usagi.Bakery owner, Marianne Re, and her dog Buster."
            />
          </div>
          <div className="aboutPage-grid">
            <h2>OUR STORY</h2>
            <p>
              usagi. bakery was unofficially started in 2018 (previously under
              various names) as a labor of baked love, founded upon three
              pillars which the owner has deemed fundamentally important to the
              business: veganism, ethics, and sustainability. Read on to learn
              more.
            </p>
          </div>
        </div>
        <div className="aboutPage-grid">
          <h2>VEGANISM</h2>
          <p>
            The owner of usagi. bakery has been vegan for more than ten years,
            so it is only natural for every ingredient and resulting product to
            be vegan, as well. Creating fundraisers and providing donations
            towards vegan causes, particularly the Las Vegas Animal Save, are
            also close to the heart of the bakery. Consequently, this pillar
            flows into the ethical side...
          </p>
        </div>
        <div className="aboutPage-grid">
          <h2>ETHICS</h2>
          <p>
            ...Which digs deeper into the ingredients used in the bakery’s baked
            goods and cakes. It is not enough to simply refrain from using
            animal products on a base level. If animals and humans are harmed
            somewhere in the production line of the ingredients, usagi. bakery
            does its best to avoid it. Actively seeking out, purchasing, and
            baking with ingredients that are fair-trade, preferably
            small-business, and ethically-minded follow the bakery’s ethos.
          </p>
        </div>
        <div className="aboutPage-grid">
          <h2>SUSTAINABILITY</h2>
          <p>
            The final pillar is an ever-evolving work in progress upon which
            usagi. bakery is proud to continue improving. Baking things in a way
            that is good for the environment is a large reason why the owner
            started a baking Youtube channel and corresponding blog: to
            normalize more sustainable practices. Such include using reusable
            silicone mats over parchment paper, avoiding ingredients such as
            palm oil as much as possible, and making your own jams and custards
            to decrease store demand and, therefore, initial production and
            transport of products. These practices, among others, are used in
            our own baking process.
          </p>
        </div>
      </StyledSection>
      <aside>
        <span>
          If you choose to order through usagi. bakery, we will do our best to
          lovingly bake your completely-vegan order as ethically and sustainably
          as possible!
        </span>
      </aside>
    </StyledWrapper>
  )
}

export default AboutPage
