import React from 'react'
import { BrowserRouter as Router,Routes, Route,Navigate } from 'react-router-dom'
import AuthLayout from './Authentication/AuthLayout';
import MainLayout from './components/MainLayout';
import Login from './Authentication/Login';
import SignUp from './Authentication/SignUp';

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Navigate to='/signup' replace />} />
          {/* Auth Pages */}
          <Route
          path='/login'
          element={<AuthLayout>
            <Login />
            </AuthLayout>
            }
          />

          <Route
          path='/signup'
          element={<AuthLayout>
            <SignUp />
            </AuthLayout>
            }
          />
        </Routes>
      </Router>
    </div>
  )
}

export default App
