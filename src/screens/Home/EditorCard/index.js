import React from "react";
import { Card } from "../../../components/Card";
import { PlainTextEditor } from "../../../components/PlainTextEditor";

export const EditorCard = ({ value }) => {
  return (
    <Card>
      <PlainTextEditor value={value} />
    </Card>
  );
};
