import React from "react";

export const List = ({ items, renderItem }) => {
  return <div>{items.map(renderItem)}</div>;
};
