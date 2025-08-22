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
// import Layout from './components/Layout';
import SplashCard from './Authentication/components/SplashCard'

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
          <Route path="/home" element={<Home />} />
          <Route path='/home/analytics' element={<Analytics />} />
          <Route path='/pages/profileoverview' element={<ProfileOverview />} />
          <Route path='/pages/teams' element={<Teams />}/>
          <Route path='/pages/allprojects' element={<AllProjects />}/>
          <Route path='/users/report' element={<Report />}/>
          <Route path='users/newuser' element={<NewUser />}/>
          <Route />
        </Route>

        {/* 404 fallback */}
        <Route path="*" element={<Navigate to="/signup" replace />} />
      </Routes>
    </Router>
  );
};

export default App;
