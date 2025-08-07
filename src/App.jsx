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
        <Route path='/' element={<Navigate to='/signup' replace />} />

        {/* Auth Pages with Layout */}
        <Route
          path='/login'
          element={
            <AuthLayout>
              <Login />
            </AuthLayout>
          }
        />

        <Route
          path='/signup'
          element={
            <AuthLayout>
              <SignUp />
            </AuthLayout>
          }
        />

        {/* Main Layout Routes */}
        <Route element={<MainLayout />}>
          <Route path='/home' element={<Home />} />
          
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
