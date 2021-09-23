import React, { memo } from "react";
import { Card } from "../../../components/Card";
import { PlainTextEditor } from "../../../components/PlainTextEditor";

const _EditorCard = ({ entityData }) => {
  return (
    <Card>
      <PlainTextEditor entityData={entityData} />
    </Card>
  );
};
export const EditorCard = memo(_EditorCard);
