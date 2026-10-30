import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import BillingAddress from './BillingAddress.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BillingAddress/>
  </StrictMode>,
)
