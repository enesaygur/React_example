import { createSlice } from "@reduxjs/toolkit";

export const castSlice = createSlice({
  name: "detailCast",
  initialState: {
    castDetails: [],
  },
  reducers: {
    setCastDetails: (state, action) => {

      state.movieTypes = action.payload;
      state.id = action.payload;
      state.castDetails = action.payload;
    },
  },
});

export const { setCastDetails } = castSlice.actions;
export default castSlice.reducer;
