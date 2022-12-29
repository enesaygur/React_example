import { createSlice } from "@reduxjs/toolkit";

export const dataSlice = createSlice({
  name: "dataList",
  initialState: {
    data: ["no data"],
  },
  reducers: {
    setData: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { setData } = dataSlice.actions;
export default dataSlice.reducer;
