import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Box from "@mui/material/Box";
import { EditorCard } from "../Home/EditorCard";
import { List } from "../../components/List";
import { AddCardButton } from "./AddCardButton";
import { ChangeViewButton } from "./ChangeViewButton";
import { DragDropContext } from "react-beautiful-dnd";
import { reorderEntities } from "../../redux/editors/editorsSlice";

const styles = {
  homeWrapper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  buttonsWrapper: { margin: "1rem 0" },
};

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
    <Box sx={styles.homeWrapper}>
      <Box sx={styles.buttonsWrapper}>
        <AddCardButton />
        <ChangeViewButton />
      </Box>
      <Box>
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
      </Box>
    </Box>
  );
};
