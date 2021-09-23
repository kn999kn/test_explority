import React, { forwardRef } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { useSelector } from "react-redux";

const grid = 8;

// const getListStyle = (isDraggingOver) => ({
//   background: isDraggingOver ? "lightblue" : "lightgrey",
//   padding: grid,
//   width: 250,
// });

const getListStyle = (isDraggingOver, isHorizontal) => ({
  background: isDraggingOver ? "#def5fd" : "#f3f3f3",
  display: isHorizontal ? "block" : "flex",
  padding: grid,
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
