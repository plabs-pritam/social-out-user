import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface GroupState {
  groups: any;
  selectedGroups: any;
  activeGroupDetail: any;
  groupChatHistory: any;
  selectedGroupMembers: any;
}

const initialState: GroupState = {
  groups: {},
  selectedGroups: [],
  groupChatHistory: [],
  activeGroupDetail: null,
  selectedGroupMembers: [],
};

export const GroupSlice = createSlice({
  name: 'groups',
  initialState,
  reducers: {
    setGroups: (state, action: PayloadAction<any>) => {
      state.groups = action.payload;
    },
    setActiveGroupDetail: (state, action: PayloadAction<any>) => {
      state.activeGroupDetail = action.payload;
    },
    setGroupChatHistory: (state, action: PayloadAction<any>) => {
      state.groupChatHistory = action.payload;
    },
    setSelectedGroupMembers: (state, action: PayloadAction<any>) => {
      state.selectedGroupMembers = action.payload;
    },
    setSelectedGroups: (state, action: PayloadAction<any>) => {
      state.selectedGroups = action.payload;
    },
  },
});

export default GroupSlice.reducer;
export const {
  setGroups,
  setSelectedGroups,
  setGroupChatHistory,
  setActiveGroupDetail,
  setSelectedGroupMembers,
} = GroupSlice.actions;
