import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Dwarer from './DrawerTest.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Dwarer />
  </StrictMode>,
)
