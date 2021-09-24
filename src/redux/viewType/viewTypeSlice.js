import { createSlice } from "@reduxjs/toolkit";

export const viewTypeSlice = createSlice({
  name: "viewType",
  initialState: {
    isVertical: false,
  },
  reducers: {
    toggleViewType: (state) => {
      state.isVertical = !state.isVertical;
    },
  },
});

export const { toggleViewType } = viewTypeSlice.actions;
export default viewTypeSlice.reducer;
