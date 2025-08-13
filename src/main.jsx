import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import UserProvider from './Context/UserContext.jsx'
import SideBarProvider from './Context/SideBarContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <SideBarProvider>
   <UserProvider>
    <App />
    </UserProvider>
     </SideBarProvider>
  </StrictMode>
)
