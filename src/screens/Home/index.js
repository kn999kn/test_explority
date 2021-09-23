import React from "react";
import { EditorCard } from "../Home/EditorCard";
import { List } from "../../components/List";

const ItemsData = [
  {
    id: 1,
    value: [
      {
        type: "paragraph",
        children: [
          { text: "This is editable plain text, just like a <textarea>!" },
        ],
      },
    ],
  },
  {
    id: 2,
    value: [
      {
        type: "paragraph",
        children: [
          { text: "This is editable plain text, just like a <textarea>!" },
        ],
      },
    ],
  },
  {
    id: 3,
    value: [
      {
        type: "paragraph",
        children: [
          { text: "This is editable plain text, just like a <textarea>!" },
        ],
      },
    ],
  },
];

export const Home = () => {
  return (
    <List
      items={ItemsData}
      renderItem={(itemData) => (
        <EditorCard value={itemData.value} key={itemData.id} />
      )}
    />
  );
};
