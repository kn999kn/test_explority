import React, { useState, useMemo } from "react";
import { createEditor } from "slate";
import { Slate, Editable, withReact } from "slate-react";
import { withHistory } from "slate-history";
import { useDispatch } from "react-redux";
import { editEntity } from "../../redux/editorsSlice";

// const initialValue = [
//   {
//     type: "paragraph",
//     children: [
//       { text: "This is editable plain text, just like a <textarea>!" },
//     ],
//   },
// ];

export const PlainTextEditor = ({
  entityData = [],
  placeholderText = "Enter some plain text...",
}) => {
  const editor = useMemo(() => withHistory(withReact(createEditor())), []);
  const dispatch = useDispatch();
  return (
    <Slate
      editor={editor}
      value={entityData.value}
      onChange={(value) => dispatch(editEntity({ id: entityData.id, value }))}
    >
      <Editable placeholder={placeholderText} />
    </Slate>
  );
};
