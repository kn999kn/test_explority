import { configureStore } from "@reduxjs/toolkit";
import editorsReducer from "./redux/editorsSlice";
import viewTypeReducer from "./redux/viewTypeSlice";
export const store = configureStore({
  reducer: { editors: editorsReducer, viewType: viewTypeReducer },
});
