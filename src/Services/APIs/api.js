import axios from "axios";

const BASE_URL = 'https://eraasoft-groups-ecommerce-json-server.onrender.com';

export const myAxios = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  }
})