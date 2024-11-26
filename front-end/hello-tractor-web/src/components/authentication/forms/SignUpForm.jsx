import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  auth,
  googleProvider,
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

  const navigate = useNavigate();

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
      toast.success("Account created successfully!");
      navigate("/");
    } catch (error) {
      console.error("Error signing up:", error.message);
      toast.error(error.message);
    }
  };

  const handleSocialSignup = async (provider) => {
    try {
      const firebaseResponse = await signInWithPopup(auth, provider);
      await handleFirebaseResponse(firebaseResponse);
      toast.success(`Signed up with ${provider.providerId}!`);
      navigate("/");
    } catch (error) {
      console.error(`Error with ${provider.providerId} sign-up:`, error.message);
      toast.error(error.message);
    }
  };

  const handleFirebaseResponse = async (firebaseResponse) => {
    localStorage.setItem(
      "HT_ACCESS_TOKEN",
      firebaseResponse?.user?.accessToken
    );

    const userData = {
      firebase_id: firebaseResponse?.user?.uid,
      name: firebaseResponse?.user?.displayName,
      email: firebaseResponse?.user?.email,
      phone_number: firebaseResponse?.user?.phoneNumber,
    };
    await createUser(userData);
  };

  return (
    <div className="flex items-center justify-center  bg-gray-100 px-4">
      <div className="flex flex-col md:flex-row w-full mt-4 max-w-6xl bg-white shadow-lg rounded-lg overflow-hidden">
        {/* Video Section */}
        <div className="md:w-1/2">
          <video
            className="w-full h-full object-cover"
            src="/cdn/video/tractor.mp4"
            autoPlay
            loop
            muted
            playsInline
          ></video>
        </div>

        {/* Form Section */}
        <div className="md:w-1/2 p-8 flex flex-col justify-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
            Create Your Account
          </h2>
          <p className="text-gray-600 mt-2">Join the community by signing up.</p>

          <div className="flex gap-4 justify-center mt-6">
            <button
              onClick={() => handleSocialSignup(googleProvider)}
              className="flex justify-center items-center w-32 py-2 border border-gray-300 rounded-md bg-white hover:bg-gray-50"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/4/4a/Logo_2013_Google.png"
                alt="Google"
                className="h-5 mr-2"
              />
            </button>
            <button
              onClick={() => handleSocialSignup(twitterProvider)}
              className="flex justify-center items-center w-32 py-2 border border-gray-300 rounded-md bg-white hover:bg-gray-50"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/b/b7/X_logo.jpg"
                alt="Twitter"
                className="h-5 mr-2"
              />
            </button>
            <button
              onClick={() => handleSocialSignup(githubProvider)}
              className="flex justify-center items-center w-32 py-2 border border-gray-300 rounded-md bg-white hover:bg-gray-50"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg"
                alt="GitHub"
                className="h-5 mr-2"
              />
            </button>
          </div>



          <form className="space-y-4 mt-6" onSubmit={handleSubmit}>
            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              value={formData.fullName}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md"
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md"
            />
            <input
              type="text"
              name="phone"
              placeholder="Phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md"
            />
            <button
              type="submit"
              className="w-full py-2 px-4 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
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