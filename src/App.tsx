import { ThemeProvider } from 'styled-components'
import theme from './styles/themes/theme'
import { GlobalStyle } from './styles/globalStyle'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <h1>Hello Be!</h1>
    </ThemeProvider>
  )
}

export default App
