import { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for routing
import {
  auth,
  googleProvider,
  twitterProvider,
  githubProvider,
} from "/src/Firebase/Firebase";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState(null);

  const navigate = useNavigate(); // Use this to navigate after login

  // Handle input changes for form fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle email/password login
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await signInWithEmailAndPassword(
        auth,
        formData.email,
        formData.password
      );
      // Store the access token in local storage
      localStorage.setItem(
        "HT_ACCESS_TOKEN",
        response?.user?.stsTokenManager?.accessToken
      );
      console.log("User logged in successfully!");

      // Navigate to the desired page after login, for example to the dashboard
      navigate("/"); // Modify the path as needed
    } catch (error) {
      console.error("Error logging in: ", error.message);
      setError(error.message); // Set the error message to display
    }
  };

  // Handle Google login
  const handleGoogleLogin = async () => {
    try {
      const response = await signInWithPopup(auth, googleProvider);
      console.log("Here is the response", response?.user);

      localStorage.setItem(
        "HT_ACCESS_TOKEN",
        response?.user?.stsTokenManager?.accessToken
      );
      console.log("Logged in with Google!");

      // Navigate to the desired page after successful Google login
      navigate("/"); // Modify the path as needed
    } catch (error) {
      console.error("Error with Google login:", error.message);
      setError(error.message);
    }
  };

  // Handle Twitter login
  const handleTwitterLogin = async () => {
    try {
      const response = await signInWithPopup(auth, twitterProvider);
      // Store the access token in local storage
      localStorage.setItem(
        "HT_ACCESS_TOKEN",
        response?.user?.stsTokenManager?.accessToken
      );
      console.log("Logged in with Twitter!");

      // Navigate to the desired page after successful Twitter login
      navigate("/"); // Modify the path as needed
    } catch (error) {
      console.error("Error with Twitter login:", error.message);
      setError(error.message);
    }
  };

  // Handle GitHub login
  const handleGithubLogin = async () => {
    try {
      const response = await signInWithPopup(auth, githubProvider);
      // Store the access token in local storage
      localStorage.setItem(
        "HT_ACCESS_TOKEN",
        response?.user?.stsTokenManager?.accessToken
      );
      console.log("Logged in with GitHub!");

      // Navigate to the desired page after successful GitHub login
      navigate("/"); // Modify the path as needed
    } catch (error) {
      console.error("Error with GitHub login:", error.message);
      setError(error.message);
    }
  };

  return (
    <div>
      <div className="pt-3 flex items-center justify-center bg-gray-100 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-lg shadow-md">
          <div>
            <h2 className="text-center text-3xl font-bold text-gray-900">
              Log in to your account
            </h2>
            <p className="text-center text-sm text-gray-600 mt-2">
              Log in to access your dashboard
            </p>
          </div>

          {/* Display error message if any */}
          {error && (
            <div className="text-center text-red-600">
              <p>{error}</p>
            </div>
          )}

          {/* Social Login Buttons */}
          <div className="flex gap-4 justify-center mt-4">
            <button
              onClick={handleGoogleLogin}
              className="w-1/2 py-2 px-4 border border-gray-300 rounded-md bg-white text-gray-700 hover:bg-gray-50"
            >
              <img
                src="/path-to-google-icon.svg"
                alt="Google"
                className="inline-block w-5 h-5 mr-2"
              />
              Google
            </button>
            <button
              onClick={handleTwitterLogin}
              className="w-1/2 py-2 px-4 border border-gray-300 rounded-md bg-white text-gray-700 hover:bg-gray-50"
            >
              <img
                src="/cdn/images/X_icon.svg"
                alt="Twitter"
                className="inline-block w-5 h-5 mr-2"
              />
              Twitter
            </button>
            <button
              onClick={handleGithubLogin}
              className="w-1/2 py-2 px-4 border border-gray-300 rounded-md bg-white text-gray-700 hover:bg-gray-50"
            >
              <img
                src="/path-to-github-icon.svg"
                alt="GitHub"
                className="inline-block w-5 h-5 mr-2"
              />
              GitHub
            </button>
          </div>

          <div className="relative text-center mt-6">
            <span className="absolute inset-x-0 top-1/2 transform -translate-y-1/2 bg-white px-2 text-gray-500 text-sm">
              or
            </span>
            <div className="border-t border-gray-300"></div>
          </div>

          {/* Login Form */}
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="email" className="sr-only">
                Email address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>

            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>

            <div className="flex items-center">
              <input
                id="terms"
                name="terms"
                type="checkbox"
                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
              />
              <label
                htmlFor="terms"
                className="ml-2 block text-sm text-gray-600"
              >
                I agree to the{" "}
                <a href="#" className="text-indigo-600 hover:underline">
                  Terms and Privacy Policy
                </a>
              </label>
            </div>

            <button
              type="submit"
              className="w-full py-2 px-4 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Log In
            </button>
          </form>

          <p className="text-center text-sm text-gray-600 mt-4">
            Need an account?{" "}
            <a href="/signup" className="text-indigo-600 hover:underline">
              Sign Up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
