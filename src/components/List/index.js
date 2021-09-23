import React from "react";
import { Card } from "../Card";

export const List = ({ items, renderItem }) => {
  return <div>{items.map(renderItem)}</div>;
};
