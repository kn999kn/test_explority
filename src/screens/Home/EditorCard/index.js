import React, { memo } from "react";
import { useSelector } from "react-redux";
import { Card } from "../../../components/Card";
import { PlainTextEditor } from "../../../components/PlainTextEditor";
import { Draggable } from "react-beautiful-dnd";

const GRID = 8;
const CARD_DRAGGING_COLOR = "#1976d2";
const CARD_BACKGROUND_COLOR = "white";

/** Gets style for draggable item depending on item drag state
 * and droppable aria direction (vertical | horizontal)
 */
const getItemStyle = (isDragging, draggableStyle, isVertical) => ({
  userSelect: "none",
  padding: GRID * 2,
  margin: isVertical ? `0 0 ${GRID}px 0` : `0 ${GRID}px 0 0`,
  background: isDragging ? CARD_DRAGGING_COLOR : CARD_BACKGROUND_COLOR,
  minWidth: 200,
  maxWidth: 300,
  border: "1px solid rgb(216 216 216)",
  borderRadius: "10px",
  cursor: "pointer",
  ...draggableStyle,
});

const _EditorCard = ({ entityData, index }) => {
  const { isVertical } = useSelector((state) => state.viewType);
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
              isVertical
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
