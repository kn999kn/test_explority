import { createSlice } from "@reduxjs/toolkit";

export const viewTypeSlice = createSlice({
  name: "viewType",
  initialState: {
    isHorizontal: false,
  },
  reducers: {
    toggleViewType: (state) => {
      state.isHorizontal = !state.isHorizontal;
    },
  },
});

//Action creators are generated for each case reducer functionexport
export const { toggleViewType } = viewTypeSlice.actions;
export default viewTypeSlice.reducer;
