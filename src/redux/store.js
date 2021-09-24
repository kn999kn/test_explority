import { configureStore } from "@reduxjs/toolkit";
import editorsReducer from "./editors/editorsSlice";
import viewTypeReducer from "./viewType/viewTypeSlice";

export const store = configureStore({
  reducer: { editors: editorsReducer, viewType: viewTypeReducer },
});
