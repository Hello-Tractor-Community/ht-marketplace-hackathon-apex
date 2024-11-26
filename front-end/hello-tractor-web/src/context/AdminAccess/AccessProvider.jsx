import { useState } from "react";
import AccessContext from "./AccessContext";

// eslint-disable-next-line react/prop-types
const AccessProvider = ({ children }) => {
  const [adminAccess, setAdminAccess] = useState(false);

  const grantAccess = () => setAdminAccess(true);
  const revokeAccess = () => setAdminAccess(false);

  return (
    <AccessContext.Provider value={{ adminAccess, grantAccess, revokeAccess }}>
      {children}
    </AccessContext.Provider>
  );
};

export default AccessProvider;
