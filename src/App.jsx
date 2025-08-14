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
// import Layout from './components/Layout';

const App = () => {
  return (
    <Router>
      <Routes>
      
        <Route path="/" element={<Navigate to="/signup" replace />} />
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Route>

        

        {/* Main Layout Route */}
        <Route element={<MainLayout />}>
          <Route path="/home" element={<Home />} />
          <Route path='/analytics' element={<Analytics />} />
          <Route path='/profileoverview' element={<ProfileOverview />} />
          <Route path='/teams' element={<Teams />}/>
          <Route path='/allprojects' element={<AllProjects />}/>
          <Route />
        </Route>

        {/* 404 fallback */}
        <Route path="*" element={<Navigate to="/signup" replace />} />
      </Routes>
    </Router>
  );
};

export default App;
