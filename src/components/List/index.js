import React from "react";
import { Droppable } from "react-beautiful-dnd";
import { useSelector } from "react-redux";

const GRID = 8;
const DRAGGING_OVER_COLOR = "#def5fd";
const BACKGROUND_COLOR = "#f3f3f3";

const getListStyle = (isDraggingOver, isHorizontal) => ({
  background: isDraggingOver ? DRAGGING_OVER_COLOR : BACKGROUND_COLOR,
  display: isHorizontal ? "block" : "flex",
  padding: GRID,
  overflow: isHorizontal && "auto",
  width: isHorizontal ? 340 : "auto",
});

export const List = ({ items, renderItem }) => {
  const { isHorizontal } = useSelector((state) => state.viewType);

  return (
    <Droppable
      droppableId="droppable"
      direction={isHorizontal ? "vertical" : "horizontal"}
    >
      {(provided, snapshot) => (
        <div
          {...provided.droppableProps}
          ref={provided.innerRef}
          style={getListStyle(snapshot.isDraggingOver, isHorizontal)}
        >
          {items.map(renderItem)}
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  );
};
