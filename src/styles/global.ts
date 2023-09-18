import { createGlobalStyle } from "styled-components";

interface GlobalProps  {
  fontFamily: string
}

export const GlobalStyle = createGlobalStyle<GlobalProps>`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  body {
    max-width: calc(737px + 5rem);
    margin: 0 auto;
    padding: 0 2.5rem;
    background-color: ${props => props.theme.colors.backGround};
    transition: all 0.1s linear;
    font-family: ${props => props.fontFamily};
  }

  p, span, li, h1, h2, input,a {
    color: ${props => props.theme.colors.textColor};
  }

  hr {
    border-color: ${props => props.theme.colors.lineColor};
  }

  @media (max-width: 425px) {
    body {
      padding: 0 1.5rem;
    }
  }
`
