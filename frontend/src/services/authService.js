import axios from "axios";

const API = axios.create({
    baseURL: "http://localhost:3000/api/v1",
    withCredentials: true,
});

export const registerUser = async (userData) => API.post("/user/register", userData);
export const loginUser = async (userData) => API.post("/user/login", userData);
export const logoutUser = async () => API.delete("/user/logout");
export const getProfile = async () => API.get("/user/profile");