import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useAccess } from "@/context/AdminAccess/AccessContext";

const ProtectedAdminAccessRoute = () => {
  const navigate = useNavigate();
  const { adminAccess } = useAccess();

  useEffect(() => {
    if (!adminAccess) {
      navigate("/marketplace", { replace: true });
    }
  }, [adminAccess, navigate]);

  if (!adminAccess) return null;

  return <Outlet />;
};

export default ProtectedAdminAccessRoute;
