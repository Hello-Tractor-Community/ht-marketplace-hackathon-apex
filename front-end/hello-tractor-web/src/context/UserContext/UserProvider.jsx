import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../Firebase/Firebase";
import UserContext from "./UserContext";
import { createUser, getLoggedInUser } from "@/api/user";

const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
      if (firebaseUser) {
        try {
          const { uid, email, displayName } = firebaseUser;
          let user = await getLoggedInUser();

          if (!user) {
            console.log("Creating user");
            user = await createUser({
              firebase_id: uid,
              email,
              name: displayName || "Unnamed User",
            });
          }

          setCurrentUser({ ...user, url: firebaseUser.photoURL });
        } catch (error) {
          console.error("Failed to fetch or create user:", error);
        }
      } else {
        setCurrentUser(null);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  return (
    <UserContext.Provider value={{ currentUser, loading }}>
      {children}
    </UserContext.Provider>
  );
};

UserProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default UserProvider;
