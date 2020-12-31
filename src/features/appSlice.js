import { createSlice } from '@reduxjs/toolkit';

export const appSlice = createSlice({
  name: 'app',
  initialState: {
      channelId: null,
      channel:null
  },
  reducers: {
    setChannel: (state , action) => {
      state.channelId = action.payload.id;
      state.channel= action.payload.channel
    },
  },
});

export const { setChannel  } = appSlice.actions;

export const selectChannelId = state => state.app.channelId;
export const selectChannel = state => state.app.channel;

export default appSlice.reducer;
