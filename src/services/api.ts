import axios from "axios";

const api = axios.create({
  baseURL: "https://fakerapi.it/api",
  timeout: 30000,
});

export default api;
