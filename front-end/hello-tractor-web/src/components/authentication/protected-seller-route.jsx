import { Outlet } from "react-router-dom";
import Spinner from "../ui/Spinner";
import useUserContext from "@/context/UserContext/useUserContext";
import SellerDialog from "../SellerDialog";
import { createSeller } from "@/api/seller";
import useSellerContext from "@/context/SellerContext/useSellerContext";
import { useState } from "react";

export const ProtectedSellerRoute = () => {
  const { currentUser, loading } = useUserContext();
  const { sellerProfile } = useSellerContext();
  const [dialogOpen, setDialogOpen] = useState(true);

  const registerAsSeller = async () => {
    const createdSeller = createSeller({
      user: currentUser.id,
      is_approved: false,
    });
    return createdSeller;
  };
  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <Spinner className="text-ui-fg-interactive animate-spin" />
      </div>
    );
  }

  if (!sellerProfile) {
    return (
      <SellerDialog
        open={dialogOpen}
        setOpen={setDialogOpen}
        onRegisterSeller={registerAsSeller}
      />
    );
  }

  return (
    <>
      <Outlet />
    </>
  );
};
