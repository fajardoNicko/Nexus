import { Navigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

export default function RoleRedirect() {
  const { profile, loading } = useAuth()

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full animate-spin" />
      </div>
    )
  }

  switch (profile?.role) {
    case 'admin': return <Navigate to="/admin/dashboard" replace />
    case 'procurement_head': return <Navigate to="/procurement/dashboard" replace />
    case 'department_head': return <Navigate to="/department/dashboard" replace />
    case 'finance_officer': return <Navigate to="/finance/dashboard" replace />
    case 'vendor': return <Navigate to="/vendor/dashboard" replace />
    case 'auditor': return <Navigate to="/auditor/dashboard" replace />
    default: return <Navigate to="/login" replace />
  }
}