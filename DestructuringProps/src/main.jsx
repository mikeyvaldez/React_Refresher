import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'


// StrictMode is used for working in dev mode, it is used for rerendering 
// the application. Once it is ready for production it can be removed.

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
)
