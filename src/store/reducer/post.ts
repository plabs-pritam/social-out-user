import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface PostState {
	posts: any;
	postReload: boolean;
}

const initialState: PostState = {
	posts: {},
	postReload: false,
};

export const PostSlice = createSlice({
	name: "post",
	initialState,
	reducers: {
		setPosts: (state, action: PayloadAction<any>) => {
			state.posts = action.payload;
		},
		setPostReload: (state, action: PayloadAction<any>) => {
			state.postReload = action.payload;
		},
	},
});

export default PostSlice.reducer;
export const { setPosts, setPostReload } = PostSlice.actions;
