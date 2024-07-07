import { ThemeProvider } from 'styled-components'
import { BrowserRouter } from 'react-router-dom'
import theme from './styles/themes/theme'
import { GlobalStyle } from './styles/globalStyle'
import { Router } from './routes/Router'
import { SearchProvider } from './contexts/SearchContext'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <GlobalStyle />
        <SearchProvider>
          <Router />
        </SearchProvider>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
