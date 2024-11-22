import { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import {
  auth,
  googleProvider,
  facebookProvider,
  twitterProvider,
  githubProvider,
} from "/src/Firebase/Firebase";
import { createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { createUser } from "@/api/user";
import { toast } from "react-toastify";

const Signup = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    phone: "",
  });

  // const [error, setError] = useState(null);
  const navigate = useNavigate(); // Initialize the navigate function

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await createUserWithEmailAndPassword(
        auth,
        formData.email,
        formData.password
      );
      await handleFirebaseResponse(response);
      console.log("User signed up successfully with Email/Password!");
      navigate("/"); // Navigate to the dashboard (or wherever you want)
    } catch (error) {
      console.error("Error signing up: ", error.message);
      toast.error(error.message);
    }
  };

  const handleSocialSignup = async (provider) => {
    try {
      const firebaseResponse = await signInWithPopup(auth, provider);
      await handleFirebaseResponse(firebaseResponse);
      console.log(`Signed up with ${provider.providerId}!`);
      navigate("/");
    } catch (error) {
      console.error(
        `Error with ${provider.providerId} sign up:`,
        error.message
      );
      toast.error(error.message);
    }
  };

  const handleFirebaseResponse = async (firebaseResponse) => {
    // Save access token to local storage
    localStorage.setItem(
      "HT_ACCESS_TOKEN",
      firebaseResponse?.user?.accessToken
    );

    // Save user data to the backend
    const userData = {
      firebase_id: firebaseResponse?.user?.uid,
      name: firebaseResponse?.user?.displayName,
      email: firebaseResponse?.user?.email,
      phone_number: firebaseResponse?.user?.phoneNumber,
    };
    await createUser(userData)
  };

  return (
    <div>
      <div className="pt-3 flex items-center justify-center bg-gray-100 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-lg shadow-md">
          <div>
            <h2 className="text-center text-3xl font-bold text-gray-900">
              Create your account
            </h2>
            <p className="text-center text-sm text-gray-600 mt-2">
              Sign up to join the community
            </p>
          </div>

          <div className="flex gap-4 justify-center mt-4">
            <button
              onClick={() => handleSocialSignup(googleProvider)}
              className="w-1/2 py-2 px-4 border border-gray-300 rounded-md bg-white text-gray-700 hover:bg-gray-50"
            >
              Google
            </button>
            <button
              onClick={() => handleSocialSignup(facebookProvider)}
              className="w-1/2 py-2 px-4 border border-gray-300 rounded-md bg-white text-gray-700 hover:bg-gray-50"
            >
              Facebook
            </button>
          </div>
          <div className="flex gap-4 justify-center mt-4">
            <button
              onClick={() => handleSocialSignup(twitterProvider)}
              className="w-1/2 py-2 px-4 border border-gray-300 rounded-md bg-white text-gray-700 hover:bg-gray-50"
            >
              Twitter
            </button>
            <button
              onClick={() => handleSocialSignup(githubProvider)}
              className="w-1/2 py-2 px-4 border border-gray-300 rounded-md bg-white text-gray-700 hover:bg-gray-50"
            >
              GitHub
            </button>
          </div>

          <div className="relative text-center mt-6">
            <span className="absolute inset-x-0 top-1/2 transform -translate-y-1/2 bg-white px-2 text-gray-500 text-sm">
              or
            </span>
            <div className="border-t border-gray-300"></div>
          </div>

          <form className="space-y-4" onSubmit={handleSubmit}>
            <input
              type="text"
              name="fullName"
              id="fullName"
              placeholder="Full Name"
              value={formData.fullName}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md text-gray-900"
            />
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md text-gray-900"
            />
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md text-gray-900"
            />
            <input
              type="text"
              name="phone"
              id="phone"
              placeholder="Phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md text-gray-900"
            />
            <button
              type="submit"
              className="w-full py-2 px-4 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-md"
            >
              Sign Up
            </button>
          </form>

          <p className="text-center text-sm text-gray-600 mt-4">
            Already have an account?{" "}
            <a href="/login" className="text-indigo-600 hover:underline">
              Log In
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
