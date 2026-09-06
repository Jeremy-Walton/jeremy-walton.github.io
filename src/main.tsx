import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { LazyMotion, domAnimation } from 'motion/react'
import './index.css'
import App from './App.tsx'
import { ThemeProvider } from '@/lib/theme-context'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <LazyMotion features={domAnimation} strict>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </LazyMotion>
  </StrictMode>,
)
