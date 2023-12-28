import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/global'
import { Header } from './components/Header/index'
import { Tasks } from './components/Tasks/index'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Header />
      <Tasks />
      <GlobalStyle />
    </ThemeProvider>
  )
}
