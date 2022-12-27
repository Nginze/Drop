import axios from "axios";

const apiClient = axios.create({
  baseURL: "http://192.168.0.114:5000",
  withCredentials: true,
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
  },
});

export { apiClient };
