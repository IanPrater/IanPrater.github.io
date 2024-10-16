import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { ThemeContextProvider } from './providers/theme-provider.tsx'
import { CssBaseline } from '@mui/material'
import { HashRouter } from 'react-router-dom';
import { StaticRouter } from 'react-router-dom/server';

function Router(props: { children?: React.ReactNode }) {
  const { children } = props;
  if (typeof window === 'undefined') {
    return <StaticRouter location="/">{children}</StaticRouter>;
  }

  return <HashRouter>{children}</HashRouter>;
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeContextProvider>
      <CssBaseline/>
      <Router>
        <App />
      </Router>
    </ThemeContextProvider>
  </StrictMode>,
)
