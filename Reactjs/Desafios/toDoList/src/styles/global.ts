import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body{
    background-color: ${(props) => props.theme['gray-600']};
    font-family: 'Inter', sans-serif;
    line-height: 1.4;
  }

  body::before{
    content: '';
    width: 100%;
    height: 12.5rem;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    background-color: ${(props) => props.theme['gray-700']};
  }

  :focus{
    outline: 0;
    box-shadow: 0 0 0 1px ${(props) => props.theme['purple-dark']};
  }
`
