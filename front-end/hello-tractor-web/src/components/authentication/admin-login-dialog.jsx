import { toast } from "react-toastify";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useAccess } from "@/context/AdminAccess/AccessContext";

// eslint-disable-next-line react/prop-types
const SecretAdminDialog = ({ open, setOpen }) => {
  const { grantAccess } = useAccess();
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const DUMMY_PASSWORD = "1212";

  const handlePasswordVerification = async () => {
    if (password === DUMMY_PASSWORD) {
      grantAccess();
      setOpen(false);
      toast.success("Log In successfully!");
      navigate("/admin", { replace: true });
    } else {
      toast.error("Invalid password. Please try again.");
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handlePasswordVerification();
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
          <DialogTitle className="text-center text-3xl text-primary">
            H.T Dashboard Log In
          </DialogTitle>
          <DialogDescription className="text-center text-gray-400">
            Please input your company-given password to log in. Always remember
            to use the company-provided laptop for security purposes!
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="flex flex-col justify-center items-center gap-4">
            <Label
              htmlFor="password"
              className="text-center text-4xl text-primary"
            >
              Password:
            </Label>
            <Input
              id="password"
              type="password"
              placeholder="Company Password"
              className="col-span-3"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onKeyDown={handleKeyDown}
            />
          </div>
        </div>
        <DialogFooter>
          <Button variant="default" onClick={handlePasswordVerification}>
            Log In
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default SecretAdminDialog;
