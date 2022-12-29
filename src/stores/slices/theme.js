import { createSlice } from "@reduxjs/toolkit";

export const themeSlice = createSlice({
  name: "app",
  initialState: {
    darkMode: false,
  },
  reducers: {
    setDarkMode:(state) =>{
      state.darkMode = !state.darkMode;
    },
  },
});

export const {setDarkMode}=themeSlice.actions;
export default themeSlice.reducer;
