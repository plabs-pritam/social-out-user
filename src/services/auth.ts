import apiConfig from "./config";

export const login = (query: any) => apiConfig.client.post(`/AppLogin${query}`);

export const checkUserOnBoard = (query: any) =>
  apiConfig.client.post(`/CheckOnBoard${query}`);
