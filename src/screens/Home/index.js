import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { EditorCard } from "../Home/EditorCard";
import { List } from "../../components/List";
import { AddCardButton } from "./AddCardButton";
import { ChangeViewButton } from "./ChangeViewButton";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { reorderEntities } from "../../redux/editorsSlice";

export const Home = () => {
  const editors = useSelector((store) => store.editors);
  const dispatch = useDispatch();

  const onDragEnd = (result) => {
    // dropped outside the list
    if (!result.destination) {
      return;
    }
    dispatch(
      reorderEntities({
        startIndex: result.source.index,
        endIndex: result.destination.index,
      })
    );
  };

  return (
    <>
      <AddCardButton />
      <ChangeViewButton />
      <DragDropContext onDragEnd={onDragEnd}>
        <List
          items={editors}
          renderItem={(entityData, index) => (
            <EditorCard
              entityData={entityData}
              key={entityData.id}
              index={index}
            />
          )}
        />
      </DragDropContext>
    </>
  );
};
