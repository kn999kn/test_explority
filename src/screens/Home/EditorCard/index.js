import React, { memo } from "react";
import { useSelector } from "react-redux";
import { Card } from "../../../components/Card";
import { PlainTextEditor } from "../../../components/PlainTextEditor";
import { Draggable } from "react-beautiful-dnd";

const GRID = 8;
const CARD_DRAGGING_COLOR = "lightgreen";
const CARD_BACKGROUND_COLOR = "white";

const getItemStyle = (isDragging, draggableStyle, isHorizontal) => ({
  userSelect: "none",
  padding: GRID * 2,
  margin: isHorizontal ? `0 0 ${GRID}px 0` : `0 ${GRID}px 0 0`,
  background: isDragging ? CARD_DRAGGING_COLOR : CARD_BACKGROUND_COLOR,
  minWidth: 200,
  maxWidth: 300,
  border: "1px solid rgb(216 216 216)",
  borderRadius: "10px",
  cursor: "pointer",
  ...draggableStyle,
});

const _EditorCard = ({ entityData, index }) => {
  const { isHorizontal } = useSelector((state) => state.viewType);
  return (
    <Draggable key={entityData.id} draggableId={entityData.id} index={index}>
      {(provided, snapshot) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          style={{
            ...getItemStyle(
              snapshot.isDragging,
              provided.draggableProps.style,
              isHorizontal
            ),
          }}
        >
          <Card>
            <PlainTextEditor entityData={entityData} />
          </Card>
        </div>
      )}
    </Draggable>
  );
};

export const EditorCard = memo(_EditorCard);
