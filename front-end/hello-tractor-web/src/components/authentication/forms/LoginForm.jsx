import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  auth,
  googleProvider,
  twitterProvider,
  githubProvider,
} from "/src/Firebase/Firebase";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await signInWithEmailAndPassword(
        auth,
        formData.email,
        formData.password
      );
      localStorage.setItem(
        "HT_ACCESS_TOKEN",
        response?.user?.stsTokenManager?.accessToken
      );
      navigate("/");
    } catch (error) {
      setError(error.message);
    }
  };

  const handleSocialLogin = async (provider) => {
    try {
      const response = await signInWithPopup(auth, provider);
      localStorage.setItem(
        "HT_ACCESS_TOKEN",
        response?.user?.stsTokenManager?.accessToken
      );
      navigate("/");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="flex items-center justify-center p-4 bg-gray-100 px-4">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-4xl flex flex-col md:flex-row overflow-hidden">
        {/* Video Section */}
        <div className="w-full md:w-1/2">
          <video
            className="w-full h-full object-cover"
            src="/cdn/video/tractor.mp4"
            autoPlay
            loop
            muted
            playsInline
          ></video>
        </div>

        {/* Login Form Section */}
        <div className="w-full md:w-1/2 flex bg-white outline-2 rounded-lg flex-col justify-center p-6 sm:p-12">
          <div className="text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
              Log in to your account
            </h2>
          </div>

          {error && <div className="mt-4 text-center text-red-600">{error}</div>}

          <div className="flex gap-3 justify-center mt-6">
            <button
              onClick={() => handleSocialLogin(googleProvider)}
              className="w-1/3 flex items-center justify-center py-2 border border-gray-300 rounded-md bg-white hover:bg-gray-50"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/4/4a/Logo_2013_Google.png"
                alt="Google"
                className="h-5 mr-2"
              />
            </button>
            <button
              onClick={() => handleSocialLogin(twitterProvider)}
              className="w-1/3 flex items-center justify-center py-2 border border-gray-300 rounded-md bg-white hover:bg-gray-50"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/b/b7/X_logo.jpg"
                alt="Twitter"
                className="h-5 mr-2"
              />
            </button>
            <button
              onClick={() => handleSocialLogin(githubProvider)}
              className="w-1/3 flex items-center justify-center py-2 border border-gray-300 rounded-md bg-white hover:bg-gray-50"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg"
                alt="GitHub"
                className="h-5 mr-2"
              />
              GitHub
            </button>
          </div>

          <div className="relative text-center mt-8">
            <span className="absolute inset-x-0 top-1/2 transform -translate-y-1/2 bg-white px-2 text-gray-500 text-sm">
              or
            </span>
            <div className="border-t border-gray-300"></div>
          </div>

          <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md"
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md"
            />
            <button
              type="submit"
              className="w-full py-2 px-4 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-md"
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
