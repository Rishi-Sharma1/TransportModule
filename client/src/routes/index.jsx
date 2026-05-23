import {
  Routes,
  Route,
  Navigate
} from 'react-router-dom'

import LoginPage from '../pages/LoginPage'
import DashboardPage from '../pages/DashboardPage'
import VehiclesPage from '../pages/VehiclesPage'
import DriversPage from '../pages/DriversPage'
import DeliveriesPage from '../pages/DeliveriesPage'
import ProtectedRoute from './ProtectedRoute'

const AppRoutes = () => {
  return (
    <Routes>
      <Route
        path="/login"
        element={<LoginPage />}
      />

      <Route
        path="/dashboard"
        element={
        <ProtectedRoute>
          <DashboardPage />
        </ProtectedRoute>
        }
      />

      <Route
        path="/vehicles"
        element={<VehiclesPage />}
      />

      <Route
        path="/drivers"
        element={<DriversPage />}
      />

      <Route
        path="/deliveries"
        element={<DeliveriesPage />}
      />

      <Route
        path="*"
        element={
          <Navigate to="/login" />
        }
      />
    </Routes>
  )
}

export default AppRoutes