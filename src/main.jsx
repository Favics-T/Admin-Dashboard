import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import UserProvider from './Context/UserContext.jsx'
import SideBarProvider from './Context/SideBarContext.jsx'
import WizardProvider from './Context/WizardContext.jsx'
import EcommerceProvider from './Context/EcommerceContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <EcommerceProvider>
    <WizardProvider>
    <SideBarProvider>
   <UserProvider>
    <App />
    </UserProvider>
     </SideBarProvider>
      </WizardProvider>
      </EcommerceProvider>
  </StrictMode>
)
