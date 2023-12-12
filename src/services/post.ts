import apiConfig from "./config";

export const getAllPost = (payload: any, userId: string) =>
	apiConfig.client.post(`/PostData?userId=${userId}`, payload);

export const likePost = (payload: any) =>
	apiConfig.client.post(`/PostLog`, payload);

export const getPostComment = (query: any) =>
	apiConfig.client.get(`/GetPostComment${query}`);
