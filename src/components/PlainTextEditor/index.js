import React, { useMemo } from "react";
import { createEditor } from "slate";
import { Slate, Editable, withReact } from "slate-react";
import { withHistory } from "slate-history";
import { useDispatch } from "react-redux";
import { editEntity } from "../../redux/editors/editorsSlice";

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
