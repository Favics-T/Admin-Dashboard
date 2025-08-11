import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import AuthLayout from './Authentication/AuthLayout';
import MainLayout from './components/MainLayout';
import Login from './Authentication/Login';
import SignUp from './Authentication/SignUp';
import Home from './pages/Home/Home';

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Redirect root to signup */}
        <Route path="/" element={<Navigate to="/signup" replace />} />

        {/* Auth Layout Group */}
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Route>

        

        {/* Main Layout Group */}
        <Route element={<MainLayout />}>
          <Route path="/home" element={<Home />} />
        
        </Route>

        {/* 404 fallback */}
        <Route path="*" element={<Navigate to="/signup" replace />} />
      </Routes>
    </Router>
  );
};

export default App;
