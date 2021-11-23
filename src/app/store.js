import { configureStore } from "@reduxjs/toolkit";
import imgReducer from "../features/image/imgSlice";

export const store = configureStore({
  reducer: {
    image: imgReducer,
  },
});
