import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../Firebase/Firebase";
import UserContext from "./UserContext";
import { createUser, getUsers } from "@/api/user";

const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
      if (firebaseUser) {
        try {
          const { uid, email, displayName } = firebaseUser;

          // Fetch all users from the backend
          const users = await getUsers();

          // Filter to find the user with the matching firebase_id
          let user =
            users.results.length > 0
              ? users.results.find((u) => u.firebase_id === uid)
              : null;

          if (!user) {
            console.log("Creating user");
            user = await createUser({
              firebase_id: uid,
              email,
              name: displayName || "Unnamed User",
            });
          }

          setCurrentUser(user);
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
