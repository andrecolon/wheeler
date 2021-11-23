import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  images: ["Runner", "Enrich", "Walker", "Hike", "Business"],
};

const imgSlice = createSlice({
  name: "images",
  initialState,
  reducers: {},
});
export const selectImages = (state) => state.image.images;

export default imgSlice.reducer;
