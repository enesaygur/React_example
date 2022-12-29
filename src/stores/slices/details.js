import { createSlice } from "@reduxjs/toolkit";

export const detailSlice = createSlice({
  name: "detailList",
  initialState: {
    details: [],
  },
  reducers: {
    setDetails: (state, action) => {

      state.movieTypes = action.payload;
      state.id=action.payload;
      state.details = action.payload;
    },
  },
});

export const { setDetails } = detailSlice.actions;
export default detailSlice.reducer;
