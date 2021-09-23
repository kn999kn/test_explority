import React, { useState, useMemo } from "react";
import { createEditor } from "slate";
import { Slate, Editable, withReact } from "slate-react";
import { withHistory } from "slate-history";

// const initialValue = [
//   {
//     type: "paragraph",
//     children: [
//       { text: "This is editable plain text, just like a <textarea>!" },
//     ],
//   },
// ];

export const PlainTextEditor = ({ value = [] }) => {
  const [innerValue, setInnerValue] = useState(value);
  const editor = useMemo(() => withHistory(withReact(createEditor())), []);
  return (
    <Slate
      editor={editor}
      value={innerValue}
      onChange={(value) => setInnerValue(value)}
    >
      <Editable placeholder="Enter some plain text..." />
    </Slate>
  );
};
