import axios from "axios";
const api = axios.create({
    // baseURL: "http://localhost:5000/", // Your API base URL
    baseURL: "/",
  });
  export default api;