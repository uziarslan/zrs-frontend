import axios from "axios";

const END_POINT = process.env.REACT_APP_END_POINT;

const axiosInstance = axios.create({
  baseURL: END_POINT,
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 10000, // Optional: 10-second timeout
});

export default axiosInstance;
