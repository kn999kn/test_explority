import React, { memo, forwardRef } from "react";
import { useSelector } from "react-redux";
import { Card } from "../../../components/Card";
import { PlainTextEditor } from "../../../components/PlainTextEditor";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

const grid = 8;
const getItemStyle = (isDragging, draggableStyle, isHorizontal) => ({
  userSelect: "none",
  padding: grid * 2,
  margin: isHorizontal ? `0 0 ${grid}px 0` : `0 ${grid}px 0 0`,
  background: isDragging ? "lightgreen" : "white",
  minWidth: 300,
  maxWidth: 300,
  border: "1px solid rgb(216 216 216)",
  borderRadius: "10px",
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
