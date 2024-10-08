import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import Dwarer from './DrawerTest.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Dwarer />
  </StrictMode>,
)
