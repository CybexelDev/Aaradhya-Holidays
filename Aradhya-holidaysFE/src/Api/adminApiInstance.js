import axios from "axios";

const adminApi = axios.create({
  baseURL: "https://ardhyaholidaysbe.onrender.com",
  headers: {
    "Content-Type": "application/json",
  },
});

// Attach admin token to every request
adminApi.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("adminToken");

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => Promise.reject(error)
);

export default adminApi;