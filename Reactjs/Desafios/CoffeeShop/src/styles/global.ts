import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
}

:focus{
    box-shadow: 0 0 2px ${(props) => props.theme['yellow-dark']};
    outline: 0;
}

body{
background-color: ${(props) => props.theme.background};
}
`
