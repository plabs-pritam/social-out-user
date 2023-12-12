import { createSlice, PayloadAction } from "@reduxjs/toolkit";
interface UIControllerState {
	reload: any;
	header: string;
	search: boolean,
}

const initialState: UIControllerState = {
	search: false,
	header: "",
	reload: false,
};

export const UIControllerSlice = createSlice({
	name: "uiController",
	initialState,
	reducers: {
		setSearch: (state, action: PayloadAction<any>) => {
			state.search = action.payload;
		  },
		setReload: (state, action: PayloadAction<any>) => {
			state.reload = action.payload;
		},
		setHeader: (state, action: PayloadAction<any>) => {
			state.header = action.payload;
		},
	},
});

export default UIControllerSlice.reducer;
export const { setReload, setSearch, setHeader } = UIControllerSlice.actions;
