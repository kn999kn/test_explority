import React from "react";
import { useSelector } from "react-redux";
import { EditorCard } from "../Home/EditorCard";
import { List } from "../../components/List";
import { AddCardButton } from "./AddCardButton";

export const Home = () => {
  const editors = useSelector((store) => store.editors);
  console.log("editors", editors);
  return (
    <>
      <AddCardButton />
      <List
        items={editors}
        renderItem={(entityData) => (
          <EditorCard entityData={entityData} key={entityData.id} />
        )}
      />
    </>
  );
};
