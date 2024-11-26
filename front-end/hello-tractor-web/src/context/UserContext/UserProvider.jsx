import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../Firebase/Firebase";
import UserContext from "./UserContext";
import { getLoggedInUser, getOrCreateUser } from "@/api/user";

const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
      try {
        if (firebaseUser) {
          const { uid, email, displayName } = firebaseUser;
          let user = await getLoggedInUser();

          if (!user) {
            console.log("Creating user");
            user = await getOrCreateUser({
              firebase_id: uid,
              email,
              name: displayName || "Unnamed User",
            });
          }
          const userWithImage = { ...user, url: firebaseUser.photoURL };

          setCurrentUser(userWithImage);
        } else {
          setCurrentUser(null);
        }
        setLoading(false);
      } catch (error) {
        console.error("Error fetching user:", error);
        setLoading(false);
        setCurrentUser(null);
      }
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
