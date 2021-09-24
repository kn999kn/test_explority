import { createSlice } from "@reduxjs/toolkit";
import { INITIAL_EDITORS_STATE } from "./constants";

export const editorsSlice = createSlice({
  name: "editors",
  initialState: INITIAL_EDITORS_STATE,
  reducers: {
    editEntity: (state, action) => {
      let entityToEditIndex = state.findIndex(
        (entity) => action.payload.id === entity.id
      );
      state.splice(entityToEditIndex, 1, action.payload);
    },
    addEntity: (state, action) => {
      const newEntity = {
        id: action.payload.id,
        value: [
          {
            children: [{ text: "" }],
          },
        ],
      };
      state.push(newEntity);
    },
    reorderEntities: (state, action) => {
      const { startIndex, endIndex } = action.payload;
      const [removed] = state.splice(startIndex, 1);
      state.splice(endIndex, 0, removed);
    },
  },
});

export const { editEntity, addEntity, reorderEntities } = editorsSlice.actions;
export default editorsSlice.reducer;
