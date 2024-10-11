import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { ThemeContextProvider } from './providers/theme-provider.tsx'
import { CssBaseline } from '@mui/material'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeContextProvider>
      <CssBaseline/>
      <App />
    </ThemeContextProvider>
  </StrictMode>,
)
