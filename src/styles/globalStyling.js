import modernNormalize from "styled-modern-normalize"
import { createGlobalStyle } from "styled-components"
import "@fontsource/open-sans"
import "@fontsource/sacramento"

const GlobalStyle = createGlobalStyle`
    ${modernNormalize}
    * {
        box-sizing: border-box;
    }

    html {
        width: 100%;
        height: 100%;
    }

    body {
        width: 100%;
        height: 100%;
        min-width: 320px;
        margin: 0;
        padding: 0;
        border: 0;
        background-color: #d7d8da;
        color: #262526;
        letter-spacing: -0.5px;
        font-size: 1rem;
        line-height: 1.5rem;
        font-weight: 400;
        font-family: 'Open Sans', sans-serif;
    }

    a {
        text-decoration: none;
        text-decoration-skip-ink: auto;
        color: inherit;
        cursor: pointer;
        margin: 0;
        &:hover,
        &:focus {
          outline: 0;
        }
    }

    h1 {
        margin: 0;

    }

    h2 {
        margin: 0;
        letter-spacing: 0;
        
    }

    h3 {
        margin: 0;
        
    }

    h4 {
        margin: 0;
        
    }

    h5 {
        margin: 0;
        
    }

    hr {
        margin: 0;
    }

    p {
        margin: 0;
        
    }

    button {
        cursor: pointer;
    }

    @media (min-width: 950px) {
        body {
            background: #f3f3f3;
        }
    }
`

export default GlobalStyle
