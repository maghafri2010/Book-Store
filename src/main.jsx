import { StrictMode } from 'react'
import { createRoot, render } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import { HashRouter, HashRouter as Router } from 'react-router-dom'


createRoot(document.getElementById('root')).render(
  <StrictMode>
   <HashRouter>
    <App/>
  </HashRouter>
  </StrictMode>,
)
