import apiConfig from "./config";

export const getEvents = (payload: any) =>
	apiConfig.client.post(`/latestEvent`, payload);

export const getEventById = (payload: any) =>
	apiConfig.client.get(`/GetEventByID${payload}`);

export const getTicketDetails = (eventId: any) =>
	apiConfig.client.post(`/GetEventticket?EventID=${eventId}`);

export const getUserEventBook = (payload: any) =>
	apiConfig.client.post(`/usereventbook`, payload);

export const getEventPayment = (userId: string, eventId: string) =>
	apiConfig.client.post(
		`/usereventpayment?userid=${userId}&eventid=${eventId}`,
	);

export const getEventPaymentReceived = (payload: any) =>
	apiConfig.client.post(`/usereventpaymentReceived`, payload);
