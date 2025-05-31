import axios from "axios";

const API = axios.create({
    baseURL: "http://localhost:3000/api/v1",
    withCredentials: true,
});

export const fetchTransactions = () => API.get("/transactions");
export const createTransaction = (data) => API.post("/transactions", data);
export const removeTransaction = (id) => API.delete(`/transactions/${id}`);
