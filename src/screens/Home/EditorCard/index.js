import React from "react";
import { Card } from "../../../components/Card";
import { PlainTextEditor } from "../../../components/PlainTextEditor";

export const EditorCard = ({ entityData }) => {
  return (
    <Card>
      <PlainTextEditor entityData={entityData} />
    </Card>
  );
};
