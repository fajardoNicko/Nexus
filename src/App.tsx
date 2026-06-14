import { Routes, Route } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext'
import ProtectedRoute from './routes/ProtectedRoute'
import RoleRedirect from './routes/RoleRedirect'


// Dashboard placeholders
import AdminDashboard from './pages/dashboard/AdminDashboard'
import ProcurementDashboard from './pages/dashboard/ProcurementDashboard'
import DepartmentDashboard from './pages/dashboard/DepartmentDashboard'
import FinanceDashboard from './pages/dashboard/FinanceDashboard'
import VendorDashboard from './pages/dashboard/VendorDashboard'
import AuditorDashboard from './pages/dashboard/AuditorDashboard'
import UnauthorizedPage from './pages/UnauthorizedPage'

export default function App() {
  return (
    <AuthProvider>
      <Routes>
        {/* Public */}
        <Route path="/unauthorized" element={<UnauthorizedPage />} />

        {/* Role redirect on root */}
        <Route path="/" element={
          <ProtectedRoute>
            <RoleRedirect />
          </ProtectedRoute>
        } />

        {/* Admin */}
        <Route path="/admin/dashboard" element={
          <ProtectedRoute allowedRoles={['admin']}>
            <AdminDashboard />
          </ProtectedRoute>
        } />

        {/* Procurement Head */}
        <Route path="/procurement/dashboard" element={
          <ProtectedRoute allowedRoles={['procurement_head']}>
            <ProcurementDashboard />
          </ProtectedRoute>
        } />

        {/* Department Head */}
        <Route path="/department/dashboard" element={
          <ProtectedRoute allowedRoles={['department_head']}>
            <DepartmentDashboard />
          </ProtectedRoute>
        } />

        {/* Finance Officer */}
        <Route path="/finance/dashboard" element={
          <ProtectedRoute allowedRoles={['finance_officer']}>
            <FinanceDashboard />
          </ProtectedRoute>
        } />

        {/* Vendor */}
        <Route path="/vendor/dashboard" element={
          <ProtectedRoute allowedRoles={['vendor']}>
            <VendorDashboard />
          </ProtectedRoute>
        } />

        {/* Auditor */}
        <Route path="/auditor/dashboard" element={
          <ProtectedRoute allowedRoles={['auditor']}>
            <AuditorDashboard />
          </ProtectedRoute>
        } />
      </Routes>
    </AuthProvider>
  )
}