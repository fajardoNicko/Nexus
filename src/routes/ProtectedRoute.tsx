import { Navigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { Role } from '../types'

interface Props {
  children: React.ReactNode
  allowedRoles?: Role[]
}

export default function ProtectedRoute({ children, allowedRoles }: Props) {
  const { user, profile, loading } = useAuth()

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-950">
        <div className="w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full animate-spin" />
      </div>
    )
  }

  if (!user) return <Navigate to="/login" replace />

  if (allowedRoles && profile && !allowedRoles.includes(profile.role)) {
    return <Navigate to="/unauthorized" replace />
  }

  return <>{children}</>
}