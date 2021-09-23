import { createSlice } from "@reduxjs/toolkit";
const initialState = [
  {
    id: "1",
    value: [
      {
        type: "paragraph",
        children: [
          { text: "This is editable plain text, just like a <textarea>! 1" },
        ],
      },
    ],
  },
  {
    id: "2",
    value: [
      {
        type: "paragraph",
        children: [
          { text: "This is editable plain text, just like a <textarea>! 2" },
        ],
      },
    ],
  },
  {
    id: "3",
    value: [
      {
        type: "paragraph",
        children: [
          { text: "This is editable plain text, just like a <textarea>! 3" },
        ],
      },
    ],
  },
];
export const editorsSlice = createSlice({
  name: "editors",
  initialState,
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
            // type: "paragraph",
            children: [{ text: "" }],
          },
        ],
      };
      state.push(newEntity);
    },
    reorderEntities: (state, action) => {
      const { startIndex, endIndex } = action.payload;
      // const result = Array.from(state);
      console.log("=================+", action.payload);
      const [removed] = state.splice(startIndex, 1);
      state.splice(endIndex, 0, removed);
    },
  },
});

//Action creators are generated for each case reducer functionexport
export const { editEntity, addEntity, reorderEntities } = editorsSlice.actions;
export default editorsSlice.reducer;
