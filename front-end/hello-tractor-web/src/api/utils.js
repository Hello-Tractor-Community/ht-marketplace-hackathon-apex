import axios from "axios";
import { toast } from "react-toastify";

export const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

axiosInstance.interceptors.request.use(
  function (config) {
    const accessToken = localStorage.getItem("HT_ACCESS_TOKEN");
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export const handleError = (error) => {
  if (error.response) {
    if (error.response.status === 400) {
      const errors = error?.response?.data;

      if (errors) {
        // Display errors returned by the backend.
        for (const key in errors) {
          errors[key].forEach((message) => {
            toast.error(message);
          });
        }
      } else {
        // Display a generic error message if no specific error is provided.
        toast.error("An error occurred. Please try again later.");
      }
    }

    error.response.status === 401 && toast.error("Invalid credentials!");
    error.response.status === 403 && axiosInstance.interceptors.request.use(
  function (config) {
    const accessToken = localStorage.getItem("HT_ACCESS_TOKEN");
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

    error.response.status === 404 && toast.error("Not found!");
    error.response.status === 500 && toast.error("Internal server error!");
  } else if (error.request) {
    toast.error("No response from server!");
  } else {
    toast.error("Unknown error!");
  }
};
