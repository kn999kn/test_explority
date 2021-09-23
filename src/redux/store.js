import { configureStore } from "@reduxjs/toolkit";
import editorsReducer from "./editorsSlice";
import viewTypeReducer from "./viewTypeSlice";
export const store = configureStore({
  reducer: { editors: editorsReducer, viewType: viewTypeReducer },
});
