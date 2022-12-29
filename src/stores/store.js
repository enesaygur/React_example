import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./slices/theme";
import dataReducer from "./slices/data";
import detailsReducer from "./slices/details";
import castActorReducer from "./slices/castActor";

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    data: dataReducer,
    details:detailsReducer,
    castActor:castActorReducer,
  },
});
