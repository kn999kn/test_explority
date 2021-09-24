import { createSlice } from "@reduxjs/toolkit";

export const viewTypeSlice = createSlice({
  name: "viewType",
  initialState: {
    isHorizontal: false,
  },
  reducers: {
    toggleViewType: (state) => {
      const newViewType = !state.isHorizontal;
      state.isHorizontal = newViewType;
    },
  },
});

export const { toggleViewType } = viewTypeSlice.actions;
export default viewTypeSlice.reducer;
