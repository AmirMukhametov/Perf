import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './reset.css'
import './styles.css'
import './fonts.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
