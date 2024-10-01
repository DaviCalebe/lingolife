import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Home from './pages/home.tsx'
import './style/global.scss'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Home />
  </StrictMode>,
)
