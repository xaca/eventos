// Entry point for the React application
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Router from './components/ui/Menu/Router.jsx'
import { ThemeProvider } from './components/ui/Theme/ThemeProvider'
// Render the main Router inside StrictMode for development checks
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
      <Router />
    </ThemeProvider>
  </StrictMode>,
)
