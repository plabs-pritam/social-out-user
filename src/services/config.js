import axios from "axios";
import { create } from "apisauce";
import { BASE_URL } from "../utils/constants";

const customAxiosInstance = axios.create({
  baseURL: BASE_URL,
});

customAxiosInstance.interceptors.request.use(
  async (config) => {
    config.headers.Authorization = `Basic U286U08=`;
    return config;
  },
  (err) => {
    return Promise.reject(err);
  }
);

const client = create({ axiosInstance: customAxiosInstance });

export default { client };
