import { Navigate, Outlet, useLocation } from "react-router-dom"
import Navbar from "../Navbar"
import Spinner from "../ui/Spinner"

export const ProtectedRoute = () => {
  const isLoading = false;
  const user = true;
  const location = useLocation()

  if (isLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <Spinner className="text-ui-fg-interactive animate-spin" />
      </div>
    )
  }

  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />
  }

  return (
    <>
      <Navbar />
      <Outlet />
    </>
  )
}
