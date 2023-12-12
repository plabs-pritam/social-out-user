import { createSlice, PayloadAction } from "@reduxjs/toolkit";
interface UserState {
  user: any;
  onBoard: any;
}

const initialState: UserState = {
  user: {},
  onBoard: {},
};

export const UserSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<any>) => {
      state.user = action.payload;
    },
    setOnBoard: (state, action: PayloadAction<any>) => {
      state.onBoard = action.payload;
    },
  },
});

export default UserSlice.reducer;
export const { setUser, setOnBoard } = UserSlice.actions;
