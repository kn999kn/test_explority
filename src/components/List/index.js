import React from "react";
import { Droppable } from "react-beautiful-dnd";
import { useSelector } from "react-redux";

const GRID = 8;
const DRAGGING_OVER_COLOR = "#def5fd";
const BACKGROUND_COLOR = "#f3f3f3";

/** Gets droppable area styles depending on draggable element position
 *  and area direction (vertical | horizontal)
 */
const getListStyle = (isDraggingOver, isVertical) => ({
  background: isDraggingOver ? DRAGGING_OVER_COLOR : BACKGROUND_COLOR,
  display: isVertical ? "block" : "flex",
  padding: GRID,
  overflow: isVertical && "auto",
  width: isVertical ? 340 : "auto",
});

export const List = ({ items, renderItem }) => {
  const { isVertical } = useSelector((state) => state.viewType);

  return (
    <Droppable
      droppableId="droppable"
      direction={isVertical ? "vertical" : "horizontal"}
    >
      {(provided, snapshot) => (
        <div
          {...provided.droppableProps}
          ref={provided.innerRef}
          style={getListStyle(snapshot.isDraggingOver, isVertical)}
        >
          {items.map(renderItem)}
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  );
};
