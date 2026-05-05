import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Listagem from './Listagem.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Listagem />
  </StrictMode>,
)
