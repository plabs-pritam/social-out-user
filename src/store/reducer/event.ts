import { createSlice, PayloadAction } from "@reduxjs/toolkit";
interface EventState {
	event: any;
	ticket: any;
	razorPay: any;
	eventId: string;
}

const initialState: EventState = {
	event: {},
	ticket: {},
	eventId: "",
	razorPay: {},
};

export const EventSlice = createSlice({
	name: "event",
	initialState,
	reducers: {
		setEventId: (state, action: PayloadAction<any>) => {
			state.eventId = action.payload;
		},
		setTicket: (state, action: PayloadAction<any>) => {
			state.ticket = action.payload;
		},
		setEvent: (state, action: PayloadAction<any>) => {
			state.event = action.payload;
		},
		setRazorPay: (state, action: PayloadAction<any>) => {
			state.razorPay = action.payload;
		},
	},
});

export default EventSlice.reducer;
export const { setRazorPay, setEventId, setTicket, setEvent } =
	EventSlice.actions;
