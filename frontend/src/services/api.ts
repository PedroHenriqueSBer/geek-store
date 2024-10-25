import axios from "axios";

const api = axios.create({
  baseURL: process.env.GEEK_STORE_API
});

export default api