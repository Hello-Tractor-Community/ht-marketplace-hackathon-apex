import { useState, useEffect } from "react";
import { auth } from "/src/Firebase/Firebase";
import { Link, useNavigate } from "react-router-dom";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { Button } from "./ui/button";
import SecretAdminDialog from "./authentication/admin-login-dialog";

const Navbar = () => {
  const [user, setUser] = useState(null);
  const [searchVisible, setSearchVisible] = useState(false);
  const [clickCount, setClickCount] = useState(0);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false); // Drawer state
  const navigate = useNavigate();

  // Check if the user is authenticated
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser); // Set user details if authenticated
    });

    return () => unsubscribe(); // Clean up on component unmount
  }, []);

  // Handle sign out
  const handleSignOut = async () => {
    try {
      await signOut(auth);
      setUser(null); // Reset user state on sign-out
      localStorage.removeItem("HT_ACCESS_TOKEN");
      navigate("/login");
    } catch (error) {
      console.error("Error signing out: ", error.message);
    }
  };

  // Handle scroll to show the search form
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setSearchVisible(true);
      } else {
        setSearchVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle secret admin portal access
  const adminSecretDoor = () => {
    setClickCount((prevCount) => {
      const newCount = prevCount + 1;
      if (newCount === 3) {
        setDialogOpen(true);
        return 0;  // Reset the count after 3 clicks
      }
      return newCount;
    });
  };

  // Toggle dropdown menu
  const toggleDropdown = () => setDropdownOpen((prev) => !prev);

  // Toggle mobile drawer
  const toggleDrawer = () => setDrawerOpen((prevState) => !prevState);

  return (
    <nav className="bg-white w-full top-0 left-0 right-0 z-50 shadow-md transition-all sticky">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo Section */}
          <div className="flex items-center space-x-4">
            <Link to="/" className="text-xl font-bold text-gray-800">
              <img
                src="/cdn/images/logo.svg"
                alt="Hello Tractor Logo"
                className="h-10"
              />
            </Link>

            {/* Search Bar */}
            {searchVisible && (
              <form className="flex flex-row rounded-md relative w-[450px] transition-all transform ease-in-out duration-500 opacity-100">
                <div className="w-full relative">
                  <input
                    type="text"
                    className="w-full px-4 py-2 border border-gray-300 rounded-l-lg placeholder:italic placeholder:text-xs outline-none"
                    placeholder="Search for tractors.."
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="flex items-center justify-center rounded-r-lg p-2 bg-[#E91A47] hover:bg-[#C91C40] transition-all"
                >
                  <svg
                    className="h-5 w-5 text-white"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="11" cy="11" r="8" />
                    <line x1="21" y1="21" x2="16.65" y2="16.65" />
                  </svg>
                </button>
              </form>
            )}
          </div>

          {/* Mobile Hamburger Icon */}
          <button
            className="lg:hidden flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-gray-900"
            onClick={toggleDrawer}
          >
            <svg
              className="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M3 6h18M3 12h18M3 18h18"></path>
            </svg>
          </button>

          {/* Right side: Auth & Cart */}
          <div className="flex items-center space-x-4">
            <div className="hidden md:flex space-x-6">
              <Link to={`/seller-dashboard`} className="transition-all">
                <Button onClick={adminSecretDoor}>Dashboard</Button>
              </Link>
              <Link
                to={`/marketplace/tractor-operators`}
                className="text-gray-600 hover:text-gray-900 transition-all"
              >
                <Button>Tractor Operators</Button>
              </Link>
            </div>

            {user ? (
              <div className="relative">
                <div
                  className="flex items-center cursor-pointer gap-2"
                  onClick={toggleDropdown}
                >
                  {/* Display Profile Picture */}
                  {user.photoURL ? (
                    <img
                      src={user.photoURL}
                      alt={`${user.displayName || "User"}'s profile`}
                      className="w-8 h-8 rounded-full border border-gray-300"
                    />
                  ) : (
                    <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center text-gray-700 font-semibold">
                      {user?.displayName?.charAt(0)?.toUpperCase() || "U"}
                    </div>
                  )}
                  {/* Display Name */}
                  <span className="text-gray-800 hover:text-gray-900 transition-all font-semibold">
                    {user?.displayName || "User"}
                  </span>
                  <svg
                    className="w-4 h-4 text-gray-800"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4 4a.75.75 0 01-1.06 0l-4-4a.75.75 0 01.02-1.06z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                {dropdownOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-300 rounded-lg shadow-lg z-10">
                    <ul className="py-1">
                      <li className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:bg-gray-100">
                        <span className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center text-gray-700 font-semibold">
                          {user?.displayName?.charAt(0).toUpperCase()}
                        </span>
                        Profile
                      </li>
                      <li
                        onClick={handleSignOut}
                        className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer"
                      >
                        Sign Out
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            ) : (
              <div className="space-x-4">
                <Link to="/login" className="text-gray-600 hover:text-gray-900 transition-all">
                  Sign In
                </Link>
                <Link to="/signup" className="text-gray-600 hover:text-gray-900 transition-all">
                  Sign Up
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Secret Admin Dialog */}
      <SecretAdminDialog open={dialogOpen} onClose={() => setDialogOpen(false)} />

      {/* Mobile Drawer */}
      {drawerOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40">
          <div
            className="fixed top-0 right-0 h-full bg-white w-[85%] shadow-lg z-50"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-end p-4">
              <button
                onClick={toggleDrawer}
                className="text-xl text-gray-600 hover:text-gray-800"
              >
                &times;
              </button>
            </div>
            <div className="p-4">
              <ul>
                <li>
                  <Link to="/login" className="block py-2 text-gray-600">
                    Sign In
                  </Link>
                </li>
                <li>
                  <Link to="/signup" className="block py-2 text-gray-600">
                    Sign Up
                  </Link>
                </li>
                <li>
                  <Link to="/seller-dashboard" className="block py-2 text-gray-600">
                    Dashboard
                  </Link>
                </li>
                <li>
                  <Link
                    to="/marketplace/tractor-operators"
                    className="block py-2 text-gray-600"
                  >
                    Tractor Operators
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;