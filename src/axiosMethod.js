import axios from "axios";

const BASE_URL = "https://my-e-commerce-node.herokuapp.com/";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});