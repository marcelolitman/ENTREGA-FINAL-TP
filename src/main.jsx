import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'
import App from './App.jsx'
import {BrowserRouter as Router} from 'react-router-dom'
import { CarritoProvider } from './context/CarritoContext.jsx'
import { AuthProvider } from './context/AuthContext.jsx'
import { ProductoProvider } from './context/ProductoContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>    
       <Router>
         <AuthProvider>
            <ProductoProvider>
              <CarritoProvider>
                <App />
              </CarritoProvider>
            </ProductoProvider>        
          </AuthProvider>                  
      </Router>           
  </StrictMode>,
)
