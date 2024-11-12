import ReactDOM from "react-dom/client"
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './global/styles/global.css'

import App from './app/App'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

