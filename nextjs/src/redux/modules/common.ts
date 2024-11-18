import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Common {
  showVideo: boolean; //监听首页视频
}

const initialState: Common = {
  showVideo: false, // 默认语言
};

const commonSlice = createSlice({
  name: 'common',
  initialState,
  reducers: {
    setShowVideo: (state, action: PayloadAction<boolean>) => {
      state.showVideo = action.payload;
    },
  },
});

export { initialState as state };
export const { setShowVideo } = commonSlice.actions;
export default commonSlice.reducer;
