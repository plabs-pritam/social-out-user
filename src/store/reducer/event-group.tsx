import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface EventState {
  events: any;
  selectedEvents: any;
  activeChatEvent: any;
  EventChatHistory: any;
  EventInvitations: any;
}

const initialState: EventState = {
  events: {},
  selectedEvents: [],
  activeChatEvent: null,
  EventChatHistory: [],
  EventInvitations: [],
};

export const EventsSlice = createSlice({
  name: 'events',
  initialState,
  reducers: {
    setEvents: (state, action: PayloadAction<any>) => {
      state.events = action.payload;
    },
    setActiveChatEvent: (state, action: PayloadAction<any>) => {
      state.activeChatEvent = action.payload;
    },
    setEventChatHistory: (state, action: PayloadAction<any>) => {
      state.EventChatHistory = action.payload;
    },
    setEventInvitation: (state, action: PayloadAction<any>) => {
      state.EventInvitations = action.payload;
    },
    setSelectedEvents: (state, action: PayloadAction<any>) => {
      state.selectedEvents = action.payload;
    },
  },
});

export default EventsSlice.reducer;
export const {
  setEvents,
  setSelectedEvents,
  setEventChatHistory,
  setActiveChatEvent,
  setEventInvitation,
} = EventsSlice.actions;
