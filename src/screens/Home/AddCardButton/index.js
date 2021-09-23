import React from "react";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { Button } from "@mui/material";
import { addEntity } from "../../../redux/editorsSlice";

export const AddCardButton = ({ title = "+" }) => {
  const dispatch = useDispatch();
  return (
    <Button
      sx={{
        fontSize: "1.5rem",
        margin: "0 1rem",
      }}
      variant="contained"
      onClick={() => dispatch(addEntity({ id: uuidv4() }))}
    >
      {title}
    </Button>
  );
};
