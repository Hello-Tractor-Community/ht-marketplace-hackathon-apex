import { useState, useEffect } from 'react';
import { auth } from '/src/Firebase/Firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';

const Navbar = () => {
  const [user, setUser] = useState(null);
  const [searchVisible, setSearchVisible] = useState(false);

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
      setUser(null);  // Reset user state on sign-out
      localStorage.removeItem("HT_ACCESS_TOKEN");
    } catch (error) {
      console.error("Error signing out: ", error.message);
    }
  };

  // Handle scroll to show the search form
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) { // Show search after scrolling 100px
        setSearchVisible(true);
      } else {
        setSearchVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="bg-white w-full top-0 left-0 right-0 z-50 shadow-md transition-all sticky">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo Section */}
          <div className="flex items-center space-x-4">
            <a href="/" className="text-xl font-bold text-gray-800">
              <img src="/cdn/images/logo.svg" alt="Hello Tractor Logo" className="h-10" />
            </a>

            {/* Search Bar */}
            {searchVisible && (
              <form className="flex flex-row rounded-md  relative w-[450px] transition-all transform ease-in-out duration-500 opacity-100">
                <div className="w-full relative">
                  <input
                    type="text"
                    className="w-full px-4 py-2 border border-gray-300 rounded-l-lg placeholder:italic placeholder:text-xs outline-none"
                    placeholder="Search for tractors.."
                  />
                </div>

                {/* Submit Button */}
                <button type="submit" className="flex items-center justify-center rounded-r-lg p-2  bg-[#E91A47] hover:bg-[#C91C40] transition-all">
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

          {/* Right side: Auth & Cart */}
          <div className="flex items-center space-x-4">
            <div className="hidden md:flex space-x-8">
              <a href="#products" className="text-gray-600 hover:text-gray-900 transition-all">Products</a>
            </div>

            {/* User Authentication */}
            {user ? (
              <div className="flex flex-row gap-2 items-center">
                <span className="text-gray-800">{user?.displayName || 'User'}</span>
                <div className="h-6 border-l border-gray-700"></div>
                <button
                  onClick={handleSignOut}
                  className="text-gray-600 hover:text-gray-900 transition-all"
                >
                  Sign Out
                </button>
              </div>
            ) : (
              // If user is not logged in, show sign in and sign up options
              <div className="flex flex-row gap-2 items-center">
                <a href="/login" className="text-gray-600 hover:text-gray-900 transition-all">Sign In</a>
                <div className="h-6 border-l border-gray-700"></div>
                <a href="/signup" className="text-gray-600 hover:text-gray-900 transition-all">Sign Up</a>
              </div>
            )}

            <img
              src="/cdn/images/ic_cart.svg"
              className="relative p-2 rounded transition-all hover:scale-110"
              alt="cart"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;