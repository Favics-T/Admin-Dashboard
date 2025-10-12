import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import UserProvider from './Context/UserContext.jsx'
import SideBarProvider from './Context/SideBarContext.jsx'
import WizardProvider from './Context/WizardContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <WizardProvider>
    <SideBarProvider>
   <UserProvider>
    <App />
    </UserProvider>
     </SideBarProvider>
      </WizardProvider>
  </StrictMode>
)
