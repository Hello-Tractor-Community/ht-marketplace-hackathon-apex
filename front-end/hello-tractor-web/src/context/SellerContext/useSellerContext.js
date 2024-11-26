import { useContext } from "react";
import SellerContext from "./SellerContext";

const useSellerContext = () => {
  const context = useContext(SellerContext);
  if (!context) {
    throw new Error("useSellerContext must be used within a SellerProvider");
  }
  return context;
};

export default useSellerContext;
