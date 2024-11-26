import { createContext, useContext } from "react";

const AccessContext = createContext(null);

export const useAccess = () => {
  const context = useContext(AccessContext);
  if (!context) {
    throw new Error("useAccess must be used within an AccessProvider");
  }
  return context;
};

export default AccessContext;
