import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Themecontezt from './context/themecontezt'

createRoot(document.getElementById('root')).render(
  <Themecontezt>
    <App />
  </Themecontezt>


)
