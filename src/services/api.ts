import axios from "axios";

const api = axios.create({
  baseURL: "https://fakerapi.it/api/v1/persons?_quantity=10",
  timeout: 30000,
});

export default api;
