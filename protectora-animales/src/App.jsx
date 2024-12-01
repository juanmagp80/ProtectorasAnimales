// src/App.jsx
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import ProtectedRoute from './components/ProtectedRoute'
import { AuthProvider } from './context/AuthContext'
import AdminPanel from './pages/AdminPanel'
import Animals from './pages/Animals'
import Home from './pages/Home'
import Login from './pages/Login'

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <div className="min-h-screen flex flex-col">
          <Navbar className="sticky top-0 z-50" />
          <main className="flex-1 bg-gradient-to-b from-gray-50 to-gray-100">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/animals" element={<Animals />} />
              <Route path="/login" element={<Login />} />
              <Route
                path="/admin"
                element={
                  <ProtectedRoute>
                    <AdminPanel />
                  </ProtectedRoute>
                }
              />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </AuthProvider>
  )
}

export default App