import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../Firebase/Firebase";
import SellerContext from "./SellerContext";
import useUserContext from "../UserContext/useUserContext";
import { toast } from "react-toastify";
import { getRegisteredSeller } from "@/api/seller";

const SellerProvider = ({ children }) => {
  const [sellerProfile, setSellerProfile] = useState(null);
  const { currentUser } = useUserContext();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
      if (firebaseUser) {
        try {
          let seller = await getRegisteredSeller();

          setSellerProfile(seller);
        } catch (error) {
          toast.error(
            "An error occurred while trying to find a registered seller"
          );
          console.error(
            "An error occurred while trying to find a registered seller:",
            error
          );
        }
      } else {
        setSellerProfile(null);
      }
    });

    return () => unsubscribe();
  }, [currentUser]);

  return (
    <SellerContext.Provider value={{ sellerProfile }}>
      {children}
    </SellerContext.Provider>
  );
};

SellerProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default SellerProvider;
