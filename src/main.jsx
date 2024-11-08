import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import'./bootstrap.min.css'
import { BrowserRouter } from 'react-router-dom'
import ContextAPi from './contexts/ContextAPi.jsx'
import AuthContextAPI from './contexts/AuthContextAPI.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthContextAPI>
      <ContextAPi>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ContextAPi>
    </AuthContextAPI>
  </StrictMode>,
)
