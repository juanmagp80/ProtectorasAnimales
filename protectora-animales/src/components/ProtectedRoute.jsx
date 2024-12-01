// src/components/ProtectedRoute.jsx
import { Navigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

function ProtectedRoute({ children }) {
    const { user, loading } = useAuth()

    if (loading) {
        return <div>Cargando...</div>
    }

    if (!user) {
        return <Navigate to="/login" replace />
    }

    return children
}

export default ProtectedRoute