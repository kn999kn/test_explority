import { createSlice } from "@reduxjs/toolkit";
const initialState = [
  {
    id: 1,
    value: [
      {
        type: "paragraph",
        children: [
          { text: "This is editable plain text, just like a <textarea>!" },
        ],
      },
    ],
  },
  {
    id: 2,
    value: [
      {
        type: "paragraph",
        children: [
          { text: "This is editable plain text, just like a <textarea>!" },
        ],
      },
    ],
  },
  {
    id: 3,
    value: [
      {
        type: "paragraph",
        children: [
          { text: "This is editable plain text, just like a <textarea>!" },
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
  },
});

//Action creators are generated for each case reducer functionexport
export const { editEntity, addEntity } = editorsSlice.actions;
export default editorsSlice.reducer;
