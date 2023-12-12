import apiConfig from "./config";

export const getCategories = (query: any) =>
  apiConfig.client.get(`/categorysearch${query}`);
