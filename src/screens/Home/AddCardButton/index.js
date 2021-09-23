import React from "react";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { Button } from "@mui/material";
import { addEntity } from "../../../redux/editorsSlice";

export const AddCardButton = ({ title = "add card" }) => {
  const dispatch = useDispatch();
  return (
    <Button onClick={() => dispatch(addEntity({ id: uuidv4() }))}>
      {title}
    </Button>
  );
};
