import React from "react";
import { EditorCard } from "../Home/EditorCard";
import { List } from "../../components/List";

const ItemsData = [
  [
    {
      type: "paragraph",
      children: [
        { text: "This is editable plain text, just like a <textarea>!" },
      ],
    },
  ],
  [
    {
      type: "paragraph",
      children: [
        { text: "This is editable plain text, just like a <textarea>!" },
      ],
    },
  ],
];

export const Home = () => {
  return (
    <List
      items={ItemsData}
      renderItem={(item, i) => <EditorCard item={item} key={i} />}
    />
  );
};
