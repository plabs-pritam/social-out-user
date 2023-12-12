import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

// Reducer
import { UserSlice } from "./reducer/user";
import { PostSlice } from "./reducer/post";
import { EventSlice } from "./reducer/event";
import { GroupSlice } from "./reducer/event-chat";
import { UIControllerSlice } from "./reducer/ui-controller";
import { EventsSlice } from "./reducer/event-group";

export const store = configureStore({
	reducer: {
		user: UserSlice.reducer,
		post: PostSlice.reducer,
		event: EventSlice.reducer,
		events: EventsSlice.reducer,
		groups: GroupSlice.reducer,
		uiController: UIControllerSlice.reducer,
	},
});

export const useAppDispatch: () => typeof store.dispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<
	ReturnType<typeof store.getState>
> = useSelector;
