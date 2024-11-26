import { toast } from "react-toastify";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";
import { Button } from "./ui/button";
import { useNavigate } from "react-router-dom";
import useSellerContext from "@/context/SellerContext/useSellerContext";

// eslint-disable-next-line react/prop-types
const SellerDialog = ({ onRegisterSeller, open, setOpen }) => {
  const navigate = useNavigate();
  const { sellerProfile } = useSellerContext();

  const handleAcknowledge = async () => {
    try {
      if (!sellerProfile) {
        const response = await onRegisterSeller();
        setOpen(false);

        if (response.status === 201) {
          toast.success("Seller profile successfully created!");
          return navigate("/seller-dashboard", { replace: true });
        } else if (response.status === 400) {
          toast.error("Redirecting to the seller dashboard");
          setOpen(false);
          return navigate("/seller-dashboard", { replace: true });
        }
      } else {
        toast.error("You are already registered as a seller!!");
        setOpen(false);
        return navigate("/seller-dashboard", { replace: true });
      }
    } catch (error) {
      toast.error("Error registering as a seller");
      setOpen(false);
      navigate(-1);
      console.error(error);
    }
  };

  const handleClose = () => {
    setOpen(false);
    navigate(-1);
  };

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Join as a Seller</DialogTitle>
          <DialogDescription>
            By proceeding, you acknowledge that accessing the dashboard is
            intended for sellers only. Joining as a seller implies agreement to
            our
            <a
              href="/terms-and-conditions"
              className="underline text-blue-600 hover:text-blue-800"
              target="_blank"
              rel="noopener noreferrer"
            >
              Terms and Conditions
            </a>
            , including compliance with all platform policies.
            <br />
            Failure to adhere to these terms may result in restricted access.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="default" onClick={handleAcknowledge}>
            Acknowledge & Register
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default SellerDialog;
