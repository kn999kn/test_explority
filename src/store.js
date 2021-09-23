import { configureStore } from "@reduxjs/toolkit";
import editorsReducer from "./redux/editorsSlice";
export const store = configureStore({ reducer: { editors: editorsReducer } });
