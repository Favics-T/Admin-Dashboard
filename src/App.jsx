import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import AuthLayout from './Authentication/AuthLayout';
import MainLayout from './components/MainLayout';
import Login from './Authentication/Login';
import SignUp from './Authentication/SignUp';
import Home from './pages/Home/Home';
import Analytics from './pages/Home/Analytics';
import ProfileOverview from './pages/Pages/Profile/ProfileOverview';
import Teams from './pages/Pages/Profile/Teams';
import AllProjects from './pages/Pages/Profile/AllProjects';
import Report from './pages/Pages/Users/Report';
import NewUser from './pages/Pages/Users/NewUser';
import KanbanDashboard from './pages/Application/Kanban/Kanban';
import SplashCard from './Authentication/components/SplashCard'
import Setting from './pages/Pages/Account/Setting';
import Billing from './pages/Pages/Account/Billing';
import Invoice from './pages/Pages/Account/Invoice';
import Security from './pages/Pages/Account/Security';
import Chart from './pages/Pages/Chart';
import Notification from './pages/Pages/Notification';
import Chat from './pages/Pages/Chat/Chat';
import General from './pages/Pages/Projects/General';
import Timeline from './pages/Pages/Projects/Timeline';
import NewProject from './pages/Pages/Projects/NewProject';
import Dashboard from './pages/Home/Dashboard';
import PricingPage from './pages/Pages/PricingPage';

const App = () => {
  return (
    <Router>
      <Routes>
      
        <Route path="/" element={<Navigate to="/signup" replace />} />
        <Route path='/welcome' element={<SplashCard />} />
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Route>

        

        {/* Main Layout Route */}
        <Route element={<MainLayout />}>
          <Route path="/home" element={<Dashboard />} />
          <Route path='/home/analytics' element={<Analytics />} />
          <Route path='/pages/profileoverview' element={<ProfileOverview />} />
          <Route path='/pages/teams' element={<Teams />}/>
          <Route path='/pages/allprojects' element={<AllProjects />}/>
          <Route path='/users/report' element={<Report />}/>
          <Route path='users/newuser' element={<NewUser />}/>
          <Route path='/pages/account/setting' element={<Setting />}/>
          <Route path='/pages/account/billing' element={<Billing />} />
          <Route path='/pages/account/invoice' element={<Invoice />} />
          <Route path='/pages/account/security' element={<Security />}  />
          <Route path='/pages/charts' element={<Chart />} />
          <Route path='/pages/notification' element={<Notification />} />
          <Route path='/pages/chat' element={<Chat />} />
          <Route path='/pages/projects/general' element={<General />} />
          <Route path='/pages/projects/timeline' element={<Timeline />} />
          <Route path='/pages/projects/newproject' element={<NewProject />} />
          <Route path='/pages/pricingpage' element={<PricingPage />} />
          <Route path='/application/kanban' element={<KanbanDashboard />} />
          <Route />
        </Route>

        {/* 404 fallback */}
        <Route path="*" element={<Navigate to="/signup" replace />} />
      </Routes>
    </Router>
  );
};

export default App;
