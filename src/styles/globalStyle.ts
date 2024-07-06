import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  body {
    background-color: ${({ theme }) => theme.colors['gray-00']};
    color: ${({ theme }) => theme.colors.black};
    font-family: ${({ theme }) => theme.font.family};
    font-weight: ${({ theme }) => theme.font.regular};
    font-size: ${({ theme }) => theme.font.sizes['regular-16']};
  }
`
