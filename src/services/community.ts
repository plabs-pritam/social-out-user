import apiConfig from "./config";

export const getCommunity = (payload: any) =>
	apiConfig.client.post(`/latestCommunity`, payload);

export const getCommunityId = (payload: any) =>
	apiConfig.client.get(`/GetCommunityByID`, payload);

export const followCommunity = (payload: any) =>
	apiConfig.client.get("/SetUserCommunity", payload);
